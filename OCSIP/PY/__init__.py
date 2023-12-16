import datetime
from typing import List, Dict, Any, Optional, ByteString, Tuple
from uuid import uuid4
from hashlib import md5
from warnings import warn
from json import dumps, loads
# from ai import predict
import os
import shutil
import time
import sqlite3
__all__ = [
    "login",
    "get_datasets",
    "get_dataset",
    "creat_dataset",
    "delete_dataset",
    "rename_dataset",
    "upload_data",
    "delete_data",
]
import onnxruntime as ort
from PIL import Image
import numpy as np
import time

import glob
from collections import Counter

__all__ = ["predict"]


options = ort.SessionOptions()


if False:
    providers = [
        (
            "CANNExecutionProvider",
            {
                "device_id": 0,
                "op_select_impl_mode": "high_performance",
                "optypelist_for_implmode": "Gelu",
                "enable_cann_graph": True,
            },
        ),
        "CPUExecutionProvider",
    ]
else:
    providers = ["CPUExecutionProvider"]
models = [
    ort.InferenceSession(i, providers=providers)
    for i in glob.glob("static/models/onnx/*.onnx")
]

labels = ["CC", "EC", "HGSC", "LGSC", "MC"]


def predict(img):
    img = Image.open(img).convert("RGB")
    x, y = img.size
    # center crop 2048x2048
    img = img.crop((x // 2 - 1024, y // 2 - 1024,
                   x // 2 + 1024, y // 2 + 1024))
    # resize to 1024x1024
    img = img.resize((1024, 1024), Image.BILINEAR)
    # normalize mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]
    img = np.asarray(img).astype(np.float16)
    img = img.transpose(2, 0, 1)
    img = (img - img.mean(2, keepdims=True)) / img.std(2, keepdims=True)
    img = img * np.array([[[0.229]], [[0.224]], [[0.225]]]) + np.array(
        [[[0.485]], [[0.456]], [[0.406]]]
    )
    # add batch dimension
    img = img[np.newaxis, :, :, :].astype(np.float16)
    # inference
    preds = [model.run(None, {"input.1": img})[0] for model in models]
    preds = Counter([i.argmax() for i in preds])
    preds = labels[preds.most_common(1)[0][0]]
    # print(preds.most_common(1))
    return preds


def _load_json(path: str) -> Optional[Dict[str, Any]]:
    try:
        with open(path, "r") as f:
            return loads(f.read())
    except Exception as e:
        warn(e)
        return None


def _error(default):
    def __(f):
        def _(*args, **kwargs):
            try:
                f(*args, **kwargs)
            except KeyError:
                return default
            except Exception as e:
                warn(e)
                return default

        return _

    return __


def _error(default):
    def __(f):
        return f

    return __


def _dump_json(path: str, data: Dict[str, Any]) -> bool:
    try:
        with open(path, "w") as f:
            f.write(dumps(data))
        return True
    except Exception as e:
        warn(e)
        return False


token2account = {}

def ftoken2account(token):
    return token2account[token]
# def freshtoken2account():
#     global token2account
#     token2account = {}
#     accounts = _load_json("static/data/accounts.json")
#     for username in accounts:
#         token = accounts[username]
#         token2account[token] = username


@_error("")
def login(account: str, passwd: str) -> str:
    """
    return token if success
    if failed, return empty string
    """
    passwd += "lolita"  # 加盐

    conn = sqlite3.connect('db.sqlite3')
    c = conn.cursor()
    c.execute(f"SELECT username, password_md5 FROM account")
    data = dict(c.fetchall())
    conn.close()
    if account in data:
        if data[account] == md5(passwd.encode()).hexdigest():
            token = uuid4().hex
            token2account[token] = account
            return token
        else:
            return ""
    else:
        conn = sqlite3.connect('db.sqlite3')
        c = conn.cursor()
        c.execute(f"INSERT INTO account (username, password_md5) VALUES (?, ?)",
                  (account, md5(passwd.encode()).hexdigest()))
        conn.commit()
        conn.close()
        token = uuid4().hex
        token2account[token] = account
        print(token2account)
        # _dump_json(f"static/data/datasets/{account}.json", {})
        # os.mkdir(f"static/data/datasets/{account}")
        return token


@_error([])
def get_datasets(token: str) -> Dict[str, Dict[str, int | str]]:
    """
    return a dict of datasets
    key: id
    value: a dict with keys:
    - name
    - created_time
    - updated_time
    {id: {name: str, created_time: int, updated_time: int}}
    """
    # freshtoken2account()
    account = token2account[token]
    print(token2account[token])
    conn = sqlite3.connect('db.sqlite3')
    c = conn.cursor()
    c.execute(
        f"SELECT * FROM datasets WHERE account_id = (SELECT id FROM account WHERE username = ?)", (account,))
    rows = c.fetchall()
    conn.close()
    data = {}
    for row in rows:
        data[row[1]] = {
            "name": row[2],
            "created_time": row[3],
            "updated_time": row[4]
        }
    return data


@_error([])
def get_dataset(token: str, dataset_id: str) -> Dict[str, Dict[str, int | str]]:
    """
    return a dict of data
    key: id
    value: a dict with keys:
    - name
    - created_time
    - class
    - path
    """
    # freshtoken2account()
    print(token2account)
    account = token2account[token]
    conn = sqlite3.connect('db.sqlite3')
    c = conn.cursor()
    c.execute(f"SELECT * FROM datasets WHERE dataset_id = ? AND (SELECT id FROM datasets WHERE account_id = (SELECT id FROM account WHERE username = ?))", (dataset_id, account,))
    rows = c.fetchall()
    conn.close()
    data = {}
    for row in rows:
        data[row[1]] = {
            "name": row[2],
            "created_time": row[3],
            "class": row[4],
            "path": row[5]
        }
    return data


@_error("")
def creat_dataset(token: str, dataset_name: str) -> str:
    """
    return id
    if failed, return empty string
    """
    id = uuid4().hex
    name = dataset_name
    created_time = updated_time = time.strftime(
        "%Y-%m-%d %H:%M:%S", time.localtime())
    # freshtoken2account()
    account = token2account[token]
    conn = sqlite3.connect('db.sqlite3')
    c = conn.cursor()
    c.execute("INSERT INTO datasets (dataset_id, dataset_name, dataset_created_time, dataset_updated_time, account_id) VALUES (?, ?, ?, ?, (SELECT id FROM account WHERE username = ?))",
              (id, name, created_time, updated_time, account,))
    conn.commit()
    conn.close()
    # _dump_json(
    #     f"static/data/datasets/{account}/{id}.json",
    #     {},
    # )
    return id


@_error(False)
def delete_dataset(token: str, dataset_id: str) -> bool:
    """
    return success or not
    """
    # freshtoken2account()
    account = token2account[token]
    conn = sqlite3.connect('db.sqlite3')
    c = conn.cursor()
    c.execute("SELECT * FROM datasets WHERE dataset_id = ? AND account = (SELECT id FROM account WHERE username = ?)", (dataset_id, account,))
    rows = c.fetchall()
    if len(rows) == 0:
        return False
    c.execute("DELETE FROM datasets WHERE dataset_id = ? AND account = (SELECT id FROM account WHERE username = ?)", (dataset_id, account,))
    conn.commit()
    conn.close()
    return True


@_error(False)
def rename_dataset(token: str, dataset_id: str, new_name: str) -> bool:
    """
    return success or not
    """
    # freshtoken2account()
    account = token2account[token]
    conn = sqlite3.connect('db.sqlite3')
    c = conn.cursor()
    c.execute("SELECT * FROM datasets WHERE dataset_id = ? AND account = (SELECT id FROM account WHERE username = ?)", (dataset_id, account,))
    rows = c.fetchall()
    if len(rows) == 0:
        return False
    updated_time = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
    c.execute("UPDATE datasets SET dataset_name = ?, dataset_updated_time = ? WHERE dataset_id = ? AND account = (SELECT id FROM account WHERE username = ?)",
              (new_name, updated_time, dataset_id, account,))
    conn.commit()
    conn.close()
    return True


@_error([])
def upload_data(
    token: str, dataset_id: str, imgs: List[Tuple[str, ByteString]]
) -> Dict[str, Dict[str, int | str]]:
    """
    input:
    - token
    - dataset_id
    - imgs: a list of (name, data)
    return a dict of data
    key: id
    val: a data, is a dict with keys:
    - name
    - created_time
    - class
    - path
    """
    # freshtoken2account()
    account = token2account[token]
    conn = sqlite3.connect('db.sqlite3')
    c = conn.cursor()
    for name, img in imgs:
        id = uuid4().hex
        created_time = updated_time = time.strftime(
            "%Y-%m-%d %H:%M:%S", time.localtime())
        path = f"static/data/pictures/{id}.{name.split('.')[-1]}"
        with open(path, "wb") as f:
            f.write(img)
        c.execute("INSERT INTO dataset (data_id, data_name, data_created_time, data_class, data_path, dataset_id) VALUES (?, ?, ?, ?, ?, (SELECT id FROM datasets WHERE dataset_id = ?))",
                  (id, name, created_time, predict(path), path, dataset_id,))
    conn.commit()
    conn.close()
    return True


@_error(False)
def delete_data(token: str, dataset_id: str, data_id: str) -> bool:
    """
    return success or not
    """
    # freshtoken2account()
    account = token2account[token]
    data = _load_json(f"static/data/datasets/{account}/{dataset_id}.json")
    if data_id not in data:
        return False
    os.remove(data[data_id]["path"])
    del data[data_id]
    _dump_json(f"static/data/datasets/{account}/{dataset_id}.json", data)
    return True


def json2sqlite():
    # data = _load_json("static/data/accounts.json")
    accounts = _load_json(
        "static\data\\accounts.json")
    for username in accounts:
        # print(username)
        password = accounts[username]
        token2account[password] = username
        # print(token)
        datasets = get_datasets(password)
        # print(datasets)
        for dataset_id in datasets:
            # print(dataset_id)
            dataset_name = datasets[dataset_id]["name"]
            created_time = datasets[dataset_id]["created_time"]
            # updated_time = datasets[dataset_id]["updated_time"]
            updated_time = datasets[dataset_id]["updated_time"]
            data = get_dataset(token=password, dataset_id=dataset_id)
            # print(data)
            for data_id in data:
                # print(data_id)
                data_name = data[data_id]["name"]
                # data_created_time = data[data_id]["created_time"]
                data_created_time = data[data_id]["created_time"]
                data_class = data[data_id]["class"]
                data_path = data[data_id]["path"]

                print(username, password, dataset_name, created_time,
                      updated_time, data_name, data_created_time, data_class, data_path)
                import sqlite3
                conn = sqlite3.connect('db.sqlite3')

                c = conn.cursor()
                # c.execute(f"""insert or replace into home_data (username, token, dataset_name, dataset_created_time, dataset_updated_time, img_name, img_created_time, img_class, img_show) VALUES ('{username}', '{token}', '{dataset_name}', '{created_time}', '{updated_time}', '{data_name}', '{data_created_time}', '{data_class}', '{data_path}');
                # insert or ignore into home_data (username, token, dataset_name, dataset_created_time, dataset_updated_time, img_name, img_created_time, img_class, img_show) VALUES ('{username}', '{token}', '{dataset_name}', '{created_time}', '{updated_time}', '{data_name}', '{data_created_time}', '{data_class}', '{data_path}');
                # IF NOT EXISTS(SELECT * FROM home_data  WHERE ….) THEN INSERT INTO ... ELSE UPDATE SET ...""")
                c.execute(
                    f"INSERT OR IGNORE INTO home_data (username, password_md5,dataset_id, dataset_name, dataset_created_time, dataset_updated_time,img_id, img_name, img_created_time, img_class, img_show) VALUES ('{username}', '{password}', '{dataset_id}','{dataset_name}', '{created_time}', '{updated_time}', '{data_id}','{data_name}', '{data_created_time}', '{data_class}', '{data_path}')")
                c.execute(
                    "DELETE FROM home_data WHERE rowid NOT IN (SELECT MIN(rowid) FROM home_data GROUP BY img_show, username, dataset_id)")
                conn.commit()
                conn.close()


def sqlite2json():
    import sqlite3
    conn = sqlite3.connect('db.sqlite3')
    c = conn.cursor()
    c.execute("SELECT * FROM home_data")
    data = c.fetchall()
    conn.close()
    print(data)
    for line in data:
        len1, username, token, dataset_name, dataset_created_time, dataset_updated_time, img_name, img_created_time, img_class, img_show, dataset_id, img_id = line
        import json
        import os
        if not os.path.exists('static/data/accounts.json'):
            with open('static/data/accounts.json', 'w') as f:
                json.dump({}, f)
        with open('static/data/accounts.json', 'r') as f:
            accounts = json.load(f)
        accounts[username] = token
        with open('static/data/accounts.json', 'w') as f:
            json.dump(accounts, f)
        if not os.path.exists(f'static/data/datasets/{username}.json'):
            with open(f'static/data/datasets/{username}.json', 'w') as f:
                json.dump({}, f)
        with open(f'static/data/datasets/{username}.json', 'r') as f:
            datasets = json.load(f)
        datasets[dataset_id] = {
            'name': dataset_name,
            'created_time': dataset_created_time,
            'updated_time': dataset_updated_time
        }
        with open(f'static/data/datasets/{username}.json', 'w') as f:
            json.dump(datasets, f)
        if not os.path.exists(f'static/data/datasets/{username}/{dataset_id}.json'):
            with open(f'static/data/datasets/{username}/{dataset_id}.json', 'w') as f:
                json.dump({}, f)
        with open(f'static/data/datasets/{username}/{dataset_id}.json', 'r') as f:
            dataset_data = json.load(f)
        dataset_data[img_id] = {
            'name': img_name,
            'created_time': img_created_time,
            'class': img_class,
            'path': img_show
        }
        with open(f'static/data/datasets/{username}/{dataset_id}.json', 'w') as f:
            json.dump(dataset_data, f)
    return data
    pass


def clear_data(clearpic=True, clearsqlite=True):
    import os
    import shutil
    import json
    import sqlite3
    if clearsqlite:
        conn = sqlite3.connect('db.sqlite3')
        c = conn.cursor()
        c.execute("DELETE FROM account")
        c.execute("DELETE FROM datasets")
        c.execute("DELETE FROM dataset")
        conn.commit()
        conn.close()
    folder = 'static/data/datasets'
    for filename in os.listdir(folder):
        file_path = os.path.join(folder, filename)
        try:
            if os.path.isfile(file_path) or os.path.islink(file_path):
                os.unlink(file_path)
            elif os.path.isdir(file_path):
                shutil.rmtree(file_path)
        except Exception as e:
            print('Failed to delete %s. Reason: %s' % (file_path, e))
    if clearpic:
        folder = 'static/data/pictures'
        for filename in os.listdir(folder):
            file_path = os.path.join(folder, filename)
            try:
                if os.path.isfile(file_path) or os.path.islink(file_path):
                    os.unlink(file_path)
                elif os.path.isdir(file_path):
                    shutil.rmtree(file_path)
            except Exception as e:
                print('Failed to delete %s. Reason: %s' % (file_path, e))

    with open('static/data/accounts.json', 'w') as f:
        json.dump({}, f)


if __name__ == "__main__":
    # test
    # account = "test"
    # password = "aaa"
    # token = login(account, password)
    # print("login:", token)
    # did = creat_dataset(token, "bbb")
    # print("creat_dataset:", did)
    # rename = rename_dataset(token, did, "ccc")
    # print("rename_dataset:", rename)
    # with open("9200.png", "rb") as f:
    #     data = f.read()
    # data = upload_data(token, did, [("9200.png", data)])
    # print("upload_data:", data)
    # data = get_datasets(token)
    # print("get_datasets:", data)
    # data = get_dataset(token, did)
    # print("get_dataset:", data)
    # delete = delete_data(token, did, list(data.keys())[0])
    # print("delete_data:", delete)
    # data = get_dataset(token, did)
    # print("get_dataset:", data)
    # delete = delete_dataset(token, did)
    # print("delete_dataset:", delete)
    # data = get_datasets(token)
    # print("get_datasets:", data)
    # json2sqlite()
    # sqlite2json()
    clear_data()
    pass
