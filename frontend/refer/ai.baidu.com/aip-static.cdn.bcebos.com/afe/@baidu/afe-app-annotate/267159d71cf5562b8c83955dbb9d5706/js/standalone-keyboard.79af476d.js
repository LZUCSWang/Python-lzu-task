(window["webpackJsonpannotate"] = window["webpackJsonpannotate"] || []).push([
  ["standalone-keyboard"],
  {
    "0796": function (t, e, a) {
      t.exports = a.p + "img/textComments3.4e81b533.png";
    },
    "08ba": function (t, e, a) {
      t.exports = a.p + "img/pause.63f41d7e.svg";
    },
    "095f": function (t, e, a) {
      t.exports = a.p + "img/step1.294d7f5e.png";
    },
    "0f32": function (t, e, a) {
      var o = a("b047"),
        r = a("1a8c"),
        n = "Expected a function";
      function i(t, e, a) {
        var i = !0,
          c = !0;
        if ("function" != typeof t) throw new TypeError(n);
        return (
          r(a) &&
            ((i = "leading" in a ? !!a.leading : i),
            (c = "trailing" in a ? !!a.trailing : c)),
          o(t, e, { leading: i, maxWait: e, trailing: c })
        );
      }
      t.exports = i;
    },
    "0f8d": function (t, e, a) {
      "use strict";
      var o = a("1c3b"),
        r = a.n(o);
      r.a;
    },
    "1a8c": function (t, e) {
      function a(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e);
      }
      t.exports = a;
    },
    "1c3b": function (t, e, a) {
      var o = a("67cf");
      "string" === typeof o && (o = [[t.i, o, ""]]),
        o.locals && (t.exports = o.locals);
      var r = a("499e").default;
      r("6a871510", o, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "1c59": function (t, e, a) {
      var o = a("c1e8");
      "string" === typeof o && (o = [[t.i, o, ""]]),
        o.locals && (t.exports = o.locals);
      var r = a("499e").default;
      r("774852c5", o, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "1c6c": function (t, e, a) {
      var o = a("24fb"),
        r = a("1de5"),
        n = a("c9cb"),
        i = a("7dd4");
      e = o(!1);
      var c = r(n),
        s = r(i);
      e.push([
        t.i,
        ".ssl-tip[data-v-ba3f260e]{display:flex;flex-direction:row;align-items:center;margin-right:30px;cursor:pointer;color:#000}.ssl-tip .ssl-tip-icon[data-v-ba3f260e]{width:16px;height:16px;background-image:url(" +
          c +
          ");background-size:100%;margin-right:4px}.ssl-tip[data-v-ba3f260e]:hover{color:var(--cxd-blue)}.ssl-tip:hover .ssl-tip-icon[data-v-ba3f260e]{background-image:url(" +
          s +
          ")}",
        "",
      ]),
        (t.exports = e);
    },
    "1de5": function (t, e, a) {
      "use strict";
      t.exports = function (t, e) {
        return (
          e || (e = {}),
          (t = t && t.__esModule ? t.default : t),
          "string" !== typeof t
            ? t
            : (/^['"].*['"]$/.test(t) && (t = t.slice(1, -1)),
              e.hash && (t += e.hash),
              /["'() \t\n]/.test(t) || e.needQuotes
                ? '"'.concat(t.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"')
                : t)
        );
      };
    },
    "2fae": function (t, e, a) {
      t.exports = a.p + "img/right.hover.2ddc8bba.svg";
    },
    3682: function (t, e, a) {
      var o = a("5204");
      "string" === typeof o && (o = [[t.i, o, ""]]),
        o.locals && (t.exports = o.locals);
      var r = a("499e").default;
      r("7f338902", o, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "408c": function (t, e, a) {
      var o = a("2b3e"),
        r = function () {
          return o.Date.now();
        };
      t.exports = r;
    },
    "40a3": function (t, e, a) {
      "use strict";
      var o = a("8eab"),
        r = a.n(o);
      r.a;
    },
    "432e": function (t, e, a) {
      t.exports = a.p + "img/play.30947755.svg";
    },
    "43ca": function (t, e, a) {
      "use strict";
      var o = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            {
              ref: "progress",
              staticClass: "vt-progress",
              class: { "vt-progress-vertical": t.vertical },
            },
            [
              a(
                "div",
                {
                  staticClass: "vt-progress-bar",
                  on: {
                    click: function (e) {
                      return e.preventDefault(), t.handleProgressClick(e);
                    },
                  },
                },
                [
                  a("div", { staticClass: "vt-progress-bg" }, [
                    a("div", {
                      staticClass: "vt-progress-active",
                      style: t.vertical
                        ? { height: t.currentVal + "%" }
                        : { width: t.currentVal + "%" },
                    }),
                  ]),
                ]
              ),
              a("div", { staticClass: "vt-progress-track" }, [
                a("div", {
                  ref: "progressBall",
                  staticClass: "vt-progress-ball",
                  style: t.vertical
                    ? { bottom: t.currentVal + "%" }
                    : { left: t.currentVal + "%" },
                  on: {
                    "!mousedown": function (e) {
                      return e.preventDefault(), t.handleBallMove(e);
                    },
                    "!touchstart": function (e) {
                      return e.preventDefault(), t.handleBallMove(e);
                    },
                  },
                }),
              ]),
            ]
          );
        },
        r = [],
        n = (a("a9e3"), a("8165")),
        i = a("0f32"),
        c = a.n(i),
        s = function (t) {
          if (!t) return 0;
          var e = Math.max(t, 0);
          return Math.min(e, 100);
        },
        l = function (t, e) {
          var a = Object(n["reactive"])({
              vertical: t,
              dragging: !1,
              isClick: !1,
              startX: 0,
              startY: 0,
              currentY: 0,
              currentX: 0,
              difX: Object(n["computed"])(function () {
                return a.currentX - a.startX;
              }),
              difY: Object(n["computed"])(function () {
                return a.startY - a.currentY;
              }),
              dif: Object(n["computed"])(function () {
                return a.vertical ? a.difY : a.difX;
              }),
            }),
            o = function (t) {
              return "touches" in t
                ? { x: t.touches[0].clientX, y: t.touches[0].clientY }
                : { x: t.clientX, y: t.clientY };
            },
            r = function (t) {
              if (a.dragging) {
                var e = o(t),
                  r = e.x,
                  n = e.y;
                (a.currentX = r), (a.currentY = n);
              }
            },
            i = function t(e) {
              a.dragging = !1;
              var n = o(e),
                i = n.x,
                c = n.y;
              (a.currentX = i),
                (a.currentY = c),
                window.removeEventListener("mousemove", r),
                window.removeEventListener("touchmove", r),
                window.removeEventListener("mouseup", t),
                window.removeEventListener("touchend", t),
                window.removeEventListener("contextmenu", t);
            },
            s = function (t) {
              if (!a.dragging) {
                a.dragging = !0;
                var e = o(t),
                  n = e.x,
                  c = e.y;
                (a.startX = n),
                  (a.startY = c),
                  window.addEventListener("mousemove", r),
                  window.addEventListener("touchmove", r),
                  window.addEventListener("mouseup", i),
                  window.addEventListener("touchend", i),
                  window.addEventListener("contextmenu", i);
              }
            },
            l = function () {
              return e(a.dif);
            },
            u = c()(l, 100);
          return (
            Object(n["watch"])(
              function () {
                return a.dif;
              },
              function () {
                return u();
              }
            ),
            Object(n["watch"])(
              function () {
                return a.dragging;
              },
              function () {
                return l;
              }
            ),
            { state: a, onDragStart: s, onDragEnd: i }
          );
        },
        u = Object(n["defineComponent"])({
          name: "VTProgress",
          model: { prop: "value", event: "change" },
          props: {
            value: { required: !0, type: Number },
            vertical: { type: Boolean, default: !1 },
            disabled: { type: Boolean, default: !1 },
          },
          setup: function (t, e) {
            var a = e.emit,
              o = Object(n["ref"])(null),
              r = Object(n["ref"])(null),
              i = Object(n["ref"])(0),
              c = Object(n["ref"])(t.value),
              u = function (t) {
                a("change", s(t / i.value + c.value));
              },
              d = l(t.vertical, u),
              v = d.state,
              p = d.onDragStart,
              f = function () {
                i.value = (function () {
                  return o.value && r.value
                    ? t.vertical
                      ? o.value.clientHeight / 100
                      : (o.value.clientWidth - r.value.clientWidth) / 100
                    : 0;
                })();
              };
            Object(n["onMounted"])(function () {
              f(), window.addEventListener("resize", f);
            }),
              Object(n["onUnmounted"])(function () {
                window.removeEventListener("resize", f);
              });
            var m = Object(n["computed"])({
                get: function () {
                  return v.dragging ? s(v.dif / i.value + c.value) : t.value;
                },
                set: function (t) {
                  return a("change", t);
                },
              }),
              b = function (e) {
                t.disabled || ((c.value = t.value), p(e));
              },
              g = function (e) {
                if (!t.disabled) {
                  var n,
                    c,
                    l = 0;
                  if (t.vertical)
                    l =
                      ((null === (n = o.value) || void 0 === n
                        ? void 0
                        : n.clientHeight) || 0) - e.offsetY;
                  else
                    l =
                      e.offsetX -
                      ((null === (c = r.value) || void 0 === c
                        ? void 0
                        : c.clientWidth) || 0) /
                        2;
                  a("change", s(l / i.value));
                }
              };
            return {
              dragState: v,
              progress: o,
              progressBall: r,
              currentVal: m,
              handleBallMove: b,
              handleProgressClick: g,
              setRateSize: f,
            };
          },
        }),
        d = u,
        v = (a("40a3"), a("2877")),
        p = Object(v["a"])(d, o, r, !1, null, "689f6fa2", null);
      e["a"] = p.exports;
    },
    "43fd": function (t, e, a) {
      "use strict";
      var o = a("4c1d"),
        r = a.n(o);
      r.a;
    },
    "46ec": function (t, e, a) {
      var o = a("d49a");
      "string" === typeof o && (o = [[t.i, o, ""]]),
        o.locals && (t.exports = o.locals);
      var r = a("499e").default;
      r("006e3094", o, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "4a00": function (t, e, a) {
      "use strict";
      var o = a("7184"),
        r = a.n(o);
      r.a;
    },
    "4b25": function (t, e, a) {
      "use strict";
      a.d(e, "c", function () {
        return p;
      }),
        a.d(e, "b", function () {
          return x;
        }),
        a.d(e, "a", function () {
          return i["a"];
        });
      var o = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "the-modal",
            {
              ref: "modal",
              staticClass: "keyboard-tutorial",
              attrs: { centered: "" },
            },
            [
              a("template", { slot: "head" }, [
                t._v(t._s(t.isCloud ? "EasyData" : "") + "支持快捷键标注了"),
              ]),
              a("template", { slot: "body" }, [
                a(
                  "div",
                  { staticClass: "content" },
                  [
                    a("tutorial-carousel", {
                      attrs: { items: t.tutorialItems },
                    }),
                  ],
                  1
                ),
              ]),
            ],
            2
          );
        },
        r = [],
        n = (a("4de4"), a("caad"), a("45fc"), a("a9e3"), a("2532"), a("8165")),
        i = a("6c2b"),
        c = a("9b7a"),
        s = a("9009"),
        l = Object(n["defineComponent"])({
          name: "keyboardTutorial",
          components: { TutorialCarousel: i["a"] },
          props: { templateType: { required: !0, type: Number } },
          setup: function (t) {
            var e = [
              {
                title: "使用使用键盘快捷键A、D可快速翻页。",
                img: [s["a"].UNSTRUCTURED_OCR, s["a"].OCR].some(function (e) {
                  return e === t.templateType;
                })
                  ? a("095f")
                  : a("6244"),
              },
              {
                title: "使用键盘快捷键0-9，即可快速为图片添加标签。",
                img: a("7411"),
                unVisibleTTs: [
                  s["a"].OCR,
                  s["a"].UNSTRUCTURED_OCR,
                  s["a"].TEXT_RELATION_EXTRACT,
                  s["a"].TEXT_NLG,
                  s["a"].TEXT_COMMENT,
                ],
              },
            ];
            return {
              isCloud: c["a"].isCloud,
              tutorialItems: Object(n["computed"])(function () {
                return e.filter(function (e) {
                  return (
                    !e.unVisibleTTs || !e.unVisibleTTs.includes(t.templateType)
                  );
                });
              }),
            };
          },
        }),
        u = l,
        d = (a("915d"), a("2877")),
        v = Object(d["a"])(u, o, r, !1, null, "08e109f0", null),
        p = v.exports,
        f = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            {
              staticClass: "keyboard-tip",
              class: { "keyboard-tip-normal": !t.keyboardTip },
            },
            [
              t.keyboardTip
                ? a(
                    "span",
                    [
                      a("p", { staticClass: "keyboard-tip-content" }, [
                        t._v(t._s(t.keyboardTip)),
                      ]),
                      t._t("once-tip"),
                    ],
                    2
                  )
                : [
                    t._t("keyboard-tip-header"),
                    a(
                      "p",
                      { staticClass: "keyboard-tip-content" },
                      [
                        t.keyboardKeyTip
                          ? [t._v(" " + t._s(t.keyboardKeyTip) + " ")]
                          : t._e(),
                        t._t("normal-tip-text"),
                        a(
                          "span",
                          { staticClass: "keyboard-tip-key" },
                          [
                            t.keyboardKey
                              ? [t._v(" " + t._s(t.keyboardKey) + " ")]
                              : t._e(),
                            t._t("normal-tip"),
                          ],
                          2
                        ),
                      ],
                      2
                    ),
                  ],
            ],
            2
          );
        },
        m = [],
        b = Object(n["defineComponent"])({
          props: {
            keyboardTip: { type: String, default: "" },
            keyboardKey: { default: "" },
            keyboardKeyTip: { type: String, default: "快捷键" },
          },
        }),
        g = b,
        h = (a("0f8d"), Object(d["a"])(g, f, m, !1, null, "15edb018", null)),
        x = h.exports;
    },
    "4c1d": function (t, e, a) {
      var o = a("f919");
      "string" === typeof o && (o = [[t.i, o, ""]]),
        o.locals && (t.exports = o.locals);
      var r = a("499e").default;
      r("4d23ca90", o, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "4c7c": function (t, e, a) {
      var o = a("ce2f");
      "string" === typeof o && (o = [[t.i, o, ""]]),
        o.locals && (t.exports = o.locals);
      var r = a("499e").default;
      r("3a7388e1", o, !0, { sourceMap: !1, shadowMode: !1 });
    },
    5204: function (t, e, a) {
      var o = a("24fb"),
        r = a("1de5"),
        n = a("fd5b"),
        i = a("9472"),
        c = a("f9a6"),
        s = a("2fae");
      e = o(!1);
      var l = r(n),
        u = r(i),
        d = r(c),
        v = r(s);
      e.push([
        t.i,
        "@-webkit-keyframes prev-in-data-v-92ce2cf2{0%{transform:translate(-100%)}to{transform:translate(0)}}@keyframes prev-in-data-v-92ce2cf2{0%{transform:translate(-100%)}to{transform:translate(0)}}@-webkit-keyframes prev-out-data-v-92ce2cf2{0%{transform:translate(0)}to{transform:translate(100%)}}@keyframes prev-out-data-v-92ce2cf2{0%{transform:translate(0)}to{transform:translate(100%)}}@-webkit-keyframes next-in-data-v-92ce2cf2{0%{transform:translate(100%)}to{transform:translate(0)}}@keyframes next-in-data-v-92ce2cf2{0%{transform:translate(100%)}to{transform:translate(0)}}@-webkit-keyframes next-out-data-v-92ce2cf2{0%{transform:translate(0)}to{transform:translate(-100%)}}@keyframes next-out-data-v-92ce2cf2{0%{transform:translate(0)}to{transform:translate(-100%)}}@-webkit-keyframes indicator-data-v-92ce2cf2{0%{width:16px;margin-left:4px}to{width:8px;margin-left:0}}@keyframes indicator-data-v-92ce2cf2{0%{width:16px;margin-left:4px}to{width:8px;margin-left:0}}.tutorial-carousel[data-v-92ce2cf2]{position:relative}.tutorial-carousel .carousel-body[data-v-92ce2cf2]{position:relative;width:520px;overflow:hidden}.tutorial-carousel .carousel-body .carousel-item[data-v-92ce2cf2]{position:relative;opacity:0;height:0}.tutorial-carousel .carousel-body .carousel-item .carousel-item-title[data-v-92ce2cf2]{font-size:14px;color:#000;line-height:22px;margin-bottom:20px}.tutorial-carousel .carousel-body .carousel-item .carousel-item-title .title-label[data-v-92ce2cf2]{font-size:14px;color:#666;margin-right:5px}.tutorial-carousel .carousel-body .carousel-item .carousel-item-content[data-v-92ce2cf2]{border:1px solid var(--cxd-border)}.tutorial-carousel .carousel-body .carousel-item .carousel-item-content img[data-v-92ce2cf2]{max-width:518px}.tutorial-carousel .carousel-body .carousel-item.active[data-v-92ce2cf2]{opacity:1;height:auto}.tutorial-carousel .carousel-body .carousel-item.prev-in[data-v-92ce2cf2]{opacity:1;-webkit-animation:prev-in-data-v-92ce2cf2 .5s 1;animation:prev-in-data-v-92ce2cf2 .5s 1}.tutorial-carousel .carousel-body .carousel-item.prev-out[data-v-92ce2cf2]{opacity:1;position:absolute;top:0;-webkit-animation:prev-out-data-v-92ce2cf2 .5s 1;animation:prev-out-data-v-92ce2cf2 .5s 1}.tutorial-carousel .carousel-body .carousel-item.next-in[data-v-92ce2cf2]{opacity:1;-webkit-animation:next-in-data-v-92ce2cf2 .5s 1;animation:next-in-data-v-92ce2cf2 .5s 1}.tutorial-carousel .carousel-body .carousel-item.next-out[data-v-92ce2cf2]{opacity:1;position:absolute;top:0;-webkit-animation:next-out-data-v-92ce2cf2 .5s 1;animation:next-out-data-v-92ce2cf2 .5s 1}.tutorial-carousel .carousel-control[data-v-92ce2cf2]{position:absolute;top:50%;left:-84px;right:-84px;margin-top:-18px}.tutorial-carousel .carousel-control .carousel-arrow[data-v-92ce2cf2]{position:absolute;left:0;width:36px;height:36px;line-height:36px;text-align:center;border-radius:18px;border:1px solid #fff;background:transparent;color:#fff;cursor:pointer}.tutorial-carousel .carousel-control .carousel-arrow .s-icon[data-v-92ce2cf2]{top:0}.tutorial-carousel .carousel-control .carousel-arrow[data-v-92ce2cf2]:hover{color:#000;background:#fff}.tutorial-carousel .carousel-control .carousel-arrow.carousel-next[data-v-92ce2cf2]{left:auto;right:0}.tutorial-carousel .carousel-indicators[data-v-92ce2cf2]{text-align:center;margin-left:-8px;font-size:0;margin-top:20px;line-height:0}.tutorial-carousel .carousel-indicators .indicator-item[data-v-92ce2cf2]{display:inline-block;width:16px;text-align:right}.tutorial-carousel .carousel-indicators .indicator-item .indicator-item-block[data-v-92ce2cf2]{display:inline-block;background:#bbb;width:8px;height:8px;border-radius:4px}.tutorial-carousel .carousel-indicators .indicator-item.active .indicator-item-block[data-v-92ce2cf2]{background:var(--cxd-blue);-webkit-animation:indicator-data-v-92ce2cf2 8s ease-out 1;animation:indicator-data-v-92ce2cf2 8s ease-out 1}.tutorial-carousel.out-line .carousel-control[data-v-92ce2cf2]{left:-58px;right:-58px}.tutorial-carousel.out-line .carousel-control .carousel-arrow[data-v-92ce2cf2]{border:none;width:42px;height:42px;line-height:42px;border-radius:21px}.tutorial-carousel.out-line .carousel-control .carousel-arrow[data-v-92ce2cf2]:hover{background:transparent}.tutorial-carousel.out-line .carousel-control .carousel-arrow .s-icon[data-v-92ce2cf2]{display:none}.tutorial-carousel.out-line .carousel-control .carousel-arrow.carousel-prev[data-v-92ce2cf2]{background-image:url(" +
          l +
          ");background-size:100%}.tutorial-carousel.out-line .carousel-control .carousel-arrow.carousel-prev[data-v-92ce2cf2]:hover{background-image:url(" +
          u +
          ")}.tutorial-carousel.out-line .carousel-control .carousel-arrow.carousel-next[data-v-92ce2cf2]{background-size:100%;background-image:url(" +
          d +
          ")}.tutorial-carousel.out-line .carousel-control .carousel-arrow.carousel-next[data-v-92ce2cf2]:hover{background-image:url(" +
          v +
          ")}.tutorial-carousel.out-line .carousel-indicators[data-v-92ce2cf2]{margin-left:-40px;margin-top:15px}.tutorial-carousel.out-line .carousel-indicators .indicator-item[data-v-92ce2cf2]{width:52px}.tutorial-carousel.out-line .carousel-indicators .indicator-item .indicator-item-block[data-v-92ce2cf2]{background:#bbb;width:40px;height:4px;border-radius:2px}.tutorial-carousel.out-line .carousel-indicators .indicator-item.active .indicator-item-block[data-v-92ce2cf2]{background:#fff;-webkit-animation:none;animation:none}",
        "",
      ]),
        (t.exports = e);
    },
    "5a60": function (t, e, a) {
      t.exports = a.p + "img/step1.c05e175f.png";
    },
    "5d5c": function (t, e, a) {
      t.exports = a.p + "img/step2.642dc8c0.png";
    },
    "5d9c": function (t, e, a) {
      "use strict";
      a.d(e, "a", function () {
        return c;
      }),
        a.d(e, "b", function () {
          return s;
        });
      a("99af"), a("a9e3"), a("9129");
      var o = a("8165");
      a("fb6a"),
        a("c35a"),
        a("b680"),
        a("d3b7"),
        a("4d63"),
        a("ac1f"),
        a("25f0"),
        a("466d"),
        a("1276");
      function r(t, e, a) {
        return e > a ? a : t < e ? e : t > a ? a : t;
      }
      function n(t) {
        if (!t.currentTarget) return 0;
        var e = t.currentTarget.getBoundingClientRect();
        return (t.clientX - e.x) / e.width;
      }
      var i = function (t) {
          return t.length < 2 ? "0".concat(t) : t;
        },
        c = function (t) {
          if (null == t || t === 1 / 0) return "--";
          var e = "".concat(Math.floor(t) % 60),
            a = "".concat(Math.floor(t / 60));
          return "".concat(i(a), ":").concat(i(e));
        },
        s = function (t, e) {
          var a =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : { timeRange: Object(o["ref"])(), initialLoaded: !1 },
            i = Object(o["ref"])(a.initialLoaded),
            s = Object(o["ref"])(!1),
            l = Object(o["ref"])(0),
            u = Object(o["ref"])(0),
            d = Object(o["ref"])(1),
            v = Object(o["ref"])(!1),
            p = function () {
              v.value && ((v.value = !1), t.value && t.value.pause());
            },
            f = function () {
              if (i.value) {
                var e = t.value && t.value.play();
                e
                  ? e
                      .then(function () {
                        v.value = !0;
                      })
                      .catch(function (t) {
                        console.error(t);
                      })
                  : (v.value = !0);
              }
            },
            m = function (t) {
              var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0;
              Number.isNaN(t)
                ? (u.value = 0)
                : (u.value = a.timeRange.value
                    ? r(t + e, a.timeRange.value[0], a.timeRange.value[1])
                    : t || 0);
            },
            b = function (t) {
              l.value = a.timeRange.value
                ? Math.min(t, a.timeRange.value[1])
                : t || 0;
            },
            g = function (e) {
              var a,
                o = null === (a = t.value) || void 0 === a ? void 0 : a.src;
              o !== e &&
                ((i.value = !1),
                (v.value = !1),
                (s.value = !1),
                t.value && (t.value.src = e));
            },
            h = function () {
              t.value &&
                ((t.value.onseeking = function () {
                  i.value = !1;
                }),
                t.value.addEventListener("loadedmetadata", function () {
                  t.value &&
                    t.value.duration === 1 / 0 &&
                    (t.value.currentTime = 1e10),
                    (i.value = !0);
                }),
                (t.value.onseeked = function () {
                  i.value = !0;
                }),
                (t.value.ondurationchange = function () {
                  var e;
                  b(
                    (null === (e = t.value) || void 0 === e
                      ? void 0
                      : e.duration) || 0
                  );
                }),
                (t.value.onended = function () {
                  (u.value = 0), (v.value = !1);
                }),
                t.value.addEventListener("playing", function () {
                  (i.value = !0), (v.value = !0);
                }),
                (t.value.onerror = function () {
                  (i.value = !0), (s.value = !0);
                }),
                (t.value.ontimeupdate = function () {
                  (this.ontimeupdate = function () {
                    var e,
                      a = Math.min(
                        (null === (e = t.value) || void 0 === e
                          ? void 0
                          : e.currentTime) || 0,
                        l.value
                      );
                    a >= l.value && p(), m(a);
                  }),
                    t.value && (t.value.currentTime = 0);
                }),
                (t.value.onvolumechange = function () {
                  var e;
                  d.value =
                    (null === (e = t.value) || void 0 === e
                      ? void 0
                      : e.volume) || 1;
                }),
                b(t.value.duration),
                m(t.value.currentTime),
                g(e.value));
            };
          return (
            Object(o["watch"])(e, g, { immediate: !0 }),
            Object(o["watch"])(t, h),
            Object(o["onMounted"])(function () {
              h();
            }),
            Object(o["onUnmounted"])(function () {
              p();
            }),
            {
              hasError: s,
              loaded: i,
              play: f,
              playing: v,
              pause: p,
              formattedDuration: Object(o["computed"])(function () {
                return c(l.value);
              }),
              formattedCurrentTime: Object(o["computed"])(function () {
                return c(u.value);
              }),
              duration: l,
              currentTime: u,
              setCurrentTime: function (e) {
                var o =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0;
                if (t.value && i.value && l.value !== 1 / 0)
                  if ("number" !== typeof e) {
                    var r = a.timeRange.value
                      ? Math.min(
                          l.value,
                          a.timeRange.value[1] - a.timeRange.value[0]
                        )
                      : l.value;
                    m(n(e) * r, o);
                  } else m(e, o);
              },
              volume: d,
              setVolume: function (e) {
                t.value && (t.value.volume = n(e));
              },
            }
          );
        };
    },
    6244: function (t, e, a) {
      t.exports = a.p + "img/stepNormal.6adae1dc.png";
    },
    6541: function (t, e, a) {
      "use strict";
      var o = a("ae10"),
        r = a.n(o);
      r.a;
    },
    "67cf": function (t, e, a) {
      var o = a("24fb");
      (e = o(!1)),
        e.push([
          t.i,
          ".keyboard-tip[data-v-15edb018]{display:flex;flex-direction:column;align-items:center;padding:6px;min-width:100px;font-size:14px;font-weight:400}.keyboard-tip p[data-v-15edb018]{color:#000;line-height:22px;margin:0;white-space:nowrap;font-weight:400}.keyboard-tip img[data-v-15edb018]{margin-top:10px;width:230px}.keyboard-tip.keyboard-tip-normal[data-v-15edb018]{padding:0}.keyboard-tip.keyboard-tip-normal p.keyboard-tip-content[data-v-15edb018]{line-height:24px;display:flex;white-space:nowrap}.keyboard-tip.keyboard-tip-normal .keyboard-tip-key[data-v-15edb018]{position:relative;margin-left:8px;display:inline-block;color:#1a73e8;width:24px;height:24px;line-height:22px;border:1px solid #1a73e8;border-radius:4px;text-align:center;font-weight:700}.keyboard-tip.keyboard-tip-normal .keyboard-tip-key img[data-v-15edb018]{position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);width:6px;height:8px;margin:0}",
          "",
        ]),
        (t.exports = e);
    },
    "6c2b": function (t, e, a) {
      "use strict";
      var o = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            {
              ref: "carousel",
              staticClass: "tutorial-carousel",
              class: t.theme,
            },
            [
              a(
                "div",
                { staticClass: "carousel-body" },
                t._l(t.items, function (e, o) {
                  return a(
                    "div",
                    {
                      key: o,
                      staticClass: "carousel-item",
                      class: {
                        active: t.state.currentIndex === o,
                        "prev-in": t.state.prevIn === o,
                        "prev-out": t.state.prevOut === o,
                        "next-in": t.state.nextIn === o,
                        "next-out": t.state.nextOut === o,
                      },
                      attrs: { id: "carousel-item" + o },
                    },
                    [
                      e.title
                        ? a("div", { staticClass: "carousel-item-title" }, [
                            t.showStep && t.items.length > 1
                              ? a("span", { staticClass: "title-label" }, [
                                  t._v("Step." + t._s(o + 1)),
                                ])
                              : t._e(),
                            t._v(" " + t._s(e.title) + " "),
                          ])
                        : t._e(),
                      e.img
                        ? a("div", { staticClass: "carousel-item-content" }, [
                            a("img", {
                              attrs: { src: e.img, alt: e.title || "" },
                            }),
                          ])
                        : t._e(),
                    ]
                  );
                }),
                0
              ),
              t.items.length > 1
                ? a("div", { staticClass: "carousel-control" }, [
                    a(
                      "div",
                      {
                        staticClass: "carousel-arrow carousel-prev",
                        on: { click: t.handlePrevClick },
                      },
                      [a("the-icon", { attrs: { name: "arrow-left-2" } })],
                      1
                    ),
                    a(
                      "div",
                      {
                        staticClass: "carousel-arrow carousel-next",
                        on: { click: t.handleNextClick },
                      },
                      [a("the-icon", { attrs: { name: "arrow-right-2" } })],
                      1
                    ),
                  ])
                : t._e(),
              t.items.length > 1
                ? a(
                    "div",
                    { staticClass: "carousel-indicators" },
                    t._l(t.items, function (e, o) {
                      return a(
                        "div",
                        {
                          key: o,
                          staticClass: "indicator-item",
                          class: { active: t.state.currentIndex === o },
                          attrs: { id: "indicator-item" + o },
                        },
                        [a("span", { staticClass: "indicator-item-block" })]
                      );
                    }),
                    0
                  )
                : t._e(),
              t._t("bottom"),
            ],
            2
          );
        },
        r = [],
        n = (a("96cf"), a("1da1")),
        i = a("8165"),
        c =
          (a("d3b7"),
          function (t, e) {
            var a = t,
              o = null;
            return e
              ? {
                  result: function () {
                    return new Promise(function (t) {
                      o = setTimeout(function () {
                        return t(!0);
                      }, e);
                    });
                  },
                  destroy: function () {
                    o && clearTimeout(o);
                  },
                }
              : {
                  result: function () {
                    return new Promise(function (t) {
                      (o = function () {
                        a.removeEventListener("animationend", o), t(!0);
                      }),
                        a.addEventListener("animationend", o);
                    });
                  },
                  destroy: function () {
                    a.removeEventListener("animationend", o);
                  },
                };
          }),
        s = null,
        l = Object(i["defineComponent"])({
          name: "TutorialCarousel",
          props: {
            showStep: { type: Boolean, default: !0 },
            items: { type: Array, required: !0 },
            theme: { type: String, default: "" },
          },
          setup: function (t, e) {
            var a = e.emit,
              o = Object(i["ref"])(null),
              r = Object(i["reactive"])({
                maxSize: Object(i["computed"])(function () {
                  return t.items.length - 1;
                }),
              }),
              l = Object(i["reactive"])({
                currentIndex: 0,
                prevIn: null,
                nextIn: null,
                prevOut: null,
                nextOut: null,
                turning: !1,
              }),
              u = function () {
                (l.turning = !1),
                  (l.prevIn = null),
                  (l.prevOut = null),
                  (l.nextIn = null),
                  (l.nextOut = null);
              },
              d = function (t) {
                return o.value.querySelector("#carousel-item".concat(t));
              },
              v = function (t) {
                return o.value.querySelector("#indicator-item".concat(t));
              },
              p = (function () {
                var t = Object(n["a"])(
                  regeneratorRuntime.mark(function t() {
                    var e,
                      o,
                      n,
                      i,
                      v,
                      p,
                      f = arguments;
                    return regeneratorRuntime.wrap(function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              ((n = f.length > 0 && void 0 !== f[0] ? f[0] : 1),
                              !l.turning)
                            ) {
                              t.next = 3;
                              break;
                            }
                            return t.abrupt("return");
                          case 3:
                            return (
                              (null === (e = s) || void 0 === e
                                ? void 0
                                : e.destroy) &&
                                (null === (o = s) ||
                                  void 0 === o ||
                                  o.destroy()),
                              (l.turning = !0),
                              (i = l.currentIndex),
                              -1 === n
                                ? ((l.prevIn = 0 === i ? r.maxSize : i - 1),
                                  (l.prevOut = i),
                                  (i = l.prevIn))
                                : ((l.nextIn = i === r.maxSize ? 0 : i + 1),
                                  (l.nextOut = i),
                                  (i = l.nextIn)),
                              (l.currentIndex = i),
                              (v = c(d(i))),
                              (p = v.result),
                              (t.next = 11),
                              p()
                            );
                          case 11:
                            a("change", i), u();
                          case 13:
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
              f = function () {
                return p(1);
              },
              m = function () {
                return p(-1);
              };
            return (
              Object(i["onMounted"])(function () {
                Object(i["watch"])(
                  function () {
                    return l.currentIndex;
                  },
                  function (e) {
                    var a, r;
                    "number" === typeof e &&
                      o.value &&
                      ((null === (a = s) || void 0 === a
                        ? void 0
                        : a.destroy) &&
                        (null === (r = s) || void 0 === r || r.destroy()),
                      (s = c(v(e), "out-line" === t.theme ? 8e3 : 0)),
                      s &&
                        s.result().then(function () {
                          return p(1);
                        }));
                  },
                  { immediate: !0 }
                );
              }),
              Object(i["onBeforeUnmount"])(function () {
                var t, e;
                (null === (t = s) || void 0 === t ? void 0 : t.destroy) &&
                  (null === (e = s) || void 0 === e || e.destroy());
              }),
              {
                state: l,
                cstate: r,
                carousel: o,
                handleNextClick: f,
                handlePrevClick: m,
              }
            );
          },
        }),
        u = l,
        d = (a("b7e0"), a("2877")),
        v = Object(d["a"])(u, o, r, !1, null, "92ce2cf2", null);
      e["a"] = v.exports;
    },
    7184: function (t, e, a) {
      var o = a("9f8b");
      "string" === typeof o && (o = [[t.i, o, ""]]),
        o.locals && (t.exports = o.locals);
      var r = a("499e").default;
      r("1acc342c", o, !0, { sourceMap: !1, shadowMode: !1 });
    },
    7411: function (t, e, a) {
      t.exports = a.p + "img/step2.ab388c43.png";
    },
    "7b83": function (t, e, a) {
      "use strict";
      a.d(e, "a", function () {
        return d;
      });
      a("96cf");
      var o = a("1da1"),
        r = a("f24d"),
        n = a("d736"),
        i = a("8165"),
        c = a("d574"),
        s = a("8607"),
        l = a("9ba5"),
        u = "VIDEO_TUTORIAL",
        d = function (t) {
          var e = t === n["TemplateType"].TEXT_COMPOSE,
            a = Object(r["useModal"])(l["a"], { templateType: t }),
            d = function () {
              a();
            },
            v = function () {
              Object(c["a"])("".concat(u, "_").concat(t)) ||
                (Object(c["b"])("".concat(u, "_").concat(t)), d());
            };
          return e
            ? {}
            : (Object(i["onMounted"])(
                Object(o["a"])(
                  regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), Object(s["c"])(100);
                          case 2:
                            v();
                          case 3:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )
              ),
              { showVideoTip: d });
        };
    },
    "7dd4": function (t, e, a) {
      t.exports = a.p + "img/ssl.tip.hover.c13a20c0.svg";
    },
    "7e90": function (t, e, a) {
      "use strict";
      a.d(e, "a", function () {
        return x;
      }),
        a.d(e, "b", function () {
          return m;
        });
      var o = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return t.ssl.cstate.enabled
            ? a(
                "div",
                {
                  staticClass: "ssl-tip",
                  on: {
                    click: function (e) {
                      return t.showSSLModal();
                    },
                  },
                },
                [
                  a("div", { staticClass: "ssl-tip-icon" }),
                  a("div", { staticClass: "ssl-tip-content" }, [
                    t._v("半监督训练说明"),
                  ]),
                ]
              )
            : t._e();
        },
        r = [],
        n = a("f24d"),
        i = a("8165"),
        c = a("cb4d"),
        s = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "the-modal",
            {
              ref: "modal",
              staticClass: "ssl-tip-modal",
              attrs: { centered: "" },
            },
            [
              a(
                "template",
                { slot: "head" },
                [
                  a("div", { staticClass: "ssl-tip-modal-title" }, [
                    t._v("EasyDL半监督训练功能上线了"),
                  ]),
                  a("the-alert", { staticClass: "ssl-tip-modal-alert" }, [
                    t._v(
                      " EasyDL提供半监督训练的方式，可添加部分已标注数据和大量未标注数据直接进行训练，从而获得泛化表现提升的模型以及未标注数据的智能标注结果。"
                    ),
                    a("br"),
                    t._v(
                      " 当标注数据量满足半监督训练起始条件时请尽量保证每个标签的标注量平衡，可按如下路径前往使用半监督训练 "
                    ),
                  ]),
                ],
                1
              ),
              a("template", { slot: "body" }, [
                a(
                  "div",
                  { staticClass: "content" },
                  [
                    a("TutorialCarousel", {
                      staticClass: "ssl-tip-carousel",
                      attrs: {
                        theme: "out-line",
                        showStep: !1,
                        items: t.tutorials,
                      },
                    }),
                  ],
                  1
                ),
              ]),
              a(
                "template",
                { slot: "foot" },
                [
                  a(
                    "the-button",
                    { staticClass: "btn-close", on: { click: t.close } },
                    [t._v("知道了")]
                  ),
                ],
                1
              ),
            ],
            2
          );
        },
        l = [],
        u = a("4b25"),
        d = Object(i["defineComponent"])({
          components: { TutorialCarousel: u["a"] },
          setup: function () {
            var t = Object(n["useModalCloser"])(),
              e = t.modal,
              o = t.close,
              r = [
                { title: "1.使用半监督训练", img: a("5a60") },
                { title: "2.查看标注结果", img: a("5d5c") },
              ];
            return { modal: e, close: o, tutorials: r };
          },
        }),
        v = d,
        p = (a("43fd"), a("2877")),
        f = Object(p["a"])(v, s, l, !1, null, "558fe08e", null),
        m = f.exports,
        b = Object(i["defineComponent"])({
          setup: function () {
            var t = Object(c["a"])(),
              e = Object(n["useModal"])(m);
            return { showSSLModal: e, ssl: t };
          },
        }),
        g = b,
        h = (a("6541"), Object(p["a"])(g, o, r, !1, null, "ba3f260e", null)),
        x = h.exports;
    },
    "8eab": function (t, e, a) {
      var o = a("ce88");
      "string" === typeof o && (o = [[t.i, o, ""]]),
        o.locals && (t.exports = o.locals);
      var r = a("499e").default;
      r("1cb3b957", o, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "8efe": function (t, e, a) {
      "use strict";
      var o = a("46ec"),
        r = a.n(o);
      r.a;
    },
    9009: function (t, e, a) {
      "use strict";
      var o = a("d736");
      a.d(e, "a", function () {
        return o["TemplateType"];
      });
    },
    9129: function (t, e, a) {
      var o = a("23e7");
      o(
        { target: "Number", stat: !0 },
        {
          isNaN: function (t) {
            return t != t;
          },
        }
      );
    },
    "915d": function (t, e, a) {
      "use strict";
      var o = a("4c7c"),
        r = a.n(o);
      r.a;
    },
    9472: function (t, e, a) {
      t.exports = a.p + "img/left.hover.198f0280.svg";
    },
    9475: function (t, e, a) {
      "use strict";
      a.r(e),
        a.d(e, "E_ACTION_KEY", function () {
          return p;
        }),
        a.d(e, "useKeyBoardTip", function () {
          return h;
        }),
        a.d(e, "DomKeyboardEvent", function () {
          return x;
        }),
        a.d(e, "useDomKeyboardEvent", function () {
          return y;
        }),
        a.d(e, "useWelcome", function () {
          return w;
        });
      a("4160"),
        a("caad"),
        a("45fc"),
        a("4ec9"),
        a("d3b7"),
        a("2532"),
        a("3ca3"),
        a("159b"),
        a("ddb0");
      var o = a("d4ec"),
        r = a("f24d"),
        n = a("d574"),
        i = a("4b25"),
        c = a("8165"),
        s = a("2841"),
        l = a("9009"),
        u = a("7b83"),
        d = a("fdb3"),
        v = a("7e90"),
        p = Object(s["enumxFactory"])({
          KEYBOARD_SHORTCUT_TUTORIAL: {
            id: "KEYBOARD_SHORTCUT_TUTORIAL",
            label: "教程弹窗",
          },
          KEYBOARD_SHORTCUT_SAVE: {
            id: "KEYBOARD_SHORTCUT_SAVE",
            label: "使用键盘快捷键S，快速确认标注结果。",
          },
          KEYBOARD_SHORTCUT_ARROW: {
            id: "KEYBOARD_SHORTCUT_ARROW",
            label: "使用键盘快捷键A、D可快速翻页。",
          },
          KEYBOARD_SHORTCUT_LABELINDEX: {
            id: "KEYBOARD_SHORTCUT_LABELINDEX",
            label: "使用键盘快捷键0-9，即可快速为图片添加标签。",
          },
          EASYDL_SSL_TIP: {
            id: "EASYDL_SSL_TIP",
            label: "EasyDL半监督上线弹窗",
          },
        }),
        f = "WELCOME_TUTORIAL",
        m = ["INPUT", "SELECT", "TEXTAREA"];
      function b(t) {
        t &&
          !t.timer &&
          (t.fn.forEach(function (t) {
            return t();
          }),
          (t.timer = setTimeout(function () {
            clearTimeout(t.timer), (t.timer = void 0);
          }, 200)));
      }
      function g(t) {
        return !Object(n["a"])(t) && (Object(n["b"])(t), !0);
      }
      var h = function (t) {
          var e = Object(c["ref"])("");
          return (
            (e.value = g(t) ? p.getLabelById(t) : ""),
            {
              keyboardTip: e,
              setKeyboardTip: function () {
                e.value = "";
              },
            }
          );
        },
        x = function t(e) {
          var a = this;
          for (var r in (Object(o["a"])(this, t),
          (this.EventFnMap = new Map()),
          (this.bindEventMap = function (t) {
            m.includes(t.target.tagName) ||
              t.target.getAttribute("contenteditable") ||
              (a.EventFnMap.has(t.key) &&
                (t.preventDefault(), b(a.EventFnMap.get(t.key))));
          }),
          (this.destroy = function () {
            a.EventFnMap.forEach(function (t, e) {
              (null === t || void 0 === t ? void 0 : t.timer) &&
                clearTimeout(t.timer),
                a.EventFnMap.delete(e);
            }),
              document.body.removeEventListener("keydown", a.bindEventMap);
          }),
          e)) {
            var n = this.EventFnMap.get(r);
            n && n.fn
              ? n.fn.push(e[r])
              : this.EventFnMap.set(r, { fn: [e[r]] });
          }
          document.body.addEventListener("keydown", this.bindEventMap);
        },
        y = function (t) {
          var e,
            a = new x(t),
            o =
              null === (e = Object(c["getCurrentInstance"])()) || void 0 === e
                ? void 0
                : e.proxy;
          return (
            o
              ? Object(c["onBeforeUnmount"])(function () {
                  a.destroy();
                })
              : console.warn(
                  "keyboard events destroy is failed,please destroy it by yourself!"
                ),
            a
          );
        },
        _ = [
          l["a"].IMG_CLS,
          l["a"].IMG_CLS_MULTI,
          l["a"].OBJ_DCT_QUAD,
          l["a"].OBJ_DCT_RECT,
          l["a"].OCR,
          l["a"].UNSTRUCTURED_OCR,
          l["a"].IMG_COMPOSE,
          l["a"].IMG_CUBOID,
          l["a"].IMG_MIXED,
          l["a"].IMG_POINT,
          l["a"].IMG_POLYLINE,
          l["a"].INSTANCE_SEGMENT,
          l["a"].SEMANTIC_SEGMENT,
        ],
        w = function (t, e) {
          var a = Object(r["useModal"])(i["c"], void 0, e),
            o = Object(r["useModal"])(d["a"], { multi: !0 }, e),
            n = Object(r["useModal"])(v["b"], void 0, e);
          t !== l["a"].TEXT_COMMENT
            ? t &&
              [l["a"].VIDEO_TRACKING, l["a"].TEXT_RELATION_EXTRACT].some(
                function (e) {
                  return e === t;
                }
              )
              ? Object(u["a"])(t)
              : g(p.KEYBOARD_SHORTCUT_TUTORIAL) && _.includes(t)
              ? a({ props: { templateType: t } })
              : [l["a"].OBJ_DCT_RECT, l["a"].OBJ_DCT_QUAD].some(function (e) {
                  return e === t;
                }) &&
                s["env"].isLite &&
                g(p.EASYDL_SSL_TIP) &&
                n()
            : g("".concat(f, "_").concat(t)) && o();
        };
      e["default"] = {
        E_ACTION_KEY: p,
        useKeyBoardTip: h,
        useWelcome: w,
        useDomKeyboardEvent: y,
      };
    },
    "9b7a": function (t, e, a) {
      "use strict";
      var o = a("5530"),
        r = a("2841"),
        n = r["env"].usePlatform(),
        i = r["env"].usePlatformEnv();
      e["a"] = Object(o["a"])({ platform: n, platformEnv: i }, r["env"]);
    },
    "9ba5": function (t, e, a) {
      "use strict";
      var o = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("the-modal", { staticClass: "help-video-modal" }, [
            a(
              "div",
              {
                staticClass: "help-video-modal_body",
                attrs: { slot: "body" },
                slot: "body",
              },
              [a("VTVideoPlayer", { attrs: { src: t.src } })],
              1
            ),
          ]);
        },
        r = [],
        n = (a("a9e3"), a("ade3")),
        i = a("8165"),
        c = a("9009"),
        s = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { ref: "wrapper", staticClass: "vt-video" }, [
            a("div", { staticClass: "vt-video-player" }, [
              a("video", {
                ref: "video",
                attrs: {
                  src: t.src,
                  muted: "",
                  autoplay: "autoplay",
                  controls: !1,
                },
                domProps: { muted: !0 },
                on: {
                  play: t.handlePlay,
                  pause: t.handlePause,
                  timeupdate: t.handleTimeUpdate,
                },
              }),
            ]),
            a("div", { staticClass: "vt-video_bottom" }, [
              a("div", { staticClass: "vt-video-controls" }, [
                t.playing
                  ? a(
                      "div",
                      {
                        staticClass: "vt-video-icon",
                        on: { click: t.handlePause },
                      },
                      [a("div", { staticClass: "vt-video-pause-icon" })]
                    )
                  : a(
                      "div",
                      {
                        staticClass: "vt-video-icon",
                        on: { click: t.handlePlay },
                      },
                      [a("div", { staticClass: "vt-video-play-icon" })]
                    ),
                a("div", { staticClass: "vt-video-time" }, [
                  t._v(t._s(t.currentTimeStr)),
                ]),
              ]),
              a(
                "div",
                { staticClass: "vt-video-progress" },
                [
                  a("VTProgress", {
                    ref: "progress",
                    model: {
                      value: t.currentProgress,
                      callback: function (e) {
                        t.currentProgress = e;
                      },
                      expression: "currentProgress",
                    },
                  }),
                ],
                1
              ),
            ]),
          ]);
        },
        l = [],
        u = (a("99af"), a("43ca")),
        d = a("5d9c"),
        v = Object(i["defineComponent"])({
          props: { src: { required: !0, type: String } },
          components: { VTProgress: u["a"] },
          setup: function () {
            var t = Object(i["ref"])(null),
              e = Object(i["ref"])(null),
              a = Object(i["ref"])(null),
              o = Object(i["ref"])(!1),
              r = Object(i["ref"])(0),
              n = Object(i["ref"])(0),
              c = Object(i["ref"])(0),
              s = Object(i["computed"])({
                get: function () {
                  return c.value;
                },
                set: function (t) {
                  e.value && (e.value.currentTime = (t / 100) * n.value);
                },
              }),
              l = Object(i["computed"])(function () {
                return e.value
                  ? ""
                      .concat(Object(d["a"])(r.value), "/")
                      .concat(Object(d["a"])(n.value))
                  : "".concat(Object(d["a"])(0), "/").concat(Object(d["a"])(0));
              }),
              u = function () {
                e.value &&
                  ((r.value = e.value.currentTime),
                  (c.value = (e.value.currentTime / n.value) * 100));
              };
            return {
              wrapper: t,
              video: e,
              progress: a,
              playing: o,
              currentTimeStr: l,
              currentProgress: s,
              handleTimeUpdate: u,
              handlePlay: function () {
                e.value &&
                  ((o.value = !0),
                  e.value.play(),
                  (n.value = e.value.duration),
                  a.value.setRateSize());
              },
              handlePause: function () {
                e.value && (e.value.pause(), (o.value = !1));
              },
            };
          },
        }),
        p = v,
        f = (a("4a00"), a("2877")),
        m = Object(f["a"])(p, s, l, !1, null, "2105ae1b", null),
        b = m.exports,
        g = Object(i["defineComponent"])({
          components: { VTVideoPlayer: b },
          props: { templateType: { type: Number, required: !0 } },
          setup: function (t) {
            var e = "/easydata/canghai/entity/static/",
              a = Object(i["computed"])(function () {
                var a;
                return ((a = {}),
                Object(n["a"])(
                  a,
                  c["a"].INSTANCE_SEGMENT,
                  "".concat(e, "img-seg-dot-predictor-tip.mp4")
                ),
                Object(n["a"])(
                  a,
                  c["a"].SEMANTIC_SEGMENT,
                  "".concat(e, "img-seg-dot-predictor-tip.mp4")
                ),
                Object(n["a"])(
                  a,
                  c["a"].TEXT_RELATION_EXTRACT,
                  "".concat(e, "text-relation-extract-tip.mp4")
                ),
                Object(n["a"])(
                  a,
                  c["a"].VIDEO_TRACKING,
                  "".concat(e, "video-tracking-tip.mp4")
                ),
                a)[t.templateType];
              });
            return { src: a };
          },
        }),
        h = g,
        x = (a("b438"), Object(f["a"])(h, o, r, !1, null, "7446c005", null));
      e["a"] = x.exports;
    },
    "9f8b": function (t, e, a) {
      var o = a("24fb"),
        r = a("1de5"),
        n = a("432e"),
        i = a("08ba");
      e = o(!1);
      var c = r(n),
        s = r(i);
      e.push([
        t.i,
        ".vt-video[data-v-2105ae1b]{width:100%;height:100%;position:relative}.vt-video .vt-video_bottom[data-v-2105ae1b]{position:absolute;display:block;bottom:0;left:0;right:0;height:100px;opacity:0;background:linear-gradient(transparent,#000 90%,#000);transition:all .5s}.vt-video .vt-video_bottom .vt-video-controls[data-v-2105ae1b]{position:absolute;top:30px;width:100%;display:flex}.vt-video .vt-video_bottom .vt-video-controls .vt-video-icon[data-v-2105ae1b]{margin-left:10px;width:40px;height:40px;cursor:pointer;border-radius:50%}.vt-video .vt-video_bottom .vt-video-controls .vt-video-icon[data-v-2105ae1b]:hover{background:rgba(0,0,0,.5)}.vt-video .vt-video_bottom .vt-video-controls .vt-video-icon .vt-video-pause-icon[data-v-2105ae1b],.vt-video .vt-video_bottom .vt-video-controls .vt-video-icon .vt-video-play-icon[data-v-2105ae1b]{width:40px;height:40px;background-position:50%;background-size:14px;background-repeat:no-repeat}.vt-video .vt-video_bottom .vt-video-controls .vt-video-icon .vt-video-play-icon[data-v-2105ae1b]{background-image:url(" +
          c +
          ")}.vt-video .vt-video_bottom .vt-video-controls .vt-video-icon .vt-video-pause-icon[data-v-2105ae1b]{background-image:url(" +
          s +
          ")}.vt-video .vt-video_bottom .vt-video-controls .vt-video-time[data-v-2105ae1b]{margin-left:10px;line-height:40px;font-size:14px;color:#fff}.vt-video .vt-video_bottom .vt-video-progress[data-v-2105ae1b]{position:absolute;bottom:5px;left:10px;right:10px}.vt-video:hover .vt-video_bottom[data-v-2105ae1b]{opacity:1}",
        "",
      ]),
        (t.exports = e);
    },
    ae10: function (t, e, a) {
      var o = a("1c6c");
      "string" === typeof o && (o = [[t.i, o, ""]]),
        o.locals && (t.exports = o.locals);
      var r = a("499e").default;
      r("00a8625e", o, !0, { sourceMap: !1, shadowMode: !1 });
    },
    b047: function (t, e, a) {
      var o = a("1a8c"),
        r = a("408c"),
        n = a("b4b0"),
        i = "Expected a function",
        c = Math.max,
        s = Math.min;
      function l(t, e, a) {
        var l,
          u,
          d,
          v,
          p,
          f,
          m = 0,
          b = !1,
          g = !1,
          h = !0;
        if ("function" != typeof t) throw new TypeError(i);
        function x(e) {
          var a = l,
            o = u;
          return (l = u = void 0), (m = e), (v = t.apply(o, a)), v;
        }
        function y(t) {
          return (m = t), (p = setTimeout(O, e)), b ? x(t) : v;
        }
        function _(t) {
          var a = t - f,
            o = t - m,
            r = e - a;
          return g ? s(r, d - o) : r;
        }
        function w(t) {
          var a = t - f,
            o = t - m;
          return void 0 === f || a >= e || a < 0 || (g && o >= d);
        }
        function O() {
          var t = r();
          if (w(t)) return T(t);
          p = setTimeout(O, _(t));
        }
        function T(t) {
          return (p = void 0), h && l ? x(t) : ((l = u = void 0), v);
        }
        function k() {
          void 0 !== p && clearTimeout(p), (m = 0), (l = f = u = p = void 0);
        }
        function C() {
          return void 0 === p ? v : T(r());
        }
        function E() {
          var t = r(),
            a = w(t);
          if (((l = arguments), (u = this), (f = t), a)) {
            if (void 0 === p) return y(f);
            if (g) return clearTimeout(p), (p = setTimeout(O, e)), x(f);
          }
          return void 0 === p && (p = setTimeout(O, e)), v;
        }
        return (
          (e = n(e) || 0),
          o(a) &&
            ((b = !!a.leading),
            (g = "maxWait" in a),
            (d = g ? c(n(a.maxWait) || 0, e) : d),
            (h = "trailing" in a ? !!a.trailing : h)),
          (E.cancel = k),
          (E.flush = C),
          E
        );
      }
      t.exports = l;
    },
    b438: function (t, e, a) {
      "use strict";
      var o = a("1c59"),
        r = a.n(o);
      r.a;
    },
    b4b0: function (t, e, a) {
      var o = a("1a8c"),
        r = a("ffd6"),
        n = NaN,
        i = /^\s+|\s+$/g,
        c = /^[-+]0x[0-9a-f]+$/i,
        s = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        u = parseInt;
      function d(t) {
        if ("number" == typeof t) return t;
        if (r(t)) return n;
        if (o(t)) {
          var e = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = o(e) ? e + "" : e;
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(i, "");
        var a = s.test(t);
        return a || l.test(t) ? u(t.slice(2), a ? 2 : 8) : c.test(t) ? n : +t;
      }
      t.exports = d;
    },
    b7e0: function (t, e, a) {
      "use strict";
      var o = a("3682"),
        r = a.n(o);
      r.a;
    },
    c1e8: function (t, e, a) {
      var o = a("24fb");
      (e = o(!1)),
        e.push([
          t.i,
          ".help-video-modal[data-v-7446c005]  .s-modal_wrapper{transform-origin:80% 20%}.help-video-modal[data-v-7446c005]  .s-modal_wrapper.animated{-webkit-animation-duration:.8s;animation-duration:.8s}.help-video-modal[data-v-7446c005]  .s-modal_wrapper .s-modal_main{width:900px;background:transparent}.help-video-modal[data-v-7446c005]  .s-modal_wrapper .s-modal_main .s-modal_head{position:absolute;top:0;z-index:1;padding:10px 20px;height:54px;border-bottom:none!important;background:transparent!important}.help-video-modal[data-v-7446c005]  .s-modal_wrapper .s-modal_main .s-modal_head .s-icon{color:#fff;position:absolute;right:24px;top:7px;transform:scale(.8)}.help-video-modal[data-v-7446c005]  .s-modal_wrapper .s-modal_main .s-modal_head .s-icon:hover{color:#eee}.help-video-modal[data-v-7446c005]  .s-modal_wrapper .s-modal_main .s-modal_body{padding:0}.help-video-modal[data-v-7446c005]  .s-modal_wrapper .s-modal_main .s-modal_body video{width:100%}.help-video-modal[data-v-7446c005]  .s-modal_wrapper .s-modal_main .s-modal_foot{display:none}",
          "",
        ]),
        (t.exports = e);
    },
    c9cb: function (t, e, a) {
      t.exports = a.p + "img/ssl.tip.ee1e5c89.svg";
    },
    ce2f: function (t, e, a) {
      var o = a("24fb");
      (e = o(!1)),
        e.push([
          t.i,
          ".keyboard-tutorial[data-v-08e109f0]  .s-modal_head{font-size:16px;line-height:16px}.keyboard-tutorial[data-v-08e109f0]  .s-modal_body{padding:30px}.keyboard-tutorial[data-v-08e109f0]  .s-modal_foot{display:none}",
          "",
        ]),
        (t.exports = e);
    },
    ce88: function (t, e, a) {
      var o = a("24fb");
      (e = o(!1)),
        e.push([
          t.i,
          ".vt-progress[data-v-689f6fa2]{width:100%}.vt-progress .vt-progress-bar[data-v-689f6fa2]{height:11px;padding:4px 0}.vt-progress .vt-progress-bar .vt-progress-bg[data-v-689f6fa2]{height:100%;background-color:#909ab1}.vt-progress .vt-progress-bar .vt-progress-bg .vt-progress-active[data-v-689f6fa2]{height:100%;background-color:#fff}.vt-progress .vt-progress-track[data-v-689f6fa2]{width:calc(100% - 11px);position:relative}.vt-progress .vt-progress-track .vt-progress-ball[data-v-689f6fa2]{position:absolute;top:-11px;width:11px;height:11px;border-radius:50%;background-color:#fff}.vt-progress.vt-progress-vertical[data-v-689f6fa2]{height:100%;display:flex;position:relative}.vt-progress.vt-progress-vertical .vt-progress-bar[data-v-689f6fa2]{height:100%;position:relative;padding:0 4px;width:11px}.vt-progress.vt-progress-vertical .vt-progress-bar .vt-progress-bg[data-v-689f6fa2]{position:relative;width:100%}.vt-progress.vt-progress-vertical .vt-progress-bar .vt-progress-bg .vt-progress-active[data-v-689f6fa2]{position:absolute;bottom:0;height:0;width:100%}.vt-progress.vt-progress-vertical .vt-progress-track[data-v-689f6fa2]{position:absolute;width:0;bottom:0;height:calc(100% - 11px)}.vt-progress.vt-progress-vertical .vt-progress-track .vt-progress-ball[data-v-689f6fa2]{top:auto;bottom:0}.vt-progress[data-v-689f6fa2]:hover{cursor:pointer}",
          "",
        ]),
        (t.exports = e);
    },
    d49a: function (t, e, a) {
      var o = a("24fb");
      (e = o(!1)),
        e.push([
          t.i,
          ".tc-tutorial[data-v-26253f2e]  .s-modal_head{font-size:16px;line-height:16px}.tc-tutorial[data-v-26253f2e]  .s-modal_body{padding:10px 30px 20px}.tc-tutorial[data-v-26253f2e]  .s-modal_body .tutorial-carousel .carousel-body .carousel-item .carousel-item-title{margin-bottom:10px}.tc-tutorial[data-v-26253f2e]  .s-modal_body .tutorial-carousel .carousel-body .carousel-item .carousel-item-content{border:none}.tc-tutorial[data-v-26253f2e]  .s-modal_body .tc-tutorial-close{position:absolute;right:0;bottom:-8px}.tc-tutorial[data-v-26253f2e]  .s-modal_foot{display:none}",
          "",
        ]),
        (t.exports = e);
    },
    d574: function (t, e, a) {
      "use strict";
      a.d(e, "b", function () {
        return r;
      }),
        a.d(e, "a", function () {
          return n;
        });
      var o = function (t) {
          return "EASYDL_PRO_ONCE_".concat(t);
        },
        r = function (t) {
          return window.localStorage.setItem(o(t), "yes");
        },
        n = function (t) {
          return !!window.localStorage.getItem(o(t));
        };
    },
    dc39: function (t, e, a) {
      t.exports = a.p + "img/textComments1.3433eba5.png";
    },
    e6bd: function (t, e, a) {
      t.exports = a.p + "img/textComments2.fb479fdb.png";
    },
    f919: function (t, e, a) {
      var o = a("24fb");
      (e = o(!1)),
        e.push([
          t.i,
          ".ssl-tip-modal[data-v-558fe08e]  .s-modal_main{width:800px}.ssl-tip-modal[data-v-558fe08e]  .s-modal_head{padding-bottom:20px}.ssl-tip-modal[data-v-558fe08e]  .s-modal_head .close{position:absolute;right:24px;top:14px}.ssl-tip-modal[data-v-558fe08e]  .s-modal_body{background:#e8e9eb;padding:20px 24px}.ssl-tip-modal[data-v-558fe08e]  .s-modal_foot{text-align:right}.ssl-tip-modal[data-v-558fe08e]  .s-modal_foot .s-modal_foot_inner{height:84px;line-height:84px}.ssl-tip-modal .content[data-v-558fe08e]{width:640px;margin:0 auto}.ssl-tip-modal .content .ssl-tip-carousel[data-v-558fe08e]  .carousel-body{width:640px}.ssl-tip-modal .content .ssl-tip-carousel[data-v-558fe08e]  .carousel-body .carousel-item-content{border:none}.ssl-tip-modal .content .ssl-tip-carousel[data-v-558fe08e]  .carousel-body .carousel-item-content img{max-width:100%;width:640px;height:260px}.ssl-tip-modal .ssl-tip-modal-title[data-v-558fe08e]{padding:2px 0 16px;font-size:16px;color:#333}.ssl-tip-modal .ssl-tip-modal-alert[data-v-558fe08e]{padding:8px 16px;font-size:14px;line-height:1.5;color:#666;background-color:#f2f9ff;border:1px solid #9cd1ff}.ssl-tip-modal .btn-close[data-v-558fe08e]{height:36px}",
          "",
        ]),
        (t.exports = e);
    },
    f9a6: function (t, e, a) {
      t.exports = a.p + "img/right.a4605a5c.svg";
    },
    fd5b: function (t, e, a) {
      t.exports = a.p + "img/left.deaa028a.svg";
    },
    fdb3: function (t, e, a) {
      "use strict";
      var o = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "the-modal",
            {
              ref: "modal",
              staticClass: "tc-tutorial",
              attrs: { centered: "" },
            },
            [
              a("template", { slot: "head" }, [t._v("评论观点标注步骤")]),
              a("template", { slot: "body" }, [
                a(
                  "div",
                  { staticClass: "content" },
                  [
                    a(
                      "tutorial-carousel",
                      {
                        attrs: { items: t.tutorialItems },
                        on: {
                          change: function (e) {
                            return (t.carouselIndex = e);
                          },
                        },
                      },
                      [
                        a(
                          "template",
                          { slot: "bottom" },
                          [
                            a(
                              "the-button",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: t.closeVisible,
                                    expression: "closeVisible",
                                  },
                                ],
                                staticClass: "tc-tutorial-close",
                                on: { click: t.close },
                              },
                              [t._v("知道了")]
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
              ]),
            ],
            2
          );
        },
        r = [],
        n = a("f24d"),
        i = a("8165"),
        c = a("6c2b"),
        s = Object(i["defineComponent"])({
          name: "tcTutorial",
          components: { TutorialCarousel: c["a"] },
          setup: function () {
            var t = [
                { title: "选取评价片段", img: a("dc39") },
                { title: "使用按钮选取文字", img: a("e6bd") },
                { title: "选取评价对象", img: a("0796") },
              ],
              e = Object(i["ref"])(0),
              o = Object(n["useModalCloser"])(),
              r = o.modal,
              c = o.close;
            return {
              modal: r,
              tutorialItems: t,
              carouselIndex: e,
              close: c,
              closeVisible: Object(i["computed"])(function () {
                return t.length === e.value + 1;
              }),
            };
          },
        }),
        l = s,
        u = (a("8efe"), a("2877")),
        d = Object(u["a"])(l, o, r, !1, null, "26253f2e", null);
      e["a"] = d.exports;
    },
  },
]);
//# sourceMappingURL=standalone-keyboard.79af476d.js.map
