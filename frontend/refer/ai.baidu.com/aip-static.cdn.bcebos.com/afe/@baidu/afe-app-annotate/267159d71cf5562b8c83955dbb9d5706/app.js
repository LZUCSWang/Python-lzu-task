(function (t, e) {
  if ("object" === typeof exports && "object" === typeof module)
    module.exports = e(
      require("@baidu/data-share"),
      require("@baidu/afe-utils"),
      require("@vue/composition-api"),
      require("@baidu/afe-i18n"),
      require("vue"),
      require("@baidu/afe-easycom"),
      require("@baidu/afe-request"),
      require("@baidu/tianzhi-ui")
    );
  else if ("function" === typeof define && define.amd)
    define([
      "@baidu/data-share",
      "@baidu/afe-utils",
      "@vue/composition-api",
      "@baidu/afe-i18n",
      "vue",
      "@baidu/afe-easycom",
      "@baidu/afe-request",
      "@baidu/tianzhi-ui",
    ], e);
  else {
    var n =
      "object" === typeof exports
        ? e(
            require("@baidu/data-share"),
            require("@baidu/afe-utils"),
            require("@vue/composition-api"),
            require("@baidu/afe-i18n"),
            require("vue"),
            require("@baidu/afe-easycom"),
            require("@baidu/afe-request"),
            require("@baidu/tianzhi-ui")
          )
        : e(
            t["@baidu/data-share"],
            t["@baidu/afe-utils"],
            t["@vue/composition-api"],
            t["@baidu/afe-i18n"],
            t["vue"],
            t["@baidu/afe-easycom"],
            t["@baidu/afe-request"],
            t["@baidu/tianzhi-ui"]
          );
    for (var r in n) ("object" === typeof exports ? exports : t)[r] = n[r];
  }
})(window, function (t, e, n, r, i, a, o, c) {
  return (function (t) {
    function e(e) {
      for (var n, i, a = e[0], o = e[1], c = 0, u = []; c < a.length; c++)
        (i = a[c]),
          Object.prototype.hasOwnProperty.call(r, i) && r[i] && u.push(r[i][0]),
          (r[i] = 0);
      for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
      l && l(e);
      while (u.length) u.shift()();
    }
    var n = {},
      r = { app: 0 };
    function i(t) {
      return (
        a.p +
        "js/" +
        ({
          "interactive-annotate": "interactive-annotate",
          "interactive-annotate-booting": "interactive-annotate-booting",
          "interactive-annotate-create": "interactive-annotate-create",
          "lite-annotate": "lite-annotate",
          "pro-annotate": "pro-annotate",
          "standalone-keyboard": "standalone-keyboard",
          "standalone-previewer": "standalone-previewer",
          "standalone-workshop": "standalone-workshop",
          "workshop-multi-img-text": "workshop-multi-img-text",
          "workshop-sound-cls": "workshop-sound-cls",
          "workshop-text-comments": "workshop-text-comments",
          "workshop-video-cls": "workshop-video-cls",
          "workshop-video-obj-dct": "workshop-video-obj-dct",
          "workshop-video-tracking": "workshop-video-tracking",
          "workshop-img-cls": "workshop-img-cls",
          "workshop-img-cls-multi": "workshop-img-cls-multi",
          "workshop-obj-dct": "workshop-obj-dct",
          "workshop-text-cls": "workshop-text-cls",
          "workshop-text-es": "workshop-text-es",
          "workshop-text-nlg": "workshop-text-nlg",
          "workshop-text-qa": "workshop-text-qa",
          "workshop-text-relevance": "workshop-text-relevance",
          "workshop-text-score": "workshop-text-score",
          "workshop-text-sim": "workshop-text-sim",
          "workshop-text-summary": "workshop-text-summary",
          "workshop-time-series": "workshop-time-series",
          "workshop-unstructured-ocr": "workshop-unstructured-ocr",
        }[t] || t) +
        "." +
        {
          "interactive-annotate": "27560545",
          "interactive-annotate-booting": "6e9702b8",
          "interactive-annotate-create": "29b39800",
          "lite-annotate": "5c615404",
          "pro-annotate": "30fda60f",
          "standalone-keyboard": "79af476d",
          "standalone-previewer": "e0c89779",
          "standalone-workshop": "a17be95d",
          "chunk-2582e9d6": "acaa532a",
          "chunk-34d39fda": "7c953635",
          "chunk-3a20e3a8": "1a038a53",
          "chunk-449c45ef": "0c9870d5",
          "chunk-4d91c967": "bb2323e1",
          "chunk-56b6e1fa": "6b43251e",
          "chunk-58c837c7": "59991a55",
          "chunk-64ec9452": "64ac44b2",
          "chunk-86a298a2": "ee7f49ea",
          "chunk-d6970fbc": "683e4486",
          "chunk-daf86f28": "02dea66f",
          "workshop-multi-img-text": "47e4c14a",
          "workshop-sound-cls": "68cad192",
          "workshop-text-comments": "90a42a4a",
          "workshop-video-cls": "4bf286aa",
          "workshop-video-obj-dct": "19ac0fda",
          "workshop-video-tracking": "db1b3925",
          "chunk-17f68e58": "b4e487bc",
          "chunk-2329dac8": "29c51de2",
          "chunk-273f4ef4": "c952c3cb",
          "chunk-30df343e": "8d7116dd",
          "chunk-360cc55d": "0107fa31",
          "chunk-3ca14006": "732fc774",
          "chunk-3ce01ef0": "20c94bbc",
          "chunk-3ff46105": "2d594004",
          "chunk-40f69d39": "526dae30",
          "chunk-44615f1a": "4d506b5a",
          "chunk-4b024db8": "ab573a1c",
          "chunk-65dea55a": "1c6f5e23",
          "chunk-753d4bb2": "d63ed865",
          "chunk-769872c8": "d6080edc",
          "chunk-78bc968c": "c26197af",
          "chunk-7adae4c8": "aaa93c2b",
          "chunk-9efdac76": "2f35814b",
          "chunk-b02d3170": "d6e8527e",
          "chunk-c66f90ee": "cb443e5e",
          "chunk-ca6c76fc": "e41ca7c5",
          "chunk-01904d4a": "b3cde5ef",
          "chunk-5e65edad": "9696d046",
          "chunk-6b1297a4": "5c9a2819",
          "chunk-eb0a683c": "e4dd4992",
          "workshop-img-cls": "b5241119",
          "workshop-img-cls-multi": "36f91ccf",
          "workshop-obj-dct": "51798cdf",
          "workshop-text-cls": "96459f56",
          "workshop-text-es": "851fde45",
          "workshop-text-nlg": "ecd107f3",
          "workshop-text-qa": "245ea8ed",
          "workshop-text-relevance": "7a98b5cd",
          "workshop-text-score": "04d86c9e",
          "workshop-text-sim": "6ba211cd",
          "workshop-text-summary": "25fcbd60",
          "workshop-time-series": "40a93f0f",
          "workshop-unstructured-ocr": "c1b1bb4c",
        }[t] +
        ".js"
      );
    }
    function a(e) {
      if (n[e]) return n[e].exports;
      var r = (n[e] = { i: e, l: !1, exports: {} });
      return t[e].call(r.exports, r, r.exports, a), (r.l = !0), r.exports;
    }
    (a.e = function (t) {
      var e = [],
        n = r[t];
      if (0 !== n)
        if (n) e.push(n[2]);
        else {
          var o = new Promise(function (e, i) {
            n = r[t] = [e, i];
          });
          e.push((n[2] = o));
          var c,
            u = document.createElement("script");
          (u.charset = "utf-8"),
            (u.timeout = 120),
            a.nc && u.setAttribute("nonce", a.nc),
            (u.src = i(t));
          var l = new Error();
          c = function (e) {
            (u.onerror = u.onload = null), clearTimeout(s);
            var n = r[t];
            if (0 !== n) {
              if (n) {
                var i = e && ("load" === e.type ? "missing" : e.type),
                  a = e && e.target && e.target.src;
                (l.message =
                  "Loading chunk " + t + " failed.\n(" + i + ": " + a + ")"),
                  (l.name = "ChunkLoadError"),
                  (l.type = i),
                  (l.request = a),
                  n[1](l);
              }
              r[t] = void 0;
            }
          };
          var s = setTimeout(function () {
            c({ type: "timeout", target: u });
          }, 12e4);
          (u.onerror = u.onload = c), document.head.appendChild(u);
        }
      return Promise.all(e);
    }),
      (a.m = t),
      (a.c = n),
      (a.d = function (t, e, n) {
        a.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
      }),
      (a.r = function (t) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (a.t = function (t, e) {
        if ((1 & e && (t = a(t)), 8 & e)) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (
          (a.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var r in t)
            a.d(
              n,
              r,
              function (e) {
                return t[e];
              }.bind(null, r)
            );
        return n;
      }),
      (a.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t["default"];
              }
            : function () {
                return t;
              };
        return a.d(e, "a", e), e;
      }),
      (a.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (a.p = "/"),
      (a.oe = function (t) {
        throw (console.error(t), t);
      });
    var o = (window["webpackJsonpannotate"] =
        window["webpackJsonpannotate"] || []),
      c = o.push.bind(o);
    (o.push = e), (o = o.slice());
    for (var u = 0; u < o.length; u++) e(o[u]);
    var l = c;
    return a((a.s = 0));
  })({
    0: function (t, e, n) {
      t.exports = n("cd49");
    },
    "00ab": function (t, e, n) {
      "use strict";
      var r;
      (function (t) {
        t[(t["LABEL_INVALID_NAME"] = 6001)] = "LABEL_INVALID_NAME";
      })(r || (r = {}));
    },
    "00ee": function (t, e, n) {
      var r = n("b622"),
        i = r("toStringTag"),
        a = {};
      (a[i] = "z"), (t.exports = "[object z]" === String(a));
    },
    "00fd": function (t, e, n) {
      var r = n("9e69"),
        i = Object.prototype,
        a = i.hasOwnProperty,
        o = i.toString,
        c = r ? r.toStringTag : void 0;
      function u(t) {
        var e = a.call(t, c),
          n = t[c];
        try {
          t[c] = void 0;
          var r = !0;
        } catch (u) {}
        var i = o.call(t);
        return r && (e ? (t[c] = n) : delete t[c]), i;
      }
      t.exports = u;
    },
    "013e": function (t, e, n) {
      var r = n("8924");
      "string" === typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
      var i = n("499e").default;
      i("00610440", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "0325": function (t, e, n) {
      "use strict";
      var r = n("5dab"),
        i = n.n(r);
      i.a;
    },
    "0366": function (t, e, n) {
      var r = n("1c0b");
      t.exports = function (t, e, n) {
        if ((r(t), void 0 === e)) return t;
        switch (n) {
          case 0:
            return function () {
              return t.call(e);
            };
          case 1:
            return function (n) {
              return t.call(e, n);
            };
          case 2:
            return function (n, r) {
              return t.call(e, n, r);
            };
          case 3:
            return function (n, r, i) {
              return t.call(e, n, r, i);
            };
        }
        return function () {
          return t.apply(e, arguments);
        };
      };
    },
    "03a3": function (t, e) {},
    "0538": function (t, e, n) {
      "use strict";
      var r = n("1c0b"),
        i = n("861d"),
        a = [].slice,
        o = {},
        c = function (t, e, n) {
          if (!(e in o)) {
            for (var r = [], i = 0; i < e; i++) r[i] = "a[" + i + "]";
            o[e] = Function("C,a", "return new C(" + r.join(",") + ")");
          }
          return o[e](t, n);
        };
      t.exports =
        Function.bind ||
        function (t) {
          var e = r(this),
            n = a.call(arguments, 1),
            o = function () {
              var r = n.concat(a.call(arguments));
              return this instanceof o ? c(e, r.length, r) : e.apply(t, r);
            };
          return i(e.prototype) && (o.prototype = e.prototype), o;
        };
    },
    "057f": function (t, e, n) {
      var r = n("fc6a"),
        i = n("241c").f,
        a = {}.toString,
        o =
          "object" == typeof window && window && Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : [],
        c = function (t) {
          try {
            return i(t);
          } catch (e) {
            return o.slice();
          }
        };
      t.exports.f = function (t) {
        return o && "[object Window]" == a.call(t) ? c(t) : i(r(t));
      };
    },
    "05c0": function (t, e) {},
    "05da": function (t, e, n) {
      "use strict";
      n("4160"), n("d3b7"), n("159b"), n("96cf"), n("1da1");
    },
    "066e": function (t, e, n) {
      var r = n("24fb");
      (e = r(!1)),
        e.push([
          t.i,
          ".pcr-app .pcr-interaction .pcr-save{background:#1a73e8}.pcr-app .pcr-interaction .pcr-cancel{background:#fff;border:1px solid #d6d6d6;color:#000}",
          "",
        ]),
        (t.exports = e);
    },
    "0676": function (t, e) {
      function n() {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      t.exports = n;
    },
    "06c5": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      n("a630"), n("fb6a"), n("b0c0"), n("d3b7"), n("25f0"), n("3ca3");
      var r = n("6b75");
      function i(t, e) {
        if (t) {
          if ("string" === typeof t) return Object(r["a"])(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? Object(r["a"])(t, e)
              : void 0
          );
        }
      }
    },
    "06cf": function (t, e, n) {
      var r = n("83ab"),
        i = n("d1e7"),
        a = n("5c6c"),
        o = n("fc6a"),
        c = n("c04e"),
        u = n("5135"),
        l = n("0cfb"),
        s = Object.getOwnPropertyDescriptor;
      e.f = r
        ? s
        : function (t, e) {
            if (((t = o(t)), (e = c(e, !0)), l))
              try {
                return s(t, e);
              } catch (n) {}
            if (u(t, e)) return a(!i.f.call(t, e), t[e]);
          };
    },
    "074e": function (t, e, n) {
      var r = n("159b2");
      "string" === typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
      var i = n("499e").default;
      i("bb53f0ae", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "093b": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return c;
      });
      var r = n("5530"),
        i = n("c7a3"),
        a = n("5007"),
        o = n("adac"),
        c = function (t, e) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : { dontPanic: !1 },
            c = "function" === typeof e ? o["c"] : e.request,
            u = "function" === typeof e ? e : e.response;
          return function (e) {
            var o = c(e);
            return Object(a["map"])(i["caller"].send(t, o, n), function (t) {
              return t.success
                ? Object(r["a"])(
                    Object(r["a"])({}, t),
                    {},
                    { result: u(t.result, e) }
                  )
                : t;
            });
          };
        };
    },
    "099a": function (t, e) {
      function n(t, e, n) {
        var r = n - 1,
          i = t.length;
        while (++r < i) if (t[r] === e) return r;
        return -1;
      }
      t.exports = n;
    },
    "0c47": function (t, e, n) {
      var r = n("da84"),
        i = n("d44e");
      i(r.JSON, "JSON", !0);
    },
    "0ccb": function (t, e, n) {
      var r = n("50c4"),
        i = n("1148"),
        a = n("1d80"),
        o = Math.ceil,
        c = function (t) {
          return function (e, n, c) {
            var u,
              l,
              s = String(a(e)),
              f = s.length,
              p = void 0 === c ? " " : String(c),
              d = r(n);
            return d <= f || "" == p
              ? s
              : ((u = d - f),
                (l = i.call(p, o(u / p.length))),
                l.length > u && (l = l.slice(0, u)),
                t ? s + l : l + s);
          };
        };
      t.exports = { start: c(!1), end: c(!0) };
    },
    "0cfb": function (t, e, n) {
      var r = n("83ab"),
        i = n("d039"),
        a = n("cc12");
      t.exports =
        !r &&
        !i(function () {
          return (
            7 !=
            Object.defineProperty(a("div"), "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        });
    },
    "0d3b": function (t, e, n) {
      var r = n("d039"),
        i = n("b622"),
        a = n("c430"),
        o = i("iterator");
      t.exports = !r(function () {
        var t = new URL("b?a=1&b=2&c=3", "http://a"),
          e = t.searchParams,
          n = "";
        return (
          (t.pathname = "c%20d"),
          e.forEach(function (t, r) {
            e["delete"]("b"), (n += r + t);
          }),
          (a && !t.toJSON) ||
            !e.sort ||
            "http://a/c%20d?a=1&c=3" !== t.href ||
            "3" !== e.get("c") ||
            "a=1" !== String(new URLSearchParams("?a=1")) ||
            !e[o] ||
            "a" !== new URL("https://a@b").username ||
            "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") ||
            "xn--e1aybc" !== new URL("http://тест").host ||
            "#%D0%B1" !== new URL("http://a#б").hash ||
            "a1c3" !== n ||
            "x" !== new URL("http://x", void 0).host
        );
      });
    },
    "0fc0": function (t, e, n) {
      var r = n("24fb");
      (e = r(!1)),
        e.push([
          t.i,
          ".content-editer[data-v-ea571a28]{display:flex;flex-direction:row}.content-editer .editer-input[data-v-ea571a28]{flex:1;padding:10px;border:1px solid #ddd;border-radius:0;word-break:break-all;min-height:42px}.content-editer .editer-input[data-v-ea571a28]:focus,.content-editer .editer-input[data-v-ea571a28]:hover{outline:none;border-color:#108cee}.content-editer .editer-icons[data-v-ea571a28]{display:flex;flex-direction:row;align-items:center}.content-editer .editer-icons .editer-icon[data-v-ea571a28]{font-size:14px}.content-editer .editer-icons .editer-icon.icon-save[data-v-ea571a28]{color:#108cee;margin:0 10px}",
          "",
        ]),
        (t.exports = e);
    },
    1115: function (t, e, n) {
      t.exports = n.p + "img/arrow.07f3d3b5.svg";
    },
    1148: function (t, e, n) {
      "use strict";
      var r = n("a691"),
        i = n("1d80");
      t.exports =
        "".repeat ||
        function (t) {
          var e = String(i(this)),
            n = "",
            a = r(t);
          if (a < 0 || a == 1 / 0)
            throw RangeError("Wrong number of repetitions");
          for (; a > 0; (a >>>= 1) && (e += e)) 1 & a && (n += e);
          return n;
        };
    },
    "11a1": function (t, e, n) {
      "use strict";
      var r = n("df08"),
        i = n.n(r);
      i.a;
    },
    "11b0": function (t, e, n) {
      function r(t) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t))
          return Array.from(t);
      }
      n("a4d3"),
        n("e01a"),
        n("d28b"),
        n("a630"),
        n("d3b7"),
        n("3ca3"),
        n("ddb0"),
        (t.exports = r);
    },
    "126d": function (t, e, n) {
      var r = n("6da8"),
        i = n("aaec"),
        a = n("d094");
      function o(t) {
        return i(t) ? a(t) : r(t);
      }
      t.exports = o;
    },
    1276: function (t, e, n) {
      "use strict";
      var r = n("d784"),
        i = n("44e7"),
        a = n("825a"),
        o = n("1d80"),
        c = n("4840"),
        u = n("8aa5"),
        l = n("50c4"),
        s = n("14c3"),
        f = n("9263"),
        p = n("d039"),
        d = [].push,
        h = Math.min,
        v = 4294967295,
        b = !p(function () {
          return !RegExp(v, "y");
        });
      r(
        "split",
        2,
        function (t, e, n) {
          var r;
          return (
            (r =
              "c" == "abbc".split(/(b)*/)[1] ||
              4 != "test".split(/(?:)/, -1).length ||
              2 != "ab".split(/(?:ab)*/).length ||
              4 != ".".split(/(.?)(.?)/).length ||
              ".".split(/()()/).length > 1 ||
              "".split(/.?/).length
                ? function (t, n) {
                    var r = String(o(this)),
                      a = void 0 === n ? v : n >>> 0;
                    if (0 === a) return [];
                    if (void 0 === t) return [r];
                    if (!i(t)) return e.call(r, t, a);
                    var c,
                      u,
                      l,
                      s = [],
                      p =
                        (t.ignoreCase ? "i" : "") +
                        (t.multiline ? "m" : "") +
                        (t.unicode ? "u" : "") +
                        (t.sticky ? "y" : ""),
                      h = 0,
                      b = new RegExp(t.source, p + "g");
                    while ((c = f.call(b, r))) {
                      if (
                        ((u = b.lastIndex),
                        u > h &&
                          (s.push(r.slice(h, c.index)),
                          c.length > 1 &&
                            c.index < r.length &&
                            d.apply(s, c.slice(1)),
                          (l = c[0].length),
                          (h = u),
                          s.length >= a))
                      )
                        break;
                      b.lastIndex === c.index && b.lastIndex++;
                    }
                    return (
                      h === r.length
                        ? (!l && b.test("")) || s.push("")
                        : s.push(r.slice(h)),
                      s.length > a ? s.slice(0, a) : s
                    );
                  }
                : "0".split(void 0, 0).length
                ? function (t, n) {
                    return void 0 === t && 0 === n ? [] : e.call(this, t, n);
                  }
                : e),
            [
              function (e, n) {
                var i = o(this),
                  a = void 0 == e ? void 0 : e[t];
                return void 0 !== a ? a.call(e, i, n) : r.call(String(i), e, n);
              },
              function (t, i) {
                var o = n(r, t, this, i, r !== e);
                if (o.done) return o.value;
                var f = a(t),
                  p = String(this),
                  d = c(f, RegExp),
                  m = f.unicode,
                  g =
                    (f.ignoreCase ? "i" : "") +
                    (f.multiline ? "m" : "") +
                    (f.unicode ? "u" : "") +
                    (b ? "y" : "g"),
                  y = new d(b ? f : "^(?:" + f.source + ")", g),
                  _ = void 0 === i ? v : i >>> 0;
                if (0 === _) return [];
                if (0 === p.length) return null === s(y, p) ? [p] : [];
                var w = 0,
                  x = 0,
                  O = [];
                while (x < p.length) {
                  y.lastIndex = b ? x : 0;
                  var T,
                    E = s(y, b ? p : p.slice(x));
                  if (
                    null === E ||
                    (T = h(l(y.lastIndex + (b ? 0 : x)), p.length)) === w
                  )
                    x = u(p, x, m);
                  else {
                    if ((O.push(p.slice(w, x)), O.length === _)) return O;
                    for (var k = 1; k <= E.length - 1; k++)
                      if ((O.push(E[k]), O.length === _)) return O;
                    x = w = T;
                  }
                }
                return O.push(p.slice(w)), O;
              },
            ]
          );
        },
        !b
      );
    },
    1310: function (t, e) {
      function n(t) {
        return null != t && "object" == typeof t;
      }
      t.exports = n;
    },
    "13d5": function (t, e, n) {
      "use strict";
      var r = n("23e7"),
        i = n("d58f").left,
        a = n("a640"),
        o = n("ae40"),
        c = a("reduce"),
        u = o("reduce", { 1: 0 });
      r(
        { target: "Array", proto: !0, forced: !c || !u },
        {
          reduce: function (t) {
            return i(
              this,
              t,
              arguments.length,
              arguments.length > 1 ? arguments[1] : void 0
            );
          },
        }
      );
    },
    1481: function (t, e, n) {
      var r = n("24fb");
      (e = r(!1)),
        e.push([
          t.i,
          ".annotate-codename-handwork-layout[data-v-3540e5af]  .workspace,.app-annotate-handwork-layout[data-v-3540e5af]  .workspace{display:flex;flex-direction:column}.annotate-codename-handwork-layout[data-v-3540e5af]  .workspace .workspace-main,.app-annotate-handwork-layout[data-v-3540e5af]  .workspace .workspace-main{flex:1}.annotate-codename-handwork-layout[data-v-3540e5af]  .workspace .workspace-main .afe-app-annotate,.app-annotate-handwork-layout[data-v-3540e5af]  .workspace .workspace-main .afe-app-annotate{height:100%}",
          "",
        ]),
        (t.exports = e);
    },
    "14c3": function (t, e, n) {
      var r = n("c6b6"),
        i = n("9263");
      t.exports = function (t, e) {
        var n = t.exec;
        if ("function" === typeof n) {
          var a = n.call(t, e);
          if ("object" !== typeof a)
            throw TypeError(
              "RegExp exec method returned something other than an Object or null"
            );
          return a;
        }
        if ("RegExp" !== r(t))
          throw TypeError("RegExp#exec called on incompatible receiver");
        return i.call(t, e);
      };
    },
    "159b": function (t, e, n) {
      var r = n("da84"),
        i = n("fdbc"),
        a = n("17c2"),
        o = n("9112");
      for (var c in i) {
        var u = r[c],
          l = u && u.prototype;
        if (l && l.forEach !== a)
          try {
            o(l, "forEach", a);
          } catch (s) {
            l.forEach = a;
          }
      }
    },
    "159b2": function (t, e, n) {
      var r = n("24fb");
      (e = r(!1)),
        e.push([
          t.i,
          ".label-color[data-v-61a54a3c]{display:flex;height:30px;line-height:30px;border:1px solid var(--cxd-blue);border-right:0;padding:0 10px}.label-color[data-v-61a54a3c]  .pickr{display:flex;align-items:center;margin-right:9px}.label-color[data-v-61a54a3c]  .pickr>button{width:12px;height:12px}.label-color[data-v-61a54a3c]  .pickr>button,.label-color[data-v-61a54a3c]  .pickr>button:after,.label-color[data-v-61a54a3c]  .pickr>button:before{border-radius:0}.label-color .arrow[data-v-61a54a3c]{display:inline-block;transition:.3s;transform:rotate(180deg);width:9px;min-width:auto}.label-color.open .arrow[data-v-61a54a3c]{transform:rotate(0deg)}",
          "",
        ]),
        (t.exports = e);
    },
    "17b3": function (t, e, n) {
      var r = n("89ad");
      "string" === typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
      var i = n("499e").default;
      i("2da96799", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "17c2": function (t, e, n) {
      "use strict";
      var r = n("b727").forEach,
        i = n("a640"),
        a = n("ae40"),
        o = i("forEach"),
        c = a("forEach");
      t.exports =
        o && c
          ? [].forEach
          : function (t) {
              return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
            };
    },
    "18b4": function (t, e, n) {
      var r = n("066e");
      "string" === typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
      var i = n("499e").default;
      i("2fe71ae6", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "18fb": function (t, e, n) {
      "use strict";
      var r = n("7b1c"),
        i = n.n(r);
      i.a;
    },
    1947: function (t, e, n) {
      "use strict";
      var r = n("013e"),
        i = n.n(r);
      i.a;
    },
    "19aa": function (t, e) {
      t.exports = function (t, e, n) {
        if (!(t instanceof e))
          throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
        return t;
      };
    },
    "1a71": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return a;
      });
      var r,
        i = n("3b13");
      (function (t) {
        (t[(t["ALL"] = 0)] = "ALL"),
          (t[(t["VIS"] = 1)] = "VIS"),
          (t[(t["NLP"] = 2)] = "NLP"),
          (t[(t["ML"] = 3)] = "ML"),
          (t[(t["SOUND"] = 4)] = "SOUND"),
          (t[(t["VIDEO"] = 5)] = "VIDEO"),
          (t[(t["NOTEBOOK"] = 6)] = "NOTEBOOK"),
          (t[(t["VQA"] = 7)] = "VQA"),
          (t[(t["TEXT_CUSTOM"] = 98)] = "TEXT_CUSTOM"),
          (t[(t["CUSTOM"] = 99)] = "CUSTOM"),
          (t[(t["RETAIL"] = 100)] = "RETAIL");
      })(r || (r = {}));
      i["a"].IMG_CLS,
        r.VIS,
        i["a"].OBJ_DCT,
        r.VIS,
        i["a"].OCR,
        r.VIS,
        i["a"].CAR_DETECTION,
        r.VIS,
        i["a"].TRUCK_CLASSIFICATION,
        r.VIS,
        i["a"].IMG_POINT,
        r.VIS,
        i["a"].IMG_POLYLINE,
        r.VIS,
        i["a"].IMG_CUBOID,
        r.VIS,
        i["a"].IMG_COMPOSE,
        r.VIS,
        i["a"].IMG_MIXED,
        r.VIS,
        i["a"].SOUND_CLS,
        r.SOUND,
        i["a"].TEXT_CLS,
        r.NLP,
        i["a"].VIDEO_CLS,
        r.VIDEO,
        i["a"].SEGMENT,
        r.VIS,
        i["a"].TEXT_SIM,
        r.NLP,
        i["a"].TEXT_SEQ,
        r.NLP,
        i["a"].TEXT_POS_LABELING,
        r.NLP,
        i["a"].SENTIMENT,
        r.NLP,
        i["a"].TEXT_ENTITY_EXTRACT,
        r.NLP,
        i["a"].TEXT_RELATION_EXTRACT,
        r.NLP,
        i["a"].TEXT_COMMENT,
        r.NLP,
        i["a"].VIDEO_TRACKING,
        r.VIDEO,
        i["a"].VIDEO_OBJ_DCT,
        r.VIDEO,
        i["a"].CUSTOM,
        r.NOTEBOOK,
        i["a"].TEXT_CUSTOM,
        r.NOTEBOOK,
        i["a"].TEXT_ERINE3,
        r.NOTEBOOK,
        i["a"].PADDLE_COMPONENT,
        r.NOTEBOOK,
        i["a"].ML,
        r.ML,
        i["a"].TIME_SERIES_FORECAST,
        r.ML,
        i["a"].TIME_SERIES,
        r.ML,
        i["a"].RETAIL,
        r.RETAIL,
        i["a"].TEXT_QA,
        r.NLP,
        i["a"].TEXT_SCORE,
        r.NLP,
        i["a"].TEXT_NLG,
        r.NLP,
        i["a"].TEXT_COMMENT,
        r.NLP,
        i["a"].TEXT_SUMMARY,
        r.NLP,
        i["a"].TEXT_COMPOSE,
        r.NLP,
        i["a"].TEXT_RELEVANCE,
        r.NLP,
        i["a"].RETAIL_DD,
        r.RETAIL,
        i["a"].ELC_FORECAST,
        r.ML,
        i["a"].IMG_TEXT,
        r.VQA;
      const a = (t) => {
        const e = [
          i["b"].RETAIL,
          i["b"].CUSTOM,
          i["b"].TEXT_CUSTOM,
          i["b"].TEXT_ERINE3,
          i["b"].PADDLE_COMPONENT,
          i["b"].CAR_DETECTION,
          i["b"].TRUCK_CLASSIFICATION,
          i["b"].IMG_TEXT,
        ].includes(t)
          ? 10
          : 100;
        return Math.floor(t / e);
      };
    },
    "1aa8": function (t, e, n) {
      var r = n("aecc");
      "string" === typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
      var i = n("499e").default;
      i("0307789e", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "1be4": function (t, e, n) {
      var r = n("d066");
      t.exports = r("document", "documentElement");
    },
    "1c0b": function (t, e) {
      t.exports = function (t) {
        if ("function" != typeof t)
          throw TypeError(String(t) + " is not a function");
        return t;
      };
    },
    "1c7e": function (t, e, n) {
      var r = n("b622"),
        i = r("iterator"),
        a = !1;
      try {
        var o = 0,
          c = {
            next: function () {
              return { done: !!o++ };
            },
            return: function () {
              a = !0;
            },
          };
        (c[i] = function () {
          return this;
        }),
          Array.from(c, function () {
            throw 2;
          });
      } catch (u) {}
      t.exports = function (t, e) {
        if (!e && !a) return !1;
        var n = !1;
        try {
          var r = {};
          (r[i] = function () {
            return {
              next: function () {
                return { done: (n = !0) };
              },
            };
          }),
            t(r);
        } catch (u) {}
        return n;
      };
    },
    "1cdc": function (t, e, n) {
      var r = n("342f");
      t.exports = /(iphone|ipod|ipad).*applewebkit/i.test(r);
    },
    "1d80": function (t, e) {
      t.exports = function (t) {
        if (void 0 == t) throw TypeError("Can't call method on " + t);
        return t;
      };
    },
    "1da1": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      n("d3b7");
      function r(t, e, n, r, i, a, o) {
        try {
          var c = t[a](o),
            u = c.value;
        } catch (l) {
          return void n(l);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, i);
      }
      function i(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (i, a) {
            var o = t.apply(e, n);
            function c(t) {
              r(o, i, a, c, u, "next", t);
            }
            function u(t) {
              r(o, i, a, c, u, "throw", t);
            }
            c(void 0);
          });
        };
      }
    },
    "1db4": function (t, e) {
      t.exports = function (t) {
        (t.options.__i18n = t.options.__i18n || []),
          t.options.__i18n.push(
            '{"stop-title":"确认删除关系标签?","stop-tip":"关系标签删除后，文本中已标注的关系将同步删除，是否确认删除？","comfirm":"确认","cancel":"取消"}'
          ),
          delete t.options._Ctor;
      };
    },
    "1dde": function (t, e, n) {
      var r = n("d039"),
        i = n("b622"),
        a = n("2d00"),
        o = i("species");
      t.exports = function (t) {
        return (
          a >= 51 ||
          !r(function () {
            var e = [],
              n = (e.constructor = {});
            return (
              (n[o] = function () {
                return { foo: 1 };
              }),
              1 !== e[t](Boolean).foo
            );
          })
        );
      };
    },
    "21bc": function (t, e, n) {
      "use strict";
      n.d(e, "c", function () {
        return o;
      }),
        n.d(e, "b", function () {
          return c;
        }),
        n.d(e, "a", function () {
          return u;
        });
      n("7db0"), n("caad"), n("2532"), n("96cf");
      var r = n("1da1");
      function i() {
        return a.apply(this, arguments);
      }
      function a() {
        return (
          (a = Object(r["a"])(
            regeneratorRuntime.mark(function t() {
              var e;
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2), System.import("@baidu/afe-app-dataset")
                      );
                    case 2:
                      return (
                        (e = t.sent),
                        t.abrupt("return", {
                          services: e.useService(),
                          enums: e.enums,
                          LabelPicker: e.LabelPicker,
                          useLabelPicker: e.useLabelPicker,
                        })
                      );
                    case 4:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )),
          a.apply(this, arguments)
        );
      }
      var o = (function () {
          var t = Object(r["a"])(
            regeneratorRuntime.mark(function t(e) {
              var n, r, a, o, c, u, l;
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), i();
                    case 2:
                      if (
                        ((n = t.sent),
                        (r = n.enums),
                        (a = r.EDataType),
                        (o = r.EProjectType),
                        (c = a.getItemById(a.IMAGE)),
                        e)
                      ) {
                        t.next = 7;
                        break;
                      }
                      return t.abrupt("return", c);
                    case 7:
                      if (
                        ((u = o.toArray().find(function (t) {
                          return t.templateType.includes(e);
                        })),
                        u)
                      ) {
                        t.next = 10;
                        break;
                      }
                      return t.abrupt("return", c);
                    case 10:
                      if (
                        ((l = a.toArray().find(function (t) {
                          return t.projectType.includes(u.id);
                        })),
                        l)
                      ) {
                        t.next = 13;
                        break;
                      }
                      return t.abrupt("return", c);
                    case 13:
                      return t.abrupt("return", a.getItemById(l.id));
                    case 14:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
        c = (function () {
          var t = Object(r["a"])(
            regeneratorRuntime.mark(function t(e) {
              var n, r, a, o, c, u, l, s;
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), i();
                    case 2:
                      return (
                        (n = t.sent),
                        (r = n.enums),
                        (a = r.EDataType),
                        (o = r.EProjectType),
                        (c = r.ETemplateType),
                        (u = c.getItemById(e || c.IMG_CLS)),
                        (l = o.toArray().find(function (t) {
                          return t.templateType.includes(
                            (null === u || void 0 === u ? void 0 : u.id) ||
                              c.IMG_CLS
                          );
                        })),
                        (s = a.toArray().find(function (t) {
                          return t.projectType.includes(
                            (null === l || void 0 === l ? void 0 : l.id) ||
                              o.IMG_CLS
                          );
                        })),
                        t.abrupt("return", [s, l, u])
                      );
                    case 8:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
        u = function () {
          return {
            dataTypes: window.SP["DATASET_AVAILABLE_DATA_TYPE"],
            templateTypes: window.SP["DATASET_AVAILABLE_TEMPLATE_TYPE"],
            projectTypes: window.SP["DATASET_AVAILABLE_PROJECT_TYPE"],
          };
        };
    },
    2236: function (t, e, n) {
      var r = n("5a43");
      function i(t) {
        if (Array.isArray(t)) return r(t);
      }
      t.exports = i;
    },
    2266: function (t, e, n) {
      var r = n("825a"),
        i = n("e95a"),
        a = n("50c4"),
        o = n("0366"),
        c = n("35a1"),
        u = n("9bdd"),
        l = function (t, e) {
          (this.stopped = t), (this.result = e);
        },
        s = (t.exports = function (t, e, n, s, f) {
          var p,
            d,
            h,
            v,
            b,
            m,
            g,
            y = o(e, n, s ? 2 : 1);
          if (f) p = t;
          else {
            if (((d = c(t)), "function" != typeof d))
              throw TypeError("Target is not iterable");
            if (i(d)) {
              for (h = 0, v = a(t.length); v > h; h++)
                if (
                  ((b = s ? y(r((g = t[h]))[0], g[1]) : y(t[h])),
                  b && b instanceof l)
                )
                  return b;
              return new l(!1);
            }
            p = d.call(t);
          }
          m = p.next;
          while (!(g = m.call(p)).done)
            if (
              ((b = u(p, y, g.value, s)),
              "object" == typeof b && b && b instanceof l)
            )
              return b;
          return new l(!1);
        });
      s.stop = function (t) {
        return new l(!0, t);
      };
    },
    "229b": function (t, e, n) {
      var r = n("24fb");
      (e = r(!1)),
        e.push([
          t.i,
          ".ocr-label-item[data-v-1b957081]{position:relative;border:1px solid #eee;margin-top:12px;cursor:pointer}.ocr-label-item .ocr-label_colorblock[data-v-1b957081]{position:absolute;left:0;width:5px;top:0;bottom:0}.ocr-label-item_title[data-v-1b957081]{padding:10px 20px;display:flex;flex-direction:row}.ocr-label-item_title .orc-label-name[data-v-1b957081]{flex:1;font-size:14px;color:#000;line-height:22px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ocr-label-item_title .ocr-label-opts[data-v-1b957081]{display:none}.ocr-label-item:hover .ocr-label-item_title .ocr-label-opts[data-v-1b957081]{display:block}.ocr-label-item .ocr-content[data-v-1b957081]{padding:10px 20px;font-size:12px;line-height:20px}.ocr-label-item .ocr-content[data-v-1b957081]:not(.ocr-content-editing):hover{color:var(--cxd-blue);background-color:#f6f6f6}.ocr-label-item .ocr-content:not(.ocr-content-editing):hover .ocr-content-item .ocr-content-ops[data-v-1b957081]{display:initial;line-height:16px}.ocr-label-item .ocr-content:not(.ocr-content-editing):hover .ocr-content-item .ocr-content-ops[data-v-1b957081]  .s-icon{top:0}.ocr-label-item .ocr-content .ocr-content-item[data-v-1b957081]{display:flex}.ocr-label-item .ocr-content .ocr-content-item .ocr-content-txt[data-v-1b957081]{flex:1;word-break:break-all}.ocr-label-item .ocr-content .ocr-content-item .ocr-content-ops[data-v-1b957081]{color:#666;display:none}.ocr-label-item .ocr-content .ocr-content-item .ocr-content-ops .ocr-content-trash[data-v-1b957081]{margin-left:15px;font-size:14px}.ocr-label-item .ocr-content[data-v-1b957081]  .inline-editor>span{margin-left:0}",
          "",
        ]),
        (t.exports = e);
    },
    "22f5": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      }),
        n.d(e, "b", function () {
          return i;
        });
      var r = function (t, e) {
          var n = t.result,
            r = t.cancel;
          return { result: n.then(e), cancel: r };
        },
        i = function (t, e) {
          var n = r(t, e),
            i = n.result;
          return i;
        };
    },
    "23cb": function (t, e, n) {
      var r = n("a691"),
        i = Math.max,
        a = Math.min;
      t.exports = function (t, e) {
        var n = r(t);
        return n < 0 ? i(n + e, 0) : a(n, e);
      };
    },
    "23dc": function (t, e, n) {
      var r = n("d44e");
      r(Math, "Math", !0);
    },
    "23e7": function (t, e, n) {
      var r = n("da84"),
        i = n("06cf").f,
        a = n("9112"),
        o = n("6eeb"),
        c = n("ce4e"),
        u = n("e893"),
        l = n("94ca");
      t.exports = function (t, e) {
        var n,
          s,
          f,
          p,
          d,
          h,
          v = t.target,
          b = t.global,
          m = t.stat;
        if (((s = b ? r : m ? r[v] || c(v, {}) : (r[v] || {}).prototype), s))
          for (f in e) {
            if (
              ((d = e[f]),
              t.noTargetGet ? ((h = i(s, f)), (p = h && h.value)) : (p = s[f]),
              (n = l(b ? f : v + (m ? "." : "#") + f, t.forced)),
              !n && void 0 !== p)
            ) {
              if (typeof d === typeof p) continue;
              u(d, p);
            }
            (t.sham || (p && p.sham)) && a(d, "sham", !0), o(s, f, d, t);
          }
      };
    },
    "241c": function (t, e, n) {
      var r = n("ca84"),
        i = n("7839"),
        a = i.concat("length", "prototype");
      e.f =
        Object.getOwnPropertyNames ||
        function (t) {
          return r(t, a);
        };
    },
    "24fb": function (t, e, n) {
      "use strict";
      function r(t, e) {
        var n = t[1] || "",
          r = t[3];
        if (!r) return n;
        if (e && "function" === typeof btoa) {
          var a = i(r),
            o = r.sources.map(function (t) {
              return "/*# sourceURL="
                .concat(r.sourceRoot || "")
                .concat(t, " */");
            });
          return [n].concat(o).concat([a]).join("\n");
        }
        return [n].join("\n");
      }
      function i(t) {
        var e = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
          n =
            "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
              e
            );
        return "/*# ".concat(n, " */");
      }
      t.exports = function (t) {
        var e = [];
        return (
          (e.toString = function () {
            return this.map(function (e) {
              var n = r(e, t);
              return e[2] ? "@media ".concat(e[2], " {").concat(n, "}") : n;
            }).join("");
          }),
          (e.i = function (t, n, r) {
            "string" === typeof t && (t = [[null, t, ""]]);
            var i = {};
            if (r)
              for (var a = 0; a < this.length; a++) {
                var o = this[a][0];
                null != o && (i[o] = !0);
              }
            for (var c = 0; c < t.length; c++) {
              var u = [].concat(t[c]);
              (r && i[u[0]]) ||
                (n &&
                  (u[2]
                    ? (u[2] = "".concat(n, " and ").concat(u[2]))
                    : (u[2] = n)),
                e.push(u));
            }
          }),
          e
        );
      };
    },
    2509: function (t, e, n) {
      var r = n("24fb");
      (e = r(!1)),
        e.push([
          t.i,
          ".pcr-app .pcr-interaction .pcr-save{background:#1a73e8}.pcr-app .pcr-interaction .pcr-cancel{background:#fff;border:1px solid #d6d6d6;color:#000}",
          "",
        ]),
        (t.exports = e);
    },
    2532: function (t, e, n) {
      "use strict";
      var r = n("23e7"),
        i = n("5a34"),
        a = n("1d80"),
        o = n("ab13");
      r(
        { target: "String", proto: !0, forced: !o("includes") },
        {
          includes: function (t) {
            return !!~String(a(this)).indexOf(
              i(t),
              arguments.length > 1 ? arguments[1] : void 0
            );
          },
        }
      );
    },
    "257e": function (t, e, n) {
      "use strict";
      function r(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    "25f0": function (t, e, n) {
      "use strict";
      var r = n("6eeb"),
        i = n("825a"),
        a = n("d039"),
        o = n("ad6d"),
        c = "toString",
        u = RegExp.prototype,
        l = u[c],
        s = a(function () {
          return "/a/b" != l.call({ source: "a", flags: "b" });
        }),
        f = l.name != c;
      (s || f) &&
        r(
          RegExp.prototype,
          c,
          function () {
            var t = i(this),
              e = String(t.source),
              n = t.flags,
              r = String(
                void 0 === n && t instanceof RegExp && !("flags" in u)
                  ? o.call(t)
                  : n
              );
            return "/" + e + "/" + r;
          },
          { unsafe: !0 }
        );
    },
    2626: function (t, e, n) {
      "use strict";
      var r = n("d066"),
        i = n("9bf2"),
        a = n("b622"),
        o = n("83ab"),
        c = a("species");
      t.exports = function (t) {
        var e = r(t),
          n = i.f;
        o &&
          e &&
          !e[c] &&
          n(e, c, {
            configurable: !0,
            get: function () {
              return this;
            },
          });
      };
    },
    "262e": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var r = n("b380");
      function i(t, e) {
        if ("function" !== typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && Object(r["a"])(t, e);
      }
    },
    "278c": function (t, e, n) {
      var r = n("c135"),
        i = n("9b42"),
        a = n("6613"),
        o = n("c240");
      function c(t, e) {
        return r(t) || i(t, e) || a(t, e) || o();
      }
      t.exports = c;
    },
    "280d": function (t, e, n) {
      var r = n("229b");
      "string" === typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
      var i = n("499e").default;
      i("507f6730", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    2841: function (e, n) {
      e.exports = t;
    },
    2877: function (t, e, n) {
      "use strict";
      function r(t, e, n, r, i, a, o, c) {
        var u,
          l = "function" === typeof t ? t.options : t;
        if (
          (e && ((l.render = e), (l.staticRenderFns = n), (l._compiled = !0)),
          r && (l.functional = !0),
          a && (l._scopeId = "data-v-" + a),
          o
            ? ((u = function (t) {
                (t =
                  t ||
                  (this.$vnode && this.$vnode.ssrContext) ||
                  (this.parent &&
                    this.parent.$vnode &&
                    this.parent.$vnode.ssrContext)),
                  t ||
                    "undefined" === typeof __VUE_SSR_CONTEXT__ ||
                    (t = __VUE_SSR_CONTEXT__),
                  i && i.call(this, t),
                  t &&
                    t._registeredComponents &&
                    t._registeredComponents.add(o);
              }),
              (l._ssrRegister = u))
            : i &&
              (u = c
                ? function () {
                    i.call(
                      this,
                      (l.functional ? this.parent : this).$root.$options
                        .shadowRoot
                    );
                  }
                : i),
          u)
        )
          if (l.functional) {
            l._injectStyles = u;
            var s = l.render;
            l.render = function (t, e) {
              return u.call(e), s(t, e);
            };
          } else {
            var f = l.beforeCreate;
            l.beforeCreate = f ? [].concat(f, u) : [u];
          }
        return { exports: t, options: l };
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    "28f5": function (t, e, n) {
      t.exports = n.p + "img/plus.ae1995c1.svg";
    },
    2909: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return u;
      });
      var r = n("6b75");
      function i(t) {
        if (Array.isArray(t)) return Object(r["a"])(t);
      }
      n("a4d3"),
        n("e01a"),
        n("d28b"),
        n("a630"),
        n("d3b7"),
        n("3ca3"),
        n("ddb0");
      function a(t) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t))
          return Array.from(t);
      }
      var o = n("06c5");
      function c() {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function u(t) {
        return i(t) || a(t) || Object(o["a"])(t) || c();
      }
    },
    "29f3": function (t, e) {
      var n = Object.prototype,
        r = n.toString;
      function i(t) {
        return r.call(t);
      }
      t.exports = i;
    },
    "2b03": function (t, e) {
      function n(t, e, n, r) {
        var i = t.length,
          a = n + (r ? 1 : -1);
        while (r ? a-- : ++a < i) if (e(t[a], a, t)) return a;
        return -1;
      }
      t.exports = n;
    },
    "2b10": function (t, e) {
      function n(t, e, n) {
        var r = -1,
          i = t.length;
        e < 0 && (e = -e > i ? 0 : i + e),
          (n = n > i ? i : n),
          n < 0 && (n += i),
          (i = e > n ? 0 : (n - e) >>> 0),
          (e >>>= 0);
        var a = Array(i);
        while (++r < i) a[r] = t[r + e];
        return a;
      }
      t.exports = n;
    },
    "2b3d": function (t, e, n) {
      "use strict";
      n("3ca3");
      var r,
        i = n("23e7"),
        a = n("83ab"),
        o = n("0d3b"),
        c = n("da84"),
        u = n("37e8"),
        l = n("6eeb"),
        s = n("19aa"),
        f = n("5135"),
        p = n("60da"),
        d = n("4df4"),
        h = n("6547").codeAt,
        v = n("5fb2"),
        b = n("d44e"),
        m = n("9861"),
        g = n("69f3"),
        y = c.URL,
        _ = m.URLSearchParams,
        w = m.getState,
        x = g.set,
        O = g.getterFor("URL"),
        T = Math.floor,
        E = Math.pow,
        k = "Invalid authority",
        j = "Invalid scheme",
        C = "Invalid host",
        S = "Invalid port",
        I = /[A-Za-z]/,
        A = /[\d+-.A-Za-z]/,
        L = /\d/,
        N = /^(0x|0X)/,
        R = /^[0-7]+$/,
        M = /^\d+$/,
        D = /^[\dA-Fa-f]+$/,
        P = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,
        U = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/,
        B = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
        F = /[\u0009\u000A\u000D]/g,
        z = function (t, e) {
          var n, r, i;
          if ("[" == e.charAt(0)) {
            if ("]" != e.charAt(e.length - 1)) return C;
            if (((n = V(e.slice(1, -1))), !n)) return C;
            t.host = n;
          } else if (Z(t)) {
            if (((e = v(e)), P.test(e))) return C;
            if (((n = X(e)), null === n)) return C;
            t.host = n;
          } else {
            if (U.test(e)) return C;
            for (n = "", r = d(e), i = 0; i < r.length; i++) n += Y(r[i], q);
            t.host = n;
          }
        },
        X = function (t) {
          var e,
            n,
            r,
            i,
            a,
            o,
            c,
            u = t.split(".");
          if (
            (u.length && "" == u[u.length - 1] && u.pop(),
            (e = u.length),
            e > 4)
          )
            return t;
          for (n = [], r = 0; r < e; r++) {
            if (((i = u[r]), "" == i)) return t;
            if (
              ((a = 10),
              i.length > 1 &&
                "0" == i.charAt(0) &&
                ((a = N.test(i) ? 16 : 8), (i = i.slice(8 == a ? 1 : 2))),
              "" === i)
            )
              o = 0;
            else {
              if (!(10 == a ? M : 8 == a ? R : D).test(i)) return t;
              o = parseInt(i, a);
            }
            n.push(o);
          }
          for (r = 0; r < e; r++)
            if (((o = n[r]), r == e - 1)) {
              if (o >= E(256, 5 - e)) return null;
            } else if (o > 255) return null;
          for (c = n.pop(), r = 0; r < n.length; r++) c += n[r] * E(256, 3 - r);
          return c;
        },
        V = function (t) {
          var e,
            n,
            r,
            i,
            a,
            o,
            c,
            u = [0, 0, 0, 0, 0, 0, 0, 0],
            l = 0,
            s = null,
            f = 0,
            p = function () {
              return t.charAt(f);
            };
          if (":" == p()) {
            if (":" != t.charAt(1)) return;
            (f += 2), l++, (s = l);
          }
          while (p()) {
            if (8 == l) return;
            if (":" != p()) {
              e = n = 0;
              while (n < 4 && D.test(p()))
                (e = 16 * e + parseInt(p(), 16)), f++, n++;
              if ("." == p()) {
                if (0 == n) return;
                if (((f -= n), l > 6)) return;
                r = 0;
                while (p()) {
                  if (((i = null), r > 0)) {
                    if (!("." == p() && r < 4)) return;
                    f++;
                  }
                  if (!L.test(p())) return;
                  while (L.test(p())) {
                    if (((a = parseInt(p(), 10)), null === i)) i = a;
                    else {
                      if (0 == i) return;
                      i = 10 * i + a;
                    }
                    if (i > 255) return;
                    f++;
                  }
                  (u[l] = 256 * u[l] + i), r++, (2 != r && 4 != r) || l++;
                }
                if (4 != r) return;
                break;
              }
              if (":" == p()) {
                if ((f++, !p())) return;
              } else if (p()) return;
              u[l++] = e;
            } else {
              if (null !== s) return;
              f++, l++, (s = l);
            }
          }
          if (null !== s) {
            (o = l - s), (l = 7);
            while (0 != l && o > 0)
              (c = u[l]), (u[l--] = u[s + o - 1]), (u[s + --o] = c);
          } else if (8 != l) return;
          return u;
        },
        G = function (t) {
          for (var e = null, n = 1, r = null, i = 0, a = 0; a < 8; a++)
            0 !== t[a]
              ? (i > n && ((e = r), (n = i)), (r = null), (i = 0))
              : (null === r && (r = a), ++i);
          return i > n && ((e = r), (n = i)), e;
        },
        $ = function (t) {
          var e, n, r, i;
          if ("number" == typeof t) {
            for (e = [], n = 0; n < 4; n++)
              e.unshift(t % 256), (t = T(t / 256));
            return e.join(".");
          }
          if ("object" == typeof t) {
            for (e = "", r = G(t), n = 0; n < 8; n++)
              (i && 0 === t[n]) ||
                (i && (i = !1),
                r === n
                  ? ((e += n ? ":" : "::"), (i = !0))
                  : ((e += t[n].toString(16)), n < 7 && (e += ":")));
            return "[" + e + "]";
          }
          return t;
        },
        q = {},
        H = p({}, q, { " ": 1, '"': 1, "<": 1, ">": 1, "`": 1 }),
        W = p({}, H, { "#": 1, "?": 1, "{": 1, "}": 1 }),
        K = p({}, W, {
          "/": 1,
          ":": 1,
          ";": 1,
          "=": 1,
          "@": 1,
          "[": 1,
          "\\": 1,
          "]": 1,
          "^": 1,
          "|": 1,
        }),
        Y = function (t, e) {
          var n = h(t, 0);
          return n > 32 && n < 127 && !f(e, t) ? t : encodeURIComponent(t);
        },
        J = { ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443 },
        Z = function (t) {
          return f(J, t.scheme);
        },
        Q = function (t) {
          return "" != t.username || "" != t.password;
        },
        tt = function (t) {
          return !t.host || t.cannotBeABaseURL || "file" == t.scheme;
        },
        et = function (t, e) {
          var n;
          return (
            2 == t.length &&
            I.test(t.charAt(0)) &&
            (":" == (n = t.charAt(1)) || (!e && "|" == n))
          );
        },
        nt = function (t) {
          var e;
          return (
            t.length > 1 &&
            et(t.slice(0, 2)) &&
            (2 == t.length ||
              "/" === (e = t.charAt(2)) ||
              "\\" === e ||
              "?" === e ||
              "#" === e)
          );
        },
        rt = function (t) {
          var e = t.path,
            n = e.length;
          !n || ("file" == t.scheme && 1 == n && et(e[0], !0)) || e.pop();
        },
        it = function (t) {
          return "." === t || "%2e" === t.toLowerCase();
        },
        at = function (t) {
          return (
            (t = t.toLowerCase()),
            ".." === t || "%2e." === t || ".%2e" === t || "%2e%2e" === t
          );
        },
        ot = {},
        ct = {},
        ut = {},
        lt = {},
        st = {},
        ft = {},
        pt = {},
        dt = {},
        ht = {},
        vt = {},
        bt = {},
        mt = {},
        gt = {},
        yt = {},
        _t = {},
        wt = {},
        xt = {},
        Ot = {},
        Tt = {},
        Et = {},
        kt = {},
        jt = function (t, e, n, i) {
          var a,
            o,
            c,
            u,
            l = n || ot,
            s = 0,
            p = "",
            h = !1,
            v = !1,
            b = !1;
          n ||
            ((t.scheme = ""),
            (t.username = ""),
            (t.password = ""),
            (t.host = null),
            (t.port = null),
            (t.path = []),
            (t.query = null),
            (t.fragment = null),
            (t.cannotBeABaseURL = !1),
            (e = e.replace(B, ""))),
            (e = e.replace(F, "")),
            (a = d(e));
          while (s <= a.length) {
            switch (((o = a[s]), l)) {
              case ot:
                if (!o || !I.test(o)) {
                  if (n) return j;
                  l = ut;
                  continue;
                }
                (p += o.toLowerCase()), (l = ct);
                break;
              case ct:
                if (o && (A.test(o) || "+" == o || "-" == o || "." == o))
                  p += o.toLowerCase();
                else {
                  if (":" != o) {
                    if (n) return j;
                    (p = ""), (l = ut), (s = 0);
                    continue;
                  }
                  if (
                    n &&
                    (Z(t) != f(J, p) ||
                      ("file" == p && (Q(t) || null !== t.port)) ||
                      ("file" == t.scheme && !t.host))
                  )
                    return;
                  if (((t.scheme = p), n))
                    return void (
                      Z(t) &&
                      J[t.scheme] == t.port &&
                      (t.port = null)
                    );
                  (p = ""),
                    "file" == t.scheme
                      ? (l = yt)
                      : Z(t) && i && i.scheme == t.scheme
                      ? (l = lt)
                      : Z(t)
                      ? (l = dt)
                      : "/" == a[s + 1]
                      ? ((l = st), s++)
                      : ((t.cannotBeABaseURL = !0), t.path.push(""), (l = Tt));
                }
                break;
              case ut:
                if (!i || (i.cannotBeABaseURL && "#" != o)) return j;
                if (i.cannotBeABaseURL && "#" == o) {
                  (t.scheme = i.scheme),
                    (t.path = i.path.slice()),
                    (t.query = i.query),
                    (t.fragment = ""),
                    (t.cannotBeABaseURL = !0),
                    (l = kt);
                  break;
                }
                l = "file" == i.scheme ? yt : ft;
                continue;
              case lt:
                if ("/" != o || "/" != a[s + 1]) {
                  l = ft;
                  continue;
                }
                (l = ht), s++;
                break;
              case st:
                if ("/" == o) {
                  l = vt;
                  break;
                }
                l = Ot;
                continue;
              case ft:
                if (((t.scheme = i.scheme), o == r))
                  (t.username = i.username),
                    (t.password = i.password),
                    (t.host = i.host),
                    (t.port = i.port),
                    (t.path = i.path.slice()),
                    (t.query = i.query);
                else if ("/" == o || ("\\" == o && Z(t))) l = pt;
                else if ("?" == o)
                  (t.username = i.username),
                    (t.password = i.password),
                    (t.host = i.host),
                    (t.port = i.port),
                    (t.path = i.path.slice()),
                    (t.query = ""),
                    (l = Et);
                else {
                  if ("#" != o) {
                    (t.username = i.username),
                      (t.password = i.password),
                      (t.host = i.host),
                      (t.port = i.port),
                      (t.path = i.path.slice()),
                      t.path.pop(),
                      (l = Ot);
                    continue;
                  }
                  (t.username = i.username),
                    (t.password = i.password),
                    (t.host = i.host),
                    (t.port = i.port),
                    (t.path = i.path.slice()),
                    (t.query = i.query),
                    (t.fragment = ""),
                    (l = kt);
                }
                break;
              case pt:
                if (!Z(t) || ("/" != o && "\\" != o)) {
                  if ("/" != o) {
                    (t.username = i.username),
                      (t.password = i.password),
                      (t.host = i.host),
                      (t.port = i.port),
                      (l = Ot);
                    continue;
                  }
                  l = vt;
                } else l = ht;
                break;
              case dt:
                if (((l = ht), "/" != o || "/" != p.charAt(s + 1))) continue;
                s++;
                break;
              case ht:
                if ("/" != o && "\\" != o) {
                  l = vt;
                  continue;
                }
                break;
              case vt:
                if ("@" == o) {
                  h && (p = "%40" + p), (h = !0), (c = d(p));
                  for (var m = 0; m < c.length; m++) {
                    var g = c[m];
                    if (":" != g || b) {
                      var y = Y(g, K);
                      b ? (t.password += y) : (t.username += y);
                    } else b = !0;
                  }
                  p = "";
                } else if (
                  o == r ||
                  "/" == o ||
                  "?" == o ||
                  "#" == o ||
                  ("\\" == o && Z(t))
                ) {
                  if (h && "" == p) return k;
                  (s -= d(p).length + 1), (p = ""), (l = bt);
                } else p += o;
                break;
              case bt:
              case mt:
                if (n && "file" == t.scheme) {
                  l = wt;
                  continue;
                }
                if (":" != o || v) {
                  if (
                    o == r ||
                    "/" == o ||
                    "?" == o ||
                    "#" == o ||
                    ("\\" == o && Z(t))
                  ) {
                    if (Z(t) && "" == p) return C;
                    if (n && "" == p && (Q(t) || null !== t.port)) return;
                    if (((u = z(t, p)), u)) return u;
                    if (((p = ""), (l = xt), n)) return;
                    continue;
                  }
                  "[" == o ? (v = !0) : "]" == o && (v = !1), (p += o);
                } else {
                  if ("" == p) return C;
                  if (((u = z(t, p)), u)) return u;
                  if (((p = ""), (l = gt), n == mt)) return;
                }
                break;
              case gt:
                if (!L.test(o)) {
                  if (
                    o == r ||
                    "/" == o ||
                    "?" == o ||
                    "#" == o ||
                    ("\\" == o && Z(t)) ||
                    n
                  ) {
                    if ("" != p) {
                      var _ = parseInt(p, 10);
                      if (_ > 65535) return S;
                      (t.port = Z(t) && _ === J[t.scheme] ? null : _), (p = "");
                    }
                    if (n) return;
                    l = xt;
                    continue;
                  }
                  return S;
                }
                p += o;
                break;
              case yt:
                if (((t.scheme = "file"), "/" == o || "\\" == o)) l = _t;
                else {
                  if (!i || "file" != i.scheme) {
                    l = Ot;
                    continue;
                  }
                  if (o == r)
                    (t.host = i.host),
                      (t.path = i.path.slice()),
                      (t.query = i.query);
                  else if ("?" == o)
                    (t.host = i.host),
                      (t.path = i.path.slice()),
                      (t.query = ""),
                      (l = Et);
                  else {
                    if ("#" != o) {
                      nt(a.slice(s).join("")) ||
                        ((t.host = i.host), (t.path = i.path.slice()), rt(t)),
                        (l = Ot);
                      continue;
                    }
                    (t.host = i.host),
                      (t.path = i.path.slice()),
                      (t.query = i.query),
                      (t.fragment = ""),
                      (l = kt);
                  }
                }
                break;
              case _t:
                if ("/" == o || "\\" == o) {
                  l = wt;
                  break;
                }
                i &&
                  "file" == i.scheme &&
                  !nt(a.slice(s).join("")) &&
                  (et(i.path[0], !0)
                    ? t.path.push(i.path[0])
                    : (t.host = i.host)),
                  (l = Ot);
                continue;
              case wt:
                if (o == r || "/" == o || "\\" == o || "?" == o || "#" == o) {
                  if (!n && et(p)) l = Ot;
                  else if ("" == p) {
                    if (((t.host = ""), n)) return;
                    l = xt;
                  } else {
                    if (((u = z(t, p)), u)) return u;
                    if (("localhost" == t.host && (t.host = ""), n)) return;
                    (p = ""), (l = xt);
                  }
                  continue;
                }
                p += o;
                break;
              case xt:
                if (Z(t)) {
                  if (((l = Ot), "/" != o && "\\" != o)) continue;
                } else if (n || "?" != o)
                  if (n || "#" != o) {
                    if (o != r && ((l = Ot), "/" != o)) continue;
                  } else (t.fragment = ""), (l = kt);
                else (t.query = ""), (l = Et);
                break;
              case Ot:
                if (
                  o == r ||
                  "/" == o ||
                  ("\\" == o && Z(t)) ||
                  (!n && ("?" == o || "#" == o))
                ) {
                  if (
                    (at(p)
                      ? (rt(t),
                        "/" == o || ("\\" == o && Z(t)) || t.path.push(""))
                      : it(p)
                      ? "/" == o || ("\\" == o && Z(t)) || t.path.push("")
                      : ("file" == t.scheme &&
                          !t.path.length &&
                          et(p) &&
                          (t.host && (t.host = ""), (p = p.charAt(0) + ":")),
                        t.path.push(p)),
                    (p = ""),
                    "file" == t.scheme && (o == r || "?" == o || "#" == o))
                  )
                    while (t.path.length > 1 && "" === t.path[0])
                      t.path.shift();
                  "?" == o
                    ? ((t.query = ""), (l = Et))
                    : "#" == o && ((t.fragment = ""), (l = kt));
                } else p += Y(o, W);
                break;
              case Tt:
                "?" == o
                  ? ((t.query = ""), (l = Et))
                  : "#" == o
                  ? ((t.fragment = ""), (l = kt))
                  : o != r && (t.path[0] += Y(o, q));
                break;
              case Et:
                n || "#" != o
                  ? o != r &&
                    ("'" == o && Z(t)
                      ? (t.query += "%27")
                      : (t.query += "#" == o ? "%23" : Y(o, q)))
                  : ((t.fragment = ""), (l = kt));
                break;
              case kt:
                o != r && (t.fragment += Y(o, H));
                break;
            }
            s++;
          }
        },
        Ct = function (t) {
          var e,
            n,
            r = s(this, Ct, "URL"),
            i = arguments.length > 1 ? arguments[1] : void 0,
            o = String(t),
            c = x(r, { type: "URL" });
          if (void 0 !== i)
            if (i instanceof Ct) e = O(i);
            else if (((n = jt((e = {}), String(i))), n)) throw TypeError(n);
          if (((n = jt(c, o, null, e)), n)) throw TypeError(n);
          var u = (c.searchParams = new _()),
            l = w(u);
          l.updateSearchParams(c.query),
            (l.updateURL = function () {
              c.query = String(u) || null;
            }),
            a ||
              ((r.href = It.call(r)),
              (r.origin = At.call(r)),
              (r.protocol = Lt.call(r)),
              (r.username = Nt.call(r)),
              (r.password = Rt.call(r)),
              (r.host = Mt.call(r)),
              (r.hostname = Dt.call(r)),
              (r.port = Pt.call(r)),
              (r.pathname = Ut.call(r)),
              (r.search = Bt.call(r)),
              (r.searchParams = Ft.call(r)),
              (r.hash = zt.call(r)));
        },
        St = Ct.prototype,
        It = function () {
          var t = O(this),
            e = t.scheme,
            n = t.username,
            r = t.password,
            i = t.host,
            a = t.port,
            o = t.path,
            c = t.query,
            u = t.fragment,
            l = e + ":";
          return (
            null !== i
              ? ((l += "//"),
                Q(t) && (l += n + (r ? ":" + r : "") + "@"),
                (l += $(i)),
                null !== a && (l += ":" + a))
              : "file" == e && (l += "//"),
            (l += t.cannotBeABaseURL
              ? o[0]
              : o.length
              ? "/" + o.join("/")
              : ""),
            null !== c && (l += "?" + c),
            null !== u && (l += "#" + u),
            l
          );
        },
        At = function () {
          var t = O(this),
            e = t.scheme,
            n = t.port;
          if ("blob" == e)
            try {
              return new URL(e.path[0]).origin;
            } catch (r) {
              return "null";
            }
          return "file" != e && Z(t)
            ? e + "://" + $(t.host) + (null !== n ? ":" + n : "")
            : "null";
        },
        Lt = function () {
          return O(this).scheme + ":";
        },
        Nt = function () {
          return O(this).username;
        },
        Rt = function () {
          return O(this).password;
        },
        Mt = function () {
          var t = O(this),
            e = t.host,
            n = t.port;
          return null === e ? "" : null === n ? $(e) : $(e) + ":" + n;
        },
        Dt = function () {
          var t = O(this).host;
          return null === t ? "" : $(t);
        },
        Pt = function () {
          var t = O(this).port;
          return null === t ? "" : String(t);
        },
        Ut = function () {
          var t = O(this),
            e = t.path;
          return t.cannotBeABaseURL ? e[0] : e.length ? "/" + e.join("/") : "";
        },
        Bt = function () {
          var t = O(this).query;
          return t ? "?" + t : "";
        },
        Ft = function () {
          return O(this).searchParams;
        },
        zt = function () {
          var t = O(this).fragment;
          return t ? "#" + t : "";
        },
        Xt = function (t, e) {
          return { get: t, set: e, configurable: !0, enumerable: !0 };
        };
      if (
        (a &&
          u(St, {
            href: Xt(It, function (t) {
              var e = O(this),
                n = String(t),
                r = jt(e, n);
              if (r) throw TypeError(r);
              w(e.searchParams).updateSearchParams(e.query);
            }),
            origin: Xt(At),
            protocol: Xt(Lt, function (t) {
              var e = O(this);
              jt(e, String(t) + ":", ot);
            }),
            username: Xt(Nt, function (t) {
              var e = O(this),
                n = d(String(t));
              if (!tt(e)) {
                e.username = "";
                for (var r = 0; r < n.length; r++) e.username += Y(n[r], K);
              }
            }),
            password: Xt(Rt, function (t) {
              var e = O(this),
                n = d(String(t));
              if (!tt(e)) {
                e.password = "";
                for (var r = 0; r < n.length; r++) e.password += Y(n[r], K);
              }
            }),
            host: Xt(Mt, function (t) {
              var e = O(this);
              e.cannotBeABaseURL || jt(e, String(t), bt);
            }),
            hostname: Xt(Dt, function (t) {
              var e = O(this);
              e.cannotBeABaseURL || jt(e, String(t), mt);
            }),
            port: Xt(Pt, function (t) {
              var e = O(this);
              tt(e) ||
                ((t = String(t)), "" == t ? (e.port = null) : jt(e, t, gt));
            }),
            pathname: Xt(Ut, function (t) {
              var e = O(this);
              e.cannotBeABaseURL || ((e.path = []), jt(e, t + "", xt));
            }),
            search: Xt(Bt, function (t) {
              var e = O(this);
              (t = String(t)),
                "" == t
                  ? (e.query = null)
                  : ("?" == t.charAt(0) && (t = t.slice(1)),
                    (e.query = ""),
                    jt(e, t, Et)),
                w(e.searchParams).updateSearchParams(e.query);
            }),
            searchParams: Xt(Ft),
            hash: Xt(zt, function (t) {
              var e = O(this);
              (t = String(t)),
                "" != t
                  ? ("#" == t.charAt(0) && (t = t.slice(1)),
                    (e.fragment = ""),
                    jt(e, t, kt))
                  : (e.fragment = null);
            }),
          }),
        l(
          St,
          "toJSON",
          function () {
            return It.call(this);
          },
          { enumerable: !0 }
        ),
        l(
          St,
          "toString",
          function () {
            return It.call(this);
          },
          { enumerable: !0 }
        ),
        y)
      ) {
        var Vt = y.createObjectURL,
          Gt = y.revokeObjectURL;
        Vt &&
          l(Ct, "createObjectURL", function (t) {
            return Vt.apply(y, arguments);
          }),
          Gt &&
            l(Ct, "revokeObjectURL", function (t) {
              return Gt.apply(y, arguments);
            });
      }
      b(Ct, "URL"), i({ global: !0, forced: !o, sham: !a }, { URL: Ct });
    },
    "2b3e": function (t, e, n) {
      var r = n("585a"),
        i = "object" == typeof self && self && self.Object === Object && self,
        a = r || i || Function("return this")();
      t.exports = a;
    },
    "2c27": function (t, e, n) {
      "use strict";
      var r = n("1db4"),
        i = n.n(r);
      e["default"] = i.a;
    },
    "2ca0": function (t, e, n) {
      "use strict";
      var r = n("23e7"),
        i = n("06cf").f,
        a = n("50c4"),
        o = n("5a34"),
        c = n("1d80"),
        u = n("ab13"),
        l = n("c430"),
        s = "".startsWith,
        f = Math.min,
        p = u("startsWith"),
        d =
          !l &&
          !p &&
          !!(function () {
            var t = i(String.prototype, "startsWith");
            return t && !t.writable;
          })();
      r(
        { target: "String", proto: !0, forced: !d && !p },
        {
          startsWith: function (t) {
            var e = String(c(this));
            o(t);
            var n = a(
                f(arguments.length > 1 ? arguments[1] : void 0, e.length)
              ),
              r = String(t);
            return s ? s.call(e, r, n) : e.slice(n, n + r.length) === r;
          },
        }
      );
    },
    "2caf": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return u;
      });
      n("4ae1");
      var r = n("7e84"),
        i = n("d967"),
        a = n("53ca"),
        o = n("257e");
      function c(t, e) {
        return !e || ("object" !== Object(a["a"])(e) && "function" !== typeof e)
          ? Object(o["a"])(t)
          : e;
      }
      function u(t) {
        var e = Object(i["a"])();
        return function () {
          var n,
            i = Object(r["a"])(t);
          if (e) {
            var a = Object(r["a"])(this).constructor;
            n = Reflect.construct(i, arguments, a);
          } else n = i.apply(this, arguments);
          return c(this, n);
        };
      }
    },
    "2cf4": function (t, e, n) {
      var r,
        i,
        a,
        o = n("da84"),
        c = n("d039"),
        u = n("c6b6"),
        l = n("0366"),
        s = n("1be4"),
        f = n("cc12"),
        p = n("1cdc"),
        d = o.location,
        h = o.setImmediate,
        v = o.clearImmediate,
        b = o.process,
        m = o.MessageChannel,
        g = o.Dispatch,
        y = 0,
        _ = {},
        w = "onreadystatechange",
        x = function (t) {
          if (_.hasOwnProperty(t)) {
            var e = _[t];
            delete _[t], e();
          }
        },
        O = function (t) {
          return function () {
            x(t);
          };
        },
        T = function (t) {
          x(t.data);
        },
        E = function (t) {
          o.postMessage(t + "", d.protocol + "//" + d.host);
        };
      (h && v) ||
        ((h = function (t) {
          var e = [],
            n = 1;
          while (arguments.length > n) e.push(arguments[n++]);
          return (
            (_[++y] = function () {
              ("function" == typeof t ? t : Function(t)).apply(void 0, e);
            }),
            r(y),
            y
          );
        }),
        (v = function (t) {
          delete _[t];
        }),
        "process" == u(b)
          ? (r = function (t) {
              b.nextTick(O(t));
            })
          : g && g.now
          ? (r = function (t) {
              g.now(O(t));
            })
          : m && !p
          ? ((i = new m()),
            (a = i.port2),
            (i.port1.onmessage = T),
            (r = l(a.postMessage, a, 1)))
          : !o.addEventListener ||
            "function" != typeof postMessage ||
            o.importScripts ||
            c(E) ||
            "file:" === d.protocol
          ? (r =
              w in f("script")
                ? function (t) {
                    s.appendChild(f("script"))[w] = function () {
                      s.removeChild(this), x(t);
                    };
                  }
                : function (t) {
                    setTimeout(O(t), 0);
                  })
          : ((r = E), o.addEventListener("message", T, !1))),
        (t.exports = { set: h, clear: v });
    },
    "2cf8": function (t, e, n) {
      var r = n("47f5");
      function i(t, e) {
        var n = t.length;
        while (n-- && r(e, t[n], 0) > -1);
        return n;
      }
      t.exports = i;
    },
    "2d00": function (t, e, n) {
      var r,
        i,
        a = n("da84"),
        o = n("342f"),
        c = a.process,
        u = c && c.versions,
        l = u && u.v8;
      l
        ? ((r = l.split(".")), (i = r[0] + r[1]))
        : o &&
          ((r = o.match(/Edge\/(\d+)/)),
          (!r || r[1] >= 74) &&
            ((r = o.match(/Chrome\/(\d+)/)), r && (i = r[1]))),
        (t.exports = i && +i);
    },
    "2ef0": function (t, e, n) {
      (function (t, r) {
        var i;
        /**
         * @license
         * Lodash <https://lodash.com/>
         * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
         * Released under MIT license <https://lodash.com/license>
         * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
         * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
         */ (function () {
          var a,
            o = "4.17.15",
            c = 200,
            u =
              "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
            l = "Expected a function",
            s = "__lodash_hash_undefined__",
            f = 500,
            p = "__lodash_placeholder__",
            d = 1,
            h = 2,
            v = 4,
            b = 1,
            m = 2,
            g = 1,
            y = 2,
            _ = 4,
            w = 8,
            x = 16,
            O = 32,
            T = 64,
            E = 128,
            k = 256,
            j = 512,
            C = 30,
            S = "...",
            I = 800,
            A = 16,
            L = 1,
            N = 2,
            R = 3,
            M = 1 / 0,
            D = 9007199254740991,
            P = 17976931348623157e292,
            U = NaN,
            B = 4294967295,
            F = B - 1,
            z = B >>> 1,
            X = [
              ["ary", E],
              ["bind", g],
              ["bindKey", y],
              ["curry", w],
              ["curryRight", x],
              ["flip", j],
              ["partial", O],
              ["partialRight", T],
              ["rearg", k],
            ],
            V = "[object Arguments]",
            G = "[object Array]",
            $ = "[object AsyncFunction]",
            q = "[object Boolean]",
            H = "[object Date]",
            W = "[object DOMException]",
            K = "[object Error]",
            Y = "[object Function]",
            J = "[object GeneratorFunction]",
            Z = "[object Map]",
            Q = "[object Number]",
            tt = "[object Null]",
            et = "[object Object]",
            nt = "[object Promise]",
            rt = "[object Proxy]",
            it = "[object RegExp]",
            at = "[object Set]",
            ot = "[object String]",
            ct = "[object Symbol]",
            ut = "[object Undefined]",
            lt = "[object WeakMap]",
            st = "[object WeakSet]",
            ft = "[object ArrayBuffer]",
            pt = "[object DataView]",
            dt = "[object Float32Array]",
            ht = "[object Float64Array]",
            vt = "[object Int8Array]",
            bt = "[object Int16Array]",
            mt = "[object Int32Array]",
            gt = "[object Uint8Array]",
            yt = "[object Uint8ClampedArray]",
            _t = "[object Uint16Array]",
            wt = "[object Uint32Array]",
            xt = /\b__p \+= '';/g,
            Ot = /\b(__p \+=) '' \+/g,
            Tt = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            Et = /&(?:amp|lt|gt|quot|#39);/g,
            kt = /[&<>"']/g,
            jt = RegExp(Et.source),
            Ct = RegExp(kt.source),
            St = /<%-([\s\S]+?)%>/g,
            It = /<%([\s\S]+?)%>/g,
            At = /<%=([\s\S]+?)%>/g,
            Lt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            Nt = /^\w*$/,
            Rt =
              /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            Mt = /[\\^$.*+?()[\]{}|]/g,
            Dt = RegExp(Mt.source),
            Pt = /^\s+|\s+$/g,
            Ut = /^\s+/,
            Bt = /\s+$/,
            Ft = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
            zt = /\{\n\/\* \[wrapped with (.+)\] \*/,
            Xt = /,? & /,
            Vt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
            Gt = /\\(\\)?/g,
            $t = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            qt = /\w*$/,
            Ht = /^[-+]0x[0-9a-f]+$/i,
            Wt = /^0b[01]+$/i,
            Kt = /^\[object .+?Constructor\]$/,
            Yt = /^0o[0-7]+$/i,
            Jt = /^(?:0|[1-9]\d*)$/,
            Zt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            Qt = /($^)/,
            te = /['\n\r\u2028\u2029\\]/g,
            ee = "\\ud800-\\udfff",
            ne = "\\u0300-\\u036f",
            re = "\\ufe20-\\ufe2f",
            ie = "\\u20d0-\\u20ff",
            ae = ne + re + ie,
            oe = "\\u2700-\\u27bf",
            ce = "a-z\\xdf-\\xf6\\xf8-\\xff",
            ue = "\\xac\\xb1\\xd7\\xf7",
            le = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
            se = "\\u2000-\\u206f",
            fe =
              " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
            pe = "A-Z\\xc0-\\xd6\\xd8-\\xde",
            de = "\\ufe0e\\ufe0f",
            he = ue + le + se + fe,
            ve = "['’]",
            be = "[" + ee + "]",
            me = "[" + he + "]",
            ge = "[" + ae + "]",
            ye = "\\d+",
            _e = "[" + oe + "]",
            we = "[" + ce + "]",
            xe = "[^" + ee + he + ye + oe + ce + pe + "]",
            Oe = "\\ud83c[\\udffb-\\udfff]",
            Te = "(?:" + ge + "|" + Oe + ")",
            Ee = "[^" + ee + "]",
            ke = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            je = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            Ce = "[" + pe + "]",
            Se = "\\u200d",
            Ie = "(?:" + we + "|" + xe + ")",
            Ae = "(?:" + Ce + "|" + xe + ")",
            Le = "(?:" + ve + "(?:d|ll|m|re|s|t|ve))?",
            Ne = "(?:" + ve + "(?:D|LL|M|RE|S|T|VE))?",
            Re = Te + "?",
            Me = "[" + de + "]?",
            De =
              "(?:" +
              Se +
              "(?:" +
              [Ee, ke, je].join("|") +
              ")" +
              Me +
              Re +
              ")*",
            Pe = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
            Ue = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
            Be = Me + Re + De,
            Fe = "(?:" + [_e, ke, je].join("|") + ")" + Be,
            ze = "(?:" + [Ee + ge + "?", ge, ke, je, be].join("|") + ")",
            Xe = RegExp(ve, "g"),
            Ve = RegExp(ge, "g"),
            Ge = RegExp(Oe + "(?=" + Oe + ")|" + ze + Be, "g"),
            $e = RegExp(
              [
                Ce +
                  "?" +
                  we +
                  "+" +
                  Le +
                  "(?=" +
                  [me, Ce, "$"].join("|") +
                  ")",
                Ae + "+" + Ne + "(?=" + [me, Ce + Ie, "$"].join("|") + ")",
                Ce + "?" + Ie + "+" + Le,
                Ce + "+" + Ne,
                Ue,
                Pe,
                ye,
                Fe,
              ].join("|"),
              "g"
            ),
            qe = RegExp("[" + Se + ee + ae + de + "]"),
            He =
              /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            We = [
              "Array",
              "Buffer",
              "DataView",
              "Date",
              "Error",
              "Float32Array",
              "Float64Array",
              "Function",
              "Int8Array",
              "Int16Array",
              "Int32Array",
              "Map",
              "Math",
              "Object",
              "Promise",
              "RegExp",
              "Set",
              "String",
              "Symbol",
              "TypeError",
              "Uint8Array",
              "Uint8ClampedArray",
              "Uint16Array",
              "Uint32Array",
              "WeakMap",
              "_",
              "clearTimeout",
              "isFinite",
              "parseInt",
              "setTimeout",
            ],
            Ke = -1,
            Ye = {};
          (Ye[dt] =
            Ye[ht] =
            Ye[vt] =
            Ye[bt] =
            Ye[mt] =
            Ye[gt] =
            Ye[yt] =
            Ye[_t] =
            Ye[wt] =
              !0),
            (Ye[V] =
              Ye[G] =
              Ye[ft] =
              Ye[q] =
              Ye[pt] =
              Ye[H] =
              Ye[K] =
              Ye[Y] =
              Ye[Z] =
              Ye[Q] =
              Ye[et] =
              Ye[it] =
              Ye[at] =
              Ye[ot] =
              Ye[lt] =
                !1);
          var Je = {};
          (Je[V] =
            Je[G] =
            Je[ft] =
            Je[pt] =
            Je[q] =
            Je[H] =
            Je[dt] =
            Je[ht] =
            Je[vt] =
            Je[bt] =
            Je[mt] =
            Je[Z] =
            Je[Q] =
            Je[et] =
            Je[it] =
            Je[at] =
            Je[ot] =
            Je[ct] =
            Je[gt] =
            Je[yt] =
            Je[_t] =
            Je[wt] =
              !0),
            (Je[K] = Je[Y] = Je[lt] = !1);
          var Ze = {
              À: "A",
              Á: "A",
              Â: "A",
              Ã: "A",
              Ä: "A",
              Å: "A",
              à: "a",
              á: "a",
              â: "a",
              ã: "a",
              ä: "a",
              å: "a",
              Ç: "C",
              ç: "c",
              Ð: "D",
              ð: "d",
              È: "E",
              É: "E",
              Ê: "E",
              Ë: "E",
              è: "e",
              é: "e",
              ê: "e",
              ë: "e",
              Ì: "I",
              Í: "I",
              Î: "I",
              Ï: "I",
              ì: "i",
              í: "i",
              î: "i",
              ï: "i",
              Ñ: "N",
              ñ: "n",
              Ò: "O",
              Ó: "O",
              Ô: "O",
              Õ: "O",
              Ö: "O",
              Ø: "O",
              ò: "o",
              ó: "o",
              ô: "o",
              õ: "o",
              ö: "o",
              ø: "o",
              Ù: "U",
              Ú: "U",
              Û: "U",
              Ü: "U",
              ù: "u",
              ú: "u",
              û: "u",
              ü: "u",
              Ý: "Y",
              ý: "y",
              ÿ: "y",
              Æ: "Ae",
              æ: "ae",
              Þ: "Th",
              þ: "th",
              ß: "ss",
              Ā: "A",
              Ă: "A",
              Ą: "A",
              ā: "a",
              ă: "a",
              ą: "a",
              Ć: "C",
              Ĉ: "C",
              Ċ: "C",
              Č: "C",
              ć: "c",
              ĉ: "c",
              ċ: "c",
              č: "c",
              Ď: "D",
              Đ: "D",
              ď: "d",
              đ: "d",
              Ē: "E",
              Ĕ: "E",
              Ė: "E",
              Ę: "E",
              Ě: "E",
              ē: "e",
              ĕ: "e",
              ė: "e",
              ę: "e",
              ě: "e",
              Ĝ: "G",
              Ğ: "G",
              Ġ: "G",
              Ģ: "G",
              ĝ: "g",
              ğ: "g",
              ġ: "g",
              ģ: "g",
              Ĥ: "H",
              Ħ: "H",
              ĥ: "h",
              ħ: "h",
              Ĩ: "I",
              Ī: "I",
              Ĭ: "I",
              Į: "I",
              İ: "I",
              ĩ: "i",
              ī: "i",
              ĭ: "i",
              į: "i",
              ı: "i",
              Ĵ: "J",
              ĵ: "j",
              Ķ: "K",
              ķ: "k",
              ĸ: "k",
              Ĺ: "L",
              Ļ: "L",
              Ľ: "L",
              Ŀ: "L",
              Ł: "L",
              ĺ: "l",
              ļ: "l",
              ľ: "l",
              ŀ: "l",
              ł: "l",
              Ń: "N",
              Ņ: "N",
              Ň: "N",
              Ŋ: "N",
              ń: "n",
              ņ: "n",
              ň: "n",
              ŋ: "n",
              Ō: "O",
              Ŏ: "O",
              Ő: "O",
              ō: "o",
              ŏ: "o",
              ő: "o",
              Ŕ: "R",
              Ŗ: "R",
              Ř: "R",
              ŕ: "r",
              ŗ: "r",
              ř: "r",
              Ś: "S",
              Ŝ: "S",
              Ş: "S",
              Š: "S",
              ś: "s",
              ŝ: "s",
              ş: "s",
              š: "s",
              Ţ: "T",
              Ť: "T",
              Ŧ: "T",
              ţ: "t",
              ť: "t",
              ŧ: "t",
              Ũ: "U",
              Ū: "U",
              Ŭ: "U",
              Ů: "U",
              Ű: "U",
              Ų: "U",
              ũ: "u",
              ū: "u",
              ŭ: "u",
              ů: "u",
              ű: "u",
              ų: "u",
              Ŵ: "W",
              ŵ: "w",
              Ŷ: "Y",
              ŷ: "y",
              Ÿ: "Y",
              Ź: "Z",
              Ż: "Z",
              Ž: "Z",
              ź: "z",
              ż: "z",
              ž: "z",
              Ĳ: "IJ",
              ĳ: "ij",
              Œ: "Oe",
              œ: "oe",
              ŉ: "'n",
              ſ: "s",
            },
            Qe = {
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;",
            },
            tn = {
              "&amp;": "&",
              "&lt;": "<",
              "&gt;": ">",
              "&quot;": '"',
              "&#39;": "'",
            },
            en = {
              "\\": "\\",
              "'": "'",
              "\n": "n",
              "\r": "r",
              "\u2028": "u2028",
              "\u2029": "u2029",
            },
            nn = parseFloat,
            rn = parseInt,
            an = "object" == typeof t && t && t.Object === Object && t,
            on =
              "object" == typeof self && self && self.Object === Object && self,
            cn = an || on || Function("return this")(),
            un = e && !e.nodeType && e,
            ln = un && "object" == typeof r && r && !r.nodeType && r,
            sn = ln && ln.exports === un,
            fn = sn && an.process,
            pn = (function () {
              try {
                var t = ln && ln.require && ln.require("util").types;
                return t || (fn && fn.binding && fn.binding("util"));
              } catch (e) {}
            })(),
            dn = pn && pn.isArrayBuffer,
            hn = pn && pn.isDate,
            vn = pn && pn.isMap,
            bn = pn && pn.isRegExp,
            mn = pn && pn.isSet,
            gn = pn && pn.isTypedArray;
          function yn(t, e, n) {
            switch (n.length) {
              case 0:
                return t.call(e);
              case 1:
                return t.call(e, n[0]);
              case 2:
                return t.call(e, n[0], n[1]);
              case 3:
                return t.call(e, n[0], n[1], n[2]);
            }
            return t.apply(e, n);
          }
          function _n(t, e, n, r) {
            var i = -1,
              a = null == t ? 0 : t.length;
            while (++i < a) {
              var o = t[i];
              e(r, o, n(o), t);
            }
            return r;
          }
          function wn(t, e) {
            var n = -1,
              r = null == t ? 0 : t.length;
            while (++n < r) if (!1 === e(t[n], n, t)) break;
            return t;
          }
          function xn(t, e) {
            var n = null == t ? 0 : t.length;
            while (n--) if (!1 === e(t[n], n, t)) break;
            return t;
          }
          function On(t, e) {
            var n = -1,
              r = null == t ? 0 : t.length;
            while (++n < r) if (!e(t[n], n, t)) return !1;
            return !0;
          }
          function Tn(t, e) {
            var n = -1,
              r = null == t ? 0 : t.length,
              i = 0,
              a = [];
            while (++n < r) {
              var o = t[n];
              e(o, n, t) && (a[i++] = o);
            }
            return a;
          }
          function En(t, e) {
            var n = null == t ? 0 : t.length;
            return !!n && Pn(t, e, 0) > -1;
          }
          function kn(t, e, n) {
            var r = -1,
              i = null == t ? 0 : t.length;
            while (++r < i) if (n(e, t[r])) return !0;
            return !1;
          }
          function jn(t, e) {
            var n = -1,
              r = null == t ? 0 : t.length,
              i = Array(r);
            while (++n < r) i[n] = e(t[n], n, t);
            return i;
          }
          function Cn(t, e) {
            var n = -1,
              r = e.length,
              i = t.length;
            while (++n < r) t[i + n] = e[n];
            return t;
          }
          function Sn(t, e, n, r) {
            var i = -1,
              a = null == t ? 0 : t.length;
            r && a && (n = t[++i]);
            while (++i < a) n = e(n, t[i], i, t);
            return n;
          }
          function In(t, e, n, r) {
            var i = null == t ? 0 : t.length;
            r && i && (n = t[--i]);
            while (i--) n = e(n, t[i], i, t);
            return n;
          }
          function An(t, e) {
            var n = -1,
              r = null == t ? 0 : t.length;
            while (++n < r) if (e(t[n], n, t)) return !0;
            return !1;
          }
          var Ln = zn("length");
          function Nn(t) {
            return t.split("");
          }
          function Rn(t) {
            return t.match(Vt) || [];
          }
          function Mn(t, e, n) {
            var r;
            return (
              n(t, function (t, n, i) {
                if (e(t, n, i)) return (r = n), !1;
              }),
              r
            );
          }
          function Dn(t, e, n, r) {
            var i = t.length,
              a = n + (r ? 1 : -1);
            while (r ? a-- : ++a < i) if (e(t[a], a, t)) return a;
            return -1;
          }
          function Pn(t, e, n) {
            return e === e ? pr(t, e, n) : Dn(t, Bn, n);
          }
          function Un(t, e, n, r) {
            var i = n - 1,
              a = t.length;
            while (++i < a) if (r(t[i], e)) return i;
            return -1;
          }
          function Bn(t) {
            return t !== t;
          }
          function Fn(t, e) {
            var n = null == t ? 0 : t.length;
            return n ? $n(t, e) / n : U;
          }
          function zn(t) {
            return function (e) {
              return null == e ? a : e[t];
            };
          }
          function Xn(t) {
            return function (e) {
              return null == t ? a : t[e];
            };
          }
          function Vn(t, e, n, r, i) {
            return (
              i(t, function (t, i, a) {
                n = r ? ((r = !1), t) : e(n, t, i, a);
              }),
              n
            );
          }
          function Gn(t, e) {
            var n = t.length;
            t.sort(e);
            while (n--) t[n] = t[n].value;
            return t;
          }
          function $n(t, e) {
            var n,
              r = -1,
              i = t.length;
            while (++r < i) {
              var o = e(t[r]);
              o !== a && (n = n === a ? o : n + o);
            }
            return n;
          }
          function qn(t, e) {
            var n = -1,
              r = Array(t);
            while (++n < t) r[n] = e(n);
            return r;
          }
          function Hn(t, e) {
            return jn(e, function (e) {
              return [e, t[e]];
            });
          }
          function Wn(t) {
            return function (e) {
              return t(e);
            };
          }
          function Kn(t, e) {
            return jn(e, function (e) {
              return t[e];
            });
          }
          function Yn(t, e) {
            return t.has(e);
          }
          function Jn(t, e) {
            var n = -1,
              r = t.length;
            while (++n < r && Pn(e, t[n], 0) > -1);
            return n;
          }
          function Zn(t, e) {
            var n = t.length;
            while (n-- && Pn(e, t[n], 0) > -1);
            return n;
          }
          function Qn(t, e) {
            var n = t.length,
              r = 0;
            while (n--) t[n] === e && ++r;
            return r;
          }
          var tr = Xn(Ze),
            er = Xn(Qe);
          function nr(t) {
            return "\\" + en[t];
          }
          function rr(t, e) {
            return null == t ? a : t[e];
          }
          function ir(t) {
            return qe.test(t);
          }
          function ar(t) {
            return He.test(t);
          }
          function or(t) {
            var e,
              n = [];
            while (!(e = t.next()).done) n.push(e.value);
            return n;
          }
          function cr(t) {
            var e = -1,
              n = Array(t.size);
            return (
              t.forEach(function (t, r) {
                n[++e] = [r, t];
              }),
              n
            );
          }
          function ur(t, e) {
            return function (n) {
              return t(e(n));
            };
          }
          function lr(t, e) {
            var n = -1,
              r = t.length,
              i = 0,
              a = [];
            while (++n < r) {
              var o = t[n];
              (o !== e && o !== p) || ((t[n] = p), (a[i++] = n));
            }
            return a;
          }
          function sr(t) {
            var e = -1,
              n = Array(t.size);
            return (
              t.forEach(function (t) {
                n[++e] = t;
              }),
              n
            );
          }
          function fr(t) {
            var e = -1,
              n = Array(t.size);
            return (
              t.forEach(function (t) {
                n[++e] = [t, t];
              }),
              n
            );
          }
          function pr(t, e, n) {
            var r = n - 1,
              i = t.length;
            while (++r < i) if (t[r] === e) return r;
            return -1;
          }
          function dr(t, e, n) {
            var r = n + 1;
            while (r--) if (t[r] === e) return r;
            return r;
          }
          function hr(t) {
            return ir(t) ? mr(t) : Ln(t);
          }
          function vr(t) {
            return ir(t) ? gr(t) : Nn(t);
          }
          var br = Xn(tn);
          function mr(t) {
            var e = (Ge.lastIndex = 0);
            while (Ge.test(t)) ++e;
            return e;
          }
          function gr(t) {
            return t.match(Ge) || [];
          }
          function yr(t) {
            return t.match($e) || [];
          }
          var _r = function t(e) {
              e = null == e ? cn : wr.defaults(cn.Object(), e, wr.pick(cn, We));
              var n = e.Array,
                r = e.Date,
                i = e.Error,
                Vt = e.Function,
                ee = e.Math,
                ne = e.Object,
                re = e.RegExp,
                ie = e.String,
                ae = e.TypeError,
                oe = n.prototype,
                ce = Vt.prototype,
                ue = ne.prototype,
                le = e["__core-js_shared__"],
                se = ce.toString,
                fe = ue.hasOwnProperty,
                pe = 0,
                de = (function () {
                  var t = /[^.]+$/.exec(
                    (le && le.keys && le.keys.IE_PROTO) || ""
                  );
                  return t ? "Symbol(src)_1." + t : "";
                })(),
                he = ue.toString,
                ve = se.call(ne),
                be = cn._,
                me = re(
                  "^" +
                    se
                      .call(fe)
                      .replace(Mt, "\\$&")
                      .replace(
                        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                        "$1.*?"
                      ) +
                    "$"
                ),
                ge = sn ? e.Buffer : a,
                ye = e.Symbol,
                _e = e.Uint8Array,
                we = ge ? ge.allocUnsafe : a,
                xe = ur(ne.getPrototypeOf, ne),
                Oe = ne.create,
                Te = ue.propertyIsEnumerable,
                Ee = oe.splice,
                ke = ye ? ye.isConcatSpreadable : a,
                je = ye ? ye.iterator : a,
                Ce = ye ? ye.toStringTag : a,
                Se = (function () {
                  try {
                    var t = $o(ne, "defineProperty");
                    return t({}, "", {}), t;
                  } catch (e) {}
                })(),
                Ie = e.clearTimeout !== cn.clearTimeout && e.clearTimeout,
                Ae = r && r.now !== cn.Date.now && r.now,
                Le = e.setTimeout !== cn.setTimeout && e.setTimeout,
                Ne = ee.ceil,
                Re = ee.floor,
                Me = ne.getOwnPropertySymbols,
                De = ge ? ge.isBuffer : a,
                Pe = e.isFinite,
                Ue = oe.join,
                Be = ur(ne.keys, ne),
                Fe = ee.max,
                ze = ee.min,
                Ge = r.now,
                $e = e.parseInt,
                qe = ee.random,
                He = oe.reverse,
                Ze = $o(e, "DataView"),
                Qe = $o(e, "Map"),
                tn = $o(e, "Promise"),
                en = $o(e, "Set"),
                an = $o(e, "WeakMap"),
                on = $o(ne, "create"),
                un = an && new an(),
                ln = {},
                fn = Ic(Ze),
                pn = Ic(Qe),
                Ln = Ic(tn),
                Nn = Ic(en),
                Xn = Ic(an),
                pr = ye ? ye.prototype : a,
                mr = pr ? pr.valueOf : a,
                gr = pr ? pr.toString : a;
              function _r(t) {
                if (Os(t) && !os(t) && !(t instanceof Er)) {
                  if (t instanceof Tr) return t;
                  if (fe.call(t, "__wrapped__")) return Lc(t);
                }
                return new Tr(t);
              }
              var xr = (function () {
                function t() {}
                return function (e) {
                  if (!xs(e)) return {};
                  if (Oe) return Oe(e);
                  t.prototype = e;
                  var n = new t();
                  return (t.prototype = a), n;
                };
              })();
              function Or() {}
              function Tr(t, e) {
                (this.__wrapped__ = t),
                  (this.__actions__ = []),
                  (this.__chain__ = !!e),
                  (this.__index__ = 0),
                  (this.__values__ = a);
              }
              function Er(t) {
                (this.__wrapped__ = t),
                  (this.__actions__ = []),
                  (this.__dir__ = 1),
                  (this.__filtered__ = !1),
                  (this.__iteratees__ = []),
                  (this.__takeCount__ = B),
                  (this.__views__ = []);
              }
              function kr() {
                var t = new Er(this.__wrapped__);
                return (
                  (t.__actions__ = eo(this.__actions__)),
                  (t.__dir__ = this.__dir__),
                  (t.__filtered__ = this.__filtered__),
                  (t.__iteratees__ = eo(this.__iteratees__)),
                  (t.__takeCount__ = this.__takeCount__),
                  (t.__views__ = eo(this.__views__)),
                  t
                );
              }
              function jr() {
                if (this.__filtered__) {
                  var t = new Er(this);
                  (t.__dir__ = -1), (t.__filtered__ = !0);
                } else (t = this.clone()), (t.__dir__ *= -1);
                return t;
              }
              function Cr() {
                var t = this.__wrapped__.value(),
                  e = this.__dir__,
                  n = os(t),
                  r = e < 0,
                  i = n ? t.length : 0,
                  a = Yo(0, i, this.__views__),
                  o = a.start,
                  c = a.end,
                  u = c - o,
                  l = r ? c : o - 1,
                  s = this.__iteratees__,
                  f = s.length,
                  p = 0,
                  d = ze(u, this.__takeCount__);
                if (!n || (!r && i == u && d == u))
                  return Da(t, this.__actions__);
                var h = [];
                t: while (u-- && p < d) {
                  l += e;
                  var v = -1,
                    b = t[l];
                  while (++v < f) {
                    var m = s[v],
                      g = m.iteratee,
                      y = m.type,
                      _ = g(b);
                    if (y == N) b = _;
                    else if (!_) {
                      if (y == L) continue t;
                      break t;
                    }
                  }
                  h[p++] = b;
                }
                return h;
              }
              function Sr(t) {
                var e = -1,
                  n = null == t ? 0 : t.length;
                this.clear();
                while (++e < n) {
                  var r = t[e];
                  this.set(r[0], r[1]);
                }
              }
              function Ir() {
                (this.__data__ = on ? on(null) : {}), (this.size = 0);
              }
              function Ar(t) {
                var e = this.has(t) && delete this.__data__[t];
                return (this.size -= e ? 1 : 0), e;
              }
              function Lr(t) {
                var e = this.__data__;
                if (on) {
                  var n = e[t];
                  return n === s ? a : n;
                }
                return fe.call(e, t) ? e[t] : a;
              }
              function Nr(t) {
                var e = this.__data__;
                return on ? e[t] !== a : fe.call(e, t);
              }
              function Rr(t, e) {
                var n = this.__data__;
                return (
                  (this.size += this.has(t) ? 0 : 1),
                  (n[t] = on && e === a ? s : e),
                  this
                );
              }
              function Mr(t) {
                var e = -1,
                  n = null == t ? 0 : t.length;
                this.clear();
                while (++e < n) {
                  var r = t[e];
                  this.set(r[0], r[1]);
                }
              }
              function Dr() {
                (this.__data__ = []), (this.size = 0);
              }
              function Pr(t) {
                var e = this.__data__,
                  n = ui(e, t);
                if (n < 0) return !1;
                var r = e.length - 1;
                return n == r ? e.pop() : Ee.call(e, n, 1), --this.size, !0;
              }
              function Ur(t) {
                var e = this.__data__,
                  n = ui(e, t);
                return n < 0 ? a : e[n][1];
              }
              function Br(t) {
                return ui(this.__data__, t) > -1;
              }
              function Fr(t, e) {
                var n = this.__data__,
                  r = ui(n, t);
                return (
                  r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e), this
                );
              }
              function zr(t) {
                var e = -1,
                  n = null == t ? 0 : t.length;
                this.clear();
                while (++e < n) {
                  var r = t[e];
                  this.set(r[0], r[1]);
                }
              }
              function Xr() {
                (this.size = 0),
                  (this.__data__ = {
                    hash: new Sr(),
                    map: new (Qe || Mr)(),
                    string: new Sr(),
                  });
              }
              function Vr(t) {
                var e = Vo(this, t)["delete"](t);
                return (this.size -= e ? 1 : 0), e;
              }
              function Gr(t) {
                return Vo(this, t).get(t);
              }
              function $r(t) {
                return Vo(this, t).has(t);
              }
              function qr(t, e) {
                var n = Vo(this, t),
                  r = n.size;
                return n.set(t, e), (this.size += n.size == r ? 0 : 1), this;
              }
              function Hr(t) {
                var e = -1,
                  n = null == t ? 0 : t.length;
                this.__data__ = new zr();
                while (++e < n) this.add(t[e]);
              }
              function Wr(t) {
                return this.__data__.set(t, s), this;
              }
              function Kr(t) {
                return this.__data__.has(t);
              }
              function Yr(t) {
                var e = (this.__data__ = new Mr(t));
                this.size = e.size;
              }
              function Jr() {
                (this.__data__ = new Mr()), (this.size = 0);
              }
              function Zr(t) {
                var e = this.__data__,
                  n = e["delete"](t);
                return (this.size = e.size), n;
              }
              function Qr(t) {
                return this.__data__.get(t);
              }
              function ti(t) {
                return this.__data__.has(t);
              }
              function ei(t, e) {
                var n = this.__data__;
                if (n instanceof Mr) {
                  var r = n.__data__;
                  if (!Qe || r.length < c - 1)
                    return r.push([t, e]), (this.size = ++n.size), this;
                  n = this.__data__ = new zr(r);
                }
                return n.set(t, e), (this.size = n.size), this;
              }
              function ni(t, e) {
                var n = os(t),
                  r = !n && as(t),
                  i = !n && !r && fs(t),
                  a = !n && !r && !i && Us(t),
                  o = n || r || i || a,
                  c = o ? qn(t.length, ie) : [],
                  u = c.length;
                for (var l in t)
                  (!e && !fe.call(t, l)) ||
                    (o &&
                      ("length" == l ||
                        (i && ("offset" == l || "parent" == l)) ||
                        (a &&
                          ("buffer" == l ||
                            "byteLength" == l ||
                            "byteOffset" == l)) ||
                        ic(l, u))) ||
                    c.push(l);
                return c;
              }
              function ri(t) {
                var e = t.length;
                return e ? t[va(0, e - 1)] : a;
              }
              function ii(t, e) {
                return jc(eo(t), hi(e, 0, t.length));
              }
              function ai(t) {
                return jc(eo(t));
              }
              function oi(t, e, n) {
                ((n !== a && !ns(t[e], n)) || (n === a && !(e in t))) &&
                  pi(t, e, n);
              }
              function ci(t, e, n) {
                var r = t[e];
                (fe.call(t, e) && ns(r, n) && (n !== a || e in t)) ||
                  pi(t, e, n);
              }
              function ui(t, e) {
                var n = t.length;
                while (n--) if (ns(t[n][0], e)) return n;
                return -1;
              }
              function li(t, e, n, r) {
                return (
                  _i(t, function (t, i, a) {
                    e(r, t, n(t), a);
                  }),
                  r
                );
              }
              function si(t, e) {
                return t && no(e, wf(e), t);
              }
              function fi(t, e) {
                return t && no(e, xf(e), t);
              }
              function pi(t, e, n) {
                "__proto__" == e && Se
                  ? Se(t, e, {
                      configurable: !0,
                      enumerable: !0,
                      value: n,
                      writable: !0,
                    })
                  : (t[e] = n);
              }
              function di(t, e) {
                var r = -1,
                  i = e.length,
                  o = n(i),
                  c = null == t;
                while (++r < i) o[r] = c ? a : vf(t, e[r]);
                return o;
              }
              function hi(t, e, n) {
                return (
                  t === t &&
                    (n !== a && (t = t <= n ? t : n),
                    e !== a && (t = t >= e ? t : e)),
                  t
                );
              }
              function vi(t, e, n, r, i, o) {
                var c,
                  u = e & d,
                  l = e & h,
                  s = e & v;
                if ((n && (c = i ? n(t, r, i, o) : n(t)), c !== a)) return c;
                if (!xs(t)) return t;
                var f = os(t);
                if (f) {
                  if (((c = Qo(t)), !u)) return eo(t, c);
                } else {
                  var p = Ko(t),
                    b = p == Y || p == J;
                  if (fs(t)) return $a(t, u);
                  if (p == et || p == V || (b && !i)) {
                    if (((c = l || b ? {} : tc(t)), !u))
                      return l ? io(t, fi(c, t)) : ro(t, si(c, t));
                  } else {
                    if (!Je[p]) return i ? t : {};
                    c = ec(t, p, u);
                  }
                }
                o || (o = new Yr());
                var m = o.get(t);
                if (m) return m;
                o.set(t, c),
                  Ms(t)
                    ? t.forEach(function (r) {
                        c.add(vi(r, e, n, r, t, o));
                      })
                    : Ts(t) &&
                      t.forEach(function (r, i) {
                        c.set(i, vi(r, e, n, i, t, o));
                      });
                var g = s ? (l ? Uo : Po) : l ? xf : wf,
                  y = f ? a : g(t);
                return (
                  wn(y || t, function (r, i) {
                    y && ((i = r), (r = t[i])), ci(c, i, vi(r, e, n, i, t, o));
                  }),
                  c
                );
              }
              function bi(t) {
                var e = wf(t);
                return function (n) {
                  return mi(n, t, e);
                };
              }
              function mi(t, e, n) {
                var r = n.length;
                if (null == t) return !r;
                t = ne(t);
                while (r--) {
                  var i = n[r],
                    o = e[i],
                    c = t[i];
                  if ((c === a && !(i in t)) || !o(c)) return !1;
                }
                return !0;
              }
              function gi(t, e, n) {
                if ("function" != typeof t) throw new ae(l);
                return Oc(function () {
                  t.apply(a, n);
                }, e);
              }
              function yi(t, e, n, r) {
                var i = -1,
                  a = En,
                  o = !0,
                  u = t.length,
                  l = [],
                  s = e.length;
                if (!u) return l;
                n && (e = jn(e, Wn(n))),
                  r
                    ? ((a = kn), (o = !1))
                    : e.length >= c && ((a = Yn), (o = !1), (e = new Hr(e)));
                t: while (++i < u) {
                  var f = t[i],
                    p = null == n ? f : n(f);
                  if (((f = r || 0 !== f ? f : 0), o && p === p)) {
                    var d = s;
                    while (d--) if (e[d] === p) continue t;
                    l.push(f);
                  } else a(e, p, r) || l.push(f);
                }
                return l;
              }
              (_r.templateSettings = {
                escape: St,
                evaluate: It,
                interpolate: At,
                variable: "",
                imports: { _: _r },
              }),
                (_r.prototype = Or.prototype),
                (_r.prototype.constructor = _r),
                (Tr.prototype = xr(Or.prototype)),
                (Tr.prototype.constructor = Tr),
                (Er.prototype = xr(Or.prototype)),
                (Er.prototype.constructor = Er),
                (Sr.prototype.clear = Ir),
                (Sr.prototype["delete"] = Ar),
                (Sr.prototype.get = Lr),
                (Sr.prototype.has = Nr),
                (Sr.prototype.set = Rr),
                (Mr.prototype.clear = Dr),
                (Mr.prototype["delete"] = Pr),
                (Mr.prototype.get = Ur),
                (Mr.prototype.has = Br),
                (Mr.prototype.set = Fr),
                (zr.prototype.clear = Xr),
                (zr.prototype["delete"] = Vr),
                (zr.prototype.get = Gr),
                (zr.prototype.has = $r),
                (zr.prototype.set = qr),
                (Hr.prototype.add = Hr.prototype.push = Wr),
                (Hr.prototype.has = Kr),
                (Yr.prototype.clear = Jr),
                (Yr.prototype["delete"] = Zr),
                (Yr.prototype.get = Qr),
                (Yr.prototype.has = ti),
                (Yr.prototype.set = ei);
              var _i = co(Si),
                wi = co(Ii, !0);
              function xi(t, e) {
                var n = !0;
                return (
                  _i(t, function (t, r, i) {
                    return (n = !!e(t, r, i)), n;
                  }),
                  n
                );
              }
              function Oi(t, e, n) {
                var r = -1,
                  i = t.length;
                while (++r < i) {
                  var o = t[r],
                    c = e(o);
                  if (null != c && (u === a ? c === c && !Ps(c) : n(c, u)))
                    var u = c,
                      l = o;
                }
                return l;
              }
              function Ti(t, e, n, r) {
                var i = t.length;
                (n = qs(n)),
                  n < 0 && (n = -n > i ? 0 : i + n),
                  (r = r === a || r > i ? i : qs(r)),
                  r < 0 && (r += i),
                  (r = n > r ? 0 : Hs(r));
                while (n < r) t[n++] = e;
                return t;
              }
              function Ei(t, e) {
                var n = [];
                return (
                  _i(t, function (t, r, i) {
                    e(t, r, i) && n.push(t);
                  }),
                  n
                );
              }
              function ki(t, e, n, r, i) {
                var a = -1,
                  o = t.length;
                n || (n = rc), i || (i = []);
                while (++a < o) {
                  var c = t[a];
                  e > 0 && n(c)
                    ? e > 1
                      ? ki(c, e - 1, n, r, i)
                      : Cn(i, c)
                    : r || (i[i.length] = c);
                }
                return i;
              }
              var ji = uo(),
                Ci = uo(!0);
              function Si(t, e) {
                return t && ji(t, e, wf);
              }
              function Ii(t, e) {
                return t && Ci(t, e, wf);
              }
              function Ai(t, e) {
                return Tn(e, function (e) {
                  return ys(t[e]);
                });
              }
              function Li(t, e) {
                e = za(e, t);
                var n = 0,
                  r = e.length;
                while (null != t && n < r) t = t[Sc(e[n++])];
                return n && n == r ? t : a;
              }
              function Ni(t, e, n) {
                var r = e(t);
                return os(t) ? r : Cn(r, n(t));
              }
              function Ri(t) {
                return null == t
                  ? t === a
                    ? ut
                    : tt
                  : Ce && Ce in ne(t)
                  ? qo(t)
                  : mc(t);
              }
              function Mi(t, e) {
                return t > e;
              }
              function Di(t, e) {
                return null != t && fe.call(t, e);
              }
              function Pi(t, e) {
                return null != t && e in ne(t);
              }
              function Ui(t, e, n) {
                return t >= ze(e, n) && t < Fe(e, n);
              }
              function Bi(t, e, r) {
                var i = r ? kn : En,
                  o = t[0].length,
                  c = t.length,
                  u = c,
                  l = n(c),
                  s = 1 / 0,
                  f = [];
                while (u--) {
                  var p = t[u];
                  u && e && (p = jn(p, Wn(e))),
                    (s = ze(p.length, s)),
                    (l[u] =
                      !r && (e || (o >= 120 && p.length >= 120))
                        ? new Hr(u && p)
                        : a);
                }
                p = t[0];
                var d = -1,
                  h = l[0];
                t: while (++d < o && f.length < s) {
                  var v = p[d],
                    b = e ? e(v) : v;
                  if (
                    ((v = r || 0 !== v ? v : 0), !(h ? Yn(h, b) : i(f, b, r)))
                  ) {
                    u = c;
                    while (--u) {
                      var m = l[u];
                      if (!(m ? Yn(m, b) : i(t[u], b, r))) continue t;
                    }
                    h && h.push(b), f.push(v);
                  }
                }
                return f;
              }
              function Fi(t, e, n, r) {
                return (
                  Si(t, function (t, i, a) {
                    e(r, n(t), i, a);
                  }),
                  r
                );
              }
              function zi(t, e, n) {
                (e = za(e, t)), (t = yc(t, e));
                var r = null == t ? t : t[Sc(ru(e))];
                return null == r ? a : yn(r, t, n);
              }
              function Xi(t) {
                return Os(t) && Ri(t) == V;
              }
              function Vi(t) {
                return Os(t) && Ri(t) == ft;
              }
              function Gi(t) {
                return Os(t) && Ri(t) == H;
              }
              function $i(t, e, n, r, i) {
                return (
                  t === e ||
                  (null == t || null == e || (!Os(t) && !Os(e))
                    ? t !== t && e !== e
                    : qi(t, e, n, r, $i, i))
                );
              }
              function qi(t, e, n, r, i, a) {
                var o = os(t),
                  c = os(e),
                  u = o ? G : Ko(t),
                  l = c ? G : Ko(e);
                (u = u == V ? et : u), (l = l == V ? et : l);
                var s = u == et,
                  f = l == et,
                  p = u == l;
                if (p && fs(t)) {
                  if (!fs(e)) return !1;
                  (o = !0), (s = !1);
                }
                if (p && !s)
                  return (
                    a || (a = new Yr()),
                    o || Us(t) ? No(t, e, n, r, i, a) : Ro(t, e, u, n, r, i, a)
                  );
                if (!(n & b)) {
                  var d = s && fe.call(t, "__wrapped__"),
                    h = f && fe.call(e, "__wrapped__");
                  if (d || h) {
                    var v = d ? t.value() : t,
                      m = h ? e.value() : e;
                    return a || (a = new Yr()), i(v, m, n, r, a);
                  }
                }
                return !!p && (a || (a = new Yr()), Mo(t, e, n, r, i, a));
              }
              function Hi(t) {
                return Os(t) && Ko(t) == Z;
              }
              function Wi(t, e, n, r) {
                var i = n.length,
                  o = i,
                  c = !r;
                if (null == t) return !o;
                t = ne(t);
                while (i--) {
                  var u = n[i];
                  if (c && u[2] ? u[1] !== t[u[0]] : !(u[0] in t)) return !1;
                }
                while (++i < o) {
                  u = n[i];
                  var l = u[0],
                    s = t[l],
                    f = u[1];
                  if (c && u[2]) {
                    if (s === a && !(l in t)) return !1;
                  } else {
                    var p = new Yr();
                    if (r) var d = r(s, f, l, t, e, p);
                    if (!(d === a ? $i(f, s, b | m, r, p) : d)) return !1;
                  }
                }
                return !0;
              }
              function Ki(t) {
                if (!xs(t) || lc(t)) return !1;
                var e = ys(t) ? me : Kt;
                return e.test(Ic(t));
              }
              function Yi(t) {
                return Os(t) && Ri(t) == it;
              }
              function Ji(t) {
                return Os(t) && Ko(t) == at;
              }
              function Zi(t) {
                return Os(t) && ws(t.length) && !!Ye[Ri(t)];
              }
              function Qi(t) {
                return "function" == typeof t
                  ? t
                  : null == t
                  ? Sp
                  : "object" == typeof t
                  ? os(t)
                    ? aa(t[0], t[1])
                    : ia(t)
                  : Xp(t);
              }
              function ta(t) {
                if (!fc(t)) return Be(t);
                var e = [];
                for (var n in ne(t))
                  fe.call(t, n) && "constructor" != n && e.push(n);
                return e;
              }
              function ea(t) {
                if (!xs(t)) return bc(t);
                var e = fc(t),
                  n = [];
                for (var r in t)
                  ("constructor" != r || (!e && fe.call(t, r))) && n.push(r);
                return n;
              }
              function na(t, e) {
                return t < e;
              }
              function ra(t, e) {
                var r = -1,
                  i = us(t) ? n(t.length) : [];
                return (
                  _i(t, function (t, n, a) {
                    i[++r] = e(t, n, a);
                  }),
                  i
                );
              }
              function ia(t) {
                var e = Go(t);
                return 1 == e.length && e[0][2]
                  ? dc(e[0][0], e[0][1])
                  : function (n) {
                      return n === t || Wi(n, t, e);
                    };
              }
              function aa(t, e) {
                return oc(t) && pc(e)
                  ? dc(Sc(t), e)
                  : function (n) {
                      var r = vf(n, t);
                      return r === a && r === e ? mf(n, t) : $i(e, r, b | m);
                    };
              }
              function oa(t, e, n, r, i) {
                t !== e &&
                  ji(
                    e,
                    function (o, c) {
                      if ((i || (i = new Yr()), xs(o)))
                        ca(t, e, c, n, oa, r, i);
                      else {
                        var u = r ? r(wc(t, c), o, c + "", t, e, i) : a;
                        u === a && (u = o), oi(t, c, u);
                      }
                    },
                    xf
                  );
              }
              function ca(t, e, n, r, i, o, c) {
                var u = wc(t, n),
                  l = wc(e, n),
                  s = c.get(l);
                if (s) oi(t, n, s);
                else {
                  var f = o ? o(u, l, n + "", t, e, c) : a,
                    p = f === a;
                  if (p) {
                    var d = os(l),
                      h = !d && fs(l),
                      v = !d && !h && Us(l);
                    (f = l),
                      d || h || v
                        ? os(u)
                          ? (f = u)
                          : ls(u)
                          ? (f = eo(u))
                          : h
                          ? ((p = !1), (f = $a(l, !0)))
                          : v
                          ? ((p = !1), (f = Ya(l, !0)))
                          : (f = [])
                        : Ls(l) || as(l)
                        ? ((f = u),
                          as(u)
                            ? (f = Ks(u))
                            : (xs(u) && !ys(u)) || (f = tc(l)))
                        : (p = !1);
                  }
                  p && (c.set(l, f), i(f, l, r, o, c), c["delete"](l)),
                    oi(t, n, f);
                }
              }
              function ua(t, e) {
                var n = t.length;
                if (n) return (e += e < 0 ? n : 0), ic(e, n) ? t[e] : a;
              }
              function la(t, e, n) {
                var r = -1;
                e = jn(e.length ? e : [Sp], Wn(Xo()));
                var i = ra(t, function (t, n, i) {
                  var a = jn(e, function (e) {
                    return e(t);
                  });
                  return { criteria: a, index: ++r, value: t };
                });
                return Gn(i, function (t, e) {
                  return Za(t, e, n);
                });
              }
              function sa(t, e) {
                return fa(t, e, function (e, n) {
                  return mf(t, n);
                });
              }
              function fa(t, e, n) {
                var r = -1,
                  i = e.length,
                  a = {};
                while (++r < i) {
                  var o = e[r],
                    c = Li(t, o);
                  n(c, o) && wa(a, za(o, t), c);
                }
                return a;
              }
              function pa(t) {
                return function (e) {
                  return Li(e, t);
                };
              }
              function da(t, e, n, r) {
                var i = r ? Un : Pn,
                  a = -1,
                  o = e.length,
                  c = t;
                t === e && (e = eo(e)), n && (c = jn(t, Wn(n)));
                while (++a < o) {
                  var u = 0,
                    l = e[a],
                    s = n ? n(l) : l;
                  while ((u = i(c, s, u, r)) > -1)
                    c !== t && Ee.call(c, u, 1), Ee.call(t, u, 1);
                }
                return t;
              }
              function ha(t, e) {
                var n = t ? e.length : 0,
                  r = n - 1;
                while (n--) {
                  var i = e[n];
                  if (n == r || i !== a) {
                    var a = i;
                    ic(i) ? Ee.call(t, i, 1) : Na(t, i);
                  }
                }
                return t;
              }
              function va(t, e) {
                return t + Re(qe() * (e - t + 1));
              }
              function ba(t, e, r, i) {
                var a = -1,
                  o = Fe(Ne((e - t) / (r || 1)), 0),
                  c = n(o);
                while (o--) (c[i ? o : ++a] = t), (t += r);
                return c;
              }
              function ma(t, e) {
                var n = "";
                if (!t || e < 1 || e > D) return n;
                do {
                  e % 2 && (n += t), (e = Re(e / 2)), e && (t += t);
                } while (e);
                return n;
              }
              function ga(t, e) {
                return Tc(gc(t, e, Sp), t + "");
              }
              function ya(t) {
                return ri(Ff(t));
              }
              function _a(t, e) {
                var n = Ff(t);
                return jc(n, hi(e, 0, n.length));
              }
              function wa(t, e, n, r) {
                if (!xs(t)) return t;
                e = za(e, t);
                var i = -1,
                  o = e.length,
                  c = o - 1,
                  u = t;
                while (null != u && ++i < o) {
                  var l = Sc(e[i]),
                    s = n;
                  if (i != c) {
                    var f = u[l];
                    (s = r ? r(f, l, u) : a),
                      s === a && (s = xs(f) ? f : ic(e[i + 1]) ? [] : {});
                  }
                  ci(u, l, s), (u = u[l]);
                }
                return t;
              }
              var xa = un
                  ? function (t, e) {
                      return un.set(t, e), t;
                    }
                  : Sp,
                Oa = Se
                  ? function (t, e) {
                      return Se(t, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: Ep(e),
                        writable: !0,
                      });
                    }
                  : Sp;
              function Ta(t) {
                return jc(Ff(t));
              }
              function Ea(t, e, r) {
                var i = -1,
                  a = t.length;
                e < 0 && (e = -e > a ? 0 : a + e),
                  (r = r > a ? a : r),
                  r < 0 && (r += a),
                  (a = e > r ? 0 : (r - e) >>> 0),
                  (e >>>= 0);
                var o = n(a);
                while (++i < a) o[i] = t[i + e];
                return o;
              }
              function ka(t, e) {
                var n;
                return (
                  _i(t, function (t, r, i) {
                    return (n = e(t, r, i)), !n;
                  }),
                  !!n
                );
              }
              function ja(t, e, n) {
                var r = 0,
                  i = null == t ? r : t.length;
                if ("number" == typeof e && e === e && i <= z) {
                  while (r < i) {
                    var a = (r + i) >>> 1,
                      o = t[a];
                    null !== o && !Ps(o) && (n ? o <= e : o < e)
                      ? (r = a + 1)
                      : (i = a);
                  }
                  return i;
                }
                return Ca(t, e, Sp, n);
              }
              function Ca(t, e, n, r) {
                e = n(e);
                var i = 0,
                  o = null == t ? 0 : t.length,
                  c = e !== e,
                  u = null === e,
                  l = Ps(e),
                  s = e === a;
                while (i < o) {
                  var f = Re((i + o) / 2),
                    p = n(t[f]),
                    d = p !== a,
                    h = null === p,
                    v = p === p,
                    b = Ps(p);
                  if (c) var m = r || v;
                  else
                    m = s
                      ? v && (r || d)
                      : u
                      ? v && d && (r || !h)
                      : l
                      ? v && d && !h && (r || !b)
                      : !h && !b && (r ? p <= e : p < e);
                  m ? (i = f + 1) : (o = f);
                }
                return ze(o, F);
              }
              function Sa(t, e) {
                var n = -1,
                  r = t.length,
                  i = 0,
                  a = [];
                while (++n < r) {
                  var o = t[n],
                    c = e ? e(o) : o;
                  if (!n || !ns(c, u)) {
                    var u = c;
                    a[i++] = 0 === o ? 0 : o;
                  }
                }
                return a;
              }
              function Ia(t) {
                return "number" == typeof t ? t : Ps(t) ? U : +t;
              }
              function Aa(t) {
                if ("string" == typeof t) return t;
                if (os(t)) return jn(t, Aa) + "";
                if (Ps(t)) return gr ? gr.call(t) : "";
                var e = t + "";
                return "0" == e && 1 / t == -M ? "-0" : e;
              }
              function La(t, e, n) {
                var r = -1,
                  i = En,
                  a = t.length,
                  o = !0,
                  u = [],
                  l = u;
                if (n) (o = !1), (i = kn);
                else if (a >= c) {
                  var s = e ? null : jo(t);
                  if (s) return sr(s);
                  (o = !1), (i = Yn), (l = new Hr());
                } else l = e ? [] : u;
                t: while (++r < a) {
                  var f = t[r],
                    p = e ? e(f) : f;
                  if (((f = n || 0 !== f ? f : 0), o && p === p)) {
                    var d = l.length;
                    while (d--) if (l[d] === p) continue t;
                    e && l.push(p), u.push(f);
                  } else i(l, p, n) || (l !== u && l.push(p), u.push(f));
                }
                return u;
              }
              function Na(t, e) {
                return (
                  (e = za(e, t)),
                  (t = yc(t, e)),
                  null == t || delete t[Sc(ru(e))]
                );
              }
              function Ra(t, e, n, r) {
                return wa(t, e, n(Li(t, e)), r);
              }
              function Ma(t, e, n, r) {
                var i = t.length,
                  a = r ? i : -1;
                while ((r ? a-- : ++a < i) && e(t[a], a, t));
                return n
                  ? Ea(t, r ? 0 : a, r ? a + 1 : i)
                  : Ea(t, r ? a + 1 : 0, r ? i : a);
              }
              function Da(t, e) {
                var n = t;
                return (
                  n instanceof Er && (n = n.value()),
                  Sn(
                    e,
                    function (t, e) {
                      return e.func.apply(e.thisArg, Cn([t], e.args));
                    },
                    n
                  )
                );
              }
              function Pa(t, e, r) {
                var i = t.length;
                if (i < 2) return i ? La(t[0]) : [];
                var a = -1,
                  o = n(i);
                while (++a < i) {
                  var c = t[a],
                    u = -1;
                  while (++u < i) u != a && (o[a] = yi(o[a] || c, t[u], e, r));
                }
                return La(ki(o, 1), e, r);
              }
              function Ua(t, e, n) {
                var r = -1,
                  i = t.length,
                  o = e.length,
                  c = {};
                while (++r < i) {
                  var u = r < o ? e[r] : a;
                  n(c, t[r], u);
                }
                return c;
              }
              function Ba(t) {
                return ls(t) ? t : [];
              }
              function Fa(t) {
                return "function" == typeof t ? t : Sp;
              }
              function za(t, e) {
                return os(t) ? t : oc(t, e) ? [t] : Cc(Js(t));
              }
              var Xa = ga;
              function Va(t, e, n) {
                var r = t.length;
                return (n = n === a ? r : n), !e && n >= r ? t : Ea(t, e, n);
              }
              var Ga =
                Ie ||
                function (t) {
                  return cn.clearTimeout(t);
                };
              function $a(t, e) {
                if (e) return t.slice();
                var n = t.length,
                  r = we ? we(n) : new t.constructor(n);
                return t.copy(r), r;
              }
              function qa(t) {
                var e = new t.constructor(t.byteLength);
                return new _e(e).set(new _e(t)), e;
              }
              function Ha(t, e) {
                var n = e ? qa(t.buffer) : t.buffer;
                return new t.constructor(n, t.byteOffset, t.byteLength);
              }
              function Wa(t) {
                var e = new t.constructor(t.source, qt.exec(t));
                return (e.lastIndex = t.lastIndex), e;
              }
              function Ka(t) {
                return mr ? ne(mr.call(t)) : {};
              }
              function Ya(t, e) {
                var n = e ? qa(t.buffer) : t.buffer;
                return new t.constructor(n, t.byteOffset, t.length);
              }
              function Ja(t, e) {
                if (t !== e) {
                  var n = t !== a,
                    r = null === t,
                    i = t === t,
                    o = Ps(t),
                    c = e !== a,
                    u = null === e,
                    l = e === e,
                    s = Ps(e);
                  if (
                    (!u && !s && !o && t > e) ||
                    (o && c && l && !u && !s) ||
                    (r && c && l) ||
                    (!n && l) ||
                    !i
                  )
                    return 1;
                  if (
                    (!r && !o && !s && t < e) ||
                    (s && n && i && !r && !o) ||
                    (u && n && i) ||
                    (!c && i) ||
                    !l
                  )
                    return -1;
                }
                return 0;
              }
              function Za(t, e, n) {
                var r = -1,
                  i = t.criteria,
                  a = e.criteria,
                  o = i.length,
                  c = n.length;
                while (++r < o) {
                  var u = Ja(i[r], a[r]);
                  if (u) {
                    if (r >= c) return u;
                    var l = n[r];
                    return u * ("desc" == l ? -1 : 1);
                  }
                }
                return t.index - e.index;
              }
              function Qa(t, e, r, i) {
                var a = -1,
                  o = t.length,
                  c = r.length,
                  u = -1,
                  l = e.length,
                  s = Fe(o - c, 0),
                  f = n(l + s),
                  p = !i;
                while (++u < l) f[u] = e[u];
                while (++a < c) (p || a < o) && (f[r[a]] = t[a]);
                while (s--) f[u++] = t[a++];
                return f;
              }
              function to(t, e, r, i) {
                var a = -1,
                  o = t.length,
                  c = -1,
                  u = r.length,
                  l = -1,
                  s = e.length,
                  f = Fe(o - u, 0),
                  p = n(f + s),
                  d = !i;
                while (++a < f) p[a] = t[a];
                var h = a;
                while (++l < s) p[h + l] = e[l];
                while (++c < u) (d || a < o) && (p[h + r[c]] = t[a++]);
                return p;
              }
              function eo(t, e) {
                var r = -1,
                  i = t.length;
                e || (e = n(i));
                while (++r < i) e[r] = t[r];
                return e;
              }
              function no(t, e, n, r) {
                var i = !n;
                n || (n = {});
                var o = -1,
                  c = e.length;
                while (++o < c) {
                  var u = e[o],
                    l = r ? r(n[u], t[u], u, n, t) : a;
                  l === a && (l = t[u]), i ? pi(n, u, l) : ci(n, u, l);
                }
                return n;
              }
              function ro(t, e) {
                return no(t, Ho(t), e);
              }
              function io(t, e) {
                return no(t, Wo(t), e);
              }
              function ao(t, e) {
                return function (n, r) {
                  var i = os(n) ? _n : li,
                    a = e ? e() : {};
                  return i(n, t, Xo(r, 2), a);
                };
              }
              function oo(t) {
                return ga(function (e, n) {
                  var r = -1,
                    i = n.length,
                    o = i > 1 ? n[i - 1] : a,
                    c = i > 2 ? n[2] : a;
                  (o = t.length > 3 && "function" == typeof o ? (i--, o) : a),
                    c && ac(n[0], n[1], c) && ((o = i < 3 ? a : o), (i = 1)),
                    (e = ne(e));
                  while (++r < i) {
                    var u = n[r];
                    u && t(e, u, r, o);
                  }
                  return e;
                });
              }
              function co(t, e) {
                return function (n, r) {
                  if (null == n) return n;
                  if (!us(n)) return t(n, r);
                  var i = n.length,
                    a = e ? i : -1,
                    o = ne(n);
                  while (e ? a-- : ++a < i) if (!1 === r(o[a], a, o)) break;
                  return n;
                };
              }
              function uo(t) {
                return function (e, n, r) {
                  var i = -1,
                    a = ne(e),
                    o = r(e),
                    c = o.length;
                  while (c--) {
                    var u = o[t ? c : ++i];
                    if (!1 === n(a[u], u, a)) break;
                  }
                  return e;
                };
              }
              function lo(t, e, n) {
                var r = e & g,
                  i = po(t);
                function a() {
                  var e = this && this !== cn && this instanceof a ? i : t;
                  return e.apply(r ? n : this, arguments);
                }
                return a;
              }
              function so(t) {
                return function (e) {
                  e = Js(e);
                  var n = ir(e) ? vr(e) : a,
                    r = n ? n[0] : e.charAt(0),
                    i = n ? Va(n, 1).join("") : e.slice(1);
                  return r[t]() + i;
                };
              }
              function fo(t) {
                return function (e) {
                  return Sn(_p(Hf(e).replace(Xe, "")), t, "");
                };
              }
              function po(t) {
                return function () {
                  var e = arguments;
                  switch (e.length) {
                    case 0:
                      return new t();
                    case 1:
                      return new t(e[0]);
                    case 2:
                      return new t(e[0], e[1]);
                    case 3:
                      return new t(e[0], e[1], e[2]);
                    case 4:
                      return new t(e[0], e[1], e[2], e[3]);
                    case 5:
                      return new t(e[0], e[1], e[2], e[3], e[4]);
                    case 6:
                      return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
                    case 7:
                      return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6]);
                  }
                  var n = xr(t.prototype),
                    r = t.apply(n, e);
                  return xs(r) ? r : n;
                };
              }
              function ho(t, e, r) {
                var i = po(t);
                function o() {
                  var c = arguments.length,
                    u = n(c),
                    l = c,
                    s = zo(o);
                  while (l--) u[l] = arguments[l];
                  var f = c < 3 && u[0] !== s && u[c - 1] !== s ? [] : lr(u, s);
                  if (((c -= f.length), c < r))
                    return Eo(t, e, mo, o.placeholder, a, u, f, a, a, r - c);
                  var p = this && this !== cn && this instanceof o ? i : t;
                  return yn(p, this, u);
                }
                return o;
              }
              function vo(t) {
                return function (e, n, r) {
                  var i = ne(e);
                  if (!us(e)) {
                    var o = Xo(n, 3);
                    (e = wf(e)),
                      (n = function (t) {
                        return o(i[t], t, i);
                      });
                  }
                  var c = t(e, n, r);
                  return c > -1 ? i[o ? e[c] : c] : a;
                };
              }
              function bo(t) {
                return Do(function (e) {
                  var n = e.length,
                    r = n,
                    i = Tr.prototype.thru;
                  t && e.reverse();
                  while (r--) {
                    var o = e[r];
                    if ("function" != typeof o) throw new ae(l);
                    if (i && !c && "wrapper" == Fo(o)) var c = new Tr([], !0);
                  }
                  r = c ? r : n;
                  while (++r < n) {
                    o = e[r];
                    var u = Fo(o),
                      s = "wrapper" == u ? Bo(o) : a;
                    c =
                      s &&
                      uc(s[0]) &&
                      s[1] == (E | w | O | k) &&
                      !s[4].length &&
                      1 == s[9]
                        ? c[Fo(s[0])].apply(c, s[3])
                        : 1 == o.length && uc(o)
                        ? c[u]()
                        : c.thru(o);
                  }
                  return function () {
                    var t = arguments,
                      r = t[0];
                    if (c && 1 == t.length && os(r)) return c.plant(r).value();
                    var i = 0,
                      a = n ? e[i].apply(this, t) : r;
                    while (++i < n) a = e[i].call(this, a);
                    return a;
                  };
                });
              }
              function mo(t, e, r, i, o, c, u, l, s, f) {
                var p = e & E,
                  d = e & g,
                  h = e & y,
                  v = e & (w | x),
                  b = e & j,
                  m = h ? a : po(t);
                function _() {
                  var a = arguments.length,
                    g = n(a),
                    y = a;
                  while (y--) g[y] = arguments[y];
                  if (v)
                    var w = zo(_),
                      x = Qn(g, w);
                  if (
                    (i && (g = Qa(g, i, o, v)),
                    c && (g = to(g, c, u, v)),
                    (a -= x),
                    v && a < f)
                  ) {
                    var O = lr(g, w);
                    return Eo(t, e, mo, _.placeholder, r, g, O, l, s, f - a);
                  }
                  var T = d ? r : this,
                    E = h ? T[t] : t;
                  return (
                    (a = g.length),
                    l ? (g = _c(g, l)) : b && a > 1 && g.reverse(),
                    p && s < a && (g.length = s),
                    this &&
                      this !== cn &&
                      this instanceof _ &&
                      (E = m || po(E)),
                    E.apply(T, g)
                  );
                }
                return _;
              }
              function go(t, e) {
                return function (n, r) {
                  return Fi(n, t, e(r), {});
                };
              }
              function yo(t, e) {
                return function (n, r) {
                  var i;
                  if (n === a && r === a) return e;
                  if ((n !== a && (i = n), r !== a)) {
                    if (i === a) return r;
                    "string" == typeof n || "string" == typeof r
                      ? ((n = Aa(n)), (r = Aa(r)))
                      : ((n = Ia(n)), (r = Ia(r))),
                      (i = t(n, r));
                  }
                  return i;
                };
              }
              function _o(t) {
                return Do(function (e) {
                  return (
                    (e = jn(e, Wn(Xo()))),
                    ga(function (n) {
                      var r = this;
                      return t(e, function (t) {
                        return yn(t, r, n);
                      });
                    })
                  );
                });
              }
              function wo(t, e) {
                e = e === a ? " " : Aa(e);
                var n = e.length;
                if (n < 2) return n ? ma(e, t) : e;
                var r = ma(e, Ne(t / hr(e)));
                return ir(e) ? Va(vr(r), 0, t).join("") : r.slice(0, t);
              }
              function xo(t, e, r, i) {
                var a = e & g,
                  o = po(t);
                function c() {
                  var e = -1,
                    u = arguments.length,
                    l = -1,
                    s = i.length,
                    f = n(s + u),
                    p = this && this !== cn && this instanceof c ? o : t;
                  while (++l < s) f[l] = i[l];
                  while (u--) f[l++] = arguments[++e];
                  return yn(p, a ? r : this, f);
                }
                return c;
              }
              function Oo(t) {
                return function (e, n, r) {
                  return (
                    r && "number" != typeof r && ac(e, n, r) && (n = r = a),
                    (e = $s(e)),
                    n === a ? ((n = e), (e = 0)) : (n = $s(n)),
                    (r = r === a ? (e < n ? 1 : -1) : $s(r)),
                    ba(e, n, r, t)
                  );
                };
              }
              function To(t) {
                return function (e, n) {
                  return (
                    ("string" == typeof e && "string" == typeof n) ||
                      ((e = Ws(e)), (n = Ws(n))),
                    t(e, n)
                  );
                };
              }
              function Eo(t, e, n, r, i, o, c, u, l, s) {
                var f = e & w,
                  p = f ? c : a,
                  d = f ? a : c,
                  h = f ? o : a,
                  v = f ? a : o;
                (e |= f ? O : T), (e &= ~(f ? T : O)), e & _ || (e &= ~(g | y));
                var b = [t, e, i, h, p, v, d, u, l, s],
                  m = n.apply(a, b);
                return uc(t) && xc(m, b), (m.placeholder = r), Ec(m, t, e);
              }
              function ko(t) {
                var e = ee[t];
                return function (t, n) {
                  if (
                    ((t = Ws(t)),
                    (n = null == n ? 0 : ze(qs(n), 292)),
                    n && Pe(t))
                  ) {
                    var r = (Js(t) + "e").split("e"),
                      i = e(r[0] + "e" + (+r[1] + n));
                    return (
                      (r = (Js(i) + "e").split("e")),
                      +(r[0] + "e" + (+r[1] - n))
                    );
                  }
                  return e(t);
                };
              }
              var jo =
                en && 1 / sr(new en([, -0]))[1] == M
                  ? function (t) {
                      return new en(t);
                    }
                  : Pp;
              function Co(t) {
                return function (e) {
                  var n = Ko(e);
                  return n == Z ? cr(e) : n == at ? fr(e) : Hn(e, t(e));
                };
              }
              function So(t, e, n, r, i, o, c, u) {
                var s = e & y;
                if (!s && "function" != typeof t) throw new ae(l);
                var f = r ? r.length : 0;
                if (
                  (f || ((e &= ~(O | T)), (r = i = a)),
                  (c = c === a ? c : Fe(qs(c), 0)),
                  (u = u === a ? u : qs(u)),
                  (f -= i ? i.length : 0),
                  e & T)
                ) {
                  var p = r,
                    d = i;
                  r = i = a;
                }
                var h = s ? a : Bo(t),
                  v = [t, e, n, r, i, p, d, o, c, u];
                if (
                  (h && vc(v, h),
                  (t = v[0]),
                  (e = v[1]),
                  (n = v[2]),
                  (r = v[3]),
                  (i = v[4]),
                  (u = v[9] =
                    v[9] === a ? (s ? 0 : t.length) : Fe(v[9] - f, 0)),
                  !u && e & (w | x) && (e &= ~(w | x)),
                  e && e != g)
                )
                  b =
                    e == w || e == x
                      ? ho(t, e, u)
                      : (e != O && e != (g | O)) || i.length
                      ? mo.apply(a, v)
                      : xo(t, e, n, r);
                else var b = lo(t, e, n);
                var m = h ? xa : xc;
                return Ec(m(b, v), t, e);
              }
              function Io(t, e, n, r) {
                return t === a || (ns(t, ue[n]) && !fe.call(r, n)) ? e : t;
              }
              function Ao(t, e, n, r, i, o) {
                return (
                  xs(t) &&
                    xs(e) &&
                    (o.set(e, t), oa(t, e, a, Ao, o), o["delete"](e)),
                  t
                );
              }
              function Lo(t) {
                return Ls(t) ? a : t;
              }
              function No(t, e, n, r, i, o) {
                var c = n & b,
                  u = t.length,
                  l = e.length;
                if (u != l && !(c && l > u)) return !1;
                var s = o.get(t);
                if (s && o.get(e)) return s == e;
                var f = -1,
                  p = !0,
                  d = n & m ? new Hr() : a;
                o.set(t, e), o.set(e, t);
                while (++f < u) {
                  var h = t[f],
                    v = e[f];
                  if (r) var g = c ? r(v, h, f, e, t, o) : r(h, v, f, t, e, o);
                  if (g !== a) {
                    if (g) continue;
                    p = !1;
                    break;
                  }
                  if (d) {
                    if (
                      !An(e, function (t, e) {
                        if (!Yn(d, e) && (h === t || i(h, t, n, r, o)))
                          return d.push(e);
                      })
                    ) {
                      p = !1;
                      break;
                    }
                  } else if (h !== v && !i(h, v, n, r, o)) {
                    p = !1;
                    break;
                  }
                }
                return o["delete"](t), o["delete"](e), p;
              }
              function Ro(t, e, n, r, i, a, o) {
                switch (n) {
                  case pt:
                    if (
                      t.byteLength != e.byteLength ||
                      t.byteOffset != e.byteOffset
                    )
                      return !1;
                    (t = t.buffer), (e = e.buffer);
                  case ft:
                    return !(
                      t.byteLength != e.byteLength || !a(new _e(t), new _e(e))
                    );
                  case q:
                  case H:
                  case Q:
                    return ns(+t, +e);
                  case K:
                    return t.name == e.name && t.message == e.message;
                  case it:
                  case ot:
                    return t == e + "";
                  case Z:
                    var c = cr;
                  case at:
                    var u = r & b;
                    if ((c || (c = sr), t.size != e.size && !u)) return !1;
                    var l = o.get(t);
                    if (l) return l == e;
                    (r |= m), o.set(t, e);
                    var s = No(c(t), c(e), r, i, a, o);
                    return o["delete"](t), s;
                  case ct:
                    if (mr) return mr.call(t) == mr.call(e);
                }
                return !1;
              }
              function Mo(t, e, n, r, i, o) {
                var c = n & b,
                  u = Po(t),
                  l = u.length,
                  s = Po(e),
                  f = s.length;
                if (l != f && !c) return !1;
                var p = l;
                while (p--) {
                  var d = u[p];
                  if (!(c ? d in e : fe.call(e, d))) return !1;
                }
                var h = o.get(t);
                if (h && o.get(e)) return h == e;
                var v = !0;
                o.set(t, e), o.set(e, t);
                var m = c;
                while (++p < l) {
                  d = u[p];
                  var g = t[d],
                    y = e[d];
                  if (r) var _ = c ? r(y, g, d, e, t, o) : r(g, y, d, t, e, o);
                  if (!(_ === a ? g === y || i(g, y, n, r, o) : _)) {
                    v = !1;
                    break;
                  }
                  m || (m = "constructor" == d);
                }
                if (v && !m) {
                  var w = t.constructor,
                    x = e.constructor;
                  w == x ||
                    !("constructor" in t) ||
                    !("constructor" in e) ||
                    ("function" == typeof w &&
                      w instanceof w &&
                      "function" == typeof x &&
                      x instanceof x) ||
                    (v = !1);
                }
                return o["delete"](t), o["delete"](e), v;
              }
              function Do(t) {
                return Tc(gc(t, a, qc), t + "");
              }
              function Po(t) {
                return Ni(t, wf, Ho);
              }
              function Uo(t) {
                return Ni(t, xf, Wo);
              }
              var Bo = un
                ? function (t) {
                    return un.get(t);
                  }
                : Pp;
              function Fo(t) {
                var e = t.name + "",
                  n = ln[e],
                  r = fe.call(ln, e) ? n.length : 0;
                while (r--) {
                  var i = n[r],
                    a = i.func;
                  if (null == a || a == t) return i.name;
                }
                return e;
              }
              function zo(t) {
                var e = fe.call(_r, "placeholder") ? _r : t;
                return e.placeholder;
              }
              function Xo() {
                var t = _r.iteratee || Ip;
                return (
                  (t = t === Ip ? Qi : t),
                  arguments.length ? t(arguments[0], arguments[1]) : t
                );
              }
              function Vo(t, e) {
                var n = t.__data__;
                return cc(e)
                  ? n["string" == typeof e ? "string" : "hash"]
                  : n.map;
              }
              function Go(t) {
                var e = wf(t),
                  n = e.length;
                while (n--) {
                  var r = e[n],
                    i = t[r];
                  e[n] = [r, i, pc(i)];
                }
                return e;
              }
              function $o(t, e) {
                var n = rr(t, e);
                return Ki(n) ? n : a;
              }
              function qo(t) {
                var e = fe.call(t, Ce),
                  n = t[Ce];
                try {
                  t[Ce] = a;
                  var r = !0;
                } catch (o) {}
                var i = he.call(t);
                return r && (e ? (t[Ce] = n) : delete t[Ce]), i;
              }
              var Ho = Me
                  ? function (t) {
                      return null == t
                        ? []
                        : ((t = ne(t)),
                          Tn(Me(t), function (e) {
                            return Te.call(t, e);
                          }));
                    }
                  : qp,
                Wo = Me
                  ? function (t) {
                      var e = [];
                      while (t) Cn(e, Ho(t)), (t = xe(t));
                      return e;
                    }
                  : qp,
                Ko = Ri;
              function Yo(t, e, n) {
                var r = -1,
                  i = n.length;
                while (++r < i) {
                  var a = n[r],
                    o = a.size;
                  switch (a.type) {
                    case "drop":
                      t += o;
                      break;
                    case "dropRight":
                      e -= o;
                      break;
                    case "take":
                      e = ze(e, t + o);
                      break;
                    case "takeRight":
                      t = Fe(t, e - o);
                      break;
                  }
                }
                return { start: t, end: e };
              }
              function Jo(t) {
                var e = t.match(zt);
                return e ? e[1].split(Xt) : [];
              }
              function Zo(t, e, n) {
                e = za(e, t);
                var r = -1,
                  i = e.length,
                  a = !1;
                while (++r < i) {
                  var o = Sc(e[r]);
                  if (!(a = null != t && n(t, o))) break;
                  t = t[o];
                }
                return a || ++r != i
                  ? a
                  : ((i = null == t ? 0 : t.length),
                    !!i && ws(i) && ic(o, i) && (os(t) || as(t)));
              }
              function Qo(t) {
                var e = t.length,
                  n = new t.constructor(e);
                return (
                  e &&
                    "string" == typeof t[0] &&
                    fe.call(t, "index") &&
                    ((n.index = t.index), (n.input = t.input)),
                  n
                );
              }
              function tc(t) {
                return "function" != typeof t.constructor || fc(t)
                  ? {}
                  : xr(xe(t));
              }
              function ec(t, e, n) {
                var r = t.constructor;
                switch (e) {
                  case ft:
                    return qa(t);
                  case q:
                  case H:
                    return new r(+t);
                  case pt:
                    return Ha(t, n);
                  case dt:
                  case ht:
                  case vt:
                  case bt:
                  case mt:
                  case gt:
                  case yt:
                  case _t:
                  case wt:
                    return Ya(t, n);
                  case Z:
                    return new r();
                  case Q:
                  case ot:
                    return new r(t);
                  case it:
                    return Wa(t);
                  case at:
                    return new r();
                  case ct:
                    return Ka(t);
                }
              }
              function nc(t, e) {
                var n = e.length;
                if (!n) return t;
                var r = n - 1;
                return (
                  (e[r] = (n > 1 ? "& " : "") + e[r]),
                  (e = e.join(n > 2 ? ", " : " ")),
                  t.replace(Ft, "{\n/* [wrapped with " + e + "] */\n")
                );
              }
              function rc(t) {
                return os(t) || as(t) || !!(ke && t && t[ke]);
              }
              function ic(t, e) {
                var n = typeof t;
                return (
                  (e = null == e ? D : e),
                  !!e &&
                    ("number" == n || ("symbol" != n && Jt.test(t))) &&
                    t > -1 &&
                    t % 1 == 0 &&
                    t < e
                );
              }
              function ac(t, e, n) {
                if (!xs(n)) return !1;
                var r = typeof e;
                return (
                  !!("number" == r
                    ? us(n) && ic(e, n.length)
                    : "string" == r && e in n) && ns(n[e], t)
                );
              }
              function oc(t, e) {
                if (os(t)) return !1;
                var n = typeof t;
                return (
                  !(
                    "number" != n &&
                    "symbol" != n &&
                    "boolean" != n &&
                    null != t &&
                    !Ps(t)
                  ) ||
                  Nt.test(t) ||
                  !Lt.test(t) ||
                  (null != e && t in ne(e))
                );
              }
              function cc(t) {
                var e = typeof t;
                return "string" == e ||
                  "number" == e ||
                  "symbol" == e ||
                  "boolean" == e
                  ? "__proto__" !== t
                  : null === t;
              }
              function uc(t) {
                var e = Fo(t),
                  n = _r[e];
                if ("function" != typeof n || !(e in Er.prototype)) return !1;
                if (t === n) return !0;
                var r = Bo(n);
                return !!r && t === r[0];
              }
              function lc(t) {
                return !!de && de in t;
              }
              ((Ze && Ko(new Ze(new ArrayBuffer(1))) != pt) ||
                (Qe && Ko(new Qe()) != Z) ||
                (tn && Ko(tn.resolve()) != nt) ||
                (en && Ko(new en()) != at) ||
                (an && Ko(new an()) != lt)) &&
                (Ko = function (t) {
                  var e = Ri(t),
                    n = e == et ? t.constructor : a,
                    r = n ? Ic(n) : "";
                  if (r)
                    switch (r) {
                      case fn:
                        return pt;
                      case pn:
                        return Z;
                      case Ln:
                        return nt;
                      case Nn:
                        return at;
                      case Xn:
                        return lt;
                    }
                  return e;
                });
              var sc = le ? ys : Hp;
              function fc(t) {
                var e = t && t.constructor,
                  n = ("function" == typeof e && e.prototype) || ue;
                return t === n;
              }
              function pc(t) {
                return t === t && !xs(t);
              }
              function dc(t, e) {
                return function (n) {
                  return null != n && n[t] === e && (e !== a || t in ne(n));
                };
              }
              function hc(t) {
                var e = Ul(t, function (t) {
                    return n.size === f && n.clear(), t;
                  }),
                  n = e.cache;
                return e;
              }
              function vc(t, e) {
                var n = t[1],
                  r = e[1],
                  i = n | r,
                  a = i < (g | y | E),
                  o =
                    (r == E && n == w) ||
                    (r == E && n == k && t[7].length <= e[8]) ||
                    (r == (E | k) && e[7].length <= e[8] && n == w);
                if (!a && !o) return t;
                r & g && ((t[2] = e[2]), (i |= n & g ? 0 : _));
                var c = e[3];
                if (c) {
                  var u = t[3];
                  (t[3] = u ? Qa(u, c, e[4]) : c),
                    (t[4] = u ? lr(t[3], p) : e[4]);
                }
                return (
                  (c = e[5]),
                  c &&
                    ((u = t[5]),
                    (t[5] = u ? to(u, c, e[6]) : c),
                    (t[6] = u ? lr(t[5], p) : e[6])),
                  (c = e[7]),
                  c && (t[7] = c),
                  r & E && (t[8] = null == t[8] ? e[8] : ze(t[8], e[8])),
                  null == t[9] && (t[9] = e[9]),
                  (t[0] = e[0]),
                  (t[1] = i),
                  t
                );
              }
              function bc(t) {
                var e = [];
                if (null != t) for (var n in ne(t)) e.push(n);
                return e;
              }
              function mc(t) {
                return he.call(t);
              }
              function gc(t, e, r) {
                return (
                  (e = Fe(e === a ? t.length - 1 : e, 0)),
                  function () {
                    var i = arguments,
                      a = -1,
                      o = Fe(i.length - e, 0),
                      c = n(o);
                    while (++a < o) c[a] = i[e + a];
                    a = -1;
                    var u = n(e + 1);
                    while (++a < e) u[a] = i[a];
                    return (u[e] = r(c)), yn(t, this, u);
                  }
                );
              }
              function yc(t, e) {
                return e.length < 2 ? t : Li(t, Ea(e, 0, -1));
              }
              function _c(t, e) {
                var n = t.length,
                  r = ze(e.length, n),
                  i = eo(t);
                while (r--) {
                  var o = e[r];
                  t[r] = ic(o, n) ? i[o] : a;
                }
                return t;
              }
              function wc(t, e) {
                if (
                  ("constructor" !== e || "function" !== typeof t[e]) &&
                  "__proto__" != e
                )
                  return t[e];
              }
              var xc = kc(xa),
                Oc =
                  Le ||
                  function (t, e) {
                    return cn.setTimeout(t, e);
                  },
                Tc = kc(Oa);
              function Ec(t, e, n) {
                var r = e + "";
                return Tc(t, nc(r, Ac(Jo(r), n)));
              }
              function kc(t) {
                var e = 0,
                  n = 0;
                return function () {
                  var r = Ge(),
                    i = A - (r - n);
                  if (((n = r), i > 0)) {
                    if (++e >= I) return arguments[0];
                  } else e = 0;
                  return t.apply(a, arguments);
                };
              }
              function jc(t, e) {
                var n = -1,
                  r = t.length,
                  i = r - 1;
                e = e === a ? r : e;
                while (++n < e) {
                  var o = va(n, i),
                    c = t[o];
                  (t[o] = t[n]), (t[n] = c);
                }
                return (t.length = e), t;
              }
              var Cc = hc(function (t) {
                var e = [];
                return (
                  46 === t.charCodeAt(0) && e.push(""),
                  t.replace(Rt, function (t, n, r, i) {
                    e.push(r ? i.replace(Gt, "$1") : n || t);
                  }),
                  e
                );
              });
              function Sc(t) {
                if ("string" == typeof t || Ps(t)) return t;
                var e = t + "";
                return "0" == e && 1 / t == -M ? "-0" : e;
              }
              function Ic(t) {
                if (null != t) {
                  try {
                    return se.call(t);
                  } catch (e) {}
                  try {
                    return t + "";
                  } catch (e) {}
                }
                return "";
              }
              function Ac(t, e) {
                return (
                  wn(X, function (n) {
                    var r = "_." + n[0];
                    e & n[1] && !En(t, r) && t.push(r);
                  }),
                  t.sort()
                );
              }
              function Lc(t) {
                if (t instanceof Er) return t.clone();
                var e = new Tr(t.__wrapped__, t.__chain__);
                return (
                  (e.__actions__ = eo(t.__actions__)),
                  (e.__index__ = t.__index__),
                  (e.__values__ = t.__values__),
                  e
                );
              }
              function Nc(t, e, r) {
                e = (r ? ac(t, e, r) : e === a) ? 1 : Fe(qs(e), 0);
                var i = null == t ? 0 : t.length;
                if (!i || e < 1) return [];
                var o = 0,
                  c = 0,
                  u = n(Ne(i / e));
                while (o < i) u[c++] = Ea(t, o, (o += e));
                return u;
              }
              function Rc(t) {
                var e = -1,
                  n = null == t ? 0 : t.length,
                  r = 0,
                  i = [];
                while (++e < n) {
                  var a = t[e];
                  a && (i[r++] = a);
                }
                return i;
              }
              function Mc() {
                var t = arguments.length;
                if (!t) return [];
                var e = n(t - 1),
                  r = arguments[0],
                  i = t;
                while (i--) e[i - 1] = arguments[i];
                return Cn(os(r) ? eo(r) : [r], ki(e, 1));
              }
              var Dc = ga(function (t, e) {
                  return ls(t) ? yi(t, ki(e, 1, ls, !0)) : [];
                }),
                Pc = ga(function (t, e) {
                  var n = ru(e);
                  return (
                    ls(n) && (n = a),
                    ls(t) ? yi(t, ki(e, 1, ls, !0), Xo(n, 2)) : []
                  );
                }),
                Uc = ga(function (t, e) {
                  var n = ru(e);
                  return (
                    ls(n) && (n = a), ls(t) ? yi(t, ki(e, 1, ls, !0), a, n) : []
                  );
                });
              function Bc(t, e, n) {
                var r = null == t ? 0 : t.length;
                return r
                  ? ((e = n || e === a ? 1 : qs(e)), Ea(t, e < 0 ? 0 : e, r))
                  : [];
              }
              function Fc(t, e, n) {
                var r = null == t ? 0 : t.length;
                return r
                  ? ((e = n || e === a ? 1 : qs(e)),
                    (e = r - e),
                    Ea(t, 0, e < 0 ? 0 : e))
                  : [];
              }
              function zc(t, e) {
                return t && t.length ? Ma(t, Xo(e, 3), !0, !0) : [];
              }
              function Xc(t, e) {
                return t && t.length ? Ma(t, Xo(e, 3), !0) : [];
              }
              function Vc(t, e, n, r) {
                var i = null == t ? 0 : t.length;
                return i
                  ? (n &&
                      "number" != typeof n &&
                      ac(t, e, n) &&
                      ((n = 0), (r = i)),
                    Ti(t, e, n, r))
                  : [];
              }
              function Gc(t, e, n) {
                var r = null == t ? 0 : t.length;
                if (!r) return -1;
                var i = null == n ? 0 : qs(n);
                return i < 0 && (i = Fe(r + i, 0)), Dn(t, Xo(e, 3), i);
              }
              function $c(t, e, n) {
                var r = null == t ? 0 : t.length;
                if (!r) return -1;
                var i = r - 1;
                return (
                  n !== a &&
                    ((i = qs(n)), (i = n < 0 ? Fe(r + i, 0) : ze(i, r - 1))),
                  Dn(t, Xo(e, 3), i, !0)
                );
              }
              function qc(t) {
                var e = null == t ? 0 : t.length;
                return e ? ki(t, 1) : [];
              }
              function Hc(t) {
                var e = null == t ? 0 : t.length;
                return e ? ki(t, M) : [];
              }
              function Wc(t, e) {
                var n = null == t ? 0 : t.length;
                return n ? ((e = e === a ? 1 : qs(e)), ki(t, e)) : [];
              }
              function Kc(t) {
                var e = -1,
                  n = null == t ? 0 : t.length,
                  r = {};
                while (++e < n) {
                  var i = t[e];
                  r[i[0]] = i[1];
                }
                return r;
              }
              function Yc(t) {
                return t && t.length ? t[0] : a;
              }
              function Jc(t, e, n) {
                var r = null == t ? 0 : t.length;
                if (!r) return -1;
                var i = null == n ? 0 : qs(n);
                return i < 0 && (i = Fe(r + i, 0)), Pn(t, e, i);
              }
              function Zc(t) {
                var e = null == t ? 0 : t.length;
                return e ? Ea(t, 0, -1) : [];
              }
              var Qc = ga(function (t) {
                  var e = jn(t, Ba);
                  return e.length && e[0] === t[0] ? Bi(e) : [];
                }),
                tu = ga(function (t) {
                  var e = ru(t),
                    n = jn(t, Ba);
                  return (
                    e === ru(n) ? (e = a) : n.pop(),
                    n.length && n[0] === t[0] ? Bi(n, Xo(e, 2)) : []
                  );
                }),
                eu = ga(function (t) {
                  var e = ru(t),
                    n = jn(t, Ba);
                  return (
                    (e = "function" == typeof e ? e : a),
                    e && n.pop(),
                    n.length && n[0] === t[0] ? Bi(n, a, e) : []
                  );
                });
              function nu(t, e) {
                return null == t ? "" : Ue.call(t, e);
              }
              function ru(t) {
                var e = null == t ? 0 : t.length;
                return e ? t[e - 1] : a;
              }
              function iu(t, e, n) {
                var r = null == t ? 0 : t.length;
                if (!r) return -1;
                var i = r;
                return (
                  n !== a &&
                    ((i = qs(n)), (i = i < 0 ? Fe(r + i, 0) : ze(i, r - 1))),
                  e === e ? dr(t, e, i) : Dn(t, Bn, i, !0)
                );
              }
              function au(t, e) {
                return t && t.length ? ua(t, qs(e)) : a;
              }
              var ou = ga(cu);
              function cu(t, e) {
                return t && t.length && e && e.length ? da(t, e) : t;
              }
              function uu(t, e, n) {
                return t && t.length && e && e.length ? da(t, e, Xo(n, 2)) : t;
              }
              function lu(t, e, n) {
                return t && t.length && e && e.length ? da(t, e, a, n) : t;
              }
              var su = Do(function (t, e) {
                var n = null == t ? 0 : t.length,
                  r = di(t, e);
                return (
                  ha(
                    t,
                    jn(e, function (t) {
                      return ic(t, n) ? +t : t;
                    }).sort(Ja)
                  ),
                  r
                );
              });
              function fu(t, e) {
                var n = [];
                if (!t || !t.length) return n;
                var r = -1,
                  i = [],
                  a = t.length;
                e = Xo(e, 3);
                while (++r < a) {
                  var o = t[r];
                  e(o, r, t) && (n.push(o), i.push(r));
                }
                return ha(t, i), n;
              }
              function pu(t) {
                return null == t ? t : He.call(t);
              }
              function du(t, e, n) {
                var r = null == t ? 0 : t.length;
                return r
                  ? (n && "number" != typeof n && ac(t, e, n)
                      ? ((e = 0), (n = r))
                      : ((e = null == e ? 0 : qs(e)),
                        (n = n === a ? r : qs(n))),
                    Ea(t, e, n))
                  : [];
              }
              function hu(t, e) {
                return ja(t, e);
              }
              function vu(t, e, n) {
                return Ca(t, e, Xo(n, 2));
              }
              function bu(t, e) {
                var n = null == t ? 0 : t.length;
                if (n) {
                  var r = ja(t, e);
                  if (r < n && ns(t[r], e)) return r;
                }
                return -1;
              }
              function mu(t, e) {
                return ja(t, e, !0);
              }
              function gu(t, e, n) {
                return Ca(t, e, Xo(n, 2), !0);
              }
              function yu(t, e) {
                var n = null == t ? 0 : t.length;
                if (n) {
                  var r = ja(t, e, !0) - 1;
                  if (ns(t[r], e)) return r;
                }
                return -1;
              }
              function _u(t) {
                return t && t.length ? Sa(t) : [];
              }
              function wu(t, e) {
                return t && t.length ? Sa(t, Xo(e, 2)) : [];
              }
              function xu(t) {
                var e = null == t ? 0 : t.length;
                return e ? Ea(t, 1, e) : [];
              }
              function Ou(t, e, n) {
                return t && t.length
                  ? ((e = n || e === a ? 1 : qs(e)), Ea(t, 0, e < 0 ? 0 : e))
                  : [];
              }
              function Tu(t, e, n) {
                var r = null == t ? 0 : t.length;
                return r
                  ? ((e = n || e === a ? 1 : qs(e)),
                    (e = r - e),
                    Ea(t, e < 0 ? 0 : e, r))
                  : [];
              }
              function Eu(t, e) {
                return t && t.length ? Ma(t, Xo(e, 3), !1, !0) : [];
              }
              function ku(t, e) {
                return t && t.length ? Ma(t, Xo(e, 3)) : [];
              }
              var ju = ga(function (t) {
                  return La(ki(t, 1, ls, !0));
                }),
                Cu = ga(function (t) {
                  var e = ru(t);
                  return ls(e) && (e = a), La(ki(t, 1, ls, !0), Xo(e, 2));
                }),
                Su = ga(function (t) {
                  var e = ru(t);
                  return (
                    (e = "function" == typeof e ? e : a),
                    La(ki(t, 1, ls, !0), a, e)
                  );
                });
              function Iu(t) {
                return t && t.length ? La(t) : [];
              }
              function Au(t, e) {
                return t && t.length ? La(t, Xo(e, 2)) : [];
              }
              function Lu(t, e) {
                return (
                  (e = "function" == typeof e ? e : a),
                  t && t.length ? La(t, a, e) : []
                );
              }
              function Nu(t) {
                if (!t || !t.length) return [];
                var e = 0;
                return (
                  (t = Tn(t, function (t) {
                    if (ls(t)) return (e = Fe(t.length, e)), !0;
                  })),
                  qn(e, function (e) {
                    return jn(t, zn(e));
                  })
                );
              }
              function Ru(t, e) {
                if (!t || !t.length) return [];
                var n = Nu(t);
                return null == e
                  ? n
                  : jn(n, function (t) {
                      return yn(e, a, t);
                    });
              }
              var Mu = ga(function (t, e) {
                  return ls(t) ? yi(t, e) : [];
                }),
                Du = ga(function (t) {
                  return Pa(Tn(t, ls));
                }),
                Pu = ga(function (t) {
                  var e = ru(t);
                  return ls(e) && (e = a), Pa(Tn(t, ls), Xo(e, 2));
                }),
                Uu = ga(function (t) {
                  var e = ru(t);
                  return (
                    (e = "function" == typeof e ? e : a), Pa(Tn(t, ls), a, e)
                  );
                }),
                Bu = ga(Nu);
              function Fu(t, e) {
                return Ua(t || [], e || [], ci);
              }
              function zu(t, e) {
                return Ua(t || [], e || [], wa);
              }
              var Xu = ga(function (t) {
                var e = t.length,
                  n = e > 1 ? t[e - 1] : a;
                return (
                  (n = "function" == typeof n ? (t.pop(), n) : a), Ru(t, n)
                );
              });
              function Vu(t) {
                var e = _r(t);
                return (e.__chain__ = !0), e;
              }
              function Gu(t, e) {
                return e(t), t;
              }
              function $u(t, e) {
                return e(t);
              }
              var qu = Do(function (t) {
                var e = t.length,
                  n = e ? t[0] : 0,
                  r = this.__wrapped__,
                  i = function (e) {
                    return di(e, t);
                  };
                return !(e > 1 || this.__actions__.length) &&
                  r instanceof Er &&
                  ic(n)
                  ? ((r = r.slice(n, +n + (e ? 1 : 0))),
                    r.__actions__.push({ func: $u, args: [i], thisArg: a }),
                    new Tr(r, this.__chain__).thru(function (t) {
                      return e && !t.length && t.push(a), t;
                    }))
                  : this.thru(i);
              });
              function Hu() {
                return Vu(this);
              }
              function Wu() {
                return new Tr(this.value(), this.__chain__);
              }
              function Ku() {
                this.__values__ === a && (this.__values__ = Gs(this.value()));
                var t = this.__index__ >= this.__values__.length,
                  e = t ? a : this.__values__[this.__index__++];
                return { done: t, value: e };
              }
              function Yu() {
                return this;
              }
              function Ju(t) {
                var e,
                  n = this;
                while (n instanceof Or) {
                  var r = Lc(n);
                  (r.__index__ = 0),
                    (r.__values__ = a),
                    e ? (i.__wrapped__ = r) : (e = r);
                  var i = r;
                  n = n.__wrapped__;
                }
                return (i.__wrapped__ = t), e;
              }
              function Zu() {
                var t = this.__wrapped__;
                if (t instanceof Er) {
                  var e = t;
                  return (
                    this.__actions__.length && (e = new Er(this)),
                    (e = e.reverse()),
                    e.__actions__.push({ func: $u, args: [pu], thisArg: a }),
                    new Tr(e, this.__chain__)
                  );
                }
                return this.thru(pu);
              }
              function Qu() {
                return Da(this.__wrapped__, this.__actions__);
              }
              var tl = ao(function (t, e, n) {
                fe.call(t, n) ? ++t[n] : pi(t, n, 1);
              });
              function el(t, e, n) {
                var r = os(t) ? On : xi;
                return n && ac(t, e, n) && (e = a), r(t, Xo(e, 3));
              }
              function nl(t, e) {
                var n = os(t) ? Tn : Ei;
                return n(t, Xo(e, 3));
              }
              var rl = vo(Gc),
                il = vo($c);
              function al(t, e) {
                return ki(hl(t, e), 1);
              }
              function ol(t, e) {
                return ki(hl(t, e), M);
              }
              function cl(t, e, n) {
                return (n = n === a ? 1 : qs(n)), ki(hl(t, e), n);
              }
              function ul(t, e) {
                var n = os(t) ? wn : _i;
                return n(t, Xo(e, 3));
              }
              function ll(t, e) {
                var n = os(t) ? xn : wi;
                return n(t, Xo(e, 3));
              }
              var sl = ao(function (t, e, n) {
                fe.call(t, n) ? t[n].push(e) : pi(t, n, [e]);
              });
              function fl(t, e, n, r) {
                (t = us(t) ? t : Ff(t)), (n = n && !r ? qs(n) : 0);
                var i = t.length;
                return (
                  n < 0 && (n = Fe(i + n, 0)),
                  Ds(t)
                    ? n <= i && t.indexOf(e, n) > -1
                    : !!i && Pn(t, e, n) > -1
                );
              }
              var pl = ga(function (t, e, r) {
                  var i = -1,
                    a = "function" == typeof e,
                    o = us(t) ? n(t.length) : [];
                  return (
                    _i(t, function (t) {
                      o[++i] = a ? yn(e, t, r) : zi(t, e, r);
                    }),
                    o
                  );
                }),
                dl = ao(function (t, e, n) {
                  pi(t, n, e);
                });
              function hl(t, e) {
                var n = os(t) ? jn : ra;
                return n(t, Xo(e, 3));
              }
              function vl(t, e, n, r) {
                return null == t
                  ? []
                  : (os(e) || (e = null == e ? [] : [e]),
                    (n = r ? a : n),
                    os(n) || (n = null == n ? [] : [n]),
                    la(t, e, n));
              }
              var bl = ao(
                function (t, e, n) {
                  t[n ? 0 : 1].push(e);
                },
                function () {
                  return [[], []];
                }
              );
              function ml(t, e, n) {
                var r = os(t) ? Sn : Vn,
                  i = arguments.length < 3;
                return r(t, Xo(e, 4), n, i, _i);
              }
              function gl(t, e, n) {
                var r = os(t) ? In : Vn,
                  i = arguments.length < 3;
                return r(t, Xo(e, 4), n, i, wi);
              }
              function yl(t, e) {
                var n = os(t) ? Tn : Ei;
                return n(t, Bl(Xo(e, 3)));
              }
              function _l(t) {
                var e = os(t) ? ri : ya;
                return e(t);
              }
              function wl(t, e, n) {
                e = (n ? ac(t, e, n) : e === a) ? 1 : qs(e);
                var r = os(t) ? ii : _a;
                return r(t, e);
              }
              function xl(t) {
                var e = os(t) ? ai : Ta;
                return e(t);
              }
              function Ol(t) {
                if (null == t) return 0;
                if (us(t)) return Ds(t) ? hr(t) : t.length;
                var e = Ko(t);
                return e == Z || e == at ? t.size : ta(t).length;
              }
              function Tl(t, e, n) {
                var r = os(t) ? An : ka;
                return n && ac(t, e, n) && (e = a), r(t, Xo(e, 3));
              }
              var El = ga(function (t, e) {
                  if (null == t) return [];
                  var n = e.length;
                  return (
                    n > 1 && ac(t, e[0], e[1])
                      ? (e = [])
                      : n > 2 && ac(e[0], e[1], e[2]) && (e = [e[0]]),
                    la(t, ki(e, 1), [])
                  );
                }),
                kl =
                  Ae ||
                  function () {
                    return cn.Date.now();
                  };
              function jl(t, e) {
                if ("function" != typeof e) throw new ae(l);
                return (
                  (t = qs(t)),
                  function () {
                    if (--t < 1) return e.apply(this, arguments);
                  }
                );
              }
              function Cl(t, e, n) {
                return (
                  (e = n ? a : e),
                  (e = t && null == e ? t.length : e),
                  So(t, E, a, a, a, a, e)
                );
              }
              function Sl(t, e) {
                var n;
                if ("function" != typeof e) throw new ae(l);
                return (
                  (t = qs(t)),
                  function () {
                    return (
                      --t > 0 && (n = e.apply(this, arguments)),
                      t <= 1 && (e = a),
                      n
                    );
                  }
                );
              }
              var Il = ga(function (t, e, n) {
                  var r = g;
                  if (n.length) {
                    var i = lr(n, zo(Il));
                    r |= O;
                  }
                  return So(t, r, e, n, i);
                }),
                Al = ga(function (t, e, n) {
                  var r = g | y;
                  if (n.length) {
                    var i = lr(n, zo(Al));
                    r |= O;
                  }
                  return So(e, r, t, n, i);
                });
              function Ll(t, e, n) {
                e = n ? a : e;
                var r = So(t, w, a, a, a, a, a, e);
                return (r.placeholder = Ll.placeholder), r;
              }
              function Nl(t, e, n) {
                e = n ? a : e;
                var r = So(t, x, a, a, a, a, a, e);
                return (r.placeholder = Nl.placeholder), r;
              }
              function Rl(t, e, n) {
                var r,
                  i,
                  o,
                  c,
                  u,
                  s,
                  f = 0,
                  p = !1,
                  d = !1,
                  h = !0;
                if ("function" != typeof t) throw new ae(l);
                function v(e) {
                  var n = r,
                    o = i;
                  return (r = i = a), (f = e), (c = t.apply(o, n)), c;
                }
                function b(t) {
                  return (f = t), (u = Oc(y, e)), p ? v(t) : c;
                }
                function m(t) {
                  var n = t - s,
                    r = t - f,
                    i = e - n;
                  return d ? ze(i, o - r) : i;
                }
                function g(t) {
                  var n = t - s,
                    r = t - f;
                  return s === a || n >= e || n < 0 || (d && r >= o);
                }
                function y() {
                  var t = kl();
                  if (g(t)) return _(t);
                  u = Oc(y, m(t));
                }
                function _(t) {
                  return (u = a), h && r ? v(t) : ((r = i = a), c);
                }
                function w() {
                  u !== a && Ga(u), (f = 0), (r = s = i = u = a);
                }
                function x() {
                  return u === a ? c : _(kl());
                }
                function O() {
                  var t = kl(),
                    n = g(t);
                  if (((r = arguments), (i = this), (s = t), n)) {
                    if (u === a) return b(s);
                    if (d) return Ga(u), (u = Oc(y, e)), v(s);
                  }
                  return u === a && (u = Oc(y, e)), c;
                }
                return (
                  (e = Ws(e) || 0),
                  xs(n) &&
                    ((p = !!n.leading),
                    (d = "maxWait" in n),
                    (o = d ? Fe(Ws(n.maxWait) || 0, e) : o),
                    (h = "trailing" in n ? !!n.trailing : h)),
                  (O.cancel = w),
                  (O.flush = x),
                  O
                );
              }
              var Ml = ga(function (t, e) {
                  return gi(t, 1, e);
                }),
                Dl = ga(function (t, e, n) {
                  return gi(t, Ws(e) || 0, n);
                });
              function Pl(t) {
                return So(t, j);
              }
              function Ul(t, e) {
                if (
                  "function" != typeof t ||
                  (null != e && "function" != typeof e)
                )
                  throw new ae(l);
                var n = function () {
                  var r = arguments,
                    i = e ? e.apply(this, r) : r[0],
                    a = n.cache;
                  if (a.has(i)) return a.get(i);
                  var o = t.apply(this, r);
                  return (n.cache = a.set(i, o) || a), o;
                };
                return (n.cache = new (Ul.Cache || zr)()), n;
              }
              function Bl(t) {
                if ("function" != typeof t) throw new ae(l);
                return function () {
                  var e = arguments;
                  switch (e.length) {
                    case 0:
                      return !t.call(this);
                    case 1:
                      return !t.call(this, e[0]);
                    case 2:
                      return !t.call(this, e[0], e[1]);
                    case 3:
                      return !t.call(this, e[0], e[1], e[2]);
                  }
                  return !t.apply(this, e);
                };
              }
              function Fl(t) {
                return Sl(2, t);
              }
              Ul.Cache = zr;
              var zl = Xa(function (t, e) {
                  e =
                    1 == e.length && os(e[0])
                      ? jn(e[0], Wn(Xo()))
                      : jn(ki(e, 1), Wn(Xo()));
                  var n = e.length;
                  return ga(function (r) {
                    var i = -1,
                      a = ze(r.length, n);
                    while (++i < a) r[i] = e[i].call(this, r[i]);
                    return yn(t, this, r);
                  });
                }),
                Xl = ga(function (t, e) {
                  var n = lr(e, zo(Xl));
                  return So(t, O, a, e, n);
                }),
                Vl = ga(function (t, e) {
                  var n = lr(e, zo(Vl));
                  return So(t, T, a, e, n);
                }),
                Gl = Do(function (t, e) {
                  return So(t, k, a, a, a, e);
                });
              function $l(t, e) {
                if ("function" != typeof t) throw new ae(l);
                return (e = e === a ? e : qs(e)), ga(t, e);
              }
              function ql(t, e) {
                if ("function" != typeof t) throw new ae(l);
                return (
                  (e = null == e ? 0 : Fe(qs(e), 0)),
                  ga(function (n) {
                    var r = n[e],
                      i = Va(n, 0, e);
                    return r && Cn(i, r), yn(t, this, i);
                  })
                );
              }
              function Hl(t, e, n) {
                var r = !0,
                  i = !0;
                if ("function" != typeof t) throw new ae(l);
                return (
                  xs(n) &&
                    ((r = "leading" in n ? !!n.leading : r),
                    (i = "trailing" in n ? !!n.trailing : i)),
                  Rl(t, e, { leading: r, maxWait: e, trailing: i })
                );
              }
              function Wl(t) {
                return Cl(t, 1);
              }
              function Kl(t, e) {
                return Xl(Fa(e), t);
              }
              function Yl() {
                if (!arguments.length) return [];
                var t = arguments[0];
                return os(t) ? t : [t];
              }
              function Jl(t) {
                return vi(t, v);
              }
              function Zl(t, e) {
                return (e = "function" == typeof e ? e : a), vi(t, v, e);
              }
              function Ql(t) {
                return vi(t, d | v);
              }
              function ts(t, e) {
                return (e = "function" == typeof e ? e : a), vi(t, d | v, e);
              }
              function es(t, e) {
                return null == e || mi(t, e, wf(e));
              }
              function ns(t, e) {
                return t === e || (t !== t && e !== e);
              }
              var rs = To(Mi),
                is = To(function (t, e) {
                  return t >= e;
                }),
                as = Xi(
                  (function () {
                    return arguments;
                  })()
                )
                  ? Xi
                  : function (t) {
                      return (
                        Os(t) && fe.call(t, "callee") && !Te.call(t, "callee")
                      );
                    },
                os = n.isArray,
                cs = dn ? Wn(dn) : Vi;
              function us(t) {
                return null != t && ws(t.length) && !ys(t);
              }
              function ls(t) {
                return Os(t) && us(t);
              }
              function ss(t) {
                return !0 === t || !1 === t || (Os(t) && Ri(t) == q);
              }
              var fs = De || Hp,
                ps = hn ? Wn(hn) : Gi;
              function ds(t) {
                return Os(t) && 1 === t.nodeType && !Ls(t);
              }
              function hs(t) {
                if (null == t) return !0;
                if (
                  us(t) &&
                  (os(t) ||
                    "string" == typeof t ||
                    "function" == typeof t.splice ||
                    fs(t) ||
                    Us(t) ||
                    as(t))
                )
                  return !t.length;
                var e = Ko(t);
                if (e == Z || e == at) return !t.size;
                if (fc(t)) return !ta(t).length;
                for (var n in t) if (fe.call(t, n)) return !1;
                return !0;
              }
              function vs(t, e) {
                return $i(t, e);
              }
              function bs(t, e, n) {
                n = "function" == typeof n ? n : a;
                var r = n ? n(t, e) : a;
                return r === a ? $i(t, e, a, n) : !!r;
              }
              function ms(t) {
                if (!Os(t)) return !1;
                var e = Ri(t);
                return (
                  e == K ||
                  e == W ||
                  ("string" == typeof t.message &&
                    "string" == typeof t.name &&
                    !Ls(t))
                );
              }
              function gs(t) {
                return "number" == typeof t && Pe(t);
              }
              function ys(t) {
                if (!xs(t)) return !1;
                var e = Ri(t);
                return e == Y || e == J || e == $ || e == rt;
              }
              function _s(t) {
                return "number" == typeof t && t == qs(t);
              }
              function ws(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && t <= D;
              }
              function xs(t) {
                var e = typeof t;
                return null != t && ("object" == e || "function" == e);
              }
              function Os(t) {
                return null != t && "object" == typeof t;
              }
              var Ts = vn ? Wn(vn) : Hi;
              function Es(t, e) {
                return t === e || Wi(t, e, Go(e));
              }
              function ks(t, e, n) {
                return (n = "function" == typeof n ? n : a), Wi(t, e, Go(e), n);
              }
              function js(t) {
                return As(t) && t != +t;
              }
              function Cs(t) {
                if (sc(t)) throw new i(u);
                return Ki(t);
              }
              function Ss(t) {
                return null === t;
              }
              function Is(t) {
                return null == t;
              }
              function As(t) {
                return "number" == typeof t || (Os(t) && Ri(t) == Q);
              }
              function Ls(t) {
                if (!Os(t) || Ri(t) != et) return !1;
                var e = xe(t);
                if (null === e) return !0;
                var n = fe.call(e, "constructor") && e.constructor;
                return (
                  "function" == typeof n && n instanceof n && se.call(n) == ve
                );
              }
              var Ns = bn ? Wn(bn) : Yi;
              function Rs(t) {
                return _s(t) && t >= -D && t <= D;
              }
              var Ms = mn ? Wn(mn) : Ji;
              function Ds(t) {
                return "string" == typeof t || (!os(t) && Os(t) && Ri(t) == ot);
              }
              function Ps(t) {
                return "symbol" == typeof t || (Os(t) && Ri(t) == ct);
              }
              var Us = gn ? Wn(gn) : Zi;
              function Bs(t) {
                return t === a;
              }
              function Fs(t) {
                return Os(t) && Ko(t) == lt;
              }
              function zs(t) {
                return Os(t) && Ri(t) == st;
              }
              var Xs = To(na),
                Vs = To(function (t, e) {
                  return t <= e;
                });
              function Gs(t) {
                if (!t) return [];
                if (us(t)) return Ds(t) ? vr(t) : eo(t);
                if (je && t[je]) return or(t[je]());
                var e = Ko(t),
                  n = e == Z ? cr : e == at ? sr : Ff;
                return n(t);
              }
              function $s(t) {
                if (!t) return 0 === t ? t : 0;
                if (((t = Ws(t)), t === M || t === -M)) {
                  var e = t < 0 ? -1 : 1;
                  return e * P;
                }
                return t === t ? t : 0;
              }
              function qs(t) {
                var e = $s(t),
                  n = e % 1;
                return e === e ? (n ? e - n : e) : 0;
              }
              function Hs(t) {
                return t ? hi(qs(t), 0, B) : 0;
              }
              function Ws(t) {
                if ("number" == typeof t) return t;
                if (Ps(t)) return U;
                if (xs(t)) {
                  var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                  t = xs(e) ? e + "" : e;
                }
                if ("string" != typeof t) return 0 === t ? t : +t;
                t = t.replace(Pt, "");
                var n = Wt.test(t);
                return n || Yt.test(t)
                  ? rn(t.slice(2), n ? 2 : 8)
                  : Ht.test(t)
                  ? U
                  : +t;
              }
              function Ks(t) {
                return no(t, xf(t));
              }
              function Ys(t) {
                return t ? hi(qs(t), -D, D) : 0 === t ? t : 0;
              }
              function Js(t) {
                return null == t ? "" : Aa(t);
              }
              var Zs = oo(function (t, e) {
                  if (fc(e) || us(e)) no(e, wf(e), t);
                  else for (var n in e) fe.call(e, n) && ci(t, n, e[n]);
                }),
                Qs = oo(function (t, e) {
                  no(e, xf(e), t);
                }),
                tf = oo(function (t, e, n, r) {
                  no(e, xf(e), t, r);
                }),
                ef = oo(function (t, e, n, r) {
                  no(e, wf(e), t, r);
                }),
                nf = Do(di);
              function rf(t, e) {
                var n = xr(t);
                return null == e ? n : si(n, e);
              }
              var af = ga(function (t, e) {
                  t = ne(t);
                  var n = -1,
                    r = e.length,
                    i = r > 2 ? e[2] : a;
                  i && ac(e[0], e[1], i) && (r = 1);
                  while (++n < r) {
                    var o = e[n],
                      c = xf(o),
                      u = -1,
                      l = c.length;
                    while (++u < l) {
                      var s = c[u],
                        f = t[s];
                      (f === a || (ns(f, ue[s]) && !fe.call(t, s))) &&
                        (t[s] = o[s]);
                    }
                  }
                  return t;
                }),
                of = ga(function (t) {
                  return t.push(a, Ao), yn(kf, a, t);
                });
              function cf(t, e) {
                return Mn(t, Xo(e, 3), Si);
              }
              function uf(t, e) {
                return Mn(t, Xo(e, 3), Ii);
              }
              function lf(t, e) {
                return null == t ? t : ji(t, Xo(e, 3), xf);
              }
              function sf(t, e) {
                return null == t ? t : Ci(t, Xo(e, 3), xf);
              }
              function ff(t, e) {
                return t && Si(t, Xo(e, 3));
              }
              function pf(t, e) {
                return t && Ii(t, Xo(e, 3));
              }
              function df(t) {
                return null == t ? [] : Ai(t, wf(t));
              }
              function hf(t) {
                return null == t ? [] : Ai(t, xf(t));
              }
              function vf(t, e, n) {
                var r = null == t ? a : Li(t, e);
                return r === a ? n : r;
              }
              function bf(t, e) {
                return null != t && Zo(t, e, Di);
              }
              function mf(t, e) {
                return null != t && Zo(t, e, Pi);
              }
              var gf = go(function (t, e, n) {
                  null != e &&
                    "function" != typeof e.toString &&
                    (e = he.call(e)),
                    (t[e] = n);
                }, Ep(Sp)),
                yf = go(function (t, e, n) {
                  null != e &&
                    "function" != typeof e.toString &&
                    (e = he.call(e)),
                    fe.call(t, e) ? t[e].push(n) : (t[e] = [n]);
                }, Xo),
                _f = ga(zi);
              function wf(t) {
                return us(t) ? ni(t) : ta(t);
              }
              function xf(t) {
                return us(t) ? ni(t, !0) : ea(t);
              }
              function Of(t, e) {
                var n = {};
                return (
                  (e = Xo(e, 3)),
                  Si(t, function (t, r, i) {
                    pi(n, e(t, r, i), t);
                  }),
                  n
                );
              }
              function Tf(t, e) {
                var n = {};
                return (
                  (e = Xo(e, 3)),
                  Si(t, function (t, r, i) {
                    pi(n, r, e(t, r, i));
                  }),
                  n
                );
              }
              var Ef = oo(function (t, e, n) {
                  oa(t, e, n);
                }),
                kf = oo(function (t, e, n, r) {
                  oa(t, e, n, r);
                }),
                jf = Do(function (t, e) {
                  var n = {};
                  if (null == t) return n;
                  var r = !1;
                  (e = jn(e, function (e) {
                    return (e = za(e, t)), r || (r = e.length > 1), e;
                  })),
                    no(t, Uo(t), n),
                    r && (n = vi(n, d | h | v, Lo));
                  var i = e.length;
                  while (i--) Na(n, e[i]);
                  return n;
                });
              function Cf(t, e) {
                return If(t, Bl(Xo(e)));
              }
              var Sf = Do(function (t, e) {
                return null == t ? {} : sa(t, e);
              });
              function If(t, e) {
                if (null == t) return {};
                var n = jn(Uo(t), function (t) {
                  return [t];
                });
                return (
                  (e = Xo(e)),
                  fa(t, n, function (t, n) {
                    return e(t, n[0]);
                  })
                );
              }
              function Af(t, e, n) {
                e = za(e, t);
                var r = -1,
                  i = e.length;
                i || ((i = 1), (t = a));
                while (++r < i) {
                  var o = null == t ? a : t[Sc(e[r])];
                  o === a && ((r = i), (o = n)), (t = ys(o) ? o.call(t) : o);
                }
                return t;
              }
              function Lf(t, e, n) {
                return null == t ? t : wa(t, e, n);
              }
              function Nf(t, e, n, r) {
                return (
                  (r = "function" == typeof r ? r : a),
                  null == t ? t : wa(t, e, n, r)
                );
              }
              var Rf = Co(wf),
                Mf = Co(xf);
              function Df(t, e, n) {
                var r = os(t),
                  i = r || fs(t) || Us(t);
                if (((e = Xo(e, 4)), null == n)) {
                  var a = t && t.constructor;
                  n = i ? (r ? new a() : []) : xs(t) && ys(a) ? xr(xe(t)) : {};
                }
                return (
                  (i ? wn : Si)(t, function (t, r, i) {
                    return e(n, t, r, i);
                  }),
                  n
                );
              }
              function Pf(t, e) {
                return null == t || Na(t, e);
              }
              function Uf(t, e, n) {
                return null == t ? t : Ra(t, e, Fa(n));
              }
              function Bf(t, e, n, r) {
                return (
                  (r = "function" == typeof r ? r : a),
                  null == t ? t : Ra(t, e, Fa(n), r)
                );
              }
              function Ff(t) {
                return null == t ? [] : Kn(t, wf(t));
              }
              function zf(t) {
                return null == t ? [] : Kn(t, xf(t));
              }
              function Xf(t, e, n) {
                return (
                  n === a && ((n = e), (e = a)),
                  n !== a && ((n = Ws(n)), (n = n === n ? n : 0)),
                  e !== a && ((e = Ws(e)), (e = e === e ? e : 0)),
                  hi(Ws(t), e, n)
                );
              }
              function Vf(t, e, n) {
                return (
                  (e = $s(e)),
                  n === a ? ((n = e), (e = 0)) : (n = $s(n)),
                  (t = Ws(t)),
                  Ui(t, e, n)
                );
              }
              function Gf(t, e, n) {
                if (
                  (n && "boolean" != typeof n && ac(t, e, n) && (e = n = a),
                  n === a &&
                    ("boolean" == typeof e
                      ? ((n = e), (e = a))
                      : "boolean" == typeof t && ((n = t), (t = a))),
                  t === a && e === a
                    ? ((t = 0), (e = 1))
                    : ((t = $s(t)), e === a ? ((e = t), (t = 0)) : (e = $s(e))),
                  t > e)
                ) {
                  var r = t;
                  (t = e), (e = r);
                }
                if (n || t % 1 || e % 1) {
                  var i = qe();
                  return ze(
                    t + i * (e - t + nn("1e-" + ((i + "").length - 1))),
                    e
                  );
                }
                return va(t, e);
              }
              var $f = fo(function (t, e, n) {
                return (e = e.toLowerCase()), t + (n ? qf(e) : e);
              });
              function qf(t) {
                return yp(Js(t).toLowerCase());
              }
              function Hf(t) {
                return (t = Js(t)), t && t.replace(Zt, tr).replace(Ve, "");
              }
              function Wf(t, e, n) {
                (t = Js(t)), (e = Aa(e));
                var r = t.length;
                n = n === a ? r : hi(qs(n), 0, r);
                var i = n;
                return (n -= e.length), n >= 0 && t.slice(n, i) == e;
              }
              function Kf(t) {
                return (t = Js(t)), t && Ct.test(t) ? t.replace(kt, er) : t;
              }
              function Yf(t) {
                return (t = Js(t)), t && Dt.test(t) ? t.replace(Mt, "\\$&") : t;
              }
              var Jf = fo(function (t, e, n) {
                  return t + (n ? "-" : "") + e.toLowerCase();
                }),
                Zf = fo(function (t, e, n) {
                  return t + (n ? " " : "") + e.toLowerCase();
                }),
                Qf = so("toLowerCase");
              function tp(t, e, n) {
                (t = Js(t)), (e = qs(e));
                var r = e ? hr(t) : 0;
                if (!e || r >= e) return t;
                var i = (e - r) / 2;
                return wo(Re(i), n) + t + wo(Ne(i), n);
              }
              function ep(t, e, n) {
                (t = Js(t)), (e = qs(e));
                var r = e ? hr(t) : 0;
                return e && r < e ? t + wo(e - r, n) : t;
              }
              function np(t, e, n) {
                (t = Js(t)), (e = qs(e));
                var r = e ? hr(t) : 0;
                return e && r < e ? wo(e - r, n) + t : t;
              }
              function rp(t, e, n) {
                return (
                  n || null == e ? (e = 0) : e && (e = +e),
                  $e(Js(t).replace(Ut, ""), e || 0)
                );
              }
              function ip(t, e, n) {
                return (
                  (e = (n ? ac(t, e, n) : e === a) ? 1 : qs(e)), ma(Js(t), e)
                );
              }
              function ap() {
                var t = arguments,
                  e = Js(t[0]);
                return t.length < 3 ? e : e.replace(t[1], t[2]);
              }
              var op = fo(function (t, e, n) {
                return t + (n ? "_" : "") + e.toLowerCase();
              });
              function cp(t, e, n) {
                return (
                  n && "number" != typeof n && ac(t, e, n) && (e = n = a),
                  (n = n === a ? B : n >>> 0),
                  n
                    ? ((t = Js(t)),
                      t &&
                      ("string" == typeof e || (null != e && !Ns(e))) &&
                      ((e = Aa(e)), !e && ir(t))
                        ? Va(vr(t), 0, n)
                        : t.split(e, n))
                    : []
                );
              }
              var up = fo(function (t, e, n) {
                return t + (n ? " " : "") + yp(e);
              });
              function lp(t, e, n) {
                return (
                  (t = Js(t)),
                  (n = null == n ? 0 : hi(qs(n), 0, t.length)),
                  (e = Aa(e)),
                  t.slice(n, n + e.length) == e
                );
              }
              function sp(t, e, n) {
                var r = _r.templateSettings;
                n && ac(t, e, n) && (e = a),
                  (t = Js(t)),
                  (e = tf({}, e, r, Io));
                var i,
                  o,
                  c = tf({}, e.imports, r.imports, Io),
                  u = wf(c),
                  l = Kn(c, u),
                  s = 0,
                  f = e.interpolate || Qt,
                  p = "__p += '",
                  d = re(
                    (e.escape || Qt).source +
                      "|" +
                      f.source +
                      "|" +
                      (f === At ? $t : Qt).source +
                      "|" +
                      (e.evaluate || Qt).source +
                      "|$",
                    "g"
                  ),
                  h =
                    "//# sourceURL=" +
                    (fe.call(e, "sourceURL")
                      ? (e.sourceURL + "").replace(/[\r\n]/g, " ")
                      : "lodash.templateSources[" + ++Ke + "]") +
                    "\n";
                t.replace(d, function (e, n, r, a, c, u) {
                  return (
                    r || (r = a),
                    (p += t.slice(s, u).replace(te, nr)),
                    n && ((i = !0), (p += "' +\n__e(" + n + ") +\n'")),
                    c && ((o = !0), (p += "';\n" + c + ";\n__p += '")),
                    r &&
                      (p +=
                        "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
                    (s = u + e.length),
                    e
                  );
                }),
                  (p += "';\n");
                var v = fe.call(e, "variable") && e.variable;
                v || (p = "with (obj) {\n" + p + "\n}\n"),
                  (p = (o ? p.replace(xt, "") : p)
                    .replace(Ot, "$1")
                    .replace(Tt, "$1;")),
                  (p =
                    "function(" +
                    (v || "obj") +
                    ") {\n" +
                    (v ? "" : "obj || (obj = {});\n") +
                    "var __t, __p = ''" +
                    (i ? ", __e = _.escape" : "") +
                    (o
                      ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
                      : ";\n") +
                    p +
                    "return __p\n}");
                var b = wp(function () {
                  return Vt(u, h + "return " + p).apply(a, l);
                });
                if (((b.source = p), ms(b))) throw b;
                return b;
              }
              function fp(t) {
                return Js(t).toLowerCase();
              }
              function pp(t) {
                return Js(t).toUpperCase();
              }
              function dp(t, e, n) {
                if (((t = Js(t)), t && (n || e === a)))
                  return t.replace(Pt, "");
                if (!t || !(e = Aa(e))) return t;
                var r = vr(t),
                  i = vr(e),
                  o = Jn(r, i),
                  c = Zn(r, i) + 1;
                return Va(r, o, c).join("");
              }
              function hp(t, e, n) {
                if (((t = Js(t)), t && (n || e === a)))
                  return t.replace(Bt, "");
                if (!t || !(e = Aa(e))) return t;
                var r = vr(t),
                  i = Zn(r, vr(e)) + 1;
                return Va(r, 0, i).join("");
              }
              function vp(t, e, n) {
                if (((t = Js(t)), t && (n || e === a)))
                  return t.replace(Ut, "");
                if (!t || !(e = Aa(e))) return t;
                var r = vr(t),
                  i = Jn(r, vr(e));
                return Va(r, i).join("");
              }
              function bp(t, e) {
                var n = C,
                  r = S;
                if (xs(e)) {
                  var i = "separator" in e ? e.separator : i;
                  (n = "length" in e ? qs(e.length) : n),
                    (r = "omission" in e ? Aa(e.omission) : r);
                }
                t = Js(t);
                var o = t.length;
                if (ir(t)) {
                  var c = vr(t);
                  o = c.length;
                }
                if (n >= o) return t;
                var u = n - hr(r);
                if (u < 1) return r;
                var l = c ? Va(c, 0, u).join("") : t.slice(0, u);
                if (i === a) return l + r;
                if ((c && (u += l.length - u), Ns(i))) {
                  if (t.slice(u).search(i)) {
                    var s,
                      f = l;
                    i.global || (i = re(i.source, Js(qt.exec(i)) + "g")),
                      (i.lastIndex = 0);
                    while ((s = i.exec(f))) var p = s.index;
                    l = l.slice(0, p === a ? u : p);
                  }
                } else if (t.indexOf(Aa(i), u) != u) {
                  var d = l.lastIndexOf(i);
                  d > -1 && (l = l.slice(0, d));
                }
                return l + r;
              }
              function mp(t) {
                return (t = Js(t)), t && jt.test(t) ? t.replace(Et, br) : t;
              }
              var gp = fo(function (t, e, n) {
                  return t + (n ? " " : "") + e.toUpperCase();
                }),
                yp = so("toUpperCase");
              function _p(t, e, n) {
                return (
                  (t = Js(t)),
                  (e = n ? a : e),
                  e === a ? (ar(t) ? yr(t) : Rn(t)) : t.match(e) || []
                );
              }
              var wp = ga(function (t, e) {
                  try {
                    return yn(t, a, e);
                  } catch (n) {
                    return ms(n) ? n : new i(n);
                  }
                }),
                xp = Do(function (t, e) {
                  return (
                    wn(e, function (e) {
                      (e = Sc(e)), pi(t, e, Il(t[e], t));
                    }),
                    t
                  );
                });
              function Op(t) {
                var e = null == t ? 0 : t.length,
                  n = Xo();
                return (
                  (t = e
                    ? jn(t, function (t) {
                        if ("function" != typeof t[1]) throw new ae(l);
                        return [n(t[0]), t[1]];
                      })
                    : []),
                  ga(function (n) {
                    var r = -1;
                    while (++r < e) {
                      var i = t[r];
                      if (yn(i[0], this, n)) return yn(i[1], this, n);
                    }
                  })
                );
              }
              function Tp(t) {
                return bi(vi(t, d));
              }
              function Ep(t) {
                return function () {
                  return t;
                };
              }
              function kp(t, e) {
                return null == t || t !== t ? e : t;
              }
              var jp = bo(),
                Cp = bo(!0);
              function Sp(t) {
                return t;
              }
              function Ip(t) {
                return Qi("function" == typeof t ? t : vi(t, d));
              }
              function Ap(t) {
                return ia(vi(t, d));
              }
              function Lp(t, e) {
                return aa(t, vi(e, d));
              }
              var Np = ga(function (t, e) {
                  return function (n) {
                    return zi(n, t, e);
                  };
                }),
                Rp = ga(function (t, e) {
                  return function (n) {
                    return zi(t, n, e);
                  };
                });
              function Mp(t, e, n) {
                var r = wf(e),
                  i = Ai(e, r);
                null != n ||
                  (xs(e) && (i.length || !r.length)) ||
                  ((n = e), (e = t), (t = this), (i = Ai(e, wf(e))));
                var a = !(xs(n) && "chain" in n) || !!n.chain,
                  o = ys(t);
                return (
                  wn(i, function (n) {
                    var r = e[n];
                    (t[n] = r),
                      o &&
                        (t.prototype[n] = function () {
                          var e = this.__chain__;
                          if (a || e) {
                            var n = t(this.__wrapped__),
                              i = (n.__actions__ = eo(this.__actions__));
                            return (
                              i.push({ func: r, args: arguments, thisArg: t }),
                              (n.__chain__ = e),
                              n
                            );
                          }
                          return r.apply(t, Cn([this.value()], arguments));
                        });
                  }),
                  t
                );
              }
              function Dp() {
                return cn._ === this && (cn._ = be), this;
              }
              function Pp() {}
              function Up(t) {
                return (
                  (t = qs(t)),
                  ga(function (e) {
                    return ua(e, t);
                  })
                );
              }
              var Bp = _o(jn),
                Fp = _o(On),
                zp = _o(An);
              function Xp(t) {
                return oc(t) ? zn(Sc(t)) : pa(t);
              }
              function Vp(t) {
                return function (e) {
                  return null == t ? a : Li(t, e);
                };
              }
              var Gp = Oo(),
                $p = Oo(!0);
              function qp() {
                return [];
              }
              function Hp() {
                return !1;
              }
              function Wp() {
                return {};
              }
              function Kp() {
                return "";
              }
              function Yp() {
                return !0;
              }
              function Jp(t, e) {
                if (((t = qs(t)), t < 1 || t > D)) return [];
                var n = B,
                  r = ze(t, B);
                (e = Xo(e)), (t -= B);
                var i = qn(r, e);
                while (++n < t) e(n);
                return i;
              }
              function Zp(t) {
                return os(t) ? jn(t, Sc) : Ps(t) ? [t] : eo(Cc(Js(t)));
              }
              function Qp(t) {
                var e = ++pe;
                return Js(t) + e;
              }
              var td = yo(function (t, e) {
                  return t + e;
                }, 0),
                ed = ko("ceil"),
                nd = yo(function (t, e) {
                  return t / e;
                }, 1),
                rd = ko("floor");
              function id(t) {
                return t && t.length ? Oi(t, Sp, Mi) : a;
              }
              function ad(t, e) {
                return t && t.length ? Oi(t, Xo(e, 2), Mi) : a;
              }
              function od(t) {
                return Fn(t, Sp);
              }
              function cd(t, e) {
                return Fn(t, Xo(e, 2));
              }
              function ud(t) {
                return t && t.length ? Oi(t, Sp, na) : a;
              }
              function ld(t, e) {
                return t && t.length ? Oi(t, Xo(e, 2), na) : a;
              }
              var sd = yo(function (t, e) {
                  return t * e;
                }, 1),
                fd = ko("round"),
                pd = yo(function (t, e) {
                  return t - e;
                }, 0);
              function dd(t) {
                return t && t.length ? $n(t, Sp) : 0;
              }
              function hd(t, e) {
                return t && t.length ? $n(t, Xo(e, 2)) : 0;
              }
              return (
                (_r.after = jl),
                (_r.ary = Cl),
                (_r.assign = Zs),
                (_r.assignIn = Qs),
                (_r.assignInWith = tf),
                (_r.assignWith = ef),
                (_r.at = nf),
                (_r.before = Sl),
                (_r.bind = Il),
                (_r.bindAll = xp),
                (_r.bindKey = Al),
                (_r.castArray = Yl),
                (_r.chain = Vu),
                (_r.chunk = Nc),
                (_r.compact = Rc),
                (_r.concat = Mc),
                (_r.cond = Op),
                (_r.conforms = Tp),
                (_r.constant = Ep),
                (_r.countBy = tl),
                (_r.create = rf),
                (_r.curry = Ll),
                (_r.curryRight = Nl),
                (_r.debounce = Rl),
                (_r.defaults = af),
                (_r.defaultsDeep = of),
                (_r.defer = Ml),
                (_r.delay = Dl),
                (_r.difference = Dc),
                (_r.differenceBy = Pc),
                (_r.differenceWith = Uc),
                (_r.drop = Bc),
                (_r.dropRight = Fc),
                (_r.dropRightWhile = zc),
                (_r.dropWhile = Xc),
                (_r.fill = Vc),
                (_r.filter = nl),
                (_r.flatMap = al),
                (_r.flatMapDeep = ol),
                (_r.flatMapDepth = cl),
                (_r.flatten = qc),
                (_r.flattenDeep = Hc),
                (_r.flattenDepth = Wc),
                (_r.flip = Pl),
                (_r.flow = jp),
                (_r.flowRight = Cp),
                (_r.fromPairs = Kc),
                (_r.functions = df),
                (_r.functionsIn = hf),
                (_r.groupBy = sl),
                (_r.initial = Zc),
                (_r.intersection = Qc),
                (_r.intersectionBy = tu),
                (_r.intersectionWith = eu),
                (_r.invert = gf),
                (_r.invertBy = yf),
                (_r.invokeMap = pl),
                (_r.iteratee = Ip),
                (_r.keyBy = dl),
                (_r.keys = wf),
                (_r.keysIn = xf),
                (_r.map = hl),
                (_r.mapKeys = Of),
                (_r.mapValues = Tf),
                (_r.matches = Ap),
                (_r.matchesProperty = Lp),
                (_r.memoize = Ul),
                (_r.merge = Ef),
                (_r.mergeWith = kf),
                (_r.method = Np),
                (_r.methodOf = Rp),
                (_r.mixin = Mp),
                (_r.negate = Bl),
                (_r.nthArg = Up),
                (_r.omit = jf),
                (_r.omitBy = Cf),
                (_r.once = Fl),
                (_r.orderBy = vl),
                (_r.over = Bp),
                (_r.overArgs = zl),
                (_r.overEvery = Fp),
                (_r.overSome = zp),
                (_r.partial = Xl),
                (_r.partialRight = Vl),
                (_r.partition = bl),
                (_r.pick = Sf),
                (_r.pickBy = If),
                (_r.property = Xp),
                (_r.propertyOf = Vp),
                (_r.pull = ou),
                (_r.pullAll = cu),
                (_r.pullAllBy = uu),
                (_r.pullAllWith = lu),
                (_r.pullAt = su),
                (_r.range = Gp),
                (_r.rangeRight = $p),
                (_r.rearg = Gl),
                (_r.reject = yl),
                (_r.remove = fu),
                (_r.rest = $l),
                (_r.reverse = pu),
                (_r.sampleSize = wl),
                (_r.set = Lf),
                (_r.setWith = Nf),
                (_r.shuffle = xl),
                (_r.slice = du),
                (_r.sortBy = El),
                (_r.sortedUniq = _u),
                (_r.sortedUniqBy = wu),
                (_r.split = cp),
                (_r.spread = ql),
                (_r.tail = xu),
                (_r.take = Ou),
                (_r.takeRight = Tu),
                (_r.takeRightWhile = Eu),
                (_r.takeWhile = ku),
                (_r.tap = Gu),
                (_r.throttle = Hl),
                (_r.thru = $u),
                (_r.toArray = Gs),
                (_r.toPairs = Rf),
                (_r.toPairsIn = Mf),
                (_r.toPath = Zp),
                (_r.toPlainObject = Ks),
                (_r.transform = Df),
                (_r.unary = Wl),
                (_r.union = ju),
                (_r.unionBy = Cu),
                (_r.unionWith = Su),
                (_r.uniq = Iu),
                (_r.uniqBy = Au),
                (_r.uniqWith = Lu),
                (_r.unset = Pf),
                (_r.unzip = Nu),
                (_r.unzipWith = Ru),
                (_r.update = Uf),
                (_r.updateWith = Bf),
                (_r.values = Ff),
                (_r.valuesIn = zf),
                (_r.without = Mu),
                (_r.words = _p),
                (_r.wrap = Kl),
                (_r.xor = Du),
                (_r.xorBy = Pu),
                (_r.xorWith = Uu),
                (_r.zip = Bu),
                (_r.zipObject = Fu),
                (_r.zipObjectDeep = zu),
                (_r.zipWith = Xu),
                (_r.entries = Rf),
                (_r.entriesIn = Mf),
                (_r.extend = Qs),
                (_r.extendWith = tf),
                Mp(_r, _r),
                (_r.add = td),
                (_r.attempt = wp),
                (_r.camelCase = $f),
                (_r.capitalize = qf),
                (_r.ceil = ed),
                (_r.clamp = Xf),
                (_r.clone = Jl),
                (_r.cloneDeep = Ql),
                (_r.cloneDeepWith = ts),
                (_r.cloneWith = Zl),
                (_r.conformsTo = es),
                (_r.deburr = Hf),
                (_r.defaultTo = kp),
                (_r.divide = nd),
                (_r.endsWith = Wf),
                (_r.eq = ns),
                (_r.escape = Kf),
                (_r.escapeRegExp = Yf),
                (_r.every = el),
                (_r.find = rl),
                (_r.findIndex = Gc),
                (_r.findKey = cf),
                (_r.findLast = il),
                (_r.findLastIndex = $c),
                (_r.findLastKey = uf),
                (_r.floor = rd),
                (_r.forEach = ul),
                (_r.forEachRight = ll),
                (_r.forIn = lf),
                (_r.forInRight = sf),
                (_r.forOwn = ff),
                (_r.forOwnRight = pf),
                (_r.get = vf),
                (_r.gt = rs),
                (_r.gte = is),
                (_r.has = bf),
                (_r.hasIn = mf),
                (_r.head = Yc),
                (_r.identity = Sp),
                (_r.includes = fl),
                (_r.indexOf = Jc),
                (_r.inRange = Vf),
                (_r.invoke = _f),
                (_r.isArguments = as),
                (_r.isArray = os),
                (_r.isArrayBuffer = cs),
                (_r.isArrayLike = us),
                (_r.isArrayLikeObject = ls),
                (_r.isBoolean = ss),
                (_r.isBuffer = fs),
                (_r.isDate = ps),
                (_r.isElement = ds),
                (_r.isEmpty = hs),
                (_r.isEqual = vs),
                (_r.isEqualWith = bs),
                (_r.isError = ms),
                (_r.isFinite = gs),
                (_r.isFunction = ys),
                (_r.isInteger = _s),
                (_r.isLength = ws),
                (_r.isMap = Ts),
                (_r.isMatch = Es),
                (_r.isMatchWith = ks),
                (_r.isNaN = js),
                (_r.isNative = Cs),
                (_r.isNil = Is),
                (_r.isNull = Ss),
                (_r.isNumber = As),
                (_r.isObject = xs),
                (_r.isObjectLike = Os),
                (_r.isPlainObject = Ls),
                (_r.isRegExp = Ns),
                (_r.isSafeInteger = Rs),
                (_r.isSet = Ms),
                (_r.isString = Ds),
                (_r.isSymbol = Ps),
                (_r.isTypedArray = Us),
                (_r.isUndefined = Bs),
                (_r.isWeakMap = Fs),
                (_r.isWeakSet = zs),
                (_r.join = nu),
                (_r.kebabCase = Jf),
                (_r.last = ru),
                (_r.lastIndexOf = iu),
                (_r.lowerCase = Zf),
                (_r.lowerFirst = Qf),
                (_r.lt = Xs),
                (_r.lte = Vs),
                (_r.max = id),
                (_r.maxBy = ad),
                (_r.mean = od),
                (_r.meanBy = cd),
                (_r.min = ud),
                (_r.minBy = ld),
                (_r.stubArray = qp),
                (_r.stubFalse = Hp),
                (_r.stubObject = Wp),
                (_r.stubString = Kp),
                (_r.stubTrue = Yp),
                (_r.multiply = sd),
                (_r.nth = au),
                (_r.noConflict = Dp),
                (_r.noop = Pp),
                (_r.now = kl),
                (_r.pad = tp),
                (_r.padEnd = ep),
                (_r.padStart = np),
                (_r.parseInt = rp),
                (_r.random = Gf),
                (_r.reduce = ml),
                (_r.reduceRight = gl),
                (_r.repeat = ip),
                (_r.replace = ap),
                (_r.result = Af),
                (_r.round = fd),
                (_r.runInContext = t),
                (_r.sample = _l),
                (_r.size = Ol),
                (_r.snakeCase = op),
                (_r.some = Tl),
                (_r.sortedIndex = hu),
                (_r.sortedIndexBy = vu),
                (_r.sortedIndexOf = bu),
                (_r.sortedLastIndex = mu),
                (_r.sortedLastIndexBy = gu),
                (_r.sortedLastIndexOf = yu),
                (_r.startCase = up),
                (_r.startsWith = lp),
                (_r.subtract = pd),
                (_r.sum = dd),
                (_r.sumBy = hd),
                (_r.template = sp),
                (_r.times = Jp),
                (_r.toFinite = $s),
                (_r.toInteger = qs),
                (_r.toLength = Hs),
                (_r.toLower = fp),
                (_r.toNumber = Ws),
                (_r.toSafeInteger = Ys),
                (_r.toString = Js),
                (_r.toUpper = pp),
                (_r.trim = dp),
                (_r.trimEnd = hp),
                (_r.trimStart = vp),
                (_r.truncate = bp),
                (_r.unescape = mp),
                (_r.uniqueId = Qp),
                (_r.upperCase = gp),
                (_r.upperFirst = yp),
                (_r.each = ul),
                (_r.eachRight = ll),
                (_r.first = Yc),
                Mp(
                  _r,
                  (function () {
                    var t = {};
                    return (
                      Si(_r, function (e, n) {
                        fe.call(_r.prototype, n) || (t[n] = e);
                      }),
                      t
                    );
                  })(),
                  { chain: !1 }
                ),
                (_r.VERSION = o),
                wn(
                  [
                    "bind",
                    "bindKey",
                    "curry",
                    "curryRight",
                    "partial",
                    "partialRight",
                  ],
                  function (t) {
                    _r[t].placeholder = _r;
                  }
                ),
                wn(["drop", "take"], function (t, e) {
                  (Er.prototype[t] = function (n) {
                    n = n === a ? 1 : Fe(qs(n), 0);
                    var r =
                      this.__filtered__ && !e ? new Er(this) : this.clone();
                    return (
                      r.__filtered__
                        ? (r.__takeCount__ = ze(n, r.__takeCount__))
                        : r.__views__.push({
                            size: ze(n, B),
                            type: t + (r.__dir__ < 0 ? "Right" : ""),
                          }),
                      r
                    );
                  }),
                    (Er.prototype[t + "Right"] = function (e) {
                      return this.reverse()[t](e).reverse();
                    });
                }),
                wn(["filter", "map", "takeWhile"], function (t, e) {
                  var n = e + 1,
                    r = n == L || n == R;
                  Er.prototype[t] = function (t) {
                    var e = this.clone();
                    return (
                      e.__iteratees__.push({ iteratee: Xo(t, 3), type: n }),
                      (e.__filtered__ = e.__filtered__ || r),
                      e
                    );
                  };
                }),
                wn(["head", "last"], function (t, e) {
                  var n = "take" + (e ? "Right" : "");
                  Er.prototype[t] = function () {
                    return this[n](1).value()[0];
                  };
                }),
                wn(["initial", "tail"], function (t, e) {
                  var n = "drop" + (e ? "" : "Right");
                  Er.prototype[t] = function () {
                    return this.__filtered__ ? new Er(this) : this[n](1);
                  };
                }),
                (Er.prototype.compact = function () {
                  return this.filter(Sp);
                }),
                (Er.prototype.find = function (t) {
                  return this.filter(t).head();
                }),
                (Er.prototype.findLast = function (t) {
                  return this.reverse().find(t);
                }),
                (Er.prototype.invokeMap = ga(function (t, e) {
                  return "function" == typeof t
                    ? new Er(this)
                    : this.map(function (n) {
                        return zi(n, t, e);
                      });
                })),
                (Er.prototype.reject = function (t) {
                  return this.filter(Bl(Xo(t)));
                }),
                (Er.prototype.slice = function (t, e) {
                  t = qs(t);
                  var n = this;
                  return n.__filtered__ && (t > 0 || e < 0)
                    ? new Er(n)
                    : (t < 0 ? (n = n.takeRight(-t)) : t && (n = n.drop(t)),
                      e !== a &&
                        ((e = qs(e)),
                        (n = e < 0 ? n.dropRight(-e) : n.take(e - t))),
                      n);
                }),
                (Er.prototype.takeRightWhile = function (t) {
                  return this.reverse().takeWhile(t).reverse();
                }),
                (Er.prototype.toArray = function () {
                  return this.take(B);
                }),
                Si(Er.prototype, function (t, e) {
                  var n = /^(?:filter|find|map|reject)|While$/.test(e),
                    r = /^(?:head|last)$/.test(e),
                    i = _r[r ? "take" + ("last" == e ? "Right" : "") : e],
                    o = r || /^find/.test(e);
                  i &&
                    (_r.prototype[e] = function () {
                      var e = this.__wrapped__,
                        c = r ? [1] : arguments,
                        u = e instanceof Er,
                        l = c[0],
                        s = u || os(e),
                        f = function (t) {
                          var e = i.apply(_r, Cn([t], c));
                          return r && p ? e[0] : e;
                        };
                      s &&
                        n &&
                        "function" == typeof l &&
                        1 != l.length &&
                        (u = s = !1);
                      var p = this.__chain__,
                        d = !!this.__actions__.length,
                        h = o && !p,
                        v = u && !d;
                      if (!o && s) {
                        e = v ? e : new Er(this);
                        var b = t.apply(e, c);
                        return (
                          b.__actions__.push({
                            func: $u,
                            args: [f],
                            thisArg: a,
                          }),
                          new Tr(b, p)
                        );
                      }
                      return h && v
                        ? t.apply(this, c)
                        : ((b = this.thru(f)),
                          h ? (r ? b.value()[0] : b.value()) : b);
                    });
                }),
                wn(
                  ["pop", "push", "shift", "sort", "splice", "unshift"],
                  function (t) {
                    var e = oe[t],
                      n = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                      r = /^(?:pop|shift)$/.test(t);
                    _r.prototype[t] = function () {
                      var t = arguments;
                      if (r && !this.__chain__) {
                        var i = this.value();
                        return e.apply(os(i) ? i : [], t);
                      }
                      return this[n](function (n) {
                        return e.apply(os(n) ? n : [], t);
                      });
                    };
                  }
                ),
                Si(Er.prototype, function (t, e) {
                  var n = _r[e];
                  if (n) {
                    var r = n.name + "";
                    fe.call(ln, r) || (ln[r] = []),
                      ln[r].push({ name: e, func: n });
                  }
                }),
                (ln[mo(a, y).name] = [{ name: "wrapper", func: a }]),
                (Er.prototype.clone = kr),
                (Er.prototype.reverse = jr),
                (Er.prototype.value = Cr),
                (_r.prototype.at = qu),
                (_r.prototype.chain = Hu),
                (_r.prototype.commit = Wu),
                (_r.prototype.next = Ku),
                (_r.prototype.plant = Ju),
                (_r.prototype.reverse = Zu),
                (_r.prototype.toJSON =
                  _r.prototype.valueOf =
                  _r.prototype.value =
                    Qu),
                (_r.prototype.first = _r.prototype.head),
                je && (_r.prototype[je] = Yu),
                _r
              );
            },
            wr = _r();
          (cn._ = wr),
            (i = function () {
              return wr;
            }.call(e, n, e, r)),
            i === a || (r.exports = i);
        }.call(this));
      }.call(this, n("c8ba"), n("62e4")(t)));
    },
    "333c": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return qt;
      });
      var r = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticClass: "relation-picker" }, [
            n("div", { staticClass: "relation-picker-head" }, [
              n("span", { staticClass: "relation-picker-head_title" }, [
                t._v(t._s(t.title)),
              ]),
              t.modifyVisible
                ? n(
                    "span",
                    {
                      directives: [
                        {
                          name: "permission",
                          rawName: "v-permission",
                          value: { label: "write" },
                          expression: "{label: 'write'}",
                        },
                      ],
                      staticClass: "relation-picker-head_modify",
                      on: { click: t.handleModifyClick },
                    },
                    [
                      n(
                        "span",
                        { staticClass: "relation-picker-head_modify_plus" },
                        [t._v("+")]
                      ),
                      t._v(" 添加/修改 "),
                    ]
                  )
                : t._e(),
            ]),
            n("div", { staticClass: "relation-picker-body" }, [
              n(
                "div",
                { staticClass: "relation-picker-body_searcher" },
                [
                  n(
                    "the-input",
                    {
                      staticClass: "relation-picker-body_searcher_input",
                      attrs: { placeholder: "请输入关系标签名称" },
                      model: {
                        value: t.state.keyword,
                        callback: function (e) {
                          t.$set(t.state, "keyword", e);
                        },
                        expression: "state.keyword",
                      },
                    },
                    [
                      n("the-icon", {
                        attrs: { slot: "postfix", name: "search" },
                        on: { click: t.searchText },
                        slot: "postfix",
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              n("div", { staticClass: "relation-picker-body_title" }, [
                t._v(" 实体标签 "),
              ]),
              n(
                "div",
                { staticClass: "relation-picker-body_list" },
                t._l(t.labels, function (e) {
                  return n("LabelItem", {
                    key: "label_item_" + e.id + "}",
                    attrs: {
                      item: e,
                      datasetId: t.datasetId,
                      keyword: t.state.keyword,
                      model: t.labelModel,
                    },
                  });
                }),
                1
              ),
              n("div", { staticClass: "relation-picker-body_title" }, [
                t._v(" 关系标签 "),
              ]),
              n(
                "div",
                {
                  staticClass: "relation-picker-body_list",
                  on: {
                    scroll: function (e) {
                      return e.stopPropagation(), t.handleRelationScroll(e);
                    },
                  },
                },
                t._l(t.relations, function (e) {
                  return n("RelationItem", {
                    key: "relation_item_" + e.id + "}",
                    attrs: {
                      item: e,
                      isTop: e.isTop,
                      datasetId: t.datasetId,
                      keyword: t.state.keyword,
                      relationModel: t.relationModel,
                      abilities: t.abilities,
                    },
                    on: {
                      top: t.handleRelationTop,
                      delete: t.handleRelationDel,
                      edit: t.handleModifyClick,
                    },
                  });
                }),
                1
              ),
            ]),
          ]);
        },
        i = [],
        a = (n("7db0"), n("d81d"), n("a9e3"), n("5530")),
        o = n("f24d"),
        c = n("8165"),
        u = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "the-modal",
            { ref: "modal", staticClass: "tre-labels-modify" },
            [
              n("template", { slot: "head" }, [t._v("添加关系标签")]),
              n(
                "div",
                {
                  staticClass: "tre-labels-modify_body",
                  attrs: { slot: "body" },
                  slot: "body",
                },
                [
                  n(
                    "div",
                    { staticClass: "tre-labels-modify_section section_labels" },
                    [
                      n("div", { staticClass: "section_title" }, [
                        n("span", { staticClass: "section_title_index" }, [
                          n(
                            "span",
                            { staticClass: "section_title_index_num" },
                            [t._v("1")]
                          ),
                        ]),
                        t._v(" 创建实体类别标签 "),
                      ]),
                      n(
                        "div",
                        { ref: "labelListRef", staticClass: "section_list" },
                        t._l(t.labels, function (e, r) {
                          return n("LabelEditer", {
                            key: "label_editer_" + e.id,
                            attrs: {
                              disabled: t.labelEditDisabled,
                              item: e,
                              hasRelation: e.hasRelation,
                              readonly: e.readonly,
                              isNew: t.isNewLabel(e),
                              isLast: r === t.labels.length - 1 && !t.newLabel,
                            },
                            on: {
                              change: t.handleLabelChange,
                              create: t.handleNewLabelClick,
                              delete: t.handleEntityLabelDelete,
                            },
                          });
                        }),
                        1
                      ),
                    ]
                  ),
                  n(
                    "div",
                    {
                      staticClass:
                        "tre-labels-modify_section section_relations",
                    },
                    [
                      n("div", { staticClass: "section_title" }, [
                        n("span", { staticClass: "section_title_index" }, [
                          n(
                            "span",
                            { staticClass: "section_title_index_num" },
                            [t._v("2")]
                          ),
                        ]),
                        t._v(" 创建关系标签 "),
                      ]),
                      n(
                        "div",
                        { ref: "relationListRef", staticClass: "section_list" },
                        t._l(t.relations, function (e, r) {
                          return n("RelationEditer", {
                            key: "relation_editer_" + r,
                            attrs: {
                              disabled: t.relationEditDisabled,
                              labelSources: t.labels,
                              item: e,
                              isNew: t.isNewRelation(e),
                              isLast:
                                r === t.relations.length - 1 && !t.newRelation,
                            },
                            on: {
                              change: t.handleRelationChange,
                              create: t.handleNewRelationClick,
                              delete: t.handleRelationDel,
                            },
                          });
                        }),
                        1
                      ),
                    ]
                  ),
                ]
              ),
              n(
                "div",
                {
                  staticClass: "tre-labels-modify_foot",
                  attrs: { slot: "foot" },
                  slot: "foot",
                },
                [n("the-button", { on: { click: t.close } }, [t._v(" 关闭 ")])],
                1
              ),
            ],
            2
          );
        },
        l = [],
        s = n("ca6a"),
        f = function () {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r("div", { staticClass: "section_label_editer" }, [
            r(
              "div",
              { staticClass: "label-editer-content" },
              [
                r(
                  "the-form",
                  { ref: "form", attrs: { rules: t.rules } },
                  [
                    r(
                      "the-field",
                      { attrs: { "no-label": "", name: "labelName" } },
                      [
                        r(
                          "div",
                          { staticClass: "label-editer-input" },
                          [
                            r("LabelColor", {
                              attrs: { color: t.color },
                              on: {
                                change: function (e) {
                                  return t.handleColorChange(e);
                                },
                              },
                            }),
                            r("the-input", {
                              attrs: {
                                disabled: t.disabled || t.readonly,
                                placeholder: "请输入实体标签名称",
                                autocomplete: "off",
                              },
                              on: { change: t.handleNameChange },
                              model: {
                                value: t.name,
                                callback: function (e) {
                                  t.name = e;
                                },
                                expression: "name",
                              },
                            }),
                          ],
                          1
                        ),
                        r("div", { staticClass: "label-ops" }, [
                          t.isLast
                            ? r("img", {
                                staticClass: "ops-icon plus",
                                attrs: { src: n("28f5") },
                                on: {
                                  click: function (e) {
                                    return t.$emit("create");
                                  },
                                },
                              })
                            : t._e(),
                          t.disabled || t.hasRelation || t.readonly
                            ? r("img", {
                                staticClass: "ops-icon del del-disabled",
                                attrs: { src: n("ab22"), title: t.title },
                              })
                            : r("img", {
                                staticClass: "ops-icon del",
                                attrs: { src: n("4c35") },
                                on: { click: t.handleLabelDelClick },
                              }),
                        ]),
                      ]
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ]);
        },
        p = [],
        d = (n("45fc"), n("b0c0"), n("96cf"), n("1da1")),
        h = n("8607"),
        v = n("4bfa"),
        b = function () {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r(
            "div",
            {
              ref: "root",
              staticClass: "label-color",
              class: { open: t.pickr.open },
            },
            [
              r("div", { ref: "pickrEl", staticClass: "pickr" }),
              r("img", {
                staticClass: "arrow",
                attrs: { src: n("1115") },
                on: { mousedown: t.toggle },
              }),
            ]
          );
        },
        m = [],
        g = (n("d3b7"), n("25f0"), n("7f75"), n("eae0")),
        y = n.n(g),
        _ = n("cdb8"),
        w = { i18n: { "btn:save": "保存", "btn:cancel": "清除" } },
        x = function (t, e) {
          var n = Object(c["getCurrentInstance"])().proxy,
            r = Object(c["reactive"])({
              instance: null,
              open: !1,
              closing: !1,
            });
          return (
            Object(c["onMounted"])(function () {
              (r.instance = y.a.create(
                Object(a["a"])(
                  {
                    el: t.value,
                    theme: "nano",
                    defaultRepresentation: "HEXA",
                    default: e || _["a"],
                    swatches: [
                      _["a"],
                      "#7D29C9",
                      "#1BB3D8",
                      "#18BF1A",
                      "#FFCC01",
                      "#FF9A0B",
                      "#FF2C61",
                    ],
                    position: "bottom-start",
                    components: {
                      preview: !0,
                      opacity: !1,
                      hue: !0,
                      interaction: {
                        hex: !1,
                        rgba: !1,
                        hsva: !1,
                        input: !0,
                        clear: !1,
                        save: !0,
                        cancel: !0,
                      },
                    },
                  },
                  w
                )
              )),
                r.instance
                  .on("save", function (t) {
                    r.instance.hide();
                    var e = t.toHEXA().toString();
                    n.$emit("change", e);
                  })
                  .on("cancel", function () {
                    r.instance.hide();
                  })
                  .on("show", function () {
                    r.open = !0;
                  })
                  .on("hide", function () {
                    (r.open = !1),
                      (r.closing = !0),
                      setTimeout(function () {
                        r.closing = !1;
                      }, 200);
                  }),
                n.$emit("change", e);
            }),
            r
          );
        },
        O = Object(c["defineComponent"])({
          props: { color: { type: String, default: _["a"] } },
          setup: function (t) {
            var e = Object(c["ref"])(null),
              n = Object(c["ref"])(null),
              r = x(n, t.color);
            return {
              root: e,
              pickrEl: n,
              pickr: r,
              toggle: function () {
                setTimeout(function () {
                  var t;
                  if (!r.closing) {
                    var n =
                      null === (t = e.value) || void 0 === t
                        ? void 0
                        : t.querySelector(".pickr button");
                    null === n || void 0 === n || n.click();
                  }
                }, 100);
              },
            };
          },
        }),
        T = O,
        E = (n("89e4"), n("d160"), n("2877")),
        k = Object(E["a"])(T, b, m, !1, null, "61a54a3c", null),
        j = k.exports,
        C = Object(c["defineComponent"])({
          components: { LabelColor: j },
          props: {
            isLast: { type: Boolean, required: !1, default: !1 },
            isNew: { type: Boolean, required: !1, default: !1 },
            hasRelation: { type: Boolean, required: !1, default: !1 },
            item: { type: Object, required: !0 },
            disabled: { type: Boolean, required: !1, default: !1 },
            readonly: { type: Boolean, required: !1, default: !1 },
          },
          setup: function (t, e) {
            var n = e.emit,
              r = Object(s["a"])(),
              i = r.labels,
              o = Object(c["ref"])(_["a"]),
              u = Object(c["ref"])(""),
              l = Object(c["ref"])(),
              f = Object(c["computed"])(function () {
                return t.hasRelation
                  ? "存在关系标签使用了此类别标签，不能删除。请调整关系标签中的实体类别标签"
                  : t.disabled
                  ? "编辑中，不允许删除"
                  : t.readonly
                  ? "当前数据集已有标签禁止删除"
                  : void 0;
              });
            Object(c["watch"])(
              function () {
                return t.item.name;
              },
              function (t) {
                u.value = t;
              },
              { immediate: !0 }
            ),
              Object(c["watch"])(
                function () {
                  return t.item.color;
                },
                function (t) {
                  o.value = t || Object(_["b"])();
                },
                { immediate: !0 }
              );
            var p = (function () {
                var e = Object(d["a"])(
                  regeneratorRuntime.mark(function e() {
                    var r, i;
                    return regeneratorRuntime.wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (l.value) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt("return");
                          case 2:
                            return (e.next = 4), l.value.submit();
                          case 4:
                            if (((r = e.sent), (i = r.hasError), !i)) {
                              e.next = 8;
                              break;
                            }
                            return e.abrupt("return");
                          case 8:
                            Object(h["c"])(1),
                              n(
                                "change",
                                Object(a["a"])(
                                  Object(a["a"])({}, t.item),
                                  {},
                                  { name: u.value, color: o.value }
                                )
                              );
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
              b = function (t) {
                u.value && ((o.value = t), p());
              },
              m = function () {
                n("delete", Object(a["a"])({}, t.item));
              },
              g = Object(c["computed"])(function () {
                return {
                  labelName: [
                    {
                      type: "string",
                      validator: function (e, n) {
                        return /^[A-Za-z0-9_\u4e00-\u9fff\u3400-\u4dbf]+$/.test(
                          n
                        )
                          ? !i.value.some(function (e) {
                              return e.name === n && e.id !== t.item.id;
                            }) || ((e.message = "标签已存在"), !1)
                          : ((e.message = "标签仅支持中英文数字中下划线"), !1);
                      },
                      message: "标签仅支持中英文数字中下划线",
                    },
                    Object(v["a"])("标签", { max: 20 }),
                  ],
                };
              });
            return {
              color: o,
              name: u,
              form: l,
              rules: g,
              title: f,
              handleNameChange: p,
              handleColorChange: b,
              handleLabelDelClick: m,
            };
          },
        }),
        S = C,
        I = (n("88f4"), Object(E["a"])(S, f, p, !1, null, "36f72c9a", null)),
        A = I.exports,
        L = function () {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r("div", { staticClass: "section_relation_editer" }, [
            r(
              "div",
              { staticClass: "relation-editer-content" },
              [
                r("the-input", {
                  attrs: {
                    disabled: t.disabled || t.item.readonly,
                    placeholder: "请输入关系标签名称",
                    value: t.name,
                  },
                  on: { change: t.handleNameChang },
                }),
                r(
                  "the-dropdown",
                  {
                    attrs: {
                      disabled: t.disabled || !t.isNew,
                      placeholder: "请指定文本标签",
                    },
                    model: {
                      value: t.subObject,
                      callback: function (e) {
                        t.subObject = e;
                      },
                      expression: "subObject",
                    },
                  },
                  t._l(t.originLabelSources, function (e) {
                    return r(
                      "the-dropdown-item",
                      { key: "obj_label_" + e.id, attrs: { value: e.id } },
                      [t._v(" " + t._s(e.name) + " ")]
                    );
                  }),
                  1
                ),
                r(
                  "the-dropdown",
                  {
                    attrs: {
                      disabled: t.disabled || !t.isNew,
                      placeholder: "请指定文本标签",
                    },
                    model: {
                      value: t.orgObject,
                      callback: function (e) {
                        t.orgObject = e;
                      },
                      expression: "orgObject",
                    },
                  },
                  t._l(t.originLabelSources, function (e) {
                    return r(
                      "the-dropdown-item",
                      { key: "obj_sublabel_" + e.id, attrs: { value: e.id } },
                      [t._v(" " + t._s(e.name) + " ")]
                    );
                  }),
                  1
                ),
                r("div", { staticClass: "relation-ops" }, [
                  t.isLast
                    ? r("img", {
                        staticClass: "ops-icon plus",
                        attrs: { src: n("28f5") },
                        on: {
                          click: function (e) {
                            return t.$emit("create");
                          },
                        },
                      })
                    : t._e(),
                  t.disabled || t.item.readonly
                    ? r("img", {
                        staticClass: "ops-icon del",
                        attrs: {
                          src: n("ab22"),
                          title: t.disabled
                            ? "编辑中，不允许删除！"
                            : "当前数据集已有关系标签禁止删除",
                        },
                      })
                    : r("img", {
                        staticClass: "ops-icon del",
                        attrs: { src: n("4c35") },
                        on: {
                          click: function (e) {
                            return t.$emit("delete", t.item);
                          },
                        },
                      }),
                ]),
              ],
              1
            ),
          ]);
        },
        N = [],
        R = (n("4de4"), n("66c7")),
        M = n.n(R),
        D = Object(c["defineComponent"])({
          props: {
            isLast: { type: Boolean, required: !1, default: !1 },
            item: {
              type: Object,
              required: !0,
              default: function () {
                return {};
              },
            },
            labelSources: {
              type: Array,
              required: !0,
              default: function () {
                return [];
              },
            },
            isNew: { type: Boolean, required: !1, default: !1 },
            disabled: { type: Boolean, required: !1, default: !1 },
          },
          setup: function (t, e) {
            var n = e.emit,
              r = Object(c["ref"])(""),
              i = Object(c["ref"])(""),
              o = function (e) {
                (r.value = M()(e.target.value)),
                  r.value
                    ? n(
                        "change",
                        Object(a["a"])(
                          Object(a["a"])({}, t.item),
                          {},
                          { name: r.value }
                        )
                      )
                    : (i.value = "");
              },
              u = Object(c["computed"])(function () {
                return t.labelSources.filter(function (t) {
                  return t.id && t.name;
                });
              }),
              l = Object(c["computed"])({
                set: function (e) {
                  var r = t.labelSources.find(function (t) {
                    return t.id === e;
                  });
                  r &&
                    n(
                      "change",
                      Object(a["a"])(
                        Object(a["a"])({}, t.item),
                        {},
                        { objectId: r.id, objectName: r.name }
                      )
                    );
                },
                get: function () {
                  return t.item.objectId ? t.item.objectId : "";
                },
              }),
              s = Object(c["computed"])({
                get: function () {
                  return t.item.subjectId ? t.item.subjectId : "";
                },
                set: function (e) {
                  var r = t.labelSources.find(function (t) {
                    return t.id === e;
                  });
                  r &&
                    n(
                      "change",
                      Object(a["a"])(
                        Object(a["a"])({}, t.item),
                        {},
                        { subjectId: r.id, subjectName: r.name }
                      )
                    );
                },
              });
            return (
              Object(c["watch"])(
                function () {
                  return t.item.name;
                },
                function (t) {
                  r.value = t;
                },
                { immediate: !0 }
              ),
              {
                originLabelSources: u,
                name: r,
                orgObject: l,
                subObject: s,
                handleNameChang: o,
              }
            );
          },
        }),
        P = D,
        U = (n("6716"), Object(E["a"])(P, L, N, !1, null, "0c12493f", null)),
        B = U.exports,
        F =
          (n("99af"),
          n("4160"),
          n("a630"),
          n("c975"),
          n("6062"),
          n("3ca3"),
          n("159b"),
          n("ddb0"),
          n("2841")),
        z = n("3f78"),
        X = function (t, e, n, r) {
          var i = Object(c["ref"])(null),
            o = Object(c["ref"])(null),
            u = r,
            l = F["permission"].usePMService(),
            s = Object(c["computed"])(function () {
              var t = [];
              return (
                e.value.forEach(function (e) {
                  e.objectId && t.push(e.objectId),
                    e.subjectId && t.push(e.subjectId);
                }),
                Array.from(new Set(t))
              );
            }),
            f = Object(c["computed"])(function () {
              var e = [];
              return (
                t.value.forEach(function (t) {
                  (t.hasRelation = s.value.indexOf(t.id) > -1), e.push(t);
                }),
                i.value && (e = e.concat([i.value])),
                e
              );
            }),
            p = Object(c["ref"])(!1),
            h = Object(c["ref"])(!1),
            v = Object(c["computed"])(function () {
              return (
                p.value || h.value || !l.haveSomePermission("write", "label")
              );
            }),
            b = function (t) {
              return i.value && t.id === i.value.id;
            },
            m = function () {
              i.value = { id: Object(z["a"])(), name: "" };
            },
            g = function (t) {
              if (!p.value && !h.value)
                if (((h.value = !0), b(t))) {
                  var e = n.createOne(
                      Object(a["a"])(
                        Object(a["a"])({}, t),
                        {},
                        { id: "", datasetId: u }
                      ),
                      { prepend: !0 }
                    ),
                    r = e.result;
                  r.then(
                    (function () {
                      var t = Object(d["a"])(
                        regeneratorRuntime.mark(function t(e) {
                          return regeneratorRuntime.wrap(function (t) {
                            while (1)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (!("id" in e)) {
                                    t.next = 4;
                                    break;
                                  }
                                  return (
                                    m(),
                                    (t.next = 4),
                                    n.getMany({
                                      datasetId: u,
                                      offset: 0,
                                      pageSize: 1e3,
                                    })
                                  );
                                case 4:
                                  (h.value = !1),
                                    o.value &&
                                      (o.value.scrollTop =
                                        o.value.scrollHeight);
                                case 6:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                        })
                      );
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })()
                  );
                } else {
                  var i = n.updateOne(
                      Object(a["a"])(
                        Object(a["a"])({}, t),
                        {},
                        { datasetId: u }
                      )
                    ),
                    c = i.result;
                  c.then(function (t) {
                    "id" in t &&
                      n.getMany({ datasetId: u, offset: 0, pageSize: 1e3 }),
                      (h.value = !1);
                  });
                }
            },
            y = function (t) {
              if (((p.value = !0), b(t))) m(), (p.value = !1);
              else {
                var e = n.destroyOne(
                    Object(a["a"])(Object(a["a"])({}, t), {}, { datasetId: u })
                  ),
                  r = e.result;
                r.then(function () {
                  return (p.value = !1);
                });
              }
            };
          return (
            Object(c["watch"])(
              function () {
                return n.state.collection.value;
              },
              function (t, e) {
                (e && e.length) || m();
              },
              { immediate: !0 }
            ),
            {
              labelEditDisabled: v,
              isLabelEditing: h,
              labels: f,
              newLabel: i,
              labelListRef: o,
              isNewLabel: b,
              handleLabelChange: g,
              handleNewLabelClick: m,
              handleEntityLabelDelete: y,
            }
          );
        },
        V = X,
        G = n("2909"),
        $ = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "simple-modal",
            { ref: "modal", staticClass: "stop-modal" },
            [
              n("template", { slot: "head" }, [
                t._v(" " + t._s(t.$t("stop-title")) + " "),
              ]),
              n("template", { slot: "body" }, [
                t._v(" " + t._s(t.$t("stop-tip")) + " "),
              ]),
              n(
                "template",
                { slot: "foot" },
                [
                  n(
                    "the-button",
                    {
                      attrs: { disabled: t.processing.stop },
                      on: { click: t.handleConfirmClick },
                    },
                    [t._v(" " + t._s(t.$t("comfirm")) + " ")]
                  ),
                  n(
                    "the-button",
                    {
                      staticClass: "secondary",
                      attrs: { disabled: t.processing.stop },
                      on: { click: t.hide },
                    },
                    [t._v(" " + t._s(t.$t("cancel")) + " ")]
                  ),
                ],
                1
              ),
            ],
            2
          );
        },
        q = [],
        H = n("8d2c"),
        W = Object(c["defineComponent"])({
          components: { SimpleModal: H["SimpleModal"] },
          props: { delete: { required: !0, type: Function } },
          setup: function (t) {
            var e = Object(c["ref"])(),
              n = Object(c["reactive"])({ stop: !1 }),
              r = function () {
                null != e.value && e.value.close();
              },
              i = (function () {
                var e = Object(d["a"])(
                  regeneratorRuntime.mark(function e() {
                    var i;
                    return regeneratorRuntime.wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (n.stop = !0), (e.next = 3), t.delete();
                          case 3:
                            (i = e.sent), (n.stop = !1), i && r();
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
            return { modal: e, processing: n, handleConfirmClick: i, hide: r };
          },
        }),
        K = W,
        Y = (n("ee8b"), n("2c27")),
        J = Object(E["a"])(K, $, q, !1, null, "61d12636", null);
      "function" === typeof Y["default"] && Object(Y["default"])(J);
      var Z = J.exports,
        Q = Object(c["ref"])(null),
        tt = function (t, e, n) {
          var r = n,
            i = Object(c["ref"])(!1),
            u = Object(c["ref"])(!1),
            l = Object(c["ref"])(null),
            s = F["permission"].usePMService(),
            f = Object(o["useModal"])(Z),
            p = Object(c["computed"])(function () {
              var e = Object(G["a"])(t.value);
              return Q.value && (e = e.concat([Q.value])), e;
            }),
            h = function (t) {
              return Q.value && t.id === Q.value.id;
            },
            v = function () {
              Q.value = { id: Object(z["a"])(), name: "" };
            },
            b = function (t) {
              if (!u.value && !i.value)
                if (h(t)) {
                  if (!t.name || !t.objectName || !t.subjectName)
                    return void (Q.value = t);
                  u.value = !0;
                  var n = e.createOne(
                      Object(a["a"])(
                        Object(a["a"])({}, t),
                        {},
                        { id: "", datasetId: r }
                      ),
                      { prepend: !0 }
                    ),
                    o = n.result;
                  o.then(
                    (function () {
                      var t = Object(d["a"])(
                        regeneratorRuntime.mark(function t(n) {
                          return regeneratorRuntime.wrap(function (t) {
                            while (1)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (!("id" in n)) {
                                    t.next = 4;
                                    break;
                                  }
                                  return (
                                    v(),
                                    (t.next = 4),
                                    e.getMany({
                                      datasetId: r,
                                      offset: 0,
                                      pageSize: 1e3,
                                    })
                                  );
                                case 4:
                                  l.value &&
                                    (l.value.scrollTop = l.value.scrollHeight),
                                    (u.value = !1);
                                case 6:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                        })
                      );
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })()
                  );
                } else {
                  if (!t.name || !t.objectId || !t.subjectId) return;
                  u.value = !0;
                  var c = e.updateOne(
                      Object(a["a"])(
                        Object(a["a"])({}, t),
                        {},
                        { datasetId: r }
                      )
                    ),
                    s = c.result;
                  s.then(function (t) {
                    "id" in t &&
                      e.getMany({ datasetId: r, offset: 0, pageSize: 1e3 }),
                      (u.value = !1);
                  });
                }
            },
            m = function (t) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : function (t) {};
              (i.value = !0),
                h(t)
                  ? (v(), (i.value = !1))
                  : f({
                      delete: function () {
                        return Object(d["a"])(
                          regeneratorRuntime.mark(function a() {
                            var o, c;
                            return regeneratorRuntime.wrap(function (a) {
                              while (1)
                                switch ((a.prev = a.next)) {
                                  case 0:
                                    return (
                                      (o = e.destroyOne({
                                        id: t.id,
                                        datasetId: r,
                                      })),
                                      (c = o.result),
                                      (a.next = 3),
                                      c.then(function (e) {
                                        (i.value = !1), e && n && n(t);
                                      })
                                    );
                                  case 3:
                                    return a.abrupt("return", !0);
                                  case 4:
                                  case "end":
                                    return a.stop();
                                }
                            }, a);
                          })
                        )();
                      },
                    });
            };
          return (
            Object(c["watch"])(
              function () {
                return e.state.collection.value;
              },
              function (t, e) {
                (e && e.length) || v();
              },
              { immediate: !0 }
            ),
            {
              relationEditDisabled: Object(c["computed"])(function () {
                return u.value || !s.haveSomePermission("write", "label");
              }),
              isRelationEditing: u,
              relations: p,
              newRelation: Q,
              relationListRef: l,
              isNewRelation: h,
              handleRelationChange: b,
              handleRelationDeleteClick: m,
              handleNewRelationClick: v,
            }
          );
        },
        et = tt,
        nt = Object(c["defineComponent"])({
          components: { LabelEditer: A, RelationEditer: B },
          props: {
            datasetId: { required: !0, type: Number },
            handleRelationDel: { required: !0, type: Function },
          },
          setup: function (t) {
            var e = Object(s["a"])(),
              n = e.labels,
              r = e.relations,
              i = e.relationModel,
              o = e.labelModel,
              u = Object(c["ref"])(null);
            return Object(a["a"])(
              Object(a["a"])(
                {
                  modal: u,
                  close: function () {
                    u.value && u.value.close();
                  },
                },
                V(n, r, o, t.datasetId)
              ),
              et(r, i, t.datasetId)
            );
          },
        }),
        rt = nt,
        it = (n("18fb"), Object(E["a"])(rt, u, l, !1, null, "167ec43c", null)),
        at = it.exports,
        ot = { ModifyLabels: at },
        ct = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return t.itemVisible
            ? n(
                "div",
                {
                  ref: "relationItemDom",
                  staticClass: "relation-item",
                  class: { active: t.isTop },
                  on: { mouseleave: t.hideNoteRelation },
                },
                [
                  n(
                    "the-tip",
                    {
                      staticClass: "item_content",
                      attrs: { strategy: "fixed", placement: "bottom" },
                      on: { show: t.setPopperWidth },
                    },
                    [
                      n("div", { staticClass: "item-title" }, [
                        n("div", { staticClass: "title-text" }, [
                          n("span", [t._v(t._s(t.item.name))]),
                          t.abilities.EDIT.ability && !t.item.readonly
                            ? n(
                                "span",
                                {
                                  directives: [
                                    {
                                      name: "permission",
                                      rawName: "v-permission",
                                      value: { label: "write" },
                                      expression: "{label: 'write'}",
                                    },
                                  ],
                                  staticClass: "title-icon",
                                },
                                [
                                  n("svg-icon-edit", {
                                    staticClass: "title-icon-btn",
                                    on: {
                                      click: function (e) {
                                        return t.$emit("edit");
                                      },
                                    },
                                  }),
                                ],
                                1
                              )
                            : t._e(),
                        ]),
                        n(
                          "div",
                          { staticClass: "title-opts" },
                          [
                            n(
                              "the-tip",
                              {
                                staticClass: "title-opts-more",
                                attrs: {
                                  strategy: "fixed",
                                  placement: "bottom",
                                  modifiers: [
                                    {
                                      name: "offset",
                                      options: { offset: [-40, 0] },
                                    },
                                  ],
                                },
                              },
                              [
                                n("svg-icon-more"),
                                t.moreOptsHidden
                                  ? t._e()
                                  : n(
                                      "div",
                                      {
                                        staticClass: "label-opt-more-btn",
                                        attrs: { slot: "popper" },
                                        slot: "popper",
                                      },
                                      [
                                        t.abilities.TOP.ability
                                          ? n(
                                              "div",
                                              {
                                                staticClass:
                                                  "label-opt-more-btn-item",
                                                class: { active: t.item.isTop },
                                                on: {
                                                  click: function (e) {
                                                    return t.$emit(
                                                      "top",
                                                      t.item
                                                    );
                                                  },
                                                },
                                              },
                                              [
                                                n("svg-icon-top", {
                                                  staticClass: "opt-svg",
                                                }),
                                                n(
                                                  "span",
                                                  { staticClass: "opt-txt" },
                                                  [
                                                    t._v(
                                                      " " +
                                                        t._s(
                                                          t.item.isTop
                                                            ? "取消置顶"
                                                            : "置顶"
                                                        )
                                                    ),
                                                  ]
                                                ),
                                              ],
                                              1
                                            )
                                          : t._e(),
                                        t.abilities.DELETE.ability &&
                                        !t.item.readonly
                                          ? n(
                                              "div",
                                              {
                                                directives: [
                                                  {
                                                    name: "permission",
                                                    rawName: "v-permission",
                                                    value: { label: "write" },
                                                    expression:
                                                      "{label: 'write'}",
                                                  },
                                                ],
                                                staticClass:
                                                  "label-opt-more-btn-item",
                                                on: {
                                                  click: function (e) {
                                                    return t.$emit(
                                                      "delete",
                                                      t.item
                                                    );
                                                  },
                                                },
                                              },
                                              [
                                                n("svg-icon-trash", {
                                                  staticClass: "opt-svg",
                                                }),
                                                n(
                                                  "span",
                                                  { staticClass: "opt-txt" },
                                                  [t._v("删除")]
                                                ),
                                              ],
                                              1
                                            )
                                          : t._e(),
                                        t.abilities.NOTE.ability &&
                                        !t.item.readonly
                                          ? n(
                                              "the-tip",
                                              {
                                                directives: [
                                                  {
                                                    name: "permission",
                                                    rawName: "v-permission",
                                                    value: { label: "write" },
                                                    expression:
                                                      "{label: 'write'}",
                                                  },
                                                ],
                                                staticClass:
                                                  "label-opt-more-btn-item",
                                                attrs: { placement: "bottom" },
                                              },
                                              [
                                                n("svg-icon-note", {
                                                  staticClass: "opt-svg",
                                                }),
                                                n(
                                                  "span",
                                                  { staticClass: "opt-txt" },
                                                  [t._v("备注")]
                                                ),
                                                n(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "label-opt-note",
                                                    attrs: { slot: "popper" },
                                                    slot: "popper",
                                                  },
                                                  [
                                                    n(
                                                      "the-input",
                                                      {
                                                        attrs: {
                                                          placeholder:
                                                            "填写备注信息，最多20字符",
                                                        },
                                                        on: {
                                                          keydown: function (
                                                            e
                                                          ) {
                                                            return !e.type.indexOf(
                                                              "key"
                                                            ) &&
                                                              t._k(
                                                                e.keyCode,
                                                                "enter",
                                                                13,
                                                                e.key,
                                                                "Enter"
                                                              )
                                                              ? null
                                                              : (e.stopPropagation(),
                                                                e.preventDefault(),
                                                                t.saveRemark(
                                                                  e
                                                                ));
                                                          },
                                                        },
                                                        model: {
                                                          value: t.note,
                                                          callback: function (
                                                            e
                                                          ) {
                                                            t.note = e;
                                                          },
                                                          expression: "note",
                                                        },
                                                      },
                                                      [
                                                        n(
                                                          "the-link",
                                                          {
                                                            attrs: {
                                                              slot: "postfix",
                                                              disabled:
                                                                t.savingRemark,
                                                            },
                                                            on: {
                                                              click:
                                                                t.saveRemark,
                                                            },
                                                            slot: "postfix",
                                                          },
                                                          [t._v("保存")]
                                                        ),
                                                      ],
                                                      1
                                                    ),
                                                  ],
                                                  1
                                                ),
                                              ],
                                              1
                                            )
                                          : t._e(),
                                      ],
                                      1
                                    ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ]),
                      t.moreOptsHidden
                        ? t._e()
                        : n(
                            "div",
                            {
                              ref: "itemLabelsDom",
                              staticClass: "item_labels",
                              attrs: { slot: "popper" },
                              slot: "popper",
                            },
                            [
                              n("div", { staticClass: "labels-title" }, [
                                n("span", { staticClass: "labels-text" }, [
                                  t._v("该关系包含的实体标签："),
                                ]),
                                n(
                                  "div",
                                  {
                                    staticClass: "label-item",
                                    attrs: { title: t.item.subjectName },
                                  },
                                  [t._v(t._s(t.item.subjectName))]
                                ),
                                n(
                                  "div",
                                  {
                                    staticClass: "label-item",
                                    attrs: { title: t.item.objectName },
                                  },
                                  [t._v(t._s(t.item.objectName))]
                                ),
                              ]),
                            ]
                          ),
                    ]
                  ),
                ],
                1
              )
            : t._e();
        },
        ut = [],
        lt = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "svg",
            t._g(
              {
                staticStyle: {
                  fill: "currentcolor",
                  width: "1em",
                  height: "1em",
                  display: "inline-block",
                  "user-select": "none",
                },
                attrs: {
                  viewBox: "0 0 18 4",
                  xmlns: "http://www.w3.org/2000/svg",
                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                  version: "1.1",
                  "xml:space": "preserve",
                  focusable: "false",
                },
              },
              t.$listeners
            ),
            [
              n("g", { attrs: { "fill-rule": "evenodd" } }, [
                n("circle", { attrs: { cx: "2", cy: "2", r: "2" } }),
                n("circle", { attrs: { cx: "9", cy: "2", r: "2" } }),
                n("circle", { attrs: { cx: "16", cy: "2", r: "2" } }),
              ]),
            ]
          );
        },
        st = [],
        ft = {},
        pt = Object(E["a"])(ft, lt, st, !1, null, null, null),
        dt = pt.exports,
        ht = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "svg",
            t._g(
              {
                staticStyle: {
                  fill: "currentcolor",
                  width: "1em",
                  height: "1em",
                  display: "inline-block",
                  "user-select": "none",
                },
                attrs: {
                  viewBox: "0 0 16 16",
                  xmlns: "http://www.w3.org/2000/svg",
                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                  version: "1.1",
                  "xml:space": "preserve",
                  focusable: "false",
                },
              },
              t.$listeners
            ),
            [
              n("path", {
                attrs: {
                  "fill-rule": "nonzero",
                  d: "M8 2L2.806 7.003 3.824 8.01l3.447-3.438L7.3 16h1.4L8.694 4.572l3.353 3.373.996-1.007L8 2zm8-.6V0H0v1.4h16z",
                },
              }),
            ]
          );
        },
        vt = [],
        bt = {},
        mt = Object(E["a"])(bt, ht, vt, !1, null, null, null),
        gt = mt.exports,
        yt = n("b336"),
        _t = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "svg",
            t._g(
              {
                staticStyle: {
                  fill: "currentcolor",
                  width: "1em",
                  height: "1em",
                  display: "inline-block",
                  "user-select": "none",
                },
                attrs: {
                  viewBox: "0 0 16 16",
                  xmlns: "http://www.w3.org/2000/svg",
                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                  version: "1.1",
                  "xml:space": "preserve",
                  focusable: "false",
                },
              },
              t.$listeners
            ),
            [
              n("path", {
                attrs: {
                  "fill-rule": "nonzero",
                  d: "M3.368 2.003a.537.537 0 01.297 0L.2 7.675l2.687 5.375h12.094c.297 0 .537-.24.537-.537V2.54a.537.537 0 01-.538 0H3.368v-.537zm.333 1.075h11.223v9.675H3.701L1.282 7.916l2.419-4.838zm1.683 3.83a1.008 1.008 0 111.008 1.008L5.384 6.908z",
                },
              }),
            ]
          );
        },
        wt = [],
        xt = {},
        Ot = Object(E["a"])(xt, _t, wt, !1, null, null, null),
        Tt = Ot.exports,
        Et = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "svg",
            t._g(
              {
                staticStyle: {
                  fill: "currentcolor",
                  width: "1em",
                  height: "1em",
                  display: "inline-block",
                  "user-select": "none",
                },
                attrs: {
                  viewBox: "0 0 16 16",
                  xmlns: "http://www.w3.org/2000/svg",
                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                  version: "1.1",
                  "xml:space": "preserve",
                  focusable: "false",
                },
              },
              t.$listeners
            ),
            [
              n("path", {
                attrs: {
                  "fill-rule": "nonzero",
                  d: "M9.027 0L9 1H1l.007 14.016H15V6.953h1V16H.008L0 0h9.027zm6.277-.048l.728.729L5.426 11.287l-.73-.73L15.304-.048z",
                },
              }),
            ]
          );
        },
        kt = [],
        jt = {},
        Ct = Object(E["a"])(jt, Et, kt, !1, null, null, null),
        St = Ct.exports,
        It = Object(c["defineComponent"])({
          components: {
            SvgIconMore: dt,
            SvgIconTop: gt,
            SvgIconTrash: yt["a"],
            SvgIconNote: Tt,
            SvgIconEdit: St,
          },
          props: {
            datasetId: { required: !0, type: Number },
            item: { type: Object, required: !0 },
            isTop: { type: Boolean, required: !1, default: !1 },
            relationModel: { type: Object, required: !0 },
            keyword: { type: String, default: "" },
            abilities: {
              type: Object,
              default: function () {
                return {
                  TOP: { ability: !0 },
                  DELETE: { ability: !0 },
                  EDIT: { ability: !0 },
                  NOTE: { ability: !0 },
                };
              },
            },
          },
          setup: function (t) {
            var e = Object(c["ref"])(!1),
              n = Object(c["ref"])(null),
              r = Object(c["ref"])(null),
              i = Object(c["ref"])(t.item.note),
              u = Object(c["ref"])(!1),
              l = Object(o["useToast"])(),
              f = l.succeed,
              p = function () {
                u.value = !0;
                var n = t.relationModel.updateOne(
                    Object(a["a"])(
                      Object(a["a"])({ datasetId: t.datasetId }, t.item),
                      {},
                      { note: i.value }
                    )
                  ),
                  r = n.result;
                r.then(function (t) {
                  "id" in t && (f("保存成功"), (e.value = !1)), (u.value = !1);
                });
              },
              d = Object(c["computed"])(function () {
                var e = t.item,
                  n = t.keyword;
                if (e.name.indexOf(n) > -1) return !0;
              }),
              h = function () {
                n.value &&
                  r.value &&
                  (r.value.style.width = n.value.clientWidth - 2 + "px");
              };
            Object(c["onMounted"])(h);
            var v = Object(s["a"])(),
              b = v.moreOptsHidden;
            return {
              relationItemDom: n,
              itemLabelsDom: r,
              setPopperWidth: h,
              showNote: e,
              itemVisible: d,
              note: i,
              showNoteRelation: function () {
                e.value = !0;
              },
              hideNoteRelation: function () {
                e.value = !1;
              },
              delateRelation: function () {},
              savingRemark: u,
              saveRemark: p,
              moreOptsHidden: b,
            };
          },
        }),
        At = It,
        Lt =
          (n("4946"), Object(E["a"])(At, ct, ut, !1, null, "8c747188", null)),
        Nt = Lt.exports,
        Rt = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return t.itemVisible
            ? n("div", [
                t.editing
                  ? n(
                      "div",
                      { staticClass: "tre-label-item-editing" },
                      [
                        n("LabelColor", {
                          staticClass: "tre-label-item-color",
                          attrs: { color: t.color },
                          on: {
                            change: function (e) {
                              t.color = e;
                            },
                          },
                        }),
                        n("the-input", {
                          staticClass: "tre-label-item-input",
                          on: {
                            keydown: function (e) {
                              return !e.type.indexOf("key") &&
                                t._k(e.keyCode, "enter", 13, e.key, "Enter")
                                ? null
                                : (e.stopPropagation(), t.handleSureClick(e));
                            },
                          },
                          model: {
                            value: t.labelName,
                            callback: function (e) {
                              t.labelName = e;
                            },
                            expression: "labelName",
                          },
                        }),
                        n(
                          "the-link",
                          {
                            staticClass: "tre-label-item-link",
                            on: { click: t.handleSureClick },
                          },
                          [t._v("确定")]
                        ),
                        n(
                          "the-link",
                          {
                            staticClass: "tre-label-item-link",
                            on: { click: t.handleCancelClick },
                          },
                          [t._v("取消")]
                        ),
                      ],
                      1
                    )
                  : n("div", { staticClass: "tre-label-item" }, [
                      n("div", {
                        staticClass: "tre-label-colorblock",
                        style: { "background-color": t.item.color },
                      }),
                      n(
                        "div",
                        {
                          staticClass: "tre-label-name",
                          attrs: { title: t.item.name },
                        },
                        [t._v(t._s(t.item.name))]
                      ),
                      n(
                        "div",
                        { staticClass: "tre-label-edit" },
                        [
                          t.item.readonly
                            ? t._e()
                            : n("svg-icon-edit", {
                                on: { click: t.handleEditClick },
                              }),
                        ],
                        1
                      ),
                    ]),
              ])
            : t._e();
        },
        Mt = [],
        Dt = Object(c["defineComponent"])({
          components: { LabelColor: j, SvgIconEdit: St },
          props: {
            datasetId: { required: !0, type: Number },
            item: { type: Object, required: !0 },
            model: { type: Object, required: !0 },
            keyword: { type: String, default: "" },
          },
          setup: function (t) {
            var e = Object(c["ref"])(!1),
              n = Object(c["ref"])(t.item.color),
              r = Object(c["ref"])(t.item.name),
              i = Object(c["computed"])(function () {
                var e = t.item,
                  n = t.keyword;
                if (e.name.indexOf(n) > -1) return !0;
              });
            return {
              itemVisible: i,
              editing: e,
              color: n,
              labelName: r,
              handleSureClick: function () {
                return Object(d["a"])(
                  regeneratorRuntime.mark(function i() {
                    var o;
                    return regeneratorRuntime.wrap(function (i) {
                      while (1)
                        switch ((i.prev = i.next)) {
                          case 0:
                            return (
                              (i.next = 2),
                              t.model.updateOne(
                                Object(a["a"])(
                                  Object(a["a"])({}, t.item),
                                  {},
                                  {
                                    name: r.value,
                                    color: n.value,
                                    datasetId: t.datasetId,
                                  }
                                )
                              ).result
                            );
                          case 2:
                            (o = i.sent),
                              "id" in o &&
                                ((e.value = !1),
                                t.model.getMany({
                                  datasetId: t.datasetId,
                                  offset: 0,
                                  pageSize: 1e3,
                                }));
                          case 4:
                          case "end":
                            return i.stop();
                        }
                    }, i);
                  })
                )();
              },
              handleCancelClick: function () {
                e.value = !1;
              },
              handleEditClick: function () {
                e.value = !0;
                var i = t.item,
                  a = i.color,
                  o = i.name;
                (n.value = a), (r.value = o);
              },
            };
          },
        }),
        Pt = Dt,
        Ut =
          (n("1947"), Object(E["a"])(Pt, Rt, Mt, !1, null, "18af0eec", null)),
        Bt = Ut.exports,
        Ft = n("dd03"),
        zt = n("d736"),
        Xt = n("9300"),
        Vt = Object(c["defineComponent"])({
          components: { RelationItem: Nt, LabelItem: Bt },
          props: {
            datasetId: { required: !0, type: Number },
            title: { default: "标签栏" },
            useLocalService: { default: !1, type: Boolean },
          },
          setup: function (t, e) {
            var n = e.emit,
              r = Object(o["useModal"])(ot.ModifyLabels, {
                group: "ModifyLabels",
                datasetId: t.datasetId,
              }),
              i = Object(c["reactive"])({ keyword: "" }),
              u = function () {},
              l =
                Object(s["a"])() ||
                Object(s["b"])(t.datasetId, t.useLocalService),
              f = l.relationModel,
              p = l.labelModel,
              d = l.labels,
              h = l.relations,
              v = l.handleRelationTop,
              b = l.hideAllMoreByScroll,
              m = et(h, f, t.datasetId),
              g = m.handleRelationDeleteClick,
              y = function (t) {
                g(t, function (t) {
                  n("relationdelete", t);
                });
              },
              _ = function () {
                r({ props: { datasetId: t.datasetId, handleRelationDel: y } });
              };
            Object(c["watch"])(
              d,
              function (t) {
                return n(
                  "relations:labels",
                  t.map(function (t) {
                    return Object(a["a"])(
                      Object(a["a"])({}, t),
                      {},
                      { id: t.isLocal ? "" : t.id }
                    );
                  })
                );
              },
              { deep: !0 }
            );
            var w = function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                e = d.value.find(function (e) {
                  return e.id === t;
                });
              return null === e || void 0 === e ? void 0 : e.isLocal;
            };
            Object(c["watch"])(
              h,
              function (t) {
                n("relations:total", t.length),
                  n(
                    "relations:list",
                    t.map(function (t) {
                      return Object(a["a"])(
                        Object(a["a"])({}, t),
                        {},
                        {
                          id: t.isLocal ? "" : t.id,
                          subjectId: w(t.subjectId) ? "" : t.subjectId,
                          objectId: w(t.objectId) ? "" : t.objectId,
                        }
                      );
                    })
                  );
              },
              { deep: !0 }
            );
            var x = Object(Xt["f"])(),
              O = Object(c["computed"])(function () {
                return x.env
                  ? {
                      TOP: { ability: !0 },
                      DELETE: { ability: !1 },
                      EDIT: { ability: !1 },
                      NOTE: { ability: !1 },
                    }
                  : { NOTE: { ability: !0 } };
              }),
              T = Object(Ft["d"])(
                zt["TemplateType"].TEXT_RELATION_EXTRACT,
                void 0,
                O
              ),
              E = Object(c["computed"])(function () {
                var t, e, n;
                return (
                  (null === (t = T.value.ADD) || void 0 === t
                    ? void 0
                    : t.ability) &&
                  (null === (e = T.value.DELETE) || void 0 === e
                    ? void 0
                    : e.ability) &&
                  (null === (n = T.value.EDIT) || void 0 === n
                    ? void 0
                    : n.ability)
                );
              });
            return {
              templateType: zt["TemplateType"].TEXT_RELATION_EXTRACT,
              relationModel: f,
              labelModel: p,
              handleRelationTop: v,
              labels: d,
              relations: h,
              state: i,
              searchText: u,
              handleModifyClick: _,
              handleRelationDel: y,
              abilities: T,
              modifyVisible: E,
              handleRelationScroll: b,
            };
          },
        }),
        Gt = Vt,
        $t = (n("0325"), Object(E["a"])(Gt, r, i, !1, null, "9c2f2ea0", null)),
        qt = $t.exports;
    },
    3410: function (t, e, n) {
      var r = n("23e7"),
        i = n("d039"),
        a = n("7b0b"),
        o = n("e163"),
        c = n("e177"),
        u = i(function () {
          o(1);
        });
      r(
        { target: "Object", stat: !0, forced: u, sham: !c },
        {
          getPrototypeOf: function (t) {
            return o(a(t));
          },
        }
      );
    },
    "342f": function (t, e, n) {
      var r = n("d066");
      t.exports = r("navigator", "userAgent") || "";
    },
    "35a1": function (t, e, n) {
      var r = n("f5df"),
        i = n("3f8c"),
        a = n("b622"),
        o = a("iterator");
      t.exports = function (t) {
        if (void 0 != t) return t[o] || t["@@iterator"] || i[r(t)];
      };
    },
    3729: function (t, e, n) {
      var r = n("9e69"),
        i = n("00fd"),
        a = n("29f3"),
        o = "[object Null]",
        c = "[object Undefined]",
        u = r ? r.toStringTag : void 0;
      function l(t) {
        return null == t
          ? void 0 === t
            ? c
            : o
          : u && u in Object(t)
          ? i(t)
          : a(t);
      }
      t.exports = l;
    },
    "37e8": function (t, e, n) {
      var r = n("83ab"),
        i = n("9bf2"),
        a = n("825a"),
        o = n("df75");
      t.exports = r
        ? Object.defineProperties
        : function (t, e) {
            a(t);
            var n,
              r = o(e),
              c = r.length,
              u = 0;
            while (c > u) i.f(t, (n = r[u++]), e[n]);
            return t;
          };
    },
    3835: function (t, e, n) {
      "use strict";
      function r(t) {
        if (Array.isArray(t)) return t;
      }
      n.d(e, "a", function () {
        return c;
      });
      n("a4d3"), n("e01a"), n("d28b"), n("d3b7"), n("3ca3"), n("ddb0");
      function i(t, e) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) {
          var n = [],
            r = !0,
            i = !1,
            a = void 0;
          try {
            for (
              var o, c = t[Symbol.iterator]();
              !(r = (o = c.next()).done);
              r = !0
            )
              if ((n.push(o.value), e && n.length === e)) break;
          } catch (u) {
            (i = !0), (a = u);
          } finally {
            try {
              r || null == c["return"] || c["return"]();
            } finally {
              if (i) throw a;
            }
          }
          return n;
        }
      }
      var a = n("06c5");
      function o() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function c(t, e) {
        return r(t) || i(t, e) || Object(a["a"])(t, e) || o();
      }
    },
    "38cf": function (t, e, n) {
      var r = n("23e7"),
        i = n("1148");
      r({ target: "String", proto: !0 }, { repeat: i });
    },
    "3b0d": function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "a", function () {
          return i;
        });
      n("d3b7");
      var r = function (t) {
          var e = !1;
          return {
            result: Promise.resolve(t),
            isCancelled: function () {
              return e;
            },
            cancel: function () {
              return (e = !0);
            },
          };
        },
        i = function () {
          return r(void 0);
        };
    },
    "3b13": function (t, e, n) {
      "use strict";
      var r, i;
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "a", function () {
          return i;
        }),
        (function (t) {
          (t[(t["IMG_CLS"] = 100)] = "IMG_CLS"),
            (t[(t["IMG_CLS_MULTI"] = 101)] = "IMG_CLS_MULTI"),
            (t[(t["OBJ_DCT_RECT"] = 200)] = "OBJ_DCT_RECT"),
            (t[(t["OBJ_DCT"] = 200)] = "OBJ_DCT"),
            (t[(t["OBJ_QUAD"] = 201)] = "OBJ_QUAD"),
            (t[(t["OBJ_DCT_QUAD"] = 201)] = "OBJ_DCT_QUAD"),
            (t[(t["SOUND_CLS"] = 300)] = "SOUND_CLS"),
            (t[(t["TEXT_CLS"] = 400)] = "TEXT_CLS"),
            (t[(t["TEXT_CLS_MULTI"] = 401)] = "TEXT_CLS_MULTI"),
            (t[(t["TEXT_CLS_ERNIE_DOC"] = 406)] = "TEXT_CLS_ERNIE_DOC"),
            (t[(t["TEXT_CLS_ERNIE_M"] = 407)] = "TEXT_CLS_ERNIE_M"),
            (t[(t["VIDEO_CLS"] = 500)] = "VIDEO_CLS"),
            (t[(t["SEGMENT"] = 600)] = "SEGMENT"),
            (t[(t["INSTANCE_SEGMENT"] = 600)] = "INSTANCE_SEGMENT"),
            (t[(t["SEMANTIC_SEGMENT"] = 601)] = "SEMANTIC_SEGMENT"),
            (t[(t["TEXT_SIM"] = 700)] = "TEXT_SIM"),
            (t[(t["TEXT_SEQ_IOB"] = 800)] = "TEXT_SEQ_IOB"),
            (t[(t["TEXT_SEQ_IO"] = 801)] = "TEXT_SEQ_IO"),
            (t[(t["TEXT_SEQ_IOE"] = 802)] = "TEXT_SEQ_IOE"),
            (t[(t["TEXT_SEQ_IOBES"] = 803)] = "TEXT_SEQ_IOBES"),
            (t[(t["SENTIMENT"] = 900)] = "SENTIMENT"),
            (t[(t["ENTITY_SENTIMENT"] = 901)] = "ENTITY_SENTIMENT"),
            (t[(t["TEXT_ENTITY_EXTRACT"] = 1e3)] = "TEXT_ENTITY_EXTRACT"),
            (t[(t["TEXT_RELATION_EXTRACT"] = 1100)] = "TEXT_RELATION_EXTRACT"),
            (t[(t["VIDEO_TRACKING"] = 1200)] = "VIDEO_TRACKING"),
            (t[(t["VIDEO_OBJ_DCT"] = 50200)] = "VIDEO_OBJ_DCT"),
            (t[(t["OCR"] = 1300)] = "OCR"),
            (t[(t["UNSTRUCTURED_OCR"] = 1301)] = "UNSTRUCTURED_OCR"),
            (t[(t["IMG_POINT"] = 1500)] = "IMG_POINT"),
            (t[(t["IMG_POLYLINE"] = 1600)] = "IMG_POLYLINE"),
            (t[(t["IMG_CUBOID"] = 1700)] = "IMG_CUBOID"),
            (t[(t["TEXT_NLG"] = 1800)] = "TEXT_NLG"),
            (t[(t["TEXT_COMMENT"] = 1900)] = "TEXT_COMMENT"),
            (t[(t["ML"] = 20100)] = "ML"),
            (t[(t["TIME_SERIES_FORECAST"] = 20200)] = "TIME_SERIES_FORECAST"),
            (t[(t["TIME_SERIES"] = 20400)] = "TIME_SERIES"),
            (t[(t["RETAIL"] = 10010)] = "RETAIL"),
            (t[(t["RETAIL_DD"] = 10020)] = "RETAIL_DD"),
            (t[(t["CUSTOM"] = 9990)] = "CUSTOM"),
            (t[(t["TEXT_CUSTOM"] = 9980)] = "TEXT_CUSTOM"),
            (t[(t["TEXT_ERINE3"] = 9970)] = "TEXT_ERINE3"),
            (t[(t["PADDLE_COMPONENT"] = 9910)] = "PADDLE_COMPONENT"),
            (t[(t["TEXT_QA"] = 30200)] = "TEXT_QA"),
            (t[(t["TEXT_SCORE"] = 30300)] = "TEXT_SCORE"),
            (t[(t["TEXT_RELEVANCE"] = 30400)] = "TEXT_RELEVANCE"),
            (t[(t["TEXT_SUMMARY"] = 30500)] = "TEXT_SUMMARY"),
            (t[(t["TEXT_COMPOSE"] = 30600)] = "TEXT_COMPOSE"),
            (t[(t["TEXT_POS_LABELING"] = 30700)] = "TEXT_POS_LABELING"),
            (t[(t["IMG_COMPOSE"] = 8e4)] = "IMG_COMPOSE"),
            (t[(t["IMG_MIXED"] = 80100)] = "IMG_MIXED"),
            (t[(t["ELC_FORECAST"] = 100010)] = "ELC_FORECAST"),
            (t[(t["CAR_DETECTION"] = 7e3)] = "CAR_DETECTION"),
            (t[(t["TRUCK_CLASSIFICATION"] = 7010)] = "TRUCK_CLASSIFICATION"),
            (t[(t["IMG_TEXT"] = 20010)] = "IMG_TEXT");
        })(r || (r = {})),
        (function (t) {
          (t[(t["IMG_CLS"] = 1)] = "IMG_CLS"),
            (t[(t["OBJ_DCT"] = 2)] = "OBJ_DCT"),
            (t[(t["SOUND_CLS"] = 3)] = "SOUND_CLS"),
            (t[(t["TEXT_CLS"] = 4)] = "TEXT_CLS"),
            (t[(t["VIDEO_CLS"] = 5)] = "VIDEO_CLS"),
            (t[(t["SEGMENT"] = 6)] = "SEGMENT"),
            (t[(t["TEXT_SIM"] = 7)] = "TEXT_SIM"),
            (t[(t["TEXT_SEQ"] = 8)] = "TEXT_SEQ"),
            (t[(t["SENTIMENT"] = 9)] = "SENTIMENT"),
            (t[(t["TEXT_ENTITY_EXTRACT"] = 10)] = "TEXT_ENTITY_EXTRACT"),
            (t[(t["TEXT_RELATION_EXTRACT"] = 11)] = "TEXT_RELATION_EXTRACT"),
            (t[(t["VIDEO_TRACKING"] = 12)] = "VIDEO_TRACKING"),
            (t[(t["VIDEO_OBJ_DCT"] = 502)] = "VIDEO_OBJ_DCT"),
            (t[(t["OCR"] = 13)] = "OCR"),
            (t[(t["IMG_POINT"] = 15)] = "IMG_POINT"),
            (t[(t["IMG_POLYLINE"] = 16)] = "IMG_POLYLINE"),
            (t[(t["IMG_CUBOID"] = 17)] = "IMG_CUBOID"),
            (t[(t["TEXT_NLG"] = 18)] = "TEXT_NLG"),
            (t[(t["TEXT_COMMENT"] = 19)] = "TEXT_COMMENT"),
            (t[(t["IMG_COMPOSE"] = 800)] = "IMG_COMPOSE"),
            (t[(t["IMG_MIXED"] = 801)] = "IMG_MIXED"),
            (t[(t["CUSTOM"] = 999)] = "CUSTOM"),
            (t[(t["TEXT_CUSTOM"] = 998)] = "TEXT_CUSTOM"),
            (t[(t["TEXT_ERINE3"] = 997)] = "TEXT_ERINE3"),
            (t[(t["PADDLE_COMPONENT"] = 991)] = "PADDLE_COMPONENT"),
            (t[(t["ML"] = 201)] = "ML"),
            (t[(t["TIME_SERIES_FORECAST"] = 202)] = "TIME_SERIES_FORECAST"),
            (t[(t["TIME_SERIES"] = 204)] = "TIME_SERIES"),
            (t[(t["RETAIL"] = 1001)] = "RETAIL"),
            (t[(t["TEXT_QA"] = 302)] = "TEXT_QA"),
            (t[(t["TEXT_SCORE"] = 303)] = "TEXT_SCORE"),
            (t[(t["TEXT_RELEVANCE"] = 304)] = "TEXT_RELEVANCE"),
            (t[(t["TEXT_SUMMARY"] = 305)] = "TEXT_SUMMARY"),
            (t[(t["TEXT_COMPOSE"] = 306)] = "TEXT_COMPOSE"),
            (t[(t["TEXT_POS_LABELING"] = 307)] = "TEXT_POS_LABELING"),
            (t[(t["RETAIL_DD"] = 1002)] = "RETAIL_DD"),
            (t[(t["ELC_FORECAST"] = 10001)] = "ELC_FORECAST"),
            (t[(t["CAR_DETECTION"] = 700)] = "CAR_DETECTION"),
            (t[(t["TRUCK_CLASSIFICATION"] = 701)] = "TRUCK_CLASSIFICATION"),
            (t[(t["IMG_TEXT"] = 2001)] = "IMG_TEXT");
        })(i || (i = {}));
    },
    "3b71": function (t, e, n) {
      var r = n("0fc0");
      "string" === typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
      var i = n("499e").default;
      i("776c067a", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "3bbe": function (t, e, n) {
      var r = n("861d");
      t.exports = function (t) {
        if (!r(t) && null !== t)
          throw TypeError("Can't set " + String(t) + " as a prototype");
        return t;
      };
    },
    "3ca3": function (t, e, n) {
      "use strict";
      var r = n("6547").charAt,
        i = n("69f3"),
        a = n("7dd0"),
        o = "String Iterator",
        c = i.set,
        u = i.getterFor(o);
      a(
        String,
        "String",
        function (t) {
          c(this, { type: o, string: String(t), index: 0 });
        },
        function () {
          var t,
            e = u(this),
            n = e.string,
            i = e.index;
          return i >= n.length
            ? { value: void 0, done: !0 }
            : ((t = r(n, i)), (e.index += t.length), { value: t, done: !1 });
        }
      );
    },
    "3e58": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return a;
      }),
        n.d(e, "b", function () {
          return o;
        });
      n("13d5"), n("d3b7");
      var r = n("50ab"),
        i = n("adac");
      function a() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        return function (t) {
          return e.reduce(
            function (t, e) {
              var n,
                r = t.cancel,
                i = t.result,
                a = t.isCancelled;
              return {
                result: i.then(function (t) {
                  if (!a || !a()) {
                    var r = e(t);
                    return (n = r.cancel), r.result;
                  }
                }),
                cancel: function () {
                  r(), n && n();
                },
                isCancelled: function () {
                  return !(!a || !a());
                },
              };
            },
            {
              result: Promise.resolve(t),
              cancel: i["b"],
              isCancelled: function () {
                return !1;
              },
            }
          );
        };
      }
      function o() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        return function (t) {
          var n = !1;
          return e.reduce(
            function (t, e) {
              var i,
                a = t.cancel,
                o = t.result;
              return {
                result: o.then(function (t) {
                  if (!Object(r["hasValue"])(t)) return t;
                  if (n) return t;
                  var a = e(t.right);
                  return (i = a.cancel), a.result;
                }),
                cancel: function () {
                  a(), i && i(), (n = !0);
                },
                isCancelled: function () {
                  return n;
                },
              };
            },
            {
              result: Promise.resolve(Object(r["some"])(t)),
              cancel: i["b"],
              isCancelled: function () {
                return !1;
              },
            }
          );
        };
      }
    },
    "3ea5": function (t, e, n) {
      var r = n("24fb");
      (e = r(!1)),
        e.push([
          t.i,
          ".ocr-label-picker[data-v-26072c72]{width:100%;height:100%;background-color:#fff;border-left:1px solid #eee}.ocr-label-picker-head[data-v-26072c72]{display:flex;align-items:center;height:60px;line-height:59px;font-size:1.14285714em;padding:0 20px;border-bottom:1px solid #eee}.ocr-label-picker-head_title[data-v-26072c72]{position:relative;flex:1}.ocr-label-picker-head_modify[data-v-26072c72]{color:#fff;cursor:pointer;font-size:13px}.ocr-label-picker-body[data-v-26072c72]{height:calc(100% - 60px)}.ocr-label-picker-body_searcher[data-v-26072c72]{padding:20px;border-bottom:1px solid #eee}.ocr-label-picker-body_searcher_input[data-v-26072c72]  .s-input{height:42px}.ocr-label-picker-body_list[data-v-26072c72]{height:calc(100% - 133px);padding:16px 20px;overflow-y:auto}",
          "",
        ]),
        (t.exports = e);
    },
    "3f78": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      n("99af"), n("d3b7"), n("25f0");
      function r() {
        var t = (Math.random() * Math.pow(2, 32)).toString(36),
          e = new Date().getTime();
        return "u-".concat(e, "-").concat(t);
      }
    },
    "3f8c": function (t, e) {
      t.exports = {};
    },
    "408a": function (t, e, n) {
      var r = n("c6b6");
      t.exports = function (t) {
        if ("number" != typeof t && "Number" != r(t))
          throw TypeError("Incorrect invocation");
        return +t;
      };
    },
    4160: function (t, e, n) {
      "use strict";
      var r = n("23e7"),
        i = n("17c2");
      r(
        { target: "Array", proto: !0, forced: [].forEach != i },
        { forEach: i }
      );
    },
    "428f": function (t, e, n) {
      var r = n("da84");
      t.exports = r;
    },
    4362: function (t, e, n) {
      (e.nextTick = function (t) {
        var e = Array.prototype.slice.call(arguments);
        e.shift(),
          setTimeout(function () {
            t.apply(null, e);
          }, 0);
      }),
        (e.platform = e.arch = e.execPath = e.title = "browser"),
        (e.pid = 1),
        (e.browser = !0),
        (e.env = {}),
        (e.argv = []),
        (e.binding = function (t) {
          throw new Error("No such module. (Possibly not yet loaded)");
        }),
        (function () {
          var t,
            r = "/";
          (e.cwd = function () {
            return r;
          }),
            (e.chdir = function (e) {
              t || (t = n("df7c")), (r = t.resolve(e, r));
            });
        })(),
        (e.exit =
          e.kill =
          e.umask =
          e.dlopen =
          e.uptime =
          e.memoryUsage =
          e.uvCounters =
            function () {}),
        (e.features = {});
    },
    4380: function (t, e, n) {
      var r = n("24fb");
      (e = r(!1)),
        e.push([
          t.i,
          ".relation-item[data-v-8c747188]{display:flex;flex-direction:column;position:relative;padding:5px 12px;font-size:14px;line-height:22px;border:1px solid #e0e0e0;margin-bottom:10px}.relation-item .item_content[data-v-8c747188]{width:100%;cursor:pointer}.relation-item .item_content .item-title[data-v-8c747188]{display:flex}.relation-item .item_content .item-title .title-text[data-v-8c747188]{flex:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;display:flex;align-items:center}.relation-item .item_content .item-title .title-icon[data-v-8c747188]{display:none;margin-left:10px;align-items:center}.relation-item .item_content .item-title .title-icon .title-icon-btn[data-v-8c747188]{font-size:13px;color:#444}.relation-item .item_content .item-title .title-icon .title-icon-btn[data-v-8c747188]:hover{color:var(--cxd-blue)}.relation-item .item_content .item-title .title-opts[data-v-8c747188]{display:none}.relation-item .item_content .item-title .title-opts .s-icon[data-v-8c747188]{margin-right:10px;cursor:pointer;color:#444}.relation-item .item_content .item-title .title-opts .s-icon.font-bold[data-v-8c747188]{font-weight:700}.relation-item .item_content .item-title .title-opts .s-icon[data-v-8c747188]:hover{color:var(--cxd-blue)}.relation-item .item_content .item-title .title-opts .s-icon.active[data-v-8c747188]:not(:hover){color:var(--app-font-light,#999)}.relation-item .item_content .item-title .title-opts .s-icon.highlight[data-v-8c747188]{color:var(--cxd-blue)}.relation-item .item_content .item_labels[data-v-8c747188]{padding:10px 20px;width:240px;z-index:1}.relation-item .item_content .item_labels .labels-title[data-v-8c747188]{max-width:100%;display:flex;flex-direction:column}.relation-item .item_content .item_labels .labels-title .labels-text[data-v-8c747188]{color:#666;line-height:18px;font-size:10px;padding:5px 0;margin-bottom:5px}.relation-item .item_content .item_labels .labels-title .label-item[data-v-8c747188]{line-height:18px;font-size:14px;width:100%;max-width:100%;padding:5px;margin-top:5px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;border:1px solid #d6d6d6}.relation-item .item_content[data-v-8c747188] >.s-tip_popper{z-index:3001;padding-top:0}.relation-item .item_content[data-v-8c747188] >.s-tip_popper>.s-tip_popper_arrow{display:none}.relation-item .item_content[data-v-8c747188] >.s-tip_popper>.s-tip_popper_content{padding:0}.relation-item .note-editor[data-v-8c747188]{position:absolute;top:35px;width:205px;background:#fff;z-index:2}.relation-item .note-editor[data-v-8c747188] .s-input-postfix{height:30px;line-height:30px;right:5px;margin-top:-1px}.relation-item[data-v-8c747188]:hover{background-color:#f6f6f6}.relation-item:hover .item_content .item-title .title-text .title-icon[data-v-8c747188]{display:flex}.relation-item:hover .item_content .item-title .title-opts[data-v-8c747188]{display:block}.relation-item:hover .item_content .item_labels[data-v-8c747188]{display:flex;flex-direction:column;background-color:#fff}.title-opts-more[data-v-8c747188]{font-size:14px;color:#444;margin-right:10px}.title-opts-more[data-v-8c747188]:hover{color:var(--cxd-blue)}.title-opts-more[data-v-8c747188] >.s-tip_popper{z-index:3002}.title-opts-more[data-v-8c747188] >.s-tip_popper>.s-tip_popper_content{padding:4px 0}.title-opts-more .label-opt-more-btn[data-v-8c747188]{list-style:none;margin:0;padding:0}.title-opts-more .label-opt-more-btn-item[data-v-8c747188]{display:flex;align-items:center;width:128px;padding:8px 12px;cursor:pointer;line-height:22px;font-size:12px;color:var(--cxd-text-mild);box-shadow:inset 0 -1px 0 0 #eee}.title-opts-more .label-opt-more-btn-item .opt-svg[data-v-8c747188]{color:#666}.title-opts-more .label-opt-more-btn-item .opt-txt[data-v-8c747188]{margin-left:8px}.title-opts-more .label-opt-more-btn-item[data-v-8c747188]:last-child{box-shadow:none}.title-opts-more .label-opt-more-btn-item.active[data-v-8c747188],.title-opts-more .label-opt-more-btn-item.active .opt-svg[data-v-8c747188],.title-opts-more .label-opt-more-btn-item[data-v-8c747188]:hover,.title-opts-more .label-opt-more-btn-item:hover .opt-svg[data-v-8c747188]{color:var(--cxd-blue)}.title-opts-more .label-opt-more-btn-item[data-v-8c747188]:hover{background:#f7f7f7}.title-opts-more .label-opt-note[data-v-8c747188]{display:flex;align-items:center;position:absolute;left:-120px;top:0}.title-opts-more .label-opt-note[data-v-8c747188]  .s-input{width:200px;padding-right:2.5em}.title-opts-more .label-opt-note[data-v-8c747188]  .s-input-postfix{height:20px;line-height:20px;right:8px}",
          "",
        ]),
        (t.exports = e);
    },
    "441e": function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return s;
      }),
        n.d(e, "a", function () {
          return p;
        });
      n("caad"), n("a15b"), n("2532"), n("96cf");
      var r = n("1da1"),
        i = n("d4ec"),
        a = n("bee2"),
        o = n("c7a3"),
        c = n("8add"),
        u = n("2841"),
        l = n("60aa");
      function s(t) {
        return t === l["d"].ANNOTATED;
      }
      function f(t, e) {
        return t === l["d"].UNANNOTATED && e === l["a"].ENABLE_INTERANNO;
      }
      var p = (function () {
        function t() {
          var e =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0],
            n = arguments.length > 1 ? arguments[1] : void 0;
          Object(i["a"])(this, t),
            (this.tasklink = "/mulan/task/list"),
            (this.env = !1),
            (this.auth = !0),
            (this.datasetId = 0),
            (this.taskId = void 0),
            (this.subTaskId = void 0),
            (this.auditSubTaskId = void 0),
            (this.actionType = void 0),
            (this.isAffirmTask = void 0),
            (this.enableSmartAnnotate = void 0),
            (this.ability = { cle: !1, anno: !0, del: !0, audit: !1 }),
            (this.defaultType = void 0),
            (this.totals = {}),
            (this.vm = n || u["utils"].useVM()),
            (this.tasklink = Object(c["a"])(t.DefTaskLink, this.vm)),
            e && this.initialize();
        }
        return (
          Object(a["a"])(t, [
            {
              key: "getMulanPkg",
              value: function () {
                return System.import("@baidu/afe-app-mulan");
              },
            },
            {
              key: "getServices",
              value: (function () {
                var t = Object(r["a"])(
                  regeneratorRuntime.mark(function t() {
                    var e;
                    return regeneratorRuntime.wrap(
                      function (t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), this.getMulanPkg();
                            case 2:
                              return (
                                (e = t.sent), t.abrupt("return", e.useService())
                              );
                            case 4:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
                function e() {
                  return t.apply(this, arguments);
                }
                return e;
              })(),
            },
            {
              key: "getEnums",
              value: (function () {
                var t = Object(r["a"])(
                  regeneratorRuntime.mark(function t() {
                    var e;
                    return regeneratorRuntime.wrap(
                      function (t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), this.getMulanPkg();
                            case 2:
                              return (e = t.sent), t.abrupt("return", e.enums);
                            case 4:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
                function e() {
                  return t.apply(this, arguments);
                }
                return e;
              })(),
            },
            {
              key: "initialize",
              value: (function () {
                var t = Object(r["a"])(
                  regeneratorRuntime.mark(function t() {
                    var e, n, r, i, a, o, c;
                    return regeneratorRuntime.wrap(
                      function (t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (this.vm) {
                                t.next = 2;
                                break;
                              }
                              return t.abrupt("return");
                            case 2:
                              if (((e = this.vm.$route.query), e.mulan)) {
                                t.next = 5;
                                break;
                              }
                              return t.abrupt("return");
                            case 5:
                              return (
                                (this.env = !0),
                                (this.auth =
                                  !!this.vm.$store.state.common.accountInfo
                                    .userId),
                                (this.datasetId = +e.datasetId),
                                (this.taskId = +e.taskId || void 0),
                                (this.subTaskId = +e.subTaskId || void 0),
                                (this.auditSubTaskId =
                                  +e.auditSubTaskId || void 0),
                                (this.actionType = +e.taskType),
                                (this.defaultType = this.auditSubTaskId
                                  ? "UNAUDITED"
                                  : void 0),
                                (this.isAffirmTask = s(+e.distributeDataType)),
                                (this.enableSmartAnnotate = f(
                                  +e.distributeDataType,
                                  +e.interannoType
                                )),
                                (this.ability = {
                                  cle: !1,
                                  anno: !1,
                                  del: !1,
                                  audit: !1,
                                }),
                                (t.next = 18),
                                this.getEnums()
                              );
                            case 18:
                              return (
                                (n = t.sent),
                                (r = n.ETaskType),
                                (i = n.ESubTaskType),
                                (t.next = 23),
                                this.getServices()
                              );
                            case 23:
                              return (
                                (a = t.sent),
                                (o = a.taskService),
                                (t.next = 27),
                                o.fetchTeamAnnoPermission({
                                  datasetId: this.datasetId,
                                  taskId: this.taskId,
                                  subTaskId: this.subTaskId,
                                  actionType: this.actionType,
                                })
                              );
                            case 27:
                              (c = t.sent),
                                (this.ability = {
                                  cle: c.includes(0),
                                  anno: c.includes(2),
                                  del: c.includes(1),
                                  audit: c.includes(3),
                                }),
                                this.ability.anno &&
                                  this.isAffirmTask &&
                                  (this.defaultType = "MULAN_UNANNOTATED"),
                                this.ability.anno &&
                                  this.enableSmartAnnotate &&
                                  (this.defaultType = "AUTOLABEL_UNCONFIRM"),
                                this.ability.audit
                                  ? ((this.defaultType = "UNAUDITED"),
                                    (this.tasklink +=
                                      "?" +
                                      [
                                        "tab=".concat(r.RECEIVED),
                                        "subTaskTab=".concat(i.AUDIT),
                                      ].join("&")))
                                  : this.ability.cle &&
                                    (this.defaultType = "ACCEPT_UNPROCESS");
                            case 32:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
                function e() {
                  return t.apply(this, arguments);
                }
                return e;
              })(),
            },
            {
              key: "completeTask",
              value: (function () {
                var t = Object(r["a"])(
                  regeneratorRuntime.mark(function t(e) {
                    return regeneratorRuntime.wrap(
                      function (t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.next = 2),
                                o["caller"].send("teamAnno/task/completeTask", {
                                  taskId: this.taskId,
                                  acceptType: e,
                                }).result
                              );
                            case 2:
                              return t.abrupt("return", t.sent);
                            case 3:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
                function e(e) {
                  return t.apply(this, arguments);
                }
                return e;
              })(),
            },
            {
              key: "batchAcceptTask",
              value: (function () {
                var t = Object(r["a"])(
                  regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(
                      function (t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.next = 2),
                                o["caller"].send("teamAnno/task/batchAccept", {
                                  taskId: this.taskId,
                                }).result
                              );
                            case 2:
                              return t.abrupt("return", t.sent);
                            case 3:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
                function e() {
                  return t.apply(this, arguments);
                }
                return e;
              })(),
            },
            {
              key: "acceptTurnBack",
              value: (function () {
                var t = Object(r["a"])(
                  regeneratorRuntime.mark(function t(e) {
                    return regeneratorRuntime.wrap(
                      function (t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.next = 2),
                                o["caller"].send(
                                  "teamAnno/task/acceptTurnback",
                                  { taskId: this.taskId, type: e }
                                ).result
                              );
                            case 2:
                              return t.abrupt("return", t.sent);
                            case 3:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
                function e(e) {
                  return t.apply(this, arguments);
                }
                return e;
              })(),
            },
            {
              key: "submitTask",
              value: (function () {
                var t = Object(r["a"])(
                  regeneratorRuntime.mark(function t() {
                    var e, n;
                    return regeneratorRuntime.wrap(
                      function (t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), this.getServices();
                            case 2:
                              return (
                                (e = t.sent),
                                (n = e.taskService),
                                (t.next = 6),
                                n.annoSubmit(this.subTaskId)
                              );
                            case 6:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
                function e() {
                  return t.apply(this, arguments);
                }
                return e;
              })(),
            },
            {
              key: "submitAuditTask",
              value: (function () {
                var t = Object(r["a"])(
                  regeneratorRuntime.mark(function t() {
                    var e, n;
                    return regeneratorRuntime.wrap(
                      function (t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), this.getServices();
                            case 2:
                              return (
                                (e = t.sent),
                                (n = e.taskService),
                                (t.next = 6),
                                n.auditSubmit(this.auditSubTaskId)
                              );
                            case 6:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
                function e() {
                  return t.apply(this, arguments);
                }
                return e;
              })(),
            },
            {
              key: "annoAudit",
              value: (function () {
                var t = Object(r["a"])(
                  regeneratorRuntime.mark(function t(e, n, r, i) {
                    var a, o, c;
                    return regeneratorRuntime.wrap(
                      function (t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), this.getServices();
                            case 2:
                              if (
                                ((a = t.sent),
                                (o = a.taskService),
                                !this.ability.audit || this.auditSubTaskId)
                              ) {
                                t.next = 6;
                                break;
                              }
                              return t.abrupt("return");
                            case 6:
                              if (!this.ability.cle || this.taskId) {
                                t.next = 8;
                                break;
                              }
                              return t.abrupt("return");
                            case 8:
                              return (
                                (c = {
                                  entityId: e,
                                  actionType: this.actionType,
                                  isPass: n,
                                  labels: r,
                                  auditSubTaskId: this.auditSubTaskId,
                                  taskId: this.taskId,
                                }),
                                i && Object.assign(c, i),
                                t.abrupt("return", o.annoAudit(c))
                              );
                            case 11:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
                function e(e, n, r, i) {
                  return t.apply(this, arguments);
                }
                return e;
              })(),
            },
            {
              key: "update",
              value: (function () {
                var e = Object(r["a"])(
                  regeneratorRuntime.mark(function e(n) {
                    var r;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (r = new t(!0, n)),
                                (r.vm = this.vm),
                                Object.assign(this, r),
                                (e.next = 5),
                                this.initialize()
                              );
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                function n(t) {
                  return e.apply(this, arguments);
                }
                return n;
              })(),
            },
            {
              key: "getTaskTabEnums",
              value: (function () {
                var t = Object(r["a"])(
                  regeneratorRuntime.mark(function t() {
                    var e, n;
                    return regeneratorRuntime.wrap(
                      function (t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), this.getEnums();
                            case 2:
                              return (
                                (e = t.sent),
                                (n = e.ETaskType),
                                t.abrupt("return", n)
                              );
                            case 5:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
                function e() {
                  return t.apply(this, arguments);
                }
                return e;
              })(),
            },
            {
              key: "createCommonOpinion",
              value: (function () {
                var t = Object(r["a"])(
                  regeneratorRuntime.mark(function t(e) {
                    var n, r;
                    return regeneratorRuntime.wrap(
                      function (t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), this.getServices();
                            case 2:
                              return (
                                (n = t.sent),
                                (r = n.taskService),
                                t.abrupt("return", r.createCommonOpinion(e))
                              );
                            case 5:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
                function e(e) {
                  return t.apply(this, arguments);
                }
                return e;
              })(),
            },
            {
              key: "fetchCommonOpinions",
              value: (function () {
                var t = Object(r["a"])(
                  regeneratorRuntime.mark(function t(e) {
                    var n, r;
                    return regeneratorRuntime.wrap(
                      function (t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), this.getServices();
                            case 2:
                              return (
                                (n = t.sent),
                                (r = n.taskService),
                                t.abrupt("return", r.fetchCommonOpinions(e))
                              );
                            case 5:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
                function e(e) {
                  return t.apply(this, arguments);
                }
                return e;
              })(),
            },
            {
              key: "delCommopnOpinions",
              value: (function () {
                var t = Object(r["a"])(
                  regeneratorRuntime.mark(function t(e) {
                    var n, r;
                    return regeneratorRuntime.wrap(
                      function (t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), this.getServices();
                            case 2:
                              return (
                                (n = t.sent),
                                (r = n.taskService),
                                t.abrupt("return", r.delCommopnOpinions(e))
                              );
                            case 5:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
                function e(e) {
                  return t.apply(this, arguments);
                }
                return e;
              })(),
            },
            {
              key: "recordTaskTime",
              value: (function () {
                var t = Object(r["a"])(
                  regeneratorRuntime.mark(function t() {
                    var e, n;
                    return regeneratorRuntime.wrap(
                      function (t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), this.getServices();
                            case 2:
                              return (
                                (e = t.sent),
                                (n = e.taskService),
                                t.abrupt(
                                  "return",
                                  n.recordTaskTime({
                                    type: this.actionType,
                                    taskId: this.auditSubTaskId
                                      ? this.auditSubTaskId
                                      : this.subTaskId,
                                  })
                                )
                              );
                            case 5:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
                function e() {
                  return t.apply(this, arguments);
                }
                return e;
              })(),
            },
            {
              key: "fetchTaskTime",
              value: (function () {
                var t = Object(r["a"])(
                  regeneratorRuntime.mark(function t() {
                    var e, n;
                    return regeneratorRuntime.wrap(
                      function (t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), this.getServices();
                            case 2:
                              return (
                                (e = t.sent),
                                (n = e.taskService),
                                t.abrupt(
                                  "return",
                                  n.fetchTaskTime({
                                    type: this.actionType,
                                    taskId: this.auditSubTaskId
                                      ? this.auditSubTaskId
                                      : this.subTaskId,
                                  })
                                )
                              );
                            case 5:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
                function e() {
                  return t.apply(this, arguments);
                }
                return e;
              })(),
            },
            {
              key: "fetchAnnoDemoFile",
              value: (function () {
                var t = Object(r["a"])(
                  regeneratorRuntime.mark(function t() {
                    var e, n, r;
                    return regeneratorRuntime.wrap(
                      function (t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), this.getServices();
                            case 2:
                              return (
                                (e = t.sent),
                                (n = e.taskService),
                                (t.next = 6),
                                n.fetchAnnoDemoFile({ taskId: this.taskId })
                              );
                            case 6:
                              return (
                                (r = t.sent),
                                t.abrupt(
                                  "return",
                                  (null === r || void 0 === r
                                    ? void 0
                                    : r.sampleFile) || ""
                                )
                              );
                            case 8:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
                function e() {
                  return t.apply(this, arguments);
                }
                return e;
              })(),
            },
          ]),
          t
        );
      })();
      p.DefTaskLink = "/mulan/task/list";
    },
    "448a": function (t, e, n) {
      var r = n("2236"),
        i = n("11b0"),
        a = n("6613"),
        o = n("0676");
      function c(t) {
        return r(t) || i(t) || a(t) || o();
      }
      t.exports = c;
    },
    "44ad": function (t, e, n) {
      var r = n("d039"),
        i = n("c6b6"),
        a = "".split;
      t.exports = r(function () {
        return !Object("z").propertyIsEnumerable(0);
      })
        ? function (t) {
            return "String" == i(t) ? a.call(t, "") : Object(t);
          }
        : Object;
    },
    "44d2": function (t, e, n) {
      var r = n("b622"),
        i = n("7c73"),
        a = n("9bf2"),
        o = r("unscopables"),
        c = Array.prototype;
      void 0 == c[o] && a.f(c, o, { configurable: !0, value: i(null) }),
        (t.exports = function (t) {
          c[o][t] = !0;
        });
    },
    "44de": function (t, e, n) {
      var r = n("da84");
      t.exports = function (t, e) {
        var n = r.console;
        n && n.error && (1 === arguments.length ? n.error(t) : n.error(t, e));
      };
    },
    "44e7": function (t, e, n) {
      var r = n("861d"),
        i = n("c6b6"),
        a = n("b622"),
        o = a("match");
      t.exports = function (t) {
        var e;
        return r(t) && (void 0 !== (e = t[o]) ? !!e : "RegExp" == i(t));
      };
    },
    "45fc": function (t, e, n) {
      "use strict";
      var r = n("23e7"),
        i = n("b727").some,
        a = n("a640"),
        o = n("ae40"),
        c = a("some"),
        u = o("some");
      r(
        { target: "Array", proto: !0, forced: !c || !u },
        {
          some: function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      );
    },
    4651: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return a;
      }),
        n.d(e, "a", function () {
          return o;
        });
      n("99af"), n("4160"), n("159b");
      var r = n("5530"),
        i = n("2909"),
        a = function () {
          for (
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              e = arguments.length > 1 ? arguments[1] : void 0,
              n = [],
              r = [],
              a = 0;
            a < t.length;
            a++
          ) {
            var o = t[a],
              c = a % e;
            a && 0 === c && (n.push(Object(i["a"])(r)), (r = [])), (r[c] = o);
          }
          return r.length && n.push(Object(i["a"])(r)), n;
        },
        o = function (t, e) {
          var n = {},
            i = [];
          return (
            t.forEach(function (t) {
              return t.forEach(function (a, o) {
                if (!n["".concat(o, "-").concat(a[e])]) {
                  var c = Object(r["a"])(
                    Object(r["a"])({}, a),
                    o === t.length - 1 ? {} : { children: [] }
                  );
                  if (((n["".concat(o, "-").concat(a[e])] = c), o > 0)) {
                    var u,
                      l = n["".concat(o - 1, "-").concat(t[o - 1][e])];
                    if (l)
                      null === (u = l.children) || void 0 === u || u.push(c);
                  } else i.push(c);
                }
              });
            }),
            i
          );
        };
    },
    "466d": function (t, e, n) {
      "use strict";
      var r = n("d784"),
        i = n("825a"),
        a = n("50c4"),
        o = n("1d80"),
        c = n("8aa5"),
        u = n("14c3");
      r("match", 1, function (t, e, n) {
        return [
          function (e) {
            var n = o(this),
              r = void 0 == e ? void 0 : e[t];
            return void 0 !== r ? r.call(e, n) : new RegExp(e)[t](String(n));
          },
          function (t) {
            var r = n(e, t, this);
            if (r.done) return r.value;
            var o = i(t),
              l = String(this);
            if (!o.global) return u(o, l);
            var s = o.unicode;
            o.lastIndex = 0;
            var f,
              p = [],
              d = 0;
            while (null !== (f = u(o, l))) {
              var h = String(f[0]);
              (p[d] = h),
                "" === h && (o.lastIndex = c(l, a(o.lastIndex), s)),
                d++;
            }
            return 0 === d ? null : p;
          },
        ];
      });
    },
    "47f5": function (t, e, n) {
      var r = n("2b03"),
        i = n("d9a8"),
        a = n("099a");
      function o(t, e, n) {
        return e === e ? a(t, e, n) : r(t, i, n);
      }
      t.exports = o;
    },
    4840: function (t, e, n) {
      var r = n("825a"),
        i = n("1c0b"),
        a = n("b622"),
        o = a("species");
      t.exports = function (t, e) {
        var n,
          a = r(t).constructor;
        return void 0 === a || void 0 == (n = r(a)[o]) ? e : i(n);
      };
    },
    "488f": function (t, n) {
      t.exports = e;
    },
    4930: function (t, e, n) {
      var r = n("d039");
      t.exports =
        !!Object.getOwnPropertySymbols &&
        !r(function () {
          return !String(Symbol());
        });
    },
    4946: function (t, e, n) {
      "use strict";
      var r = n("a9e31"),
        i = n.n(r);
      i.a;
    },
    "498a": function (t, e, n) {
      "use strict";
      var r = n("23e7"),
        i = n("58a8").trim,
        a = n("c8d2");
      r(
        { target: "String", proto: !0, forced: a("trim") },
        {
          trim: function () {
            return i(this);
          },
        }
      );
    },
    "499e": function (t, e, n) {
      "use strict";
      function r(t, e) {
        for (var n = [], r = {}, i = 0; i < e.length; i++) {
          var a = e[i],
            o = a[0],
            c = a[1],
            u = a[2],
            l = a[3],
            s = { id: t + ":" + i, css: c, media: u, sourceMap: l };
          r[o] ? r[o].parts.push(s) : n.push((r[o] = { id: o, parts: [s] }));
        }
        return n;
      }
      n.r(e),
        n.d(e, "default", function () {
          return h;
        });
      var i = "undefined" !== typeof document;
      if ("undefined" !== typeof DEBUG && DEBUG && !i)
        throw new Error(
          "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
        );
      var a = {},
        o = i && (document.head || document.getElementsByTagName("head")[0]),
        c = null,
        u = 0,
        l = !1,
        s = function () {},
        f = null,
        p = "data-vue-ssr-id",
        d =
          "undefined" !== typeof navigator &&
          /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
      function h(t, e, n, i) {
        (l = n), (f = i || {});
        var o = r(t, e);
        return (
          v(o),
          function (e) {
            for (var n = [], i = 0; i < o.length; i++) {
              var c = o[i],
                u = a[c.id];
              u.refs--, n.push(u);
            }
            e ? ((o = r(t, e)), v(o)) : (o = []);
            for (i = 0; i < n.length; i++) {
              u = n[i];
              if (0 === u.refs) {
                for (var l = 0; l < u.parts.length; l++) u.parts[l]();
                delete a[u.id];
              }
            }
          }
        );
      }
      function v(t) {
        for (var e = 0; e < t.length; e++) {
          var n = t[e],
            r = a[n.id];
          if (r) {
            r.refs++;
            for (var i = 0; i < r.parts.length; i++) r.parts[i](n.parts[i]);
            for (; i < n.parts.length; i++) r.parts.push(m(n.parts[i]));
            r.parts.length > n.parts.length &&
              (r.parts.length = n.parts.length);
          } else {
            var o = [];
            for (i = 0; i < n.parts.length; i++) o.push(m(n.parts[i]));
            a[n.id] = { id: n.id, refs: 1, parts: o };
          }
        }
      }
      function b() {
        var t = document.createElement("style");
        return (t.type = "text/css"), o.appendChild(t), t;
      }
      function m(t) {
        var e,
          n,
          r = document.querySelector("style[" + p + '~="' + t.id + '"]');
        if (r) {
          if (l) return s;
          r.parentNode.removeChild(r);
        }
        if (d) {
          var i = u++;
          (r = c || (c = b())),
            (e = y.bind(null, r, i, !1)),
            (n = y.bind(null, r, i, !0));
        } else
          (r = b()),
            (e = _.bind(null, r)),
            (n = function () {
              r.parentNode.removeChild(r);
            });
        return (
          e(t),
          function (r) {
            if (r) {
              if (
                r.css === t.css &&
                r.media === t.media &&
                r.sourceMap === t.sourceMap
              )
                return;
              e((t = r));
            } else n();
          }
        );
      }
      var g = (function () {
        var t = [];
        return function (e, n) {
          return (t[e] = n), t.filter(Boolean).join("\n");
        };
      })();
      function y(t, e, n, r) {
        var i = n ? "" : r.css;
        if (t.styleSheet) t.styleSheet.cssText = g(e, i);
        else {
          var a = document.createTextNode(i),
            o = t.childNodes;
          o[e] && t.removeChild(o[e]),
            o.length ? t.insertBefore(a, o[e]) : t.appendChild(a);
        }
      }
      function _(t, e) {
        var n = e.css,
          r = e.media,
          i = e.sourceMap;
        if (
          (r && t.setAttribute("media", r),
          f.ssrId && t.setAttribute(p, e.id),
          i &&
            ((n += "\n/*# sourceURL=" + i.sources[0] + " */"),
            (n +=
              "\n/*# sourceMappingURL=data:application/json;base64," +
              btoa(unescape(encodeURIComponent(JSON.stringify(i)))) +
              " */")),
          t.styleSheet)
        )
          t.styleSheet.cssText = n;
        else {
          while (t.firstChild) t.removeChild(t.firstChild);
          t.appendChild(document.createTextNode(n));
        }
      }
    },
    "4ae1": function (t, e, n) {
      var r = n("23e7"),
        i = n("d066"),
        a = n("1c0b"),
        o = n("825a"),
        c = n("861d"),
        u = n("7c73"),
        l = n("0538"),
        s = n("d039"),
        f = i("Reflect", "construct"),
        p = s(function () {
          function t() {}
          return !(f(function () {}, [], t) instanceof t);
        }),
        d = !s(function () {
          f(function () {});
        }),
        h = p || d;
      r(
        { target: "Reflect", stat: !0, forced: h, sham: h },
        {
          construct: function (t, e) {
            a(t), o(e);
            var n = arguments.length < 3 ? t : a(arguments[2]);
            if (d && !p) return f(t, e, n);
            if (t == n) {
              switch (e.length) {
                case 0:
                  return new t();
                case 1:
                  return new t(e[0]);
                case 2:
                  return new t(e[0], e[1]);
                case 3:
                  return new t(e[0], e[1], e[2]);
                case 4:
                  return new t(e[0], e[1], e[2], e[3]);
              }
              var r = [null];
              return r.push.apply(r, e), new (l.apply(t, r))();
            }
            var i = n.prototype,
              s = u(c(i) ? i : Object.prototype),
              h = Function.apply.call(t, s, e);
            return c(h) ? h : s;
          },
        }
      );
    },
    "4bfa": function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return s;
      }),
        n.d(e, "a", function () {
          return f;
        });
      n("d3b7"), n("25f0");
      var r = n("f942"),
        i = n.n(r),
        a = n("8814"),
        o = n("f949"),
        c = n.n(o),
        u = Object(a["addLocalResource"])("validators", c.a),
        l = function (t) {
          return i()(t, a["i18n"].t("colon"));
        },
        s = function (t) {
          return { required: !0, message: u("required", { field: l(t) }) };
        },
        f = function (t, e) {
          var n = e.max;
          return {
            max: n,
            message: u("max", { field: l(t), max: n.toString() }),
          };
        };
    },
    "4c35": function (t, e, n) {
      t.exports = n.p + "img/del.c0c7fb18.svg";
    },
    "4c39": function (t, e, n) {
      "use strict";
      var r = n("280d"),
        i = n.n(r);
      i.a;
    },
    "4d63": function (t, e, n) {
      var r = n("83ab"),
        i = n("da84"),
        a = n("94ca"),
        o = n("7156"),
        c = n("9bf2").f,
        u = n("241c").f,
        l = n("44e7"),
        s = n("ad6d"),
        f = n("9f7f"),
        p = n("6eeb"),
        d = n("d039"),
        h = n("69f3").set,
        v = n("2626"),
        b = n("b622"),
        m = b("match"),
        g = i.RegExp,
        y = g.prototype,
        _ = /a/g,
        w = /a/g,
        x = new g(_) !== _,
        O = f.UNSUPPORTED_Y,
        T =
          r &&
          a(
            "RegExp",
            !x ||
              O ||
              d(function () {
                return (
                  (w[m] = !1), g(_) != _ || g(w) == w || "/a/i" != g(_, "i")
                );
              })
          );
      if (T) {
        var E = function (t, e) {
            var n,
              r = this instanceof E,
              i = l(t),
              a = void 0 === e;
            if (!r && i && t.constructor === E && a) return t;
            x
              ? i && !a && (t = t.source)
              : t instanceof E && (a && (e = s.call(t)), (t = t.source)),
              O &&
                ((n = !!e && e.indexOf("y") > -1),
                n && (e = e.replace(/y/g, "")));
            var c = o(x ? new g(t, e) : g(t, e), r ? this : y, E);
            return O && n && h(c, { sticky: n }), c;
          },
          k = function (t) {
            t in E ||
              c(E, t, {
                configurable: !0,
                get: function () {
                  return g[t];
                },
                set: function (e) {
                  g[t] = e;
                },
              });
          },
          j = u(g),
          C = 0;
        while (j.length > C) k(j[C++]);
        (y.constructor = E), (E.prototype = y), p(i, "RegExp", E);
      }
      v("RegExp");
    },
    "4d64": function (t, e, n) {
      var r = n("fc6a"),
        i = n("50c4"),
        a = n("23cb"),
        o = function (t) {
          return function (e, n, o) {
            var c,
              u = r(e),
              l = i(u.length),
              s = a(o, l);
            if (t && n != n) {
              while (l > s) if (((c = u[s++]), c != c)) return !0;
            } else
              for (; l > s; s++)
                if ((t || s in u) && u[s] === n) return t || s || 0;
            return !t && -1;
          };
        };
      t.exports = { includes: o(!0), indexOf: o(!1) };
    },
    "4d90": function (t, e, n) {
      "use strict";
      var r = n("23e7"),
        i = n("0ccb").start,
        a = n("9a0c");
      r(
        { target: "String", proto: !0, forced: a },
        {
          padStart: function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      );
    },
    "4de4": function (t, e, n) {
      "use strict";
      var r = n("23e7"),
        i = n("b727").filter,
        a = n("1dde"),
        o = n("ae40"),
        c = a("filter"),
        u = o("filter");
      r(
        { target: "Array", proto: !0, forced: !c || !u },
        {
          filter: function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      );
    },
    "4df4": function (t, e, n) {
      "use strict";
      var r = n("0366"),
        i = n("7b0b"),
        a = n("9bdd"),
        o = n("e95a"),
        c = n("50c4"),
        u = n("8418"),
        l = n("35a1");
      t.exports = function (t) {
        var e,
          n,
          s,
          f,
          p,
          d,
          h = i(t),
          v = "function" == typeof this ? this : Array,
          b = arguments.length,
          m = b > 1 ? arguments[1] : void 0,
          g = void 0 !== m,
          y = l(h),
          _ = 0;
        if (
          (g && (m = r(m, b > 2 ? arguments[2] : void 0, 2)),
          void 0 == y || (v == Array && o(y)))
        )
          for (e = c(h.length), n = new v(e); e > _; _++)
            (d = g ? m(h[_], _) : h[_]), u(n, _, d);
        else
          for (
            f = y.call(h), p = f.next, n = new v();
            !(s = p.call(f)).done;
            _++
          )
            (d = g ? a(f, m, [s.value, _], !0) : s.value), u(n, _, d);
        return (n.length = _), n;
      };
    },
    "4ec9": function (t, e, n) {
      "use strict";
      var r = n("6d61"),
        i = n("6566");
      t.exports = r(
        "Map",
        function (t) {
          return function () {
            return t(this, arguments.length ? arguments[0] : void 0);
          };
        },
        i
      );
    },
    5007: function (t, e, n) {
      "use strict";
      var r = n("3b0d");
      n.d(e, "noop", function () {
        return r["a"];
      }),
        n.d(e, "of", function () {
          return r["b"];
        });
      n("05da");
      var i = n("22f5");
      n.d(e, "map", function () {
        return i["a"];
      }),
        n.d(e, "reduce", function () {
          return i["b"];
        });
      var a = n("03a3");
      n.o(a, "createLock") &&
        n.d(e, "createLock", function () {
          return a["createLock"];
        }),
        n.o(a, "parallel") &&
          n.d(e, "parallel", function () {
            return a["parallel"];
          }),
        n.o(a, "pipe") &&
          n.d(e, "pipe", function () {
            return a["pipe"];
          }),
        n.o(a, "somePipe") &&
          n.d(e, "somePipe", function () {
            return a["somePipe"];
          });
      var o = n("3e58");
      n.d(e, "pipe", function () {
        return o["a"];
      }),
        n.d(e, "somePipe", function () {
          return o["b"];
        });
      var c = n("5fc5");
      n.d(e, "createLock", function () {
        return c["a"];
      });
      var u = n("e8bc");
      n.d(e, "parallel", function () {
        return u["a"];
      });
    },
    "50ab": function (t, e, n) {
      "use strict";
      var r = n("9fea");
      n.o(r, "error") &&
        n.d(e, "error", function () {
          return r["error"];
        }),
        n.o(r, "factoryT") &&
          n.d(e, "factoryT", function () {
            return r["factoryT"];
          }),
        n.o(r, "getError") &&
          n.d(e, "getError", function () {
            return r["getError"];
          }),
        n.o(r, "hasValue") &&
          n.d(e, "hasValue", function () {
            return r["hasValue"];
          }),
        n.o(r, "some") &&
          n.d(e, "some", function () {
            return r["some"];
          });
      var i = n("cf53");
      n.d(e, "error", function () {
        return i["a"];
      }),
        n.d(e, "factoryT", function () {
          return i["b"];
        }),
        n.d(e, "getError", function () {
          return i["c"];
        }),
        n.d(e, "hasValue", function () {
          return i["d"];
        }),
        n.d(e, "some", function () {
          return i["e"];
        });
      n("e736");
    },
    "50c4": function (t, e, n) {
      var r = n("a691"),
        i = Math.min;
      t.exports = function (t) {
        return t > 0 ? i(r(t), 9007199254740991) : 0;
      };
    },
    5135: function (t, e) {
      var n = {}.hasOwnProperty;
      t.exports = function (t, e) {
        return n.call(t, e);
      };
    },
    5170: function (t, e) {
      t.exports = function (t) {
        (t.options.__i18n = t.options.__i18n || []),
          t.options.__i18n.push(
            '{"name":"标签名称","label-name-requirement":"标签由数字、中英文、中/下划线组成，长度上限256字符"}'
          ),
          delete t.options._Ctor;
      };
    },
    5319: function (t, e, n) {
      "use strict";
      var r = n("d784"),
        i = n("825a"),
        a = n("7b0b"),
        o = n("50c4"),
        c = n("a691"),
        u = n("1d80"),
        l = n("8aa5"),
        s = n("14c3"),
        f = Math.max,
        p = Math.min,
        d = Math.floor,
        h = /\$([$&'`]|\d\d?|<[^>]*>)/g,
        v = /\$([$&'`]|\d\d?)/g,
        b = function (t) {
          return void 0 === t ? t : String(t);
        };
      r("replace", 2, function (t, e, n, r) {
        var m = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
          g = r.REPLACE_KEEPS_$0,
          y = m ? "$" : "$0";
        return [
          function (n, r) {
            var i = u(this),
              a = void 0 == n ? void 0 : n[t];
            return void 0 !== a ? a.call(n, i, r) : e.call(String(i), n, r);
          },
          function (t, r) {
            if ((!m && g) || ("string" === typeof r && -1 === r.indexOf(y))) {
              var a = n(e, t, this, r);
              if (a.done) return a.value;
            }
            var u = i(t),
              d = String(this),
              h = "function" === typeof r;
            h || (r = String(r));
            var v = u.global;
            if (v) {
              var w = u.unicode;
              u.lastIndex = 0;
            }
            var x = [];
            while (1) {
              var O = s(u, d);
              if (null === O) break;
              if ((x.push(O), !v)) break;
              var T = String(O[0]);
              "" === T && (u.lastIndex = l(d, o(u.lastIndex), w));
            }
            for (var E = "", k = 0, j = 0; j < x.length; j++) {
              O = x[j];
              for (
                var C = String(O[0]),
                  S = f(p(c(O.index), d.length), 0),
                  I = [],
                  A = 1;
                A < O.length;
                A++
              )
                I.push(b(O[A]));
              var L = O.groups;
              if (h) {
                var N = [C].concat(I, S, d);
                void 0 !== L && N.push(L);
                var R = String(r.apply(void 0, N));
              } else R = _(C, d, S, I, L, r);
              S >= k && ((E += d.slice(k, S) + R), (k = S + C.length));
            }
            return E + d.slice(k);
          },
        ];
        function _(t, n, r, i, o, c) {
          var u = r + t.length,
            l = i.length,
            s = v;
          return (
            void 0 !== o && ((o = a(o)), (s = h)),
            e.call(c, s, function (e, a) {
              var c;
              switch (a.charAt(0)) {
                case "$":
                  return "$";
                case "&":
                  return t;
                case "`":
                  return n.slice(0, r);
                case "'":
                  return n.slice(u);
                case "<":
                  c = o[a.slice(1, -1)];
                  break;
                default:
                  var s = +a;
                  if (0 === s) return e;
                  if (s > l) {
                    var f = d(s / 10);
                    return 0 === f
                      ? e
                      : f <= l
                      ? void 0 === i[f - 1]
                        ? a.charAt(1)
                        : i[f - 1] + a.charAt(1)
                      : e;
                  }
                  c = i[s - 1];
              }
              return void 0 === c ? "" : c;
            })
          );
        }
      });
    },
    "53ca": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      n("a4d3"), n("e01a"), n("d28b"), n("d3b7"), n("3ca3"), n("ddb0");
      function r(t) {
        return (
          (r =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" === typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          r(t)
        );
      }
    },
    5530: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return a;
      });
      n("a4d3"),
        n("4de4"),
        n("4160"),
        n("e439"),
        n("dbb4"),
        n("b64b"),
        n("159b");
      var r = n("ade3");
      function i(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function a(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? i(Object(n), !0).forEach(function (e) {
                Object(r["a"])(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
    },
    5692: function (t, e, n) {
      var r = n("c430"),
        i = n("c6cd");
      (t.exports = function (t, e) {
        return i[t] || (i[t] = void 0 !== e ? e : {});
      })("versions", []).push({
        version: "3.6.5",
        mode: r ? "pure" : "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
      });
    },
    "56ef": function (t, e, n) {
      var r = n("d066"),
        i = n("241c"),
        a = n("7418"),
        o = n("825a");
      t.exports =
        r("Reflect", "ownKeys") ||
        function (t) {
          var e = i.f(o(t)),
            n = a.f;
          return n ? e.concat(n(t)) : e;
        };
    },
    "585a": function (t, e, n) {
      (function (e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.exports = n;
      }.call(this, n("c8ba")));
    },
    5899: function (t, e) {
      t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
    },
    "58a8": function (t, e, n) {
      var r = n("1d80"),
        i = n("5899"),
        a = "[" + i + "]",
        o = RegExp("^" + a + a + "*"),
        c = RegExp(a + a + "*$"),
        u = function (t) {
          return function (e) {
            var n = String(r(e));
            return (
              1 & t && (n = n.replace(o, "")),
              2 & t && (n = n.replace(c, "")),
              n
            );
          };
        };
      t.exports = { start: u(1), end: u(2), trim: u(3) };
    },
    "58e1": function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "a", function () {
          return i;
        });
      n("a15b"), n("fb6a"), n("d3b7"), n("ac1f"), n("25f0"), n("1276");
      function r(t) {
        var e,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return /^#([A-Fa-f0-9]{3}){1,2}$/.test(t)
          ? ((e = t.substring(1).split("")),
            3 == e.length && (e = [e[0], e[0], e[1], e[1], e[2], e[2]]),
            (e = "0x" + e.join("")),
            "rgba(" +
              [(e >> 16) & 255, (e >> 8) & 255, 255 & e].join(",") +
              ",".concat(n, ")"))
          : e;
      }
      function i(t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0.5;
        return t
          ? { border: { width: 1, color: t }, background: r(t, e), font: {} }
          : {};
      }
    },
    "5a34": function (t, e, n) {
      var r = n("44e7");
      t.exports = function (t) {
        if (r(t))
          throw TypeError("The method doesn't accept regular expressions");
        return t;
      };
    },
    "5a43": function (t, e) {
      function n(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      t.exports = n;
    },
    "5b9c": function (t, e, n) {
      t.exports = n.p + "img/arrow.084a0b1b.svg";
    },
    "5bc3": function (t, e) {
      function n(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function r(t, e, r) {
        return e && n(t.prototype, e), r && n(t, r), t;
      }
      t.exports = r;
    },
    "5c6c": function (t, e) {
      t.exports = function (t, e) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: e,
        };
      };
    },
    "5dab": function (t, e, n) {
      var r = n("752e");
      "string" === typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
      var i = n("499e").default;
      i("d819c8de", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "5e06": function (t, e, n) {
      "use strict";
      var r = n("17b3"),
        i = n.n(r);
      i.a;
    },
    "5e89": function (t, e, n) {
      var r = n("861d"),
        i = Math.floor;
      t.exports = function (t) {
        return !r(t) && isFinite(t) && i(t) === t;
      };
    },
    "5fb2": function (t, e, n) {
      "use strict";
      var r = 2147483647,
        i = 36,
        a = 1,
        o = 26,
        c = 38,
        u = 700,
        l = 72,
        s = 128,
        f = "-",
        p = /[^\0-\u007E]/,
        d = /[.\u3002\uFF0E\uFF61]/g,
        h = "Overflow: input needs wider integers to process",
        v = i - a,
        b = Math.floor,
        m = String.fromCharCode,
        g = function (t) {
          var e = [],
            n = 0,
            r = t.length;
          while (n < r) {
            var i = t.charCodeAt(n++);
            if (i >= 55296 && i <= 56319 && n < r) {
              var a = t.charCodeAt(n++);
              56320 == (64512 & a)
                ? e.push(((1023 & i) << 10) + (1023 & a) + 65536)
                : (e.push(i), n--);
            } else e.push(i);
          }
          return e;
        },
        y = function (t) {
          return t + 22 + 75 * (t < 26);
        },
        _ = function (t, e, n) {
          var r = 0;
          for (
            t = n ? b(t / u) : t >> 1, t += b(t / e);
            t > (v * o) >> 1;
            r += i
          )
            t = b(t / v);
          return b(r + ((v + 1) * t) / (t + c));
        },
        w = function (t) {
          var e = [];
          t = g(t);
          var n,
            c,
            u = t.length,
            p = s,
            d = 0,
            v = l;
          for (n = 0; n < t.length; n++) (c = t[n]), c < 128 && e.push(m(c));
          var w = e.length,
            x = w;
          w && e.push(f);
          while (x < u) {
            var O = r;
            for (n = 0; n < t.length; n++)
              (c = t[n]), c >= p && c < O && (O = c);
            var T = x + 1;
            if (O - p > b((r - d) / T)) throw RangeError(h);
            for (d += (O - p) * T, p = O, n = 0; n < t.length; n++) {
              if (((c = t[n]), c < p && ++d > r)) throw RangeError(h);
              if (c == p) {
                for (var E = d, k = i; ; k += i) {
                  var j = k <= v ? a : k >= v + o ? o : k - v;
                  if (E < j) break;
                  var C = E - j,
                    S = i - j;
                  e.push(m(y(j + (C % S)))), (E = b(C / S));
                }
                e.push(m(y(E))), (v = _(d, T, x == w)), (d = 0), ++x;
              }
            }
            ++d, ++p;
          }
          return e.join("");
        };
      t.exports = function (t) {
        var e,
          n,
          r = [],
          i = t.toLowerCase().replace(d, ".").split(".");
        for (e = 0; e < i.length; e++)
          (n = i[e]), r.push(p.test(n) ? "xn--" + w(n) : n);
        return r.join(".");
      };
    },
    "5fc5": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var r = function () {
        var t = {};
        return function (e, n) {
          var r = null == n ? "0" : "".concat(n),
            i = t[r];
          i && i();
          var a = e();
          return (t[r] = a.cancel), a;
        };
      };
    },
    6062: function (t, e, n) {
      "use strict";
      var r = n("6d61"),
        i = n("6566");
      t.exports = r(
        "Set",
        function (t) {
          return function () {
            return t(this, arguments.length ? arguments[0] : void 0);
          };
        },
        i
      );
    },
    "60aa": function (t, e, n) {
      "use strict";
      n.d(e, "d", function () {
        return r;
      }),
        n.d(e, "a", function () {
          return i;
        }),
        n.d(e, "f", function () {
          return o;
        }),
        n.d(e, "e", function () {
          return c;
        }),
        n.d(e, "b", function () {
          return u;
        }),
        n.d(e, "c", function () {
          return l;
        });
      var r,
        i,
        a = n("2841");
      (function (t) {
        (t[(t["UNANNOTATED"] = 1)] = "UNANNOTATED"),
          (t[(t["ANNOTATED"] = 2)] = "ANNOTATED");
      })(r || (r = {})),
        (function (t) {
          (t[(t["DISABLE_INTERANNO"] = 0)] = "DISABLE_INTERANNO"),
            (t[(t["ENABLE_INTERANNO"] = 1)] = "ENABLE_INTERANNO");
        })(i || (i = {}));
      var o = Object(a["enumxFactory"])({
          UNACCEPTED: { id: 1, label: "未验收的数据" },
          UN_PASS_ACCEPTED: { id: 2, label: "验收不通过的数据" },
          UNACCEPTED_UN_PASS: { id: 3, label: "未验收+验收不通过的数据" },
        }),
        c = Object(a["enumxFactory"])({
          ALL: { id: 0, label: "保存全部数据" },
          PASS_ACCEPTED: { id: 1, label: "仅保存验收通过的数据" },
        }),
        u = Object(a["enumxFactory"])({
          UNACCEPTED: { id: 1, label: "未验收", color: "#FA9F65" },
          UN_PASS_ACCEPTED: { id: 2, label: "验收不通过", color: "#E64552" },
          PASS_ACCEPTED: { id: 3, label: "验收通过", color: "#39BF45" },
        }),
        l = Object(a["enumxFactory"])({
          ANNO: { id: 1, label: "标注" },
          AUDIT: { id: 2, label: "审核" },
          CLE: { id: 3, label: "验收" },
        });
    },
    "60da": function (t, e, n) {
      "use strict";
      var r = n("83ab"),
        i = n("d039"),
        a = n("df75"),
        o = n("7418"),
        c = n("d1e7"),
        u = n("7b0b"),
        l = n("44ad"),
        s = Object.assign,
        f = Object.defineProperty;
      t.exports =
        !s ||
        i(function () {
          if (
            r &&
            1 !==
              s(
                { b: 1 },
                s(
                  f({}, "a", {
                    enumerable: !0,
                    get: function () {
                      f(this, "b", { value: 3, enumerable: !1 });
                    },
                  }),
                  { b: 2 }
                )
              ).b
          )
            return !0;
          var t = {},
            e = {},
            n = Symbol(),
            i = "abcdefghijklmnopqrst";
          return (
            (t[n] = 7),
            i.split("").forEach(function (t) {
              e[t] = t;
            }),
            7 != s({}, t)[n] || a(s({}, e)).join("") != i
          );
        })
          ? function (t, e) {
              var n = u(t),
                i = arguments.length,
                s = 1,
                f = o.f,
                p = c.f;
              while (i > s) {
                var d,
                  h = l(arguments[s++]),
                  v = f ? a(h).concat(f(h)) : a(h),
                  b = v.length,
                  m = 0;
                while (b > m)
                  (d = v[m++]), (r && !p.call(h, d)) || (n[d] = h[d]);
              }
              return n;
            }
          : s;
    },
    "62e4": function (t, e) {
      t.exports = function (t) {
        return (
          t.webpackPolyfill ||
            ((t.deprecate = function () {}),
            (t.paths = []),
            t.children || (t.children = []),
            Object.defineProperty(t, "loaded", {
              enumerable: !0,
              get: function () {
                return t.l;
              },
            }),
            Object.defineProperty(t, "id", {
              enumerable: !0,
              get: function () {
                return t.i;
              },
            }),
            (t.webpackPolyfill = 1)),
          t
        );
      };
    },
    6374: function (t, e, n) {
      n("a4d3"), n("e01a"), n("d28b"), n("d3b7"), n("3ca3"), n("ddb0");
      var r = n("6613");
      function i(t, e) {
        var n;
        if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (n = r(t)) ||
            (e && t && "number" === typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          c = !0,
          u = !1;
        return {
          s: function () {
            n = t[Symbol.iterator]();
          },
          n: function () {
            var t = n.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (u = !0), (o = t);
          },
          f: function () {
            try {
              c || null == n["return"] || n["return"]();
            } finally {
              if (u) throw o;
            }
          },
        };
      }
      t.exports = i;
    },
    6547: function (t, e, n) {
      var r = n("a691"),
        i = n("1d80"),
        a = function (t) {
          return function (e, n) {
            var a,
              o,
              c = String(i(e)),
              u = r(n),
              l = c.length;
            return u < 0 || u >= l
              ? t
                ? ""
                : void 0
              : ((a = c.charCodeAt(u)),
                a < 55296 ||
                a > 56319 ||
                u + 1 === l ||
                (o = c.charCodeAt(u + 1)) < 56320 ||
                o > 57343
                  ? t
                    ? c.charAt(u)
                    : a
                  : t
                  ? c.slice(u, u + 2)
                  : o - 56320 + ((a - 55296) << 10) + 65536);
          };
        };
      t.exports = { codeAt: a(!1), charAt: a(!0) };
    },
    6566: function (t, e, n) {
      "use strict";
      var r = n("9bf2").f,
        i = n("7c73"),
        a = n("e2cc"),
        o = n("0366"),
        c = n("19aa"),
        u = n("2266"),
        l = n("7dd0"),
        s = n("2626"),
        f = n("83ab"),
        p = n("f183").fastKey,
        d = n("69f3"),
        h = d.set,
        v = d.getterFor;
      t.exports = {
        getConstructor: function (t, e, n, l) {
          var s = t(function (t, r) {
              c(t, s, e),
                h(t, {
                  type: e,
                  index: i(null),
                  first: void 0,
                  last: void 0,
                  size: 0,
                }),
                f || (t.size = 0),
                void 0 != r && u(r, t[l], t, n);
            }),
            d = v(e),
            b = function (t, e, n) {
              var r,
                i,
                a = d(t),
                o = m(t, e);
              return (
                o
                  ? (o.value = n)
                  : ((a.last = o =
                      {
                        index: (i = p(e, !0)),
                        key: e,
                        value: n,
                        previous: (r = a.last),
                        next: void 0,
                        removed: !1,
                      }),
                    a.first || (a.first = o),
                    r && (r.next = o),
                    f ? a.size++ : t.size++,
                    "F" !== i && (a.index[i] = o)),
                t
              );
            },
            m = function (t, e) {
              var n,
                r = d(t),
                i = p(e);
              if ("F" !== i) return r.index[i];
              for (n = r.first; n; n = n.next) if (n.key == e) return n;
            };
          return (
            a(s.prototype, {
              clear: function () {
                var t = this,
                  e = d(t),
                  n = e.index,
                  r = e.first;
                while (r)
                  (r.removed = !0),
                    r.previous && (r.previous = r.previous.next = void 0),
                    delete n[r.index],
                    (r = r.next);
                (e.first = e.last = void 0), f ? (e.size = 0) : (t.size = 0);
              },
              delete: function (t) {
                var e = this,
                  n = d(e),
                  r = m(e, t);
                if (r) {
                  var i = r.next,
                    a = r.previous;
                  delete n.index[r.index],
                    (r.removed = !0),
                    a && (a.next = i),
                    i && (i.previous = a),
                    n.first == r && (n.first = i),
                    n.last == r && (n.last = a),
                    f ? n.size-- : e.size--;
                }
                return !!r;
              },
              forEach: function (t) {
                var e,
                  n = d(this),
                  r = o(t, arguments.length > 1 ? arguments[1] : void 0, 3);
                while ((e = e ? e.next : n.first)) {
                  r(e.value, e.key, this);
                  while (e && e.removed) e = e.previous;
                }
              },
              has: function (t) {
                return !!m(this, t);
              },
            }),
            a(
              s.prototype,
              n
                ? {
                    get: function (t) {
                      var e = m(this, t);
                      return e && e.value;
                    },
                    set: function (t, e) {
                      return b(this, 0 === t ? 0 : t, e);
                    },
                  }
                : {
                    add: function (t) {
                      return b(this, (t = 0 === t ? 0 : t), t);
                    },
                  }
            ),
            f &&
              r(s.prototype, "size", {
                get: function () {
                  return d(this).size;
                },
              }),
            s
          );
        },
        setStrong: function (t, e, n) {
          var r = e + " Iterator",
            i = v(e),
            a = v(r);
          l(
            t,
            e,
            function (t, e) {
              h(this, {
                type: r,
                target: t,
                state: i(t),
                kind: e,
                last: void 0,
              });
            },
            function () {
              var t = a(this),
                e = t.kind,
                n = t.last;
              while (n && n.removed) n = n.previous;
              return t.target && (t.last = n = n ? n.next : t.state.first)
                ? "keys" == e
                  ? { value: n.key, done: !1 }
                  : "values" == e
                  ? { value: n.value, done: !1 }
                  : { value: [n.key, n.value], done: !1 }
                : ((t.target = void 0), { value: void 0, done: !0 });
            },
            n ? "entries" : "values",
            !n,
            !0
          ),
            s(e);
        },
      };
    },
    "65f0": function (t, e, n) {
      var r = n("861d"),
        i = n("e8b5"),
        a = n("b622"),
        o = a("species");
      t.exports = function (t, e) {
        var n;
        return (
          i(t) &&
            ((n = t.constructor),
            "function" != typeof n || (n !== Array && !i(n.prototype))
              ? r(n) && ((n = n[o]), null === n && (n = void 0))
              : (n = void 0)),
          new (void 0 === n ? Array : n)(0 === e ? 0 : e)
        );
      };
    },
    6613: function (t, e, n) {
      n("a630"), n("fb6a"), n("b0c0"), n("d3b7"), n("25f0"), n("3ca3");
      var r = n("5a43");
      function i(t, e) {
        if (t) {
          if ("string" === typeof t) return r(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? r(t, e)
              : void 0
          );
        }
      }
      t.exports = i;
    },
    "66c7": function (t, e, n) {
      var r = n("ce86"),
        i = n("c32f"),
        a = n("2cf8"),
        o = n("b789"),
        c = n("126d"),
        u = n("76dd"),
        l = /^\s+|\s+$/g;
      function s(t, e, n) {
        if (((t = u(t)), t && (n || void 0 === e))) return t.replace(l, "");
        if (!t || !(e = r(e))) return t;
        var s = c(t),
          f = c(e),
          p = o(s, f),
          d = a(s, f) + 1;
        return i(s, p, d).join("");
      }
      t.exports = s;
    },
    6716: function (t, e, n) {
      "use strict";
      var r = n("f067"),
        i = n.n(r);
      i.a;
    },
    6747: function (t, e) {
      var n = Array.isArray;
      t.exports = n;
    },
    "69f3": function (t, e, n) {
      var r,
        i,
        a,
        o = n("7f9a"),
        c = n("da84"),
        u = n("861d"),
        l = n("9112"),
        s = n("5135"),
        f = n("f772"),
        p = n("d012"),
        d = c.WeakMap,
        h = function (t) {
          return a(t) ? i(t) : r(t, {});
        },
        v = function (t) {
          return function (e) {
            var n;
            if (!u(e) || (n = i(e)).type !== t)
              throw TypeError("Incompatible receiver, " + t + " required");
            return n;
          };
        };
      if (o) {
        var b = new d(),
          m = b.get,
          g = b.has,
          y = b.set;
        (r = function (t, e) {
          return y.call(b, t, e), e;
        }),
          (i = function (t) {
            return m.call(b, t) || {};
          }),
          (a = function (t) {
            return g.call(b, t);
          });
      } else {
        var _ = f("state");
        (p[_] = !0),
          (r = function (t, e) {
            return l(t, _, e), e;
          }),
          (i = function (t) {
            return s(t, _) ? t[_] : {};
          }),
          (a = function (t) {
            return s(t, _);
          });
      }
      t.exports = { set: r, get: i, has: a, enforce: h, getterFor: v };
    },
    "6b5d": function (t, e, n) {
      "use strict";
      var r = n("5170"),
        i = n.n(r);
      e["default"] = i.a;
    },
    "6b75": function (t, e, n) {
      "use strict";
      function r(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    "6d61": function (t, e, n) {
      "use strict";
      var r = n("23e7"),
        i = n("da84"),
        a = n("94ca"),
        o = n("6eeb"),
        c = n("f183"),
        u = n("2266"),
        l = n("19aa"),
        s = n("861d"),
        f = n("d039"),
        p = n("1c7e"),
        d = n("d44e"),
        h = n("7156");
      t.exports = function (t, e, n) {
        var v = -1 !== t.indexOf("Map"),
          b = -1 !== t.indexOf("Weak"),
          m = v ? "set" : "add",
          g = i[t],
          y = g && g.prototype,
          _ = g,
          w = {},
          x = function (t) {
            var e = y[t];
            o(
              y,
              t,
              "add" == t
                ? function (t) {
                    return e.call(this, 0 === t ? 0 : t), this;
                  }
                : "delete" == t
                ? function (t) {
                    return !(b && !s(t)) && e.call(this, 0 === t ? 0 : t);
                  }
                : "get" == t
                ? function (t) {
                    return b && !s(t) ? void 0 : e.call(this, 0 === t ? 0 : t);
                  }
                : "has" == t
                ? function (t) {
                    return !(b && !s(t)) && e.call(this, 0 === t ? 0 : t);
                  }
                : function (t, n) {
                    return e.call(this, 0 === t ? 0 : t, n), this;
                  }
            );
          };
        if (
          a(
            t,
            "function" != typeof g ||
              !(
                b ||
                (y.forEach &&
                  !f(function () {
                    new g().entries().next();
                  }))
              )
          )
        )
          (_ = n.getConstructor(e, t, v, m)), (c.REQUIRED = !0);
        else if (a(t, !0)) {
          var O = new _(),
            T = O[m](b ? {} : -0, 1) != O,
            E = f(function () {
              O.has(1);
            }),
            k = p(function (t) {
              new g(t);
            }),
            j =
              !b &&
              f(function () {
                var t = new g(),
                  e = 5;
                while (e--) t[m](e, e);
                return !t.has(-0);
              });
          k ||
            ((_ = e(function (e, n) {
              l(e, _, t);
              var r = h(new g(), e, _);
              return void 0 != n && u(n, r[m], r, v), r;
            })),
            (_.prototype = y),
            (y.constructor = _)),
            (E || j) && (x("delete"), x("has"), v && x("get")),
            (j || T) && x(m),
            b && y.clear && delete y.clear;
        }
        return (
          (w[t] = _),
          r({ global: !0, forced: _ != g }, w),
          d(_, t),
          b || n.setStrong(_, t, v),
          _
        );
      };
    },
    "6da8": function (t, e) {
      function n(t) {
        return t.split("");
      }
      t.exports = n;
    },
    "6eeb": function (t, e, n) {
      var r = n("da84"),
        i = n("9112"),
        a = n("5135"),
        o = n("ce4e"),
        c = n("8925"),
        u = n("69f3"),
        l = u.get,
        s = u.enforce,
        f = String(String).split("String");
      (t.exports = function (t, e, n, c) {
        var u = !!c && !!c.unsafe,
          l = !!c && !!c.enumerable,
          p = !!c && !!c.noTargetGet;
        "function" == typeof n &&
          ("string" != typeof e || a(n, "name") || i(n, "name", e),
          (s(n).source = f.join("string" == typeof e ? e : ""))),
          t !== r
            ? (u ? !p && t[e] && (l = !0) : delete t[e],
              l ? (t[e] = n) : i(t, e, n))
            : l
            ? (t[e] = n)
            : o(e, n);
      })(Function.prototype, "toString", function () {
        return ("function" == typeof this && l(this).source) || c(this);
      });
    },
    "6f23": function (t, e, n) {
      var r = n("de54");
      "string" === typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
      var i = n("499e").default;
      i("8202c86c", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    7037: function (t, e, n) {
      function r(e) {
        return (
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? (t.exports = r =
                function (t) {
                  return typeof t;
                })
            : (t.exports = r =
                function (t) {
                  return t &&
                    "function" === typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          r(e)
        );
      }
      n("a4d3"),
        n("e01a"),
        n("d28b"),
        n("d3b7"),
        n("3ca3"),
        n("ddb0"),
        (t.exports = r);
    },
    7156: function (t, e, n) {
      var r = n("861d"),
        i = n("d2bb");
      t.exports = function (t, e, n) {
        var a, o;
        return (
          i &&
            "function" == typeof (a = e.constructor) &&
            a !== n &&
            r((o = a.prototype)) &&
            o !== n.prototype &&
            i(t, o),
          t
        );
      };
    },
    7418: function (t, e) {
      e.f = Object.getOwnPropertySymbols;
    },
    "746f": function (t, e, n) {
      var r = n("428f"),
        i = n("5135"),
        a = n("e538"),
        o = n("9bf2").f;
      t.exports = function (t) {
        var e = r.Symbol || (r.Symbol = {});
        i(e, t) || o(e, t, { value: a.f(t) });
      };
    },
    "752e": function (t, e, n) {
      var r = n("24fb");
      (e = r(!1)),
        e.push([
          t.i,
          ".relation-picker[data-v-9c2f2ea0]{width:100%;height:100%;background-color:#fff;box-shadow:-2px 0 4px -2px rgba(0,0,0,.15);border-left:1px solid #eee}.relation-picker-head[data-v-9c2f2ea0]{display:flex;align-items:center;height:60px;line-height:59px;font-size:1.14285714em;padding:0 20px;border-bottom:1px solid #eee}.relation-picker-head_title[data-v-9c2f2ea0]{position:relative;flex:1}.relation-picker-head_modify[data-v-9c2f2ea0]{color:#000;cursor:pointer;font-size:13px}.relation-picker-head_modify[data-v-9c2f2ea0]:hover{color:var(--cxd-blue)}.relation-picker-head_modify_plus[data-v-9c2f2ea0]{font-size:16px}.relation-picker-body[data-v-9c2f2ea0]{height:calc(100% - 60px);padding:20px;overflow-y:auto}.relation-picker-body_searcher[data-v-9c2f2ea0]{border-bottom:1px solid #eee}.relation-picker-body_searcher_input[data-v-9c2f2ea0]{height:32px}.relation-picker-body_list[data-v-9c2f2ea0]{overflow-y:auto}.relation-picker-body_title[data-v-9c2f2ea0]{margin-top:20px;margin-bottom:10px}",
          "",
        ]),
        (t.exports = e);
    },
    "76dd": function (t, e, n) {
      var r = n("ce86");
      function i(t) {
        return null == t ? "" : r(t);
      }
      t.exports = i;
    },
    7839: function (t, e) {
      t.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf",
      ];
    },
    7948: function (t, e) {
      function n(t, e) {
        var n = -1,
          r = null == t ? 0 : t.length,
          i = Array(r);
        while (++n < r) i[n] = e(t[n], n, t);
        return i;
      }
      t.exports = n;
    },
    7962: function (t, e, n) {
      var r = n("e092");
      "string" === typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
      var i = n("499e").default;
      i("7c94e96e", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "79ae": function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return lt;
      }),
        n.d(e, "a", function () {
          return $;
        });
      var r = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticClass: "ocr-label-picker" }, [
            n(
              "div",
              { staticClass: "ocr-label-picker-head" },
              [
                n("span", { staticClass: "ocr-label-picker-head_title" }, [
                  t._v("标签栏"),
                ]),
                t.state.modifyLabelsVisible
                  ? n(
                      "the-button",
                      {
                        directives: [
                          {
                            name: "permission",
                            rawName: "v-permission",
                            value: { label: "write" },
                            expression: "{label: 'write'}",
                          },
                        ],
                        staticClass: "ocr-label-picker-head_modify",
                        on: { click: t.handleModifyClick },
                      },
                      [t._v(" 添加/编辑标签 ")]
                    )
                  : t._e(),
              ],
              1
            ),
            n("div", { staticClass: "ocr-label-picker-body" }, [
              n(
                "div",
                { staticClass: "ocr-label-picker-body_searcher" },
                [
                  n(
                    "the-input",
                    {
                      staticClass: "ocr-label-picker-body_searcher_input",
                      attrs: { placeholder: "请输入标签名" },
                      model: {
                        value: t.state.keyword,
                        callback: function (e) {
                          t.$set(t.state, "keyword", e);
                        },
                        expression: "state.keyword",
                      },
                    },
                    [
                      n("the-icon", {
                        attrs: { slot: "postfix", name: "search" },
                        slot: "postfix",
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              n(
                "div",
                { staticClass: "ocr-label-picker-body_list" },
                t._l(t.labelList, function (e) {
                  return n("LabelItem", {
                    key: "ocr_label_item_" + e.id + "}",
                    attrs: {
                      contents: t.getLabelContent(e),
                      label: e,
                      ocrText: t.ocrText,
                      hasNewAnnotation: t.hasNewAnnotation,
                      activeLabel: t.state.activeLabel,
                    },
                    on: {
                      "content:active": t.handleContentActive,
                      "content:delete": t.handleContentDelete,
                      "content:cancel": t.handleContentCancel,
                      "label:top": t.handleLabelTop,
                      "label:click": t.handleLabelClick,
                      change: t.handleLabelChange,
                    },
                  });
                }),
                1
              ),
            ]),
          ]);
        },
        i = [],
        a =
          (n("4de4"),
          n("7db0"),
          n("4160"),
          n("c975"),
          n("fb6a"),
          n("b0c0"),
          n("a9e3"),
          n("159b"),
          n("96cf"),
          n("1da1")),
        o = n("5530"),
        c = n("2909"),
        u = n("f24d"),
        l = n("d736"),
        s = n("8165"),
        f = n("af58"),
        p = n("9300"),
        d = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "the-modal",
            { ref: "modal", staticClass: "ocr-labels-modify" },
            [
              n("template", { slot: "head" }, [t._v("添加/编辑标签")]),
              n(
                "div",
                {
                  staticClass: "ocr-labels-modify_body",
                  attrs: { slot: "body" },
                  slot: "body",
                },
                [
                  n(
                    "div",
                    { staticClass: "ocr-labels-modify_list" },
                    [
                      n(
                        "the-table",
                        {
                          staticClass: "ocr-label-table",
                          attrs: { source: t.cstate.labels },
                        },
                        [
                          n(
                            "the-column",
                            {
                              staticClass: "ocr-label-table_content",
                              scopedSlots: t._u([
                                {
                                  key: "render",
                                  fn: function (e) {
                                    var r = e.row;
                                    return [
                                      r.isEdit
                                        ? [
                                            n("LabelEditer", {
                                              attrs: {
                                                showColor: !0,
                                                value: r,
                                              },
                                              on: {
                                                change: function (e) {
                                                  return t.handleLabelChange(
                                                    e,
                                                    r
                                                  );
                                                },
                                                cancel: function () {
                                                  return t.handleEditCancel(r);
                                                },
                                              },
                                            }),
                                          ]
                                        : n(
                                            "div",
                                            {
                                              staticClass:
                                                "ocr-label-table_name",
                                              on: {
                                                click: function (e) {
                                                  return t.handleToEdit(r);
                                                },
                                              },
                                            },
                                            [
                                              n("div", {
                                                staticClass:
                                                  "ocr-label-table_color_block",
                                                style: {
                                                  "background-color": r.color,
                                                },
                                              }),
                                              n(
                                                "div",
                                                {
                                                  staticClass:
                                                    "ocr-label-table_name_txt",
                                                },
                                                [t._v(" " + t._s(r.name) + " ")]
                                              ),
                                            ]
                                          ),
                                    ];
                                  },
                                },
                              ]),
                            },
                            [t._v(" 标签名称 ")]
                          ),
                          n(
                            "the-column",
                            {
                              staticClass: "ocr-label-table_type",
                              scopedSlots: t._u([
                                {
                                  key: "render",
                                  fn: function (e) {
                                    var r = e.row;
                                    return [
                                      r.isEdit
                                        ? [
                                            n(
                                              "the-dropdown",
                                              {
                                                attrs: { value: r.labelType },
                                                on: {
                                                  change: function (e) {
                                                    return t.handleItemTypeChange(
                                                      r,
                                                      e
                                                    );
                                                  },
                                                },
                                              },
                                              t._l(t.labelTypes, function (e) {
                                                return n(
                                                  "the-dropdown-item",
                                                  {
                                                    key: "dropdown-" + e.id,
                                                    attrs: { value: e.id },
                                                  },
                                                  [
                                                    t._v(
                                                      " " + t._s(e.label) + " "
                                                    ),
                                                  ]
                                                );
                                              }),
                                              1
                                            ),
                                          ]
                                        : [
                                            t._v(
                                              " " +
                                                t._s(
                                                  t.getTypeLabel(r.labelType)
                                                ) +
                                                " "
                                            ),
                                          ],
                                    ];
                                  },
                                },
                              ]),
                            },
                            [t._v(" 类型 ")]
                          ),
                          n(
                            "the-column",
                            {
                              staticClass: "ocr-label-table_opts",
                              scopedSlots: t._u([
                                {
                                  key: "render",
                                  fn: function (e) {
                                    var r = e.row;
                                    return [
                                      r.isEdit
                                        ? t._e()
                                        : [
                                            n(
                                              "the-link",
                                              {
                                                on: {
                                                  click: function (e) {
                                                    return t.handleToEdit(r);
                                                  },
                                                },
                                              },
                                              [t._v("编辑")]
                                            ),
                                            n(
                                              "the-link",
                                              {
                                                staticClass: "label-del-link",
                                                on: {
                                                  click: function (e) {
                                                    return t.handleConfirmDestroy(
                                                      r
                                                    );
                                                  },
                                                },
                                              },
                                              [t._v("删除")]
                                            ),
                                          ],
                                    ];
                                  },
                                },
                              ]),
                            },
                            [t._v(" 操作 ")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  n(
                    "div",
                    { staticClass: "ocr-labels-modify_bottom" },
                    [
                      t.state.newLabelDisabled
                        ? t._e()
                        : n(
                            "the-button",
                            {
                              staticClass: "secondary",
                              on: { click: t.handleNewLabelClick },
                            },
                            [
                              n(
                                "span",
                                {
                                  staticClass: "ocr-labels-modify_bottom_plus",
                                },
                                [t._v("+")]
                              ),
                              t._v(" 添加新标签 "),
                            ]
                          ),
                    ],
                    1
                  ),
                ]
              ),
              n(
                "div",
                {
                  staticClass: "ocr-labels-modify_foot",
                  attrs: { slot: "foot" },
                  slot: "foot",
                },
                [n("the-button", { on: { click: t.close } }, [t._v(" 确定 ")])],
                1
              ),
            ],
            2
          );
        },
        h = [],
        v = (n("caad"), n("d81d"), n("d3b7"), n("2532"), n("d4ec")),
        b = n("8d2c"),
        m = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            {
              staticClass: "label-picker-editer",
              on: {
                click: function (t) {
                  t.preventDefault(), t.stopPropagation();
                },
              },
            },
            [
              t.color.enable
                ? n("LabelColor", {
                    attrs: { color: t.color.color },
                    on: {
                      change: function (e) {
                        t.color.color = e;
                      },
                    },
                  })
                : t._e(),
              n("InlineEditor", {
                staticClass: "label-name_editor",
                attrs: { save: t.handleSaveClick, icon: "" },
                on: {
                  mutate: t.handleNameMutate,
                  cancel: function (e) {
                    return t.$emit("cancel");
                  },
                },
                model: {
                  value: t.labelName,
                  callback: function (e) {
                    t.labelName = e;
                  },
                  expression: "labelName",
                },
              }),
              n(
                "the-form",
                { ref: "form", attrs: { rules: t.rules } },
                [
                  n(
                    "the-field",
                    { attrs: { passive: "", name: "name" } },
                    [
                      n("the-input", {
                        attrs: { type: "hidden" },
                        model: {
                          value: t.labelName,
                          callback: function (e) {
                            t.labelName = e;
                          },
                          expression: "labelName",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        g = [],
        y = n("8814"),
        _ = function () {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r(
            "div",
            {
              ref: "root",
              staticClass: "label-picker-color",
              class: { open: t.pickr.open },
            },
            [
              r("div", { ref: "pickrEl", staticClass: "pickr" }),
              r("img", {
                staticClass: "arrow",
                attrs: { src: n("5b9c") },
                on: { mousedown: t.toggle },
              }),
            ]
          );
        },
        w = [],
        x = (n("25f0"), n("7f75"), n("eae0")),
        O = n.n(x),
        T = "#1A73E8",
        E = { i18n: { "btn:save": "保存", "btn:cancel": "清除" } },
        k = function (t, e) {
          var n = Object(s["getCurrentInstance"])().proxy,
            r = Object(s["reactive"])({
              instance: null,
              open: !1,
              closing: !1,
            });
          return (
            Object(s["onMounted"])(function () {
              (r.instance = O.a.create(
                Object(o["a"])(
                  {
                    el: t.value,
                    theme: "nano",
                    defaultRepresentation: "HEXA",
                    default: e || T,
                    swatches: [
                      T,
                      "#7D29C9",
                      "#1BB3D8",
                      "#18BF1A",
                      "#FFCC01",
                      "#FF9A0B",
                      "#FF2C61",
                    ],
                    position: "bottom-start",
                    components: {
                      preview: !0,
                      opacity: !1,
                      hue: !0,
                      interaction: {
                        hex: !1,
                        rgba: !1,
                        hsva: !1,
                        input: !0,
                        clear: !1,
                        save: !0,
                        cancel: !0,
                      },
                    },
                  },
                  E
                )
              )),
                r.instance
                  .on("save", function (t) {
                    r.instance.hide();
                    var e = t.toHEXA().toString();
                    n.$emit("change", e);
                  })
                  .on("cancel", function () {
                    r.instance.hide();
                  })
                  .on("show", function () {
                    r.open = !0;
                  })
                  .on("hide", function () {
                    (r.open = !1),
                      (r.closing = !0),
                      setTimeout(function () {
                        r.closing = !1;
                      }, 200);
                  }),
                n.$emit("change", e);
            }),
            r
          );
        },
        j = Object(s["defineComponent"])({
          props: { color: { type: String, default: T } },
          setup: function (t) {
            var e = Object(s["ref"])(null),
              n = Object(s["ref"])(null),
              r = k(n, t.color);
            return {
              root: e,
              pickrEl: n,
              pickr: r,
              toggle: function () {
                setTimeout(function () {
                  var t;
                  if (!r.closing) {
                    var n =
                      null === (t = e.value) || void 0 === t
                        ? void 0
                        : t.querySelector(".pickr button");
                    null === n || void 0 === n || n.click();
                  }
                }, 100);
              },
            };
          },
        }),
        C = j,
        S = (n("9765"), n("f4a6"), n("2877")),
        I = Object(S["a"])(C, _, w, !1, null, "5f5b6b2b", null),
        A = I.exports,
        L = n("66c7"),
        N = n.n(L),
        R = n("8607"),
        M = function (t) {
          var e = t.enable,
            n = t.defColor,
            r = Object(s["reactive"])({ enable: e, color: e ? n : void 0 });
          return r;
        },
        D = Object(s["defineComponent"])({
          model: { prop: "value", event: "change" },
          components: { InlineEditor: b["InlineEditor"], LabelColor: A },
          props: {
            value: { required: !0, type: Object },
            showColor: { type: Boolean, default: !1 },
          },
          setup: function (t, e) {
            var n = e.emit,
              r = Object(y["useT"])(),
              i = Object(u["useToast"])(),
              o = i.fail,
              c = Object(s["computed"])(function () {
                return {
                  name: [
                    { required: !0, message: "".concat(r("name"), "不能为空") },
                    { max: 256, message: "标签支持长度不超过256字符" },
                  ],
                };
              }),
              l = M({ enable: t.showColor, defColor: t.value.color || T }),
              f = Object(s["ref"])(t.value.name),
              p = Object(s["ref"])(null),
              d = Object(s["computed"])({
                get: function () {
                  return f.value;
                },
                set: function (t) {
                  return (f.value = t);
                },
              }),
              h = (function () {
                var t = Object(a["a"])(
                  regeneratorRuntime.mark(function t() {
                    var e, r, i;
                    return regeneratorRuntime.wrap(function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (!p.value) {
                              t.next = 12;
                              break;
                            }
                            return (t.next = 3), Object(R["c"])(200);
                          case 3:
                            return (t.next = 5), p.value.submit();
                          case 5:
                            if (
                              ((e = t.sent),
                              (r = e.hasError),
                              (i = e.errors),
                              !r)
                            ) {
                              t.next = 11;
                              break;
                            }
                            return o(i.name[0]), t.abrupt("return");
                          case 11:
                            n("change", { name: d.value, color: l.color });
                          case 12:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function () {
                  return t.apply(this, arguments);
                };
              })(),
              v = function (t) {
                f.value = N()(t);
              };
            return {
              rules: c,
              form: p,
              labelName: d,
              color: l,
              handleSaveClick: h,
              handleNameMutate: v,
            };
          },
        }),
        P = D,
        U = (n("bc76"), n("6b5d")),
        B = Object(S["a"])(P, m, g, !1, null, "773c8579", null);
      "function" === typeof U["default"] && Object(U["default"])(B);
      var F = B.exports,
        z = "#1A73E8",
        X = Object(s["defineComponent"])({
          components: { LabelEditer: F },
          props: {
            labels: { type: Object, required: !0 },
            handleChange: { type: Function, required: !0 },
            destroyLabel: { type: Function, required: !0 },
          },
          setup: function (t) {
            var e = Object(s["ref"])(null),
              n = function t() {
                Object(v["a"])(this, t),
                  (this.id = ""),
                  (this.name = ""),
                  (this.labelType = f["b"].text),
                  (this.color = z),
                  (this.isEdit = !0);
              },
              r = Object(s["reactive"])({
                newLabelDisabled: !1,
                newLabel: new n(),
                editLabelIds: [],
              }),
              i = Object(s["reactive"])({
                labels: Object(s["computed"])(function () {
                  var e = Object(c["a"])(t.labels.value);
                  return (
                    r.newLabelDisabled && e.push(r.newLabel),
                    e.map(function (t) {
                      return Object(o["a"])(
                        Object(o["a"])({}, t),
                        {},
                        { isEdit: !t.id || r.editLabelIds.includes(t.id) }
                      );
                    })
                  );
                }),
              }),
              u = function (t) {
                r.editLabelIds.push(t.id);
              },
              l = function (t) {
                (null === t || void 0 === t ? void 0 : t.id)
                  ? (r.editLabelIds = r.editLabelIds.filter(function (e) {
                      return e !== t.id;
                    }))
                  : ((r.newLabelDisabled = !1), (r.newLabel = new n()));
              },
              p = (function () {
                var e = Object(a["a"])(
                  regeneratorRuntime.mark(function e(n, r) {
                    return regeneratorRuntime.wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              t.handleChange(
                                Object(o["a"])(Object(o["a"])({}, r), n)
                              )
                            );
                          case 2:
                            l(r);
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
              d = function (e, n) {
                e.id
                  ? t.handleChange(
                      Object(o["a"])(
                        Object(o["a"])({}, e),
                        {},
                        { labelType: n }
                      )
                    )
                  : (r.newLabel.labelType = n);
              },
              h = Object(b["useConfirmDestroy"])(
                (function () {
                  var e = Object(a["a"])(
                    regeneratorRuntime.mark(function e(n) {
                      var r;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), t.destroyLabel(n);
                            case 2:
                              if (((r = e.sent), r)) {
                                e.next = 5;
                                break;
                              }
                              return e.abrupt("return", Promise.reject());
                            case 5:
                              return e.abrupt("return", Promise.resolve(!0));
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()
              );
            return {
              modal: e,
              state: r,
              cstate: i,
              getTypeLabel: function (t) {
                return f["b"].getLabelById(t) || "-";
              },
              labelTypes: f["b"].toArray(),
              handleToEdit: u,
              handleConfirmDestroy: h,
              handleNewLabelClick: function () {
                r.newLabelDisabled = !0;
              },
              handleEditCancel: l,
              handleItemTypeChange: d,
              handleLabelChange: p,
              close: function () {
                e.value && e.value.close();
              },
            };
          },
        }),
        V = X,
        G = (n("5e06"), Object(S["a"])(V, d, h, !1, null, "1d3e4f6a", null)),
        $ = G.exports,
        q = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            {
              staticClass: "ocr-label-item",
              on: {
                click: function (e) {
                  return e.stopPropagation(), t.$emit("label:click", t.label);
                },
              },
            },
            [
              n("div", {
                staticClass: "ocr-label_colorblock",
                style: { "background-color": t.label.color },
              }),
              n("div", { staticClass: "ocr-label-item_title" }, [
                n("div", { staticClass: "orc-label-name" }, [
                  t._v(" " + t._s(t.label.name) + " "),
                ]),
                n(
                  "div",
                  { staticClass: "ocr-label-opts" },
                  [
                    n("the-icon", {
                      directives: [
                        {
                          name: "permission",
                          rawName: "v-permission",
                          value: "write",
                          expression: "'write'",
                        },
                      ],
                      attrs: { name: "top", title: "置顶" },
                      on: {
                        click: function (e) {
                          return t.$emit("label:top", t.label);
                        },
                      },
                    }),
                  ],
                  1
                ),
              ]),
              n(
                "div",
                { staticClass: "ocr-label-item_contents" },
                [
                  t._l(t.contents, function (e, r) {
                    return n(
                      "div",
                      {
                        key: r + "_" + e.content,
                        staticClass: "ocr-content",
                        class: { "ocr-content-editing": e.isEdit },
                        on: {
                          click: function (t) {
                            t.stopPropagation();
                          },
                        },
                      },
                      [
                        e.isEdit
                          ? n("ContentEditer", {
                              ref: "editor",
                              refInFor: !0,
                              attrs: { content: t.editContent },
                              on: {
                                save: function (n) {
                                  return t.handleSaveClick(n, e);
                                },
                                cancel: function (e) {
                                  return t.$emit("content:cancel");
                                },
                              },
                            })
                          : [
                              n("div", { staticClass: "ocr-content-item" }, [
                                n("div", { staticClass: "ocr-content-txt" }, [
                                  t._v(" " + t._s(e.content) + " "),
                                ]),
                                n(
                                  "div",
                                  { staticClass: "ocr-content-ops" },
                                  [
                                    n("the-icon", {
                                      attrs: { name: "edit", title: "编辑" },
                                      on: {
                                        click: function (n) {
                                          return t.$emit("content:active", e);
                                        },
                                      },
                                    }),
                                    n("the-icon", {
                                      staticClass: "ocr-content-trash",
                                      attrs: { name: "trash-2", title: "删除" },
                                      on: {
                                        click: function (n) {
                                          return t.$emit("content:delete", e);
                                        },
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]),
                            ],
                      ],
                      2
                    );
                  }),
                  t.cstate.activeNew
                    ? n(
                        "div",
                        {
                          staticClass: "ocr-content ocr-content-editing",
                          on: {
                            click: function (t) {
                              t.stopPropagation();
                            },
                          },
                        },
                        [
                          n("ContentEditer", {
                            ref: "editor",
                            attrs: { content: t.ocrText },
                            on: {
                              save: t.handleNewClick,
                              cancel: function (e) {
                                return t.$emit("content:cancel");
                              },
                            },
                          }),
                        ],
                        1
                      )
                    : t._e(),
                ],
                2
              ),
            ]
          );
        },
        H = [],
        W = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticClass: "content-editer" }, [
            n(
              "div",
              {
                ref: "input",
                staticClass: "editer-input",
                attrs: { contenteditable: "" },
                on: {
                  keydown: function (e) {
                    return !e.type.indexOf("key") &&
                      t._k(e.keyCode, "enter", 13, e.key, "Enter")
                      ? null
                      : (e.stopPropagation(),
                        e.preventDefault(),
                        t.handleSaveClick(e));
                  },
                },
              },
              [t._v(" " + t._s(t.content) + " ")]
            ),
            n(
              "div",
              { staticClass: "editer-icons" },
              [
                n("the-icon", {
                  staticClass: "editer-icon icon-save",
                  attrs: { name: "check" },
                  on: { click: t.handleSaveClick },
                }),
                n("the-icon", {
                  staticClass: "editer-icon",
                  attrs: { name: "times" },
                  on: {
                    click: function (e) {
                      return t.$emit("cancel");
                    },
                  },
                }),
              ],
              1
            ),
          ]);
        },
        K = [],
        Y = n("2ef0"),
        J = Object(s["defineComponent"])({
          props: { content: { type: String, default: "" } },
          setup: function (t, e) {
            var n = e.emit,
              r = Object(s["ref"])(null),
              i = function () {
                if (r.value && (r.value.focus(), t.content)) {
                  var e = document.createRange();
                  e.selectNodeContents(r.value), e.collapse(!1);
                  var n = window.getSelection();
                  n && (n.removeAllRanges(), n.addRange(e));
                }
              };
            return (
              Object(s["onMounted"])(function () {}),
              {
                input: r,
                handleSaveClick: function () {
                  var t,
                    e = Object(Y["trim"])(
                      null === (t = r.value) || void 0 === t
                        ? void 0
                        : t.innerText
                    );
                  e && r.value && n("save", e);
                },
                toFocus: i,
              }
            );
          },
        }),
        Z = J,
        Q = (n("d552"), Object(S["a"])(Z, W, K, !1, null, "ea571a28", null)),
        tt = Q.exports,
        et = n("3f78"),
        nt = Object(s["defineComponent"])({
          components: { ContentEditer: tt, InlineEditor: b["InlineEditor"] },
          props: {
            contents: { required: !0, type: Array },
            label: { required: !0, type: Object },
            activeLabel: { default: null, type: Object },
            hasNewAnnotation: { required: !1, type: Boolean },
            ocrText: { required: !1, default: "" },
          },
          setup: function (t, e) {
            var n = e.emit,
              r = Object(s["ref"])(null),
              i = Object(s["reactive"])({
                editContent: "",
                activeNew: Object(s["computed"])(function () {
                  var e;
                  return (
                    (null === (e = t.activeLabel) || void 0 === e
                      ? void 0
                      : e.id) === t.label.id && t.hasNewAnnotation
                  );
                }),
              }),
              a = Object(s["computed"])({
                get: function () {
                  if (i.editContent) return i.editContent;
                  var e = t.contents.find(function (t) {
                    return t.isEdit;
                  });
                  return e ? e.content : void 0;
                },
                set: function (t) {
                  t && (i.editContent = t);
                },
              }),
              c = function (e) {
                e &&
                  n(
                    "change",
                    Object(o["a"])(
                      Object(o["a"])({}, t.activeLabel),
                      {},
                      { contentId: Object(et["a"])(), content: e }
                    )
                  );
              },
              u = function (t, e) {
                t &&
                  n(
                    "change",
                    Object(o["a"])(
                      Object(o["a"])({}, e),
                      {},
                      { contentId: Object(et["a"])(), content: t }
                    )
                  );
              };
            return (
              Object(s["watch"])(
                function () {
                  return t.ocrText;
                },
                function (t) {
                  i.editContent = t;
                },
                { immediate: !0 }
              ),
              {
                editor: r,
                cstate: i,
                editContent: a,
                handleSaveClick: u,
                handleNewClick: c,
              }
            );
          },
        }),
        rt = nt,
        it = (n("4c39"), Object(S["a"])(rt, q, H, !1, null, "1b957081", null)),
        at = it.exports,
        ot = Object(s["defineComponent"])({
          components: { LabelItem: at },
          props: {
            annotations: { required: !0, type: Array },
            activatedAnnotation: { required: !1, type: Object },
            templateType: { type: Number, default: l["TemplateType"].IMG_CLS },
            datasetId: { required: !0, type: Number },
            hasNewAnnotation: { required: !1, type: Boolean },
            ocrText: { required: !1, default: "" },
          },
          setup: function (t, e) {
            var n = e.emit,
              r = Object(u["useModal"])($, {
                group: "ModifyLabels",
                datasetId: t.datasetId,
              }),
              i = Object(p["f"])(),
              l = Object(s["reactive"])({
                keyword: "",
                topLabelIds: [],
                activeLabel: null,
                modifyLabelsVisible: Object(s["computed"])(function () {
                  return !i.env;
                }),
              }),
              d = Object(f["d"])(t.datasetId, { tType: t.templateType }),
              h = d.labels,
              v = d.loaded,
              b = d.model,
              m = d.updateLables,
              g = Object(s["computed"])(function () {
                var t = Object(c["a"])(h.value);
                return (
                  l.keyword &&
                    (t = h.value.filter(function (t) {
                      return !l.keyword || t.name.indexOf(l.keyword) > -1;
                    })),
                  l.topLabelIds.length &&
                    t.sort(function (t, e) {
                      var n = l.topLabelIds.indexOf(t.id),
                        r = l.topLabelIds.indexOf(e.id);
                      return r > n ? 1 : r === n ? 0 : -1;
                    }),
                  t
                );
              }),
              y = function (e) {
                for (var n = [], r = 0; r < t.annotations.length; r++) {
                  var i = Object(o["a"])({}, t.annotations[r]);
                  i.id === e.id &&
                    ((i.isEdit =
                      t.activatedAnnotation &&
                      t.activatedAnnotation.contentId === i.contentId),
                    n.push(i));
                }
                return n;
              },
              _ = function (e) {
                t.hasNewAnnotation && (l.activeLabel = e);
              };
            Object(s["watch"])(
              function () {
                return t.activatedAnnotation;
              },
              function (t) {
                l.activeLabel =
                  (t &&
                    h.value.find(function (e) {
                      return e.id === t.id;
                    })) ||
                  null;
              },
              { immediate: !0 }
            );
            var w = function (t) {
                (l.activeLabel = null), n("change", t);
              },
              x = function (t) {
                (l.activeLabel = null), n("active", t);
              },
              O = function (t) {
                n("delete", t);
              },
              T = function () {
                (l.activeLabel = null), n("active", null);
              },
              E = function (t) {
                var e = l.topLabelIds.indexOf(t.id);
                e > -1
                  ? (l.topLabelIds = l.topLabelIds.slice(e, 1))
                  : l.topLabelIds.push(t.id);
              };
            return {
              labelList: g,
              loaded: v,
              state: l,
              getLabelContent: y,
              handleLabelClick: _,
              handleLabelChange: w,
              handleContentActive: x,
              handleContentDelete: O,
              handleContentCancel: T,
              handleLabelTop: E,
              handleModifyClick: function () {
                r({
                  props: {
                    labels: h,
                    handleChange: function (e) {
                      var n = b.updateOne(
                          Object(o["a"])(
                            Object(o["a"])({}, e),
                            {},
                            { datasetId: t.datasetId }
                          )
                        ),
                        r = n.result;
                      r.then(function (t) {
                        "id" in t && m();
                      });
                    },
                    destroyLabel: (function () {
                      var e = Object(a["a"])(
                        regeneratorRuntime.mark(function e(r) {
                          var i, a, o;
                          return regeneratorRuntime.wrap(function (e) {
                            while (1)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (i = g.value.find(function (t) {
                                      return t.id === r;
                                    })),
                                    (e.next = 3),
                                    Object(f["c"])(b, {
                                      datasetId: t.datasetId,
                                      id: r,
                                    })
                                  );
                                case 3:
                                  return (
                                    (a = e.sent),
                                    a &&
                                      i &&
                                      ((o = y(i)),
                                      o.forEach(function (t) {
                                        return n("delete", t);
                                      })),
                                    e.abrupt("return", a)
                                  );
                                case 6:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      );
                      function r(t) {
                        return e.apply(this, arguments);
                      }
                      return r;
                    })(),
                  },
                });
              },
            };
          },
        }),
        ct = ot,
        ut = (n("11a1"), Object(S["a"])(ct, r, i, !1, null, "26072c72", null)),
        lt = ut.exports;
    },
    "7b0b": function (t, e, n) {
      var r = n("1d80");
      t.exports = function (t) {
        return Object(r(t));
      };
    },
    "7b1c": function (t, e, n) {
      var r = n("ba42");
      "string" === typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
      var i = n("499e").default;
      i("dafa8064", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "7c73": function (t, e, n) {
      var r,
        i = n("825a"),
        a = n("37e8"),
        o = n("7839"),
        c = n("d012"),
        u = n("1be4"),
        l = n("cc12"),
        s = n("f772"),
        f = ">",
        p = "<",
        d = "prototype",
        h = "script",
        v = s("IE_PROTO"),
        b = function () {},
        m = function (t) {
          return p + h + f + t + p + "/" + h + f;
        },
        g = function (t) {
          t.write(m("")), t.close();
          var e = t.parentWindow.Object;
          return (t = null), e;
        },
        y = function () {
          var t,
            e = l("iframe"),
            n = "java" + h + ":";
          return (
            (e.style.display = "none"),
            u.appendChild(e),
            (e.src = String(n)),
            (t = e.contentWindow.document),
            t.open(),
            t.write(m("document.F=Object")),
            t.close(),
            t.F
          );
        },
        _ = function () {
          try {
            r = document.domain && new ActiveXObject("htmlfile");
          } catch (e) {}
          _ = r ? g(r) : y();
          var t = o.length;
          while (t--) delete _[d][o[t]];
          return _();
        };
      (c[v] = !0),
        (t.exports =
          Object.create ||
          function (t, e) {
            var n;
            return (
              null !== t
                ? ((b[d] = i(t)), (n = new b()), (b[d] = null), (n[v] = t))
                : (n = _()),
              void 0 === e ? n : a(n, e)
            );
          });
    },
    "7db0": function (t, e, n) {
      "use strict";
      var r = n("23e7"),
        i = n("b727").find,
        a = n("44d2"),
        o = n("ae40"),
        c = "find",
        u = !0,
        l = o(c);
      c in [] &&
        Array(1)[c](function () {
          u = !1;
        }),
        r(
          { target: "Array", proto: !0, forced: u || !l },
          {
            find: function (t) {
              return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
            },
          }
        ),
        a(c);
    },
    "7dd0": function (t, e, n) {
      "use strict";
      var r = n("23e7"),
        i = n("9ed3"),
        a = n("e163"),
        o = n("d2bb"),
        c = n("d44e"),
        u = n("9112"),
        l = n("6eeb"),
        s = n("b622"),
        f = n("c430"),
        p = n("3f8c"),
        d = n("ae93"),
        h = d.IteratorPrototype,
        v = d.BUGGY_SAFARI_ITERATORS,
        b = s("iterator"),
        m = "keys",
        g = "values",
        y = "entries",
        _ = function () {
          return this;
        };
      t.exports = function (t, e, n, s, d, w, x) {
        i(n, e, s);
        var O,
          T,
          E,
          k = function (t) {
            if (t === d && A) return A;
            if (!v && t in S) return S[t];
            switch (t) {
              case m:
                return function () {
                  return new n(this, t);
                };
              case g:
                return function () {
                  return new n(this, t);
                };
              case y:
                return function () {
                  return new n(this, t);
                };
            }
            return function () {
              return new n(this);
            };
          },
          j = e + " Iterator",
          C = !1,
          S = t.prototype,
          I = S[b] || S["@@iterator"] || (d && S[d]),
          A = (!v && I) || k(d),
          L = ("Array" == e && S.entries) || I;
        if (
          (L &&
            ((O = a(L.call(new t()))),
            h !== Object.prototype &&
              O.next &&
              (f ||
                a(O) === h ||
                (o ? o(O, h) : "function" != typeof O[b] && u(O, b, _)),
              c(O, j, !0, !0),
              f && (p[j] = _))),
          d == g &&
            I &&
            I.name !== g &&
            ((C = !0),
            (A = function () {
              return I.call(this);
            })),
          (f && !x) || S[b] === A || u(S, b, A),
          (p[e] = A),
          d)
        )
          if (((T = { values: k(g), keys: w ? A : k(m), entries: k(y) }), x))
            for (E in T) (v || C || !(E in S)) && l(S, E, T[E]);
          else r({ target: e, proto: !0, forced: v || C }, T);
        return T;
      };
    },
    "7e12": function (t, e, n) {
      var r = n("da84"),
        i = n("58a8").trim,
        a = n("5899"),
        o = r.parseFloat,
        c = 1 / o(a + "-0") !== -1 / 0;
      t.exports = c
        ? function (t) {
            var e = i(String(t)),
              n = o(e);
            return 0 === n && "-" == e.charAt(0) ? -0 : n;
          }
        : o;
    },
    "7e84": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      n("3410");
      function r(t) {
        return (
          (r = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          r(t)
        );
      }
    },
    "7f75": function (t, e, n) {
      var r = n("8f86");
      "string" === typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
      var i = n("499e").default;
      i("d1ee7cc8", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "7f9a": function (t, e, n) {
      var r = n("da84"),
        i = n("8925"),
        a = r.WeakMap;
      t.exports = "function" === typeof a && /native code/.test(i(a));
    },
    8165: function (t, e) {
      t.exports = n;
    },
    "825a": function (t, e, n) {
      var r = n("861d");
      t.exports = function (t) {
        if (!r(t)) throw TypeError(String(t) + " is not an object");
        return t;
      };
    },
    "83ab": function (t, e, n) {
      var r = n("d039");
      t.exports = !r(function () {
        return (
          7 !=
          Object.defineProperty({}, 1, {
            get: function () {
              return 7;
            },
          })[1]
        );
      });
    },
    8418: function (t, e, n) {
      "use strict";
      var r = n("c04e"),
        i = n("9bf2"),
        a = n("5c6c");
      t.exports = function (t, e, n) {
        var o = r(e);
        o in t ? i.f(t, o, a(0, n)) : (t[o] = n);
      };
    },
    "846e": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return c;
      }),
        n.d(e, "d", function () {
          return u;
        }),
        n.d(e, "e", function () {
          return l;
        }),
        n.d(e, "c", function () {
          return s;
        }),
        n.d(e, "b", function () {
          return f;
        });
      n("d81d"), n("ac1f"), n("1276");
      var r,
        i = n("488f"),
        a = n("8165"),
        o = function (t, e) {
          var n = new CustomEvent("afe:notifyRootApp", {
            detail: { key: t, payload: e },
          });
          window.dispatchEvent(n);
        };
      function c(t, e) {
        var n = null == e ? "" : t,
          r = e || t,
          i = Object(a["computed"])(r);
        Object(a["watch"])(
          i,
          function (t) {
            o("breadcrumb", { category: n, items: t });
          },
          { immediate: !0 }
        );
      }
      function u() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        o("sidebar", { activated: t });
      }
      (function (t) {
        (t["VISIT"] = "访问"), (t["CLICK"] = "点击"), (t["USE"] = "使用");
      })(r || (r = {}));
      var l = function (t) {
        var e = function (e, n, r) {
          window._hmt && window._hmt.push(["_trackEvent", t, e, n, r]);
        };
        return { track: e, ACTIONS: r };
      };
      function s() {
        var t = Object(a["getCurrentInstance"])().proxy;
        return Object(a["computed"])(function () {
          var e = t.$route.query.breadcrumb;
          if (e) {
            var n = void 0;
            try {
              n = JSON.parse(decodeURIComponent(e));
            } catch (r) {
              console.warn(r);
            }
            return n;
          }
        });
      }
      function f() {
        var t = Object(i["useGlobalInfo"])(),
          e = t.mt,
          n = void 0 === e ? "" : e,
          r = t.tt,
          a = void 0 === r ? "" : r,
          o = t.mts,
          c = void 0 === o ? "" : o,
          u = t.firstTemplateType,
          l = void 0 === u ? "" : u;
        return {
          tt: +l,
          mt: +n,
          mts: c
            ? c.split(",").map(function (t) {
                return +t;
              })
            : [+n],
          tts: a.split(",").map(function (t) {
            return +t;
          }),
        };
      }
    },
    8607: function (t, e, n) {
      "use strict";
      n.d(e, "c", function () {
        return r;
      }),
        n.d(e, "b", function () {
          return a;
        }),
        n.d(e, "a", function () {
          return o;
        });
      n("caad"),
        n("fb6a"),
        n("d3b7"),
        n("ac1f"),
        n("25f0"),
        n("2532"),
        n("5319");
      var r = function (t) {
          return new Promise(function (e) {
            setTimeout(e, t);
          });
        },
        i = function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
          return ("000" + t).slice(-1 * e);
        },
        a = function (t) {
          if (!t) return "00:00:00";
          var e = function (t) {
              var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 2;
              return ("0" + t).slice(-1 * e);
            },
            n = Math.floor(t / 3600),
            r = Math.floor((t / 60) % 60),
            a = Math.floor(t % 60);
          return e(n, 10) + ":" + i(r) + ":" + i(a);
        },
        o = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "yyyy-MM-dd",
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1e3,
            r = new Date(t * n);
          return r.toString().toLowerCase().includes("invalid date")
            ? "--"
            : e.replace(
                /(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?)/g,
                function (t) {
                  var e = r.getHours();
                  switch (t) {
                    case "hh":
                      return i(e < 13 ? (0 === e ? 12 : e) : e - 12);
                    case "h":
                      return "".concat(e < 13 ? (0 === e ? 12 : e) : e - 12);
                    case "HH":
                      return i(e);
                    case "H":
                      return "".concat(e);
                    case "mm":
                      return i(r.getMinutes());
                    case "m":
                      return "".concat(r.getMinutes());
                    case "ss":
                      return i(r.getSeconds());
                    case "s":
                      return "".concat(r.getSeconds());
                    case "yyyy":
                      return i(r.getFullYear(), 4);
                    case "yy":
                      return i(r.getFullYear());
                    case "dd":
                      return i(r.getDate());
                    case "d":
                      return "".concat(r.getDate());
                    case "MM":
                      return i(r.getMonth() + 1);
                    case "M":
                      return "".concat(r.getMonth() + 1);
                    default:
                      return t;
                  }
                }
              );
        };
    },
    "861d": function (t, e) {
      t.exports = function (t) {
        return "object" === typeof t ? null !== t : "function" === typeof t;
      };
    },
    8814: function (t, e) {
      t.exports = r;
    },
    "88f4": function (t, e, n) {
      "use strict";
      var r = n("1aa8"),
        i = n.n(r);
      i.a;
    },
    8924: function (t, e, n) {
      var r = n("24fb");
      (e = r(!1)),
        e.push([
          t.i,
          ".tre-label-item[data-v-18af0eec]{position:relative;display:flex;padding:5px 12px 5px 14px;margin-bottom:10px;font-size:14px;line-height:22px;border:1px solid #e0e0e0}.tre-label-item .tre-label-colorblock[data-v-18af0eec]{position:absolute;left:0;top:0;bottom:0;width:5px}.tre-label-item .tre-label-name[data-v-18af0eec]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tre-label-item .tre-label-edit[data-v-18af0eec]{display:none;cursor:pointer}.tre-label-item[data-v-18af0eec]:hover{background-color:#f6f6f6}.tre-label-item:hover .tre-label-edit[data-v-18af0eec]{display:flex;align-items:center;margin-left:10px}.tre-label-item:hover .tre-label-edit[data-v-18af0eec]:hover{color:var(--cxd-blue)}.tre-label-item-editing[data-v-18af0eec]{display:flex;flex-direction:row;margin-bottom:10px;align-items:center;border:1px solid var(--cxd-blue)}.tre-label-item-editing .tre-label-item-color[data-v-18af0eec]{border:none;border-right:1px solid var(--cxd-blue)}.tre-label-item-editing .tre-label-item-input[data-v-18af0eec]{display:flex;flex:1}.tre-label-item-editing .tre-label-item-input[data-v-18af0eec]  .s-input{line-height:2em;border:none}.tre-label-item-editing .tre-label-item-link[data-v-18af0eec]{padding:0 2px;font-size:12px;color:var(--cxd-blue)}.tre-label-item-editing .tre-label-item-link[data-v-18af0eec]:hover{color:var(--cxd-blue-hover)}",
          "",
        ]),
        (t.exports = e);
    },
    8925: function (t, e, n) {
      var r = n("c6cd"),
        i = Function.toString;
      "function" != typeof r.inspectSource &&
        (r.inspectSource = function (t) {
          return i.call(t);
        }),
        (t.exports = r.inspectSource);
    },
    "89ad": function (t, e, n) {
      var r = n("24fb");
      (e = r(!1)),
        e.push([
          t.i,
          ".ocr-labels-modify[data-v-1d3e4f6a]  .s-modal_main{width:720px}.ocr-labels-modify[data-v-1d3e4f6a]  .s-empty-placeholder{padding:20px 0}.ocr-labels-modify_bottom[data-v-1d3e4f6a]{margin-top:7px}.ocr-labels-modify .label-del-link[data-v-1d3e4f6a]{color:#666;margin-left:16px}.ocr-labels-modify .ocr-label-table[data-v-1d3e4f6a]{table-layout:flex}.ocr-labels-modify .ocr-label-table .ocr-label-table_content[data-v-1d3e4f6a]{width:400px}.ocr-labels-modify .ocr-label-table .ocr-label-table_type[data-v-1d3e4f6a]{width:150px}.ocr-labels-modify .ocr-label-table .ocr-label-table_opts[data-v-1d3e4f6a]{width:160px}.ocr-labels-modify .ocr-label-table .ocr-label-table_name[data-v-1d3e4f6a]{position:relative}.ocr-labels-modify .ocr-label-table .ocr-label-table_name .ocr-label-table_color_block[data-v-1d3e4f6a]{position:absolute;left:0;width:3px;top:5px;bottom:3px}.ocr-labels-modify .ocr-label-table .ocr-label-table_name .ocr-label-table_name_txt[data-v-1d3e4f6a]{margin-left:10px}",
          "",
        ]),
        (t.exports = e);
    },
    "89e4": function (t, e, n) {
      "use strict";
      var r = n("074e"),
        i = n.n(r);
      i.a;
    },
    "8aa5": function (t, e, n) {
      "use strict";
      var r = n("6547").charAt;
      t.exports = function (t, e, n) {
        return e + (n ? r(t, e).length : 1);
      };
    },
    "8add": function (t, e, n) {
      "use strict";
      var r = n("2841");
      n.d(e, "a", function () {
        return r["useGetPath"];
      });
    },
    "8ba4": function (t, e, n) {
      var r = n("23e7"),
        i = n("5e89");
      r({ target: "Number", stat: !0 }, { isInteger: i });
    },
    "8bbf": function (t, e) {
      t.exports = i;
    },
    "8d2c": function (t, e) {
      t.exports = a;
    },
    "8f86": function (t, e, n) {
      var r = n("24fb");
      (e = r(!1)),
        e.push([
          t.i,
          '/*! Pickr 1.7.4 MIT | https://github.com/Simonwep/pickr */.pickr{position:relative;overflow:visible;transform:translateY(0)}.pickr *{box-sizing:border-box;outline:none;border:none;-webkit-appearance:none}.pickr .pcr-button{position:relative;height:2em;width:2em;padding:.5em;cursor:pointer;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;border-radius:.15em;background:url(\'data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" stroke="%2342445A" stroke-width="5px" stroke-linecap="round"><path d="M45,45L5,5"></path><path d="M45,5L5,45"></path></svg>\') no-repeat 50%;background-size:0;transition:all .3s}.pickr .pcr-button:before{background:url(\'data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><path fill="white" d="M1,0H2V1H1V0ZM0,1H1V2H0V1Z"/><path fill="gray" d="M0,0H1V1H0V0ZM1,1H2V2H1V1Z"/></svg>\');background-size:.5em;z-index:-1;z-index:auto}.pickr .pcr-button:after,.pickr .pcr-button:before{position:absolute;content:"";top:0;left:0;width:100%;height:100%;border-radius:.15em}.pickr .pcr-button:after{transition:background .3s;background:currentColor}.pickr .pcr-button.clear{background-size:70%}.pickr .pcr-button.clear:before{opacity:0}.pickr .pcr-button.clear:focus{box-shadow:0 0 0 1px hsla(0,0%,100%,.85),0 0 0 3px currentColor}.pickr .pcr-button.disabled{cursor:not-allowed}.pcr-app *,.pickr *{box-sizing:border-box;outline:none;border:none;-webkit-appearance:none}.pcr-app button.pcr-active,.pcr-app button:focus,.pcr-app input.pcr-active,.pcr-app input:focus,.pickr button.pcr-active,.pickr button:focus,.pickr input.pcr-active,.pickr input:focus{box-shadow:0 0 0 1px hsla(0,0%,100%,.85),0 0 0 3px currentColor}.pcr-app .pcr-palette,.pcr-app .pcr-slider,.pickr .pcr-palette,.pickr .pcr-slider{transition:box-shadow .3s}.pcr-app .pcr-palette:focus,.pcr-app .pcr-slider:focus,.pickr .pcr-palette:focus,.pickr .pcr-slider:focus{box-shadow:0 0 0 1px hsla(0,0%,100%,.85),0 0 0 3px rgba(0,0,0,.25)}.pcr-app{position:fixed;display:flex;flex-direction:column;z-index:10000;border-radius:.1em;background:#fff;opacity:0;visibility:hidden;transition:opacity .3s,visibility 0s .3s;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-shadow:0 .15em 1.5em 0 rgba(0,0,0,.1),0 0 1em 0 rgba(0,0,0,.03);left:0;top:0}.pcr-app.visible{transition:opacity .3s;visibility:visible;opacity:1}.pcr-app .pcr-swatches{display:flex;flex-wrap:wrap;margin-top:.75em}.pcr-app .pcr-swatches.pcr-last{margin:0}@supports (display:grid){.pcr-app .pcr-swatches{display:grid;align-items:center;grid-template-columns:repeat(auto-fit,1.75em)}}.pcr-app .pcr-swatches>button{font-size:1em;position:relative;width:calc(1.75em - 5px);height:calc(1.75em - 5px);border-radius:.15em;cursor:pointer;margin:2.5px;flex-shrink:0;justify-self:center;transition:all .15s;overflow:hidden;background:transparent;z-index:1}.pcr-app .pcr-swatches>button:before{position:absolute;content:"";top:0;left:0;width:100%;height:100%;background:url(\'data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><path fill="white" d="M1,0H2V1H1V0ZM0,1H1V2H0V1Z"/><path fill="gray" d="M0,0H1V1H0V0ZM1,1H2V2H1V1Z"/></svg>\');background-size:6px;border-radius:.15em;z-index:-1}.pcr-app .pcr-swatches>button:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:currentColor;border:1px solid rgba(0,0,0,.05);border-radius:.15em;box-sizing:border-box}.pcr-app .pcr-swatches>button:hover{-webkit-filter:brightness(1.05);filter:brightness(1.05)}.pcr-app .pcr-swatches>button:not(.pcr-active){box-shadow:none}.pcr-app .pcr-interaction{display:flex;flex-wrap:wrap;align-items:center;margin:0 -.2em}.pcr-app .pcr-interaction>*{margin:0 .2em}.pcr-app .pcr-interaction input{letter-spacing:.07em;font-size:.75em;text-align:center;cursor:pointer;color:#75797e;background:#f1f3f4;border-radius:.15em;transition:all .15s;padding:.45em .5em;margin-top:.75em}.pcr-app .pcr-interaction input:hover{-webkit-filter:brightness(.975);filter:brightness(.975)}.pcr-app .pcr-interaction input:focus{box-shadow:0 0 0 1px hsla(0,0%,100%,.85),0 0 0 3px rgba(66,133,244,.75)}.pcr-app .pcr-interaction .pcr-result{color:#75797e;text-align:left;flex:1 1 8em;min-width:8em;transition:all .2s;border-radius:.15em;background:#f1f3f4;cursor:text}.pcr-app .pcr-interaction .pcr-result::-moz-selection{background:#4285f4;color:#fff}.pcr-app .pcr-interaction .pcr-result::selection{background:#4285f4;color:#fff}.pcr-app .pcr-interaction .pcr-type.active{color:#fff;background:#4285f4}.pcr-app .pcr-interaction .pcr-cancel,.pcr-app .pcr-interaction .pcr-clear,.pcr-app .pcr-interaction .pcr-save{width:auto;color:#fff}.pcr-app .pcr-interaction .pcr-cancel:hover,.pcr-app .pcr-interaction .pcr-clear:hover,.pcr-app .pcr-interaction .pcr-save:hover{-webkit-filter:brightness(.925);filter:brightness(.925)}.pcr-app .pcr-interaction .pcr-save{background:#4285f4}.pcr-app .pcr-interaction .pcr-cancel,.pcr-app .pcr-interaction .pcr-clear{background:#f44250}.pcr-app .pcr-interaction .pcr-cancel:focus,.pcr-app .pcr-interaction .pcr-clear:focus{box-shadow:0 0 0 1px hsla(0,0%,100%,.85),0 0 0 3px rgba(244,66,80,.75)}.pcr-app .pcr-selection .pcr-picker{position:absolute;height:18px;width:18px;border:2px solid #fff;border-radius:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.pcr-app .pcr-selection .pcr-color-chooser,.pcr-app .pcr-selection .pcr-color-opacity,.pcr-app .pcr-selection .pcr-color-palette{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-direction:column;cursor:grab;cursor:-webkit-grab}.pcr-app .pcr-selection .pcr-color-chooser:active,.pcr-app .pcr-selection .pcr-color-opacity:active,.pcr-app .pcr-selection .pcr-color-palette:active{cursor:grabbing;cursor:-webkit-grabbing}.pcr-app[data-theme=nano]{width:14.25em;max-width:95vw}.pcr-app[data-theme=nano] .pcr-swatches{margin-top:.6em;padding:0 .6em}.pcr-app[data-theme=nano] .pcr-interaction{padding:0 .6em .6em}.pcr-app[data-theme=nano] .pcr-selection{display:grid;grid-gap:.6em;grid-template-columns:1fr 4fr;grid-template-rows:5fr auto auto;align-items:center;height:10.5em;width:100%;align-self:flex-start}.pcr-app[data-theme=nano] .pcr-selection .pcr-color-preview{grid-area:2/1/4/1;height:100%;width:100%;display:flex;flex-direction:row;justify-content:center;margin-left:.6em}.pcr-app[data-theme=nano] .pcr-selection .pcr-color-preview .pcr-last-color{display:none}.pcr-app[data-theme=nano] .pcr-selection .pcr-color-preview .pcr-current-color{position:relative;background:currentColor;width:2em;height:2em;border-radius:50em;overflow:hidden}.pcr-app[data-theme=nano] .pcr-selection .pcr-color-preview .pcr-current-color:before{position:absolute;content:"";top:0;left:0;width:100%;height:100%;background:url(\'data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><path fill="white" d="M1,0H2V1H1V0ZM0,1H1V2H0V1Z"/><path fill="gray" d="M0,0H1V1H0V0ZM1,1H2V2H1V1Z"/></svg>\');background-size:.5em;border-radius:.15em;z-index:-1}.pcr-app[data-theme=nano] .pcr-selection .pcr-color-palette{grid-area:1/1/2/3;width:100%;height:100%;z-index:1}.pcr-app[data-theme=nano] .pcr-selection .pcr-color-palette .pcr-palette{border-radius:.15em;width:100%;height:100%}.pcr-app[data-theme=nano] .pcr-selection .pcr-color-palette .pcr-palette:before{position:absolute;content:"";top:0;left:0;width:100%;height:100%;background:url(\'data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><path fill="white" d="M1,0H2V1H1V0ZM0,1H1V2H0V1Z"/><path fill="gray" d="M0,0H1V1H0V0ZM1,1H2V2H1V1Z"/></svg>\');background-size:.5em;border-radius:.15em;z-index:-1}.pcr-app[data-theme=nano] .pcr-selection .pcr-color-chooser{grid-area:2/2/2/2}.pcr-app[data-theme=nano] .pcr-selection .pcr-color-opacity{grid-area:3/2/3/2}.pcr-app[data-theme=nano] .pcr-selection .pcr-color-chooser,.pcr-app[data-theme=nano] .pcr-selection .pcr-color-opacity{height:.5em;margin:0 .6em}.pcr-app[data-theme=nano] .pcr-selection .pcr-color-chooser .pcr-picker,.pcr-app[data-theme=nano] .pcr-selection .pcr-color-opacity .pcr-picker{top:50%;transform:translateY(-50%)}.pcr-app[data-theme=nano] .pcr-selection .pcr-color-chooser .pcr-slider,.pcr-app[data-theme=nano] .pcr-selection .pcr-color-opacity .pcr-slider{flex-grow:1;border-radius:50em}.pcr-app[data-theme=nano] .pcr-selection .pcr-color-chooser .pcr-slider{background:linear-gradient(90deg,red,#ff0,#0f0,#0ff,#00f,#f0f,red)}.pcr-app[data-theme=nano] .pcr-selection .pcr-color-opacity .pcr-slider{background:linear-gradient(90deg,transparent,#000),url(\'data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><path fill="white" d="M1,0H2V1H1V0ZM0,1H1V2H0V1Z"/><path fill="gray" d="M0,0H1V1H0V0ZM1,1H2V2H1V1Z"/></svg>\');background-size:100%,.25em}',
          "",
        ]),
        (t.exports = e);
    },
    "90e3": function (t, e) {
      var n = 0,
        r = Math.random();
      t.exports = function (t) {
        return (
          "Symbol(" +
          String(void 0 === t ? "" : t) +
          ")_" +
          (++n + r).toString(36)
        );
      };
    },
    9112: function (t, e, n) {
      var r = n("83ab"),
        i = n("9bf2"),
        a = n("5c6c");
      t.exports = r
        ? function (t, e, n) {
            return i.f(t, e, a(1, n));
          }
        : function (t, e, n) {
            return (t[e] = n), t;
          };
    },
    "911e": function (t, e, n) {
      var r = n("24fb");
      (e = r(!1)), e.push([t.i, "", ""]), (t.exports = e);
    },
    9263: function (t, e, n) {
      "use strict";
      var r = n("ad6d"),
        i = n("9f7f"),
        a = RegExp.prototype.exec,
        o = String.prototype.replace,
        c = a,
        u = (function () {
          var t = /a/,
            e = /b*/g;
          return (
            a.call(t, "a"),
            a.call(e, "a"),
            0 !== t.lastIndex || 0 !== e.lastIndex
          );
        })(),
        l = i.UNSUPPORTED_Y || i.BROKEN_CARET,
        s = void 0 !== /()??/.exec("")[1],
        f = u || s || l;
      f &&
        (c = function (t) {
          var e,
            n,
            i,
            c,
            f = this,
            p = l && f.sticky,
            d = r.call(f),
            h = f.source,
            v = 0,
            b = t;
          return (
            p &&
              ((d = d.replace("y", "")),
              -1 === d.indexOf("g") && (d += "g"),
              (b = String(t).slice(f.lastIndex)),
              f.lastIndex > 0 &&
                (!f.multiline ||
                  (f.multiline && "\n" !== t[f.lastIndex - 1])) &&
                ((h = "(?: " + h + ")"), (b = " " + b), v++),
              (n = new RegExp("^(?:" + h + ")", d))),
            s && (n = new RegExp("^" + h + "$(?!\\s)", d)),
            u && (e = f.lastIndex),
            (i = a.call(p ? n : f, b)),
            p
              ? i
                ? ((i.input = i.input.slice(v)),
                  (i[0] = i[0].slice(v)),
                  (i.index = f.lastIndex),
                  (f.lastIndex += i[0].length))
                : (f.lastIndex = 0)
              : u && i && (f.lastIndex = f.global ? i.index + i[0].length : e),
            s &&
              i &&
              i.length > 1 &&
              o.call(i[0], n, function () {
                for (c = 1; c < arguments.length - 2; c++)
                  void 0 === arguments[c] && (i[c] = void 0);
              }),
            i
          );
        }),
        (t.exports = c);
    },
    9300: function (t, e, n) {
      "use strict";
      n.d(e, "g", function () {
        return o;
      }),
        n.d(e, "f", function () {
          return c;
        }),
        n.d(e, "d", function () {
          return u["f"];
        }),
        n.d(e, "c", function () {
          return u["e"];
        }),
        n.d(e, "a", function () {
          return u["b"];
        }),
        n.d(e, "b", function () {
          return u["c"];
        }),
        n.d(e, "e", function () {
          return v;
        });
      n("a4d3"), n("e01a"), n("d3b7");
      var r = n("8165"),
        i = n("441e"),
        a = Symbol();
      function o() {
        var t = Object(r["reactive"])(new i["a"]());
        return Object(r["provide"])(a, t), t;
      }
      function c() {
        return Object(r["inject"])(a, Object(r["reactive"])(new i["a"](!1)));
      }
      var u = n("60aa"),
        l = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", {
            staticClass: "mulan-dirty",
            domProps: { innerHTML: t._s(t.dirtyStyle) },
          });
        },
        s = [],
        f = Object(r["defineComponent"])({
          setup: function () {
            var t =
              "\n<style>\n.portal-top-right{\n    display: none;\n}\n</style>\n        ";
            return { dirtyStyle: t };
          },
        }),
        p = f,
        d = n("2877"),
        h = Object(d["a"])(p, l, s, !1, null, null, null),
        v = h.exports;
    },
    "944a": function (t, e, n) {
      var r = n("746f");
      r("toStringTag");
    },
    "94ca": function (t, e, n) {
      var r = n("d039"),
        i = /#|\.prototype\./,
        a = function (t, e) {
          var n = c[o(t)];
          return n == l || (n != u && ("function" == typeof e ? r(e) : !!e));
        },
        o = (a.normalize = function (t) {
          return String(t).replace(i, ".").toLowerCase();
        }),
        c = (a.data = {}),
        u = (a.NATIVE = "N"),
        l = (a.POLYFILL = "P");
      t.exports = a;
    },
    9523: function (t, e) {
      function n(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      t.exports = n;
    },
    9541: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return f;
      });
      n("4de4"), n("7db0"), n("c740"), n("d81d");
      var r = n("d4ec"),
        i = n("bee2"),
        a = n("8165"),
        o = n("adac"),
        c = n("5007"),
        u = n("bf72"),
        l = function (t) {
          if (t instanceof Error) throw t;
          console.error(t);
        },
        s = function (t, e, n) {
          return t
            .then(function (t) {
              return !0 !== t.success
                ? (e(t.message), t)
                : (n(t.result), t.result);
            })
            .catch(e);
        },
        f = (function () {
          function t() {
            var e = this;
            Object(r["a"])(this, t),
              (this.repo = {}),
              (this.locks = {
                getOne: Object(c["createLock"])(),
                updateOne: Object(c["createLock"])(),
                collection: Object(c["createLock"])(),
              }),
              (this.destroyOne = function (t) {
                var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : { eager: !1 },
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : l,
                  i = e.repo.destroyOne(t),
                  a = i.result,
                  o = i.cancel,
                  c = e.getId(t),
                  u = e.state.collection.value,
                  f = e.state.collection.value.filter(function (t) {
                    return e.getId(t) !== c;
                  });
                return (
                  n.eager && (e.state.collection.value = f),
                  {
                    result: s(
                      a,
                      function (t) {
                        (e.state.collection.value = u), r(t);
                      },
                      function (t) {
                        e.state.collection.value = t ? f : u;
                      }
                    ),
                    cancel: o,
                  }
                );
              }),
              (this.chooseOne = function (t) {
                e.state.currentIndex.value = e.state.collection.value.findIndex(
                  function (n) {
                    return e.getId(n) === t;
                  }
                );
              }),
              (this.state = {
                collection: Object(a["ref"])([]),
                collectionQuery: Object(a["ref"])({}),
                collectionResponse: Object(a["ref"])(void 0),
                total: Object(a["ref"])(0),
                loaded: Object(a["ref"])(!1),
                currentIndex: Object(a["ref"])(0),
                one: Object(a["ref"])(void 0),
              });
          }
          return (
            Object(i["a"])(t, [
              {
                key: "createOne",
                value: function (t) {
                  var e = this,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : { prepend: !1 },
                    r =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : l,
                    i = this.repo.createOne(t),
                    a = i.result,
                    o = i.cancel;
                  return {
                    result: s(
                      a,
                      function (t) {
                        r(t);
                      },
                      function (t) {
                        var r = e.state.collection.value,
                          i = n.prepend ? r.unshift.bind(r) : r.push.bind(r);
                        i(t);
                      }
                    ),
                    cancel: o,
                  };
                },
              },
              {
                key: "getOne",
                value: function (t) {
                  var e = this,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : l,
                    r = this.locks.getOne(function () {
                      return e.repo.getOne(t);
                    }, this.getId(t)),
                    i = r.result,
                    a = r.cancel;
                  return (
                    (this.state.one.value = void 0),
                    {
                      result: s(
                        i,
                        function (t) {
                          n(t);
                        },
                        function (t) {
                          e.state.one.value = t;
                        }
                      ),
                      cancel: a,
                    }
                  );
                },
              },
              {
                key: "getMany",
                value: function (t) {
                  var e = this,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : l,
                    r = this.locks.collection(function () {
                      return e.repo.getMany(t);
                    }),
                    i = r.result,
                    a = r.cancel;
                  return (
                    (this.state.loaded.value = !1),
                    (this.state.collectionQuery.value = t),
                    (this.state.collectionResponse.value = void 0),
                    {
                      result: s(
                        i,
                        function (t) {
                          (e.state.loaded.value = !0), n(t);
                        },
                        function (t) {
                          (e.state.collectionResponse.value = t),
                            (e.state.collection.value = t.items),
                            (e.state.total.value = t.total),
                            (e.state.loaded.value = !0),
                            (e.state.currentIndex.value = Object(u["a"])(
                              e.state.currentIndex.value,
                              0,
                              t.items.length - 1
                            ));
                        }
                      ),
                      cancel: a,
                    }
                  );
                },
              },
              {
                key: "updateOne",
                value: function (t) {
                  var e = this,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : l,
                    r = this.locks.updateOne(function () {
                      return e.repo.updateOne(t);
                    }, this.getId(t)),
                    i = r.result,
                    a = r.cancel;
                  return {
                    result: s(
                      i,
                      function (t) {
                        n(t);
                      },
                      function (t) {
                        var n = e.getId(t),
                          r = e.state.collection.value.findIndex(function (t) {
                            return e.getId(t) === n;
                          });
                        r < 0 || Object(o["e"])(e.state.collection.value[r], t);
                      }
                    ),
                    cancel: a,
                  };
                },
              },
              {
                key: "getId",
                value: function (t) {
                  return t.id;
                },
              },
              {
                key: "findOne",
                value: function (t) {
                  var e = this,
                    n = this.state.one.value;
                  return n && t === this.getId(n)
                    ? n
                    : this.state.collection.value.find(function (n) {
                        return e.getId(n) === t;
                      });
                },
              },
              {
                key: "updateLocal",
                value: function (t, e) {
                  var n = this;
                  this.state.one.value &&
                    this.getId(this.state.one.value) === t &&
                    (this.state.one.value = e(this.state.one.value)),
                    (this.state.collection.value =
                      this.state.collection.value.map(function (r) {
                        return n.getId(r) !== t ? r : e(r);
                      }));
                },
              },
              {
                key: "updateLocalCollection",
                value: function (t) {
                  var e = this;
                  this.state.collection.value = this.state.collection.value.map(
                    function (n) {
                      return e.state.one.value &&
                        e.getId(e.state.one.value) === e.getId(n)
                        ? ((e.state.one.value = t(e.state.one.value)),
                          e.state.one.value)
                        : t(n);
                    }
                  );
                },
              },
              {
                key: "currentOne",
                get: function () {
                  var t = this;
                  return Object(a["computed"])(function () {
                    return t.state.collection.value[t.state.currentIndex.value];
                  });
                },
              },
            ]),
            t
          );
        })();
    },
    "96cf": function (t, e, n) {
      var r = (function (t) {
        "use strict";
        var e,
          n = Object.prototype,
          r = n.hasOwnProperty,
          i = "function" === typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          o = i.asyncIterator || "@@asyncIterator",
          c = i.toStringTag || "@@toStringTag";
        function u(t, e, n, r) {
          var i = e && e.prototype instanceof v ? e : v,
            a = Object.create(i.prototype),
            o = new C(r || []);
          return (a._invoke = T(t, n, o)), a;
        }
        function l(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (r) {
            return { type: "throw", arg: r };
          }
        }
        t.wrap = u;
        var s = "suspendedStart",
          f = "suspendedYield",
          p = "executing",
          d = "completed",
          h = {};
        function v() {}
        function b() {}
        function m() {}
        var g = {};
        g[a] = function () {
          return this;
        };
        var y = Object.getPrototypeOf,
          _ = y && y(y(S([])));
        _ && _ !== n && r.call(_, a) && (g = _);
        var w = (m.prototype = v.prototype = Object.create(g));
        function x(t) {
          ["next", "throw", "return"].forEach(function (e) {
            t[e] = function (t) {
              return this._invoke(e, t);
            };
          });
        }
        function O(t, e) {
          function n(i, a, o, c) {
            var u = l(t[i], t, a);
            if ("throw" !== u.type) {
              var s = u.arg,
                f = s.value;
              return f && "object" === typeof f && r.call(f, "__await")
                ? e.resolve(f.__await).then(
                    function (t) {
                      n("next", t, o, c);
                    },
                    function (t) {
                      n("throw", t, o, c);
                    }
                  )
                : e.resolve(f).then(
                    function (t) {
                      (s.value = t), o(s);
                    },
                    function (t) {
                      return n("throw", t, o, c);
                    }
                  );
            }
            c(u.arg);
          }
          var i;
          function a(t, r) {
            function a() {
              return new e(function (e, i) {
                n(t, r, e, i);
              });
            }
            return (i = i ? i.then(a, a) : a());
          }
          this._invoke = a;
        }
        function T(t, e, n) {
          var r = s;
          return function (i, a) {
            if (r === p) throw new Error("Generator is already running");
            if (r === d) {
              if ("throw" === i) throw a;
              return I();
            }
            (n.method = i), (n.arg = a);
            while (1) {
              var o = n.delegate;
              if (o) {
                var c = E(o, n);
                if (c) {
                  if (c === h) continue;
                  return c;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (r === s) throw ((r = d), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = p;
              var u = l(t, e, n);
              if ("normal" === u.type) {
                if (((r = n.done ? d : f), u.arg === h)) continue;
                return { value: u.arg, done: n.done };
              }
              "throw" === u.type &&
                ((r = d), (n.method = "throw"), (n.arg = u.arg));
            }
          };
        }
        function E(t, n) {
          var r = t.iterator[n.method];
          if (r === e) {
            if (((n.delegate = null), "throw" === n.method)) {
              if (
                t.iterator["return"] &&
                ((n.method = "return"),
                (n.arg = e),
                E(t, n),
                "throw" === n.method)
              )
                return h;
              (n.method = "throw"),
                (n.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return h;
          }
          var i = l(r, t.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), h
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[t.resultName] = a.value),
                (n.next = t.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                (n.delegate = null),
                h)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              h);
        }
        function k(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function j(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function C(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(k, this),
            this.reset(!0);
        }
        function S(t) {
          if (t) {
            var n = t[a];
            if (n) return n.call(t);
            if ("function" === typeof t.next) return t;
            if (!isNaN(t.length)) {
              var i = -1,
                o = function n() {
                  while (++i < t.length)
                    if (r.call(t, i)) return (n.value = t[i]), (n.done = !1), n;
                  return (n.value = e), (n.done = !0), n;
                };
              return (o.next = o);
            }
          }
          return { next: I };
        }
        function I() {
          return { value: e, done: !0 };
        }
        return (
          (b.prototype = w.constructor = m),
          (m.constructor = b),
          (m[c] = b.displayName = "GeneratorFunction"),
          (t.isGeneratorFunction = function (t) {
            var e = "function" === typeof t && t.constructor;
            return (
              !!e &&
              (e === b || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, m)
                : ((t.__proto__ = m), c in t || (t[c] = "GeneratorFunction")),
              (t.prototype = Object.create(w)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          x(O.prototype),
          (O.prototype[o] = function () {
            return this;
          }),
          (t.AsyncIterator = O),
          (t.async = function (e, n, r, i, a) {
            void 0 === a && (a = Promise);
            var o = new O(u(e, n, r, i), a);
            return t.isGeneratorFunction(n)
              ? o
              : o.next().then(function (t) {
                  return t.done ? t.value : o.next();
                });
          }),
          x(w),
          (w[c] = "Generator"),
          (w[a] = function () {
            return this;
          }),
          (w.toString = function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = [];
            for (var n in t) e.push(n);
            return (
              e.reverse(),
              function n() {
                while (e.length) {
                  var r = e.pop();
                  if (r in t) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (t.values = S),
          (C.prototype = {
            constructor: C,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = e),
                this.tryEntries.forEach(j),
                !t)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = e);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0],
                e = t.completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var n = this;
              function i(r, i) {
                return (
                  (c.type = "throw"),
                  (c.arg = t),
                  (n.next = r),
                  i && ((n.method = "next"), (n.arg = e)),
                  !!i
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  c = o.completion;
                if ("root" === o.tryLoc) return i("end");
                if (o.tryLoc <= this.prev) {
                  var u = r.call(o, "catchLoc"),
                    l = r.call(o, "finallyLoc");
                  if (u && l) {
                    if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                  } else if (u) {
                    if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (
                  i.tryLoc <= this.prev &&
                  r.call(i, "finallyLoc") &&
                  this.prev < i.finallyLoc
                ) {
                  var a = i;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var o = a ? a.completion : {};
              return (
                (o.type = t),
                (o.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), h)
                  : this.complete(o)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                h
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), j(n), h;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var i = r.arg;
                    j(n);
                  }
                  return i;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, n, r) {
              return (
                (this.delegate = { iterator: S(t), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = e),
                h
              );
            },
          }),
          t
        );
      })(t.exports);
      try {
        regeneratorRuntime = r;
      } catch (i) {
        Function("r", "regeneratorRuntime = r")(r);
      }
    },
    "970b": function (t, e) {
      function n(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      t.exports = n;
    },
    9765: function (t, e, n) {
      "use strict";
      var r = n("6f23"),
        i = n.n(r);
      i.a;
    },
    9861: function (t, e, n) {
      "use strict";
      n("e260");
      var r = n("23e7"),
        i = n("d066"),
        a = n("0d3b"),
        o = n("6eeb"),
        c = n("e2cc"),
        u = n("d44e"),
        l = n("9ed3"),
        s = n("69f3"),
        f = n("19aa"),
        p = n("5135"),
        d = n("0366"),
        h = n("f5df"),
        v = n("825a"),
        b = n("861d"),
        m = n("7c73"),
        g = n("5c6c"),
        y = n("9a1f"),
        _ = n("35a1"),
        w = n("b622"),
        x = i("fetch"),
        O = i("Headers"),
        T = w("iterator"),
        E = "URLSearchParams",
        k = E + "Iterator",
        j = s.set,
        C = s.getterFor(E),
        S = s.getterFor(k),
        I = /\+/g,
        A = Array(4),
        L = function (t) {
          return (
            A[t - 1] ||
            (A[t - 1] = RegExp("((?:%[\\da-f]{2}){" + t + "})", "gi"))
          );
        },
        N = function (t) {
          try {
            return decodeURIComponent(t);
          } catch (e) {
            return t;
          }
        },
        R = function (t) {
          var e = t.replace(I, " "),
            n = 4;
          try {
            return decodeURIComponent(e);
          } catch (r) {
            while (n) e = e.replace(L(n--), N);
            return e;
          }
        },
        M = /[!'()~]|%20/g,
        D = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
        },
        P = function (t) {
          return D[t];
        },
        U = function (t) {
          return encodeURIComponent(t).replace(M, P);
        },
        B = function (t, e) {
          if (e) {
            var n,
              r,
              i = e.split("&"),
              a = 0;
            while (a < i.length)
              (n = i[a++]),
                n.length &&
                  ((r = n.split("=")),
                  t.push({ key: R(r.shift()), value: R(r.join("=")) }));
          }
        },
        F = function (t) {
          (this.entries.length = 0), B(this.entries, t);
        },
        z = function (t, e) {
          if (t < e) throw TypeError("Not enough arguments");
        },
        X = l(
          function (t, e) {
            j(this, { type: k, iterator: y(C(t).entries), kind: e });
          },
          "Iterator",
          function () {
            var t = S(this),
              e = t.kind,
              n = t.iterator.next(),
              r = n.value;
            return (
              n.done ||
                (n.value =
                  "keys" === e
                    ? r.key
                    : "values" === e
                    ? r.value
                    : [r.key, r.value]),
              n
            );
          }
        ),
        V = function () {
          f(this, V, E);
          var t,
            e,
            n,
            r,
            i,
            a,
            o,
            c,
            u,
            l = arguments.length > 0 ? arguments[0] : void 0,
            s = this,
            d = [];
          if (
            (j(s, {
              type: E,
              entries: d,
              updateURL: function () {},
              updateSearchParams: F,
            }),
            void 0 !== l)
          )
            if (b(l))
              if (((t = _(l)), "function" === typeof t)) {
                (e = t.call(l)), (n = e.next);
                while (!(r = n.call(e)).done) {
                  if (
                    ((i = y(v(r.value))),
                    (a = i.next),
                    (o = a.call(i)).done ||
                      (c = a.call(i)).done ||
                      !a.call(i).done)
                  )
                    throw TypeError("Expected sequence with length 2");
                  d.push({ key: o.value + "", value: c.value + "" });
                }
              } else
                for (u in l) p(l, u) && d.push({ key: u, value: l[u] + "" });
            else
              B(
                d,
                "string" === typeof l
                  ? "?" === l.charAt(0)
                    ? l.slice(1)
                    : l
                  : l + ""
              );
        },
        G = V.prototype;
      c(
        G,
        {
          append: function (t, e) {
            z(arguments.length, 2);
            var n = C(this);
            n.entries.push({ key: t + "", value: e + "" }), n.updateURL();
          },
          delete: function (t) {
            z(arguments.length, 1);
            var e = C(this),
              n = e.entries,
              r = t + "",
              i = 0;
            while (i < n.length) n[i].key === r ? n.splice(i, 1) : i++;
            e.updateURL();
          },
          get: function (t) {
            z(arguments.length, 1);
            for (var e = C(this).entries, n = t + "", r = 0; r < e.length; r++)
              if (e[r].key === n) return e[r].value;
            return null;
          },
          getAll: function (t) {
            z(arguments.length, 1);
            for (
              var e = C(this).entries, n = t + "", r = [], i = 0;
              i < e.length;
              i++
            )
              e[i].key === n && r.push(e[i].value);
            return r;
          },
          has: function (t) {
            z(arguments.length, 1);
            var e = C(this).entries,
              n = t + "",
              r = 0;
            while (r < e.length) if (e[r++].key === n) return !0;
            return !1;
          },
          set: function (t, e) {
            z(arguments.length, 1);
            for (
              var n,
                r = C(this),
                i = r.entries,
                a = !1,
                o = t + "",
                c = e + "",
                u = 0;
              u < i.length;
              u++
            )
              (n = i[u]),
                n.key === o &&
                  (a ? i.splice(u--, 1) : ((a = !0), (n.value = c)));
            a || i.push({ key: o, value: c }), r.updateURL();
          },
          sort: function () {
            var t,
              e,
              n,
              r = C(this),
              i = r.entries,
              a = i.slice();
            for (i.length = 0, n = 0; n < a.length; n++) {
              for (t = a[n], e = 0; e < n; e++)
                if (i[e].key > t.key) {
                  i.splice(e, 0, t);
                  break;
                }
              e === n && i.push(t);
            }
            r.updateURL();
          },
          forEach: function (t) {
            var e,
              n = C(this).entries,
              r = d(t, arguments.length > 1 ? arguments[1] : void 0, 3),
              i = 0;
            while (i < n.length) (e = n[i++]), r(e.value, e.key, this);
          },
          keys: function () {
            return new X(this, "keys");
          },
          values: function () {
            return new X(this, "values");
          },
          entries: function () {
            return new X(this, "entries");
          },
        },
        { enumerable: !0 }
      ),
        o(G, T, G.entries),
        o(
          G,
          "toString",
          function () {
            var t,
              e = C(this).entries,
              n = [],
              r = 0;
            while (r < e.length)
              (t = e[r++]), n.push(U(t.key) + "=" + U(t.value));
            return n.join("&");
          },
          { enumerable: !0 }
        ),
        u(V, E),
        r({ global: !0, forced: !a }, { URLSearchParams: V }),
        a ||
          "function" != typeof x ||
          "function" != typeof O ||
          r(
            { global: !0, enumerable: !0, forced: !0 },
            {
              fetch: function (t) {
                var e,
                  n,
                  r,
                  i = [t];
                return (
                  arguments.length > 1 &&
                    ((e = arguments[1]),
                    b(e) &&
                      ((n = e.body),
                      h(n) === E &&
                        ((r = e.headers ? new O(e.headers) : new O()),
                        r.has("content-type") ||
                          r.set(
                            "content-type",
                            "application/x-www-form-urlencoded;charset=UTF-8"
                          ),
                        (e = m(e, {
                          body: g(0, String(n)),
                          headers: g(0, r),
                        })))),
                    i.push(e)),
                  x.apply(this, i)
                );
              },
            }
          ),
        (t.exports = { URLSearchParams: V, getState: C });
    },
    "99af": function (t, e, n) {
      "use strict";
      var r = n("23e7"),
        i = n("d039"),
        a = n("e8b5"),
        o = n("861d"),
        c = n("7b0b"),
        u = n("50c4"),
        l = n("8418"),
        s = n("65f0"),
        f = n("1dde"),
        p = n("b622"),
        d = n("2d00"),
        h = p("isConcatSpreadable"),
        v = 9007199254740991,
        b = "Maximum allowed index exceeded",
        m =
          d >= 51 ||
          !i(function () {
            var t = [];
            return (t[h] = !1), t.concat()[0] !== t;
          }),
        g = f("concat"),
        y = function (t) {
          if (!o(t)) return !1;
          var e = t[h];
          return void 0 !== e ? !!e : a(t);
        },
        _ = !m || !g;
      r(
        { target: "Array", proto: !0, forced: _ },
        {
          concat: function (t) {
            var e,
              n,
              r,
              i,
              a,
              o = c(this),
              f = s(o, 0),
              p = 0;
            for (e = -1, r = arguments.length; e < r; e++)
              if (((a = -1 === e ? o : arguments[e]), y(a))) {
                if (((i = u(a.length)), p + i > v)) throw TypeError(b);
                for (n = 0; n < i; n++, p++) n in a && l(f, p, a[n]);
              } else {
                if (p >= v) throw TypeError(b);
                l(f, p++, a);
              }
            return (f.length = p), f;
          },
        }
      );
    },
    "9a0c": function (t, e, n) {
      var r = n("342f");
      t.exports = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r);
    },
    "9a1f": function (t, e, n) {
      var r = n("825a"),
        i = n("35a1");
      t.exports = function (t) {
        var e = i(t);
        if ("function" != typeof e)
          throw TypeError(String(t) + " is not iterable");
        return r(e.call(t));
      };
    },
    "9b42": function (t, e, n) {
      function r(t, e) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) {
          var n = [],
            r = !0,
            i = !1,
            a = void 0;
          try {
            for (
              var o, c = t[Symbol.iterator]();
              !(r = (o = c.next()).done);
              r = !0
            )
              if ((n.push(o.value), e && n.length === e)) break;
          } catch (u) {
            (i = !0), (a = u);
          } finally {
            try {
              r || null == c["return"] || c["return"]();
            } finally {
              if (i) throw a;
            }
          }
          return n;
        }
      }
      n("a4d3"),
        n("e01a"),
        n("d28b"),
        n("d3b7"),
        n("3ca3"),
        n("ddb0"),
        (t.exports = r);
    },
    "9bdd": function (t, e, n) {
      var r = n("825a");
      t.exports = function (t, e, n, i) {
        try {
          return i ? e(r(n)[0], n[1]) : e(n);
        } catch (o) {
          var a = t["return"];
          throw (void 0 !== a && r(a.call(t)), o);
        }
      };
    },
    "9bf2": function (t, e, n) {
      var r = n("83ab"),
        i = n("0cfb"),
        a = n("825a"),
        o = n("c04e"),
        c = Object.defineProperty;
      e.f = r
        ? c
        : function (t, e, n) {
            if ((a(t), (e = o(e, !0)), a(n), i))
              try {
                return c(t, e, n);
              } catch (r) {}
            if ("get" in n || "set" in n)
              throw TypeError("Accessors not supported");
            return "value" in n && (t[e] = n.value), t;
          };
    },
    "9e69": function (t, e, n) {
      var r = n("2b3e"),
        i = r.Symbol;
      t.exports = i;
    },
    "9ed3": function (t, e, n) {
      "use strict";
      var r = n("ae93").IteratorPrototype,
        i = n("7c73"),
        a = n("5c6c"),
        o = n("d44e"),
        c = n("3f8c"),
        u = function () {
          return this;
        };
      t.exports = function (t, e, n) {
        var l = e + " Iterator";
        return (
          (t.prototype = i(r, { next: a(1, n) })),
          o(t, l, !1, !0),
          (c[l] = u),
          t
        );
      };
    },
    "9f78": function (t, e, n) {
      var r = n("24fb");
      (e = r(!1)),
        e.push([
          t.i,
          ".section_relation_editer[data-v-0c12493f]{padding:10px 0;width:100%}.section_relation_editer .relation-editer-content[data-v-0c12493f]{display:flex;flex-direction:row;align-items:center}.section_relation_editer .relation-editer-content .s-dropdown[data-v-0c12493f],.section_relation_editer .relation-editer-content .s-input-wrapper[data-v-0c12493f]{width:136px;margin-right:10px;line-height:1.5}.section_relation_editer .relation-editer-content .relation-ops[data-v-0c12493f]{width:36px;margin-left:2px}.section_relation_editer .relation-editer-content .relation-ops .ops-icon[data-v-0c12493f]{width:14px;height:14px;cursor:pointer}.section_relation_editer .relation-editer-content .relation-ops .ops-icon.plus[data-v-0c12493f]{margin-right:4px}",
          "",
        ]),
        (t.exports = e);
    },
    "9f7f": function (t, e, n) {
      "use strict";
      var r = n("d039");
      function i(t, e) {
        return RegExp(t, e);
      }
      (e.UNSUPPORTED_Y = r(function () {
        var t = i("a", "y");
        return (t.lastIndex = 2), null != t.exec("abcd");
      })),
        (e.BROKEN_CARET = r(function () {
          var t = i("^r", "gy");
          return (t.lastIndex = 2), null != t.exec("str");
        }));
    },
    "9fea": function (t, e) {},
    a15b: function (t, e, n) {
      "use strict";
      var r = n("23e7"),
        i = n("44ad"),
        a = n("fc6a"),
        o = n("a640"),
        c = [].join,
        u = i != Object,
        l = o("join", ",");
      r(
        { target: "Array", proto: !0, forced: u || !l },
        {
          join: function (t) {
            return c.call(a(this), void 0 === t ? "," : t);
          },
        }
      );
    },
    a434: function (t, e, n) {
      "use strict";
      var r = n("23e7"),
        i = n("23cb"),
        a = n("a691"),
        o = n("50c4"),
        c = n("7b0b"),
        u = n("65f0"),
        l = n("8418"),
        s = n("1dde"),
        f = n("ae40"),
        p = s("splice"),
        d = f("splice", { ACCESSORS: !0, 0: 0, 1: 2 }),
        h = Math.max,
        v = Math.min,
        b = 9007199254740991,
        m = "Maximum allowed length exceeded";
      r(
        { target: "Array", proto: !0, forced: !p || !d },
        {
          splice: function (t, e) {
            var n,
              r,
              s,
              f,
              p,
              d,
              g = c(this),
              y = o(g.length),
              _ = i(t, y),
              w = arguments.length;
            if (
              (0 === w
                ? (n = r = 0)
                : 1 === w
                ? ((n = 0), (r = y - _))
                : ((n = w - 2), (r = v(h(a(e), 0), y - _))),
              y + n - r > b)
            )
              throw TypeError(m);
            for (s = u(g, r), f = 0; f < r; f++)
              (p = _ + f), p in g && l(s, f, g[p]);
            if (((s.length = r), n < r)) {
              for (f = _; f < y - r; f++)
                (p = f + r), (d = f + n), p in g ? (g[d] = g[p]) : delete g[d];
              for (f = y; f > y - r + n; f--) delete g[f - 1];
            } else if (n > r)
              for (f = y - r; f > _; f--)
                (p = f + r - 1),
                  (d = f + n - 1),
                  p in g ? (g[d] = g[p]) : delete g[d];
            for (f = 0; f < n; f++) g[f + _] = arguments[f + 2];
            return (g.length = y - r + n), s;
          },
        }
      );
    },
    a4d3: function (t, e, n) {
      "use strict";
      var r = n("23e7"),
        i = n("da84"),
        a = n("d066"),
        o = n("c430"),
        c = n("83ab"),
        u = n("4930"),
        l = n("fdbf"),
        s = n("d039"),
        f = n("5135"),
        p = n("e8b5"),
        d = n("861d"),
        h = n("825a"),
        v = n("7b0b"),
        b = n("fc6a"),
        m = n("c04e"),
        g = n("5c6c"),
        y = n("7c73"),
        _ = n("df75"),
        w = n("241c"),
        x = n("057f"),
        O = n("7418"),
        T = n("06cf"),
        E = n("9bf2"),
        k = n("d1e7"),
        j = n("9112"),
        C = n("6eeb"),
        S = n("5692"),
        I = n("f772"),
        A = n("d012"),
        L = n("90e3"),
        N = n("b622"),
        R = n("e538"),
        M = n("746f"),
        D = n("d44e"),
        P = n("69f3"),
        U = n("b727").forEach,
        B = I("hidden"),
        F = "Symbol",
        z = "prototype",
        X = N("toPrimitive"),
        V = P.set,
        G = P.getterFor(F),
        $ = Object[z],
        q = i.Symbol,
        H = a("JSON", "stringify"),
        W = T.f,
        K = E.f,
        Y = x.f,
        J = k.f,
        Z = S("symbols"),
        Q = S("op-symbols"),
        tt = S("string-to-symbol-registry"),
        et = S("symbol-to-string-registry"),
        nt = S("wks"),
        rt = i.QObject,
        it = !rt || !rt[z] || !rt[z].findChild,
        at =
          c &&
          s(function () {
            return (
              7 !=
              y(
                K({}, "a", {
                  get: function () {
                    return K(this, "a", { value: 7 }).a;
                  },
                })
              ).a
            );
          })
            ? function (t, e, n) {
                var r = W($, e);
                r && delete $[e], K(t, e, n), r && t !== $ && K($, e, r);
              }
            : K,
        ot = function (t, e) {
          var n = (Z[t] = y(q[z]));
          return (
            V(n, { type: F, tag: t, description: e }),
            c || (n.description = e),
            n
          );
        },
        ct = l
          ? function (t) {
              return "symbol" == typeof t;
            }
          : function (t) {
              return Object(t) instanceof q;
            },
        ut = function (t, e, n) {
          t === $ && ut(Q, e, n), h(t);
          var r = m(e, !0);
          return (
            h(n),
            f(Z, r)
              ? (n.enumerable
                  ? (f(t, B) && t[B][r] && (t[B][r] = !1),
                    (n = y(n, { enumerable: g(0, !1) })))
                  : (f(t, B) || K(t, B, g(1, {})), (t[B][r] = !0)),
                at(t, r, n))
              : K(t, r, n)
          );
        },
        lt = function (t, e) {
          h(t);
          var n = b(e),
            r = _(n).concat(ht(n));
          return (
            U(r, function (e) {
              (c && !ft.call(n, e)) || ut(t, e, n[e]);
            }),
            t
          );
        },
        st = function (t, e) {
          return void 0 === e ? y(t) : lt(y(t), e);
        },
        ft = function (t) {
          var e = m(t, !0),
            n = J.call(this, e);
          return (
            !(this === $ && f(Z, e) && !f(Q, e)) &&
            (!(n || !f(this, e) || !f(Z, e) || (f(this, B) && this[B][e])) || n)
          );
        },
        pt = function (t, e) {
          var n = b(t),
            r = m(e, !0);
          if (n !== $ || !f(Z, r) || f(Q, r)) {
            var i = W(n, r);
            return (
              !i || !f(Z, r) || (f(n, B) && n[B][r]) || (i.enumerable = !0), i
            );
          }
        },
        dt = function (t) {
          var e = Y(b(t)),
            n = [];
          return (
            U(e, function (t) {
              f(Z, t) || f(A, t) || n.push(t);
            }),
            n
          );
        },
        ht = function (t) {
          var e = t === $,
            n = Y(e ? Q : b(t)),
            r = [];
          return (
            U(n, function (t) {
              !f(Z, t) || (e && !f($, t)) || r.push(Z[t]);
            }),
            r
          );
        };
      if (
        (u ||
          ((q = function () {
            if (this instanceof q)
              throw TypeError("Symbol is not a constructor");
            var t =
                arguments.length && void 0 !== arguments[0]
                  ? String(arguments[0])
                  : void 0,
              e = L(t),
              n = function (t) {
                this === $ && n.call(Q, t),
                  f(this, B) && f(this[B], e) && (this[B][e] = !1),
                  at(this, e, g(1, t));
              };
            return c && it && at($, e, { configurable: !0, set: n }), ot(e, t);
          }),
          C(q[z], "toString", function () {
            return G(this).tag;
          }),
          C(q, "withoutSetter", function (t) {
            return ot(L(t), t);
          }),
          (k.f = ft),
          (E.f = ut),
          (T.f = pt),
          (w.f = x.f = dt),
          (O.f = ht),
          (R.f = function (t) {
            return ot(N(t), t);
          }),
          c &&
            (K(q[z], "description", {
              configurable: !0,
              get: function () {
                return G(this).description;
              },
            }),
            o || C($, "propertyIsEnumerable", ft, { unsafe: !0 }))),
        r({ global: !0, wrap: !0, forced: !u, sham: !u }, { Symbol: q }),
        U(_(nt), function (t) {
          M(t);
        }),
        r(
          { target: F, stat: !0, forced: !u },
          {
            for: function (t) {
              var e = String(t);
              if (f(tt, e)) return tt[e];
              var n = q(e);
              return (tt[e] = n), (et[n] = e), n;
            },
            keyFor: function (t) {
              if (!ct(t)) throw TypeError(t + " is not a symbol");
              if (f(et, t)) return et[t];
            },
            useSetter: function () {
              it = !0;
            },
            useSimple: function () {
              it = !1;
            },
          }
        ),
        r(
          { target: "Object", stat: !0, forced: !u, sham: !c },
          {
            create: st,
            defineProperty: ut,
            defineProperties: lt,
            getOwnPropertyDescriptor: pt,
          }
        ),
        r(
          { target: "Object", stat: !0, forced: !u },
          { getOwnPropertyNames: dt, getOwnPropertySymbols: ht }
        ),
        r(
          {
            target: "Object",
            stat: !0,
            forced: s(function () {
              O.f(1);
            }),
          },
          {
            getOwnPropertySymbols: function (t) {
              return O.f(v(t));
            },
          }
        ),
        H)
      ) {
        var vt =
          !u ||
          s(function () {
            var t = q();
            return (
              "[null]" != H([t]) || "{}" != H({ a: t }) || "{}" != H(Object(t))
            );
          });
        r(
          { target: "JSON", stat: !0, forced: vt },
          {
            stringify: function (t, e, n) {
              var r,
                i = [t],
                a = 1;
              while (arguments.length > a) i.push(arguments[a++]);
              if (((r = e), (d(e) || void 0 !== t) && !ct(t)))
                return (
                  p(e) ||
                    (e = function (t, e) {
                      if (
                        ("function" == typeof r && (e = r.call(this, t, e)),
                        !ct(e))
                      )
                        return e;
                    }),
                  (i[1] = e),
                  H.apply(null, i)
                );
            },
          }
        );
      }
      q[z][X] || j(q[z], X, q[z].valueOf), D(q, F), (A[B] = !0);
    },
    a630: function (t, e, n) {
      var r = n("23e7"),
        i = n("4df4"),
        a = n("1c7e"),
        o = !a(function (t) {
          Array.from(t);
        });
      r({ target: "Array", stat: !0, forced: o }, { from: i });
    },
    a640: function (t, e, n) {
      "use strict";
      var r = n("d039");
      t.exports = function (t, e) {
        var n = [][t];
        return (
          !!n &&
          r(function () {
            n.call(
              null,
              e ||
                function () {
                  throw 1;
                },
              1
            );
          })
        );
      };
    },
    a691: function (t, e) {
      var n = Math.ceil,
        r = Math.floor;
      t.exports = function (t) {
        return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t);
      };
    },
    a79d: function (t, e, n) {
      "use strict";
      var r = n("23e7"),
        i = n("c430"),
        a = n("fea9"),
        o = n("d039"),
        c = n("d066"),
        u = n("4840"),
        l = n("cdf9"),
        s = n("6eeb"),
        f =
          !!a &&
          o(function () {
            a.prototype["finally"].call(
              { then: function () {} },
              function () {}
            );
          });
      r(
        { target: "Promise", proto: !0, real: !0, forced: f },
        {
          finally: function (t) {
            var e = u(this, c("Promise")),
              n = "function" == typeof t;
            return this.then(
              n
                ? function (n) {
                    return l(e, t()).then(function () {
                      return n;
                    });
                  }
                : t,
              n
                ? function (n) {
                    return l(e, t()).then(function () {
                      throw n;
                    });
                  }
                : t
            );
          },
        }
      ),
        i ||
          "function" != typeof a ||
          a.prototype["finally"] ||
          s(a.prototype, "finally", c("Promise").prototype["finally"]);
    },
    a9e3: function (t, e, n) {
      "use strict";
      var r = n("83ab"),
        i = n("da84"),
        a = n("94ca"),
        o = n("6eeb"),
        c = n("5135"),
        u = n("c6b6"),
        l = n("7156"),
        s = n("c04e"),
        f = n("d039"),
        p = n("7c73"),
        d = n("241c").f,
        h = n("06cf").f,
        v = n("9bf2").f,
        b = n("58a8").trim,
        m = "Number",
        g = i[m],
        y = g.prototype,
        _ = u(p(y)) == m,
        w = function (t) {
          var e,
            n,
            r,
            i,
            a,
            o,
            c,
            u,
            l = s(t, !1);
          if ("string" == typeof l && l.length > 2)
            if (((l = b(l)), (e = l.charCodeAt(0)), 43 === e || 45 === e)) {
              if (((n = l.charCodeAt(2)), 88 === n || 120 === n)) return NaN;
            } else if (48 === e) {
              switch (l.charCodeAt(1)) {
                case 66:
                case 98:
                  (r = 2), (i = 49);
                  break;
                case 79:
                case 111:
                  (r = 8), (i = 55);
                  break;
                default:
                  return +l;
              }
              for (a = l.slice(2), o = a.length, c = 0; c < o; c++)
                if (((u = a.charCodeAt(c)), u < 48 || u > i)) return NaN;
              return parseInt(a, r);
            }
          return +l;
        };
      if (a(m, !g(" 0o1") || !g("0b1") || g("+0x1"))) {
        for (
          var x,
            O = function (t) {
              var e = arguments.length < 1 ? 0 : t,
                n = this;
              return n instanceof O &&
                (_
                  ? f(function () {
                      y.valueOf.call(n);
                    })
                  : u(n) != m)
                ? l(new g(w(e)), n, O)
                : w(e);
            },
            T = r
              ? d(g)
              : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
                  ","
                ),
            E = 0;
          T.length > E;
          E++
        )
          c(g, (x = T[E])) && !c(O, x) && v(O, x, h(g, x));
        (O.prototype = y), (y.constructor = O), o(i, m, O);
      }
    },
    a9e31: function (t, e, n) {
      var r = n("4380");
      "string" === typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
      var i = n("499e").default;
      i("1e3f9119", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    aaec: function (t, e) {
      var n = "\\ud800-\\udfff",
        r = "\\u0300-\\u036f",
        i = "\\ufe20-\\ufe2f",
        a = "\\u20d0-\\u20ff",
        o = r + i + a,
        c = "\\ufe0e\\ufe0f",
        u = "\\u200d",
        l = RegExp("[" + u + n + o + c + "]");
      function s(t) {
        return l.test(t);
      }
      t.exports = s;
    },
    ab13: function (t, e, n) {
      var r = n("b622"),
        i = r("match");
      t.exports = function (t) {
        var e = /./;
        try {
          "/./"[t](e);
        } catch (n) {
          try {
            return (e[i] = !1), "/./"[t](e);
          } catch (r) {}
        }
        return !1;
      };
    },
    ab22: function (t, e, n) {
      t.exports = n.p + "img/del-disabled.8f9bb901.svg";
    },
    ac1f: function (t, e, n) {
      "use strict";
      var r = n("23e7"),
        i = n("9263");
      r({ target: "RegExp", proto: !0, forced: /./.exec !== i }, { exec: i });
    },
    ad6d: function (t, e, n) {
      "use strict";
      var r = n("825a");
      t.exports = function () {
        var t = r(this),
          e = "";
        return (
          t.global && (e += "g"),
          t.ignoreCase && (e += "i"),
          t.multiline && (e += "m"),
          t.dotAll && (e += "s"),
          t.unicode && (e += "u"),
          t.sticky && (e += "y"),
          e
        );
      };
    },
    adac: function (t, e, n) {
      "use strict";
      n.d(e, "d", function () {
        return r;
      }),
        n.d(e, "c", function () {
          return i;
        }),
        n.d(e, "g", function () {
          return a;
        }),
        n.d(e, "b", function () {
          return o;
        }),
        n.d(e, "a", function () {
          return c;
        }),
        n.d(e, "e", function () {
          return u;
        }),
        n.d(e, "f", function () {
          return l;
        });
      n("13d5"), n("b64b");
      var r = Object.keys,
        i = function (t) {
          return t;
        },
        a = function (t) {
          return t;
        },
        o = function () {},
        c = function (t) {
          for (
            var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
            r < e;
            r++
          )
            n[r - 1] = arguments[r];
          return n.reduce(function (t, e) {
            return function (n) {
              return t(e(n));
            };
          }, t);
        },
        u = function (t, e) {
          return r(e).reduce(function (t, n) {
            var r = e[n];
            return null == r || (t[n] = r), t;
          }, t);
        };
      var l = function (t, e) {
        if (e in t) return t[e];
      };
    },
    ade3: function (t, e, n) {
      "use strict";
      function r(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    ae40: function (t, e, n) {
      var r = n("83ab"),
        i = n("d039"),
        a = n("5135"),
        o = Object.defineProperty,
        c = {},
        u = function (t) {
          throw t;
        };
      t.exports = function (t, e) {
        if (a(c, t)) return c[t];
        e || (e = {});
        var n = [][t],
          l = !!a(e, "ACCESSORS") && e.ACCESSORS,
          s = a(e, 0) ? e[0] : u,
          f = a(e, 1) ? e[1] : void 0;
        return (c[t] =
          !!n &&
          !i(function () {
            if (l && !r) return !0;
            var t = { length: -1 };
            l ? o(t, 1, { enumerable: !0, get: u }) : (t[1] = 1),
              n.call(t, s, f);
          }));
      };
    },
    ae93: function (t, e, n) {
      "use strict";
      var r,
        i,
        a,
        o = n("e163"),
        c = n("9112"),
        u = n("5135"),
        l = n("b622"),
        s = n("c430"),
        f = l("iterator"),
        p = !1,
        d = function () {
          return this;
        };
      [].keys &&
        ((a = [].keys()),
        "next" in a
          ? ((i = o(o(a))), i !== Object.prototype && (r = i))
          : (p = !0)),
        void 0 == r && (r = {}),
        s || u(r, f) || c(r, f, d),
        (t.exports = { IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: p });
    },
    aecc: function (t, e, n) {
      var r = n("24fb");
      (e = r(!1)),
        e.push([
          t.i,
          ".section_label_editer[data-v-36f72c9a]{padding:10px 0;width:50%;display:inline-block}.section_label_editer .label-editer-content[data-v-36f72c9a]{display:flex;flex-direction:row;align-items:center}.section_label_editer .label-editer-content .label-editer-input[data-v-36f72c9a]{border:1px solid var(--cxd-blue);display:flex;flex-direction:row}.section_label_editer .label-editer-content .label-editer-input .label-color[data-v-36f72c9a]{border:none;height:100%;border-right:1px solid var(--cxd-blue)}.section_label_editer .label-editer-content .label-editer-input .s-input-wrapper[data-v-36f72c9a]{width:150px}.section_label_editer .label-editer-content .label-editer-input .s-input-wrapper[data-v-36f72c9a]  .s-input{line-height:2em;border:none}.section_label_editer .label-editer-content .label-ops[data-v-36f72c9a]{margin-left:12px}.section_label_editer .label-editer-content .label-ops .ops-icon[data-v-36f72c9a]{width:14px;height:14px;cursor:pointer}.section_label_editer .label-editer-content .label-ops .ops-icon.plus[data-v-36f72c9a]{margin-right:4px}.section_label_editer .label-editer-content .label-ops .ops-icon.del-disabled[data-v-36f72c9a]{cursor:not-allowed}.section_label_editer .label-editer-content[data-v-36f72c9a]  .form-content .left{display:none}.section_label_editer .label-editer-content[data-v-36f72c9a]  .form-content .right{display:flex;margin-right:0}.section_label_editer .label-editer-content[data-v-36f72c9a]  .form-tip .left{display:none}",
          "",
        ]),
        (t.exports = e);
    },
    af58: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return v;
      }),
        n.d(e, "a", function () {
          return b;
        }),
        n.d(e, "d", function () {
          return O;
        }),
        n.d(e, "c", function () {
          return T;
        });
      n("d81d"), n("b0c0"), n("96cf");
      var r = n("1da1"),
        i = n("d4ec"),
        a = n("262e"),
        o = n("2caf"),
        c = n("5530"),
        u = n("c7a3"),
        l = n("2841"),
        s = n("093b"),
        f = n("adac"),
        p = n("9541"),
        d = n("5007"),
        h = n("3f78"),
        v = Object(l["enumxFactory"])({
          text: { id: 1, label: "文本" },
          number: { id: 2, label: "数字" },
          date: { id: 3, label: "日期" },
          money: { id: 4, label: "金额" },
        }),
        b = Object(l["enumxFactory"])({
          entity: { id: 5, label: "实体" },
          aspect: { id: 6, label: "属性" },
          sentiment: { id: 7, label: "情感倾向" },
        }),
        m = Object(s["a"])("label/save", function (t, e) {
          return { id: "id" in e ? e.id : t, name: e.name, color: e.color };
        }),
        g = Object(s["a"])("label/list", function (t) {
          var e = Object(f["g"])(t.items).map(function (t) {
            return Object(c["a"])(
              Object(c["a"])({}, t),
              {},
              { userFileCount: t.entityCount }
            );
          });
          return Object(c["a"])(Object(c["a"])({}, t), {}, { items: e });
        }),
        y = (function (t) {
          Object(a["a"])(n, t);
          var e = Object(o["a"])(n);
          function n() {
            var t;
            return (
              Object(i["a"])(this, n),
              (t = e.apply(this, arguments)),
              (t.repo = {
                createOne: m,
                updateOne: m,
                getMany: g,
                destroyOne: u["caller"].factory("label/delete"),
              }),
              t
            );
          }
          return n;
        })(p["a"]),
        _ = (function (t) {
          Object(a["a"])(n, t);
          var e = Object(o["a"])(n);
          function n() {
            var t;
            return (
              Object(i["a"])(this, n),
              (t = e.apply(this, arguments)),
              (t.save = function (t) {
                return Object(d["of"])({
                  result: {
                    id: t.id || Object(h["a"])(),
                    isLocal: !t.id || t.isLocal,
                    name: t.name,
                    color: t.color,
                  },
                  success: !0,
                });
              }),
              (t.delete = function () {
                return Object(d["of"])({ result: !0, success: !0 });
              }),
              (t.list = function (e) {
                return t.listInitialized
                  ? Object(d["of"])({
                      result: {
                        total: t.state.collection.value.length,
                        items: t.state.collection.value,
                      },
                      success: !0,
                    })
                  : ((t.listInitialized = !0),
                    Object(d["map"])(g(e), function (t) {
                      return {
                        result: Object(c["a"])(
                          Object(c["a"])({}, t.result),
                          {},
                          {
                            items: t.result.items.map(function (t) {
                              return Object(c["a"])(
                                Object(c["a"])({}, t),
                                {},
                                { readonly: !0 }
                              );
                            }),
                          }
                        ),
                        success: t.success,
                      };
                    }));
              }),
              (t.repo = {
                createOne: t.save,
                updateOne: t.save,
                getMany: t.list,
                destroyOne: t.delete,
              }),
              (t.listInitialized = !1),
              t
            );
          }
          return n;
        })(y),
        w = function () {
          return new y();
        },
        x = function () {
          return new _();
        },
        O = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = e.useLocalService ? x() : w();
          n.getMany(
            Object(c["a"])(
              Object(c["a"])({ datasetId: t, offset: 0, pageSize: 1e3 }, e),
              {},
              { needDetail: void 0 }
            )
          );
          var r = function () {
            n.getMany(
              Object(c["a"])(
                Object(c["a"])({ datasetId: t, offset: 0, pageSize: 1e3 }, e),
                {},
                { needDetail: void 0 }
              )
            );
          };
          return {
            labels: n.state.collection,
            loaded: n.state.loaded,
            model: n,
            updateLables: r,
          };
        },
        T = (function () {
          var t = Object(r["a"])(
            regeneratorRuntime.mark(function t(e, n) {
              var r, i, a;
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (r = e.destroyOne(n, { eager: !0 })),
                        (i = r.result),
                        (t.next = 3),
                        i
                      );
                    case 3:
                      return (
                        (a = t.sent),
                        t.abrupt("return", "boolean" === typeof a && a)
                      );
                    case 5:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (e, n) {
            return t.apply(this, arguments);
          };
        })();
    },
    b041: function (t, e, n) {
      "use strict";
      var r = n("00ee"),
        i = n("f5df");
      t.exports = r
        ? {}.toString
        : function () {
            return "[object " + i(this) + "]";
          };
    },
    b0c0: function (t, e, n) {
      var r = n("83ab"),
        i = n("9bf2").f,
        a = Function.prototype,
        o = a.toString,
        c = /^\s*function ([^ (]*)/,
        u = "name";
      r &&
        !(u in a) &&
        i(a, u, {
          configurable: !0,
          get: function () {
            try {
              return o.call(this).match(c)[1];
            } catch (t) {
              return "";
            }
          },
        });
    },
    b336: function (t, e, n) {
      "use strict";
      var r = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "svg",
            t._g(
              {
                staticStyle: {
                  fill: "currentcolor",
                  width: "1em",
                  height: "1em",
                  display: "inline-block",
                  "user-select": "none",
                },
                attrs: {
                  viewBox: "0 0 16 16",
                  xmlns: "http://www.w3.org/2000/svg",
                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                  version: "1.1",
                  "xml:space": "preserve",
                  focusable: "false",
                },
              },
              t.$listeners
            ),
            [
              n("g", { attrs: { "fill-rule": "evenodd" } }, [
                n("path", {
                  attrs: {
                    "fill-rule": "nonzero",
                    d: "M14 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2h12zm-1 1H3v11a1 1 0 00.883.993L4 15h8a1 1 0 00.993-.883L13 14V3z",
                  },
                }),
                n("path", {
                  attrs: { "fill-rule": "nonzero", d: "M15.5 2v1H.5V2z" },
                }),
                n("path", {
                  attrs: { "fill-rule": "nonzero", d: "M9 .5v2H7v-2z" },
                }),
                n("path", { attrs: { d: "M6.5 5v8h-1V5zM10.5 5v8h-1V5z" } }),
              ]),
            ]
          );
        },
        i = [],
        a = n("2877"),
        o = {},
        c = Object(a["a"])(o, r, i, !1, null, null, null);
      e["a"] = c.exports;
    },
    b380: function (t, e, n) {
      "use strict";
      function r(t, e) {
        return (
          (r =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          r(t, e)
        );
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    b42f: function (t, e, n) {
      var r = n("2509");
      "string" === typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
      var i = n("499e").default;
      i("87d00a40", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    b4af: function (t, e, n) {
      "use strict";
      var r, i, a, o, c, u, l;
      n.d(e, "a", function () {
        return i;
      }),
        n.d(e, "d", function () {
          return a;
        }),
        n.d(e, "c", function () {
          return o;
        }),
        n.d(e, "b", function () {
          return c;
        }),
        n.d(e, "e", function () {
          return u;
        }),
        (function (t) {
          (t[(t["COLLECT"] = 1)] = "COLLECT"),
            (t[(t["ANNOTATE"] = 2)] = "ANNOTATE"),
            (t[(t["CLEAN"] = 3)] = "CLEAN");
        })(r || (r = {})),
        (function (t) {
          (t[(t["IMG"] = 1)] = "IMG"),
            (t[(t["AUDIO"] = 3)] = "AUDIO"),
            (t[(t["TEXT"] = 4)] = "TEXT"),
            (t[(t["VIDEO"] = 5)] = "VIDEO"),
            (t[(t["IMG_TEXT"] = 7)] = "IMG_TEXT");
        })(i || (i = {})),
        (function (t) {
          (t[(t["DONE"] = 0)] = "DONE"),
            (t[(t["NONE"] = 1)] = "NONE"),
            (t[(t["DOING"] = 2)] = "DOING"),
            (t[(t["FAILED"] = 3)] = "FAILED"),
            (t[(t["STOPPED"] = 4)] = "STOPPED"),
            (t[(t["CONFIRMED"] = 5)] = "CONFIRMED"),
            (t[(t["CANCELLED"] = 6)] = "CANCELLED");
        })(a || (a = {})),
        (function (t) {
          (t[(t["PREPARING"] = -1)] = "PREPARING"),
            (t[(t["DONE"] = 0)] = "DONE"),
            (t[(t["TODO"] = 1)] = "TODO"),
            (t[(t["DOING"] = 2)] = "DOING"),
            (t[(t["FAILED"] = 3)] = "FAILED"),
            (t[(t["STOPPED"] = 4)] = "STOPPED");
        })(o || (o = {})),
        (function (t) {
          (t[(t["NONE"] = 0)] = "NONE"),
            (t[(t["DOING"] = 1)] = "DOING"),
            (t[(t["DONE"] = 2)] = "DONE"),
            (t[(t["STOPPED"] = 3)] = "STOPPED"),
            (t[(t["FAILED"] = 4)] = "FAILED"),
            (t[(t["PAUSED"] = 5)] = "PAUSED");
        })(c || (c = {})),
        (function (t) {
          (t[(t["NONE"] = 0)] = "NONE"),
            (t[(t["DONE"] = 1)] = "DONE"),
            (t[(t["FAILED"] = 2)] = "FAILED");
        })(u || (u = {})),
        (function (t) {
          (t[(t["CREATE"] = 0)] = "CREATE"),
            (t[(t["WAIT_ANNO"] = 1)] = "WAIT_ANNO"),
            (t[(t["ANNOTATE_ING"] = 2)] = "ANNOTATE_ING"),
            (t[(t["ANNO_SUBMIT"] = 3)] = "ANNO_SUBMIT"),
            (t[(t["TERMINATE_WITHANNO"] = 4)] = "TERMINATE_WITHANNO"),
            (t[(t["TERMINATE_NOTANNO"] = 5)] = "TERMINATE_NOTANNO"),
            (t[(t["CHECK_COMPLATE"] = 6)] = "CHECK_COMPLATE");
        })(l || (l = {}));
    },
    b575: function (t, e, n) {
      var r,
        i,
        a,
        o,
        c,
        u,
        l,
        s,
        f = n("da84"),
        p = n("06cf").f,
        d = n("c6b6"),
        h = n("2cf4").set,
        v = n("1cdc"),
        b = f.MutationObserver || f.WebKitMutationObserver,
        m = f.process,
        g = f.Promise,
        y = "process" == d(m),
        _ = p(f, "queueMicrotask"),
        w = _ && _.value;
      w ||
        ((r = function () {
          var t, e;
          y && (t = m.domain) && t.exit();
          while (i) {
            (e = i.fn), (i = i.next);
            try {
              e();
            } catch (n) {
              throw (i ? o() : (a = void 0), n);
            }
          }
          (a = void 0), t && t.enter();
        }),
        y
          ? (o = function () {
              m.nextTick(r);
            })
          : b && !v
          ? ((c = !0),
            (u = document.createTextNode("")),
            new b(r).observe(u, { characterData: !0 }),
            (o = function () {
              u.data = c = !c;
            }))
          : g && g.resolve
          ? ((l = g.resolve(void 0)),
            (s = l.then),
            (o = function () {
              s.call(l, r);
            }))
          : (o = function () {
              h.call(f, r);
            })),
        (t.exports =
          w ||
          function (t) {
            var e = { fn: t, next: void 0 };
            a && (a.next = e), i || ((i = e), o()), (a = e);
          });
    },
    b622: function (t, e, n) {
      var r = n("da84"),
        i = n("5692"),
        a = n("5135"),
        o = n("90e3"),
        c = n("4930"),
        u = n("fdbf"),
        l = i("wks"),
        s = r.Symbol,
        f = u ? s : (s && s.withoutSetter) || o;
      t.exports = function (t) {
        return (
          a(l, t) || (c && a(s, t) ? (l[t] = s[t]) : (l[t] = f("Symbol." + t))),
          l[t]
        );
      };
    },
    b64b: function (t, e, n) {
      var r = n("23e7"),
        i = n("7b0b"),
        a = n("df75"),
        o = n("d039"),
        c = o(function () {
          a(1);
        });
      r(
        { target: "Object", stat: !0, forced: c },
        {
          keys: function (t) {
            return a(i(t));
          },
        }
      );
    },
    b680: function (t, e, n) {
      "use strict";
      var r = n("23e7"),
        i = n("a691"),
        a = n("408a"),
        o = n("1148"),
        c = n("d039"),
        u = (1).toFixed,
        l = Math.floor,
        s = function (t, e, n) {
          return 0 === e
            ? n
            : e % 2 === 1
            ? s(t, e - 1, n * t)
            : s(t * t, e / 2, n);
        },
        f = function (t) {
          var e = 0,
            n = t;
          while (n >= 4096) (e += 12), (n /= 4096);
          while (n >= 2) (e += 1), (n /= 2);
          return e;
        },
        p =
          (u &&
            ("0.000" !== (8e-5).toFixed(3) ||
              "1" !== (0.9).toFixed(0) ||
              "1.25" !== (1.255).toFixed(2) ||
              "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0))) ||
          !c(function () {
            u.call({});
          });
      r(
        { target: "Number", proto: !0, forced: p },
        {
          toFixed: function (t) {
            var e,
              n,
              r,
              c,
              u = a(this),
              p = i(t),
              d = [0, 0, 0, 0, 0, 0],
              h = "",
              v = "0",
              b = function (t, e) {
                var n = -1,
                  r = e;
                while (++n < 6)
                  (r += t * d[n]), (d[n] = r % 1e7), (r = l(r / 1e7));
              },
              m = function (t) {
                var e = 6,
                  n = 0;
                while (--e >= 0)
                  (n += d[e]), (d[e] = l(n / t)), (n = (n % t) * 1e7);
              },
              g = function () {
                var t = 6,
                  e = "";
                while (--t >= 0)
                  if ("" !== e || 0 === t || 0 !== d[t]) {
                    var n = String(d[t]);
                    e = "" === e ? n : e + o.call("0", 7 - n.length) + n;
                  }
                return e;
              };
            if (p < 0 || p > 20) throw RangeError("Incorrect fraction digits");
            if (u != u) return "NaN";
            if (u <= -1e21 || u >= 1e21) return String(u);
            if ((u < 0 && ((h = "-"), (u = -u)), u > 1e-21))
              if (
                ((e = f(u * s(2, 69, 1)) - 69),
                (n = e < 0 ? u * s(2, -e, 1) : u / s(2, e, 1)),
                (n *= 4503599627370496),
                (e = 52 - e),
                e > 0)
              ) {
                b(0, n), (r = p);
                while (r >= 7) b(1e7, 0), (r -= 7);
                b(s(10, r, 1), 0), (r = e - 1);
                while (r >= 23) m(1 << 23), (r -= 23);
                m(1 << r), b(1, 1), m(2), (v = g());
              } else b(0, n), b(1 << -e, 0), (v = g() + o.call("0", p));
            return (
              p > 0
                ? ((c = v.length),
                  (v =
                    h +
                    (c <= p
                      ? "0." + o.call("0", p - c) + v
                      : v.slice(0, c - p) + "." + v.slice(c - p))))
                : (v = h + v),
              v
            );
          },
        }
      );
    },
    b727: function (t, e, n) {
      var r = n("0366"),
        i = n("44ad"),
        a = n("7b0b"),
        o = n("50c4"),
        c = n("65f0"),
        u = [].push,
        l = function (t) {
          var e = 1 == t,
            n = 2 == t,
            l = 3 == t,
            s = 4 == t,
            f = 6 == t,
            p = 5 == t || f;
          return function (d, h, v, b) {
            for (
              var m,
                g,
                y = a(d),
                _ = i(y),
                w = r(h, v, 3),
                x = o(_.length),
                O = 0,
                T = b || c,
                E = e ? T(d, x) : n ? T(d, 0) : void 0;
              x > O;
              O++
            )
              if ((p || O in _) && ((m = _[O]), (g = w(m, O, y)), t))
                if (e) E[O] = g;
                else if (g)
                  switch (t) {
                    case 3:
                      return !0;
                    case 5:
                      return m;
                    case 6:
                      return O;
                    case 2:
                      u.call(E, m);
                  }
                else if (s) return !1;
            return f ? -1 : l || s ? s : E;
          };
        };
      t.exports = {
        forEach: l(0),
        map: l(1),
        filter: l(2),
        some: l(3),
        every: l(4),
        find: l(5),
        findIndex: l(6),
      };
    },
    b789: function (t, e, n) {
      var r = n("47f5");
      function i(t, e) {
        var n = -1,
          i = t.length;
        while (++n < i && r(e, t[n], 0) > -1);
        return n;
      }
      t.exports = i;
    },
    ba42: function (t, e, n) {
      var r = n("24fb");
      (e = r(!1)),
        e.push([
          t.i,
          ".tre-labels-modify[data-v-167ec43c]  .s-modal_head{text-align:center;padding:15px}.tre-labels-modify[data-v-167ec43c]  .s-modal_main{width:580px}.tre-labels-modify[data-v-167ec43c]  .s-modal_main .s-modal_body{padding:20px}.tre-labels-modify[data-v-167ec43c]  .s-modal_main .s-modal_body .tre-labels-modify_body .tre-labels-modify_section .section_title{margin-bottom:10px}.tre-labels-modify[data-v-167ec43c]  .s-modal_main .s-modal_body .tre-labels-modify_body .tre-labels-modify_section .section_title_index{width:14px;height:14px;color:#fff;background-color:#000;border-radius:50%;display:inline-block;font-size:12px;text-align:center;vertical-align:middle;margin-right:8px}.tre-labels-modify[data-v-167ec43c]  .s-modal_main .s-modal_body .tre-labels-modify_body .tre-labels-modify_section .section_title_index_num{display:flex;justify-content:center;transform:scale(.8);transform-origin:center;line-height:14px}.tre-labels-modify[data-v-167ec43c]  .s-modal_main .s-modal_body .tre-labels-modify_body .tre-labels-modify_section .section_list{background-color:#f6f6f6;padding:10px 20px;max-height:220px;overflow-y:auto}.tre-labels-modify[data-v-167ec43c]  .s-modal_main .s-modal_body .tre-labels-modify_body .tre-labels-modify_section.section_labels .section_list{height:160px}.tre-labels-modify[data-v-167ec43c]  .s-modal_main .s-modal_body .tre-labels-modify_body .tre-labels-modify_section.section_relations .section_title{margin-top:20px}.tre-labels-modify[data-v-167ec43c]  .s-modal_main .s-modal_body .tre-labels-modify_body .tre-labels-modify_section.section_relations .section_list{height:220px}.tre-labels-modify[data-v-167ec43c]  .s-modal_main .s-modal_body .tre-labels-modify_body .tre-labels-modify_section.section_relations .section_list .s-dropdown_ul{height:110px}",
          "",
        ]),
        (t.exports = e);
    },
    bb2f: function (t, e, n) {
      var r = n("d039");
      t.exports = !r(function () {
        return Object.isExtensible(Object.preventExtensions({}));
      });
    },
    bc76: function (t, e, n) {
      "use strict";
      var r = n("deda"),
        i = n.n(r);
      i.a;
    },
    bee2: function (t, e, n) {
      "use strict";
      function r(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function i(t, e, n) {
        return e && r(t.prototype, e), n && r(t, n), t;
      }
      n.d(e, "a", function () {
        return i;
      });
    },
    bf72: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      }),
        n.d(e, "b", function () {
          return a;
        });
      n("99af"),
        n("c740"),
        n("caad"),
        n("a9e3"),
        n("c35a"),
        n("b680"),
        n("d3b7"),
        n("4d63"),
        n("ac1f"),
        n("25f0"),
        n("2532"),
        n("466d"),
        n("5319");
      function r(t, e, n) {
        return e > n ? n : t < e ? e : t > n ? n : t;
      }
      function i(t, e) {
        var n = new RegExp("^-?\\d+(?:\\.\\d{0,".concat(e, "})?")),
          r = t.toString().match(n),
          i = r ? Number.parseFloat(r[0]) : 0;
        return i.toFixed(e);
      }
      function a(t) {
        return "".concat(i(100 * +t, 2), "%");
      }
    },
    c04e: function (t, e, n) {
      var r = n("861d");
      t.exports = function (t, e) {
        if (!r(t)) return t;
        var n, i;
        if (e && "function" == typeof (n = t.toString) && !r((i = n.call(t))))
          return i;
        if ("function" == typeof (n = t.valueOf) && !r((i = n.call(t))))
          return i;
        if (!e && "function" == typeof (n = t.toString) && !r((i = n.call(t))))
          return i;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    c135: function (t, e) {
      function n(t) {
        if (Array.isArray(t)) return t;
      }
      t.exports = n;
    },
    c240: function (t, e) {
      function n() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      t.exports = n;
    },
    c32f: function (t, e, n) {
      var r = n("2b10");
      function i(t, e, n) {
        var i = t.length;
        return (n = void 0 === n ? i : n), !e && n >= i ? t : r(t, e, n);
      }
      t.exports = i;
    },
    c35a: function (t, e, n) {
      var r = n("23e7"),
        i = n("7e12");
      r(
        { target: "Number", stat: !0, forced: Number.parseFloat != i },
        { parseFloat: i }
      );
    },
    c430: function (t, e) {
      t.exports = !1;
    },
    c6ac: function (t, e, n) {
      "use strict";
      var r = n("c93b"),
        i = n.n(r);
      i.a;
    },
    c6b6: function (t, e) {
      var n = {}.toString;
      t.exports = function (t) {
        return n.call(t).slice(8, -1);
      };
    },
    c6cd: function (t, e, n) {
      var r = n("da84"),
        i = n("ce4e"),
        a = "__core-js_shared__",
        o = r[a] || i(a, {});
      t.exports = o;
    },
    c740: function (t, e, n) {
      "use strict";
      var r = n("23e7"),
        i = n("b727").findIndex,
        a = n("44d2"),
        o = n("ae40"),
        c = "findIndex",
        u = !0,
        l = o(c);
      c in [] &&
        Array(1)[c](function () {
          u = !1;
        }),
        r(
          { target: "Array", proto: !0, forced: u || !l },
          {
            findIndex: function (t) {
              return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
            },
          }
        ),
        a(c);
    },
    c7a3: function (t, e) {
      t.exports = o;
    },
    c8ba: function (t, e) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (r) {
        "object" === typeof window && (n = window);
      }
      t.exports = n;
    },
    c8d2: function (t, e, n) {
      var r = n("d039"),
        i = n("5899"),
        a = "​᠎";
      t.exports = function (t) {
        return r(function () {
          return !!i[t]() || a[t]() != a || i[t].name !== t;
        });
      };
    },
    c93b: function (t, e, n) {
      var r = n("1481");
      "string" === typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
      var i = n("499e").default;
      i("73889e62", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    c975: function (t, e, n) {
      "use strict";
      var r = n("23e7"),
        i = n("4d64").indexOf,
        a = n("a640"),
        o = n("ae40"),
        c = [].indexOf,
        u = !!c && 1 / [1].indexOf(1, -0) < 0,
        l = a("indexOf"),
        s = o("indexOf", { ACCESSORS: !0, 1: 0 });
      r(
        { target: "Array", proto: !0, forced: u || !l || !s },
        {
          indexOf: function (t) {
            return u
              ? c.apply(this, arguments) || 0
              : i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      );
    },
    ca6a: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return C;
      }),
        n.d(e, "a", function () {
          return S;
        });
      n("a4d3"), n("e01a"), n("7db0"), n("d81d"), n("b0c0"), n("d3b7");
      var r = n("5530"),
        i = n("2909"),
        a = (n("96cf"), n("1da1")),
        o = n("d736"),
        c = n("af58"),
        u = (n("c975"), n("a434"), n("d4ec")),
        l = n("262e"),
        s = n("2caf"),
        f = n("c7a3"),
        p = n("093b"),
        d = n("adac"),
        h = n("9541"),
        v = n("8165"),
        b = n("9300"),
        m = n("5007"),
        g = n("3f78"),
        y = Object(p["a"])("entityRelation/save", function (t, e) {
          return Object(r["a"])(
            Object(r["a"])({}, e),
            {},
            { id: "id" in e ? e.id : t.id, name: e.name }
          );
        }),
        _ = Object(p["a"])("entityRelation/list", function (t) {
          var e = Object(d["g"])(t.items).map(function (t) {
            return Object(r["a"])({}, t);
          });
          return Object(r["a"])(Object(r["a"])({}, t), {}, { items: e });
        }),
        w = (function (t) {
          Object(l["a"])(n, t);
          var e = Object(s["a"])(n);
          function n() {
            var t;
            return (
              Object(u["a"])(this, n),
              (t = e.apply(this, arguments)),
              (t.repo = {
                createOne: y,
                updateOne: y,
                getMany: _,
                destroyOne: f["caller"].factory("entityRelation/delete"),
              }),
              t
            );
          }
          return n;
        })(h["a"]),
        x = (function (t) {
          Object(l["a"])(n, t);
          var e = Object(s["a"])(n);
          function n() {
            var t;
            return (
              Object(u["a"])(this, n),
              (t = e.apply(this, arguments)),
              (t.save = function (t) {
                return Object(m["of"])({
                  result: Object(r["a"])(
                    Object(r["a"])({}, t),
                    {},
                    {
                      id: t.id || Object(g["a"])(),
                      isLocal: !t.id,
                      name: t.name,
                    }
                  ),
                  success: !0,
                });
              }),
              (t.delete = function () {
                return Object(m["of"])({ result: !0, success: !0 });
              }),
              (t.list = function (e) {
                return t.relationInitialized
                  ? Object(m["of"])({
                      result: {
                        total: t.state.collection.value.length,
                        items: t.state.collection.value,
                      },
                      success: !0,
                    })
                  : ((t.relationInitialized = !0),
                    Object(m["map"])(_(e), function (t) {
                      return {
                        result: Object(r["a"])(
                          Object(r["a"])({}, t.result),
                          {},
                          {
                            items: t.result.items.map(function (t) {
                              return Object(r["a"])(
                                Object(r["a"])({}, t),
                                {},
                                { readonly: !0 }
                              );
                            }),
                          }
                        ),
                        success: t.success,
                      };
                    }));
              }),
              (t.repo = {
                createOne: t.save,
                updateOne: t.save,
                getMany: t.list,
                destroyOne: t.delete,
              }),
              (t.relationInitialized = !1),
              t
            );
          }
          return n;
        })(h["a"]),
        O = function () {
          return new w();
        },
        T = function () {
          return new x();
        },
        E = function (t, e) {
          var n = e ? T() : O(),
            r = Object(v["ref"])([]),
            i = Object(b["f"])(),
            a = { datasetId: t, offset: 0, pageSize: 1e3 };
          i.subTaskId &&
            Object.assign(a, {
              subTaskId: i.subTaskId,
              actionType: i.actionType,
            }),
            n.getMany(a);
          var o = function (t) {
            n.state.collection.value = n.state.collection.value.map(function (
              e
            ) {
              if (e.id === t.id) {
                var n = r.value.indexOf(t.id);
                -1 === n ? r.value.push(t.id) : r.value.splice(n, 1);
              }
              return e;
            });
          };
          return {
            relations: Object(v["computed"])(function () {
              return n.state.collection.value.map(function (t) {
                return (
                  r.value.indexOf(t.id) > -1 ? (t.isTop = !0) : (t.isTop = !1),
                  t
                );
              });
            }),
            loaded: n.state.loaded,
            model: n,
            handleTop: o,
          };
        },
        k = n("8607"),
        j = Symbol(),
        C = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = Object(c["d"])(t, {
              tType: o["TemplateType"].TEXT_RELATION_EXTRACT,
              useLocalService: e,
            }),
            u = n.labels,
            l = n.loaded,
            s = n.model,
            f = Object(v["ref"])(!1),
            p = (function () {
              var t = Object(a["a"])(
                regeneratorRuntime.mark(function t() {
                  return regeneratorRuntime.wrap(function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (!f.value) {
                            t.next = 2;
                            break;
                          }
                          return t.abrupt("return");
                        case 2:
                          return (
                            (f.value = !0), (t.next = 5), Object(k["c"])(100)
                          );
                        case 5:
                          f.value = !1;
                        case 6:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function () {
                return t.apply(this, arguments);
              };
            })(),
            d = E(t, e),
            h = d.relations,
            b = d.loaded,
            m = d.model,
            g = d.handleTop,
            y = {
              labels: Object(v["computed"])(function () {
                return Object(i["a"])(u.value).reverse();
              }),
              relations: Object(v["computed"])(function () {
                var t = Object(i["a"])(h.value).reverse();
                return (
                  t.sort(function (t) {
                    return t.isTop ? -1 : 0;
                  }),
                  t.map(function (t) {
                    var e, n;
                    return Object(r["a"])(
                      Object(r["a"])({}, t),
                      {},
                      {
                        objectName:
                          (null ===
                            (e = u.value.find(function (e) {
                              return e.id === t.objectId;
                            })) || void 0 === e
                            ? void 0
                            : e.name) ||
                          t.objectName ||
                          "",
                        subjectName:
                          (null ===
                            (n = u.value.find(function (e) {
                              return e.id === t.subjectId;
                            })) || void 0 === n
                            ? void 0
                            : n.name) ||
                          t.subjectName ||
                          "",
                      }
                    );
                  })
                );
              }),
              labelLoaded: l,
              relationLoaded: b,
              relationModel: m,
              labelModel: s,
              moreOptsHidden: f,
              handleRelationTop: g,
              hideAllMoreByScroll: p,
            };
          return Object(v["provide"])(j, y), y;
        };
      function S() {
        return Object(v["inject"])(j);
      }
    },
    ca84: function (t, e, n) {
      var r = n("5135"),
        i = n("fc6a"),
        a = n("4d64").indexOf,
        o = n("d012");
      t.exports = function (t, e) {
        var n,
          c = i(t),
          u = 0,
          l = [];
        for (n in c) !r(o, n) && r(c, n) && l.push(n);
        while (e.length > u) r(c, (n = e[u++])) && (~a(l, n) || l.push(n));
        return l;
      };
    },
    caad: function (t, e, n) {
      "use strict";
      var r = n("23e7"),
        i = n("4d64").includes,
        a = n("44d2"),
        o = n("ae40"),
        c = o("indexOf", { ACCESSORS: !0, 1: 0 });
      r(
        { target: "Array", proto: !0, forced: !c },
        {
          includes: function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      ),
        a("includes");
    },
    cb4d: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return h;
      });
      n("a4d3"), n("e01a"), n("45fc"), n("d3b7"), n("96cf");
      var r = n("1da1"),
        i = n("2841"),
        a = n("d736"),
        o = n("8165"),
        c = n("e1ec"),
        u = Object(i["enumxFactory"])({
          clean: { id: "clean", label: "无" },
          doing: { id: "doing", label: "半监督训练中" },
          confirm: { id: "confirm", label: "半监督确认中" },
          allConfirm: { id: "allConfirm", label: "全部确认中" },
          done: { id: "done", label: "确认完成" },
          fail: { id: "fail", label: "失败" },
        }),
        l = n("c7a3"),
        s = n("ec56"),
        f = [a["TemplateType"].OBJ_DCT_RECT, a["TemplateType"].OBJ_DCT_QUAD],
        p = function () {
          var t = Object(c["a"])() || {},
            e = t.templateType,
            n = t.sslStatus,
            a = t.id,
            p = Object(o["ref"])(),
            d = Object(o["computed"])(function () {
              return p.value || n || u.clean;
            }),
            h = Object(o["reactive"])({
              enabled: Object(o["computed"])(function () {
                return (
                  !!i["env"].isLite &&
                  !!f.some(function (t) {
                    return t === e;
                  })
                );
              }),
              processVisible: Object(o["computed"])(function () {
                return d.value === u.allConfirm;
              }),
              confirmEnabled: Object(o["computed"])(function () {
                return d.value === u.confirm;
              }),
              interAnnoEnabled: Object(o["computed"])(function () {
                return ![u.doing, u.confirm, u.allConfirm].some(function (t) {
                  return t === d.value;
                });
              }),
              preAnnotatedVisible: Object(o["computed"])(function () {
                return h.processVisible || h.confirmEnabled;
              }),
              status: d,
            });
          Object(o["watch"])(
            function () {
              return n;
            },
            function (t) {
              if (t === u.confirm && a) {
                var e = Object(s["a"])(
                  function () {
                    return l["caller"].send("ssl/status", { datasetId: a });
                  },
                  {
                    interval: 5e3,
                    until: function (t) {
                      return (
                        !!t.success &&
                        [u.done, u.fail].some(function (e) {
                          return e === t.result.status;
                        })
                      );
                    },
                  }
                );
                e.result.then(function (t) {
                  var e;
                  (null === (e = t.response) || void 0 === e
                    ? void 0
                    : e.success) && (p.value = t.response.result.status);
                });
              }
            },
            { immediate: !0 }
          );
          var v = (function () {
            var t = Object(r["a"])(
              regeneratorRuntime.mark(function t(e) {
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (a) {
                          t.next = 2;
                          break;
                        }
                        return t.abrupt("return");
                      case 2:
                        l["caller"]
                          .send("ssl/confirm", {
                            datasetId: a,
                            deletePreAnno: e,
                          })
                          .result.then(function (t) {
                            t.success &&
                              t.result &&
                              d.value === u.confirm &&
                              (p.value = u.allConfirm);
                          });
                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
          return { localStatus: p, cstate: h, confirmAll: v };
        },
        d = Symbol(),
        h = function () {
          var t = Object(o["inject"])(d, null);
          return t || ((t = p()), Object(o["provide"])(d, t), t);
        };
    },
    cc12: function (t, e, n) {
      var r = n("da84"),
        i = n("861d"),
        a = r.document,
        o = i(a) && i(a.createElement);
      t.exports = function (t) {
        return o ? a.createElement(t) : {};
      };
    },
    cca6: function (t, e, n) {
      var r = n("23e7"),
        i = n("60da");
      r(
        { target: "Object", stat: !0, forced: Object.assign !== i },
        { assign: i }
      );
    },
    cd49: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "workshop", function () {
          return g;
        }),
        n.d(e, "previewer", function () {
          return y;
        }),
        n.d(e, "useKeyboard", function () {
          return _;
        }),
        n.d(e, "ModifyOcrLabels", function () {
          return o["a"];
        }),
        n.d(e, "RelationPicker", function () {
          return c["a"];
        }),
        n.d(e, "getDatasetTypeList", function () {
          return l["h"];
        }),
        n.d(e, "routes", function () {
          return O;
        });
      n("d3b7"), n("e260"), n("e6cf"), n("cca6"), n("a79d");
      var r = n("8bbf"),
        i = n.n(r),
        a = n("fc16");
      Object(a["setPublicPath"])("@baidu/afe-app-annotate", 1);
      var o = n("79ae"),
        c = n("333c"),
        u = n("2841"),
        l = n("f2df"),
        s =
          (n("dbaa"),
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "WorkspaceLayout",
              {
                class: t.$route.name + "-layout",
                attrs: { showHeader: !t.fullScreen },
              },
              [
                n(
                  "div",
                  { staticClass: "afe-app-annotate" },
                  [n("router-view")],
                  1
                ),
              ]
            );
          }),
        f = [],
        p = n("8165"),
        d = Object(p["defineComponent"])({
          layout: "custom",
          components: { WorkspaceLayout: u["WorkspaceLayout"] },
          setup: function () {
            var t = u["utils"].useVM();
            return {
              fullScreen: Object(p["computed"])(function () {
                return t.$store.state.fullScreen;
              }),
            };
          },
        }),
        h = d,
        v = (n("c6ac"), n("2877")),
        b = Object(v["a"])(h, s, f, !1, null, "3540e5af", null),
        m = b.exports;
      i.a.directive("keyboard", u["vKeyboard"]);
      var g = n.e("standalone-workshop").then(n.bind(null, "24cf")),
        y = n.e("standalone-previewer").then(n.bind(null, "7715")),
        _ = n.e("standalone-keyboard").then(n.bind(null, "9475")),
        w = function () {
          return n
            .e("interactive-annotate")
            .then(n.bind(null, "b6fd"))
            .then(function (t) {
              return t.default;
            });
        };
      function x(t) {
        return Object(u["useDefinePath"])("/annotate/".concat(t));
      }
      var O = [
        {
          name: "afeAppAnnotateLayout",
          component: m,
          path: "/annotate",
          children: [
            {
              name: "annotate-pt-tt-handwork",
              path: "/annotate/:pt/:tt/handwork",
              component: function () {
                return n
                  .e("lite-annotate")
                  .then(n.bind(null, "1e5e"))
                  .then(function (t) {
                    return t.default;
                  });
              },
            },
            {
              name: "annotate-pt-tt-interactive",
              meta: { moduleName: u["permission"].EModuleNames.INTERANNO },
              path: "/annotate/:pt/:tt/interactive",
              component: w,
            },
            {
              path: x("handwork"),
              name: "app-annotate-handwork",
              component: function () {
                return n
                  .e("pro-annotate")
                  .then(n.bind(null, "0506"))
                  .then(function (t) {
                    return t.default;
                  });
              },
            },
            {
              name: "annotate-interactive",
              meta: { moduleName: u["permission"].EModuleNames.INTERANNO },
              path: x("interactive"),
              component: w,
            },
            {
              name: "annotate-datasetId-booting",
              meta: { moduleName: u["permission"].EModuleNames.INTERANNO },
              path: x(":datasetId/booting"),
              component: function () {
                return n
                  .e("interactive-annotate-booting")
                  .then(n.bind(null, "e3c1"))
                  .then(function (t) {
                    return t.default;
                  });
              },
            },
            {
              name: "annotate-datasetId-nlpbooting",
              meta: { moduleName: u["permission"].EModuleNames.INTERANNO },
              path: x(":datasetId/nlpbooting"),
              component: function () {
                return n
                  .e("interactive-annotate-booting")
                  .then(n.bind(null, "eff1"))
                  .then(function (t) {
                    return t.default;
                  });
              },
            },
            {
              name: "annotate-interactive-create",
              meta: { moduleName: u["permission"].EModuleNames.INTERANNO },
              path: x("create"),
              component: function () {
                return n
                  .e("interactive-annotate-create")
                  .then(n.bind(null, "8156"))
                  .then(function (t) {
                    return t.default;
                  });
              },
            },
          ],
        },
      ];
    },
    cdb8: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return o;
      }),
        n.d(e, "a", function () {
          return c;
        });
      var r = n("2ef0"),
        i = 0,
        a = [
          "#1A73E8",
          "#7D29C9",
          "#1BB3D8",
          "#18BF1A",
          "#FFCC01",
          "#FF9A0B",
          "#FF2C61",
        ],
        o = function (t) {
          return (
            Object(r["isNumber"])(t) && (i = t), i++, a[(i - 1) % a.length]
          );
        },
        c = "#1A73E8";
    },
    cdf9: function (t, e, n) {
      var r = n("825a"),
        i = n("861d"),
        a = n("f069");
      t.exports = function (t, e) {
        if ((r(t), i(e) && e.constructor === t)) return e;
        var n = a.f(t),
          o = n.resolve;
        return o(e), n.promise;
      };
    },
    ce4e: function (t, e, n) {
      var r = n("da84"),
        i = n("9112");
      t.exports = function (t, e) {
        try {
          i(r, t, e);
        } catch (n) {
          r[t] = e;
        }
        return e;
      };
    },
    ce86: function (t, e, n) {
      var r = n("9e69"),
        i = n("7948"),
        a = n("6747"),
        o = n("ffd6"),
        c = 1 / 0,
        u = r ? r.prototype : void 0,
        l = u ? u.toString : void 0;
      function s(t) {
        if ("string" == typeof t) return t;
        if (a(t)) return i(t, s) + "";
        if (o(t)) return l ? l.call(t) : "";
        var e = t + "";
        return "0" == e && 1 / t == -c ? "-0" : e;
      }
      t.exports = s;
    },
    cf53: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      }),
        n.d(e, "e", function () {
          return i;
        }),
        n.d(e, "b", function () {
          return a;
        }),
        n.d(e, "d", function () {
          return o;
        }),
        n.d(e, "c", function () {
          return c;
        });
      n("53ca");
      var r = function (t) {
          return { left: t, right: void 0 };
        },
        i = function (t) {
          return { left: void 0, right: t };
        },
        a = function () {
          return {
            some: function (t) {
              return i(t);
            },
            error: function (t) {
              return r(t);
            },
          };
        },
        o = function (t) {
          return null != t.right && null == t.left;
        },
        c = function (t) {
          return t.left;
        };
    },
    d012: function (t, e) {
      t.exports = {};
    },
    d039: function (t, e) {
      t.exports = function (t) {
        try {
          return !!t();
        } catch (e) {
          return !0;
        }
      };
    },
    d066: function (t, e, n) {
      var r = n("428f"),
        i = n("da84"),
        a = function (t) {
          return "function" == typeof t ? t : void 0;
        };
      t.exports = function (t, e) {
        return arguments.length < 2
          ? a(r[t]) || a(i[t])
          : (r[t] && r[t][e]) || (i[t] && i[t][e]);
      };
    },
    d094: function (t, e) {
      var n = "\\ud800-\\udfff",
        r = "\\u0300-\\u036f",
        i = "\\ufe20-\\ufe2f",
        a = "\\u20d0-\\u20ff",
        o = r + i + a,
        c = "\\ufe0e\\ufe0f",
        u = "[" + n + "]",
        l = "[" + o + "]",
        s = "\\ud83c[\\udffb-\\udfff]",
        f = "(?:" + l + "|" + s + ")",
        p = "[^" + n + "]",
        d = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        h = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        v = "\\u200d",
        b = f + "?",
        m = "[" + c + "]?",
        g = "(?:" + v + "(?:" + [p, d, h].join("|") + ")" + m + b + ")*",
        y = m + b + g,
        _ = "(?:" + [p + l + "?", l, d, h, u].join("|") + ")",
        w = RegExp(s + "(?=" + s + ")|" + _ + y, "g");
      function x(t) {
        return t.match(w) || [];
      }
      t.exports = x;
    },
    d160: function (t, e, n) {
      "use strict";
      var r = n("18b4"),
        i = n.n(r);
      i.a;
    },
    d1e7: function (t, e, n) {
      "use strict";
      var r = {}.propertyIsEnumerable,
        i = Object.getOwnPropertyDescriptor,
        a = i && !r.call({ 1: 2 }, 1);
      e.f = a
        ? function (t) {
            var e = i(this, t);
            return !!e && e.enumerable;
          }
        : r;
    },
    d28b: function (t, e, n) {
      var r = n("746f");
      r("iterator");
    },
    d2bb: function (t, e, n) {
      var r = n("825a"),
        i = n("3bbe");
      t.exports =
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function () {
              var t,
                e = !1,
                n = {};
              try {
                (t = Object.getOwnPropertyDescriptor(
                  Object.prototype,
                  "__proto__"
                ).set),
                  t.call(n, []),
                  (e = n instanceof Array);
              } catch (a) {}
              return function (n, a) {
                return r(n), i(a), e ? t.call(n, a) : (n.__proto__ = a), n;
              };
            })()
          : void 0);
    },
    d3b7: function (t, e, n) {
      var r = n("00ee"),
        i = n("6eeb"),
        a = n("b041");
      r || i(Object.prototype, "toString", a, { unsafe: !0 });
    },
    d44e: function (t, e, n) {
      var r = n("9bf2").f,
        i = n("5135"),
        a = n("b622"),
        o = a("toStringTag");
      t.exports = function (t, e, n) {
        t &&
          !i((t = n ? t : t.prototype), o) &&
          r(t, o, { configurable: !0, value: e });
      };
    },
    d4ec: function (t, e, n) {
      "use strict";
      function r(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    d552: function (t, e, n) {
      "use strict";
      var r = n("3b71"),
        i = n.n(r);
      i.a;
    },
    d58f: function (t, e, n) {
      var r = n("1c0b"),
        i = n("7b0b"),
        a = n("44ad"),
        o = n("50c4"),
        c = function (t) {
          return function (e, n, c, u) {
            r(n);
            var l = i(e),
              s = a(l),
              f = o(l.length),
              p = t ? f - 1 : 0,
              d = t ? -1 : 1;
            if (c < 2)
              while (1) {
                if (p in s) {
                  (u = s[p]), (p += d);
                  break;
                }
                if (((p += d), t ? p < 0 : f <= p))
                  throw TypeError(
                    "Reduce of empty array with no initial value"
                  );
              }
            for (; t ? p >= 0 : f > p; p += d) p in s && (u = n(u, s[p], p, l));
            return u;
          };
        };
      t.exports = { left: c(!1), right: c(!0) };
    },
    d736: function (t, e, n) {
      "use strict";
      n.d(e, "DataService", function () {
        return o;
      });
      var r = n("3b13");
      n.d(e, "ProjectType", function () {
        return r["a"];
      }),
        n.d(e, "TemplateType", function () {
          return r["b"];
        });
      var i = n("b4af");
      n.d(e, "DataType", function () {
        return i["a"];
      }),
        n.d(e, "EtlStatus", function () {
          return i["b"];
        }),
        n.d(e, "ExportStatus", function () {
          return i["c"];
        }),
        n.d(e, "ImportStatus", function () {
          return i["d"];
        }),
        n.d(e, "PublishStatus", function () {
          return i["e"];
        });
      n("00ab");
      var a = n("1a71");
      n.d(e, "ttToPt", function () {
        return a["a"];
      });
      var o;
      n("05c0");
      (function (t) {
        (t[(t["COLLECT"] = 1)] = "COLLECT"),
          (t[(t["ANNOTATE"] = 2)] = "ANNOTATE"),
          (t[(t["CLEAN"] = 3)] = "CLEAN");
      })(o || (o = {}));
    },
    d784: function (t, e, n) {
      "use strict";
      n("ac1f");
      var r = n("6eeb"),
        i = n("d039"),
        a = n("b622"),
        o = n("9263"),
        c = n("9112"),
        u = a("species"),
        l = !i(function () {
          var t = /./;
          return (
            (t.exec = function () {
              var t = [];
              return (t.groups = { a: "7" }), t;
            }),
            "7" !== "".replace(t, "$<a>")
          );
        }),
        s = (function () {
          return "$0" === "a".replace(/./, "$0");
        })(),
        f = a("replace"),
        p = (function () {
          return !!/./[f] && "" === /./[f]("a", "$0");
        })(),
        d = !i(function () {
          var t = /(?:)/,
            e = t.exec;
          t.exec = function () {
            return e.apply(this, arguments);
          };
          var n = "ab".split(t);
          return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
        });
      t.exports = function (t, e, n, f) {
        var h = a(t),
          v = !i(function () {
            var e = {};
            return (
              (e[h] = function () {
                return 7;
              }),
              7 != ""[t](e)
            );
          }),
          b =
            v &&
            !i(function () {
              var e = !1,
                n = /a/;
              return (
                "split" === t &&
                  ((n = {}),
                  (n.constructor = {}),
                  (n.constructor[u] = function () {
                    return n;
                  }),
                  (n.flags = ""),
                  (n[h] = /./[h])),
                (n.exec = function () {
                  return (e = !0), null;
                }),
                n[h](""),
                !e
              );
            });
        if (
          !v ||
          !b ||
          ("replace" === t && (!l || !s || p)) ||
          ("split" === t && !d)
        ) {
          var m = /./[h],
            g = n(
              h,
              ""[t],
              function (t, e, n, r, i) {
                return e.exec === o
                  ? v && !i
                    ? { done: !0, value: m.call(e, n, r) }
                    : { done: !0, value: t.call(n, e, r) }
                  : { done: !1 };
              },
              {
                REPLACE_KEEPS_$0: s,
                REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: p,
              }
            ),
            y = g[0],
            _ = g[1];
          r(String.prototype, t, y),
            r(
              RegExp.prototype,
              h,
              2 == e
                ? function (t, e) {
                    return _.call(t, this, e);
                  }
                : function (t) {
                    return _.call(t, this);
                  }
            );
        }
        f && c(RegExp.prototype[h], "sham", !0);
      };
    },
    d81d: function (t, e, n) {
      "use strict";
      var r = n("23e7"),
        i = n("b727").map,
        a = n("1dde"),
        o = n("ae40"),
        c = a("map"),
        u = o("map");
      r(
        { target: "Array", proto: !0, forced: !c || !u },
        {
          map: function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      );
    },
    d967: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      n("d3b7"), n("4ae1"), n("25f0");
      function r() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      }
    },
    d9a8: function (t, e) {
      function n(t) {
        return t !== t;
      }
      t.exports = n;
    },
    da84: function (t, e, n) {
      (function (e) {
        var n = function (t) {
          return t && t.Math == Math && t;
        };
        t.exports =
          n("object" == typeof globalThis && globalThis) ||
          n("object" == typeof window && window) ||
          n("object" == typeof self && self) ||
          n("object" == typeof e && e) ||
          Function("return this")();
      }.call(this, n("c8ba")));
    },
    dbaa: function (t, e, n) {
      var r = n("911e");
      "string" === typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
      var i = n("499e").default;
      i("385fb07d", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    dbb4: function (t, e, n) {
      var r = n("23e7"),
        i = n("83ab"),
        a = n("56ef"),
        o = n("fc6a"),
        c = n("06cf"),
        u = n("8418");
      r(
        { target: "Object", stat: !0, sham: !i },
        {
          getOwnPropertyDescriptors: function (t) {
            var e,
              n,
              r = o(t),
              i = c.f,
              l = a(r),
              s = {},
              f = 0;
            while (l.length > f)
              (n = i(r, (e = l[f++]))), void 0 !== n && u(s, e, n);
            return s;
          },
        }
      );
    },
    dd03: function (t, e, n) {
      "use strict";
      n.d(e, "c", function () {
        return f;
      }),
        n.d(e, "b", function () {
          return p;
        }),
        n.d(e, "d", function () {
          return h;
        }),
        n.d(e, "a", function () {
          return v;
        });
      n("4160"), n("13d5"), n("b0c0"), n("159b"), n("96cf");
      var r = n("5530"),
        i = n("ade3"),
        a = n("1da1"),
        o = n("d736"),
        c = n("8165"),
        u = n("9300"),
        l = n("58e1"),
        s = n("cb4d"),
        f = Object(c["ref"])(null);
      function p() {
        return d.apply(this, arguments);
      }
      function d() {
        return (
          (d = Object(a["a"])(
            regeneratorRuntime.mark(function t() {
              var e;
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (!f.value) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt("return");
                    case 2:
                      return (
                        (t.next = 4), System.import("@baidu/afe-app-dataset")
                      );
                    case 4:
                      (e = t.sent), (f.value = e.useLabelPicker);
                    case 6:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )),
          d.apply(this, arguments)
        );
      }
      var h = function (t, e, n) {
          var a = Object(u["f"])(),
            l = Object(s["a"])(),
            f = Object(c["computed"])(function () {
              var c,
                u,
                s = {
                  IMPORT: { ability: !1 },
                  TOP: { ability: !0 },
                  DELETE: { ability: !0 },
                  ADD: { ability: !0 },
                  EDIT: { ability: !0 },
                  KEYBOARD: { ability: !0 },
                  LOCK: { ability: !1 },
                  MULTI: { ability: !1 },
                  SEARCH: { ability: !0 },
                  HIGHLIGHT: { ability: !1 },
                  NOTE: { ability: !1 },
                  VISIBLE: { ability: !1 },
                },
                f =
                  ((c = {}),
                  Object(i["a"])(c, o["TemplateType"].OBJ_DCT_RECT, {
                    LOCK: { ability: !0 },
                    VISIBLE: { ability: !0 },
                  }),
                  Object(i["a"])(c, o["TemplateType"].OBJ_DCT_QUAD, {
                    LOCK: { ability: !0 },
                    VISIBLE: { ability: !0 },
                  }),
                  Object(i["a"])(c, o["TemplateType"].IMG_POINT, {
                    LOCK: { ability: !0 },
                    VISIBLE: { ability: !0 },
                  }),
                  Object(i["a"])(c, o["TemplateType"].IMG_POLYLINE, {
                    LOCK: { ability: !0 },
                    VISIBLE: { ability: !0 },
                  }),
                  Object(i["a"])(c, o["TemplateType"].IMG_CUBOID, {
                    LOCK: { ability: !0 },
                    VISIBLE: { ability: !0 },
                  }),
                  Object(i["a"])(c, o["TemplateType"].IMG_COMPOSE, {
                    LOCK: { ability: !0 },
                    VISIBLE: { ability: !0 },
                  }),
                  Object(i["a"])(c, o["TemplateType"].INSTANCE_SEGMENT, {
                    LOCK: { ability: !0 },
                    VISIBLE: { ability: !0 },
                  }),
                  Object(i["a"])(c, o["TemplateType"].SEMANTIC_SEGMENT, {
                    LOCK: { ability: !0 },
                    DELETE: { ability: !0, async: !0 },
                    VISIBLE: { ability: !0 },
                  }),
                  Object(i["a"])(c, o["TemplateType"].VIDEO_TRACKING, {
                    LOCK: { ability: !0 },
                    DELETE: { ability: !0 },
                  }),
                  Object(i["a"])(c, o["TemplateType"].VIDEO_OBJ_DCT, {
                    LOCK: { ability: !0 },
                    DELETE: { ability: !0 },
                  }),
                  Object(i["a"])(c, o["TemplateType"].IMG_CLS_MULTI, {
                    MULTI: { ability: !0 },
                  }),
                  Object(i["a"])(c, o["TemplateType"].TEXT_CLS_MULTI, {
                    MULTI: { ability: !0 },
                  }),
                  Object(i["a"])(c, o["TemplateType"].SENTIMENT, {
                    EDIT: { ability: !1 },
                    ADD: { ability: !1 },
                    DELETE: { ability: !1 },
                    SEARCH: { ability: !0 },
                  }),
                  Object(i["a"])(c, o["TemplateType"].TEXT_ENTITY_EXTRACT, {
                    LOCK: { ability: !0 },
                    NOTE: { ability: !0 },
                  }),
                  Object(i["a"])(c, o["TemplateType"].IMG_MIXED, {
                    VISIBLE: { ability: !0 },
                  }),
                  c);
              return (
                t in f && (s = Object(r["a"])(Object(r["a"])({}, s), f[t])),
                (a.env ||
                  "train" ===
                    (null === e ||
                    void 0 === e ||
                    null === (u = e.value) ||
                    void 0 === u
                      ? void 0
                      : u.phase) ||
                  l.cstate.preAnnotatedVisible) &&
                  (s = Object(r["a"])(
                    Object(r["a"])({}, s),
                    {},
                    {
                      EDIT: { ability: !1 },
                      ADD: { ability: !1 },
                      DELETE: { ability: !1 },
                    }
                  )),
                n && Object.assign(s, n.value),
                s
              );
            });
          return f;
        },
        v = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            e = arguments.length > 1 ? arguments[1] : void 0;
          if (!e) return t;
          var n = [],
            i = e.reduce(function (t, e) {
              return (t[e.id] = e), t;
            }, {});
          return (
            t.forEach(function (t) {
              if (i[t.id]) {
                var e = Object(r["a"])(
                  Object(r["a"])({}, t),
                  {},
                  { name: i[t.id].name }
                );
                i[t.id].color &&
                  ((e.color = i[t.id].color),
                  (e.category = { style: Object(l["a"])(i[t.id].color) })),
                  n.push(e);
              }
            }),
            n
          );
        };
    },
    ddb0: function (t, e, n) {
      var r = n("da84"),
        i = n("fdbc"),
        a = n("e260"),
        o = n("9112"),
        c = n("b622"),
        u = c("iterator"),
        l = c("toStringTag"),
        s = a.values;
      for (var f in i) {
        var p = r[f],
          d = p && p.prototype;
        if (d) {
          if (d[u] !== s)
            try {
              o(d, u, s);
            } catch (v) {
              d[u] = s;
            }
          if ((d[l] || o(d, l, f), i[f]))
            for (var h in a)
              if (d[h] !== a[h])
                try {
                  o(d, h, a[h]);
                } catch (v) {
                  d[h] = a[h];
                }
        }
      }
    },
    de54: function (t, e, n) {
      var r = n("24fb");
      (e = r(!1)),
        e.push([
          t.i,
          ".label-picker-color[data-v-5f5b6b2b]{display:flex;height:30px;line-height:30px;border-right:1px solid var(--cxd-blue);padding:0 10px}.label-picker-color[data-v-5f5b6b2b]  .pickr{display:flex;align-items:center;margin-right:9px}.label-picker-color[data-v-5f5b6b2b]  .pickr>button{width:12px;height:12px}.label-picker-color[data-v-5f5b6b2b]  .pickr>button,.label-picker-color[data-v-5f5b6b2b]  .pickr>button:after,.label-picker-color[data-v-5f5b6b2b]  .pickr>button:before{border-radius:0}.label-picker-color .arrow[data-v-5f5b6b2b]{display:inline-block;transition:.3s;transform:rotate(180deg);min-width:auto;width:9px}.label-picker-color.open .arrow[data-v-5f5b6b2b]{transform:rotate(0deg)}",
          "",
        ]),
        (t.exports = e);
    },
    ded3: function (t, e, n) {
      n("a4d3"),
        n("4de4"),
        n("4160"),
        n("e439"),
        n("dbb4"),
        n("b64b"),
        n("159b");
      var r = n("9523");
      function i(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function a(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? i(Object(n), !0).forEach(function (e) {
                r(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      t.exports = a;
    },
    deda: function (t, e, n) {
      var r = n("f9ef");
      "string" === typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
      var i = n("499e").default;
      i("7cee2599", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    df08: function (t, e, n) {
      var r = n("3ea5");
      "string" === typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
      var i = n("499e").default;
      i("4a3ef64e", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    df75: function (t, e, n) {
      var r = n("ca84"),
        i = n("7839");
      t.exports =
        Object.keys ||
        function (t) {
          return r(t, i);
        };
    },
    df7c: function (t, e, n) {
      (function (t) {
        function n(t, e) {
          for (var n = 0, r = t.length - 1; r >= 0; r--) {
            var i = t[r];
            "." === i
              ? t.splice(r, 1)
              : ".." === i
              ? (t.splice(r, 1), n++)
              : n && (t.splice(r, 1), n--);
          }
          if (e) for (; n--; n) t.unshift("..");
          return t;
        }
        function r(t) {
          "string" !== typeof t && (t += "");
          var e,
            n = 0,
            r = -1,
            i = !0;
          for (e = t.length - 1; e >= 0; --e)
            if (47 === t.charCodeAt(e)) {
              if (!i) {
                n = e + 1;
                break;
              }
            } else -1 === r && ((i = !1), (r = e + 1));
          return -1 === r ? "" : t.slice(n, r);
        }
        function i(t, e) {
          if (t.filter) return t.filter(e);
          for (var n = [], r = 0; r < t.length; r++)
            e(t[r], r, t) && n.push(t[r]);
          return n;
        }
        (e.resolve = function () {
          for (
            var e = "", r = !1, a = arguments.length - 1;
            a >= -1 && !r;
            a--
          ) {
            var o = a >= 0 ? arguments[a] : t.cwd();
            if ("string" !== typeof o)
              throw new TypeError("Arguments to path.resolve must be strings");
            o && ((e = o + "/" + e), (r = "/" === o.charAt(0)));
          }
          return (
            (e = n(
              i(e.split("/"), function (t) {
                return !!t;
              }),
              !r
            ).join("/")),
            (r ? "/" : "") + e || "."
          );
        }),
          (e.normalize = function (t) {
            var r = e.isAbsolute(t),
              o = "/" === a(t, -1);
            return (
              (t = n(
                i(t.split("/"), function (t) {
                  return !!t;
                }),
                !r
              ).join("/")),
              t || r || (t = "."),
              t && o && (t += "/"),
              (r ? "/" : "") + t
            );
          }),
          (e.isAbsolute = function (t) {
            return "/" === t.charAt(0);
          }),
          (e.join = function () {
            var t = Array.prototype.slice.call(arguments, 0);
            return e.normalize(
              i(t, function (t, e) {
                if ("string" !== typeof t)
                  throw new TypeError("Arguments to path.join must be strings");
                return t;
              }).join("/")
            );
          }),
          (e.relative = function (t, n) {
            function r(t) {
              for (var e = 0; e < t.length; e++) if ("" !== t[e]) break;
              for (var n = t.length - 1; n >= 0; n--) if ("" !== t[n]) break;
              return e > n ? [] : t.slice(e, n - e + 1);
            }
            (t = e.resolve(t).substr(1)), (n = e.resolve(n).substr(1));
            for (
              var i = r(t.split("/")),
                a = r(n.split("/")),
                o = Math.min(i.length, a.length),
                c = o,
                u = 0;
              u < o;
              u++
            )
              if (i[u] !== a[u]) {
                c = u;
                break;
              }
            var l = [];
            for (u = c; u < i.length; u++) l.push("..");
            return (l = l.concat(a.slice(c))), l.join("/");
          }),
          (e.sep = "/"),
          (e.delimiter = ":"),
          (e.dirname = function (t) {
            if (("string" !== typeof t && (t += ""), 0 === t.length))
              return ".";
            for (
              var e = t.charCodeAt(0),
                n = 47 === e,
                r = -1,
                i = !0,
                a = t.length - 1;
              a >= 1;
              --a
            )
              if (((e = t.charCodeAt(a)), 47 === e)) {
                if (!i) {
                  r = a;
                  break;
                }
              } else i = !1;
            return -1 === r
              ? n
                ? "/"
                : "."
              : n && 1 === r
              ? "/"
              : t.slice(0, r);
          }),
          (e.basename = function (t, e) {
            var n = r(t);
            return (
              e &&
                n.substr(-1 * e.length) === e &&
                (n = n.substr(0, n.length - e.length)),
              n
            );
          }),
          (e.extname = function (t) {
            "string" !== typeof t && (t += "");
            for (
              var e = -1, n = 0, r = -1, i = !0, a = 0, o = t.length - 1;
              o >= 0;
              --o
            ) {
              var c = t.charCodeAt(o);
              if (47 !== c)
                -1 === r && ((i = !1), (r = o + 1)),
                  46 === c
                    ? -1 === e
                      ? (e = o)
                      : 1 !== a && (a = 1)
                    : -1 !== e && (a = -1);
              else if (!i) {
                n = o + 1;
                break;
              }
            }
            return -1 === e ||
              -1 === r ||
              0 === a ||
              (1 === a && e === r - 1 && e === n + 1)
              ? ""
              : t.slice(e, r);
          });
        var a =
          "b" === "ab".substr(-1)
            ? function (t, e, n) {
                return t.substr(e, n);
              }
            : function (t, e, n) {
                return e < 0 && (e = t.length + e), t.substr(e, n);
              };
      }.call(this, n("4362")));
    },
    e01a: function (t, e, n) {
      "use strict";
      var r = n("23e7"),
        i = n("83ab"),
        a = n("da84"),
        o = n("5135"),
        c = n("861d"),
        u = n("9bf2").f,
        l = n("e893"),
        s = a.Symbol;
      if (
        i &&
        "function" == typeof s &&
        (!("description" in s.prototype) || void 0 !== s().description)
      ) {
        var f = {},
          p = function () {
            var t =
                arguments.length < 1 || void 0 === arguments[0]
                  ? void 0
                  : String(arguments[0]),
              e = this instanceof p ? new s(t) : void 0 === t ? s() : s(t);
            return "" === t && (f[e] = !0), e;
          };
        l(p, s);
        var d = (p.prototype = s.prototype);
        d.constructor = p;
        var h = d.toString,
          v = "Symbol(test)" == String(s("test")),
          b = /^Symbol\((.*)\)[^)]+$/;
        u(d, "description", {
          configurable: !0,
          get: function () {
            var t = c(this) ? this.valueOf() : this,
              e = h.call(t);
            if (o(f, t)) return "";
            var n = v ? e.slice(7, -1) : e.replace(b, "$1");
            return "" === n ? void 0 : n;
          },
        }),
          r({ global: !0, forced: !0 }, { Symbol: p });
      }
    },
    e092: function (t, e, n) {
      var r = n("24fb");
      (e = r(!1)),
        e.push([
          t.i,
          ".stop-modal .s-button+.s-button[data-v-61d12636]{margin-left:20px}.stop-modal[data-v-61d12636] .s-modal_bg{z-index:6000}",
          "",
        ]),
        (t.exports = e);
    },
    e163: function (t, e, n) {
      var r = n("5135"),
        i = n("7b0b"),
        a = n("f772"),
        o = n("e177"),
        c = a("IE_PROTO"),
        u = Object.prototype;
      t.exports = o
        ? Object.getPrototypeOf
        : function (t) {
            return (
              (t = i(t)),
              r(t, c)
                ? t[c]
                : "function" == typeof t.constructor &&
                  t instanceof t.constructor
                ? t.constructor.prototype
                : t instanceof Object
                ? u
                : null
            );
          };
    },
    e177: function (t, e, n) {
      var r = n("d039");
      t.exports = !r(function () {
        function t() {}
        return (
          (t.prototype.constructor = null),
          Object.getPrototypeOf(new t()) !== t.prototype
        );
      });
    },
    e1ec: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return a;
      });
      n("a4d3"), n("e01a"), n("d3b7");
      var r = n("8165"),
        i = Symbol(),
        a = function (t) {
          var e = Object(r["inject"])(i, null);
          return t ? (Object(r["provide"])(i, t), t) : e;
        };
    },
    e260: function (t, e, n) {
      "use strict";
      var r = n("fc6a"),
        i = n("44d2"),
        a = n("3f8c"),
        o = n("69f3"),
        c = n("7dd0"),
        u = "Array Iterator",
        l = o.set,
        s = o.getterFor(u);
      (t.exports = c(
        Array,
        "Array",
        function (t, e) {
          l(this, { type: u, target: r(t), index: 0, kind: e });
        },
        function () {
          var t = s(this),
            e = t.target,
            n = t.kind,
            r = t.index++;
          return !e || r >= e.length
            ? ((t.target = void 0), { value: void 0, done: !0 })
            : "keys" == n
            ? { value: r, done: !1 }
            : "values" == n
            ? { value: e[r], done: !1 }
            : { value: [r, e[r]], done: !1 };
        },
        "values"
      )),
        (a.Arguments = a.Array),
        i("keys"),
        i("values"),
        i("entries");
    },
    e2cc: function (t, e, n) {
      var r = n("6eeb");
      t.exports = function (t, e, n) {
        for (var i in e) r(t, i, e[i], n);
        return t;
      };
    },
    e439: function (t, e, n) {
      var r = n("23e7"),
        i = n("d039"),
        a = n("fc6a"),
        o = n("06cf").f,
        c = n("83ab"),
        u = i(function () {
          o(1);
        }),
        l = !c || u;
      r(
        { target: "Object", stat: !0, forced: l, sham: !c },
        {
          getOwnPropertyDescriptor: function (t, e) {
            return o(a(t), e);
          },
        }
      );
    },
    e538: function (t, e, n) {
      var r = n("b622");
      e.f = r;
    },
    e667: function (t, e) {
      t.exports = function (t) {
        try {
          return { error: !1, value: t() };
        } catch (e) {
          return { error: !0, value: e };
        }
      };
    },
    e6cf: function (t, e, n) {
      "use strict";
      var r,
        i,
        a,
        o,
        c = n("23e7"),
        u = n("c430"),
        l = n("da84"),
        s = n("d066"),
        f = n("fea9"),
        p = n("6eeb"),
        d = n("e2cc"),
        h = n("d44e"),
        v = n("2626"),
        b = n("861d"),
        m = n("1c0b"),
        g = n("19aa"),
        y = n("c6b6"),
        _ = n("8925"),
        w = n("2266"),
        x = n("1c7e"),
        O = n("4840"),
        T = n("2cf4").set,
        E = n("b575"),
        k = n("cdf9"),
        j = n("44de"),
        C = n("f069"),
        S = n("e667"),
        I = n("69f3"),
        A = n("94ca"),
        L = n("b622"),
        N = n("2d00"),
        R = L("species"),
        M = "Promise",
        D = I.get,
        P = I.set,
        U = I.getterFor(M),
        B = f,
        F = l.TypeError,
        z = l.document,
        X = l.process,
        V = s("fetch"),
        G = C.f,
        $ = G,
        q = "process" == y(X),
        H = !!(z && z.createEvent && l.dispatchEvent),
        W = "unhandledrejection",
        K = "rejectionhandled",
        Y = 0,
        J = 1,
        Z = 2,
        Q = 1,
        tt = 2,
        et = A(M, function () {
          var t = _(B) !== String(B);
          if (!t) {
            if (66 === N) return !0;
            if (!q && "function" != typeof PromiseRejectionEvent) return !0;
          }
          if (u && !B.prototype["finally"]) return !0;
          if (N >= 51 && /native code/.test(B)) return !1;
          var e = B.resolve(1),
            n = function (t) {
              t(
                function () {},
                function () {}
              );
            },
            r = (e.constructor = {});
          return (r[R] = n), !(e.then(function () {}) instanceof n);
        }),
        nt =
          et ||
          !x(function (t) {
            B.all(t)["catch"](function () {});
          }),
        rt = function (t) {
          var e;
          return !(!b(t) || "function" != typeof (e = t.then)) && e;
        },
        it = function (t, e, n) {
          if (!e.notified) {
            e.notified = !0;
            var r = e.reactions;
            E(function () {
              var i = e.value,
                a = e.state == J,
                o = 0;
              while (r.length > o) {
                var c,
                  u,
                  l,
                  s = r[o++],
                  f = a ? s.ok : s.fail,
                  p = s.resolve,
                  d = s.reject,
                  h = s.domain;
                try {
                  f
                    ? (a || (e.rejection === tt && ut(t, e), (e.rejection = Q)),
                      !0 === f
                        ? (c = i)
                        : (h && h.enter(),
                          (c = f(i)),
                          h && (h.exit(), (l = !0))),
                      c === s.promise
                        ? d(F("Promise-chain cycle"))
                        : (u = rt(c))
                        ? u.call(c, p, d)
                        : p(c))
                    : d(i);
                } catch (v) {
                  h && !l && h.exit(), d(v);
                }
              }
              (e.reactions = []),
                (e.notified = !1),
                n && !e.rejection && ot(t, e);
            });
          }
        },
        at = function (t, e, n) {
          var r, i;
          H
            ? ((r = z.createEvent("Event")),
              (r.promise = e),
              (r.reason = n),
              r.initEvent(t, !1, !0),
              l.dispatchEvent(r))
            : (r = { promise: e, reason: n }),
            (i = l["on" + t])
              ? i(r)
              : t === W && j("Unhandled promise rejection", n);
        },
        ot = function (t, e) {
          T.call(l, function () {
            var n,
              r = e.value,
              i = ct(e);
            if (
              i &&
              ((n = S(function () {
                q ? X.emit("unhandledRejection", r, t) : at(W, t, r);
              })),
              (e.rejection = q || ct(e) ? tt : Q),
              n.error)
            )
              throw n.value;
          });
        },
        ct = function (t) {
          return t.rejection !== Q && !t.parent;
        },
        ut = function (t, e) {
          T.call(l, function () {
            q ? X.emit("rejectionHandled", t) : at(K, t, e.value);
          });
        },
        lt = function (t, e, n, r) {
          return function (i) {
            t(e, n, i, r);
          };
        },
        st = function (t, e, n, r) {
          e.done ||
            ((e.done = !0),
            r && (e = r),
            (e.value = n),
            (e.state = Z),
            it(t, e, !0));
        },
        ft = function (t, e, n, r) {
          if (!e.done) {
            (e.done = !0), r && (e = r);
            try {
              if (t === n) throw F("Promise can't be resolved itself");
              var i = rt(n);
              i
                ? E(function () {
                    var r = { done: !1 };
                    try {
                      i.call(n, lt(ft, t, r, e), lt(st, t, r, e));
                    } catch (a) {
                      st(t, r, a, e);
                    }
                  })
                : ((e.value = n), (e.state = J), it(t, e, !1));
            } catch (a) {
              st(t, { done: !1 }, a, e);
            }
          }
        };
      et &&
        ((B = function (t) {
          g(this, B, M), m(t), r.call(this);
          var e = D(this);
          try {
            t(lt(ft, this, e), lt(st, this, e));
          } catch (n) {
            st(this, e, n);
          }
        }),
        (r = function (t) {
          P(this, {
            type: M,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: Y,
            value: void 0,
          });
        }),
        (r.prototype = d(B.prototype, {
          then: function (t, e) {
            var n = U(this),
              r = G(O(this, B));
            return (
              (r.ok = "function" != typeof t || t),
              (r.fail = "function" == typeof e && e),
              (r.domain = q ? X.domain : void 0),
              (n.parent = !0),
              n.reactions.push(r),
              n.state != Y && it(this, n, !1),
              r.promise
            );
          },
          catch: function (t) {
            return this.then(void 0, t);
          },
        })),
        (i = function () {
          var t = new r(),
            e = D(t);
          (this.promise = t),
            (this.resolve = lt(ft, t, e)),
            (this.reject = lt(st, t, e));
        }),
        (C.f = G =
          function (t) {
            return t === B || t === a ? new i(t) : $(t);
          }),
        u ||
          "function" != typeof f ||
          ((o = f.prototype.then),
          p(
            f.prototype,
            "then",
            function (t, e) {
              var n = this;
              return new B(function (t, e) {
                o.call(n, t, e);
              }).then(t, e);
            },
            { unsafe: !0 }
          ),
          "function" == typeof V &&
            c(
              { global: !0, enumerable: !0, forced: !0 },
              {
                fetch: function (t) {
                  return k(B, V.apply(l, arguments));
                },
              }
            ))),
        c({ global: !0, wrap: !0, forced: et }, { Promise: B }),
        h(B, M, !1, !0),
        v(M),
        (a = s(M)),
        c(
          { target: M, stat: !0, forced: et },
          {
            reject: function (t) {
              var e = G(this);
              return e.reject.call(void 0, t), e.promise;
            },
          }
        ),
        c(
          { target: M, stat: !0, forced: u || et },
          {
            resolve: function (t) {
              return k(u && this === a ? B : this, t);
            },
          }
        ),
        c(
          { target: M, stat: !0, forced: nt },
          {
            all: function (t) {
              var e = this,
                n = G(e),
                r = n.resolve,
                i = n.reject,
                a = S(function () {
                  var n = m(e.resolve),
                    a = [],
                    o = 0,
                    c = 1;
                  w(t, function (t) {
                    var u = o++,
                      l = !1;
                    a.push(void 0),
                      c++,
                      n.call(e, t).then(function (t) {
                        l || ((l = !0), (a[u] = t), --c || r(a));
                      }, i);
                  }),
                    --c || r(a);
                });
              return a.error && i(a.value), n.promise;
            },
            race: function (t) {
              var e = this,
                n = G(e),
                r = n.reject,
                i = S(function () {
                  var i = m(e.resolve);
                  w(t, function (t) {
                    i.call(e, t).then(n.resolve, r);
                  });
                });
              return i.error && r(i.value), n.promise;
            },
          }
        );
    },
    e736: function (t, e, n) {
      "use strict";
      n("13d5"), n("cf53");
    },
    e893: function (t, e, n) {
      var r = n("5135"),
        i = n("56ef"),
        a = n("06cf"),
        o = n("9bf2");
      t.exports = function (t, e) {
        for (var n = i(e), c = o.f, u = a.f, l = 0; l < n.length; l++) {
          var s = n[l];
          r(t, s) || c(t, s, u(e, s));
        }
      };
    },
    e8b5: function (t, e, n) {
      var r = n("c6b6");
      t.exports =
        Array.isArray ||
        function (t) {
          return "Array" == r(t);
        };
    },
    e8bc: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      n("d3b7"), n("3ca3"), n("ddb0");
      var r = n("adac");
      function i() {
        for (
          var t = r["b"], e = [], n = arguments.length, i = new Array(n), a = 0;
          a < n;
          a++
        )
          i[a] = arguments[a];
        for (var o = 0, c = i; o < c.length; o++) {
          var u = c[o],
            l = u();
          (t = Object(r["a"])(t, l.cancel)), e.push(l.result);
        }
        return { result: Promise.all(e), cancel: t };
      }
    },
    e95a: function (t, e, n) {
      var r = n("b622"),
        i = n("3f8c"),
        a = r("iterator"),
        o = Array.prototype;
      t.exports = function (t) {
        return void 0 !== t && (i.Array === t || o[a] === t);
      };
    },
    eae0: function (t, e, n) {
      (function (t) {
        var r, i, a;
        n("a4d3"),
          n("e01a"),
          n("944a"),
          n("99af"),
          n("7db0"),
          n("4160"),
          n("a630"),
          n("caad"),
          n("c975"),
          n("a15b"),
          n("d81d"),
          n("13d5"),
          n("fb6a"),
          n("45fc"),
          n("a434"),
          n("0c47"),
          n("23dc"),
          n("a9e3"),
          n("b680"),
          n("b64b"),
          n("d3b7"),
          n("ac1f"),
          n("25f0"),
          n("3ca3"),
          n("466d"),
          n("4d90"),
          n("38cf"),
          n("5319"),
          n("1276"),
          n("2ca0"),
          n("498a"),
          n("159b"),
          n("ddb0");
        var o = n("970b"),
          c = n("5bc3"),
          u = n("278c"),
          l = n("448a"),
          s = n("ded3"),
          f = n("6374"),
          p = n("7037");
        !(function (n, o) {
          "object" == p(e) && "object" == p(t)
            ? (t.exports = o())
            : ((i = []),
              (r = o),
              (a = "function" === typeof r ? r.apply(e, i) : r),
              void 0 === a || (t.exports = a));
        })(window, function () {
          return (function (t) {
            var e = {};
            function n(r) {
              if (e[r]) return e[r].exports;
              var i = (e[r] = { i: r, l: !1, exports: {} });
              return (
                t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports
              );
            }
            return (
              (n.m = t),
              (n.c = e),
              (n.d = function (t, e, r) {
                n.o(t, e) ||
                  Object.defineProperty(t, e, { enumerable: !0, get: r });
              }),
              (n.r = function (t) {
                "undefined" != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module",
                  }),
                  Object.defineProperty(t, "__esModule", { value: !0 });
              }),
              (n.t = function (t, e) {
                if ((1 & e && (t = n(t)), 8 & e)) return t;
                if (4 & e && "object" == p(t) && t && t.__esModule) return t;
                var r = Object.create(null);
                if (
                  (n.r(r),
                  Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: t,
                  }),
                  2 & e && "string" != typeof t)
                )
                  for (var i in t)
                    n.d(
                      r,
                      i,
                      function (e) {
                        return t[e];
                      }.bind(null, i)
                    );
                return r;
              }),
              (n.n = function (t) {
                var e =
                  t && t.__esModule
                    ? function () {
                        return t.default;
                      }
                    : function () {
                        return t;
                      };
                return n.d(e, "a", e), e;
              }),
              (n.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
              }),
              (n.p = ""),
              n((n.s = 1))
            );
          })([
            function (t) {
              t.exports = JSON.parse('{"a":"1.7.4"}');
            },
            function (t, e, n) {
              "use strict";
              n.r(e);
              var r = {};
              function i(t, e, n, r) {
                var i =
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : {};
                e instanceof HTMLCollection || e instanceof NodeList
                  ? (e = Array.from(e))
                  : Array.isArray(e) || (e = [e]),
                  Array.isArray(n) || (n = [n]);
                var a,
                  o = f(e);
                try {
                  for (o.s(); !(a = o.n()).done; ) {
                    var c,
                      u = a.value,
                      l = f(n);
                    try {
                      for (l.s(); !(c = l.n()).done; ) {
                        var p = c.value;
                        u[t](p, r, s({ capture: !1 }, i));
                      }
                    } catch (d) {
                      l.e(d);
                    } finally {
                      l.f();
                    }
                  }
                } catch (d) {
                  o.e(d);
                } finally {
                  o.f();
                }
                return Array.prototype.slice.call(arguments, 1);
              }
              n.r(r),
                n.d(r, "on", function () {
                  return a;
                }),
                n.d(r, "off", function () {
                  return d;
                }),
                n.d(r, "createElementFromString", function () {
                  return h;
                }),
                n.d(r, "createFromTemplate", function () {
                  return v;
                }),
                n.d(r, "eventPath", function () {
                  return b;
                }),
                n.d(r, "resolveElement", function () {
                  return m;
                }),
                n.d(r, "adjustableInputNumbers", function () {
                  return g;
                });
              var a = i.bind(null, "addEventListener"),
                d = i.bind(null, "removeEventListener");
              function h(t) {
                var e = document.createElement("div");
                return (e.innerHTML = t.trim()), e.firstElementChild;
              }
              function v(t) {
                var e = function (t, e) {
                    var n = t.getAttribute(e);
                    return t.removeAttribute(e), n;
                  },
                  n = function t(n) {
                    var r =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      i = e(n, ":obj"),
                      a = e(n, ":ref"),
                      o = i ? (r[i] = {}) : r;
                    a && (r[a] = n);
                    for (
                      var c = 0, u = Array.from(n.children);
                      c < u.length;
                      c++
                    ) {
                      var l = u[c],
                        s = e(l, ":arr"),
                        f = t(l, s ? {} : o);
                      s &&
                        (o[s] || (o[s] = [])).push(
                          Object.keys(f).length ? f : l
                        );
                    }
                    return r;
                  };
                return n(h(t));
              }
              function b(t) {
                var e = t.path || (t.composedPath && t.composedPath());
                if (e) return e;
                var n = t.target.parentElement;
                for (e = [t.target, n]; (n = n.parentElement); ) e.push(n);
                return e.push(document, window), e;
              }
              function m(t) {
                return t instanceof Element
                  ? t
                  : "string" == typeof t
                  ? t.split(/>>/g).reduce(function (t, e, n, r) {
                      return (
                        (t = t.querySelector(e)),
                        n < r.length - 1 ? t.shadowRoot : t
                      );
                    }, document)
                  : null;
              }
              function g(t) {
                var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : function (t) {
                        return t;
                      };
                function n(n) {
                  var r =
                      [0.001, 0.01, 0.1][Number(n.shiftKey || 2 * n.ctrlKey)] *
                      (n.deltaY < 0 ? 1 : -1),
                    i = 0,
                    a = t.selectionStart;
                  (t.value = t.value.replace(/[\d.]+/g, function (t, n) {
                    return n <= a && n + t.length >= a
                      ? ((a = n), e(Number(t), r, i))
                      : (i++, t);
                  })),
                    t.focus(),
                    t.setSelectionRange(a, a),
                    n.preventDefault(),
                    t.dispatchEvent(new Event("input"));
                }
                a(t, "focus", function () {
                  return a(window, "wheel", n, { passive: !1 });
                }),
                  a(t, "blur", function () {
                    return d(window, "wheel", n);
                  });
              }
              var y = n(0),
                _ = Math.min,
                w = Math.max,
                x = Math.floor,
                O = Math.round;
              function T(t, e, n) {
                (e /= 100), (n /= 100);
                var r = x((t = (t / 360) * 6)),
                  i = t - r,
                  a = n * (1 - e),
                  o = n * (1 - i * e),
                  c = n * (1 - (1 - i) * e),
                  u = r % 6;
                return [
                  255 * [n, o, a, a, c, n][u],
                  255 * [c, n, n, o, a, a][u],
                  255 * [a, a, c, n, n, o][u],
                ];
              }
              function E(t, e, n) {
                var r = ((2 - (e /= 100)) * (n /= 100)) / 2;
                return (
                  0 !== r &&
                    (e =
                      1 === r
                        ? 0
                        : r < 0.5
                        ? (e * n) / (2 * r)
                        : (e * n) / (2 - 2 * r)),
                  [t, 100 * e, 100 * r]
                );
              }
              function k(t, e, n) {
                var r,
                  i,
                  a = _((t /= 255), (e /= 255), (n /= 255)),
                  o = w(t, e, n),
                  c = o - a;
                if (0 === c) r = i = 0;
                else {
                  i = c / o;
                  var u = ((o - t) / 6 + c / 2) / c,
                    l = ((o - e) / 6 + c / 2) / c,
                    s = ((o - n) / 6 + c / 2) / c;
                  t === o
                    ? (r = s - l)
                    : e === o
                    ? (r = 1 / 3 + u - s)
                    : n === o && (r = 2 / 3 + l - u),
                    r < 0 ? (r += 1) : r > 1 && (r -= 1);
                }
                return [360 * r, 100 * i, 100 * o];
              }
              function j(t, e, n, r) {
                return (
                  (e /= 100),
                  (n /= 100),
                  l(
                    k(
                      255 * (1 - _(1, (t /= 100) * (1 - (r /= 100)) + r)),
                      255 * (1 - _(1, e * (1 - r) + r)),
                      255 * (1 - _(1, n * (1 - r) + r))
                    )
                  )
                );
              }
              function C(t, e, n) {
                e /= 100;
                var r =
                    ((2 * (e *= (n /= 100) < 0.5 ? n : 1 - n)) / (n + e)) * 100,
                  i = 100 * (n + e);
                return [t, isNaN(r) ? 0 : r, i];
              }
              function S(t) {
                return k.apply(
                  void 0,
                  l(
                    t.match(/.{2}/g).map(function (t) {
                      return parseInt(t, 16);
                    })
                  )
                );
              }
              function I(t) {
                t = t.match(/^[a-zA-Z]+$/)
                  ? (function (t) {
                      if ("black" === t.toLowerCase()) return "#000";
                      var e = document.createElement("canvas").getContext("2d");
                      return (
                        (e.fillStyle = t),
                        "#000" === e.fillStyle ? null : e.fillStyle
                      );
                    })(t)
                  : t;
                var e,
                  n = {
                    cmyk: /^cmyk[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)/i,
                    rgba: /^((rgba)|rgb)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,
                    hsla: /^((hsla)|hsl)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,
                    hsva: /^((hsva)|hsv)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,
                    hexa: /^#?(([\dA-Fa-f]{3,4})|([\dA-Fa-f]{6})|([\dA-Fa-f]{8}))$/i,
                  },
                  r = function (t) {
                    return t.map(function (t) {
                      return /^(|\d+)\.\d+|\d+$/.test(t) ? Number(t) : void 0;
                    });
                  };
                t: for (var i in n)
                  if ((e = n[i].exec(t))) {
                    var a = function (t) {
                      return !!e[2] == ("number" == typeof t);
                    };
                    switch (i) {
                      case "cmyk":
                        var o = r(e),
                          c = u(o, 5),
                          s = c[1],
                          f = c[2],
                          p = c[3],
                          d = c[4];
                        if (s > 100 || f > 100 || p > 100 || d > 100) break t;
                        return { values: j(s, f, p, d), type: i };
                      case "rgba":
                        var h = r(e),
                          v = u(h, 7),
                          b = v[3],
                          m = v[4],
                          g = v[5],
                          y = v[6];
                        if (
                          b > 255 ||
                          m > 255 ||
                          g > 255 ||
                          y < 0 ||
                          y > 1 ||
                          !a(y)
                        )
                          break t;
                        return {
                          values: [].concat(l(k(b, m, g)), [y]),
                          a: y,
                          type: i,
                        };
                      case "hexa":
                        var _ = e,
                          w = u(_, 2),
                          x = w[1];
                        (4 !== x.length && 3 !== x.length) ||
                          (x = x
                            .split("")
                            .map(function (t) {
                              return t + t;
                            })
                            .join(""));
                        var O = x.substring(0, 6),
                          T = x.substring(6);
                        return (
                          (T = T ? parseInt(T, 16) / 255 : void 0),
                          { values: [].concat(l(S(O)), [T]), a: T, type: i }
                        );
                      case "hsla":
                        var E = r(e),
                          I = u(E, 7),
                          A = I[3],
                          L = I[4],
                          N = I[5],
                          R = I[6];
                        if (
                          A > 360 ||
                          L > 100 ||
                          N > 100 ||
                          R < 0 ||
                          R > 1 ||
                          !a(R)
                        )
                          break t;
                        return {
                          values: [].concat(l(C(A, L, N)), [R]),
                          a: R,
                          type: i,
                        };
                      case "hsva":
                        var M = r(e),
                          D = u(M, 7),
                          P = D[3],
                          U = D[4],
                          B = D[5],
                          F = D[6];
                        if (
                          P > 360 ||
                          U > 100 ||
                          B > 100 ||
                          F < 0 ||
                          F > 1 ||
                          !a(F)
                        )
                          break t;
                        return { values: [P, U, B, F], a: F, type: i };
                    }
                  }
                return { values: null, type: null };
              }
              function A() {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0,
                  n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 0,
                  r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 1,
                  i = function (t, e) {
                    return function () {
                      var n =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : -1;
                      return e(
                        ~n
                          ? t.map(function (t) {
                              return Number(t.toFixed(n));
                            })
                          : t
                      );
                    };
                  },
                  a = {
                    h: t,
                    s: e,
                    v: n,
                    a: r,
                    toHSVA: function () {
                      var t = [a.h, a.s, a.v, a.a];
                      return (
                        (t.toString = i(t, function (t) {
                          return "hsva("
                            .concat(t[0], ", ")
                            .concat(t[1], "%, ")
                            .concat(t[2], "%, ")
                            .concat(a.a, ")");
                        })),
                        t
                      );
                    },
                    toHSLA: function () {
                      var t = [].concat(l(E(a.h, a.s, a.v)), [a.a]);
                      return (
                        (t.toString = i(t, function (t) {
                          return "hsla("
                            .concat(t[0], ", ")
                            .concat(t[1], "%, ")
                            .concat(t[2], "%, ")
                            .concat(a.a, ")");
                        })),
                        t
                      );
                    },
                    toRGBA: function () {
                      var t = [].concat(l(T(a.h, a.s, a.v)), [a.a]);
                      return (
                        (t.toString = i(t, function (t) {
                          return "rgba("
                            .concat(t[0], ", ")
                            .concat(t[1], ", ")
                            .concat(t[2], ", ")
                            .concat(a.a, ")");
                        })),
                        t
                      );
                    },
                    toCMYK: function () {
                      var t = (function (t, e, n) {
                        var r = T(t, e, n),
                          i = r[0] / 255,
                          a = r[1] / 255,
                          o = r[2] / 255,
                          c = _(1 - i, 1 - a, 1 - o);
                        return [
                          100 * (1 === c ? 0 : (1 - i - c) / (1 - c)),
                          100 * (1 === c ? 0 : (1 - a - c) / (1 - c)),
                          100 * (1 === c ? 0 : (1 - o - c) / (1 - c)),
                          100 * c,
                        ];
                      })(a.h, a.s, a.v);
                      return (
                        (t.toString = i(t, function (t) {
                          return "cmyk("
                            .concat(t[0], "%, ")
                            .concat(t[1], "%, ")
                            .concat(t[2], "%, ")
                            .concat(t[3], "%)");
                        })),
                        t
                      );
                    },
                    toHEXA: function () {
                      var t = (function (t, e, n) {
                          return T(t, e, n).map(function (t) {
                            return O(t).toString(16).padStart(2, "0");
                          });
                        })(a.h, a.s, a.v),
                        e =
                          a.a >= 1
                            ? ""
                            : Number((255 * a.a).toFixed(0))
                                .toString(16)
                                .toUpperCase()
                                .padStart(2, "0");
                      return (
                        e && t.push(e),
                        (t.toString = function () {
                          return "#".concat(t.join("").toUpperCase());
                        }),
                        t
                      );
                    },
                    clone: function () {
                      return A(a.h, a.s, a.v, a.a);
                    },
                  };
                return a;
              }
              var L = function (t) {
                return Math.max(Math.min(t, 1), 0);
              };
              function N(t) {
                var e = {
                    options: Object.assign(
                      {
                        lock: null,
                        onchange: function () {
                          return 0;
                        },
                        onstop: function () {
                          return 0;
                        },
                      },
                      t
                    ),
                    _keyboard: function (t) {
                      var n = e.options,
                        r = t.type,
                        i = t.key;
                      if (document.activeElement === n.wrapper) {
                        var a = e.options.lock,
                          o = "ArrowUp" === i,
                          c = "ArrowRight" === i,
                          u = "ArrowDown" === i,
                          l = "ArrowLeft" === i;
                        if ("keydown" === r && (o || c || u || l)) {
                          var s = 0,
                            f = 0;
                          "v" === a
                            ? (s = o || c ? 1 : -1)
                            : "h" === a
                            ? (s = o || c ? -1 : 1)
                            : ((f = o ? -1 : u ? 1 : 0),
                              (s = l ? -1 : c ? 1 : 0)),
                            e.update(
                              L(e.cache.x + 0.01 * s),
                              L(e.cache.y + 0.01 * f)
                            ),
                            t.preventDefault();
                        } else
                          i.startsWith("Arrow") &&
                            (e.options.onstop(), t.preventDefault());
                      }
                    },
                    _tapstart: function (t) {
                      a(
                        document,
                        ["mouseup", "touchend", "touchcancel"],
                        e._tapstop
                      ),
                        a(document, ["mousemove", "touchmove"], e._tapmove),
                        t.cancelable && t.preventDefault(),
                        e._tapmove(t);
                    },
                    _tapmove: function (t) {
                      var n = e.options,
                        r = e.cache,
                        i = n.lock,
                        a = n.element,
                        o = n.wrapper,
                        c = o.getBoundingClientRect(),
                        u = 0,
                        l = 0;
                      if (t) {
                        var s = t && t.touches && t.touches[0];
                        (u = t ? (s || t).clientX : 0),
                          (l = t ? (s || t).clientY : 0),
                          u < c.left
                            ? (u = c.left)
                            : u > c.left + c.width && (u = c.left + c.width),
                          l < c.top
                            ? (l = c.top)
                            : l > c.top + c.height && (l = c.top + c.height),
                          (u -= c.left),
                          (l -= c.top);
                      } else r && ((u = r.x * c.width), (l = r.y * c.height));
                      "h" !== i &&
                        (a.style.left = "calc("
                          .concat((u / c.width) * 100, "% - ")
                          .concat(a.offsetWidth / 2, "px)")),
                        "v" !== i &&
                          (a.style.top = "calc("
                            .concat((l / c.height) * 100, "% - ")
                            .concat(a.offsetHeight / 2, "px)")),
                        (e.cache = { x: u / c.width, y: l / c.height });
                      var f = L(u / c.width),
                        p = L(l / c.height);
                      switch (i) {
                        case "v":
                          return n.onchange(f);
                        case "h":
                          return n.onchange(p);
                        default:
                          return n.onchange(f, p);
                      }
                    },
                    _tapstop: function () {
                      e.options.onstop(),
                        d(
                          document,
                          ["mouseup", "touchend", "touchcancel"],
                          e._tapstop
                        ),
                        d(document, ["mousemove", "touchmove"], e._tapmove);
                    },
                    trigger: function () {
                      e._tapmove();
                    },
                    update: function () {
                      var t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 0,
                        n =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 0,
                        r = e.options.wrapper.getBoundingClientRect(),
                        i = r.left,
                        a = r.top,
                        o = r.width,
                        c = r.height;
                      "h" === e.options.lock && (n = t),
                        e._tapmove({ clientX: i + o * t, clientY: a + c * n });
                    },
                    destroy: function () {
                      var t = e.options,
                        n = e._tapstart,
                        r = e._keyboard;
                      d(document, ["keydown", "keyup"], r),
                        d([t.wrapper, t.element], "mousedown", n),
                        d([t.wrapper, t.element], "touchstart", n, {
                          passive: !1,
                        });
                    },
                  },
                  n = e.options,
                  r = e._tapstart,
                  i = e._keyboard;
                return (
                  a([n.wrapper, n.element], "mousedown", r),
                  a([n.wrapper, n.element], "touchstart", r, { passive: !1 }),
                  a(document, ["keydown", "keyup"], i),
                  e
                );
              }
              function R() {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                t = Object.assign(
                  {
                    onchange: function () {
                      return 0;
                    },
                    className: "",
                    elements: [],
                  },
                  t
                );
                var e = a(t.elements, "click", function (e) {
                  t.elements.forEach(function (n) {
                    return n.classList[e.target === n ? "add" : "remove"](
                      t.className
                    );
                  }),
                    t.onchange(e),
                    e.stopPropagation();
                });
                return {
                  destroy: function () {
                    return d.apply(void 0, l(e));
                  },
                };
              }
              /*! NanoPop 2.1.0 MIT | https://github.com/Simonwep/nanopop */ var M =
                  {
                    variantFlipOrder: {
                      start: "sme",
                      middle: "mse",
                      end: "ems",
                    },
                    positionFlipOrder: {
                      top: "tbrl",
                      right: "rltb",
                      bottom: "btrl",
                      left: "lrbt",
                    },
                    position: "bottom",
                    margin: 8,
                  },
                D = function (t, e, n) {
                  var r =
                    "object" != p(t) || t instanceof HTMLElement
                      ? s({ reference: t, popper: e }, n)
                      : t;
                  return {
                    update: function () {
                      var t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : r,
                        e = Object.assign(r, t),
                        n = e.reference,
                        i = e.popper;
                      if (!i || !n)
                        throw new Error(
                          "Popper- or reference-element missing."
                        );
                      return (function (t, e, n) {
                        var r = s(
                            s(
                              {
                                container:
                                  document.documentElement.getBoundingClientRect(),
                              },
                              M
                            ),
                            n
                          ),
                          i = r.container,
                          a = r.margin,
                          o = r.position,
                          c = r.variantFlipOrder,
                          l = r.positionFlipOrder,
                          p = e.style,
                          d = p.left,
                          h = p.top;
                        (e.style.left = "0"), (e.style.top = "0");
                        var v,
                          b = t.getBoundingClientRect(),
                          m = e.getBoundingClientRect(),
                          g = {
                            t: b.top - m.height - a,
                            b: b.bottom + a,
                            r: b.right + a,
                            l: b.left - m.width - a,
                          },
                          y = {
                            vs: b.left,
                            vm: b.left + b.width / 2 + -m.width / 2,
                            ve: b.left + b.width - m.width,
                            hs: b.top,
                            hm: b.bottom - b.height / 2 - m.height / 2,
                            he: b.bottom - m.height,
                          },
                          _ = o.split("-"),
                          w = u(_, 2),
                          x = w[0],
                          O = w[1],
                          T = void 0 === O ? "middle" : O,
                          E = l[x],
                          k = c[T],
                          j = i.top,
                          C = i.left,
                          S = i.bottom,
                          I = i.right,
                          A = f(E);
                        try {
                          for (A.s(); !(v = A.n()).done; ) {
                            var L = v.value,
                              N = "t" === L || "b" === L,
                              R = g[L],
                              D = N ? ["top", "left"] : ["left", "top"],
                              P = u(D, 2),
                              U = P[0],
                              B = P[1],
                              F = N ? [m.height, m.width] : [m.width, m.height],
                              z = u(F, 2),
                              X = z[0],
                              V = z[1],
                              G = N ? [S, I] : [I, S],
                              $ = u(G, 2),
                              q = $[0],
                              H = $[1],
                              W = N ? [j, C] : [C, j],
                              K = u(W, 2),
                              Y = K[0],
                              J = K[1];
                            if (!(R < Y || R + X > q)) {
                              var Z,
                                Q = f(k);
                              try {
                                for (Q.s(); !(Z = Q.n()).done; ) {
                                  var tt = Z.value,
                                    et = y[(N ? "v" : "h") + tt];
                                  if (!(et < J || et + V > H))
                                    return (
                                      (e.style[B] = et - m[B] + "px"),
                                      (e.style[U] = R - m[U] + "px"),
                                      L + tt
                                    );
                                }
                              } catch (nt) {
                                Q.e(nt);
                              } finally {
                                Q.f();
                              }
                            }
                          }
                        } catch (nt) {
                          A.e(nt);
                        } finally {
                          A.f();
                        }
                        return (e.style.left = d), (e.style.top = h), null;
                      })(n, i, r);
                    },
                  };
                };
              function P(t, e, n) {
                return (
                  e in t
                    ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[e] = n),
                  t
                );
              }
              var U = (function () {
                function t(e) {
                  var n = this;
                  o(this, t),
                    P(this, "_initializingActive", !0),
                    P(this, "_recalc", !0),
                    P(this, "_nanopop", null),
                    P(this, "_root", null),
                    P(this, "_color", A()),
                    P(this, "_lastColor", A()),
                    P(this, "_swatchColors", []),
                    P(this, "_eventListener", {
                      init: [],
                      save: [],
                      hide: [],
                      show: [],
                      clear: [],
                      change: [],
                      changestop: [],
                      cancel: [],
                      swatchselect: [],
                    }),
                    (this.options = e =
                      Object.assign(s({}, t.DEFAULT_OPTIONS), e));
                  var r = e,
                    i = r.swatches,
                    a = r.components,
                    c = r.theme,
                    u = r.sliders,
                    l = r.lockOpacity,
                    f = r.padding;
                  ["nano", "monolith"].includes(c) && !u && (e.sliders = "h"),
                    a.interaction || (a.interaction = {});
                  var p = a.preview,
                    d = a.opacity,
                    h = a.hue,
                    v = a.palette;
                  (a.opacity = !l && d),
                    (a.palette = v || p || d || h),
                    this._preBuild(),
                    this._buildComponents(),
                    this._bindEvents(),
                    this._finalBuild(),
                    i &&
                      i.length &&
                      i.forEach(function (t) {
                        return n.addSwatch(t);
                      });
                  var b = this._root,
                    m = b.button,
                    g = b.app;
                  (this._nanopop = D(m, g, { margin: f })),
                    m.setAttribute("role", "button"),
                    m.setAttribute("aria-label", this._t("btn:toggle"));
                  var y = this;
                  requestAnimationFrame(function t() {
                    if (!g.offsetWidth) return requestAnimationFrame(t);
                    y.setColor(e.default),
                      y._rePositioningPicker(),
                      e.defaultRepresentation &&
                        ((y._representation = e.defaultRepresentation),
                        y.setColorRepresentation(y._representation)),
                      e.showAlways && y.show(),
                      (y._initializingActive = !1),
                      y._emit("init");
                  });
                }
                return (
                  c(t, [
                    {
                      key: "_preBuild",
                      value: function () {
                        for (
                          var t = this.options, e = 0, n = ["el", "container"];
                          e < n.length;
                          e++
                        ) {
                          var r = n[e];
                          t[r] = m(t[r]);
                        }
                        (this._root = (function (t) {
                          var e = t.options,
                            n = e.components,
                            r = e.useAsButton,
                            i = e.inline,
                            a = e.appClass,
                            o = e.theme,
                            c = e.lockOpacity,
                            u = function (t) {
                              return t ? "" : 'style="display:none" hidden';
                            },
                            l = function (e) {
                              return t._t(e);
                            },
                            s = v(
                              '\n      <div :ref="root" class="pickr">\n\n        '
                                .concat(
                                  r
                                    ? ""
                                    : '<button type="button" :ref="button" class="pcr-button"></button>',
                                  '\n\n        <div :ref="app" class="pcr-app '
                                )
                                .concat(a || "", '" data-theme="')
                                .concat(o, '" ')
                                .concat(
                                  i ? 'style="position: unset"' : "",
                                  ' aria-label="'
                                )
                                .concat(
                                  l("ui:dialog"),
                                  '" role="window">\n          <div class="pcr-selection" '
                                )
                                .concat(
                                  u(n.palette),
                                  '>\n            <div :obj="preview" class="pcr-color-preview" '
                                )
                                .concat(
                                  u(n.preview),
                                  '>\n              <button type="button" :ref="lastColor" class="pcr-last-color" aria-label="'
                                )
                                .concat(
                                  l("btn:last-color"),
                                  '"></button>\n              <div :ref="currentColor" class="pcr-current-color"></div>\n            </div>\n\n            <div :obj="palette" class="pcr-color-palette">\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="palette" class="pcr-palette" tabindex="0" aria-label="'
                                )
                                .concat(
                                  l("aria:palette"),
                                  '" role="listbox"></div>\n            </div>\n\n            <div :obj="hue" class="pcr-color-chooser" '
                                )
                                .concat(
                                  u(n.hue),
                                  '>\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="slider" class="pcr-hue pcr-slider" tabindex="0" aria-label="'
                                )
                                .concat(
                                  l("aria:hue"),
                                  '" role="slider"></div>\n            </div>\n\n            <div :obj="opacity" class="pcr-color-opacity" '
                                )
                                .concat(
                                  u(n.opacity),
                                  '>\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="slider" class="pcr-opacity pcr-slider" tabindex="0" aria-label="'
                                )
                                .concat(
                                  l("aria:opacity"),
                                  '" role="slider"></div>\n            </div>\n          </div>\n\n          <div class="pcr-swatches '
                                )
                                .concat(
                                  n.palette ? "" : "pcr-last",
                                  '" :ref="swatches"></div>\n\n          <div :obj="interaction" class="pcr-interaction" '
                                )
                                .concat(
                                  u(Object.keys(n.interaction).length),
                                  '>\n            <input :ref="result" class="pcr-result" type="text" spellcheck="false" '
                                )
                                .concat(u(n.interaction.input), ' aria-label="')
                                .concat(
                                  l("aria:input"),
                                  '">\n\n            <input :arr="options" class="pcr-type" data-type="HEXA" value="'
                                )
                                .concat(c ? "HEX" : "HEXA", '" type="button" ')
                                .concat(
                                  u(n.interaction.hex),
                                  '>\n            <input :arr="options" class="pcr-type" data-type="RGBA" value="'
                                )
                                .concat(c ? "RGB" : "RGBA", '" type="button" ')
                                .concat(
                                  u(n.interaction.rgba),
                                  '>\n            <input :arr="options" class="pcr-type" data-type="HSLA" value="'
                                )
                                .concat(c ? "HSL" : "HSLA", '" type="button" ')
                                .concat(
                                  u(n.interaction.hsla),
                                  '>\n            <input :arr="options" class="pcr-type" data-type="HSVA" value="'
                                )
                                .concat(c ? "HSV" : "HSVA", '" type="button" ')
                                .concat(
                                  u(n.interaction.hsva),
                                  '>\n            <input :arr="options" class="pcr-type" data-type="CMYK" value="CMYK" type="button" '
                                )
                                .concat(
                                  u(n.interaction.cmyk),
                                  '>\n\n            <input :ref="save" class="pcr-save" value="'
                                )
                                .concat(l("btn:save"), '" type="button" ')
                                .concat(u(n.interaction.save), ' aria-label="')
                                .concat(
                                  l("aria:btn:save"),
                                  '">\n            <input :ref="cancel" class="pcr-cancel" value="'
                                )
                                .concat(l("btn:cancel"), '" type="button" ')
                                .concat(
                                  u(n.interaction.cancel),
                                  ' aria-label="'
                                )
                                .concat(
                                  l("aria:btn:cancel"),
                                  '">\n            <input :ref="clear" class="pcr-clear" value="'
                                )
                                .concat(l("btn:clear"), '" type="button" ')
                                .concat(u(n.interaction.clear), ' aria-label="')
                                .concat(
                                  l("aria:btn:clear"),
                                  '">\n          </div>\n        </div>\n      </div>\n    '
                                )
                            ),
                            f = s.interaction;
                          return (
                            f.options.find(function (t) {
                              return !t.hidden && !t.classList.add("active");
                            }),
                            (f.type = function () {
                              return f.options.find(function (t) {
                                return t.classList.contains("active");
                              });
                            }),
                            s
                          );
                        })(this)),
                          t.useAsButton && (this._root.button = t.el),
                          t.container.appendChild(this._root.root);
                      },
                    },
                    {
                      key: "_finalBuild",
                      value: function () {
                        var t = this.options,
                          e = this._root;
                        if ((t.container.removeChild(e.root), t.inline)) {
                          var n = t.el.parentElement;
                          t.el.nextSibling
                            ? n.insertBefore(e.app, t.el.nextSibling)
                            : n.appendChild(e.app);
                        } else t.container.appendChild(e.app);
                        t.useAsButton
                          ? t.inline && t.el.remove()
                          : t.el.parentNode.replaceChild(e.root, t.el),
                          t.disabled && this.disable(),
                          t.comparison ||
                            ((e.button.style.transition = "none"),
                            t.useAsButton ||
                              (e.preview.lastColor.style.transition = "none")),
                          this.hide();
                      },
                    },
                    {
                      key: "_buildComponents",
                      value: function () {
                        var t = this,
                          e = this,
                          n = this.options.components,
                          r = (e.options.sliders || "v").repeat(2),
                          i = r.match(/^[vh]+$/g) ? r : [],
                          a = u(i, 2),
                          o = a[0],
                          c = a[1],
                          l = function () {
                            return (
                              t._color || (t._color = t._lastColor.clone())
                            );
                          },
                          s = {
                            palette: N({
                              element: e._root.palette.picker,
                              wrapper: e._root.palette.palette,
                              onstop: function () {
                                return e._emit("changestop", e);
                              },
                              onchange: function (t, r) {
                                if (n.palette) {
                                  var i = l(),
                                    a = e._root,
                                    o = e.options,
                                    c = a.preview,
                                    u = c.lastColor,
                                    s = c.currentColor;
                                  e._recalc &&
                                    ((i.s = 100 * t),
                                    (i.v = 100 - 100 * r),
                                    i.v < 0 && (i.v = 0),
                                    e._updateOutput());
                                  var p = i.toRGBA().toString(0);
                                  (this.element.style.background = p),
                                    (this.wrapper.style.background =
                                      "\n                        linear-gradient(to top, rgba(0, 0, 0, "
                                        .concat(
                                          i.a,
                                          "), transparent),\n                        linear-gradient(to left, hsla("
                                        )
                                        .concat(i.h, ", 100%, 50%, ")
                                        .concat(i.a, "), rgba(255, 255, 255, ")
                                        .concat(
                                          i.a,
                                          "))\n                    "
                                        )),
                                    o.comparison
                                      ? o.useAsButton ||
                                        e._lastColor ||
                                        (u.style.color = p)
                                      : ((a.button.style.color = p),
                                        a.button.classList.remove("clear"));
                                  var d,
                                    h = i.toHEXA().toString(),
                                    v = f(e._swatchColors);
                                  try {
                                    for (v.s(); !(d = v.n()).done; ) {
                                      var b = d.value,
                                        m = b.el,
                                        g = b.color;
                                      m.classList[
                                        h === g.toHEXA().toString()
                                          ? "add"
                                          : "remove"
                                      ]("pcr-active");
                                    }
                                  } catch (y) {
                                    v.e(y);
                                  } finally {
                                    v.f();
                                  }
                                  s.style.color = p;
                                }
                              },
                            }),
                            hue: N({
                              lock: "v" === c ? "h" : "v",
                              element: e._root.hue.picker,
                              wrapper: e._root.hue.slider,
                              onstop: function () {
                                return e._emit("changestop", e);
                              },
                              onchange: function (t) {
                                if (n.hue && n.palette) {
                                  var r = l();
                                  e._recalc && (r.h = 360 * t),
                                    (this.element.style.backgroundColor =
                                      "hsl(".concat(r.h, ", 100%, 50%)")),
                                    s.palette.trigger();
                                }
                              },
                            }),
                            opacity: N({
                              lock: "v" === o ? "h" : "v",
                              element: e._root.opacity.picker,
                              wrapper: e._root.opacity.slider,
                              onstop: function () {
                                return e._emit("changestop", e);
                              },
                              onchange: function (t) {
                                if (n.opacity && n.palette) {
                                  var r = l();
                                  e._recalc &&
                                    (r.a = Math.round(100 * t) / 100),
                                    (this.element.style.background =
                                      "rgba(0, 0, 0, ".concat(r.a, ")")),
                                    s.palette.trigger();
                                }
                              },
                            }),
                            selectable: R({
                              elements: e._root.interaction.options,
                              className: "active",
                              onchange: function (t) {
                                (e._representation = t.target
                                  .getAttribute("data-type")
                                  .toUpperCase()),
                                  e._recalc && e._updateOutput();
                              },
                            }),
                          };
                        this._components = s;
                      },
                    },
                    {
                      key: "_bindEvents",
                      value: function () {
                        var t = this,
                          e = this._root,
                          n = this.options,
                          r = [
                            a(e.interaction.clear, "click", function () {
                              return t._clearColor();
                            }),
                            a(
                              [e.interaction.cancel, e.preview.lastColor],
                              "click",
                              function () {
                                t._emit("cancel", t),
                                  t.setHSVA.apply(
                                    t,
                                    l(
                                      (t._lastColor || t._color).toHSVA()
                                    ).concat([!0])
                                  );
                              }
                            ),
                            a(e.interaction.save, "click", function () {
                              !t.applyColor() && !n.showAlways && t.hide();
                            }),
                            a(
                              e.interaction.result,
                              ["keyup", "input"],
                              function (e) {
                                t.setColor(e.target.value, !0) &&
                                  !t._initializingActive &&
                                  t._emit("change", t._color),
                                  e.stopImmediatePropagation();
                              }
                            ),
                            a(
                              e.interaction.result,
                              ["focus", "blur"],
                              function (e) {
                                (t._recalc = "blur" === e.type),
                                  t._recalc && t._updateOutput();
                              }
                            ),
                            a(
                              [
                                e.palette.palette,
                                e.palette.picker,
                                e.hue.slider,
                                e.hue.picker,
                                e.opacity.slider,
                                e.opacity.picker,
                              ],
                              ["mousedown", "touchstart"],
                              function () {
                                return (t._recalc = !0);
                              },
                              { passive: !0 }
                            ),
                          ];
                        if (!n.showAlways) {
                          var i = n.closeWithKey;
                          r.push(
                            a(e.button, "click", function () {
                              return t.isOpen() ? t.hide() : t.show();
                            }),
                            a(document, "keyup", function (e) {
                              return (
                                t.isOpen() &&
                                (e.key === i || e.code === i) &&
                                t.hide()
                              );
                            }),
                            a(
                              document,
                              ["touchstart", "mousedown"],
                              function (n) {
                                t.isOpen() &&
                                  !b(n).some(function (t) {
                                    return t === e.app || t === e.button;
                                  }) &&
                                  t.hide();
                              },
                              { capture: !0 }
                            )
                          );
                        }
                        if (n.adjustableNumbers) {
                          var o = {
                            rgba: [255, 255, 255, 1],
                            hsva: [360, 100, 100, 1],
                            hsla: [360, 100, 100, 1],
                            cmyk: [100, 100, 100, 100],
                          };
                          g(e.interaction.result, function (e, n, r) {
                            var i = o[t.getColorRepresentation().toLowerCase()];
                            if (i) {
                              var a = i[r],
                                c = e + (a >= 100 ? 1e3 * n : n);
                              return c <= 0
                                ? 0
                                : Number((c < a ? c : a).toPrecision(3));
                            }
                            return e;
                          });
                        }
                        if (n.autoReposition && !n.inline) {
                          var c = null,
                            u = this;
                          r.push(
                            a(
                              window,
                              ["scroll", "resize"],
                              function () {
                                u.isOpen() &&
                                  (n.closeOnScroll && u.hide(),
                                  null === c
                                    ? ((c = setTimeout(function () {
                                        return (c = null);
                                      }, 100)),
                                      requestAnimationFrame(function t() {
                                        u._rePositioningPicker(),
                                          null !== c &&
                                            requestAnimationFrame(t);
                                      }))
                                    : (clearTimeout(c),
                                      (c = setTimeout(function () {
                                        return (c = null);
                                      }, 100))));
                              },
                              { capture: !0 }
                            )
                          );
                        }
                        this._eventBindings = r;
                      },
                    },
                    {
                      key: "_rePositioningPicker",
                      value: function () {
                        var t = this.options;
                        if (
                          !t.inline &&
                          !this._nanopop.update({
                            container: document.body.getBoundingClientRect(),
                            position: t.position,
                          })
                        ) {
                          var e = this._root.app,
                            n = e.getBoundingClientRect();
                          (e.style.top = "".concat(
                            (window.innerHeight - n.height) / 2,
                            "px"
                          )),
                            (e.style.left = "".concat(
                              (window.innerWidth - n.width) / 2,
                              "px"
                            ));
                        }
                      },
                    },
                    {
                      key: "_updateOutput",
                      value: function () {
                        var t = this._root,
                          e = this._color,
                          n = this.options;
                        if (t.interaction.type()) {
                          var r = "to".concat(
                            t.interaction.type().getAttribute("data-type")
                          );
                          t.interaction.result.value =
                            "function" == typeof e[r]
                              ? e[r]().toString(n.outputPrecision)
                              : "";
                        }
                        !this._initializingActive &&
                          this._recalc &&
                          this._emit("change", e);
                      },
                    },
                    {
                      key: "_clearColor",
                      value: function () {
                        var t =
                            arguments.length > 0 &&
                            void 0 !== arguments[0] &&
                            arguments[0],
                          e = this._root,
                          n = this.options;
                        n.useAsButton ||
                          (e.button.style.color = "rgba(0, 0, 0, 0.15)"),
                          e.button.classList.add("clear"),
                          n.showAlways || this.hide(),
                          (this._lastColor = null),
                          this._initializingActive ||
                            t ||
                            (this._emit("save", null),
                            this._emit("clear", this));
                      },
                    },
                    {
                      key: "_parseLocalColor",
                      value: function (t) {
                        var e = I(t),
                          n = e.values,
                          r = e.type,
                          i = e.a,
                          a = this.options.lockOpacity,
                          o = void 0 !== i && 1 !== i;
                        return (
                          n && 3 === n.length && (n[3] = void 0),
                          { values: !n || (a && o) ? null : n, type: r }
                        );
                      },
                    },
                    {
                      key: "_t",
                      value: function (e) {
                        return this.options.i18n[e] || t.I18N_DEFAULTS[e];
                      },
                    },
                    {
                      key: "_emit",
                      value: function (t) {
                        for (
                          var e = this,
                            n = arguments.length,
                            r = new Array(n > 1 ? n - 1 : 0),
                            i = 1;
                          i < n;
                          i++
                        )
                          r[i - 1] = arguments[i];
                        this._eventListener[t].forEach(function (t) {
                          return t.apply(void 0, r.concat([e]));
                        });
                      },
                    },
                    {
                      key: "on",
                      value: function (t, e) {
                        return this._eventListener[t].push(e), this;
                      },
                    },
                    {
                      key: "off",
                      value: function (t, e) {
                        var n = this._eventListener[t] || [],
                          r = n.indexOf(e);
                        return ~r && n.splice(r, 1), this;
                      },
                    },
                    {
                      key: "addSwatch",
                      value: function (t) {
                        var e = this,
                          n = this._parseLocalColor(t),
                          r = n.values;
                        if (r) {
                          var i = this._swatchColors,
                            o = this._root,
                            c = A.apply(void 0, l(r)),
                            u = h(
                              '<button type="button" style="color: '
                                .concat(
                                  c.toRGBA().toString(0),
                                  '" aria-label="'
                                )
                                .concat(this._t("btn:swatch"), '"/>')
                            );
                          return (
                            o.swatches.appendChild(u),
                            i.push({ el: u, color: c }),
                            this._eventBindings.push(
                              a(u, "click", function () {
                                e.setHSVA.apply(e, l(c.toHSVA()).concat([!0])),
                                  e._emit("swatchselect", c),
                                  e._emit("change", c);
                              })
                            ),
                            !0
                          );
                        }
                        return !1;
                      },
                    },
                    {
                      key: "removeSwatch",
                      value: function (t) {
                        var e = this._swatchColors[t];
                        if (e) {
                          var n = e.el;
                          return (
                            this._root.swatches.removeChild(n),
                            this._swatchColors.splice(t, 1),
                            !0
                          );
                        }
                        return !1;
                      },
                    },
                    {
                      key: "applyColor",
                      value: function () {
                        var t =
                            arguments.length > 0 &&
                            void 0 !== arguments[0] &&
                            arguments[0],
                          e = this._root,
                          n = e.preview,
                          r = e.button,
                          i = this._color.toRGBA().toString(0);
                        return (
                          (n.lastColor.style.color = i),
                          this.options.useAsButton || (r.style.color = i),
                          r.classList.remove("clear"),
                          (this._lastColor = this._color.clone()),
                          this._initializingActive ||
                            t ||
                            this._emit("save", this._color),
                          this
                        );
                      },
                    },
                    {
                      key: "destroy",
                      value: function () {
                        var t = this;
                        this._eventBindings.forEach(function (t) {
                          return d.apply(void 0, l(t));
                        }),
                          Object.keys(this._components).forEach(function (e) {
                            return t._components[e].destroy();
                          });
                      },
                    },
                    {
                      key: "destroyAndRemove",
                      value: function () {
                        var t = this;
                        this.destroy();
                        var e = this._root,
                          n = e.root,
                          r = e.app;
                        n.parentElement && n.parentElement.removeChild(n),
                          r.parentElement.removeChild(r),
                          Object.keys(this).forEach(function (e) {
                            return (t[e] = null);
                          });
                      },
                    },
                    {
                      key: "hide",
                      value: function () {
                        return (
                          this._root.app.classList.remove("visible"),
                          this._emit("hide", this),
                          this
                        );
                      },
                    },
                    {
                      key: "show",
                      value: function () {
                        return (
                          this.options.disabled ||
                            (this._root.app.classList.add("visible"),
                            this._rePositioningPicker(),
                            this._emit("show", this)),
                          this
                        );
                      },
                    },
                    {
                      key: "isOpen",
                      value: function () {
                        return this._root.app.classList.contains("visible");
                      },
                    },
                    {
                      key: "setHSVA",
                      value: function () {
                        var t =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 360,
                          e =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : 0,
                          n =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : 0,
                          r =
                            arguments.length > 3 && void 0 !== arguments[3]
                              ? arguments[3]
                              : 1,
                          i =
                            arguments.length > 4 &&
                            void 0 !== arguments[4] &&
                            arguments[4],
                          a = this._recalc;
                        if (
                          ((this._recalc = !1),
                          t < 0 ||
                            t > 360 ||
                            e < 0 ||
                            e > 100 ||
                            n < 0 ||
                            n > 100 ||
                            r < 0 ||
                            r > 1)
                        )
                          return !1;
                        this._color = A(t, e, n, r);
                        var o = this._components,
                          c = o.hue,
                          u = o.opacity,
                          l = o.palette;
                        return (
                          c.update(t / 360),
                          u.update(r),
                          l.update(e / 100, 1 - n / 100),
                          i || this.applyColor(),
                          a && this._updateOutput(),
                          (this._recalc = a),
                          !0
                        );
                      },
                    },
                    {
                      key: "setColor",
                      value: function (t) {
                        var e =
                          arguments.length > 1 &&
                          void 0 !== arguments[1] &&
                          arguments[1];
                        if (null === t) return this._clearColor(e), !0;
                        var n = this._parseLocalColor(t),
                          r = n.values,
                          i = n.type;
                        if (r) {
                          var a = i.toUpperCase(),
                            o = this._root.interaction.options,
                            c = o.find(function (t) {
                              return t.getAttribute("data-type") === a;
                            });
                          if (c && !c.hidden) {
                            var u,
                              s = f(o);
                            try {
                              for (s.s(); !(u = s.n()).done; ) {
                                var p = u.value;
                                p.classList[p === c ? "add" : "remove"](
                                  "active"
                                );
                              }
                            } catch (d) {
                              s.e(d);
                            } finally {
                              s.f();
                            }
                          }
                          return (
                            !!this.setHSVA.apply(this, l(r).concat([e])) &&
                            this.setColorRepresentation(a)
                          );
                        }
                        return !1;
                      },
                    },
                    {
                      key: "setColorRepresentation",
                      value: function (t) {
                        return (
                          (t = t.toUpperCase()),
                          !!this._root.interaction.options.find(function (e) {
                            return (
                              e.getAttribute("data-type").startsWith(t) &&
                              !e.click()
                            );
                          })
                        );
                      },
                    },
                    {
                      key: "getColorRepresentation",
                      value: function () {
                        return this._representation;
                      },
                    },
                    {
                      key: "getColor",
                      value: function () {
                        return this._color;
                      },
                    },
                    {
                      key: "getSelectedColor",
                      value: function () {
                        return this._lastColor;
                      },
                    },
                    {
                      key: "getRoot",
                      value: function () {
                        return this._root;
                      },
                    },
                    {
                      key: "disable",
                      value: function () {
                        return (
                          this.hide(),
                          (this.options.disabled = !0),
                          this._root.button.classList.add("disabled"),
                          this
                        );
                      },
                    },
                    {
                      key: "enable",
                      value: function () {
                        return (
                          (this.options.disabled = !1),
                          this._root.button.classList.remove("disabled"),
                          this
                        );
                      },
                    },
                  ]),
                  t
                );
              })();
              P(U, "utils", r),
                P(U, "version", y.a),
                P(U, "I18N_DEFAULTS", {
                  "ui:dialog": "color picker dialog",
                  "btn:toggle": "toggle color picker dialog",
                  "btn:swatch": "color swatch",
                  "btn:last-color": "use previous color",
                  "btn:save": "Save",
                  "btn:cancel": "Cancel",
                  "btn:clear": "Clear",
                  "aria:btn:save": "save and close",
                  "aria:btn:cancel": "cancel and close",
                  "aria:btn:clear": "clear and close",
                  "aria:input": "color input field",
                  "aria:palette": "color selection area",
                  "aria:hue": "hue selection slider",
                  "aria:opacity": "selection slider",
                }),
                P(U, "DEFAULT_OPTIONS", {
                  appClass: null,
                  theme: "classic",
                  useAsButton: !1,
                  padding: 8,
                  disabled: !1,
                  comparison: !0,
                  closeOnScroll: !1,
                  outputPrecision: 0,
                  lockOpacity: !1,
                  autoReposition: !0,
                  container: "body",
                  components: { interaction: {} },
                  i18n: {},
                  swatches: null,
                  inline: !1,
                  sliders: null,
                  default: "#42445a",
                  defaultRepresentation: null,
                  position: "bottom-middle",
                  adjustableNumbers: !0,
                  showAlways: !1,
                  closeWithKey: "Escape",
                }),
                P(U, "create", function (t) {
                  return new U(t);
                }),
                (e.default = U);
            },
          ]).default;
        });
      }.call(this, n("62e4")(t)));
    },
    ec56: function (t, e, n) {
      "use strict";
      (function (t) {
        n.d(e, "a", function () {
          return l;
        });
        n("d3b7"), n("96cf");
        var r,
          i = n("1da1"),
          a = n("d4ec"),
          o = n("bee2");
        function c(t) {
          return new Promise(function (e) {
            setTimeout(e, t);
          });
        }
        (function (t) {
          (t[(t["NOT_STARTED"] = 0)] = "NOT_STARTED"),
            (t[(t["MAX_TTL_REACHED"] = 1)] = "MAX_TTL_REACHED"),
            (t[(t["CANCELLED"] = 2)] = "CANCELLED");
        })(r || (r = {}));
        var u = (function () {
          function e(t, n) {
            Object(a["a"])(this, e),
              (this.cancelled = !1),
              (this.paused = !1),
              (this.createJob = t),
              (this.options = n),
              (this.ttl = "number" === typeof n.ttl ? n.ttl : 1 / 0),
              (this.interval = n.interval),
              (this.predict = n.until),
              (this.lazy = !!n.lazy),
              (this.job = this.tickTock(!0));
          }
          return (
            Object(o["a"])(e, [
              {
                key: "resolve",
                value: function () {
                  return this.job;
                },
              },
              {
                key: "onDone",
                value: function (t) {
                  this.done = t;
                },
              },
              {
                key: "tickTock",
                value: (function () {
                  var e = Object(i["a"])(
                    regeneratorRuntime.mark(function e(n) {
                      var i, a;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!t.server) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt("return", {
                                  error: r.NOT_STARTED,
                                  response: void 0,
                                });
                              case 2:
                                if (!n || !this.lazy) {
                                  e.next = 5;
                                  break;
                                }
                                return (e.next = 5), c(this.interval);
                              case 5:
                                if (!this.cancelled) {
                                  e.next = 7;
                                  break;
                                }
                                return e.abrupt("return", {
                                  error: r.CANCELLED,
                                  response: void 0,
                                });
                              case 7:
                                if (!this.paused) {
                                  e.next = 11;
                                  break;
                                }
                                return (e.next = 10), c(this.interval);
                              case 10:
                                return e.abrupt("return", this.tickTock());
                              case 11:
                                return (
                                  this.cancelLatest && this.cancelLatest(),
                                  (e.prev = 12),
                                  (a = this.createJob()),
                                  (this.cancelLatest = a.cancel),
                                  (e.next = 17),
                                  a.result
                                );
                              case 17:
                                (i = e.sent), (e.next = 24);
                                break;
                              case 20:
                                (e.prev = 20),
                                  (e.t0 = e["catch"](12)),
                                  console.error(e.t0),
                                  (i = void 0);
                              case 24:
                                if (((e.t1 = i), !e.t1)) {
                                  e.next = 29;
                                  break;
                                }
                                return (e.next = 28), this.predict(i);
                              case 28:
                                e.t1 = e.sent;
                              case 29:
                                if (!e.t1) {
                                  e.next = 35;
                                  break;
                                }
                                if (((e.t2 = this.done), !e.t2)) {
                                  e.next = 34;
                                  break;
                                }
                                return (
                                  (e.next = 34), this.done(i, this.options)
                                );
                              case 34:
                                return e.abrupt("return", {
                                  error: void 0,
                                  response: i,
                                });
                              case 35:
                                if ((this.ttl--, !(this.ttl <= 0))) {
                                  e.next = 38;
                                  break;
                                }
                                return e.abrupt("return", {
                                  error: r.MAX_TTL_REACHED,
                                  response: void 0,
                                });
                              case 38:
                                return (e.next = 40), c(this.interval);
                              case 40:
                                return e.abrupt("return", this.tickTock());
                              case 41:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[12, 20]]
                      );
                    })
                  );
                  function n(t) {
                    return e.apply(this, arguments);
                  }
                  return n;
                })(),
              },
              {
                key: "pause",
                value: function () {
                  this.paused = !0;
                },
              },
              {
                key: "unpause",
                value: function () {
                  this.paused = !1;
                },
              },
              {
                key: "cancel",
                value: function () {
                  this.cancelLatest && this.cancelLatest(),
                    (this.cancelled = !0);
                },
              },
            ]),
            e
          );
        })();
        function l(t, e) {
          var n = new u(t, e),
            r = function () {
              n.cancel();
            };
          return { result: n.resolve(), cancel: r };
        }
      }.call(this, n("4362")));
    },
    ee8b: function (t, e, n) {
      "use strict";
      var r = n("7962"),
        i = n.n(r);
      i.a;
    },
    f067: function (t, e, n) {
      var r = n("9f78");
      "string" === typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
      var i = n("499e").default;
      i("f52335f4", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    f069: function (t, e, n) {
      "use strict";
      var r = n("1c0b"),
        i = function (t) {
          var e, n;
          (this.promise = new t(function (t, r) {
            if (void 0 !== e || void 0 !== n)
              throw TypeError("Bad Promise constructor");
            (e = t), (n = r);
          })),
            (this.resolve = r(e)),
            (this.reject = r(n));
        };
      t.exports.f = function (t) {
        return new i(t);
      };
    },
    f183: function (t, e, n) {
      var r = n("d012"),
        i = n("861d"),
        a = n("5135"),
        o = n("9bf2").f,
        c = n("90e3"),
        u = n("bb2f"),
        l = c("meta"),
        s = 0,
        f =
          Object.isExtensible ||
          function () {
            return !0;
          },
        p = function (t) {
          o(t, l, { value: { objectID: "O" + ++s, weakData: {} } });
        },
        d = function (t, e) {
          if (!i(t))
            return "symbol" == typeof t
              ? t
              : ("string" == typeof t ? "S" : "P") + t;
          if (!a(t, l)) {
            if (!f(t)) return "F";
            if (!e) return "E";
            p(t);
          }
          return t[l].objectID;
        },
        h = function (t, e) {
          if (!a(t, l)) {
            if (!f(t)) return !0;
            if (!e) return !1;
            p(t);
          }
          return t[l].weakData;
        },
        v = function (t) {
          return u && b.REQUIRED && f(t) && !a(t, l) && p(t), t;
        },
        b = (t.exports = {
          REQUIRED: !1,
          fastKey: d,
          getWeakData: h,
          onFreeze: v,
        });
      r[l] = !0;
    },
    f24d: function (t, e) {
      t.exports = c;
    },
    f2df: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return T;
      }),
        n.d(e, "c", function () {
          return E;
        }),
        n.d(e, "d", function () {
          return k;
        }),
        n.d(e, "e", function () {
          return j;
        }),
        n.d(e, "a", function () {
          return C;
        }),
        n.d(e, "i", function () {
          return S;
        }),
        n.d(e, "j", function () {
          return I;
        }),
        n.d(e, "f", function () {
          return R;
        }),
        n.d(e, "h", function () {
          return M;
        });
      n("99af"),
        n("4de4"),
        n("caad"),
        n("d81d"),
        n("45fc"),
        n("4ec9"),
        n("a9e3"),
        n("d3b7"),
        n("2532"),
        n("3ca3"),
        n("ddb0");
      var r,
        i,
        a,
        o,
        c,
        u,
        l,
        s,
        f,
        p = n("3835"),
        d = n("2909"),
        h = (n("96cf"), n("1da1")),
        v = n("5530"),
        b = n("ade3"),
        m = n("8165"),
        g = n("488f"),
        y = n("d736"),
        _ = n("2841"),
        w = n("846e"),
        x = n("21bc"),
        O = n("4651"),
        T = Object(_["enumxFactory"])({
          vis: {
            id: 1,
            datatype: 1,
            label: "图片",
            modes: ["study", "model", "cloudModel"],
            templateTypes: [
              y["TemplateType"].IMG_CLS,
              y["TemplateType"].OBJ_DCT_RECT,
              y["TemplateType"].INSTANCE_SEGMENT,
            ],
          },
          nlp: {
            id: 2,
            datatype: 4,
            label: "文本",
            modes: ["study"],
            templateTypes: [
              y["TemplateType"].TEXT_CLS,
              y["TemplateType"].TEXT_ENTITY_EXTRACT,
            ],
          },
        }),
        E = Object(_["enumxFactory"])({
          study: {
            id: 1,
            label: "主动学习",
            validateTips:
              ((r = {}),
              Object(b["a"])(
                r,
                y["TemplateType"].IMG_CLS,
                "系统将对您选择的数据集进行校验，请确保每个标签的图片都达到10个"
              ),
              Object(b["a"])(
                r,
                y["TemplateType"].OBJ_DCT_RECT,
                "系统将对您选择的数据集进行校验，请确保每个标签的标注框数都达到10个"
              ),
              Object(b["a"])(
                r,
                y["TemplateType"].SEGMENT,
                "系统将对您选择的数据集进行校验，请确保每个标签的标注框数都达到10个"
              ),
              Object(b["a"])(
                r,
                y["TemplateType"].TEXT_CLS,
                "系统将对您选择的数据集进行校验，请确保每个标签样本超过 100，且存在未标注数据"
              ),
              Object(b["a"])(
                r,
                y["TemplateType"].TEXT_ENTITY_EXTRACT,
                "系统将对您选择的数据集进行校验，请确保每个实体标签至少标注 500 个, 且存在未标注数据"
              ),
              r),
          },
          model: { id: 2, label: "指定模型" },
          cloudModel: { id: 3, label: "指定模型" },
        }),
        k = Object(_["enumxFactory"])({
          platforms: {
            id: 1,
            label: "来自训练平台",
            tip: "仅统计来自训练平台您已完成训练的模型个数，暂不支持自定义作业、notebook任务产出的模型",
            modelSource: [3],
          },
          missions: {
            id: 2,
            label: "来自已有智能标注任务",
            tip: "您已运行成功的智能标注任务会生成一个对应模型，可根据智能标注任务情况选择复用",
            modelSource: [4],
          },
          CUSTOM_MODEL: { id: 3, label: "自定义模型服务", modelSource: [1, 2] },
        }),
        j = Object(_["enumxFactory"])({
          dl: { id: 1, label: "EasyDL", modelType: k.platforms },
          bml: { id: 2, label: "BML", modelType: k.platforms },
          data: { id: 3, label: "EasyData", hidden: !0, modelType: k.missions },
        }),
        C = Object(_["enumxFactory"])({
          DONE: { id: 0, label: "已完成" },
          WAIT: { id: 1, label: "待保存" },
          DOING: { id: 2, label: "保存中" },
          FAIl: { id: 3, label: "保存失败" },
        }),
        S = function () {
          var t,
            e = Object(g["usePlatform"])() === g["EPlatform"].LITE,
            n =
              null === (t = Object(m["getCurrentInstance"])()) || void 0 === t
                ? void 0
                : t.proxy,
            r = {
              SUPORT_BRANCH: (function () {
                if (e && n) {
                  var t = Object(w["b"])(),
                    r = t.tts,
                    i = [
                      y["TemplateType"].IMG_CLS,
                      y["TemplateType"].OBJ_DCT_RECT,
                      y["TemplateType"].SEGMENT,
                    ],
                    a = [y["TemplateType"].TEXT_CLS];
                  if (
                    i.some(function (t) {
                      return r.includes(t);
                    })
                  )
                    return ["vis"];
                  if (
                    a.some(function (t) {
                      return r.includes(t);
                    })
                  )
                    return ["nlp"];
                }
                return ["vis", "nlp"];
              })(),
              SUPORT_MODES: ["study", "cloudModel"],
              NOTSUPORT_GUIDE: !1,
              NOTSUPORT_CREATE_TIPS: !1,
              SUPORT_EXPECTTIME: !0,
              SUPORT_ANNOTYPE: [],
              SUPORT_CREATEINFO: [],
            },
            i = Object(v["a"])({}, r);
          window.SP.INTERANNO_CONFIG &&
            (i = Object.assign(i, window.SP.INTERANNO_CONFIG));
          var a = Object(x["a"])(),
            o = a.dataTypes;
          return (
            o &&
              (i.SUPORT_BRANCH = i.SUPORT_BRANCH.filter(function (t) {
                var e = T.getItemById(T[t]);
                return e && o.includes(e.datatype);
              })),
            i
          );
        },
        I = function (t, e) {
          var n,
            r,
            i,
            a = t.pt,
            o = void 0 === a ? "" : a,
            c = t.tt,
            u = void 0 === c ? "" : c,
            l = t.modelId,
            s = void 0 === l ? "" : l,
            f = t.iterationId,
            p = void 0 === f ? "" : f,
            d = t.datasetId,
            h = void 0 === d ? "" : d,
            v = t.deployType,
            m = void 0 === v ? "" : v,
            g = window.location.host,
            y = "".concat(o, "/").concat(u),
            _ =
              ((n = {}),
              Object(b["a"])(
                n,
                j.dl,
                "//"
                  .concat(g, "/easydl/app/report/")
                  .concat(y, "/models/")
                  .concat(s, "/report?iterationId=")
                  .concat(p, "&deployType=")
                  .concat(m)
              ),
              Object(b["a"])(
                n,
                j.bml,
                "//"
                  .concat(g, "/bml/app/project/script/")
                  .concat(s, "/")
                  .concat(p, "/detail/report")
              ),
              n),
            w =
              ((r = {}),
              Object(b["a"])(
                r,
                j.dl,
                "//"
                  .concat(g, "/easydl/app/dataset/")
                  .concat(y, "/")
                  .concat(h, "/entities")
              ),
              Object(b["a"])(
                r,
                j.bml,
                "//".concat(g, "/bml/app/dataset/").concat(h, "/entities")
              ),
              r),
            x =
              ((i = {}),
              Object(b["a"])(
                i,
                j.dl,
                "//"
                  .concat(g, "/easydl/app/model/")
                  .concat(y, "/models/")
                  .concat(s, "/iterations")
              ),
              Object(b["a"])(
                i,
                j.bml,
                "//".concat(g, "/bml/app/project/script/").concat(s, "/list")
              ),
              i);
          return { reportUrl: _[e], datasetUrl: w[e], modelUrl: x[e] };
        },
        A = S(),
        L = new Map([
          [
            y["TemplateType"].IMG_CLS,
            ((i = {}),
            Object(b["a"])(i, E.study, []),
            Object(b["a"])(i, E.cloudModel, []),
            i),
          ],
          [
            y["TemplateType"].OBJ_DCT_RECT,
            ((a = {}),
            Object(b["a"])(a, E.study, []),
            Object(b["a"])(a, E.cloudModel, []),
            a),
          ],
          [
            y["TemplateType"].SEGMENT,
            ((o = {}),
            Object(b["a"])(o, E.study, []),
            Object(b["a"])(o, E.cloudModel, []),
            o),
          ],
          [y["TemplateType"].TEXT_CLS, Object(b["a"])({}, E.study, [])],
          [
            y["TemplateType"].TEXT_ENTITY_EXTRACT,
            Object(b["a"])({}, E.study, []),
          ],
        ]),
        N = new Map([
          [
            y["TemplateType"].IMG_CLS,
            ((c = {}),
            Object(b["a"])(c, E.study, []),
            Object(b["a"])(c, E.model, [
              k.CUSTOM_MODEL,
              k.platforms,
              k.missions,
            ]),
            c),
          ],
          [
            y["TemplateType"].IMG_CLS_MULTI,
            Object(b["a"])({}, E.model, [k.CUSTOM_MODEL]),
          ],
          [
            y["TemplateType"].OBJ_DCT_RECT,
            ((u = {}),
            Object(b["a"])(u, E.study, []),
            Object(b["a"])(u, E.model, [
              k.CUSTOM_MODEL,
              k.platforms,
              k.missions,
            ]),
            u),
          ],
          [
            y["TemplateType"].OBJ_DCT_QUAD,
            Object(b["a"])({}, E.model, [k.CUSTOM_MODEL]),
          ],
          [
            y["TemplateType"].SEGMENT,
            ((l = {}),
            Object(b["a"])(l, E.study, []),
            Object(b["a"])(l, E.model, [
              k.CUSTOM_MODEL,
              k.platforms,
              k.missions,
            ]),
            l),
          ],
          [
            y["TemplateType"].OCR,
            Object(b["a"])({}, E.model, [k.CUSTOM_MODEL]),
          ],
          [
            y["TemplateType"].UNSTRUCTURED_OCR,
            Object(b["a"])({}, E.model, [k.CUSTOM_MODEL]),
          ],
          [
            y["TemplateType"].TEXT_CLS,
            ((s = {}),
            Object(b["a"])(s, E.study, []),
            Object(b["a"])(s, E.model, [k.CUSTOM_MODEL]),
            s),
          ],
          [
            y["TemplateType"].TEXT_CLS_MULTI,
            Object(b["a"])({}, E.model, [k.CUSTOM_MODEL]),
          ],
          [
            y["TemplateType"].TEXT_CLS_ERNIE_DOC,
            Object(b["a"])({}, E.model, [k.CUSTOM_MODEL]),
          ],
          [
            y["TemplateType"].TEXT_CLS_ERNIE_M,
            Object(b["a"])({}, E.model, [k.CUSTOM_MODEL]),
          ],
          [
            y["TemplateType"].TEXT_SIM,
            Object(b["a"])({}, E.model, [k.CUSTOM_MODEL]),
          ],
          [
            y["TemplateType"].TEXT_ENTITY_EXTRACT,
            ((f = {}),
            Object(b["a"])(f, E.study, []),
            Object(b["a"])(f, E.model, [k.CUSTOM_MODEL]),
            f),
          ],
        ]),
        R = _["env"].isCloud ? L : N,
        M = (function () {
          var t = Object(h["a"])(
            regeneratorRuntime.mark(function t() {
              var e,
                n,
                r,
                i,
                a,
                o = arguments;
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (e = o.length > 0 && void 0 !== o[0] && o[0]),
                        (n = Object(x["a"])()),
                        (r = n.projectTypes),
                        (i = n.templateTypes),
                        (t.next = 4),
                        Promise.all(
                          Object(d["a"])(R.keys()).map(
                            (function () {
                              var t = Object(h["a"])(
                                regeneratorRuntime.mark(function t(e) {
                                  var n, a, o, c, u;
                                  return regeneratorRuntime.wrap(function (t) {
                                    while (1)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return (
                                            (t.next = 2),
                                            Object(x["b"])(Number(e))
                                          );
                                        case 2:
                                          if (
                                            ((n = t.sent),
                                            (a = Object(p["a"])(n, 3)),
                                            (o = a[0]),
                                            (c = a[1]),
                                            (u = a[2]),
                                            !(
                                              o &&
                                              c &&
                                              u &&
                                              A.SUPORT_BRANCH.some(function (
                                                t
                                              ) {
                                                var e;
                                                return (
                                                  (null ===
                                                    (e = T.getItemById(T[t])) ||
                                                  void 0 === e
                                                    ? void 0
                                                    : e.datatype) === o.id
                                                );
                                              })
                                            ) ||
                                              (r && !r.includes(c.id)) ||
                                              (i && !i.includes(u.id)))
                                          ) {
                                            t.next = 9;
                                            break;
                                          }
                                          return t.abrupt("return", [
                                            { label: o.label, value: o.id },
                                            { label: c.label, value: c.id },
                                            { label: u.label, value: u.id },
                                          ]);
                                        case 9:
                                          return t.abrupt("return", []);
                                        case 10:
                                        case "end":
                                          return t.stop();
                                      }
                                  }, t);
                                })
                              );
                              return function (e) {
                                return t.apply(this, arguments);
                              };
                            })()
                          )
                        )
                      );
                    case 4:
                      return (
                        (a = t.sent),
                        t.abrupt("return", e ? Object(O["a"])(a, "value") : a)
                      );
                    case 6:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function () {
            return t.apply(this, arguments);
          };
        })();
      e["g"] = A;
    },
    f4a6: function (t, e, n) {
      "use strict";
      var r = n("b42f"),
        i = n.n(r);
      i.a;
    },
    f5df: function (t, e, n) {
      var r = n("00ee"),
        i = n("c6b6"),
        a = n("b622"),
        o = a("toStringTag"),
        c =
          "Arguments" ==
          i(
            (function () {
              return arguments;
            })()
          ),
        u = function (t, e) {
          try {
            return t[e];
          } catch (n) {}
        };
      t.exports = r
        ? i
        : function (t) {
            var e, n, r;
            return void 0 === t
              ? "Undefined"
              : null === t
              ? "Null"
              : "string" == typeof (n = u((e = Object(t)), o))
              ? n
              : c
              ? i(e)
              : "Object" == (r = i(e)) && "function" == typeof e.callee
              ? "Arguments"
              : r;
          };
    },
    f772: function (t, e, n) {
      var r = n("5692"),
        i = n("90e3"),
        a = r("keys");
      t.exports = function (t) {
        return a[t] || (a[t] = i(t));
      };
    },
    f942: function (t, e, n) {
      var r = n("ce86"),
        i = n("c32f"),
        a = n("2cf8"),
        o = n("126d"),
        c = n("76dd"),
        u = /\s+$/;
      function l(t, e, n) {
        if (((t = c(t)), t && (n || void 0 === e))) return t.replace(u, "");
        if (!t || !(e = r(e))) return t;
        var l = o(t),
          s = a(l, o(e)) + 1;
        return i(l, 0, s).join("");
      }
      t.exports = l;
    },
    f949: function (t, e) {
      t.exports = {
        "arr-length": "{{field}}必须包含{{n}}个条目",
        email: "请输入有效的邮箱地址",
        length: "{{field}}需要多于{{min}}个字符但不能超过{{max}}个字符",
        max: "{{field}}不得多于{{max}}个字符",
        phone: "请填写有效的{{field}}",
        range: "{{field}}不得小于{{min}}或大于{{max}}",
        "range-max": "{{field}}不得大于{{max}}",
        "range-min": "{{field}}不得小于{{min}}",
        required: "{{field}}不能为空",
      };
    },
    f9ef: function (t, e, n) {
      var r = n("24fb");
      (e = r(!1)),
        e.push([
          t.i,
          ".label-picker-editer[data-v-773c8579]{width:260px;flex:1;display:flex;align-items:center;max-width:100%;border:1px solid var(--cxd-blue)}.label-picker-editer .label-name_editor[data-v-773c8579]{width:100%;height:100%}.label-picker-editer .label-name_editor[data-v-773c8579]  .s-input-wrapper{height:auto;width:100%}.label-picker-editer .label-name_editor[data-v-773c8579]  .s-input-wrapper .s-input{border:none;font-size:14px;height:30px;width:100%;line-height:30px}.label-picker-editer .label-name_editor[data-v-773c8579] >span{margin-left:0;display:flex}",
          "",
        ]),
        (t.exports = e);
    },
    fb6a: function (t, e, n) {
      "use strict";
      var r = n("23e7"),
        i = n("861d"),
        a = n("e8b5"),
        o = n("23cb"),
        c = n("50c4"),
        u = n("fc6a"),
        l = n("8418"),
        s = n("b622"),
        f = n("1dde"),
        p = n("ae40"),
        d = f("slice"),
        h = p("slice", { ACCESSORS: !0, 0: 0, 1: 2 }),
        v = s("species"),
        b = [].slice,
        m = Math.max;
      r(
        { target: "Array", proto: !0, forced: !d || !h },
        {
          slice: function (t, e) {
            var n,
              r,
              s,
              f = u(this),
              p = c(f.length),
              d = o(t, p),
              h = o(void 0 === e ? p : e, p);
            if (
              a(f) &&
              ((n = f.constructor),
              "function" != typeof n || (n !== Array && !a(n.prototype))
                ? i(n) && ((n = n[v]), null === n && (n = void 0))
                : (n = void 0),
              n === Array || void 0 === n)
            )
              return b.call(f, d, h);
            for (
              r = new (void 0 === n ? Array : n)(m(h - d, 0)), s = 0;
              d < h;
              d++, s++
            )
              d in f && l(r, s, f[d]);
            return (r.length = s), r;
          },
        }
      );
    },
    fc16: function (t, e, n) {
      function r(t, e) {
        var n = new URL(t),
          r = new URL(t).pathname,
          i = 0,
          a = r.length;
        while (i !== e && a >= 0) {
          var o = r[--a];
          "/" === o && i++;
        }
        if (i !== e)
          throw Error(
            "systemjs-webpack-interop: rootDirectoryLevel (" +
              e +
              ") is greater than the number of directories (" +
              i +
              ") in the URL path " +
              t
          );
        return (n.pathname = n.pathname.slice(0, a + 1)), n.href;
      }
      n("fb6a"),
        n("a9e3"),
        n("8ba4"),
        n("d3b7"),
        n("3ca3"),
        n("498a"),
        n("ddb0"),
        n("2b3d"),
        (e.setPublicPath = function (t, e) {
          if ((e || (e = 1), "string" !== typeof t || 0 === t.trim().length))
            throw Error(
              "systemjs-webpack-interop: setPublicPath(systemjsModuleName) must be called with a non-empty string 'systemjsModuleName'"
            );
          if ("number" !== typeof e || e <= 0 || !i(e))
            throw Error(
              "systemjs-webpack-interop: setPublicPath(systemjsModuleName, rootDirectoryLevel) must be called with a positive integer 'rootDirectoryLevel'"
            );
          var a;
          try {
            if (((a = window.System.resolve(t)), !a)) throw Error();
          } catch (o) {
            throw Error(
              "systemjs-webpack-interop: There is no such module '" +
                t +
                "' in the SystemJS registry. Did you misspell the name of your module?"
            );
          }
          n.p = r(a, e);
        }),
        (e.resolveDirectory = r);
      var i =
        Number.isInteger ||
        function (t) {
          return "number" === typeof t && isFinite(t) && Math.floor(t) === t;
        };
    },
    fc6a: function (t, e, n) {
      var r = n("44ad"),
        i = n("1d80");
      t.exports = function (t) {
        return r(i(t));
      };
    },
    fdbc: function (t, e) {
      t.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0,
      };
    },
    fdbf: function (t, e, n) {
      var r = n("4930");
      t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
    },
    fea9: function (t, e, n) {
      var r = n("da84");
      t.exports = r.Promise;
    },
    ffd6: function (t, e, n) {
      var r = n("3729"),
        i = n("1310"),
        a = "[object Symbol]";
      function o(t) {
        return "symbol" == typeof t || (i(t) && r(t) == a);
      }
      t.exports = o;
    },
  });
});
//# sourceMappingURL=app.js.map
