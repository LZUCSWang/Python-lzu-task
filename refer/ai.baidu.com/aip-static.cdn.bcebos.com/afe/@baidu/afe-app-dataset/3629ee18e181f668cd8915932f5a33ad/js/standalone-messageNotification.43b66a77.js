(window["webpackJsonpdataset"] = window["webpackJsonpdataset"] || []).push([
  ["standalone-messageNotification"],
  {
    "4c08": function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "default", function () {
          return w;
        });
      var r = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return e.showInfoValue
            ? a(
                "the-tip",
                {
                  staticClass: "side-bar-notify",
                  attrs: { placement: "right" },
                },
                [
                  a("span", { staticClass: "side-bar-notify-span" }),
                  a("div", { attrs: { slot: "popper" }, slot: "popper" }, [
                    e.showInfo[0]
                      ? a("span", [
                          e._v(" " + e._s(e.showInfo[0]) + "条任务状态已更新"),
                        ])
                      : e._e(),
                    e.showInfo[0] && e.showInfo[1] ? a("br") : e._e(),
                    e.showInfo[1]
                      ? a("span", [
                          e._v(e._s(e.showInfo[1]) + "条分配任务待接收"),
                        ])
                      : e._e(),
                  ]),
                ]
              )
            : e._e();
        },
        n = [],
        o = (a("13d5"), a("ade3")),
        i = a("8165"),
        s = a("cda8"),
        d = Object(s["a"])({
          INTERACTIVE: { id: "1", label: "智能标注" },
          ETLMANAGE: { id: "2", label: "清洗任务" },
          RECEIVED: { id: "3", label: "多人标注-标注员" },
          CREATED: { id: "4", label: "多人标注-管理员" },
        }),
        p = (a("4de4"), a("4160"), a("159b"), a("96cf"), a("1da1")),
        c = a("08ba"),
        f = {
          timer: null,
          listeners: [],
          onUpdate: function (e) {
            return Object(p["a"])(
              regeneratorRuntime.mark(function t() {
                var a;
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (!localStorage.getItem("TASK_NOTIFY_CLOSE")) {
                          t.next = 2;
                          break;
                        }
                        return t.abrupt("return");
                      case 2:
                        if ((f.listeners.push(e), !f.timer)) {
                          t.next = 5;
                          break;
                        }
                        return t.abrupt("return");
                      case 5:
                        (a = (function () {
                          var e = Object(p["a"])(
                            regeneratorRuntime.mark(function e() {
                              var t, a, r;
                              return regeneratorRuntime.wrap(function (e) {
                                while (1)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (t = Object(c["useService"])()),
                                        (a = t.datasetService),
                                        (e.next = 3),
                                        a.fetchMessage()
                                      );
                                    case 3:
                                      (r = e.sent),
                                        f.listeners.forEach(function (e) {
                                          return e(r);
                                        });
                                    case 5:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })()),
                          (f.timer = setInterval(a, 2e4)),
                          a();
                      case 8:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          dispose: function (e) {
            (f.listeners = f.listeners.filter(function (t) {
              return t !== e;
            })),
              f.listeners.length || clearInterval(f.timer);
          },
        },
        l = Object(i["defineComponent"])({
          props: { routeName: { type: String, required: !0 } },
          setup: function (e) {
            var t,
              a = Object(i["reactive"])(
                ((t = {}),
                Object(o["a"])(t, d.INTERACTIVE, 0),
                Object(o["a"])(t, d.ETLMANAGE, 0),
                Object(o["a"])(t, d.RECEIVED, 0),
                Object(o["a"])(t, d.CREATED, 0),
                t)
              ),
              r = function (e) {
                Object.assign(a, e);
              };
            f.onUpdate(r);
            var n = {
                INTERACTIVE: "智能标注",
                MULANTASKLIST: "多人标注",
                ETLMANAGE: "清洗任务管理",
              },
              s = Object(i["computed"])(function () {
                var t,
                  r =
                    ((t = {}),
                    Object(o["a"])(t, n.INTERACTIVE, [a[d.INTERACTIVE]]),
                    Object(o["a"])(t, n.ETLMANAGE, [a[d.ETLMANAGE]]),
                    Object(o["a"])(t, n.MULANTASKLIST, [
                      a[d.CREATED],
                      a[d.RECEIVED],
                    ]),
                    t);
                return r[e.routeName] || [];
              }),
              p = Object(i["computed"])(function () {
                return s.value.length
                  ? s.value.reduce(function (e, t) {
                      return e + t;
                    })
                  : 0;
              });
            return (
              Object(i["onBeforeUnmount"])(function () {
                f.dispose(r);
              }),
              { showInfo: s, showInfoValue: p }
            );
          },
        }),
        u = l,
        v = (a("f5ca"), a("2877")),
        b = Object(v["a"])(u, r, n, !1, null, "07fee5dd", null),
        w = b.exports;
    },
    "670a": function (e, t, a) {
      var r = a("cfbf");
      "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var n = a("499e").default;
      n("6a2e77da", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    cfbf: function (e, t, a) {
      var r = a("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          ".text-ellipsis[data-v-07fee5dd]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ops-wrap[data-v-07fee5dd]{display:flex;flex:0 0 min-content}.ops-wrap li[data-v-07fee5dd]{color:var(--cxd-blue);cursor:pointer}.ops-wrap li[data-v-07fee5dd]:not(:last-child){margin-right:10px}.eg-tooltip .radio-tip[data-v-07fee5dd]{color:#333;max-width:336px}.eg-tooltip .text-tip[data-v-07fee5dd]{color:#333;max-width:380px}.eg-tooltip .unique-tip[data-v-07fee5dd]{max-width:160px;margin:0}.eg-tooltip.eg-popper.w300[data-v-07fee5dd]{width:300px}.eg-button.priv[data-v-07fee5dd]{margin:10px 0 10px 16px}.eg-button.priv[data-v-07fee5dd]:first-of-type{margin-left:0}.eg-select.w300-sel[data-v-07fee5dd]{width:300px}.eg-select.w130-sel[data-v-07fee5dd]{width:130px}[data-v-07fee5dd] .eg-select.block .eg-hack-popper-wrapper{display:block}.afe-app-dataset.dataset-footer-wrap[data-v-07fee5dd]{display:flex}.afe-app-dataset .eg-form .eg-form-item[data-v-07fee5dd]{margin:24px 0 0 0}.eg-form>.eg-form-item[data-v-07fee5dd]:first-of-type{margin-top:0}.side-bar-notify[data-v-07fee5dd]{position:relative;top:-5px;left:-4px}.side-bar-notify-span[data-v-07fee5dd]{display:inline-block;width:8px;height:8px;border-radius:4px;position:absolute;top:-15px;left:6px;margin-left:3px;background-color:#f55}.side-bar-notify[data-v-07fee5dd]  .s-tip_popper_content{font-size:14px;color:#000;font-weight:400;width:145px}",
          "",
        ]),
        (e.exports = t);
    },
    f5ca: function (e, t, a) {
      "use strict";
      var r = a("670a"),
        n = a.n(r);
      n.a;
    },
  },
]);
//# sourceMappingURL=standalone-messageNotification.43b66a77.js.map
