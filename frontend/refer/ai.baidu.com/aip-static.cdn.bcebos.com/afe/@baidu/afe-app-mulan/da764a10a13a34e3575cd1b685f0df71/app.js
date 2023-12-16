(function (e, t) {
  if ("object" === typeof exports && "object" === typeof module)
    module.exports = t(
      require("@baidu/data-share"),
      require("@baidu/afe-utils"),
      require("@vue/composition-api"),
      require("vue"),
      require("@baidu/afe-easycom"),
      require("@baidu/tianzhi-ui")
    );
  else if ("function" === typeof define && define.amd)
    define([
      "@baidu/data-share",
      "@baidu/afe-utils",
      "@vue/composition-api",
      "vue",
      "@baidu/afe-easycom",
      "@baidu/tianzhi-ui",
    ], t);
  else {
    var n =
      "object" === typeof exports
        ? t(
            require("@baidu/data-share"),
            require("@baidu/afe-utils"),
            require("@vue/composition-api"),
            require("vue"),
            require("@baidu/afe-easycom"),
            require("@baidu/tianzhi-ui")
          )
        : t(
            e["@baidu/data-share"],
            e["@baidu/afe-utils"],
            e["@vue/composition-api"],
            e["vue"],
            e["@baidu/afe-easycom"],
            e["@baidu/tianzhi-ui"]
          );
    for (var r in n) ("object" === typeof exports ? exports : e)[r] = n[r];
  }
})(window, function (e, t, n, r, a, i) {
  return (function (e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var a = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function (e) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var a in e)
            n.d(
              r,
              a,
              function (t) {
                return e[t];
              }.bind(null, a)
            );
        return r;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e["default"];
              }
            : function () {
                return e;
              };
        return n.d(t, "a", t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = "/"),
      n((n.s = 0))
    );
  })({
    0: function (e, t, n) {
      e.exports = n("cd49");
    },
    "0092": function (e, t, n) {
      var r = n("69f7");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("1c624f0c", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "00e3": function (e, t, n) {
      "use strict";
      var r = n("4475"),
        a = n.n(r);
      a.a;
    },
    "00ee": function (e, t, n) {
      var r = n("b622"),
        a = r("toStringTag"),
        i = {};
      (i[a] = "z"), (e.exports = "[object z]" === String(i));
    },
    "0159": function (e, t, n) {
      var r = n("f490");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("7ec1948e", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "0254": function (e, t, n) {
      "use strict";
      var r = n("28d8"),
        a = n.n(r);
      a.a;
    },
    "02a0": function (e, t, n) {
      var r = n("6acf");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("2f82dd36", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "02c9": function (e, t, n) {
      var r = n("c796");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("66d8e97e", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "0322": function (e, t, n) {
      e.exports = n.p + "img/anno-manage.4c4243d6.svg";
    },
    "0366": function (e, t, n) {
      var r = n("1c0b");
      e.exports = function (e, t, n) {
        if ((r(e), void 0 === t)) return e;
        switch (n) {
          case 0:
            return function () {
              return e.call(t);
            };
          case 1:
            return function (n) {
              return e.call(t, n);
            };
          case 2:
            return function (n, r) {
              return e.call(t, n, r);
            };
          case 3:
            return function (n, r, a) {
              return e.call(t, n, r, a);
            };
        }
        return function () {
          return e.apply(t, arguments);
        };
      };
    },
    "0371": function (e, t, n) {
      var r = n("3194");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("e3a6e1a8", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "0456": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var r = n("d4ec"),
        a = function e() {
          Object(r["a"])(this, e), (this.offset = 0), (this.pageSize = 10);
        };
    },
    "049d": function (e, t, n) {
      e.exports = n.p + "img/anno-select-team.054eaf00.svg";
    },
    "04fa": function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".finish-modal[data-v-393ab925]  .s-modal_main{min-width:400px}.finish-modal .modal-body[data-v-393ab925]{display:flex}.finish-modal .modal-body .body-icon[data-v-393ab925]{margin-top:5px;font-size:2em;color:#f59000}.finish-modal .modal-body .body-content[data-v-393ab925]{flex:1;margin-left:20px}.finish-modal .modal-body .body-content .modal-radio[data-v-393ab925],.finish-modal .modal-body .body-content .modal-tip[data-v-393ab925]{margin:15px 0}.finish-modal .modal-body .body-content .modal-radio[data-v-393ab925]  .s-radio-group{display:inline-block}",
          "",
        ]),
        (e.exports = t);
    },
    "0538": function (e, t, n) {
      "use strict";
      var r = n("1c0b"),
        a = n("861d"),
        i = [].slice,
        o = {},
        s = function (e, t, n) {
          if (!(t in o)) {
            for (var r = [], a = 0; a < t; a++) r[a] = "a[" + a + "]";
            o[t] = Function("C,a", "return new C(" + r.join(",") + ")");
          }
          return o[t](e, n);
        };
      e.exports =
        Function.bind ||
        function (e) {
          var t = r(this),
            n = i.call(arguments, 1),
            o = function () {
              var r = n.concat(i.call(arguments));
              return this instanceof o ? s(t, r.length, r) : t.apply(e, r);
            };
          return a(t.prototype) && (o.prototype = t.prototype), o;
        };
    },
    "057f": function (e, t, n) {
      var r = n("fc6a"),
        a = n("241c").f,
        i = {}.toString,
        o =
          "object" == typeof window && window && Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : [],
        s = function (e) {
          try {
            return a(e);
          } catch (t) {
            return o.slice();
          }
        };
      e.exports.f = function (e) {
        return o && "[object Window]" == i.call(e) ? s(e) : a(r(e));
      };
    },
    "06c5": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      n("a630"), n("fb6a"), n("b0c0"), n("d3b7"), n("25f0"), n("3ca3");
      var r = n("6b75");
      function a(e, t) {
        if (e) {
          if ("string" === typeof e) return Object(r["a"])(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? Object(r["a"])(e, t)
              : void 0
          );
        }
      }
    },
    "06cf": function (e, t, n) {
      var r = n("83ab"),
        a = n("d1e7"),
        i = n("5c6c"),
        o = n("fc6a"),
        s = n("c04e"),
        c = n("5135"),
        u = n("0cfb"),
        l = Object.getOwnPropertyDescriptor;
      t.f = r
        ? l
        : function (e, t) {
            if (((e = o(e)), (t = s(t, !0)), u))
              try {
                return l(e, t);
              } catch (n) {}
            if (c(e, t)) return i(!a.f.call(e, t), e[t]);
          };
    },
    "08ba": function (e, t, n) {
      "use strict";
      n.d(t, "mulanConfig", function () {
        return f;
      }),
        n.d(t, "useService", function () {
          return p;
        });
      var r = n("2841"),
        a = n("52e1"),
        i = n("e671"),
        o = n("e82d"),
        s = n("c2ce"),
        c = n("e0be"),
        u = n("163e"),
        l = n("be0f"),
        d = n("80a1");
      n.o(a, "CreateTaskDto") &&
        n.d(t, "CreateTaskDto", function () {
          return a["CreateTaskDto"];
        }),
        n.o(l, "CreateTaskDto") &&
          n.d(t, "CreateTaskDto", function () {
            return l["CreateTaskDto"];
          }),
        n.o(o, "CreateTaskDto") &&
          n.d(t, "CreateTaskDto", function () {
            return o["CreateTaskDto"];
          }),
        n.o(u, "CreateTaskDto") &&
          n.d(t, "CreateTaskDto", function () {
            return u["CreateTaskDto"];
          });
      var f = d["a"];
      function p() {
        return {
          mulanConfig: d["a"],
          teamService: Object(l["getTeamService"])(),
          taskService: r["svc"].createSingleton(a["TaskService"]),
          kpiService: r["svc"].createSingleton(i["KpiService"]),
          bmlMemberService: r["svc"].createSingleton(o["BmlMemberService"]),
          envService: r["svc"].createSingleton(s["a"]),
          roleService: r["svc"].createSingleton(c["a"]),
          bosService: r["svc"].createSingleton(u["BosService"]),
        };
      }
    },
    "0cfb": function (e, t, n) {
      var r = n("83ab"),
        a = n("d039"),
        i = n("cc12");
      e.exports =
        !r &&
        !a(function () {
          return (
            7 !=
            Object.defineProperty(i("div"), "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        });
    },
    "0f7b": function (e, t, n) {
      "use strict";
      var r = n("51d9"),
        a = n.n(r);
      a.a;
    },
    "10c9": function (e, t, n) {
      e.exports = n.p + "img/plus.d08d4000.svg";
    },
    1148: function (e, t, n) {
      "use strict";
      var r = n("a691"),
        a = n("1d80");
      e.exports =
        "".repeat ||
        function (e) {
          var t = String(a(this)),
            n = "",
            i = r(e);
          if (i < 0 || i == 1 / 0)
            throw RangeError("Wrong number of repetitions");
          for (; i > 0; (i >>>= 1) && (t += t)) 1 & i && (n += t);
          return n;
        };
    },
    "13d5": function (e, t, n) {
      "use strict";
      var r = n("23e7"),
        a = n("d58f").left,
        i = n("a640"),
        o = n("ae40"),
        s = i("reduce"),
        c = o("reduce", { 1: 0 });
      r(
        { target: "Array", proto: !0, forced: !s || !c },
        {
          reduce: function (e) {
            return a(
              this,
              e,
              arguments.length,
              arguments.length > 1 ? arguments[1] : void 0
            );
          },
        }
      );
    },
    1459: function (e, t, n) {
      var r = n("6cb8");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("5bd6b666", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "14c3": function (e, t, n) {
      var r = n("c6b6"),
        a = n("9263");
      e.exports = function (e, t) {
        var n = e.exec;
        if ("function" === typeof n) {
          var i = n.call(e, t);
          if ("object" !== typeof i)
            throw TypeError(
              "RegExp exec method returned something other than an Object or null"
            );
          return i;
        }
        if ("RegExp" !== r(e))
          throw TypeError("RegExp#exec called on incompatible receiver");
        return a.call(e, t);
      };
    },
    "14c5": function (e, t, n) {
      "use strict";
      var r = n("abd6"),
        a = n.n(r);
      a.a;
    },
    "153b": function (e, t, n) {
      var r = n("80a9");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("83e99aee", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "159b": function (e, t, n) {
      var r = n("da84"),
        a = n("fdbc"),
        i = n("17c2"),
        o = n("9112");
      for (var s in a) {
        var c = r[s],
          u = c && c.prototype;
        if (u && u.forEach !== i)
          try {
            o(u, "forEach", i);
          } catch (l) {
            u.forEach = i;
          }
      }
    },
    1603: function (e, t, n) {
      var r = n("8e50");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("1d88b460", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "163e": function (e, t, n) {
      "use strict";
      var r = n("bbbd");
      n.o(r, "BosService") &&
        n.d(t, "BosService", function () {
          return r["BosService"];
        }),
        n.o(r, "CreateTaskDto") &&
          n.d(t, "CreateTaskDto", function () {
            return r["CreateTaskDto"];
          });
      var a = n("3bea");
      n.d(t, "BosService", function () {
        return a["a"];
      });
    },
    "17c2": function (e, t, n) {
      "use strict";
      var r = n("b727").forEach,
        a = n("a640"),
        i = n("ae40"),
        o = a("forEach"),
        s = i("forEach");
      e.exports =
        o && s
          ? [].forEach
          : function (e) {
              return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
            };
    },
    1862: function (e, t, n) {
      "use strict";
      var r = n("d03a"),
        a = n.n(r);
      a.a;
    },
    "189f": function (e, t, n) {
      "use strict";
      var r = n("bdc5"),
        a = n.n(r);
      a.a;
    },
    "18d5": function (e, t, n) {
      var r = n("38f0");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("926e133e", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    1959: function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".render-ctl[data-v-e560dab2]{white-space:nowrap}.render-ctl .link-blue[data-v-e560dab2]{display:inline-block;margin-right:8px}",
          "",
        ]),
        (e.exports = t);
    },
    1977: function (e, t, n) {
      var r = n("cb04");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("9cdb3192", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "19aa": function (e, t) {
      e.exports = function (e, t, n) {
        if (!(e instanceof t))
          throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
        return e;
      };
    },
    "1be4": function (e, t, n) {
      var r = n("d066");
      e.exports = r("document", "documentElement");
    },
    "1c0b": function (e, t) {
      e.exports = function (e) {
        if ("function" != typeof e)
          throw TypeError(String(e) + " is not a function");
        return e;
      };
    },
    "1c6b": function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".dataset-cascader[data-v-2bf699f7]{display:inline-block;line-height:32px}.dataset-cascader_label[data-v-2bf699f7]{height:32px;display:flex;justify-content:space-between;align-items:center;padding:0 12px;width:200px;background:#fff;cursor:pointer;box-shadow:none;border:1px solid #d6d6d6}.dataset-cascader_label.not-check[data-v-2bf699f7]{color:#999;border:1px solid #e0e0e0}.dataset-cascader_triangle[data-v-2bf699f7]{color:#999}.dataset-cascader_ul[data-v-2bf699f7]{display:flex;list-style:none;text-align:left;height:128px}.dataset-cascader_ul_left[data-v-2bf699f7],.dataset-cascader_ul_right[data-v-2bf699f7]{min-width:120px;max-width:280px;overflow-x:hidden;overflow-y:auto;text-overflow:ellipsis}.dataset-cascader_ul_right[data-v-2bf699f7]{border-left:1px solid #ddd}.dataset-cascader_ul_right[data-v-2bf699f7]:empty{border:none}.dataset-cascader_li[data-v-2bf699f7]{display:flex;justify-content:space-between;align-items:center;height:32px;line-height:32px;cursor:pointer;white-space:nowrap;padding:0 10px;min-width:62px}.dataset-cascader_li_right[data-v-2bf699f7]{visibility:hidden;margin-left:10px;color:#999}.dataset-cascader_li.active[data-v-2bf699f7],.dataset-cascader_li[data-v-2bf699f7]:hover{background:#f7f7f7}.dataset-cascader_li.active .dataset-cascader_li_right[data-v-2bf699f7],.dataset-cascader_li:hover .dataset-cascader_li_right[data-v-2bf699f7]{visibility:visible}.dataset-cascader_li.active[data-v-2bf699f7]{color:#036fe2}.dataset-cascader_li[data-v-2bf699f7]  .s-icon{font-size:12px;top:0}.dataset-cascader.--visible .dataset-cascader_triangle[data-v-2bf699f7]{transform:rotate(180deg) scale(.8)}.dataset-cascader.--visible .dataset-cascader_label[data-v-2bf699f7]{border:1px solid #036fe2}.dataset-cascader[data-v-2bf699f7]  .s-tip_popper_arrow{visibility:hidden}.dataset-cascader[data-v-2bf699f7]  .s-tip_popper_content{padding:0}",
          "",
        ]),
        (e.exports = t);
    },
    "1c7e": function (e, t, n) {
      var r = n("b622"),
        a = r("iterator"),
        i = !1;
      try {
        var o = 0,
          s = {
            next: function () {
              return { done: !!o++ };
            },
            return: function () {
              i = !0;
            },
          };
        (s[a] = function () {
          return this;
        }),
          Array.from(s, function () {
            throw 2;
          });
      } catch (c) {}
      e.exports = function (e, t) {
        if (!t && !i) return !1;
        var n = !1;
        try {
          var r = {};
          (r[a] = function () {
            return {
              next: function () {
                return { done: (n = !0) };
              },
            };
          }),
            e(r);
        } catch (c) {}
        return n;
      };
    },
    "1cdc": function (e, t, n) {
      var r = n("342f");
      e.exports = /(iphone|ipod|ipad).*applewebkit/i.test(r);
    },
    "1d80": function (e, t) {
      e.exports = function (e) {
        if (void 0 == e) throw TypeError("Can't call method on " + e);
        return e;
      };
    },
    "1da1": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      n("d3b7");
      function r(e, t, n, r, a, i, o) {
        try {
          var s = e[i](o),
            c = s.value;
        } catch (u) {
          return void n(u);
        }
        s.done ? t(c) : Promise.resolve(c).then(r, a);
      }
      function a(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (a, i) {
            var o = e.apply(t, n);
            function s(e) {
              r(o, a, i, s, c, "next", e);
            }
            function c(e) {
              r(o, a, i, s, c, "throw", e);
            }
            s(void 0);
          });
        };
      }
    },
    "1dde": function (e, t, n) {
      var r = n("d039"),
        a = n("b622"),
        i = n("2d00"),
        o = a("species");
      e.exports = function (e) {
        return (
          i >= 51 ||
          !r(function () {
            var t = [],
              n = (t.constructor = {});
            return (
              (n[o] = function () {
                return { foo: 1 };
              }),
              1 !== t[e](Boolean).foo
            );
          })
        );
      };
    },
    "1e0e": function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".status-render[data-v-3d749b9d]{display:flex;align-items:center}.status-render .color[data-v-3d749b9d]{width:8px;height:8px;border-radius:5px;flex:none}.status-render .text[data-v-3d749b9d]{margin:0 5px}.status-render .timeout-tip .s-tip_popper_content[data-v-3d749b9d]{width:250px}",
          "",
        ]),
        (e.exports = t);
    },
    "1e6d": function (e, t, n) {
      "use strict";
      var r = n("63be"),
        a = n.n(r);
      a.a;
    },
    "1faa": function (e, t, n) {
      "use strict";
      var r = n("153b"),
        a = n.n(r);
      a.a;
    },
    2058: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var r = n("8165"),
        a = n("5fa4");
      function i() {
        var e = Object(a["a"])();
        Object(r["watch"])(
          function () {
            return e.state.tab;
          },
          function () {
            (e.state.pageOptions.offset = 0),
              (e.state.loading = !0),
              e.fetchList();
          }
        ),
          Object(r["watch"])(
            function () {
              return e.state.params;
            },
            function () {
              (e.state.pageOptions.offset = 0), e.fetchList();
            },
            { deep: !0 }
          ),
          Object(r["watch"])(
            function () {
              return e.state.pageOptions;
            },
            function () {
              e.fetchList();
            },
            { deep: !0 }
          );
      }
    },
    "20ca": function (e, t, n) {
      var r = n("cf8c");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("1ab06c9e", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "20e7": function (e, t, n) {
      var r = n("c2e6");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("1ecf26df", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "21e2": function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".guide-top[data-v-09a41720]{padding-bottom:30px;margin-bottom:30px}.guide-top .guide-main[data-v-09a41720]{display:flex;flex-direction:row;align-items:center;align-items:flex-start}.guide-top .guide-main .guide-split[data-v-09a41720]{width:10px;height:18px;margin:36px 43px 0}.guide-top .guide-main .guide-item[data-v-09a41720]{width:304px;display:flex;flex-direction:row;align-items:center;align-items:flex-start}.guide-top .guide-main .guide-item .gi-img[data-v-09a41720]{width:36px;height:36px;margin-right:18px}.guide-top .guide-main .guide-item .item-main[data-v-09a41720]{flex:1}.guide-top .guide-main .guide-item .item-main .im-title[data-v-09a41720]{font-size:16px;color:#000;font-weight:700;line-height:36px}.guide-top .guide-main .guide-item .item-main .im-content[data-v-09a41720]{margin-top:10px;font-size:14px;color:#666;line-height:22px}",
          "",
        ]),
        (e.exports = t);
    },
    2266: function (e, t, n) {
      var r = n("825a"),
        a = n("e95a"),
        i = n("50c4"),
        o = n("0366"),
        s = n("35a1"),
        c = n("9bdd"),
        u = function (e, t) {
          (this.stopped = e), (this.result = t);
        },
        l = (e.exports = function (e, t, n, l, d) {
          var f,
            p,
            v,
            m,
            b,
            h,
            g,
            y = o(t, n, l ? 2 : 1);
          if (d) f = e;
          else {
            if (((p = s(e)), "function" != typeof p))
              throw TypeError("Target is not iterable");
            if (a(p)) {
              for (v = 0, m = i(e.length); m > v; v++)
                if (
                  ((b = l ? y(r((g = e[v]))[0], g[1]) : y(e[v])),
                  b && b instanceof u)
                )
                  return b;
              return new u(!1);
            }
            f = p.call(e);
          }
          h = f.next;
          while (!(g = h.call(f)).done)
            if (
              ((b = c(f, y, g.value, l)),
              "object" == typeof b && b && b instanceof u)
            )
              return b;
          return new u(!1);
        });
      l.stop = function (e) {
        return new u(!0, e);
      };
    },
    "226d": function (e, t) {},
    "23cb": function (e, t, n) {
      var r = n("a691"),
        a = Math.max,
        i = Math.min;
      e.exports = function (e, t) {
        var n = r(e);
        return n < 0 ? a(n + t, 0) : i(n, t);
      };
    },
    "23e7": function (e, t, n) {
      var r = n("da84"),
        a = n("06cf").f,
        i = n("9112"),
        o = n("6eeb"),
        s = n("ce4e"),
        c = n("e893"),
        u = n("94ca");
      e.exports = function (e, t) {
        var n,
          l,
          d,
          f,
          p,
          v,
          m = e.target,
          b = e.global,
          h = e.stat;
        if (((l = b ? r : h ? r[m] || s(m, {}) : (r[m] || {}).prototype), l))
          for (d in t) {
            if (
              ((p = t[d]),
              e.noTargetGet ? ((v = a(l, d)), (f = v && v.value)) : (f = l[d]),
              (n = u(b ? d : m + (h ? "." : "#") + d, e.forced)),
              !n && void 0 !== f)
            ) {
              if (typeof p === typeof f) continue;
              c(p, f);
            }
            (e.sham || (f && f.sham)) && i(p, "sham", !0), o(l, d, p, e);
          }
      };
    },
    "241c": function (e, t, n) {
      var r = n("ca84"),
        a = n("7839"),
        i = a.concat("length", "prototype");
      t.f =
        Object.getOwnPropertyNames ||
        function (e) {
          return r(e, i);
        };
    },
    "24fb": function (e, t, n) {
      "use strict";
      function r(e, t) {
        var n = e[1] || "",
          r = e[3];
        if (!r) return n;
        if (t && "function" === typeof btoa) {
          var i = a(r),
            o = r.sources.map(function (e) {
              return "/*# sourceURL="
                .concat(r.sourceRoot || "")
                .concat(e, " */");
            });
          return [n].concat(o).concat([i]).join("\n");
        }
        return [n].join("\n");
      }
      function a(e) {
        var t = btoa(unescape(encodeURIComponent(JSON.stringify(e)))),
          n =
            "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
              t
            );
        return "/*# ".concat(n, " */");
      }
      e.exports = function (e) {
        var t = [];
        return (
          (t.toString = function () {
            return this.map(function (t) {
              var n = r(t, e);
              return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
            }).join("");
          }),
          (t.i = function (e, n, r) {
            "string" === typeof e && (e = [[null, e, ""]]);
            var a = {};
            if (r)
              for (var i = 0; i < this.length; i++) {
                var o = this[i][0];
                null != o && (a[o] = !0);
              }
            for (var s = 0; s < e.length; s++) {
              var c = [].concat(e[s]);
              (r && a[c[0]]) ||
                (n &&
                  (c[2]
                    ? (c[2] = "".concat(n, " and ").concat(c[2]))
                    : (c[2] = n)),
                t.push(c));
            }
          }),
          t
        );
      };
    },
    2532: function (e, t, n) {
      "use strict";
      var r = n("23e7"),
        a = n("5a34"),
        i = n("1d80"),
        o = n("ab13");
      r(
        { target: "String", proto: !0, forced: !o("includes") },
        {
          includes: function (e) {
            return !!~String(i(this)).indexOf(
              a(e),
              arguments.length > 1 ? arguments[1] : void 0
            );
          },
        }
      );
    },
    "25f0": function (e, t, n) {
      "use strict";
      var r = n("6eeb"),
        a = n("825a"),
        i = n("d039"),
        o = n("ad6d"),
        s = "toString",
        c = RegExp.prototype,
        u = c[s],
        l = i(function () {
          return "/a/b" != u.call({ source: "a", flags: "b" });
        }),
        d = u.name != s;
      (l || d) &&
        r(
          RegExp.prototype,
          s,
          function () {
            var e = a(this),
              t = String(e.source),
              n = e.flags,
              r = String(
                void 0 === n && e instanceof RegExp && !("flags" in c)
                  ? o.call(e)
                  : n
              );
            return "/" + t + "/" + r;
          },
          { unsafe: !0 }
        );
    },
    2624: function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".team-members .member-loading[data-v-824be2a2]  .s-icon-custom-loading{transform:translateY(-5px) scale(.5)}",
          "",
        ]),
        (e.exports = t);
    },
    2626: function (e, t, n) {
      "use strict";
      var r = n("d066"),
        a = n("9bf2"),
        i = n("b622"),
        o = n("83ab"),
        s = i("species");
      e.exports = function (e) {
        var t = r(e),
          n = a.f;
        o &&
          t &&
          !t[s] &&
          n(t, s, {
            configurable: !0,
            get: function () {
              return this;
            },
          });
      };
    },
    "262e": function (e, t, n) {
      "use strict";
      function r(e, t) {
        return (
          (r =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          r(e, t)
        );
      }
      function a(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && r(e, t);
      }
      n.d(t, "a", function () {
        return a;
      });
    },
    "269a": function (e, t, n) {
      "use strict";
      var r = n("ea0f"),
        a = n.n(r);
      a.a;
    },
    2772: function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".model-selecter_dropdown[data-v-a5f612c0]{width:400px}.model-selecter_testbtn[data-v-a5f612c0]{width:88px;margin-left:10px}.model-selecter_name[data-v-a5f612c0]{width:210px;display:inline-block}",
          "",
        ]),
        (e.exports = t);
    },
    2841: function (t, n) {
      t.exports = e;
    },
    2877: function (e, t, n) {
      "use strict";
      function r(e, t, n, r, a, i, o, s) {
        var c,
          u = "function" === typeof e ? e.options : e;
        if (
          (t && ((u.render = t), (u.staticRenderFns = n), (u._compiled = !0)),
          r && (u.functional = !0),
          i && (u._scopeId = "data-v-" + i),
          o
            ? ((c = function (e) {
                (e =
                  e ||
                  (this.$vnode && this.$vnode.ssrContext) ||
                  (this.parent &&
                    this.parent.$vnode &&
                    this.parent.$vnode.ssrContext)),
                  e ||
                    "undefined" === typeof __VUE_SSR_CONTEXT__ ||
                    (e = __VUE_SSR_CONTEXT__),
                  a && a.call(this, e),
                  e &&
                    e._registeredComponents &&
                    e._registeredComponents.add(o);
              }),
              (u._ssrRegister = c))
            : a &&
              (c = s
                ? function () {
                    a.call(
                      this,
                      (u.functional ? this.parent : this).$root.$options
                        .shadowRoot
                    );
                  }
                : a),
          c)
        )
          if (u.functional) {
            u._injectStyles = c;
            var l = u.render;
            u.render = function (e, t) {
              return c.call(t), l(e, t);
            };
          } else {
            var d = u.beforeCreate;
            u.beforeCreate = d ? [].concat(d, c) : [c];
          }
        return { exports: e, options: u };
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    "28d8": function (e, t, n) {
      var r = n("c599");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("4b5586f2", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    2909: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      });
      var r = n("6b75");
      function a(e) {
        if (Array.isArray(e)) return Object(r["a"])(e);
      }
      n("a4d3"),
        n("e01a"),
        n("d28b"),
        n("a630"),
        n("d3b7"),
        n("3ca3"),
        n("ddb0");
      function i(e) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      }
      var o = n("06c5");
      function s() {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function c(e) {
        return a(e) || i(e) || Object(o["a"])(e) || s();
      }
    },
    "2a8f": function (e, t, n) {
      e.exports = n.p + "img/create2.7c9472b5.svg";
    },
    "2caf": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      });
      n("4ae1"), n("3410");
      function r(e) {
        return (
          (r = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          r(e)
        );
      }
      n("d3b7"), n("25f0");
      function a() {
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
        } catch (e) {
          return !1;
        }
      }
      var i = n("53ca");
      function o(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function s(e, t) {
        return !t || ("object" !== Object(i["a"])(t) && "function" !== typeof t)
          ? o(e)
          : t;
      }
      function c(e) {
        var t = a();
        return function () {
          var n,
            a = r(e);
          if (t) {
            var i = r(this).constructor;
            n = Reflect.construct(a, arguments, i);
          } else n = a.apply(this, arguments);
          return s(this, n);
        };
      }
    },
    "2cf4": function (e, t, n) {
      var r,
        a,
        i,
        o = n("da84"),
        s = n("d039"),
        c = n("c6b6"),
        u = n("0366"),
        l = n("1be4"),
        d = n("cc12"),
        f = n("1cdc"),
        p = o.location,
        v = o.setImmediate,
        m = o.clearImmediate,
        b = o.process,
        h = o.MessageChannel,
        g = o.Dispatch,
        y = 0,
        _ = {},
        T = "onreadystatechange",
        x = function (e) {
          if (_.hasOwnProperty(e)) {
            var t = _[e];
            delete _[e], t();
          }
        },
        w = function (e) {
          return function () {
            x(e);
          };
        },
        O = function (e) {
          x(e.data);
        },
        k = function (e) {
          o.postMessage(e + "", p.protocol + "//" + p.host);
        };
      (v && m) ||
        ((v = function (e) {
          var t = [],
            n = 1;
          while (arguments.length > n) t.push(arguments[n++]);
          return (
            (_[++y] = function () {
              ("function" == typeof e ? e : Function(e)).apply(void 0, t);
            }),
            r(y),
            y
          );
        }),
        (m = function (e) {
          delete _[e];
        }),
        "process" == c(b)
          ? (r = function (e) {
              b.nextTick(w(e));
            })
          : g && g.now
          ? (r = function (e) {
              g.now(w(e));
            })
          : h && !f
          ? ((a = new h()),
            (i = a.port2),
            (a.port1.onmessage = O),
            (r = u(i.postMessage, i, 1)))
          : !o.addEventListener ||
            "function" != typeof postMessage ||
            o.importScripts ||
            s(k) ||
            "file:" === p.protocol
          ? (r =
              T in d("script")
                ? function (e) {
                    l.appendChild(d("script"))[T] = function () {
                      l.removeChild(this), x(e);
                    };
                  }
                : function (e) {
                    setTimeout(w(e), 0);
                  })
          : ((r = k), o.addEventListener("message", O, !1))),
        (e.exports = { set: v, clear: m });
    },
    "2d00": function (e, t, n) {
      var r,
        a,
        i = n("da84"),
        o = n("342f"),
        s = i.process,
        c = s && s.versions,
        u = c && c.v8;
      u
        ? ((r = u.split(".")), (a = r[0] + r[1]))
        : o &&
          ((r = o.match(/Edge\/(\d+)/)),
          (!r || r[1] >= 74) &&
            ((r = o.match(/Chrome\/(\d+)/)), r && (a = r[1]))),
        (e.exports = a && +a);
    },
    "2e03": function (e, t, n) {
      var r = n("dcec");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("f2002074", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "2ef0": function (e, t, n) {
      (function (e, r) {
        var a;
        /**
         * @license
         * Lodash <https://lodash.com/>
         * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
         * Released under MIT license <https://lodash.com/license>
         * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
         * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
         */ (function () {
          var i,
            o = "4.17.21",
            s = 200,
            c =
              "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
            u = "Expected a function",
            l = "Invalid `variable` option passed into `_.template`",
            d = "__lodash_hash_undefined__",
            f = 500,
            p = "__lodash_placeholder__",
            v = 1,
            m = 2,
            b = 4,
            h = 1,
            g = 2,
            y = 1,
            _ = 2,
            T = 4,
            x = 8,
            w = 16,
            O = 32,
            k = 64,
            E = 128,
            j = 256,
            C = 512,
            S = 30,
            A = "...",
            I = 800,
            N = 16,
            R = 1,
            D = 2,
            M = 3,
            L = 1 / 0,
            P = 9007199254740991,
            U = 17976931348623157e292,
            $ = NaN,
            B = 4294967295,
            z = B - 1,
            V = B >>> 1,
            F = [
              ["ary", E],
              ["bind", y],
              ["bindKey", _],
              ["curry", x],
              ["curryRight", w],
              ["flip", C],
              ["partial", O],
              ["partialRight", k],
              ["rearg", j],
            ],
            q = "[object Arguments]",
            G = "[object Array]",
            W = "[object AsyncFunction]",
            K = "[object Boolean]",
            H = "[object Date]",
            X = "[object DOMException]",
            Q = "[object Error]",
            Y = "[object Function]",
            Z = "[object GeneratorFunction]",
            J = "[object Map]",
            ee = "[object Number]",
            te = "[object Null]",
            ne = "[object Object]",
            re = "[object Promise]",
            ae = "[object Proxy]",
            ie = "[object RegExp]",
            oe = "[object Set]",
            se = "[object String]",
            ce = "[object Symbol]",
            ue = "[object Undefined]",
            le = "[object WeakMap]",
            de = "[object WeakSet]",
            fe = "[object ArrayBuffer]",
            pe = "[object DataView]",
            ve = "[object Float32Array]",
            me = "[object Float64Array]",
            be = "[object Int8Array]",
            he = "[object Int16Array]",
            ge = "[object Int32Array]",
            ye = "[object Uint8Array]",
            _e = "[object Uint8ClampedArray]",
            Te = "[object Uint16Array]",
            xe = "[object Uint32Array]",
            we = /\b__p \+= '';/g,
            Oe = /\b(__p \+=) '' \+/g,
            ke = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            Ee = /&(?:amp|lt|gt|quot|#39);/g,
            je = /[&<>"']/g,
            Ce = RegExp(Ee.source),
            Se = RegExp(je.source),
            Ae = /<%-([\s\S]+?)%>/g,
            Ie = /<%([\s\S]+?)%>/g,
            Ne = /<%=([\s\S]+?)%>/g,
            Re = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            De = /^\w*$/,
            Me =
              /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            Le = /[\\^$.*+?()[\]{}|]/g,
            Pe = RegExp(Le.source),
            Ue = /^\s+/,
            $e = /\s/,
            Be = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
            ze = /\{\n\/\* \[wrapped with (.+)\] \*/,
            Ve = /,? & /,
            Fe = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
            qe = /[()=,{}\[\]\/\s]/,
            Ge = /\\(\\)?/g,
            We = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            Ke = /\w*$/,
            He = /^[-+]0x[0-9a-f]+$/i,
            Xe = /^0b[01]+$/i,
            Qe = /^\[object .+?Constructor\]$/,
            Ye = /^0o[0-7]+$/i,
            Ze = /^(?:0|[1-9]\d*)$/,
            Je = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            et = /($^)/,
            tt = /['\n\r\u2028\u2029\\]/g,
            nt = "\\ud800-\\udfff",
            rt = "\\u0300-\\u036f",
            at = "\\ufe20-\\ufe2f",
            it = "\\u20d0-\\u20ff",
            ot = rt + at + it,
            st = "\\u2700-\\u27bf",
            ct = "a-z\\xdf-\\xf6\\xf8-\\xff",
            ut = "\\xac\\xb1\\xd7\\xf7",
            lt = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
            dt = "\\u2000-\\u206f",
            ft =
              " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
            pt = "A-Z\\xc0-\\xd6\\xd8-\\xde",
            vt = "\\ufe0e\\ufe0f",
            mt = ut + lt + dt + ft,
            bt = "['’]",
            ht = "[" + nt + "]",
            gt = "[" + mt + "]",
            yt = "[" + ot + "]",
            _t = "\\d+",
            Tt = "[" + st + "]",
            xt = "[" + ct + "]",
            wt = "[^" + nt + mt + _t + st + ct + pt + "]",
            Ot = "\\ud83c[\\udffb-\\udfff]",
            kt = "(?:" + yt + "|" + Ot + ")",
            Et = "[^" + nt + "]",
            jt = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            Ct = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            St = "[" + pt + "]",
            At = "\\u200d",
            It = "(?:" + xt + "|" + wt + ")",
            Nt = "(?:" + St + "|" + wt + ")",
            Rt = "(?:" + bt + "(?:d|ll|m|re|s|t|ve))?",
            Dt = "(?:" + bt + "(?:D|LL|M|RE|S|T|VE))?",
            Mt = kt + "?",
            Lt = "[" + vt + "]?",
            Pt =
              "(?:" +
              At +
              "(?:" +
              [Et, jt, Ct].join("|") +
              ")" +
              Lt +
              Mt +
              ")*",
            Ut = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
            $t = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
            Bt = Lt + Mt + Pt,
            zt = "(?:" + [Tt, jt, Ct].join("|") + ")" + Bt,
            Vt = "(?:" + [Et + yt + "?", yt, jt, Ct, ht].join("|") + ")",
            Ft = RegExp(bt, "g"),
            qt = RegExp(yt, "g"),
            Gt = RegExp(Ot + "(?=" + Ot + ")|" + Vt + Bt, "g"),
            Wt = RegExp(
              [
                St +
                  "?" +
                  xt +
                  "+" +
                  Rt +
                  "(?=" +
                  [gt, St, "$"].join("|") +
                  ")",
                Nt + "+" + Dt + "(?=" + [gt, St + It, "$"].join("|") + ")",
                St + "?" + It + "+" + Rt,
                St + "+" + Dt,
                $t,
                Ut,
                _t,
                zt,
              ].join("|"),
              "g"
            ),
            Kt = RegExp("[" + At + nt + ot + vt + "]"),
            Ht =
              /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            Xt = [
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
            Qt = -1,
            Yt = {};
          (Yt[ve] =
            Yt[me] =
            Yt[be] =
            Yt[he] =
            Yt[ge] =
            Yt[ye] =
            Yt[_e] =
            Yt[Te] =
            Yt[xe] =
              !0),
            (Yt[q] =
              Yt[G] =
              Yt[fe] =
              Yt[K] =
              Yt[pe] =
              Yt[H] =
              Yt[Q] =
              Yt[Y] =
              Yt[J] =
              Yt[ee] =
              Yt[ne] =
              Yt[ie] =
              Yt[oe] =
              Yt[se] =
              Yt[le] =
                !1);
          var Zt = {};
          (Zt[q] =
            Zt[G] =
            Zt[fe] =
            Zt[pe] =
            Zt[K] =
            Zt[H] =
            Zt[ve] =
            Zt[me] =
            Zt[be] =
            Zt[he] =
            Zt[ge] =
            Zt[J] =
            Zt[ee] =
            Zt[ne] =
            Zt[ie] =
            Zt[oe] =
            Zt[se] =
            Zt[ce] =
            Zt[ye] =
            Zt[_e] =
            Zt[Te] =
            Zt[xe] =
              !0),
            (Zt[Q] = Zt[Y] = Zt[le] = !1);
          var Jt = {
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
            en = {
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
            nn = {
              "\\": "\\",
              "'": "'",
              "\n": "n",
              "\r": "r",
              "\u2028": "u2028",
              "\u2029": "u2029",
            },
            rn = parseFloat,
            an = parseInt,
            on = "object" == typeof e && e && e.Object === Object && e,
            sn =
              "object" == typeof self && self && self.Object === Object && self,
            cn = on || sn || Function("return this")(),
            un = t && !t.nodeType && t,
            ln = un && "object" == typeof r && r && !r.nodeType && r,
            dn = ln && ln.exports === un,
            fn = dn && on.process,
            pn = (function () {
              try {
                var e = ln && ln.require && ln.require("util").types;
                return e || (fn && fn.binding && fn.binding("util"));
              } catch (t) {}
            })(),
            vn = pn && pn.isArrayBuffer,
            mn = pn && pn.isDate,
            bn = pn && pn.isMap,
            hn = pn && pn.isRegExp,
            gn = pn && pn.isSet,
            yn = pn && pn.isTypedArray;
          function _n(e, t, n) {
            switch (n.length) {
              case 0:
                return e.call(t);
              case 1:
                return e.call(t, n[0]);
              case 2:
                return e.call(t, n[0], n[1]);
              case 3:
                return e.call(t, n[0], n[1], n[2]);
            }
            return e.apply(t, n);
          }
          function Tn(e, t, n, r) {
            var a = -1,
              i = null == e ? 0 : e.length;
            while (++a < i) {
              var o = e[a];
              t(r, o, n(o), e);
            }
            return r;
          }
          function xn(e, t) {
            var n = -1,
              r = null == e ? 0 : e.length;
            while (++n < r) if (!1 === t(e[n], n, e)) break;
            return e;
          }
          function wn(e, t) {
            var n = null == e ? 0 : e.length;
            while (n--) if (!1 === t(e[n], n, e)) break;
            return e;
          }
          function On(e, t) {
            var n = -1,
              r = null == e ? 0 : e.length;
            while (++n < r) if (!t(e[n], n, e)) return !1;
            return !0;
          }
          function kn(e, t) {
            var n = -1,
              r = null == e ? 0 : e.length,
              a = 0,
              i = [];
            while (++n < r) {
              var o = e[n];
              t(o, n, e) && (i[a++] = o);
            }
            return i;
          }
          function En(e, t) {
            var n = null == e ? 0 : e.length;
            return !!n && Un(e, t, 0) > -1;
          }
          function jn(e, t, n) {
            var r = -1,
              a = null == e ? 0 : e.length;
            while (++r < a) if (n(t, e[r])) return !0;
            return !1;
          }
          function Cn(e, t) {
            var n = -1,
              r = null == e ? 0 : e.length,
              a = Array(r);
            while (++n < r) a[n] = t(e[n], n, e);
            return a;
          }
          function Sn(e, t) {
            var n = -1,
              r = t.length,
              a = e.length;
            while (++n < r) e[a + n] = t[n];
            return e;
          }
          function An(e, t, n, r) {
            var a = -1,
              i = null == e ? 0 : e.length;
            r && i && (n = e[++a]);
            while (++a < i) n = t(n, e[a], a, e);
            return n;
          }
          function In(e, t, n, r) {
            var a = null == e ? 0 : e.length;
            r && a && (n = e[--a]);
            while (a--) n = t(n, e[a], a, e);
            return n;
          }
          function Nn(e, t) {
            var n = -1,
              r = null == e ? 0 : e.length;
            while (++n < r) if (t(e[n], n, e)) return !0;
            return !1;
          }
          var Rn = Vn("length");
          function Dn(e) {
            return e.split("");
          }
          function Mn(e) {
            return e.match(Fe) || [];
          }
          function Ln(e, t, n) {
            var r;
            return (
              n(e, function (e, n, a) {
                if (t(e, n, a)) return (r = n), !1;
              }),
              r
            );
          }
          function Pn(e, t, n, r) {
            var a = e.length,
              i = n + (r ? 1 : -1);
            while (r ? i-- : ++i < a) if (t(e[i], i, e)) return i;
            return -1;
          }
          function Un(e, t, n) {
            return t === t ? vr(e, t, n) : Pn(e, Bn, n);
          }
          function $n(e, t, n, r) {
            var a = n - 1,
              i = e.length;
            while (++a < i) if (r(e[a], t)) return a;
            return -1;
          }
          function Bn(e) {
            return e !== e;
          }
          function zn(e, t) {
            var n = null == e ? 0 : e.length;
            return n ? Wn(e, t) / n : $;
          }
          function Vn(e) {
            return function (t) {
              return null == t ? i : t[e];
            };
          }
          function Fn(e) {
            return function (t) {
              return null == e ? i : e[t];
            };
          }
          function qn(e, t, n, r, a) {
            return (
              a(e, function (e, a, i) {
                n = r ? ((r = !1), e) : t(n, e, a, i);
              }),
              n
            );
          }
          function Gn(e, t) {
            var n = e.length;
            e.sort(t);
            while (n--) e[n] = e[n].value;
            return e;
          }
          function Wn(e, t) {
            var n,
              r = -1,
              a = e.length;
            while (++r < a) {
              var o = t(e[r]);
              o !== i && (n = n === i ? o : n + o);
            }
            return n;
          }
          function Kn(e, t) {
            var n = -1,
              r = Array(e);
            while (++n < e) r[n] = t(n);
            return r;
          }
          function Hn(e, t) {
            return Cn(t, function (t) {
              return [t, e[t]];
            });
          }
          function Xn(e) {
            return e ? e.slice(0, gr(e) + 1).replace(Ue, "") : e;
          }
          function Qn(e) {
            return function (t) {
              return e(t);
            };
          }
          function Yn(e, t) {
            return Cn(t, function (t) {
              return e[t];
            });
          }
          function Zn(e, t) {
            return e.has(t);
          }
          function Jn(e, t) {
            var n = -1,
              r = e.length;
            while (++n < r && Un(t, e[n], 0) > -1);
            return n;
          }
          function er(e, t) {
            var n = e.length;
            while (n-- && Un(t, e[n], 0) > -1);
            return n;
          }
          function tr(e, t) {
            var n = e.length,
              r = 0;
            while (n--) e[n] === t && ++r;
            return r;
          }
          var nr = Fn(Jt),
            rr = Fn(en);
          function ar(e) {
            return "\\" + nn[e];
          }
          function ir(e, t) {
            return null == e ? i : e[t];
          }
          function or(e) {
            return Kt.test(e);
          }
          function sr(e) {
            return Ht.test(e);
          }
          function cr(e) {
            var t,
              n = [];
            while (!(t = e.next()).done) n.push(t.value);
            return n;
          }
          function ur(e) {
            var t = -1,
              n = Array(e.size);
            return (
              e.forEach(function (e, r) {
                n[++t] = [r, e];
              }),
              n
            );
          }
          function lr(e, t) {
            return function (n) {
              return e(t(n));
            };
          }
          function dr(e, t) {
            var n = -1,
              r = e.length,
              a = 0,
              i = [];
            while (++n < r) {
              var o = e[n];
              (o !== t && o !== p) || ((e[n] = p), (i[a++] = n));
            }
            return i;
          }
          function fr(e) {
            var t = -1,
              n = Array(e.size);
            return (
              e.forEach(function (e) {
                n[++t] = e;
              }),
              n
            );
          }
          function pr(e) {
            var t = -1,
              n = Array(e.size);
            return (
              e.forEach(function (e) {
                n[++t] = [e, e];
              }),
              n
            );
          }
          function vr(e, t, n) {
            var r = n - 1,
              a = e.length;
            while (++r < a) if (e[r] === t) return r;
            return -1;
          }
          function mr(e, t, n) {
            var r = n + 1;
            while (r--) if (e[r] === t) return r;
            return r;
          }
          function br(e) {
            return or(e) ? _r(e) : Rn(e);
          }
          function hr(e) {
            return or(e) ? Tr(e) : Dn(e);
          }
          function gr(e) {
            var t = e.length;
            while (t-- && $e.test(e.charAt(t)));
            return t;
          }
          var yr = Fn(tn);
          function _r(e) {
            var t = (Gt.lastIndex = 0);
            while (Gt.test(e)) ++t;
            return t;
          }
          function Tr(e) {
            return e.match(Gt) || [];
          }
          function xr(e) {
            return e.match(Wt) || [];
          }
          var wr = function e(t) {
              t = null == t ? cn : Or.defaults(cn.Object(), t, Or.pick(cn, Xt));
              var n = t.Array,
                r = t.Date,
                a = t.Error,
                $e = t.Function,
                Fe = t.Math,
                nt = t.Object,
                rt = t.RegExp,
                at = t.String,
                it = t.TypeError,
                ot = n.prototype,
                st = $e.prototype,
                ct = nt.prototype,
                ut = t["__core-js_shared__"],
                lt = st.toString,
                dt = ct.hasOwnProperty,
                ft = 0,
                pt = (function () {
                  var e = /[^.]+$/.exec(
                    (ut && ut.keys && ut.keys.IE_PROTO) || ""
                  );
                  return e ? "Symbol(src)_1." + e : "";
                })(),
                vt = ct.toString,
                mt = lt.call(nt),
                bt = cn._,
                ht = rt(
                  "^" +
                    lt
                      .call(dt)
                      .replace(Le, "\\$&")
                      .replace(
                        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                        "$1.*?"
                      ) +
                    "$"
                ),
                gt = dn ? t.Buffer : i,
                yt = t.Symbol,
                _t = t.Uint8Array,
                Tt = gt ? gt.allocUnsafe : i,
                xt = lr(nt.getPrototypeOf, nt),
                wt = nt.create,
                Ot = ct.propertyIsEnumerable,
                kt = ot.splice,
                Et = yt ? yt.isConcatSpreadable : i,
                jt = yt ? yt.iterator : i,
                Ct = yt ? yt.toStringTag : i,
                St = (function () {
                  try {
                    var e = Ko(nt, "defineProperty");
                    return e({}, "", {}), e;
                  } catch (t) {}
                })(),
                At = t.clearTimeout !== cn.clearTimeout && t.clearTimeout,
                It = r && r.now !== cn.Date.now && r.now,
                Nt = t.setTimeout !== cn.setTimeout && t.setTimeout,
                Rt = Fe.ceil,
                Dt = Fe.floor,
                Mt = nt.getOwnPropertySymbols,
                Lt = gt ? gt.isBuffer : i,
                Pt = t.isFinite,
                Ut = ot.join,
                $t = lr(nt.keys, nt),
                Bt = Fe.max,
                zt = Fe.min,
                Vt = r.now,
                Gt = t.parseInt,
                Wt = Fe.random,
                Kt = ot.reverse,
                Ht = Ko(t, "DataView"),
                Jt = Ko(t, "Map"),
                en = Ko(t, "Promise"),
                tn = Ko(t, "Set"),
                nn = Ko(t, "WeakMap"),
                on = Ko(nt, "create"),
                sn = nn && new nn(),
                un = {},
                ln = Ns(Ht),
                fn = Ns(Jt),
                pn = Ns(en),
                Rn = Ns(tn),
                Dn = Ns(nn),
                Fn = yt ? yt.prototype : i,
                vr = Fn ? Fn.valueOf : i,
                _r = Fn ? Fn.toString : i;
              function Tr(e) {
                if (kl(e) && !cl(e) && !(e instanceof jr)) {
                  if (e instanceof Er) return e;
                  if (dt.call(e, "__wrapped__")) return Ds(e);
                }
                return new Er(e);
              }
              var wr = (function () {
                function e() {}
                return function (t) {
                  if (!Ol(t)) return {};
                  if (wt) return wt(t);
                  e.prototype = t;
                  var n = new e();
                  return (e.prototype = i), n;
                };
              })();
              function kr() {}
              function Er(e, t) {
                (this.__wrapped__ = e),
                  (this.__actions__ = []),
                  (this.__chain__ = !!t),
                  (this.__index__ = 0),
                  (this.__values__ = i);
              }
              function jr(e) {
                (this.__wrapped__ = e),
                  (this.__actions__ = []),
                  (this.__dir__ = 1),
                  (this.__filtered__ = !1),
                  (this.__iteratees__ = []),
                  (this.__takeCount__ = B),
                  (this.__views__ = []);
              }
              function Cr() {
                var e = new jr(this.__wrapped__);
                return (
                  (e.__actions__ = ro(this.__actions__)),
                  (e.__dir__ = this.__dir__),
                  (e.__filtered__ = this.__filtered__),
                  (e.__iteratees__ = ro(this.__iteratees__)),
                  (e.__takeCount__ = this.__takeCount__),
                  (e.__views__ = ro(this.__views__)),
                  e
                );
              }
              function Sr() {
                if (this.__filtered__) {
                  var e = new jr(this);
                  (e.__dir__ = -1), (e.__filtered__ = !0);
                } else (e = this.clone()), (e.__dir__ *= -1);
                return e;
              }
              function Ar() {
                var e = this.__wrapped__.value(),
                  t = this.__dir__,
                  n = cl(e),
                  r = t < 0,
                  a = n ? e.length : 0,
                  i = Zo(0, a, this.__views__),
                  o = i.start,
                  s = i.end,
                  c = s - o,
                  u = r ? s : o - 1,
                  l = this.__iteratees__,
                  d = l.length,
                  f = 0,
                  p = zt(c, this.__takeCount__);
                if (!n || (!r && a == c && p == c))
                  return Ui(e, this.__actions__);
                var v = [];
                e: while (c-- && f < p) {
                  u += t;
                  var m = -1,
                    b = e[u];
                  while (++m < d) {
                    var h = l[m],
                      g = h.iteratee,
                      y = h.type,
                      _ = g(b);
                    if (y == D) b = _;
                    else if (!_) {
                      if (y == R) continue e;
                      break e;
                    }
                  }
                  v[f++] = b;
                }
                return v;
              }
              function Ir(e) {
                var t = -1,
                  n = null == e ? 0 : e.length;
                this.clear();
                while (++t < n) {
                  var r = e[t];
                  this.set(r[0], r[1]);
                }
              }
              function Nr() {
                (this.__data__ = on ? on(null) : {}), (this.size = 0);
              }
              function Rr(e) {
                var t = this.has(e) && delete this.__data__[e];
                return (this.size -= t ? 1 : 0), t;
              }
              function Dr(e) {
                var t = this.__data__;
                if (on) {
                  var n = t[e];
                  return n === d ? i : n;
                }
                return dt.call(t, e) ? t[e] : i;
              }
              function Mr(e) {
                var t = this.__data__;
                return on ? t[e] !== i : dt.call(t, e);
              }
              function Lr(e, t) {
                var n = this.__data__;
                return (
                  (this.size += this.has(e) ? 0 : 1),
                  (n[e] = on && t === i ? d : t),
                  this
                );
              }
              function Pr(e) {
                var t = -1,
                  n = null == e ? 0 : e.length;
                this.clear();
                while (++t < n) {
                  var r = e[t];
                  this.set(r[0], r[1]);
                }
              }
              function Ur() {
                (this.__data__ = []), (this.size = 0);
              }
              function $r(e) {
                var t = this.__data__,
                  n = la(t, e);
                if (n < 0) return !1;
                var r = t.length - 1;
                return n == r ? t.pop() : kt.call(t, n, 1), --this.size, !0;
              }
              function Br(e) {
                var t = this.__data__,
                  n = la(t, e);
                return n < 0 ? i : t[n][1];
              }
              function zr(e) {
                return la(this.__data__, e) > -1;
              }
              function Vr(e, t) {
                var n = this.__data__,
                  r = la(n, e);
                return (
                  r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this
                );
              }
              function Fr(e) {
                var t = -1,
                  n = null == e ? 0 : e.length;
                this.clear();
                while (++t < n) {
                  var r = e[t];
                  this.set(r[0], r[1]);
                }
              }
              function qr() {
                (this.size = 0),
                  (this.__data__ = {
                    hash: new Ir(),
                    map: new (Jt || Pr)(),
                    string: new Ir(),
                  });
              }
              function Gr(e) {
                var t = Go(this, e)["delete"](e);
                return (this.size -= t ? 1 : 0), t;
              }
              function Wr(e) {
                return Go(this, e).get(e);
              }
              function Kr(e) {
                return Go(this, e).has(e);
              }
              function Hr(e, t) {
                var n = Go(this, e),
                  r = n.size;
                return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
              }
              function Xr(e) {
                var t = -1,
                  n = null == e ? 0 : e.length;
                this.__data__ = new Fr();
                while (++t < n) this.add(e[t]);
              }
              function Qr(e) {
                return this.__data__.set(e, d), this;
              }
              function Yr(e) {
                return this.__data__.has(e);
              }
              function Zr(e) {
                var t = (this.__data__ = new Pr(e));
                this.size = t.size;
              }
              function Jr() {
                (this.__data__ = new Pr()), (this.size = 0);
              }
              function ea(e) {
                var t = this.__data__,
                  n = t["delete"](e);
                return (this.size = t.size), n;
              }
              function ta(e) {
                return this.__data__.get(e);
              }
              function na(e) {
                return this.__data__.has(e);
              }
              function ra(e, t) {
                var n = this.__data__;
                if (n instanceof Pr) {
                  var r = n.__data__;
                  if (!Jt || r.length < s - 1)
                    return r.push([e, t]), (this.size = ++n.size), this;
                  n = this.__data__ = new Fr(r);
                }
                return n.set(e, t), (this.size = n.size), this;
              }
              function aa(e, t) {
                var n = cl(e),
                  r = !n && sl(e),
                  a = !n && !r && pl(e),
                  i = !n && !r && !a && Bl(e),
                  o = n || r || a || i,
                  s = o ? Kn(e.length, at) : [],
                  c = s.length;
                for (var u in e)
                  (!t && !dt.call(e, u)) ||
                    (o &&
                      ("length" == u ||
                        (a && ("offset" == u || "parent" == u)) ||
                        (i &&
                          ("buffer" == u ||
                            "byteLength" == u ||
                            "byteOffset" == u)) ||
                        os(u, c))) ||
                    s.push(u);
                return s;
              }
              function ia(e) {
                var t = e.length;
                return t ? e[hi(0, t - 1)] : i;
              }
              function oa(e, t) {
                return Ss(ro(e), ba(t, 0, e.length));
              }
              function sa(e) {
                return Ss(ro(e));
              }
              function ca(e, t, n) {
                ((n !== i && !al(e[t], n)) || (n === i && !(t in e))) &&
                  va(e, t, n);
              }
              function ua(e, t, n) {
                var r = e[t];
                (dt.call(e, t) && al(r, n) && (n !== i || t in e)) ||
                  va(e, t, n);
              }
              function la(e, t) {
                var n = e.length;
                while (n--) if (al(e[n][0], t)) return n;
                return -1;
              }
              function da(e, t, n, r) {
                return (
                  xa(e, function (e, a, i) {
                    t(r, e, n(e), i);
                  }),
                  r
                );
              }
              function fa(e, t) {
                return e && ao(t, xd(t), e);
              }
              function pa(e, t) {
                return e && ao(t, wd(t), e);
              }
              function va(e, t, n) {
                "__proto__" == t && St
                  ? St(e, t, {
                      configurable: !0,
                      enumerable: !0,
                      value: n,
                      writable: !0,
                    })
                  : (e[t] = n);
              }
              function ma(e, t) {
                var r = -1,
                  a = t.length,
                  o = n(a),
                  s = null == e;
                while (++r < a) o[r] = s ? i : bd(e, t[r]);
                return o;
              }
              function ba(e, t, n) {
                return (
                  e === e &&
                    (n !== i && (e = e <= n ? e : n),
                    t !== i && (e = e >= t ? e : t)),
                  e
                );
              }
              function ha(e, t, n, r, a, o) {
                var s,
                  c = t & v,
                  u = t & m,
                  l = t & b;
                if ((n && (s = a ? n(e, r, a, o) : n(e)), s !== i)) return s;
                if (!Ol(e)) return e;
                var d = cl(e);
                if (d) {
                  if (((s = ts(e)), !c)) return ro(e, s);
                } else {
                  var f = Yo(e),
                    p = f == Y || f == Z;
                  if (pl(e)) return Ki(e, c);
                  if (f == ne || f == q || (p && !a)) {
                    if (((s = u || p ? {} : ns(e)), !c))
                      return u ? oo(e, pa(s, e)) : io(e, fa(s, e));
                  } else {
                    if (!Zt[f]) return a ? e : {};
                    s = rs(e, f, c);
                  }
                }
                o || (o = new Zr());
                var h = o.get(e);
                if (h) return h;
                o.set(e, s),
                  Pl(e)
                    ? e.forEach(function (r) {
                        s.add(ha(r, t, n, r, e, o));
                      })
                    : El(e) &&
                      e.forEach(function (r, a) {
                        s.set(a, ha(r, t, n, a, e, o));
                      });
                var g = l ? (u ? Bo : $o) : u ? wd : xd,
                  y = d ? i : g(e);
                return (
                  xn(y || e, function (r, a) {
                    y && ((a = r), (r = e[a])), ua(s, a, ha(r, t, n, a, e, o));
                  }),
                  s
                );
              }
              function ga(e) {
                var t = xd(e);
                return function (n) {
                  return ya(n, e, t);
                };
              }
              function ya(e, t, n) {
                var r = n.length;
                if (null == e) return !r;
                e = nt(e);
                while (r--) {
                  var a = n[r],
                    o = t[a],
                    s = e[a];
                  if ((s === i && !(a in e)) || !o(s)) return !1;
                }
                return !0;
              }
              function _a(e, t, n) {
                if ("function" != typeof e) throw new it(u);
                return ks(function () {
                  e.apply(i, n);
                }, t);
              }
              function Ta(e, t, n, r) {
                var a = -1,
                  i = En,
                  o = !0,
                  c = e.length,
                  u = [],
                  l = t.length;
                if (!c) return u;
                n && (t = Cn(t, Qn(n))),
                  r
                    ? ((i = jn), (o = !1))
                    : t.length >= s && ((i = Zn), (o = !1), (t = new Xr(t)));
                e: while (++a < c) {
                  var d = e[a],
                    f = null == n ? d : n(d);
                  if (((d = r || 0 !== d ? d : 0), o && f === f)) {
                    var p = l;
                    while (p--) if (t[p] === f) continue e;
                    u.push(d);
                  } else i(t, f, r) || u.push(d);
                }
                return u;
              }
              (Tr.templateSettings = {
                escape: Ae,
                evaluate: Ie,
                interpolate: Ne,
                variable: "",
                imports: { _: Tr },
              }),
                (Tr.prototype = kr.prototype),
                (Tr.prototype.constructor = Tr),
                (Er.prototype = wr(kr.prototype)),
                (Er.prototype.constructor = Er),
                (jr.prototype = wr(kr.prototype)),
                (jr.prototype.constructor = jr),
                (Ir.prototype.clear = Nr),
                (Ir.prototype["delete"] = Rr),
                (Ir.prototype.get = Dr),
                (Ir.prototype.has = Mr),
                (Ir.prototype.set = Lr),
                (Pr.prototype.clear = Ur),
                (Pr.prototype["delete"] = $r),
                (Pr.prototype.get = Br),
                (Pr.prototype.has = zr),
                (Pr.prototype.set = Vr),
                (Fr.prototype.clear = qr),
                (Fr.prototype["delete"] = Gr),
                (Fr.prototype.get = Wr),
                (Fr.prototype.has = Kr),
                (Fr.prototype.set = Hr),
                (Xr.prototype.add = Xr.prototype.push = Qr),
                (Xr.prototype.has = Yr),
                (Zr.prototype.clear = Jr),
                (Zr.prototype["delete"] = ea),
                (Zr.prototype.get = ta),
                (Zr.prototype.has = na),
                (Zr.prototype.set = ra);
              var xa = uo(Ia),
                wa = uo(Na, !0);
              function Oa(e, t) {
                var n = !0;
                return (
                  xa(e, function (e, r, a) {
                    return (n = !!t(e, r, a)), n;
                  }),
                  n
                );
              }
              function ka(e, t, n) {
                var r = -1,
                  a = e.length;
                while (++r < a) {
                  var o = e[r],
                    s = t(o);
                  if (null != s && (c === i ? s === s && !$l(s) : n(s, c)))
                    var c = s,
                      u = o;
                }
                return u;
              }
              function Ea(e, t, n, r) {
                var a = e.length;
                (n = Hl(n)),
                  n < 0 && (n = -n > a ? 0 : a + n),
                  (r = r === i || r > a ? a : Hl(r)),
                  r < 0 && (r += a),
                  (r = n > r ? 0 : Xl(r));
                while (n < r) e[n++] = t;
                return e;
              }
              function ja(e, t) {
                var n = [];
                return (
                  xa(e, function (e, r, a) {
                    t(e, r, a) && n.push(e);
                  }),
                  n
                );
              }
              function Ca(e, t, n, r, a) {
                var i = -1,
                  o = e.length;
                n || (n = is), a || (a = []);
                while (++i < o) {
                  var s = e[i];
                  t > 0 && n(s)
                    ? t > 1
                      ? Ca(s, t - 1, n, r, a)
                      : Sn(a, s)
                    : r || (a[a.length] = s);
                }
                return a;
              }
              var Sa = lo(),
                Aa = lo(!0);
              function Ia(e, t) {
                return e && Sa(e, t, xd);
              }
              function Na(e, t) {
                return e && Aa(e, t, xd);
              }
              function Ra(e, t) {
                return kn(t, function (t) {
                  return Tl(e[t]);
                });
              }
              function Da(e, t) {
                t = Fi(t, e);
                var n = 0,
                  r = t.length;
                while (null != e && n < r) e = e[Is(t[n++])];
                return n && n == r ? e : i;
              }
              function Ma(e, t, n) {
                var r = t(e);
                return cl(e) ? r : Sn(r, n(e));
              }
              function La(e) {
                return null == e
                  ? e === i
                    ? ue
                    : te
                  : Ct && Ct in nt(e)
                  ? Ho(e)
                  : ys(e);
              }
              function Pa(e, t) {
                return e > t;
              }
              function Ua(e, t) {
                return null != e && dt.call(e, t);
              }
              function $a(e, t) {
                return null != e && t in nt(e);
              }
              function Ba(e, t, n) {
                return e >= zt(t, n) && e < Bt(t, n);
              }
              function za(e, t, r) {
                var a = r ? jn : En,
                  o = e[0].length,
                  s = e.length,
                  c = s,
                  u = n(s),
                  l = 1 / 0,
                  d = [];
                while (c--) {
                  var f = e[c];
                  c && t && (f = Cn(f, Qn(t))),
                    (l = zt(f.length, l)),
                    (u[c] =
                      !r && (t || (o >= 120 && f.length >= 120))
                        ? new Xr(c && f)
                        : i);
                }
                f = e[0];
                var p = -1,
                  v = u[0];
                e: while (++p < o && d.length < l) {
                  var m = f[p],
                    b = t ? t(m) : m;
                  if (
                    ((m = r || 0 !== m ? m : 0), !(v ? Zn(v, b) : a(d, b, r)))
                  ) {
                    c = s;
                    while (--c) {
                      var h = u[c];
                      if (!(h ? Zn(h, b) : a(e[c], b, r))) continue e;
                    }
                    v && v.push(b), d.push(m);
                  }
                }
                return d;
              }
              function Va(e, t, n, r) {
                return (
                  Ia(e, function (e, a, i) {
                    t(r, n(e), a, i);
                  }),
                  r
                );
              }
              function Fa(e, t, n) {
                (t = Fi(t, e)), (e = Ts(e, t));
                var r = null == e ? e : e[Is(ic(t))];
                return null == r ? i : _n(r, e, n);
              }
              function qa(e) {
                return kl(e) && La(e) == q;
              }
              function Ga(e) {
                return kl(e) && La(e) == fe;
              }
              function Wa(e) {
                return kl(e) && La(e) == H;
              }
              function Ka(e, t, n, r, a) {
                return (
                  e === t ||
                  (null == e || null == t || (!kl(e) && !kl(t))
                    ? e !== e && t !== t
                    : Ha(e, t, n, r, Ka, a))
                );
              }
              function Ha(e, t, n, r, a, i) {
                var o = cl(e),
                  s = cl(t),
                  c = o ? G : Yo(e),
                  u = s ? G : Yo(t);
                (c = c == q ? ne : c), (u = u == q ? ne : u);
                var l = c == ne,
                  d = u == ne,
                  f = c == u;
                if (f && pl(e)) {
                  if (!pl(t)) return !1;
                  (o = !0), (l = !1);
                }
                if (f && !l)
                  return (
                    i || (i = new Zr()),
                    o || Bl(e) ? Mo(e, t, n, r, a, i) : Lo(e, t, c, n, r, a, i)
                  );
                if (!(n & h)) {
                  var p = l && dt.call(e, "__wrapped__"),
                    v = d && dt.call(t, "__wrapped__");
                  if (p || v) {
                    var m = p ? e.value() : e,
                      b = v ? t.value() : t;
                    return i || (i = new Zr()), a(m, b, n, r, i);
                  }
                }
                return !!f && (i || (i = new Zr()), Po(e, t, n, r, a, i));
              }
              function Xa(e) {
                return kl(e) && Yo(e) == J;
              }
              function Qa(e, t, n, r) {
                var a = n.length,
                  o = a,
                  s = !r;
                if (null == e) return !o;
                e = nt(e);
                while (a--) {
                  var c = n[a];
                  if (s && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1;
                }
                while (++a < o) {
                  c = n[a];
                  var u = c[0],
                    l = e[u],
                    d = c[1];
                  if (s && c[2]) {
                    if (l === i && !(u in e)) return !1;
                  } else {
                    var f = new Zr();
                    if (r) var p = r(l, d, u, e, t, f);
                    if (!(p === i ? Ka(d, l, h | g, r, f) : p)) return !1;
                  }
                }
                return !0;
              }
              function Ya(e) {
                if (!Ol(e) || ds(e)) return !1;
                var t = Tl(e) ? ht : Qe;
                return t.test(Ns(e));
              }
              function Za(e) {
                return kl(e) && La(e) == ie;
              }
              function Ja(e) {
                return kl(e) && Yo(e) == oe;
              }
              function ei(e) {
                return kl(e) && wl(e.length) && !!Yt[La(e)];
              }
              function ti(e) {
                return "function" == typeof e
                  ? e
                  : null == e
                  ? If
                  : "object" == typeof e
                  ? cl(e)
                    ? si(e[0], e[1])
                    : oi(e)
                  : qf(e);
              }
              function ni(e) {
                if (!ps(e)) return $t(e);
                var t = [];
                for (var n in nt(e))
                  dt.call(e, n) && "constructor" != n && t.push(n);
                return t;
              }
              function ri(e) {
                if (!Ol(e)) return gs(e);
                var t = ps(e),
                  n = [];
                for (var r in e)
                  ("constructor" != r || (!t && dt.call(e, r))) && n.push(r);
                return n;
              }
              function ai(e, t) {
                return e < t;
              }
              function ii(e, t) {
                var r = -1,
                  a = ll(e) ? n(e.length) : [];
                return (
                  xa(e, function (e, n, i) {
                    a[++r] = t(e, n, i);
                  }),
                  a
                );
              }
              function oi(e) {
                var t = Wo(e);
                return 1 == t.length && t[0][2]
                  ? ms(t[0][0], t[0][1])
                  : function (n) {
                      return n === e || Qa(n, e, t);
                    };
              }
              function si(e, t) {
                return cs(e) && vs(t)
                  ? ms(Is(e), t)
                  : function (n) {
                      var r = bd(n, e);
                      return r === i && r === t ? gd(n, e) : Ka(t, r, h | g);
                    };
              }
              function ci(e, t, n, r, a) {
                e !== t &&
                  Sa(
                    t,
                    function (o, s) {
                      if ((a || (a = new Zr()), Ol(o)))
                        ui(e, t, s, n, ci, r, a);
                      else {
                        var c = r ? r(ws(e, s), o, s + "", e, t, a) : i;
                        c === i && (c = o), ca(e, s, c);
                      }
                    },
                    wd
                  );
              }
              function ui(e, t, n, r, a, o, s) {
                var c = ws(e, n),
                  u = ws(t, n),
                  l = s.get(u);
                if (l) ca(e, n, l);
                else {
                  var d = o ? o(c, u, n + "", e, t, s) : i,
                    f = d === i;
                  if (f) {
                    var p = cl(u),
                      v = !p && pl(u),
                      m = !p && !v && Bl(u);
                    (d = u),
                      p || v || m
                        ? cl(c)
                          ? (d = c)
                          : dl(c)
                          ? (d = ro(c))
                          : v
                          ? ((f = !1), (d = Ki(u, !0)))
                          : m
                          ? ((f = !1), (d = Zi(u, !0)))
                          : (d = [])
                        : Dl(u) || sl(u)
                        ? ((d = c),
                          sl(c)
                            ? (d = Yl(c))
                            : (Ol(c) && !Tl(c)) || (d = ns(u)))
                        : (f = !1);
                  }
                  f && (s.set(u, d), a(d, u, r, o, s), s["delete"](u)),
                    ca(e, n, d);
                }
              }
              function li(e, t) {
                var n = e.length;
                if (n) return (t += t < 0 ? n : 0), os(t, n) ? e[t] : i;
              }
              function di(e, t, n) {
                t = t.length
                  ? Cn(t, function (e) {
                      return cl(e)
                        ? function (t) {
                            return Da(t, 1 === e.length ? e[0] : e);
                          }
                        : e;
                    })
                  : [If];
                var r = -1;
                t = Cn(t, Qn(qo()));
                var a = ii(e, function (e, n, a) {
                  var i = Cn(t, function (t) {
                    return t(e);
                  });
                  return { criteria: i, index: ++r, value: e };
                });
                return Gn(a, function (e, t) {
                  return eo(e, t, n);
                });
              }
              function fi(e, t) {
                return pi(e, t, function (t, n) {
                  return gd(e, n);
                });
              }
              function pi(e, t, n) {
                var r = -1,
                  a = t.length,
                  i = {};
                while (++r < a) {
                  var o = t[r],
                    s = Da(e, o);
                  n(s, o) && wi(i, Fi(o, e), s);
                }
                return i;
              }
              function vi(e) {
                return function (t) {
                  return Da(t, e);
                };
              }
              function mi(e, t, n, r) {
                var a = r ? $n : Un,
                  i = -1,
                  o = t.length,
                  s = e;
                e === t && (t = ro(t)), n && (s = Cn(e, Qn(n)));
                while (++i < o) {
                  var c = 0,
                    u = t[i],
                    l = n ? n(u) : u;
                  while ((c = a(s, l, c, r)) > -1)
                    s !== e && kt.call(s, c, 1), kt.call(e, c, 1);
                }
                return e;
              }
              function bi(e, t) {
                var n = e ? t.length : 0,
                  r = n - 1;
                while (n--) {
                  var a = t[n];
                  if (n == r || a !== i) {
                    var i = a;
                    os(a) ? kt.call(e, a, 1) : Mi(e, a);
                  }
                }
                return e;
              }
              function hi(e, t) {
                return e + Dt(Wt() * (t - e + 1));
              }
              function gi(e, t, r, a) {
                var i = -1,
                  o = Bt(Rt((t - e) / (r || 1)), 0),
                  s = n(o);
                while (o--) (s[a ? o : ++i] = e), (e += r);
                return s;
              }
              function yi(e, t) {
                var n = "";
                if (!e || t < 1 || t > P) return n;
                do {
                  t % 2 && (n += e), (t = Dt(t / 2)), t && (e += e);
                } while (t);
                return n;
              }
              function _i(e, t) {
                return Es(_s(e, t, If), e + "");
              }
              function Ti(e) {
                return ia(zd(e));
              }
              function xi(e, t) {
                var n = zd(e);
                return Ss(n, ba(t, 0, n.length));
              }
              function wi(e, t, n, r) {
                if (!Ol(e)) return e;
                t = Fi(t, e);
                var a = -1,
                  o = t.length,
                  s = o - 1,
                  c = e;
                while (null != c && ++a < o) {
                  var u = Is(t[a]),
                    l = n;
                  if (
                    "__proto__" === u ||
                    "constructor" === u ||
                    "prototype" === u
                  )
                    return e;
                  if (a != s) {
                    var d = c[u];
                    (l = r ? r(d, u, c) : i),
                      l === i && (l = Ol(d) ? d : os(t[a + 1]) ? [] : {});
                  }
                  ua(c, u, l), (c = c[u]);
                }
                return e;
              }
              var Oi = sn
                  ? function (e, t) {
                      return sn.set(e, t), e;
                    }
                  : If,
                ki = St
                  ? function (e, t) {
                      return St(e, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: jf(t),
                        writable: !0,
                      });
                    }
                  : If;
              function Ei(e) {
                return Ss(zd(e));
              }
              function ji(e, t, r) {
                var a = -1,
                  i = e.length;
                t < 0 && (t = -t > i ? 0 : i + t),
                  (r = r > i ? i : r),
                  r < 0 && (r += i),
                  (i = t > r ? 0 : (r - t) >>> 0),
                  (t >>>= 0);
                var o = n(i);
                while (++a < i) o[a] = e[a + t];
                return o;
              }
              function Ci(e, t) {
                var n;
                return (
                  xa(e, function (e, r, a) {
                    return (n = t(e, r, a)), !n;
                  }),
                  !!n
                );
              }
              function Si(e, t, n) {
                var r = 0,
                  a = null == e ? r : e.length;
                if ("number" == typeof t && t === t && a <= V) {
                  while (r < a) {
                    var i = (r + a) >>> 1,
                      o = e[i];
                    null !== o && !$l(o) && (n ? o <= t : o < t)
                      ? (r = i + 1)
                      : (a = i);
                  }
                  return a;
                }
                return Ai(e, t, If, n);
              }
              function Ai(e, t, n, r) {
                var a = 0,
                  o = null == e ? 0 : e.length;
                if (0 === o) return 0;
                t = n(t);
                var s = t !== t,
                  c = null === t,
                  u = $l(t),
                  l = t === i;
                while (a < o) {
                  var d = Dt((a + o) / 2),
                    f = n(e[d]),
                    p = f !== i,
                    v = null === f,
                    m = f === f,
                    b = $l(f);
                  if (s) var h = r || m;
                  else
                    h = l
                      ? m && (r || p)
                      : c
                      ? m && p && (r || !v)
                      : u
                      ? m && p && !v && (r || !b)
                      : !v && !b && (r ? f <= t : f < t);
                  h ? (a = d + 1) : (o = d);
                }
                return zt(o, z);
              }
              function Ii(e, t) {
                var n = -1,
                  r = e.length,
                  a = 0,
                  i = [];
                while (++n < r) {
                  var o = e[n],
                    s = t ? t(o) : o;
                  if (!n || !al(s, c)) {
                    var c = s;
                    i[a++] = 0 === o ? 0 : o;
                  }
                }
                return i;
              }
              function Ni(e) {
                return "number" == typeof e ? e : $l(e) ? $ : +e;
              }
              function Ri(e) {
                if ("string" == typeof e) return e;
                if (cl(e)) return Cn(e, Ri) + "";
                if ($l(e)) return _r ? _r.call(e) : "";
                var t = e + "";
                return "0" == t && 1 / e == -L ? "-0" : t;
              }
              function Di(e, t, n) {
                var r = -1,
                  a = En,
                  i = e.length,
                  o = !0,
                  c = [],
                  u = c;
                if (n) (o = !1), (a = jn);
                else if (i >= s) {
                  var l = t ? null : So(e);
                  if (l) return fr(l);
                  (o = !1), (a = Zn), (u = new Xr());
                } else u = t ? [] : c;
                e: while (++r < i) {
                  var d = e[r],
                    f = t ? t(d) : d;
                  if (((d = n || 0 !== d ? d : 0), o && f === f)) {
                    var p = u.length;
                    while (p--) if (u[p] === f) continue e;
                    t && u.push(f), c.push(d);
                  } else a(u, f, n) || (u !== c && u.push(f), c.push(d));
                }
                return c;
              }
              function Mi(e, t) {
                return (
                  (t = Fi(t, e)),
                  (e = Ts(e, t)),
                  null == e || delete e[Is(ic(t))]
                );
              }
              function Li(e, t, n, r) {
                return wi(e, t, n(Da(e, t)), r);
              }
              function Pi(e, t, n, r) {
                var a = e.length,
                  i = r ? a : -1;
                while ((r ? i-- : ++i < a) && t(e[i], i, e));
                return n
                  ? ji(e, r ? 0 : i, r ? i + 1 : a)
                  : ji(e, r ? i + 1 : 0, r ? a : i);
              }
              function Ui(e, t) {
                var n = e;
                return (
                  n instanceof jr && (n = n.value()),
                  An(
                    t,
                    function (e, t) {
                      return t.func.apply(t.thisArg, Sn([e], t.args));
                    },
                    n
                  )
                );
              }
              function $i(e, t, r) {
                var a = e.length;
                if (a < 2) return a ? Di(e[0]) : [];
                var i = -1,
                  o = n(a);
                while (++i < a) {
                  var s = e[i],
                    c = -1;
                  while (++c < a) c != i && (o[i] = Ta(o[i] || s, e[c], t, r));
                }
                return Di(Ca(o, 1), t, r);
              }
              function Bi(e, t, n) {
                var r = -1,
                  a = e.length,
                  o = t.length,
                  s = {};
                while (++r < a) {
                  var c = r < o ? t[r] : i;
                  n(s, e[r], c);
                }
                return s;
              }
              function zi(e) {
                return dl(e) ? e : [];
              }
              function Vi(e) {
                return "function" == typeof e ? e : If;
              }
              function Fi(e, t) {
                return cl(e) ? e : cs(e, t) ? [e] : As(Jl(e));
              }
              var qi = _i;
              function Gi(e, t, n) {
                var r = e.length;
                return (n = n === i ? r : n), !t && n >= r ? e : ji(e, t, n);
              }
              var Wi =
                At ||
                function (e) {
                  return cn.clearTimeout(e);
                };
              function Ki(e, t) {
                if (t) return e.slice();
                var n = e.length,
                  r = Tt ? Tt(n) : new e.constructor(n);
                return e.copy(r), r;
              }
              function Hi(e) {
                var t = new e.constructor(e.byteLength);
                return new _t(t).set(new _t(e)), t;
              }
              function Xi(e, t) {
                var n = t ? Hi(e.buffer) : e.buffer;
                return new e.constructor(n, e.byteOffset, e.byteLength);
              }
              function Qi(e) {
                var t = new e.constructor(e.source, Ke.exec(e));
                return (t.lastIndex = e.lastIndex), t;
              }
              function Yi(e) {
                return vr ? nt(vr.call(e)) : {};
              }
              function Zi(e, t) {
                var n = t ? Hi(e.buffer) : e.buffer;
                return new e.constructor(n, e.byteOffset, e.length);
              }
              function Ji(e, t) {
                if (e !== t) {
                  var n = e !== i,
                    r = null === e,
                    a = e === e,
                    o = $l(e),
                    s = t !== i,
                    c = null === t,
                    u = t === t,
                    l = $l(t);
                  if (
                    (!c && !l && !o && e > t) ||
                    (o && s && u && !c && !l) ||
                    (r && s && u) ||
                    (!n && u) ||
                    !a
                  )
                    return 1;
                  if (
                    (!r && !o && !l && e < t) ||
                    (l && n && a && !r && !o) ||
                    (c && n && a) ||
                    (!s && a) ||
                    !u
                  )
                    return -1;
                }
                return 0;
              }
              function eo(e, t, n) {
                var r = -1,
                  a = e.criteria,
                  i = t.criteria,
                  o = a.length,
                  s = n.length;
                while (++r < o) {
                  var c = Ji(a[r], i[r]);
                  if (c) {
                    if (r >= s) return c;
                    var u = n[r];
                    return c * ("desc" == u ? -1 : 1);
                  }
                }
                return e.index - t.index;
              }
              function to(e, t, r, a) {
                var i = -1,
                  o = e.length,
                  s = r.length,
                  c = -1,
                  u = t.length,
                  l = Bt(o - s, 0),
                  d = n(u + l),
                  f = !a;
                while (++c < u) d[c] = t[c];
                while (++i < s) (f || i < o) && (d[r[i]] = e[i]);
                while (l--) d[c++] = e[i++];
                return d;
              }
              function no(e, t, r, a) {
                var i = -1,
                  o = e.length,
                  s = -1,
                  c = r.length,
                  u = -1,
                  l = t.length,
                  d = Bt(o - c, 0),
                  f = n(d + l),
                  p = !a;
                while (++i < d) f[i] = e[i];
                var v = i;
                while (++u < l) f[v + u] = t[u];
                while (++s < c) (p || i < o) && (f[v + r[s]] = e[i++]);
                return f;
              }
              function ro(e, t) {
                var r = -1,
                  a = e.length;
                t || (t = n(a));
                while (++r < a) t[r] = e[r];
                return t;
              }
              function ao(e, t, n, r) {
                var a = !n;
                n || (n = {});
                var o = -1,
                  s = t.length;
                while (++o < s) {
                  var c = t[o],
                    u = r ? r(n[c], e[c], c, n, e) : i;
                  u === i && (u = e[c]), a ? va(n, c, u) : ua(n, c, u);
                }
                return n;
              }
              function io(e, t) {
                return ao(e, Xo(e), t);
              }
              function oo(e, t) {
                return ao(e, Qo(e), t);
              }
              function so(e, t) {
                return function (n, r) {
                  var a = cl(n) ? Tn : da,
                    i = t ? t() : {};
                  return a(n, e, qo(r, 2), i);
                };
              }
              function co(e) {
                return _i(function (t, n) {
                  var r = -1,
                    a = n.length,
                    o = a > 1 ? n[a - 1] : i,
                    s = a > 2 ? n[2] : i;
                  (o = e.length > 3 && "function" == typeof o ? (a--, o) : i),
                    s && ss(n[0], n[1], s) && ((o = a < 3 ? i : o), (a = 1)),
                    (t = nt(t));
                  while (++r < a) {
                    var c = n[r];
                    c && e(t, c, r, o);
                  }
                  return t;
                });
              }
              function uo(e, t) {
                return function (n, r) {
                  if (null == n) return n;
                  if (!ll(n)) return e(n, r);
                  var a = n.length,
                    i = t ? a : -1,
                    o = nt(n);
                  while (t ? i-- : ++i < a) if (!1 === r(o[i], i, o)) break;
                  return n;
                };
              }
              function lo(e) {
                return function (t, n, r) {
                  var a = -1,
                    i = nt(t),
                    o = r(t),
                    s = o.length;
                  while (s--) {
                    var c = o[e ? s : ++a];
                    if (!1 === n(i[c], c, i)) break;
                  }
                  return t;
                };
              }
              function fo(e, t, n) {
                var r = t & y,
                  a = mo(e);
                function i() {
                  var t = this && this !== cn && this instanceof i ? a : e;
                  return t.apply(r ? n : this, arguments);
                }
                return i;
              }
              function po(e) {
                return function (t) {
                  t = Jl(t);
                  var n = or(t) ? hr(t) : i,
                    r = n ? n[0] : t.charAt(0),
                    a = n ? Gi(n, 1).join("") : t.slice(1);
                  return r[e]() + a;
                };
              }
              function vo(e) {
                return function (t) {
                  return An(xf(Hd(t).replace(Ft, "")), e, "");
                };
              }
              function mo(e) {
                return function () {
                  var t = arguments;
                  switch (t.length) {
                    case 0:
                      return new e();
                    case 1:
                      return new e(t[0]);
                    case 2:
                      return new e(t[0], t[1]);
                    case 3:
                      return new e(t[0], t[1], t[2]);
                    case 4:
                      return new e(t[0], t[1], t[2], t[3]);
                    case 5:
                      return new e(t[0], t[1], t[2], t[3], t[4]);
                    case 6:
                      return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                    case 7:
                      return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
                  }
                  var n = wr(e.prototype),
                    r = e.apply(n, t);
                  return Ol(r) ? r : n;
                };
              }
              function bo(e, t, r) {
                var a = mo(e);
                function o() {
                  var s = arguments.length,
                    c = n(s),
                    u = s,
                    l = Fo(o);
                  while (u--) c[u] = arguments[u];
                  var d = s < 3 && c[0] !== l && c[s - 1] !== l ? [] : dr(c, l);
                  if (((s -= d.length), s < r))
                    return jo(e, t, yo, o.placeholder, i, c, d, i, i, r - s);
                  var f = this && this !== cn && this instanceof o ? a : e;
                  return _n(f, this, c);
                }
                return o;
              }
              function ho(e) {
                return function (t, n, r) {
                  var a = nt(t);
                  if (!ll(t)) {
                    var o = qo(n, 3);
                    (t = xd(t)),
                      (n = function (e) {
                        return o(a[e], e, a);
                      });
                  }
                  var s = e(t, n, r);
                  return s > -1 ? a[o ? t[s] : s] : i;
                };
              }
              function go(e) {
                return Uo(function (t) {
                  var n = t.length,
                    r = n,
                    a = Er.prototype.thru;
                  e && t.reverse();
                  while (r--) {
                    var o = t[r];
                    if ("function" != typeof o) throw new it(u);
                    if (a && !s && "wrapper" == Vo(o)) var s = new Er([], !0);
                  }
                  r = s ? r : n;
                  while (++r < n) {
                    o = t[r];
                    var c = Vo(o),
                      l = "wrapper" == c ? zo(o) : i;
                    s =
                      l &&
                      ls(l[0]) &&
                      l[1] == (E | x | O | j) &&
                      !l[4].length &&
                      1 == l[9]
                        ? s[Vo(l[0])].apply(s, l[3])
                        : 1 == o.length && ls(o)
                        ? s[c]()
                        : s.thru(o);
                  }
                  return function () {
                    var e = arguments,
                      r = e[0];
                    if (s && 1 == e.length && cl(r)) return s.plant(r).value();
                    var a = 0,
                      i = n ? t[a].apply(this, e) : r;
                    while (++a < n) i = t[a].call(this, i);
                    return i;
                  };
                });
              }
              function yo(e, t, r, a, o, s, c, u, l, d) {
                var f = t & E,
                  p = t & y,
                  v = t & _,
                  m = t & (x | w),
                  b = t & C,
                  h = v ? i : mo(e);
                function g() {
                  var i = arguments.length,
                    y = n(i),
                    _ = i;
                  while (_--) y[_] = arguments[_];
                  if (m)
                    var T = Fo(g),
                      x = tr(y, T);
                  if (
                    (a && (y = to(y, a, o, m)),
                    s && (y = no(y, s, c, m)),
                    (i -= x),
                    m && i < d)
                  ) {
                    var w = dr(y, T);
                    return jo(e, t, yo, g.placeholder, r, y, w, u, l, d - i);
                  }
                  var O = p ? r : this,
                    k = v ? O[e] : e;
                  return (
                    (i = y.length),
                    u ? (y = xs(y, u)) : b && i > 1 && y.reverse(),
                    f && l < i && (y.length = l),
                    this &&
                      this !== cn &&
                      this instanceof g &&
                      (k = h || mo(k)),
                    k.apply(O, y)
                  );
                }
                return g;
              }
              function _o(e, t) {
                return function (n, r) {
                  return Va(n, e, t(r), {});
                };
              }
              function To(e, t) {
                return function (n, r) {
                  var a;
                  if (n === i && r === i) return t;
                  if ((n !== i && (a = n), r !== i)) {
                    if (a === i) return r;
                    "string" == typeof n || "string" == typeof r
                      ? ((n = Ri(n)), (r = Ri(r)))
                      : ((n = Ni(n)), (r = Ni(r))),
                      (a = e(n, r));
                  }
                  return a;
                };
              }
              function xo(e) {
                return Uo(function (t) {
                  return (
                    (t = Cn(t, Qn(qo()))),
                    _i(function (n) {
                      var r = this;
                      return e(t, function (e) {
                        return _n(e, r, n);
                      });
                    })
                  );
                });
              }
              function wo(e, t) {
                t = t === i ? " " : Ri(t);
                var n = t.length;
                if (n < 2) return n ? yi(t, e) : t;
                var r = yi(t, Rt(e / br(t)));
                return or(t) ? Gi(hr(r), 0, e).join("") : r.slice(0, e);
              }
              function Oo(e, t, r, a) {
                var i = t & y,
                  o = mo(e);
                function s() {
                  var t = -1,
                    c = arguments.length,
                    u = -1,
                    l = a.length,
                    d = n(l + c),
                    f = this && this !== cn && this instanceof s ? o : e;
                  while (++u < l) d[u] = a[u];
                  while (c--) d[u++] = arguments[++t];
                  return _n(f, i ? r : this, d);
                }
                return s;
              }
              function ko(e) {
                return function (t, n, r) {
                  return (
                    r && "number" != typeof r && ss(t, n, r) && (n = r = i),
                    (t = Kl(t)),
                    n === i ? ((n = t), (t = 0)) : (n = Kl(n)),
                    (r = r === i ? (t < n ? 1 : -1) : Kl(r)),
                    gi(t, n, r, e)
                  );
                };
              }
              function Eo(e) {
                return function (t, n) {
                  return (
                    ("string" == typeof t && "string" == typeof n) ||
                      ((t = Ql(t)), (n = Ql(n))),
                    e(t, n)
                  );
                };
              }
              function jo(e, t, n, r, a, o, s, c, u, l) {
                var d = t & x,
                  f = d ? s : i,
                  p = d ? i : s,
                  v = d ? o : i,
                  m = d ? i : o;
                (t |= d ? O : k), (t &= ~(d ? k : O)), t & T || (t &= ~(y | _));
                var b = [e, t, a, v, f, m, p, c, u, l],
                  h = n.apply(i, b);
                return ls(e) && Os(h, b), (h.placeholder = r), js(h, e, t);
              }
              function Co(e) {
                var t = Fe[e];
                return function (e, n) {
                  if (
                    ((e = Ql(e)),
                    (n = null == n ? 0 : zt(Hl(n), 292)),
                    n && Pt(e))
                  ) {
                    var r = (Jl(e) + "e").split("e"),
                      a = t(r[0] + "e" + (+r[1] + n));
                    return (
                      (r = (Jl(a) + "e").split("e")),
                      +(r[0] + "e" + (+r[1] - n))
                    );
                  }
                  return t(e);
                };
              }
              var So =
                tn && 1 / fr(new tn([, -0]))[1] == L
                  ? function (e) {
                      return new tn(e);
                    }
                  : $f;
              function Ao(e) {
                return function (t) {
                  var n = Yo(t);
                  return n == J ? ur(t) : n == oe ? pr(t) : Hn(t, e(t));
                };
              }
              function Io(e, t, n, r, a, o, s, c) {
                var l = t & _;
                if (!l && "function" != typeof e) throw new it(u);
                var d = r ? r.length : 0;
                if (
                  (d || ((t &= ~(O | k)), (r = a = i)),
                  (s = s === i ? s : Bt(Hl(s), 0)),
                  (c = c === i ? c : Hl(c)),
                  (d -= a ? a.length : 0),
                  t & k)
                ) {
                  var f = r,
                    p = a;
                  r = a = i;
                }
                var v = l ? i : zo(e),
                  m = [e, t, n, r, a, f, p, o, s, c];
                if (
                  (v && hs(m, v),
                  (e = m[0]),
                  (t = m[1]),
                  (n = m[2]),
                  (r = m[3]),
                  (a = m[4]),
                  (c = m[9] =
                    m[9] === i ? (l ? 0 : e.length) : Bt(m[9] - d, 0)),
                  !c && t & (x | w) && (t &= ~(x | w)),
                  t && t != y)
                )
                  b =
                    t == x || t == w
                      ? bo(e, t, c)
                      : (t != O && t != (y | O)) || a.length
                      ? yo.apply(i, m)
                      : Oo(e, t, n, r);
                else var b = fo(e, t, n);
                var h = v ? Oi : Os;
                return js(h(b, m), e, t);
              }
              function No(e, t, n, r) {
                return e === i || (al(e, ct[n]) && !dt.call(r, n)) ? t : e;
              }
              function Ro(e, t, n, r, a, o) {
                return (
                  Ol(e) &&
                    Ol(t) &&
                    (o.set(t, e), ci(e, t, i, Ro, o), o["delete"](t)),
                  e
                );
              }
              function Do(e) {
                return Dl(e) ? i : e;
              }
              function Mo(e, t, n, r, a, o) {
                var s = n & h,
                  c = e.length,
                  u = t.length;
                if (c != u && !(s && u > c)) return !1;
                var l = o.get(e),
                  d = o.get(t);
                if (l && d) return l == t && d == e;
                var f = -1,
                  p = !0,
                  v = n & g ? new Xr() : i;
                o.set(e, t), o.set(t, e);
                while (++f < c) {
                  var m = e[f],
                    b = t[f];
                  if (r) var y = s ? r(b, m, f, t, e, o) : r(m, b, f, e, t, o);
                  if (y !== i) {
                    if (y) continue;
                    p = !1;
                    break;
                  }
                  if (v) {
                    if (
                      !Nn(t, function (e, t) {
                        if (!Zn(v, t) && (m === e || a(m, e, n, r, o)))
                          return v.push(t);
                      })
                    ) {
                      p = !1;
                      break;
                    }
                  } else if (m !== b && !a(m, b, n, r, o)) {
                    p = !1;
                    break;
                  }
                }
                return o["delete"](e), o["delete"](t), p;
              }
              function Lo(e, t, n, r, a, i, o) {
                switch (n) {
                  case pe:
                    if (
                      e.byteLength != t.byteLength ||
                      e.byteOffset != t.byteOffset
                    )
                      return !1;
                    (e = e.buffer), (t = t.buffer);
                  case fe:
                    return !(
                      e.byteLength != t.byteLength || !i(new _t(e), new _t(t))
                    );
                  case K:
                  case H:
                  case ee:
                    return al(+e, +t);
                  case Q:
                    return e.name == t.name && e.message == t.message;
                  case ie:
                  case se:
                    return e == t + "";
                  case J:
                    var s = ur;
                  case oe:
                    var c = r & h;
                    if ((s || (s = fr), e.size != t.size && !c)) return !1;
                    var u = o.get(e);
                    if (u) return u == t;
                    (r |= g), o.set(e, t);
                    var l = Mo(s(e), s(t), r, a, i, o);
                    return o["delete"](e), l;
                  case ce:
                    if (vr) return vr.call(e) == vr.call(t);
                }
                return !1;
              }
              function Po(e, t, n, r, a, o) {
                var s = n & h,
                  c = $o(e),
                  u = c.length,
                  l = $o(t),
                  d = l.length;
                if (u != d && !s) return !1;
                var f = u;
                while (f--) {
                  var p = c[f];
                  if (!(s ? p in t : dt.call(t, p))) return !1;
                }
                var v = o.get(e),
                  m = o.get(t);
                if (v && m) return v == t && m == e;
                var b = !0;
                o.set(e, t), o.set(t, e);
                var g = s;
                while (++f < u) {
                  p = c[f];
                  var y = e[p],
                    _ = t[p];
                  if (r) var T = s ? r(_, y, p, t, e, o) : r(y, _, p, e, t, o);
                  if (!(T === i ? y === _ || a(y, _, n, r, o) : T)) {
                    b = !1;
                    break;
                  }
                  g || (g = "constructor" == p);
                }
                if (b && !g) {
                  var x = e.constructor,
                    w = t.constructor;
                  x == w ||
                    !("constructor" in e) ||
                    !("constructor" in t) ||
                    ("function" == typeof x &&
                      x instanceof x &&
                      "function" == typeof w &&
                      w instanceof w) ||
                    (b = !1);
                }
                return o["delete"](e), o["delete"](t), b;
              }
              function Uo(e) {
                return Es(_s(e, i, Hs), e + "");
              }
              function $o(e) {
                return Ma(e, xd, Xo);
              }
              function Bo(e) {
                return Ma(e, wd, Qo);
              }
              var zo = sn
                ? function (e) {
                    return sn.get(e);
                  }
                : $f;
              function Vo(e) {
                var t = e.name + "",
                  n = un[t],
                  r = dt.call(un, t) ? n.length : 0;
                while (r--) {
                  var a = n[r],
                    i = a.func;
                  if (null == i || i == e) return a.name;
                }
                return t;
              }
              function Fo(e) {
                var t = dt.call(Tr, "placeholder") ? Tr : e;
                return t.placeholder;
              }
              function qo() {
                var e = Tr.iteratee || Nf;
                return (
                  (e = e === Nf ? ti : e),
                  arguments.length ? e(arguments[0], arguments[1]) : e
                );
              }
              function Go(e, t) {
                var n = e.__data__;
                return us(t)
                  ? n["string" == typeof t ? "string" : "hash"]
                  : n.map;
              }
              function Wo(e) {
                var t = xd(e),
                  n = t.length;
                while (n--) {
                  var r = t[n],
                    a = e[r];
                  t[n] = [r, a, vs(a)];
                }
                return t;
              }
              function Ko(e, t) {
                var n = ir(e, t);
                return Ya(n) ? n : i;
              }
              function Ho(e) {
                var t = dt.call(e, Ct),
                  n = e[Ct];
                try {
                  e[Ct] = i;
                  var r = !0;
                } catch (o) {}
                var a = vt.call(e);
                return r && (t ? (e[Ct] = n) : delete e[Ct]), a;
              }
              var Xo = Mt
                  ? function (e) {
                      return null == e
                        ? []
                        : ((e = nt(e)),
                          kn(Mt(e), function (t) {
                            return Ot.call(e, t);
                          }));
                    }
                  : Hf,
                Qo = Mt
                  ? function (e) {
                      var t = [];
                      while (e) Sn(t, Xo(e)), (e = xt(e));
                      return t;
                    }
                  : Hf,
                Yo = La;
              function Zo(e, t, n) {
                var r = -1,
                  a = n.length;
                while (++r < a) {
                  var i = n[r],
                    o = i.size;
                  switch (i.type) {
                    case "drop":
                      e += o;
                      break;
                    case "dropRight":
                      t -= o;
                      break;
                    case "take":
                      t = zt(t, e + o);
                      break;
                    case "takeRight":
                      e = Bt(e, t - o);
                      break;
                  }
                }
                return { start: e, end: t };
              }
              function Jo(e) {
                var t = e.match(ze);
                return t ? t[1].split(Ve) : [];
              }
              function es(e, t, n) {
                t = Fi(t, e);
                var r = -1,
                  a = t.length,
                  i = !1;
                while (++r < a) {
                  var o = Is(t[r]);
                  if (!(i = null != e && n(e, o))) break;
                  e = e[o];
                }
                return i || ++r != a
                  ? i
                  : ((a = null == e ? 0 : e.length),
                    !!a && wl(a) && os(o, a) && (cl(e) || sl(e)));
              }
              function ts(e) {
                var t = e.length,
                  n = new e.constructor(t);
                return (
                  t &&
                    "string" == typeof e[0] &&
                    dt.call(e, "index") &&
                    ((n.index = e.index), (n.input = e.input)),
                  n
                );
              }
              function ns(e) {
                return "function" != typeof e.constructor || ps(e)
                  ? {}
                  : wr(xt(e));
              }
              function rs(e, t, n) {
                var r = e.constructor;
                switch (t) {
                  case fe:
                    return Hi(e);
                  case K:
                  case H:
                    return new r(+e);
                  case pe:
                    return Xi(e, n);
                  case ve:
                  case me:
                  case be:
                  case he:
                  case ge:
                  case ye:
                  case _e:
                  case Te:
                  case xe:
                    return Zi(e, n);
                  case J:
                    return new r();
                  case ee:
                  case se:
                    return new r(e);
                  case ie:
                    return Qi(e);
                  case oe:
                    return new r();
                  case ce:
                    return Yi(e);
                }
              }
              function as(e, t) {
                var n = t.length;
                if (!n) return e;
                var r = n - 1;
                return (
                  (t[r] = (n > 1 ? "& " : "") + t[r]),
                  (t = t.join(n > 2 ? ", " : " ")),
                  e.replace(Be, "{\n/* [wrapped with " + t + "] */\n")
                );
              }
              function is(e) {
                return cl(e) || sl(e) || !!(Et && e && e[Et]);
              }
              function os(e, t) {
                var n = typeof e;
                return (
                  (t = null == t ? P : t),
                  !!t &&
                    ("number" == n || ("symbol" != n && Ze.test(e))) &&
                    e > -1 &&
                    e % 1 == 0 &&
                    e < t
                );
              }
              function ss(e, t, n) {
                if (!Ol(n)) return !1;
                var r = typeof t;
                return (
                  !!("number" == r
                    ? ll(n) && os(t, n.length)
                    : "string" == r && t in n) && al(n[t], e)
                );
              }
              function cs(e, t) {
                if (cl(e)) return !1;
                var n = typeof e;
                return (
                  !(
                    "number" != n &&
                    "symbol" != n &&
                    "boolean" != n &&
                    null != e &&
                    !$l(e)
                  ) ||
                  De.test(e) ||
                  !Re.test(e) ||
                  (null != t && e in nt(t))
                );
              }
              function us(e) {
                var t = typeof e;
                return "string" == t ||
                  "number" == t ||
                  "symbol" == t ||
                  "boolean" == t
                  ? "__proto__" !== e
                  : null === e;
              }
              function ls(e) {
                var t = Vo(e),
                  n = Tr[t];
                if ("function" != typeof n || !(t in jr.prototype)) return !1;
                if (e === n) return !0;
                var r = zo(n);
                return !!r && e === r[0];
              }
              function ds(e) {
                return !!pt && pt in e;
              }
              ((Ht && Yo(new Ht(new ArrayBuffer(1))) != pe) ||
                (Jt && Yo(new Jt()) != J) ||
                (en && Yo(en.resolve()) != re) ||
                (tn && Yo(new tn()) != oe) ||
                (nn && Yo(new nn()) != le)) &&
                (Yo = function (e) {
                  var t = La(e),
                    n = t == ne ? e.constructor : i,
                    r = n ? Ns(n) : "";
                  if (r)
                    switch (r) {
                      case ln:
                        return pe;
                      case fn:
                        return J;
                      case pn:
                        return re;
                      case Rn:
                        return oe;
                      case Dn:
                        return le;
                    }
                  return t;
                });
              var fs = ut ? Tl : Xf;
              function ps(e) {
                var t = e && e.constructor,
                  n = ("function" == typeof t && t.prototype) || ct;
                return e === n;
              }
              function vs(e) {
                return e === e && !Ol(e);
              }
              function ms(e, t) {
                return function (n) {
                  return null != n && n[e] === t && (t !== i || e in nt(n));
                };
              }
              function bs(e) {
                var t = Bu(e, function (e) {
                    return n.size === f && n.clear(), e;
                  }),
                  n = t.cache;
                return t;
              }
              function hs(e, t) {
                var n = e[1],
                  r = t[1],
                  a = n | r,
                  i = a < (y | _ | E),
                  o =
                    (r == E && n == x) ||
                    (r == E && n == j && e[7].length <= t[8]) ||
                    (r == (E | j) && t[7].length <= t[8] && n == x);
                if (!i && !o) return e;
                r & y && ((e[2] = t[2]), (a |= n & y ? 0 : T));
                var s = t[3];
                if (s) {
                  var c = e[3];
                  (e[3] = c ? to(c, s, t[4]) : s),
                    (e[4] = c ? dr(e[3], p) : t[4]);
                }
                return (
                  (s = t[5]),
                  s &&
                    ((c = e[5]),
                    (e[5] = c ? no(c, s, t[6]) : s),
                    (e[6] = c ? dr(e[5], p) : t[6])),
                  (s = t[7]),
                  s && (e[7] = s),
                  r & E && (e[8] = null == e[8] ? t[8] : zt(e[8], t[8])),
                  null == e[9] && (e[9] = t[9]),
                  (e[0] = t[0]),
                  (e[1] = a),
                  e
                );
              }
              function gs(e) {
                var t = [];
                if (null != e) for (var n in nt(e)) t.push(n);
                return t;
              }
              function ys(e) {
                return vt.call(e);
              }
              function _s(e, t, r) {
                return (
                  (t = Bt(t === i ? e.length - 1 : t, 0)),
                  function () {
                    var a = arguments,
                      i = -1,
                      o = Bt(a.length - t, 0),
                      s = n(o);
                    while (++i < o) s[i] = a[t + i];
                    i = -1;
                    var c = n(t + 1);
                    while (++i < t) c[i] = a[i];
                    return (c[t] = r(s)), _n(e, this, c);
                  }
                );
              }
              function Ts(e, t) {
                return t.length < 2 ? e : Da(e, ji(t, 0, -1));
              }
              function xs(e, t) {
                var n = e.length,
                  r = zt(t.length, n),
                  a = ro(e);
                while (r--) {
                  var o = t[r];
                  e[r] = os(o, n) ? a[o] : i;
                }
                return e;
              }
              function ws(e, t) {
                if (
                  ("constructor" !== t || "function" !== typeof e[t]) &&
                  "__proto__" != t
                )
                  return e[t];
              }
              var Os = Cs(Oi),
                ks =
                  Nt ||
                  function (e, t) {
                    return cn.setTimeout(e, t);
                  },
                Es = Cs(ki);
              function js(e, t, n) {
                var r = t + "";
                return Es(e, as(r, Rs(Jo(r), n)));
              }
              function Cs(e) {
                var t = 0,
                  n = 0;
                return function () {
                  var r = Vt(),
                    a = N - (r - n);
                  if (((n = r), a > 0)) {
                    if (++t >= I) return arguments[0];
                  } else t = 0;
                  return e.apply(i, arguments);
                };
              }
              function Ss(e, t) {
                var n = -1,
                  r = e.length,
                  a = r - 1;
                t = t === i ? r : t;
                while (++n < t) {
                  var o = hi(n, a),
                    s = e[o];
                  (e[o] = e[n]), (e[n] = s);
                }
                return (e.length = t), e;
              }
              var As = bs(function (e) {
                var t = [];
                return (
                  46 === e.charCodeAt(0) && t.push(""),
                  e.replace(Me, function (e, n, r, a) {
                    t.push(r ? a.replace(Ge, "$1") : n || e);
                  }),
                  t
                );
              });
              function Is(e) {
                if ("string" == typeof e || $l(e)) return e;
                var t = e + "";
                return "0" == t && 1 / e == -L ? "-0" : t;
              }
              function Ns(e) {
                if (null != e) {
                  try {
                    return lt.call(e);
                  } catch (t) {}
                  try {
                    return e + "";
                  } catch (t) {}
                }
                return "";
              }
              function Rs(e, t) {
                return (
                  xn(F, function (n) {
                    var r = "_." + n[0];
                    t & n[1] && !En(e, r) && e.push(r);
                  }),
                  e.sort()
                );
              }
              function Ds(e) {
                if (e instanceof jr) return e.clone();
                var t = new Er(e.__wrapped__, e.__chain__);
                return (
                  (t.__actions__ = ro(e.__actions__)),
                  (t.__index__ = e.__index__),
                  (t.__values__ = e.__values__),
                  t
                );
              }
              function Ms(e, t, r) {
                t = (r ? ss(e, t, r) : t === i) ? 1 : Bt(Hl(t), 0);
                var a = null == e ? 0 : e.length;
                if (!a || t < 1) return [];
                var o = 0,
                  s = 0,
                  c = n(Rt(a / t));
                while (o < a) c[s++] = ji(e, o, (o += t));
                return c;
              }
              function Ls(e) {
                var t = -1,
                  n = null == e ? 0 : e.length,
                  r = 0,
                  a = [];
                while (++t < n) {
                  var i = e[t];
                  i && (a[r++] = i);
                }
                return a;
              }
              function Ps() {
                var e = arguments.length;
                if (!e) return [];
                var t = n(e - 1),
                  r = arguments[0],
                  a = e;
                while (a--) t[a - 1] = arguments[a];
                return Sn(cl(r) ? ro(r) : [r], Ca(t, 1));
              }
              var Us = _i(function (e, t) {
                  return dl(e) ? Ta(e, Ca(t, 1, dl, !0)) : [];
                }),
                $s = _i(function (e, t) {
                  var n = ic(t);
                  return (
                    dl(n) && (n = i),
                    dl(e) ? Ta(e, Ca(t, 1, dl, !0), qo(n, 2)) : []
                  );
                }),
                Bs = _i(function (e, t) {
                  var n = ic(t);
                  return (
                    dl(n) && (n = i), dl(e) ? Ta(e, Ca(t, 1, dl, !0), i, n) : []
                  );
                });
              function zs(e, t, n) {
                var r = null == e ? 0 : e.length;
                return r
                  ? ((t = n || t === i ? 1 : Hl(t)), ji(e, t < 0 ? 0 : t, r))
                  : [];
              }
              function Vs(e, t, n) {
                var r = null == e ? 0 : e.length;
                return r
                  ? ((t = n || t === i ? 1 : Hl(t)),
                    (t = r - t),
                    ji(e, 0, t < 0 ? 0 : t))
                  : [];
              }
              function Fs(e, t) {
                return e && e.length ? Pi(e, qo(t, 3), !0, !0) : [];
              }
              function qs(e, t) {
                return e && e.length ? Pi(e, qo(t, 3), !0) : [];
              }
              function Gs(e, t, n, r) {
                var a = null == e ? 0 : e.length;
                return a
                  ? (n &&
                      "number" != typeof n &&
                      ss(e, t, n) &&
                      ((n = 0), (r = a)),
                    Ea(e, t, n, r))
                  : [];
              }
              function Ws(e, t, n) {
                var r = null == e ? 0 : e.length;
                if (!r) return -1;
                var a = null == n ? 0 : Hl(n);
                return a < 0 && (a = Bt(r + a, 0)), Pn(e, qo(t, 3), a);
              }
              function Ks(e, t, n) {
                var r = null == e ? 0 : e.length;
                if (!r) return -1;
                var a = r - 1;
                return (
                  n !== i &&
                    ((a = Hl(n)), (a = n < 0 ? Bt(r + a, 0) : zt(a, r - 1))),
                  Pn(e, qo(t, 3), a, !0)
                );
              }
              function Hs(e) {
                var t = null == e ? 0 : e.length;
                return t ? Ca(e, 1) : [];
              }
              function Xs(e) {
                var t = null == e ? 0 : e.length;
                return t ? Ca(e, L) : [];
              }
              function Qs(e, t) {
                var n = null == e ? 0 : e.length;
                return n ? ((t = t === i ? 1 : Hl(t)), Ca(e, t)) : [];
              }
              function Ys(e) {
                var t = -1,
                  n = null == e ? 0 : e.length,
                  r = {};
                while (++t < n) {
                  var a = e[t];
                  r[a[0]] = a[1];
                }
                return r;
              }
              function Zs(e) {
                return e && e.length ? e[0] : i;
              }
              function Js(e, t, n) {
                var r = null == e ? 0 : e.length;
                if (!r) return -1;
                var a = null == n ? 0 : Hl(n);
                return a < 0 && (a = Bt(r + a, 0)), Un(e, t, a);
              }
              function ec(e) {
                var t = null == e ? 0 : e.length;
                return t ? ji(e, 0, -1) : [];
              }
              var tc = _i(function (e) {
                  var t = Cn(e, zi);
                  return t.length && t[0] === e[0] ? za(t) : [];
                }),
                nc = _i(function (e) {
                  var t = ic(e),
                    n = Cn(e, zi);
                  return (
                    t === ic(n) ? (t = i) : n.pop(),
                    n.length && n[0] === e[0] ? za(n, qo(t, 2)) : []
                  );
                }),
                rc = _i(function (e) {
                  var t = ic(e),
                    n = Cn(e, zi);
                  return (
                    (t = "function" == typeof t ? t : i),
                    t && n.pop(),
                    n.length && n[0] === e[0] ? za(n, i, t) : []
                  );
                });
              function ac(e, t) {
                return null == e ? "" : Ut.call(e, t);
              }
              function ic(e) {
                var t = null == e ? 0 : e.length;
                return t ? e[t - 1] : i;
              }
              function oc(e, t, n) {
                var r = null == e ? 0 : e.length;
                if (!r) return -1;
                var a = r;
                return (
                  n !== i &&
                    ((a = Hl(n)), (a = a < 0 ? Bt(r + a, 0) : zt(a, r - 1))),
                  t === t ? mr(e, t, a) : Pn(e, Bn, a, !0)
                );
              }
              function sc(e, t) {
                return e && e.length ? li(e, Hl(t)) : i;
              }
              var cc = _i(uc);
              function uc(e, t) {
                return e && e.length && t && t.length ? mi(e, t) : e;
              }
              function lc(e, t, n) {
                return e && e.length && t && t.length ? mi(e, t, qo(n, 2)) : e;
              }
              function dc(e, t, n) {
                return e && e.length && t && t.length ? mi(e, t, i, n) : e;
              }
              var fc = Uo(function (e, t) {
                var n = null == e ? 0 : e.length,
                  r = ma(e, t);
                return (
                  bi(
                    e,
                    Cn(t, function (e) {
                      return os(e, n) ? +e : e;
                    }).sort(Ji)
                  ),
                  r
                );
              });
              function pc(e, t) {
                var n = [];
                if (!e || !e.length) return n;
                var r = -1,
                  a = [],
                  i = e.length;
                t = qo(t, 3);
                while (++r < i) {
                  var o = e[r];
                  t(o, r, e) && (n.push(o), a.push(r));
                }
                return bi(e, a), n;
              }
              function vc(e) {
                return null == e ? e : Kt.call(e);
              }
              function mc(e, t, n) {
                var r = null == e ? 0 : e.length;
                return r
                  ? (n && "number" != typeof n && ss(e, t, n)
                      ? ((t = 0), (n = r))
                      : ((t = null == t ? 0 : Hl(t)),
                        (n = n === i ? r : Hl(n))),
                    ji(e, t, n))
                  : [];
              }
              function bc(e, t) {
                return Si(e, t);
              }
              function hc(e, t, n) {
                return Ai(e, t, qo(n, 2));
              }
              function gc(e, t) {
                var n = null == e ? 0 : e.length;
                if (n) {
                  var r = Si(e, t);
                  if (r < n && al(e[r], t)) return r;
                }
                return -1;
              }
              function yc(e, t) {
                return Si(e, t, !0);
              }
              function _c(e, t, n) {
                return Ai(e, t, qo(n, 2), !0);
              }
              function Tc(e, t) {
                var n = null == e ? 0 : e.length;
                if (n) {
                  var r = Si(e, t, !0) - 1;
                  if (al(e[r], t)) return r;
                }
                return -1;
              }
              function xc(e) {
                return e && e.length ? Ii(e) : [];
              }
              function wc(e, t) {
                return e && e.length ? Ii(e, qo(t, 2)) : [];
              }
              function Oc(e) {
                var t = null == e ? 0 : e.length;
                return t ? ji(e, 1, t) : [];
              }
              function kc(e, t, n) {
                return e && e.length
                  ? ((t = n || t === i ? 1 : Hl(t)), ji(e, 0, t < 0 ? 0 : t))
                  : [];
              }
              function Ec(e, t, n) {
                var r = null == e ? 0 : e.length;
                return r
                  ? ((t = n || t === i ? 1 : Hl(t)),
                    (t = r - t),
                    ji(e, t < 0 ? 0 : t, r))
                  : [];
              }
              function jc(e, t) {
                return e && e.length ? Pi(e, qo(t, 3), !1, !0) : [];
              }
              function Cc(e, t) {
                return e && e.length ? Pi(e, qo(t, 3)) : [];
              }
              var Sc = _i(function (e) {
                  return Di(Ca(e, 1, dl, !0));
                }),
                Ac = _i(function (e) {
                  var t = ic(e);
                  return dl(t) && (t = i), Di(Ca(e, 1, dl, !0), qo(t, 2));
                }),
                Ic = _i(function (e) {
                  var t = ic(e);
                  return (
                    (t = "function" == typeof t ? t : i),
                    Di(Ca(e, 1, dl, !0), i, t)
                  );
                });
              function Nc(e) {
                return e && e.length ? Di(e) : [];
              }
              function Rc(e, t) {
                return e && e.length ? Di(e, qo(t, 2)) : [];
              }
              function Dc(e, t) {
                return (
                  (t = "function" == typeof t ? t : i),
                  e && e.length ? Di(e, i, t) : []
                );
              }
              function Mc(e) {
                if (!e || !e.length) return [];
                var t = 0;
                return (
                  (e = kn(e, function (e) {
                    if (dl(e)) return (t = Bt(e.length, t)), !0;
                  })),
                  Kn(t, function (t) {
                    return Cn(e, Vn(t));
                  })
                );
              }
              function Lc(e, t) {
                if (!e || !e.length) return [];
                var n = Mc(e);
                return null == t
                  ? n
                  : Cn(n, function (e) {
                      return _n(t, i, e);
                    });
              }
              var Pc = _i(function (e, t) {
                  return dl(e) ? Ta(e, t) : [];
                }),
                Uc = _i(function (e) {
                  return $i(kn(e, dl));
                }),
                $c = _i(function (e) {
                  var t = ic(e);
                  return dl(t) && (t = i), $i(kn(e, dl), qo(t, 2));
                }),
                Bc = _i(function (e) {
                  var t = ic(e);
                  return (
                    (t = "function" == typeof t ? t : i), $i(kn(e, dl), i, t)
                  );
                }),
                zc = _i(Mc);
              function Vc(e, t) {
                return Bi(e || [], t || [], ua);
              }
              function Fc(e, t) {
                return Bi(e || [], t || [], wi);
              }
              var qc = _i(function (e) {
                var t = e.length,
                  n = t > 1 ? e[t - 1] : i;
                return (
                  (n = "function" == typeof n ? (e.pop(), n) : i), Lc(e, n)
                );
              });
              function Gc(e) {
                var t = Tr(e);
                return (t.__chain__ = !0), t;
              }
              function Wc(e, t) {
                return t(e), e;
              }
              function Kc(e, t) {
                return t(e);
              }
              var Hc = Uo(function (e) {
                var t = e.length,
                  n = t ? e[0] : 0,
                  r = this.__wrapped__,
                  a = function (t) {
                    return ma(t, e);
                  };
                return !(t > 1 || this.__actions__.length) &&
                  r instanceof jr &&
                  os(n)
                  ? ((r = r.slice(n, +n + (t ? 1 : 0))),
                    r.__actions__.push({ func: Kc, args: [a], thisArg: i }),
                    new Er(r, this.__chain__).thru(function (e) {
                      return t && !e.length && e.push(i), e;
                    }))
                  : this.thru(a);
              });
              function Xc() {
                return Gc(this);
              }
              function Qc() {
                return new Er(this.value(), this.__chain__);
              }
              function Yc() {
                this.__values__ === i && (this.__values__ = Wl(this.value()));
                var e = this.__index__ >= this.__values__.length,
                  t = e ? i : this.__values__[this.__index__++];
                return { done: e, value: t };
              }
              function Zc() {
                return this;
              }
              function Jc(e) {
                var t,
                  n = this;
                while (n instanceof kr) {
                  var r = Ds(n);
                  (r.__index__ = 0),
                    (r.__values__ = i),
                    t ? (a.__wrapped__ = r) : (t = r);
                  var a = r;
                  n = n.__wrapped__;
                }
                return (a.__wrapped__ = e), t;
              }
              function eu() {
                var e = this.__wrapped__;
                if (e instanceof jr) {
                  var t = e;
                  return (
                    this.__actions__.length && (t = new jr(this)),
                    (t = t.reverse()),
                    t.__actions__.push({ func: Kc, args: [vc], thisArg: i }),
                    new Er(t, this.__chain__)
                  );
                }
                return this.thru(vc);
              }
              function tu() {
                return Ui(this.__wrapped__, this.__actions__);
              }
              var nu = so(function (e, t, n) {
                dt.call(e, n) ? ++e[n] : va(e, n, 1);
              });
              function ru(e, t, n) {
                var r = cl(e) ? On : Oa;
                return n && ss(e, t, n) && (t = i), r(e, qo(t, 3));
              }
              function au(e, t) {
                var n = cl(e) ? kn : ja;
                return n(e, qo(t, 3));
              }
              var iu = ho(Ws),
                ou = ho(Ks);
              function su(e, t) {
                return Ca(bu(e, t), 1);
              }
              function cu(e, t) {
                return Ca(bu(e, t), L);
              }
              function uu(e, t, n) {
                return (n = n === i ? 1 : Hl(n)), Ca(bu(e, t), n);
              }
              function lu(e, t) {
                var n = cl(e) ? xn : xa;
                return n(e, qo(t, 3));
              }
              function du(e, t) {
                var n = cl(e) ? wn : wa;
                return n(e, qo(t, 3));
              }
              var fu = so(function (e, t, n) {
                dt.call(e, n) ? e[n].push(t) : va(e, n, [t]);
              });
              function pu(e, t, n, r) {
                (e = ll(e) ? e : zd(e)), (n = n && !r ? Hl(n) : 0);
                var a = e.length;
                return (
                  n < 0 && (n = Bt(a + n, 0)),
                  Ul(e)
                    ? n <= a && e.indexOf(t, n) > -1
                    : !!a && Un(e, t, n) > -1
                );
              }
              var vu = _i(function (e, t, r) {
                  var a = -1,
                    i = "function" == typeof t,
                    o = ll(e) ? n(e.length) : [];
                  return (
                    xa(e, function (e) {
                      o[++a] = i ? _n(t, e, r) : Fa(e, t, r);
                    }),
                    o
                  );
                }),
                mu = so(function (e, t, n) {
                  va(e, n, t);
                });
              function bu(e, t) {
                var n = cl(e) ? Cn : ii;
                return n(e, qo(t, 3));
              }
              function hu(e, t, n, r) {
                return null == e
                  ? []
                  : (cl(t) || (t = null == t ? [] : [t]),
                    (n = r ? i : n),
                    cl(n) || (n = null == n ? [] : [n]),
                    di(e, t, n));
              }
              var gu = so(
                function (e, t, n) {
                  e[n ? 0 : 1].push(t);
                },
                function () {
                  return [[], []];
                }
              );
              function yu(e, t, n) {
                var r = cl(e) ? An : qn,
                  a = arguments.length < 3;
                return r(e, qo(t, 4), n, a, xa);
              }
              function _u(e, t, n) {
                var r = cl(e) ? In : qn,
                  a = arguments.length < 3;
                return r(e, qo(t, 4), n, a, wa);
              }
              function Tu(e, t) {
                var n = cl(e) ? kn : ja;
                return n(e, zu(qo(t, 3)));
              }
              function xu(e) {
                var t = cl(e) ? ia : Ti;
                return t(e);
              }
              function wu(e, t, n) {
                t = (n ? ss(e, t, n) : t === i) ? 1 : Hl(t);
                var r = cl(e) ? oa : xi;
                return r(e, t);
              }
              function Ou(e) {
                var t = cl(e) ? sa : Ei;
                return t(e);
              }
              function ku(e) {
                if (null == e) return 0;
                if (ll(e)) return Ul(e) ? br(e) : e.length;
                var t = Yo(e);
                return t == J || t == oe ? e.size : ni(e).length;
              }
              function Eu(e, t, n) {
                var r = cl(e) ? Nn : Ci;
                return n && ss(e, t, n) && (t = i), r(e, qo(t, 3));
              }
              var ju = _i(function (e, t) {
                  if (null == e) return [];
                  var n = t.length;
                  return (
                    n > 1 && ss(e, t[0], t[1])
                      ? (t = [])
                      : n > 2 && ss(t[0], t[1], t[2]) && (t = [t[0]]),
                    di(e, Ca(t, 1), [])
                  );
                }),
                Cu =
                  It ||
                  function () {
                    return cn.Date.now();
                  };
              function Su(e, t) {
                if ("function" != typeof t) throw new it(u);
                return (
                  (e = Hl(e)),
                  function () {
                    if (--e < 1) return t.apply(this, arguments);
                  }
                );
              }
              function Au(e, t, n) {
                return (
                  (t = n ? i : t),
                  (t = e && null == t ? e.length : t),
                  Io(e, E, i, i, i, i, t)
                );
              }
              function Iu(e, t) {
                var n;
                if ("function" != typeof t) throw new it(u);
                return (
                  (e = Hl(e)),
                  function () {
                    return (
                      --e > 0 && (n = t.apply(this, arguments)),
                      e <= 1 && (t = i),
                      n
                    );
                  }
                );
              }
              var Nu = _i(function (e, t, n) {
                  var r = y;
                  if (n.length) {
                    var a = dr(n, Fo(Nu));
                    r |= O;
                  }
                  return Io(e, r, t, n, a);
                }),
                Ru = _i(function (e, t, n) {
                  var r = y | _;
                  if (n.length) {
                    var a = dr(n, Fo(Ru));
                    r |= O;
                  }
                  return Io(t, r, e, n, a);
                });
              function Du(e, t, n) {
                t = n ? i : t;
                var r = Io(e, x, i, i, i, i, i, t);
                return (r.placeholder = Du.placeholder), r;
              }
              function Mu(e, t, n) {
                t = n ? i : t;
                var r = Io(e, w, i, i, i, i, i, t);
                return (r.placeholder = Mu.placeholder), r;
              }
              function Lu(e, t, n) {
                var r,
                  a,
                  o,
                  s,
                  c,
                  l,
                  d = 0,
                  f = !1,
                  p = !1,
                  v = !0;
                if ("function" != typeof e) throw new it(u);
                function m(t) {
                  var n = r,
                    o = a;
                  return (r = a = i), (d = t), (s = e.apply(o, n)), s;
                }
                function b(e) {
                  return (d = e), (c = ks(y, t)), f ? m(e) : s;
                }
                function h(e) {
                  var n = e - l,
                    r = e - d,
                    a = t - n;
                  return p ? zt(a, o - r) : a;
                }
                function g(e) {
                  var n = e - l,
                    r = e - d;
                  return l === i || n >= t || n < 0 || (p && r >= o);
                }
                function y() {
                  var e = Cu();
                  if (g(e)) return _(e);
                  c = ks(y, h(e));
                }
                function _(e) {
                  return (c = i), v && r ? m(e) : ((r = a = i), s);
                }
                function T() {
                  c !== i && Wi(c), (d = 0), (r = l = a = c = i);
                }
                function x() {
                  return c === i ? s : _(Cu());
                }
                function w() {
                  var e = Cu(),
                    n = g(e);
                  if (((r = arguments), (a = this), (l = e), n)) {
                    if (c === i) return b(l);
                    if (p) return Wi(c), (c = ks(y, t)), m(l);
                  }
                  return c === i && (c = ks(y, t)), s;
                }
                return (
                  (t = Ql(t) || 0),
                  Ol(n) &&
                    ((f = !!n.leading),
                    (p = "maxWait" in n),
                    (o = p ? Bt(Ql(n.maxWait) || 0, t) : o),
                    (v = "trailing" in n ? !!n.trailing : v)),
                  (w.cancel = T),
                  (w.flush = x),
                  w
                );
              }
              var Pu = _i(function (e, t) {
                  return _a(e, 1, t);
                }),
                Uu = _i(function (e, t, n) {
                  return _a(e, Ql(t) || 0, n);
                });
              function $u(e) {
                return Io(e, C);
              }
              function Bu(e, t) {
                if (
                  "function" != typeof e ||
                  (null != t && "function" != typeof t)
                )
                  throw new it(u);
                var n = function () {
                  var r = arguments,
                    a = t ? t.apply(this, r) : r[0],
                    i = n.cache;
                  if (i.has(a)) return i.get(a);
                  var o = e.apply(this, r);
                  return (n.cache = i.set(a, o) || i), o;
                };
                return (n.cache = new (Bu.Cache || Fr)()), n;
              }
              function zu(e) {
                if ("function" != typeof e) throw new it(u);
                return function () {
                  var t = arguments;
                  switch (t.length) {
                    case 0:
                      return !e.call(this);
                    case 1:
                      return !e.call(this, t[0]);
                    case 2:
                      return !e.call(this, t[0], t[1]);
                    case 3:
                      return !e.call(this, t[0], t[1], t[2]);
                  }
                  return !e.apply(this, t);
                };
              }
              function Vu(e) {
                return Iu(2, e);
              }
              Bu.Cache = Fr;
              var Fu = qi(function (e, t) {
                  t =
                    1 == t.length && cl(t[0])
                      ? Cn(t[0], Qn(qo()))
                      : Cn(Ca(t, 1), Qn(qo()));
                  var n = t.length;
                  return _i(function (r) {
                    var a = -1,
                      i = zt(r.length, n);
                    while (++a < i) r[a] = t[a].call(this, r[a]);
                    return _n(e, this, r);
                  });
                }),
                qu = _i(function (e, t) {
                  var n = dr(t, Fo(qu));
                  return Io(e, O, i, t, n);
                }),
                Gu = _i(function (e, t) {
                  var n = dr(t, Fo(Gu));
                  return Io(e, k, i, t, n);
                }),
                Wu = Uo(function (e, t) {
                  return Io(e, j, i, i, i, t);
                });
              function Ku(e, t) {
                if ("function" != typeof e) throw new it(u);
                return (t = t === i ? t : Hl(t)), _i(e, t);
              }
              function Hu(e, t) {
                if ("function" != typeof e) throw new it(u);
                return (
                  (t = null == t ? 0 : Bt(Hl(t), 0)),
                  _i(function (n) {
                    var r = n[t],
                      a = Gi(n, 0, t);
                    return r && Sn(a, r), _n(e, this, a);
                  })
                );
              }
              function Xu(e, t, n) {
                var r = !0,
                  a = !0;
                if ("function" != typeof e) throw new it(u);
                return (
                  Ol(n) &&
                    ((r = "leading" in n ? !!n.leading : r),
                    (a = "trailing" in n ? !!n.trailing : a)),
                  Lu(e, t, { leading: r, maxWait: t, trailing: a })
                );
              }
              function Qu(e) {
                return Au(e, 1);
              }
              function Yu(e, t) {
                return qu(Vi(t), e);
              }
              function Zu() {
                if (!arguments.length) return [];
                var e = arguments[0];
                return cl(e) ? e : [e];
              }
              function Ju(e) {
                return ha(e, b);
              }
              function el(e, t) {
                return (t = "function" == typeof t ? t : i), ha(e, b, t);
              }
              function tl(e) {
                return ha(e, v | b);
              }
              function nl(e, t) {
                return (t = "function" == typeof t ? t : i), ha(e, v | b, t);
              }
              function rl(e, t) {
                return null == t || ya(e, t, xd(t));
              }
              function al(e, t) {
                return e === t || (e !== e && t !== t);
              }
              var il = Eo(Pa),
                ol = Eo(function (e, t) {
                  return e >= t;
                }),
                sl = qa(
                  (function () {
                    return arguments;
                  })()
                )
                  ? qa
                  : function (e) {
                      return (
                        kl(e) && dt.call(e, "callee") && !Ot.call(e, "callee")
                      );
                    },
                cl = n.isArray,
                ul = vn ? Qn(vn) : Ga;
              function ll(e) {
                return null != e && wl(e.length) && !Tl(e);
              }
              function dl(e) {
                return kl(e) && ll(e);
              }
              function fl(e) {
                return !0 === e || !1 === e || (kl(e) && La(e) == K);
              }
              var pl = Lt || Xf,
                vl = mn ? Qn(mn) : Wa;
              function ml(e) {
                return kl(e) && 1 === e.nodeType && !Dl(e);
              }
              function bl(e) {
                if (null == e) return !0;
                if (
                  ll(e) &&
                  (cl(e) ||
                    "string" == typeof e ||
                    "function" == typeof e.splice ||
                    pl(e) ||
                    Bl(e) ||
                    sl(e))
                )
                  return !e.length;
                var t = Yo(e);
                if (t == J || t == oe) return !e.size;
                if (ps(e)) return !ni(e).length;
                for (var n in e) if (dt.call(e, n)) return !1;
                return !0;
              }
              function hl(e, t) {
                return Ka(e, t);
              }
              function gl(e, t, n) {
                n = "function" == typeof n ? n : i;
                var r = n ? n(e, t) : i;
                return r === i ? Ka(e, t, i, n) : !!r;
              }
              function yl(e) {
                if (!kl(e)) return !1;
                var t = La(e);
                return (
                  t == Q ||
                  t == X ||
                  ("string" == typeof e.message &&
                    "string" == typeof e.name &&
                    !Dl(e))
                );
              }
              function _l(e) {
                return "number" == typeof e && Pt(e);
              }
              function Tl(e) {
                if (!Ol(e)) return !1;
                var t = La(e);
                return t == Y || t == Z || t == W || t == ae;
              }
              function xl(e) {
                return "number" == typeof e && e == Hl(e);
              }
              function wl(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= P;
              }
              function Ol(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t);
              }
              function kl(e) {
                return null != e && "object" == typeof e;
              }
              var El = bn ? Qn(bn) : Xa;
              function jl(e, t) {
                return e === t || Qa(e, t, Wo(t));
              }
              function Cl(e, t, n) {
                return (n = "function" == typeof n ? n : i), Qa(e, t, Wo(t), n);
              }
              function Sl(e) {
                return Rl(e) && e != +e;
              }
              function Al(e) {
                if (fs(e)) throw new a(c);
                return Ya(e);
              }
              function Il(e) {
                return null === e;
              }
              function Nl(e) {
                return null == e;
              }
              function Rl(e) {
                return "number" == typeof e || (kl(e) && La(e) == ee);
              }
              function Dl(e) {
                if (!kl(e) || La(e) != ne) return !1;
                var t = xt(e);
                if (null === t) return !0;
                var n = dt.call(t, "constructor") && t.constructor;
                return (
                  "function" == typeof n && n instanceof n && lt.call(n) == mt
                );
              }
              var Ml = hn ? Qn(hn) : Za;
              function Ll(e) {
                return xl(e) && e >= -P && e <= P;
              }
              var Pl = gn ? Qn(gn) : Ja;
              function Ul(e) {
                return "string" == typeof e || (!cl(e) && kl(e) && La(e) == se);
              }
              function $l(e) {
                return "symbol" == typeof e || (kl(e) && La(e) == ce);
              }
              var Bl = yn ? Qn(yn) : ei;
              function zl(e) {
                return e === i;
              }
              function Vl(e) {
                return kl(e) && Yo(e) == le;
              }
              function Fl(e) {
                return kl(e) && La(e) == de;
              }
              var ql = Eo(ai),
                Gl = Eo(function (e, t) {
                  return e <= t;
                });
              function Wl(e) {
                if (!e) return [];
                if (ll(e)) return Ul(e) ? hr(e) : ro(e);
                if (jt && e[jt]) return cr(e[jt]());
                var t = Yo(e),
                  n = t == J ? ur : t == oe ? fr : zd;
                return n(e);
              }
              function Kl(e) {
                if (!e) return 0 === e ? e : 0;
                if (((e = Ql(e)), e === L || e === -L)) {
                  var t = e < 0 ? -1 : 1;
                  return t * U;
                }
                return e === e ? e : 0;
              }
              function Hl(e) {
                var t = Kl(e),
                  n = t % 1;
                return t === t ? (n ? t - n : t) : 0;
              }
              function Xl(e) {
                return e ? ba(Hl(e), 0, B) : 0;
              }
              function Ql(e) {
                if ("number" == typeof e) return e;
                if ($l(e)) return $;
                if (Ol(e)) {
                  var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                  e = Ol(t) ? t + "" : t;
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = Xn(e);
                var n = Xe.test(e);
                return n || Ye.test(e)
                  ? an(e.slice(2), n ? 2 : 8)
                  : He.test(e)
                  ? $
                  : +e;
              }
              function Yl(e) {
                return ao(e, wd(e));
              }
              function Zl(e) {
                return e ? ba(Hl(e), -P, P) : 0 === e ? e : 0;
              }
              function Jl(e) {
                return null == e ? "" : Ri(e);
              }
              var ed = co(function (e, t) {
                  if (ps(t) || ll(t)) ao(t, xd(t), e);
                  else for (var n in t) dt.call(t, n) && ua(e, n, t[n]);
                }),
                td = co(function (e, t) {
                  ao(t, wd(t), e);
                }),
                nd = co(function (e, t, n, r) {
                  ao(t, wd(t), e, r);
                }),
                rd = co(function (e, t, n, r) {
                  ao(t, xd(t), e, r);
                }),
                ad = Uo(ma);
              function id(e, t) {
                var n = wr(e);
                return null == t ? n : fa(n, t);
              }
              var od = _i(function (e, t) {
                  e = nt(e);
                  var n = -1,
                    r = t.length,
                    a = r > 2 ? t[2] : i;
                  a && ss(t[0], t[1], a) && (r = 1);
                  while (++n < r) {
                    var o = t[n],
                      s = wd(o),
                      c = -1,
                      u = s.length;
                    while (++c < u) {
                      var l = s[c],
                        d = e[l];
                      (d === i || (al(d, ct[l]) && !dt.call(e, l))) &&
                        (e[l] = o[l]);
                    }
                  }
                  return e;
                }),
                sd = _i(function (e) {
                  return e.push(i, Ro), _n(jd, i, e);
                });
              function cd(e, t) {
                return Ln(e, qo(t, 3), Ia);
              }
              function ud(e, t) {
                return Ln(e, qo(t, 3), Na);
              }
              function ld(e, t) {
                return null == e ? e : Sa(e, qo(t, 3), wd);
              }
              function dd(e, t) {
                return null == e ? e : Aa(e, qo(t, 3), wd);
              }
              function fd(e, t) {
                return e && Ia(e, qo(t, 3));
              }
              function pd(e, t) {
                return e && Na(e, qo(t, 3));
              }
              function vd(e) {
                return null == e ? [] : Ra(e, xd(e));
              }
              function md(e) {
                return null == e ? [] : Ra(e, wd(e));
              }
              function bd(e, t, n) {
                var r = null == e ? i : Da(e, t);
                return r === i ? n : r;
              }
              function hd(e, t) {
                return null != e && es(e, t, Ua);
              }
              function gd(e, t) {
                return null != e && es(e, t, $a);
              }
              var yd = _o(function (e, t, n) {
                  null != t &&
                    "function" != typeof t.toString &&
                    (t = vt.call(t)),
                    (e[t] = n);
                }, jf(If)),
                _d = _o(function (e, t, n) {
                  null != t &&
                    "function" != typeof t.toString &&
                    (t = vt.call(t)),
                    dt.call(e, t) ? e[t].push(n) : (e[t] = [n]);
                }, qo),
                Td = _i(Fa);
              function xd(e) {
                return ll(e) ? aa(e) : ni(e);
              }
              function wd(e) {
                return ll(e) ? aa(e, !0) : ri(e);
              }
              function Od(e, t) {
                var n = {};
                return (
                  (t = qo(t, 3)),
                  Ia(e, function (e, r, a) {
                    va(n, t(e, r, a), e);
                  }),
                  n
                );
              }
              function kd(e, t) {
                var n = {};
                return (
                  (t = qo(t, 3)),
                  Ia(e, function (e, r, a) {
                    va(n, r, t(e, r, a));
                  }),
                  n
                );
              }
              var Ed = co(function (e, t, n) {
                  ci(e, t, n);
                }),
                jd = co(function (e, t, n, r) {
                  ci(e, t, n, r);
                }),
                Cd = Uo(function (e, t) {
                  var n = {};
                  if (null == e) return n;
                  var r = !1;
                  (t = Cn(t, function (t) {
                    return (t = Fi(t, e)), r || (r = t.length > 1), t;
                  })),
                    ao(e, Bo(e), n),
                    r && (n = ha(n, v | m | b, Do));
                  var a = t.length;
                  while (a--) Mi(n, t[a]);
                  return n;
                });
              function Sd(e, t) {
                return Id(e, zu(qo(t)));
              }
              var Ad = Uo(function (e, t) {
                return null == e ? {} : fi(e, t);
              });
              function Id(e, t) {
                if (null == e) return {};
                var n = Cn(Bo(e), function (e) {
                  return [e];
                });
                return (
                  (t = qo(t)),
                  pi(e, n, function (e, n) {
                    return t(e, n[0]);
                  })
                );
              }
              function Nd(e, t, n) {
                t = Fi(t, e);
                var r = -1,
                  a = t.length;
                a || ((a = 1), (e = i));
                while (++r < a) {
                  var o = null == e ? i : e[Is(t[r])];
                  o === i && ((r = a), (o = n)), (e = Tl(o) ? o.call(e) : o);
                }
                return e;
              }
              function Rd(e, t, n) {
                return null == e ? e : wi(e, t, n);
              }
              function Dd(e, t, n, r) {
                return (
                  (r = "function" == typeof r ? r : i),
                  null == e ? e : wi(e, t, n, r)
                );
              }
              var Md = Ao(xd),
                Ld = Ao(wd);
              function Pd(e, t, n) {
                var r = cl(e),
                  a = r || pl(e) || Bl(e);
                if (((t = qo(t, 4)), null == n)) {
                  var i = e && e.constructor;
                  n = a ? (r ? new i() : []) : Ol(e) && Tl(i) ? wr(xt(e)) : {};
                }
                return (
                  (a ? xn : Ia)(e, function (e, r, a) {
                    return t(n, e, r, a);
                  }),
                  n
                );
              }
              function Ud(e, t) {
                return null == e || Mi(e, t);
              }
              function $d(e, t, n) {
                return null == e ? e : Li(e, t, Vi(n));
              }
              function Bd(e, t, n, r) {
                return (
                  (r = "function" == typeof r ? r : i),
                  null == e ? e : Li(e, t, Vi(n), r)
                );
              }
              function zd(e) {
                return null == e ? [] : Yn(e, xd(e));
              }
              function Vd(e) {
                return null == e ? [] : Yn(e, wd(e));
              }
              function Fd(e, t, n) {
                return (
                  n === i && ((n = t), (t = i)),
                  n !== i && ((n = Ql(n)), (n = n === n ? n : 0)),
                  t !== i && ((t = Ql(t)), (t = t === t ? t : 0)),
                  ba(Ql(e), t, n)
                );
              }
              function qd(e, t, n) {
                return (
                  (t = Kl(t)),
                  n === i ? ((n = t), (t = 0)) : (n = Kl(n)),
                  (e = Ql(e)),
                  Ba(e, t, n)
                );
              }
              function Gd(e, t, n) {
                if (
                  (n && "boolean" != typeof n && ss(e, t, n) && (t = n = i),
                  n === i &&
                    ("boolean" == typeof t
                      ? ((n = t), (t = i))
                      : "boolean" == typeof e && ((n = e), (e = i))),
                  e === i && t === i
                    ? ((e = 0), (t = 1))
                    : ((e = Kl(e)), t === i ? ((t = e), (e = 0)) : (t = Kl(t))),
                  e > t)
                ) {
                  var r = e;
                  (e = t), (t = r);
                }
                if (n || e % 1 || t % 1) {
                  var a = Wt();
                  return zt(
                    e + a * (t - e + rn("1e-" + ((a + "").length - 1))),
                    t
                  );
                }
                return hi(e, t);
              }
              var Wd = vo(function (e, t, n) {
                return (t = t.toLowerCase()), e + (n ? Kd(t) : t);
              });
              function Kd(e) {
                return Tf(Jl(e).toLowerCase());
              }
              function Hd(e) {
                return (e = Jl(e)), e && e.replace(Je, nr).replace(qt, "");
              }
              function Xd(e, t, n) {
                (e = Jl(e)), (t = Ri(t));
                var r = e.length;
                n = n === i ? r : ba(Hl(n), 0, r);
                var a = n;
                return (n -= t.length), n >= 0 && e.slice(n, a) == t;
              }
              function Qd(e) {
                return (e = Jl(e)), e && Se.test(e) ? e.replace(je, rr) : e;
              }
              function Yd(e) {
                return (e = Jl(e)), e && Pe.test(e) ? e.replace(Le, "\\$&") : e;
              }
              var Zd = vo(function (e, t, n) {
                  return e + (n ? "-" : "") + t.toLowerCase();
                }),
                Jd = vo(function (e, t, n) {
                  return e + (n ? " " : "") + t.toLowerCase();
                }),
                ef = po("toLowerCase");
              function tf(e, t, n) {
                (e = Jl(e)), (t = Hl(t));
                var r = t ? br(e) : 0;
                if (!t || r >= t) return e;
                var a = (t - r) / 2;
                return wo(Dt(a), n) + e + wo(Rt(a), n);
              }
              function nf(e, t, n) {
                (e = Jl(e)), (t = Hl(t));
                var r = t ? br(e) : 0;
                return t && r < t ? e + wo(t - r, n) : e;
              }
              function rf(e, t, n) {
                (e = Jl(e)), (t = Hl(t));
                var r = t ? br(e) : 0;
                return t && r < t ? wo(t - r, n) + e : e;
              }
              function af(e, t, n) {
                return (
                  n || null == t ? (t = 0) : t && (t = +t),
                  Gt(Jl(e).replace(Ue, ""), t || 0)
                );
              }
              function of(e, t, n) {
                return (
                  (t = (n ? ss(e, t, n) : t === i) ? 1 : Hl(t)), yi(Jl(e), t)
                );
              }
              function sf() {
                var e = arguments,
                  t = Jl(e[0]);
                return e.length < 3 ? t : t.replace(e[1], e[2]);
              }
              var cf = vo(function (e, t, n) {
                return e + (n ? "_" : "") + t.toLowerCase();
              });
              function uf(e, t, n) {
                return (
                  n && "number" != typeof n && ss(e, t, n) && (t = n = i),
                  (n = n === i ? B : n >>> 0),
                  n
                    ? ((e = Jl(e)),
                      e &&
                      ("string" == typeof t || (null != t && !Ml(t))) &&
                      ((t = Ri(t)), !t && or(e))
                        ? Gi(hr(e), 0, n)
                        : e.split(t, n))
                    : []
                );
              }
              var lf = vo(function (e, t, n) {
                return e + (n ? " " : "") + Tf(t);
              });
              function df(e, t, n) {
                return (
                  (e = Jl(e)),
                  (n = null == n ? 0 : ba(Hl(n), 0, e.length)),
                  (t = Ri(t)),
                  e.slice(n, n + t.length) == t
                );
              }
              function ff(e, t, n) {
                var r = Tr.templateSettings;
                n && ss(e, t, n) && (t = i),
                  (e = Jl(e)),
                  (t = nd({}, t, r, No));
                var o,
                  s,
                  c = nd({}, t.imports, r.imports, No),
                  u = xd(c),
                  d = Yn(c, u),
                  f = 0,
                  p = t.interpolate || et,
                  v = "__p += '",
                  m = rt(
                    (t.escape || et).source +
                      "|" +
                      p.source +
                      "|" +
                      (p === Ne ? We : et).source +
                      "|" +
                      (t.evaluate || et).source +
                      "|$",
                    "g"
                  ),
                  b =
                    "//# sourceURL=" +
                    (dt.call(t, "sourceURL")
                      ? (t.sourceURL + "").replace(/\s/g, " ")
                      : "lodash.templateSources[" + ++Qt + "]") +
                    "\n";
                e.replace(m, function (t, n, r, a, i, c) {
                  return (
                    r || (r = a),
                    (v += e.slice(f, c).replace(tt, ar)),
                    n && ((o = !0), (v += "' +\n__e(" + n + ") +\n'")),
                    i && ((s = !0), (v += "';\n" + i + ";\n__p += '")),
                    r &&
                      (v +=
                        "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
                    (f = c + t.length),
                    t
                  );
                }),
                  (v += "';\n");
                var h = dt.call(t, "variable") && t.variable;
                if (h) {
                  if (qe.test(h)) throw new a(l);
                } else v = "with (obj) {\n" + v + "\n}\n";
                (v = (s ? v.replace(we, "") : v)
                  .replace(Oe, "$1")
                  .replace(ke, "$1;")),
                  (v =
                    "function(" +
                    (h || "obj") +
                    ") {\n" +
                    (h ? "" : "obj || (obj = {});\n") +
                    "var __t, __p = ''" +
                    (o ? ", __e = _.escape" : "") +
                    (s
                      ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
                      : ";\n") +
                    v +
                    "return __p\n}");
                var g = wf(function () {
                  return $e(u, b + "return " + v).apply(i, d);
                });
                if (((g.source = v), yl(g))) throw g;
                return g;
              }
              function pf(e) {
                return Jl(e).toLowerCase();
              }
              function vf(e) {
                return Jl(e).toUpperCase();
              }
              function mf(e, t, n) {
                if (((e = Jl(e)), e && (n || t === i))) return Xn(e);
                if (!e || !(t = Ri(t))) return e;
                var r = hr(e),
                  a = hr(t),
                  o = Jn(r, a),
                  s = er(r, a) + 1;
                return Gi(r, o, s).join("");
              }
              function bf(e, t, n) {
                if (((e = Jl(e)), e && (n || t === i)))
                  return e.slice(0, gr(e) + 1);
                if (!e || !(t = Ri(t))) return e;
                var r = hr(e),
                  a = er(r, hr(t)) + 1;
                return Gi(r, 0, a).join("");
              }
              function hf(e, t, n) {
                if (((e = Jl(e)), e && (n || t === i)))
                  return e.replace(Ue, "");
                if (!e || !(t = Ri(t))) return e;
                var r = hr(e),
                  a = Jn(r, hr(t));
                return Gi(r, a).join("");
              }
              function gf(e, t) {
                var n = S,
                  r = A;
                if (Ol(t)) {
                  var a = "separator" in t ? t.separator : a;
                  (n = "length" in t ? Hl(t.length) : n),
                    (r = "omission" in t ? Ri(t.omission) : r);
                }
                e = Jl(e);
                var o = e.length;
                if (or(e)) {
                  var s = hr(e);
                  o = s.length;
                }
                if (n >= o) return e;
                var c = n - br(r);
                if (c < 1) return r;
                var u = s ? Gi(s, 0, c).join("") : e.slice(0, c);
                if (a === i) return u + r;
                if ((s && (c += u.length - c), Ml(a))) {
                  if (e.slice(c).search(a)) {
                    var l,
                      d = u;
                    a.global || (a = rt(a.source, Jl(Ke.exec(a)) + "g")),
                      (a.lastIndex = 0);
                    while ((l = a.exec(d))) var f = l.index;
                    u = u.slice(0, f === i ? c : f);
                  }
                } else if (e.indexOf(Ri(a), c) != c) {
                  var p = u.lastIndexOf(a);
                  p > -1 && (u = u.slice(0, p));
                }
                return u + r;
              }
              function yf(e) {
                return (e = Jl(e)), e && Ce.test(e) ? e.replace(Ee, yr) : e;
              }
              var _f = vo(function (e, t, n) {
                  return e + (n ? " " : "") + t.toUpperCase();
                }),
                Tf = po("toUpperCase");
              function xf(e, t, n) {
                return (
                  (e = Jl(e)),
                  (t = n ? i : t),
                  t === i ? (sr(e) ? xr(e) : Mn(e)) : e.match(t) || []
                );
              }
              var wf = _i(function (e, t) {
                  try {
                    return _n(e, i, t);
                  } catch (n) {
                    return yl(n) ? n : new a(n);
                  }
                }),
                Of = Uo(function (e, t) {
                  return (
                    xn(t, function (t) {
                      (t = Is(t)), va(e, t, Nu(e[t], e));
                    }),
                    e
                  );
                });
              function kf(e) {
                var t = null == e ? 0 : e.length,
                  n = qo();
                return (
                  (e = t
                    ? Cn(e, function (e) {
                        if ("function" != typeof e[1]) throw new it(u);
                        return [n(e[0]), e[1]];
                      })
                    : []),
                  _i(function (n) {
                    var r = -1;
                    while (++r < t) {
                      var a = e[r];
                      if (_n(a[0], this, n)) return _n(a[1], this, n);
                    }
                  })
                );
              }
              function Ef(e) {
                return ga(ha(e, v));
              }
              function jf(e) {
                return function () {
                  return e;
                };
              }
              function Cf(e, t) {
                return null == e || e !== e ? t : e;
              }
              var Sf = go(),
                Af = go(!0);
              function If(e) {
                return e;
              }
              function Nf(e) {
                return ti("function" == typeof e ? e : ha(e, v));
              }
              function Rf(e) {
                return oi(ha(e, v));
              }
              function Df(e, t) {
                return si(e, ha(t, v));
              }
              var Mf = _i(function (e, t) {
                  return function (n) {
                    return Fa(n, e, t);
                  };
                }),
                Lf = _i(function (e, t) {
                  return function (n) {
                    return Fa(e, n, t);
                  };
                });
              function Pf(e, t, n) {
                var r = xd(t),
                  a = Ra(t, r);
                null != n ||
                  (Ol(t) && (a.length || !r.length)) ||
                  ((n = t), (t = e), (e = this), (a = Ra(t, xd(t))));
                var i = !(Ol(n) && "chain" in n) || !!n.chain,
                  o = Tl(e);
                return (
                  xn(a, function (n) {
                    var r = t[n];
                    (e[n] = r),
                      o &&
                        (e.prototype[n] = function () {
                          var t = this.__chain__;
                          if (i || t) {
                            var n = e(this.__wrapped__),
                              a = (n.__actions__ = ro(this.__actions__));
                            return (
                              a.push({ func: r, args: arguments, thisArg: e }),
                              (n.__chain__ = t),
                              n
                            );
                          }
                          return r.apply(e, Sn([this.value()], arguments));
                        });
                  }),
                  e
                );
              }
              function Uf() {
                return cn._ === this && (cn._ = bt), this;
              }
              function $f() {}
              function Bf(e) {
                return (
                  (e = Hl(e)),
                  _i(function (t) {
                    return li(t, e);
                  })
                );
              }
              var zf = xo(Cn),
                Vf = xo(On),
                Ff = xo(Nn);
              function qf(e) {
                return cs(e) ? Vn(Is(e)) : vi(e);
              }
              function Gf(e) {
                return function (t) {
                  return null == e ? i : Da(e, t);
                };
              }
              var Wf = ko(),
                Kf = ko(!0);
              function Hf() {
                return [];
              }
              function Xf() {
                return !1;
              }
              function Qf() {
                return {};
              }
              function Yf() {
                return "";
              }
              function Zf() {
                return !0;
              }
              function Jf(e, t) {
                if (((e = Hl(e)), e < 1 || e > P)) return [];
                var n = B,
                  r = zt(e, B);
                (t = qo(t)), (e -= B);
                var a = Kn(r, t);
                while (++n < e) t(n);
                return a;
              }
              function ep(e) {
                return cl(e) ? Cn(e, Is) : $l(e) ? [e] : ro(As(Jl(e)));
              }
              function tp(e) {
                var t = ++ft;
                return Jl(e) + t;
              }
              var np = To(function (e, t) {
                  return e + t;
                }, 0),
                rp = Co("ceil"),
                ap = To(function (e, t) {
                  return e / t;
                }, 1),
                ip = Co("floor");
              function op(e) {
                return e && e.length ? ka(e, If, Pa) : i;
              }
              function sp(e, t) {
                return e && e.length ? ka(e, qo(t, 2), Pa) : i;
              }
              function cp(e) {
                return zn(e, If);
              }
              function up(e, t) {
                return zn(e, qo(t, 2));
              }
              function lp(e) {
                return e && e.length ? ka(e, If, ai) : i;
              }
              function dp(e, t) {
                return e && e.length ? ka(e, qo(t, 2), ai) : i;
              }
              var fp = To(function (e, t) {
                  return e * t;
                }, 1),
                pp = Co("round"),
                vp = To(function (e, t) {
                  return e - t;
                }, 0);
              function mp(e) {
                return e && e.length ? Wn(e, If) : 0;
              }
              function bp(e, t) {
                return e && e.length ? Wn(e, qo(t, 2)) : 0;
              }
              return (
                (Tr.after = Su),
                (Tr.ary = Au),
                (Tr.assign = ed),
                (Tr.assignIn = td),
                (Tr.assignInWith = nd),
                (Tr.assignWith = rd),
                (Tr.at = ad),
                (Tr.before = Iu),
                (Tr.bind = Nu),
                (Tr.bindAll = Of),
                (Tr.bindKey = Ru),
                (Tr.castArray = Zu),
                (Tr.chain = Gc),
                (Tr.chunk = Ms),
                (Tr.compact = Ls),
                (Tr.concat = Ps),
                (Tr.cond = kf),
                (Tr.conforms = Ef),
                (Tr.constant = jf),
                (Tr.countBy = nu),
                (Tr.create = id),
                (Tr.curry = Du),
                (Tr.curryRight = Mu),
                (Tr.debounce = Lu),
                (Tr.defaults = od),
                (Tr.defaultsDeep = sd),
                (Tr.defer = Pu),
                (Tr.delay = Uu),
                (Tr.difference = Us),
                (Tr.differenceBy = $s),
                (Tr.differenceWith = Bs),
                (Tr.drop = zs),
                (Tr.dropRight = Vs),
                (Tr.dropRightWhile = Fs),
                (Tr.dropWhile = qs),
                (Tr.fill = Gs),
                (Tr.filter = au),
                (Tr.flatMap = su),
                (Tr.flatMapDeep = cu),
                (Tr.flatMapDepth = uu),
                (Tr.flatten = Hs),
                (Tr.flattenDeep = Xs),
                (Tr.flattenDepth = Qs),
                (Tr.flip = $u),
                (Tr.flow = Sf),
                (Tr.flowRight = Af),
                (Tr.fromPairs = Ys),
                (Tr.functions = vd),
                (Tr.functionsIn = md),
                (Tr.groupBy = fu),
                (Tr.initial = ec),
                (Tr.intersection = tc),
                (Tr.intersectionBy = nc),
                (Tr.intersectionWith = rc),
                (Tr.invert = yd),
                (Tr.invertBy = _d),
                (Tr.invokeMap = vu),
                (Tr.iteratee = Nf),
                (Tr.keyBy = mu),
                (Tr.keys = xd),
                (Tr.keysIn = wd),
                (Tr.map = bu),
                (Tr.mapKeys = Od),
                (Tr.mapValues = kd),
                (Tr.matches = Rf),
                (Tr.matchesProperty = Df),
                (Tr.memoize = Bu),
                (Tr.merge = Ed),
                (Tr.mergeWith = jd),
                (Tr.method = Mf),
                (Tr.methodOf = Lf),
                (Tr.mixin = Pf),
                (Tr.negate = zu),
                (Tr.nthArg = Bf),
                (Tr.omit = Cd),
                (Tr.omitBy = Sd),
                (Tr.once = Vu),
                (Tr.orderBy = hu),
                (Tr.over = zf),
                (Tr.overArgs = Fu),
                (Tr.overEvery = Vf),
                (Tr.overSome = Ff),
                (Tr.partial = qu),
                (Tr.partialRight = Gu),
                (Tr.partition = gu),
                (Tr.pick = Ad),
                (Tr.pickBy = Id),
                (Tr.property = qf),
                (Tr.propertyOf = Gf),
                (Tr.pull = cc),
                (Tr.pullAll = uc),
                (Tr.pullAllBy = lc),
                (Tr.pullAllWith = dc),
                (Tr.pullAt = fc),
                (Tr.range = Wf),
                (Tr.rangeRight = Kf),
                (Tr.rearg = Wu),
                (Tr.reject = Tu),
                (Tr.remove = pc),
                (Tr.rest = Ku),
                (Tr.reverse = vc),
                (Tr.sampleSize = wu),
                (Tr.set = Rd),
                (Tr.setWith = Dd),
                (Tr.shuffle = Ou),
                (Tr.slice = mc),
                (Tr.sortBy = ju),
                (Tr.sortedUniq = xc),
                (Tr.sortedUniqBy = wc),
                (Tr.split = uf),
                (Tr.spread = Hu),
                (Tr.tail = Oc),
                (Tr.take = kc),
                (Tr.takeRight = Ec),
                (Tr.takeRightWhile = jc),
                (Tr.takeWhile = Cc),
                (Tr.tap = Wc),
                (Tr.throttle = Xu),
                (Tr.thru = Kc),
                (Tr.toArray = Wl),
                (Tr.toPairs = Md),
                (Tr.toPairsIn = Ld),
                (Tr.toPath = ep),
                (Tr.toPlainObject = Yl),
                (Tr.transform = Pd),
                (Tr.unary = Qu),
                (Tr.union = Sc),
                (Tr.unionBy = Ac),
                (Tr.unionWith = Ic),
                (Tr.uniq = Nc),
                (Tr.uniqBy = Rc),
                (Tr.uniqWith = Dc),
                (Tr.unset = Ud),
                (Tr.unzip = Mc),
                (Tr.unzipWith = Lc),
                (Tr.update = $d),
                (Tr.updateWith = Bd),
                (Tr.values = zd),
                (Tr.valuesIn = Vd),
                (Tr.without = Pc),
                (Tr.words = xf),
                (Tr.wrap = Yu),
                (Tr.xor = Uc),
                (Tr.xorBy = $c),
                (Tr.xorWith = Bc),
                (Tr.zip = zc),
                (Tr.zipObject = Vc),
                (Tr.zipObjectDeep = Fc),
                (Tr.zipWith = qc),
                (Tr.entries = Md),
                (Tr.entriesIn = Ld),
                (Tr.extend = td),
                (Tr.extendWith = nd),
                Pf(Tr, Tr),
                (Tr.add = np),
                (Tr.attempt = wf),
                (Tr.camelCase = Wd),
                (Tr.capitalize = Kd),
                (Tr.ceil = rp),
                (Tr.clamp = Fd),
                (Tr.clone = Ju),
                (Tr.cloneDeep = tl),
                (Tr.cloneDeepWith = nl),
                (Tr.cloneWith = el),
                (Tr.conformsTo = rl),
                (Tr.deburr = Hd),
                (Tr.defaultTo = Cf),
                (Tr.divide = ap),
                (Tr.endsWith = Xd),
                (Tr.eq = al),
                (Tr.escape = Qd),
                (Tr.escapeRegExp = Yd),
                (Tr.every = ru),
                (Tr.find = iu),
                (Tr.findIndex = Ws),
                (Tr.findKey = cd),
                (Tr.findLast = ou),
                (Tr.findLastIndex = Ks),
                (Tr.findLastKey = ud),
                (Tr.floor = ip),
                (Tr.forEach = lu),
                (Tr.forEachRight = du),
                (Tr.forIn = ld),
                (Tr.forInRight = dd),
                (Tr.forOwn = fd),
                (Tr.forOwnRight = pd),
                (Tr.get = bd),
                (Tr.gt = il),
                (Tr.gte = ol),
                (Tr.has = hd),
                (Tr.hasIn = gd),
                (Tr.head = Zs),
                (Tr.identity = If),
                (Tr.includes = pu),
                (Tr.indexOf = Js),
                (Tr.inRange = qd),
                (Tr.invoke = Td),
                (Tr.isArguments = sl),
                (Tr.isArray = cl),
                (Tr.isArrayBuffer = ul),
                (Tr.isArrayLike = ll),
                (Tr.isArrayLikeObject = dl),
                (Tr.isBoolean = fl),
                (Tr.isBuffer = pl),
                (Tr.isDate = vl),
                (Tr.isElement = ml),
                (Tr.isEmpty = bl),
                (Tr.isEqual = hl),
                (Tr.isEqualWith = gl),
                (Tr.isError = yl),
                (Tr.isFinite = _l),
                (Tr.isFunction = Tl),
                (Tr.isInteger = xl),
                (Tr.isLength = wl),
                (Tr.isMap = El),
                (Tr.isMatch = jl),
                (Tr.isMatchWith = Cl),
                (Tr.isNaN = Sl),
                (Tr.isNative = Al),
                (Tr.isNil = Nl),
                (Tr.isNull = Il),
                (Tr.isNumber = Rl),
                (Tr.isObject = Ol),
                (Tr.isObjectLike = kl),
                (Tr.isPlainObject = Dl),
                (Tr.isRegExp = Ml),
                (Tr.isSafeInteger = Ll),
                (Tr.isSet = Pl),
                (Tr.isString = Ul),
                (Tr.isSymbol = $l),
                (Tr.isTypedArray = Bl),
                (Tr.isUndefined = zl),
                (Tr.isWeakMap = Vl),
                (Tr.isWeakSet = Fl),
                (Tr.join = ac),
                (Tr.kebabCase = Zd),
                (Tr.last = ic),
                (Tr.lastIndexOf = oc),
                (Tr.lowerCase = Jd),
                (Tr.lowerFirst = ef),
                (Tr.lt = ql),
                (Tr.lte = Gl),
                (Tr.max = op),
                (Tr.maxBy = sp),
                (Tr.mean = cp),
                (Tr.meanBy = up),
                (Tr.min = lp),
                (Tr.minBy = dp),
                (Tr.stubArray = Hf),
                (Tr.stubFalse = Xf),
                (Tr.stubObject = Qf),
                (Tr.stubString = Yf),
                (Tr.stubTrue = Zf),
                (Tr.multiply = fp),
                (Tr.nth = sc),
                (Tr.noConflict = Uf),
                (Tr.noop = $f),
                (Tr.now = Cu),
                (Tr.pad = tf),
                (Tr.padEnd = nf),
                (Tr.padStart = rf),
                (Tr.parseInt = af),
                (Tr.random = Gd),
                (Tr.reduce = yu),
                (Tr.reduceRight = _u),
                (Tr.repeat = of),
                (Tr.replace = sf),
                (Tr.result = Nd),
                (Tr.round = pp),
                (Tr.runInContext = e),
                (Tr.sample = xu),
                (Tr.size = ku),
                (Tr.snakeCase = cf),
                (Tr.some = Eu),
                (Tr.sortedIndex = bc),
                (Tr.sortedIndexBy = hc),
                (Tr.sortedIndexOf = gc),
                (Tr.sortedLastIndex = yc),
                (Tr.sortedLastIndexBy = _c),
                (Tr.sortedLastIndexOf = Tc),
                (Tr.startCase = lf),
                (Tr.startsWith = df),
                (Tr.subtract = vp),
                (Tr.sum = mp),
                (Tr.sumBy = bp),
                (Tr.template = ff),
                (Tr.times = Jf),
                (Tr.toFinite = Kl),
                (Tr.toInteger = Hl),
                (Tr.toLength = Xl),
                (Tr.toLower = pf),
                (Tr.toNumber = Ql),
                (Tr.toSafeInteger = Zl),
                (Tr.toString = Jl),
                (Tr.toUpper = vf),
                (Tr.trim = mf),
                (Tr.trimEnd = bf),
                (Tr.trimStart = hf),
                (Tr.truncate = gf),
                (Tr.unescape = yf),
                (Tr.uniqueId = tp),
                (Tr.upperCase = _f),
                (Tr.upperFirst = Tf),
                (Tr.each = lu),
                (Tr.eachRight = du),
                (Tr.first = Zs),
                Pf(
                  Tr,
                  (function () {
                    var e = {};
                    return (
                      Ia(Tr, function (t, n) {
                        dt.call(Tr.prototype, n) || (e[n] = t);
                      }),
                      e
                    );
                  })(),
                  { chain: !1 }
                ),
                (Tr.VERSION = o),
                xn(
                  [
                    "bind",
                    "bindKey",
                    "curry",
                    "curryRight",
                    "partial",
                    "partialRight",
                  ],
                  function (e) {
                    Tr[e].placeholder = Tr;
                  }
                ),
                xn(["drop", "take"], function (e, t) {
                  (jr.prototype[e] = function (n) {
                    n = n === i ? 1 : Bt(Hl(n), 0);
                    var r =
                      this.__filtered__ && !t ? new jr(this) : this.clone();
                    return (
                      r.__filtered__
                        ? (r.__takeCount__ = zt(n, r.__takeCount__))
                        : r.__views__.push({
                            size: zt(n, B),
                            type: e + (r.__dir__ < 0 ? "Right" : ""),
                          }),
                      r
                    );
                  }),
                    (jr.prototype[e + "Right"] = function (t) {
                      return this.reverse()[e](t).reverse();
                    });
                }),
                xn(["filter", "map", "takeWhile"], function (e, t) {
                  var n = t + 1,
                    r = n == R || n == M;
                  jr.prototype[e] = function (e) {
                    var t = this.clone();
                    return (
                      t.__iteratees__.push({ iteratee: qo(e, 3), type: n }),
                      (t.__filtered__ = t.__filtered__ || r),
                      t
                    );
                  };
                }),
                xn(["head", "last"], function (e, t) {
                  var n = "take" + (t ? "Right" : "");
                  jr.prototype[e] = function () {
                    return this[n](1).value()[0];
                  };
                }),
                xn(["initial", "tail"], function (e, t) {
                  var n = "drop" + (t ? "" : "Right");
                  jr.prototype[e] = function () {
                    return this.__filtered__ ? new jr(this) : this[n](1);
                  };
                }),
                (jr.prototype.compact = function () {
                  return this.filter(If);
                }),
                (jr.prototype.find = function (e) {
                  return this.filter(e).head();
                }),
                (jr.prototype.findLast = function (e) {
                  return this.reverse().find(e);
                }),
                (jr.prototype.invokeMap = _i(function (e, t) {
                  return "function" == typeof e
                    ? new jr(this)
                    : this.map(function (n) {
                        return Fa(n, e, t);
                      });
                })),
                (jr.prototype.reject = function (e) {
                  return this.filter(zu(qo(e)));
                }),
                (jr.prototype.slice = function (e, t) {
                  e = Hl(e);
                  var n = this;
                  return n.__filtered__ && (e > 0 || t < 0)
                    ? new jr(n)
                    : (e < 0 ? (n = n.takeRight(-e)) : e && (n = n.drop(e)),
                      t !== i &&
                        ((t = Hl(t)),
                        (n = t < 0 ? n.dropRight(-t) : n.take(t - e))),
                      n);
                }),
                (jr.prototype.takeRightWhile = function (e) {
                  return this.reverse().takeWhile(e).reverse();
                }),
                (jr.prototype.toArray = function () {
                  return this.take(B);
                }),
                Ia(jr.prototype, function (e, t) {
                  var n = /^(?:filter|find|map|reject)|While$/.test(t),
                    r = /^(?:head|last)$/.test(t),
                    a = Tr[r ? "take" + ("last" == t ? "Right" : "") : t],
                    o = r || /^find/.test(t);
                  a &&
                    (Tr.prototype[t] = function () {
                      var t = this.__wrapped__,
                        s = r ? [1] : arguments,
                        c = t instanceof jr,
                        u = s[0],
                        l = c || cl(t),
                        d = function (e) {
                          var t = a.apply(Tr, Sn([e], s));
                          return r && f ? t[0] : t;
                        };
                      l &&
                        n &&
                        "function" == typeof u &&
                        1 != u.length &&
                        (c = l = !1);
                      var f = this.__chain__,
                        p = !!this.__actions__.length,
                        v = o && !f,
                        m = c && !p;
                      if (!o && l) {
                        t = m ? t : new jr(this);
                        var b = e.apply(t, s);
                        return (
                          b.__actions__.push({
                            func: Kc,
                            args: [d],
                            thisArg: i,
                          }),
                          new Er(b, f)
                        );
                      }
                      return v && m
                        ? e.apply(this, s)
                        : ((b = this.thru(d)),
                          v ? (r ? b.value()[0] : b.value()) : b);
                    });
                }),
                xn(
                  ["pop", "push", "shift", "sort", "splice", "unshift"],
                  function (e) {
                    var t = ot[e],
                      n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                      r = /^(?:pop|shift)$/.test(e);
                    Tr.prototype[e] = function () {
                      var e = arguments;
                      if (r && !this.__chain__) {
                        var a = this.value();
                        return t.apply(cl(a) ? a : [], e);
                      }
                      return this[n](function (n) {
                        return t.apply(cl(n) ? n : [], e);
                      });
                    };
                  }
                ),
                Ia(jr.prototype, function (e, t) {
                  var n = Tr[t];
                  if (n) {
                    var r = n.name + "";
                    dt.call(un, r) || (un[r] = []),
                      un[r].push({ name: t, func: n });
                  }
                }),
                (un[yo(i, _).name] = [{ name: "wrapper", func: i }]),
                (jr.prototype.clone = Cr),
                (jr.prototype.reverse = Sr),
                (jr.prototype.value = Ar),
                (Tr.prototype.at = Hc),
                (Tr.prototype.chain = Xc),
                (Tr.prototype.commit = Qc),
                (Tr.prototype.next = Yc),
                (Tr.prototype.plant = Jc),
                (Tr.prototype.reverse = eu),
                (Tr.prototype.toJSON =
                  Tr.prototype.valueOf =
                  Tr.prototype.value =
                    tu),
                (Tr.prototype.first = Tr.prototype.head),
                jt && (Tr.prototype[jt] = Zc),
                Tr
              );
            },
            Or = wr();
          (cn._ = Or),
            (a = function () {
              return Or;
            }.call(t, n, t, r)),
            a === i || (r.exports = a);
        }.call(this));
      }.call(this, n("c8ba"), n("62e4")(e)));
    },
    "2fb4": function (e, t, n) {
      var r = n("8c96");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("89e95b14", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    3194: function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".trans-modal[data-v-0fe27b32]  .form-content .left,.trans-modal[data-v-0fe27b32]  .form-tip .left{width:150px}",
          "",
        ]),
        (e.exports = t);
    },
    3410: function (e, t, n) {
      var r = n("23e7"),
        a = n("d039"),
        i = n("7b0b"),
        o = n("e163"),
        s = n("e177"),
        c = a(function () {
          o(1);
        });
      r(
        { target: "Object", stat: !0, forced: c, sham: !s },
        {
          getPrototypeOf: function (e) {
            return o(i(e));
          },
        }
      );
    },
    "342f": function (e, t, n) {
      var r = n("d066");
      e.exports = r("navigator", "userAgent") || "";
    },
    "351c": function (e, t, n) {
      "use strict";
      var r = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "team-table" },
            [
              n("TableToolbar"),
              n(
                "div",
                {
                  directives: [
                    {
                      name: "loading",
                      rawName: "v-loading",
                      value: e.kState.loading,
                      expression: "kState.loading",
                    },
                  ],
                },
                [
                  e.kState.loading
                    ? e._e()
                    : [
                        e.resultEmpty
                          ? n(
                              "the-empty-placeholder",
                              { staticClass: "empty" },
                              [
                                n(
                                  "p",
                                  { attrs: { slot: "top" }, slot: "top" },
                                  [e._v(" 所选数据类型在该时间段内暂无数据 ")]
                                ),
                              ]
                            )
                          : [
                              n(e.KpiListCom, { tag: "component" }),
                              n(
                                "div",
                                { staticClass: "pager-wrap" },
                                [
                                  n(
                                    "the-paginator",
                                    e._b(
                                      {
                                        attrs: { total: e.kState.result.total },
                                        on: {
                                          change: function (t) {
                                            return e.kpi.handlePageChange(t);
                                          },
                                        },
                                      },
                                      "the-paginator",
                                      e.kState.pageOptions,
                                      !1
                                    )
                                  ),
                                ],
                                1
                              ),
                            ],
                      ],
                ],
                2
              ),
            ],
            1
          );
        },
        a = [],
        i = n("8165"),
        o = n("f619"),
        s = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "kpitable-toolbar" },
            [
              n(
                "the-button-group",
                {
                  staticClass: "btn-group",
                  model: {
                    value: e.kState.tab,
                    callback: function (t) {
                      e.$set(e.kState, "tab", t);
                    },
                    expression: "kState.tab",
                  },
                },
                e._l(e.tabList, function (t) {
                  return n(
                    "the-button-tab",
                    { key: t.id, attrs: { value: t.id } },
                    [e._v(" " + e._s(t.label) + "员绩效 ")]
                  );
                }),
                1
              ),
              n(
                "div",
                { staticClass: "download-icon" },
                [
                  n(
                    "the-link",
                    {
                      attrs: { disabled: e.resultEmpty },
                      on: {
                        click: function (t) {
                          return t.stopPropagation(), e.kpi.downloadList(t);
                        },
                      },
                    },
                    [
                      n("the-icon", { attrs: { name: "download" } }),
                      e._v(" 下载报表 "),
                    ],
                    1
                  ),
                ],
                1
              ),
              n(
                "div",
                { staticClass: "filter-items" },
                [
                  n(
                    "the-input",
                    {
                      staticClass: "search-input",
                      attrs: { placeholder: e.nameTitle },
                      model: {
                        value: e.kState.params.keyword,
                        callback: function (t) {
                          e.$set(
                            e.kState.params,
                            "keyword",
                            "string" === typeof t ? t.trim() : t
                          );
                        },
                        expression: "kState.params.keyword",
                      },
                    },
                    [
                      n("the-icon", {
                        staticClass: "search-icon",
                        attrs: { slot: "postfix", name: "search" },
                        on: { click: e.kpi.fetchList },
                        slot: "postfix",
                      }),
                    ],
                    1
                  ),
                  n(
                    "div",
                    { staticClass: "filter-item" },
                    [
                      n(
                        "the-field",
                        { attrs: { label: "数据类型" } },
                        [
                          n("DataTypeCascader", {
                            attrs: { source: e.kState.dataTypeSource },
                            model: {
                              value: e.dataTypeValue,
                              callback: function (t) {
                                e.dataTypeValue = t;
                              },
                              expression: "dataTypeValue",
                            },
                          }),
                        ],
                        1
                      ),
                      n(
                        "the-field",
                        { attrs: { label: "选择日期" } },
                        [
                          n("the-date", {
                            attrs: {
                              "is-range": "",
                              shortCuts: e.dateShortCuts,
                            },
                            model: {
                              value: e.dateRange,
                              callback: function (t) {
                                e.dateRange = t;
                              },
                              expression: "dateRange",
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
              ),
            ],
            1
          );
        },
        c = [],
        u = (n("4de4"), n("3835")),
        l = n("5fa4"),
        d = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            {
              directives: [
                {
                  name: "click-outside",
                  rawName: "v-click-outside",
                  value: e.dc.hide,
                  expression: "dc.hide",
                },
              ],
              class: ["dataset-cascader", { "--visible": e.dcState.visible }],
              on: { mouseleave: e.dc.mouseLeave },
            },
            [
              n(
                "the-tip",
                {
                  attrs: {
                    placement: "bottom-start",
                    visible: e.dcState.visible,
                    modifiers: e.modifiers,
                  },
                },
                [
                  n(
                    "div",
                    {
                      staticClass: "dataset-cascader_label",
                      class: { "not-check": e.dcState.indexTuple[0] < 0 },
                      on: { click: e.dc.toggle },
                    },
                    [
                      n("span", [e._v(e._s(e.showText))]),
                      n("the-icon", {
                        staticClass: "dataset-cascader_triangle",
                        attrs: { name: "down-arrow", sm: "" },
                      }),
                    ],
                    1
                  ),
                  n(
                    "div",
                    {
                      staticClass: "dataset-cascader_ul",
                      attrs: { slot: "popper" },
                      slot: "popper",
                    },
                    [
                      n(
                        "div",
                        { staticClass: "dataset-cascader_ul_left" },
                        e._l(e.dcState.sourceTuple[0], function (t, r) {
                          return n(
                            "div",
                            {
                              key: t.id,
                              class: [
                                "dataset-cascader_li",
                                { active: r === e.dcState.indexTuple[0] },
                              ],
                              attrs: { title: t.label },
                              on: {
                                mouseenter: function (t) {
                                  return e.dc.hoverItem([r, -1]);
                                },
                              },
                            },
                            [
                              n(
                                "div",
                                { staticClass: "dataset-cascader_li_left" },
                                [e._v(" " + e._s(t.label) + " ")]
                              ),
                              t.children && t.children.length
                                ? n(
                                    "div",
                                    {
                                      staticClass: "dataset-cascader_li_right",
                                    },
                                    [
                                      n("the-icon", {
                                        attrs: { name: "arrow-right" },
                                      }),
                                    ],
                                    1
                                  )
                                : e._e(),
                            ]
                          );
                        }),
                        0
                      ),
                      e.dcState.sourceTuple[1] &&
                      e.dcState.sourceTuple[1].length
                        ? n(
                            "div",
                            { staticClass: "dataset-cascader_ul_right" },
                            e._l(e.dcState.sourceTuple[1], function (t, r) {
                              return n(
                                "div",
                                {
                                  key: t.id,
                                  staticClass: "dataset-cascader_li",
                                  class: {
                                    active: r === e.dcState.indexTuple[1],
                                  },
                                  attrs: { title: t.label },
                                  on: {
                                    click: function (n) {
                                      return e.handleClick(t.id);
                                    },
                                  },
                                },
                                [e._v(" " + e._s(t.label) + " ")]
                              );
                            }),
                            0
                          )
                        : e._e(),
                    ]
                  ),
                ]
              ),
            ],
            1
          );
        },
        f = [],
        p = n("f24d"),
        v = n("56c3"),
        m = n("8731"),
        b = Object(i["defineComponent"])({
          directives: { "click-outside": p["vClickOutside"] },
          model: { prop: "modelIdTuple", event: "change" },
          props: {
            modifiers: {
              default: function () {
                return [{ name: "offset", options: { offset: [0, -4] } }];
              },
            },
            modelIdTuple: {
              type: Array,
              default: function () {
                return [];
              },
            },
            source: {
              type: Array,
              default: function () {
                return [];
              },
            },
          },
          setup: function (e, t) {
            var n = t.emit,
              r = Object(v["useDataCascader"])().initialize(e),
              a = r.state,
              i = function (e) {
                var t = [a.sourceTuple[0][a.indexTuple[0]].id, e];
                n("change", t), (a.visible = !1);
              };
            return {
              dc: r,
              dcState: a,
              handleClick: i,
              showText: Object(m["a"])(),
            };
          },
        }),
        h = b,
        g = (n("6f1e"), n("2877")),
        y = Object(g["a"])(h, d, f, !1, null, "2bf699f7", null),
        _ = y.exports,
        T = 864e5,
        x = 7 * T,
        w = 30 * T,
        O = 90 * T,
        k = n("5490"),
        E = n("81fe"),
        j = o["EAnnoActionType"].toArray().filter(function (e) {
          return e.id !== o["EAnnoActionType"].CLE;
        }),
        C = Object(i["defineComponent"])({
          components: { DataTypeCascader: _ },
          setup: function () {
            var e = Object(l["a"])(),
              t = e.state,
              n = Object(i["computed"])({
                get: function () {
                  return [t.params.dataType, t.params.projectType];
                },
                set: function (e) {
                  var n = Object(u["a"])(e, 2),
                    r = n[0],
                    a = n[1];
                  (t.params.dataType = r), (t.params.projectType = a);
                },
              }),
              r = Object(i["computed"])({
                get: function () {
                  return { start: t.params.startDate, end: t.params.endDate };
                },
                set: function (e) {
                  var n = e.start,
                    r = e.end;
                  (t.params.startDate = n), (t.params.endDate = r);
                },
              }),
              a = [
                { text: "最近1天", start: +new Date(), end: +new Date() },
                {
                  text: "最近7天",
                  start: +new Date() - x + T,
                  end: +new Date(),
                },
                {
                  text: "最近30天",
                  start: +new Date() - w + T,
                  end: +new Date(),
                },
                {
                  text: "最近90天",
                  start: +new Date() - O + T,
                  end: +new Date(),
                },
              ];
            return {
              dateRange: r,
              dateShortCuts: a,
              kpi: e,
              kState: t,
              dataTypeValue: n,
              resultEmpty: Object(k["c"])(),
              tabList: j,
              nameTitle: "输入".concat(Object(E["a"])("姓名")),
            };
          },
        }),
        S = C,
        A = (n("6971"), Object(g["a"])(S, s, c, !1, null, "1187e4a1", null)),
        I = A.exports,
        N = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { class: ["kpi-table", { "has-scroll": e.showEntityBox }] },
            [
              n("div", { staticClass: "kpi-title" }, [e._v("总计")]),
              n("div", { staticClass: "kpi-total-info" }, [
                n("div", { staticClass: "total-item" }, [
                  n("div", { staticClass: "item-title" }, [
                    e._v(e._s(e.tableSource.total.total)),
                  ]),
                  n("div", { staticClass: "item-label" }, [e._v("参与人数")]),
                ]),
                n("div", { staticClass: "total-item" }, [
                  n("div", { staticClass: "item-title" }, [
                    e._v(e._s(e.tableSource.total.totalCostTime)),
                  ]),
                  n("div", { staticClass: "item-label" }, [e._v("标注总耗时")]),
                ]),
                n("div", { staticClass: "total-item" }, [
                  n("div", { staticClass: "item-title" }, [
                    e._v(e._s(e.tableSource.total.totalAvgTaskCostTime)),
                  ]),
                  n("div", { staticClass: "item-label" }, [
                    e._v("单笔任务平均标注耗时"),
                  ]),
                ]),
                n("div", { staticClass: "total-item" }, [
                  n("div", { staticClass: "item-title" }, [
                    e._v(e._s(e.tableSource.total.totalAvgEntityCostTime)),
                  ]),
                  n("div", { staticClass: "item-label" }, [
                    e._v(
                      "单" +
                        e._s(e.text.unit) +
                        e._s(e.text.label) +
                        "平均标注耗时"
                    ),
                  ]),
                ]),
                n("div", { staticClass: "vertical-line" }),
                n("div", { staticClass: "total-item" }, [
                  n("div", { staticClass: "item-title" }, [
                    e._v(e._s(e.tableSource.total.totalTaskNum)),
                  ]),
                  n("div", { staticClass: "item-label" }, [
                    e._v("已标任务数量"),
                  ]),
                ]),
                n("div", { staticClass: "total-item" }, [
                  n("div", { staticClass: "item-title" }, [
                    e._v(e._s(e.tableSource.total.totalEntityNum)),
                  ]),
                  n("div", { staticClass: "item-label" }, [
                    e._v("已标" + e._s(e.text.label) + "数量"),
                  ]),
                ]),
                e.showEntityBox
                  ? n("div", { staticClass: "total-item" }, [
                      n("div", { staticClass: "item-title" }, [
                        e._v(e._s(e.tableSource.total.totalEntityBoxNum || 0)),
                      ]),
                      n("div", { staticClass: "item-label" }, [
                        e._v("已标标注框数量"),
                      ]),
                    ])
                  : e._e(),
                n("div", { staticClass: "total-item" }, [
                  n("div", { staticClass: "item-title" }, [
                    e._v(e._s(e.tableSource.total.totalWaitTaskNum)),
                  ]),
                  n("div", { staticClass: "item-label" }, [
                    e._v("待标注任务数量"),
                  ]),
                ]),
                n("div", { staticClass: "total-item" }, [
                  n("div", { staticClass: "item-title" }, [
                    e._v(e._s(e.tableSource.total.totalWaitAnnoEntityNum)),
                  ]),
                  n("div", { staticClass: "item-label" }, [
                    e._v("待标注" + e._s(e.text.label) + "数量"),
                  ]),
                ]),
                n("div", { staticClass: "vertical-line" }),
                n("div", { staticClass: "total-item" }, [
                  n("div", { staticClass: "item-title" }, [
                    e._v(e._s(e.tableSource.total.totalPassEntityNum)),
                  ]),
                  n("div", { staticClass: "item-label" }, [
                    e._v("审核通过" + e._s(e.text.label) + "数量"),
                  ]),
                ]),
                n("div", { staticClass: "total-item" }, [
                  n("div", { staticClass: "item-title" }, [
                    e._v(e._s(e.tableSource.total.totalRejectEntityNum)),
                  ]),
                  n("div", { staticClass: "item-label" }, [
                    e._v("审核驳回" + e._s(e.text.label) + "数量"),
                  ]),
                ]),
                n("div", { staticClass: "total-item" }, [
                  n("div", { staticClass: "item-title" }, [
                    e._v(e._s(e.tableSource.total.totalPassRate)),
                  ]),
                  n("div", { staticClass: "item-label" }, [e._v("审核通过率")]),
                ]),
              ]),
              n("div", { staticClass: "kpi-title" }, [
                e._v(" " + e._s(e.tableTitle) + " "),
              ]),
              n(
                "div",
                { staticClass: "kpi-table-body" },
                [
                  n(
                    "the-table",
                    { attrs: { source: e.tableSource.items } },
                    [
                      n("the-column", { attrs: { k: "memberName" } }, [
                        e._v("人员" + e._s(e.p2c("姓名"))),
                      ]),
                      n("the-column", { attrs: { k: "totalCostTime" } }, [
                        e._v("标注总耗时"),
                      ]),
                      n("the-column", { attrs: { k: "avgTaskCostTime" } }, [
                        e._v("单笔任务平均标注耗时"),
                      ]),
                      n("the-column", { attrs: { k: "avgEntityCostTime" } }, [
                        e._v(
                          "单" +
                            e._s(e.text.unit) +
                            e._s(e.text.label) +
                            "平均标注耗时"
                        ),
                      ]),
                      n("the-column", { attrs: { k: "annoTaskNum" } }, [
                        e._v("已标任务数量"),
                      ]),
                      n("the-column", { attrs: { k: "annoEntityNum" } }, [
                        e._v("已标" + e._s(e.text.label) + "数量"),
                      ]),
                      e.showEntityBox
                        ? n(
                            "the-column",
                            { attrs: { k: "annoEntityBoxNum" } },
                            [e._v("已标标注框数量")]
                          )
                        : e._e(),
                      n("the-column", { attrs: { k: "waitAnnoTaskNum" } }, [
                        e._v("待标注任务数量"),
                      ]),
                      n("the-column", { attrs: { k: "waitAnnoEntityNum" } }, [
                        e._v("待标注" + e._s(e.text.label) + "数量"),
                      ]),
                      n("the-column", { attrs: { k: "passEntityNum" } }, [
                        e._v("审核通过" + e._s(e.text.label) + "数量"),
                      ]),
                      n("the-column", { attrs: { k: "rejectEntityNum" } }, [
                        e._v("审核驳回" + e._s(e.text.label) + "数量"),
                      ]),
                      n("the-column", { attrs: { k: "passRate" } }, [
                        e._v("审核通过率"),
                      ]),
                    ],
                    1
                  ),
                  n("div", {
                    attrs: { slot: "empty-placeholder" },
                    slot: "empty-placeholder",
                  }),
                ],
                1
              ),
            ]
          );
        },
        R = [],
        D = (n("99af"), n("d81d"), n("45fc"), n("5530"));
      n("a4d3"), n("c975"), n("b64b");
      function M(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      function L(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = M(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var P = n("b74e"),
        U = n("64b4"),
        $ = function () {
          var e = Object(U["useKpiList"])().state,
            t = Object(i["computed"])(function () {
              var t = e.result,
                n = t.items,
                r = L(t, ["items"]),
                a =
                  r.totalPassEntityNum ||
                  r.totalRejectEntityNum ||
                  r.totalPassRate,
                i = Object(D["a"])(
                  Object(D["a"])({}, r),
                  {},
                  {
                    totalCostTime: Object(P["g"])(r.totalCostTime),
                    totalAvgTaskCostTime: Object(P["g"])(
                      r.totalAvgTaskCostTime
                    ),
                    totalAvgEntityCostTime: Object(P["g"])(
                      r.totalAvgEntityCostTime
                    ),
                    totalPassEntityNum: a ? r.totalPassEntityNum : "--",
                    totalRejectEntityNum: a ? r.totalRejectEntityNum : "--",
                    totalPassRate: a ? r.totalPassRate + "%" : "--",
                  }
                ),
                o = n.map(function (e) {
                  var t = e.passEntityNum || e.rejectEntityNum || e.passRate;
                  return Object(D["a"])(
                    Object(D["a"])({}, e),
                    {},
                    {
                      totalCostTime: Object(P["g"])(e.totalCostTime),
                      avgTaskCostTime: Object(P["g"])(e.avgTaskCostTime),
                      avgEntityCostTime: Object(P["g"])(e.avgEntityCostTime),
                      passEntityNum: t ? e.passEntityNum : "--",
                      rejectEntityNum: t ? e.rejectEntityNum : "--",
                      passRate: t ? e.passRate + "%" : "--",
                    }
                  );
                });
              return { items: o, total: i };
            });
          return t;
        },
        B = Object(i["defineComponent"])({
          components: {},
          setup: function () {
            var e = Object(U["useDatasetEnumsRef"])(),
              t = Object(U["useKpiList"])().state,
              n = Object(i["computed"])(function () {
                return (
                  (e.value &&
                    e.value.EDataType.getItemById(t.params.dataType)) ||
                  {}
                );
              }),
              r = Object(i["computed"])(function () {
                var n, r, a;
                if (!e.value) return "";
                var i =
                    null === (n = o["EAnnoActionType"].getItemById(t.tab)) ||
                    void 0 === n
                      ? void 0
                      : n.label,
                  s =
                    null === (r = e.value) ||
                    void 0 === r ||
                    null ===
                      (a = r.EProjectType.getItemById(t.params.projectType)) ||
                    void 0 === a
                      ? void 0
                      : a.label;
                return "".concat(i, "员业务量统计表一").concat(s);
              }),
              a = Object(i["computed"])(function () {
                var n, r;
                return [
                  null === (n = e.value) || void 0 === n
                    ? void 0
                    : n.EProjectType.IMG_SEG,
                  null === (r = e.value) || void 0 === r
                    ? void 0
                    : r.EProjectType.OBJ_DCT,
                ].some(function (e) {
                  return e === t.params.projectType;
                });
              });
            return {
              tableSource: $(),
              text: n,
              tableTitle: r,
              showEntityBox: a,
              p2c: E["a"],
            };
          },
        }),
        z = B,
        V = (n("e5cf"), Object(g["a"])(z, N, R, !1, null, "d934d00e", null)),
        F = V.exports,
        q = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("div", { staticClass: "kpi-table" }, [
            n("div", { staticClass: "kpi-title" }, [e._v("总计")]),
            n("div", { staticClass: "kpi-total-info" }, [
              n("div", { staticClass: "total-item" }, [
                n("div", { staticClass: "item-title" }, [
                  e._v(e._s(e.tableSource.total.total)),
                ]),
                n("div", { staticClass: "item-label" }, [e._v("参与人数")]),
              ]),
              n("div", { staticClass: "total-item" }, [
                n("div", { staticClass: "item-title" }, [
                  e._v(e._s(e.tableSource.total.totalCostTime)),
                ]),
                n("div", { staticClass: "item-label" }, [e._v("审核总耗时")]),
              ]),
              n("div", { staticClass: "total-item" }, [
                n("div", { staticClass: "item-title" }, [
                  e._v(e._s(e.tableSource.total.totalAvgTaskCostTime)),
                ]),
                n("div", { staticClass: "item-label" }, [
                  e._v("单笔任务平均审核耗时"),
                ]),
              ]),
              n("div", { staticClass: "total-item" }, [
                n("div", { staticClass: "item-title" }, [
                  e._v(e._s(e.tableSource.total.totalAvgEntityCostTime)),
                ]),
                n("div", { staticClass: "item-label" }, [
                  e._v(
                    "单" +
                      e._s(e.text.unit) +
                      e._s(e.text.label) +
                      "平均审核耗时"
                  ),
                ]),
              ]),
              n("div", { staticClass: "vertical-line" }),
              n("div", { staticClass: "total-item" }, [
                n("div", { staticClass: "item-title" }, [
                  e._v(e._s(e.tableSource.total.totalTaskNum)),
                ]),
                n("div", { staticClass: "item-label" }, [
                  e._v("已审核任务数量"),
                ]),
              ]),
              n("div", { staticClass: "total-item" }, [
                n("div", { staticClass: "item-title" }, [
                  e._v(e._s(e.tableSource.total.totalEntityNum)),
                ]),
                n("div", { staticClass: "item-label" }, [
                  e._v("已审核" + e._s(e.text.label) + "数量"),
                ]),
              ]),
              n("div", { staticClass: "total-item" }, [
                n("div", { staticClass: "item-title" }, [
                  e._v(e._s(e.tableSource.total.totalWaitTaskNum)),
                ]),
                n("div", { staticClass: "item-label" }, [
                  e._v("待审核任务数量"),
                ]),
              ]),
            ]),
            n("div", { staticClass: "kpi-title" }, [
              e._v(" " + e._s(e.tableTitle) + " "),
            ]),
            n(
              "div",
              { staticClass: "kpi-table-body" },
              [
                n(
                  "the-table",
                  { attrs: { source: e.tableSource.items } },
                  [
                    n("the-column", { attrs: { k: "memberName" } }, [
                      e._v("人员" + e._s(e.p2c("姓名"))),
                    ]),
                    n("the-column", { attrs: { k: "totalCostTime" } }, [
                      e._v("审核总耗时"),
                    ]),
                    n("the-column", { attrs: { k: "avgAuditTaskCostTime" } }, [
                      e._v("单笔任务平均审核耗时"),
                    ]),
                    n(
                      "the-column",
                      { attrs: { k: "avgAuditEntityCostTime" } },
                      [
                        e._v(
                          "单" +
                            e._s(e.text.unit) +
                            e._s(e.text.label) +
                            "平均审核耗时"
                        ),
                      ]
                    ),
                    n("the-column", { attrs: { k: "auditTaskNum" } }, [
                      e._v("已审核任务数量"),
                    ]),
                    n("the-column", { attrs: { k: "auditEntityNum" } }, [
                      e._v("已审核" + e._s(e.text.label) + "数量"),
                    ]),
                    n("the-column", { attrs: { k: "waitAuditTaskNum" } }, [
                      e._v("待审核任务数量"),
                    ]),
                  ],
                  1
                ),
              ],
              1
            ),
          ]);
        },
        G = [],
        W = function () {
          var e = Object(U["useKpiList"])().state,
            t = Object(i["computed"])(function () {
              var t = e.result,
                n = t.items,
                r = L(t, ["items"]),
                a = Object(D["a"])(
                  Object(D["a"])({}, r),
                  {},
                  {
                    totalCostTime: Object(P["g"])(r.totalCostTime),
                    totalAvgTaskCostTime: Object(P["g"])(
                      r.totalAvgTaskCostTime
                    ),
                    totalAvgEntityCostTime: Object(P["g"])(
                      r.totalAvgEntityCostTime
                    ),
                  }
                ),
                i = n.map(function (e) {
                  return Object(D["a"])(
                    Object(D["a"])({}, e),
                    {},
                    {
                      totalCostTime: Object(P["g"])(e.totalCostTime),
                      avgAuditTaskCostTime: Object(P["g"])(
                        e.avgAuditTaskCostTime
                      ),
                      avgAuditEntityCostTime: Object(P["g"])(
                        e.avgAuditEntityCostTime
                      ),
                    }
                  );
                });
              return { items: i, total: a };
            });
          return t;
        },
        K = Object(i["defineComponent"])({
          components: {},
          setup: function () {
            var e = Object(U["useDatasetEnumsRef"])(),
              t = Object(U["useKpiList"])().state,
              n = Object(i["computed"])(function () {
                return (
                  (e.value &&
                    e.value.EDataType.getItemById(t.params.dataType)) ||
                  {}
                );
              }),
              r = Object(i["computed"])(function () {
                var n, r, a;
                if (!e.value) return "";
                var i =
                    null === (n = o["EAnnoActionType"].getItemById(t.tab)) ||
                    void 0 === n
                      ? void 0
                      : n.label,
                  s =
                    null === (r = e.value) ||
                    void 0 === r ||
                    null ===
                      (a = r.EProjectType.getItemById(t.params.projectType)) ||
                    void 0 === a
                      ? void 0
                      : a.label;
                return "".concat(i, "员业务量统计表一").concat(s);
              });
            return { tableTitle: r, tableSource: W(), text: n, p2c: E["a"] };
          },
        }),
        H = K,
        X = (n("bdaf"), Object(g["a"])(H, q, G, !1, null, "04aa8fc6", null)),
        Q = X.exports,
        Y = Object(i["defineComponent"])({
          components: { TableToolbar: I },
          setup: function () {
            var e = Object(U["useKpiList"])().initialize(),
              t = e.state,
              n = Object(i["computed"])(function () {
                return t.tab === o["EAnnoActionType"].ANNOTATE
                  ? F
                  : t.tab === o["EAnnoActionType"].AUDIT
                  ? Q
                  : void 0;
              });
            return {
              kState: t,
              kpi: e,
              KpiListCom: n,
              resultEmpty: Object(U["useResultEmpty"])(),
            };
          },
        }),
        Z = Y,
        J = (n("c89d"), Object(g["a"])(Z, r, a, !1, null, "1d620cbd", null));
      t["a"] = J.exports;
    },
    "35a1": function (e, t, n) {
      var r = n("f5df"),
        a = n("3f8c"),
        i = n("b622"),
        o = i("iterator");
      e.exports = function (e) {
        if (void 0 != e) return e[o] || e["@@iterator"] || a[r(e)];
      };
    },
    "374a": function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".list-filter[data-v-8cac424e]  .s-dropdown-item.label{border:none;background-color:transparent;padding-left:4px}.list-filter[data-v-8cac424e]  .s-dropdown-item.label .s-icon-filter{top:.15em;color:#666}.list-filter[data-v-8cac424e]  .s-dropdown-item.label .s-icon-filter.filter-active{color:var(--cxd-blue)}.list-filter[data-v-8cac424e]  .s-dropdown_ul{max-height:none!important}.list-filter .dropdown-content[data-v-8cac424e]{min-width:125px}.list-filter .dropdown-content[data-v-8cac424e]  .s-checkbox-group{max-height:220px;overflow:auto}.list-filter .dropdown-content .s-checkbox-group .s-checkbox[data-v-8cac424e]{margin:10px 0 10px 12px}.list-filter .dropdown-content .bottom-btn[data-v-8cac424e]{display:flex;justify-content:flex-end;padding:12px;border-top:1px solid #eee}.list-filter .dropdown-content .bottom-btn .s-button[data-v-8cac424e]{width:48px;min-width:48px;height:25px;line-height:25px;padding:0;font-size:12px}.list-filter .tree-dropdown-content[data-v-8cac424e]{display:flex;background:#fff;list-style:none;text-align:left;border:1px solid #ddd;z-index:2;box-shadow:0 2px 8px 0 rgba(0,0,0,.15);border-radius:4px;margin-top:4px;z-index:9999;max-height:220px}.list-filter .tree-dropdown-content .tree-dropdown-content_ul_left[data-v-8cac424e],.list-filter .tree-dropdown-content .tree-dropdown-content_ul_right[data-v-8cac424e]{min-width:120px;max-width:280px;overflow-x:hidden;overflow-y:auto;text-overflow:ellipsis}.list-filter .tree-dropdown-content .tree-dropdown-content_ul_right[data-v-8cac424e]{border-left:1px solid #ddd;display:flex;flex-direction:column}.list-filter .tree-dropdown-content .tree-dropdown-content_ul_right[data-v-8cac424e]  .s-checkbox-group{flex:1;overflow:scroll}.list-filter .tree-dropdown-content .tree-dropdown-content_ul_right[data-v-8cac424e]:empty{border:none}.list-filter .tree-dropdown-content_li[data-v-8cac424e]{display:flex;justify-content:space-between;align-items:center;height:32px;line-height:32px;cursor:pointer;white-space:nowrap;padding:0 10px;min-width:62px}.list-filter .tree-dropdown-content_li_right[data-v-8cac424e]{visibility:hidden;margin-left:10px;color:#999}.list-filter .tree-dropdown-content_li.active[data-v-8cac424e],.list-filter .tree-dropdown-content_li[data-v-8cac424e]:hover{background:#f7f7f7}.list-filter .tree-dropdown-content_li.active .tree-dropdown-content_li_right[data-v-8cac424e],.list-filter .tree-dropdown-content_li:hover .tree-dropdown-content_li_right[data-v-8cac424e]{visibility:visible}.list-filter .tree-dropdown-content_li.active[data-v-8cac424e]{color:#036fe2}.list-filter .tree-dropdown-content_li[data-v-8cac424e]  .s-icon{font-size:12px;top:0}",
          "",
        ]),
        (e.exports = t);
    },
    "37e8": function (e, t, n) {
      var r = n("83ab"),
        a = n("9bf2"),
        i = n("825a"),
        o = n("df75");
      e.exports = r
        ? Object.defineProperties
        : function (e, t) {
            i(e);
            var n,
              r = o(t),
              s = r.length,
              c = 0;
            while (s > c) a.f(e, (n = r[c++]), t[n]);
            return e;
          };
    },
    3835: function (e, t, n) {
      "use strict";
      function r(e) {
        if (Array.isArray(e)) return e;
      }
      n.d(t, "a", function () {
        return s;
      });
      n("a4d3"), n("e01a"), n("d28b"), n("d3b7"), n("3ca3"), n("ddb0");
      function a(e, t) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
          var n = [],
            r = !0,
            a = !1,
            i = void 0;
          try {
            for (
              var o, s = e[Symbol.iterator]();
              !(r = (o = s.next()).done);
              r = !0
            )
              if ((n.push(o.value), t && n.length === t)) break;
          } catch (c) {
            (a = !0), (i = c);
          } finally {
            try {
              r || null == s["return"] || s["return"]();
            } finally {
              if (a) throw i;
            }
          }
          return n;
        }
      }
      var i = n("06c5");
      function o() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function s(e, t) {
        return r(e) || a(e, t) || Object(i["a"])(e, t) || o();
      }
    },
    "38f0": function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".page-task-list[data-v-0e3eeb56]{font-size:12px;color:#151b26;line-height:20px;font-weight:400}.page-task-list .ctl-bar[data-v-0e3eeb56]{position:relative;border-bottom:1px solid #eee;margin-bottom:21px}.page-task-list .ctl-bar.ctlb-cloud[data-v-0e3eeb56]{display:flex;flex-direction:row;align-items:center}.page-task-list .ctl-bar .btn-wrap[data-v-0e3eeb56]{margin-left:auto}.page-task-list .task-list-loading[data-v-0e3eeb56]{display:block;margin:100px auto;font-size:36px}.page-task-list .pager-wrap[data-v-0e3eeb56]{margin-top:45px;text-align:right}",
          "",
        ]),
        (e.exports = t);
    },
    "3a5e": function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".render-des[data-v-f2dcb1ae]  .s-tip-text_inner{cursor:default}.render-des[data-v-f2dcb1ae]  .s-tip-text_inner:after{display:none}",
          "",
        ]),
        (e.exports = t);
    },
    "3bbe": function (e, t, n) {
      var r = n("861d");
      e.exports = function (e) {
        if (!r(e) && null !== e)
          throw TypeError("Can't set " + String(e) + " as a prototype");
        return e;
      };
    },
    "3bea": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      });
      n("96cf");
      var r = n("1da1"),
        a = n("d4ec"),
        i = n("bee2"),
        o = n("262e"),
        s = n("2caf"),
        c = n("9ab4"),
        u = n("c873"),
        l = n("2841"),
        d = (function (e) {
          Object(o["a"])(n, e);
          var t = Object(s["a"])(n);
          function n() {
            return Object(a["a"])(this, n), t.apply(this, arguments);
          }
          return (
            Object(i["a"])(n, [
              {
                key: "fetchBosAuth",
                value: (function () {
                  var e = Object(r["a"])(
                    regeneratorRuntime.mark(function e() {
                      var t, n, r, a, i, o, s, c, l;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                u["a"].fetch(
                                  "mariana/POST/resource/getTmpCredentials",
                                  null
                                )
                              );
                            case 2:
                              return (
                                (t = e.sent),
                                (n = t.accessKeyId),
                                (r = t.secretAccessKey),
                                (a = t.sessionToken),
                                (i = t.bucket),
                                (o =
                                  void 0 === i ? "aipe-dragonboat-upload" : i),
                                (s = t.endpoint),
                                (c =
                                  void 0 === s
                                    ? window["SP"]["ORIGIN_ENDPOINT"]
                                      ? location.origin
                                      : "bj.bcebos.com"
                                    : s),
                                (l = t.dir),
                                e.abrupt("return", {
                                  ak: n,
                                  sk: r,
                                  sessionToken: a,
                                  bucket: o,
                                  endpoint: c,
                                  dir: l,
                                })
                              );
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  function t() {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
            ]),
            n
          );
        })(l["svc"].ServiceBase);
      d = Object(c["a"])([l["svc"].ServiceDecorator], d);
    },
    "3ca3": function (e, t, n) {
      "use strict";
      var r = n("6547").charAt,
        a = n("69f3"),
        i = n("7dd0"),
        o = "String Iterator",
        s = a.set,
        c = a.getterFor(o);
      i(
        String,
        "String",
        function (e) {
          s(this, { type: o, string: String(e), index: 0 });
        },
        function () {
          var e,
            t = c(this),
            n = t.string,
            a = t.index;
          return a >= n.length
            ? { value: void 0, done: !0 }
            : ((e = r(n, a)), (t.index += e.length), { value: e, done: !1 });
        }
      );
    },
    "3cfd": function (e, t, n) {
      "use strict";
      var r = n("02c9"),
        a = n.n(r);
      a.a;
    },
    "3d34": function (e, t, n) {
      var r = n("cfc7");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("add8c4c0", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "3da3": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return p;
      });
      n("45fc");
      var r = n("ade3"),
        a = (n("96cf"), n("1da1")),
        i = n("d4ec"),
        o = n("bee2"),
        s = n("262e"),
        c = n("2caf"),
        u = n("9ab4"),
        l = n("2841"),
        d = n("c873"),
        f = n("f619"),
        p = (function (e) {
          Object(s["a"])(n, e);
          var t = Object(c["a"])(n);
          function n() {
            var e;
            return (
              Object(i["a"])(this, n),
              (e = t.apply(this, arguments)),
              (e.state = {
                loading: !1,
                pageOptions: { steps: [10, 20, 30], pageSize: 10, offset: 0 },
                tab: f["ETaskType"].CREATED,
                subTaskTab: f["ESubTaskType"].ANNOTATE,
                taskList: { total: 0, items: [] },
                privateTab: f["EProcessTabType"].CREATED,
                priateFilter: {
                  status: void 0,
                  assignType: void 0,
                  projectType: void 0,
                },
              }),
              e
            );
          }
          return (
            Object(o["a"])(n, [
              {
                key: "createTask",
                value: function (e) {
                  return d["a"].fetch("teamAnno/task/createTask", e);
                },
              },
              {
                key: "handlePageChange",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return (
                    Object.assign(this.state.pageOptions, e),
                    this.fetchTaskList()
                  );
                },
              },
              {
                key: "fetchCloudTasks",
                value: (function () {
                  var e = Object(a["a"])(
                    regeneratorRuntime.mark(function e() {
                      var t, n, a, i, o, s, c;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t = "teamAnno/task/teamTaskList"),
                                  (n = null),
                                  this.state.tab === f["ETaskType"].RECEIVED &&
                                    ((t = ((a = {}),
                                    Object(r["a"])(
                                      a,
                                      f["ESubTaskType"].ANNOTATE,
                                      "teamAnno/task/annoTaskList"
                                    ),
                                    Object(r["a"])(
                                      a,
                                      f["ESubTaskType"].AUDIT,
                                      "teamAnno/task/auditTaskList"
                                    ),
                                    a)[this.state.subTaskTab]),
                                    (n = this.state.subTaskTab)),
                                  (i = this.state.pageOptions),
                                  (o = i.pageSize),
                                  (s = i.offset),
                                  (e.next = 6),
                                  d["a"].fetch(t, { pageSize: o, offset: s })
                                );
                              case 6:
                                if (
                                  ((c = e.sent),
                                  !n || n === this.state.subTaskTab)
                                ) {
                                  e.next = 9;
                                  break;
                                }
                                return e.abrupt("return");
                              case 9:
                                this.state.taskList = c;
                              case 10:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  function t() {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "fetchPrivateTasks",
                value: (function () {
                  var e = Object(a["a"])(
                    regeneratorRuntime.mark(function e() {
                      var t,
                        n,
                        a,
                        i,
                        o,
                        s,
                        c,
                        u,
                        l = this;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t = "teamAnno/task/teamTaskList"),
                                  (n = null),
                                  [
                                    f["EProcessTabType"].ANNOTATED,
                                    f["EProcessTabType"].AUDIT,
                                    f["EProcessTabType"].ASSIGNED,
                                    f["EProcessTabType"].HAS_ASSIGNED,
                                  ].some(function (e) {
                                    return e === l.state.privateTab;
                                  }) &&
                                    ((t = ((a = {}),
                                    Object(r["a"])(
                                      a,
                                      f["EProcessTabType"].ANNOTATED,
                                      "teamAnno/task/annoTaskList"
                                    ),
                                    Object(r["a"])(
                                      a,
                                      f["EProcessTabType"].AUDIT,
                                      "teamAnno/task/auditTaskList"
                                    ),
                                    Object(r["a"])(
                                      a,
                                      f["EProcessTabType"].ASSIGNED,
                                      "teamAnno/task/assignTaskList"
                                    ),
                                    Object(r["a"])(
                                      a,
                                      f["EProcessTabType"].HAS_ASSIGNED,
                                      "teamAnno/task/assignTaskList"
                                    ),
                                    a)[this.state.privateTab]),
                                    (n = this.state.privateTab)),
                                  (i = this.state.pageOptions),
                                  (o = i.pageSize),
                                  (s = i.offset),
                                  (c = { pageSize: o, offset: s }),
                                  ("teamAnno/task/teamTaskList" !== t &&
                                    "teamAnno/task/assignTaskList" !== t) ||
                                    (Object.assign(c, this.state.priateFilter),
                                    f["EProcessTabType"].ASSIGNED ===
                                      this.state.privateTab &&
                                      Object.assign(c, {
                                        status: f["EAnnoStatus"].END_ANNO_WITH,
                                      }),
                                    f["EProcessTabType"].HAS_ASSIGNED ===
                                      this.state.privateTab &&
                                      Object.assign(c, {
                                        status:
                                          f["EAnnoStatus"].END_ANNO_WITHOUT,
                                      })),
                                  (e.next = 8),
                                  d["a"].fetch(t, c)
                                );
                              case 8:
                                if (
                                  ((u = e.sent),
                                  !n || n === this.state.privateTab)
                                ) {
                                  e.next = 11;
                                  break;
                                }
                                return e.abrupt("return");
                              case 11:
                                this.state.taskList = u;
                              case 12:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  function t() {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "fetchTaskList",
                value: (function () {
                  var e = Object(a["a"])(
                    regeneratorRuntime.mark(function e() {
                      var t,
                        n = arguments;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((t =
                                    !(n.length > 0 && void 0 !== n[0]) || n[0]),
                                  (this.state.loading = t),
                                  !l["env"].isCloud)
                                ) {
                                  e.next = 7;
                                  break;
                                }
                                return (e.next = 5), this.fetchCloudTasks();
                              case 5:
                                e.next = 9;
                                break;
                              case 7:
                                return (e.next = 9), this.fetchPrivateTasks();
                              case 9:
                                this.state.loading = !1;
                              case 10:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  function t() {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "deleteTask",
                value: function (e) {
                  return d["a"].fetch("teamAnno/task/deleteTask", {
                    taskId: e,
                  });
                },
              },
              {
                key: "terminateTask",
                value: function (e) {
                  return d["a"].fetch("teamAnno/task/terminate", e);
                },
              },
              {
                key: "completeTask",
                value: function (e) {
                  return d["a"].fetch("teamAnno/task/completeTask", {
                    taskId: e,
                  });
                },
              },
              {
                key: "annoSubmit",
                value: function (e) {
                  return d["a"].fetch("teamAnno/task/annoSubmit", {
                    subTaskId: e,
                  });
                },
              },
              {
                key: "annoAudit",
                value: function (e) {
                  return d["a"].fetch("teamAnno/task/auditentity", e);
                },
              },
              {
                key: "auditSubmit",
                value: function (e) {
                  return d["a"].fetch("teamAnno/task/auditSubmit", {
                    auditSubTaskId: e,
                  });
                },
              },
              {
                key: "fetchAnnoDetail",
                value: function (e) {
                  return d["a"].fetch("teamAnno/task/annoDetail", e);
                },
              },
              {
                key: "finishSubTask",
                value: function (e) {
                  return d["a"].fetch("teamAnno/task/finishSubTask", e);
                },
              },
              {
                key: "transferTask",
                value: function (e) {
                  return d["a"].fetch("teamAnno/task/transfer", e);
                },
              },
              {
                key: "finishAuditSubTask",
                value: function (e) {
                  return d["a"].fetch("teamAnno/task/finishAuditTask", e);
                },
              },
              {
                key: "transferAuditTask",
                value: function (e) {
                  return d["a"].fetch("teamAnno/task/transferAuditTask", e);
                },
              },
              {
                key: "fetchTeamAnnoPermission",
                value: function (e) {
                  return d["a"].fetch("teamAnno/permission", e);
                },
              },
              {
                key: "turnbackTask",
                value: function (e) {
                  return d["a"].fetch("teamAnno/task/turnback", e);
                },
              },
              {
                key: "createCommonOpinion",
                value: function (e) {
                  return d["a"].fetch("teamAnno/task/createCommOpinion", e);
                },
              },
              {
                key: "fetchCommonOpinions",
                value: function (e) {
                  return d["a"].fetch("teamAnno/task/commOpinionlist", e);
                },
              },
              {
                key: "delCommopnOpinions",
                value: function (e) {
                  return d["a"].fetch("teamAnno/task/delCommOpinion", {
                    ids: e,
                  });
                },
              },
              {
                key: "fetchTaskTime",
                value: function (e) {
                  return d["a"].fetch("teamAnno/task/timeCost", e);
                },
              },
              {
                key: "recordTaskTime",
                value: function (e) {
                  return d["a"].fetch("teamAnno/task/timeRecord", e);
                },
              },
              {
                key: "assignTask",
                value: function (e) {
                  return d["a"].fetch("teamAnno/task/assign", e);
                },
              },
              {
                key: "preValidate",
                value: function () {
                  return d["a"].fetch("teamAnno/task/preValidate");
                },
              },
              {
                key: "fetchBatchInfo",
                value: function (e) {
                  return d["a"].fetch("teamAnno/task/batchinfo", {
                    batchId: e,
                  });
                },
              },
              {
                key: "updateEndTime",
                value: function (e) {
                  return d["a"].fetch("teamAnno/task/updateTaskEndTime", e);
                },
              },
              {
                key: "fetchAnnoDemoFile",
                value: function (e) {
                  return d["a"].fetch("teamAnno/task/sampleFile", e);
                },
              },
              {
                key: "fetchModelService",
                value: function (e) {
                  return d["a"].fetch("custommodel/modellist", e);
                },
              },
            ]),
            n
          );
        })(l["svc"].ServiceBase);
      p = Object(u["a"])([l["svc"].ServiceDecorator], p);
    },
    "3ea5": function (e, t, n) {
      var r = n("c535");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("45e4c688", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "3f8c": function (e, t) {
      e.exports = {};
    },
    "408a": function (e, t, n) {
      var r = n("c6b6");
      e.exports = function (e) {
        if ("number" != typeof e && "Number" != r(e))
          throw TypeError("Incorrect invocation");
        return +e;
      };
    },
    "40af": function (e, t, n) {
      "use strict";
      var r = n("4444"),
        a = n.n(r);
      a.a;
    },
    4160: function (e, t, n) {
      "use strict";
      var r = n("23e7"),
        a = n("17c2");
      r(
        { target: "Array", proto: !0, forced: [].forEach != a },
        { forEach: a }
      );
    },
    "41e0": function (e, t, n) {
      "use strict";
      var r = n("3ea5"),
        a = n.n(r);
      a.a;
    },
    "428f": function (e, t, n) {
      var r = n("da84");
      e.exports = r;
    },
    "43b1": function (e, t, n) {
      var r = n("feb6");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("a4f9eeea", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    4444: function (e, t, n) {
      var r = n("374a");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("dc25bf84", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "446b": function (e, t, n) {
      "use strict";
      var r = n("5993"),
        a = n.n(r);
      a.a;
    },
    4475: function (e, t, n) {
      var r = n("8baa");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("3a892c72", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "44ad": function (e, t, n) {
      var r = n("d039"),
        a = n("c6b6"),
        i = "".split;
      e.exports = r(function () {
        return !Object("z").propertyIsEnumerable(0);
      })
        ? function (e) {
            return "String" == a(e) ? i.call(e, "") : Object(e);
          }
        : Object;
    },
    "44d2": function (e, t, n) {
      var r = n("b622"),
        a = n("7c73"),
        i = n("9bf2"),
        o = r("unscopables"),
        s = Array.prototype;
      void 0 == s[o] && i.f(s, o, { configurable: !0, value: a(null) }),
        (e.exports = function (e) {
          s[o][e] = !0;
        });
    },
    "44de": function (e, t, n) {
      var r = n("da84");
      e.exports = function (e, t) {
        var n = r.console;
        n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t));
      };
    },
    "44e7": function (e, t, n) {
      var r = n("861d"),
        a = n("c6b6"),
        i = n("b622"),
        o = i("match");
      e.exports = function (e) {
        var t;
        return r(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == a(e));
      };
    },
    "45fc": function (e, t, n) {
      "use strict";
      var r = n("23e7"),
        a = n("b727").some,
        i = n("a640"),
        o = n("ae40"),
        s = i("some"),
        c = o("some");
      r(
        { target: "Array", proto: !0, forced: !s || !c },
        {
          some: function (e) {
            return a(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      );
    },
    "466d": function (e, t, n) {
      "use strict";
      var r = n("d784"),
        a = n("825a"),
        i = n("50c4"),
        o = n("1d80"),
        s = n("8aa5"),
        c = n("14c3");
      r("match", 1, function (e, t, n) {
        return [
          function (t) {
            var n = o(this),
              r = void 0 == t ? void 0 : t[e];
            return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n));
          },
          function (e) {
            var r = n(t, e, this);
            if (r.done) return r.value;
            var o = a(e),
              u = String(this);
            if (!o.global) return c(o, u);
            var l = o.unicode;
            o.lastIndex = 0;
            var d,
              f = [],
              p = 0;
            while (null !== (d = c(o, u))) {
              var v = String(d[0]);
              (f[p] = v),
                "" === v && (o.lastIndex = s(u, i(o.lastIndex), l)),
                p++;
            }
            return 0 === p ? null : f;
          },
        ];
      });
    },
    "47a9": function (e, t, n) {
      var r = n("a05a");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("50ed4bf1", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    4840: function (e, t, n) {
      var r = n("825a"),
        a = n("1c0b"),
        i = n("b622"),
        o = i("species");
      e.exports = function (e, t) {
        var n,
          i = r(e).constructor;
        return void 0 === i || void 0 == (n = r(i)[o]) ? t : a(n);
      };
    },
    "488f": function (e, n) {
      e.exports = t;
    },
    4930: function (e, t, n) {
      var r = n("d039");
      e.exports =
        !!Object.getOwnPropertySymbols &&
        !r(function () {
          return !String(Symbol());
        });
    },
    "498a": function (e, t, n) {
      "use strict";
      var r = n("23e7"),
        a = n("58a8").trim,
        i = n("c8d2");
      r(
        { target: "String", proto: !0, forced: i("trim") },
        {
          trim: function () {
            return a(this);
          },
        }
      );
    },
    "499e": function (e, t, n) {
      "use strict";
      function r(e, t) {
        for (var n = [], r = {}, a = 0; a < t.length; a++) {
          var i = t[a],
            o = i[0],
            s = i[1],
            c = i[2],
            u = i[3],
            l = { id: e + ":" + a, css: s, media: c, sourceMap: u };
          r[o] ? r[o].parts.push(l) : n.push((r[o] = { id: o, parts: [l] }));
        }
        return n;
      }
      n.r(t),
        n.d(t, "default", function () {
          return v;
        });
      var a = "undefined" !== typeof document;
      if ("undefined" !== typeof DEBUG && DEBUG && !a)
        throw new Error(
          "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
        );
      var i = {},
        o = a && (document.head || document.getElementsByTagName("head")[0]),
        s = null,
        c = 0,
        u = !1,
        l = function () {},
        d = null,
        f = "data-vue-ssr-id",
        p =
          "undefined" !== typeof navigator &&
          /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
      function v(e, t, n, a) {
        (u = n), (d = a || {});
        var o = r(e, t);
        return (
          m(o),
          function (t) {
            for (var n = [], a = 0; a < o.length; a++) {
              var s = o[a],
                c = i[s.id];
              c.refs--, n.push(c);
            }
            t ? ((o = r(e, t)), m(o)) : (o = []);
            for (a = 0; a < n.length; a++) {
              c = n[a];
              if (0 === c.refs) {
                for (var u = 0; u < c.parts.length; u++) c.parts[u]();
                delete i[c.id];
              }
            }
          }
        );
      }
      function m(e) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t],
            r = i[n.id];
          if (r) {
            r.refs++;
            for (var a = 0; a < r.parts.length; a++) r.parts[a](n.parts[a]);
            for (; a < n.parts.length; a++) r.parts.push(h(n.parts[a]));
            r.parts.length > n.parts.length &&
              (r.parts.length = n.parts.length);
          } else {
            var o = [];
            for (a = 0; a < n.parts.length; a++) o.push(h(n.parts[a]));
            i[n.id] = { id: n.id, refs: 1, parts: o };
          }
        }
      }
      function b() {
        var e = document.createElement("style");
        return (e.type = "text/css"), o.appendChild(e), e;
      }
      function h(e) {
        var t,
          n,
          r = document.querySelector("style[" + f + '~="' + e.id + '"]');
        if (r) {
          if (u) return l;
          r.parentNode.removeChild(r);
        }
        if (p) {
          var a = c++;
          (r = s || (s = b())),
            (t = y.bind(null, r, a, !1)),
            (n = y.bind(null, r, a, !0));
        } else
          (r = b()),
            (t = _.bind(null, r)),
            (n = function () {
              r.parentNode.removeChild(r);
            });
        return (
          t(e),
          function (r) {
            if (r) {
              if (
                r.css === e.css &&
                r.media === e.media &&
                r.sourceMap === e.sourceMap
              )
                return;
              t((e = r));
            } else n();
          }
        );
      }
      var g = (function () {
        var e = [];
        return function (t, n) {
          return (e[t] = n), e.filter(Boolean).join("\n");
        };
      })();
      function y(e, t, n, r) {
        var a = n ? "" : r.css;
        if (e.styleSheet) e.styleSheet.cssText = g(t, a);
        else {
          var i = document.createTextNode(a),
            o = e.childNodes;
          o[t] && e.removeChild(o[t]),
            o.length ? e.insertBefore(i, o[t]) : e.appendChild(i);
        }
      }
      function _(e, t) {
        var n = t.css,
          r = t.media,
          a = t.sourceMap;
        if (
          (r && e.setAttribute("media", r),
          d.ssrId && e.setAttribute(f, t.id),
          a &&
            ((n += "\n/*# sourceURL=" + a.sources[0] + " */"),
            (n +=
              "\n/*# sourceMappingURL=data:application/json;base64," +
              btoa(unescape(encodeURIComponent(JSON.stringify(a)))) +
              " */")),
          e.styleSheet)
        )
          e.styleSheet.cssText = n;
        else {
          while (e.firstChild) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(n));
        }
      }
    },
    "4a5b": function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".sea-empty-placeholder[data-v-3d9901d4]{margin:72px 0 40px}.sea-empty-placeholder_bottom[data-v-3d9901d4],.sea-empty-placeholder_top[data-v-3d9901d4]{text-align:center}.sea-empty-placeholder_top[data-v-3d9901d4]{margin-bottom:20px}.sea-empty-placeholder_top img[data-v-3d9901d4]{width:160px;height:160px}.sea-empty-placeholder_text[data-v-3d9901d4]{color:#666;margin-bottom:20px}",
          "",
        ]),
        (e.exports = t);
    },
    "4ae1": function (e, t, n) {
      var r = n("23e7"),
        a = n("d066"),
        i = n("1c0b"),
        o = n("825a"),
        s = n("861d"),
        c = n("7c73"),
        u = n("0538"),
        l = n("d039"),
        d = a("Reflect", "construct"),
        f = l(function () {
          function e() {}
          return !(d(function () {}, [], e) instanceof e);
        }),
        p = !l(function () {
          d(function () {});
        }),
        v = f || p;
      r(
        { target: "Reflect", stat: !0, forced: v, sham: v },
        {
          construct: function (e, t) {
            i(e), o(t);
            var n = arguments.length < 3 ? e : i(arguments[2]);
            if (p && !f) return d(e, t, n);
            if (e == n) {
              switch (t.length) {
                case 0:
                  return new e();
                case 1:
                  return new e(t[0]);
                case 2:
                  return new e(t[0], t[1]);
                case 3:
                  return new e(t[0], t[1], t[2]);
                case 4:
                  return new e(t[0], t[1], t[2], t[3]);
              }
              var r = [null];
              return r.push.apply(r, t), new (u.apply(e, r))();
            }
            var a = n.prototype,
              l = c(s(a) ? a : Object.prototype),
              v = Function.apply.call(e, l, t);
            return s(v) ? v : l;
          },
        }
      );
    },
    "4d63": function (e, t, n) {
      var r = n("83ab"),
        a = n("da84"),
        i = n("94ca"),
        o = n("7156"),
        s = n("9bf2").f,
        c = n("241c").f,
        u = n("44e7"),
        l = n("ad6d"),
        d = n("9f7f"),
        f = n("6eeb"),
        p = n("d039"),
        v = n("69f3").set,
        m = n("2626"),
        b = n("b622"),
        h = b("match"),
        g = a.RegExp,
        y = g.prototype,
        _ = /a/g,
        T = /a/g,
        x = new g(_) !== _,
        w = d.UNSUPPORTED_Y,
        O =
          r &&
          i(
            "RegExp",
            !x ||
              w ||
              p(function () {
                return (
                  (T[h] = !1), g(_) != _ || g(T) == T || "/a/i" != g(_, "i")
                );
              })
          );
      if (O) {
        var k = function (e, t) {
            var n,
              r = this instanceof k,
              a = u(e),
              i = void 0 === t;
            if (!r && a && e.constructor === k && i) return e;
            x
              ? a && !i && (e = e.source)
              : e instanceof k && (i && (t = l.call(e)), (e = e.source)),
              w &&
                ((n = !!t && t.indexOf("y") > -1),
                n && (t = t.replace(/y/g, "")));
            var s = o(x ? new g(e, t) : g(e, t), r ? this : y, k);
            return w && n && v(s, { sticky: n }), s;
          },
          E = function (e) {
            e in k ||
              s(k, e, {
                configurable: !0,
                get: function () {
                  return g[e];
                },
                set: function (t) {
                  g[e] = t;
                },
              });
          },
          j = c(g),
          C = 0;
        while (j.length > C) E(j[C++]);
        (y.constructor = k), (k.prototype = y), f(a, "RegExp", k);
      }
      m("RegExp");
    },
    "4d64": function (e, t, n) {
      var r = n("fc6a"),
        a = n("50c4"),
        i = n("23cb"),
        o = function (e) {
          return function (t, n, o) {
            var s,
              c = r(t),
              u = a(c.length),
              l = i(o, u);
            if (e && n != n) {
              while (u > l) if (((s = c[l++]), s != s)) return !0;
            } else
              for (; u > l; l++)
                if ((e || l in c) && c[l] === n) return e || l || 0;
            return !e && -1;
          };
        };
      e.exports = { includes: o(!0), indexOf: o(!1) };
    },
    "4de4": function (e, t, n) {
      "use strict";
      var r = n("23e7"),
        a = n("b727").filter,
        i = n("1dde"),
        o = n("ae40"),
        s = i("filter"),
        c = o("filter");
      r(
        { target: "Array", proto: !0, forced: !s || !c },
        {
          filter: function (e) {
            return a(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      );
    },
    "4df4": function (e, t, n) {
      "use strict";
      var r = n("0366"),
        a = n("7b0b"),
        i = n("9bdd"),
        o = n("e95a"),
        s = n("50c4"),
        c = n("8418"),
        u = n("35a1");
      e.exports = function (e) {
        var t,
          n,
          l,
          d,
          f,
          p,
          v = a(e),
          m = "function" == typeof this ? this : Array,
          b = arguments.length,
          h = b > 1 ? arguments[1] : void 0,
          g = void 0 !== h,
          y = u(v),
          _ = 0;
        if (
          (g && (h = r(h, b > 2 ? arguments[2] : void 0, 2)),
          void 0 == y || (m == Array && o(y)))
        )
          for (t = s(v.length), n = new m(t); t > _; _++)
            (p = g ? h(v[_], _) : v[_]), c(n, _, p);
        else
          for (
            d = y.call(v), f = d.next, n = new m();
            !(l = f.call(d)).done;
            _++
          )
            (p = g ? i(d, h, [l.value, _], !0) : l.value), c(n, _, p);
        return (n.length = _), n;
      };
    },
    "4ec9": function (e, t, n) {
      "use strict";
      var r = n("6d61"),
        a = n("6566");
      e.exports = r(
        "Map",
        function (e) {
          return function () {
            return e(this, arguments.length ? arguments[0] : void 0);
          };
        },
        a
      );
    },
    "4fad": function (e, t, n) {
      var r = n("23e7"),
        a = n("6f53").entries;
      r(
        { target: "Object", stat: !0 },
        {
          entries: function (e) {
            return a(e);
          },
        }
      );
    },
    "507a": function (e, t, n) {
      "use strict";
      var r = n("18d5"),
        a = n.n(r);
      a.a;
    },
    "50c4": function (e, t, n) {
      var r = n("a691"),
        a = Math.min;
      e.exports = function (e) {
        return e > 0 ? a(r(e), 9007199254740991) : 0;
      };
    },
    5114: function (e, t, n) {
      var r = n("c43d");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("140da3a0", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    5135: function (e, t) {
      var n = {}.hasOwnProperty;
      e.exports = function (e, t) {
        return n.call(e, t);
      };
    },
    "51d9": function (e, t, n) {
      var r = n("853b");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("d3fd56da", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "52e1": function (e, t, n) {
      "use strict";
      var r = n("be6b");
      n.o(r, "AssignTaskDto") &&
        n.d(t, "AssignTaskDto", function () {
          return r["AssignTaskDto"];
        }),
        n.o(r, "CreateTaskDto") &&
          n.d(t, "CreateTaskDto", function () {
            return r["CreateTaskDto"];
          }),
        n.o(r, "TaskService") &&
          n.d(t, "TaskService", function () {
            return r["TaskService"];
          });
      var a = n("3da3");
      n.d(t, "TaskService", function () {
        return a["a"];
      });
      var i = n("bea3");
      n.d(t, "AssignTaskDto", function () {
        return i["a"];
      }),
        n.d(t, "CreateTaskDto", function () {
          return i["b"];
        });
    },
    5319: function (e, t, n) {
      "use strict";
      var r = n("d784"),
        a = n("825a"),
        i = n("7b0b"),
        o = n("50c4"),
        s = n("a691"),
        c = n("1d80"),
        u = n("8aa5"),
        l = n("14c3"),
        d = Math.max,
        f = Math.min,
        p = Math.floor,
        v = /\$([$&'`]|\d\d?|<[^>]*>)/g,
        m = /\$([$&'`]|\d\d?)/g,
        b = function (e) {
          return void 0 === e ? e : String(e);
        };
      r("replace", 2, function (e, t, n, r) {
        var h = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
          g = r.REPLACE_KEEPS_$0,
          y = h ? "$" : "$0";
        return [
          function (n, r) {
            var a = c(this),
              i = void 0 == n ? void 0 : n[e];
            return void 0 !== i ? i.call(n, a, r) : t.call(String(a), n, r);
          },
          function (e, r) {
            if ((!h && g) || ("string" === typeof r && -1 === r.indexOf(y))) {
              var i = n(t, e, this, r);
              if (i.done) return i.value;
            }
            var c = a(e),
              p = String(this),
              v = "function" === typeof r;
            v || (r = String(r));
            var m = c.global;
            if (m) {
              var T = c.unicode;
              c.lastIndex = 0;
            }
            var x = [];
            while (1) {
              var w = l(c, p);
              if (null === w) break;
              if ((x.push(w), !m)) break;
              var O = String(w[0]);
              "" === O && (c.lastIndex = u(p, o(c.lastIndex), T));
            }
            for (var k = "", E = 0, j = 0; j < x.length; j++) {
              w = x[j];
              for (
                var C = String(w[0]),
                  S = d(f(s(w.index), p.length), 0),
                  A = [],
                  I = 1;
                I < w.length;
                I++
              )
                A.push(b(w[I]));
              var N = w.groups;
              if (v) {
                var R = [C].concat(A, S, p);
                void 0 !== N && R.push(N);
                var D = String(r.apply(void 0, R));
              } else D = _(C, p, S, A, N, r);
              S >= E && ((k += p.slice(E, S) + D), (E = S + C.length));
            }
            return k + p.slice(E);
          },
        ];
        function _(e, n, r, a, o, s) {
          var c = r + e.length,
            u = a.length,
            l = m;
          return (
            void 0 !== o && ((o = i(o)), (l = v)),
            t.call(s, l, function (t, i) {
              var s;
              switch (i.charAt(0)) {
                case "$":
                  return "$";
                case "&":
                  return e;
                case "`":
                  return n.slice(0, r);
                case "'":
                  return n.slice(c);
                case "<":
                  s = o[i.slice(1, -1)];
                  break;
                default:
                  var l = +i;
                  if (0 === l) return t;
                  if (l > u) {
                    var d = p(l / 10);
                    return 0 === d
                      ? t
                      : d <= u
                      ? void 0 === a[d - 1]
                        ? i.charAt(1)
                        : a[d - 1] + i.charAt(1)
                      : t;
                  }
                  s = a[l - 1];
              }
              return void 0 === s ? "" : s;
            })
          );
        }
      });
    },
    "53ca": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      n("a4d3"), n("e01a"), n("d28b"), n("d3b7"), n("3ca3"), n("ddb0");
      function r(e) {
        return (
          (r =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          r(e)
        );
      }
    },
    "53cd": function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".status-render{display:flex;align-items:center}.status-render .color{width:8px;height:8px;border-radius:5px;margin-right:5px;flex:none}",
          "",
        ]),
        (e.exports = t);
    },
    5490: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return s;
      }),
        n.d(t, "b", function () {
          return c;
        }),
        n.d(t, "a", function () {
          return u;
        });
      n("4de4"), n("d81d"), n("d3b7"), n("96cf");
      var r = n("1da1"),
        a = n("8165"),
        i = n("599d"),
        o = n("5fa4");
      function s() {
        var e = Object(o["a"])().state;
        return Object(a["computed"])(function () {
          var t;
          return (
            !e.loading &&
            !(null === (t = e.result) || void 0 === t ? void 0 : t.total)
          );
        });
      }
      function c() {
        var e = Object(a["ref"])(null);
        return (
          Object(r["a"])(
            regeneratorRuntime.mark(function t() {
              var n, r;
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), Object(i["a"])();
                    case 2:
                      (n = t.sent), (r = n.enums), (e.value = r);
                    case 5:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )(),
          e
        );
      }
      function u() {
        var e = Object(o["a"])().state;
        e.dataTypeInitPromise = new Promise(function (t) {
          Object(r["a"])(
            regeneratorRuntime.mark(function n() {
              var r, a, o, s, c, u, l;
              return regeneratorRuntime.wrap(function (n) {
                while (1)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (n.next = 2), Object(i["a"])();
                    case 2:
                      (r = n.sent),
                        (a = r.enums),
                        (o = r.canSupportMulan),
                        (s = a.EDataType),
                        (c = a.EProjectType),
                        (u = s.toArray().map(function (e) {
                          return {
                            label: e.trueLabel || e.label,
                            id: e.id,
                            children: e.projectType
                              .filter(function (e) {
                                return o({ projectTypes: [e] });
                              })
                              .map(function (e) {
                                var t = c.getItemById(e);
                                return t
                                  ? {
                                      label:
                                        null === t || void 0 === t
                                          ? void 0
                                          : t.label,
                                      id:
                                        null === t || void 0 === t
                                          ? void 0
                                          : t.id,
                                    }
                                  : [];
                              }),
                          };
                        })),
                        (l = u.filter(function (e) {
                          return e.children.length;
                        })),
                        (e.dataTypeSource = l),
                        (e.params.dataType = l[0].id),
                        (e.params.projectType = l[0].children[0].id),
                        t(!0);
                    case 12:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          )();
        });
      }
    },
    5530: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      n("a4d3"),
        n("4de4"),
        n("4160"),
        n("e439"),
        n("dbb4"),
        n("b64b"),
        n("159b");
      var r = n("ade3");
      function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                Object(r["a"])(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
    },
    5692: function (e, t, n) {
      var r = n("c430"),
        a = n("c6cd");
      (e.exports = function (e, t) {
        return a[e] || (a[e] = void 0 !== t ? t : {});
      })("versions", []).push({
        version: "3.6.5",
        mode: r ? "pure" : "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
      });
    },
    "56c3": function (e, t, n) {
      "use strict";
      n("9d44");
      var r = n("e85f");
      n.d(t, "useDataCascader", function () {
        return r["a"];
      });
      n("d6e4"), n("8731");
    },
    "56d7": function (e, t, n) {
      "use strict";
      var r = n("6079"),
        a = n.n(r);
      a.a;
    },
    "56e0": function (e, t, n) {
      var r = n("84ed");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("c8ee4772", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "56ef": function (e, t, n) {
      var r = n("d066"),
        a = n("241c"),
        i = n("7418"),
        o = n("825a");
      e.exports =
        r("Reflect", "ownKeys") ||
        function (e) {
          var t = a.f(o(e)),
            n = i.f;
          return n ? t.concat(n(e)) : t;
        };
    },
    "57a3": function (e, t, n) {
      "use strict";
      var r = n("5f8c"),
        a = n.n(r);
      a.a;
    },
    5899: function (e, t) {
      e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
    },
    "58a8": function (e, t, n) {
      var r = n("1d80"),
        a = n("5899"),
        i = "[" + a + "]",
        o = RegExp("^" + i + i + "*"),
        s = RegExp(i + i + "*$"),
        c = function (e) {
          return function (t) {
            var n = String(r(t));
            return (
              1 & e && (n = n.replace(o, "")),
              2 & e && (n = n.replace(s, "")),
              n
            );
          };
        };
      e.exports = { start: c(1), end: c(2), trim: c(3) };
    },
    "58c7": function (e, t, n) {
      var r = n("b214");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("77e9f97c", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "58c9": function (e, t, n) {
      "use strict";
      var r = n("1603"),
        a = n.n(r);
      a.a;
    },
    5993: function (e, t, n) {
      var r = n("2624");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("3c483dbd", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "599d": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      }),
        n.d(t, "b", function () {
          return s;
        });
      n("96cf");
      var r = n("1da1"),
        a = n("2841");
      function i() {
        return o.apply(this, arguments);
      }
      function o() {
        return (
          (o = Object(r["a"])(
            regeneratorRuntime.mark(function e() {
              var t;
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2), System.import("@baidu/afe-app-dataset")
                      );
                    case 2:
                      return (
                        (t = e.sent),
                        e.abrupt("return", {
                          services: t.useService(),
                          enums: t.enums,
                          LabelPicker: t.LabelPicker,
                          useLabelPicker: t.useLabelPicker,
                          canSupportMulan: t.canSupportMulan,
                        })
                      );
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          o.apply(this, arguments)
        );
      }
      function s() {
        return a["utils"].promise2ref(i());
      }
    },
    "5a34": function (e, t, n) {
      var r = n("44e7");
      e.exports = function (e) {
        if (r(e))
          throw TypeError("The method doesn't accept regular expressions");
        return e;
      };
    },
    "5b66": function (e, t, n) {
      e.exports = n.p + "img/anno-select-dataset.268b09e3.svg";
    },
    "5c6c": function (e, t) {
      e.exports = function (e, t) {
        return {
          enumerable: !(1 & e),
          configurable: !(2 & e),
          writable: !(4 & e),
          value: t,
        };
      };
    },
    "5e89": function (e, t, n) {
      var r = n("861d"),
        a = Math.floor;
      e.exports = function (e) {
        return !r(e) && isFinite(e) && a(e) === e;
      };
    },
    "5f8c": function (e, t, n) {
      var r = n("e0dc");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("17b47227", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "5fa4": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return _;
      });
      var r = n("5530"),
        a = n("ade3"),
        i = (n("96cf"), n("1da1")),
        o = n("d4ec"),
        s = n("bee2"),
        c = n("262e"),
        u = n("2caf"),
        l = n("9ab4"),
        d = n("2841"),
        f = n("2ef0"),
        p = n("f619"),
        v = n("b74e"),
        m = n("e671"),
        b = n("08ba"),
        h = n("2058"),
        g = n("5490"),
        y = (function (e) {
          Object(c["a"])(n, e);
          var t = Object(u["a"])(n);
          function n() {
            var e;
            return (
              Object(o["a"])(this, n),
              (e = t.apply(this, arguments)),
              (e.kpiService = Object(b["useService"])().kpiService),
              (e.state = {
                loading: !0,
                params: new m["KpiListDto"](),
                dataTypeSource: null,
                dataTypeInitPromise: null,
                pageOptions: { steps: [10, 20, 30], pageSize: 10, offset: 0 },
                tab: p["EAnnoActionType"].ANNOTATE,
                result: null,
              }),
              (e.fetchList = Object(f["debounce"])(
                Object(i["a"])(
                  regeneratorRuntime.mark(function t() {
                    var n, i, o, s, c, u, l, d;
                    return regeneratorRuntime.wrap(function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (i = e.state), (t.next = 3), i.dataTypeInitPromise
                            );
                          case 3:
                            return (
                              (i.loading = !0),
                              (n = {}),
                              Object(a["a"])(
                                n,
                                p["EAnnoActionType"].ANNOTATE,
                                e.kpiService.fetchAnnoList
                              ),
                              Object(a["a"])(
                                n,
                                p["EAnnoActionType"].AUDIT,
                                e.kpiService.fetchAuditList
                              ),
                              (o = n),
                              (s = e.state.pageOptions),
                              (c = s.pageSize),
                              (u = s.offset),
                              (l = e.state.tab),
                              (t.next = 9),
                              o[i.tab](
                                Object(r["a"])(
                                  Object(r["a"])({}, e.state.params),
                                  {},
                                  { pageSize: c, offset: u }
                                )
                              )
                            );
                          case 9:
                            (d = t.sent),
                              l === i.tab && (i.result = d),
                              (i.loading = !1);
                          case 12:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                ),
                100
              )),
              (e.downloadList = Object(f["debounce"])(
                Object(i["a"])(
                  regeneratorRuntime.mark(function t() {
                    var n, i, o, s, c, u;
                    return regeneratorRuntime.wrap(function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (n = {}),
                              Object(a["a"])(
                                n,
                                p["EAnnoActionType"].ANNOTATE,
                                e.kpiService.downloadAnnoList
                              ),
                              Object(a["a"])(
                                n,
                                p["EAnnoActionType"].AUDIT,
                                e.kpiService.downloadAuditList
                              ),
                              (i = n),
                              (o = e.state.pageOptions),
                              (s = o.pageSize),
                              (c = o.offset),
                              (t.next = 4),
                              i[e.state.tab](
                                Object(r["a"])(
                                  Object(r["a"])({}, e.state.params),
                                  {},
                                  { pageSize: s, offset: c }
                                )
                              )
                            );
                          case 4:
                            (u = t.sent.download), u && Object(v["f"])(u);
                          case 6:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                ),
                100
              )),
              e
            );
          }
          return (
            Object(s["a"])(n, [
              {
                key: "handlePageChange",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  Object.assign(this.state.pageOptions, e);
                },
              },
              {
                key: "initialize",
                value: function () {
                  return (
                    Object(h["a"])(), Object(g["a"])(), this.fetchList(), this
                  );
                },
              },
            ]),
            n
          );
        })(d["svc"].ServiceBase);
      y = Object(l["a"])([d["svc"].ServiceDecorator], y);
      var _ = d["svc"].createUseService(y);
    },
    6062: function (e, t, n) {
      "use strict";
      var r = n("6d61"),
        a = n("6566");
      e.exports = r(
        "Set",
        function (e) {
          return function () {
            return e(this, arguments.length ? arguments[0] : void 0);
          };
        },
        a
      );
    },
    6079: function (e, t, n) {
      var r = n("df08");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("37e8c887", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "60da": function (e, t, n) {
      "use strict";
      var r = n("83ab"),
        a = n("d039"),
        i = n("df75"),
        o = n("7418"),
        s = n("d1e7"),
        c = n("7b0b"),
        u = n("44ad"),
        l = Object.assign,
        d = Object.defineProperty;
      e.exports =
        !l ||
        a(function () {
          if (
            r &&
            1 !==
              l(
                { b: 1 },
                l(
                  d({}, "a", {
                    enumerable: !0,
                    get: function () {
                      d(this, "b", { value: 3, enumerable: !1 });
                    },
                  }),
                  { b: 2 }
                )
              ).b
          )
            return !0;
          var e = {},
            t = {},
            n = Symbol(),
            a = "abcdefghijklmnopqrst";
          return (
            (e[n] = 7),
            a.split("").forEach(function (e) {
              t[e] = e;
            }),
            7 != l({}, e)[n] || i(l({}, t)).join("") != a
          );
        })
          ? function (e, t) {
              var n = c(e),
                a = arguments.length,
                l = 1,
                d = o.f,
                f = s.f;
              while (a > l) {
                var p,
                  v = u(arguments[l++]),
                  m = d ? i(v).concat(d(v)) : i(v),
                  b = m.length,
                  h = 0;
                while (b > h)
                  (p = m[h++]), (r && !f.call(v, p)) || (n[p] = v[p]);
              }
              return n;
            }
          : l;
    },
    "621d": function (e, t, n) {
      e.exports = n.p + "img/manage2.dbd7b63d.svg";
    },
    "62e4": function (e, t) {
      e.exports = function (e) {
        return (
          e.webpackPolyfill ||
            ((e.deprecate = function () {}),
            (e.paths = []),
            e.children || (e.children = []),
            Object.defineProperty(e, "loaded", {
              enumerable: !0,
              get: function () {
                return e.l;
              },
            }),
            Object.defineProperty(e, "id", {
              enumerable: !0,
              get: function () {
                return e.i;
              },
            }),
            (e.webpackPolyfill = 1)),
          e
        );
      };
    },
    "63be": function (e, t, n) {
      var r = n("b1d8");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("bd41c2be", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    6434: function (e, t, n) {
      "use strict";
      var r = n("43b1"),
        a = n.n(r);
      a.a;
    },
    "64b4": function (e, t, n) {
      "use strict";
      var r = n("351c");
      n.d(t, "KpiTableList", function () {
        return r["a"];
      });
      var a = n("5490");
      n.d(t, "useDatasetEnumsRef", function () {
        return a["b"];
      }),
        n.d(t, "useResultEmpty", function () {
          return a["c"];
        });
      var i = n("91fe");
      n.o(i, "useKpiList") &&
        n.d(t, "useKpiList", function () {
          return i["useKpiList"];
        });
      n("2058");
      var o = n("5fa4");
      n.d(t, "useKpiList", function () {
        return o["a"];
      });
    },
    "64d4": function (e, t, n) {
      "use strict";
      var r = n("c7d4"),
        a = n.n(r);
      a.a;
    },
    6547: function (e, t, n) {
      var r = n("a691"),
        a = n("1d80"),
        i = function (e) {
          return function (t, n) {
            var i,
              o,
              s = String(a(t)),
              c = r(n),
              u = s.length;
            return c < 0 || c >= u
              ? e
                ? ""
                : void 0
              : ((i = s.charCodeAt(c)),
                i < 55296 ||
                i > 56319 ||
                c + 1 === u ||
                (o = s.charCodeAt(c + 1)) < 56320 ||
                o > 57343
                  ? e
                    ? s.charAt(c)
                    : i
                  : e
                  ? s.slice(c, c + 2)
                  : o - 56320 + ((i - 55296) << 10) + 65536);
          };
        };
      e.exports = { codeAt: i(!1), charAt: i(!0) };
    },
    6566: function (e, t, n) {
      "use strict";
      var r = n("9bf2").f,
        a = n("7c73"),
        i = n("e2cc"),
        o = n("0366"),
        s = n("19aa"),
        c = n("2266"),
        u = n("7dd0"),
        l = n("2626"),
        d = n("83ab"),
        f = n("f183").fastKey,
        p = n("69f3"),
        v = p.set,
        m = p.getterFor;
      e.exports = {
        getConstructor: function (e, t, n, u) {
          var l = e(function (e, r) {
              s(e, l, t),
                v(e, {
                  type: t,
                  index: a(null),
                  first: void 0,
                  last: void 0,
                  size: 0,
                }),
                d || (e.size = 0),
                void 0 != r && c(r, e[u], e, n);
            }),
            p = m(t),
            b = function (e, t, n) {
              var r,
                a,
                i = p(e),
                o = h(e, t);
              return (
                o
                  ? (o.value = n)
                  : ((i.last = o =
                      {
                        index: (a = f(t, !0)),
                        key: t,
                        value: n,
                        previous: (r = i.last),
                        next: void 0,
                        removed: !1,
                      }),
                    i.first || (i.first = o),
                    r && (r.next = o),
                    d ? i.size++ : e.size++,
                    "F" !== a && (i.index[a] = o)),
                e
              );
            },
            h = function (e, t) {
              var n,
                r = p(e),
                a = f(t);
              if ("F" !== a) return r.index[a];
              for (n = r.first; n; n = n.next) if (n.key == t) return n;
            };
          return (
            i(l.prototype, {
              clear: function () {
                var e = this,
                  t = p(e),
                  n = t.index,
                  r = t.first;
                while (r)
                  (r.removed = !0),
                    r.previous && (r.previous = r.previous.next = void 0),
                    delete n[r.index],
                    (r = r.next);
                (t.first = t.last = void 0), d ? (t.size = 0) : (e.size = 0);
              },
              delete: function (e) {
                var t = this,
                  n = p(t),
                  r = h(t, e);
                if (r) {
                  var a = r.next,
                    i = r.previous;
                  delete n.index[r.index],
                    (r.removed = !0),
                    i && (i.next = a),
                    a && (a.previous = i),
                    n.first == r && (n.first = a),
                    n.last == r && (n.last = i),
                    d ? n.size-- : t.size--;
                }
                return !!r;
              },
              forEach: function (e) {
                var t,
                  n = p(this),
                  r = o(e, arguments.length > 1 ? arguments[1] : void 0, 3);
                while ((t = t ? t.next : n.first)) {
                  r(t.value, t.key, this);
                  while (t && t.removed) t = t.previous;
                }
              },
              has: function (e) {
                return !!h(this, e);
              },
            }),
            i(
              l.prototype,
              n
                ? {
                    get: function (e) {
                      var t = h(this, e);
                      return t && t.value;
                    },
                    set: function (e, t) {
                      return b(this, 0 === e ? 0 : e, t);
                    },
                  }
                : {
                    add: function (e) {
                      return b(this, (e = 0 === e ? 0 : e), e);
                    },
                  }
            ),
            d &&
              r(l.prototype, "size", {
                get: function () {
                  return p(this).size;
                },
              }),
            l
          );
        },
        setStrong: function (e, t, n) {
          var r = t + " Iterator",
            a = m(t),
            i = m(r);
          u(
            e,
            t,
            function (e, t) {
              v(this, {
                type: r,
                target: e,
                state: a(e),
                kind: t,
                last: void 0,
              });
            },
            function () {
              var e = i(this),
                t = e.kind,
                n = e.last;
              while (n && n.removed) n = n.previous;
              return e.target && (e.last = n = n ? n.next : e.state.first)
                ? "keys" == t
                  ? { value: n.key, done: !1 }
                  : "values" == t
                  ? { value: n.value, done: !1 }
                  : { value: [n.key, n.value], done: !1 }
                : ((e.target = void 0), { value: void 0, done: !0 });
            },
            n ? "entries" : "values",
            !n,
            !0
          ),
            l(t);
        },
      };
    },
    "65f0": function (e, t, n) {
      var r = n("861d"),
        a = n("e8b5"),
        i = n("b622"),
        o = i("species");
      e.exports = function (e, t) {
        var n;
        return (
          a(e) &&
            ((n = e.constructor),
            "function" != typeof n || (n !== Array && !a(n.prototype))
              ? r(n) && ((n = n[o]), null === n && (n = void 0))
              : (n = void 0)),
          new (void 0 === n ? Array : n)(0 === t ? 0 : t)
        );
      };
    },
    6971: function (e, t, n) {
      "use strict";
      var r = n("cb87"),
        a = n.n(r);
      a.a;
    },
    "69f1": function (e, t) {},
    "69f3": function (e, t, n) {
      var r,
        a,
        i,
        o = n("7f9a"),
        s = n("da84"),
        c = n("861d"),
        u = n("9112"),
        l = n("5135"),
        d = n("f772"),
        f = n("d012"),
        p = s.WeakMap,
        v = function (e) {
          return i(e) ? a(e) : r(e, {});
        },
        m = function (e) {
          return function (t) {
            var n;
            if (!c(t) || (n = a(t)).type !== e)
              throw TypeError("Incompatible receiver, " + e + " required");
            return n;
          };
        };
      if (o) {
        var b = new p(),
          h = b.get,
          g = b.has,
          y = b.set;
        (r = function (e, t) {
          return y.call(b, e, t), t;
        }),
          (a = function (e) {
            return h.call(b, e) || {};
          }),
          (i = function (e) {
            return g.call(b, e);
          });
      } else {
        var _ = d("state");
        (f[_] = !0),
          (r = function (e, t) {
            return u(e, _, t), t;
          }),
          (a = function (e) {
            return l(e, _) ? e[_] : {};
          }),
          (i = function (e) {
            return l(e, _);
          });
      }
      e.exports = { set: r, get: a, has: i, enforce: v, getterFor: m };
    },
    "69f7": function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".task-tip-modal[data-v-f815337e]  .s-modal_main{min-width:480px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);margin:0}.task-tip-modal[data-v-f815337e]  .s-modal_body{text-align:center}",
          "",
        ]),
        (e.exports = t);
    },
    "6a24": function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".ctl-bar.is-head[data-v-7f255fd2]{padding-bottom:13px}.ctl-bar .head-info[data-v-7f255fd2]{color:#000;font-weight:500}.ctl-bar .manageteam-btn.creator[data-v-7f255fd2]{margin-left:16px}",
          "",
        ]),
        (e.exports = t);
    },
    "6acf": function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".render-ctl[data-v-7b641085]{white-space:nowrap}.render-ctl .link-blue[data-v-7b641085]{display:inline-block;margin-right:8px}",
          "",
        ]),
        (e.exports = t);
    },
    "6b75": function (e, t, n) {
      "use strict";
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    "6c50": function (e, t, n) {
      e.exports = n.p + "img/manage1.cd743684.svg";
    },
    "6cb8": function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".resource-config[data-v-0c14cd9f]{margin-top:5px}.resource-config-title[data-v-0c14cd9f]{padding:15px 0}.resource-config-title .resource-config-arrow[data-v-0c14cd9f]{transform:translate3d(0,2px,0) rotate(270deg) scale(.6);transition:.3s}.resource-config-title .resource-config-arrow.up[data-v-0c14cd9f]{transform:translate3d(0,2px,0) rotate(450deg) scale(.6)}.resource-config-form[data-v-0c14cd9f]{text-align:left}.resource-config-form .resource-dropdown[data-v-0c14cd9f],.resource-config-form .resource-input[data-v-0c14cd9f]{width:400px}.resource-config-form .resource-dropdown[data-v-0c14cd9f]  .s-input[type=number],.resource-config-form .resource-input[data-v-0c14cd9f]  .s-input[type=number]{padding-right:0}.resource-config-form .input-tip[data-v-0c14cd9f]{line-height:20px;font-size:12px;margin-top:0;color:#999}.resource-config-form .empty-dropdown[data-v-0c14cd9f]{height:auto;cursor:not-allowed}.resource-config-form .empty-dropdown[data-v-0c14cd9f]:hover{background:#fff}.resource-config-form .empty-dropdown[data-v-0c14cd9f]  .sea-empty-placeholder{margin:0}.resource-config-form .empty-dropdown[data-v-0c14cd9f]  .sea-empty-placeholder .sea-empty-placeholder_top{display:flex;flex-direction:column;align-items:center;margin:5px 0}.resource-config-form .empty-dropdown[data-v-0c14cd9f]  .sea-empty-placeholder .sea-empty-placeholder_top img{width:50px;height:50px}.resource-config-form .empty-dropdown[data-v-0c14cd9f]  .sea-empty-placeholder .sea-empty-placeholder_top .sea-empty-placeholder_text{color:#999;font-size:12px;line-height:16px}.resource-config-form .dropdown-with-clear[data-v-0c14cd9f]  .right{position:relative}.resource-config-form .dropdown-with-clear .resource-dropdown:hover+.clear-icon[data-v-0c14cd9f]{display:block}.resource-config-form .dropdown-with-clear .resource-dropdown.showing+.clear-icon[data-v-0c14cd9f]{display:none}.resource-config-form .clear-icon[data-v-0c14cd9f]{z-index:1;position:absolute;right:10px;font-size:12px;color:#999;top:0;display:none;cursor:pointer}.resource-config-form .clear-icon[data-v-0c14cd9f]:hover{display:block;color:#333}.resource-config .slide-enter-active[data-v-0c14cd9f]{transition:all .3s ease}.resource-config .slide-leave-active[data-v-0c14cd9f]{transition:all .3s cubic-bezier(1,.3,.7,1)}",
          "",
        ]),
        (e.exports = t);
    },
    "6cbf": function (e, t, n) {
      "use strict";
      var r = n("d274"),
        a = n.n(r);
      t["default"] = a.a;
    },
    "6d61": function (e, t, n) {
      "use strict";
      var r = n("23e7"),
        a = n("da84"),
        i = n("94ca"),
        o = n("6eeb"),
        s = n("f183"),
        c = n("2266"),
        u = n("19aa"),
        l = n("861d"),
        d = n("d039"),
        f = n("1c7e"),
        p = n("d44e"),
        v = n("7156");
      e.exports = function (e, t, n) {
        var m = -1 !== e.indexOf("Map"),
          b = -1 !== e.indexOf("Weak"),
          h = m ? "set" : "add",
          g = a[e],
          y = g && g.prototype,
          _ = g,
          T = {},
          x = function (e) {
            var t = y[e];
            o(
              y,
              e,
              "add" == e
                ? function (e) {
                    return t.call(this, 0 === e ? 0 : e), this;
                  }
                : "delete" == e
                ? function (e) {
                    return !(b && !l(e)) && t.call(this, 0 === e ? 0 : e);
                  }
                : "get" == e
                ? function (e) {
                    return b && !l(e) ? void 0 : t.call(this, 0 === e ? 0 : e);
                  }
                : "has" == e
                ? function (e) {
                    return !(b && !l(e)) && t.call(this, 0 === e ? 0 : e);
                  }
                : function (e, n) {
                    return t.call(this, 0 === e ? 0 : e, n), this;
                  }
            );
          };
        if (
          i(
            e,
            "function" != typeof g ||
              !(
                b ||
                (y.forEach &&
                  !d(function () {
                    new g().entries().next();
                  }))
              )
          )
        )
          (_ = n.getConstructor(t, e, m, h)), (s.REQUIRED = !0);
        else if (i(e, !0)) {
          var w = new _(),
            O = w[h](b ? {} : -0, 1) != w,
            k = d(function () {
              w.has(1);
            }),
            E = f(function (e) {
              new g(e);
            }),
            j =
              !b &&
              d(function () {
                var e = new g(),
                  t = 5;
                while (t--) e[h](t, t);
                return !e.has(-0);
              });
          E ||
            ((_ = t(function (t, n) {
              u(t, _, e);
              var r = v(new g(), t, _);
              return void 0 != n && c(n, r[h], r, m), r;
            })),
            (_.prototype = y),
            (y.constructor = _)),
            (k || j) && (x("delete"), x("has"), m && x("get")),
            (j || O) && x(h),
            b && y.clear && delete y.clear;
        }
        return (
          (T[e] = _),
          r({ global: !0, forced: _ != g }, T),
          p(_, e),
          b || n.setStrong(_, e, m),
          _
        );
      };
    },
    "6e14": function (e, t, n) {
      "use strict";
      var r = n("1459"),
        a = n.n(r);
      a.a;
    },
    "6e9b": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      }),
        n.d(t, "b", function () {
          return c;
        });
      n("b0c0");
      var r = n("d4ec"),
        a = n("262e"),
        i = n("2caf"),
        o = n("0456"),
        s = (function (e) {
          Object(a["a"])(n, e);
          var t = Object(i["a"])(n);
          function n() {
            return Object(r["a"])(this, n), t.apply(this, arguments);
          }
          return n;
        })(o["a"]),
        c = function e() {
          Object(r["a"])(this, e),
            (this.name = ""),
            (this.teamType = 1),
            (this.members = []);
        };
    },
    "6eeb": function (e, t, n) {
      var r = n("da84"),
        a = n("9112"),
        i = n("5135"),
        o = n("ce4e"),
        s = n("8925"),
        c = n("69f3"),
        u = c.get,
        l = c.enforce,
        d = String(String).split("String");
      (e.exports = function (e, t, n, s) {
        var c = !!s && !!s.unsafe,
          u = !!s && !!s.enumerable,
          f = !!s && !!s.noTargetGet;
        "function" == typeof n &&
          ("string" != typeof t || i(n, "name") || a(n, "name", t),
          (l(n).source = d.join("string" == typeof t ? t : ""))),
          e !== r
            ? (c ? !f && e[t] && (u = !0) : delete e[t],
              u ? (e[t] = n) : a(e, t, n))
            : u
            ? (e[t] = n)
            : o(t, n);
      })(Function.prototype, "toString", function () {
        return ("function" == typeof this && u(this).source) || s(this);
      });
    },
    "6f1e": function (e, t, n) {
      "use strict";
      var r = n("f658"),
        a = n.n(r);
      a.a;
    },
    "6f53": function (e, t, n) {
      var r = n("83ab"),
        a = n("df75"),
        i = n("fc6a"),
        o = n("d1e7").f,
        s = function (e) {
          return function (t) {
            var n,
              s = i(t),
              c = a(s),
              u = c.length,
              l = 0,
              d = [];
            while (u > l)
              (n = c[l++]),
                (r && !o.call(s, n)) || d.push(e ? [n, s[n]] : s[n]);
            return d;
          };
        };
      e.exports = { entries: s(!0), values: s(!1) };
    },
    "6fe0": function (e, t) {},
    7156: function (e, t, n) {
      var r = n("861d"),
        a = n("d2bb");
      e.exports = function (e, t, n) {
        var i, o;
        return (
          a &&
            "function" == typeof (i = t.constructor) &&
            i !== n &&
            r((o = i.prototype)) &&
            o !== n.prototype &&
            a(e, o),
          e
        );
      };
    },
    "72e6": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      });
      var r = n("d4ec"),
        a = n("bee2"),
        i = n("262e"),
        o = n("2caf"),
        s = n("9ab4"),
        c = n("2841"),
        u = n("c873"),
        l = (function (e) {
          Object(i["a"])(n, e);
          var t = Object(o["a"])(n);
          function n() {
            return Object(r["a"])(this, n), t.apply(this, arguments);
          }
          return (
            Object(a["a"])(n, [
              {
                key: "fetchAnnoList",
                value: function (e) {
                  return u["a"].fetch("teamAnno/task/annoKpiList", e);
                },
              },
              {
                key: "fetchAuditList",
                value: function (e) {
                  return u["a"].fetch("teamAnno/task/auditKpiList", e);
                },
              },
              {
                key: "downloadAnnoList",
                value: function (e) {
                  return u["a"].fetch("teamAnno/task/annokpiListdownload", e);
                },
              },
              {
                key: "downloadAuditList",
                value: function (e) {
                  return u["a"].fetch("teamAnno/task/auditKpiListdownload", e);
                },
              },
            ]),
            n
          );
        })(c["svc"].ServiceBase);
      l = Object(s["a"])([c["svc"].ServiceDecorator], l);
    },
    "73f9": function (e, t, n) {
      "use strict";
      var r = n("faed"),
        a = n.n(r);
      a.a;
    },
    "740d": function (e, t, n) {
      "use strict";
      var r = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "model-selecter" },
            [
              e.readonly
                ? n("div", { staticClass: "model-selecter_name" }, [
                    e._v(" " + e._s(e.model.modelName) + " "),
                  ])
                : n(
                    "the-dropdown",
                    {
                      staticClass: "model-selecter_dropdown",
                      attrs: { disabled: e.disabled },
                      model: {
                        value: e.modelId,
                        callback: function (t) {
                          e.modelId = t;
                        },
                        expression: "modelId",
                      },
                    },
                    e._l(e.modelServices, function (t) {
                      return n(
                        "the-dropdown-item",
                        {
                          key: t.modelId,
                          attrs: { value: t.modelId, disabled: t.disabled },
                        },
                        [
                          t.tip
                            ? n(
                                "the-tip",
                                {
                                  staticClass: "item-tip",
                                  attrs: { placement: "right" },
                                },
                                [
                                  n("div", { staticClass: "item-text" }, [
                                    e._v(e._s(t.modelName)),
                                  ]),
                                  n(
                                    "span",
                                    {
                                      attrs: { slot: "popper" },
                                      slot: "popper",
                                    },
                                    [e._v(e._s(t.tip))]
                                  ),
                                ]
                              )
                            : n("span", [e._v(e._s(t.modelName))]),
                        ],
                        1
                      );
                    }),
                    1
                  ),
            ],
            1
          );
        },
        a = [],
        i = (n("7db0"), n("8165")),
        o = Object(i["defineComponent"])({
          model: { prop: "model", event: "change" },
          props: {
            modelServices: {
              type: Array,
              required: !1,
              default: function () {
                return [];
              },
            },
            model: { type: Object, default: void 0 },
            readonly: { type: Boolean, default: !1 },
            disabled: { type: Boolean, default: !0 },
          },
          setup: function (e, t) {
            var n = t.emit,
              r = Object(i["computed"])({
                get: function () {
                  var t;
                  return (
                    (null === (t = e.model) || void 0 === t
                      ? void 0
                      : t.modelId) || ""
                  );
                },
                set: function (t) {
                  n(
                    "change",
                    e.modelServices.find(function (e) {
                      return e.modelId === t;
                    })
                  );
                },
              });
            return { modelId: r };
          },
        }),
        s = o,
        c = (n("a393"), n("2877")),
        u = Object(c["a"])(s, r, a, !1, null, "a5f612c0", null);
      t["a"] = u.exports;
    },
    7418: function (e, t) {
      t.f = Object.getOwnPropertySymbols;
    },
    "746f": function (e, t, n) {
      var r = n("428f"),
        a = n("5135"),
        i = n("e538"),
        o = n("9bf2").f;
      e.exports = function (e) {
        var t = r.Symbol || (r.Symbol = {});
        a(t, e) || o(t, e, { value: i.f(e) });
      };
    },
    "772e": function (e, t, n) {
      "use strict";
      var r = n("afb1"),
        a = n.n(r);
      a.a;
    },
    7839: function (e, t) {
      e.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf",
      ];
    },
    "7b0b": function (e, t, n) {
      var r = n("1d80");
      e.exports = function (e) {
        return Object(r(e));
      };
    },
    "7c73": function (e, t, n) {
      var r,
        a = n("825a"),
        i = n("37e8"),
        o = n("7839"),
        s = n("d012"),
        c = n("1be4"),
        u = n("cc12"),
        l = n("f772"),
        d = ">",
        f = "<",
        p = "prototype",
        v = "script",
        m = l("IE_PROTO"),
        b = function () {},
        h = function (e) {
          return f + v + d + e + f + "/" + v + d;
        },
        g = function (e) {
          e.write(h("")), e.close();
          var t = e.parentWindow.Object;
          return (e = null), t;
        },
        y = function () {
          var e,
            t = u("iframe"),
            n = "java" + v + ":";
          return (
            (t.style.display = "none"),
            c.appendChild(t),
            (t.src = String(n)),
            (e = t.contentWindow.document),
            e.open(),
            e.write(h("document.F=Object")),
            e.close(),
            e.F
          );
        },
        _ = function () {
          try {
            r = document.domain && new ActiveXObject("htmlfile");
          } catch (t) {}
          _ = r ? g(r) : y();
          var e = o.length;
          while (e--) delete _[p][o[e]];
          return _();
        };
      (s[m] = !0),
        (e.exports =
          Object.create ||
          function (e, t) {
            var n;
            return (
              null !== e
                ? ((b[p] = a(e)), (n = new b()), (b[p] = null), (n[m] = e))
                : (n = _()),
              void 0 === t ? n : i(n, t)
            );
          });
    },
    "7db0": function (e, t, n) {
      "use strict";
      var r = n("23e7"),
        a = n("b727").find,
        i = n("44d2"),
        o = n("ae40"),
        s = "find",
        c = !0,
        u = o(s);
      s in [] &&
        Array(1)[s](function () {
          c = !1;
        }),
        r(
          { target: "Array", proto: !0, forced: c || !u },
          {
            find: function (e) {
              return a(this, e, arguments.length > 1 ? arguments[1] : void 0);
            },
          }
        ),
        i(s);
    },
    "7dd0": function (e, t, n) {
      "use strict";
      var r = n("23e7"),
        a = n("9ed3"),
        i = n("e163"),
        o = n("d2bb"),
        s = n("d44e"),
        c = n("9112"),
        u = n("6eeb"),
        l = n("b622"),
        d = n("c430"),
        f = n("3f8c"),
        p = n("ae93"),
        v = p.IteratorPrototype,
        m = p.BUGGY_SAFARI_ITERATORS,
        b = l("iterator"),
        h = "keys",
        g = "values",
        y = "entries",
        _ = function () {
          return this;
        };
      e.exports = function (e, t, n, l, p, T, x) {
        a(n, t, l);
        var w,
          O,
          k,
          E = function (e) {
            if (e === p && I) return I;
            if (!m && e in S) return S[e];
            switch (e) {
              case h:
                return function () {
                  return new n(this, e);
                };
              case g:
                return function () {
                  return new n(this, e);
                };
              case y:
                return function () {
                  return new n(this, e);
                };
            }
            return function () {
              return new n(this);
            };
          },
          j = t + " Iterator",
          C = !1,
          S = e.prototype,
          A = S[b] || S["@@iterator"] || (p && S[p]),
          I = (!m && A) || E(p),
          N = ("Array" == t && S.entries) || A;
        if (
          (N &&
            ((w = i(N.call(new e()))),
            v !== Object.prototype &&
              w.next &&
              (d ||
                i(w) === v ||
                (o ? o(w, v) : "function" != typeof w[b] && c(w, b, _)),
              s(w, j, !0, !0),
              d && (f[j] = _))),
          p == g &&
            A &&
            A.name !== g &&
            ((C = !0),
            (I = function () {
              return A.call(this);
            })),
          (d && !x) || S[b] === I || c(S, b, I),
          (f[t] = I),
          p)
        )
          if (((O = { values: E(g), keys: T ? I : E(h), entries: E(y) }), x))
            for (k in O) (m || C || !(k in S)) && u(S, k, O[k]);
          else r({ target: t, proto: !0, forced: m || C }, O);
        return O;
      };
    },
    "7e12": function (e, t, n) {
      var r = n("da84"),
        a = n("58a8").trim,
        i = n("5899"),
        o = r.parseFloat,
        s = 1 / o(i + "-0") !== -1 / 0;
      e.exports = s
        ? function (e) {
            var t = a(String(e)),
              n = o(t);
            return 0 === n && "-" == t.charAt(0) ? -0 : n;
          }
        : o;
    },
    "7e78": function (e, t, n) {
      e.exports = n.p + "img/arrow.38179d34.svg";
    },
    "7f9a": function (e, t, n) {
      var r = n("da84"),
        a = n("8925"),
        i = r.WeakMap;
      e.exports = "function" === typeof i && /native code/.test(a(i));
    },
    "80a1": function (e, t, n) {
      "use strict";
      var r = n("5530"),
        a = function () {
          var e = { SUPORT_TASK_PERMISSIONS: ["DELETE", "VIEW_ANNO"] },
            t = Object(r["a"])({}, e);
          return (
            window.SP.MULAN_CONFIG &&
              (t = Object.assign({}, e, window.SP.MULAN_CONFIG)),
            t
          );
        },
        i = a();
      t["a"] = i;
    },
    "80a9": function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".member-name[data-v-5915813e]{display:inline-block;width:136px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",
          "",
        ]),
        (e.exports = t);
    },
    8165: function (e, t) {
      e.exports = n;
    },
    "81fe": function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return o;
      }),
        n.d(t, "a", function () {
          return s;
        });
      n("b0c0"), n("4ec9"), n("d3b7"), n("3ca3"), n("ddb0");
      var r = n("5530"),
        a = (n("8165"), n("f24d")),
        i = n("2841");
      function o(e, t) {
        var n = Object(a["useModal"])(e);
        return function (e) {
          n(
            Object(r["a"])(
              Object(r["a"])({}, null === t || void 0 === t ? void 0 : t()),
              e
            )
          );
        };
      }
      function s(e) {
        if (!i["env"].isCloud) return e;
        var t = new Map([
          ["姓名", "邮箱"],
          ["成员用户名", "邮箱"],
          [
            "已存在重复的成员，请选择新的成员！",
            "已存在重复的邮箱，请输入新的邮箱！",
          ],
          ["项目", "账户"],
        ]);
        return t.get(e) || e;
      }
      n.d(t, "b", function () {
        return i["useGetPath"];
      });
    },
    "825a": function (e, t, n) {
      var r = n("861d");
      e.exports = function (e) {
        if (!r(e)) throw TypeError(String(e) + " is not an object");
        return e;
      };
    },
    "83ab": function (e, t, n) {
      var r = n("d039");
      e.exports = !r(function () {
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
    8418: function (e, t, n) {
      "use strict";
      var r = n("c04e"),
        a = n("9bf2"),
        i = n("5c6c");
      e.exports = function (e, t, n) {
        var o = r(t);
        o in e ? a.f(e, o, i(0, n)) : (e[o] = n);
      };
    },
    "84ed": function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".status-render{display:flex;align-items:center}.status-render .color{width:8px;height:8px;border-radius:5px;margin-right:5px}",
          "",
        ]),
        (e.exports = t);
    },
    "853b": function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".end-date .edit-tip[data-v-34f14f6a]{margin-left:10px}",
          "",
        ]),
        (e.exports = t);
    },
    "861d": function (e, t) {
      e.exports = function (e) {
        return "object" === typeof e ? null !== e : "function" === typeof e;
      };
    },
    8647: function (e, t, n) {
      var r = n("53cd");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("67590b14", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    8686: function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".render-ctl .link-blue[data-v-e17fb75a]{display:inline-block;margin-right:8px}.render-ctl .link-blue[data-v-e17fb75a]:last-child{margin-right:0}.render-ctl .link-blue.disabled[data-v-e17fb75a]{cursor:default;color:#000}.render-ctl .link-blue.disabled span[data-v-e17fb75a]{color:#999}",
          "",
        ]),
        (e.exports = t);
    },
    8731: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      n("99af");
      var r = n("8165"),
        a = n("56c3");
      function i() {
        var e = Object(a["useDataCascader"])();
        return Object(r["computed"])(function () {
          var t,
            n,
            r = e.state,
            a = r.sourceTuple,
            i = r.indexTuple,
            o = null === (t = a[0][i[0]]) || void 0 === t ? void 0 : t.label,
            s = null === (n = a[1][i[1]]) || void 0 === n ? void 0 : n.label;
          return o && s ? "".concat(o, " / ").concat(s) : "全部";
        });
      }
    },
    8925: function (e, t, n) {
      var r = n("c6cd"),
        a = Function.toString;
      "function" != typeof r.inspectSource &&
        (r.inspectSource = function (e) {
          return a.call(e);
        }),
        (e.exports = r.inspectSource);
    },
    "8aa5": function (e, t, n) {
      "use strict";
      var r = n("6547").charAt;
      e.exports = function (e, t, n) {
        return t + (n ? r(e, t).length : 1);
      };
    },
    "8ba4": function (e, t, n) {
      var r = n("23e7"),
        a = n("5e89");
      r({ target: "Number", stat: !0 }, { isInteger: a });
    },
    "8baa": function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".team-task-table[data-v-5be2ad20]  thead .s-col{white-space:nowrap}.team-task-table[data-v-5be2ad20]  thead .filter-col{display:flex;align-items:center}.team-task-table[data-v-5be2ad20]  tr td{word-break:break-all}",
          "",
        ]),
        (e.exports = t);
    },
    "8bbf": function (e, t) {
      e.exports = r;
    },
    "8c96": function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".cus-popper.eg-zoom-in-top-leave,.cus-popper.eg-zoom-in-top-leave-active{pointer-events:none}",
          "",
        ]),
        (e.exports = t);
    },
    "8d2c": function (e, t) {
      e.exports = a;
    },
    "8dc7": function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".assign-team .audit-input-postfix[data-v-ecf5248a]{position:relative;left:-54px}.assign-team .water[data-v-ecf5248a]{font-size:14px;color:#999}.assign-team[data-v-ecf5248a]  .s-field{margin:20px 0}",
          "",
        ]),
        (e.exports = t);
    },
    "8e50": function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".member-item[data-v-585d4585]{width:800px;display:flex}.member-item .member-dropdown[data-v-585d4585]{width:160px}.member-item[data-v-585d4585]  .s-field .form-tip{position:absolute;margin:0;right:auto;bottom:auto;z-index:2}.member-item[data-v-585d4585]  .s-field .form-tip .left{position:absolute;left:0;transform:translate3d(36px,0,0);box-sizing:border-box;top:2px;border:.66em solid transparent;border-top:0;border-bottom:.66em solid #fff5f4;-webkit-filter:drop-shadow(0 -2px 0 #eceff8);filter:drop-shadow(0 -2px 0 #eceff8);width:0;height:0}.member-item[data-v-585d4585]  .s-field .form-tip .right{border:1px solid #fff5f4;box-shadow:0 0 1px #eceff8;white-space:normal;max-width:300px;padding:3px 10px;text-align:left;background-color:var(--cxd-red-bg,#fff5f4);color:var(--cxd-red,#ea2e2e);margin-top:10px;white-space:nowrap}.member-item[data-v-585d4585]  .inline-editor.remark-editor{display:flex;max-width:100%}.member-item[data-v-585d4585]  .line-item.email .s-tip{display:block}.member-item[data-v-585d4585]  .line-item.email .s-tip .s-tip-text_inner{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:default}.member-item[data-v-585d4585]  .s-dropdown{position:inherit}.member-item[data-v-585d4585]  .s-dropdown .s-dropdown-item{position:relative}.member-item[data-v-585d4585]  .s-dropdown .s-dropdown_ul{min-width:180px!important}",
          "",
        ]),
        (e.exports = t);
    },
    "8f6a": function (e, t, n) {
      "use strict";
      var r = n("e323"),
        a = n.n(r);
      a.a;
    },
    9052: function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".kpi-table .kpi-title[data-v-d934d00e]{font-size:14px;line-height:22px;font-weight:500}.kpi-table .kpi-total-info[data-v-d934d00e]{border:1px solid #eee;width:100%;height:94px;display:flex;justify-content:space-between;padding:20px 10px;margin:12px 0 24px}.kpi-table .kpi-total-info .total-item[data-v-d934d00e]{font-size:14px;position:relative}.kpi-table .kpi-total-info .total-item .item-title[data-v-d934d00e]{line-height:24px;font-weight:500;font-size:16px;color:#333;margin-bottom:8px;text-align:center}.kpi-table .kpi-total-info .total-item .item-label[data-v-d934d00e]{color:#666}.kpi-table .kpi-total-info .vertical-line[data-v-d934d00e]{width:1px;height:52px;border-left:1px solid #eee}.kpi-table .kpi-table-body[data-v-d934d00e]{margin-top:16px;overflow:auto}.kpi-table.has-scroll .kpi-total-info[data-v-d934d00e]{overflow:auto}.kpi-table.has-scroll .kpi-total-info .total-item[data-v-d934d00e]{margin-right:10px;word-break:keep-all}.kpi-table.has-scroll .kpi-total-info .total-item[data-v-d934d00e]:last-child{margin-right:0}.kpi-table.has-scroll .kpi-total-info .vertical-line[data-v-d934d00e]{margin-right:10px}.kpi-table.has-scroll .kpi-table-body[data-v-d934d00e]{overflow:auto}.kpi-table.has-scroll .kpi-table-body .s-table[data-v-d934d00e]{min-width:1300px}",
          "",
        ]),
        (e.exports = t);
    },
    9096: function (e, t, n) {
      e.exports = n.p + "img/manage3.fc8aeceb.svg";
    },
    "90e3": function (e, t) {
      var n = 0,
        r = Math.random();
      e.exports = function (e) {
        return (
          "Symbol(" +
          String(void 0 === e ? "" : e) +
          ")_" +
          (++n + r).toString(36)
        );
      };
    },
    9112: function (e, t, n) {
      var r = n("83ab"),
        a = n("9bf2"),
        i = n("5c6c");
      e.exports = r
        ? function (e, t, n) {
            return a.f(e, t, i(1, n));
          }
        : function (e, t, n) {
            return (e[t] = n), e;
          };
    },
    9130: function (e, t) {},
    "91fe": function (e, t) {},
    9263: function (e, t, n) {
      "use strict";
      var r = n("ad6d"),
        a = n("9f7f"),
        i = RegExp.prototype.exec,
        o = String.prototype.replace,
        s = i,
        c = (function () {
          var e = /a/,
            t = /b*/g;
          return (
            i.call(e, "a"),
            i.call(t, "a"),
            0 !== e.lastIndex || 0 !== t.lastIndex
          );
        })(),
        u = a.UNSUPPORTED_Y || a.BROKEN_CARET,
        l = void 0 !== /()??/.exec("")[1],
        d = c || l || u;
      d &&
        (s = function (e) {
          var t,
            n,
            a,
            s,
            d = this,
            f = u && d.sticky,
            p = r.call(d),
            v = d.source,
            m = 0,
            b = e;
          return (
            f &&
              ((p = p.replace("y", "")),
              -1 === p.indexOf("g") && (p += "g"),
              (b = String(e).slice(d.lastIndex)),
              d.lastIndex > 0 &&
                (!d.multiline ||
                  (d.multiline && "\n" !== e[d.lastIndex - 1])) &&
                ((v = "(?: " + v + ")"), (b = " " + b), m++),
              (n = new RegExp("^(?:" + v + ")", p))),
            l && (n = new RegExp("^" + v + "$(?!\\s)", p)),
            c && (t = d.lastIndex),
            (a = i.call(f ? n : d, b)),
            f
              ? a
                ? ((a.input = a.input.slice(m)),
                  (a[0] = a[0].slice(m)),
                  (a.index = d.lastIndex),
                  (d.lastIndex += a[0].length))
                : (d.lastIndex = 0)
              : c && a && (d.lastIndex = d.global ? a.index + a[0].length : t),
            l &&
              a &&
              a.length > 1 &&
              o.call(a[0], n, function () {
                for (s = 1; s < arguments.length - 2; s++)
                  void 0 === arguments[s] && (a[s] = void 0);
              }),
            a
          );
        }),
        (e.exports = s);
    },
    "94ca": function (e, t, n) {
      var r = n("d039"),
        a = /#|\.prototype\./,
        i = function (e, t) {
          var n = s[o(e)];
          return n == u || (n != c && ("function" == typeof t ? r(t) : !!t));
        },
        o = (i.normalize = function (e) {
          return String(e).replace(a, ".").toLowerCase();
        }),
        s = (i.data = {}),
        c = (i.NATIVE = "N"),
        u = (i.POLYFILL = "P");
      e.exports = i;
    },
    "954a": function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([e.i, ".link-blue[data-v-65757b6d]{margin-right:10px}", ""]),
        (e.exports = t);
    },
    "95b1": function (e, t, n) {
      e.exports = n.p + "img/create3.dc76458f.svg";
    },
    "96cf": function (e, t, n) {
      var r = (function (e) {
        "use strict";
        var t,
          n = Object.prototype,
          r = n.hasOwnProperty,
          a = "function" === typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          o = a.asyncIterator || "@@asyncIterator",
          s = a.toStringTag || "@@toStringTag";
        function c(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          c({}, "");
        } catch (N) {
          c = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function u(e, t, n, r) {
          var a = t && t.prototype instanceof b ? t : b,
            i = Object.create(a.prototype),
            o = new S(r || []);
          return (i._invoke = k(e, n, o)), i;
        }
        function l(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (N) {
            return { type: "throw", arg: N };
          }
        }
        e.wrap = u;
        var d = "suspendedStart",
          f = "suspendedYield",
          p = "executing",
          v = "completed",
          m = {};
        function b() {}
        function h() {}
        function g() {}
        var y = {};
        y[i] = function () {
          return this;
        };
        var _ = Object.getPrototypeOf,
          T = _ && _(_(A([])));
        T && T !== n && r.call(T, i) && (y = T);
        var x = (g.prototype = b.prototype = Object.create(y));
        function w(e) {
          ["next", "throw", "return"].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function O(e, t) {
          function n(a, i, o, s) {
            var c = l(e[a], e, i);
            if ("throw" !== c.type) {
              var u = c.arg,
                d = u.value;
              return d && "object" === typeof d && r.call(d, "__await")
                ? t.resolve(d.__await).then(
                    function (e) {
                      n("next", e, o, s);
                    },
                    function (e) {
                      n("throw", e, o, s);
                    }
                  )
                : t.resolve(d).then(
                    function (e) {
                      (u.value = e), o(u);
                    },
                    function (e) {
                      return n("throw", e, o, s);
                    }
                  );
            }
            s(c.arg);
          }
          var a;
          function i(e, r) {
            function i() {
              return new t(function (t, a) {
                n(e, r, t, a);
              });
            }
            return (a = a ? a.then(i, i) : i());
          }
          this._invoke = i;
        }
        function k(e, t, n) {
          var r = d;
          return function (a, i) {
            if (r === p) throw new Error("Generator is already running");
            if (r === v) {
              if ("throw" === a) throw i;
              return I();
            }
            (n.method = a), (n.arg = i);
            while (1) {
              var o = n.delegate;
              if (o) {
                var s = E(o, n);
                if (s) {
                  if (s === m) continue;
                  return s;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (r === d) throw ((r = v), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = p;
              var c = l(e, t, n);
              if ("normal" === c.type) {
                if (((r = n.done ? v : f), c.arg === m)) continue;
                return { value: c.arg, done: n.done };
              }
              "throw" === c.type &&
                ((r = v), (n.method = "throw"), (n.arg = c.arg));
            }
          };
        }
        function E(e, n) {
          var r = e.iterator[n.method];
          if (r === t) {
            if (((n.delegate = null), "throw" === n.method)) {
              if (
                e.iterator["return"] &&
                ((n.method = "return"),
                (n.arg = t),
                E(e, n),
                "throw" === n.method)
              )
                return m;
              (n.method = "throw"),
                (n.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return m;
          }
          var a = l(r, e.iterator, n.arg);
          if ("throw" === a.type)
            return (
              (n.method = "throw"), (n.arg = a.arg), (n.delegate = null), m
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((n[e.resultName] = i.value),
                (n.next = e.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                m)
              : i
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              m);
        }
        function j(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function C(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function S(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(j, this),
            this.reset(!0);
        }
        function A(e) {
          if (e) {
            var n = e[i];
            if (n) return n.call(e);
            if ("function" === typeof e.next) return e;
            if (!isNaN(e.length)) {
              var a = -1,
                o = function n() {
                  while (++a < e.length)
                    if (r.call(e, a)) return (n.value = e[a]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (o.next = o);
            }
          }
          return { next: I };
        }
        function I() {
          return { value: t, done: !0 };
        }
        return (
          (h.prototype = x.constructor = g),
          (g.constructor = h),
          (h.displayName = c(g, s, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" === typeof e && e.constructor;
            return (
              !!t &&
              (t === h || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, g)
                : ((e.__proto__ = g), c(e, s, "GeneratorFunction")),
              (e.prototype = Object.create(x)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          w(O.prototype),
          (O.prototype[o] = function () {
            return this;
          }),
          (e.AsyncIterator = O),
          (e.async = function (t, n, r, a, i) {
            void 0 === i && (i = Promise);
            var o = new O(u(t, n, r, a), i);
            return e.isGeneratorFunction(n)
              ? o
              : o.next().then(function (e) {
                  return e.done ? e.value : o.next();
                });
          }),
          w(x),
          c(x, s, "Generator"),
          (x[i] = function () {
            return this;
          }),
          (x.toString = function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var n in e) t.push(n);
            return (
              t.reverse(),
              function n() {
                while (t.length) {
                  var r = t.pop();
                  if (r in e) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (e.values = A),
          (S.prototype = {
            constructor: S,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(C),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0],
                t = e.completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function a(r, a) {
                return (
                  (s.type = "throw"),
                  (s.arg = e),
                  (n.next = r),
                  a && ((n.method = "next"), (n.arg = t)),
                  !!a
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var o = this.tryEntries[i],
                  s = o.completion;
                if ("root" === o.tryLoc) return a("end");
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, "catchLoc"),
                    u = r.call(o, "finallyLoc");
                  if (c && u) {
                    if (this.prev < o.catchLoc) return a(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return a(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return a(o.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return a(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var i = a;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var o = i ? i.completion : {};
              return (
                (o.type = e),
                (o.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), m)
                  : this.complete(o)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                m
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), C(n), m;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    C(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: A(e), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = t),
                m
              );
            },
          }),
          e
        );
      })(e.exports);
      try {
        regeneratorRuntime = r;
      } catch (a) {
        Function("r", "regeneratorRuntime = r")(r);
      }
    },
    "98d3": function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".page-task-create[data-v-0d47b70b]{font-size:12px;color:#151b26;line-height:20px;font-weight:400;padding-bottom:24px;margin-bottom:76px}",
          "",
        ]),
        (e.exports = t);
    },
    "99af": function (e, t, n) {
      "use strict";
      var r = n("23e7"),
        a = n("d039"),
        i = n("e8b5"),
        o = n("861d"),
        s = n("7b0b"),
        c = n("50c4"),
        u = n("8418"),
        l = n("65f0"),
        d = n("1dde"),
        f = n("b622"),
        p = n("2d00"),
        v = f("isConcatSpreadable"),
        m = 9007199254740991,
        b = "Maximum allowed index exceeded",
        h =
          p >= 51 ||
          !a(function () {
            var e = [];
            return (e[v] = !1), e.concat()[0] !== e;
          }),
        g = d("concat"),
        y = function (e) {
          if (!o(e)) return !1;
          var t = e[v];
          return void 0 !== t ? !!t : i(e);
        },
        _ = !h || !g;
      r(
        { target: "Array", proto: !0, forced: _ },
        {
          concat: function (e) {
            var t,
              n,
              r,
              a,
              i,
              o = s(this),
              d = l(o, 0),
              f = 0;
            for (t = -1, r = arguments.length; t < r; t++)
              if (((i = -1 === t ? o : arguments[t]), y(i))) {
                if (((a = c(i.length)), f + a > m)) throw TypeError(b);
                for (n = 0; n < a; n++, f++) n in i && u(d, f, i[n]);
              } else {
                if (f >= m) throw TypeError(b);
                u(d, f++, i);
              }
            return (d.length = f), d;
          },
        }
      );
    },
    "9a28": function (e, t, n) {
      "use strict";
      var r = n("fca2"),
        a = n.n(r);
      a.a;
    },
    "9ab4": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      function r(e, t, n, r) {
        var a,
          i = arguments.length,
          o =
            i < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, n))
              : r;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          o = Reflect.decorate(e, t, n, r);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (o = (i < 3 ? a(o) : i > 3 ? a(t, n, o) : a(t, n)) || o);
        return i > 3 && o && Object.defineProperty(t, n, o), o;
      }
    },
    "9b4b": function (e, t, n) {
      var r = n("f553");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("cd9877a2", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "9bd5": function (e, t, n) {
      "use strict";
      var r = n("3d34"),
        a = n.n(r);
      a.a;
    },
    "9bdd": function (e, t, n) {
      var r = n("825a");
      e.exports = function (e, t, n, a) {
        try {
          return a ? t(r(n)[0], n[1]) : t(n);
        } catch (o) {
          var i = e["return"];
          throw (void 0 !== i && r(i.call(e)), o);
        }
      };
    },
    "9bf2": function (e, t, n) {
      var r = n("83ab"),
        a = n("0cfb"),
        i = n("825a"),
        o = n("c04e"),
        s = Object.defineProperty;
      t.f = r
        ? s
        : function (e, t, n) {
            if ((i(e), (t = o(t, !0)), i(n), a))
              try {
                return s(e, t, n);
              } catch (r) {}
            if ("get" in n || "set" in n)
              throw TypeError("Accessors not supported");
            return "value" in n && (e[t] = n.value), e;
          };
    },
    "9d44": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      }),
        n.d(t, "b", function () {
          return o;
        });
      n("c740");
      var r = n("8165"),
        a = n("e85f");
      function i(e) {
        var t = Object(a["a"])();
        Object(r["watch"])(
          function () {
            return e;
          },
          function () {
            (t.state.source = e.source),
              (t.state.modelIdTuple = e.modelIdTuple);
            var n = t.state.source.findIndex(function (e) {
                return e.id === t.state.modelIdTuple[0];
              }),
              r = t.state.source[n].children,
              a = r.findIndex(function (e) {
                return e.id === t.state.modelIdTuple[1];
              });
            t.state.modelIndexTuple = [n, a];
          },
          { deep: !0 }
        );
      }
      function o() {
        var e = Object(a["a"])();
        Object(r["watch"])(
          [
            function () {
              return e.state.source;
            },
            function () {
              return e.state.modelIndexTuple;
            },
            function () {
              return e.state.hoverIndexTuple;
            },
          ],
          function () {
            var t = e.state,
              n = t.modelIndexTuple,
              r = t.hoverIndexTuple,
              a = t.source;
            a &&
              ((e.state.indexTuple = n),
              e.state.hoverIndexTuple[0] >= 0 && (e.state.indexTuple = r),
              (e.state.sourceTuple = [a, a[e.state.indexTuple[0]].children]));
          },
          { deep: !0 }
        );
      }
    },
    "9dc5": function (e, t, n) {
      "use strict";
      var r = n("d5bb"),
        a = n.n(r);
      a.a;
    },
    "9ed3": function (e, t, n) {
      "use strict";
      var r = n("ae93").IteratorPrototype,
        a = n("7c73"),
        i = n("5c6c"),
        o = n("d44e"),
        s = n("3f8c"),
        c = function () {
          return this;
        };
      e.exports = function (e, t, n) {
        var u = t + " Iterator";
        return (
          (e.prototype = a(r, { next: i(1, n) })),
          o(e, u, !1, !0),
          (s[u] = c),
          e
        );
      };
    },
    "9f7f": function (e, t, n) {
      "use strict";
      var r = n("d039");
      function a(e, t) {
        return RegExp(e, t);
      }
      (t.UNSUPPORTED_Y = r(function () {
        var e = a("a", "y");
        return (e.lastIndex = 2), null != e.exec("abcd");
      })),
        (t.BROKEN_CARET = r(function () {
          var e = a("^r", "gy");
          return (e.lastIndex = 2), null != e.exec("str");
        }));
    },
    a03b: function (e, t, n) {
      var r = n("8686");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("0f45c51a", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    a05a: function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".task-create-form .info[data-v-3cd86c37]{background:#fff;border-radius:6px}.task-create-form .title[data-v-3cd86c37]{font-size:16px;margin:24px 0}.task-create-form .title.basic-info[data-v-3cd86c37]{margin-top:0}.task-create-form .w400[data-v-3cd86c37]{width:400px}.task-create-form .btn-wrap[data-v-3cd86c37]{position:fixed;bottom:0;left:182px;right:0;z-index:999;padding:10px 16px;height:60px;background:#fff;box-shadow:0 1px 10px 0 rgba(0,0,0,.1)}.task-create-form .btn-wrap button[data-v-3cd86c37]{padding:10px 30px;border-radius:4px;font-size:14px;text-align:center;line-height:22px;height:40px;font-weight:400}.task-create-form .btn-wrap button.confirm[data-v-3cd86c37]{background:#2468f2;color:#fff;margin-right:8px}.task-create-form .btn-wrap button.cancel[data-v-3cd86c37]{background:#fff;border:1px solid #e8e9eb;color:#151b26}.task-create-form .hidden-row[data-v-3cd86c37]  .form-content{display:none}.task-create-form .radio-tip[data-v-3cd86c37]{font-size:12px;margin-left:5px}.task-create-form .warn-tip[data-v-3cd86c37]{margin:5px 0 0}.task-create-form .warn-tip[data-v-3cd86c37]:not(:first-child){line-height:20px}.task-create-form .warn-tip .tip-text[data-v-3cd86c37]{display:inline-block;font-size:12px;color:#f59000;line-height:1;width:300px}.task-create-form .warn-tip .link-blue[data-v-3cd86c37]{margin-left:10px}.task-create-form .file-item[data-v-3cd86c37]{display:inline-block;margin:10px 0 10px 120px;min-width:256px}.task-create-form .file-item .file-wrap[data-v-3cd86c37]{display:flex;flex-direction:row;align-items:center}.task-create-form .file-item .file-wrap.error-file[data-v-3cd86c37]{background-color:#fff1f0}.task-create-form .file-item .file-wrap[data-v-3cd86c37]  .s-icon{top:0}.task-create-form .file-item .file-wrap .file-icon[data-v-3cd86c37]{margin-right:5px}.task-create-form .file-item .file-wrap .file-name[data-v-3cd86c37]{max-width:50vw;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-right:8px}.task-create-form .file-item .file-wrap .file-name.error[data-v-3cd86c37]{color:#e60000}.task-create-form .file-item .file-wrap .close[data-v-3cd86c37]{display:none;font-size:12px;margin-left:auto;margin-right:8px;color:#999;cursor:pointer}.task-create-form .file-item .file-wrap[data-v-3cd86c37]:hover{background:#f9f9f9}.task-create-form .file-item .file-wrap:hover .close[data-v-3cd86c37]{display:inline-block}.task-create-form .file-item .file-error[data-v-3cd86c37]{color:#e60000;margin-top:5px;font-size:14px;line-height:1}.task-create-form .file-item .file-info[data-v-3cd86c37]{color:#a6a6a6;margin-top:5px;font-size:14px;line-height:1}.task-create-form[data-v-3cd86c37]  .s-form .assign-tip .s-tip_popper_content{width:250px}.task-create-form[data-v-3cd86c37]  .s-form .assign-tip .s-icon{top:.15em}.miniSidebar .btn-wrap[data-v-3cd86c37]{left:62px}",
          "",
        ]),
        (e.exports = t);
    },
    a15b: function (e, t, n) {
      "use strict";
      var r = n("23e7"),
        a = n("44ad"),
        i = n("fc6a"),
        o = n("a640"),
        s = [].join,
        c = a != Object,
        u = o("join", ",");
      r(
        { target: "Array", proto: !0, forced: c || !u },
        {
          join: function (e) {
            return s.call(i(this), void 0 === e ? "," : e);
          },
        }
      );
    },
    a24f: function (e, t, n) {
      "use strict";
      var r = n("02a0"),
        a = n.n(r);
      a.a;
    },
    a353: function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".role-change[data-v-609fa05c]{display:flex}.role-change .role-dropdown[data-v-609fa05c]{color:#148eee;width:160px}.role-change .role-dropdown[data-v-609fa05c]:hover{color:#148eee}.role-change .role-dropdown[data-v-609fa05c]  .s-dropdown-item.label{color:#148eee;border-color:#148eee}.role-change .role-dropdown[data-v-609fa05c]  .s-dropdown-item.label .arrow .s-icon{color:#148eee}",
          "",
        ]),
        (e.exports = t);
    },
    a393: function (e, t, n) {
      "use strict";
      var r = n("f513"),
        a = n.n(r);
      a.a;
    },
    a434: function (e, t, n) {
      "use strict";
      var r = n("23e7"),
        a = n("23cb"),
        i = n("a691"),
        o = n("50c4"),
        s = n("7b0b"),
        c = n("65f0"),
        u = n("8418"),
        l = n("1dde"),
        d = n("ae40"),
        f = l("splice"),
        p = d("splice", { ACCESSORS: !0, 0: 0, 1: 2 }),
        v = Math.max,
        m = Math.min,
        b = 9007199254740991,
        h = "Maximum allowed length exceeded";
      r(
        { target: "Array", proto: !0, forced: !f || !p },
        {
          splice: function (e, t) {
            var n,
              r,
              l,
              d,
              f,
              p,
              g = s(this),
              y = o(g.length),
              _ = a(e, y),
              T = arguments.length;
            if (
              (0 === T
                ? (n = r = 0)
                : 1 === T
                ? ((n = 0), (r = y - _))
                : ((n = T - 2), (r = m(v(i(t), 0), y - _))),
              y + n - r > b)
            )
              throw TypeError(h);
            for (l = c(g, r), d = 0; d < r; d++)
              (f = _ + d), f in g && u(l, d, g[f]);
            if (((l.length = r), n < r)) {
              for (d = _; d < y - r; d++)
                (f = d + r), (p = d + n), f in g ? (g[p] = g[f]) : delete g[p];
              for (d = y; d > y - r + n; d--) delete g[d - 1];
            } else if (n > r)
              for (d = y - r; d > _; d--)
                (f = d + r - 1),
                  (p = d + n - 1),
                  f in g ? (g[p] = g[f]) : delete g[p];
            for (d = 0; d < n; d++) g[d + _] = arguments[d + 2];
            return (g.length = y - r + n), l;
          },
        }
      );
    },
    a493: function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".teamtable-toolbar[data-v-73a0bcba]{display:flex;flex-direction:row;align-items:center;margin-bottom:20px}.teamtable-toolbar .search-item[data-v-73a0bcba]{margin-left:auto;width:180px;height:32px}.teamtable-toolbar .search-item .s-input-wrapper[data-v-73a0bcba]{height:32px}.teamtable-toolbar .search-item .s-input-wrapper[data-v-73a0bcba]  .s-input{padding-right:38px}.teamtable-toolbar .search-item .s-input-postfix[data-v-73a0bcba]{height:32px}.teamtable-toolbar .search-item .s-input-postfix .search-icon[data-v-73a0bcba]{cursor:pointer;top:0}.teamtable-toolbar .search-item .s-input[data-v-73a0bcba]{height:32px}",
          "",
        ]),
        (e.exports = t);
    },
    a4d3: function (e, t, n) {
      "use strict";
      var r = n("23e7"),
        a = n("da84"),
        i = n("d066"),
        o = n("c430"),
        s = n("83ab"),
        c = n("4930"),
        u = n("fdbf"),
        l = n("d039"),
        d = n("5135"),
        f = n("e8b5"),
        p = n("861d"),
        v = n("825a"),
        m = n("7b0b"),
        b = n("fc6a"),
        h = n("c04e"),
        g = n("5c6c"),
        y = n("7c73"),
        _ = n("df75"),
        T = n("241c"),
        x = n("057f"),
        w = n("7418"),
        O = n("06cf"),
        k = n("9bf2"),
        E = n("d1e7"),
        j = n("9112"),
        C = n("6eeb"),
        S = n("5692"),
        A = n("f772"),
        I = n("d012"),
        N = n("90e3"),
        R = n("b622"),
        D = n("e538"),
        M = n("746f"),
        L = n("d44e"),
        P = n("69f3"),
        U = n("b727").forEach,
        $ = A("hidden"),
        B = "Symbol",
        z = "prototype",
        V = R("toPrimitive"),
        F = P.set,
        q = P.getterFor(B),
        G = Object[z],
        W = a.Symbol,
        K = i("JSON", "stringify"),
        H = O.f,
        X = k.f,
        Q = x.f,
        Y = E.f,
        Z = S("symbols"),
        J = S("op-symbols"),
        ee = S("string-to-symbol-registry"),
        te = S("symbol-to-string-registry"),
        ne = S("wks"),
        re = a.QObject,
        ae = !re || !re[z] || !re[z].findChild,
        ie =
          s &&
          l(function () {
            return (
              7 !=
              y(
                X({}, "a", {
                  get: function () {
                    return X(this, "a", { value: 7 }).a;
                  },
                })
              ).a
            );
          })
            ? function (e, t, n) {
                var r = H(G, t);
                r && delete G[t], X(e, t, n), r && e !== G && X(G, t, r);
              }
            : X,
        oe = function (e, t) {
          var n = (Z[e] = y(W[z]));
          return (
            F(n, { type: B, tag: e, description: t }),
            s || (n.description = t),
            n
          );
        },
        se = u
          ? function (e) {
              return "symbol" == typeof e;
            }
          : function (e) {
              return Object(e) instanceof W;
            },
        ce = function (e, t, n) {
          e === G && ce(J, t, n), v(e);
          var r = h(t, !0);
          return (
            v(n),
            d(Z, r)
              ? (n.enumerable
                  ? (d(e, $) && e[$][r] && (e[$][r] = !1),
                    (n = y(n, { enumerable: g(0, !1) })))
                  : (d(e, $) || X(e, $, g(1, {})), (e[$][r] = !0)),
                ie(e, r, n))
              : X(e, r, n)
          );
        },
        ue = function (e, t) {
          v(e);
          var n = b(t),
            r = _(n).concat(ve(n));
          return (
            U(r, function (t) {
              (s && !de.call(n, t)) || ce(e, t, n[t]);
            }),
            e
          );
        },
        le = function (e, t) {
          return void 0 === t ? y(e) : ue(y(e), t);
        },
        de = function (e) {
          var t = h(e, !0),
            n = Y.call(this, t);
          return (
            !(this === G && d(Z, t) && !d(J, t)) &&
            (!(n || !d(this, t) || !d(Z, t) || (d(this, $) && this[$][t])) || n)
          );
        },
        fe = function (e, t) {
          var n = b(e),
            r = h(t, !0);
          if (n !== G || !d(Z, r) || d(J, r)) {
            var a = H(n, r);
            return (
              !a || !d(Z, r) || (d(n, $) && n[$][r]) || (a.enumerable = !0), a
            );
          }
        },
        pe = function (e) {
          var t = Q(b(e)),
            n = [];
          return (
            U(t, function (e) {
              d(Z, e) || d(I, e) || n.push(e);
            }),
            n
          );
        },
        ve = function (e) {
          var t = e === G,
            n = Q(t ? J : b(e)),
            r = [];
          return (
            U(n, function (e) {
              !d(Z, e) || (t && !d(G, e)) || r.push(Z[e]);
            }),
            r
          );
        };
      if (
        (c ||
          ((W = function () {
            if (this instanceof W)
              throw TypeError("Symbol is not a constructor");
            var e =
                arguments.length && void 0 !== arguments[0]
                  ? String(arguments[0])
                  : void 0,
              t = N(e),
              n = function (e) {
                this === G && n.call(J, e),
                  d(this, $) && d(this[$], t) && (this[$][t] = !1),
                  ie(this, t, g(1, e));
              };
            return s && ae && ie(G, t, { configurable: !0, set: n }), oe(t, e);
          }),
          C(W[z], "toString", function () {
            return q(this).tag;
          }),
          C(W, "withoutSetter", function (e) {
            return oe(N(e), e);
          }),
          (E.f = de),
          (k.f = ce),
          (O.f = fe),
          (T.f = x.f = pe),
          (w.f = ve),
          (D.f = function (e) {
            return oe(R(e), e);
          }),
          s &&
            (X(W[z], "description", {
              configurable: !0,
              get: function () {
                return q(this).description;
              },
            }),
            o || C(G, "propertyIsEnumerable", de, { unsafe: !0 }))),
        r({ global: !0, wrap: !0, forced: !c, sham: !c }, { Symbol: W }),
        U(_(ne), function (e) {
          M(e);
        }),
        r(
          { target: B, stat: !0, forced: !c },
          {
            for: function (e) {
              var t = String(e);
              if (d(ee, t)) return ee[t];
              var n = W(t);
              return (ee[t] = n), (te[n] = t), n;
            },
            keyFor: function (e) {
              if (!se(e)) throw TypeError(e + " is not a symbol");
              if (d(te, e)) return te[e];
            },
            useSetter: function () {
              ae = !0;
            },
            useSimple: function () {
              ae = !1;
            },
          }
        ),
        r(
          { target: "Object", stat: !0, forced: !c, sham: !s },
          {
            create: le,
            defineProperty: ce,
            defineProperties: ue,
            getOwnPropertyDescriptor: fe,
          }
        ),
        r(
          { target: "Object", stat: !0, forced: !c },
          { getOwnPropertyNames: pe, getOwnPropertySymbols: ve }
        ),
        r(
          {
            target: "Object",
            stat: !0,
            forced: l(function () {
              w.f(1);
            }),
          },
          {
            getOwnPropertySymbols: function (e) {
              return w.f(m(e));
            },
          }
        ),
        K)
      ) {
        var me =
          !c ||
          l(function () {
            var e = W();
            return (
              "[null]" != K([e]) || "{}" != K({ a: e }) || "{}" != K(Object(e))
            );
          });
        r(
          { target: "JSON", stat: !0, forced: me },
          {
            stringify: function (e, t, n) {
              var r,
                a = [e],
                i = 1;
              while (arguments.length > i) a.push(arguments[i++]);
              if (((r = t), (p(t) || void 0 !== e) && !se(e)))
                return (
                  f(t) ||
                    (t = function (e, t) {
                      if (
                        ("function" == typeof r && (t = r.call(this, e, t)),
                        !se(t))
                      )
                        return t;
                    }),
                  (a[1] = t),
                  K.apply(null, a)
                );
            },
          }
        );
      }
      W[z][V] || j(W[z], V, W[z].valueOf), L(W, B), (I[$] = !0);
    },
    a623: function (e, t, n) {
      "use strict";
      var r = n("23e7"),
        a = n("b727").every,
        i = n("a640"),
        o = n("ae40"),
        s = i("every"),
        c = o("every");
      r(
        { target: "Array", proto: !0, forced: !s || !c },
        {
          every: function (e) {
            return a(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      );
    },
    a630: function (e, t, n) {
      var r = n("23e7"),
        a = n("4df4"),
        i = n("1c7e"),
        o = !i(function (e) {
          Array.from(e);
        });
      r({ target: "Array", stat: !0, forced: o }, { from: a });
    },
    a640: function (e, t, n) {
      "use strict";
      var r = n("d039");
      e.exports = function (e, t) {
        var n = [][e];
        return (
          !!n &&
          r(function () {
            n.call(
              null,
              t ||
                function () {
                  throw 1;
                },
              1
            );
          })
        );
      };
    },
    a691: function (e, t) {
      var n = Math.ceil,
        r = Math.floor;
      e.exports = function (e) {
        return isNaN((e = +e)) ? 0 : (e > 0 ? r : n)(e);
      };
    },
    a79d: function (e, t, n) {
      "use strict";
      var r = n("23e7"),
        a = n("c430"),
        i = n("fea9"),
        o = n("d039"),
        s = n("d066"),
        c = n("4840"),
        u = n("cdf9"),
        l = n("6eeb"),
        d =
          !!i &&
          o(function () {
            i.prototype["finally"].call(
              { then: function () {} },
              function () {}
            );
          });
      r(
        { target: "Promise", proto: !0, real: !0, forced: d },
        {
          finally: function (e) {
            var t = c(this, s("Promise")),
              n = "function" == typeof e;
            return this.then(
              n
                ? function (n) {
                    return u(t, e()).then(function () {
                      return n;
                    });
                  }
                : e,
              n
                ? function (n) {
                    return u(t, e()).then(function () {
                      throw n;
                    });
                  }
                : e
            );
          },
        }
      ),
        a ||
          "function" != typeof i ||
          i.prototype["finally"] ||
          l(i.prototype, "finally", s("Promise").prototype["finally"]);
    },
    a9e3: function (e, t, n) {
      "use strict";
      var r = n("83ab"),
        a = n("da84"),
        i = n("94ca"),
        o = n("6eeb"),
        s = n("5135"),
        c = n("c6b6"),
        u = n("7156"),
        l = n("c04e"),
        d = n("d039"),
        f = n("7c73"),
        p = n("241c").f,
        v = n("06cf").f,
        m = n("9bf2").f,
        b = n("58a8").trim,
        h = "Number",
        g = a[h],
        y = g.prototype,
        _ = c(f(y)) == h,
        T = function (e) {
          var t,
            n,
            r,
            a,
            i,
            o,
            s,
            c,
            u = l(e, !1);
          if ("string" == typeof u && u.length > 2)
            if (((u = b(u)), (t = u.charCodeAt(0)), 43 === t || 45 === t)) {
              if (((n = u.charCodeAt(2)), 88 === n || 120 === n)) return NaN;
            } else if (48 === t) {
              switch (u.charCodeAt(1)) {
                case 66:
                case 98:
                  (r = 2), (a = 49);
                  break;
                case 79:
                case 111:
                  (r = 8), (a = 55);
                  break;
                default:
                  return +u;
              }
              for (i = u.slice(2), o = i.length, s = 0; s < o; s++)
                if (((c = i.charCodeAt(s)), c < 48 || c > a)) return NaN;
              return parseInt(i, r);
            }
          return +u;
        };
      if (i(h, !g(" 0o1") || !g("0b1") || g("+0x1"))) {
        for (
          var x,
            w = function (e) {
              var t = arguments.length < 1 ? 0 : e,
                n = this;
              return n instanceof w &&
                (_
                  ? d(function () {
                      y.valueOf.call(n);
                    })
                  : c(n) != h)
                ? u(new g(T(t)), n, w)
                : T(t);
            },
            O = r
              ? p(g)
              : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
                  ","
                ),
            k = 0;
          O.length > k;
          k++
        )
          s(g, (x = O[k])) && !s(w, x) && m(w, x, v(g, x));
        (w.prototype = y), (y.constructor = w), o(a, h, w);
      }
    },
    aa41: function (e, t, n) {
      "use strict";
      var r = n("f43f"),
        a = n.n(r);
      a.a;
    },
    aa5d: function (e, t, n) {
      "use strict";
      var r = n("740d");
      n.d(t, "default", function () {
        return r["a"];
      });
      n("226d");
    },
    ab13: function (e, t, n) {
      var r = n("b622"),
        a = r("match");
      e.exports = function (e) {
        var t = /./;
        try {
          "/./"[e](t);
        } catch (n) {
          try {
            return (t[a] = !1), "/./"[e](t);
          } catch (r) {}
        }
        return !1;
      };
    },
    abd6: function (e, t, n) {
      var r = n("1e0e");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("03402558", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    ac1f: function (e, t, n) {
      "use strict";
      var r = n("23e7"),
        a = n("9263");
      r({ target: "RegExp", proto: !0, forced: /./.exec !== a }, { exec: a });
    },
    ad6d: function (e, t, n) {
      "use strict";
      var r = n("825a");
      e.exports = function () {
        var e = r(this),
          t = "";
        return (
          e.global && (t += "g"),
          e.ignoreCase && (t += "i"),
          e.multiline && (t += "m"),
          e.dotAll && (t += "s"),
          e.unicode && (t += "u"),
          e.sticky && (t += "y"),
          t
        );
      };
    },
    ad71: function (e, t, n) {
      "use strict";
      var r = n("56e0"),
        a = n.n(r);
      a.a;
    },
    ade3: function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    ae40: function (e, t, n) {
      var r = n("83ab"),
        a = n("d039"),
        i = n("5135"),
        o = Object.defineProperty,
        s = {},
        c = function (e) {
          throw e;
        };
      e.exports = function (e, t) {
        if (i(s, e)) return s[e];
        t || (t = {});
        var n = [][e],
          u = !!i(t, "ACCESSORS") && t.ACCESSORS,
          l = i(t, 0) ? t[0] : c,
          d = i(t, 1) ? t[1] : void 0;
        return (s[e] =
          !!n &&
          !a(function () {
            if (u && !r) return !0;
            var e = { length: -1 };
            u ? o(e, 1, { enumerable: !0, get: c }) : (e[1] = 1),
              n.call(e, l, d);
          }));
      };
    },
    ae93: function (e, t, n) {
      "use strict";
      var r,
        a,
        i,
        o = n("e163"),
        s = n("9112"),
        c = n("5135"),
        u = n("b622"),
        l = n("c430"),
        d = u("iterator"),
        f = !1,
        p = function () {
          return this;
        };
      [].keys &&
        ((i = [].keys()),
        "next" in i
          ? ((a = o(o(i))), a !== Object.prototype && (r = a))
          : (f = !0)),
        void 0 == r && (r = {}),
        l || c(r, d) || s(r, d, p),
        (e.exports = { IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: f });
    },
    afb1: function (e, t, n) {
      var r = n("8dc7");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("78ea85d4", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    b041: function (e, t, n) {
      "use strict";
      var r = n("00ee"),
        a = n("f5df");
      e.exports = r
        ? {}.toString
        : function () {
            return "[object " + a(this) + "]";
          };
    },
    b0c0: function (e, t, n) {
      var r = n("83ab"),
        a = n("9bf2").f,
        i = Function.prototype,
        o = i.toString,
        s = /^\s*function ([^ (]*)/,
        c = "name";
      r &&
        !(c in i) &&
        a(i, c, {
          configurable: !0,
          get: function () {
            try {
              return o.call(this).match(s)[1];
            } catch (e) {
              return "";
            }
          },
        });
    },
    b1d8: function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          '.team-modify .w400[data-v-231b1a6a]{width:400px}.team-modify[data-v-231b1a6a]  .s-modal_main{width:800px}.team-modify[data-v-231b1a6a]  .s-modal_main .s-modal_body{padding:30px}.team-modify[data-v-231b1a6a]  .s-modal_main .s-modal_body .s-field .form-content>label{display:flex;width:100%}.team-modify[data-v-231b1a6a]  .s-modal_main .s-modal_body .s-field .left{min-width:68px;margin-right:16px}.team-modify[data-v-231b1a6a]  .s-modal_main .s-modal_body .s-field .right{width:100%;flex:1;margin-right:0}.team-modify[data-v-231b1a6a]  .s-modal_main .s-modal_body .s-field .right .s-input.s-input--multiline{height:auto}.team-modify[data-v-231b1a6a]  .s-modal_main .s-modal_body .s-field .right .label-required:before{display:inline-block;content:"*";font-family:SimSun;line-height:1;font-size:.8em;color:#e60000}.team-modify[data-v-231b1a6a]  .s-modal_main .s-modal_body .s-field .right .label-warn{color:#f39000;margin-left:5px}.team-modify[data-v-231b1a6a]  .s-modal_main .s-modal_body .s-field .right .link-disabled{color:#ccc;cursor:not-allowed}.team-modify[data-v-231b1a6a]  .s-modal_main .s-modal_body .s-field .right .plus-icon{vertical-align:-1px;margin-right:5px}.team-modify[data-v-231b1a6a]  .s-modal_main .s-modal_body .s-field.field-block{margin-top:12px}.team-modify[data-v-231b1a6a]  .s-modal_main .s-modal_body .s-field.field-block .left{width:0;min-width:0;margin:0;padding:0}.team-modify[data-v-231b1a6a]  .s-modal_main .s-modal_body .s-field.field-block .right{flex:1;display:flex;flex-direction:column}.team-modify[data-v-231b1a6a]  .s-modal_main .s-modal_body .s-field.field-block .right .float-right{position:absolute;right:0}',
          "",
        ]),
        (e.exports = t);
    },
    b214: function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".team-table .team-table-body[data-v-68cd3680]  .s-table.main-table{border-top:1px solid #eee!important}",
          "",
        ]),
        (e.exports = t);
    },
    b2a7: function (e, t, n) {
      "use strict";
      var r = n("9b4b"),
        a = n.n(r);
      a.a;
    },
    b4e0: function (e, t, n) {
      "use strict";
      var r = n("58c7"),
        a = n.n(r);
      a.a;
    },
    b575: function (e, t, n) {
      var r,
        a,
        i,
        o,
        s,
        c,
        u,
        l,
        d = n("da84"),
        f = n("06cf").f,
        p = n("c6b6"),
        v = n("2cf4").set,
        m = n("1cdc"),
        b = d.MutationObserver || d.WebKitMutationObserver,
        h = d.process,
        g = d.Promise,
        y = "process" == p(h),
        _ = f(d, "queueMicrotask"),
        T = _ && _.value;
      T ||
        ((r = function () {
          var e, t;
          y && (e = h.domain) && e.exit();
          while (a) {
            (t = a.fn), (a = a.next);
            try {
              t();
            } catch (n) {
              throw (a ? o() : (i = void 0), n);
            }
          }
          (i = void 0), e && e.enter();
        }),
        y
          ? (o = function () {
              h.nextTick(r);
            })
          : b && !m
          ? ((s = !0),
            (c = document.createTextNode("")),
            new b(r).observe(c, { characterData: !0 }),
            (o = function () {
              c.data = s = !s;
            }))
          : g && g.resolve
          ? ((u = g.resolve(void 0)),
            (l = u.then),
            (o = function () {
              l.call(u, r);
            }))
          : (o = function () {
              v.call(d, r);
            })),
        (e.exports =
          T ||
          function (e) {
            var t = { fn: e, next: void 0 };
            i && (i.next = t), a || ((a = t), o()), (i = t);
          });
    },
    b622: function (e, t, n) {
      var r = n("da84"),
        a = n("5692"),
        i = n("5135"),
        o = n("90e3"),
        s = n("4930"),
        c = n("fdbf"),
        u = a("wks"),
        l = r.Symbol,
        d = c ? l : (l && l.withoutSetter) || o;
      e.exports = function (e) {
        return (
          i(u, e) || (s && i(l, e) ? (u[e] = l[e]) : (u[e] = d("Symbol." + e))),
          u[e]
        );
      };
    },
    b643: function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".group-cascader[data-v-0eab35a0]{display:inline-block;vertical-align:middle}.group-cascader[data-v-0eab35a0] .cascader{width:100%}.group-cascader .create-item[data-v-0eab35a0]{margin:6px 0}",
          "",
        ]),
        (e.exports = t);
    },
    b64b: function (e, t, n) {
      var r = n("23e7"),
        a = n("7b0b"),
        i = n("df75"),
        o = n("d039"),
        s = o(function () {
          i(1);
        });
      r(
        { target: "Object", stat: !0, forced: s },
        {
          keys: function (e) {
            return i(a(e));
          },
        }
      );
    },
    b680: function (e, t, n) {
      "use strict";
      var r = n("23e7"),
        a = n("a691"),
        i = n("408a"),
        o = n("1148"),
        s = n("d039"),
        c = (1).toFixed,
        u = Math.floor,
        l = function (e, t, n) {
          return 0 === t
            ? n
            : t % 2 === 1
            ? l(e, t - 1, n * e)
            : l(e * e, t / 2, n);
        },
        d = function (e) {
          var t = 0,
            n = e;
          while (n >= 4096) (t += 12), (n /= 4096);
          while (n >= 2) (t += 1), (n /= 2);
          return t;
        },
        f =
          (c &&
            ("0.000" !== (8e-5).toFixed(3) ||
              "1" !== (0.9).toFixed(0) ||
              "1.25" !== (1.255).toFixed(2) ||
              "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0))) ||
          !s(function () {
            c.call({});
          });
      r(
        { target: "Number", proto: !0, forced: f },
        {
          toFixed: function (e) {
            var t,
              n,
              r,
              s,
              c = i(this),
              f = a(e),
              p = [0, 0, 0, 0, 0, 0],
              v = "",
              m = "0",
              b = function (e, t) {
                var n = -1,
                  r = t;
                while (++n < 6)
                  (r += e * p[n]), (p[n] = r % 1e7), (r = u(r / 1e7));
              },
              h = function (e) {
                var t = 6,
                  n = 0;
                while (--t >= 0)
                  (n += p[t]), (p[t] = u(n / e)), (n = (n % e) * 1e7);
              },
              g = function () {
                var e = 6,
                  t = "";
                while (--e >= 0)
                  if ("" !== t || 0 === e || 0 !== p[e]) {
                    var n = String(p[e]);
                    t = "" === t ? n : t + o.call("0", 7 - n.length) + n;
                  }
                return t;
              };
            if (f < 0 || f > 20) throw RangeError("Incorrect fraction digits");
            if (c != c) return "NaN";
            if (c <= -1e21 || c >= 1e21) return String(c);
            if ((c < 0 && ((v = "-"), (c = -c)), c > 1e-21))
              if (
                ((t = d(c * l(2, 69, 1)) - 69),
                (n = t < 0 ? c * l(2, -t, 1) : c / l(2, t, 1)),
                (n *= 4503599627370496),
                (t = 52 - t),
                t > 0)
              ) {
                b(0, n), (r = f);
                while (r >= 7) b(1e7, 0), (r -= 7);
                b(l(10, r, 1), 0), (r = t - 1);
                while (r >= 23) h(1 << 23), (r -= 23);
                h(1 << r), b(1, 1), h(2), (m = g());
              } else b(0, n), b(1 << -t, 0), (m = g() + o.call("0", f));
            return (
              f > 0
                ? ((s = m.length),
                  (m =
                    v +
                    (s <= f
                      ? "0." + o.call("0", f - s) + m
                      : m.slice(0, s - f) + "." + m.slice(s - f))))
                : (m = v + m),
              m
            );
          },
        }
      );
    },
    b727: function (e, t, n) {
      var r = n("0366"),
        a = n("44ad"),
        i = n("7b0b"),
        o = n("50c4"),
        s = n("65f0"),
        c = [].push,
        u = function (e) {
          var t = 1 == e,
            n = 2 == e,
            u = 3 == e,
            l = 4 == e,
            d = 6 == e,
            f = 5 == e || d;
          return function (p, v, m, b) {
            for (
              var h,
                g,
                y = i(p),
                _ = a(y),
                T = r(v, m, 3),
                x = o(_.length),
                w = 0,
                O = b || s,
                k = t ? O(p, x) : n ? O(p, 0) : void 0;
              x > w;
              w++
            )
              if ((f || w in _) && ((h = _[w]), (g = T(h, w, y)), e))
                if (t) k[w] = g;
                else if (g)
                  switch (e) {
                    case 3:
                      return !0;
                    case 5:
                      return h;
                    case 6:
                      return w;
                    case 2:
                      c.call(k, h);
                  }
                else if (l) return !1;
            return d ? -1 : u || l ? l : k;
          };
        };
      e.exports = {
        forEach: u(0),
        map: u(1),
        filter: u(2),
        some: u(3),
        every: u(4),
        find: u(5),
        findIndex: u(6),
      };
    },
    b74e: function (e, t, n) {
      "use strict";
      n.d(t, "e", function () {
        return o;
      }),
        n.d(t, "b", function () {
          return c;
        }),
        n.d(t, "g", function () {
          return u;
        }),
        n.d(t, "d", function () {
          return l;
        }),
        n.d(t, "f", function () {
          return d;
        }),
        n.d(t, "c", function () {
          return f;
        }),
        n.d(t, "a", function () {
          return p;
        });
      n("99af"),
        n("c740"),
        n("4160"),
        n("caad"),
        n("fb6a"),
        n("a9e3"),
        n("c35a"),
        n("b680"),
        n("b64b"),
        n("d3b7"),
        n("4d63"),
        n("ac1f"),
        n("25f0"),
        n("2532"),
        n("466d"),
        n("5319"),
        n("159b"),
        n("96cf");
      var r = n("1da1"),
        a = (n("2841"), n("8bbf")),
        i = n.n(a);
      function o(e) {
        return s.apply(this, arguments);
      }
      function s() {
        return (
          (s = Object(r["a"])(
            regeneratorRuntime.mark(function e(t) {
              var n;
              return regeneratorRuntime.wrap(
                function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.prev = 0), (e.next = 3), t;
                      case 3:
                        return (n = e.sent), e.abrupt("return", [null, n]);
                      case 7:
                        return (
                          (e.prev = 7),
                          (e.t0 = e["catch"](0)),
                          e.abrupt("return", [e.t0])
                        );
                      case 10:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 7]]
              );
            })
          )),
          s.apply(this, arguments)
        );
      }
      function c(e, t) {
        var n = {
            "y+": e.getFullYear(),
            "M+": e.getMonth() + 1,
            "d+": e.getDate(),
            "H+": e.getHours(),
            "h+": e.getHours() - 12,
            "m+": e.getMinutes(),
            "s+": e.getSeconds(),
            "f+": e.getMilliseconds(),
          },
          r = function (e) {
            var r = new RegExp(e, "g");
            t = t.replace(r, function (t) {
              return ("000000" + n[e]).slice(-t.length);
            });
          };
        for (var a in n) r(a);
        return t;
      }
      var u = function (e) {
        var t = Math.floor(e / 3600),
          n = Math.floor((e / 60) % 60),
          r = Math.floor(e % 60);
        return t
          ? t + "时 " + n + "分" + r + "秒"
          : n
          ? n + "分" + r + "秒"
          : r >= 0
          ? r + "秒"
          : "";
      };
      function l(e, t) {
        var n, r, a;
        t &&
          ((null === t ||
          void 0 === t ||
          null === (n = t.message) ||
          void 0 === n
            ? void 0
            : n.field) &&
            e["errors"] &&
            Object.keys(t.message.field).forEach(function (n) {
              var r;
              e["errors"][n] = [
                null === (r = t.message) || void 0 === r ? void 0 : r.field[n],
              ];
            }),
          (null === t ||
          void 0 === t ||
          null === (r = t.message) ||
          void 0 === r
            ? void 0
            : r.field) ||
            (null === (a = t.message) || void 0 === a ? void 0 : a.global) ||
            i.a.prototype.$toast.fail("网络异常，请稍后再试"));
      }
      function d(e) {
        if (e) {
          var t = document.getElementById("iframe-download");
          if (t) t.setAttribute("src", e);
          else {
            var n = document.createElement("iframe");
            n.setAttribute("id", "iframe-download"),
              (n.style.display = "none"),
              document.body.appendChild(n),
              (n.src = e);
          }
        }
      }
      function f() {
        var e;
        return null === (e = window.SP.COMBINE_PLATFORM) || void 0 === e
          ? void 0
          : e.includes("datahouse");
      }
      function p(e, t, n) {
        return t > n ? n : e < t ? t : e > n ? n : e;
      }
    },
    b7a0: function (e, t, n) {
      "use strict";
      var r = n("f37e"),
        a = n.n(r);
      a.a;
    },
    baa5: function (e, t, n) {
      var r = n("23e7"),
        a = n("e58c");
      r(
        { target: "Array", proto: !0, forced: a !== [].lastIndexOf },
        { lastIndexOf: a }
      );
    },
    bb2f: function (e, t, n) {
      var r = n("d039");
      e.exports = !r(function () {
        return Object.isExtensible(Object.preventExtensions({}));
      });
    },
    bbaf: function (e, t, n) {
      e.exports = n.p + "img/empty.685a912a.png";
    },
    bbbd: function (e, t) {},
    bdaf: function (e, t, n) {
      "use strict";
      var r = n("1977"),
        a = n.n(r);
      a.a;
    },
    bdc5: function (e, t, n) {
      var r = n("3a5e");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("2f8e2ed2", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    be0f: function (e, t, n) {
      "use strict";
      var r = n("d6ab");
      n.d(t, "getTeamService", function () {
        return r["a"];
      });
      var a = n("9130");
      n.o(a, "CreateTaskDto") &&
        n.d(t, "CreateTaskDto", function () {
          return a["CreateTaskDto"];
        });
      n("6e9b");
    },
    be6b: function (e, t) {},
    bea3: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return u;
      }),
        n.d(t, "b", function () {
          return l;
        });
      var r = n("262e"),
        a = n("2caf"),
        i = n("d4ec"),
        o = n("f619"),
        s = n("0456"),
        c = function e() {
          Object(i["a"])(this, e),
            (this.teamId = 0),
            (this.distributeType = 1),
            (this.distributeCount = 0),
            (this.isAudit = !1),
            (this.auditPercentage = 20);
        },
        u = (function (e) {
          Object(r["a"])(n, e);
          var t = Object(a["a"])(n);
          function n() {
            var e;
            return (
              Object(i["a"])(this, n),
              (e = t.apply(this, arguments)),
              (e.taskId = 0),
              e
            );
          }
          return n;
        })(c),
        l = (function (e) {
          Object(r["a"])(n, e);
          var t = Object(a["a"])(n);
          function n() {
            var e;
            return (
              Object(i["a"])(this, n),
              (e = t.apply(this, arguments)),
              (e.taskName = ""),
              (e.sourceDatasetId = void 0),
              (e.destCreateType = 1),
              (e.distributeDataType = 1),
              (e.startTime = +new Date()),
              (e.endTime = +new Date(+new Date() + 864e6)),
              (e.role = [o["EAnnoRoles"].VIEW_ANNO]),
              (e.assignType = 0),
              (e.datasourceType = o["EDatasourceType"].DATASET),
              (e.entityRelationList = []),
              (e.interannoType = o["EInterannoType"].DISABLE_INTERANNO),
              (e.source = void 0),
              (e.modelId = void 0),
              (e.threshold = void 0),
              (e.resource = void 0),
              e
            );
          }
          return n;
        })(c);
      s["a"];
    },
    bee2: function (e, t, n) {
      "use strict";
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function a(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e;
      }
      n.d(t, "a", function () {
        return a;
      });
    },
    c04e: function (e, t, n) {
      var r = n("861d");
      e.exports = function (e, t) {
        if (!r(e)) return e;
        var n, a;
        if (t && "function" == typeof (n = e.toString) && !r((a = n.call(e))))
          return a;
        if ("function" == typeof (n = e.valueOf) && !r((a = n.call(e))))
          return a;
        if (!t && "function" == typeof (n = e.toString) && !r((a = n.call(e))))
          return a;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    c17c: function (e, t, n) {
      var r = n("a493");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("b34b4a04", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    c2a2: function (e, t, n) {
      "use strict";
      var r = n("0371"),
        a = n.n(r);
      a.a;
    },
    c2ce: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      });
      var r = n("5530"),
        a = n("d4ec"),
        i = n("262e"),
        o = n("2caf"),
        s = n("9ab4"),
        c = n("2841"),
        u = c["env"].usePlatform(),
        l = c["env"].usePlatformEnv(),
        d = (function (e) {
          Object(i["a"])(n, e);
          var t = Object(o["a"])(n);
          function n() {
            var e;
            return (
              Object(a["a"])(this, n),
              (e = t.apply(this, arguments)),
              (e.state = Object(r["a"])(
                { platform: u, platformEnv: l },
                c["env"]
              )),
              e
            );
          }
          return n;
        })(c["svc"].ServiceBase);
      d = Object(s["a"])([c["svc"].ServiceDecorator], d);
    },
    c2e6: function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".task-empty-placeholder[data-v-c7ddfbb8]{text-align:center;padding-top:87px}.task-empty-placeholder img[data-v-c7ddfbb8]{width:136px}.task-empty-placeholder .empty-content[data-v-c7ddfbb8]{margin:36px 0 20px}",
          "",
        ]),
        (e.exports = t);
    },
    c35a: function (e, t, n) {
      var r = n("23e7"),
        a = n("7e12");
      r(
        { target: "Number", stat: !0, forced: Number.parseFloat != a },
        { parseFloat: a }
      );
    },
    c430: function (e, t) {
      e.exports = !1;
    },
    c43d: function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".finish-modal[data-v-22151c08]  .s-modal_main{min-width:400px}.finish-modal .modal-body[data-v-22151c08]{display:flex}.finish-modal .modal-body .body-icon[data-v-22151c08]{margin-top:5px;font-size:2em;color:#f59000}.finish-modal .modal-body .body-content[data-v-22151c08]{flex:1;margin-left:20px}.finish-modal .modal-body .body-content .modal-radio[data-v-22151c08],.finish-modal .modal-body .body-content .modal-tip[data-v-22151c08]{margin:15px 0}.finish-modal .modal-body .body-content .modal-radio[data-v-22151c08]  .s-radio-group{display:inline-block}",
          "",
        ]),
        (e.exports = t);
    },
    c471: function (e, t, n) {
      "use strict";
      var r = n("20e7"),
        a = n.n(r);
      a.a;
    },
    c535: function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".team-table[data-v-766d7d63]  .s-table td,.team-table[data-v-766d7d63]  .s-table th{padding:12px 20px 12px}.team-table[data-v-766d7d63]  .s-table th{white-space:nowrap}.team-table[data-v-766d7d63]  .s-table .team-table-body thead tr{border-right-color:var(--cxd-bg-light,#f6f7fb);border-left-color:var(--cxd-bg-light,#f6f7fb)}.team-table[data-v-766d7d63]  .s-table tr>td:last-child{width:160px}.team-table .team-table-header[data-v-766d7d63]{padding:16px 13px;font-size:14px;line-height:16px;color:#000;border-bottom:1px solid #eee;background-color:var(--cxd-bg-light,#f6f7fb)}.team-table .team-table-header .header-info+.header-info[data-v-766d7d63]{margin-left:20px}.team-table .pager-wrap[data-v-766d7d63]{margin-top:45px;text-align:right}",
          "",
        ]),
        (e.exports = t);
    },
    c599: function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".task-detail-modal[data-v-13c12dc1]  .s-modal_body{padding:24px}.task-detail-modal[data-v-13c12dc1]  .s-modal_body .main-wrap{width:756px;max-height:510px;overflow-y:auto}.task-detail-modal[data-v-13c12dc1]  .s-modal_body .main-wrap .section-item{margin-top:24px}.task-detail-modal[data-v-13c12dc1]  .s-modal_body .main-wrap .section-item:first-child{margin-top:0}.task-detail-modal[data-v-13c12dc1]  .s-modal_body .main-wrap .section-title{font-size:16px;padding:0;margin:0}.task-detail-modal[data-v-13c12dc1]  .s-modal_body .main-wrap .section-main .info-list{padding:0;margin:0;display:flex;flex-wrap:wrap;font-size:12px}.task-detail-modal[data-v-13c12dc1]  .s-modal_body .main-wrap .section-main .info-list-item{display:flex;flex-direction:row;align-items:center;width:352px;margin-top:16px}.task-detail-modal[data-v-13c12dc1]  .s-modal_body .main-wrap .section-main .info-list-item:nth-child(2){flex:1 calc(100% - 352px)}.task-detail-modal[data-v-13c12dc1]  .s-modal_body .main-wrap .section-main .info-list-item .label{width:92px;color:#151b26}.task-detail-modal[data-v-13c12dc1]  .s-modal_body .main-wrap .section-main .info-list-item .content{color:#151b26;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.task-detail-modal[data-v-13c12dc1]  .s-modal_body .main-wrap li{list-style:none;padding:0;margin:0}.task-detail-modal[data-v-13c12dc1]  .s-modal_body .main-wrap .item{flex:0 0 100%;margin:12px 0;display:flex;flex-direction:row;align-items:center}.task-detail-modal[data-v-13c12dc1]  .s-modal_body .main-wrap .item .label{width:120px;color:#666;text-align:right;padding-right:20px;align-self:flex-start}.task-detail-modal[data-v-13c12dc1]  .s-modal_body .main-wrap .item .content{flex:1}.task-detail-modal[data-v-13c12dc1]  .s-modal_body .main-wrap .item .content.link-blue{color:#1a73e8}",
          "",
        ]),
        (e.exports = t);
    },
    c6b6: function (e, t) {
      var n = {}.toString;
      e.exports = function (e) {
        return n.call(e).slice(8, -1);
      };
    },
    c6cd: function (e, t, n) {
      var r = n("da84"),
        a = n("ce4e"),
        i = "__core-js_shared__",
        o = r[i] || a(i, {});
      e.exports = o;
    },
    c740: function (e, t, n) {
      "use strict";
      var r = n("23e7"),
        a = n("b727").findIndex,
        i = n("44d2"),
        o = n("ae40"),
        s = "findIndex",
        c = !0,
        u = o(s);
      s in [] &&
        Array(1)[s](function () {
          c = !1;
        }),
        r(
          { target: "Array", proto: !0, forced: c || !u },
          {
            findIndex: function (e) {
              return a(this, e, arguments.length > 1 ? arguments[1] : void 0);
            },
          }
        ),
        i(s);
    },
    c796: function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".team-tab-group[data-v-8417ffe0]{border-bottom:1px solid #eee;margin-bottom:24px}",
          "",
        ]),
        (e.exports = t);
    },
    c7d4: function (e, t, n) {
      var r = n("04fa");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("5a296a45", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    c873: function (e, t, n) {
      "use strict";
      var r = n("2841");
      n.d(t, "a", function () {
        return r["http"];
      });
    },
    c89d: function (e, t, n) {
      "use strict";
      var r = n("2e03"),
        a = n.n(r);
      a.a;
    },
    c8ba: function (e, t) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (r) {
        "object" === typeof window && (n = window);
      }
      e.exports = n;
    },
    c8d2: function (e, t, n) {
      var r = n("d039"),
        a = n("5899"),
        i = "​᠎";
      e.exports = function (e) {
        return r(function () {
          return !!a[e]() || i[e]() != i || a[e].name !== e;
        });
      };
    },
    c95e: function (e, t, n) {
      "use strict";
      var r = n("47a9"),
        a = n.n(r);
      a.a;
    },
    c975: function (e, t, n) {
      "use strict";
      var r = n("23e7"),
        a = n("4d64").indexOf,
        i = n("a640"),
        o = n("ae40"),
        s = [].indexOf,
        c = !!s && 1 / [1].indexOf(1, -0) < 0,
        u = i("indexOf"),
        l = o("indexOf", { ACCESSORS: !0, 1: 0 });
      r(
        { target: "Array", proto: !0, forced: c || !u || !l },
        {
          indexOf: function (e) {
            return c
              ? s.apply(this, arguments) || 0
              : a(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      );
    },
    ca84: function (e, t, n) {
      var r = n("5135"),
        a = n("fc6a"),
        i = n("4d64").indexOf,
        o = n("d012");
      e.exports = function (e, t) {
        var n,
          s = a(e),
          c = 0,
          u = [];
        for (n in s) !r(o, n) && r(s, n) && u.push(n);
        while (t.length > c) r(s, (n = t[c++])) && (~i(u, n) || u.push(n));
        return u;
      };
    },
    caad: function (e, t, n) {
      "use strict";
      var r = n("23e7"),
        a = n("4d64").includes,
        i = n("44d2"),
        o = n("ae40"),
        s = o("indexOf", { ACCESSORS: !0, 1: 0 });
      r(
        { target: "Array", proto: !0, forced: !s },
        {
          includes: function (e) {
            return a(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      ),
        i("includes");
    },
    cb04: function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".kpi-table .kpi-title[data-v-04aa8fc6]{font-size:14px;line-height:22px;font-weight:500}.kpi-table .kpi-total-info[data-v-04aa8fc6]{border:1px solid #eee;width:100%;height:94px;display:flex;justify-content:space-between;padding:20px 10px;margin:12px 0 24px}.kpi-table .kpi-total-info .total-item[data-v-04aa8fc6]{font-size:14px;position:relative}.kpi-table .kpi-total-info .total-item .item-title[data-v-04aa8fc6]{line-height:24px;font-weight:500;font-size:16px;color:#333;margin-bottom:8px;text-align:center}.kpi-table .kpi-total-info .total-item .item-label[data-v-04aa8fc6]{color:#666}.kpi-table .kpi-total-info .vertical-line[data-v-04aa8fc6]{width:1px;height:52px;border-left:1px solid #eee}.kpi-table .kpi-table-body[data-v-04aa8fc6]{margin-top:16px}",
          "",
        ]),
        (e.exports = t);
    },
    cb87: function (e, t, n) {
      var r = n("d5f6");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("e62394ce", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    cb91: function (e, t, n) {
      "use strict";
      var r = n("a03b"),
        a = n.n(r);
      a.a;
    },
    cb9a: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      });
      n("99af"), n("96cf");
      var r = n("1da1"),
        a = n("d4ec"),
        i = n("262e"),
        o = n("2caf"),
        s = n("9ab4"),
        c = n("2841"),
        u = n("c873"),
        l = (function (e) {
          Object(i["a"])(n, e);
          var t = Object(o["a"])(n);
          function n() {
            var e;
            return (
              Object(a["a"])(this, n),
              (e = t.apply(this, arguments)),
              (e.state = {
                loading: !1,
                memberList: [],
                nomore: !1,
                pageOptions: { offset: 0, pageSize: 20 },
              }),
              (e.fetchMemberList = Object(r["a"])(
                regeneratorRuntime.mark(function t() {
                  var n, r, a;
                  return regeneratorRuntime.wrap(
                    function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (((t.prev = 0), !e.state.nomore)) {
                              t.next = 3;
                              break;
                            }
                            return t.abrupt("return");
                          case 3:
                            return (
                              (e.state.loading = !0),
                              (t.next = 6),
                              e.fetchMember(e.state.pageOptions).catch()
                            );
                          case 6:
                            (n = t.sent),
                              (r = n.items),
                              (a = void 0 === r ? [] : r),
                              null === a && (a = []),
                              (e.state.pageOptions.offset += a.length),
                              e.state.pageOptions.offset >= n.total &&
                                (e.state.nomore = !0),
                              (e.state.memberList =
                                e.state.memberList.concat(a));
                          case 12:
                            return (
                              (t.prev = 12),
                              (e.state.loading = !1),
                              t.finish(12)
                            );
                          case 15:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[0, , 12, 15]]
                  );
                })
              )),
              (e.fetchMember = (function () {
                var e = Object(r["a"])(
                  regeneratorRuntime.mark(function e(t) {
                    return regeneratorRuntime.wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return e.abrupt(
                              "return",
                              u["a"].fetch("bml/getuserlist", t)
                            );
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              e
            );
          }
          return n;
        })(c["svc"].ServiceBase);
      l = Object(s["a"])([c["svc"].ServiceDecorator], l);
    },
    cc12: function (e, t, n) {
      var r = n("da84"),
        a = n("861d"),
        i = r.document,
        o = a(i) && a(i.createElement);
      e.exports = function (e) {
        return o ? i.createElement(e) : {};
      };
    },
    cca6: function (e, t, n) {
      var r = n("23e7"),
        a = n("60da");
      r(
        { target: "Object", stat: !0, forced: Object.assign !== a },
        { assign: a }
      );
    },
    cd49: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "useService", function () {
          return i["useService"];
        }),
        n.d(t, "enums", function () {
          return o;
        }),
        n.d(t, "routes", function () {
          return $i;
        });
      n("e260"), n("e6cf"), n("cca6"), n("a79d"), n("2fb4");
      var r = n("fc16"),
        a = n("2841"),
        i = n("08ba"),
        o = n("f619"),
        s = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "WorkspaceLayout",
            { attrs: { showHeader: !e.fullScreen } },
            [n("div", { staticClass: "afe-app-mulan" }, [n("router-view")], 1)]
          );
        },
        c = [],
        u = n("8165"),
        l = Object(u["defineComponent"])({
          layout: "custom",
          components: { WorkspaceLayout: a["WorkspaceLayout"] },
          setup: function () {
            var e = a["utils"].useVM();
            return {
              fullScreen: Object(u["computed"])(function () {
                return e.$store.state.fullScreen;
              }),
            };
          },
        }),
        d = l,
        f = n("2877"),
        p = Object(f["a"])(d, s, c, !1, null, null, null),
        v = p.exports,
        m = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "page-task-list" },
            [
              e.tab.noPermission
                ? n(
                    "the-alert",
                    {
                      staticStyle: { "margin-bottom": "30px" },
                      attrs: { type: "warn" },
                    },
                    [
                      n("span", [
                        e._v("您没有操作多人标注模块权限，请联系管理员开通！"),
                      ]),
                    ]
                  )
                : [
                    e.hasLogin
                      ? e._e()
                      : n(
                          "the-alert",
                          {
                            staticStyle: { "margin-bottom": "30px" },
                            attrs: { type: "warn" },
                          },
                          [
                            n("span", [
                              e._v(
                                "当前为游客身份登陆，只能操作“多人标注-我接收的任务”页面，想体验更多功能，请"
                              ),
                            ]),
                            n(
                              "a",
                              {
                                staticClass: "link-blue",
                                staticStyle: { margin: "0 10px" },
                                attrs: { href: e.loginUrl },
                              },
                              [e._v("登录/注册")]
                            ),
                            n("span", [e._v("账号")]),
                          ]
                        ),
                    e.showProcess
                      ? n(
                          "Portal",
                          { attrs: { to: "top-right" } },
                          [n("RoleChange")],
                          1
                        )
                      : e._e(),
                    n("GuideTop"),
                    n(
                      "eg-alert",
                      {
                        staticStyle: { "margin-bottom": "10px" },
                        attrs: {
                          filled: "",
                          closable: !1,
                          type: "warning",
                          "has-icon": !1,
                        },
                      },
                      [
                        e._v(
                          " EasyData将于近期迁入百度智能云控制台，迁移后多人标注任务仅可分发给百度智能云子账号。请您在迁移前完成通过邮箱分发的多人标注任务，否则平台将自动终止您名下所有未完成的多人标注任务，敬请谅解。 "
                        ),
                      ]
                    ),
                    e.showProcess
                      ? n("CtlBar", {
                          attrs: { hasLogin: e.hasLogin },
                          on: {
                            createTask: e.handleCreateTask,
                            manageTeam: e.handleManageTeam,
                          },
                        })
                      : n(
                          "div",
                          { staticClass: "ctl-bar ctlb-cloud" },
                          [
                            n(
                              "the-tab-group",
                              {
                                attrs: { disabled: !e.hasLogin },
                                model: {
                                  value: e.tstate.tab,
                                  callback: function (t) {
                                    e.$set(e.tstate, "tab", t);
                                  },
                                  expression: "tstate.tab",
                                },
                              },
                              e._l(e.tab.list, function (t, r) {
                                return n(
                                  "the-tab",
                                  { key: r, attrs: { value: t.id } },
                                  [e._v(" " + e._s(t.label) + " ")]
                                );
                              }),
                              1
                            ),
                            n(
                              "div",
                              { staticClass: "btn-wrap" },
                              [
                                n(
                                  "the-button",
                                  {
                                    directives: [
                                      {
                                        name: "permission",
                                        rawName: "v-permission",
                                        value: "write",
                                        expression: "'write'",
                                      },
                                    ],
                                    attrs: { disabled: !e.hasLogin },
                                    on: { click: e.handleCreateTask },
                                  },
                                  [e._v("创建多人标注任务")]
                                ),
                                n(
                                  "the-button",
                                  {
                                    directives: [
                                      {
                                        name: "permission",
                                        rawName: "v-permission",
                                        value: "write",
                                        expression: "'write'",
                                      },
                                    ],
                                    staticStyle: { "margin-left": "16px" },
                                    attrs: { disabled: !e.hasLogin },
                                    on: { click: e.handleManageTeam },
                                  },
                                  [e._v(" 管理多人标注团队 ")]
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                    e.tab.showSubTabs
                      ? [
                          n(
                            "the-button-group",
                            {
                              model: {
                                value: e.tstate.subTaskTab,
                                callback: function (t) {
                                  e.$set(e.tstate, "subTaskTab", t);
                                },
                                expression: "tstate.subTaskTab",
                              },
                            },
                            e._l(e.tab.subTabs, function (t, r) {
                              return n(
                                "the-button-tab",
                                { key: r, attrs: { value: t.id } },
                                [e._v(" " + e._s(t.label) + " ")]
                              );
                            }),
                            1
                          ),
                          n("br"),
                        ]
                      : e._e(),
                    e.tstate.loading && !e.tstate.taskList.total
                      ? n("the-loading", { staticClass: "task-list-loading" })
                      : [
                          n(e.state.taskTable, {
                            directives: [
                              {
                                name: "loading",
                                rawName: "v-loading",
                                value: e.tstate.loading,
                                expression: "tstate.loading",
                              },
                            ],
                            tag: "component",
                            attrs: {
                              source: e.tstate.taskList.items,
                              subTaskType: e.tstate.subTaskTab,
                            },
                            on: {
                              refresh: e.handlePageChange,
                              createTask: e.handleCreateTask,
                            },
                          }),
                          n(
                            "div",
                            { staticClass: "pager-wrap" },
                            [
                              n(
                                "the-paginator",
                                e._b(
                                  {
                                    attrs: { total: e.tstate.taskList.total },
                                    on: { change: e.handlePageChange },
                                  },
                                  "the-paginator",
                                  e.tstate.pageOptions,
                                  !1
                                )
                              ),
                            ],
                            1
                          ),
                        ],
                  ],
            ],
            2
          );
        },
        b = [],
        h = (n("96cf"), n("1da1")),
        g = function () {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return e.cstate.showGuide
            ? r(
                "GuideCollapse",
                {
                  staticClass: "guide-top",
                  attrs: {
                    header: "多人标注",
                    height: 220,
                    desc: e.cstate.stepDatas.step1,
                  },
                  model: {
                    value: e.state.guideVisible,
                    callback: function (t) {
                      e.$set(e.state, "guideVisible", t);
                    },
                    expression: "state.guideVisible",
                  },
                },
                [
                  r("div", { staticClass: "guide-main" }, [
                    r("div", { staticClass: "guide-item" }, [
                      r("img", {
                        staticClass: "gi-img",
                        attrs: { src: e.cstate.stepDatas.img1 },
                      }),
                      r("div", { staticClass: "item-main" }, [
                        r("div", { staticClass: "im-title" }, [
                          e._v(e._s(e.cstate.stepDatas.title1)),
                        ]),
                        r("div", { staticClass: "im-content" }, [
                          e._v(" " + e._s(e.cstate.stepDatas.step1) + " "),
                        ]),
                      ]),
                    ]),
                    r("img", {
                      staticClass: "guide-split",
                      attrs: { src: n("7e78") },
                    }),
                    r("div", { staticClass: "guide-item" }, [
                      r("img", {
                        staticClass: "gi-img",
                        attrs: { src: e.cstate.stepDatas.img2 },
                      }),
                      r("div", { staticClass: "item-main" }, [
                        r("div", { staticClass: "im-title" }, [
                          e._v(e._s(e.cstate.stepDatas.title2)),
                        ]),
                        r("div", { staticClass: "im-content" }, [
                          e._v(" " + e._s(e.cstate.stepDatas.step2) + " "),
                        ]),
                      ]),
                    ]),
                    r("img", {
                      staticClass: "guide-split",
                      attrs: { src: n("7e78") },
                    }),
                    r("div", { staticClass: "guide-item" }, [
                      r("img", {
                        staticClass: "gi-img",
                        attrs: { src: e.cstate.stepDatas.img3 },
                      }),
                      r("div", { staticClass: "item-main" }, [
                        r("div", { staticClass: "im-title" }, [
                          e._v(e._s(e.cstate.stepDatas.title3)),
                        ]),
                        r("div", { staticClass: "im-content" }, [
                          e._v(" " + e._s(e.cstate.stepDatas.step3) + " "),
                        ]),
                      ]),
                    ]),
                  ]),
                ]
              )
            : e._e();
        },
        y = [],
        _ = n("ade3"),
        T = n("8d2c"),
        x = window.SP["TEAMANNO_MEMBER_MAXCOUNT"] || 50,
        w = Object(u["defineComponent"])({
          components: { GuideCollapse: T["GuideCollapse"] },
          setup: function () {
            var e,
              t =
                ((e = {}),
                Object(_["a"])(e, o["EProcessRoleType"].CREATOR, {
                  title1: "1.创建多人标注任务",
                  title2: "2.分配多人标注任务",
                  title3: "3.验收多人标注任务",
                  step1: "选择某个数据集版本，设定标注标签后，创建多人标注任务",
                  step2:
                    "根据情况选择任务的分配方式，可选择“直接分配”或“交由标注管理方分配”",
                  step3:
                    "任务被分配之后，您可在表格右侧的操作列“查看进度”，待执行人员完成任务后您可“验收任务”",
                  img1: n("f938"),
                  img2: n("2a8f"),
                  img3: n("95b1"),
                }),
                Object(_["a"])(e, o["EProcessRoleType"].MANAGER, {
                  title1: "1.分配多人标注任务",
                  title2: "2.选择标注团队",
                  title3: "3.分发多人标注任务",
                  step1:
                    "下方表格展示了待您分配的任务，请点击表格右侧的操作分配任务。",
                  step2: "选择标注团队，配置审核流程，同时可管理团队成员",
                  step3:
                    "系统将标注任务随机均等分配给团队成员，并可在查看进度页面实时监控成员标注进度",
                  img1: n("6c50"),
                  img2: n("621d"),
                  img3: n("9096"),
                }),
                Object(_["a"])(e, "normal", {
                  title1: "选择数据集版本",
                  title2: "选择标注团队",
                  title3: "标注任务分发",
                  step1:
                    "您只可选择由您创建的、此时未被共享、清洗、标注的数据集版本，并提前设定数据集版本的标注标签，任务过程中标注标签不支持增删改查",
                  step2:
                    "您可以通过添加团队成员邮箱的方式自定义标注团队成员，一个标注团队成员上限".concat(
                      x,
                      "人"
                    ),
                  step3:
                    " 选定标注团队后系统将根据任务总数随机分配个人任务，以链接方式发送到团队成员邮箱",
                  img1: n("5b66"),
                  img2: n("049d"),
                  img3: n("0322"),
                }),
                e),
              r = Object(i["useService"])(),
              a = r.roleService,
              s = r.envService,
              c = Object(u["reactive"])({ guideVisible: !1 }),
              l = Object(u["reactive"])({
                showGuide: Object(u["computed"])(function () {
                  return a.state.currentRole !== o["EProcessRoleType"].RECEIVER;
                }),
                stepDatas: Object(u["computed"])(function () {
                  var e = s.state.isCloud ? "normal" : a.state.currentRole;
                  return t[e] || t["normal"];
                }),
              });
            return { cstate: l, state: c };
          },
        }),
        O = w,
        k = (n("1862"), Object(f["a"])(O, g, y, !1, null, "09a41720", null)),
        E = k.exports,
        j = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "the-table",
            {
              staticClass: "team-task-table",
              attrs: { source: e.cstate.formattedSource },
            },
            [
              n(
                "the-column",
                {
                  attrs: {
                    render: function (e) {
                      return e.taskId;
                    },
                  },
                },
                [e._v("任务ID")]
              ),
              n(
                "the-column",
                {
                  scopedSlots: e._u([
                    {
                      key: "render",
                      fn: function (e) {
                        var t = e.row;
                        return [n("RenderText", { attrs: { text: t.name } })];
                      },
                    },
                  ]),
                },
                [e._v("任务名称 ")]
              ),
              e.deployedWithDatahouse
                ? n(
                    "the-column",
                    {
                      attrs: {
                        render: function (t) {
                          return e.EDatasourceType.getLabelById(
                            t.datasourceType
                          );
                        },
                      },
                    },
                    [e._v("数据来源")]
                  )
                : e._e(),
              e.deployedWithDatahouse
                ? n(
                    "the-column",
                    {
                      attrs: {
                        render: function (e) {
                          return e.sourceDatasetId;
                        },
                      },
                    },
                    [e._v("标注数据ID")]
                  )
                : n(
                    "the-column",
                    {
                      attrs: {
                        render: function (e) {
                          return e.sourceDatasetId;
                        },
                      },
                    },
                    [e._v("数据集ID")]
                  ),
              e.deployedWithDatahouse
                ? n(
                    "the-column",
                    {
                      attrs: {
                        render: function (e) {
                          return e.dataName;
                        },
                      },
                    },
                    [e._v("标注数据名称")]
                  )
                : n(
                    "the-column",
                    {
                      attrs: {
                        render: function (e) {
                          return e.dataName;
                        },
                      },
                    },
                    [e._v("来源数据集")]
                  ),
              n(
                "the-column",
                {
                  attrs: {
                    render: function (t) {
                      return (
                        e.EProjectType &&
                        e.EProjectType.getLabelById(t.projectType)
                      );
                    },
                  },
                },
                [
                  n(
                    "div",
                    { staticClass: "filter-col" },
                    [
                      e._v(" 标注类型 "),
                      e.cstate.showFilter
                        ? n("TableFilter", {
                            key: "projectType",
                            attrs: {
                              treeItems: e.state.projectTypeData,
                              selectedVal: e.state.filter.projectType,
                            },
                            on: {
                              refresh: function (t) {
                                return e.$emit("refresh");
                              },
                              changeValue: function (t) {
                                return (e.state.filter.projectType = t);
                              },
                            },
                          })
                        : e._e(),
                    ],
                    1
                  ),
                ]
              ),
              n(
                "the-column",
                {
                  scopedSlots: e._u([
                    {
                      key: "render",
                      fn: function (e) {
                        var t = e.row;
                        return [n("RenderStatus", { attrs: { task: t } })];
                      },
                    },
                  ]),
                },
                [
                  n(
                    "div",
                    { staticClass: "filter-col" },
                    [
                      e._v(" 任务状态 "),
                      e.cstate.showStatusFilter
                        ? n("TableFilter", {
                            key: "status",
                            attrs: {
                              items: e.cstate.statusData,
                              selectedVal: e.state.filter.status,
                            },
                            on: {
                              refresh: function (t) {
                                return e.$emit("refresh");
                              },
                              changeValue: function (t) {
                                return (e.state.filter.status = t);
                              },
                            },
                          })
                        : e._e(),
                    ],
                    1
                  ),
                ]
              ),
              e.cstate.showAssignType
                ? n(
                    "the-column",
                    {
                      attrs: {
                        render: function (t) {
                          return e.EProcessAssignType.getLabelById(
                            t.assignType
                          );
                        },
                      },
                    },
                    [
                      n(
                        "div",
                        { staticClass: "filter-col" },
                        [
                          e._v(" 分配方式 "),
                          e.cstate.showFilter
                            ? n("TableFilter", {
                                key: "assignType",
                                attrs: {
                                  items: e.cstate.assignTypeData,
                                  selectedVal: e.state.filter.assignType,
                                },
                                on: {
                                  refresh: function (t) {
                                    return e.$emit("refresh");
                                  },
                                  changeValue: function (t) {
                                    return (e.state.filter.assignType = t);
                                  },
                                },
                              })
                            : e._e(),
                        ],
                        1
                      ),
                    ]
                  )
                : e._e(),
              n(
                "the-column",
                {
                  attrs: {
                    render: function (e) {
                      return e.createTime;
                    },
                  },
                },
                [e._v("创建时间")]
              ),
              n(
                "the-column",
                {
                  scopedSlots: e._u([
                    {
                      key: "render",
                      fn: function (t) {
                        var r = t.row;
                        return [
                          n("RenderCtl", {
                            attrs: { task: r },
                            on: {
                              refresh: function (t) {
                                return e.$emit("refresh");
                              },
                            },
                          }),
                        ];
                      },
                    },
                  ]),
                },
                [e._v(" 操作 ")]
              ),
              n("EmptyTable", {
                attrs: { slot: "empty-placeholder" },
                on: {
                  createTask: function (t) {
                    return e.$emit("createTask");
                  },
                },
                slot: "empty-placeholder",
              }),
            ],
            1
          );
        },
        C = [],
        S = (n("4de4"), n("d81d"), n("5530")),
        A = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "render-ctl" },
            [
              e._l(e.state.ctlList, function (t, r) {
                return [
                  t.visible
                    ? n(
                        "span",
                        {
                          directives: [
                            {
                              name: "permission",
                              rawName: "v-permission",
                              value: t.permission,
                              expression: "item.permission",
                            },
                          ],
                          key: r,
                          staticClass: "link-blue",
                          on: { click: t.click },
                        },
                        [e._v(" " + e._s(t.label) + " ")]
                      )
                    : e._e(),
                ];
              }),
            ],
            2
          );
        },
        I = [],
        N = (n("ac1f"), n("2909")),
        R =
          (n("a623"),
          n("4160"),
          n("13d5"),
          n("45fc"),
          n("4fad"),
          n("b64b"),
          n("159b"),
          n("3835")),
        D = n("d4ec"),
        M = n("bee2"),
        L = n("53ca"),
        P = Object.keys,
        U = function (e) {
          return "object" !== Object(L["a"])(e)
            ? {
                eq: function (t) {
                  return e === t;
                },
                value: e,
              }
            : "eq" in e
            ? { eq: e.eq.bind(e), value: e }
            : {
                eq: function (t) {
                  return P(t).every(function (n) {
                    return t[n] === e[n];
                  });
                },
                value: e,
              };
        },
        $ = (function () {
          function e(t) {
            Object(D["a"])(this, e), (this.rules = t);
          }
          return (
            Object(M["a"])(e, [
              {
                key: "getKeys",
                value: function () {
                  return Object.keys(this.rules);
                },
              },
              {
                key: "exec",
                value: function (e) {
                  var t = this,
                    n = {},
                    r = U(e);
                  return (
                    this.getKeys().forEach(function (e) {
                      n[e] = t.rules[e](r);
                    }),
                    n
                  );
                },
              },
              {
                key: "report",
                value: function () {
                  for (
                    var e = this.getKeys(),
                      t = arguments.length,
                      n = new Array(t),
                      r = 0;
                    r < t;
                    r++
                  )
                    n[r] = arguments[r];
                  var a = n.map(this.exec.bind(this)).map(function (e) {
                    return Object.entries(e).reduce(function (e, t) {
                      var n = Object(R["a"])(t, 2),
                        r = n[0],
                        a = n[1];
                      return Object(S["a"])(
                        Object(S["a"])({}, e),
                        {},
                        Object(_["a"])({}, r, a ? "✓" : "✖")
                      );
                    }, {});
                  });
                  console.table(a, e);
                },
              },
            ]),
            e
          );
        })();
      function B(e) {
        return new $(e);
      }
      var z = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return function (e) {
            return t.some(e.eq);
          };
        },
        V = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return function (e) {
            return t.reduce(function (t, n) {
              return t || n(e);
            }, !1);
          };
        },
        F = function (e) {
          return function (t) {
            return e(t.value);
          };
        },
        q = B({
          detail: F(function () {
            return !0;
          }),
          view: V.apply(
            void 0,
            Object(N["a"])(
              [
                o["EAnnoStatus"].TO_ANNOTATE,
                o["EAnnoStatus"].IN_ANNOTATE,
                o["EAnnoStatus"].FINISH,
              ].map(function (e) {
                return function (t) {
                  return t.value === e;
                };
              })
            )
          ),
          check: z(o["EAnnoStatus"].FINISH, o["EAnnoStatus"].STOP),
          stop: V.apply(
            void 0,
            Object(N["a"])(
              [o["EAnnoStatus"].TO_ANNOTATE, o["EAnnoStatus"].IN_ANNOTATE].map(
                function (e) {
                  return function (t) {
                    return t.value === e;
                  };
                }
              )
            )
          ),
          delete: F(function () {
            return !0;
          }),
          toDataset: F(function (e) {
            return e === o["EAnnoStatus"].CHECK_ACCEPT;
          }),
          assign: F(function (e) {
            return e === o["EAnnoStatus"].END_ANNO_WITH;
          }),
        });
      function G(e) {
        return q.exec(e);
      }
      var W = n("f24d"),
        K = n("81fe"),
        H = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "the-modal",
            { ref: "modal", staticClass: "task-detail-modal" },
            [
              n("template", { slot: "head" }, [e._v("任务详情")]),
              n("template", { slot: "body" }, [
                n(
                  "div",
                  { staticClass: "main-wrap" },
                  e._l(e.cstate.infoList, function (t, r) {
                    return n("div", { key: r, staticClass: "section-item" }, [
                      n("h2", { staticClass: "section-title" }, [
                        e._v(e._s(t.title)),
                      ]),
                      n("div", { staticClass: "section-main" }, [
                        n(
                          "ul",
                          { staticClass: "info-list" },
                          e._l(t.items, function (t, r) {
                            return n(
                              "li",
                              { key: r, staticClass: "info-list-item" },
                              [
                                n("span", { staticClass: "label" }, [
                                  e._v(e._s(t[0])),
                                ]),
                                [
                                  t[2]
                                    ? n(
                                        "span",
                                        {
                                          class: [
                                            "content",
                                            {
                                              "link-blue":
                                                e.cstate.isCheckAccept,
                                            },
                                          ],
                                          on: { click: e.handleDatasetClick },
                                        },
                                        [e._v(e._s(t[1]))]
                                      )
                                    : n(
                                        "span",
                                        { staticClass: "content" },
                                        [
                                          t[1] && t[1].vueCom
                                            ? n(
                                                t[1].vueCom,
                                                e._g(
                                                  e._b(
                                                    { tag: "component" },
                                                    "component",
                                                    t[1].vueProps,
                                                    !1
                                                  ),
                                                  t[1].vueEvent
                                                )
                                              )
                                            : n("span", [e._v(e._s(t[1]))]),
                                        ],
                                        1
                                      ),
                                ],
                                t[2] ? n("span", [e._v(e._s(t[2]))]) : e._e(),
                              ],
                              2
                            );
                          }),
                          0
                        ),
                      ]),
                    ]);
                  }),
                  0
                ),
              ]),
              n(
                "template",
                { slot: "foot" },
                [n("the-button", { on: { click: e.close } }, [e._v("关闭")])],
                1
              ),
            ],
            2
          );
        },
        X = [],
        Q =
          (n("99af"),
          n("a15b"),
          n("b0c0"),
          function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t;
            return n(
              "div",
              { staticClass: "end-date" },
              [
                n("span", [e._v(e._s(e.timeStr))]),
                e.canEdit
                  ? n(
                      "the-icon-tip",
                      {
                        staticClass: "edit-tip link-blue",
                        attrs: { name: "edit", placement: "bottom" },
                      },
                      [
                        n("the-date", {
                          attrs: {
                            value: +new Date(e.timeStr),
                            since: +new Date(),
                            until: 0,
                          },
                          on: { change: e.handleChange },
                        }),
                      ],
                      1
                    )
                  : e._e(),
              ],
              1
            );
          }),
        Y = [],
        Z = n("b74e"),
        J = Object(u["defineComponent"])({
          props: { item: { required: !0, type: Object } },
          setup: function (e, t) {
            var n = t.emit,
              r = Object(u["ref"])(e.item.endTime),
              a = Object(i["useService"])().taskService;
            function s(e) {
              return c.apply(this, arguments);
            }
            function c() {
              return (
                (c = Object(h["a"])(
                  regeneratorRuntime.mark(function t(i) {
                    var o;
                    return regeneratorRuntime.wrap(function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (o = Object(Z["b"])(
                                new Date(new Date(i).setHours(23, 59, 59, 999)),
                                "yyyy-MM-dd HH:mm:ss"
                              )),
                              (t.next = 3),
                              a.updateEndTime({
                                taskId: e.item.taskId,
                                endTime: o,
                              })
                            );
                          case 3:
                            n("refresh"), (r.value = o);
                          case 5:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )),
                c.apply(this, arguments)
              );
            }
            var l = Object(u["computed"])(function () {
              return (
                [o["EAnnoStatus"].ABORT, o["EAnnoStatus"].CHECK_ACCEPT].every(
                  function (t) {
                    return t !== e.item.annoStatus;
                  }
                ) && new Date(e.item.endTime) > new Date()
              );
            });
            return { timeStr: r, handleChange: s, canEdit: l };
          },
        }),
        ee = J,
        te = (n("0f7b"), Object(f["a"])(ee, Q, Y, !1, null, "34f14f6a", null)),
        ne = te.exports,
        re = n("599d");
      function ae(e, t, n) {
        var r,
          a = null === (r = e.value) || void 0 === r ? void 0 : r.enums;
        return a
          ? a.EProjectType.getLabelById(t) +
              "-" +
              a.ETemplateType.getLabelById(n)
          : "";
      }
      function ie(e) {
        return (
          (~~((e.distributeCount * e.auditPercentage) / 100) || 1) +
          "*" +
          (~~(e.taskNum / e.auditMembersNum) || "1") +
          "个"
        );
      }
      var oe = Object(u["defineComponent"])({
          props: { item: { required: !0, type: Object } },
          setup: function (e, t) {
            var n = a["utils"].useVM(),
              r = Object(u["ref"])(null),
              i = Object(re["b"])(),
              s = Object(u["reactive"])({
                isCheckAccept: Object(u["computed"])(function () {
                  return e.item.annoStatus === o["EAnnoStatus"].CHECK_ACCEPT;
                }),
                sourceDatasetName: Object(u["computed"])(function () {
                  var t = e.item,
                    n = t.sourceDatasetgroupName;
                  return (
                    t.sourceDatasetVersion &&
                      (n = "".concat(n, " V").concat(t.sourceDatasetVersion)),
                    n
                  );
                }),
                destDatasetName: Object(u["computed"])(function () {
                  var t = e.item,
                    n = t.sourceDatasetgroupName;
                  return (
                    t.destDatasetVersion &&
                      (n = "".concat(n, " V").concat(t.destDatasetVersion)),
                    n
                  );
                }),
                destDatasetType: Object(u["computed"])(function () {
                  var t = e.item;
                  return t.destDatasetId === t.sourceDatasetId
                    ? "（覆盖已有版本）"
                    : "（新增版本）";
                }),
                annotatedDatasetText: Object(u["computed"])(function () {
                  return s.destDatasetName + s.destDatasetType;
                }),
                infoList: Object(u["computed"])(function () {
                  var n,
                    r,
                    a,
                    c = e.item,
                    u =
                      c.interannoType === o["EInterannoType"].ENABLE_INTERANNO,
                    l = [
                      {
                        title: "基本信息",
                        items: [
                          ["任务名称:", c.name],
                          ["待标注数据集:", s.sourceDatasetName],
                          [
                            "分配数据类型:",
                            o["EAnnoType"].getLabelById(c.distributeDataType),
                          ],
                          ["任务开始时间:", c.startTime],
                          [
                            "任务截止时间",
                            {
                              vueCom: ne,
                              vueProps: { item: c },
                              vueEvent: {
                                refresh: function () {
                                  t.emit("refresh");
                                },
                              },
                            },
                          ],
                        ].concat(
                          Object(N["a"])(
                            c.annoStatus === o["EAnnoStatus"].CHECK_ACCEPT
                              ? [["任务完成时间", c.finishTime]]
                              : []
                          ),
                          Object(N["a"])(
                            s.isDataHouse
                              ? [
                                  [
                                    "标注模版",
                                    ae(i, c.projectType, c.templateType),
                                  ],
                                  [
                                    "设置标签",
                                    c.content.batchLabels
                                      .map(function (e) {
                                        return e.name;
                                      })
                                      .join("、"),
                                  ],
                                ]
                              : []
                          )
                        ),
                      },
                      {
                        title: "任务分配信息",
                        items: [
                          ["任务分配信息:", "均分"],
                          ["标注团队名称:", c.teamName],
                          ["每人标注数量:", c.distributeCount],
                          [
                            "成员权限范围:",
                            c.role
                              .map(function (e) {
                                return o["EAnnoRoles"].getLabelById(e);
                              })
                              .join("、"),
                          ],
                        ].concat(
                          Object(N["a"])(
                            c.isAudit
                              ? [
                                  ["是否审核:", c.isAudit ? "是" : "否"],
                                  ["审核团队名称:", c.auditTeamName],
                                  ["抽检比例:", c.auditPercentage + "%"],
                                  ["每人审核数量", ie(c)],
                                ]
                              : []
                          ),
                          [
                            ["任务截止时间:", c.endTime],
                            [
                              "标注完数据集:",
                              s.destDatasetName,
                              s.destDatasetType,
                            ],
                          ]
                        ),
                      },
                      {
                        title: "智能标注信息",
                        items: [
                          ["开启智能标注：", u ? "开启" : "未开启"],
                        ].concat(
                          Object(N["a"])(
                            u
                              ? [
                                  [
                                    "服务来源:",
                                    o["EServiceSourceType"].getLabelById(
                                      null === (n = c.content) || void 0 === n
                                        ? void 0
                                        : n.source
                                    ),
                                  ],
                                  [
                                    "模型服务:",
                                    null === (r = c.content) || void 0 === r
                                      ? void 0
                                      : r.modelName,
                                  ],
                                  [
                                    "置信度阈值:",
                                    null === (a = c.content) || void 0 === a
                                      ? void 0
                                      : a.threshold,
                                  ],
                                ]
                              : []
                          )
                        ),
                      },
                    ];
                  return l;
                }),
              });
            function c() {
              r.value.close();
            }
            function l() {
              s.isCheckAccept &&
                (c(),
                t.root.$router.push({
                  path: Object(K["b"])(
                    "/dataset/".concat(
                      e.item.destDatasetId,
                      "/entities?annotationType=1"
                    ),
                    n
                  ),
                }));
            }
            return { modal: r, cstate: s, close: c, handleDatasetClick: l };
          },
        }),
        se = oe,
        ce = (n("0254"), Object(f["a"])(se, H, X, !1, null, "13c12dc1", null)),
        ue = ce.exports,
        le = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "the-modal",
            { ref: "modal", staticClass: "finish-modal" },
            [
              n("template", { slot: "head" }, [e._v("终止任务")]),
              n("template", { slot: "body" }, [
                n(
                  "div",
                  { staticClass: "modal-body" },
                  [
                    n("the-icon", {
                      staticClass: "body-icon",
                      attrs: { name: "warning" },
                    }),
                    n("div", { staticClass: "body-content" }, [
                      n("p", { staticClass: "modal-tip" }, [
                        e._v("终止后所有成员不可再进入标注页面"),
                      ]),
                      n(
                        "p",
                        { staticClass: "modal-radio" },
                        [
                          e._v(" 已标注内容是否生效： "),
                          n(
                            "the-radio-group",
                            {
                              model: {
                                value: e.state.deleteAnno,
                                callback: function (t) {
                                  e.$set(e.state, "deleteAnno", t);
                                },
                                expression: "state.deleteAnno",
                              },
                            },
                            [
                              n("the-radio", { attrs: { value: 0 } }, [
                                e._v("是"),
                              ]),
                              n("the-radio", { attrs: { value: 1 } }, [
                                e._v("否"),
                              ]),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ]),
                  ],
                  1
                ),
              ]),
              n(
                "template",
                { slot: "foot" },
                [
                  n("the-button", { on: { click: e.submit } }, [e._v("确定")]),
                  n(
                    "the-button",
                    { staticClass: "hollow", on: { click: e.close } },
                    [e._v("取消")]
                  ),
                ],
                1
              ),
            ],
            2
          );
        },
        de = [],
        fe = Object(u["defineComponent"])({
          props: { task: { required: !0, type: Object } },
          setup: function (e, t) {
            var n = Object(u["ref"])(null),
              r = Object(W["useToast"])(),
              a = r.succeed,
              o = Object(i["useService"])(),
              s = o.taskService;
            function c() {
              n.value.close();
            }
            var l = Object(u["reactive"])({ deleteAnno: 0 });
            function d() {
              return f.apply(this, arguments);
            }
            function f() {
              return (
                (f = Object(h["a"])(
                  regeneratorRuntime.mark(function n() {
                    var r, i, o;
                    return regeneratorRuntime.wrap(function (n) {
                      while (1)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.next = 2),
                              Object(Z["e"])(
                                s.terminateTask({
                                  taskId: e.task.taskId,
                                  deleteAnno: l.deleteAnno,
                                })
                              )
                            );
                          case 2:
                            if (
                              ((r = n.sent),
                              (i = Object(R["a"])(r, 1)),
                              (o = i[0]),
                              !o)
                            ) {
                              n.next = 7;
                              break;
                            }
                            return n.abrupt("return");
                          case 7:
                            a("终止任务成功"), t.emit("refresh"), c();
                          case 10:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                  })
                )),
                f.apply(this, arguments)
              );
            }
            return { state: l, modal: n, close: c, submit: d };
          },
        }),
        pe = fe,
        ve =
          (n("e201"), Object(f["a"])(pe, le, de, !1, null, "22151c08", null)),
        me = ve.exports,
        be = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "the-modal",
            {
              ref: "modal",
              staticClass: "assign-modal",
              attrs: { static: !0 },
            },
            [
              n("template", { slot: "head" }, [e._v("分配任务")]),
              n(
                "template",
                { slot: "body" },
                [
                  n(
                    "the-form",
                    {
                      ref: "form",
                      attrs: { rules: e.state.rules, errors: e.state.errors },
                      on: {
                        "update:errors": function (t) {
                          return e.$set(e.state, "errors", t);
                        },
                      },
                    },
                    [
                      n("AssignTeam", {
                        attrs: {
                          "anno-left": e.annoLeft,
                          "team-id": e.state.form.teamId,
                          "is-audit": e.state.form.isAudit,
                          "audit-team-id": e.state.form.auditTeamId,
                          "audit-percentage": e.state.form.auditPercentage,
                          "distribute-count": e.state.form.distributeCount,
                        },
                        on: {
                          "update:teamId": function (t) {
                            return e.$set(e.state.form, "teamId", t);
                          },
                          "update:team-id": function (t) {
                            return e.$set(e.state.form, "teamId", t);
                          },
                          "update:isAudit": function (t) {
                            return e.$set(e.state.form, "isAudit", t);
                          },
                          "update:is-audit": function (t) {
                            return e.$set(e.state.form, "isAudit", t);
                          },
                          "update:auditTeamId": function (t) {
                            return e.$set(e.state.form, "auditTeamId", t);
                          },
                          "update:audit-team-id": function (t) {
                            return e.$set(e.state.form, "auditTeamId", t);
                          },
                          "update:auditPercentage": function (t) {
                            return e.$set(e.state.form, "auditPercentage", t);
                          },
                          "update:audit-percentage": function (t) {
                            return e.$set(e.state.form, "auditPercentage", t);
                          },
                          "update:distributeCount": function (t) {
                            return e.$set(e.state.form, "distributeCount", t);
                          },
                          "update:distribute-count": function (t) {
                            return e.$set(e.state.form, "distributeCount", t);
                          },
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              n(
                "template",
                { slot: "foot" },
                [
                  n(
                    "the-button",
                    {
                      attrs: { loading: e.state.submitting },
                      on: { click: e.submit },
                    },
                    [e._v("确定")]
                  ),
                  n(
                    "the-button",
                    { staticClass: "hollow", on: { click: e.close } },
                    [e._v("取消")]
                  ),
                ],
                1
              ),
            ],
            2
          );
        },
        he = [],
        ge = n("52e1"),
        ye = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "assign-team" },
            [
              n(
                "the-field",
                {
                  attrs: {
                    name: "teamId",
                    label: "选择标注团队",
                    error: e.errState.annoErr,
                    required: "",
                  },
                },
                [
                  n("TeamList", {
                    attrs: {
                      err: e.errState.annoErr,
                      teamId: e.teamId,
                      teamType: e.ETeamTypes.ANNOTATE,
                    },
                    on: {
                      "update:err": function (t) {
                        return e.$set(e.errState, "annoErr", t);
                      },
                      change: function (t) {
                        return e.$emit("update:teamId", t);
                      },
                      changeTeam: function (t) {
                        return (e.tState.annoTeam = t);
                      },
                    },
                  }),
                ],
                1
              ),
              n("the-field", { attrs: { label: "每人标注数量" } }, [
                n("div", [
                  n("span", [
                    e._v(e._s(e.tState.eachEntityCount || "-") + "个"),
                  ]),
                  n("span", { staticClass: "water" }, [
                    e._v(" " + e._s(e.tState.annoDesc) + " "),
                  ]),
                ]),
              ]),
              n(
                "the-field",
                { attrs: { label: "是否审核", required: "" } },
                [
                  n(
                    "eg-radio-group",
                    {
                      attrs: { "model-value": e.isAudit },
                      on: {
                        "update:modelValue": function (t) {
                          return e.$emit("update:isAudit", t);
                        },
                      },
                    },
                    [
                      n("eg-radio", { attrs: { label: !0 } }, [e._v("是")]),
                      n("eg-radio", { attrs: { label: !1 } }, [e._v("否")]),
                    ],
                    1
                  ),
                ],
                1
              ),
              e.isAudit
                ? [
                    n(
                      "the-field",
                      {
                        attrs: {
                          name: "auditTeamId",
                          label: "选择审核团队",
                          error: e.errState.auditErr,
                          required: "",
                        },
                      },
                      [
                        n("TeamList", {
                          attrs: {
                            err: e.errState.auditErr,
                            teamId: e.auditTeamId,
                            teamType: e.ETeamTypes.APPROVE,
                          },
                          on: {
                            "update:err": function (t) {
                              return e.$set(e.errState, "auditErr", t);
                            },
                            change: function (t) {
                              return e.$emit("update:auditTeamId", t);
                            },
                            changeTeam: function (t) {
                              return (e.tState.auditTeam = t);
                            },
                          },
                        }),
                      ],
                      1
                    ),
                    n(
                      "the-field",
                      {
                        attrs: { label: "抽检比例", required: "", noLabel: "" },
                      },
                      [
                        n("eg-input-number", {
                          attrs: {
                            min: 1,
                            max: 100,
                            "model-value": e.auditPercentage,
                            "controls-position": "right",
                          },
                          on: {
                            "update:modelValue": function (t) {
                              return e.$emit("update:auditPercentage", t);
                            },
                          },
                        }),
                        n("span", { staticClass: "audit-input-postfix" }, [
                          e._v("%"),
                        ]),
                      ],
                      1
                    ),
                    n("the-field", { attrs: { label: "每人审核数量" } }, [
                      e._v(" " + e._s(e.tState.auditPerCount || "-") + "个 "),
                      n("span", { staticClass: "water" }, [
                        e._v(" " + e._s(e.tState.auditDesc) + " "),
                      ]),
                    ]),
                  ]
                : e._e(),
            ],
            2
          );
        },
        _e = [],
        Te =
          (n("a9e3"),
          function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t;
            return n(
              "div",
              { staticClass: "team-list" },
              [
                n(
                  "the-dropdown",
                  {
                    staticClass: "w400",
                    attrs: { disabled: e.state.loading },
                    model: {
                      value: e.localTeamId,
                      callback: function (t) {
                        e.localTeamId = t;
                      },
                      expression: "localTeamId",
                    },
                  },
                  e._l(e.state.list, function (t, r) {
                    return n(
                      "the-dropdown-item",
                      { key: r, attrs: { value: t.teamId } },
                      [e._v(" " + e._s(t.name) + " ")]
                    );
                  }),
                  1
                ),
                e.localTeamId
                  ? n(
                      "the-link",
                      {
                        directives: [
                          {
                            name: "permission",
                            rawName: "v-permission",
                            value: "write",
                            expression: "'write'",
                          },
                        ],
                        staticClass: "link-blue",
                        on: {
                          click: function (t) {
                            return e.showTeamModifyModal(e.teamType);
                          },
                        },
                      },
                      [e._v(" 管理团队 ")]
                    )
                  : e._e(),
                n(
                  "the-link",
                  {
                    directives: [
                      {
                        name: "permission",
                        rawName: "v-permission",
                        value: "write",
                        expression: "'write'",
                      },
                    ],
                    staticClass: "link-blue",
                    on: {
                      click: function (t) {
                        return e.showTeamModifyModal(e.teamType, !0);
                      },
                    },
                  },
                  [e._v(" 创建团队 ")]
                ),
              ],
              1
            );
          }),
        xe = [],
        we =
          (n("7db0"),
          function () {
            var e = this,
              t = e.$createElement,
              r = e._self._c || t;
            return r(
              "the-modal",
              {
                ref: "modal",
                staticClass: "team-modify",
                attrs: { static: !0 },
              },
              [
                r("template", { slot: "head" }, [
                  e._v(e._s(e.state.isCreate ? "创建团队" : "管理团队")),
                ]),
                r(
                  "template",
                  { slot: "body" },
                  [
                    r(
                      "the-form",
                      {
                        directives: [
                          {
                            name: "loading",
                            rawName: "v-loading",
                            value: e.tState.loading,
                            expression: "tState.loading",
                          },
                        ],
                        ref: "form",
                        staticClass: "team-save-form",
                        attrs: { rules: e.state.rules, errors: e.state.errors },
                        on: {
                          "update:errors": function (t) {
                            return e.$set(e.state, "errors", t);
                          },
                        },
                      },
                      [
                        r(
                          "the-field",
                          { attrs: { name: "teamType", label: "团队类型" } },
                          [
                            r(
                              "the-radio-group",
                              {
                                model: {
                                  value: e.tState.teamInfo.teamType,
                                  callback: function (t) {
                                    e.$set(e.tState.teamInfo, "teamType", t);
                                  },
                                  expression: "tState.teamInfo.teamType",
                                },
                              },
                              e._l(e.state.teamTypes, function (t) {
                                return r(
                                  "the-radio",
                                  {
                                    key: t.id,
                                    attrs: {
                                      disabled: !e.state.isCreate,
                                      value: t.id,
                                    },
                                  },
                                  [e._v(" " + e._s(t.label) + " ")]
                                );
                              }),
                              1
                            ),
                          ],
                          1
                        ),
                        r(
                          "the-field",
                          {
                            attrs: {
                              name: "name",
                              label: "团队名称",
                              required: "",
                            },
                          },
                          [
                            r("the-input", {
                              staticClass: "w400",
                              attrs: {
                                placeholder:
                                  "上限20字，支持中、英文、数字、下划线、中划线，支持二次修改",
                              },
                              model: {
                                value: e.tState.teamInfo.name,
                                callback: function (t) {
                                  e.$set(e.tState.teamInfo, "name", t);
                                },
                                expression: "tState.teamInfo.name",
                              },
                            }),
                          ],
                          1
                        ),
                        r(
                          "the-field",
                          { attrs: { name: "remark", label: "团队描述" } },
                          [
                            r("the-input", {
                              staticClass: "w400",
                              attrs: {
                                placeholder: "请填写团队描述，50字内",
                                max: 50,
                                rows: 2,
                                multiline: "",
                              },
                              model: {
                                value: e.tState.teamInfo.remark,
                                callback: function (t) {
                                  e.$set(e.tState.teamInfo, "remark", t);
                                },
                                expression: "tState.teamInfo.remark",
                              },
                            }),
                          ],
                          1
                        ),
                        r(
                          "the-field",
                          {
                            staticClass: "field-block",
                            attrs: { name: "members" },
                          },
                          [
                            r("the-input", {
                              attrs: { type: "hidden" },
                              model: {
                                value: e.cState.editMembers.length,
                                callback: function (t) {
                                  e.$set(e.cState.editMembers, "length", t);
                                },
                                expression: "cState.editMembers.length",
                              },
                            }),
                            r("span", { staticClass: "label-required" }, [
                              e._v(
                                e._s(
                                  " 团队成员（" +
                                    e.cState.teamMemberNum +
                                    "/" +
                                    e.state.maxMemberNum +
                                    "）"
                                )
                              ),
                            ]),
                            e.cState.isOverMaxNum
                              ? r("span", { staticClass: "label-warn" }, [
                                  e._v("已达上限"),
                                ])
                              : e._e(),
                            r(
                              "span",
                              {
                                staticClass: "link-blue float-right",
                                class: {
                                  "link-disabled":
                                    e.cState.isOverMaxNum ||
                                    e.cState.hasCreatingTask,
                                },
                                on: { click: e.handleNewMemClick },
                              },
                              [
                                e.cState.isOverMaxNum ||
                                e.cState.hasCreatingTask
                                  ? r("img", {
                                      staticClass: "plus-icon",
                                      attrs: { src: n("e1d2") },
                                    })
                                  : r("img", {
                                      staticClass: "plus-icon",
                                      attrs: { src: n("10c9") },
                                    }),
                                e._v(" 添加成员 "),
                              ]
                            ),
                            e.cState.hasCreatingTask
                              ? r(
                                  "the-alert",
                                  {
                                    staticStyle: { "margin-top": "10px" },
                                    attrs: { type: "warn" },
                                  },
                                  [
                                    e._v(
                                      "团队存在创建中的标注任务，不可更改成员"
                                    ),
                                  ]
                                )
                              : e._e(),
                            r("MemberList", {
                              attrs: { disabled: e.cState.hasCreatingTask },
                              on: { change: e.handleMemberChange },
                              model: {
                                value: e.cState.editMembers,
                                callback: function (t) {
                                  e.$set(e.cState, "editMembers", t);
                                },
                                expression: "cState.editMembers",
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
                ),
                r(
                  "template",
                  { slot: "foot" },
                  [
                    r(
                      "the-button",
                      {
                        attrs: {
                          loading: e.tState.loading,
                          disabled: e.cState.submitDisabled,
                        },
                        on: { click: e.handleSureClick },
                      },
                      [e._v("确认")]
                    ),
                    r(
                      "the-button",
                      { staticClass: "secondary", on: { click: e.close } },
                      [e._v("取消")]
                    ),
                  ],
                  1
                ),
              ],
              2
            );
          }),
        Oe = [],
        ke = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("div", { staticClass: "member-list" }, [
            n("div", { staticClass: "head" }, [
              n("div", { staticClass: "line" }, [
                n("div", { staticClass: "line-item email" }, [
                  e._v(e._s(e.p2c("成员用户名"))),
                ]),
                n("div", { staticClass: "line-item remark" }, [e._v("备注")]),
                e.isCloud
                  ? e._e()
                  : n("div", { staticClass: "line-item status" }, [
                      e._v("状态"),
                    ]),
                e.disabled
                  ? e._e()
                  : n("div", { staticClass: "line-item ctl" }, [e._v("操作")]),
              ]),
            ]),
            e.cState.showEmpty
              ? n("div", { staticClass: "member-empty" }, [e._v("暂无成员")])
              : n(
                  "div",
                  { staticClass: "body" },
                  e._l(e.value, function (t, r) {
                    return n(
                      "div",
                      {
                        key: t.id || t.newIndex,
                        staticClass: "line",
                        class: { "line-edit": t.isEdit },
                      },
                      [
                        n("MemberItem", {
                          attrs: { index: r, item: t, disabled: e.disabled },
                          on: {
                            sure: e.handleSureClick,
                            delete: function (t) {
                              return e.handleDeleteClick(r);
                            },
                          },
                        }),
                      ],
                      1
                    );
                  }),
                  0
                ),
          ]);
        },
        Ee = [],
        je =
          (n("a434"),
          function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t;
            return n(
              "the-form",
              {
                ref: "form",
                staticClass: "member-item",
                attrs: { rules: e.cState.rules, errors: e.state.errors },
                on: {
                  "update:errors": function (t) {
                    return e.$set(e.state, "errors", t);
                  },
                },
              },
              [
                n(
                  "div",
                  { staticClass: "line-item email" },
                  [
                    e.item.isEdit
                      ? e.isCloud
                        ? n(
                            "the-field",
                            {
                              attrs: {
                                name: "email-" + e.item.newIndex,
                                required: "",
                              },
                            },
                            [
                              n("the-input", {
                                attrs: { placeholder: "请输入邮箱" },
                                model: {
                                  value: e.item.email,
                                  callback: function (t) {
                                    e.$set(e.item, "email", t);
                                  },
                                  expression: "item.email",
                                },
                              }),
                            ],
                            1
                          )
                        : n(
                            "the-field",
                            { attrs: { name: "email-" + e.item.newIndex } },
                            [
                              n("MemberDropDown", {
                                staticClass: "member-dropdown",
                                on: { change: e.handleMemberChange },
                                model: {
                                  value: e.item.userId,
                                  callback: function (t) {
                                    e.$set(e.item, "userId", t);
                                  },
                                  expression: "item.userId",
                                },
                              }),
                            ],
                            1
                          )
                      : n(
                          "span",
                          {
                            staticClass: "line-item-content",
                            attrs: { title: e.item.name || e.item.email },
                          },
                          [
                            n(
                              "the-text-tip",
                              { attrs: { text: e.item.name || e.item.email } },
                              [
                                e._v(
                                  " " + e._s(e.item.name || e.item.email) + " "
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                  ],
                  1
                ),
                n(
                  "div",
                  { staticClass: "line-item remark" },
                  [
                    e.item.isEdit
                      ? n(
                          "the-field",
                          {
                            attrs: {
                              name: "remark-" + (e.item.id || e.item.newIndex),
                            },
                          },
                          [
                            n("the-input", {
                              attrs: { placeholder: "长度不超过20字" },
                              model: {
                                value: e.item.remark,
                                callback: function (t) {
                                  e.$set(e.item, "remark", t);
                                },
                                expression: "item.remark",
                              },
                            }),
                          ],
                          1
                        )
                      : n("InlineEditor", {
                          staticClass: "remark-editor",
                          attrs: {
                            icon: "edit",
                            save: e.handleUpdateRemark,
                            rule: e.cState.rules[
                              "remark-" + (e.item.id || e.item.newIndex)
                            ],
                          },
                          model: {
                            value: e.item.remark,
                            callback: function (t) {
                              e.$set(e.item, "remark", t);
                            },
                            expression: "item.remark",
                          },
                        }),
                  ],
                  1
                ),
                e.isCloud
                  ? e._e()
                  : n(
                      "div",
                      { staticClass: "line-item status" },
                      [n("StatusRender", { attrs: { status: e.item.status } })],
                      1
                    ),
                e.disabled
                  ? e._e()
                  : n("div", { staticClass: "line-item ctl" }, [
                      e.item.isEdit
                        ? n(
                            "span",
                            {
                              staticClass: "link-blue",
                              on: { click: e.handleSureClick },
                            },
                            [e._v("确定")]
                          )
                        : e._e(),
                      n(
                        "span",
                        {
                          staticClass: "link-blue",
                          on: {
                            click: function (t) {
                              return e.$emit("delete");
                            },
                          },
                        },
                        [e._v("删除")]
                      ),
                    ]),
              ]
            );
          }),
        Ce = [],
        Se =
          (n("caad"),
          n("d3b7"),
          n("2532"),
          function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t;
            return n(
              "div",
              { staticClass: "member-dropdown" },
              [
                n("the-input", {
                  staticStyle: { display: "none" },
                  model: {
                    value: e.userId,
                    callback: function (t) {
                      e.userId = t;
                    },
                    expression: "userId",
                  },
                }),
                n(
                  "eg-select",
                  {
                    directives: [
                      {
                        name: "scrollload",
                        rawName: "v-scrollload",
                        value: e.loadMore,
                        expression: "loadMore",
                      },
                    ],
                    attrs: {
                      "popper-class": "cus-popper",
                      "model-value": e.userId,
                      "no-data-text": "暂无成员",
                      "scroll-dom": ".eg-select-dropdown__wrap",
                    },
                    on: {
                      "update:modelValue": function (t) {
                        e.userId = t;
                      },
                      "update:model-value": function (t) {
                        e.userId = t;
                      },
                    },
                  },
                  e._l(e.memberList, function (t) {
                    return n(
                      "eg-option",
                      {
                        key: t.userId,
                        attrs: {
                          value: t.userId,
                          label: t.name,
                          disabled: t.disabled,
                        },
                      },
                      [
                        t.tip
                          ? n(
                              "eg-tooltip",
                              {
                                attrs: {
                                  content: t.tip,
                                  effect: "light",
                                  placement: "right",
                                },
                              },
                              [
                                n("span", { staticClass: "member-name" }, [
                                  e._v(e._s(t.name)),
                                ]),
                              ]
                            )
                          : [e._v(e._s(t.name))],
                      ],
                      2
                    );
                  }),
                  1
                ),
              ],
              1
            );
          }),
        Ae = [],
        Ie = Object(u["defineComponent"])({
          model: { prop: "value", event: "change" },
          props: { value: { type: String, default: "" } },
          setup: function (e, t) {
            var n = t.emit,
              r = Object(u["computed"])({
                get: function () {
                  return e.value;
                },
                set: function (e) {
                  return n("change", e);
                },
              }),
              a = Object(i["useService"])(),
              s = a.bmlMemberService,
              c = a.teamService;
            s.reset();
            var l = s.fetchMemberList,
              d = Object(u["computed"])(function () {
                return s.state.loading;
              }),
              f = Object(u["computed"])(function () {
                return s.state.memberList.map(function (e) {
                  var t,
                    n = e.status === o["EUserStatus"].CLOSING,
                    r = n
                      ? "账号已" + o["EUserStatus"].getLabelById(e.status)
                      : "",
                    a =
                      null === (t = c.info.state.teamInfo.members) ||
                      void 0 === t
                        ? void 0
                        : t.some(function (t) {
                            return t.userId === e.userId;
                          }),
                    i = a ? "已存在重复的成员" : "";
                  return Object(S["a"])(
                    Object(S["a"])({}, e),
                    {},
                    { disabled: n || a, tip: r || i }
                  );
                });
              });
            return (
              Object(u["onMounted"])(function () {
                s.fetchMemberList();
              }),
              { loadMore: l, userId: r, memberList: f, loading: d }
            );
          },
        }),
        Ne = Ie,
        Re =
          (n("1faa"), Object(f["a"])(Ne, Se, Ae, !1, null, "5915813e", null)),
        De = Re.exports,
        Me = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return e.item
            ? n("div", { staticClass: "status-render" }, [
                n("div", {
                  staticClass: "color",
                  style: { "background-color": e.item.color },
                }),
                n("div", { staticClass: "text" }, [e._v(e._s(e.item.label))]),
              ])
            : e._e();
        },
        Le = [],
        Pe = Object(u["defineComponent"])({
          props: { status: { required: !0, type: Number } },
          setup: function (e) {
            return {
              item: Object(u["computed"])(function () {
                return o["EMemberStatus"].getItemById(e.status);
              }),
            };
          },
        }),
        Ue = Pe,
        $e = (n("ad71"), Object(f["a"])(Ue, Me, Le, !1, null, null, null)),
        Be = $e.exports,
        ze = Object(u["defineComponent"])({
          components: {
            MemberDropDown: De,
            InlineEditor: T["InlineEditor"],
            StatusRender: Be,
          },
          props: {
            item: { type: Object, required: !0 },
            index: { type: Number, required: !0 },
            disabled: { type: Boolean, default: !1, required: !1 },
          },
          setup: function (e, t) {
            var n = t.emit,
              r = e.item,
              a = Object(W["useToast"])(),
              o = a.fail,
              s = Object(i["useService"])(),
              c = s.envService,
              l = s.teamService,
              d = s.bmlMemberService,
              f = c.state.isCloud,
              p = Object(u["reactive"])({ errors: {} }),
              v = Object(u["ref"])(null),
              m = Object(u["reactive"])({
                rules: Object(u["computed"])(function () {
                  var e = Object(_["a"])(
                    {},
                    "remark-".concat(r.id || r.newIndex),
                    [{ required: !1 }, { max: 20, message: "长度不能超过20字" }]
                  );
                  return (
                    r.newIndex &&
                      (e["email-".concat(r.newIndex)] = f
                        ? [
                            { type: "email", message: "请输入正确的成员邮箱" },
                            { required: !0, message: "请输入成员邮箱" },
                            { max: 100, message: "长度不能超过100字" },
                          ]
                        : [{ required: !0, message: "请选择团队成员" }]),
                    e
                  );
                }),
                memberList: Object(u["computed"])(function () {
                  return d.state.memberList;
                }),
              }),
              b = (function () {
                var t = Object(h["a"])(
                  regeneratorRuntime.mark(function t() {
                    var a, i, s, c;
                    return regeneratorRuntime.wrap(function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              null === (a = v.value) || void 0 === a
                                ? void 0
                                : a.submit()
                            );
                          case 2:
                            if (((i = t.sent), (s = i.hasError), !s)) {
                              t.next = 6;
                              break;
                            }
                            return t.abrupt("return");
                          case 6:
                            if (f || !r.userId) {
                              t.next = 13;
                              break;
                            }
                            return (
                              (t.next = 9),
                              l.list.fetchUserPermission({ userId: r.userId })
                            );
                          case 9:
                            if (((c = t.sent), c.includes("write"))) {
                              t.next = 13;
                              break;
                            }
                            return (
                              o("所选用户无任务接收方写入权限，请重新选择！"),
                              t.abrupt("return")
                            );
                          case 13:
                            return (
                              (t.next = 15),
                              new Promise(function (t, r) {
                                n("sure", {
                                  index: e.index,
                                  callback: function (e) {
                                    e ? r(e) : t();
                                  },
                                });
                              }).catch(function (e) {
                                p.errors = e;
                              })
                            );
                          case 15:
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
              g = function (t) {
                return (
                  (r.remark = t),
                  n("sure", { index: e.index, callback: function () {} }),
                  !0
                );
              },
              y = function (e) {
                var t =
                    m.memberList.find(function (t) {
                      return t.userId === e;
                    }) || {},
                  n = t.name,
                  a = void 0 === n ? "" : n,
                  i = t.email,
                  o = void 0 === i ? "" : i;
                (r.name = a), (r.email = o);
              };
            return {
              form: v,
              state: p,
              cState: m,
              isCloud: f,
              handleSureClick: b,
              handleUpdateRemark: g,
              handleMemberChange: y,
            };
          },
        }),
        Ve = ze,
        Fe =
          (n("58c9"), Object(f["a"])(Ve, je, Ce, !1, null, "585d4585", null)),
        qe = Fe.exports,
        Ge = Object(u["defineComponent"])({
          components: { MemberItem: qe },
          props: {
            value: { type: Array, required: !0 },
            disabled: { type: Boolean, default: !1, required: !1 },
          },
          setup: function (e, t) {
            var n = t.emit,
              r = Object(u["reactive"])({ errors: {} }),
              a = Object(i["useService"])(),
              o = a.envService,
              s = o.state.isCloud,
              c = Object(u["reactive"])({
                showEmpty: Object(u["computed"])(function () {
                  var t;
                  return !(null === (t = e.value) || void 0 === t
                    ? void 0
                    : t.length);
                }),
                rules: Object(u["computed"])(function () {
                  var t = {};
                  return (
                    e.value.forEach(function (e) {
                      e.newIndex &&
                        (t["email-".concat(e.newIndex)] = s
                          ? [
                              {
                                type: "email",
                                message: "请输入正确的成员email",
                              },
                              { required: !0, message: "请输入成员email" },
                              { max: 50, message: "长度不能超过50字符" },
                            ]
                          : [{ required: !0, message: "请选择团队成员" }]);
                    }),
                    t
                  );
                }),
              }),
              l = function (t) {
                e.value.splice(t, 1), n("change", e.value);
              },
              d = function (t) {
                var n = e.value[t],
                  r = s ? "email" : "userId",
                  a = e.value.find(function (e, a) {
                    return a !== t && e[r] === n[r];
                  });
                return a;
              },
              f = function (t) {
                var r = t.index,
                  a = t.callback;
                if (d(r)) {
                  var i = Object(K["a"])("已存在重复的成员，请选择新的成员！");
                  a &&
                    a(
                      Object(_["a"])(
                        {},
                        "email".concat(
                          e.value[r].newIndex ? "-" + e.value[r].newIndex : ""
                        ),
                        i
                      )
                    );
                } else
                  (e.value[r].isEdit = !1),
                    delete e.value[r].isEdit,
                    delete e.value[r].newIndex,
                    n("change", e.value);
              };
            return {
              state: r,
              cState: c,
              isCloud: s,
              p2c: K["a"],
              handleDeleteClick: l,
              handleSureClick: f,
            };
          },
        }),
        We = Ge,
        Ke =
          (n("e3ba"), Object(f["a"])(We, ke, Ee, !1, null, "51ac2c5c", null)),
        He = Ke.exports,
        Xe = Object(u["defineComponent"])({
          components: { MemberList: He },
          props: {
            teamId: { type: Number, required: !1 },
            teamType: { type: Number, required: !1 },
          },
          setup: function (e, t) {
            var n = t.emit,
              r = Object(i["useService"])(),
              a = r.teamService;
            a.info.reset();
            var s = Object(W["useToast"])(),
              c = s.succeed,
              l = Object(u["ref"])(null),
              d = Object(u["ref"])(null),
              f = Object(u["reactive"])({
                isCreate: !e.teamId,
                errors: {},
                rules: {
                  name: [
                    { required: !0, message: "请输入团队名称" },
                    { max: 20, message: "长度不能超过20字" },
                    {
                      pattern: /^[a-zA-Z0-9_\-\u4e00-\u9fa5]+$/,
                      message: "团队名称支持中文、英文、数字、下划线、中划线",
                    },
                  ],
                  remark: [{ max: 50, message: "长度不能超过50字" }],
                  members: [{ required: !0, message: "请添加团队成员" }],
                },
                maxMemberNum: x,
                newIndex: new Date().getTime(),
                newMember: {
                  email: "",
                  name: "",
                  remark: "",
                  isEdit: !0,
                  status: o["EMemberStatus"].OPENING,
                },
                teamTypes: o["ETeamTypes"].itemList,
              }),
              p = Object(u["computed"])(function () {
                return a.info.state;
              }),
              v = Object(u["computed"])(function () {
                return p.value.teamInfo.members
                  ? p.value.teamInfo.members.length
                  : 0;
              }),
              m = Object(u["computed"])(function () {
                return p.value.teamInfo.members || [];
              }),
              b = Object(u["computed"])(function () {
                return m.value.some(function (e) {
                  return e.isEdit;
                });
              }),
              g = Object(u["reactive"])({
                teamMemberNum: v,
                editMembers: m,
                isOverMaxNum: Object(u["computed"])(function () {
                  return v.value >= f.maxMemberNum;
                }),
                hasFormError: Object(u["computed"])(function () {
                  for (var e in f.errors) if (f.errors[e].length) return !0;
                  return !1;
                }),
                submitDisabled: Object(u["computed"])(function () {
                  return (
                    !m.value.length ||
                    b.value ||
                    !p.value.teamInfo.name ||
                    g.hasFormError
                  );
                }),
                hasCreatingTask: Object(u["computed"])(function () {
                  return p.value.teamInfo.hasCreatingTask;
                }),
              }),
              y = function () {
                l.value && l.value.close();
              },
              _ = (function () {
                var e = Object(h["a"])(
                  regeneratorRuntime.mark(function e() {
                    var t, r, i, o, s, u;
                    return regeneratorRuntime.wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              null === (t = d.value) || void 0 === t
                                ? void 0
                                : t.submit()
                            );
                          case 2:
                            if (((r = e.sent), (i = r.hasError), !i)) {
                              e.next = 6;
                              break;
                            }
                            return e.abrupt("return");
                          case 6:
                            return (
                              (e.next = 8),
                              Object(Z["e"])(a.info.saveTeam(p.value.teamInfo))
                            );
                          case 8:
                            if (
                              ((o = e.sent),
                              (s = Object(R["a"])(o, 1)),
                              (u = s[0]),
                              !u)
                            ) {
                              e.next = 13;
                              break;
                            }
                            return e.abrupt("return", Object(Z["d"])(f, u));
                          case 13:
                            c(f.isCreate ? "新建团队成功" : "修改团队成功"),
                              y(),
                              n("refresh");
                          case 16:
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
              T = function () {
                g.isOverMaxNum ||
                  g.hasCreatingTask ||
                  ((f.newIndex = new Date().getTime()),
                  g.editMembers.unshift(
                    Object(S["a"])(
                      Object(S["a"])({}, f.newMember),
                      {},
                      { newIndex: f.newIndex }
                    )
                  ));
              },
              w = function () {
                f.errors.members = [];
              };
            return (
              Object(u["watch"])(
                function () {
                  return e.teamId;
                },
                function (e) {
                  e && a.info.fetchTeamDetail({ teamId: e });
                },
                { immediate: !0 }
              ),
              Object(u["watch"])(
                function () {
                  return e.teamType;
                },
                function (e) {
                  e && (a.info.state.teamInfo.teamType = e);
                },
                { immediate: !0 }
              ),
              {
                modal: l,
                form: d,
                state: f,
                tState: p,
                cState: g,
                handleSureClick: _,
                handleNewMemClick: T,
                handleMemberChange: w,
                close: y,
              }
            );
          },
        }),
        Qe = Xe,
        Ye =
          (n("1e6d"), Object(f["a"])(Qe, we, Oe, !1, null, "231b1a6a", null)),
        Ze = Ye.exports,
        Je = Object(u["defineComponent"])({
          model: { prop: "teamId", event: "change" },
          props: {
            teamId: { type: Number, required: !1 },
            teamType: { type: Number, required: !0 },
            err: { default: "" },
          },
          components: {},
          setup: function (e, t) {
            var n = t.emit,
              r = t.root,
              a = Object(i["useService"])().teamService,
              o = Object(u["reactive"])({ loading: !1, list: [] }),
              s = Object(u["computed"])({
                get: function () {
                  return e.teamId;
                },
                set: function (e) {
                  n("change", e);
                },
              }),
              c = Object(u["computed"])(function () {
                return o.list.find(function (e) {
                  return e.teamId === s.value;
                });
              });
            Object(u["watch"])(
              function () {
                return c.value;
              },
              function () {
                var e, t;
                n("changeTeam", c.value),
                  "number" !==
                    typeof (null === (e = c.value) || void 0 === e
                      ? void 0
                      : e.validMemberCount) ||
                  (null === (t = c.value) || void 0 === t
                    ? void 0
                    : t.validMemberCount)
                    ? n("update:err", "")
                    : n(
                        "update:err",
                        "当前团队所有成员已停用或已被删除，无法成功创建任务，请检查修订团队成员列表。"
                      );
              },
              { immediate: !0 }
            );
            var l = (function () {
              var t = Object(h["a"])(
                regeneratorRuntime.mark(function t() {
                  var n;
                  return regeneratorRuntime.wrap(
                    function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (o.loading = !0),
                              (t.next = 4),
                              a.list.fetchTeamList(
                                { pageSize: 1e4, teamType: e.teamType },
                                !1
                              )
                            );
                          case 4:
                            (n = t.sent), (o.list = n.items);
                          case 6:
                            return (t.prev = 6), (o.loading = !1), t.finish(6);
                          case 9:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[0, , 6, 9]]
                  );
                })
              );
              return function () {
                return t.apply(this, arguments);
              };
            })();
            function d(t) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              r.$modal.open(Ze, {
                parent: r,
                props: { teamId: n ? void 0 : e.teamId, teamType: t },
                on: {
                  refresh: function () {
                    l();
                  },
                },
              });
            }
            return l(), { localTeamId: s, state: o, showTeamModifyModal: d };
          },
        }),
        et = Je,
        tt =
          (n("9a28"), Object(f["a"])(et, Te, xe, !1, null, "d8487908", null)),
        nt = tt.exports,
        rt = function (e) {
          return e >= 1 ? Math.ceil(e) : e > 0 ? 1 : 0;
        };
      function at(e, t) {
        var n = Object(u["reactive"])({
          annoTeam: null,
          auditTeam: null,
          eachEntityCount: Object(u["computed"])(function () {
            var t;
            return rt(
              e.value /
                (null === (t = n.annoTeam) || void 0 === t
                  ? void 0
                  : t.validMemberCount)
            );
          }),
          annoDesc: Object(u["computed"])(function () {
            if (e.value && n.eachEntityCount)
              return "数据集需标注样本总数"
                .concat(e.value, "个，每人分配样本数")
                .concat(n.eachEntityCount, "个");
          }),
          auditCount: Object(u["computed"])(function () {
            var e,
              r,
              a =
                (null === (e = n.annoTeam) || void 0 === e
                  ? void 0
                  : e.validMemberCount) /
                (null === (r = n.auditTeam) || void 0 === r
                  ? void 0
                  : r.validMemberCount),
              i = n.eachEntityCount * (t.value / 100);
            return { taskAverage: rt(a), entityAverage: rt(i) };
          }),
          auditPerCount: Object(u["computed"])(function () {
            if (n.auditCount.taskAverage && n.auditCount.entityAverage)
              return (
                n.auditCount.taskAverage + "*" + n.auditCount.entityAverage
              );
          }),
          auditDesc: Object(u["computed"])(function () {
            var e, t;
            if (
              (null === (e = n.annoTeam) || void 0 === e
                ? void 0
                : e.validMemberCount) &&
              n.auditCount.taskAverage &&
              n.auditCount.entityAverage
            )
              return "数据集需审核任务总数"
                .concat(
                  null === (t = n.annoTeam) || void 0 === t
                    ? void 0
                    : t.validMemberCount,
                  "个，每人分配任务数"
                )
                .concat(n.auditCount.taskAverage, "个，每个审核任务包含样本数")
                .concat(n.auditCount.entityAverage, "个");
          }),
        });
        return n;
      }
      var it = Object(u["defineComponent"])({
          components: { TeamList: nt },
          props: {
            annoLeft: { type: Number, default: 0 },
            teamId: { type: Number },
            isAudit: { type: Boolean },
            auditTeamId: { type: Number },
            auditPercentage: { type: Number, required: !0 },
            distributeCount: { type: Number, required: !0 },
            fieldsValid: { type: Boolean, default: !1 },
          },
          setup: function (e, t) {
            var n = t.emit,
              r = Object(u["reactive"])({ annoErr: "", auditErr: "" }),
              a = at(
                Object(u["toRef"])(e, "annoLeft"),
                Object(u["toRef"])(e, "auditPercentage")
              );
            Object(u["watch"])(
              function () {
                return a.eachEntityCount;
              },
              function (e) {
                n("update:distributeCount", e);
              }
            );
            var i = Object(u["computed"])(function () {
              var t,
                n,
                r = !!(null === (t = a.annoTeam) || void 0 === t
                  ? void 0
                  : t.validMemberCount),
                i =
                  !e.isAudit ||
                  !!(null === (n = a.auditTeam) || void 0 === n
                    ? void 0
                    : n.validMemberCount);
              return r && i;
            });
            return (
              Object(u["watch"])(
                function () {
                  return i.value;
                },
                function (e) {
                  return n("update:fieldsValid", e);
                }
              ),
              { errState: r, tState: a, ETeamTypes: o["ETeamTypes"] }
            );
          },
        }),
        ot = it,
        st =
          (n("772e"), Object(f["a"])(ot, ye, _e, !1, null, "ecf5248a", null)),
        ct = st.exports,
        ut = Object(u["defineComponent"])({
          components: { AssignTeam: ct },
          props: { task: { required: !0, type: Object } },
          setup: function (e, t) {
            var n = Object(u["ref"])(null),
              r = Object(u["ref"])(null),
              a = Object(u["reactive"])({
                form: Object(S["a"])({}, new ge["AssignTaskDto"]()),
                errors: {},
                rules: {
                  taskName: [{ required: !0, message: "请输入任务名称" }],
                  distributeDataType: [
                    { required: !0, message: "请选择分配数据类型" },
                  ],
                  teamId: [{ required: !0, message: "请选择标注团队" }],
                  auditTeamId: [
                    {
                      validator: function (e, t, n) {
                        a.form.isAudit || n(), t || n("请选择审核团队"), n();
                      },
                    },
                  ],
                },
                submitting: !1,
              }),
              s = Object(u["computed"])(function () {
                return e.task.entityCount;
              }),
              c = Object(W["useToast"])(),
              l = c.succeed,
              d = Object(i["useService"])(),
              f = d.taskService;
            function p() {
              n.value.close();
            }
            function v() {
              return m.apply(this, arguments);
            }
            function m() {
              return (
                (m = Object(h["a"])(
                  regeneratorRuntime.mark(function n() {
                    var i, o, s, c, u;
                    return regeneratorRuntime.wrap(function (n) {
                      while (1)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (a.submitting = !0),
                              (n.next = 3),
                              r.value.submit()
                            );
                          case 3:
                            if (((i = n.sent), (o = i.hasError), !o)) {
                              n.next = 8;
                              break;
                            }
                            return (a.submitting = !1), n.abrupt("return");
                          case 8:
                            return (
                              (a.form.taskId = e.task.taskId),
                              (n.next = 11),
                              Object(Z["e"])(f.assignTask(a.form))
                            );
                          case 11:
                            if (
                              ((s = n.sent),
                              (c = Object(R["a"])(s, 1)),
                              (u = c[0]),
                              !u)
                            ) {
                              n.next = 17;
                              break;
                            }
                            return (a.submitting = !1), n.abrupt("return");
                          case 17:
                            (a.submitting = !1),
                              l("分配任务成功"),
                              t.emit("refresh"),
                              p();
                          case 21:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                  })
                )),
                m.apply(this, arguments)
              );
            }
            return {
              annoLeft: s,
              form: r,
              state: a,
              modal: n,
              close: p,
              submit: v,
              ETeamTypes: o["ETeamTypes"],
            };
          },
        }),
        lt = ut,
        dt =
          (n("9bd5"), Object(f["a"])(lt, be, he, !1, null, "42cf45ea", null)),
        ft = dt.exports,
        pt = Object(u["defineComponent"])({
          props: { task: { required: !0, type: Object } },
          setup: function (e, t) {
            var n = Object(u["getCurrentInstance"])().proxy,
              r = Object(i["useService"])(),
              a = r.taskService,
              s = r.envService,
              c = r.roleService,
              l = Object(W["useToast"])(),
              d = l.succeed,
              f = Object(T["useConfirmModal"])(),
              p = Object(K["c"])(ue, function () {
                return {
                  props: { item: e.task },
                  on: {
                    refresh: function () {
                      t.emit("refresh");
                    },
                  },
                };
              }),
              v = Object(K["c"])(me, function () {
                return {
                  props: { task: e.task },
                  on: {
                    refresh: function () {
                      t.emit("refresh");
                    },
                  },
                };
              }),
              m = Object(K["c"])(ft, function () {
                return {
                  group: "assignModal1",
                  props: { task: e.task },
                  on: {
                    refresh: function () {
                      t.emit("refresh");
                    },
                  },
                };
              }),
              b =
                e.task.datasourceType === o["EDatasourceType"].DATA_HOUSE
                  ? "请确认多人标注任务结果已保存，避免正在标注中的内容丢失"
                  : "删除后".concat(
                      s.state.isDataBml ? "" : "已分享链接失效",
                      "，已标注完内容将在标注完数据集版本查看，<br>正在标注中的内容有丢失风险"
                    ),
              g = Object(u["reactive"])({
                ctlList: Object(u["computed"])(function () {
                  var r = G(e.task.annoStatus);
                  return [
                    {
                      label: "任务详情",
                      visible: r.detail,
                      permission: "read",
                      click: p,
                    },
                    {
                      label: "查看进度",
                      visible: r.view,
                      permission: "read",
                      click: function () {
                        t.root.$router.push({
                          path: Object(K["b"])("/mulan/task/progress", n),
                          query: { taskId: e.task.taskId + "" },
                        });
                      },
                    },
                    {
                      label: "验收任务",
                      visible:
                        r.check &&
                        c.state.currentRole === o["EProcessRoleType"].CREATOR,
                      permission: { mulancreate: "write" },
                      click: function () {
                        t.root.$router.push({
                          path: Object(K["b"])("/annotate/handwork", n),
                          query: {
                            mulan: "mulan",
                            datasetId: e.task.copyDatasetId + "",
                            taskId: e.task.taskId + "",
                            taskType: o["EAnnoActionType"].CLE + "",
                          },
                        });
                      },
                    },
                    {
                      label: "终止任务",
                      visible:
                        r.stop &&
                        c.state.currentRole === o["EProcessRoleType"].CREATOR,
                      permission: { mulancreate: "write" },
                      click: v,
                    },
                    {
                      label: "查看数据集",
                      visible:
                        r.toDataset &&
                        e.task.datasourceType === o["EDatasourceType"].DATASET,
                      permission: { dataset: "read" },
                      click: function () {
                        t.root.$router.push({
                          path: Object(K["b"])(
                            "/dataset/".concat(
                              e.task.destDatasetId,
                              "/entities?annotationType=1"
                            ),
                            n
                          ),
                        });
                      },
                    },
                    {
                      label: "删除",
                      visible:
                        r.delete &&
                        c.state.currentRole === o["EProcessRoleType"].CREATOR,
                      permission: { mulancreate: "write" },
                      click: function () {
                        f({
                          dirty: !0,
                          head: "确定删除任务吗？",
                          body: '<div style="line-height:1.5;">'.concat(
                            b,
                            "</div>"
                          ),
                          on: {
                            ok: function () {
                              return Object(h["a"])(
                                regeneratorRuntime.mark(function n() {
                                  return regeneratorRuntime.wrap(function (n) {
                                    while (1)
                                      switch ((n.prev = n.next)) {
                                        case 0:
                                          return (
                                            (n.next = 2),
                                            a.deleteTask(e.task.taskId)
                                          );
                                        case 2:
                                          t.emit("refresh"), d("操作成功");
                                        case 4:
                                        case "end":
                                          return n.stop();
                                      }
                                  }, n);
                                })
                              )();
                            },
                          },
                        });
                      },
                    },
                    {
                      label: "分配任务",
                      visible:
                        r.assign &&
                        a.state.privateTab === o["EProcessTabType"].ASSIGNED,
                      permission: { mulanmanage: "write" },
                      click: m,
                    },
                  ];
                }),
              });
            return { state: g };
          },
        }),
        vt = pt,
        mt = (n("b7a0"), Object(f["a"])(vt, A, I, !1, null, "e560dab2", null)),
        bt = mt.exports,
        ht = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("div", { staticClass: "render-status" }, [
            e.cstate.item
              ? n("div", {
                  staticClass: "color",
                  style: { "background-color": e.cstate.item.color },
                })
              : e._e(),
            n("div", { staticClass: "render-content" }, [
              n(
                "div",
                { staticClass: "task-status" },
                [
                  e._v(" " + e._s(e.cstate.status) + " "),
                  e.cstate.progressVisible
                    ? n(
                        "the-icon-tip",
                        {
                          attrs: {
                            name: "question-mark-small-circle-o",
                            placement: "top",
                          },
                        },
                        e._l(e.cstate.progresses, function (t, r) {
                          return n(
                            "div",
                            { key: r, staticClass: "task-progress-tip" },
                            [
                              n(
                                "div",
                                { staticClass: "task-progress-tip-title" },
                                [e._v(" " + e._s(t.title) + " ")]
                              ),
                              n(
                                "div",
                                { staticClass: "task-progress-tip-content" },
                                [
                                  e._v(
                                    " " +
                                      e._s(t.totals.done) +
                                      "个已完成，共计" +
                                      e._s(t.totals.all) +
                                      "个子任务。 "
                                  ),
                                ]
                              ),
                            ]
                          );
                        }),
                        0
                      )
                    : e._e(),
                ],
                1
              ),
              e.cstate.progressVisible
                ? n(
                    "div",
                    { staticClass: "task-progress" },
                    e._l(e.cstate.progresses, function (t, r) {
                      return n(
                        "span",
                        { key: r, staticClass: "task-progress-item" },
                        [
                          e._v(
                            " " +
                              e._s(t.label) +
                              " " +
                              e._s(t.totals.done) +
                              "/" +
                              e._s(t.totals.all) +
                              " "
                          ),
                        ]
                      );
                    }),
                    0
                  )
                : e._e(),
            ]),
          ]);
        },
        gt = [],
        yt = Object(u["defineComponent"])({
          props: { task: { required: !0, type: Object } },
          setup: function (e) {
            var t = Object(u["reactive"])({
              isAudit: Object(u["computed"])(function () {
                return e.task.isAudit;
              }),
              status: Object(u["computed"])(function () {
                var n = o["EAnnoStatus"].getItemById(e.task.annoStatus),
                  r = n || {},
                  a = r.annoAuditLabel,
                  i = r.label;
                return t.isAudit && a ? a : i;
              }),
              progressVisible: Object(u["computed"])(function () {
                return e.task.annoStatus === o["EAnnoStatus"].IN_ANNOTATE;
              }),
              progresses: Object(u["computed"])(function () {
                var n = e.task,
                  r = n.taskNum,
                  a = n.auditSubmitCount,
                  i = n.annoSubmitCount,
                  o = [
                    {
                      title: "标注任务进度",
                      label: "已标注:",
                      totals: { all: r, done: i },
                    },
                  ];
                return (
                  t.isAudit &&
                    o.push({
                      title: "审核任务进度",
                      label: "已审核:",
                      totals: { all: r, done: a },
                    }),
                  o
                );
              }),
              item: Object(u["computed"])(function () {
                return o["EAnnoStatus"].getItemById(e.task.annoStatus);
              }),
            });
            return { cstate: t };
          },
        }),
        _t = yt,
        Tt =
          (n("b2a7"), Object(f["a"])(_t, ht, gt, !1, null, "daeaa8c8", null)),
        xt = Tt.exports,
        wt = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "the-dropdown",
            { ref: "dropdown", staticClass: "list-filter" },
            [
              n("the-icon", {
                class: {
                  "filter-active": e.selectedVal && e.selectedVal.length,
                },
                attrs: { slot: "head", name: "filter" },
                slot: "head",
              }),
              e.items && e.items.length
                ? n(
                    "div",
                    { staticClass: "dropdown-content" },
                    [
                      n(
                        "the-checkbox-group",
                        {
                          model: {
                            value: e.state.selected,
                            callback: function (t) {
                              e.$set(e.state, "selected", t);
                            },
                            expression: "state.selected",
                          },
                        },
                        e._l(e.items, function (t) {
                          return n(
                            "the-checkbox",
                            {
                              key: t.id,
                              staticStyle: {
                                display: "flex",
                                margin: "10px 10px",
                              },
                              attrs: { value: t.id },
                            },
                            [e._v(e._s(t.label))]
                          );
                        }),
                        1
                      ),
                      n(
                        "div",
                        { staticClass: "bottom-btn" },
                        [
                          n(
                            "the-button",
                            {
                              staticClass: "secondary",
                              attrs: { disabled: !e.state.selected.length },
                              on: { click: e.reset },
                            },
                            [e._v("重置")]
                          ),
                          n("the-button", { on: { click: e.sure } }, [
                            e._v("确定"),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  )
                : e.treeItems && e.treeItems.length
                ? n("div", { staticClass: "tree-dropdown-content" }, [
                    n(
                      "div",
                      { staticClass: "tree-dropdown-content_ul_left" },
                      e._l(e.treeItems, function (t) {
                        return n(
                          "div",
                          {
                            key: t.id,
                            class: [
                              "tree-dropdown-content_li",
                              { active: t.id === e.state.childParentId },
                            ],
                            attrs: { title: t.label },
                            on: {
                              click: function (n) {
                                return e.setChildren(t.children, t.id);
                              },
                              mouseenter: function (n) {
                                return e.setChildren(t.children, t.id);
                              },
                            },
                          },
                          [
                            n(
                              "div",
                              { staticClass: "tree-dropdown-content_li_left" },
                              [e._v(" " + e._s(t.label) + " ")]
                            ),
                            t.children && t.children.length
                              ? n(
                                  "div",
                                  {
                                    staticClass:
                                      "tree-dropdown-content_li_right",
                                  },
                                  [
                                    n("the-icon", {
                                      attrs: { name: "arrow-right" },
                                    }),
                                  ],
                                  1
                                )
                              : e._e(),
                          ]
                        );
                      }),
                      0
                    ),
                    e.state.children && e.state.children.length
                      ? n(
                          "div",
                          { staticClass: "tree-dropdown-content_ul_right" },
                          [
                            n(
                              "the-checkbox-group",
                              {
                                key: e.state.childParentId,
                                model: {
                                  value: e.state.selected,
                                  callback: function (t) {
                                    e.$set(e.state, "selected", t);
                                  },
                                  expression: "state.selected",
                                },
                              },
                              e._l(e.state.children, function (t) {
                                return n(
                                  "the-checkbox",
                                  {
                                    key: t.id,
                                    staticStyle: {
                                      display: "flex",
                                      margin: "10px 10px",
                                    },
                                    attrs: { value: t.id },
                                  },
                                  [e._v(e._s(t.label))]
                                );
                              }),
                              1
                            ),
                            n(
                              "div",
                              { staticClass: "bottom-btn" },
                              [
                                n(
                                  "the-button",
                                  {
                                    staticClass: "secondary",
                                    attrs: {
                                      disabled: !e.state.selected.length,
                                    },
                                    on: { click: e.reset },
                                  },
                                  [e._v("重置")]
                                ),
                                n("the-button", { on: { click: e.sure } }, [
                                  e._v("确定"),
                                ]),
                              ],
                              1
                            ),
                          ],
                          1
                        )
                      : e._e(),
                  ])
                : e._e(),
            ],
            1
          );
        },
        Ot = [],
        kt = Object(u["defineComponent"])({
          props: {
            items: { type: Array },
            selectedVal: { type: Array },
            treeItems: { type: Array },
          },
          setup: function (e, t) {
            var n = Object(u["ref"])(null),
              r = Object(u["reactive"])({
                selected: e.selectedVal || [],
                children: [],
                childParentId: 0,
              }),
              a = function () {
                r.selected = [];
              },
              i = function () {
                t.emit("changeValue", r.selected.length ? r.selected : void 0),
                  t.emit("refresh"),
                  n.value.hide();
              },
              o = function (e, t) {
                (r.children = e), (r.childParentId = t);
              };
            return { dropdown: n, state: r, reset: a, sure: i, setChildren: o };
          },
        }),
        Et = kt,
        jt =
          (n("40af"), Object(f["a"])(Et, wt, Ot, !1, null, "8cac424e", null)),
        Ct = jt.exports,
        St = function () {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r("div", { staticClass: "task-empty-placeholder" }, [
            r("img", { attrs: { src: n("f3f6") } }),
            r("div", { staticClass: "empty-content" }, [
              e._v(" " + e._s(e.state.content) + " "),
            ]),
            e.state.showCreateBtn
              ? r("div", [
                  r(
                    "span",
                    {
                      directives: [
                        {
                          name: "permission",
                          rawName: "v-permission",
                          value: "write",
                          expression: "'write'",
                        },
                      ],
                      staticClass: "link-blue",
                      on: {
                        click: function (t) {
                          return e.$emit(e.createKey);
                        },
                      },
                    },
                    [e._v("创建多人标注任务")]
                  ),
                ])
              : e._e(),
          ]);
        },
        At = [],
        It = Object(u["defineComponent"])({
          props: { taskType: { required: !1, type: String } },
          setup: function (e) {
            var t = Object(i["useService"])(),
              n = t.roleService,
              r = Object(u["reactive"])({
                content: Object(u["computed"])(function () {
                  var t,
                    r,
                    a = n.state.currentRole;
                  return a
                    ? ((t = {}),
                      Object(_["a"])(
                        t,
                        o["EProcessRoleType"].CREATOR,
                        "暂无已创建的任务"
                      ),
                      Object(_["a"])(
                        t,
                        o["EProcessRoleType"].MANAGER,
                        "暂无需分配的任务"
                      ),
                      Object(_["a"])(
                        t,
                        o["EProcessRoleType"].RECEIVER,
                        "暂无已接收的任务"
                      ),
                      t)[a]
                    : e.taskType
                    ? ((r = {}),
                      Object(_["a"])(
                        r,
                        o["ETaskType"].CREATED,
                        "暂无创建的任务"
                      ),
                      Object(_["a"])(
                        r,
                        o["ETaskType"].RECEIVED,
                        "暂无接收的任务"
                      ),
                      r)[e.taskType]
                    : void 0;
                }),
                showCreateBtn: Object(u["computed"])(function () {
                  var t = n.state.currentRole;
                  return t
                    ? [o["EProcessRoleType"].CREATOR].some(function (e) {
                        return e === t;
                      })
                    : e.taskType === o["ETaskType"].CREATED;
                }),
              });
            return { state: r, createKey: "createTask" };
          },
        }),
        Nt = It,
        Rt =
          (n("c471"), Object(f["a"])(Nt, St, At, !1, null, "c7ddfbb8", null)),
        Dt = Rt.exports,
        Mt = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "render-text" },
            [
              e.text.length > 8
                ? n(
                    "the-tip",
                    {
                      staticClass: "long-text",
                      attrs: { placement: "top-start", delay: 300 },
                    },
                    [
                      n("span", [e._v(e._s(e.text))]),
                      n("div", { attrs: { slot: "popper" }, slot: "popper" }, [
                        e._v(e._s(e.text)),
                      ]),
                    ]
                  )
                : [e._v(e._s(e.text))],
            ],
            2
          );
        },
        Lt = [],
        Pt = Object(u["defineComponent"])({
          props: { text: { required: !0, type: String } },
          setup: function () {
            return {};
          },
        }),
        Ut = Pt,
        $t =
          (n("e8ac"), Object(f["a"])(Ut, Mt, Lt, !1, null, "43caa959", null)),
        Bt = $t.exports,
        zt = function (e) {
          return e.map(function (e) {
            var t;
            return Object(S["a"])(
              Object(S["a"])({}, e),
              {},
              {
                dataName:
                  e.datasourceType === o["EDatasourceType"].DATA_HOUSE
                    ? null === (t = e.content) || void 0 === t
                      ? void 0
                      : t.batchName
                    : e.sourceDatasetgroupName + " V" + e.sourceDatasetVersion,
              }
            );
          });
        },
        Vt = Object(u["defineComponent"])({
          components: {
            RenderCtl: bt,
            RenderStatus: xt,
            TableFilter: Ct,
            EmptyTable: Dt,
            RenderText: Bt,
          },
          props: {
            source: {
              type: Array,
              default: function () {
                return [];
              },
            },
          },
          setup: function (e) {
            var t = Object(i["useService"])(),
              n = t.roleService,
              r = t.taskService,
              s = Object(u["reactive"])({
                filter: r.state.priateFilter,
                projectTypeData: [],
              }),
              c = Object(u["reactive"])({
                showAssignType: Object(u["computed"])(function () {
                  return (
                    n.state.currentRole === o["EProcessRoleType"].CREATOR &&
                    !a["env"].isCloud
                  );
                }),
                statusData: Object(u["computed"])(function () {
                  return o["EAnnoStatus"].itemList
                    .filter(function (e) {
                      return e.id < 11;
                    })
                    .map(function (e) {
                      return { id: e.id, label: e.label };
                    });
                }),
                assignTypeData: Object(u["computed"])(function () {
                  return o["EProcessAssignType"].itemList.map(function (e) {
                    return { id: e.id, label: e.label };
                  });
                }),
                showFilter: Object(u["computed"])(function () {
                  return !a["env"].isCloud;
                }),
                showStatusFilter: Object(u["computed"])(function () {
                  return (
                    !a["env"].isCloud &&
                    o["EProcessTabType"].CREATED === r.state.privateTab
                  );
                }),
                formattedSource: Object(u["computed"])(function () {
                  return zt(e.source);
                }),
              }),
              l = Object(u["ref"])(null);
            return (
              Object(re["a"])().then(function (e) {
                var t = e.enums,
                  n = e.canSupportMulan;
                l.value = t.EProjectType;
                var r = t.EDataType.toArray().map(function (e) {
                  return {
                    label: e.trueLabel || e.label,
                    id: e.id,
                    children: e.projectType
                      .filter(function (e) {
                        return n({ projectTypes: [e] });
                      })
                      .map(function (e) {
                        var n = t.EProjectType.getItemById(e);
                        return n
                          ? {
                              label:
                                null === n || void 0 === n ? void 0 : n.label,
                              id: null === n || void 0 === n ? void 0 : n.id,
                            }
                          : [];
                      }),
                  };
                });
                s.projectTypeData = r.filter(function (e) {
                  return e.children.length;
                });
              }),
              {
                EProjectType: l,
                EAnnoStatus: o["EAnnoStatus"],
                EProcessAssignType: o["EProcessAssignType"],
                EDatasourceType: o["EDatasourceType"],
                cstate: c,
                state: s,
                deployedWithDatahouse: Object(Z["c"])(),
              }
            );
          },
        }),
        Ft = Vt,
        qt = (n("00e3"), Object(f["a"])(Ft, j, C, !1, null, "5be2ad20", null)),
        Gt = qt.exports,
        Wt = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "the-table",
            { staticClass: "anno-task-table", attrs: { source: e.source } },
            [
              e.visible.annotate
                ? n(
                    "the-column",
                    {
                      attrs: {
                        render: function (e) {
                          return e.subTaskId;
                        },
                      },
                    },
                    [e._v("子任务ID")]
                  )
                : e._e(),
              e.visible.audit
                ? n(
                    "the-column",
                    {
                      attrs: {
                        render: function (e) {
                          return e.auditSubTaskId;
                        },
                      },
                    },
                    [e._v("子任务ID")]
                  )
                : e._e(),
              e.isDataBml
                ? e._e()
                : n(
                    "the-column",
                    {
                      attrs: {
                        render: function (e) {
                          return e.email;
                        },
                      },
                    },
                    [e._v("邮箱账号")]
                  ),
              e.isDataBml
                ? e._e()
                : n(
                    "the-column",
                    {
                      attrs: {
                        render: function (e) {
                          return e.bindUserName || "未绑定";
                        },
                      },
                    },
                    [e._v("百度账号")]
                  ),
              n(
                "the-column",
                {
                  scopedSlots: e._u([
                    {
                      key: "render",
                      fn: function (e) {
                        var t = e.row;
                        return [n("RenderText", { attrs: { text: t.name } })];
                      },
                    },
                  ]),
                },
                [e._v("任务名称 ")]
              ),
              e.visible.annotate
                ? [
                    n(
                      "the-column",
                      {
                        attrs: {
                          render: function (e) {
                            return (
                              e.mulanAnnotatedCount +
                              e.deleteCount +
                              " / " +
                              e.entityCount
                            );
                          },
                        },
                      },
                      [e._v("标注进度")]
                    ),
                    n(
                      "the-column",
                      {
                        scopedSlots: e._u(
                          [
                            {
                              key: "render",
                              fn: function (t) {
                                var r = t.row;
                                return [
                                  n("status-render", {
                                    attrs: {
                                      status: r.annoStatus,
                                      visible: e.visible,
                                    },
                                  }),
                                ];
                              },
                            },
                          ],
                          null,
                          !1,
                          1326579201
                        ),
                      },
                      [e._v("标注状态 ")]
                    ),
                  ]
                : e._e(),
              e.visible.audit
                ? [
                    n(
                      "the-column",
                      {
                        attrs: {
                          render: function (e) {
                            return (
                              e.passCount + e.unpassCount + " / " + e.auditCount
                            );
                          },
                        },
                      },
                      [e._v("审核进度")]
                    ),
                    n(
                      "the-column",
                      {
                        scopedSlots: e._u(
                          [
                            {
                              key: "render",
                              fn: function (t) {
                                var r = t.row;
                                return [
                                  n("status-render", {
                                    attrs: {
                                      status: r.auditStatus,
                                      visible: e.visible,
                                    },
                                  }),
                                ];
                              },
                            },
                          ],
                          null,
                          !1,
                          1748881922
                        ),
                      },
                      [e._v("审核状态 ")]
                    ),
                  ]
                : e._e(),
              n(
                "the-column",
                {
                  attrs: {
                    render: function (e) {
                      return e.creatorName;
                    },
                  },
                },
                [e._v("任务创建者")]
              ),
              n(
                "the-column",
                {
                  attrs: {
                    render: function (e) {
                      return e.startTime;
                    },
                  },
                },
                [e._v("起始时间")]
              ),
              n(
                "the-column",
                {
                  attrs: {
                    render: function (t) {
                      return e.getEndtimeLabel(t);
                    },
                  },
                },
                [e._v("截止时间")]
              ),
              n(
                "the-column",
                {
                  directives: [
                    {
                      name: "permission",
                      rawName: "v-permission",
                      value: { mulanreceive: "write" },
                      expression: "{mulanreceive: 'write'}",
                    },
                  ],
                  scopedSlots: e._u([
                    {
                      key: "render",
                      fn: function (t) {
                        var r = t.row;
                        return [
                          n("RenderCtl", {
                            attrs: { task: r, subTaskType: e.subTaskType },
                            on: {
                              refresh: function (t) {
                                return e.$emit("refresh");
                              },
                            },
                          }),
                        ];
                      },
                    },
                  ]),
                },
                [e._v(" 操作 ")]
              ),
              n("EmptyTable", {
                attrs: { slot: "empty-placeholder" },
                slot: "empty-placeholder",
              }),
            ],
            2
          );
        },
        Kt = [],
        Ht = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "render-ctl" },
            [
              e._l(e.state.ctlList, function (t, r) {
                return [
                  t.visible
                    ? n(
                        "span",
                        {
                          directives: [
                            {
                              name: "permission",
                              rawName: "v-permission",
                              value: t.permission,
                              expression: "item.permission",
                            },
                          ],
                          key: r,
                          staticClass: "link-blue",
                          on: { click: t.click },
                        },
                        [e._v(" " + e._s(t.label) + " ")]
                      )
                    : e._e(),
                ];
              }),
            ],
            2
          );
        },
        Xt = [],
        Qt = B({
          start: V.apply(
            void 0,
            Object(N["a"])(
              [o["EAnnoStatus"].TO_ANNOTATE].map(function (e) {
                return function (t) {
                  return t.value === e;
                };
              })
            )
          ),
          goto: z(o["EAnnoStatus"].IN_ANNOTATE),
          confirm: V.apply(
            void 0,
            Object(N["a"])(
              [o["EAnnoStatus"].IN_ANNOTATE].map(function (e) {
                return function (t) {
                  return t.value === e;
                };
              })
            )
          ),
        }),
        Yt = B({
          toaudit: V.apply(
            void 0,
            Object(N["a"])(
              [o["EAnnoStatus"].TO_ANNOTATE, o["EAnnoStatus"].IN_ANNOTATE].map(
                function (e) {
                  return function (t) {
                    return t.value === e;
                  };
                }
              )
            )
          ),
          auditconfirm: z(o["EAnnoStatus"].IN_ANNOTATE),
        });
      function Zt(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : o["ESubTaskType"].ANNOTATE;
        return t === o["ESubTaskType"].ANNOTATE ? Qt.exec(e) : Yt.exec(e);
      }
      var Jt = Object(u["defineComponent"])({
          props: {
            task: { required: !0, type: Object },
            subTaskType: { type: Number, default: o["ESubTaskType"].ANNOTATE },
          },
          setup: function (e, t) {
            var n = Object(u["getCurrentInstance"])().proxy,
              r = Object(i["useService"])(),
              a = r.taskService,
              s = Object(W["useToast"])(),
              c = s.succeed,
              l = Object(T["useConfirmModal"])(),
              d = Object(u["reactive"])({
                ctlList: Object(u["computed"])(function () {
                  var r =
                      e.subTaskType === o["ESubTaskType"].AUDIT
                        ? e.task.auditStatus
                        : e.task.annoStatus,
                    i = Zt(r, e.subTaskType),
                    s = function () {
                      var r = {};
                      e.task.auditSubTaskId &&
                        (r.auditSubTaskId = e.task.auditSubTaskId),
                        e.task.distributeDataType &&
                          (r.distributeDataType = e.task.distributeDataType),
                        e.task.interannoType &&
                          (r.interannoType = e.task.interannoType),
                        e.task.distributeDataType ===
                          o["EAnnoType"].UNANNOTATED &&
                          e.task.interannoType ===
                            o["EInterannoType"].ENABLE_INTERANNO &&
                          (r.type = "AUTOLABEL_UNCONFIRM"),
                        t.root.$router.push({
                          path: Object(K["b"])("/annotate/handwork", n),
                          query: Object(S["a"])(
                            Object(S["a"])({}, r),
                            {},
                            {
                              mulan: "mulan",
                              datasetId: "".concat(e.task.copyDatesetId),
                              subTaskId: "".concat(e.task.subTaskId),
                              taskType: e.subTaskType,
                              taskId: "".concat(e.task.taskId),
                            }
                          ),
                        });
                    };
                  return [
                    {
                      label: "启动标注",
                      visible: i.start,
                      permission: { mulanreceive: "write" },
                      click: s,
                    },
                    {
                      label: "继续标注",
                      visible: i.goto,
                      permission: { mulanreceive: "write" },
                      click: s,
                    },
                    {
                      label: "确认提交",
                      visible: i.confirm,
                      permission: { mulanreceive: "write" },
                      click: function () {
                        l({
                          head: "确认提交",
                          body: "确认要提交吗？",
                          on: {
                            ok: function () {
                              return Object(h["a"])(
                                regeneratorRuntime.mark(function n() {
                                  return regeneratorRuntime.wrap(function (n) {
                                    while (1)
                                      switch ((n.prev = n.next)) {
                                        case 0:
                                          return (
                                            (n.next = 2),
                                            a.annoSubmit(e.task.subTaskId)
                                          );
                                        case 2:
                                          c("提交成功"), t.emit("refresh");
                                        case 4:
                                        case "end":
                                          return n.stop();
                                      }
                                  }, n);
                                })
                              )();
                            },
                          },
                        });
                      },
                    },
                    {
                      label: "去审核",
                      visible: i.toaudit,
                      permission: { mulanreceive: "write" },
                      click: s,
                    },
                    {
                      label: "确认提交",
                      visible:
                        i.auditconfirm &&
                        e.task.passCount + e.task.unpassCount ===
                          e.task.auditCount,
                      permission: { mulanreceive: "write" },
                      click: function () {
                        l({
                          head: "确认提交",
                          body: "确认要提交吗？",
                          on: {
                            ok: function () {
                              return Object(h["a"])(
                                regeneratorRuntime.mark(function n() {
                                  return regeneratorRuntime.wrap(function (n) {
                                    while (1)
                                      switch ((n.prev = n.next)) {
                                        case 0:
                                          return (
                                            (n.next = 2),
                                            a.auditSubmit(e.task.auditSubTaskId)
                                          );
                                        case 2:
                                          c("提交成功"), t.emit("refresh");
                                        case 4:
                                        case "end":
                                          return n.stop();
                                      }
                                  }, n);
                                })
                              )();
                            },
                          },
                        });
                      },
                    },
                  ];
                }),
              });
            return { state: d };
          },
        }),
        en = Jt,
        tn =
          (n("a24f"), Object(f["a"])(en, Ht, Xt, !1, null, "7b641085", null)),
        nn = tn.exports,
        rn = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return e.item.showText
            ? n("div", { staticClass: "status-render" }, [
                n("div", {
                  staticClass: "color",
                  style: { "background-color": e.item.color },
                }),
                n("div", { staticClass: "text" }, [
                  e._v(e._s(e.item.showText)),
                ]),
              ])
            : e._e();
        },
        an = [],
        on = Object(u["defineComponent"])({
          props: {
            status: { required: !0, type: Number },
            visible: {
              required: !0,
              type: Object,
              default: function () {
                return { annotate: !1, audit: !0 };
              },
            },
          },
          setup: function (e) {
            var t = Object(u["computed"])(function () {
              var t = o["EAnnoStatus"].getItemById(e.status),
                n = e.visible.annotate
                  ? null === t || void 0 === t
                    ? void 0
                    : t.subLabel
                  : null === t || void 0 === t
                  ? void 0
                  : t.auditLabel;
              return {
                color: null === t || void 0 === t ? void 0 : t.color,
                showText: n || (null === t || void 0 === t ? void 0 : t.label),
              };
            });
            return { item: t };
          },
        }),
        sn = on,
        cn = (n("f0c6"), Object(f["a"])(sn, rn, an, !1, null, null, null)),
        un = cn.exports,
        ln = Object(u["defineComponent"])({
          components: {
            RenderCtl: nn,
            StatusRender: un,
            EmptyTable: Dt,
            RenderText: Bt,
          },
          props: {
            source: {
              type: Array,
              default: function () {
                return [];
              },
            },
            subTaskType: { type: Number, default: o["ESubTaskType"].ANNOTATE },
          },
          setup: function (e) {
            var t = Object(i["useService"])(),
              n = t.envService,
              r = Object(u["computed"])(function () {
                return {
                  annotate: e.subTaskType === o["ESubTaskType"].ANNOTATE,
                  audit: e.subTaskType === o["ESubTaskType"].AUDIT,
                };
              });
            return {
              isDataBml: n.state.isDataBml,
              visible: r,
              getEndtimeLabel: function (e) {
                var t = e.annoStatus,
                  n = e.finishTime,
                  r = e.endTime;
                return t === o["EAnnoStatus"].END_ANNO_WITH ||
                  t === o["EAnnoStatus"].END_ANNO_WITHOUT
                  ? n
                  : r;
              },
            };
          },
        }),
        dn = ln,
        fn =
          (n("57a3"), Object(f["a"])(dn, Wt, Kt, !1, null, "52189149", null)),
        pn = fn.exports;
      function vn(e) {
        var t;
        return ((t = {}),
        Object(_["a"])(t, o["ETaskType"].CREATED, Gt),
        Object(_["a"])(t, o["ETaskType"].RECEIVED, pn),
        t)[e];
      }
      function mn(e) {
        var t;
        return ((t = {}),
        Object(_["a"])(t, o["EProcessTabType"].CREATED, Gt),
        Object(_["a"])(t, o["EProcessTabType"].ASSIGNED, Gt),
        Object(_["a"])(t, o["EProcessTabType"].HAS_ASSIGNED, Gt),
        Object(_["a"])(t, o["EProcessTabType"].ANNOTATED, pn),
        Object(_["a"])(t, o["EProcessTabType"].AUDIT, pn),
        t)[e];
      }
      function bn() {
        var e = Object(u["getCurrentInstance"])().proxy,
          t = e.$store.state.common.accountInfo;
        return t;
      }
      function hn() {
        return !!bn().userId;
      }
      function gn() {
        return (
          "https://login.bce.baidu.com/?redirect=" +
          encodeURIComponent(window.location.href)
        );
      }
      var yn = function (e, t) {
        var n = new CustomEvent("afe:notifyRootApp", {
          detail: { key: e, payload: t },
        });
        window.dispatchEvent(n);
      };
      function _n(e, t) {
        var n = null == t ? "" : e,
          r = t || e,
          a = Object(u["computed"])(r);
        Object(u["watch"])(
          a,
          function (e) {
            yn("breadcrumb", { category: n, items: e });
          },
          { immediate: !0 }
        );
      }
      var Tn = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return e.cstate.visible
            ? n(
                "div",
                { staticClass: "role-change" },
                [
                  n(
                    "the-dropdown",
                    {
                      staticClass: "role-dropdown",
                      model: {
                        value: e.roleService.state.currentRole,
                        callback: function (t) {
                          e.$set(e.roleService.state, "currentRole", t);
                        },
                        expression: "roleService.state.currentRole",
                      },
                    },
                    e._l(e.cstate.showRoleList, function (t) {
                      return n(
                        "the-dropdown-item",
                        { key: t.id, attrs: { value: t.id } },
                        [e._v(" " + e._s(t.name) + " ")]
                      );
                    }),
                    1
                  ),
                ],
                1
              )
            : e._e();
        },
        xn = [],
        wn = Object(u["defineComponent"])({
          setup: function () {
            var e = Object(i["useService"])(),
              t = e.roleService,
              n = e.envService,
              r = Object(u["reactive"])({
                visible: Object(u["computed"])(function () {
                  return !n.state.isCloud && t.state.role.length > 1;
                }),
                showRoleList: Object(u["computed"])(function () {
                  return t.state.role.map(function (e) {
                    return {
                      name: o["EProcessRoleType"].getLabelById(e),
                      id: e,
                    };
                  });
                }),
              });
            return { roleService: t, cstate: r };
          },
        }),
        On = wn,
        kn =
          (n("73f9"), Object(f["a"])(On, Tn, xn, !1, null, "609fa05c", null)),
        En = kn.exports,
        jn = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            {
              staticClass: "ctl-bar",
              class: { "is-head": 1 === e.cstate.tabList.length },
            },
            [
              n(
                "div",
                { staticClass: "btn-wrap" },
                [
                  e.cstate.showCreateTask
                    ? n(
                        "eg-button",
                        {
                          directives: [
                            {
                              name: "permission",
                              rawName: "v-permission",
                              value: "write",
                              expression: "'write'",
                            },
                          ],
                          attrs: { disabled: !e.hasLogin, type: "primary" },
                          on: {
                            click: function (t) {
                              return e.$emit("createTask");
                            },
                          },
                        },
                        [n("Plus"), n("span", [e._v("创建任务")])],
                        1
                      )
                    : e._e(),
                  e.cstate.showTeamManage
                    ? n(
                        "eg-button",
                        {
                          class: [
                            "manageteam-btn",
                            { creator: e.cstate.showCreateTask },
                          ],
                          attrs: { disabled: !e.hasLogin },
                          on: {
                            click: function (t) {
                              return e.$emit("manageTeam");
                            },
                          },
                        },
                        [e._v(" 管理标注团队 ")]
                      )
                    : e._e(),
                ],
                1
              ),
              e.cstate.tabList.length > 1
                ? [
                    n(
                      "the-tab-group",
                      {
                        attrs: { disabled: !e.hasLogin },
                        model: {
                          value: e.state.privateTab,
                          callback: function (t) {
                            e.$set(e.state, "privateTab", t);
                          },
                          expression: "state.privateTab",
                        },
                      },
                      e._l(e.cstate.tabList, function (t) {
                        return n(
                          "the-tab",
                          { key: t.id, attrs: { value: t.id } },
                          [e._v(" " + e._s(t.name) + " ")]
                        );
                      }),
                      1
                    ),
                  ]
                : e._e(),
            ],
            2
          );
        },
        Cn = [],
        Sn = {
          mounted() {
            this.$refs.svg &&
              (this.$refs.svg.innerHTML =
                '<path fill-rule="nonzero" d="M56 29.333H34.667V8a2.667 2.667 0 00-5.334 0v21.333H8a2.667 2.667 0 000 5.334h21.333V56a2.667 2.667 0 005.334 0V34.667H56a2.667 2.667 0 000-5.334z"></path>');
          },
          render(e) {
            const t = ["eg-icon", this.$attrs.class].filter(Boolean).join(" ");
            return e(
              "svg",
              {
                ref: "svg",
                attrs: Object.assign(
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    version: "1.1",
                    viewBox: "0 0 64 64",
                    "xml:space": "preserve",
                    focusable: "false",
                    style:
                      "fill: currentColor; width: 1em; height: 1em; display: inline-block; user-select: none;",
                  },
                  this.$attrs,
                  { class: t }
                ),
                on: this.$listeners,
              },
              []
            );
          },
        },
        An = Object(u["defineComponent"])({
          components: { Plus: Sn },
          props: { hasLogin: { default: !1 } },
          setup: function () {
            var e = Object(i["useService"])(),
              t = e.roleService,
              n = e.taskService,
              r = n.state,
              a = Object(u["reactive"])({
                tabList: Object(u["computed"])(function () {
                  var e = t.state.currentRole;
                  return e === o["EProcessRoleType"].CREATOR
                    ? [
                        {
                          name: o["EProcessTabType"].getLabelById(
                            o["EProcessTabType"].CREATED
                          ),
                          id: o["EProcessTabType"].CREATED,
                        },
                      ]
                    : e === o["EProcessRoleType"].MANAGER
                    ? [
                        {
                          name: o["EProcessTabType"].getLabelById(
                            o["EProcessTabType"].ASSIGNED
                          ),
                          id: o["EProcessTabType"].ASSIGNED,
                        },
                        {
                          name: o["EProcessTabType"].getLabelById(
                            o["EProcessTabType"].HAS_ASSIGNED
                          ),
                          id: o["EProcessTabType"].HAS_ASSIGNED,
                        },
                      ]
                    : e === o["EProcessRoleType"].RECEIVER
                    ? [
                        {
                          name: o["EProcessTabType"].getLabelById(
                            o["EProcessTabType"].ANNOTATED
                          ),
                          id: o["EProcessTabType"].ANNOTATED,
                        },
                        {
                          name: o["EProcessTabType"].getLabelById(
                            o["EProcessTabType"].AUDIT
                          ),
                          id: o["EProcessTabType"].AUDIT,
                        },
                      ]
                    : void 0;
                }),
                showCreateTask: Object(u["computed"])(function () {
                  return t.state.currentRole === o["EProcessRoleType"].CREATOR;
                }),
                showTeamManage: Object(u["computed"])(function () {
                  return [
                    o["EProcessRoleType"].CREATOR,
                    o["EProcessRoleType"].MANAGER,
                  ].some(function (e) {
                    return e === t.state.currentRole;
                  });
                }),
              });
            return (
              Object(u["watch"])(
                function () {
                  return a.tabList;
                },
                function (e) {
                  if (e && e.length) {
                    var t = e.some(function (e) {
                      return e.id === r.privateTab;
                    });
                    !t && (r.privateTab = e[0].id);
                  }
                },
                { immediate: !0 }
              ),
              Object(u["watch"])(
                function () {
                  return r.privateTab;
                },
                function (e) {
                  e === o["EProcessTabType"].ANNOTATED &&
                    (r.subTaskTab = o["ESubTaskType"].ANNOTATE),
                    e === o["EProcessTabType"].AUDIT &&
                      (r.subTaskTab = o["ESubTaskType"].AUDIT);
                },
                { immediate: !0 }
              ),
              { state: r, cstate: a }
            );
          },
        }),
        In = An,
        Nn =
          (n("9dc5"), Object(f["a"])(In, jn, Cn, !1, null, "7f255fd2", null)),
        Rn = Nn.exports,
        Dn = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "the-modal",
            { ref: "modal", staticClass: "task-tip-modal" },
            [
              n("template", { slot: "head" }, [e._v("任务数量已达上限")]),
              n("template", { slot: "body" }, [
                e._v(
                  " 每个" +
                    e._s(e.p2c("项目")) +
                    "最多支持3个正在进行的多人标注任务 "
                ),
              ]),
              n(
                "template",
                { slot: "foot" },
                [n("the-button", { on: { click: e.close } }, [e._v("知道了")])],
                1
              ),
            ],
            2
          );
        },
        Mn = [],
        Ln = Object(u["defineComponent"])({
          props: {},
          setup: function () {
            var e = Object(W["useModalCloser"])(),
              t = e.modal,
              n = e.close;
            return { modal: t, close: n, p2c: K["a"] };
          },
        }),
        Pn = Ln,
        Un =
          (n("efb2"), Object(f["a"])(Pn, Dn, Mn, !1, null, "f815337e", null)),
        $n = Un.exports;
      function Bn() {
        var e = Object(i["useService"])(),
          t = e.taskService,
          n = 0;
        Object(u["watch"])(
          function () {
            return t.state.taskList.items;
          },
          function (e) {
            clearTimeout(n),
              e.some(function (e) {
                return e.annoStatus === o["EAnnoStatus"].IN_DISTRIBUTION;
              }) &&
                (n = setTimeout(function () {
                  return t.fetchTaskList(!1);
                }, 5e3));
          }
        ),
          Object(u["onBeforeUnmount"])(function () {
            clearTimeout(n);
          });
      }
      function zn(e) {
        var t = Object(u["getCurrentInstance"])().proxy,
          n = Object(i["useService"])(),
          r = n.taskService;
        function s(e) {
          return r.handlePageChange(e);
        }
        var c = e ? o["ETaskType"].CREATED : o["ETaskType"].RECEIVED,
          l = o["ETaskType"].toArray();
        (c = l.length ? l[0].id : void 0),
          t.$route.query.tab === o["ETaskType"].RECEIVED &&
            (c = o["ETaskType"].RECEIVED),
          c && (r.state.tab = c);
        var d = Object(u["reactive"])({
          list: l,
          noPermission: !l.length,
          subTabs: o["ESubTaskType"].toArray(),
          showSubTabs: Object(u["computed"])(function () {
            return r.state.tab === o["ETaskType"].RECEIVED && a["env"].isCloud;
          }),
          defTab: c,
        });
        return (
          Object(u["watch"])(
            function () {
              return a["env"].isCloud
                ? r.state.tab + r.state.subTaskTab
                : r.state.privateTab;
            },
            function () {
              d.noPermission ||
                ((r.state.taskList = { total: 0, items: [] }),
                s({ offset: 0 }));
            }
          ),
          { tab: d, handlePageChange: s }
        );
      }
      var Vn = Object(u["defineComponent"])({
          components: {
            GuideTop: E,
            RoleChange: En,
            CtlBar: Rn,
            ListFilter: Ct,
          },
          setup: function () {
            var e = Object(u["getCurrentInstance"])().proxy,
              t = Object(i["useService"])(),
              n = t.taskService,
              r = t.roleService;
            n.reset(), r.init();
            var s = Object(K["c"])($n),
              c = hn(),
              l = n.state,
              d = zn(c),
              f = d.tab,
              p = d.handlePageChange;
            e.$route.query.subTaskTab === "".concat(o["ESubTaskType"].AUDIT) &&
              ((l.subTaskTab = o["ESubTaskType"].AUDIT),
              a["env"].isPrivate &&
                (l.privateTab = o["EProcessTabType"].AUDIT));
            var v = Object(u["reactive"])({
              taskTable: Object(u["computed"])(function () {
                return a["env"].isCloud ? vn(l.tab) : mn(l.privateTab);
              }),
            });
            function m() {
              return b.apply(this, arguments);
            }
            function b() {
              return (
                (b = Object(h["a"])(
                  regeneratorRuntime.mark(function t() {
                    var r;
                    return regeneratorRuntime.wrap(function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), n.preValidate();
                          case 2:
                            if (((r = t.sent), r)) {
                              t.next = 6;
                              break;
                            }
                            return s(), t.abrupt("return");
                          case 6:
                            e.$router.push(
                              Object(K["b"])("/mulan/task/create", e)
                            );
                          case 7:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )),
                b.apply(this, arguments)
              );
            }
            var g = [{ name: "多人标注" }];
            return (
              _n(function () {
                return g;
              }),
              Bn(),
              Object(u["onMounted"])(function () {
                f.noPermission || p({ offset: 0 });
              }),
              {
                tab: f,
                loginUrl: gn(),
                hasLogin: c,
                breadcrumbList: g,
                state: v,
                tstate: n.state,
                handleCreateTask: m,
                handleManageTeam: function () {
                  e.$router.push(Object(K["b"])("/mulan/team/list", e));
                },
                handlePageChange: p,
                showProcess: Object(u["computed"])(function () {
                  return !a["env"].isCloud && r.state.currentRole;
                }),
                isCloud: Object(u["computed"])(function () {
                  return a["env"].isCloud;
                }),
              }
            );
          },
        }),
        Fn = Vn,
        qn = (n("507a"), Object(f["a"])(Fn, m, b, !1, null, "0e3eeb56", null)),
        Gn = qn.exports,
        Wn = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            {
              directives: [
                {
                  name: "loading",
                  rawName: "v-loading",
                  value: e.state.loading,
                  expression: "state.loading",
                },
              ],
              staticClass: "page-task-progress",
            },
            [
              e.state.loading
                ? e._e()
                : [
                    n(
                      "div",
                      { staticClass: "main-detail" },
                      e._l(e.cstate.list, function (t, r) {
                        return n(
                          "span",
                          { key: r, staticClass: "detail-item" },
                          [
                            n("span", { staticClass: "label" }, [
                              e._v(e._s(t[0])),
                            ]),
                            n(
                              "span",
                              {
                                staticClass: "content",
                                attrs: { title: t[1] },
                              },
                              [e._v(e._s(t[1]))]
                            ),
                          ]
                        );
                      }),
                      0
                    ),
                    n(
                      "the-table",
                      { attrs: { source: e.state.detail.items } },
                      [
                        n(
                          "the-column",
                          {
                            attrs: {
                              render: function (e) {
                                return e.subTaskId;
                              },
                            },
                          },
                          [e._v("序号")]
                        ),
                        n(
                          "the-column",
                          {
                            attrs: {
                              render: function (t) {
                                return e.formatter.getAnnoName(t);
                              },
                            },
                          },
                          [e._v("标注员")]
                        ),
                        n(
                          "the-column",
                          {
                            attrs: {
                              render: function (t) {
                                return e.formatter.getAnnoCol(t);
                              },
                            },
                          },
                          [e._v("已标注/待标注")]
                        ),
                        n(
                          "the-column",
                          {
                            attrs: {
                              render: function (e) {
                                return (
                                  ~~(
                                    (100 *
                                      (e.mulanAnnotatedCount + e.deleteCount)) /
                                    e.entityCount
                                  ) + "%"
                                );
                              },
                            },
                          },
                          [e._v(" 标注进度 ")]
                        ),
                        n(
                          "the-column",
                          {
                            scopedSlots: e._u(
                              [
                                {
                                  key: "render",
                                  fn: function (e) {
                                    var t = e.row;
                                    return [
                                      n("StatusRender", {
                                        attrs: { status: t.annoStatus },
                                      }),
                                    ];
                                  },
                                },
                              ],
                              null,
                              !1,
                              501560538
                            ),
                          },
                          [e._v("标注状态 ")]
                        ),
                        e.state.isDataBml
                          ? e._e()
                          : n(
                              "the-column",
                              {
                                attrs: {
                                  render: function (e) {
                                    return e.deleteCount;
                                  },
                                },
                              },
                              [e._v("删除数量")]
                            ),
                        n(
                          "the-column",
                          {
                            attrs: {
                              render: function (t) {
                                return e.formatter.getAuditName(t.auditInfo);
                              },
                            },
                          },
                          [e._v("审核员")]
                        ),
                        n(
                          "the-column",
                          {
                            attrs: {
                              render: function (t) {
                                return e.formatter.getAuditCol(t);
                              },
                            },
                          },
                          [e._v(" 已审核/待审核 ")]
                        ),
                        n(
                          "the-column",
                          {
                            attrs: {
                              render: function (t) {
                                return e.formatter.getAuditPer(t);
                              },
                            },
                          },
                          [e._v(" 审核进度 ")]
                        ),
                        n(
                          "the-column",
                          {
                            attrs: {
                              render: function (t) {
                                return e.formatter.getAuditResultCol(t);
                              },
                            },
                          },
                          [e._v(" 审核通过/不通过 ")]
                        ),
                        n(
                          "the-column",
                          {
                            attrs: {
                              render: function (t) {
                                return e.formatter.getAuditResultPer(t);
                              },
                            },
                          },
                          [e._v(" 通过率 ")]
                        ),
                        n(
                          "the-column",
                          {
                            scopedSlots: e._u(
                              [
                                {
                                  key: "render",
                                  fn: function (e) {
                                    var t = e.row;
                                    return [
                                      n("StatusRender", {
                                        attrs: {
                                          type: "audit",
                                          status: t.auditInfo.auditStatus,
                                          "return-type": t.type,
                                        },
                                      }),
                                    ];
                                  },
                                },
                              ],
                              null,
                              !1,
                              1496315426
                            ),
                          },
                          [e._v(" 审核状态 ")]
                        ),
                        n(
                          "the-column",
                          {
                            attrs: {
                              render: function (e) {
                                return e.createTime;
                              },
                            },
                          },
                          [e._v("创建时间")]
                        ),
                        e.formatter.opShown.value
                          ? n(
                              "the-column",
                              {
                                scopedSlots: e._u(
                                  [
                                    {
                                      key: "render",
                                      fn: function (t) {
                                        var r = t.row;
                                        return [
                                          n("RenderCtl", {
                                            attrs: {
                                              row: r,
                                              detail: e.state.detail,
                                            },
                                            on: { refresh: e.handlePageChange },
                                          }),
                                        ];
                                      },
                                    },
                                  ],
                                  null,
                                  !1,
                                  1697130809
                                ),
                              },
                              [e._v(" 操作 ")]
                            )
                          : e._e(),
                      ],
                      1
                    ),
                    n(
                      "div",
                      { staticClass: "pager-wrap" },
                      [
                        n(
                          "the-paginator",
                          e._b(
                            {
                              attrs: { total: e.state.detail.total },
                              on: { change: e.handlePageChange },
                            },
                            "the-paginator",
                            e.state.pageOptions,
                            !1
                          )
                        ),
                      ],
                      1
                    ),
                  ],
            ],
            2
          );
        },
        Kn = [],
        Hn = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "render-ctl" },
            [
              e._l(e.state.ctlList, function (t, r) {
                return [
                  t.visible
                    ? n(
                        "span",
                        {
                          directives: [
                            {
                              name: "permission",
                              rawName: "v-permission",
                              value: t.permission,
                              expression: "item.permission",
                            },
                          ],
                          key: r,
                          staticClass: "link-blue",
                          class: { disabled: !!t.disabled },
                          on: {
                            click: function (e) {
                              !t.disabled && t.click();
                            },
                          },
                        },
                        [
                          n("span", [e._v(e._s(t.name))]),
                          t.tip
                            ? n(
                                "the-icon-tip",
                                {
                                  staticStyle: { "margin-left": "3px" },
                                  attrs: {
                                    name: "exclamation-sqr",
                                    placement: "top",
                                  },
                                },
                                [e._v(" " + e._s(t.tip) + " ")]
                              )
                            : e._e(),
                        ],
                        1
                      )
                    : e._e(),
                ];
              }),
            ],
            2
          );
        },
        Xn = [],
        Qn = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "the-modal",
            { ref: "modal", staticClass: "trans-modal" },
            [
              n("template", { slot: "head" }, [e._v("任务移交")]),
              n(
                "template",
                { slot: "body" },
                [
                  n(
                    "the-form",
                    {
                      ref: "form",
                      staticStyle: { width: "450px" },
                      attrs: { rules: e.cstate.rules, errors: e.state.errors },
                      on: {
                        "update:errors": function (t) {
                          return e.$set(e.state, "errors", t);
                        },
                      },
                    },
                    [
                      e.isDataBml
                        ? n(
                            "the-field",
                            {
                              attrs: {
                                name: "newEmail",
                                label: "选择下一位" + e.subTaskText + "成员：",
                              },
                            },
                            [
                              n("TeamMembers", {
                                staticStyle: { width: "270px" },
                                attrs: { teamId: e.teamId },
                                on: { change: e.handleMemberChange },
                                model: {
                                  value: e.state.form.userId,
                                  callback: function (t) {
                                    e.$set(e.state.form, "userId", t);
                                  },
                                  expression: "state.form.userId",
                                },
                              }),
                            ],
                            1
                          )
                        : n(
                            "the-field",
                            {
                              attrs: {
                                name: "newEmail",
                                label: "下一位" + e.subTaskText + "成员邮箱：",
                              },
                            },
                            [
                              n("the-input", {
                                staticStyle: { width: "270px" },
                                attrs: {
                                  placeholder:
                                    "请输入下一位" +
                                    e.subTaskText +
                                    "员邮箱账号",
                                },
                                model: {
                                  value: e.state.form.newEmail,
                                  callback: function (t) {
                                    e.$set(e.state.form, "newEmail", t);
                                  },
                                  expression: "state.form.newEmail",
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
              ),
              n(
                "template",
                { slot: "foot" },
                [
                  n("the-button", { on: { click: e.submit } }, [e._v("确定")]),
                  n(
                    "the-button",
                    { staticClass: "hollow", on: { click: e.close } },
                    [e._v("取消")]
                  ),
                ],
                1
              ),
            ],
            2
          );
        },
        Yn = [],
        Zn = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "the-dropdown",
            {
              staticClass: "team-members",
              model: {
                value: e.userId,
                callback: function (t) {
                  e.userId = t;
                },
                expression: "userId",
              },
            },
            [
              e.memberList.length
                ? e._l(e.memberList, function (t, r) {
                    return n(
                      "the-dropdown-item",
                      {
                        key: r,
                        attrs: { disabled: t.disabled, value: t.userId },
                      },
                      [
                        t.tip
                          ? n(
                              "eg-tooltip",
                              {
                                attrs: {
                                  effect: "light",
                                  content: t.tip,
                                  placement: "right",
                                },
                              },
                              [e._v(" " + e._s(t.name) + " ")]
                            )
                          : n("span", [e._v(e._s(t.name))]),
                      ],
                      1
                    );
                  })
                : e._e(),
              e.loading
                ? n(
                    "the-dropdown-item",
                    {
                      directives: [
                        {
                          name: "loading",
                          rawName: "v-loading",
                          value: !0,
                          expression: "true",
                        },
                      ],
                      staticClass: "member-loading",
                    },
                    [e._v(" 加载中，请稍等... ")]
                  )
                : e.memberList.length
                ? e._e()
                : n("the-dropdown-item", { staticClass: "create-item" }, [
                    n("span", [e._v("暂无成员")]),
                  ]),
            ],
            2
          );
        },
        Jn = [],
        er = Object(u["defineComponent"])({
          model: { prop: "value", event: "change" },
          props: {
            value: { type: String, default: "" },
            teamId: { required: !0, type: Number },
          },
          setup: function (e, t) {
            var n = t.emit,
              r = Object(u["computed"])({
                get: function () {
                  return e.value;
                },
                set: function (e) {
                  return n("change", e);
                },
              }),
              a = Object(i["useService"])(),
              s = a.teamService;
            s.info.reset();
            var c = Object(u["computed"])(function () {
                return s.info.state.loading;
              }),
              l = Object(u["computed"])(function () {
                var e;
                return null === (e = s.info.state.teamInfo.members) ||
                  void 0 === e
                  ? void 0
                  : e.map(function (e) {
                      var t = Object(S["a"])({}, e);
                      return (
                        e.status !== o["EMemberStatus"].OPENING &&
                          Object.assign(t, {
                            disabled: !0,
                            tip: "账号已".concat(
                              o["EMemberStatus"].getLabelById(e.status)
                            ),
                          }),
                        t
                      );
                    });
              });
            return (
              Object(u["onMounted"])(function () {
                s.info.fetchTeamDetail({ teamId: e.teamId });
              }),
              { userId: r, memberList: l, loading: c }
            );
          },
        }),
        tr = er,
        nr =
          (n("446b"), Object(f["a"])(tr, Zn, Jn, !1, null, "824be2a2", null)),
        rr = nr.exports,
        ar = Object(u["defineComponent"])({
          components: { TeamMembers: rr },
          props: {
            subTaskId: { type: Number, required: !0 },
            subTaskType: {
              type: Number,
              default: o["EAnnoActionType"].ANNOTATE,
            },
            teamId: { required: !0, type: Number },
          },
          setup: function (e, t) {
            var n = Object(W["useModalCloser"])(),
              r = n.modal,
              a = n.close,
              s = Object(u["ref"])(null),
              c = Object(W["useToast"])(),
              l = c.succeed,
              d = c.fail,
              f = Object(i["useService"])(),
              p = f.taskService,
              v = f.bmlMemberService,
              m = f.envService,
              b = f.teamService,
              g = m.state.isDataBml,
              y = Object(u["computed"])(function () {
                return o["EAnnoActionType"].getLabelById(e.subTaskType);
              }),
              T = Object(u["reactive"])({
                memberList: Object(u["computed"])(function () {
                  return v.state.memberList;
                }),
                rules: Object(u["computed"])(function () {
                  return {
                    newEmail: g
                      ? [
                          {
                            required: !0,
                            message: "请选择新".concat(y.value, "员"),
                          },
                        ]
                      : [
                          {
                            required: !0,
                            message: "请输入新".concat(y.value, "员邮箱账号"),
                          },
                          { type: "email", message: "请输入正确格式的邮箱" },
                        ],
                  };
                }),
              }),
              x = Object(u["reactive"])({
                errors: {},
                form: { subTaskId: e.subTaskId, newEmail: "", userId: "" },
              });
            function w() {
              return O.apply(this, arguments);
            }
            function O() {
              return (
                (O = Object(h["a"])(
                  regeneratorRuntime.mark(function n() {
                    var r, i, c, u, f, v, m, h;
                    return regeneratorRuntime.wrap(function (n) {
                      while (1)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (n.next = 2), s.value.submit();
                          case 2:
                            if (((i = n.sent), (c = i.hasError), !c)) {
                              n.next = 6;
                              break;
                            }
                            return n.abrupt("return");
                          case 6:
                            if (!g || !x.form.userId) {
                              n.next = 13;
                              break;
                            }
                            return (
                              (n.next = 9),
                              b.list.fetchUserPermission({
                                userId: x.form.userId,
                              })
                            );
                          case 9:
                            if (((u = n.sent), u.includes("write"))) {
                              n.next = 13;
                              break;
                            }
                            return (
                              d("所选用户无任务接收方写入权限，请重新选择！"),
                              n.abrupt("return")
                            );
                          case 13:
                            return (
                              (r = {}),
                              Object(_["a"])(
                                r,
                                o["EAnnoActionType"].ANNOTATE,
                                function () {
                                  return p.transferTask(x.form);
                                }
                              ),
                              Object(_["a"])(
                                r,
                                o["EAnnoActionType"].AUDIT,
                                function () {
                                  return p.transferAuditTask({
                                    auditTaskId: e.subTaskId,
                                    newEmail: x.form.newEmail,
                                    userId: x.form.userId,
                                  });
                                }
                              ),
                              (f = r),
                              (n.next = 16),
                              Object(Z["e"])(f[e.subTaskType]())
                            );
                          case 16:
                            if (
                              ((v = n.sent),
                              (m = Object(R["a"])(v, 1)),
                              (h = m[0]),
                              !h)
                            ) {
                              n.next = 22;
                              break;
                            }
                            return Object(Z["d"])(x, h), n.abrupt("return");
                          case 22:
                            l("操作成功"), a(), t.emit("refresh");
                          case 25:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                  })
                )),
                O.apply(this, arguments)
              );
            }
            var k = function (e) {
              var t;
              x.form.newEmail =
                (null ===
                  (t = T.memberList.find(function (t) {
                    return t.userId === e;
                  })) || void 0 === t
                  ? void 0
                  : t.email) || "";
            };
            return {
              state: x,
              cstate: T,
              subTaskText: y,
              form: s,
              modal: r,
              close: a,
              submit: w,
              isDataBml: g,
              handleMemberChange: k,
            };
          },
        }),
        ir = ar,
        or =
          (n("c2a2"), Object(f["a"])(ir, Qn, Yn, !1, null, "0fe27b32", null)),
        sr = or.exports,
        cr = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "the-modal",
            { ref: "modal", staticClass: "finish-modal" },
            [
              n("template", { slot: "head" }, [
                e._v("结束" + e._s(e.subTaskText)),
              ]),
              n("template", { slot: "body" }, [
                n(
                  "div",
                  { staticClass: "modal-body" },
                  [
                    n("the-icon", {
                      staticClass: "body-icon",
                      attrs: { name: "warning" },
                    }),
                    n("div", { staticClass: "body-content" }, [
                      n("p", { staticClass: "modal-tip" }, [
                        e._v(
                          "结束后该" +
                            e._s(e.subTaskText) +
                            "成员不可再进入标注页面"
                        ),
                      ]),
                      n(
                        "p",
                        { staticClass: "modal-radio" },
                        [
                          e._v(" 已" + e._s(e.subTaskText) + "内容是否生效： "),
                          n(
                            "the-radio-group",
                            {
                              model: {
                                value: e.state.deleteAnno,
                                callback: function (t) {
                                  e.$set(e.state, "deleteAnno", t);
                                },
                                expression: "state.deleteAnno",
                              },
                            },
                            [
                              n("the-radio", { attrs: { value: 0 } }, [
                                e._v("是"),
                              ]),
                              n("the-radio", { attrs: { value: 1 } }, [
                                e._v("否"),
                              ]),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ]),
                  ],
                  1
                ),
              ]),
              n(
                "template",
                { slot: "foot" },
                [
                  n("the-button", { on: { click: e.submit } }, [e._v("确定")]),
                  n(
                    "the-button",
                    { staticClass: "hollow", on: { click: e.close } },
                    [e._v("取消")]
                  ),
                ],
                1
              ),
            ],
            2
          );
        },
        ur = [],
        lr = Object(u["defineComponent"])({
          props: {
            subTaskId: { type: Number, required: !0 },
            subTaskType: {
              type: Number,
              default: o["EAnnoActionType"].ANNOTATE,
            },
          },
          setup: function (e, t) {
            var n = Object(W["useModalCloser"])(),
              r = n.modal,
              a = n.close,
              s = Object(W["useToast"])(),
              c = s.succeed,
              l = Object(i["useService"])(),
              d = l.taskService,
              f = Object(u["reactive"])({ deleteAnno: 0 }),
              p = Object(u["computed"])(function () {
                return o["EAnnoActionType"].getLabelById(e.subTaskType);
              });
            function v() {
              return m.apply(this, arguments);
            }
            function m() {
              return (
                (m = Object(h["a"])(
                  regeneratorRuntime.mark(function n() {
                    var r, i, s, u, l;
                    return regeneratorRuntime.wrap(function (n) {
                      while (1)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (r = {}),
                              Object(_["a"])(
                                r,
                                o["EAnnoActionType"].ANNOTATE,
                                function () {
                                  return d.finishSubTask({
                                    subTaskId: e.subTaskId,
                                    deleteAnno: f.deleteAnno,
                                  });
                                }
                              ),
                              Object(_["a"])(
                                r,
                                o["EAnnoActionType"].AUDIT,
                                function () {
                                  return d.finishAuditSubTask({
                                    auditTaskId: e.subTaskId,
                                    deleteAnno: f.deleteAnno,
                                  });
                                }
                              ),
                              (i = r),
                              (n.next = 3),
                              Object(Z["e"])(i[e.subTaskType]())
                            );
                          case 3:
                            if (
                              ((s = n.sent),
                              (u = Object(R["a"])(s, 1)),
                              (l = u[0]),
                              !l)
                            ) {
                              n.next = 8;
                              break;
                            }
                            return n.abrupt("return");
                          case 8:
                            c("结束".concat(p.value, "成功")),
                              t.emit("refresh"),
                              a();
                          case 11:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                  })
                )),
                m.apply(this, arguments)
              );
            }
            return { subTaskText: p, state: f, modal: r, close: a, submit: v };
          },
        }),
        dr = lr,
        fr =
          (n("64d4"), Object(f["a"])(dr, cr, ur, !1, null, "393ab925", null)),
        pr = fr.exports,
        vr = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "the-modal",
            { ref: "modal", staticClass: "turnback-modal" },
            [
              n("template", { slot: "head" }, [e._v("任务打回")]),
              n(
                "template",
                { slot: "body" },
                [
                  n(
                    "the-form",
                    { staticStyle: { width: "600px" } },
                    [
                      n(
                        "the-field",
                        { attrs: { label: "打回数据范围", noLabel: "" } },
                        [
                          n(
                            "the-radio-group",
                            {
                              model: {
                                value: e.state.type,
                                callback: function (t) {
                                  e.$set(e.state, "type", t);
                                },
                                expression: "state.type",
                              },
                            },
                            e._l(e.optList, function (t, r) {
                              return n(
                                "the-radio",
                                { key: r, attrs: { value: t.id } },
                                [e._v(" " + e._s(t.label) + " ")]
                              );
                            }),
                            1
                          ),
                          e.tip
                            ? n("div", { staticClass: "tip" }, [
                                e._v(e._s(e.tip)),
                              ])
                            : e._e(),
                        ],
                        1
                      ),
                      n(
                        "the-field",
                        { attrs: { label: "审核抽检比例", noLabel: "" } },
                        [
                          n("eg-input-number", {
                            attrs: {
                              "model-value": e.state.auditPercentage,
                              min: 1,
                              max: 100,
                              "controls-position": "right",
                            },
                            on: {
                              "update:modelValue": function (t) {
                                return e.$set(e.state, "auditPercentage", t);
                              },
                              "update:model-value": function (t) {
                                return e.$set(e.state, "auditPercentage", t);
                              },
                            },
                          }),
                          n("span", { staticClass: "audit-input-postfix" }, [
                            e._v("%"),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              n(
                "template",
                { slot: "foot" },
                [
                  n("the-button", { on: { click: e.submit } }, [e._v("确定")]),
                  n(
                    "the-button",
                    { staticClass: "hollow", on: { click: e.close } },
                    [e._v("取消")]
                  ),
                ],
                1
              ),
            ],
            2
          );
        },
        mr = [],
        br = Object(u["defineComponent"])({
          props: { subTaskId: Number },
          setup: function (e, t) {
            var n = Object(u["ref"])(null),
              r = Object(W["useToast"])(),
              a = r.succeed,
              s = Object(i["useService"])(),
              c = s.taskService;
            function l() {
              n.value.close();
            }
            var d = Object(u["reactive"])({
              type: o["EReturnType"].ALL,
              auditPercentage: 100,
            });
            function f() {
              return p.apply(this, arguments);
            }
            function p() {
              return (
                (p = Object(h["a"])(
                  regeneratorRuntime.mark(function n() {
                    var r, i, o;
                    return regeneratorRuntime.wrap(function (n) {
                      while (1)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.next = 2),
                              Object(Z["e"])(
                                c.turnbackTask({
                                  subTaskId: e.subTaskId,
                                  type: d.type,
                                  auditPercentage: d.auditPercentage,
                                })
                              )
                            );
                          case 2:
                            if (
                              ((r = n.sent),
                              (i = Object(R["a"])(r, 1)),
                              (o = i[0]),
                              !o)
                            ) {
                              n.next = 7;
                              break;
                            }
                            return n.abrupt("return");
                          case 7:
                            a("操作成功"), l(), t.emit("refresh");
                          case 10:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                  })
                )),
                p.apply(this, arguments)
              );
            }
            var v = Object(u["computed"])(function () {
              var e = o["EReturnType"].getItemById(d.type);
              return null === e || void 0 === e ? void 0 : e.tip;
            });
            return {
              modal: n,
              state: d,
              close: l,
              submit: f,
              optList: o["EReturnType"].toArray(),
              tip: v,
            };
          },
        }),
        hr = br,
        gr =
          (n("56d7"), Object(f["a"])(hr, vr, mr, !1, null, "78ebcd1b", null)),
        yr = gr.exports,
        _r = Object(u["defineComponent"])({
          props: {
            row: { required: !0, type: Object },
            detail: { required: !0, type: Object },
          },
          setup: function (e, t) {
            var n = Object(T["useConfirmModal"])(),
              r = Object(i["useService"])(),
              a = r.envService,
              s = function (n) {
                return function () {
                  return {
                    props: {
                      subTaskId:
                        n === o["EAnnoActionType"].ANNOTATE
                          ? e.row.subTaskId
                          : e.row.auditInfo.auditTaskId,
                      subTaskType: n,
                      teamId:
                        n === o["EAnnoActionType"].ANNOTATE
                          ? e.detail.teamId
                          : e.detail.auditTeamId,
                    },
                    on: {
                      refresh: function () {
                        t.emit("refresh");
                      },
                    },
                  };
                };
              },
              c = function (e) {
                return Object(K["c"])(sr, s(e));
              },
              l = function (e) {
                return Object(K["c"])(pr, s(e));
              },
              d = Object(K["c"])(yr, s(o["EAnnoActionType"].ANNOTATE));
            function f(e) {
              n({
                head: "任务链接",
                body: e,
                confirmText: "确定",
                showCancel: !1,
              });
            }
            var p = Object(u["reactive"])({
              ctlList: Object(u["computed"])(function () {
                var t,
                  n = [
                    o["EAnnoStatus"].TO_ANNOTATE,
                    o["EAnnoStatus"].IN_ANNOTATE,
                  ].includes(e.row.annoStatus),
                  r = [
                    o["EAnnoStatus"].END_ANNO_WITH,
                    o["EAnnoStatus"].END_ANNO_WITHOUT,
                  ].includes(e.row.annoStatus),
                  i = [
                    o["EAnnoStatus"].TO_ANNOTATE,
                    o["EAnnoStatus"].IN_ANNOTATE,
                    o["EAnnoStatus"].ANNO_TASK_FINISH,
                  ].includes(e.row.auditInfo.auditStatus),
                  s = [
                    o["EAnnoStatus"].END_ANNO_WITH,
                    o["EAnnoStatus"].END_ANNO_WITHOUT,
                  ].includes(e.row.auditInfo.auditStatus);
                return [
                  {
                    name: "查看任务链接",
                    permission: { mulancreate: "write" },
                    click: function () {
                      return f(e.row.taskLink);
                    },
                    visible: !a.state.isDataBml,
                  },
                  {
                    name: "任务打回",
                    click: d,
                    permission: { mulancreate: "write" },
                    visible:
                      e.row.annoStatus === o["EAnnoStatus"].FINISH &&
                      (null === (t = e.row.auditInfo) || void 0 === t
                        ? void 0
                        : t.auditStatus) === o["EAnnoStatus"].FINISH,
                  },
                  {
                    name: "结束标注",
                    permission: { mulancreate: "write" },
                    click: l(o["EAnnoActionType"].ANNOTATE),
                    visible: n,
                  },
                  {
                    name: "任务移交",
                    permission: { mulancreate: "write" },
                    click: c(o["EAnnoActionType"].ANNOTATE),
                    visible: n || r,
                    disabled: !r,
                    tip: r ? "" : "请先结束标注再移交",
                  },
                  {
                    name: "结束审核",
                    permission: { mulancreate: "write" },
                    click: l(o["EAnnoActionType"].AUDIT),
                    visible: i,
                  },
                  {
                    name: "任务移交",
                    permission: { mulancreate: "write" },
                    click: c(o["EAnnoActionType"].AUDIT),
                    visible: i || s,
                    disabled: !s,
                    tip: s ? "" : "请先结束审核再移交",
                  },
                ];
              }),
            });
            return { state: p };
          },
        }),
        Tr = _r,
        xr =
          (n("cb91"), Object(f["a"])(Tr, Hn, Xn, !1, null, "e17fb75a", null)),
        wr = xr.exports,
        Or = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "status-render" },
            [
              e.item
                ? [
                    n("div", {
                      staticClass: "color",
                      style: { "background-color": e.item.color },
                    }),
                    n("div", { staticClass: "text" }, [
                      e._v(
                        e._s(
                          "anno" === e.type
                            ? e.item.subLabel || e.item.label
                            : e.item.auditLabel || e.item.label
                        )
                      ),
                    ]),
                    e.isTimeout
                      ? n(
                          "the-icon-tip",
                          {
                            staticClass: "timeout-tip",
                            attrs: {
                              placement: "top",
                              name: "question-mark-small-circle-o",
                            },
                          },
                          [
                            e._v(
                              " 该子任务已过期，您可在“多人标注任务列表”中点击“终止任务”，查看该任务中已标注的数据 "
                            ),
                          ]
                        )
                      : e._e(),
                    e.returnTip
                      ? n(
                          "the-icon-tip",
                          {
                            staticClass: "timeout-tip",
                            attrs: {
                              placement: "top",
                              name: "question-mark-small-circle-o",
                            },
                          },
                          [e._v(" 任务打回（" + e._s(e.returnTip) + "） ")]
                        )
                      : e._e(),
                  ]
                : e._e(),
            ],
            2
          );
        },
        kr = [],
        Er = Object(u["defineComponent"])({
          props: {
            type: { type: String, default: "anno" },
            returnType: { type: Number },
            status: { required: !0, type: Number },
          },
          setup: function (e) {
            return {
              isTimeout: Object(u["computed"])(function () {
                return e.status === o["EAnnoStatus"].OVERDUE;
              }),
              returnTip: Object(u["computed"])(function () {
                return (
                  e.status === o["EAnnoStatus"].TURN_BACK &&
                  o["EReturnType"].getLabelById(e.returnType)
                );
              }),
              item: o["EAnnoStatus"].getItemById(e.status),
            };
          },
        }),
        jr = Er,
        Cr =
          (n("14c5"), Object(f["a"])(jr, Or, kr, !1, null, "3d749b9d", null)),
        Sr = Cr.exports;
      function Ar() {
        var e = Object(i["useService"])(),
          t = e.envService,
          n = a["permission"].usePMService();
        return {
          getAnnoCol: function (e) {
            try {
              return (
                e.mulanAnnotatedCount +
                "/" +
                (e.entityCount - e.mulanAnnotatedCount - e.deleteCount)
              );
            } catch (t) {
              return "-";
            }
          },
          getAnnoName: function (e) {
            return t.state.isCloud ? e.memberEmail : e.memberName;
          },
          getAuditName: function (e) {
            return t.state.isCloud ? e.memberEmail || "-" : e.memberName || "-";
          },
          getAuditCol: function (e) {
            try {
              return e.auditInfo
                ? e.auditInfo.passCount +
                    e.auditInfo.unpassCount +
                    "/" +
                    (e.auditInfo.auditCount -
                      e.auditInfo.passCount -
                      e.auditInfo.unpassCount -
                      e.auditInfo.deleteCount)
                : "-";
            } catch (t) {
              return "-";
            }
          },
          getAuditPer: function (e) {
            try {
              return e.auditInfo
                ? ~~(
                    (100 * (e.auditInfo.passCount + e.auditInfo.unpassCount)) /
                    e.auditInfo.auditCount
                  ) + "%"
                : "-";
            } catch (t) {
              return "-";
            }
          },
          getAuditResultCol: function (e) {
            try {
              return e.auditInfo
                ? e.auditInfo.passCount + "/" + e.auditInfo.unpassCount
                : "-";
            } catch (t) {
              return "-";
            }
          },
          getAuditResultPer: function (e) {
            try {
              return e.auditInfo
                ? ~~(
                    (100 * e.auditInfo.passCount) /
                    (e.auditInfo.passCount + e.auditInfo.unpassCount)
                  ) + "%"
                : "-";
            } catch (t) {
              return "-";
            }
          },
          opShown: Object(u["computed"])(function () {
            return n.haveSomePermission("write", "mulancreate");
          }),
        };
      }
      var Ir = Object(u["defineComponent"])({
          components: { RenderCtl: wr, StatusRender: Sr },
          setup: function () {
            var e = Object(u["getCurrentInstance"])().proxy,
              t = Object(i["useService"])(),
              n = t.taskService,
              r = t.envService,
              a = Object(u["reactive"])({
                loading: !1,
                isDataBml: !r.state.isCloud,
                detail: null,
                pageOptions: { offset: 0, pageSize: 20, steps: [10, 20, 30] },
              }),
              o = Object(u["reactive"])({
                taskId: Object(u["computed"])(function () {
                  return +e.$route.query.taskId;
                }),
                list: Object(u["computed"])(function () {
                  var e = a.detail;
                  if (!e) return [];
                  var t = e.annotateCount,
                    n = e.deleteCount,
                    r =
                      ~~((100 * (t + n)) / e.entityCount) +
                      "%（已标注：".concat(t, "，已删除：").concat(n, "）");
                  return [
                    ["数据集ID：", e.datasetId],
                    ["名称：", e.taskName],
                    ["团队人数：", e.workerTotal],
                    ["每人标注数量：", e.distributeCount],
                    ["任务总量：", e.entityCount],
                    ["整体任务完成度：", r],
                  ];
                }),
              });
            function s() {
              return c.apply(this, arguments);
            }
            function c() {
              return (
                (c = Object(h["a"])(
                  regeneratorRuntime.mark(function e() {
                    var t,
                      r = arguments;
                    return regeneratorRuntime.wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = r.length > 0 && void 0 !== r[0] ? r[0] : {}),
                              Object.assign(a.pageOptions, t),
                              (a.loading = !0),
                              (e.next = 5),
                              n.fetchAnnoDetail(
                                Object(S["a"])(
                                  { taskId: o.taskId },
                                  a.pageOptions
                                )
                              )
                            );
                          case 5:
                            (a.detail = e.sent), (a.loading = !1);
                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )),
                c.apply(this, arguments)
              );
            }
            s();
            var l = Object(u["computed"])(function () {
              return [
                { name: "多人标注", to: Object(K["b"])("/mulan/task/list", e) },
                { name: "查看进度" },
              ];
            });
            return (
              _n(function () {
                return l.value;
              }),
              {
                breadcrumbList: l,
                state: a,
                cstate: o,
                handlePageChange: s,
                formatter: Ar(),
              }
            );
          },
        }),
        Nr = Ir,
        Rr =
          (n("6434"), Object(f["a"])(Nr, Wn, Kn, !1, null, "58cba129", null)),
        Dr = Rr.exports,
        Mr = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "page-task-create" },
            [n("CreateForm")],
            1
          );
        },
        Lr = [],
        Pr = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "the-form",
            {
              ref: "form",
              staticClass: "task-create-form",
              attrs: { rules: e.state.rules, errors: e.state.errors },
              on: {
                "update:errors": function (t) {
                  return e.$set(e.state, "errors", t);
                },
              },
            },
            [
              n(
                "div",
                { staticClass: "info" },
                [
                  n("h2", { staticClass: "title basic-info" }, [
                    e._v("基本信息"),
                  ]),
                  n(
                    "the-field",
                    {
                      attrs: {
                        name: "taskName",
                        label: "任务名称",
                        required: "",
                      },
                    },
                    [
                      n("the-input", {
                        staticClass: "w400",
                        attrs: { placeholder: "请输入任务名称" },
                        model: {
                          value: e.state.form.taskName,
                          callback: function (t) {
                            e.$set(e.state.form, "taskName", t);
                          },
                          expression: "state.form.taskName",
                        },
                      }),
                    ],
                    1
                  ),
                  e.cstate.showDatasouceType
                    ? n(
                        "the-field",
                        {
                          attrs: {
                            name: "datasourceType",
                            label: "数据来源",
                            required: "",
                          },
                        },
                        [
                          n(
                            "the-radio-group",
                            {
                              model: {
                                value: e.state.form.datasourceType,
                                callback: function (t) {
                                  e.$set(e.state.form, "datasourceType", t);
                                },
                                expression: "state.form.datasourceType",
                              },
                            },
                            e._l(e.EDatasourceType.toArray(), function (t) {
                              return n(
                                "the-radio",
                                {
                                  key: t.id,
                                  attrs: { value: t.id, disabled: "" },
                                },
                                [e._v(e._s(t.label) + " ")]
                              );
                            }),
                            1
                          ),
                        ],
                        1
                      )
                    : e._e(),
                  e.cstate.isDataHouse
                    ? n(
                        "the-field",
                        { attrs: { label: "样本批次号" } },
                        [
                          n("the-input", {
                            staticClass: "w400",
                            attrs: { disabled: "" },
                            model: {
                              value: e.bState.form.batchId,
                              callback: function (t) {
                                e.$set(e.bState.form, "batchId", t);
                              },
                              expression: "bState.form.batchId",
                            },
                          }),
                        ],
                        1
                      )
                    : n(
                        "the-field",
                        {
                          attrs: {
                            name: "sourceDatasetId",
                            label: "选择数据集",
                            required: "",
                            noLabel: "",
                          },
                        },
                        [
                          n("DatasetDropdown", {
                            ref: "datasetDropdown",
                            staticClass: "w400",
                            on: { create: e.toDatasetCreate },
                            model: {
                              value: e.state.form.sourceDatasetId,
                              callback: function (t) {
                                e.$set(e.state.form, "sourceDatasetId", t);
                              },
                              expression: "state.form.sourceDatasetId",
                            },
                          }),
                          n(
                            "span",
                            {
                              directives: [
                                {
                                  name: "permission",
                                  rawName: "v-permission",
                                  value: { dataset: "write" },
                                  expression: "{dataset: 'write'}",
                                },
                              ],
                              staticClass: "link-blue",
                              staticStyle: { "margin-left": "8px" },
                              on: { click: e.toDatasetCreate },
                            },
                            [e._v("创建数据集 ")]
                          ),
                          n("div", { staticClass: "warn-tip" }, [
                            n(
                              "p",
                              {
                                staticClass: "tip-text",
                                staticStyle: { width: "auto" },
                              },
                              [
                                e._v(
                                  " " +
                                    e._s(e.$t(e.transType + ".datasetTip")) +
                                    " "
                                ),
                              ]
                            ),
                          ]),
                        ],
                        1
                      ),
                  e.cstate.isDataHouse
                    ? n(
                        "the-field",
                        {
                          attrs: {
                            name: "templateType",
                            label: "标注模版",
                            required: "",
                          },
                        },
                        [
                          n("Cascader", {
                            attrs: {
                              source: e.ttSource,
                              disabled: e.bState.ttDisabled,
                            },
                            model: {
                              value: e.ttValue,
                              callback: function (t) {
                                e.ttValue = t;
                              },
                              expression: "ttValue",
                            },
                          }),
                        ],
                        1
                      )
                    : e._e(),
                  e.cstate.labelVisible
                    ? n(
                        "the-field",
                        {
                          attrs: {
                            name: "labelCount",
                            label: "设置标签",
                            required: "",
                            "no-label": "",
                          },
                        },
                        [
                          n("LabelList", {
                            attrs: {
                              initialLabels: e.lState.initialLabels,
                              uniqId: e.cstate.labelListKey,
                              datasetId: e.cstate.dataSource.datasetId,
                              templateType: e.cstate.templateType,
                              useLocalService: "",
                              showLabelCount: !e.cstate.isDataHouse,
                            },
                            on: {
                              "list-change": function (t) {
                                return e.lService.setLabel(t);
                              },
                              "relations-change": function (t) {
                                return e.lService.setRelation(t);
                              },
                              "relations-label-change": function (t) {
                                return e.lService.setRelationLabel(t);
                              },
                            },
                            model: {
                              value: e.lState.labelCount,
                              callback: function (t) {
                                e.$set(e.lState, "labelCount", t);
                              },
                              expression: "lState.labelCount",
                            },
                          }),
                        ],
                        1
                      )
                    : e._e(),
                  n(
                    "the-field",
                    {
                      attrs: {
                        name: "sampleFile",
                        label: "标注任务样例",
                        noLabel: "",
                      },
                    },
                    [
                      e.fileUploadConf.localUploadData.uploadInfo.bos
                        ? [
                            n(
                              "the-inline-uploader",
                              {
                                attrs: {
                                  maxFileCount: 1,
                                  autoFilter: !0,
                                  maxSize:
                                    e.fileUploadConf.localUploadData.uploadInfo
                                      .maxSize,
                                  type: e.fileUploadConf.localUploadData
                                    .uploadInfo.uploadType,
                                  bos: e.fileUploadConf.localUploadData
                                    .uploadInfo.bos,
                                  accept:
                                    e.fileUploadConf.localUploadData.uploadInfo
                                      .accept,
                                  naming: e.fileUploadConf.naming,
                                },
                                on: {
                                  change: e.fileUploadConf.onChange,
                                  prepareUpload: e.fileUploadConf.prepareUpload,
                                  filtered: e.fileUploadConf.handleFiltered,
                                },
                              },
                              [
                                n(
                                  "template",
                                  { slot: "placeholder" },
                                  [
                                    n(
                                      "the-button",
                                      {
                                        staticClass: "hollow",
                                        attrs: { icon: "upload" },
                                      },
                                      [e._v(" 上传文件 ")]
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              2
                            ),
                            n("span", { staticClass: "tip-text" }, [
                              e._v(
                                "（支持20M以内 " +
                                  e._s(e.ANNO_DEMO_FILE.join("、")) +
                                  " 文件）"
                              ),
                            ]),
                          ]
                        : n("div", {
                            directives: [
                              {
                                name: "loading",
                                rawName: "v-loading",
                                value: !0,
                                expression: "true",
                              },
                            ],
                          }),
                    ],
                    2
                  ),
                  e.fileUploadConf.localUploadData.fileObj.name
                    ? n("div", { staticClass: "file-item" }, [
                        n(
                          "div",
                          {
                            staticClass: "file-wrap",
                            class: {
                              "error-file":
                                e.fileUploadConf.localUploadData.fileObj.error,
                            },
                          },
                          [
                            n("the-icon", {
                              staticClass: "file-icon",
                              attrs: { name: "attachment" },
                            }),
                            n(
                              "span",
                              {
                                staticClass: "file-name",
                                class: {
                                  error:
                                    e.fileUploadConf.localUploadData.fileObj
                                      .error,
                                },
                                attrs: {
                                  title:
                                    e.fileUploadConf.localUploadData.fileObj
                                      .name,
                                },
                              },
                              [
                                e._v(
                                  e._s(
                                    e.fileUploadConf.localUploadData.fileObj
                                      .name
                                  )
                                ),
                              ]
                            ),
                            e.fileUploadConf.localUploadData.fileObj.uploading
                              ? e._e()
                              : n("the-icon", {
                                  staticClass: "close",
                                  attrs: { name: "close" },
                                  on: { click: e.fileUploadConf.deleleFile },
                                }),
                          ],
                          1
                        ),
                        e.fileUploadConf.localUploadData.fileObj.error
                          ? n("div", { staticClass: "file-error" }, [
                              e._v(
                                " " +
                                  e._s(
                                    e.fileUploadConf.localUploadData.fileObj
                                      .error
                                  ) +
                                  " "
                              ),
                            ])
                          : e._e(),
                        e.fileUploadConf.localUploadData.fileObj.uploading
                          ? n("div", { staticClass: "file-info" }, [
                              e._v("文件上传中..."),
                            ])
                          : e._e(),
                      ])
                    : e._e(),
                  n(
                    "the-field",
                    {
                      attrs: {
                        name: "distributeDataType",
                        label: "数据标注状态",
                        required: "",
                      },
                    },
                    [
                      n(
                        "the-dropdown",
                        {
                          staticClass: "w300",
                          attrs: { disabled: e.cstate.distributeDisabled },
                          model: {
                            value: e.cstate.distributeDataType,
                            callback: function (t) {
                              e.$set(e.cstate, "distributeDataType", t);
                            },
                            expression: "cstate.distributeDataType",
                          },
                        },
                        e._l(e.state.annoTypeList, function (t) {
                          return n(
                            "the-dropdown-item",
                            { key: t.id, attrs: { value: t.id } },
                            [e._v(e._s(t.label))]
                          );
                        }),
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              n(
                "div",
                { staticClass: "info" },
                [
                  n("h2", { staticClass: "title" }, [e._v("任务分配")]),
                  e.showAssignType
                    ? n(
                        "the-field",
                        {
                          attrs: {
                            name: "assignType",
                            label: "任务分配方式",
                            required: "",
                          },
                        },
                        [
                          n(
                            "the-radio-group",
                            {
                              model: {
                                value: e.state.form.assignType,
                                callback: function (t) {
                                  e.$set(e.state.form, "assignType", t);
                                },
                                expression: "state.form.assignType",
                              },
                            },
                            e._l(e.state.assignTypeList, function (t) {
                              return n(
                                "the-radio",
                                { key: t.id, attrs: { value: t.id } },
                                [
                                  e._v(e._s(t.label) + " "),
                                  n(
                                    "the-icon-tip",
                                    {
                                      staticClass: "assign-tip",
                                      attrs: {
                                        name: "question-mark-small-circle-o",
                                        strategy: "fixed",
                                        placement: "right",
                                      },
                                    },
                                    [e._v(e._s(t.tip))]
                                  ),
                                ],
                                1
                              );
                            }),
                            1
                          ),
                        ],
                        1
                      )
                    : e._e(),
                  e.state.form.assignType
                    ? e._e()
                    : n("AssignTeam", {
                        attrs: {
                          "anno-left": e.cstate.annoLeft,
                          "team-id": e.state.form.teamId,
                          "is-audit": e.state.form.isAudit,
                          "audit-team-id": e.state.form.auditTeamId,
                          "audit-percentage": e.state.form.auditPercentage,
                          "distribute-count": e.state.form.distributeCount,
                          "fields-valid": e.state.teamIsValid,
                        },
                        on: {
                          "update:teamId": function (t) {
                            return e.$set(e.state.form, "teamId", t);
                          },
                          "update:team-id": function (t) {
                            return e.$set(e.state.form, "teamId", t);
                          },
                          "update:isAudit": function (t) {
                            return e.$set(e.state.form, "isAudit", t);
                          },
                          "update:is-audit": function (t) {
                            return e.$set(e.state.form, "isAudit", t);
                          },
                          "update:auditTeamId": function (t) {
                            return e.$set(e.state.form, "auditTeamId", t);
                          },
                          "update:audit-team-id": function (t) {
                            return e.$set(e.state.form, "auditTeamId", t);
                          },
                          "update:auditPercentage": function (t) {
                            return e.$set(e.state.form, "auditPercentage", t);
                          },
                          "update:audit-percentage": function (t) {
                            return e.$set(e.state.form, "auditPercentage", t);
                          },
                          "update:distributeCount": function (t) {
                            return e.$set(e.state.form, "distributeCount", t);
                          },
                          "update:distribute-count": function (t) {
                            return e.$set(e.state.form, "distributeCount", t);
                          },
                          "update:fieldsValid": function (t) {
                            return e.$set(e.state, "teamIsValid", t);
                          },
                          "update:fields-valid": function (t) {
                            return e.$set(e.state, "teamIsValid", t);
                          },
                        },
                      }),
                  n(
                    "the-field",
                    { attrs: { label: "任务截止日期", required: "" } },
                    [
                      n(
                        "the-date",
                        e._b(
                          {
                            staticClass: "content-item",
                            model: {
                              value: e.state.form.endTime,
                              callback: function (t) {
                                e.$set(e.state.form, "endTime", t);
                              },
                              expression: "state.form.endTime",
                            },
                          },
                          "the-date",
                          e.state.range.options,
                          !1
                        )
                      ),
                    ],
                    1
                  ),
                  n("the-field", {
                    staticClass: "hidden-row",
                    attrs: { name: "startTime" },
                  }),
                  n("the-field", {
                    staticClass: "hidden-row",
                    attrs: { name: "endTime" },
                  }),
                  n(
                    "the-field",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: e.state.roleList.length > 1,
                          expression: "state.roleList.length > 1",
                        },
                      ],
                      attrs: {
                        name: "role",
                        label: "成员权限范围",
                        required: "",
                        noLabel: "",
                      },
                    },
                    [
                      n(
                        "the-checkbox-group",
                        {
                          model: {
                            value: e.state.form.role,
                            callback: function (t) {
                              e.$set(e.state.form, "role", t);
                            },
                            expression: "state.form.role",
                          },
                        },
                        e._l(e.state.roleList, function (t, r) {
                          return n(
                            "the-checkbox",
                            {
                              key: r,
                              attrs: { value: t.id, disabled: !!t.disabled },
                            },
                            [e._v(" " + e._s(t.label) + " ")]
                          );
                        }),
                        1
                      ),
                    ],
                    1
                  ),
                  e.cstate.isDataHouse
                    ? e._e()
                    : n(
                        "the-field",
                        {
                          attrs: {
                            name: "destCreateType",
                            label: "标注完数据集",
                            required: "",
                          },
                        },
                        [
                          n(
                            "the-radio-group",
                            {
                              model: {
                                value: e.state.form.destCreateType,
                                callback: function (t) {
                                  e.$set(e.state.form, "destCreateType", t);
                                },
                                expression: "state.form.destCreateType",
                              },
                            },
                            [
                              n("the-radio", { attrs: { value: 1 } }, [
                                e._v("覆盖已有版本"),
                              ]),
                              n("the-radio", { attrs: { value: 2 } }, [
                                e._v("生成新版本 "),
                                e.cstate.newDatasetName
                                  ? n("span", { staticClass: "radio-tip" }, [
                                      e._v(e._s(e.cstate.newDatasetName)),
                                    ])
                                  : e._e(),
                              ]),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                ],
                1
              ),
              e.cstate.showSmartAnnoConfig && e.supportModelSource.length
                ? n(
                    "div",
                    { staticClass: "info" },
                    [
                      n("h2", { staticClass: "title" }, [e._v("智能标注配置")]),
                      n("the-field", { attrs: { name: "", "no-label": "" } }, [
                        n("span", { attrs: { slot: "label" }, slot: "label" }, [
                          e._v(" 开启智能标注 "),
                        ]),
                        n(
                          "div",
                          { staticClass: "switch-wrap" },
                          [
                            n("the-switch", {
                              model: {
                                value: e.cstate.enableInteranno,
                                callback: function (t) {
                                  e.$set(e.cstate, "enableInteranno", t);
                                },
                                expression: "cstate.enableInteranno",
                              },
                            }),
                            e._v(" "),
                            n(
                              "the-icon-tip",
                              {
                                attrs: {
                                  name: "question-mark-small-circle-o",
                                  placement: "top",
                                },
                              },
                              [
                                e._v(
                                  " 开启智能标注功能，会首先使用“指定模型”来预标注数据集，再分发给⼈⼯校验预标注结果 "
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                      ]),
                      e.cstate.enableInteranno
                        ? [
                            n(
                              "the-field",
                              { attrs: { label: "模型来源", noLabel: "" } },
                              [
                                n(
                                  "the-button-group",
                                  {
                                    model: {
                                      value: e.currentModelSource,
                                      callback: function (t) {
                                        e.currentModelSource = t;
                                      },
                                      expression: "currentModelSource",
                                    },
                                  },
                                  e._l(e.supportModelSource, function (t) {
                                    return n(
                                      "the-button-tab",
                                      {
                                        key: t,
                                        staticClass: "hollow",
                                        attrs: { value: t },
                                      },
                                      [
                                        e._v(
                                          e._s(
                                            e.EModelSourceType.getLabelById(t)
                                          ) + " "
                                        ),
                                      ]
                                    );
                                  }),
                                  1
                                ),
                              ],
                              1
                            ),
                            n(
                              "the-field",
                              {
                                attrs: {
                                  label: "选择模型服务",
                                  noLabel: "",
                                  required: "",
                                },
                              },
                              [
                                n("BmlModelSelecter", {
                                  attrs: {
                                    disabled: e.cstate.modelSelectDisabled,
                                    modelServices: e.modelServices,
                                  },
                                  model: {
                                    value: e.currentModel,
                                    callback: function (t) {
                                      e.currentModel = t;
                                    },
                                    expression: "currentModel",
                                  },
                                }),
                              ],
                              1
                            ),
                            e.cstate.supportThreshold
                              ? n(
                                  "the-field",
                                  {
                                    attrs: {
                                      label: "置信度阈值",
                                      "no-label": "",
                                      name: "threshold",
                                      required: "",
                                    },
                                  },
                                  [
                                    n(
                                      "span",
                                      {
                                        attrs: { slot: "label" },
                                        slot: "label",
                                      },
                                      [e._v(" 置信度阈值 ")]
                                    ),
                                    n(
                                      "div",
                                      [
                                        n("the-input", {
                                          staticClass: "input-threshold w400",
                                          attrs: {
                                            placement: "请输入置信度阈值",
                                          },
                                          on: { input: e.handleThresholdInput },
                                          model: {
                                            value: e.threshold,
                                            callback: function (t) {
                                              e.threshold = t;
                                            },
                                            expression: "threshold",
                                          },
                                        }),
                                        e._v(" "),
                                        n(
                                          "the-icon-tip",
                                          {
                                            attrs: {
                                              name: "question-mark-small-circle-o",
                                              placement: "top",
                                            },
                                          },
                                          [
                                            e._v(
                                              " 置信度阈值默认使用模型服务推荐置信度，支持根据数 据集情况调整，低于该置信度的预标注结果将被过滤 "
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ]
                                )
                              : e._e(),
                            e.resourceVisible
                              ? [n("ResourceConfig", { ref: "resConfigVue" })]
                              : e._e(),
                          ]
                        : e._e(),
                    ],
                    2
                  )
                : e._e(),
              n(
                "div",
                { staticClass: "btn-wrap" },
                [
                  n(
                    "the-button",
                    {
                      directives: [
                        {
                          name: "permission",
                          rawName: "v-permission",
                          value: "write",
                          expression: "'write'",
                        },
                      ],
                      staticClass: "confirm",
                      attrs: {
                        disabled: e.cstate.submitDisabled,
                        loading: e.state.submitting,
                      },
                      on: { click: e.submit },
                    },
                    [e._v(" 确定 ")]
                  ),
                  n(
                    "the-button",
                    {
                      directives: [
                        {
                          name: "permission",
                          rawName: "v-permission",
                          value: "write",
                          expression: "'write'",
                        },
                      ],
                      staticClass: "cancel",
                      on: { click: e.handleCancel },
                    },
                    [e._v(" 取消 ")]
                  ),
                ],
                1
              ),
            ]
          );
        },
        Ur = [],
        $r = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("GroupCascader", {
            staticClass: "group-cascader",
            attrs: {
              targetState: e.gcProps.targetState,
              filters: e.gcProps.filters,
            },
            on: { changeItems: e.handleChange, getItems: e.handleChange },
            model: {
              value: e.state.model,
              callback: function (t) {
                e.$set(e.state, "model", t);
              },
              expression: "state.model",
            },
          });
        },
        Br = [],
        zr = Object(u["defineComponent"])({
          model: { prop: "value", event: "input" },
          components: {
            GroupCascader: function () {
              return System.import("@baidu/afe-app-dataset").then(function (e) {
                return e.GroupCascader;
              });
            },
          },
          props: { value: { type: Number } },
          setup: function (e, t) {
            var n = Object(u["reactive"])({
                currGroup: null,
                currDataset: null,
                model: Object(u["computed"])({
                  get: function () {
                    return e.value;
                  },
                  set: function (e) {
                    return t.emit("input", e);
                  },
                }),
              }),
              r = {
                filters: { withUnconfirmedCount: !1 },
                targetState: "teamAnno",
              };
            function a(e) {
              var t = Object(R["a"])(e, 2),
                r = t[0],
                a = t[1];
              (n.currGroup = r), (n.currDataset = a);
            }
            function i() {
              return n.currDataset;
            }
            function o() {
              return n.currGroup;
            }
            return {
              state: n,
              gcProps: r,
              handleChange: a,
              getDataset: i,
              getGroup: o,
            };
          },
        }),
        Vr = zr,
        Fr =
          (n("269a"), Object(f["a"])(Vr, $r, Br, !1, null, "0eab35a0", null)),
        qr = Fr.exports,
        Gr = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "mulan-label-list" },
            [
              e.cstate.comValue
                ? n(
                    e.cstate.comValue,
                    e._b(
                      {
                        key: e.$attrs.uniqId,
                        ref: "relations",
                        tag: "component",
                        staticClass: "mulan-label-picker",
                        attrs: {
                          optAbilities: e.cstate.abilities,
                          templateType: e.templateType,
                          showIndex: !0,
                          title: e.cstate.title,
                        },
                        on: {
                          "label:total": function (t) {
                            return e.$emit("input", t);
                          },
                          "label:list": function (t) {
                            return e.$emit("list-change", t);
                          },
                          "relations:total": function (t) {
                            return e.$emit("input", t);
                          },
                          "relations:list": function (t) {
                            return e.$emit("relations-change", t);
                          },
                          "relations:labels": function (t) {
                            return e.$emit("relations-label-change", t);
                          },
                        },
                      },
                      "component",
                      e.$attrs,
                      !1
                    ),
                    [
                      e.cstate.filteredAbility.ability
                        ? n(
                            "template",
                            { slot: "title-tip" },
                            [
                              n(
                                "the-icon-tip",
                                {
                                  staticClass: "title-tip",
                                  attrs: {
                                    placement: "top",
                                    name: "question-mark-small-circle-o",
                                  },
                                },
                                [
                                  e._v(
                                    " 一个数据集版本内您最多可设置1000个标签 "
                                  ),
                                ]
                              ),
                            ],
                            1
                          )
                        : e._e(),
                    ],
                    2
                  )
                : e._e(),
              n("the-input", {
                style: { display: "none" },
                attrs: { type: "hidden" },
                model: {
                  value: e.value,
                  callback: function (t) {
                    e.value = t;
                  },
                  expression: "value",
                },
              }),
            ],
            1
          );
        },
        Wr = [],
        Kr = Object(u["defineComponent"])({
          model: { prop: "value", event: "input" },
          props: {
            templateType: { type: Number },
            value: { required: !0, type: Number },
          },
          setup: function (e) {
            var t = Object(u["ref"])(null),
              n = Object(u["ref"])(null),
              r = Object(u["ref"])(null),
              a = Object(u["ref"])(null),
              i = Object(u["reactive"])({
                isTextRelation: Object(u["computed"])(function () {
                  var t, n;
                  return [
                    null === (t = a.value) || void 0 === t
                      ? void 0
                      : t.ETemplateType.TEXT_RELATION_EXTRACT,
                    null === (n = a.value) || void 0 === n
                      ? void 0
                      : n.ETemplateType.TEXT_COMPOSE,
                  ].some(function (t) {
                    return t === e.templateType;
                  });
                }),
                filteredAbility: Object(u["computed"])(function () {
                  var t,
                    n,
                    r,
                    i,
                    o,
                    s = [
                      null === (t = a.value) ||
                      void 0 === t ||
                      null === (n = t.ETemplateType) ||
                      void 0 === n
                        ? void 0
                        : n.SENTIMENT,
                      null === (r = a.value) ||
                      void 0 === r ||
                      null === (i = r.ETemplateType) ||
                      void 0 === i
                        ? void 0
                        : i.TEXT_SIM,
                    ].find(function (t) {
                      return t === e.templateType;
                    });
                  return {
                    ability: !s,
                    disabledTip: s
                      ? "".concat(
                          null === (o = a.value) || void 0 === o
                            ? void 0
                            : o.ETemplateType.getLabelById(s),
                          "数据集不允许操作标签"
                        )
                      : "",
                  };
                }),
                abilities: Object(u["computed"])(function () {
                  return {
                    IMPORT: { ability: !1 },
                    TOP: { ability: !1 },
                    DELETE: i.filteredAbility,
                    ADD: i.filteredAbility,
                    EDIT: i.filteredAbility,
                  };
                }),
                title: Object(u["computed"])(function () {
                  return (
                    i.filteredAbility.disabledTip ||
                    (i.isTextRelation
                      ? "关系数量（".concat(e.value, "）")
                      : "标签数量（".concat(e.value, "/1000）"))
                  );
                }),
                comValue: Object(u["computed"])(function () {
                  return i.isTextRelation ? r.value : n.value;
                }),
              });
            return (
              Object(u["onMounted"])(
                Object(h["a"])(
                  regeneratorRuntime.mark(function e() {
                    var t, i, o;
                    return regeneratorRuntime.wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), Object(re["a"])();
                          case 2:
                            (t = e.sent),
                              (i = t.LabelPicker),
                              (o = t.enums),
                              (a.value = o),
                              System.import("@baidu/afe-app-annotate").then(
                                function (e) {
                                  r.value = e.RelationPicker;
                                }
                              ),
                              (n.value = i);
                          case 8:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )
              ),
              { cstate: i, LabelPickerVue: n, relations: t }
            );
          },
        }),
        Hr = Kr,
        Xr =
          (n("8f6a"), Object(f["a"])(Hr, Gr, Wr, !1, null, "08211a57", null)),
        Qr = Xr.exports,
        Yr = n("aa5d"),
        Zr = function (e, t) {
          var n = Object(u["computed"])(function () {
              var e, n;
              if (!(null === (e = t.value) || void 0 === e ? void 0 : e.enums))
                return {};
              var r = t.value.enums.ETemplateType,
                a =
                  ((n = {}),
                  Object(_["a"])(n, r.IMG_CLS, [
                    o["EModelSourceType"].CUSTOM_MODEL_SERVICE,
                    o["EModelSourceType"].MODEL_DEVELOP,
                    o["EModelSourceType"].SMART_ANNOTATE_TASK,
                  ]),
                  Object(_["a"])(n, r.IMG_CLS_MULTI, [
                    o["EModelSourceType"].CUSTOM_MODEL_SERVICE,
                    o["EModelSourceType"].MODEL_DEVELOP,
                    o["EModelSourceType"].SMART_ANNOTATE_TASK,
                  ]),
                  Object(_["a"])(n, r.OBJ_DCT_RECT, [
                    o["EModelSourceType"].CUSTOM_MODEL_SERVICE,
                    o["EModelSourceType"].MODEL_DEVELOP,
                    o["EModelSourceType"].SMART_ANNOTATE_TASK,
                  ]),
                  Object(_["a"])(n, r.OBJ_DCT_QUAD, [
                    o["EModelSourceType"].CUSTOM_MODEL_SERVICE,
                    o["EModelSourceType"].MODEL_DEVELOP,
                    o["EModelSourceType"].SMART_ANNOTATE_TASK,
                  ]),
                  Object(_["a"])(n, r.IMG_SEG, [
                    o["EModelSourceType"].CUSTOM_MODEL_SERVICE,
                    o["EModelSourceType"].MODEL_DEVELOP,
                    o["EModelSourceType"].SMART_ANNOTATE_TASK,
                  ]),
                  Object(_["a"])(n, r.OCR, [
                    o["EModelSourceType"].CUSTOM_MODEL_SERVICE,
                    o["EModelSourceType"].MODEL_DEVELOP,
                    o["EModelSourceType"].SMART_ANNOTATE_TASK,
                  ]),
                  Object(_["a"])(n, r.UNSTRUCTURED_OCR, [
                    o["EModelSourceType"].CUSTOM_MODEL_SERVICE,
                    o["EModelSourceType"].MODEL_DEVELOP,
                    o["EModelSourceType"].SMART_ANNOTATE_TASK,
                  ]),
                  Object(_["a"])(n, r.TEXT_CLS, [
                    o["EModelSourceType"].CUSTOM_MODEL_SERVICE,
                  ]),
                  Object(_["a"])(n, r.TEXT_CLS_MULTI, [
                    o["EModelSourceType"].CUSTOM_MODEL_SERVICE,
                  ]),
                  Object(_["a"])(n, r.TEXT_CLS_ERNIE_DOC, [
                    o["EModelSourceType"].CUSTOM_MODEL_SERVICE,
                  ]),
                  Object(_["a"])(n, r.TEXT_CLS_ERNIE_M, [
                    o["EModelSourceType"].CUSTOM_MODEL_SERVICE,
                  ]),
                  Object(_["a"])(n, r.TEXT_SIM, [
                    o["EModelSourceType"].CUSTOM_MODEL_SERVICE,
                  ]),
                  Object(_["a"])(n, r.TEXT_ENTITY_EXTRACT, [
                    o["EModelSourceType"].CUSTOM_MODEL_SERVICE,
                  ]),
                  n);
              return a;
            }),
            r = Object(u["computed"])(function () {
              return (
                ((null === e || void 0 === e ? void 0 : e.value) &&
                  n.value[e.value]) ||
                []
              );
            }),
            a = Object(u["ref"])();
          return { supportModelSource: r, currentModelSource: a };
        },
        Jr = Zr,
        ea = (n("5319"), n("488f")),
        ta = function () {
          var e = Object(ea["useLazyValue"])(void 0),
            t = e.value,
            n = e.setValue,
            r = Object(i["useService"])(),
            a = r.taskService,
            s = (function () {
              var e = Object(h["a"])(
                regeneratorRuntime.mark(function e(t, r) {
                  var i, s, c;
                  return regeneratorRuntime.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (s =
                              null ===
                                (i = o["EModelSourceType"].getItemById(r)) ||
                              void 0 === i
                                ? void 0
                                : i.serviceSourceType),
                            (e.next = 3),
                            a.fetchModelService({
                              templateType: t,
                              modelSource: s,
                            })
                          );
                        case 3:
                          (c = e.sent), n(c);
                        case 5:
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
            c = Object(u["ref"])(),
            l = Object(u["computed"])(function () {
              return t.value
                ? t.value.items.map(function (e) {
                    var t = !(
                        e.syncStatus === o["EModelCopyStatus"].INIT &&
                        !e.currentTask
                      ),
                      n = t ? "该模型下已有发起的任务，暂不可用" : "";
                    return Object(S["a"])({ disabled: t, tip: n }, e);
                  })
                : [];
            }),
            d = Object(u["ref"])("80");
          Object(u["watch"])(c, function (e) {
            d.value = (null === e || void 0 === e ? void 0 : e.threshold) || "";
          });
          var f = function (e) {
              var t = e;
              return (
                (t = t.replace(/[^\d.%]/g, "")),
                (t = t.replace(/^(\.|%)*/g, "")),
                (t = t.replace(/\.{2,}/g, ".")),
                (t = t.replace(/%{2,}/g, "%")),
                (t = t.replace(/(\.)(%*)/g, "$1")),
                (t = t
                  .replace(".", "$#$")
                  .replace(/\./g, "")
                  .replace("$#$", ".")),
                (t = t
                  .replace(/%$/, "#$#")
                  .replace(/%/g, "")
                  .replace("#$#", "%")),
                (t = t.substring(0, 6)),
                t
              );
            },
            p = function (e) {
              var t = e.currentTarget.value;
              d.value = f(t);
            },
            v = function () {
              c.value && (c.value = void 0);
            };
          return {
            getModellist: s,
            modelServices: l,
            threshold: d,
            currentModel: c,
            reset: v,
            handleThresholdInput: p,
          };
        },
        na = ta,
        ra = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return e.resVisible
            ? n(
                "div",
                { staticClass: "resource-config" },
                [
                  e.toggleVisible
                    ? n(
                        "div",
                        { staticClass: "resource-config-title" },
                        [
                          n(
                            "the-link",
                            { on: { click: e.toggleConfig } },
                            [
                              e._v(
                                " " +
                                  e._s(e.state.opened ? "收起" : "资源配置") +
                                  " "
                              ),
                              n("the-icon", {
                                staticClass: "resource-config-arrow",
                                class: { up: e.state.opened },
                                attrs: { name: "arrow-left" },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      )
                    : e._e(),
                  n(
                    "the-form",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: e.state.opened || !e.toggleVisible,
                          expression: "state.opened || !toggleVisible",
                        },
                      ],
                      ref: "formRef",
                      staticClass: "resource-config-form",
                      attrs: { rules: e.rules, errors: e.state.errors },
                      on: {
                        "update:errors": function (t) {
                          return e.$set(e.state, "errors", t);
                        },
                      },
                    },
                    [
                      n(
                        "the-field",
                        {
                          attrs: {
                            required: "",
                            label: "资源池",
                            name: "computeResourceId",
                          },
                        },
                        [
                          n(
                            "the-dropdown",
                            {
                              ref: "dropdown",
                              staticClass: "resource-dropdown",
                              attrs: { placeholder: "请选择资源池" },
                              model: {
                                value: e.form.computeResourceId,
                                callback: function (t) {
                                  e.$set(e.form, "computeResourceId", t);
                                },
                                expression: "form.computeResourceId",
                              },
                            },
                            [
                              e.state.resourceList.length
                                ? e._l(e.state.resourceList, function (t) {
                                    return n(
                                      "the-dropdown-item",
                                      {
                                        key: "resource-" + t.id,
                                        attrs: {
                                          value: t.id,
                                          title: t.name + "(" + t.id + ")",
                                        },
                                      },
                                      [
                                        e._v(
                                          " " +
                                            e._s(t.name + "(" + t.id + ")") +
                                            " "
                                        ),
                                      ]
                                    );
                                  })
                                : n(
                                    "the-dropdown-item",
                                    { staticClass: "empty-dropdown" },
                                    [
                                      n(
                                        "EmptyPlaceholder",
                                        [
                                          n("template", { slot: "top" }, [
                                            e._v("暂无可用资源池"),
                                          ]),
                                        ],
                                        2
                                      ),
                                    ],
                                    1
                                  ),
                            ],
                            2
                          ),
                        ],
                        1
                      ),
                      n(
                        "the-field",
                        {
                          attrs: {
                            required: "",
                            label: "CPU核数",
                            name: "cpuCount",
                          },
                        },
                        [
                          n("the-input", {
                            staticClass: "resource-input",
                            attrs: {
                              disabled: !e.form.computeResourceId,
                              type: "number",
                            },
                            on: { mutate: e.handleCPUCountMutate },
                            model: {
                              value: e.form.cpuCount,
                              callback: function (t) {
                                e.$set(e.form, "cpuCount", t);
                              },
                              expression: "form.cpuCount",
                            },
                          }),
                          e.cstate.currentQuota
                            ? n("div", { staticClass: "input-tip" }, [
                                e._v(
                                  "最大可用量：" +
                                    e._s(e.cstate.currentQuota.cpu)
                                ),
                              ])
                            : e._e(),
                        ],
                        1
                      ),
                      n(
                        "the-field",
                        {
                          attrs: {
                            required: "",
                            label: "内存（GB）",
                            name: "memoryCount",
                          },
                        },
                        [
                          n("the-input", {
                            ref: "memoryInput",
                            staticClass: "resource-input",
                            attrs: {
                              disabled: !e.form.computeResourceId,
                              type: "number",
                            },
                            on: { mutate: e.handleMemoryCounMutate },
                            model: {
                              value: e.form.memoryCount,
                              callback: function (t) {
                                e.$set(e.form, "memoryCount", t);
                              },
                              expression: "form.memoryCount",
                            },
                          }),
                          e.cstate.currentQuota
                            ? n("div", { staticClass: "input-tip" }, [
                                e._v(
                                  " 最大可用量：" +
                                    e._s(
                                      (
                                        e.cstate.currentQuota.memory / 1024
                                      ).toFixed(2)
                                    ) +
                                    " GB "
                                ),
                              ])
                            : e._e(),
                        ],
                        1
                      ),
                      n(
                        "the-field",
                        {
                          staticClass: "dropdown-with-clear",
                          attrs: {
                            required: "",
                            name: "gpuName",
                            label: "AI加速卡类型",
                          },
                        },
                        [
                          n(
                            "the-dropdown",
                            {
                              staticClass: "resource-dropdown",
                              attrs: {
                                disabled: !e.form.computeResourceId,
                                placeholder: "请选择AI加速卡类型",
                              },
                              model: {
                                value: e.form.gpuName,
                                callback: function (t) {
                                  e.$set(e.form, "gpuName", t);
                                },
                                expression: "form.gpuName",
                              },
                            },
                            [
                              e.cstate.currentGPUList.length
                                ? e._l(e.cstate.currentGPUList, function (t) {
                                    return n(
                                      "the-dropdown-item",
                                      {
                                        key: "gpu-" + t.name,
                                        attrs: { value: t.name, title: t.name },
                                      },
                                      [e._v(" " + e._s(t.name) + " ")]
                                    );
                                  })
                                : n(
                                    "the-dropdown-item",
                                    { staticClass: "empty-dropdown" },
                                    [
                                      n(
                                        "EmptyPlaceholder",
                                        [
                                          n("template", { slot: "top" }, [
                                            e._v("暂无可用AI加速卡类型"),
                                          ]),
                                        ],
                                        2
                                      ),
                                    ],
                                    1
                                  ),
                            ],
                            2
                          ),
                        ],
                        1
                      ),
                      e.form.gpuName
                        ? n(
                            "the-field",
                            {
                              attrs: {
                                required: "",
                                label: "AI加速卡个数",
                                name: "gpuCount",
                              },
                            },
                            [
                              n("the-input", {
                                ref: "gpuInput",
                                staticClass: "resource-input",
                                attrs: {
                                  disabled: !e.form.gpuName,
                                  type: "number",
                                },
                                on: { mutate: e.handleGPUCountMutate },
                                model: {
                                  value: e.form.gpuCount,
                                  callback: function (t) {
                                    e.$set(e.form, "gpuCount", t);
                                  },
                                  expression: "form.gpuCount",
                                },
                              }),
                              e.cstate.currentGPULimit
                                ? n("div", { staticClass: "input-tip" }, [
                                    e._v(
                                      " 最大可用量：" +
                                        e._s(
                                          e.cstate.currentGPULimit.toFixed(1)
                                        ) +
                                        "，请输入0.1- " +
                                        e._s(
                                          e.cstate.currentGPULimit.toFixed(1)
                                        ) +
                                        "之间的一位小数 "
                                    ),
                                  ])
                                : n("div", { staticClass: "input-tip" }, [
                                    e._v("该AI加速卡资源不足"),
                                  ]),
                            ],
                            1
                          )
                        : e._e(),
                    ],
                    1
                  ),
                ],
                1
              )
            : e._e();
        },
        aa = [],
        ia =
          (n("25f0"),
          function () {
            var e = this,
              t = e.$createElement,
              r = e._self._c || t;
            return r("div", { staticClass: "sea-empty-placeholder" }, [
              r("div", { staticClass: "sea-empty-placeholder_top" }, [
                r("img", { attrs: { alt: "placeholder", src: n("bbaf") } }),
                r(
                  "div",
                  { staticClass: "sea-empty-placeholder_text" },
                  [e._t("top")],
                  2
                ),
              ]),
              r(
                "div",
                { staticClass: "sea-empty-placeholder_bottom" },
                [e._t("bottom")],
                2
              ),
            ]);
          }),
        oa = [],
        sa = {},
        ca = sa,
        ua =
          (n("cf5d"), Object(f["a"])(ca, ia, oa, !1, null, "3d9901d4", null)),
        la = ua.exports,
        da = n("2ef0"),
        fa = n("c873"),
        pa = function (e, t, n) {
          return Object(da["isNumber"])(e) ? Object(Z["a"])(e, t, n) : e;
        },
        va = Object(i["useService"])(),
        ma = va.envService,
        ba = !ma.state.isCloud,
        ha = function () {
          var e = Object(u["reactive"])({
              loading: !1,
              opened: !1,
              resourceList: [],
              defaultResource: null,
              errors: {},
            }),
            t = Object(u["ref"])(),
            n = Object(u["reactive"])({
              computeResourceId: "",
              cpuCount: 0,
              memoryCount: 0,
              gpuCount: 0,
              gpuName: "",
            }),
            r = Object(u["reactive"])({
              currentQuota: Object(u["computed"])(function () {
                var t,
                  r =
                    null ===
                      (t = e.resourceList.find(function (e) {
                        return e.id === n.computeResourceId;
                      })) || void 0 === t
                      ? void 0
                      : t.quota;
                return r;
              }),
              currentGPUList: Object(u["computed"])(function () {
                return r.currentQuota
                  ? Object.keys(r.currentQuota.scalarResources).map(function (
                      e
                    ) {
                      return {
                        name: e,
                        value: r.currentQuota.scalarResources[e],
                      };
                    })
                  : [];
              }),
              currentGPULimit: Object(u["computed"])(function () {
                if (n.gpuName && r.currentQuota)
                  return Math.min(
                    parseFloat(r.currentQuota.scalarResources[n.gpuName] || 0),
                    1
                  );
              }),
            }),
            a = (function () {
              var t = Object(h["a"])(
                regeneratorRuntime.mark(function t() {
                  var n, r, a, i;
                  return regeneratorRuntime.wrap(function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (e.loading = !0),
                            (t.next = 3),
                            fa["a"].fetch("bml/resourceSelectList", {
                              serviceType: "easydata-teamannotation",
                            })
                          );
                        case 3:
                          (n = t.sent),
                            (r = n.computeResources),
                            (a = void 0 === r ? [] : r),
                            (i = n.default),
                            (e.resourceList = a),
                            (e.defaultResource = i),
                            (e.loading = !1);
                        case 8:
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
            i = function (e) {
              var t = r.currentQuota.cpu,
                n = void 0 === t ? 0 : t;
              return Math.floor(pa(e, 0, n));
            },
            o = function (e) {
              return n.gpuName
                ? Object(da["isNumber"])(e)
                  ? Object(da["floor"])(pa(e, 0, r.currentGPULimit), 1)
                  : r.currentGPULimit
                : 0;
            },
            s = function (e) {
              var t = r.currentQuota.memory,
                n = void 0 === t ? 0 : t;
              return Object(da["floor"])(pa(e, 0, n / 1024), 2);
            },
            c = function () {
              if (e.defaultResource && e.resourceList.length) {
                var t = e.defaultResource,
                  r = t.id,
                  a = t.quota,
                  i = a.cpu,
                  o = void 0 === i ? 0 : i,
                  s = a.memory,
                  c = void 0 === s ? 0 : s,
                  u = a.scalarResources,
                  l = void 0 === u ? {} : u;
                (n.cpuCount = o), (n.memoryCount = c / 1024);
                var d = Object.keys(l)[0];
                d && ((n.gpuCount = parseFloat(l[d]) || 0), (n.gpuName = d)),
                  (n.computeResourceId = r);
              }
            },
            l = (function () {
              var r = Object(h["a"])(
                regeneratorRuntime.mark(function r() {
                  var a, i;
                  return regeneratorRuntime.wrap(function (r) {
                    while (1)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (r.next = 2), t.value.submit();
                        case 2:
                          if (((a = r.sent), (i = a.hasError), !i)) {
                            r.next = 7;
                            break;
                          }
                          return (e.opened = !0), r.abrupt("return");
                        case 7:
                          return r.abrupt("return", Object(S["a"])({}, n));
                        case 8:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                })
              );
              return function () {
                return r.apply(this, arguments);
              };
            })(),
            d = function () {
              (n.gpuCount = 0), (n.gpuName = "");
            };
          Object(u["onMounted"])(
            Object(h["a"])(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (ba) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return");
                      case 2:
                        return (e.next = 4), a();
                      case 4:
                        c();
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )
          );
          var f = function () {
            var t;
            (n.cpuCount = i(n.cpuCount)),
              (n.gpuName =
                null ===
                  (t = r.currentGPUList.find(function (e) {
                    return e.name === n.gpuName;
                  })) || void 0 === t
                  ? void 0
                  : t.name),
              (n.memoryCount = s(n.memoryCount)),
              (e.errors = {});
          };
          Object(u["watch"])(function () {
            return r.currentQuota;
          }, f),
            Object(u["watch"])(
              function () {
                return n.gpuName;
              },
              function () {
                n.gpuCount = o(n.gpuCount);
              }
            );
          var p = Object(u["computed"])(function () {
            return {
              computeResourceId: [{ required: !0, message: "请选择资源池" }],
              cpuCount: [
                { required: !0, message: "请输入CPU核数" },
                {
                  type: "number",
                  validator: function (e, t) {
                    return !r.currentQuota.cpu || t > r.currentQuota.cpu
                      ? ((e.message = "资源不足，请释放其他任务资源"), !1)
                      : !(t <= 0) || ((e.message = "请输入正整数"), !1);
                  },
                  message: "请输入正整数",
                },
              ],
              memoryCount: [
                { required: !0, message: "请输入内存（GB）" },
                {
                  type: "number",
                  validator: function (e, t) {
                    return !r.currentQuota.memory ||
                      t > r.currentQuota.memory / 1024
                      ? ((e.message = "资源不足，请释放其他任务资源"), !1)
                      : !(t <= 0) ||
                          ((e.message = "请输入大于0的整数或两位小数"), !1);
                  },
                  message: "请输入大于0的整数或两位小数",
                },
              ],
              gpuCount: [
                { required: !0, message: "请输入AI加速卡个数" },
                {
                  type: "number",
                  validator: function (e, t) {
                    return !r.currentGPULimit || t > r.currentGPULimit
                      ? ((e.message =
                          "该AI加速卡类型资源不足，请释放其他任务资源"),
                        !1)
                      : !(t <= 0) ||
                          ((e.message = "请输入大于0的整数或两位小数"), !1);
                  },
                  message: "请输入大于0的整数或两位小数",
                },
              ],
              gpuName: [{ required: !0, message: "请选择AI加速卡类型" }],
            };
          });
          return {
            state: e,
            form: n,
            cstate: r,
            formRef: t,
            rules: p,
            fetchResourceList: a,
            toggleConfig: function () {
              return (e.opened = !e.opened);
            },
            setDefaultForm: c,
            serialize: l,
            clearGPU: d,
            normalizedCPU: i,
            normalizedGPU: o,
            normalizedMemory: s,
          };
        },
        ga = function () {
          var e = Object(u["ref"])(),
            t = function () {
              return ba
                ? e.value
                  ? e.value.serialize()
                  : void 0
                : Promise.resolve({});
            };
          return { resConfigVue: e, serialize: t };
        },
        ya = function (e) {
          var t = Object(u["ref"])(null);
          return (
            Object(u["onUpdated"])(function () {
              var n;
              (null === (n = t.value) || void 0 === n ? void 0 : n.$el) &&
                t.value.$el
                  .querySelector(["input"])
                  .setAttribute("step", e.toString());
            }),
            t
          );
        },
        _a = Object(u["defineComponent"])({
          components: { EmptyPlaceholder: la },
          props: { toggleVisible: { default: !0 } },
          setup: function () {
            var e = ha(),
              t = e.state,
              n = e.form,
              r = e.cstate,
              a = e.toggleConfig,
              o = e.formRef,
              s = e.rules,
              c = e.serialize,
              l = e.clearGPU,
              d = e.normalizedCPU,
              f = e.normalizedGPU,
              p = e.normalizedMemory,
              v = Object(i["useService"])(),
              m = v.envService,
              b = Object(u["computed"])(function () {
                return m.state.isPrivate && ba;
              }),
              h = ya(0.01),
              g = ya(0.1);
            return {
              gpuInput: g,
              memoryInput: h,
              resVisible: b,
              formRef: o,
              state: t,
              form: n,
              cstate: r,
              rules: s,
              handleCPUCountMutate: function (e) {
                n.cpuCount = d(e);
              },
              handleMemoryCounMutate: function (e) {
                n.memoryCount = p(e);
              },
              handleGPUCountMutate: function (e) {
                n.gpuCount = f(e);
              },
              toggleConfig: a,
              serialize: c,
              clearGPU: l,
            };
          },
        }),
        Ta = _a,
        xa =
          (n("6e14"), Object(f["a"])(Ta, ra, aa, !1, null, "0c14cd9f", null)),
        wa = xa.exports,
        Oa = n("262e"),
        ka = n("2caf"),
        Ea = n("9ab4"),
        ja = (function (e) {
          Object(Oa["a"])(n, e);
          var t = Object(ka["a"])(n);
          function n() {
            var e;
            return (
              Object(D["a"])(this, n),
              (e = t.apply(this, arguments)),
              (e.state = {
                labels: [],
                labelCount: 0,
                initialLabels: null,
                initialLabelCount: 0,
                entityRelationList: [],
              }),
              e
            );
          }
          return (
            Object(M["a"])(n, [
              {
                key: "setInitialLabel",
                value: function (e) {
                  (this.state.initialLabels = e),
                    (this.state.initialLabelCount = e.length);
                },
              },
              {
                key: "setLabel",
                value: function (e) {
                  (this.state.labels = e), (this.state.labelCount = e.length);
                },
              },
              {
                key: "setRelation",
                value: function (e) {
                  (this.state.entityRelationList = e),
                    (this.state.labelCount = e.length);
                },
              },
              {
                key: "setRelationLabel",
                value: function (e) {
                  this.state.labels = e;
                },
              },
            ]),
            n
          );
        })(a["svc"].ServiceBase);
      ja = Object(Ea["a"])([a["svc"].ServiceDecorator], ja);
      var Ca = a["svc"].createUseService(ja),
        Sa = (function (e) {
          Object(Oa["a"])(n, e);
          var t = Object(ka["a"])(n);
          function n() {
            var e;
            return (
              Object(D["a"])(this, n),
              (e = t.apply(this, arguments)),
              (e.taskService = Object(i["useService"])().taskService),
              (e.label = Ca()),
              (e.state = {
                form: {
                  batchId: void 0,
                  templateType: void 0,
                  projectType: void 0,
                },
                batchInfo: null,
                ttDisabled: !1,
              }),
              e
            );
          }
          return (
            Object(M["a"])(n, [
              {
                key: "setBatchInfo",
                value: (function () {
                  var e = Object(h["a"])(
                    regeneratorRuntime.mark(function e(t) {
                      var n;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (this.state.form.batchId = +t),
                                  (e.next = 3),
                                  this.taskService.fetchBatchInfo(t)
                                );
                              case 3:
                                (n = e.sent),
                                  (this.state.batchInfo = n),
                                  (this.state.form.templateType =
                                    null === n || void 0 === n
                                      ? void 0
                                      : n.templateType),
                                  (this.state.form.projectType =
                                    null === n || void 0 === n
                                      ? void 0
                                      : n.projectType),
                                  (null === n || void 0 === n
                                    ? void 0
                                    : n.templateType) &&
                                    (this.state.ttDisabled = !0),
                                  this.label.setInitialLabel(n.labels || []);
                              case 9:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "initialize",
                value: function (e) {
                  return this.setBatchInfo(e), this;
                },
              },
            ]),
            n
          );
        })(a["svc"].ServiceBase);
      Sa = Object(Ea["a"])([a["svc"].ServiceDecorator], Sa);
      var Aa = a["svc"].createUseService(Sa),
        Ia = function (e) {
          var t = Aa().state,
            n = Object(u["computed"])(function () {
              var t;
              if (!(null === (t = e.value) || void 0 === t ? void 0 : t.enums))
                return [];
              var n = e.value.enums,
                r = n.EDataType,
                a = n.EProjectType,
                i = n.ETemplateType,
                o = r.getItemById(r.IMAGE).projectType.filter(function (e) {
                  return [a.IMG_CLS, a.OBJ_DCT, a.IMG_SEG, a.IMG_MIXED].some(
                    function (t) {
                      return t === e;
                    }
                  );
                }),
                s = o.map(function (e) {
                  return a.getItemById(e);
                });
              return s.map(function (e) {
                return {
                  label: e.label,
                  value: e.id,
                  children:
                    null === e || void 0 === e
                      ? void 0
                      : e.templateType
                          .map(function (e) {
                            return i.getItemById(e);
                          })
                          .map(function (e) {
                            return { label: e.label, value: e.id };
                          }),
                };
              });
            }),
            r = Object(u["computed"])({
              get: function () {
                return t.form.templateType
                  ? [t.form.projectType, t.form.templateType]
                  : [];
              },
              set: function (e) {
                var n = Object(R["a"])(e, 2),
                  r = n[0],
                  a = n[1];
                (t.form.projectType = r), (t.form.templateType = a);
              },
            });
          return Object(u["reactive"])({ source: n, value: r });
        };
      n("baa5"), n("fb6a");
      function Na() {
        var e = Object(i["useService"])(),
          t = e.bosService,
          n = Object(W["useToast"])(),
          r = n.fail,
          a = Object(u["reactive"])({
            fileObj: { fileId: "", uploading: !1, name: "", error: "" },
            uploadInfo: {
              bos: null,
              uploadType: window.SP.AWS_S3 || "bos",
              accept: Wa.map(function (e) {
                return "." + e;
              }).join(","),
              maxSize: "20M",
            },
          }),
          o = function (e) {
            e &&
              (e.error
                ? ((a.fileObj.error = e.error), (a.fileObj.uploading = !1))
                : (a.fileObj.error = ""),
              e.uploading && (a.fileObj.uploading = e.uploading),
              e.bos &&
                ((a.fileObj.fileId = e.bos), (a.fileObj.uploading = !1)));
          },
          s = function (e) {
            a.fileObj.name = e.file.name;
          },
          c = function () {
            (a.fileObj.name = ""),
              (a.fileObj.fileId = ""),
              (a.fileObj.uploading = !1),
              (a.fileObj.error = "");
          },
          l = function () {
            r("请检查文件大小或文件类型");
          },
          d = Object(ea["useStore"])(),
          f = function (e) {
            var t,
              n,
              r,
              i =
                (null === d ||
                void 0 === d ||
                null === (t = d.state) ||
                void 0 === t ||
                null === (n = t.user) ||
                void 0 === n
                  ? void 0
                  : n.userId) || d.state.common.accountInfo.userId,
              o = (
                null === (r = a.uploadInfo.bos) || void 0 === r ? void 0 : r.dir
              )
                ? "".concat(a.uploadInfo.bos.dir, "/")
                : "",
              s = e.name;
            return (
              o +
              ""
                .concat(i, "-")
                .concat(e.uuid)
                .concat(s.slice(s.lastIndexOf(".")))
            );
          };
        return (
          Object(h["a"])(
            regeneratorRuntime.mark(function e() {
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), t.fetchBosAuth();
                    case 2:
                      a.uploadInfo.bos = e.sent;
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )(),
          {
            localUploadData: a,
            naming: f,
            onChange: o,
            prepareUpload: s,
            deleleFile: c,
            handleFiltered: l,
          }
        );
      }
      var Ra = Object(u["defineComponent"])({
          components: {
            DatasetDropdown: qr,
            LabelList: Qr,
            AssignTeam: ct,
            Cascader: function () {
              return System.import("@baidu/afe-app-dataset").then(function (e) {
                return e.Cascader;
              });
            },
            BmlModelSelecter: Yr["default"],
            ResourceConfig: wa,
          },
          setup: function (e, t) {
            var n = t.root,
              r = a["utils"].useVM(),
              s = Object(u["ref"])(null),
              c = Object(u["ref"])(null),
              l = Object(T["useConfirmModal"])(),
              d = Object(re["b"])(),
              f = Object(i["useService"])(),
              p = f.envService,
              v = f.roleService,
              m = f.taskService;
            v.init();
            var b = Na(),
              g = $a().initialize(+r.$route.query.batchId),
              y = g.state,
              x = g.bState,
              w = g.lState,
              O = g.label,
              k = qa({ datasetDropdown: c, datasetPkg: d }),
              E = Jr(Object(u["toRef"])(k, "templateType"), d),
              j = na(),
              C = j.modelServices,
              A = j.currentModel,
              I = j.threshold,
              N = j.handleThresholdInput,
              D = j.reset,
              M = E.supportModelSource,
              L = E.currentModelSource,
              P = ga(),
              U = P.resConfigVue,
              $ = P.serialize,
              B = p.state.isPrivate,
              z = Object(u["computed"])(function () {
                return (
                  B &&
                  k.showSmartAnnoConfig &&
                  k.enableInteranno &&
                  L.value !== o["EModelSourceType"].CUSTOM_MODEL_SERVICE
                );
              });
            Object(u["watch"])(
              function () {
                var e;
                return null === (e = k.curDataset) || void 0 === e
                  ? void 0
                  : e.templateType;
              },
              function (e) {
                var t;
                (L.value =
                  null === (t = M.value[0]) || void 0 === t ? void 0 : t.id),
                  e && L.value && j.getModellist(e, L.value);
              },
              { immediate: !0 }
            ),
              Object(u["watch"])(
                function () {
                  return L.value;
                },
                function (e) {
                  var t, n;
                  ((y.form.source = void 0),
                  D(),
                  e &&
                    (null === (t = k.curDataset) || void 0 === t
                      ? void 0
                      : t.templateType)) &&
                    j.getModellist(
                      null === (n = k.curDataset) || void 0 === n
                        ? void 0
                        : n.templateType,
                      e
                    );
                },
                { immediate: !0 }
              ),
              Object(u["watch"])(
                function () {
                  return A.value;
                },
                function (e) {
                  (y.form.modelId =
                    null === e || void 0 === e ? void 0 : e.modelId),
                    (y.form.threshold =
                      (null === e || void 0 === e ? void 0 : e.threshold) ||
                      ""),
                    (y.form.source =
                      null === e || void 0 === e ? void 0 : e.sourceType);
                }
              );
            var V = Ia(d),
              F = V.source,
              q = V.value;
            function G() {
              var e,
                t = g.state.form,
                n =
                  ((e = {}),
                  Object(_["a"])(
                    e,
                    o["EProcessAssignType"].MANAGER,
                    "任务创建成功，请等待标注管理方为您分配标注/审核成员。"
                  ),
                  Object(_["a"])(
                    e,
                    o["EProcessAssignType"].DEFAULT,
                    "多人标注任务创建成功。"
                  ),
                  Object(_["a"])(
                    e,
                    "normal",
                    "多人标注任务分发中，任务链接预计3分钟后发送至各个标注员的邮箱，请注意查收。"
                  ),
                  e),
                r = void 0 !== t.assignType ? t.assignType : "normal",
                a = n[r];
              l({ body: a, confirmText: "知道了", mini: !0, showCancel: !1 });
            }
            function W() {
              var e = Object(S["a"])({}, y.form);
              return (
                (e.endTime = +new Date(e.endTime).setHours(23, 59, 59, 999)),
                (e.distributeDataType = k.distributeDataType),
                (e.labelMap = g.lState.labels.map(function (e) {
                  return Object(S["a"])(
                    Object(S["a"])({}, e),
                    {},
                    { id: e.isLocal ? "" : e.id }
                  );
                })),
                (e.entityRelationList = g.lState.entityRelationList),
                b.localUploadData.fileObj.fileId &&
                  Object.assign(e, {
                    sampleFile: b.localUploadData.fileObj.fileId,
                  }),
                k.isDataHouse && Object.assign(e, g.bState.form),
                e.assignType === o["EProcessAssignType"].MANAGER &&
                  (delete e.teamId,
                  delete e.distributeType,
                  delete e.distributeCount,
                  delete e.isAudit,
                  delete e.auditTeamId,
                  delete e.auditPercentage),
                e
              );
            }
            function H() {
              return X.apply(this, arguments);
            }
            function X() {
              return (
                (X = Object(h["a"])(
                  regeneratorRuntime.mark(function e() {
                    var t, a, i, o, c, u, l, d, f;
                    return regeneratorRuntime.wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!z.value) {
                              e.next = 6;
                              break;
                            }
                            return (e.next = 3), $();
                          case 3:
                            if (((i = e.sent), i)) {
                              e.next = 6;
                              break;
                            }
                            return e.abrupt("return");
                          case 6:
                            return (
                              (y.submitting = !0),
                              (e.next = 9),
                              s.value.submit()
                            );
                          case 9:
                            if (((o = e.sent), (c = o.hasError), !c)) {
                              e.next = 14;
                              break;
                            }
                            return (y.submitting = !1), e.abrupt("return");
                          case 14:
                            return (
                              (u = Object(S["a"])(
                                Object(S["a"])({}, W()),
                                {},
                                {
                                  resource: i,
                                  threshold: I.value,
                                  modelId:
                                    null === (t = A.value) || void 0 === t
                                      ? void 0
                                      : t.modelId,
                                  source:
                                    null === (a = A.value) || void 0 === a
                                      ? void 0
                                      : a.sourceType,
                                }
                              )),
                              (e.next = 17),
                              Object(Z["e"])(m.createTask(u))
                            );
                          case 17:
                            if (
                              ((l = e.sent),
                              (d = Object(R["a"])(l, 1)),
                              (f = d[0]),
                              !f)
                            ) {
                              e.next = 24;
                              break;
                            }
                            return (
                              Object(Z["d"])(y, f),
                              (y.submitting = !1),
                              e.abrupt("return")
                            );
                          case 24:
                            G(),
                              (y.submitting = !1),
                              n.$router.push(
                                Object(K["b"])("/mulan/task/list", r)
                              );
                          case 27:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )),
                X.apply(this, arguments)
              );
            }
            var Q = function () {
              n.$router.push(Object(K["b"])("/mulan/task/list", r));
            };
            return {
              EAnnoType: o["EAnnoType"],
              resConfigVue: U,
              supportModelSource: M,
              currentModelSource: L,
              resourceVisible: z,
              currentModel: A,
              threshold: I,
              handleThresholdInput: N,
              modelServices: C,
              form: s,
              state: y,
              cstate: k,
              lState: w,
              lService: O,
              bState: x,
              ETeamTypes: o["ETeamTypes"],
              EDatasourceType: o["EDatasourceType"],
              EModelSourceType: o["EModelSourceType"],
              ttSource: F,
              ttValue: q,
              datasetDropdown: c,
              toDatasetCreate: function () {
                r.$router.push(Object(K["b"])("/dataset/create", r));
              },
              toDatasetList: function () {
                r.$router.push(Object(K["b"])("/dataset/list", r));
              },
              submit: H,
              handleCancel: Q,
              transType: p.state.isDataBml ? "databml" : "normal",
              showAssignType: Object(u["computed"])(function () {
                return (
                  !p.state.isCloud &&
                  v.state.role.some(function (e) {
                    return (
                      o["EProcessRoleType"].CREATOR === e ||
                      o["EProcessRoleType"].MANAGER === e
                    );
                  })
                );
              }),
              deployedWithDatahouse: Z["c"],
              fileUploadConf: b,
              ANNO_DEMO_FILE: Wa,
            };
          },
        }),
        Da = Ra,
        Ma = (n("c95e"), n("6cbf")),
        La = Object(f["a"])(Da, Pr, Ur, !1, null, "3cd86c37", null);
      "function" === typeof Ma["default"] && Object(Ma["default"])(La);
      var Pa = La.exports,
        Ua = (function (e) {
          Object(Oa["a"])(n, e);
          var t = Object(ka["a"])(n);
          function n() {
            var e;
            return (
              Object(D["a"])(this, n),
              (e = t.apply(this, arguments)),
              (e.taskService = Object(i["useService"])().taskService),
              (e.batch = null),
              (e.bState = null),
              (e.label = Ca()),
              (e.lState = Ca().state),
              (e.state = {
                form: new i["CreateTaskDto"](),
                range: { options: { since: +new Date(), until: 0 } },
                errors: {},
                rules: {
                  taskName: [{ required: !0, message: "请输入任务名称" }],
                  distributeDataType: [
                    { required: !0, message: "请选择分配数据类型" },
                  ],
                  sourceDatasetId: [{ required: !0, message: "请选择数据集" }],
                  labelCount: [
                    {
                      validator: function (e, t, n) {
                        0 !== t
                          ? n()
                          : n("请确保您选定的数据集所需标注标签已添加完成");
                      },
                    },
                  ],
                  teamId: [{ required: !0, message: "请选择标注团队" }],
                  auditTeamId: [
                    {
                      validator: function (t, n, r) {
                        e.state.form.isAudit || r(),
                          n || r("请选择审核团队"),
                          r();
                      },
                    },
                  ],
                },
                teamIsValid: !1,
                roleList: o["EAnnoRoles"].toArray().filter(function (e) {
                  if (
                    i["mulanConfig"].SUPORT_TASK_PERMISSIONS.some(function (t) {
                      return e.alias === t;
                    })
                  )
                    return (
                      e.id === o["EAnnoRoles"].VIEW_ANNO &&
                        (e["disabled"] = !0),
                      e
                    );
                }),
                annoTypeList: o["EAnnoType"].toArray(),
                assignTypeList: o["EProcessAssignType"].toArray(),
                submitting: !1,
              }),
              e
            );
          }
          return (
            Object(M["a"])(n, [
              {
                key: "initialize",
                value: function (e) {
                  return (
                    e &&
                      Object(Z["c"])() &&
                      ((this.batch = Aa().initialize(e)),
                      (this.bState = this.batch.state),
                      (this.state.form.datasourceType =
                        o["EDatasourceType"].DATA_HOUSE),
                      Ga()),
                    this
                  );
                },
              },
            ]),
            n
          );
        })(a["svc"].ServiceBase);
      Ua = Object(Ea["a"])([a["svc"].ServiceDecorator], Ua);
      var $a = a["svc"].createUseService(Ua),
        Ba = function (e) {
          if (e)
            return Object(S["a"])(
              Object(S["a"])({}, e),
              {},
              {
                allUnAnnotated: e.annotateStatus === o["EAnnoType"].UNANNOTATED,
                allAnnotated: e.annotateStatus === o["EAnnoType"].ANNOTATED,
                annotatedCount:
                  e.annotateStatus === o["EAnnoType"].ANNOTATED
                    ? e.sampleNum
                    : 0,
                unAnnotatedCount:
                  e.annotateStatus === o["EAnnoType"].UNANNOTATED
                    ? e.sampleNum
                    : 0,
                uniqId: e.id,
              }
            );
        },
        za = function (e) {
          if (e)
            return Object(S["a"])(
              Object(S["a"])({}, e),
              {},
              {
                allUnAnnotated: !(null === e || void 0 === e
                  ? void 0
                  : e.annotatedEntityCount),
                allAnnotated: e.annotatedEntityCount === e.entityCount,
                annotatedCount: e.annotatedEntityCount,
                unAnnotatedCount: e.entityCount - e.annotatedEntityCount,
                uniqId: e.datasetId,
              }
            );
        };
      function Va(e, t) {
        return (
          (e.labelVisible && t.labelCount) ||
          !e.labelVisible ||
          e.enableInteranno
        );
      }
      function Fa(e) {
        return (
          e.form.assignType === o["EProcessAssignType"].MANAGER || e.teamIsValid
        );
      }
      function qa(e) {
        var t = $a().state,
          n = Aa().state,
          r = Ca().state,
          a = Object(i["useService"])(),
          s = a.envService,
          c = s.state.isPrivate,
          l = e.datasetDropdown,
          d = e.datasetPkg,
          f = Object(u["reactive"])({
            submitDisabled: Object(u["computed"])(function () {
              var e;
              return (
                !(null === (e = f.dataSource) || void 0 === e
                  ? void 0
                  : e.uniqId) ||
                !f.templateType ||
                !Va(f, r) ||
                !t.form.taskName ||
                !Fa(t) ||
                (f.enableInteranno && !t.form.modelId)
              );
            }),
            curDataset: Object(u["computed"])(function () {
              var e;
              return null === (e = l.value) || void 0 === e
                ? void 0
                : e.getDataset();
            }),
            templateType: Object(u["computed"])(function () {
              var e;
              return f.isDataHouse
                ? null === n || void 0 === n
                  ? void 0
                  : n.form.templateType
                : null === (e = f.curDataset) || void 0 === e
                ? void 0
                : e.templateType;
            }),
            labelVisible: Object(u["computed"])(function () {
              var e, t, n, r, a, i, o, s, c;
              return (
                f.dataSource &&
                f.templateType &&
                ![
                  null === (e = d.value) || void 0 === e
                    ? void 0
                    : e.enums.ETemplateType.TEXT_QA,
                  null === (t = d.value) || void 0 === t
                    ? void 0
                    : t.enums.ETemplateType.TEXT_NLG,
                  null === (n = d.value) || void 0 === n
                    ? void 0
                    : n.enums.ETemplateType.TEXT_SCORE,
                  null === (r = d.value) || void 0 === r
                    ? void 0
                    : r.enums.ETemplateType.ENTITY_SENTIMENT,
                  null === (a = d.value) || void 0 === a
                    ? void 0
                    : a.enums.ETemplateType.UNSTRUCTURED_OCR,
                  null === (i = d.value) || void 0 === i
                    ? void 0
                    : i.enums.ETemplateType.TEXT_RELEVANCE,
                  null === (o = d.value) || void 0 === o
                    ? void 0
                    : o.enums.ETemplateType.TEXT_SUMMARY,
                  null === (s = d.value) || void 0 === s
                    ? void 0
                    : s.enums.ETemplateType.MULTI_IMG_TEXT,
                  null === (c = d.value) || void 0 === c
                    ? void 0
                    : c.enums.ETemplateType.TEXT_COMMENT,
                ].some(function (e) {
                  return e === f.templateType;
                })
              );
            }),
            isDataHouse: Object(u["computed"])(function () {
              return t.form.datasourceType === o["EDatasourceType"].DATA_HOUSE;
            }),
            dataSource: Object(u["computed"])(function () {
              return f.isDataHouse ? Ba(n.batchInfo) : za(f.curDataset);
            }),
            distributeDataType: Object(u["computed"])({
              get: function () {
                var e, n;
                return (
                  null === (e = f.dataSource) || void 0 === e
                    ? void 0
                    : e.allAnnotated
                )
                  ? o["EAnnoType"].ANNOTATED
                  : (
                      null === (n = f.dataSource) || void 0 === n
                        ? void 0
                        : n.allUnAnnotated
                    )
                  ? o["EAnnoType"].UNANNOTATED
                  : t.form.distributeDataType;
              },
              set: function (e) {
                return (t.form.distributeDataType = e);
              },
            }),
            distributeDisabled: Object(u["computed"])(function () {
              var e, t;
              return (
                (null === (e = f.dataSource) || void 0 === e
                  ? void 0
                  : e.allUnAnnotated) ||
                (null === (t = f.dataSource) || void 0 === t
                  ? void 0
                  : t.allAnnotated)
              );
            }),
            annoLeft: Object(u["computed"])(function () {
              return f.dataSource
                ? f.distributeDataType === o["EAnnoType"].ANNOTATED
                  ? f.dataSource.annotatedCount
                  : f.dataSource.unAnnotatedCount
                : 0;
            }),
            newDatasetName: Object(u["computed"])(function () {
              if (t.form.sourceDatasetId && 2 === t.form.destCreateType) {
                var e,
                  n =
                    null === (e = l.value) || void 0 === e
                      ? void 0
                      : e.getGroup(),
                  r =
                    Math.max.apply(
                      Math,
                      Object(N["a"])(
                        n.versions.map(function (e) {
                          return e.versionId;
                        })
                      )
                    ) + 1;
                return n.name + " V" + r;
              }
              return "";
            }),
            showDatasouceType: Object(u["computed"])(function () {
              return (
                Object(Z["c"])() &&
                !!(null === n || void 0 === n ? void 0 : n.form.batchId)
              );
            }),
            labelListKey: Object(u["computed"])(function () {
              var e;
              return (
                (null === (e = f.dataSource) || void 0 === e
                  ? void 0
                  : e.datasetId) +
                "-" +
                f.templateType
              );
            }),
            showSmartAnnoConfig: Object(u["computed"])(function () {
              return (
                c &&
                f.distributeDataType === o["EAnnoType"].UNANNOTATED &&
                f.templateType
              );
            }),
            enableInteranno: Object(u["computed"])({
              set: function (e) {
                t.form.interannoType = e
                  ? o["EInterannoType"].ENABLE_INTERANNO
                  : o["EInterannoType"].DISABLE_INTERANNO;
              },
              get: function () {
                return (
                  t.form.interannoType === o["EInterannoType"].ENABLE_INTERANNO
                );
              },
            }),
            supportThreshold: Object(u["computed"])(function () {
              var e, t, n;
              return ![
                null === (e = d.value) || void 0 === e
                  ? void 0
                  : e.enums.ETemplateType.OCR,
                null === (t = d.value) || void 0 === t
                  ? void 0
                  : t.enums.ETemplateType.UNSTRUCTURED_OCR,
                null === (n = d.value) || void 0 === n
                  ? void 0
                  : n.enums.ETemplateType.TEXT_ENTITY_EXTRACT,
              ].some(function (e) {
                return e === f.templateType;
              });
            }),
            modelSelectDisabled: Object(u["computed"])(function () {
              return c
                ? !f.templateType
                : !f.curDataset ||
                    !f.curDataset.ability.annotate ||
                    !f.curDataset.id ||
                    f.curDataset.disabled;
            }),
          });
        return f;
      }
      function Ga() {
        var e = Aa().state,
          t = Ca();
        Object(u["watch"])(
          function () {
            return e.form.templateType;
          },
          function (e, n) {
            e && n && t.setInitialLabel([]);
          }
        );
      }
      var Wa = ["pdf"],
        Ka = Object(u["defineComponent"])({
          components: { CreateForm: Pa },
          setup: function () {
            var e = a["utils"].useVM(),
              t = Object(u["computed"])(function () {
                return [
                  {
                    name: "多人标注",
                    to: Object(K["b"])("/mulan/task/list", e),
                  },
                  { name: "创建多人标注任务" },
                ];
              });
            return (
              _n(function () {
                return t.value;
              }),
              { breadcrumbList: t }
            );
          },
        }),
        Ha = Ka,
        Xa =
          (n("aa41"), Object(f["a"])(Ha, Mr, Lr, !1, null, "0d47b70b", null)),
        Qa = Xa.exports,
        Ya = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "page-team-list" },
            [
              n(
                "the-tab-group",
                {
                  staticClass: "team-tab-group",
                  model: {
                    value: e.tab.current,
                    callback: function (t) {
                      e.$set(e.tab, "current", t);
                    },
                    expression: "tab.current",
                  },
                },
                e._l(e.tab.list, function (t) {
                  return n("the-tab", { key: t.id, attrs: { value: t.id } }, [
                    e._v(" " + e._s(t.label) + " "),
                  ]);
                }),
                1
              ),
              n(e.tab.com, { tag: "component" }),
            ],
            1
          );
        },
        Za = [],
        Ja = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            {
              directives: [
                {
                  name: "loading",
                  rawName: "v-loading",
                  value: !e.state.ready,
                  expression: "!state.ready",
                },
              ],
              staticClass: "team-table",
            },
            [
              n("TableToolbar", {
                on: {
                  handleNewTeamClick: e.handleNewTeamClick,
                  refresh: e.refresh,
                },
              }),
              e.cstate.showEmpty
                ? n("the-empty-placeholder", { staticClass: "empty" }, [
                    n("p", { attrs: { slot: "top" }, slot: "top" }, [
                      e._v(
                        " " +
                          e._s(
                            e.tState.pageOptions.word
                              ? "未搜索到标注团队"
                              : "您还没有标注团队"
                          ) +
                          " "
                      ),
                    ]),
                    n(
                      "span",
                      {
                        staticClass: "link-blue",
                        attrs: { slot: "bottom" },
                        on: { click: e.handleNewTeamClick },
                        slot: "bottom",
                      },
                      [e._v("创建团队")]
                    ),
                  ])
                : [
                    n("div", { staticClass: "team-table-header" }, [
                      n("span", { staticClass: "header-info" }, [
                        e._v(
                          e._s(e.tState.pageOptions.word ? "搜索到" : "") +
                            "标注团队总数：" +
                            e._s(e.tState.teamList.teamTotal || 0) +
                            "个"
                        ),
                      ]),
                      n("span", { staticClass: "header-info" }, [
                        e._v(
                          "标注成员：" +
                            e._s(e.tState.teamList.memberTotal || 0) +
                            "人"
                        ),
                      ]),
                    ]),
                    n("TeamTable", {
                      directives: [
                        {
                          name: "loading",
                          rawName: "v-loading",
                          value: e.tState.loading,
                          expression: "tState.loading",
                        },
                      ],
                      staticClass: "team-table-body",
                      attrs: { source: e.tState.teamList.items },
                      on: { refresh: e.refresh },
                    }),
                    n(
                      "div",
                      { staticClass: "pager-wrap" },
                      [
                        n(
                          "the-paginator",
                          e._b(
                            {
                              attrs: { total: e.tState.teamList.teamTotal },
                              on: { change: e.refresh },
                            },
                            "the-paginator",
                            e.tState.pageOptions,
                            !1
                          )
                        ),
                      ],
                      1
                    ),
                  ],
            ],
            2
          );
        },
        ei = [],
        ti = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("div", { staticClass: "team-table" }, [
            n(
              "div",
              { staticClass: "team-table-body" },
              [
                n(
                  "the-table",
                  { staticClass: "main-table", attrs: { source: e.source } },
                  [
                    n(
                      "the-column",
                      {
                        attrs: {
                          render: function (e) {
                            return e.index;
                          },
                        },
                      },
                      [e._v(" 序号 ")]
                    ),
                    n(
                      "the-column",
                      {
                        attrs: {
                          render: function (e) {
                            return e.name;
                          },
                        },
                      },
                      [e._v(" 团队名称 ")]
                    ),
                    n(
                      "the-column",
                      {
                        attrs: {
                          render: function (t) {
                            return e.ETeamTypes.getLabelById(t.teamType);
                          },
                        },
                      },
                      [e._v(" 团队类型 ")]
                    ),
                    n(
                      "the-column",
                      {
                        attrs: {
                          render: function (e) {
                            return e.memberCount;
                          },
                        },
                      },
                      [e._v(" 团队成员数 ")]
                    ),
                    n(
                      "the-column",
                      {
                        scopedSlots: e._u([
                          {
                            key: "render",
                            fn: function (e) {
                              var t = e.row;
                              return [
                                n("RenderDes", {
                                  key: t.teamId,
                                  attrs: { team: t },
                                }),
                              ];
                            },
                          },
                        ]),
                      },
                      [e._v(" 团队描述 ")]
                    ),
                    n(
                      "the-column",
                      {
                        directives: [
                          {
                            name: "permission",
                            rawName: "v-permission",
                            value: "write",
                            expression: "'write'",
                          },
                        ],
                        scopedSlots: e._u([
                          {
                            key: "render",
                            fn: function (t) {
                              var r = t.row;
                              return [
                                n("RenderCtl", {
                                  key: r.teamId,
                                  attrs: { team: r },
                                  on: {
                                    refresh: function (t) {
                                      return e.$emit("refresh");
                                    },
                                  },
                                }),
                              ];
                            },
                          },
                        ]),
                      },
                      [e._v(" 操作 ")]
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ]);
        },
        ni = [],
        ri = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("div", { staticClass: "render-ctl" }, [
            n(
              "span",
              {
                directives: [
                  {
                    name: "permission",
                    rawName: "v-permission",
                    value: "write",
                    expression: "'write'",
                  },
                ],
                staticClass: "link-blue",
                on: { click: e.handleModifyClick },
              },
              [e._v("管理团队")]
            ),
            n(
              "span",
              {
                directives: [
                  {
                    name: "permission",
                    rawName: "v-permission",
                    value: "write",
                    expression: "'write'",
                  },
                ],
                staticClass: "link-blue",
                on: { click: e.handleDeleteClick },
              },
              [e._v("删除")]
            ),
          ]);
        },
        ai = [],
        ii = Object(u["defineComponent"])({
          props: { team: { type: Object, required: !0 } },
          setup: function (e, t) {
            var n = t.root,
              r = t.emit,
              a = Object(i["useService"])(),
              o = a.teamService,
              s = Object(W["useToast"])(),
              c = s.succeed,
              u = e.team.teamId,
              l = Object(T["useConfirmModal"])(),
              d = function () {
                n.$modal.open(Ze, {
                  parent: n,
                  props: { teamId: u },
                  on: {
                    refresh: function () {
                      r("refresh");
                    },
                  },
                });
              },
              f = (function () {
                var e = Object(h["a"])(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            u &&
                              l({
                                props: {
                                  head: "删除团队",
                                  body: "操作删除后，该团队将会被删除且不可恢复，确认要删除吗？",
                                  cancel: "取消",
                                  ok: "确定",
                                },
                                on: {
                                  ok: (function () {
                                    var e = Object(h["a"])(
                                      regeneratorRuntime.mark(function e() {
                                        var t, n, a;
                                        return regeneratorRuntime.wrap(
                                          function (e) {
                                            while (1)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  return (
                                                    (e.next = 2),
                                                    Object(Z["e"])(
                                                      o.info.deleteTeam({
                                                        teamId: +u,
                                                      })
                                                    )
                                                  );
                                                case 2:
                                                  (t = e.sent),
                                                    (n = Object(R["a"])(t, 1)),
                                                    (a = n[0]),
                                                    a ||
                                                      (c("删除成功"),
                                                      r("refresh"));
                                                case 6:
                                                case "end":
                                                  return e.stop();
                                              }
                                          },
                                          e
                                        );
                                      })
                                    );
                                    function t() {
                                      return e.apply(this, arguments);
                                    }
                                    return t;
                                  })(),
                                },
                              });
                          case 1:
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
            return { handleModifyClick: d, handleDeleteClick: f };
          },
        }),
        oi = ii,
        si =
          (n("dcd6"), Object(f["a"])(oi, ri, ai, !1, null, "65757b6d", null)),
        ci = si.exports,
        ui = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "render-des" },
            [
              n("the-text-tip", { attrs: { text: e.cstate.des } }, [
                e._v(" " + e._s(e.team.remark) + " "),
              ]),
            ],
            1
          );
        },
        li = [],
        di = Object(u["defineComponent"])({
          props: { team: { type: Object, required: !0 } },
          setup: function (e) {
            var t = Object(u["reactive"])({
              des: Object(u["computed"])(function () {
                var t = e.team.remark;
                return t.length < 25 ? t : t.slice(0, 25) + "...";
              }),
            });
            return { cstate: t };
          },
        }),
        fi = di,
        pi =
          (n("189f"), Object(f["a"])(fi, ui, li, !1, null, "f2dcb1ae", null)),
        vi = pi.exports,
        mi = Object(u["defineComponent"])({
          components: { RenderCtl: ci, RenderDes: vi },
          props: {
            source: {
              type: Array,
              default: function () {
                return [];
              },
            },
          },
          setup: function () {
            return { ETeamTypes: o["ETeamTypes"] };
          },
        }),
        bi = mi,
        hi =
          (n("b4e0"), Object(f["a"])(bi, ti, ni, !1, null, "68cd3680", null)),
        gi = hi.exports,
        yi = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "teamtable-toolbar" },
            [
              n(
                "eg-button",
                {
                  directives: [
                    {
                      name: "permission",
                      rawName: "v-permission",
                      value: "write",
                      expression: "'write'",
                    },
                  ],
                  attrs: { type: "primary" },
                  on: { click: e.handleNewTeamClick },
                },
                [e._v(" 新建团队 ")]
              ),
              n(
                "div",
                { staticClass: "search-item" },
                [
                  n(
                    "the-input",
                    {
                      attrs: { placeholder: "输入团队名称" },
                      on: {
                        keyup: function (t) {
                          return !t.type.indexOf("key") &&
                            e._k(t.keyCode, "enter", 13, t.key, "Enter")
                            ? null
                            : e.$emit("refresh", {
                                offset: 0,
                                word: e.state.word,
                              });
                        },
                      },
                      model: {
                        value: e.state.word,
                        callback: function (t) {
                          e.$set(
                            e.state,
                            "word",
                            "string" === typeof t ? t.trim() : t
                          );
                        },
                        expression: "state.word",
                      },
                    },
                    [
                      n("the-icon", {
                        staticClass: "search-icon",
                        attrs: { slot: "postfix", name: "search" },
                        on: {
                          click: function (t) {
                            return e.$emit("refresh", {
                              offset: 0,
                              word: e.state.word,
                            });
                          },
                        },
                        slot: "postfix",
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
        _i = [],
        Ti = Object(u["defineComponent"])({
          setup: function (e, t) {
            var n = t.emit,
              r = Object(i["useService"])(),
              a = r.teamService;
            a.reset();
            var o = function () {
                n("handleNewTeamClick");
              },
              s = Object(u["reactive"])({ word: Object(u["ref"])("") }),
              c = Object(u["computed"])(function () {
                return a.list.state;
              });
            return (
              Object(u["watch"])(
                function () {
                  return s.word;
                },
                function (e) {
                  "" === e && n("refresh", { offset: 0, word: s.word });
                }
              ),
              { state: s, tState: c, handleNewTeamClick: o }
            );
          },
        }),
        xi = Ti,
        wi =
          (n("d09e"), Object(f["a"])(xi, yi, _i, !1, null, "73a0bcba", null)),
        Oi = wi.exports,
        ki = Object(u["defineComponent"])({
          components: { TeamTable: gi, TableToolbar: Oi },
          setup: function (e, t) {
            var n = t.root,
              r = Object(i["useService"])(),
              a = r.teamService;
            a.reset();
            var o = Object(u["computed"])(function () {
                return a.list.state;
              }),
              s = function (e) {
                a.list.handlePageChange(e);
              },
              c = Object(u["reactive"])({ ready: !1 }),
              l = Object(u["reactive"])({
                showEmpty: Object(u["computed"])(function () {
                  return (
                    c.ready && !o.value.loading && !o.value.teamList.teamTotal
                  );
                }),
              });
            Object(u["onMounted"])(
              Object(h["a"])(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), a.list.handlePageChange();
                        case 2:
                          c.ready = !0;
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )
            );
            var d = function () {
              n.$modal.open(Ze, {
                parent: n,
                props: { teamId: null },
                on: {
                  refresh: function () {
                    s();
                  },
                },
              });
            };
            return {
              state: c,
              cstate: l,
              tState: o,
              refresh: s,
              handleNewTeamClick: d,
            };
          },
        }),
        Ei = ki,
        ji =
          (n("41e0"), Object(f["a"])(Ei, Ja, ei, !1, null, "766d7d63", null)),
        Ci = ji.exports,
        Si = n("64b4"),
        Ai = Object(a["enumxFactory"])({
          TEAM: { id: 1, label: "团队人员管理", com: Ci },
          KPI: { id: 2, label: "人员绩效查看", com: Si["KpiTableList"] },
        });
      function Ii() {
        var e = Object(u["ref"])(Ai.TEAM),
          t = Ai.toArray(),
          n = Object(u["computed"])(function () {
            var t;
            return null === (t = Ai.getItemById(e.value)) || void 0 === t
              ? void 0
              : t.com;
          });
        return Object(u["reactive"])({ current: e, list: t, com: n });
      }
      var Ni = Object(u["defineComponent"])({
          components: { TeamTableList: Ci, KpiTableList: Si["KpiTableList"] },
          setup: function () {
            var e = Object(u["getCurrentInstance"])().proxy,
              t = Object(i["useService"])(),
              n = t.roleService;
            n.init();
            var r = Object(u["computed"])(function () {
              return [
                { name: "多人标注", to: Object(K["b"])("/mulan/task/list", e) },
                { name: "管理多人标注团队" },
              ];
            });
            _n(function () {
              return r.value;
            });
            var a = Ii();
            return { breadcrumbList: r, tab: a };
          },
        }),
        Ri = Ni,
        Di =
          (n("3cfd"), Object(f["a"])(Ri, Ya, Za, !1, null, "8417ffe0", null)),
        Mi = Di.exports,
        Li = n("8bbf"),
        Pi = n.n(Li);
      function Ui(e) {
        return Object(a["useDefinePath"])("/mulan/".concat(e));
      }
      Object(r["setPublicPath"])("@baidu/afe-app-mulan", 1),
        Pi.a.directive("scrollload", a["vScrollLoad"]);
      var $i = [
        {
          name: "afeAppMulanLayout",
          component: v,
          path: "/mulan",
          children: [
            {
              name: "afeAppMulanTaskList",
              component: Gn,
              path: Ui("task/list"),
            },
            {
              name: "afeAppMulanTaskProgress",
              component: Dr,
              path: Ui("task/progress"),
            },
            {
              name: "afeAppMulanTaskCreate",
              component: Qa,
              path: Ui("task/create"),
            },
            {
              name: "afeAppMulanTeamList",
              component: Mi,
              path: Ui("team/list"),
            },
          ],
        },
      ];
    },
    cdf9: function (e, t, n) {
      var r = n("825a"),
        a = n("861d"),
        i = n("f069");
      e.exports = function (e, t) {
        if ((r(e), a(t) && t.constructor === e)) return t;
        var n = i.f(e),
          o = n.resolve;
        return o(t), n.promise;
      };
    },
    ce4d: function (e, t, n) {
      var r = n("4a5b");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("4b470424", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    ce4e: function (e, t, n) {
      var r = n("da84"),
        a = n("9112");
      e.exports = function (e, t) {
        try {
          a(r, e, t);
        } catch (n) {
          r[e] = t;
        }
        return t;
      };
    },
    cf5d: function (e, t, n) {
      "use strict";
      var r = n("ce4d"),
        a = n.n(r);
      a.a;
    },
    cf8c: function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".render-text[data-v-43caa959]{width:110px;height:22px;word-break:keep-all}.render-text[data-v-43caa959]  .long-text.s-tip{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.render-text[data-v-43caa959]  .long-text.s-tip .s-tip_popper_content{max-width:600px;word-break:break-all}",
          "",
        ]),
        (e.exports = t);
    },
    cfc7: function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".assign-modal .w275[data-v-42cf45ea]{width:275px}.assign-modal[data-v-42cf45ea]  .s-modal_main{min-width:400px}.assign-modal .audit-input-postfix[data-v-42cf45ea]{position:relative;left:-54px}.assign-modal .modal-body[data-v-42cf45ea]{display:flex}.assign-modal .modal-body .body-icon[data-v-42cf45ea]{margin-top:5px;font-size:2em;color:#f59000}.assign-modal .modal-body .body-content[data-v-42cf45ea]{flex:1;margin-left:20px}.assign-modal .modal-body .body-content .modal-radio[data-v-42cf45ea],.assign-modal .modal-body .body-content .modal-tip[data-v-42cf45ea]{margin:15px 0}.assign-modal .modal-body .body-content .modal-radio[data-v-42cf45ea]  .s-radio-group{display:inline-block}",
          "",
        ]),
        (e.exports = t);
    },
    d012: function (e, t) {
      e.exports = {};
    },
    d039: function (e, t) {
      e.exports = function (e) {
        try {
          return !!e();
        } catch (t) {
          return !0;
        }
      };
    },
    d03a: function (e, t, n) {
      var r = n("21e2");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("c645175a", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    d066: function (e, t, n) {
      var r = n("428f"),
        a = n("da84"),
        i = function (e) {
          return "function" == typeof e ? e : void 0;
        };
      e.exports = function (e, t) {
        return arguments.length < 2
          ? i(r[e]) || i(a[e])
          : (r[e] && r[e][t]) || (a[e] && a[e][t]);
      };
    },
    d09e: function (e, t, n) {
      "use strict";
      var r = n("c17c"),
        a = n.n(r);
      a.a;
    },
    d192: function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".mulan-label-list[data-v-08211a57]{width:450px}.mulan-label-list[data-v-08211a57]  .mulan-label-picker{box-shadow:none;border:1px solid #eee}.mulan-label-list[data-v-08211a57]  .mulan-label-picker .label-picker-dataset-head .label-picker-dataset-opts_add,.mulan-label-list[data-v-08211a57]  .mulan-label-picker .label-picker-dataset-head .label-title{font-size:12px}.mulan-label-list[data-v-08211a57]  .mulan-label-picker .label-picker-searcher{display:none}.mulan-label-list[data-v-08211a57]  .mulan-label-picker .label-picker-dataset_items{padding:8px 0}.mulan-label-list[data-v-08211a57]  .mulan-label-picker .label-picker-dataset_items .label-picker_items_head{padding:12px 30px}.mulan-label-list[data-v-08211a57]  .mulan-label-picker .label-picker-dataset_items .label-picker_items_content{max-height:255px;overflow-y:auto;padding:5px 30px}.mulan-label-list[data-v-08211a57]  .mulan-label-picker .label-picker-dataset_items .label-picker_items_content .label-picker_item .label-picker_item_index{font-size:12px}.mulan-label-list[data-v-08211a57]  .mulan-label-picker .label-picker-dataset_items .label-picker_items_content .label-picker_item .label-picker_item_content{border:none}.mulan-label-list[data-v-08211a57]  .mulan-label-picker .label-picker-dataset_items .label-picker_items_content .label-picker_item .label-picker_item_content.label-picker-dataset_item .label-count,.mulan-label-list[data-v-08211a57]  .mulan-label-picker .label-picker-dataset_items .label-picker_items_content .label-picker_item .label-picker_item_content.label-picker-dataset_item .label-picker-name{font-size:12px}.mulan-label-list[data-v-08211a57]  .mulan-label-picker .label-picker-dataset_items .label-picker_items_content .label-picker-opts .label-opt{line-height:1}.mulan-label-list[data-v-08211a57]  .mulan-label-picker .label-picker-dataset_items.label-mix-items .label-picker_items_content{max-height:100%}.mulan-label-list[data-v-08211a57]  .mulan-label-picker .relation-picker-body_list{min-height:100px;max-height:255px}.mulan-label-list[data-v-08211a57]  .mulan-label-picker .relation-picker-head_title{font-size:12px}",
          "",
        ]),
        (e.exports = t);
    },
    d1e7: function (e, t, n) {
      "use strict";
      var r = {}.propertyIsEnumerable,
        a = Object.getOwnPropertyDescriptor,
        i = a && !r.call({ 1: 2 }, 1);
      t.f = i
        ? function (e) {
            var t = a(this, e);
            return !!t && t.enumerable;
          }
        : r;
    },
    d274: function (e, t) {
      e.exports = function (e) {
        (e.options.__i18n = e.options.__i18n || []),
          e.options.__i18n.push(
            '{"normal":{"successBody":"多人标注任务分发中，任务链接预计3分钟后发送至各个标注员的邮箱，请注意查收。","datasetTip":"智能标注/多人标注/清洗/共享/导入导出中数据集不可选、且数据集未标数据需大于0"},"databml":{"successBody":"多人标注任务创建成功。","datasetTip":"智能标注/多人标注/共享/导入导出中数据集不可选"}}'
          ),
          delete e.options._Ctor;
      };
    },
    d28b: function (e, t, n) {
      var r = n("746f");
      r("iterator");
    },
    d2bb: function (e, t, n) {
      var r = n("825a"),
        a = n("3bbe");
      e.exports =
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function () {
              var e,
                t = !1,
                n = {};
              try {
                (e = Object.getOwnPropertyDescriptor(
                  Object.prototype,
                  "__proto__"
                ).set),
                  e.call(n, []),
                  (t = n instanceof Array);
              } catch (i) {}
              return function (n, i) {
                return r(n), a(i), t ? e.call(n, i) : (n.__proto__ = i), n;
              };
            })()
          : void 0);
    },
    d3b7: function (e, t, n) {
      var r = n("00ee"),
        a = n("6eeb"),
        i = n("b041");
      r || a(Object.prototype, "toString", i, { unsafe: !0 });
    },
    d44e: function (e, t, n) {
      var r = n("9bf2").f,
        a = n("5135"),
        i = n("b622"),
        o = i("toStringTag");
      e.exports = function (e, t, n) {
        e &&
          !a((e = n ? e : e.prototype), o) &&
          r(e, o, { configurable: !0, value: t });
      };
    },
    d4ec: function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    d58f: function (e, t, n) {
      var r = n("1c0b"),
        a = n("7b0b"),
        i = n("44ad"),
        o = n("50c4"),
        s = function (e) {
          return function (t, n, s, c) {
            r(n);
            var u = a(t),
              l = i(u),
              d = o(u.length),
              f = e ? d - 1 : 0,
              p = e ? -1 : 1;
            if (s < 2)
              while (1) {
                if (f in l) {
                  (c = l[f]), (f += p);
                  break;
                }
                if (((f += p), e ? f < 0 : d <= f))
                  throw TypeError(
                    "Reduce of empty array with no initial value"
                  );
              }
            for (; e ? f >= 0 : d > f; f += p) f in l && (c = n(c, l[f], f, u));
            return c;
          };
        };
      e.exports = { left: s(!1), right: s(!0) };
    },
    d5bb: function (e, t, n) {
      var r = n("6a24");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("6f80980b", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    d5f6: function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".kpitable-toolbar[data-v-1187e4a1]{margin-bottom:20px}.kpitable-toolbar .btn-group[data-v-1187e4a1]{display:inline-block}.kpitable-toolbar .download-icon[data-v-1187e4a1]{float:right}.kpitable-toolbar .download-icon .link-blue[data-v-1187e4a1]{margin-right:8px}.kpitable-toolbar .filter-items[data-v-1187e4a1]{margin:20px 0 16px}.kpitable-toolbar .filter-items .filter-item[data-v-1187e4a1]{display:flex;flex-direction:row;align-items:center}.kpitable-toolbar .filter-items .filter-item .w142[data-v-1187e4a1]{width:142px}.kpitable-toolbar .filter-items .filter-item[data-v-1187e4a1]  .s-field{margin-top:0;margin-right:30px}.kpitable-toolbar .filter-items .filter-item[data-v-1187e4a1]  .s-field .left{text-align:left;margin-right:16px;min-width:0}.kpitable-toolbar .filter-items .filter-item[data-v-1187e4a1]  .s-date_label{height:32px;display:flex;align-items:center}.kpitable-toolbar .filter-items .search-input[data-v-1187e4a1]{float:right;width:180px;height:32px}.kpitable-toolbar .filter-items .search-input .search-icon[data-v-1187e4a1]{cursor:pointer;top:0}",
          "",
        ]),
        (e.exports = t);
    },
    d6ab: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return m;
      });
      var r = n("2841"),
        a = n("5530"),
        i = (n("96cf"), n("1da1")),
        o = n("d4ec"),
        s = n("bee2"),
        c = n("262e"),
        u = n("2caf"),
        l = n("9ab4"),
        d = n("c873"),
        f = n("6e9b"),
        p = (function (e) {
          Object(c["a"])(n, e);
          var t = Object(u["a"])(n);
          function n() {
            var e;
            return (
              Object(o["a"])(this, n),
              (e = t.apply(this, arguments)),
              (e.state = { loading: !1, teamInfo: new f["b"]() }),
              e
            );
          }
          return (
            Object(s["a"])(n, [
              {
                key: "saveTeam",
                value: (function () {
                  var e = Object(i["a"])(
                    regeneratorRuntime.mark(function e(t) {
                      var n;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (this.state.loading = !0),
                                  (e.next = 4),
                                  d["a"].fetch(
                                    "teamAnno/team/save",
                                    Object(a["a"])({}, t)
                                  )
                                );
                              case 4:
                                return (n = e.sent), e.abrupt("return", n);
                              case 6:
                                return (
                                  (e.prev = 6),
                                  (this.state.loading = !1),
                                  e.finish(6)
                                );
                              case 9:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, , 6, 9]]
                      );
                    })
                  );
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "deleteTeam",
                value: function (e) {
                  return d["a"].fetch("teamAnno/team/delete", e);
                },
              },
              {
                key: "fetchTeamDetail",
                value: (function () {
                  var e = Object(i["a"])(
                    regeneratorRuntime.mark(function e(t) {
                      var n,
                        r,
                        i = arguments;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n =
                                    !(i.length > 1 && void 0 !== i[1]) || i[1]),
                                  (e.prev = 1),
                                  (this.state.loading = !0),
                                  (e.next = 5),
                                  d["a"].fetch(
                                    "teamAnno/team/detail",
                                    Object(a["a"])({}, t)
                                  )
                                );
                              case 5:
                                return (
                                  (r = e.sent),
                                  n && (this.state.teamInfo = r),
                                  e.abrupt("return", r)
                                );
                              case 8:
                                return (
                                  (e.prev = 8),
                                  (this.state.loading = !1),
                                  e.finish(8)
                                );
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[1, , 8, 11]]
                      );
                    })
                  );
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
            ]),
            n
          );
        })(r["svc"].ServiceBase);
      p = Object(l["a"])([r["svc"].ServiceDecorator], p);
      n("d81d");
      var v = (function (e) {
        Object(c["a"])(n, e);
        var t = Object(u["a"])(n);
        function n() {
          var e;
          return (
            Object(o["a"])(this, n),
            (e = t.apply(this, arguments)),
            (e.state = {
              loading: !0,
              pageOptions: { word: "", pageSize: 10, offset: 0 },
              teamList: {},
            }),
            e
          );
        }
        return (
          Object(s["a"])(n, [
            {
              key: "fetchTeamList",
              value: (function () {
                var e = Object(i["a"])(
                  regeneratorRuntime.mark(function e(t) {
                    var n,
                      r,
                      i = this,
                      o = arguments;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n =
                                  !(o.length > 1 && void 0 !== o[1]) || o[1]),
                                (e.prev = 1),
                                (this.state.loading = !0),
                                (e.next = 5),
                                d["a"].fetch(
                                  "teamAnno/team/list",
                                  Object(a["a"])(
                                    Object(a["a"])({}, new f["a"]()),
                                    t
                                  )
                                )
                              );
                            case 5:
                              return (
                                (r = e.sent),
                                r.items &&
                                  r.items.map(function (e, t) {
                                    return (e.index =
                                      t + 1 + i.state.pageOptions.offset);
                                  }),
                                n && (this.state.teamList = r),
                                e.abrupt("return", r)
                              );
                            case 9:
                              return (
                                (e.prev = 9),
                                (this.state.loading = !1),
                                e.finish(9)
                              );
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[1, , 9, 12]]
                    );
                  })
                );
                function t(t) {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
            },
            {
              key: "fetchUserPermission",
              value: (function () {
                var e = Object(i["a"])(
                  regeneratorRuntime.mark(function e(t) {
                    var n;
                    return regeneratorRuntime.wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              d["a"].fetch(
                                "bml/getPermissionByModule",
                                Object(a["a"])(
                                  Object(a["a"])({}, t),
                                  {},
                                  { resourceType: "easydata-teamannoReceiver" }
                                )
                              )
                            );
                          case 2:
                            return (n = e.sent), e.abrupt("return", n);
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                function t(t) {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
            },
            {
              key: "handlePageChange",
              value: (function () {
                var e = Object(i["a"])(
                  regeneratorRuntime.mark(function e(t) {
                    var n, r, i, o;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (this.state.pageOptions = Object(a["a"])(
                                  Object(a["a"])({}, this.state.pageOptions),
                                  t
                                )),
                                (n = this.state.pageOptions),
                                (r = n.pageSize),
                                (i = n.offset),
                                (o = n.word),
                                (e.next = 4),
                                this.fetchTeamList({
                                  pageSize: r,
                                  offset: i,
                                  word: o,
                                })
                              );
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                function t(t) {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
            },
          ]),
          n
        );
      })(r["svc"].ServiceBase);
      function m() {
        var e = r["svc"].createSingleton(p),
          t = r["svc"].createSingleton(v);
        return {
          reset: function () {
            e.reset(), t.reset();
          },
          info: e,
          list: t,
        };
      }
      v = Object(l["a"])([r["svc"].ServiceDecorator], v);
    },
    d6e4: function (e, t) {},
    d784: function (e, t, n) {
      "use strict";
      n("ac1f");
      var r = n("6eeb"),
        a = n("d039"),
        i = n("b622"),
        o = n("9263"),
        s = n("9112"),
        c = i("species"),
        u = !a(function () {
          var e = /./;
          return (
            (e.exec = function () {
              var e = [];
              return (e.groups = { a: "7" }), e;
            }),
            "7" !== "".replace(e, "$<a>")
          );
        }),
        l = (function () {
          return "$0" === "a".replace(/./, "$0");
        })(),
        d = i("replace"),
        f = (function () {
          return !!/./[d] && "" === /./[d]("a", "$0");
        })(),
        p = !a(function () {
          var e = /(?:)/,
            t = e.exec;
          e.exec = function () {
            return t.apply(this, arguments);
          };
          var n = "ab".split(e);
          return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
        });
      e.exports = function (e, t, n, d) {
        var v = i(e),
          m = !a(function () {
            var t = {};
            return (
              (t[v] = function () {
                return 7;
              }),
              7 != ""[e](t)
            );
          }),
          b =
            m &&
            !a(function () {
              var t = !1,
                n = /a/;
              return (
                "split" === e &&
                  ((n = {}),
                  (n.constructor = {}),
                  (n.constructor[c] = function () {
                    return n;
                  }),
                  (n.flags = ""),
                  (n[v] = /./[v])),
                (n.exec = function () {
                  return (t = !0), null;
                }),
                n[v](""),
                !t
              );
            });
        if (
          !m ||
          !b ||
          ("replace" === e && (!u || !l || f)) ||
          ("split" === e && !p)
        ) {
          var h = /./[v],
            g = n(
              v,
              ""[e],
              function (e, t, n, r, a) {
                return t.exec === o
                  ? m && !a
                    ? { done: !0, value: h.call(t, n, r) }
                    : { done: !0, value: e.call(n, t, r) }
                  : { done: !1 };
              },
              {
                REPLACE_KEEPS_$0: l,
                REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: f,
              }
            ),
            y = g[0],
            _ = g[1];
          r(String.prototype, e, y),
            r(
              RegExp.prototype,
              v,
              2 == t
                ? function (e, t) {
                    return _.call(e, this, t);
                  }
                : function (e) {
                    return _.call(e, this);
                  }
            );
        }
        d && s(RegExp.prototype[v], "sham", !0);
      };
    },
    d81d: function (e, t, n) {
      "use strict";
      var r = n("23e7"),
        a = n("b727").map,
        i = n("1dde"),
        o = n("ae40"),
        s = i("map"),
        c = o("map");
      r(
        { target: "Array", proto: !0, forced: !s || !c },
        {
          map: function (e) {
            return a(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      );
    },
    da84: function (e, t, n) {
      (function (t) {
        var n = function (e) {
          return e && e.Math == Math && e;
        };
        e.exports =
          n("object" == typeof globalThis && globalThis) ||
          n("object" == typeof window && window) ||
          n("object" == typeof self && self) ||
          n("object" == typeof t && t) ||
          Function("return this")();
      }.call(this, n("c8ba")));
    },
    dbb4: function (e, t, n) {
      var r = n("23e7"),
        a = n("83ab"),
        i = n("56ef"),
        o = n("fc6a"),
        s = n("06cf"),
        c = n("8418");
      r(
        { target: "Object", stat: !0, sham: !a },
        {
          getOwnPropertyDescriptors: function (e) {
            var t,
              n,
              r = o(e),
              a = s.f,
              u = i(r),
              l = {},
              d = 0;
            while (u.length > d)
              (n = a(r, (t = u[d++]))), void 0 !== n && c(l, t, n);
            return l;
          },
        }
      );
    },
    dcd6: function (e, t, n) {
      "use strict";
      var r = n("ed29"),
        a = n.n(r);
      a.a;
    },
    dcec: function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".pager-wrap[data-v-1d620cbd]{margin-top:20px;text-align:right}",
          "",
        ]),
        (e.exports = t);
    },
    ddb0: function (e, t, n) {
      var r = n("da84"),
        a = n("fdbc"),
        i = n("e260"),
        o = n("9112"),
        s = n("b622"),
        c = s("iterator"),
        u = s("toStringTag"),
        l = i.values;
      for (var d in a) {
        var f = r[d],
          p = f && f.prototype;
        if (p) {
          if (p[c] !== l)
            try {
              o(p, c, l);
            } catch (m) {
              p[c] = l;
            }
          if ((p[u] || o(p, u, d), a[d]))
            for (var v in i)
              if (p[v] !== i[v])
                try {
                  o(p, v, i[v]);
                } catch (m) {
                  p[v] = i[v];
                }
        }
      }
    },
    df08: function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".turnback-modal[data-v-78ebcd1b]  .form-content .left,.turnback-modal[data-v-78ebcd1b]  .form-tip .left{width:100px}.turnback-modal .tip[data-v-78ebcd1b]{margin-top:10px}.turnback-modal .audit-input-postfix[data-v-78ebcd1b]{position:relative;left:-54px}",
          "",
        ]),
        (e.exports = t);
    },
    df75: function (e, t, n) {
      var r = n("ca84"),
        a = n("7839");
      e.exports =
        Object.keys ||
        function (e) {
          return r(e, a);
        };
    },
    e01a: function (e, t, n) {
      "use strict";
      var r = n("23e7"),
        a = n("83ab"),
        i = n("da84"),
        o = n("5135"),
        s = n("861d"),
        c = n("9bf2").f,
        u = n("e893"),
        l = i.Symbol;
      if (
        a &&
        "function" == typeof l &&
        (!("description" in l.prototype) || void 0 !== l().description)
      ) {
        var d = {},
          f = function () {
            var e =
                arguments.length < 1 || void 0 === arguments[0]
                  ? void 0
                  : String(arguments[0]),
              t = this instanceof f ? new l(e) : void 0 === e ? l() : l(e);
            return "" === e && (d[t] = !0), t;
          };
        u(f, l);
        var p = (f.prototype = l.prototype);
        p.constructor = f;
        var v = p.toString,
          m = "Symbol(test)" == String(l("test")),
          b = /^Symbol\((.*)\)[^)]+$/;
        c(p, "description", {
          configurable: !0,
          get: function () {
            var e = s(this) ? this.valueOf() : this,
              t = v.call(e);
            if (o(d, e)) return "";
            var n = m ? t.slice(7, -1) : t.replace(b, "$1");
            return "" === n ? void 0 : n;
          },
        }),
          r({ global: !0, forced: !0 }, { Symbol: f });
      }
    },
    e0be: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return f;
      });
      n("45fc"), n("d3b7"), n("6062"), n("3ca3"), n("ddb0");
      var r = n("2909"),
        a = n("d4ec"),
        i = n("bee2"),
        o = n("262e"),
        s = n("2caf"),
        c = n("9ab4"),
        u = n("2841"),
        l = n("8165"),
        d = n("f619"),
        f = (function (e) {
          Object(o["a"])(n, e);
          var t = Object(s["a"])(n);
          function n() {
            var e;
            return (
              Object(a["a"])(this, n),
              (e = t.apply(this, arguments)),
              (e.state = { role: [], currentRole: "" }),
              e
            );
          }
          return (
            Object(i["a"])(n, [
              {
                key: "init",
                value: function () {
                  this.reset(), this.useWatch();
                  var e = u["permission"].usePMService();
                  e.getModulePermission(
                    u["permission"].EModuleNames.MULANCREATE
                  ).length &&
                    this.state.role.push(d["EProcessRoleType"].CREATOR),
                    e.getModulePermission(
                      u["permission"].EModuleNames.MULANMANAGE
                    ).length &&
                      this.state.role.push(d["EProcessRoleType"].MANAGER),
                    e.getModulePermission(
                      u["permission"].EModuleNames.MULANRECEIVE
                    ).length &&
                      this.state.role.push(d["EProcessRoleType"].RECEIVER),
                    (this.state.role = Object(r["a"])(
                      new Set(this.state.role)
                    ));
                  var t = window.sessionStorage.getItem("CURRENT_ROLE");
                  t &&
                  this.state.role.some(function (e) {
                    return e === t;
                  })
                    ? (this.state.currentRole = t)
                    : (this.state.currentRole = this.state.role[0]);
                },
              },
              {
                key: "useWatch",
                value: function () {
                  var e = this;
                  Object(l["watch"])(
                    function () {
                      return e.state.currentRole;
                    },
                    function (e) {
                      e &&
                        ((u["permission"].usePMService().state.currentModule = [
                          e,
                        ]),
                        window.sessionStorage.setItem("CURRENT_ROLE", e));
                    },
                    { immediate: !0 }
                  );
                },
              },
              {
                key: "changeRole",
                value: function (e) {
                  var t = u["permission"].usePMService();
                  t.state.currentModule = [e];
                },
              },
            ]),
            n
          );
        })(u["svc"].ServiceBase);
      f = Object(c["a"])([u["svc"].ServiceDecorator], f);
    },
    e0dc: function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".anno-task-table[data-v-52189149]  thead .s-col{white-space:nowrap}.anno-task-table[data-v-52189149]  thead th:last-child{min-width:80px}.anno-task-table[data-v-52189149]  tr td{word-break:break-all}",
          "",
        ]),
        (e.exports = t);
    },
    e163: function (e, t, n) {
      var r = n("5135"),
        a = n("7b0b"),
        i = n("f772"),
        o = n("e177"),
        s = i("IE_PROTO"),
        c = Object.prototype;
      e.exports = o
        ? Object.getPrototypeOf
        : function (e) {
            return (
              (e = a(e)),
              r(e, s)
                ? e[s]
                : "function" == typeof e.constructor &&
                  e instanceof e.constructor
                ? e.constructor.prototype
                : e instanceof Object
                ? c
                : null
            );
          };
    },
    e177: function (e, t, n) {
      var r = n("d039");
      e.exports = !r(function () {
        function e() {}
        return (
          (e.prototype.constructor = null),
          Object.getPrototypeOf(new e()) !== e.prototype
        );
      });
    },
    e1d2: function (e, t, n) {
      e.exports = n.p + "img/plus-disabled.60e0c501.svg";
    },
    e201: function (e, t, n) {
      "use strict";
      var r = n("5114"),
        a = n.n(r);
      a.a;
    },
    e260: function (e, t, n) {
      "use strict";
      var r = n("fc6a"),
        a = n("44d2"),
        i = n("3f8c"),
        o = n("69f3"),
        s = n("7dd0"),
        c = "Array Iterator",
        u = o.set,
        l = o.getterFor(c);
      (e.exports = s(
        Array,
        "Array",
        function (e, t) {
          u(this, { type: c, target: r(e), index: 0, kind: t });
        },
        function () {
          var e = l(this),
            t = e.target,
            n = e.kind,
            r = e.index++;
          return !t || r >= t.length
            ? ((e.target = void 0), { value: void 0, done: !0 })
            : "keys" == n
            ? { value: r, done: !1 }
            : "values" == n
            ? { value: t[r], done: !1 }
            : { value: [r, t[r]], done: !1 };
        },
        "values"
      )),
        (i.Arguments = i.Array),
        a("keys"),
        a("values"),
        a("entries");
    },
    e2cc: function (e, t, n) {
      var r = n("6eeb");
      e.exports = function (e, t, n) {
        for (var a in t) r(e, a, t[a], n);
        return e;
      };
    },
    e323: function (e, t, n) {
      var r = n("d192");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("113e84f7", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    e3ba: function (e, t, n) {
      "use strict";
      var r = n("0159"),
        a = n.n(r);
      a.a;
    },
    e439: function (e, t, n) {
      var r = n("23e7"),
        a = n("d039"),
        i = n("fc6a"),
        o = n("06cf").f,
        s = n("83ab"),
        c = a(function () {
          o(1);
        }),
        u = !s || c;
      r(
        { target: "Object", stat: !0, forced: u, sham: !s },
        {
          getOwnPropertyDescriptor: function (e, t) {
            return o(i(e), t);
          },
        }
      );
    },
    e538: function (e, t, n) {
      var r = n("b622");
      t.f = r;
    },
    e545: function (e, t, n) {
      var r = n("9052");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("541cc646", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    e58c: function (e, t, n) {
      "use strict";
      var r = n("fc6a"),
        a = n("a691"),
        i = n("50c4"),
        o = n("a640"),
        s = n("ae40"),
        c = Math.min,
        u = [].lastIndexOf,
        l = !!u && 1 / [1].lastIndexOf(1, -0) < 0,
        d = o("lastIndexOf"),
        f = s("indexOf", { ACCESSORS: !0, 1: 0 }),
        p = l || !d || !f;
      e.exports = p
        ? function (e) {
            if (l) return u.apply(this, arguments) || 0;
            var t = r(this),
              n = i(t.length),
              o = n - 1;
            for (
              arguments.length > 1 && (o = c(o, a(arguments[1]))),
                o < 0 && (o = n + o);
              o >= 0;
              o--
            )
              if (o in t && t[o] === e) return o || 0;
            return -1;
          }
        : u;
    },
    e5cf: function (e, t, n) {
      "use strict";
      var r = n("e545"),
        a = n.n(r);
      a.a;
    },
    e667: function (e, t) {
      e.exports = function (e) {
        try {
          return { error: !1, value: e() };
        } catch (t) {
          return { error: !0, value: t };
        }
      };
    },
    e671: function (e, t, n) {
      "use strict";
      var r = n("69f1");
      n.o(r, "KpiListDto") &&
        n.d(t, "KpiListDto", function () {
          return r["KpiListDto"];
        }),
        n.o(r, "KpiService") &&
          n.d(t, "KpiService", function () {
            return r["KpiService"];
          });
      var a = n("72e6");
      n.d(t, "KpiService", function () {
        return a["a"];
      });
      var i = n("e8c0");
      n.d(t, "KpiListDto", function () {
        return i["a"];
      });
    },
    e6cf: function (e, t, n) {
      "use strict";
      var r,
        a,
        i,
        o,
        s = n("23e7"),
        c = n("c430"),
        u = n("da84"),
        l = n("d066"),
        d = n("fea9"),
        f = n("6eeb"),
        p = n("e2cc"),
        v = n("d44e"),
        m = n("2626"),
        b = n("861d"),
        h = n("1c0b"),
        g = n("19aa"),
        y = n("c6b6"),
        _ = n("8925"),
        T = n("2266"),
        x = n("1c7e"),
        w = n("4840"),
        O = n("2cf4").set,
        k = n("b575"),
        E = n("cdf9"),
        j = n("44de"),
        C = n("f069"),
        S = n("e667"),
        A = n("69f3"),
        I = n("94ca"),
        N = n("b622"),
        R = n("2d00"),
        D = N("species"),
        M = "Promise",
        L = A.get,
        P = A.set,
        U = A.getterFor(M),
        $ = d,
        B = u.TypeError,
        z = u.document,
        V = u.process,
        F = l("fetch"),
        q = C.f,
        G = q,
        W = "process" == y(V),
        K = !!(z && z.createEvent && u.dispatchEvent),
        H = "unhandledrejection",
        X = "rejectionhandled",
        Q = 0,
        Y = 1,
        Z = 2,
        J = 1,
        ee = 2,
        te = I(M, function () {
          var e = _($) !== String($);
          if (!e) {
            if (66 === R) return !0;
            if (!W && "function" != typeof PromiseRejectionEvent) return !0;
          }
          if (c && !$.prototype["finally"]) return !0;
          if (R >= 51 && /native code/.test($)) return !1;
          var t = $.resolve(1),
            n = function (e) {
              e(
                function () {},
                function () {}
              );
            },
            r = (t.constructor = {});
          return (r[D] = n), !(t.then(function () {}) instanceof n);
        }),
        ne =
          te ||
          !x(function (e) {
            $.all(e)["catch"](function () {});
          }),
        re = function (e) {
          var t;
          return !(!b(e) || "function" != typeof (t = e.then)) && t;
        },
        ae = function (e, t, n) {
          if (!t.notified) {
            t.notified = !0;
            var r = t.reactions;
            k(function () {
              var a = t.value,
                i = t.state == Y,
                o = 0;
              while (r.length > o) {
                var s,
                  c,
                  u,
                  l = r[o++],
                  d = i ? l.ok : l.fail,
                  f = l.resolve,
                  p = l.reject,
                  v = l.domain;
                try {
                  d
                    ? (i || (t.rejection === ee && ce(e, t), (t.rejection = J)),
                      !0 === d
                        ? (s = a)
                        : (v && v.enter(),
                          (s = d(a)),
                          v && (v.exit(), (u = !0))),
                      s === l.promise
                        ? p(B("Promise-chain cycle"))
                        : (c = re(s))
                        ? c.call(s, f, p)
                        : f(s))
                    : p(a);
                } catch (m) {
                  v && !u && v.exit(), p(m);
                }
              }
              (t.reactions = []),
                (t.notified = !1),
                n && !t.rejection && oe(e, t);
            });
          }
        },
        ie = function (e, t, n) {
          var r, a;
          K
            ? ((r = z.createEvent("Event")),
              (r.promise = t),
              (r.reason = n),
              r.initEvent(e, !1, !0),
              u.dispatchEvent(r))
            : (r = { promise: t, reason: n }),
            (a = u["on" + e])
              ? a(r)
              : e === H && j("Unhandled promise rejection", n);
        },
        oe = function (e, t) {
          O.call(u, function () {
            var n,
              r = t.value,
              a = se(t);
            if (
              a &&
              ((n = S(function () {
                W ? V.emit("unhandledRejection", r, e) : ie(H, e, r);
              })),
              (t.rejection = W || se(t) ? ee : J),
              n.error)
            )
              throw n.value;
          });
        },
        se = function (e) {
          return e.rejection !== J && !e.parent;
        },
        ce = function (e, t) {
          O.call(u, function () {
            W ? V.emit("rejectionHandled", e) : ie(X, e, t.value);
          });
        },
        ue = function (e, t, n, r) {
          return function (a) {
            e(t, n, a, r);
          };
        },
        le = function (e, t, n, r) {
          t.done ||
            ((t.done = !0),
            r && (t = r),
            (t.value = n),
            (t.state = Z),
            ae(e, t, !0));
        },
        de = function (e, t, n, r) {
          if (!t.done) {
            (t.done = !0), r && (t = r);
            try {
              if (e === n) throw B("Promise can't be resolved itself");
              var a = re(n);
              a
                ? k(function () {
                    var r = { done: !1 };
                    try {
                      a.call(n, ue(de, e, r, t), ue(le, e, r, t));
                    } catch (i) {
                      le(e, r, i, t);
                    }
                  })
                : ((t.value = n), (t.state = Y), ae(e, t, !1));
            } catch (i) {
              le(e, { done: !1 }, i, t);
            }
          }
        };
      te &&
        (($ = function (e) {
          g(this, $, M), h(e), r.call(this);
          var t = L(this);
          try {
            e(ue(de, this, t), ue(le, this, t));
          } catch (n) {
            le(this, t, n);
          }
        }),
        (r = function (e) {
          P(this, {
            type: M,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: Q,
            value: void 0,
          });
        }),
        (r.prototype = p($.prototype, {
          then: function (e, t) {
            var n = U(this),
              r = q(w(this, $));
            return (
              (r.ok = "function" != typeof e || e),
              (r.fail = "function" == typeof t && t),
              (r.domain = W ? V.domain : void 0),
              (n.parent = !0),
              n.reactions.push(r),
              n.state != Q && ae(this, n, !1),
              r.promise
            );
          },
          catch: function (e) {
            return this.then(void 0, e);
          },
        })),
        (a = function () {
          var e = new r(),
            t = L(e);
          (this.promise = e),
            (this.resolve = ue(de, e, t)),
            (this.reject = ue(le, e, t));
        }),
        (C.f = q =
          function (e) {
            return e === $ || e === i ? new a(e) : G(e);
          }),
        c ||
          "function" != typeof d ||
          ((o = d.prototype.then),
          f(
            d.prototype,
            "then",
            function (e, t) {
              var n = this;
              return new $(function (e, t) {
                o.call(n, e, t);
              }).then(e, t);
            },
            { unsafe: !0 }
          ),
          "function" == typeof F &&
            s(
              { global: !0, enumerable: !0, forced: !0 },
              {
                fetch: function (e) {
                  return E($, F.apply(u, arguments));
                },
              }
            ))),
        s({ global: !0, wrap: !0, forced: te }, { Promise: $ }),
        v($, M, !1, !0),
        m(M),
        (i = l(M)),
        s(
          { target: M, stat: !0, forced: te },
          {
            reject: function (e) {
              var t = q(this);
              return t.reject.call(void 0, e), t.promise;
            },
          }
        ),
        s(
          { target: M, stat: !0, forced: c || te },
          {
            resolve: function (e) {
              return E(c && this === i ? $ : this, e);
            },
          }
        ),
        s(
          { target: M, stat: !0, forced: ne },
          {
            all: function (e) {
              var t = this,
                n = q(t),
                r = n.resolve,
                a = n.reject,
                i = S(function () {
                  var n = h(t.resolve),
                    i = [],
                    o = 0,
                    s = 1;
                  T(e, function (e) {
                    var c = o++,
                      u = !1;
                    i.push(void 0),
                      s++,
                      n.call(t, e).then(function (e) {
                        u || ((u = !0), (i[c] = e), --s || r(i));
                      }, a);
                  }),
                    --s || r(i);
                });
              return i.error && a(i.value), n.promise;
            },
            race: function (e) {
              var t = this,
                n = q(t),
                r = n.reject,
                a = S(function () {
                  var a = h(t.resolve);
                  T(e, function (e) {
                    a.call(t, e).then(n.resolve, r);
                  });
                });
              return a.error && r(a.value), n.promise;
            },
          }
        );
    },
    e82d: function (e, t, n) {
      "use strict";
      var r = n("6fe0");
      n.o(r, "BmlMemberService") &&
        n.d(t, "BmlMemberService", function () {
          return r["BmlMemberService"];
        }),
        n.o(r, "CreateTaskDto") &&
          n.d(t, "CreateTaskDto", function () {
            return r["CreateTaskDto"];
          });
      var a = n("cb9a");
      n.d(t, "BmlMemberService", function () {
        return a["a"];
      });
    },
    e85f: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      });
      var r = n("d4ec"),
        a = n("bee2"),
        i = n("262e"),
        o = n("2caf"),
        s = n("9ab4"),
        c = n("2841"),
        u = n("9d44"),
        l = (function (e) {
          Object(i["a"])(n, e);
          var t = Object(o["a"])(n);
          function n() {
            var e;
            return (
              Object(r["a"])(this, n),
              (e = t.apply(this, arguments)),
              (e.state = {
                modelIdTuple: [],
                source: [],
                modelIndexTuple: [0, 0],
                indexTuple: [-1, -1],
                hoverIndexTuple: [-1, -1],
                sourceTuple: [[], []],
                visible: !1,
              }),
              (e.mouseLeave = function () {
                e.state.hoverIndexTuple = [-1, -1];
              }),
              (e.hide = function () {
                e.state.visible = !1;
              }),
              (e.toggle = function () {
                e.state.visible = !e.state.visible;
              }),
              e
            );
          }
          return (
            Object(a["a"])(n, [
              {
                key: "initialize",
                value: function (e) {
                  return Object(u["b"])(), Object(u["a"])(e), this;
                },
              },
              {
                key: "hoverItem",
                value: function (e) {
                  this.state.hoverIndexTuple = e;
                },
              },
            ]),
            n
          );
        })(c["svc"].ServiceBase);
      l = Object(s["a"])([c["svc"].ServiceDecorator], l);
      var d = c["svc"].createUseService(l);
    },
    e893: function (e, t, n) {
      var r = n("5135"),
        a = n("56ef"),
        i = n("06cf"),
        o = n("9bf2");
      e.exports = function (e, t) {
        for (var n = a(t), s = o.f, c = i.f, u = 0; u < n.length; u++) {
          var l = n[u];
          r(e, l) || s(e, l, c(t, l));
        }
      };
    },
    e8ac: function (e, t, n) {
      "use strict";
      var r = n("20ca"),
        a = n.n(r);
      a.a;
    },
    e8b5: function (e, t, n) {
      var r = n("c6b6");
      e.exports =
        Array.isArray ||
        function (e) {
          return "Array" == r(e);
        };
    },
    e8c0: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var r = n("d4ec"),
        a = n("262e"),
        i = n("2caf"),
        o = n("0456"),
        s = (function (e) {
          Object(a["a"])(n, e);
          var t = Object(i["a"])(n);
          function n() {
            var e;
            return (
              Object(r["a"])(this, n),
              (e = t.apply(this, arguments)),
              (e.dataType = ""),
              (e.projectType = ""),
              (e.startDate = +new Date()),
              (e.endDate = +new Date()),
              (e.keyword = ""),
              e
            );
          }
          return n;
        })(o["a"]);
    },
    e95a: function (e, t, n) {
      var r = n("b622"),
        a = n("3f8c"),
        i = r("iterator"),
        o = Array.prototype;
      e.exports = function (e) {
        return void 0 !== e && (a.Array === e || o[i] === e);
      };
    },
    ea0f: function (e, t, n) {
      var r = n("b643");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("396e8408", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    ece2: function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".team-list .w400[data-v-d8487908]{width:400px}.team-list .link-blue[data-v-d8487908]{margin-left:8px}",
          "",
        ]),
        (e.exports = t);
    },
    ed29: function (e, t, n) {
      var r = n("954a");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("be4121e8", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    efb2: function (e, t, n) {
      "use strict";
      var r = n("0092"),
        a = n.n(r);
      a.a;
    },
    f069: function (e, t, n) {
      "use strict";
      var r = n("1c0b"),
        a = function (e) {
          var t, n;
          (this.promise = new e(function (e, r) {
            if (void 0 !== t || void 0 !== n)
              throw TypeError("Bad Promise constructor");
            (t = e), (n = r);
          })),
            (this.resolve = r(t)),
            (this.reject = r(n));
        };
      e.exports.f = function (e) {
        return new a(e);
      };
    },
    f0c6: function (e, t, n) {
      "use strict";
      var r = n("8647"),
        a = n.n(r);
      a.a;
    },
    f183: function (e, t, n) {
      var r = n("d012"),
        a = n("861d"),
        i = n("5135"),
        o = n("9bf2").f,
        s = n("90e3"),
        c = n("bb2f"),
        u = s("meta"),
        l = 0,
        d =
          Object.isExtensible ||
          function () {
            return !0;
          },
        f = function (e) {
          o(e, u, { value: { objectID: "O" + ++l, weakData: {} } });
        },
        p = function (e, t) {
          if (!a(e))
            return "symbol" == typeof e
              ? e
              : ("string" == typeof e ? "S" : "P") + e;
          if (!i(e, u)) {
            if (!d(e)) return "F";
            if (!t) return "E";
            f(e);
          }
          return e[u].objectID;
        },
        v = function (e, t) {
          if (!i(e, u)) {
            if (!d(e)) return !0;
            if (!t) return !1;
            f(e);
          }
          return e[u].weakData;
        },
        m = function (e) {
          return c && b.REQUIRED && d(e) && !i(e, u) && f(e), e;
        },
        b = (e.exports = {
          REQUIRED: !1,
          fastKey: p,
          getWeakData: v,
          onFreeze: m,
        });
      r[u] = !0;
    },
    f24d: function (e, t) {
      e.exports = i;
    },
    f37e: function (e, t, n) {
      var r = n("1959");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("54d75139", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    f3f6: function (e, t, n) {
      e.exports = n.p + "img/empty.098f0425.png";
    },
    f43f: function (e, t, n) {
      var r = n("98d3");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("72f55cc4", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    f490: function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".member-list[data-v-51ac2c5c]{border:1px solid #eee;display:flex;flex-direction:row;align-items:center;flex-direction:column;align-items:stretch;width:100%;max-height:240px;margin-top:5px}.member-list .body[data-v-51ac2c5c],.member-list .head[data-v-51ac2c5c]{font-size:14px;color:#666;border-top:1px solid #eee;line-height:1.66666667em}.member-list .body[data-v-51ac2c5c]  .line,.member-list .head[data-v-51ac2c5c]  .line{width:100%;display:flex;flex-direction:row;align-items:center;align-items:stretch}.member-list .body[data-v-51ac2c5c]  .line.line-edit .line-item,.member-list .head[data-v-51ac2c5c]  .line.line-edit .line-item{padding:7px 10px 6px}.member-list .body[data-v-51ac2c5c]  .line.line-edit .line-item.ctl,.member-list .body[data-v-51ac2c5c]  .line.line-edit .line-item.status,.member-list .body[data-v-51ac2c5c]  .line .line-item,.member-list .head[data-v-51ac2c5c]  .line.line-edit .line-item.ctl,.member-list .head[data-v-51ac2c5c]  .line.line-edit .line-item.status,.member-list .head[data-v-51ac2c5c]  .line .line-item{padding:12px 20px 12px}.member-list .body[data-v-51ac2c5c]  .line .email,.member-list .head[data-v-51ac2c5c]  .line .email{flex:1;display:flex;flex-direction:row;align-items:center;width:190px}.member-list .body[data-v-51ac2c5c]  .line .email .line-item-content,.member-list .head[data-v-51ac2c5c]  .line .email .line-item-content{overflow:hidden;text-overflow:ellipsis}.member-list .body[data-v-51ac2c5c]  .line .email .s-input-wrapper,.member-list .head[data-v-51ac2c5c]  .line .email .s-input-wrapper{width:175px}.member-list .body[data-v-51ac2c5c]  .line .status,.member-list .head[data-v-51ac2c5c]  .line .status{width:140px}.member-list .body[data-v-51ac2c5c]  .line .remark,.member-list .head[data-v-51ac2c5c]  .line .remark{display:flex;flex-direction:row;align-items:center;width:270px}.member-list .body[data-v-51ac2c5c]  .line .remark .s-input-wrapper,.member-list .head[data-v-51ac2c5c]  .line .remark .s-input-wrapper{width:250px}.member-list .body[data-v-51ac2c5c]  .line .remark .remark-editor .s-input-wrapper,.member-list .head[data-v-51ac2c5c]  .line .remark .remark-editor .s-input-wrapper{width:230px}.member-list .body[data-v-51ac2c5c]  .line .remark .remark-editor .inline-editor_initial-txt,.member-list .head[data-v-51ac2c5c]  .line .remark .remark-editor .inline-editor_initial-txt{overflow:hidden;text-overflow:ellipsis;max-width:100%}.member-list .body[data-v-51ac2c5c]  .line .ctl,.member-list .head[data-v-51ac2c5c]  .line .ctl{display:flex;flex-direction:row;align-items:center;width:120px}.member-list .body[data-v-51ac2c5c]  .line .ctl .link-blue+.link-blue,.member-list .head[data-v-51ac2c5c]  .line .ctl .link-blue+.link-blue{margin-left:20px}.member-list .head[data-v-51ac2c5c]{display:flex;flex-direction:row;align-items:center;color:#666;background-color:var(--cxd-bg-light,#f6f7fb)}.member-list .body[data-v-51ac2c5c]{flex:1;color:#000;overflow:auto}.member-list .body .line[data-v-51ac2c5c]{border-bottom:1px solid #eee}.member-list .body .line[data-v-51ac2c5c]:last-child{border-bottom:none}.member-list .member-empty[data-v-51ac2c5c]{height:95px;color:#999;display:flex;justify-content:center;flex-direction:column;text-align:center}",
          "",
        ]),
        (e.exports = t);
    },
    f513: function (e, t, n) {
      var r = n("2772");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("baeb1e9a", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    f553: function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".render-status[data-v-daeaa8c8]{display:flex;flex-direction:row;align-items:center}.render-status .color[data-v-daeaa8c8]{width:8px;height:8px;border-radius:50%;margin-right:5px;flex:none}.render-status .render-content[data-v-daeaa8c8]{display:flex;flex-direction:row;align-items:center;flex-direction:column;align-items:flex-start}.render-status .render-content .task-progress[data-v-daeaa8c8]{display:flex;flex-direction:row;align-items:center;font-size:12px;color:#999}.render-status .render-content .task-progress .task-progress-item[data-v-daeaa8c8]{margin-right:12px}.render-status .render-content .task-progress[data-v-daeaa8c8] :last-child{margin-right:0}.render-status .render-content .task-progress-tip[data-v-daeaa8c8]{margin:0 10px;padding:10px 5px;font-size:12px;border-bottom:1px solid var(--cxd-border)}.render-status .render-content .task-progress-tip-title[data-v-daeaa8c8]{color:#999}.render-status .render-content .task-progress-tip[data-v-daeaa8c8]:last-child{border-bottom:none}",
          "",
        ]),
        (e.exports = t);
    },
    f5df: function (e, t, n) {
      var r = n("00ee"),
        a = n("c6b6"),
        i = n("b622"),
        o = i("toStringTag"),
        s =
          "Arguments" ==
          a(
            (function () {
              return arguments;
            })()
          ),
        c = function (e, t) {
          try {
            return e[t];
          } catch (n) {}
        };
      e.exports = r
        ? a
        : function (e) {
            var t, n, r;
            return void 0 === e
              ? "Undefined"
              : null === e
              ? "Null"
              : "string" == typeof (n = c((t = Object(e)), o))
              ? n
              : s
              ? a(t)
              : "Object" == (r = a(t)) && "function" == typeof t.callee
              ? "Arguments"
              : r;
          };
    },
    f619: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "ETaskType", function () {
          return o;
        }),
        n.d(t, "EAnnoStatus", function () {
          return s;
        }),
        n.d(t, "EAnnoRoles", function () {
          return c;
        }),
        n.d(t, "ESubTaskType", function () {
          return u;
        }),
        n.d(t, "ETeamTypes", function () {
          return l;
        }),
        n.d(t, "EAnnoActionType", function () {
          return d;
        }),
        n.d(t, "EProcessRoleType", function () {
          return f;
        }),
        n.d(t, "EProcessTabType", function () {
          return p;
        }),
        n.d(t, "EProcessAssignType", function () {
          return v;
        }),
        n.d(t, "EAnnoType", function () {
          return m;
        }),
        n.d(t, "EDatasourceType", function () {
          return b;
        }),
        n.d(t, "EInterannoType", function () {
          return h;
        }),
        n.d(t, "EServiceSourceType", function () {
          return g;
        }),
        n.d(t, "EModelSourceType", function () {
          return y;
        }),
        n.d(t, "EModelCopyStatus", function () {
          return _;
        }),
        n.d(t, "EMemberStatus", function () {
          return T;
        }),
        n.d(t, "EUserStatus", function () {
          return x;
        }),
        n.d(t, "EReturnType", function () {
          return w;
        });
      var r = n("2841"),
        a = "#11b864",
        i = "#E64552",
        o = Object(r["enumxFactory"])({
          CREATED: { id: "CREATED", label: "我创建的任务" },
          RECEIVED: { id: "RECEIVED", label: "我接收的任务" },
        }),
        s = Object(r["enumxFactory"])({
          IN_DISTRIBUTION: { id: 0, label: "任务处理中", color: a },
          TO_ANNOTATE: {
            id: 1,
            label: "待标注",
            auditLabel: "待审核",
            color: a,
          },
          IN_ANNOTATE: {
            id: 2,
            label: "标注中",
            annoAuditLabel: "标注/审核中",
            auditLabel: "审核中",
            color: a,
          },
          FINISH: {
            id: 3,
            label: "标注完成（所有子任务已提交）",
            subLabel: "已提交",
            auditLabel: "审核完成",
            color: a,
          },
          STOP: { id: 4, label: "已终止（标注保留）", color: a },
          ABORT: { id: 5, label: "已终止（不保留标注）", color: a },
          CHECK_ACCEPT: { id: 6, label: "验收已完成", color: a },
          END_ANNO_WITH: {
            id: 7,
            label: "待分配",
            subLabel: "结束标注(保留修改)",
            auditLabel: "结束审核(保留修改)",
            color: a,
          },
          END_ANNO_WITHOUT: {
            id: 8,
            label: "分配完成",
            subLabel: "结束标注(不保留修改)",
            auditLabel: "结束审核(不保留修改)",
            color: a,
          },
          TASK_DELIVER: { id: 9, label: "任务转交", color: a },
          DELETED: { id: 10, label: "已删除", color: i },
          OVERDUE: { id: 11, label: "已过期", color: i },
          TURN_BACK: { id: 12, label: "审核打回", color: i },
          ANNO_TASK_FINISH: {
            id: 13,
            label: "已提交",
            auditLabel: "待分配",
            color: a,
          },
          INTERANNO_DOING: { id: 14, label: "智能标注中", color: a },
          INTERANNO_FAIL: { id: 15, label: "智能标注任务异常", color: i },
          PROCESS_FAIL: { id: 16, label: "任务处理失败", color: i },
          CLE_TURN_BACK: { id: 17, label: "验收打回", color: i },
        }),
        c = Object(r["enumxFactory"])({
          DELETE: { id: 1, label: "删除" },
          VIEW_ANNO: { id: 2, label: "查看并标注" },
        }),
        u = Object(r["enumxFactory"])({
          ANNOTATE: { id: 1, label: "标注任务" },
          AUDIT: { id: 2, label: "审核任务" },
        }),
        l = Object(r["enumxFactory"])({
          ANNOTATE: { id: 1, label: "标注团队" },
          APPROVE: { id: 2, label: "审核团队" },
        }),
        d = Object(r["enumxFactory"])({
          ANNOTATE: { id: 1, label: "标注" },
          AUDIT: { id: 2, label: "审核" },
          CLE: { id: 3, label: "验收" },
        }),
        f = Object(r["enumxFactory"])({
          CREATOR: {
            id: r["permission"].EModuleNames.MULANCREATE,
            label: "任务发起方",
          },
          MANAGER: {
            id: r["permission"].EModuleNames.MULANMANAGE,
            label: "标注管理方",
          },
          RECEIVER: {
            id: r["permission"].EModuleNames.MULANRECEIVE,
            label: "任务接收方",
          },
        }),
        p = Object(r["enumxFactory"])({
          CREATED: { id: 1, label: "已创建的任务" },
          ASSIGNED: { id: 2, label: "待分配的任务" },
          ANNOTATED: { id: 3, label: "待标注的任务" },
          AUDIT: { id: 4, label: "待审核的任务" },
          HAS_ASSIGNED: { id: 5, label: "已分配的任务" },
        }),
        v = Object(r["enumxFactory"])({
          DEFAULT: {
            id: 0,
            label: "直接分配",
            tip: "由您直接指派标注/审核团队完成，任务直接分配给标注员/审核员。",
          },
          MANAGER: {
            id: 1,
            label: "标注管理方分配",
            tip: "您提交多人标注任务后，由标注管理方指派标注/审核团队完成任务分配。",
          },
        }),
        m = Object(r["enumxFactory"])({
          UNANNOTATED: { id: 1, label: "未标注" },
          ANNOTATED: { id: 2, label: "已标注" },
        }),
        b = Object(r["enumxFactory"])({
          DATASET: { id: 1, label: "数据集" },
          DATA_HOUSE: { id: 2, label: "样本库" },
        }),
        h = Object(r["enumxFactory"])({
          DISABLE_INTERANNO: { id: 0, label: "不开启智能标注" },
          ENABLE_INTERANNO: { id: 1, label: "开启智能标注" },
        }),
        g = Object(r["enumxFactory"])({
          FORCECASTING_SERVICE: { id: 1, label: "预测服务" },
          CUSTOM_HTTP_ADRESS: { id: 2, label: "自定义http地址" },
          ZERO_CODE_DEVELOP_MODEL: { id: 3, label: "零代码开发模型" },
          SMART_ANNOTATE_STUDY_MODEL: { id: 4, label: "智能标注主动学习模型" },
        }),
        y = Object(r["enumxFactory"])({
          CUSTOM_MODEL_SERVICE: {
            id: 1,
            label: "自定义模型服务",
            serviceSourceType: [g.FORCECASTING_SERVICE, g.CUSTOM_HTTP_ADRESS],
          },
          MODEL_DEVELOP: {
            id: 2,
            label: "模型开发",
            serviceSourceType: [g.ZERO_CODE_DEVELOP_MODEL],
          },
          SMART_ANNOTATE_TASK: {
            id: 3,
            label: "智能标注任务",
            serviceSourceType: [g.SMART_ANNOTATE_STUDY_MODEL],
          },
        }),
        _ = Object(r["enumxFactory"])({
          INIT: { id: 0, label: "init" },
          DONE: { id: 1, label: "done" },
          DOING: { id: 2, label: "doing" },
          FAIL: { id: 3, label: "fail" },
        }),
        T = Object(r["enumxFactory"])({
          OPENING: { id: 0, label: "启用", color: a },
          CLOSING: { id: 1, label: "停用", color: "#B8BABF" },
          DELETED: { id: 2, label: "删除", color: i },
        }),
        x = Object(r["enumxFactory"])({
          CLOSING: { id: 0, label: "停用" },
          OPENING: { id: 1, label: "启用" },
        }),
        w = Object(r["enumxFactory"])({
          ALL: { id: 1, label: "全部数据" },
          LEFT: { id: 2, label: "未抽中数据" },
          UNPASS: { id: 4, label: "未通过数据" },
          LEFT_UNPASS: {
            id: 3,
            label: "未抽中+未通过数据",
            tip: "打回未抽中以及审核标记为不通过的数据",
          },
        });
    },
    f658: function (e, t, n) {
      var r = n("1c6b");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("4212e778", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    f772: function (e, t, n) {
      var r = n("5692"),
        a = n("90e3"),
        i = r("keys");
      e.exports = function (e) {
        return i[e] || (i[e] = a(e));
      };
    },
    f938: function (e, t, n) {
      e.exports = n.p + "img/create1.50345d06.svg";
    },
    faed: function (e, t, n) {
      var r = n("a353");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("70db2976", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    fb6a: function (e, t, n) {
      "use strict";
      var r = n("23e7"),
        a = n("861d"),
        i = n("e8b5"),
        o = n("23cb"),
        s = n("50c4"),
        c = n("fc6a"),
        u = n("8418"),
        l = n("b622"),
        d = n("1dde"),
        f = n("ae40"),
        p = d("slice"),
        v = f("slice", { ACCESSORS: !0, 0: 0, 1: 2 }),
        m = l("species"),
        b = [].slice,
        h = Math.max;
      r(
        { target: "Array", proto: !0, forced: !p || !v },
        {
          slice: function (e, t) {
            var n,
              r,
              l,
              d = c(this),
              f = s(d.length),
              p = o(e, f),
              v = o(void 0 === t ? f : t, f);
            if (
              i(d) &&
              ((n = d.constructor),
              "function" != typeof n || (n !== Array && !i(n.prototype))
                ? a(n) && ((n = n[m]), null === n && (n = void 0))
                : (n = void 0),
              n === Array || void 0 === n)
            )
              return b.call(d, p, v);
            for (
              r = new (void 0 === n ? Array : n)(h(v - p, 0)), l = 0;
              p < v;
              p++, l++
            )
              p in d && u(r, l, d[p]);
            return (r.length = l), r;
          },
        }
      );
    },
    fc16: function (e, t, n) {
      function r(e, t) {
        var n = document.createElement("a");
        n.href = e;
        var r = "/" === n.pathname[0] ? n.pathname : "/" + n.pathname,
          a = 0,
          i = r.length;
        while (a !== t && i >= 0) {
          var o = r[--i];
          "/" === o && a++;
        }
        if (a !== t)
          throw Error(
            "systemjs-webpack-interop: rootDirectoryLevel (" +
              t +
              ") is greater than the number of directories (" +
              a +
              ") in the URL path " +
              e
          );
        var s = r.slice(0, i + 1);
        return n.protocol + "//" + n.host + s;
      }
      n("fb6a"),
        n("a9e3"),
        n("8ba4"),
        n("498a"),
        (t.setPublicPath = function (e, t) {
          if ((t || (t = 1), "string" !== typeof e || 0 === e.trim().length))
            throw Error(
              "systemjs-webpack-interop: setPublicPath(systemjsModuleName) must be called with a non-empty string 'systemjsModuleName'"
            );
          if ("number" !== typeof t || t <= 0 || !a(t))
            throw Error(
              "systemjs-webpack-interop: setPublicPath(systemjsModuleName, rootDirectoryLevel) must be called with a positive integer 'rootDirectoryLevel'"
            );
          var i;
          try {
            if (((i = window.System.resolve(e)), !i)) throw Error();
          } catch (o) {
            throw Error(
              "systemjs-webpack-interop: There is no such module '" +
                e +
                "' in the SystemJS registry. Did you misspell the name of your module?"
            );
          }
          n.p = r(i, t);
        }),
        (t.resolveDirectory = r);
      var a =
        Number.isInteger ||
        function (e) {
          return "number" === typeof e && isFinite(e) && Math.floor(e) === e;
        };
    },
    fc6a: function (e, t, n) {
      var r = n("44ad"),
        a = n("1d80");
      e.exports = function (e) {
        return r(a(e));
      };
    },
    fca2: function (e, t, n) {
      var r = n("ece2");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var a = n("499e").default;
      a("3b2406bd", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    fdbc: function (e, t) {
      e.exports = {
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
    fdbf: function (e, t, n) {
      var r = n("4930");
      e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
    },
    fea9: function (e, t, n) {
      var r = n("da84");
      e.exports = r.Promise;
    },
    feb6: function (e, t, n) {
      var r = n("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".page-task-progress[data-v-58cba129]  .s-table thead .s-col{white-space:nowrap}.page-task-progress .main-detail[data-v-58cba129]{margin-bottom:21px}.page-task-progress .main-detail .detail-item[data-v-58cba129]{display:inline-flex;margin-right:24px;line-height:22px}.page-task-progress .main-detail .detail-item .label[data-v-58cba129]{font-size:14px;color:#666}.page-task-progress .main-detail .detail-item .content[data-v-58cba129]{font-size:14px;color:#000;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:400px;display:inline-block}.page-task-progress .task-link-wrap[data-v-58cba129]{padding-right:50px}.page-task-progress .task-link-wrap .task-link[data-v-58cba129]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:300px}.page-task-progress .pager-wrap[data-v-58cba129]{margin-top:45px;text-align:right}",
          "",
        ]),
        (e.exports = t);
    },
  });
});
//# sourceMappingURL=app.js.map
