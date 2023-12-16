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
    for i in glob.glob("models/onnx/*.onnx")
]
labels = ["CC", "EC", "HGSC", "LGSC", "MC"]


def predict(img):
    img = Image.open(img).convert("RGB")
    x, y = img.size
    # center crop 2048x2048
    img = img.crop((x // 2 - 1024, y // 2 - 1024, x // 2 + 1024, y // 2 + 1024))
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
    return preds


if __name__ == "__main__":
    st = time.time()
    print(predict("9200.png"))
    print(time.time() - st)
