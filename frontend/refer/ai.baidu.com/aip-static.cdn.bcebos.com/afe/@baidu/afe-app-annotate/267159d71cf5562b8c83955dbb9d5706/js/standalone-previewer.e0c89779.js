(window["webpackJsonpannotate"] = window["webpackJsonpannotate"] || []).push([
  ["standalone-previewer"],
  {
    "20b9": function (e, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return c;
      });
      var T = t("8bbf"),
        a = t.n(T),
        c = function (e) {
          return function (n) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [];
            return a.a.extend({
              functional: !0,
              render: function (T, a) {
                return T(n[a.props[e]] || t, a.data, a.children);
              },
            });
          };
        };
    },
    7715: function (e, n, t) {
      "use strict";
      t.r(n);
      t("d3b7");
      var T,
        a = t("ade3"),
        c = t("d736"),
        u = t("20b9"),
        p = function () {
          return t.e("chunk-65dea55a").then(t.bind(null, "9504"));
        },
        l = function () {
          return t.e("chunk-9efdac76").then(t.bind(null, "b9e2"));
        },
        b = function () {
          return t.e("chunk-753d4bb2").then(t.bind(null, "10d6"));
        },
        O = function () {
          return t.e("chunk-b02d3170").then(t.bind(null, "35d0"));
        },
        r = function () {
          return t.e("chunk-7adae4c8").then(t.bind(null, "2d8b"));
        },
        E = function () {
          return t.e("chunk-4b024db8").then(t.bind(null, "0c3d"));
        },
        i = function () {
          return t.e("chunk-ca6c76fc").then(t.bind(null, "d2d1c"));
        },
        _ = function () {
          return t.e("chunk-360cc55d").then(t.bind(null, "a215"));
        },
        d = function () {
          return t.e("chunk-17f68e58").then(t.bind(null, "b4ea"));
        };
      n["default"] = Object(u["a"])("templateType")(
        ((T = {}),
        Object(a["a"])(T, c["TemplateType"].TEXT_CLS, p),
        Object(a["a"])(T, c["TemplateType"].TEXT_CLS_MULTI, p),
        Object(a["a"])(T, c["TemplateType"].TEXT_CLS_ERNIE_DOC, p),
        Object(a["a"])(T, c["TemplateType"].TEXT_CLS_ERNIE_M, p),
        Object(a["a"])(T, c["TemplateType"].TEXT_QA, function () {
          return t.e("chunk-c66f90ee").then(t.bind(null, "7fae"));
        }),
        Object(a["a"])(T, c["TemplateType"].TEXT_NLG, function () {
          return t.e("chunk-769872c8").then(t.bind(null, "28de"));
        }),
        Object(a["a"])(T, c["TemplateType"].TEXT_SCORE, function () {
          return t.e("chunk-2329dac8").then(t.bind(null, "2496"));
        }),
        Object(a["a"])(T, c["TemplateType"].TEXT_SUMMARY, function () {
          return t.e("chunk-3ce01ef0").then(t.bind(null, "656f"));
        }),
        Object(a["a"])(T, c["TemplateType"].TEXT_RELEVANCE, function () {
          return t.e("chunk-273f4ef4").then(t.bind(null, "b791"));
        }),
        Object(a["a"])(T, c["TemplateType"].TEXT_SIM, l),
        Object(a["a"])(T, c["TemplateType"].TEXT_SEQ_IOB, b),
        Object(a["a"])(T, c["TemplateType"].TEXT_SEQ_IO, b),
        Object(a["a"])(T, c["TemplateType"].TEXT_SEQ_IOE, b),
        Object(a["a"])(T, c["TemplateType"].TEXT_SEQ_IOBES, b),
        Object(a["a"])(T, c["TemplateType"].TEXT_POS_LABELING, b),
        Object(a["a"])(T, c["TemplateType"].TEXT_ENTITY_EXTRACT, function () {
          return t.e("chunk-40f69d39").then(t.bind(null, "5428"));
        }),
        Object(a["a"])(T, c["TemplateType"].TEXT_RELATION_EXTRACT, O),
        Object(a["a"])(T, c["TemplateType"].TEXT_COMPOSE, O),
        Object(a["a"])(T, c["TemplateType"].ENTITY_SENTIMENT, function () {
          return t.e("chunk-44615f1a").then(t.bind(null, "a10a"));
        }),
        Object(a["a"])(T, c["TemplateType"].SENTIMENT, p),
        Object(a["a"])(T, c["TemplateType"].IMG_CLS, r),
        Object(a["a"])(T, c["TemplateType"].IMG_CLS_MULTI, r),
        Object(a["a"])(T, c["TemplateType"].OBJ_DCT_RECT, d),
        Object(a["a"])(T, c["TemplateType"].OBJ_DCT_QUAD, d),
        Object(a["a"])(T, c["TemplateType"].IMG_POINT, d),
        Object(a["a"])(T, c["TemplateType"].IMG_POLYLINE, d),
        Object(a["a"])(T, c["TemplateType"].IMG_CUBOID, d),
        Object(a["a"])(T, c["TemplateType"].IMG_COMPOSE, d),
        Object(a["a"])(T, c["TemplateType"].TRUCK_CLASSIFICATION, r),
        Object(a["a"])(T, c["TemplateType"].CAR_DETECTION, E),
        Object(a["a"])(T, c["TemplateType"].INSTANCE_SEGMENT, _),
        Object(a["a"])(T, c["TemplateType"].SEMANTIC_SEGMENT, _),
        Object(a["a"])(T, c["TemplateType"].OCR, E),
        Object(a["a"])(T, c["TemplateType"].UNSTRUCTURED_OCR, i),
        Object(a["a"])(T, c["TemplateType"].IMG_MIXED, d),
        Object(a["a"])(T, c["TemplateType"].SOUND_CLS, function () {
          return t.e("chunk-3ca14006").then(t.bind(null, "5033"));
        }),
        Object(a["a"])(T, c["TemplateType"].VIDEO_CLS, function () {
          return t.e("chunk-3ff46105").then(t.bind(null, "d6a7"));
        }),
        Object(a["a"])(T, c["TemplateType"].VIDEO_TRACKING, function () {
          return t.e("chunk-78bc968c").then(t.bind(null, "d14e"));
        }),
        Object(a["a"])(T, c["TemplateType"].TEXT_COMMENT, function () {
          return t.e("chunk-30df343e").then(t.bind(null, "ba63"));
        }),
        Object(a["a"])(T, c["TemplateType"].IMG_TEXT, r),
        Object(a["a"])(T, c["TemplateType"].VIDEO_OBJ_DCT, function () {
          return t.e("chunk-78bc968c").then(t.bind(null, "d14e"));
        }),
        T)
      );
    },
  },
]);
//# sourceMappingURL=standalone-previewer.e0c89779.js.map
