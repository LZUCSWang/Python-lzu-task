from typing import List, Dict, Any, Optional

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


def login(account: str, passwd: str) -> str:
    """
    return token if success
    if failed, return empty string
    """
    token = ""
    return token


def get_datasets(token: str) -> List[Dict[str, List]]:
    """
    return a list of datasets
    a dataset is a dict with keys:
    - id
    - name
    - created_time
    - updated_time
    """
    datasets = []
    return datasets


def get_dataset(token: str, dataset_id: str) -> List[Dict[str, Any]]:
    """
    return a list of data
    a data is a dict with keys:
    - id
    - name
    - created_time
    - class
    - path
    """
    data = []
    return data


def creat_dataset(token: str, dataset_name: str) -> str:
    """
    return id
    if failed, return empty string
    """
    return True


def delete_dataset(token: str, dataset_id: str) -> bool:
    """
    return success or not
    """
    return True


def rename_dataset(token: str, dataset_id: str, new_name: str) -> bool:
    """
    return success or not
    """
    return True


def upload_data(token: str, dataset_id: str, data: List) -> bool:
    """
    return success or not
    """
    return True


def delete_data(token: str, dataset_id: str, data_id: List[str]) -> bool:
    """
    return success or not
    """
    return True
