(window["webpackJsonpannotate"] = window["webpackJsonpannotate"] || []).push([
  ["standalone-workshop"],
  {
    2011: function (e, t, n) {
      "use strict";
      var o = n("7493"),
        a = n.n(o);
      a.a;
    },
    "20b9": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return T;
      });
      var o = n("8bbf"),
        a = n.n(o),
        T = function (e) {
          return function (t) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [];
            return a.a.extend({
              functional: !0,
              render: function (o, a) {
                return o(t[a.props[e]] || n, a.data, a.children);
              },
            });
          };
        };
    },
    "24cf": function (e, t, n) {
      "use strict";
      n.r(t);
      n("d3b7");
      var o = n("ade3"),
        a = n("20b9"),
        T = n("d736"),
        p = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "not-supported" },
            [
              n(
                "the-empty-placeholder",
                [
                  n("template", { slot: "top" }, [
                    e._v(e._s(e.$t("not-supported"))),
                  ]),
                  n(
                    "template",
                    { slot: "bottom" },
                    [
                      n(
                        "the-link",
                        {
                          on: {
                            click: function (t) {
                              return e.$emit("reset");
                            },
                          },
                        },
                        [e._v(e._s(e.$t("choose-other")))]
                      ),
                    ],
                    1
                  ),
                ],
                2
              ),
            ],
            1
          );
        },
        r = [],
        c = {},
        u = c,
        l = (n("2011"), n("2877")),
        i = n("b05c"),
        b = Object(l["a"])(u, p, r, !1, null, "0e2d80db", null);
      "function" === typeof i["default"] && Object(i["default"])(b);
      var s,
        d = b.exports,
        h = function () {
          return n.e("chunk-5e65edad").then(n.bind(null, "fe31"));
        },
        O = function () {
          return n.e("chunk-eb0a683c").then(n.bind(null, "0b03"));
        },
        f = function () {
          return n.e("workshop-img-cls").then(n.bind(null, "5666"));
        },
        _ = function () {
          return n.e("workshop-img-cls-multi").then(n.bind(null, "f38e"));
        },
        m = function () {
          return n.e("workshop-text-cls").then(n.bind(null, "fd8e"));
        },
        E = function () {
          return n.e("workshop-text-sim").then(n.bind(null, "436c"));
        },
        j = function () {
          return n.e("workshop-video-cls").then(n.bind(null, "c780"));
        },
        y = function () {
          return n.e("workshop-sound-cls").then(n.bind(null, "2d67"));
        },
        I = function () {
          return n.e("workshop-obj-dct").then(n.bind(null, "8bba"));
        },
        k = function () {
          return n.e("workshop-video-tracking").then(n.bind(null, "603d"));
        },
        C = function () {
          return n.e("workshop-text-qa").then(n.bind(null, "6025"));
        },
        w = function () {
          return n.e("workshop-text-es").then(n.bind(null, "c9fa"));
        },
        M = function () {
          return n.e("workshop-text-nlg").then(n.bind(null, "9248"));
        },
        S = function () {
          return n.e("workshop-text-score").then(n.bind(null, "f85b"));
        },
        N = function () {
          return n.e("workshop-unstructured-ocr").then(n.bind(null, "5848"));
        },
        v = function () {
          return n.e("workshop-text-summary").then(n.bind(null, "e290"));
        },
        X = function () {
          return n.e("workshop-text-relevance").then(n.bind(null, "a93a"));
        },
        x = function () {
          return n.e("workshop-text-comments").then(n.bind(null, "c590"));
        },
        L = function () {
          return n.e("workshop-multi-img-text").then(n.bind(null, "1be3"));
        },
        R = function () {
          return n.e("workshop-time-series").then(n.bind(null, "2587"));
        },
        D = function () {
          return n.e("workshop-video-obj-dct").then(n.bind(null, "0748"));
        };
      t["default"] = Object(a["a"])("templateType")(
        ((s = {}),
        Object(o["a"])(s, T["TemplateType"].IMG_CLS, f),
        Object(o["a"])(s, T["TemplateType"].IMG_CLS_MULTI, _),
        Object(o["a"])(s, T["TemplateType"].OBJ_DCT_RECT, I),
        Object(o["a"])(s, T["TemplateType"].OBJ_DCT_QUAD, I),
        Object(o["a"])(s, T["TemplateType"].INSTANCE_SEGMENT, I),
        Object(o["a"])(s, T["TemplateType"].SEMANTIC_SEGMENT, I),
        Object(o["a"])(s, T["TemplateType"].IMG_POINT, I),
        Object(o["a"])(s, T["TemplateType"].IMG_POLYLINE, I),
        Object(o["a"])(s, T["TemplateType"].IMG_CUBOID, I),
        Object(o["a"])(s, T["TemplateType"].IMG_COMPOSE, I),
        Object(o["a"])(s, T["TemplateType"].IMG_MIXED, I),
        Object(o["a"])(s, T["TemplateType"].TEXT_CLS, m),
        Object(o["a"])(s, T["TemplateType"].TEXT_CLS_MULTI, function () {
          return n.e("chunk-01904d4a").then(n.bind(null, "3473"));
        }),
        Object(o["a"])(s, T["TemplateType"].TEXT_CLS_ERNIE_DOC, m),
        Object(o["a"])(s, T["TemplateType"].TEXT_CLS_ERNIE_M, m),
        Object(o["a"])(s, T["TemplateType"].TEXT_ENTITY_EXTRACT, h),
        Object(o["a"])(s, T["TemplateType"].TEXT_RELATION_EXTRACT, O),
        Object(o["a"])(s, T["TemplateType"].SENTIMENT, function () {
          return n.e("chunk-6b1297a4").then(n.bind(null, "11ec"));
        }),
        Object(o["a"])(s, T["TemplateType"].TEXT_SIM, E),
        Object(o["a"])(s, T["TemplateType"].SOUND_CLS, y),
        Object(o["a"])(s, T["TemplateType"].VIDEO_CLS, j),
        Object(o["a"])(s, T["TemplateType"].VIDEO_TRACKING, k),
        Object(o["a"])(s, T["TemplateType"].VIDEO_OBJ_DCT, D),
        Object(o["a"])(s, T["TemplateType"].OCR, I),
        Object(o["a"])(s, T["TemplateType"].TEXT_QA, C),
        Object(o["a"])(s, T["TemplateType"].TEXT_NLG, M),
        Object(o["a"])(s, T["TemplateType"].TEXT_SCORE, S),
        Object(o["a"])(s, T["TemplateType"].TEXT_COMMENT, x),
        Object(o["a"])(s, T["TemplateType"].ENTITY_SENTIMENT, w),
        Object(o["a"])(s, T["TemplateType"].UNSTRUCTURED_OCR, N),
        Object(o["a"])(s, T["TemplateType"].TEXT_SUMMARY, v),
        Object(o["a"])(s, T["TemplateType"].TEXT_RELEVANCE, X),
        Object(o["a"])(s, T["TemplateType"].TEXT_COMPOSE, O),
        Object(o["a"])(s, T["TemplateType"].IMG_TEXT, L),
        Object(o["a"])(s, T["TemplateType"].TIME_SERIES, R),
        s),
        d
      );
    },
    7493: function (e, t, n) {
      var o = n("ba63e");
      "string" === typeof o && (o = [[e.i, o, ""]]),
        o.locals && (e.exports = o.locals);
      var a = n("499e").default;
      a("f7404df8", o, !0, { sourceMap: !1, shadowMode: !1 });
    },
    aa6b: function (e, t) {
      e.exports = function (e) {
        (e.options.__i18n = e.options.__i18n || []),
          e.options.__i18n.push(
            '{"not-supported":"平台暂不支持当前数据集模板的在线标注","choose-other":"选择其他数据集"}'
          ),
          delete e.options._Ctor;
      };
    },
    b05c: function (e, t, n) {
      "use strict";
      var o = n("aa6b"),
        a = n.n(o);
      t["default"] = a.a;
    },
    ba63e: function (e, t, n) {
      var o = n("24fb");
      (t = o(!1)),
        t.push([
          e.i,
          ".not-supported[data-v-0e2d80db]{padding-top:72px!important}",
          "",
        ]),
        (e.exports = t);
    },
  },
]);
//# sourceMappingURL=standalone-workshop.a17be95d.js.map
