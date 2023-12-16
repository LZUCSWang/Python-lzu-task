(function (e, t) {
  if ("object" === typeof exports && "object" === typeof module)
    module.exports = t(
      require("@baidu/afe-easycom"),
      require("@baidu/afe-i18n"),
      require("@baidu/afe-request"),
      require("@baidu/afe-utils"),
      require("@baidu/data-share"),
      require("@baidu/ergo-ui-vue2"),
      require("@baidu/tianzhi-ui"),
      require("@baidu/tianzhi.afe-route-enhancement"),
      require("@vue/composition-api"),
      require("vue"),
      require("vue-router"),
      require("vuex")
    );
  else if ("function" === typeof define && define.amd)
    define([
      "@baidu/afe-easycom",
      "@baidu/afe-i18n",
      "@baidu/afe-request",
      "@baidu/afe-utils",
      "@baidu/data-share",
      "@baidu/ergo-ui-vue2",
      "@baidu/tianzhi-ui",
      "@baidu/tianzhi.afe-route-enhancement",
      "@vue/composition-api",
      "vue",
      "vue-router",
      "vuex",
    ], t);
  else {
    var n =
      "object" === typeof exports
        ? t(
            require("@baidu/afe-easycom"),
            require("@baidu/afe-i18n"),
            require("@baidu/afe-request"),
            require("@baidu/afe-utils"),
            require("@baidu/data-share"),
            require("@baidu/ergo-ui-vue2"),
            require("@baidu/tianzhi-ui"),
            require("@baidu/tianzhi.afe-route-enhancement"),
            require("@vue/composition-api"),
            require("vue"),
            require("vue-router"),
            require("vuex")
          )
        : t(
            e["@baidu/afe-easycom"],
            e["@baidu/afe-i18n"],
            e["@baidu/afe-request"],
            e["@baidu/afe-utils"],
            e["@baidu/data-share"],
            e["@baidu/ergo-ui-vue2"],
            e["@baidu/tianzhi-ui"],
            e["@baidu/tianzhi.afe-route-enhancement"],
            e["@vue/composition-api"],
            e["vue"],
            e["vue-router"],
            e["vuex"]
          );
    for (var o in n) ("object" === typeof exports ? exports : e)[o] = n[o];
  }
})(self, function (e, t, n, o, i, a, r, s, l, c, u, d) {
  return (function () {
    var p = {
        11375: function (e, t, n) {
          var o = {
            "./common.ai.t.yml": 21220,
            "./common.client.t.yml": 78721,
            "./common.cmg_1.0.t.yml": 68195,
            "./common.geely_1.0.t.yml": 80781,
            "./common.ningbo.t.yml": 29918,
            "./common.public.t.yml": 24599,
            "./common.wx.t.yml": 34161,
            "./dataset.ai.t.yml": 95294,
            "./dataset.client.t.yml": 88532,
            "./dataset.cmg_1.0.t.yml": 68960,
            "./dataset.geely_1.0.t.yml": 1132,
            "./dataset.ningbo.t.yml": 84173,
            "./dataset.public.t.yml": 80325,
            "./deploy.ai.t.yml": 39889,
            "./deploy.client.t.yml": 92836,
            "./deploy.cmg_1.0.t.yml": 467,
            "./deploy.geely_1.0.t.yml": 87324,
            "./deploy.ningbo.t.yml": 3216,
            "./deploy.public.t.yml": 95031,
            "./service.ai.t.yml": 15731,
            "./service.client.t.yml": 32242,
            "./service.cmg_1.0.t.yml": 9791,
            "./service.geely_1.0.t.yml": 89280,
            "./service.ningbo.t.yml": 36234,
            "./service.public.t.yml": 64873,
            "./train.ai.t.yml": 72993,
            "./train.client.t.yml": 51334,
            "./train.cmg_1.0.t.yml": 48842,
            "./train.geely_1.0.t.yml": 47930,
            "./train.ningbo.t.yml": 57918,
            "./train.public.t.yml": 2047,
          };
          function i(e) {
            var t = a(e);
            return n(t);
          }
          function a(e) {
            if (!n.o(o, e)) {
              var t = new Error("Cannot find module '" + e + "'");
              throw ((t.code = "MODULE_NOT_FOUND"), t);
            }
            return o[e];
          }
          (i.keys = function () {
            return Object.keys(o);
          }),
            (i.resolve = a),
            (e.exports = i),
            (i.id = 11375);
        },
        75270: function (e, t, n) {
          var o = {
            "./common.public.t.yml": 24599,
            "./dataset.public.t.yml": 80325,
            "./deploy.public.t.yml": 95031,
            "./service.public.t.yml": 64873,
            "./train.public.t.yml": 2047,
          };
          function i(e) {
            var t = a(e);
            return n(t);
          }
          function a(e) {
            if (!n.o(o, e)) {
              var t = new Error("Cannot find module '" + e + "'");
              throw ((t.code = "MODULE_NOT_FOUND"), t);
            }
            return o[e];
          }
          (i.keys = function () {
            return Object.keys(o);
          }),
            (i.resolve = a),
            (e.exports = i),
            (i.id = 75270);
        },
        36317: function (e, t, n) {
          "use strict";
          n.r(t),
            n.d(t, {
              default: function () {
                return w;
              },
            });
          var o = function () {
              var e = this,
                t = e.$createElement,
                n = e._self._c || t;
              return n("NotFoundPage");
            },
            i = [],
            a = n(47253),
            r = n(70748),
            s = n.n(r);
          const l = new (s())({
              data() {
                return { notFound: !1 };
              },
            }),
            c = () => l.notFound,
            u = () => {
              l.notFound = !1;
            };
          var d = function () {
              var e = this,
                t = e.$createElement,
                n = e._self._c || t;
              return n("div", { staticClass: "page-404" }, [
                e._v("Sorry, not found."),
              ]);
            },
            p = [],
            m = n(25442),
            f = n(23644),
            T = (0, a.defineComponent)({
              setup(e) {
                const t = (0, f.useT)();
                return (0, m.fb)(() => [t("unknown")]), {};
              },
            }),
            y = T,
            g = n(1001),
            h = n(93001),
            v = n.n(h),
            _ = v(),
            E = (0, g.Z)(y, d, p, !1, null, null, null);
          "function" === typeof _ && _(E);
          var L = E.exports,
            b = function () {
              var e = this,
                t = e.$createElement,
                n = e._self._c || t;
              return e.isNotFound
                ? n("NotFoundPage")
                : n("main", [e._t("default")], 2);
            },
            S = [],
            P = (0, a.defineComponent)({
              components: { NotFoundPage: L },
              setup(e, { root: t }) {
                return (
                  (0, a.watch)(() => t.$route, u),
                  { isNotFound: (0, a.computed)(c) }
                );
              },
            }),
            I = P,
            C = (0, g.Z)(I, b, S, !1, null, null, null),
            A =
              (C.exports,
              (0, a.defineComponent)({
                layout: "nav-only",
                components: { NotFoundPage: L },
                setup(e, t) {
                  return {};
                },
              })),
            N = A,
            O = (0, g.Z)(N, o, i, !1, null, null, null),
            w = O.exports;
        },
        73025: function (e, t, n) {
          "use strict";
          n.d(t, {
            GJ: function () {
              return l;
            },
            a$: function () {
              return u;
            },
            fb: function () {
              return c;
            },
            vm: function () {
              return s;
            },
          });
          var o = n(47253),
            i = n(70748),
            a = n.n(i);
          const r = (e) =>
              "string" === typeof e
                ? { label: e }
                : e.name
                ? { ...e, label: e.name }
                : e,
            s = new (a())({
              data() {
                return { list: [], routeName: "", back: void 0 };
              },
            }),
            l = (e, t) => {
              const n = Array.isArray(e) ? e : [e];
              (s.list = n.map(r)), (s.back = t);
            },
            c = (e) => {
              const t = (0, o.computed)(e);
              (0, o.watch)(t, (e) => l(e)),
                (0, o.onBeforeMount)(() => {
                  l(t.value);
                });
            },
            u = (e) => {
              s.routeName = e;
            };
        },
        25442: function (e, t, n) {
          "use strict";
          n.d(t, {
            GJ: function () {
              return l.GJ;
            },
            fb: function () {
              return l.fb;
            },
          });
          var o = function () {
              var e = this,
                t = e.$createElement,
                n = e._self._c || t;
              return n(
                "nav",
                { staticClass: "breadcrumb" },
                [
                  n(
                    "div",
                    { staticClass: "breadcrumb-left" },
                    [
                      e.showBack
                        ? n("span", { staticClass: "breadcrumb-back" }, [
                            n(
                              "a",
                              {
                                attrs: { href: "javascript:void(0)" },
                                on: { click: e.goBack },
                              },
                              [n("plain-left"), e._v(" " + e._s(e.$t("back")))],
                              1
                            ),
                          ])
                        : e._e(),
                      n(
                        "eg-breadcrumb",
                        [
                          e.showing
                            ? e._e()
                            : n("i", {
                                staticClass: "show-sidebar-icon",
                                on: { click: e.show },
                              }),
                          e._l(e.collection, function (t, o) {
                            return n(
                              "eg-breadcrumb-item",
                              { key: t.label + "-" + o, attrs: { to: t.to } },
                              [e._v(" " + e._s(t.label) + " ")]
                            );
                          }),
                        ],
                        2
                      ),
                      n(
                        "div",
                        { staticClass: "breadcrumb-append" },
                        [
                          n("portal-target", {
                            attrs: { name: "breadcrumb-append" },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  e.miniAppcontorl
                    ? e._e()
                    : n("links", {
                        staticClass: "helps",
                        attrs: { "normalized-links": e.normalizedLinks },
                      }),
                ],
                1
              );
            },
            i = [],
            a = (n(57658), n(32121)),
            r = n(47253),
            s = n(80963),
            l = n(73025),
            c = function () {
              var e = this,
                t = e.$createElement,
                n = e._self._c || t;
              return n(
                "div",
                e._l(e.normalizedLinks, function (t) {
                  return n(
                    "the-link",
                    {
                      key: t.name,
                      ref: "noopener",
                      refInFor: !0,
                      attrs: { href: t.href, target: "_blank" },
                      on: { click: t.onClick },
                    },
                    [e._v(" " + e._s(t.name) + " ")]
                  );
                }),
                1
              );
            },
            u = [],
            d = (0, r.defineComponent)({
              props: { normalizedLinks: { type: Array, default: () => [] } },
              setup() {
                return {};
              },
            }),
            p = d,
            m = n(1001),
            f = (0, m.Z)(p, c, u, !1, null, "9bbde8be", null),
            T = f.exports,
            y = n(8012);
          const g = () => {},
            h = { label: "", isSep: !0 },
            v = {
              name: "用户",
              avatar: "//himg.bdimg.com/sys/portraith/item/cf53273b.jpg",
            };
          var _ = (0, r.defineComponent)({
              components: { Links: T, PlainLeft: y.Z },
              props: { links: { type: Array, default: () => [] } },
              setup(e, { root: t }) {
                const n = (0, r.computed)(() => l.vm.list),
                  { router: o } = (0, a.useRouter)(),
                  i = (0, r.computed)(() => {
                    var e;
                    return null === (e = l.vm.back) || void 0 === e
                      ? void 0
                      : e.visible;
                  }),
                  c = () => {
                    var e;
                    const t =
                      null === (e = l.vm.back) || void 0 === e ? void 0 : e.to;
                    t ? o.push(t) : o.back();
                  },
                  u = (0, a.useStore)();
                (0, r.watch)(
                  () => t.$route.name,
                  (e) => {
                    e && (0, l.a$)(e || "");
                  },
                  { immediate: !0 }
                );
                const d = (0, r.computed)(() =>
                  e.links
                    .filter((e) => e.href || e.onClick)
                    .map((e) => ({ ...e, onClick: e.onClick || g }))
                );
                return {
                  ...(0, s.el)(u),
                  normalizedLinks: d,
                  collection: n,
                  showBack: i,
                  goBack: c,
                  SEP: h,
                  noop: g,
                  miniAppcontorl: (0, r.computed)(() =>
                    ["/annotate", "/dataset"].some((e) =>
                      t.$route.path.startsWith(e)
                    )
                  ),
                  name: (0, r.computed)(
                    () => u.state.user.displayName || v.name
                  ),
                };
              },
            }),
            E = _,
            L = n(71359),
            b = n.n(L),
            S = b(),
            P = (0, m.Z)(E, o, i, !1, null, null, null);
          "function" === typeof S && S(P);
          P.exports;
        },
        80963: function (e, t, n) {
          "use strict";
          n.d(t, {
            ZP: function () {
              return Ne;
            },
            XH: function () {
              return I;
            },
            el: function () {
              return S;
            },
          });
          var o = function () {
              var e = this,
                t = e.$createElement,
                o = e._self._c || t;
              return o(
                "aside",
                { staticClass: "sidebar", class: { mini: !e.showing } },
                [
                  o(
                    "div",
                    { staticClass: "menu-title" },
                    [
                      o(
                        "router-link",
                        {
                          staticClass: "menu-title-link",
                          attrs: { to: e.headline.to },
                        },
                        [
                          o(e.headline.icon, {
                            tag: "component",
                            staticClass: "icon",
                          }),
                          e.showing
                            ? o("tooltip-over", {
                                attrs: {
                                  content: e.headline.name,
                                  tipStyle: e.tipStyle,
                                },
                              })
                            : e._e(),
                        ],
                        1
                      ),
                      o("IconSwitchModel", {
                        tag: "component",
                        staticClass: "switch-icon",
                        on: { click: e.openModelCenter },
                      }),
                    ],
                    1
                  ),
                  o(
                    "div",
                    { staticClass: "side-menu-wrap" },
                    [
                      o("SideMenu", {
                        attrs: {
                          routes: e.routes,
                          bestMatchOne: e.menu.bestMatchOne,
                        },
                      }),
                    ],
                    1
                  ),
                  o(
                    "div",
                    { staticClass: "menu-toggle" },
                    [
                      e.showing
                        ? o("img", {
                            staticClass: "icon",
                            attrs: { src: n(98011) },
                            on: { click: e.hide },
                          })
                        : o("img", {
                            staticClass: "icon",
                            attrs: { src: n(70227) },
                            on: { click: e.show },
                          }),
                      o("TransitionWrap", [
                        e.showing
                          ? o(
                              "span",
                              { staticClass: "txt", on: { click: e.hide } },
                              [e._v("展开/收起")]
                            )
                          : e._e(),
                      ]),
                    ],
                    1
                  ),
                ]
              );
            },
            i = [],
            a = n(47253),
            r = function () {
              var e = this,
                t = e.$createElement,
                n = e._self._c || t;
              return n(
                "transition",
                e._g({ attrs: { name: e.mode } }, e.$listeners),
                [e._t("default")],
                2
              );
            },
            s = [],
            l = (0, a.defineComponent)({
              props: { mode: { type: String, default: "fade" } },
            }),
            c = l,
            u = n(1001),
            d = (0, u.Z)(c, r, s, !1, null, null, null),
            p = d.exports,
            m = function () {
              var e = this,
                t = e.$createElement,
                n = e._self._c || t;
              return n(
                "eg-menu",
                {
                  staticClass: "side-menu",
                  class: { open: e.showing },
                  attrs: {
                    mode: "vertical",
                    router: "",
                    defaultActive: e.activeLink,
                    defaultOpeneds: e.defaultOpenArr,
                    collapse: !e.showing,
                    "collapse-transition": !1,
                    "popper-class": "side-popper-menu",
                  },
                },
                [
                  n("menu-tree", {
                    attrs: { menuData: e.routes, showing: e.showing },
                  }),
                ],
                1
              );
            },
            f = [],
            T = n(32121),
            y = n(62396);
          const g = (0, T.usePMService)(),
            h = (e, t) => {
              const n = (0, T.useStore)(),
                o = (0, a.computed)(() =>
                  ["/overview", "/"].includes(e.value.path)
                ),
                i = (0, a.computed)(() => {
                  var e;
                  return null === (e = t.value) || void 0 === e
                    ? void 0
                    : e.reduce((e, t) => {
                        var n, o;
                        const i =
                          null === (n = t.children) || void 0 === n
                            ? void 0
                            : n.reduce(
                                (e, t) => e.concat(t.children ? t.children : t),
                                []
                              );
                        return null !== (o = t.children) &&
                          void 0 !== o &&
                          o.length
                          ? e.concat(i)
                          : e.concat(t);
                      }, []);
                }),
                { mt: r, firstTemplateType: s } = (0, T.useGlobalInfo)(e.value),
                l = (0, y.kk)(+r, +s),
                c = (0, a.computed)(() =>
                  "codename-jumpTo" === e.value.name
                    ? e.value.query.oldPath
                    : e.value.path.replace(
                        g.getModulePermission("isPublic")
                          ? l
                          : `${(0, y.Nc)({ ...n.state, codename: l }).url}`,
                        `${r}/${s}`
                      )
                ),
                u = (0, a.computed)(() =>
                  i.value.find((e) => {
                    var t;
                    return null === (t = e.activeReg) || void 0 === t
                      ? void 0
                      : t.test(c.value);
                  })
                ),
                d = (0, a.computed)(() => {
                  if (o.value) return t;
                  const e = t.value.map((e) => ({
                    ...e,
                    children: e.children,
                  }));
                  return e;
                });
              return (0, a.reactive)({
                sidebarInfo: d,
                bestMatchOne: u,
                isBrowsingOverview: o,
              });
            };
          n(57658);
          var v,
            _ = n(43031);
          (function (e) {
            (e["VIS"] = "vis"),
              (e["NLP"] = "nlp"),
              (e["SOUND"] = "sound"),
              (e["VIDEO"] = "video"),
              (e["TABLE"] = "table"),
              (e["INDUSTRY"] = "industry"),
              (e["UNKNOWN"] = "unknown");
          })(v || (v = {}));
          _.TemplateType.IMG_CLS,
            v.VIS,
            _.TemplateType.IMG_CLS_MULTI,
            v.VIS,
            _.TemplateType.OBJ_DCT,
            v.VIS,
            _.TemplateType.SOUND_CLS,
            v.SOUND,
            _.TemplateType.TEXT_CLS,
            v.NLP,
            _.TemplateType.TEXT_CLS_MULTI,
            v.NLP,
            _.TemplateType.TEXT_CLS_ERNIE_DOC,
            v.NLP,
            _.TemplateType.TEXT_CLS_ERNIE_M,
            v.NLP,
            _.TemplateType.INSTANCE_SEGMENT,
            v.VIS,
            _.TemplateType.VIDEO_CLS,
            v.VIDEO,
            _.TemplateType.TEXT_SIM,
            v.NLP,
            _.TemplateType.TEXT_SEQ_IOB,
            v.NLP,
            _.TemplateType.TEXT_SEQ_IO,
            v.NLP,
            _.TemplateType.TEXT_SEQ_IOE,
            v.NLP,
            _.TemplateType.TEXT_SEQ_IOBES,
            v.NLP,
            _.TemplateType.SENTIMENT,
            v.NLP,
            _.TemplateType.TEXT_ENTITY_EXTRACT,
            v.NLP,
            _.TemplateType.TEXT_RELATION_EXTRACT,
            v.NLP,
            _.TemplateType.VIDEO_TRACKING,
            v.VIDEO,
            _.TemplateType.ML,
            v.TABLE,
            _.TemplateType.TIME_SERIES_FORECAST,
            v.TABLE,
            _.TemplateType.ELC_FORECAST,
            v.INDUSTRY,
            _.TemplateType.RETAIL,
            v.UNKNOWN,
            _.TemplateType.RETAIL_DD,
            v.UNKNOWN,
            _.TemplateType.OCR,
            v.UNKNOWN,
            _.TemplateType.CUSTOM,
            v.UNKNOWN,
            _.TemplateType.TEXT_CUSTOM,
            v.UNKNOWN;
          var E = n(21274);
          const L = "public",
            b = "wx" === L,
            S = (e) => {
              const t = (0, a.computed)(() => e.state.sidebarShowing);
              return (
                (0, a.watch)(t, (e) => {
                  document.documentElement.style.setProperty(
                    "--sidebarWidth",
                    e ? "180px" : "60px"
                  );
                }),
                {
                  showing: t,
                  show: () => {
                    e.commit("setSidebarShowing", !0);
                  },
                  hide: () => {
                    e.commit("setSidebarShowing", !1);
                  },
                }
              );
            },
            P = () => {
              const e = b
                  ? [
                      E.hv["model-group"],
                      E.hv["dataset-group"],
                      E.hv["public-deploy-group"],
                    ]
                  : [
                      E.hv["model-group"],
                      E.hv["dataset-group"],
                      E.hv["public-deploy-group"],
                      E.hv["market-group"],
                      E.hv["sku-management-group"],
                      E.hv["retail-service-group"],
                      E.hv["retail-stitch-group"],
                      E.hv["edge-deploy-group"],
                      E.hv["jsdk-group"],
                      E.hv["bie-ecc"],
                    ],
                t = e.map((e) => e.toString());
              return t;
            },
            I = {
              [_.ProjectType.IMG_CLS]: "IconImage",
              [_.ProjectType.OBJ_DCT]: "IconImage",
              [_.ProjectType.SOUND_CLS]: "IconSound",
              [_.ProjectType.TEXT_CLS]: "IconText",
              [_.ProjectType.VIDEO_CLS]: "IconVideo",
              [_.ProjectType.SEGMENT]: "IconImage",
              [_.ProjectType.TEXT_SIM]: "IconText",
              [_.ProjectType.SENTIMENT]: "IconText",
              [_.ProjectType.TEXT_ENTITY_EXTRACT]: "IconText",
              [_.ProjectType.TEXT_RELATION_EXTRACT]: "IconText",
              [_.ProjectType.VIDEO_TRACKING]: "IconVideo",
              [_.ProjectType.TEXT_NLG]: "IconText",
              [_.ProjectType.TEXT_COMMENT]: "IconText",
              [_.ProjectType.TEXT_ERNIE_BOT]: "IconErnieBot",
              [_.ProjectType.ML]: "IconStructure",
              [_.ProjectType.TIME_SERIES_FORECAST]: "IconStructure",
              [_.ProjectType.RETAIL]: "IconRetail",
              [_.ProjectType.RETAIL_DD]: "IconRetail",
              [_.ProjectType.IMG_TEXT]: "IconModality",
            };
          var C = function () {
              var e = this,
                t = e.$createElement,
                n = e._self._c || t;
              return n(
                "fragment",
                [
                  e._l(e.menuData, function (t) {
                    return [
                      t.children && t.children.length
                        ? n(
                            "eg-submenu",
                            {
                              key: t.key,
                              attrs: { index: t.key.toString() },
                              scopedSlots: e._u(
                                [
                                  {
                                    key: "title",
                                    fn: function () {
                                      return [
                                        n(t.icon, {
                                          tag: "component",
                                          staticClass: "icon",
                                        }),
                                        n("tooltip-over", {
                                          attrs: {
                                            content: t.name,
                                            tipStyle: e.subTitleTipStyle,
                                          },
                                        }),
                                      ];
                                    },
                                    proxy: !0,
                                  },
                                ],
                                null,
                                !0
                              ),
                            },
                            [
                              n("menu-tree", {
                                attrs: {
                                  menuData: t.children,
                                  showing: e.showing,
                                },
                              }),
                            ],
                            1
                          )
                        : n(
                            "eg-menu-item",
                            {
                              key: t.key,
                              class: {
                                "signal-menu-item": !!t.children && !e.showing,
                                "sub-menu-item": !e.showing && !t.icon,
                              },
                              attrs: { index: t.to },
                            },
                            [
                              t.icon
                                ? n(t.icon, {
                                    tag: "component",
                                    staticClass: "icon",
                                  })
                                : e._e(),
                              n("tooltip-over", {
                                attrs: {
                                  content: t.name,
                                  tipStyle: e.subTitleTipStyle,
                                },
                              }),
                            ],
                            1
                          ),
                    ];
                  }),
                ],
                2
              );
            },
            A = [],
            N = function () {
              var e = this,
                t = e.$createElement,
                n = e._self._c || t;
              return n(
                "div",
                { staticClass: "text-tooltip" },
                [
                  n(
                    "eg-tooltip",
                    e._b(
                      {
                        staticClass: "text-tooltip_item",
                        attrs: {
                          effect: "light",
                          disabled: e.isShowTooltip,
                          content: e.content,
                          placement: "top",
                        },
                      },
                      "eg-tooltip",
                      e.$attrs,
                      !1
                    ),
                    [
                      n(
                        "p",
                        {
                          staticClass: "text-tooltip_overflow",
                          style: e.tipStyle,
                          on: {
                            mouseover: function (t) {
                              return e.onMouseOver();
                            },
                          },
                        },
                        [n("span", { ref: "refName" }, [e._v(e._s(e.content))])]
                      ),
                    ]
                  ),
                ],
                1
              );
            },
            O = [],
            w = (0, a.defineComponent)({
              props: {
                content: { type: [Array, String], default: "" },
                className: { type: String, default: "" },
                tipStyle: { type: Object, default: () => ({}) },
              },
              inheritAttrs: !1,
              setup() {
                const e = (0, a.ref)(),
                  t = (0, a.ref)(!1),
                  n = () => {
                    let n = e.value.parentNode.offsetWidth,
                      o = e.value.offsetWidth;
                    t.value = !(o > n);
                  };
                return { isShowTooltip: t, refName: e, onMouseOver: n };
              },
            }),
            x = w,
            M = (0, u.Z)(x, N, O, !1, null, "35f8ef7f", null),
            k = M.exports,
            j = (0, a.defineComponent)({
              name: "MenuTree",
              components: { TooltipOver: k },
              props: {
                menuData: { type: Array, required: !1 },
                showing: { type: Boolean, default: !0 },
              },
              setup() {
                const e = { maxWidth: "90px" };
                return { subTitleTipStyle: e };
              },
            }),
            D = j,
            R = (0, u.Z)(D, C, A, !1, null, "7b40769c", null),
            U = R.exports,
            $ = (0, a.defineComponent)({
              props: {
                routes: { required: !0, type: Array },
                bestMatchOne: { required: !1, type: Object },
              },
              components: { menuTree: U },
              setup(e) {
                const { route: t } = (0, T.useRouter)(),
                  n = (0, T.useStore)(),
                  o = (0, a.computed)(() => t),
                  i = h(
                    o,
                    (0, a.computed)(() => e.routes)
                  ),
                  r = (0, a.computed)(() =>
                    i.bestMatchOne ? i.bestMatchOne.to : "/"
                  ),
                  s = P();
                return { activeLink: r, defaultOpenArr: s, ...S(n) };
              },
            }),
            V = $,
            Z = (0, u.Z)(V, m, f, !1, null, "753a75c2", null),
            B = Z.exports;
          const G = (0, a.defineComponent)({
              setup() {
                const e = (0, a.ref)();
                return (
                  (0, a.onMounted)(() => {
                    e.value &&
                      (e.value.innerHTML =
                        '<path d="M14,11.4889511 C14.2454599,11.4889511 14.4496084,11.6658263 14.4919443,11.8990755 L14.5,11.9889511 L14.5,14 C14.5,14.2454599 14.3231248,14.4496084 14.0898756,14.4919443 L14,14.5 L12.0323421,14.5 C11.7561997,14.5 11.5323421,14.2761424 11.5323421,14 C11.5323421,13.7545401 11.7092173,13.5503916 11.9424665,13.5080557 L12.0323421,13.5 L13.5,13.499 L13.5,11.9889511 C13.5,11.7434913 13.6768752,11.5393428 13.9101244,11.4970068 L14,11.4889511 Z M2,11.4932287 C2.24545989,11.4932287 2.44960837,11.6701039 2.49194433,11.9033531 L2.5,11.9932287 L2.5,13.499 L3.99556726,13.5 C4.24102715,13.5 4.44517563,13.6768752 4.48751159,13.9101244 L4.49556726,14 C4.49556726,14.2454599 4.3186921,14.4496084 4.08544289,14.4919443 L3.99556726,14.5 L2,14.5 C1.75454011,14.5 1.55039163,14.3231248 1.50805567,14.0898756 L1.5,14 L1.5,11.9932287 C1.5,11.7170863 1.72385763,11.4932287 2,11.4932287 Z M8.6945758,7.62514754 C8.88851533,7.4175392 9.21625088,7.4130383 9.4158185,7.61524248 L9.4158185,7.61524248 L12.4360696,10.6753953 C12.7478682,10.9913132 12.5240758,11.526621 12.0802037,11.526621 L12.0802037,11.526621 L3.91979625,11.526621 C3.46780955,11.526621 3.24780096,10.974522 3.57590994,10.6636579 L3.57590994,10.6636579 L6.08806378,8.28353903 C6.29386736,8.08855217 6.62044811,8.1035072 6.80756976,8.31648718 L6.80756976,8.31648718 L7.409,9.001 Z M9.07,8.688 L7.76315248,10.0871156 C7.56136974,10.30312 7.21725499,10.2978697 7.02215598,10.07581 L7.02215598,10.07581 L6.399,9.366 L5.174,10.526 L10.884,10.526 L9.07,8.688 Z M6.9804194,4.19830629 C7.80884652,4.19830629 8.4804194,4.86987917 8.4804194,5.69830629 C8.4804194,6.52673341 7.80884652,7.19830629 6.9804194,7.19830629 C6.15199228,7.19830629 5.4804194,6.52673341 5.4804194,5.69830629 C5.4804194,4.86987917 6.15199228,4.19830629 6.9804194,4.19830629 Z M6.9804194,5.19830629 C6.70427703,5.19830629 6.4804194,5.42216392 6.4804194,5.69830629 C6.4804194,5.97444866 6.70427703,6.19830629 6.9804194,6.19830629 C7.25656177,6.19830629 7.4804194,5.97444866 7.4804194,5.69830629 C7.4804194,5.42216392 7.25656177,5.19830629 6.9804194,5.19830629 Z M4.00615185,1.5 C4.28229422,1.5 4.50615185,1.72385763 4.50615185,2 C4.50615185,2.24545989 4.32927669,2.44960837 4.09602748,2.49194433 L4.00615185,2.5 L2.5,2.5 L2.5,3.99975985 C2.5,4.24521974 2.32312484,4.44936822 2.08987563,4.49170418 L2,4.49975985 C1.75454011,4.49975985 1.55039163,4.32288469 1.50805567,4.08963548 L1.5,3.99975985 L1.5,2 C1.5,1.75454011 1.67687516,1.55039163 1.91012437,1.50805567 L2,1.5 L4.00615185,1.5 Z M14,1.5 C14.2454599,1.5 14.4496084,1.67687516 14.4919443,1.91012437 L14.5,2 L14.5,3.99052079 C14.5,4.26666316 14.2761424,4.49052079 14,4.49052079 C13.7545401,4.49052079 13.5503916,4.31364563 13.5080557,4.08039642 L13.5,3.99052079 L13.5,2.5 L12.0239794,2.5 C11.7785195,2.5 11.574371,2.32312484 11.5320351,2.08987563 L11.5239794,2 C11.5239794,1.75454011 11.7008546,1.55039163 11.9341038,1.50805567 L12.0239794,1.5 L14,1.5 Z" id="形状结合" fill-rule="nonzero"></path>');
                  }),
                  { svg: e }
                );
              },
              render(e) {
                const t = ["icon-image", this.$attrs.class]
                  .filter(Boolean)
                  .join(" ");
                return e(
                  "svg",
                  {
                    ref: "svg",
                    attrs: Object.assign(
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        version: "1.1",
                        viewBox: "0 0 16 16",
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
            }),
            q = (0, a.defineComponent)({
              setup() {
                const e = (0, a.ref)();
                return (
                  (0, a.onMounted)(() => {
                    e.value &&
                      (e.value.innerHTML =
                        '<path d="M14.5,2 C14.7761424,2 15,2.22385763 15,2.5 L15,2.5 L15,13.5 C15,13.7761424 14.7761424,14 14.5,14 L14.5,14 L1.5,14 C1.22385763,14 1,13.7761424 1,13.5 L1,13.5 L1,2.5 C1,2.22385763 1.22385763,2 1.5,2 L1.5,2 Z M5.303,10.106 L2,10.106 L2,13 L5.303,13 L5.303,10.106 Z M9.707,10.106 L6.303,10.106 L6.303,13 L9.707,13 L9.707,10.106 Z M14,10.106 L10.707,10.106 L10.707,13 L14,13 L14,10.106 Z M5.303,6.5 L2,6.5 L2,9.106 L5.303,9.106 L5.303,6.5 Z M9.707,6.5 L6.303,6.5 L6.303,9.106 L9.707,9.106 L9.707,6.5 Z M14,6.5 L10.707,6.5 L10.707,9.106 L14,9.106 L14,6.5 Z M14,3 L2,3 L2,5.5 L14,5.5 L14,3 Z" id="形状结合" fill-rule="nonzero"></path>');
                  }),
                  { svg: e }
                );
              },
              render(e) {
                const t = ["icon-modality", this.$attrs.class]
                  .filter(Boolean)
                  .join(" ");
                return e(
                  "svg",
                  {
                    ref: "svg",
                    attrs: Object.assign(
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        version: "1.1",
                        viewBox: "0 0 16 16",
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
            }),
            F = (0, a.defineComponent)({
              setup() {
                const e = (0, a.ref)();
                return (
                  (0, a.onMounted)(() => {
                    e.value &&
                      (e.value.innerHTML =
                        '<path d="M11.98347,2 C12.1839562,2 12.3622497,2.12835448 12.4421593,2.32124235 L12.4701607,2.40767354 L14.983834,12.9147874 C15.0534183,13.2056483 14.8919286,13.5024783 14.6231367,13.5777757 C14.3842107,13.6447068 14.1409261,13.5140705 14.0409414,13.2799329 L14.0104527,13.1874635 L13.26,10.054 L9.79410989,10.0546611 C8.99453708,12.489866 7.69922754,13.8944469 5.75027662,13.9942855 L5.52461204,14 C3.02573781,14 1,11.8079395 1,9.10389587 C1,8.80344658 1.22508198,8.5598843 1.50273467,8.5598843 C1.78038736,8.5598843 2.00546934,8.80344658 2.00546934,9.10389587 C2.00546934,11.2070409 3.58104319,12.9119769 5.52461204,12.9119769 C7.1987937,12.9119769 8.29176958,11.6667661 8.98115707,9.25476331 L9.05892081,8.97128169 L10.5826642,2.41139739 C10.6318191,2.19978018 10.7918093,2.04351696 10.9854223,2.00775767 L11.0702328,2 L11.98347,2 Z M5.44791929,2 C6.83618275,2 7.96159265,3.21781138 7.96159265,4.72005785 L7.96159265,4.72005785 L7.96159265,9.10355359 C7.96159265,10.6058001 6.83618275,11.8236114 5.44791929,11.8236114 C4.05965583,11.8236114 2.93424594,10.6058001 2.93424594,9.10355359 L2.93424594,9.10355359 L2.93424594,4.72005785 C2.93424594,3.21781138 4.05965583,2 5.44791929,2 Z M5.44791929,3.08802314 C4.61496122,3.08802314 3.93971528,3.81870997 3.93971528,4.72005785 L3.93971528,4.72005785 L3.93971528,9.10355359 C3.93971528,10.0049015 4.61496122,10.7355883 5.44791929,10.7355883 C6.28087737,10.7355883 6.9561233,10.0049015 6.9561233,9.10355359 L6.9561233,9.10355359 L6.9561233,4.72005785 C6.9561233,3.81870997 6.28087737,3.08802314 5.44791929,3.08802314 Z M11.593625,3.08802314 L11.4619085,3.08802314 L10.096,8.966 L13,8.966 L11.593625,3.08802314 Z" id="形状结合" fill-rule="nonzero"></path>');
                  }),
                  { svg: e }
                );
              },
              render(e) {
                const t = ["icon-ocr", this.$attrs.class]
                  .filter(Boolean)
                  .join(" ");
                return e(
                  "svg",
                  {
                    ref: "svg",
                    attrs: Object.assign(
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        version: "1.1",
                        viewBox: "0 0 16 16",
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
            }),
            X = (0, a.defineComponent)({
              setup() {
                const e = (0, a.ref)();
                return (
                  (0, a.onMounted)(() => {
                    e.value &&
                      (e.value.innerHTML =
                        '<path d="M11.98347,2 C12.1839562,2 12.3622497,2.12835448 12.4421593,2.32124235 L12.4701607,2.40767354 L14.983834,12.9147874 C15.0534183,13.2056483 14.8919286,13.5024783 14.6231367,13.5777757 C14.3842107,13.6447068 14.1409261,13.5140705 14.0409414,13.2799329 L14.0104527,13.1874635 L13.26,10.054 L9.79410989,10.0546611 C8.99453708,12.489866 7.69922754,13.8944469 5.75027662,13.9942855 L5.52461204,14 C3.02573781,14 1,11.8079395 1,9.10389587 C1,8.80344658 1.22508198,8.5598843 1.50273467,8.5598843 C1.78038736,8.5598843 2.00546934,8.80344658 2.00546934,9.10389587 C2.00546934,11.2070409 3.58104319,12.9119769 5.52461204,12.9119769 C7.1987937,12.9119769 8.29176958,11.6667661 8.98115707,9.25476331 L9.05892081,8.97128169 L10.5826642,2.41139739 C10.6318191,2.19978018 10.7918093,2.04351696 10.9854223,2.00775767 L11.0702328,2 L11.98347,2 Z M5.44791929,2 C6.83618275,2 7.96159265,3.21781138 7.96159265,4.72005785 L7.96159265,4.72005785 L7.96159265,9.10355359 C7.96159265,10.6058001 6.83618275,11.8236114 5.44791929,11.8236114 C4.05965583,11.8236114 2.93424594,10.6058001 2.93424594,9.10355359 L2.93424594,9.10355359 L2.93424594,4.72005785 C2.93424594,3.21781138 4.05965583,2 5.44791929,2 Z M5.44791929,3.08802314 C4.61496122,3.08802314 3.93971528,3.81870997 3.93971528,4.72005785 L3.93971528,4.72005785 L3.93971528,9.10355359 C3.93971528,10.0049015 4.61496122,10.7355883 5.44791929,10.7355883 C6.28087737,10.7355883 6.9561233,10.0049015 6.9561233,9.10355359 L6.9561233,9.10355359 L6.9561233,4.72005785 C6.9561233,3.81870997 6.28087737,3.08802314 5.44791929,3.08802314 Z M11.593625,3.08802314 L11.4619085,3.08802314 L10.096,8.966 L13,8.966 L11.593625,3.08802314 Z" id="形状结合" fill-rule="nonzero"></path>');
                  }),
                  { svg: e }
                );
              },
              render(e) {
                const t = ["icon-sound", this.$attrs.class]
                  .filter(Boolean)
                  .join(" ");
                return e(
                  "svg",
                  {
                    ref: "svg",
                    attrs: Object.assign(
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        version: "1.1",
                        viewBox: "0 0 16 16",
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
            }),
            z = (0, a.defineComponent)({
              setup() {
                const e = (0, a.ref)();
                return (
                  (0, a.onMounted)(() => {
                    e.value &&
                      (e.value.innerHTML =
                        '<path d="M14.5,2 C14.7761424,2 15,2.22385763 15,2.5 L15,2.5 L15,13.5 C15,13.7761424 14.7761424,14 14.5,14 L14.5,14 L1.5,14 C1.22385763,14 1,13.7761424 1,13.5 L1,13.5 L1,2.5 C1,2.22385763 1.22385763,2 1.5,2 L1.5,2 Z M5.303,10.106 L2,10.106 L2,13 L5.303,13 L5.303,10.106 Z M9.707,10.106 L6.303,10.106 L6.303,13 L9.707,13 L9.707,10.106 Z M14,10.106 L10.707,10.106 L10.707,13 L14,13 L14,10.106 Z M5.303,6.5 L2,6.5 L2,9.106 L5.303,9.106 L5.303,6.5 Z M9.707,6.5 L6.303,6.5 L6.303,9.106 L9.707,9.106 L9.707,6.5 Z M14,6.5 L10.707,6.5 L10.707,9.106 L14,9.106 L14,6.5 Z M14,3 L2,3 L2,5.5 L14,5.5 L14,3 Z" id="形状结合" fill="#000000" fill-rule="nonzero"></path>');
                  }),
                  { svg: e }
                );
              },
              render(e) {
                const t = ["icon-structure", this.$attrs.class]
                  .filter(Boolean)
                  .join(" ");
                return e(
                  "svg",
                  {
                    ref: "svg",
                    attrs: Object.assign(
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        version: "1.1",
                        viewBox: "0 0 16 16",
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
            }),
            Y = (0, a.defineComponent)({
              setup() {
                const e = (0, a.ref)();
                return (
                  (0, a.onMounted)(() => {
                    e.value &&
                      (e.value.innerHTML =
                        '<path d="M13.9745039,1.5 C14.2647274,1.5 14.5,1.73527261 14.5,2.02549608 L14.5,2.02549608 L14.5,13.9745039 C14.5,14.2647274 14.2647274,14.5 13.9745039,14.5 L13.9745039,14.5 L2.02549608,14.5 C1.73527261,14.5 1.5,14.2647274 1.5,13.9745039 L1.5,13.9745039 L1.5,2.02549608 C1.5,1.73527261 1.73527261,1.5 2.02549608,1.5 L2.02549608,1.5 Z M13.4487299,2.55099216 L2.55099216,2.55099216 L2.55099216,13.4487299 L13.4487299,13.4487299 L13.4487299,2.55099216 Z M10.5801857,4.6797368 C10.8500936,4.6797368 11.0688971,4.89854032 11.0688971,5.16844815 C11.0688971,5.43835598 10.8500936,5.6571595 10.5801857,5.6571595 L10.5801857,5.6571595 L8.56753577,5.6571595 L8.56753577,11.616285 C8.56753577,11.9297264 8.31344134,12.1838208 8,12.1838208 C7.68655866,12.1838208 7.43246423,11.9297264 7.43246423,11.616285 L7.43246423,11.616285 L7.43246423,5.6571595 L5.40930433,5.6571595 C5.1393965,5.6571595 4.92059297,5.43835598 4.92059297,5.16844815 C4.92059297,4.89854032 5.1393965,4.6797368 5.40930433,4.6797368 L5.40930433,4.6797368 Z" id="形状结合" fill-rule="nonzero"></path>');
                  }),
                  { svg: e }
                );
              },
              render(e) {
                const t = ["icon-text", this.$attrs.class]
                  .filter(Boolean)
                  .join(" ");
                return e(
                  "svg",
                  {
                    ref: "svg",
                    attrs: Object.assign(
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        version: "1.1",
                        viewBox: "0 0 16 16",
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
            }),
            K = (0, a.defineComponent)({
              setup() {
                const e = (0, a.ref)();
                return (
                  (0, a.onMounted)(() => {
                    e.value &&
                      (e.value.innerHTML =
                        '<path d="M14.5,2 C14.7761424,2 15,2.22385763 15,2.5 L15,2.5 L15,13.5 C15,13.7761424 14.7761424,14 14.5,14 L14.5,14 L1.5,14 C1.22385763,14 1,13.7761424 1,13.5 L1,13.5 L1,2.5 C1,2.22385763 1.22385763,2 1.5,2 L1.5,2 Z M14,5.5 L2,5.5 L2,12.9994681 L14,12.9994681 L14,5.5 Z M7.47914107,6.83397448 L10.4791411,8.83397448 C10.7760076,9.0318855 10.7760076,9.46811375 10.4791411,9.66602477 L7.47914107,11.6660248 C7.14686371,11.887543 6.70179097,11.6493473 6.70179097,11.2499996 L6.70179097,7.24999963 C6.70179097,6.85065193 7.14686371,6.61245623 7.47914107,6.83397448 Z M7.70232246,8.1847906 L7.70232246,10.3167906 L9.30132246,9.2507906 L7.70232246,8.1847906 Z M4.069,2.999 L2,2.99946814 L2,4.49946814 L3.203,4.499 L4.069,2.999 Z M7.854,2.999 L5.224,2.999 L4.358,4.499 L6.988,4.499 L7.854,2.999 Z M11.638,2.999 L9.009,2.999 L8.143,4.499 L10.772,4.499 L11.638,2.999 Z M14,2.99946814 L12.793,2.999 L11.927,4.499 L14,4.49946814 L14,2.99946814 Z" id="形状结合" fill-rule="nonzero"></path>');
                  }),
                  { svg: e }
                );
              },
              render(e) {
                const t = ["icon-video", this.$attrs.class]
                  .filter(Boolean)
                  .join(" ");
                return e(
                  "svg",
                  {
                    ref: "svg",
                    attrs: Object.assign(
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        version: "1.1",
                        viewBox: "0 0 16 16",
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
            }),
            W = (0, a.defineComponent)({
              setup() {
                const e = (0, a.ref)();
                return (
                  (0, a.onMounted)(() => {
                    e.value &&
                      (e.value.innerHTML =
                        '<g stroke="currentColor" stroke-linejoin="round" fill="none" fill-rule="evenodd"><path d="M13.538 0C15.18 2.462 16 4 16 4.615a2.77 2.77 0 0 1-5.385.911 2.768 2.768 0 0 1-5.231 0A2.768 2.768 0 0 1 0 4.616C0 4 .82 2.461 2.462 0h11.076zM9.23 14.77h-8V9.845M11.692 9.846h3.077m-3.077 2.462h3.077m-3.077 2.461h3.077"/></g>');
                  }),
                  { svg: e }
                );
              },
              render(e) {
                const t = ["icon-retail", this.$attrs.class]
                  .filter(Boolean)
                  .join(" ");
                return e(
                  "svg",
                  {
                    ref: "svg",
                    attrs: Object.assign(
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        version: "1.1",
                        viewBox: "0 0 16 16",
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
            }),
            H =
              ((0, a.defineComponent)({
                setup() {
                  const e = (0, a.ref)();
                  return (
                    (0, a.onMounted)(() => {
                      e.value &&
                        (e.value.innerHTML =
                          '<path d="M13.5052561,1 C13.7784956,1 14,1.22284176 14,1.497731 L14,4.88853551 C14,5.16342475 13.7784956,5.38626651 13.5052561,5.38626651 L5.5027601,5.38626651 C5.22952061,5.38626651 5.00801624,5.16342475 5.00801624,4.88853551 L5.008,3.69 L2.98948771,3.69140764 L2.98948771,7.50999986 L6.923,7.509 L8.17724936,6.24793728 L9.431,7.509 L13.5052561,7.5091652 L13.594187,7.51718432 C13.8249842,7.55932816 14,7.76255021 14,8.0068962 L14,8.0068962 L14,12.8206603 L13.992029,12.9101281 C13.9501381,13.1423188 13.7481357,13.3183913 13.5052561,13.3183913 L13.5052561,13.3183913 L10.991,13.318 L10.9919837,14.502269 C10.9919837,14.7771582 10.7704794,15 10.4972399,15 L2.49474385,15 C2.22150437,15 2,14.7771582 2,14.502269 L2,11.1114645 C2,10.8365752 2.22150437,10.6137335 2.49474385,10.6137335 L10.4972399,10.6137335 C10.7704794,10.6137335 10.9919837,10.8365752 10.9919837,11.1114645 L10.991,12.322 L13.0100297,12.3230586 L13.0100297,8.50546186 L9.424,8.504 L8.17724936,9.75855436 L6.93,8.504 L2.49474385,8.5046272 L2.40581302,8.49660809 C2.1750158,8.45446425 2,8.25124219 2,8.0068962 L2,8.0068962 L2,3.19313205 L2.00797099,3.10366427 C2.0498619,2.87147355 2.25186431,2.69540105 2.49474385,2.69540105 L2.49474385,2.69540105 L5.008,2.695 L5.00801624,1.497731 C5.00801624,1.22284176 5.22952061,1 5.5027601,1 L13.5052561,1 Z M10.0019871,11.6100134 L2.98948771,11.6100134 L2.98948771,14.005095 L10.0019871,14.005095 L10.0019871,11.6100134 Z M13.0100297,1.99572295 L5.99654085,1.99572295 L5.99654085,4.39080451 L13.0100297,4.39080451 L13.0100297,1.99572295 Z" id="形状结合" fill-rule="nonzero"></path>');
                    }),
                    { svg: e }
                  );
                },
                render(e) {
                  const t = ["icon-industry", this.$attrs.class]
                    .filter(Boolean)
                    .join(" ");
                  return e(
                    "svg",
                    {
                      ref: "svg",
                      attrs: Object.assign(
                        {
                          xmlns: "http://www.w3.org/2000/svg",
                          "xmlns:xlink": "http://www.w3.org/1999/xlink",
                          version: "1.1",
                          viewBox: "0 0 16 16",
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
              }),
              (0, a.defineComponent)({
                setup() {
                  const e = (0, a.ref)();
                  return (
                    (0, a.onMounted)(() => {
                      e.value &&
                        (e.value.innerHTML =
                          '<path d="M14.5,2 C14.7761424,2 15,2.22385763 15,2.5 L15,2.5 L15,13.5 C15,13.7761424 14.7761424,14 14.5,14 L14.5,14 L1.5,14 C1.22385763,14 1,13.7761424 1,13.5 L1,13.5 L1,2.5 C1,2.22385763 1.22385763,2 1.5,2 L1.5,2 Z M14,6.5 L2,6.5 L2,13 L14,13 L14,6.5 Z M8.34197441,10.9841014 C8.61811679,10.9841014 8.84197442,11.207959 8.84197442,11.4841014 C8.84197442,11.7295613 8.66509926,11.9337098 8.43185005,11.9760457 L8.34197442,11.9841014 L6.14464125,11.9841014 C5.86849887,11.9841014 5.64464125,11.7602438 5.64464125,11.4841014 C5.64464124,11.2386415 5.8215164,11.0344931 6.05476561,10.9921571 L6.14464124,10.9841014 L8.34197441,10.9841014 Z M3.69392797,7.89746821 C3.8886259,7.70164348 4.20520707,7.70073003 4.4010318,7.89542797 L4.4010318,7.89542797 L5.9040318,9.38977954 L5.96215771,9.45896102 C6.09784762,9.65372768 6.0790239,9.92362819 5.90536449,10.0975936 L5.90536449,10.0975936 L4.40236449,11.603242 L4.33316755,11.6611584 C4.13841832,11.796326 3.86897705,11.777278 3.69525798,11.6038645 L3.69525798,11.6038645 L3.63734159,11.5346676 C3.50217406,11.3399183 3.52122203,11.070477 3.69463553,10.896758 L3.69463553,10.896758 L4.84400001,9.74600001 L3.69596821,8.60457205 L3.6379132,8.53549139 C3.50235545,8.34101357 3.52086314,8.07153464 3.69392797,7.89746821 Z M14,3 L2,3 L2,5.5 L14,5.5 L14,3 Z M3.49996183,3.6 C3.85620658,3.6 4.145,3.89101491 4.145,4.25 C4.145,4.57635008 3.90632775,4.84652646 3.59528084,4.89295233 L3.49003817,4.9 C3.13379342,4.9 2.845,4.60898509 2.845,4.25 C2.845,3.92364992 3.08367225,3.65347354 3.39471916,3.60704767 L3.49996183,3.6 Z M5.45496183,3.6 C5.81120658,3.6 6.1,3.89101491 6.1,4.25 C6.1,4.57635008 5.86132775,4.84652646 5.55028084,4.89295233 L5.44503817,4.9 C5.08879342,4.9 4.8,4.60898509 4.8,4.25 C4.8,3.92364992 5.03867225,3.65347354 5.34971916,3.60704767 L5.45496183,3.6 Z M7.41496183,3.6 C7.77120658,3.6 8.06,3.89101491 8.06,4.25 C8.06,4.57635008 7.82132775,4.84652646 7.51028084,4.89295233 L7.40503817,4.9 C7.04879342,4.9 6.76,4.60898509 6.76,4.25 C6.76,3.92364992 6.99867225,3.65347354 7.30971916,3.60704767 L7.41496183,3.6 Z" fill="#000000" fill-rule="nonzero"></path>');
                    }),
                    { svg: e }
                  );
                },
                render(e) {
                  const t = ["icon-zero-code", this.$attrs.class]
                    .filter(Boolean)
                    .join(" ");
                  return e(
                    "svg",
                    {
                      ref: "svg",
                      attrs: Object.assign(
                        {
                          xmlns: "http://www.w3.org/2000/svg",
                          "xmlns:xlink": "http://www.w3.org/1999/xlink",
                          version: "1.1",
                          viewBox: "0 0 16 16",
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
              }),
              (0, a.defineComponent)({
                setup() {
                  const e = (0, a.ref)();
                  return (
                    (0, a.onMounted)(() => {
                      e.value &&
                        (e.value.innerHTML =
                          '<g id="控件" stroke="none" stroke-width="1" fill-rule="evenodd"><g id="2.-导航/2.-侧边导航/百度大脑/文心一言默认" transform="translate(-15.000000, -16.000000)" fill="#84868C"><g id="状态" transform="translate(15.833333, 13.000000)"><g id="编组" transform="translate(0.166667, 3.000000)"><rect id="矩形" stroke="#84868C" opacity="0" x="0.5" y="0.5" width="15" height="15"></rect><path d="M15,2.0002 L15,12.0442 L4.98,12.0442 L1,14.0442 L1,2.0002 L15,2.0002 Z M14.001,3.0002 L2,3.0002 L2,12.4222 L4.531,11.1502 L4.742,11.0442 L14.001,11.0442 L14.001,3.0002 Z M9.992,7.998 L9.992,8.991 L4.012,8.991 L4.012,7.998 L9.992,7.998 Z M11.992,4.988 L11.992,5.981 L3.992,5.981 L3.992,4.988 L11.992,4.988 Z" id="图标-填色"></path></g></g></g></g>');
                    }),
                    { svg: e }
                  );
                },
                render(e) {
                  const t = ["icon-ernie-bot", this.$attrs.class]
                    .filter(Boolean)
                    .join(" ");
                  return e(
                    "svg",
                    {
                      ref: "svg",
                      attrs: Object.assign(
                        {
                          xmlns: "http://www.w3.org/2000/svg",
                          "xmlns:xlink": "http://www.w3.org/1999/xlink",
                          version: "1.1",
                          viewBox: "0 0 16 16",
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
              })),
            J = (0, a.defineComponent)({
              setup() {
                const e = (0, a.ref)();
                return (
                  (0, a.onMounted)(() => {
                    e.value &&
                      (e.value.innerHTML =
                        '<g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="编组-73备份-18" transform="translate(-150.000000, -76.000000)" fill="#84868C" fill-rule="nonzero"><g id="EasyDL-侧边导航备份-2" transform="translate(0.000000, 56.000000)"><g id="编组" transform="translate(16.000000, 13.000000)"><g id="状态" transform="translate(24.000000, 0.000000)"><g id="箭头_左右切换" transform="translate(110.000000, 7.000000)"><path d="M1.66666667,3.13846154 L0,3.13846154 L1.33333333,1.96923078 L3.4,0 L4.2,0.738461538 L2.93333333,1.90769231 L12,1.90769231 L12,3.07692308 L1.66666667,3.07692308 L1.66666667,3.13846154 Z M10.4,4.92307693 L12,4.92307693 L10.6666667,6.09230769 L8.6,8 L7.8,7.26153846 L9.06666667,6.09230769 L0,6.09230769 L0,4.92307693 L10.4,4.92307693 Z" id="形状"></path></g></g></g></g></g></g>');
                  }),
                  { svg: e }
                );
              },
              render(e) {
                const t = ["icon-switch-model", this.$attrs.class]
                  .filter(Boolean)
                  .join(" ");
                return e(
                  "svg",
                  {
                    ref: "svg",
                    attrs: Object.assign(
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        version: "1.1",
                        viewBox: "0 0 14 15",
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
            });
          var Q = function () {
              var e = this,
                t = e.$createElement,
                n = e._self._c || t;
              return n(
                "eg-modal",
                {
                  ref: "modal",
                  attrs: {
                    "z-index": e.zIndex,
                    customClass: "modal",
                    closeOnPressEscape: !1,
                    size: "l",
                    showClose: "",
                    center: "",
                    title: e.$t("choose"),
                  },
                },
                [
                  n("div", { staticClass: "consoleModal" }, [
                    n("div", { staticClass: "section left" }, [
                      n("h3", { staticClass: "title" }, [
                        e._v(e._s(e.$t("onlineUse"))),
                      ]),
                      n(
                        "div",
                        { staticClass: "group-wrapper" },
                        e._l(e.cloudChunks, function (t, o) {
                          return n(
                            "div",
                            { key: o, staticClass: "group-row" },
                            e._l(t, function (t, o) {
                              return n("ConsoleModalGroup", {
                                key: o,
                                attrs: {
                                  title: t.title,
                                  color: t.color,
                                  suffix: t.suffix,
                                  href: t.href,
                                  items: t.items,
                                  lite: !e.hasLocal,
                                },
                              });
                            }),
                            1
                          );
                        }),
                        0
                      ),
                    ]),
                    n(
                      "div",
                      { staticClass: "section right" },
                      [
                        n("h3", { staticClass: "title" }, [
                          e._v(e._s(e.$t("localUse"))),
                        ]),
                        e._l(e.localChunks, function (t, o) {
                          return n(
                            "div",
                            { key: o, staticClass: "group-wrapper" },
                            [
                              n(
                                "div",
                                { staticClass: "group-row" },
                                e._l(t, function (e, t) {
                                  return n("ConsoleModalGroup", {
                                    key: t,
                                    attrs: {
                                      title: e.title,
                                      items: e.items,
                                      color: e.color,
                                    },
                                  });
                                }),
                                1
                              ),
                            ]
                          );
                        }),
                      ],
                      2
                    ),
                  ]),
                ]
              );
            },
            ee = [],
            te = n(63792),
            ne = function () {
              var e = this,
                t = e.$createElement,
                n = e._self._c || t;
              return n("div", { staticClass: "group" }, [
                n("div", { staticClass: "group_head" }, [
                  n("div", { staticClass: "group_title" }, [
                    n("i", {
                      staticClass: "circle",
                      style: { backgroundColor: "#" + e.color },
                    }),
                    e._v(" " + e._s(e.title) + " "),
                    e.suffix
                      ? n("span", { class: ["" + e.suffix.class] }, [
                          e._v(e._s(e.suffix.name)),
                        ])
                      : e._e(),
                  ]),
                ]),
                n(
                  "div",
                  { staticClass: "group_body" },
                  e._l(e.items, function (t, o) {
                    return n(
                      "div",
                      { key: o, staticClass: "group_col" },
                      e._l(t, function (t, o) {
                        return n(
                          "a",
                          {
                            key: o,
                            staticClass: "group-item",
                            attrs: { href: t.href },
                          },
                          [
                            n("img", {
                              staticClass: "group-item_icon",
                              attrs: { src: t.icon },
                            }),
                            n("span", [e._v(e._s(t.name))]),
                            n("span", {
                              staticClass: "group-item_name",
                              class: { newtag: t.isNew },
                            }),
                          ]
                        );
                      }),
                      0
                    );
                  }),
                  0
                ),
              ]);
            },
            oe = [],
            ie = (0, a.defineComponent)({
              props: {
                title: { type: String, default: "" },
                color: { type: String, default: "" },
                suffix: { type: Object, default: () => {} },
                items: { type: Array, default: () => [] },
                lite: { type: Boolean, default: !1 },
                href: { type: String, default: "" },
              },
              setup() {
                return {};
              },
            }),
            ae = ie,
            re = n(83584),
            se = n.n(re),
            le = se(),
            ce = (0, u.Z)(ae, ne, oe, !1, null, null, null);
          "function" === typeof le && le(ce);
          var ue = ce.exports,
            de = n(23644),
            pe = n(18515),
            me = n.n(pe);
          const fe = "/easydl/app",
            Te = (0, de.addLocalResource)(me()),
            ye = [
              {
                name: Te("imgCls"),
                icon: n(82480),
                type: "vision",
                href: `${fe}/${_.ProjectType.IMG_CLS}/${_.TemplateType.IMG_CLS}/overview`,
              },
              {
                name: Te("objDct"),
                icon: n(5272),
                type: "vision",
                href: `${fe}/${_.ProjectType.OBJ_DCT}/${_.TemplateType.OBJ_DCT}/overview`,
                local: !1,
              },
              {
                name: Te("segment"),
                icon: n(84618),
                type: "vision",
                href: `${fe}/${_.ProjectType.SEGMENT}/${_.TemplateType.SEGMENT}/overview`,
                local: !1,
              },
              {
                name: Te("textLabel"),
                icon: n(41751),
                type: "nlp",
                href: `${fe}/${_.ProjectType.TEXT_CLS}/${_.TemplateType.TEXT_CLS}/overview`,
                local: !1,
              },
              {
                name: Te("textLabels"),
                icon: n(43687),
                type: "nlp",
                href: `${fe}/${_.ProjectType.TEXT_CLS}/${_.TemplateType.TEXT_CLS_MULTI}/overview`,
                local: !1,
              },
              {
                name: Te("textSimilar"),
                icon: n(35574),
                type: "nlp",
                href: `${fe}/${_.ProjectType.TEXT_SIM}/${_.TemplateType.TEXT_SIM}/overview`,
                local: !1,
              },
              {
                name: Te("textEmotion"),
                icon: n(36987),
                type: "nlp",
                href: `${fe}/${_.ProjectType.SENTIMENT}/${_.TemplateType.SENTIMENT}/overview`,
                local: !1,
              },
              {
                name: Te("textErnie"),
                icon: n(59819),
                type: "nlp",
                href: `${fe}/${_.ProjectType.TEXT_NLG}/${_.TemplateType.TEXT_NLG}/overview`,
                local: !1,
                isNew: !0,
              },
              {
                name: Te("textExtract"),
                icon: n(44716),
                type: "nlp",
                href: `${fe}/${_.ProjectType.TEXT_ENTITY_EXTRACT}/${_.TemplateType.TEXT_ENTITY_EXTRACT}/overview`,
                local: !1,
              },
              {
                name: Te("relationTextExtract"),
                icon: n(88835),
                type: "nlp",
                href: `${fe}/${_.ProjectType.TEXT_RELATION_EXTRACT}/${_.TemplateType.TEXT_RELATION_EXTRACT}/overview`,
                local: !1,
              },
              {
                name: Te("commentExtract"),
                icon: n(4063),
                type: "nlp",
                href: `${fe}/${_.ProjectType.TEXT_COMMENT}/${_.TemplateType.TEXT_COMMENT}/overview`,
                local: !1,
              },
              {
                name: Te("audioDistinguish"),
                icon: n(47268),
                type: "audio",
                href: "/smartasr",
                local: !1,
              },
              {
                name: Te("audioClassification"),
                icon: n(46395),
                type: "audio",
                href: `${fe}/${_.ProjectType.SOUND_CLS}/${_.TemplateType.SOUND_CLS}/overview`,
                local: !1,
              },
              {
                name: Te("videoClassification"),
                icon: n(37302),
                type: "video",
                href: `${fe}/${_.ProjectType.VIDEO_CLS}/${_.TemplateType.VIDEO_CLS}/overview`,
                local: !1,
              },
              {
                name: Te("targetTrack"),
                icon: n(1102),
                type: "video",
                href: `${fe}/${_.ProjectType.VIDEO_TRACKING}/${_.TemplateType.VIDEO_TRACKING}/overview`,
                local: !1,
              },
              {
                name: Te("StructureData"),
                icon: n(6098),
                type: "structured_data",
                href: `${fe}/${_.ProjectType.ML}/${_.TemplateType.ML}/overview`,
                local: !1,
              },
              {
                name: Te("tsf"),
                icon: n(17266),
                type: "structured_data",
                href: `${fe}/${_.ProjectType.TIME_SERIES_FORECAST}/${_.TemplateType.TIME_SERIES_FORECAST}/overview`,
                local: !1,
              },
              {
                name: Te("retail"),
                icon: n(50007),
                type: "retail",
                href: `${fe}/${_.ProjectType.RETAIL}/${_.TemplateType.RETAIL}/models`,
                local: !1,
              },
              {
                name: Te("ocr"),
                icon: n(90031),
                type: "ocr",
                href: "/easydlocr",
                local: !1,
              },
              {
                name: Te("vqa"),
                icon: n(79021),
                type: "vqa",
                href: `${fe}/${_.ProjectType.IMG_TEXT}/${_.TemplateType.IMG_TEXT}/overview`,
                local: !1,
                isNew: !0,
              },
              {
                name: Te("paddle"),
                icon: n(44748),
                type: "vision",
                href: "/easydl/paddle",
                local: !0,
                isNew: !0,
              },
            ],
            ge = [
              {
                name: "图像",
                value: "38C25D",
                code: "vision",
                suffix: { name: Te("suffixWenxin"), class: "wenxin" },
              },
              {
                name: "文本",
                value: "6B63FA",
                code: "nlp",
                suffix: { name: Te("suffixWenxin"), class: "wenxin" },
              },
              { name: "语音", value: "1978FF", code: "audio" },
              { name: "视频", value: "00B8FF", code: "video" },
              { name: "结构化数据", value: "FF6180", code: "structured_data" },
              { name: "行业版", value: "FF993F", code: "retail" },
              {
                name: "跨模态",
                value: "02DFDF",
                code: "vqa",
                suffix: { name: Te("suffixWenxin"), class: "wenxin" },
              },
              { name: "OCR", value: "F479FB", code: "ocr" },
            ];
          function he(e) {
            const t = (0, a.computed)(() =>
                e.reduce((e, t) => {
                  const n = ge.find((e) => e.code === t.type);
                  return e[t.type]
                    ? (e[t.type].items.push(t), e)
                    : ((e[t.type] = {
                        title: null === n || void 0 === n ? void 0 : n.name,
                        color: null === n || void 0 === n ? void 0 : n.value,
                        suffix: null === n || void 0 === n ? void 0 : n.suffix,
                        items: [t],
                      }),
                      e);
                }, {})
              ),
              n = (e) => (
                (e.items =
                  e.items.length > 4
                    ? [e.items.slice(0, 4), e.items.slice(4)]
                    : [e.items]),
                e
              );
            let o = 0;
            return Object.values(t.value).reduce((e, t) => {
              const i = n(t),
                a = e[e.length - 1];
              if (!a || o >= 4) {
                const t = [i];
                return e.push(t), (o = i.items.length), e;
              }
              return a.push(i), (o += i.items.length), e;
            }, []);
          }
          var ve = (0, a.defineComponent)({
              components: { ConsoleModalGroup: ue },
              props: { zIndex: { type: Number, default: 2e3 } },
              setup() {
                const { modal: e } = (0, te.useModalCloser)(),
                  t = [...ye].filter((e) => !e.local),
                  n = [...ye].filter((e) => e.local),
                  o = he(t),
                  i = he(n),
                  a = Boolean(t.length);
                return {
                  confirm: confirm,
                  modal: e,
                  cloudChunks: o,
                  localChunks: i,
                  hasLocal: a,
                };
              },
            }),
            _e = ve,
            Ee = n(40794),
            Le = n.n(Ee),
            be = Le(),
            Se = (0, u.Z)(_e, Q, ee, !1, null, null, null);
          "function" === typeof be && be(Se);
          var Pe = Se.exports,
            Ie = (0, a.defineComponent)({
              components: {
                IconImage: G,
                IconModality: q,
                IconOcr: F,
                IconRetail: W,
                IconSound: X,
                IconStructure: z,
                IconText: Y,
                IconVideo: K,
                IconErnieBot: H,
                IconSwitchModel: J,
                TransitionWrap: p,
                SideMenu: B,
                TooltipOver: k,
              },
              props: {
                headline: { required: !0, type: Object },
                routes: { required: !0, type: Array },
              },
              setup(e, { emit: t }) {
                const { route: n } = (0, T.useRouter)(),
                  o = (0, a.computed)(() => n),
                  i = (0, T.useStore)(),
                  r = h(
                    o,
                    (0, a.computed)(() => e.routes)
                  ),
                  s = (0, te.useModal)(Pe);
                (0, a.watch)(
                  () => r,
                  (e) => {
                    t("changeLink", e.bestMatchOne);
                  },
                  { deep: !0, immediate: !0 }
                );
                const l = {
                  marginLeft: "46px",
                  lineHeight: "49px",
                  maxWidth: "90px",
                };
                return { tipStyle: l, menu: r, openModelCenter: s, ...S(i) };
              },
            }),
            Ce = Ie,
            Ae = (0, u.Z)(Ce, o, i, !1, null, "18be2d15", null),
            Ne = Ae.exports;
        },
        40336: function (e, t, n) {
          "use strict";
          n.r(t),
            n.d(t, {
              ALL_NODE_TYPES: function () {
                return r.Vc;
              },
              APPLY_STATUS: function () {
                return r.Xz;
              },
              ApplyStatus: function () {
                return r.bV;
              },
              ChargeStatus: function () {
                return S;
              },
              CloudApplyStatus: function () {
                return r.bk;
              },
              CloudChargeType: function () {
                return r.HI;
              },
              CloudServiceStatus: function () {
                return r.$v;
              },
              CloudServiceType: function () {
                return r.CZ;
              },
              CloudTrainWay: function () {
                return r.v4;
              },
              DATASET_SHARE_STATUS: function () {
                return r.kq;
              },
              DATASET_STATUS: function () {
                return r.E$;
              },
              DATA_ENHANCE_VAL: function () {
                return A;
              },
              DCL_STATUS: function () {
                return b;
              },
              DEPLOY_TYPE: function () {
                return r.fv;
              },
              DISCOUNT_TYPES: function () {
                return v;
              },
              DeployType: function () {
                return r.kV;
              },
              ECC_RELATION: function () {
                return r.nO;
              },
              ENTITY_LENGTH: function () {
                return L;
              },
              ENTITY_SIZE: function () {
                return E;
              },
              EXTENSIONS: function () {
                return _;
              },
              EasyEdgeSDKType: function () {
                return r.Cd;
              },
              EdgeServiceType: function () {
                return r.Ep;
              },
              GeneralAlgorithm: function () {
                return r.ZS;
              },
              INTEGRATION_TYPES: function () {
                return g;
              },
              IntegrationType: function () {
                return r.WN;
              },
              JsServiceType: function () {
                return r.xP;
              },
              LicenseType: function () {
                return r.oj;
              },
              ML_ALGORITHM: function () {
                return r.O6;
              },
              MODEL_TYPES: function () {
                return r.zB;
              },
              NLP_NODE_TYPES: function () {
                return r.z1;
              },
              NOPERMISSION_CODE: function () {
                return N;
              },
              NOT_FOUND: function () {
                return O;
              },
              NO_REDIRECT: function () {
                return p;
              },
              NodeDeployStatus: function () {
                return r.Jg;
              },
              NodeStatus: function () {
                return r.e4;
              },
              PACK_TYPES: function () {
                return h;
              },
              PackageStatus: function () {
                return r.TV;
              },
              PrivatizationType: function () {
                return r.hI;
              },
              ProductType: function () {
                return r.kv;
              },
              QQ: function () {
                return m;
              },
              QUOTA_NO_LIMIT: function () {
                return P;
              },
              RANGE_MAX: function () {
                return I;
              },
              SERVICE_STATUS: function () {
                return r.Pr;
              },
              SKU_CLOUD_CONFIGS: function () {
                return r.TP;
              },
              SMART_ASR_SCENE: function () {
                return y;
              },
              SOUND_IDENTIFY_TEMPLATE_TYPE: function () {
                return f;
              },
              SYSTEMS: function () {
                return r.vF;
              },
              Scenario_Algorithm: function () {
                return r.X7;
              },
              ServiceOrientation: function () {
                return r.X4;
              },
              ServiceStatus: function () {
                return r.$J;
              },
              ServiceType: function () {
                return r.UW;
              },
              ServiceTypeWidthFree: function () {
                return r.Bs;
              },
              TEMPLATE_TYPES: function () {
                return r.k6;
              },
              TEXT_CLS_ALL: function () {
                return C;
              },
              TICKET: function () {
                return T;
              },
              TRAIN_STATUS: function () {
                return r.pC;
              },
              TRAIN_TYPES: function () {
                return r.tr;
              },
              TrainWay: function () {
                return r.Zy;
              },
              VIS_NODE_TYPES: function () {
                return r.Zh;
              },
              VQA_NODE_TYPES: function () {
                return r.y4;
              },
              eccTypeGenerator: function () {
                return r.VV;
              },
              priTypeGenerator: function () {
                return r.Kw;
              },
              serviceTypeGenerator: function () {
                return r.Tn;
              },
              supportTypeGenerator: function () {
                return r.kX;
              },
              tBind: function () {
                return r.Y;
              },
            });
          var o = n(43031),
            i = n(23644),
            a = n(22451),
            r = n(3623),
            s = n(21274),
            l = n(65845),
            c = n.n(l);
          const u = (0, i.addLocalResource)("easydl-glossary", c()),
            d = (e) => (t) => u(`${e}.${t}`),
            p = "__no_redirect__",
            m = "679517246",
            f = 30100,
            T = "https://ticket.bce.baidu.com/#/ticket/create~productId=171",
            y = a.x.from(
              { CENTER: 2, IDENTIFY: 3, CURRENT_IDENTIFY: 4 },
              d("smart-asr-scene")
            ),
            g = a.x.from(
              { EDGEBOARD: "edgeboard", EB_VPU: "ebvpu", JETSON: "jetson" },
              d("inte-type")
            ),
            h = a.x.from({ API: "api", SDK: "sdk" }, d("pack-type")),
            v = a.x.from(s.wK, d("discount-types")),
            _ = {
              [o.ProjectType.IMG_CLS]: ["jpg", "png", "bmp", "jpeg"],
              [o.ProjectType.RETAIL]: ["jpg", "png", "bmp", "jpeg"],
              [o.ProjectType.OBJ_DCT]: ["jpg", "png", "bmp", "jpeg"],
              [o.ProjectType.SEGMENT]: ["jpg", "png", "bmp", "jpeg"],
              [o.ProjectType.SOUND_CLS]: ["mp3", "m4a", "wav"],
              [o.ProjectType.VIDEO_CLS]: ["mp4", "mov"],
              [o.ProjectType.TEXT_CLS]: ["txt"],
              [o.ProjectType.SENTIMENT]: ["txt"],
            },
            E = {
              [o.ProjectType.IMG_CLS]: "4M",
              [o.ProjectType.OBJ_DCT]: "4M",
              [o.ProjectType.SEGMENT]: "4M",
              [o.ProjectType.SOUND_CLS]: "4M",
              [o.ProjectType.VIDEO_CLS]: "4M",
              [o.ProjectType.RETAIL]: "14M",
              [o.ProjectType.TEXT_CLS]: "12KB",
              [o.ProjectType.SENTIMENT]: "1.5KB",
            },
            L = {
              [o.ProjectType.IMG_CLS]: null,
              [o.ProjectType.OBJ_DCT]: null,
              [o.ProjectType.SEGMENT]: null,
              [o.ProjectType.SOUND_CLS]: "15s",
              [o.ProjectType.VIDEO_CLS]: "10s",
              [o.ProjectType.TEXT_CLS]: {
                [o.TemplateType.TEXT_CLS]: "4096",
                [o.TemplateType.TEXT_CLS_ERNIE_DOC]: "10,000",
                [o.TemplateType.TEXT_CLS_ERNIE_M]: "4096",
                [o.TemplateType.TEXT_CLS_MULTI]: "4096",
              },
              [o.ProjectType.SENTIMENT]: "512",
              [o.ProjectType.TEXT_RELATION_EXTRACT]: "512",
            },
            b = { UNOPENED: 0, ALL: 1, EASYDL_ONLY: 2 },
            S = { UNPAID: 0, PAYING: 1, PAID: 2, ARREAR: 3 },
            P = -1,
            I = 99999,
            C = [o.TemplateType.TEXT_CLS, o.TemplateType.TEXT_CLS_ERNIE_M],
            A = {
              [o.ProjectType.IMG_CLS]: "2.2",
              [o.ProjectType.OBJ_DCT]: "2",
            },
            N = 100005,
            O = "not-found";
        },
        71437: function (e, t, n) {
          "use strict";
          n.d(t, {
            M9: function () {
              return l;
            },
            YP: function () {
              return c;
            },
            cY: function () {
              return s;
            },
            lp: function () {
              return p;
            },
            or: function () {
              return d;
            },
            xD: function () {
              return u;
            },
          });
          var o = n(99518),
            i = n(98086);
          const a = (e) =>
            "object" !== typeof e
              ? { eq: (t) => e === t, value: e }
              : "eq" in e
              ? { eq: e.eq.bind(e), value: e }
              : {
                  eq: (t) => (0, i.XP)(t).every((n) => t[n] === e[n]),
                  value: e,
                };
          class r {
            constructor(e) {
              (0, o.Z)(this, "rules", void 0), (this.rules = e);
            }
            getKeys() {
              return Object.keys(this.rules);
            }
            exec(e) {
              const t = {},
                n = a(e);
              return (
                this.getKeys().forEach((e) => {
                  t[e] = this.rules[e](n);
                }),
                t
              );
            }
            report(...e) {
              const t = this.getKeys(),
                n = e
                  .map(this.exec.bind(this))
                  .map((e) =>
                    Object.entries(e).reduce(
                      (e, [t, n]) => ({ ...e, [t]: n ? "✓" : "✖" }),
                      {}
                    )
                  );
              console.table(n, t);
            }
          }
          function s(e) {
            return new r(e);
          }
          const l =
              (...e) =>
              (t) =>
                e.some(t.eq),
            c = (...e) => {
              const t = l(...e);
              return (e) => !t(e);
            },
            u =
              (...e) =>
              (t) =>
                e.reduce((e, n) => e && n(t), !0),
            d =
              (...e) =>
              (t) =>
                e.reduce((e, n) => e || n(t), !1),
            p =
              (...e) =>
              (t) =>
                e.reduce((e, n) => e && !n(t), !0);
        },
        41405: function (e, t, n) {
          "use strict";
          n.d(t, {
            H: function () {
              return a;
            },
          });
          var o = n(84259),
            i = n(29877);
          const [a, r] = (0, i.hp)(
            () => o.caller.send("retail/white/list", {}),
            () => ""
          );
        },
        62396: function (e, t, n) {
          "use strict";
          n.d(t, {
            BW: function () {
              return m;
            },
            yC: function () {
              return S;
            },
            X$: function () {
              return E;
            },
            Ly: function () {
              return h;
            },
            JY: function () {
              return g;
            },
            YN: function () {
              return L;
            },
            wR: function () {
              return b;
            },
            Sj: function () {
              return _;
            },
            Nc: function () {
              return v;
            },
            bk: function () {
              return T;
            },
            Z_: function () {
              return f;
            },
            kk: function () {
              return p;
            },
            of: function () {
              return d;
            },
          });
          var o = n(47253),
            i = n(43031),
            a = n(32121),
            r = n(19660),
            s = n(40336),
            l = n(49995);
          const c = [
              "imgcls",
              "objdct",
              "soundcls",
              "textcls",
              "textclsm",
              "segment",
              "textsim",
              "sentiment",
              "tee",
              "tre",
              "videocls",
              "videotracking",
            ],
            u = [{ tag: "models", prefix: "model" }],
            d = () => {
              var e;
              const t =
                null === (e = (0, o.getCurrentInstance)()) || void 0 === e
                  ? void 0
                  : e.proxy;
              return t.$SP;
            },
            p = (e, t) => {
              var n;
              const o =
                (0, a.usePMService)().getModulePermission("codename") || [];
              let i = "";
              const r = Object.entries(o);
              for (const [a, s] of r)
                if (
                  s.find((n) => {
                    const o = n.split("-");
                    return +o[0] === e && +o[1] === t;
                  })
                ) {
                  i = a;
                  break;
                }
              if (!i)
                for (const [a, s] of r)
                  if (
                    s.find((t) => {
                      const n = t.split("-");
                      return +n[0] === e;
                    })
                  ) {
                    i = a;
                    break;
                  }
              return (
                !i &&
                  null !== (n = r[0]) &&
                  void 0 !== n &&
                  n[0] &&
                  (i = r[0][0]),
                i
              );
            },
            m = () => {
              setTimeout(() => {
                l.Z.dispatch("preparePage", null);
              }, 200);
            },
            f = ({ projectId: e, orgId: t }) => {
              e && t
                ? (window.localStorage.setItem("easydl-projectId", e),
                  window.localStorage.setItem("easydl-orgId", t),
                  l.Z.commit("setOrgAndProId", { projectId: e, orgId: t }))
                : l.Z.commit("setOrgAndProId", {
                    projectId: window.localStorage.getItem("easydl-projectId"),
                    orgId: window.localStorage.getItem("easydl-orgId"),
                  });
            },
            T = (e) => {
              e && l.Z.commit("setCodename", e);
            },
            y = (e) => {
              const t = e.path.split("/").slice(1),
                n = (0, a.usePMService)().getModulePermission("path"),
                o = (0, a.usePMService)().getModulePermission("codename"),
                i = (e) => {
                  const [t, n] = e;
                  return o[t] || o[n];
                },
                d = i(t);
              if (!d && e.name !== s.NOT_FOUND) {
                const [e, n] = t;
                if (!r.Z.has(+e) && !r.Z.has(+n)) return !1;
              }
              const [m, f, ...T] =
                  d || e.name === s.NOT_FOUND
                    ? t
                    : (() => {
                        const [e, o, i, ...a] = r.Z.has(+t[0]) ? ["", ...t] : t,
                          s = p(+o, +i),
                          l = [].concat(c),
                          d = a[a.length - 1];
                        l.includes(s) &&
                          "train" === d &&
                          (a[a.length - 1] = "train-v2");
                        const [m, f] = e
                          ? [e, a]
                          : a.length
                          ? ((e) => (e ? [e.prefix, a] : ["", a]))(
                              u.find(
                                ({ tag: e }) =>
                                  e === a[a.length - 1] && n.length === a.length
                              )
                            )
                          : ["model", ["models"]];
                        return [m, s, ...f];
                      })(),
                y = (() => {
                  const [e, t] = T;
                  return e === l.Z.state.orgId && t === l.Z.state.projectId
                    ? T.slice(2)
                    : T;
                })(),
                g = [
                  ...n.map((e) => {
                    switch (e) {
                      case "codename":
                        return f;
                      case "orgId":
                        return l.Z.state.orgId;
                      case "projectId":
                        return l.Z.state.projectId;
                    }
                    return console.error("新私有化， 需要处理"), e;
                  }),
                  ...y,
                ];
              return { appName: m, restPath: g, codename: f };
            },
            g = (e) => {
              const t = y(e);
              if (!t) return !1;
              const { appName: n, restPath: o } = t,
                i = [...(n ? [n] : []), ...o];
              return { path: `/${i.join("/")}`, query: e.query };
            },
            h = (e) => {
              const t = y(e);
              if (!t) return !1;
              const { appName: n, restPath: o, codename: i } = t;
              T(i);
              const a = [...(n ? [n] : []), ...o].filter(Boolean);
              return { path: `/${a.join("/")}`, query: e.query };
            },
            v = (e) => {
              const t = (0, a.usePMService)().getModulePermission("path"),
                n = e || l.Z.state,
                o = {};
              for (let i = 1; i < t.length; i++) {
                const e = t[i];
                o[e] = n[e];
              }
              return { url: t.map((e) => n[e]).join("/"), obj: o };
            },
            _ = (e) => {
              const t = new Map([
                [
                  [
                    i.ProjectType.IMG_CLS,
                    i.ProjectType.OBJ_DCT,
                    i.ProjectType.SEGMENT,
                  ],
                  "easydlLiteImage",
                ],
                [
                  [
                    i.ProjectType.TEXT_CLS,
                    i.ProjectType.SENTIMENT,
                    i.ProjectType.TEXT_ENTITY_EXTRACT,
                    i.ProjectType.TEXT_RELATION_EXTRACT,
                    i.ProjectType.TEXT_SIM,
                    i.ProjectType.TEXT_NLG,
                    i.ProjectType.TEXT_COMMENT,
                  ],
                  "easydlLiteNlp",
                ],
                [[i.ProjectType.SOUND_CLS], "easydlLiteVoice"],
                [
                  [i.ProjectType.VIDEO_CLS, i.ProjectType.VIDEO_TRACKING],
                  "easydlLiteVideo",
                ],
                [
                  [i.ProjectType.ML, i.ProjectType.TIME_SERIES_FORECAST],
                  "easydlLiteStructuredData",
                ],
                [
                  [i.ProjectType.RETAIL, i.ProjectType.RETAIL_DD],
                  "easydlRetail/app/list",
                ],
              ]);
              let n = "easydlLiteImage";
              for (const [o, i] of t)
                if (o.find((t) => t === e)) {
                  n = i;
                  break;
                }
              return n;
            },
            E = (e = {}) => {
              const t = Object.entries(e)
                .map(([e, t]) => `${e}=${encodeURIComponent(t)}`)
                .join("&");
              return t ? `?${t}` : "";
            },
            L = (e, t) => {
              const n = e.split("/");
              return (
                n.shift(),
                n.splice(t.codenameIndex, 1),
                n.splice(0, 1, t.prefix),
                n.splice(3, 0, t.suffix),
                n.join("/")
              );
            },
            b = (e) => {
              let t = null,
                n = "";
              const o = (0, a.usePMService)().getModulePermission("codename");
              if ((f({}), o[e[0]] || o[e[1]])) {
                const i = o[e[0]] ? 0 : 1;
                (n = e[i]), (t = i + 1);
              }
              if (r.Z.has(+e[0]) || r.Z.has(+e[1])) {
                const o = r.Z.has(+e[0]) ? 0 : 1;
                t = o + 2;
                const i = e[o],
                  a = e[o + 1];
                n = p(+i, +a);
              }
              n && T(n),
                null !== t &&
                  e[t].startsWith("org-") &&
                  e[t + 1].startsWith("proj-") &&
                  f({ orgId: e[t], projectId: e[t + 1] });
            },
            S = (e, t, n) => {
              const o = "public";
              if (e === o) return !0;
              const i = (0, a.usePMService)(),
                r = i.getModulePermission("base");
              if ("ai" === o) return !0;
              const [s, l] = (r || o).split("_");
              return (
                !(!l || (!t && !n)) &&
                !!s.includes(e) &&
                !(t && +l < t) &&
                !(n && +l > n)
              );
            };
        },
        27714: function (e, t, n) {
          "use strict";
          n.r(t);
          var o = n(70748),
            i = n.n(o),
            a = n(47253),
            r = n.n(a),
            s = n(49995),
            l = (n(30541), n(32121)),
            c = n(67356),
            u = n(98557),
            d = n.n(u);
          let p = !1;
          function m() {
            if (p) return;
            p = !0;
            const e = d().prototype.push;
            function t(t, n, o) {
              const i = e.bind(this);
              return n || o
                ? i(t, n, o)
                : i(t).catch((e) =>
                    d().isNavigationFailure(
                      e,
                      d().NavigationFailureType.redirected
                    )
                      ? Promise.resolve(e.from)
                      : (console.log({ err: e }), Promise.reject(e))
                  );
            }
            d().prototype.push = t;
          }
          var f = n(6460),
            T = n.n(f),
            y = n(82670),
            g = n(62396);
          n(57658);
          function h(e) {
            const t = "default";
            for (let n = e.length - 1; n >= 0; n--) {
              const o = e[n];
              if (!o) continue;
              const i = o.components.default;
              if (!i) continue;
              const a = "function" === typeof i && !i.options;
              if (a) continue;
              const r = v(i);
              if (!r && 0 === n) return t;
              if (r) return r;
            }
          }
          function v(e) {
            const t = "function" === typeof e && e.options,
              n = t ? e.options : e;
            if (n.layout) return n.layout;
            {
              const e = (n.mixins || []).slice().reverse(),
                t = n.extends || [];
              return e.concat(t).reduce((e, t) => e || v(t), void 0);
            }
          }
          function _(e) {
            const t = [];
            return (
              e.matched.forEach((e) => {
                Object.keys(e.components).forEach((n) => {
                  const o = e.components[n],
                    i = "function" === typeof o && !o.options;
                  i &&
                    t.push(
                      o().then((t) => {
                        e.components[n] = E(t);
                      })
                    );
                });
              }),
              Promise.all(t)
            );
          }
          function E(e) {
            const t = e,
              n =
                t.__esModule ||
                ("undefined" !== typeof Symbol &&
                  "Module" === t[Symbol.toStringTag]);
            return n ? t.default : t;
          }
          function L(e, t) {
            return (0, a.defineComponent)({
              name: "RouterLayout",
              data() {
                return {
                  layoutName: void 0,
                  layouts: (0, a.shallowReactive)(Object.create(null)),
                };
              },
              async beforeRouteEnter(n, o, i) {
                await _(n);
                const a = h(n.matched),
                  r = a ? E(await e(t(a))) : void 0;
                i((e) => {
                  (e.layoutName = a), a && r && (e.layouts[a] = r);
                });
              },
              async beforeRouteUpdate(n, o, i) {
                try {
                  await _(n);
                  const o = h(n.matched) || this.layoutName;
                  o && !this.layouts[o] && (this.layouts[o] = E(await e(t(o)))),
                    (this.layoutName = o),
                    i();
                } catch (je) {
                  i(je);
                }
              },
              render(e) {
                const n = this.layoutName && this.layouts[this.layoutName];
                return n
                  ? e(n, {
                      key: t(this.layoutName),
                      props: { layout: this.layoutName },
                    })
                  : e("span");
              },
            });
          }
          var b = n(75420);
          m(), i().use(d()), i().use(c.Z);
          let S = {};
          const P = "public";
          "public" !== P && (S = n(87326)(`./${P}`));
          const I = (0, l.usePMService)();
          "public" === P && (T().codename = T().codenameDefault),
            I.usePermissions((0, l.mergeConfigs)(T(), S));
          const C = I.getModulePermission("path"),
            A = I.getModulePermission("prefix"),
            N = b.Z.find(
              (e) =>
                e.path ===
                (0, l.usePMService)().getModulePermission("defaultCodenamePath")
            );
          N && (N.path = `/:${C.join("/:")}?`);
          const O = L(
              (e) => n(2115)("./" + e + ".vue"),
              (e) => {
                switch (e) {
                  case "default":
                  case "custom":
                  case "contentCustom":
                    return "default";
                  default:
                    return e;
                }
              }
            ),
            w = (e, t) => e === t || `${e}/` === t || `${t}/` === e,
            x = (e) => ({
              path: "/",
              component: O,
              children: (0, y.enhanceRoutes)(e, {
                beforeEachRouteLeave(e) {
                  return (t, n, o) => {
                    if (!e) return void o();
                    const i = (0, g.JY)(t);
                    if (!i) return void e(t, n, o);
                    const a = M.resolve(i);
                    w(t.fullPath, a.route.fullPath)
                      ? "codename-jumpTo" === n.name || a.route.matched.length
                        ? e(t, n, o)
                        : o({
                            name: "codename-jumpTo",
                            params: { codename: n.params.codename },
                            query: {
                              oldPath: a.location.path,
                              oldQuery: JSON.stringify(a.location.query),
                            },
                          })
                      : o(a.location);
                  };
                },
              }),
            });
          A &&
            A.forEach((e) => {
              b.Z.unshift({
                path: e.path,
                redirect: (t) => ({
                  path: "/jumping",
                  query: {
                    oldQuery: JSON.stringify(t.query),
                    oldPath: t.path,
                    prefix: e.prefix,
                    suffix: e.suffix,
                    index: e.codenameIndex,
                  },
                }),
              });
            });
          const M = new (d())({
              mode: "history",
              base: "/easydl/app",
              routes: [
                { path: `/:${C.join("/:")}/models`, component: {} },
                x(b.Z),
              ],
            }),
            k = (e) => {
              e.component("before-route-leave", y.BeforeRouteLeave);
            };
          var j = M,
            D = n(99518),
            R = n(70433),
            U = n(40336),
            $ = n(36317),
            V = n(84259);
          async function Z(e, t = {}) {
            const { result: n } = await V.caller.send(e, t),
              o = await n;
            return o;
          }
          class B {
            constructor() {
              (0, D.Z)(this, "customConfigPromise", void 0),
                (0, D.Z)(this, "permissionPromise", void 0);
            }
            reset() {
              R.permission.usePMService().reset(),
                (this.customConfigPromise = void 0),
                (this.permissionPromise = void 0);
            }
            async hook(e, t, n) {
              var o;
              await Promise.all([
                this.fetchCustomConfig(),
                this.fetchPermissions(),
              ]);
              const { codename: i, orgId: a, projectId: r } = e.state,
                s = t.path.split("/")[1],
                l = () => {
                  (0, g.BW)(),
                    n({ path: `/${i}/${a}/${r}/nopermission`, query: t.query });
                };
              R.permission
                .usePMService()
                .pmRouteHook(
                  l,
                  s,
                  null === (o = t.meta) || void 0 === o ? void 0 : o.moduleName
                );
            }
            fetchCustomConfig() {
              return (
                this.customConfigPromise ||
                  (this.customConfigPromise = Z("common/customconfig").then(
                    (e) => {
                      const t = {
                          dataType: "DATASET_AVAILABLE_DATA_TYPE",
                          projectType: "DATASET_AVAILABLE_PROJECT_TYPE",
                          templateType: "DATASET_AVAILABLE_TEMPLATE_TYPE",
                          aisEnable: "INTERANNO_CONFIG.SUPORT_MODES",
                        },
                        n = (e = {}, t = "") => {
                          const o = t.split(".");
                          return e[o[0]]
                            ? 1 === o.length
                              ? e[o[0]]
                              : n(e[o[0]], t.slice(t.indexOf(".") + 1))
                            : e;
                        },
                        o = (e = {}, t = "", n) => {
                          const i = t.split(".");
                          e[i[0]] &&
                            (1 !== i.length
                              ? o(e[i[0]], t.slice(t.indexOf(".") + 1), n)
                              : (e[i[0]] = n));
                        };
                      Object.keys(e).forEach((i) => {
                        const a = t[i];
                        if (a)
                          if ("aisEnable" !== i) window.SP[a] = e[i];
                          else {
                            const t = n(window.SP, a);
                            e[i] ||
                              o(
                                window.SP,
                                a,
                                [...t].filter((e) => "model" !== e)
                              );
                          }
                      });
                    }
                  )),
                this.customConfigPromise
              );
            }
            async fetchPermissions() {
              return (
                this.permissionPromise ||
                  (this.permissionPromise = Z("bml/getpermission").then((e) => {
                    const t = R.permission.usePMService();
                    t.useWebPermissions(e.result);
                  })),
                this.permissionPromise
              );
            }
          }
          const G = new B(),
            q = (0, l.usePMService)(),
            F = (e) => {
              e.forEach((e) => {
                e.name &&
                  (e.name = X(e.name, [
                    {
                      key: "codename",
                      value: q.getModulePermission("path").join("-"),
                    },
                    {
                      key: "mt-tt",
                      value: q.getModulePermission("path").join("-"),
                    },
                    {
                      key: "pt-tt",
                      value: q.getModulePermission("path").join("-"),
                    },
                  ])),
                  e.path &&
                    (e.path = X(e.path, [
                      {
                        key: ":codename",
                        value: `:${q.getModulePermission("path").join("/:")}`,
                      },
                      {
                        key: ":mt/:tt",
                        value: `:${q.getModulePermission("path").join("/:")}`,
                      },
                      {
                        key: ":pt/:tt",
                        value: `:${q.getModulePermission("path").join("/:")}`,
                      },
                    ])),
                  e.children && F(e.children);
              });
            },
            X = (e, t) => (
              t.forEach(({ key: t, value: n }) => {
                e = e.replace(t, n);
              }),
              e
            ),
            z = (e, t) => e === t || `${e}/` === t || `${t}/` === e,
            Y = { name: U.NOT_FOUND, component: $["default"] };
          class K {
            constructor(e, t, n) {
              (0, D.Z)(this, "store", void 0),
                (0, D.Z)(this, "router", void 0),
                (0, D.Z)(this, "assignLayout", void 0),
                (0, D.Z)(this, "blacklist", []),
                (0, D.Z)(this, "mount", async (e, t, n) => {
                  if (e.name === U.NOT_FOUND) return void n();
                  const o = R.permission.usePMService();
                  R.env.isCloud
                    ? o.useOwnerPermissions()
                    : await G.hook(this.store, e, n);
                  const i = (0, g.Ly)(e);
                  if (!i && e.matched.length) return void n();
                  const a = i
                      ? this.router.resolve(i)
                      : this.router.resolve({ path: e.path, query: e.query }),
                    r = a.route.path.split("/")[1];
                  let s = `@baidu/afe-app-${r}`;
                  const l = [
                      "annotate",
                      "model",
                      "validate",
                      "deploy",
                      "vas",
                      "dataset",
                    ],
                    c = a.route.path.split("/").includes("retail");
                  if (
                    (c && l.includes(r) && (s = `@baidu/afe-app-retail-${r}`),
                    this.blacklist.includes(s) ||
                      a.route.matched.length ||
                      t.path === a.route.path)
                  )
                    return z(e.fullPath, a.route.fullPath)
                      ? void n()
                      : void n(a.location);
                  System.import(s)
                    .then((e) => {
                      if ((this.blacklist.push(s), !e.routes)) return void n();
                      const o = [...e.routes];
                      F(o),
                        n({
                          ...this.addRoutes(o, a.route),
                          ...("codename-jumpTo" === t.name
                            ? { replace: !0 }
                            : {}),
                        });
                    })
                    .catch((e) => {
                      n(this.addRoutes(void 0, a.route));
                    });
                }),
                (this.store = e),
                (this.router = t),
                (this.assignLayout = n);
            }
            addRoutes(e, t) {
              this.router.addRoutes([
                this.assignLayout(e || [{ ...Y, path: t.path }]),
              ]);
              const n = this.router.resolve(t.fullPath);
              return n.location;
            }
          }
          const W = (e, t, n) => {
              const o = new K(e, t, n);
              t.beforeEach(o.mount);
            },
            H = () => {
              const e = "public";
              if ("public" === e) return;
              const t = window.location.pathname.split("/");
              t.splice(0, 3), (0, g.wR)(t);
            };
          var J = n(49713),
            Q = {
              functional: !0,
              render(e, t) {
                const n =
                  !t.children.length || t.children.every((e) => e.isComment);
                if (!t.parent.$route || !t.parent.$hasFlag || n) return;
                const { mt: o, firstTemplateType: i } = (0, l.useGlobalInfo)(
                    t.parent.$route
                  ),
                  a = t.props.tt || +i;
                if (!t.parent.$hasFlag(t.props.k, +o, a) || n) return;
                const r = t.props.container || "span";
                return e(r, { staticClass: t.data.staticClass }, t.children);
              },
            },
            ee = n(53014);
          const te = (e, t) => {
            const n = (e, n, o) => {
              const i =
                null == J.flags[e].standalone || !t.state.study.underStudyPlat;
              return i && (0, ee.Z)(e, n, o);
            };
            (e.prototype.$hasFlag = n),
              e.extend({ methods: { $hasFlag: n } }),
              e.component("has-flag", Q);
          };
          var ne = n(25442),
            oe = function () {
              var e = this,
                t = e.$createElement,
                n = e._self._c || t;
              return n(
                "div",
                { staticClass: "eg-hexagon-loading" },
                [n("eg-hexagon-loading", { attrs: { size: "l" } })],
                1
              );
            },
            ie = [],
            ae = n(1001),
            re = {},
            se = (0, ae.Z)(re, oe, ie, !1, null, "afde520c", null),
            le = se.exports;
          const ce = "loading-directive-wrapper",
            ue = 32,
            de = `${ue}px`,
            pe = `calc(50% - ${de} / 2)`,
            me = (e) => {
              const t = e.getBoundingClientRect(),
                n = window.innerHeight;
              return t.top < n - ue && t.top + t.height / 2 >= n
                ? (n - t.top) / 2 + "px"
                : t.top + t.height / 2 <= 0
                ? t.height + t.top >= n
                  ? pe
                  : (t.height + t.top) / 2 - t.top + "px"
                : pe;
            },
            fe = (e) => {
              const t = i().extend({
                render(t) {
                  return t(e);
                },
              });
              return new t().$mount().$el;
            },
            Te = (e, t) => {
              const n = e;
              n.tagName;
              const o = n.style.position;
              if (o && "relative" !== o) return;
              (n.__ORIGINAL_STYLE_OVERFLOW__ = n.style.overflow || ""),
                (n.style.position = "relative");
              const i = n.querySelector(`#${ce}`),
                a = t ? me(n) : pe;
              if (i) {
                const e = i.querySelector(".loading-spinner");
                e && (e.style.top = a);
              } else {
                const e = document.createElement("div");
                (e.className = "loading-spinner"),
                  (e.innerHTML =
                    '<div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div>'),
                  (e.style.position = "absolute"),
                  (e.style.top = a),
                  (e.style.fontSize = de);
                const o = document.createElement("div");
                (o.id = ce),
                  (o.style.position = "absolute"),
                  (o.style.top = "0"),
                  (o.style.left = "0"),
                  (o.style.bottom = "0"),
                  (o.style.right = "0"),
                  (o.style.zIndex = t ? "999" : "-1000"),
                  (o.style.opacity = t ? "1" : "0"),
                  (o.style.textAlign = "center"),
                  (o.style.backgroundColor = "#fff");
                const i = fe(le);
                o.appendChild(i);
                const r = t ? n.style.position || "relative" : n.style.position;
                (n.style.position = r), n.prepend(o), (n.__LOADING_CHILD__ = o);
              }
            },
            ye = {
              inserted(e, { value: t, arg: n }) {
                "update" !== n && Te(e, t);
              },
              update(e, { value: t, arg: n, oldValue: o }) {
                "update" === n && t !== o && Te(e, t);
              },
              componentUpdated(e, { value: t, oldValue: n }) {
                if (t === n) return;
                const o = e;
                if (!o.__LOADING_CHILD__) return;
                const i = t
                  ? o.style.position || "relative"
                  : o.__ORIGINAL_POSITION__;
                (o.__ORIGINAL_POSITION__ = o.style.position),
                  (o.style.position = i || "relative"),
                  (o.__LOADING_CHILD__.style.transition = "all ease 0.3s"),
                  (o.__LOADING_CHILD__.style.zIndex = t ? "9000" : "-1000"),
                  (o.__LOADING_CHILD__.style.opacity = t ? "1" : "0");
              },
              unbind(e) {
                const t = e;
                t.style &&
                  t.__ORIGINAL_POSITION__ &&
                  (t.style.position = t.__ORIGINAL_POSITION__),
                  t.style &&
                    t.__ORIGINAL_STYLE_OVERFLOW__ &&
                    (t.style.overflow = t.__ORIGINAL_STYLE_OVERFLOW__),
                  t.__LOADING_CHILD__ && t.__LOADING_CHILD__.remove(),
                  delete t.__LOADING_CHILD__;
              },
            };
          var ge = ye,
            he = n(51898),
            ve = n.n(he);
          class _e {
            constructor(e = 200) {
              (0, D.Z)(this, "cache", void 0),
                (0, D.Z)(this, "initialize", void 0),
                (0, D.Z)(this, "interval", void 0),
                (0, D.Z)(this, "timer", void 0),
                (this.cache = []),
                (this.initialize = !1),
                (this.interval = e),
                (this.timer = null),
                this.init();
            }
            init() {
              const { ready: e } = this.polling(this.checkReady);
              e.then(() => {
                (this.initialize = !0), this.clearCache();
              });
            }
            clearCache() {
              const e = this.cache.length;
              if (e) for (let t = e; t > 0; t--) this.doTrack(this.cache.pop());
            }
            polling(e) {
              const t = new Promise((t) => {
                  const n = () => {
                    this.timer = setTimeout(() => {
                      e() ? t() : n();
                    }, this.interval);
                  };
                  n();
                }),
                n = () => this.timer && clearTimeout(this.timer);
              return { ready: t, cancel: n };
            }
            checkReady() {
              return !!window._hmt;
            }
            doTrack({ key: e, label: t, name: n }) {
              ve().trackBehavior({
                action: "click",
                category: e,
                name: n || "",
                value: t,
              }),
                window._hmt && window._hmt.push(["_trackEvent", e, "点击", t]);
            }
            run(e, t, n) {
              this.initialize
                ? this.doTrack({ key: e, label: t, name: n })
                : this.cache.push({ key: e, label: t, name: n });
            }
          }
          function Ee() {
            return new _e();
          }
          var Le = n(95812);
          const be = Ee(),
            Se = (e, t) => {
              (e.prototype.$SP = Le),
                e.directive("loading", ge),
                e.directive("permission", R.permission.vDirective),
                e.directive("dlpermission", l.vPermission);
              const n = (0, l.getConvertPath)(
                t.state,
                (0, l.usePMService)().getModulePermission("path") || []
              );
              e.mixin({
                methods: {
                  $convertPath(e, t) {
                    return n(e, t);
                  },
                },
              }),
                (e.prototype.$sail = U),
                (e.prototype.$track = (e, n, o) => {
                  const { userId: i } = t.state.user;
                  be.run.call(
                    be,
                    e,
                    n && `${n}${o && i ? `-userId: ${i}` : ""}`
                  );
                }),
                (e.prototype.$SP = {
                  get(e) {
                    return window.SP[e];
                  },
                }),
                window.addEventListener("afe:notifyRootApp", (e) => {
                  const { key: t, payload: n } = e.detail;
                  "breadcrumb" === t && (0, ne.GJ)(n.items, n.back),
                    "clearLoading" === t && (0, g.BW)();
                }),
                (0, l.usePMService)().getModulePermission("isPublic") &&
                  ve().init({ appTag: "ai-control-pc", autoTrack: !0 });
            };
          async function Pe(e, t) {
            var n, o, i;
            const { mt: a } = (0, l.useGlobalInfo)(t),
              r = e.prototype.$hasFlag("deploy", +a);
            if (r) return !0;
            if (!t.matched || !t.matched.length) return !0;
            if (
              null === (n = t.matched[t.matched.length - 1]) ||
              void 0 === n ||
              null === (o = n.components) ||
              void 0 === o ||
              !o.default
            )
              return !0;
            const s =
                "function" ===
                typeof t.matched[t.matched.length - 1].components.default
                  ? await t.matched[t.matched.length - 1].components.default()
                  : t.matched[t.matched.length - 1].components.default,
              c =
                null === s ||
                void 0 === s ||
                null === (i = s.default) ||
                void 0 === i
                  ? void 0
                  : i.meta;
            if (!c) return !0;
            const u = [c].reduce(
              (e, t) => ("standalone" in t ? t.standalone : e),
              !1
            );
            return !u;
          }
          const Ie = (e, t) => {
              t.beforeEach(async (n, o, i) => {
                if ([U.NOT_FOUND, "coming"].includes(n.name || ""))
                  return void i();
                const a = t.resolve(n.fullPath),
                  r = await Pe(e, a.route);
                if (!r)
                  return (
                    console.error(
                      "Page is only available under standalone mode"
                    ),
                    void i({
                      path: "/imgcls/overview",
                      params: o.params,
                      query: o.query,
                    })
                  );
                i();
              });
            },
            Ce = (e, t, n, o) => {
              if ("study" !== o.name)
                if ("study" !== o.query.from);
                else {
                  const { mt: e } = (0, l.useGlobalInfo)(o),
                    t = Number.isNaN(e)
                      ? U.MODEL_TYPES.IMG_CLS
                      : e || U.MODEL_TYPES.IMG_CLS;
                  window.location.replace(
                    `/easydl/app/study?mt=${t}&from=study`
                  );
                }
              else
                n.beforeResolve((e, t, n) => {
                  "study" !== e.query.from
                    ? n({ query: { from: "study" } })
                    : n();
                });
            };
          var Ae = n(9669),
            Ne = n.n(Ae),
            Oe = n(65685),
            we = n(23644),
            xe = n(90903),
            Me = n.n(xe);
          const ke = (0, we.addLocalResource)("error", Me());
          function je(e) {
            return e ? ke(e) : "";
          }
          var De = n(14658),
            Re = n(76489);
          async function Ue(e, t) {
            if (
              "server" ===
              {
                VUE_APP_FEAT_TOGGLE_URL: "",
                NODE_ENV: "production",
                VUE_APP_API_BASE_URL: "/easydl/api",
                VUE_APP_LARGE_API_BASE_URL: "/easydl/api",
                VUE_APP_WEIRWOOD_TOKEN: "8cbdddd9708e40f58535b9252ac776e8",
                VUE_APP_WEIRWOOD_BUILDID: "2023-10-18-17:11:48-e5fb1b7",
                VUE_APP_APP_ROUTER_BASE: "/easydl/app",
                VUE_APP_APP_LANG: "cn",
                VUE_APP_IS_PROD: "true",
                VUE_APP_APP_NAME: "lite",
                VUE_APP_COMPANY_NAME: "public",
                VUE_APP_ON_LINE_URI: "",
                VUE_APP_FAQ_URL: "https://ai.baidu.com/ai-doc/EASYDL/5k38n2whg",
                VUE_APP_MARKET_URL:
                  "https://ai.baidu.com/docs#/AI_Marketing_summary/top",
                VUE_APP_FORUM_URL: "http://ai.baidu.com/forum/topic/list/190",
                VUE_APP_INTRO_VIDEO:
                  "http://hbnm3eqf9mju26279qj.exp.bcevod.com/mda-if5h6bsqcd7sfmh2/mda-if5h6bsqcd7sfmh2.mp4",
                VUE_APP_IMG_CLS_VIDEO: "undefined",
                VUE_APP_OBJ_VIDEO:
                  "http://hbnm3eqf9mju26279qj.exp.bcevod.com/mda-if5h5g5v28tf44us/mda-if5h5g5v28tf44us.mp4",
                VUE_APP_SOUND_VIDEO:
                  "http://hbnm3eqf9mju26279qj.exp.bcevod.com/mda-igjgeja0r8it9ekh/mda-igjgeja0r8it9ekh.mp4",
                VUE_APP_BOS_BUCKET: "undefined",
                VUE_APP_EN_API: "http://aipe-easydl-doc.bj.bcebos.com/API.pdf",
                VUE_APP_EN_FAQ: "http://aipe-easydl-doc.bj.bcebos.com/FAQ.pdf",
                VUE_APP_BOS_AK: "undefined",
                VUE_APP_BOS_SK: "undefined",
                BASE_URL: "//aip-static.cdn.bcebos.com/afe/easydl-lite/latest/",
              }.VUE_ENV
            )
              return;
            const o = await n.e(406).then(n.bind(n, 60406));
            o.default.alert(e, t);
          }
          const $e = (e, t, n) => {
            Ne().interceptors.response.use(void 0, (e) => {
              e &&
                console.error(
                  `[${e.status}] ${e.config ? e.config.data : "no data"} ${
                    e.data
                  }`
                );
            }),
              Ne().interceptors.response.use((e) => {
                let n = null;
                try {
                  n = "string" === typeof e.data ? JSON.parse(e.data) : e.data;
                } catch (i) {
                  return e;
                }
                if (!n) return Ue("Malformed Response", t), e;
                if (!n.success && n.code === U.NOPERMISSION_CODE) {
                  const { protocol: t, host: n } = window.location,
                    o = `${t}//${n}/easydl/app/${(0, g.Nc)().url}/nopermission`;
                  return (
                    o === window.location.href || (window.location.href = o), e
                  );
                }
                const o = "global" in (n.message || {});
                return (
                  n.success ||
                    !o ||
                    (e.config.fatal
                      ? Ue(je(n.message.global), t)
                      : e.config.errorSurpressed ||
                        t.commit("error/pushMsg", je(n.message.global))),
                  e
                );
              });
            const o = async (e, n = {}, o = {}) => {
                const i = Oe.find((t) => t.url === e);
                if (i) return i.res;
                const a =
                    (0, l.usePMService)().getModulePermission("nobody") || [],
                  r = a.find((t) => t === e),
                  s = (0, l.usePMService)().getModulePermission("isPublic")
                    ? {}
                    : (0, g.Nc)().obj,
                  c = {
                    baseURL: "/easydl/api",
                    method: "post",
                    maxRedirects: 0,
                    timeout: 3e4,
                    responseType: "json",
                    headers: {
                      "X-Requested-With": "XMLHttpRequest",
                      ...t.state.requestHeaders,
                    },
                    ...o,
                    ...(r ? { url: r } : {}),
                    data: { ...n, method: e, ...s },
                  },
                  u = await Ne()(c);
                return null === u || void 0 === u ? void 0 : u.data;
              },
              i = async ({
                method: e,
                params: t,
                cancelToken: n,
                dontPanic: i,
              }) => {
                var a;
                const r =
                    "[object Object]" === Object.prototype.toString.call(t),
                  s = r && t[U.NO_REDIRECT];
                r && delete t[U.NO_REDIRECT];
                const l = await o(e, t, { cancelToken: n, errorSurpressed: i });
                if (!l) return;
                const c =
                  l.redirect ||
                  (null === (a = l.message) || void 0 === a
                    ? void 0
                    : a.redirect);
                if (!s && c && !l.success) {
                  const e = `${location.pathname}${location.search}`,
                    t = Re.serialize("goto", e, {
                      expires: (0, De.VA)(600),
                      path: "/",
                    }),
                    n = (e) => (document.cookie = e);
                  return n(t), (window.location.href = c), l;
                }
                return l;
              };
            V.caller.impl = {
              handle: i,
              onError: () => {},
              createCancelTokenSource: () => Ne().CancelToken.source(),
            };
          };
          function Ve(e) {
            const t = document.createElement("dummy").style,
              n = ["Webkit", "Moz", "O", "ms"],
              o = {};
            if ("undefined" === typeof o[e]) {
              const i = `${e.charAt(0).toUpperCase()}${e.substr(1)}`,
                a = `${e} ${n.join(i + " ")}${i}`.split(" ");
              o[e] = null;
              for (const n of a)
                if (void 0 !== t[n]) {
                  o[e] = n;
                  break;
                }
            }
            return o[e];
          }
          function Ze(e) {
            const t = !!/(Android\s(1.|2.))|(Silk\/1.)/i.test(
              navigator.userAgent
            );
            let n = !0;
            return (
              e.forEach((e) => {
                const o = !t && null !== Ve(e);
                o || (n = !1);
              }),
              n
            );
          }
          function Be() {
            return (
              !!document.createElementNS &&
              !!document.createElementNS("http://www.w3.org/2000/svg", "svg")
                .createSVGRect
            );
          }
          function Ge() {
            return "FileReader" in window;
          }
          const qe = [
              "order",
              "borderRadius",
              "perspective",
              "transformOrigin",
              "transition",
              "boxShadow",
              "wordWrap",
            ],
            Fe = (() => {
              const e = window.navigator.userAgent,
                t = e.indexOf("MSIE ");
              return t > 0 || !!navigator.userAgent.match(/Trident.*rv:11\./);
            })(),
            Xe = async () => {
              const e = Be() && Ze(qe) && Ge() && !Fe;
              if (!e) {
                const e = await n.e(763).then(n.bind(n, 21763));
                e.default.alert();
              }
            },
            ze = (e, t, n) => {
              n.beforeEach((e, n, o) => {
                t.dispatch("preparePage", e), o();
              }),
                n.afterEach(() => (0, g.BW)());
            },
            Ye = (e) => {
              e.directive("permission", R.permission.vDirective);
            };
          var Ke = n(31955),
            We = n(81354),
            He = n.n(We);
          const Je = "a2687a88bd822c20",
            Qe = "fa0a2b4821444c0e";
          function et() {
            function e() {
              return ((65536 * (1 + Math.random())) | 0)
                .toString(16)
                .substring(1);
            }
            return (
              e() +
              e() +
              "-" +
              e() +
              "-" +
              e() +
              "-" +
              e() +
              "-" +
              e() +
              e() +
              e()
            );
          }
          function tt() {
            const e = Date.parse(new Date().toString())
                .toString()
                .substr(0, 10),
              t = He().enc.Utf8.parse(Je),
              n = He().enc.Utf8.parse(Qe),
              o = et(),
              i = He().enc.Utf8.parse(o + "&" + e),
              a = He().AES.encrypt(i, t, {
                iv: n,
                mode: He().mode.CBC,
                padding: He().pad.ZeroPadding,
              });
            return a.toString();
          }
          function nt() {
            return Ke.Z.get("csrftoken") || et();
          }
          function ot() {
            return { "Relay-Token": tt(), csrftoken: nt() };
          }
          const it = () => {
            (0, g.yC)("ai", 1.1) &&
              Ne().interceptors.request.use((e) => {
                const t = ot();
                return (e.headers = { ...e.headers, ...t }), e;
              });
          };
          var at = n(23279),
            rt = n.n(at),
            st = n(65845),
            lt = n.n(st);
          const ct = (e) => {};
          we.i18n.addLocalResource("global", lt());
          const ut = new (i())({ data: { i18nLoadedAt: new Date() } }),
            dt = rt()(() => ut.$set(ut, "i18nLoadedAt", new Date()), 200),
            pt = (e) => {
              e.mixin({
                computed: {
                  $t() {
                    return (e, t = {}) => (
                      ct(ut.i18nLoadedAt), this.$i18n.t(e, t)
                    );
                  },
                },
                beforeCreate() {
                  const e = this.$options.__i18n || [];
                  let t = {};
                  for (const o of e) {
                    const e = JSON.parse(o);
                    t = { ...t, ...(0, we.flatten)(e) };
                  }
                  if (!e.length)
                    return void (this.$i18n = { t: we.i18n.getTmpT({}) });
                  if (this.$options.name) {
                    const e = this.$options.name;
                    we.i18n.addLocalResource(e, t), dt();
                  }
                  const n = we.i18n.getTmpT(t);
                  this.$i18n = { t: n };
                },
                methods: {
                  $g(e, t = {}) {
                    return we.i18n.t(`global:${e}`, t);
                  },
                },
              });
            };
          var mt = n(30266),
            ft = n(63792),
            Tt = n.n(ft),
            yt = n(13405),
            gt = n.n(yt),
            ht = n(72433),
            vt = function () {
              var e = this,
                t = e.$createElement,
                n = e._self._c || t;
              return e.disabled
                ? n(
                    "span",
                    { class: ["s-link", { disabled: e.disabled }] },
                    [e._t("default")],
                    2
                  )
                : e.to
                ? n(
                    "router-link",
                    { staticClass: "s-link", attrs: { to: e.to } },
                    [e._t("default")],
                    2
                  )
                : n(
                    "a",
                    e._g({ staticClass: "s-link" }, e.$listeners),
                    [e._t("default")],
                    2
                  );
            },
            _t = [],
            Et = (0, a.defineComponent)({
              props: {
                to: { type: [Object, String], default: "" },
                newtab: { type: Boolean, default: !1 },
                disabled: { type: Boolean, default: !1 },
              },
              setup(e) {
                const t = (0, a.computed)(() => (e.newtab ? "blank" : "self"));
                return { target: t };
              },
            }),
            Lt = Et,
            bt = (0, ae.Z)(Lt, vt, _t, !1, null, null, null),
            St = bt.exports,
            Pt = function () {
              var e = this,
                t = e.$createElement,
                n = e._self._c || t;
              return e.loaded
                ? e.hasPermission
                  ? n(
                      "div",
                      { staticClass: "retail-permission-view" },
                      [e._t("default")],
                      2
                    )
                  : n("div", { staticClass: "spin-container" }, [
                      e._v("暂无权限"),
                    ])
                : n(
                    "div",
                    { staticClass: "spin-container" },
                    [n("eg-hexagon-loading")],
                    1
                  );
            },
            It = [],
            Ct = n(89312),
            At = n(41405),
            Nt = (0, a.defineComponent)({
              props: { permission: { type: String, required: !0 } },
              setup(e) {
                const {
                  one: t,
                  loaded: n,
                  load: o,
                } = (0, Ct.uV)(() => (0, At.H)());
                o();
                const i = (0, a.computed)(() => {
                  var n;
                  return null === (n = t.value) || void 0 === n
                    ? void 0
                    : n[e.permission];
                });
                return { hasPermission: i, loaded: n };
              },
            }),
            Ot = Nt,
            wt = (0, ae.Z)(Ot, Pt, It, !1, null, "e0ba0bae", null),
            xt = wt.exports,
            Mt = function () {
              var e = this,
                t = e.$createElement,
                n = e._self._c || t;
              return n(
                "div",
                { staticClass: "subtitle" },
                [e._t("default")],
                2
              );
            },
            kt = [],
            jt = {},
            Dt = jt,
            Rt = (0, ae.Z)(Dt, Mt, kt, !1, null, null, null),
            Ut = Rt.exports;
          const $t = (e, t) =>
              (0, a.defineComponent)({
                layout: e.layout,
                props: e.props,
                setup(e) {
                  const n = (0, a.ref)(),
                    o = t.methodsToDelegate ?? [],
                    i = Object.fromEntries(
                      o.map((e) => [
                        e,
                        (...t) => {
                          const o = n.value;
                          if (o) {
                            const n = o[e];
                            n instanceof Function && n.apply(o, t);
                          }
                        },
                      ])
                    );
                  return t.customHook(e), { root: n, ...i };
                },
                render(t) {
                  return t(
                    e,
                    {
                      ref: "root",
                      scopedSlots: this.$scopedSlots,
                      attrs: this.$attrs,
                      props: this.$props,
                    },
                    this.$children
                  );
                },
              }),
            Vt = $t(yt.Form.Item, {
              methodsToDelegate: ["resetField", "clearValidate"],
              customHook: (e) => {
                e.prop && (0, Ct.No)(e.prop);
              },
            });
          function Zt(e) {
            return Object.assign(
              {},
              e.mixins ? Object.assign({}, ...e.mixins.map((e) => Zt(e))) : {},
              e.props
            );
          }
          const Bt = (0, a.defineComponent)({
            props: Zt(ft.InlineUploader),
            setup() {
              var e;
              const t =
                  null === (e = (0, a.getCurrentInstance)()) || void 0 === e
                    ? void 0
                    : e.proxy,
                n = (0, a.computed)(() =>
                  null === t || void 0 === t
                    ? void 0
                    : t.$store.state.user.userId
                ),
                o = (e) =>
                  `${n.value}/${e.uuid}-0000.${(0, ft.sanitizeFilename)(
                    e.name
                  )}`,
                i = (0, a.ref)(),
                r = () => {
                  var e;
                  null !== t &&
                    void 0 !== t &&
                    null !== (e = t.$parent) &&
                    void 0 !== e &&
                    e.$refs &&
                    Object.entries(t.$parent.$refs).forEach(([e, n]) => {
                      n === t && (t.$parent.$refs[e] = i.value);
                    });
                };
              return (
                (0, a.onMounted)(() => {
                  r();
                }),
                (0, a.onUpdated)(() => {
                  r();
                }),
                { defaultNaming: o, root: i }
              );
            },
            render(e) {
              return e(ft.InlineUploader, {
                ref: "root",
                scopedSlots: this.$scopedSlots,
                attrs: this.$attrs,
                props: {
                  ...this.$props,
                  naming: this.naming ?? this.defaultNaming,
                },
                on: this.$listeners,
              });
            },
          });
          var Gt = Bt;
          const qt = (e) => {
            gt().setConfig({ zIndex: 11e3 }),
              e.use(gt()),
              e.use(Tt()),
              e.use(mt.ZP.Plugin),
              e.component("the-loading", le),
              e.component("subtitle", Ut),
              e.component("the-link", St),
              e.component("nuxt-link", St),
              e.component("retail-permission", xt),
              e.component("the-inline-uploader", Gt),
              e.directive("click-outside", ft.vClickOutside),
              (e.prototype.$error = (e) => {
                yt.Toast.error({
                  message: e,
                  type: "error",
                  isCountingDown: !0,
                  showClose: !0,
                });
              }),
              e.use(ht.ZP),
              e.component("eg-form-item", Vt);
          };
          var Ft = n(59391);
          const Xt = () => (0, Ft.Z)(),
            zt = async () => {
              if ((0, g.yC)("ai", 1.2)) {
                const e = await V.caller.send("deploy/options", {}).result;
                if (!e.success) return;
                const t = (0, l.usePMService)(),
                  n = { ...e.result };
                Object.values(e.result).forEach((e) => {
                  e.forEach((e) => {
                    +e.split("-")[0] > 1e4 &&
                      (n.industry ? n.industry.push(e) : (n.industry = [e]));
                  });
                }),
                  (t.state.permission.codename = n);
              }
            },
            Yt = window.location.href.split("/easydl/app")[1],
            Kt = j.resolve({ path: Yt }).route,
            Wt = Xt(),
            Ht = "public";
          i().use(r());
          const Jt = () => {
            H(),
              te(i(), s.Z),
              W(s.Z, j, x),
              Ie(i(), j),
              Se(i(), s.Z),
              Ce(i(), s.Z, j, Kt),
              $e(i(), s.Z, j),
              Xe(),
              ze(i(), s.Z, j),
              Ye(i()),
              pt(i()),
              qt(i()),
              k(i()),
              it();
            const e = [
              "tutorial" === Ht
                ? n
                    .e(444)
                    .then(n.bind(n, 97861))
                    .then(({ install: e }) => e({ router: j, rootAppBus: Wt }))
                : void 0,
              n
                .e(963)
                .then(n.t.bind(n, 73963, 23))
                .then(({ install: e }) =>
                  e(
                    i(),
                    {
                      buildid: "2023-10-18-17:11:48-e5fb1b7",
                      token: "8cbdddd9708e40f58535b9252ac776e8",
                    },
                    { dev: !0 }
                  )
                ),
              zt(),
            ].filter(Boolean);
            return Promise.all(e);
          };
          (i().config.productionTip = !1),
            Jt().then(() => {
              new (i())({
                router: j,
                store: s.Z,
                created() {
                  s.Z.dispatch("nuxtClientInit", Kt);
                },
                mounted() {
                  Wt.emit("mounted", this);
                },
                render: (e) => e("router-view"),
              }).$mount("#app");
            });
        },
        49995: function (e, t, n) {
          "use strict";
          n.d(t, {
            Z: function () {
              return H;
            },
          });
          var o = n(70748),
            i = n.n(o),
            a = n(38342),
            r = n.n(a),
            s = n(84259),
            l = { _: "invitation" };
          const c = () => ({ isPublic: !1, typeList: {}, initialized: !1 }),
            u = {
              setPublic(e, { datasetId: t, isPublic: n }) {
                (e.isPublic = n), (e.typeList = { ...e.typeList, [t]: n });
              },
              initTypeList(e, t) {
                const n = {};
                t.forEach(({ id: e, isPublic: t }) => {
                  n[e] = t;
                }),
                  (e.typeList = { ...e.typeList, ...n }),
                  (e.initialized = !0);
              },
            };
          var d = { namespaced: !0, state: c, mutations: u };
          const p = () => ({ integrationSubmitted: !1, platforms: [] }),
            m = {
              submitIntegration(e) {
                e.integrationSubmitted = !0;
              },
              setPlatforms(e, t) {
                e.platforms = t;
              },
              resetSubmit(e) {
                e.integrationSubmitted = !1;
              },
              resetPlatforms(e) {
                e.platforms = [];
              },
            };
          var f = { namespaced: !0, state: p, mutations: m };
          const T = () => ({ msg: "" }),
            y = {
              pushMsg(e, t) {
                e.msg = t;
              },
              clearMsg(e) {
                e.msg = "";
              },
            };
          var g = { namespaced: !0, state: T, mutations: y },
            h = n(98989);
          const v = 0,
            _ = 10;
          async function E(e) {
            var t;
            const { offset: n, pageSize: o } = e;
            (e.offset = n || v), (e.pageSize = o || _);
            const i = await s.caller.send("model/list", e).result;
            if (!i.success) return { success: !1, result: {} };
            const a = !(
              null === i ||
              void 0 === i ||
              null === (t = i.result) ||
              void 0 === t ||
              !t.items
            );
            return a && (i.result.items = i.result.items.map(h.Z)), i;
          }
          var L = {
            where: E,
            find: async (e) => {
              const t = await s.caller.send("model/detail", e).result;
              return t.success
                ? ((t.result = (0, h.Z)(t.result)),
                  t.result.id || (t.result.id = e.id),
                  t)
                : { success: !1, result: {} };
            },
            all: (e) => E(Object.assign({}, e, { offset: 0, pageSize: 1e3 })),
            save: (e) => {
              const t = Object.assign({}, e);
              return (
                ["phone", "email"].forEach((e) => {
                  (t[e] || "").includes("*") && (t[e] = null);
                }),
                s.caller.send("model/save", t).result
              );
            },
          };
          const b = () => ({ models: [], offset: 0, pageSize: 4, total: 0 }),
            S = {
              async loadList({ dispatch: e, commit: t, state: n }, o) {
                t("startLoadList", o);
                const { offset: i, pageSize: a } = n,
                  { type: r, templateType: s } = o,
                  l = await L.where({
                    offset: i,
                    pageSize: a,
                    type: r,
                    templateType: s,
                  });
                if (o.id) {
                  const t = l.result.items.some((e) => e.id === o.id),
                    n = i + a;
                  if (!t && n < l.result.total)
                    return void (await e("loadList", { ...o, offset: n }));
                }
                t("endLoadList", l.result);
              },
            },
            P = {
              pagination(e) {
                return {
                  offset: e.offset,
                  pageSize: e.pageSize,
                  total: e.total,
                };
              },
            },
            I = {
              startLoadList(e, t) {
                ["offset", "pageSize"].forEach((n) => {
                  n in t && (e[n] = t[n]);
                });
              },
              endLoadList(e, t) {
                (e.models = t.items), (e.total = t.total);
              },
            };
          var C = {
            namespaced: !0,
            state: b,
            getters: P,
            actions: S,
            mutations: I,
          };
          const A = async (e) => {
            const t = await s.caller.send("retail/model/list", e).result;
            return t.success
              ? ((t.result.items = t.result.items.map(h.Z)), t)
              : t;
          };
          var N = {
            where: A,
            all: (e) => A({ ...e, offset: 0, pageSize: 1e3 }),
          };
          const O = () => ({ models: [], offset: 0, pageSize: 4, total: 0 }),
            w = {
              async loadList({ dispatch: e, commit: t, state: n }, o) {
                t("startLoadList", o);
                const { offset: i, pageSize: a } = n,
                  { type: r, templateType: s } = o,
                  l = await N.where({
                    offset: i,
                    pageSize: a,
                    type: r,
                    templateType: s,
                  });
                if (o.id) {
                  const t = l.result.items.some((e) => e.id === o.id),
                    n = i + a;
                  if (!t && n < l.result.total)
                    return void (await e("loadList", { ...o, offset: n }));
                }
                t("endLoadList", l.result);
              },
            },
            x = {
              pagination(e) {
                return {
                  offset: e.offset,
                  pageSize: e.pageSize,
                  total: e.total,
                };
              },
            },
            M = {
              startLoadList(e, t) {
                ["offset", "pageSize"].forEach((n) => {
                  n in t && (e[n] = t[n]);
                });
              },
              endLoadList(e, t) {
                (e.models = t.items), (e.total = t.total);
              },
            };
          var k = {
            namespaced: !0,
            state: O,
            getters: x,
            actions: w,
            mutations: M,
          };
          const j = () => ({ underStudyPlat: !1 }),
            D = {
              setFlag(e, t) {
                e.underStudyPlat = t;
              },
            };
          var R = { namespaced: !0, state: j, mutations: D };
          const U = () => ({ draft: null }),
            $ = {
              setDraft(e, t) {
                e.draft = { ...t, labelCount: t.labelIds.length };
              },
              dropDraft(e) {
                e.draft = null;
              },
            };
          var V = { namespaced: !0, state: U, mutations: $ },
            Z = n(40336),
            B = n(14144),
            G = n.n(B),
            q = n(76489);
          const F =
              {
                VUE_APP_FEAT_TOGGLE_URL: "",
                NODE_ENV: "production",
                VUE_APP_API_BASE_URL: "/easydl/api",
                VUE_APP_LARGE_API_BASE_URL: "/easydl/api",
                VUE_APP_WEIRWOOD_TOKEN: "8cbdddd9708e40f58535b9252ac776e8",
                VUE_APP_WEIRWOOD_BUILDID: "2023-10-18-17:11:48-e5fb1b7",
                VUE_APP_APP_ROUTER_BASE: "/easydl/app",
                VUE_APP_APP_LANG: "cn",
                VUE_APP_IS_PROD: "true",
                VUE_APP_APP_NAME: "lite",
                VUE_APP_COMPANY_NAME: "public",
                VUE_APP_ON_LINE_URI: "",
                VUE_APP_FAQ_URL: "https://ai.baidu.com/ai-doc/EASYDL/5k38n2whg",
                VUE_APP_MARKET_URL:
                  "https://ai.baidu.com/docs#/AI_Marketing_summary/top",
                VUE_APP_FORUM_URL: "http://ai.baidu.com/forum/topic/list/190",
                VUE_APP_INTRO_VIDEO:
                  "http://hbnm3eqf9mju26279qj.exp.bcevod.com/mda-if5h6bsqcd7sfmh2/mda-if5h6bsqcd7sfmh2.mp4",
                VUE_APP_IMG_CLS_VIDEO: "undefined",
                VUE_APP_OBJ_VIDEO:
                  "http://hbnm3eqf9mju26279qj.exp.bcevod.com/mda-if5h5g5v28tf44us/mda-if5h5g5v28tf44us.mp4",
                VUE_APP_SOUND_VIDEO:
                  "http://hbnm3eqf9mju26279qj.exp.bcevod.com/mda-igjgeja0r8it9ekh/mda-igjgeja0r8it9ekh.mp4",
                VUE_APP_BOS_BUCKET: "undefined",
                VUE_APP_EN_API: "http://aipe-easydl-doc.bj.bcebos.com/API.pdf",
                VUE_APP_EN_FAQ: "http://aipe-easydl-doc.bj.bcebos.com/FAQ.pdf",
                VUE_APP_BOS_AK: "undefined",
                VUE_APP_BOS_SK: "undefined",
                BASE_URL: "//aip-static.cdn.bcebos.com/afe/easydl-lite/latest/",
              }.BCE_JSONP_HOST ||
              "https://bce.baidu.com/api/account/v2/displayName",
            X = (e, t) => {
              e[t] && (document.cookie = q.serialize(t, e[t], { path: "/" }));
            },
            z = async () => {
              const e = await G()(F);
              if (e.ok) {
                const n = await e.json();
                if (n.success && n.result.hasLogin) {
                  var t;
                  const e = n.result.cookies,
                    o = [
                      "bce-sessionid",
                      "bce-auth-type",
                      "bce-ctl-client-cookies",
                      ...((null === (t = e["bce-ctl-client-cookies"]) ||
                      void 0 === t
                        ? void 0
                        : t
                            .replace(/^"|"$/g, "")
                            .split(",")
                            .filter(
                              (e) => !["BDUSS", "BAIDUID"].includes(e)
                            )) ?? []),
                    ];
                  for (const t of o) X(e, t);
                }
              }
            };
          let Y;
          function K(e, t) {
            !t && e(), setTimeout(K.bind(null, e), 6e5);
          }
          i().use(r());
          const W = new (r().Store)({
            state: () => ({
              apiToken: null,
              requestHeaders: {},
              fullScreen: !1,
              user: {},
              sidebarShowing: !0,
              loading: !1,
              focusing: !1,
              miniAppLoading: !1,
              nextRoute: null,
              ability: { notify: !1 },
              orgId: "",
              projectId: "",
              codename: "",
            }),
            mutations: {
              initPage(e, { user: t, ability: n }) {
                (e.user = t && { ...t, id: t.userId }), (e.ability = n);
              },
              setAbility(e, t) {
                e.ability = { ...e.ability, ...t };
              },
              setUser(e, t = {}) {
                const n = {};
                for (const o of Object.keys(t)) t[o] && (n[o] = t[o]);
                e.user = { ...e.user, ...n };
              },
              setNextPage(e, t) {
                (e.nextRoute = t), t || (e.loading = !1);
              },
              setGlobalLoading(e, t) {
                e.loading = t;
              },
              toggleFocusMode(e) {
                e.focusing = !e.focusing;
              },
              setAPIToken(e, t) {
                e.apiToken = t;
              },
              setRequestHeader(e, t) {
                e.requestHeaders = { ...e.requestHeaders, ...t };
              },
              setFullScreen(e, t) {
                e.fullScreen = t;
              },
              setMiniAppLoading(e, t) {
                e.miniAppLoading = t;
              },
              setSidebarShowing(e, t) {
                e.sidebarShowing = t;
              },
              setProjectId(e, t) {
                e.projectId = t;
              },
              setOrgid(e, t) {
                e.orgId = t;
              },
              setOrgAndProId(e, { orgId: t, projectId: n }) {
                (e.orgId = t), (e.projectId = n);
              },
              setCodename(e, t) {
                e.codename = t;
              },
            },
            actions: {
              async nuxtClientInit({ commit: e, dispatch: t }, n) {
                if ("study" === n.name) return;
                if (l._.includes(n.name)) {
                  const t = await s.caller.send("common/userInfo", {
                    [Z.NO_REDIRECT]: !0,
                  }).result;
                  return void e("initPage", {
                    user: t.success ? t.result : { firstUse: !0 },
                    ability: {},
                  });
                }
                await t("setupApp");
                const o = await s.caller.send("notification/switch", {}).result,
                  i = o.success && o.result;
                e("setAbility", { notify: i }),
                  K(s.caller.factory("common/userInfo"), { lazy: !0 });
              },
              async setupThirdPartyApp({ commit: e, dispatch: t }, n) {
                e("setRequestHeader", n), await t("setupApp");
              },
              async setupApp({ commit: e }) {
                await z();
                const t = await s.caller.send("common/userInfo", {}).result;
                e("initPage", { user: t.success ? t.result : {}, ability: {} });
              },
              preparePage({ commit: e }, t) {
                clearTimeout(Y),
                  e("setNextPage", t),
                  t &&
                    (Y = setTimeout(() => {
                      e("setGlobalLoading", !0);
                    }, 300));
              },
              toggleNotification({ commit: e }, t) {
                e("setUser", { phone: t.phone }),
                  e("setAbility", { notify: t.active });
              },
              setFullScreen({ commit: e }, t) {
                e("setFullScreen", t);
              },
            },
            modules: {
              dataset: d,
              deploy: f,
              error: g,
              models: C,
              retail_models: k,
              study: R,
              train: V,
            },
          });
          var H = W;
        },
        21274: function (e, t, n) {
          "use strict";
          var o, i, a, r, s, l;
          n.d(t, {
            hv: function () {
              return l;
            },
            wK: function () {
              return s;
            },
          }),
            (function (e) {
              (e["ONLINE"] = "cloud"),
                (e["LOCAL"] = "privatization"),
                (e["SDK"] = "sdk"),
                (e["INTEGRATION"] = "integration");
            })(o || (o = {})),
            (function (e) {
              (e["CLASSIC"] = "classic"),
                (e["PRECISION"] = "precision"),
                (e["HI_PERF"] = "performance"),
                (e["EX_PRECISION"] = "exprecision"),
                (e["BALANCE"] = "balance"),
                (e["AUTODL"] = "autodl"),
                (e["FACE_MASK"] = "facemask"),
                (e["COVID"] = "covid19"),
                (e["MARKET"] = "MARKET"),
                (e["INCREASE_ACCURACY"] = "venus"),
                (e["SMALL_TARGET_DETECTION"] = "smallGoal");
            })(i || (i = {})),
            (function (e) {
              (e["AUTO"] = "auto"),
                (e["BC"] = "binary"),
                (e["MC"] = "multiclass"),
                (e["REGRESSION"] = "regression"),
                (e["AUTO_BC"] = "auto-binary"),
                (e["AUTO_MC"] = "auto-multiclass"),
                (e["AUTO_REGRESSION"] = "auto-regression"),
                (e["FORECAST"] = "forecast");
            })(a || (a = {})),
            (function (e) {
              (e[(e["TRAINSET"] = 1)] = "TRAINSET"),
                (e[(e["EVALSET"] = 2)] = "EVALSET"),
                (e[(e["VALIDSET"] = 3)] = "VALIDSET");
            })(r || (r = {})),
            (function (e) {
              (e["TRAIN"] = "train"),
                (e["CALL"] = "call"),
                (e["PRIVATIZATION_API"] = "privatizationApi"),
                (e["PRIVATIZATION_SDK"] = "privatizationSdk"),
                (e["SDK"] = "sdk"),
                (e["INTEGRATION"] = "integration"),
                (e["DURATION"] = "duration"),
                (e["QIANFANBOARD"] = "qianfanboard");
            })(s || (s = {})),
            (function (e) {
              (e[(e["overview"] = 0)] = "overview"),
                (e[(e["online-use"] = 1)] = "online-use"),
                (e[(e["model-group"] = 2)] = "model-group"),
                (e[(e["model-list"] = 3)] = "model-list"),
                (e[(e["model-create"] = 4)] = "model-create"),
                (e[(e["model-train"] = 5)] = "model-train"),
                (e[(e["model-verify"] = 6)] = "model-verify"),
                (e[(e["model-publish"] = 7)] = "model-publish"),
                (e[(e["public-deploy-group"] = 8)] = "public-deploy-group"),
                (e[(e["deploy-public"] = 9)] = "deploy-public"),
                (e[(e["batch-predict"] = 10)] = "batch-predict"),
                (e[(e["edge-deploy-group"] = 11)] = "edge-deploy-group"),
                (e[(e["bie-offline"] = 12)] = "bie-offline"),
                (e[(e["bie-ecc"] = 13)] = "bie-ecc"),
                (e[(e["bie-packages"] = 14)] = "bie-packages"),
                (e[(e["bie-devices"] = 15)] = "bie-devices"),
                (e[(e["bie-distribute"] = 16)] = "bie-distribute"),
                (e[(e["jsdk-group"] = 17)] = "jsdk-group"),
                (e[(e["bie-jsdk"] = 18)] = "bie-jsdk"),
                (e[(e["dataset-group"] = 19)] = "dataset-group"),
                (e[(e["dataset-manage"] = 20)] = "dataset-manage"),
                (e[(e["dataset-public"] = 21)] = "dataset-public"),
                (e[(e["dataset-interactiveAnno"] = 22)] =
                  "dataset-interactiveAnno"),
                (e[(e["dataset-label"] = 23)] = "dataset-label"),
                (e[(e["dataset-annotate"] = 24)] = "dataset-annotate"),
                (e[(e["dataset-dcl"] = 25)] = "dataset-dcl"),
                (e[(e["dataset-camera"] = 26)] = "dataset-camera"),
                (e[(e["dataset-storeGroup"] = 27)] = "dataset-storeGroup"),
                (e[(e["market-group"] = 28)] = "market-group"),
                (e[(e["sale-orders"] = 29)] = "sale-orders"),
                (e[(e["sale-create"] = 30)] = "sale-create"),
                (e[(e["sku-management-group"] = 31)] = "sku-management-group"),
                (e[(e["sku-list"] = 32)] = "sku-list"),
                (e[(e["sku-skuset"] = 33)] = "sku-skuset"),
                (e[(e["sku-annotate"] = 34)] = "sku-annotate"),
                (e[(e["sku-dcl"] = 35)] = "sku-dcl"),
                (e[(e["retail-service-group"] = 36)] = "retail-service-group"),
                (e[(e["service-title"] = 37)] = "service-title"),
                (e[(e["retail-stitch-group"] = 38)] = "retail-stitch-group"),
                (e[(e["vas-img-stitch"] = 39)] = "vas-img-stitch"),
                (e[(e["vas-front-ocr"] = 40)] = "vas-front-ocr"),
                (e[(e["vas-image-similar"] = 41)] = "vas-image-similar"),
                (e[(e["null"] = 42)] = "null"),
                (e[(e["data-augmentation"] = 43)] = "data-augmentation");
            })(l || (l = {}));
        },
        53014: function (e, t, n) {
          "use strict";
          var o = n(49713),
            i = n(19660);
          t.Z = (e, t, n) => {
            var a, r, s;
            if (!t) return !1;
            const l =
                n ??
                (null === (a = i.Z.get(t)) || void 0 === a ? void 0 : a[0]),
              c = []
                .concat(
                  (null === (r = o.flags[e]) || void 0 === r ? void 0 : r.mt) ||
                    []
                )
                .filter(Boolean),
              u = []
                .concat(
                  (null === (s = o.flags[e]) || void 0 === s ? void 0 : s.tt) ||
                    []
                )
                .filter(Boolean),
              d = i.Z.get(t) || [],
              p = d.length <= 1 || !u.length || !l,
              m = !c.length || c.some((e) => e === t);
            let f = [l];
            l &&
              ((f = `${l}`.split(",")),
              f.length > 1 && console.error("hasFlag tt入参错误"));
            const T = !!p || u.some((e) => +e === +f[0]);
            return m && T;
          };
        },
        19660: function (e, t, n) {
          "use strict";
          var o = n(43031);
          t.Z = new Map([
            [
              o.ProjectType.IMG_CLS,
              [o.TemplateType.IMG_CLS, o.TemplateType.IMG_CLS_MULTI],
            ],
            [
              o.ProjectType.OBJ_DCT,
              [o.TemplateType.OBJ_DCT, o.TemplateType.OBJ_DCT_QUAD],
            ],
            [o.ProjectType.SOUND_CLS, [o.TemplateType.SOUND_CLS]],
            [
              o.ProjectType.TEXT_CLS,
              [
                o.TemplateType.TEXT_CLS,
                o.TemplateType.TEXT_CLS_MULTI,
                o.TemplateType.TEXT_CLS_ERNIE_DOC,
                o.TemplateType.TEXT_CLS_ERNIE_M,
              ],
            ],
            [o.ProjectType.VIDEO_CLS, [o.TemplateType.VIDEO_CLS]],
            [
              o.ProjectType.SEGMENT,
              [
                o.TemplateType.INSTANCE_SEGMENT,
                o.TemplateType.SEMANTIC_SEGMENT,
              ],
            ],
            [o.ProjectType.TEXT_SIM, [o.TemplateType.TEXT_SIM]],
            [
              o.ProjectType.TEXT_SEQ,
              [
                o.TemplateType.TEXT_SEQ_IO,
                o.TemplateType.TEXT_SEQ_IOB,
                o.TemplateType.TEXT_SEQ_IOBES,
                o.TemplateType.TEXT_SEQ_IOE,
              ],
            ],
            [o.ProjectType.SENTIMENT, [o.TemplateType.SENTIMENT]],
            [
              o.ProjectType.TEXT_ENTITY_EXTRACT,
              [o.TemplateType.TEXT_ENTITY_EXTRACT],
            ],
            [
              o.ProjectType.TEXT_RELATION_EXTRACT,
              [o.TemplateType.TEXT_RELATION_EXTRACT],
            ],
            [o.ProjectType.VIDEO_TRACKING, [o.TemplateType.VIDEO_TRACKING]],
            [o.ProjectType.ML, [o.TemplateType.ML]],
            [
              o.ProjectType.TIME_SERIES_FORECAST,
              [o.TemplateType.TIME_SERIES_FORECAST],
            ],
            [o.ProjectType.RETAIL, [o.TemplateType.RETAIL]],
            [o.ProjectType.RETAIL_DD, [o.TemplateType.RETAIL_DD]],
            [o.ProjectType.TEXT_NLG, [o.TemplateType.TEXT_NLG]],
            [o.ProjectType.TEXT_COMMENT, [o.TemplateType.TEXT_COMMENT]],
            [o.ProjectType.IMG_TEXT, [o.TemplateType.IMG_TEXT]],
            [o.ProjectType.ELC_FORECAST, [o.TemplateType.ELC_FORECAST]],
            [o.ProjectType.TEXT_ERNIE_BOT, [o.TemplateType.TEXT_ERNIE_BOT]],
          ]);
        },
        10940: function (e) {
          const t = "";
          e.exports = {
            name: "ai",
            isPublic: !1,
            indexUri: "user/info",
            path: ["codename", "orgId", "projectId"],
            branchs: {},
            prefix: [
              {
                path: "/dataset/*",
                prefix: "easydata",
                codenameIndex: 1,
                suffix: "dataset",
              },
              {
                path: "/annotate/*",
                prefix: "easydata",
                codenameIndex: 1,
                suffix: "annotate",
              },
            ],
            setting: { trainset: !0 },
            deploy: {
              public: !0,
              deployType: "all",
              deployTypeName: "",
              onlineSupport: !0,
            },
            models: {
              serviceDetail: { iterationId: !1, foot: !0 },
              continueTrain: !1,
            },
            train: {
              deployType: "all",
              deployTypeName: t,
              increaseAccuracy: !0,
              price: !0,
              deviceNumber: !0,
              unbalance: !0,
              error: !0,
              requestAlgorithms: !1,
              deviceInfo: !1,
              computationalPerformance: !0,
              chooseModel: !0,
              trainWay: !0,
              extraTrainTypes: !0,
              derivable: !0,
              hasFree: !1,
            },
            report: {
              optimization: !0,
              confusion: !0,
              noise: !0,
              badcaseEdit: !0,
              downloadImg: !0,
            },
            SP: t,
            codename: {
              imgcls: ["1-100"],
              objdct: ["2-200"],
              soundcls: ["3-300"],
              textcls: ["4-400", "4-406", "4-407"],
              textclsm: ["4-401"],
              segment: ["6-600"],
              textsim: ["7-700"],
              sentiment: ["9-900"],
              tee: ["10-1000"],
              tre: ["11-1100"],
              videotracking: ["12-1200"],
              ml: ["201-20100"],
              tsf: ["202-20200"],
              elc: ["10001-100010"],
              industry: ["10001-100010"],
            },
            bie: {
              step: !0,
              pri: !0,
              availableAccelerations: !0,
              needExplanation: !0,
              sdkNotice: "public",
            },
            whitelist: t,
            nobody: ["demo/verify", "demo/parseEntity"],
          };
        },
        18768: function (e) {
          e.exports = [
            "model/save",
            "model/list",
            "model/detail",
            "model/delete",
            "model/rename",
            "iteration/create",
            "iteration/list",
            "iteration/detail",
            "iteration/stop",
            "iteration/progress",
            "iteration/report",
            "iteration/chargeVmList",
            "charge/vmList",
            "charge/vmDetail",
            "charge/trainSupport",
            "iteration/getLog",
            "iteration/chargeVmDetail",
            "iteration/datasetList",
            "iteration/labelReport",
            "iteration/labelBadcase",
            "iteration/labelList",
            "iteration/entityList",
            "iteration/bestThreshold",
            "iteration/checkExist",
            "iteration/deployTypeList",
            "iteration/table/info",
            "iteration/colInfo",
            "iteration/seriesReport",
            "demo/start",
            "demo/getStatus",
            "demo/verify",
            "demo/stop",
            "modelrepo/release",
            "modelrepo/list",
            "modelrepo/latestVersion",
            "modelrepo/version/dataSchema",
            "dataset/*",
            "labelgroup/*",
            "entityRelation/*",
            "collect/*",
            "entity/*",
            "group/*",
            "interAnno/*",
            "textIntelAnno/*",
            "label/*",
            "dcl/*",
            "bml/*",
            "bos/auth",
            "deploy/options",
            "charge/trainConfig",
            "project/checkResource",
            "productLine/*",
            "aibase/*",
            "common/userInfo",
            "project/checkResource",
          ];
        },
        90335: function (e, t, n) {
          const { NULL_MT: o } = n(92726);
          e.exports = {
            h5: { mt: [o] },
            ebvpu: { mt: [o] },
            background: { mt: [o] },
            smsNotification: { mt: [o] },
            publicDeploy: { mt: [o] },
            intro: { mt: [o] },
            revision: { mt: [o] },
            datasetPublic: { mt: [o] },
            deployInIteration: { mt: [o] },
            derivable: { mt: [o] },
            augmentation: { mt: [o] },
            dataAugmentation: { mt: [o] },
            sale: { mt: [o] },
            bie: { mt: [o] },
            ecc: { mt: [o] },
            verifyDataset: { mt: [1, 2, 4, 6, 7, 9, 10, 11] },
            validateDataset: { mt: [1, 2, 6] },
            trainTypeInTrain: { mt: [o] },
            dcl: { mt: [o] },
            incrementalLearning: { mt: [1, 2, 6] },
            unbalance: { mt: [o] },
            local: { mt: [1, 2, 3, 4, 6, 7, 9, 10, 11, 12] },
            deployInTrain: { mt: [1, 2, 3, 4, 6, 7, 9, 10, 11, 12] },
            "integration-ebvpu": { mt: [o] },
            "integration-bianying": { mt: [o] },
            sslTrain: { mt: [o] },
          };
        },
        5643: function (e, t, n) {
          const { NULL_MT: o } = n(92726);
          e.exports = {
            h5: { mt: [o] },
            ebvpu: { mt: [o] },
            background: { mt: [o] },
            smsNotification: { mt: [o] },
            publicDeploy: { mt: [o] },
            intro: { mt: [o] },
            revision: { mt: [o] },
            datasetPublic: { mt: [o] },
            deployInIteration: { mt: [o] },
            derivable: { mt: [o] },
            augmentation: { mt: [o] },
            dataAugmentation: { mt: [o] },
            sale: { mt: [o] },
            bie: { mt: [o] },
            ecc: { mt: [o] },
            verifyDataset: { mt: [1, 2, 4, 6, 7, 9, 10, 11] },
            validateDataset: { mt: [1, 2, 6] },
            trainTypeInTrain: { mt: [o] },
            dcl: { mt: [o] },
            incrementalLearning: { mt: [o] },
            unbalance: { mt: [o] },
            local: { mt: [1, 2, 3, 4, 6, 7, 9, 10, 11, 12] },
            deployInTrain: { mt: [1, 2, 3, 4, 6, 7, 9, 10, 11, 12] },
          };
        },
        58500: function (e, t, n) {
          const { NULL_MT: o } = n(92726);
          e.exports = {
            ecc: { mt: [o] },
            pack: { mt: [o] },
            integration: { mt: [o] },
            sale: { mt: [o] },
            background: { mt: [o] },
            batchPredict: { mt: [o] },
            dcl: { mt: [o] },
            smsNotification: { mt: [o] },
            camera: { mt: [o] },
            dataAugmentation: { mt: [o] },
          };
        },
        4329: function (e, t, n) {
          const { NULL_MT: o } = n(92726);
          e.exports = {
            h5: { mt: [o] },
            background: { mt: [o] },
            smsNotification: { mt: [o] },
            badcase: { mt: [o] },
            revision: { mt: [o] },
            deployInIteration: { mt: [o] },
            derivable: { mt: [o] },
            augmentation: { mt: [o] },
            dataAugmentation: { mt: [o] },
            reportDetail: { mt: [2] },
            sale: { mt: [o] },
            bie: { mt: [o] },
            ecc: { mt: [o] },
            overview: { mt: [o] },
            create: { mt: [o] },
            train: { mt: [o] },
            publicDeploy: { mt: [o] },
            publicApi: { mt: [1, 2] },
            trainTypeInTrain: { mt: [1, 2] },
            verifyDataset: { mt: [o] },
            validateDataset: { mt: [o] },
            dcl: { mt: [o] },
            incrementalLearning: { mt: [o] },
          };
        },
        47466: function (e, t, n) {
          const { NULL_MT: o } = n(92726);
          e.exports = {
            h5: { lang: "cn", mt: [1, 2, 6, 18, 1001], standalone: !0 },
            sdk: {
              mt: [1, 2, 3, 6, 12, 201],
              tt: [100, 101, 200, 300, 600, 601, 1200],
              standalone: !0,
            },
            expandLabel: { mt: [1, 3, 5] },
            batchUpload: { mt: [3, 4, 5] },
            vis: { mt: [1, 2, 6] },
            apiPdf: { lang: "en" },
            integration: {
              mt: [1, 2, 12],
              tt: [100, 101, 200, 1200],
              standalone: !0,
            },
            ebvpu: { mt: [1, 2], tt: [100, 101, 200], standalone: !0 },
            local: {
              lang: "cn",
              mt: [1, 2, 3, 4, 6, 9, 10, 11, 12, 19, 201],
              standalone: !0,
            },
            pack: { mt: [1, 2, 4, 6, 9, 10, 11, 18, 19], standalone: !0 },
            localSdk: { mt: [1, 2, 3, 6, 12, 201], standalone: !0 },
            labelGallery: { mt: [1, 3, 4, 5] },
            background: { mt: [1, 2] },
            smsNotification: { lang: "cn", standalone: !0 },
            dcl: { mt: [1, 2, 6, 1001], standalone: !0 },
            publicDeploy: {
              mt: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 18, 19, 201, 202, 2001],
            },
            camera: { mt: [1, 2, 6], standalone: !0 },
            label: { mt: [1, 2, 3, 4, 5, 6, 10], standalone: !0 },
            interactiveAnno: {
              mt: [1, 2, 4, 6, 10],
              tt: [100, 200, 201, 400, 406, 407, 600, 601],
              standalone: !0,
            },
            annotate: { mt: [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 18, 19] },
            badcase: {
              mt: [1, 2, 6, 12, 1001],
              tt: [100, 101, 200, 600, 601, 1200, 10010, 10020],
            },
            optimizeTip: { mt: [1, 2, 6, 201, 1001] },
            intro: { lang: "cn" },
            apiManagement: {
              mt: [1, 2, 3, 4, 6, 1001],
              tt: [100, 200, 300, 400, 600, 10010],
              lang: "cn",
              standalone: !0,
            },
            trainingGuide: { lang: "cn" },
            revision: {
              mt: [1, 3, 4, 5],
              tt: [100, 300, 400, 406, 407, 500],
              standalone: !0,
            },
            datasetShare: { mt: [1, 2, 6], standalone: !0 },
            scenarioBasedAlgorithm: { mt: [1001, 1002] },
            interAnno: { mt: [2, 6], lang: "cn", standalone: !0 },
            deploy: { standalone: !0 },
            optimization: {
              mt: [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 19, 201,
                202, 1001, 1002,
              ],
              standalone: !0,
            },
            datasetPublic: {
              mt: [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 18, 19, 2001],
            },
            settingInTrain: { mt: [1, 2, 3, 4, 6, 7, 9, 10, 11, 12, 18, 19] },
            deployInTrain: { mt: [1, 2, 3, 4, 6, 9, 10, 11, 12, 19, 201] },
            deployInIteration: { mt: [1, 2, 3, 4, 6, 9, 10, 11, 12, 19] },
            trainTypeInTrain: { mt: [1, 2], tt: [100, 101, 200] },
            algorithmInTrain: {
              mt: [1, 2, 3, 4, 6, 7, 9, 10, 11, 12, 18, 19, 2001],
            },
            incrementalLearning: { mt: [1, 2, 6] },
            derivable: { mt: [] },
            facemask: { mt: [2] },
            acceleration: { mt: [1, 2] },
            augmentation: { mt: [1, 2], tt: [100, 101, 200] },
            dataAugmentation: { mt: [1, 2, 6] },
            batchMoveImg: { mt: [1] },
            labelSelectable: { mt: [1, 2, 3, 4, 5, 6, 8, 9, 12, 19, 2001] },
            reportDetail: {
              mt: [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 19, 201, 202, 10001],
            },
            sale: { mt: [1, 2, 9], tt: [100, 101, 200, 900, 901] },
            bie: { mt: [1, 2, 3, 4, 6, 9, 10, 11, 12, 19, 201] },
            ecc: { mt: [1, 2, 6], tt: [100, 101, 200, 201, 600] },
            "offline-only": { mt: [12] },
            "device-jetson": { mt: [12] },
            verifyDataset: { mt: [1, 2, 4, 6, 7, 9, 10, 11, 19, 2001] },
            validateDataset: { mt: [1, 2, 6] },
            unbalance: { mt: [1] },
            "mission-scenario": { mt: [400, 406, 407] },
            "dl-image": { mt: [1, 2, 6] },
            "dl-videotracking": { mt: [12] },
            overview: {
              mt: [
                1, 3, 2, 4, 5, 6, 7, 9, 10, 11, 12, 18, 19, 201, 202, 1001,
                2001,
              ],
            },
            create: { mt: [] },
            train: { mt: [] },
            publicApi: { mt: [o] },
            chooseModel: { mt: [] },
            batchPredict: { mt: [1, 2, 6] },
            derivableOption: { mt: [] },
            jsdk: { mt: [1, 2], tt: [100, 200] },
            "integration-edgeboard": {
              mt: [1, 2],
              tt: [100, 101, 200],
              standalone: !0,
            },
            "integration-ebvpu": {
              mt: [1, 2],
              tt: [100, 101, 200],
              standalone: !0,
            },
            "integration-jetson": {
              mt: [1, 2, 12],
              tt: [100, 101, 200, 1200],
              standalone: !0,
            },
            "integration-bianying": {
              mt: [1, 2],
              tt: [100, 101, 200],
              standalone: !0,
            },
            "intelligent-attribution": { mt: [1, 2], tt: [100, 200] },
            sslTrain: { mt: [2], tt: [200] },
          };
        },
        13666: function (e) {
          e.exports = {
            h5: { lang: "cn", mt: [1, 2, 6, 1001], standalone: !0 },
            sdk: { mt: [1, 2, 6, 12], standalone: !0 },
            expandLabel: { mt: [1, 3, 5] },
            batchUpload: { mt: [3, 4, 5] },
            vis: { mt: [1, 2, 6] },
            apiPdf: { lang: "en" },
            integration: { mt: [1, 2, 12], lang: "cn", standalone: !0 },
            ebvpu: { mt: [1, 2], standalone: !0 },
            local: {
              lang: "cn",
              mt: [1, 2, 3, 4, 6, 9, 10, 11, 12],
              standalone: !0,
            },
            pack: { mt: [1, 2, 4, 6, 9, 10, 11], standalone: !0 },
            localSdk: { mt: [1, 2, 3, 6, 12], standalone: !0 },
            labelGallery: { mt: [1, 3, 4, 5] },
            background: { mt: [1] },
            smsNotification: { lang: "cn", standalone: !0 },
            dcl: { mt: [1, 2, 6, 1001], standalone: !0 },
            publicDeploy: { mt: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
            camera: { mt: [1, 2, 6], standalone: !0 },
            label: { mt: [1, 2, 3, 4, 5, 6, 10], standalone: !0 },
            interactiveAnno: { mt: [2, 4, 6, 10], tt: [400], standalone: !0 },
            annotate: { mt: [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12] },
            badcase: { mt: [1, 2, 6, 12, 1001] },
            optimizeTip: { mt: [1, 2, 6, 201, 1001] },
            intro: { lang: "cn" },
            apiManagement: {
              mt: [1, 2, 3, 4, 6, 1001],
              tt: [100, 200, 300, 400, 600, 10010],
              lang: "cn",
              standalone: !0,
            },
            trainingGuide: { lang: "cn" },
            revision: {
              mt: [1, 2, 3, 4, 5],
              tt: [100, 200, 300, 400, 500],
              standalone: !0,
            },
            datasetShare: { mt: [1, 2, 6], standalone: !0 },
            scenarioBasedAlgorithm: { mt: [1001, 1002] },
            interAnno: { mt: [2, 6], lang: "cn", standalone: !0 },
            deploy: { standalone: !0 },
            datasetPublic: { mt: [4, 7] },
            settingInTrain: { mt: [1, 2, 3, 4, 6, 7, 9, 10, 11, 12] },
            deployInTrain: { mt: [1, 2, 3, 4, 6, 9, 10, 11, 12] },
            trainTypeInTrain: { mt: [1, 2] },
            algorithmInTrain: { mt: [1, 2, 3, 4, 6, 7, 9, 10, 11, 12] },
            incrementalLearning: { mt: [99999] },
            facemask: { mt: [2] },
            acceleration: { mt: [1, 2] },
            augmentation: { mt: [1, 2] },
            batchMoveImg: { mt: [1] },
            labelSelectable: { mt: [1, 2, 3, 4, 5, 6, 8, 9, 12] },
            reportDetail: { mt: [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 201, 202] },
            sale: { mt: [1, 2, 9] },
            bie: { mt: [1, 2, 3, 4, 6, 9, 10, 11, 12] },
            ecc: { mt: [1, 2, 6] },
            "offline-only": { mt: [12] },
            "device-jetson": { mt: [12] },
            verifyDataset: { mt: [1, 2, 4, 6, 7, 9, 10, 11] },
            validateDataset: { mt: [1, 2, 6] },
            unbalance: { mt: [1] },
            "mission-scenario": { mt: [400, 406, 407] },
            "dl-image": { mt: [1, 2, 6] },
            "dl-videotracking": { mt: [12] },
          };
        },
        49713: function (e, t, n) {
          "use strict";
          n.r(t),
            n.d(t, {
              flags: function () {
                return a;
              },
              projectName: function () {
                return r;
              },
            });
          var o = n(92726);
          const i = (0, o.getCompany)();
          let a = n(47466);
          i !== o.defaultCompany &&
            (a = (0, o.deepAssign)(a, n(61828)(`./flags.${i}.js`)));
          const r = "companys";
        },
        92726: function (e, t, n) {
          "use strict";
          n.r(t),
            n.d(t, {
              NULL_MT: function () {
                return i;
              },
              deepAssign: function () {
                return a;
              },
              defaultCompany: function () {
                return o;
              },
              getCompany: function () {
                return r;
              },
            });
          const o = "public",
            i = 987654321,
            a = (e, t) => (
              Object.entries(t).forEach(([n, o]) => {
                "[object Object]" === Object.prototype.toString.call(o)
                  ? a(e[n], t[n])
                  : (e[n] = t[n]);
              }),
              e
            ),
            r = (e = "VUE_APP_COMPANY_NAME") =>
              ({
                VUE_APP_FEAT_TOGGLE_URL: "",
                NODE_ENV: "production",
                VUE_APP_API_BASE_URL: "/easydl/api",
                VUE_APP_LARGE_API_BASE_URL: "/easydl/api",
                VUE_APP_WEIRWOOD_TOKEN: "8cbdddd9708e40f58535b9252ac776e8",
                VUE_APP_WEIRWOOD_BUILDID: "2023-10-18-17:11:48-e5fb1b7",
                VUE_APP_APP_ROUTER_BASE: "/easydl/app",
                VUE_APP_APP_LANG: "cn",
                VUE_APP_IS_PROD: "true",
                VUE_APP_APP_NAME: "lite",
                VUE_APP_COMPANY_NAME: "public",
                VUE_APP_ON_LINE_URI: "",
                VUE_APP_FAQ_URL: "https://ai.baidu.com/ai-doc/EASYDL/5k38n2whg",
                VUE_APP_MARKET_URL:
                  "https://ai.baidu.com/docs#/AI_Marketing_summary/top",
                VUE_APP_FORUM_URL: "http://ai.baidu.com/forum/topic/list/190",
                VUE_APP_INTRO_VIDEO:
                  "http://hbnm3eqf9mju26279qj.exp.bcevod.com/mda-if5h6bsqcd7sfmh2/mda-if5h6bsqcd7sfmh2.mp4",
                VUE_APP_IMG_CLS_VIDEO: "undefined",
                VUE_APP_OBJ_VIDEO:
                  "http://hbnm3eqf9mju26279qj.exp.bcevod.com/mda-if5h5g5v28tf44us/mda-if5h5g5v28tf44us.mp4",
                VUE_APP_SOUND_VIDEO:
                  "http://hbnm3eqf9mju26279qj.exp.bcevod.com/mda-igjgeja0r8it9ekh/mda-igjgeja0r8it9ekh.mp4",
                VUE_APP_BOS_BUCKET: "undefined",
                VUE_APP_EN_API: "http://aipe-easydl-doc.bj.bcebos.com/API.pdf",
                VUE_APP_EN_FAQ: "http://aipe-easydl-doc.bj.bcebos.com/FAQ.pdf",
                VUE_APP_BOS_AK: "undefined",
                VUE_APP_BOS_SK: "undefined",
                BASE_URL: "//aip-static.cdn.bcebos.com/afe/easydl-lite/latest/",
              }[e] || o);
        },
        65535: function (e, t, n) {
          const o = n(97304);
          e.exports = {
            name: "ningbo",
            isPublic: !1,
            indexUri: "user/info",
            path: ["codename", "orgId", "projectId"],
            branchs: {
              "@baidu/afe-app-annotate": "ningbo-data3.5.1-2nd",
              "@baidu/afe-app-dataset": "ningbo-data3.5.1-2nd",
              "@baidu/afe-app-mulan": "ningbo-data3.5.1-2nd",
              "@baidu/afe-app-label": "ningbo-data3.5.1-2nd",
              "@baidu/afe-app-etl": "ningbo-data3.5.1-2nd",
              "@baidu/afe-app-dcl": "ningbo-data3.5.1-2nd",
            },
            setting: { trainset: !1 },
            deploy: {
              public: !0,
              deployType: "api",
              deployTypeName: "在线API",
              hasPoorPerformance: !1,
            },
            models: { serviceDetail: { iterationId: !0, foot: !1 } },
            train: {
              deployType: "api",
              deployTypeName: "在线API",
              increaseAccuracy: !1,
              unbalance: !1,
              error: !1,
            },
            report: {
              optimization: !1,
              confusion: !1,
              noise: !1,
              badcaseEdit: !0,
              downloadImg: !0,
            },
            SP: {
              PLATFORM_ENV: "LITE_PRIVATE",
              AWS_S3: "aws",
              ORIGIN_ENDPOINT: "ORIGIN_ENDPOINT",
              TEXT_UNIQUE_HIDDEN: !0,
              DATASET_AVAILABLE_DATA_TYPE: [1, 3, 4, 5],
              DATASET_AVAILABLE_PROJECT_TYPE: null,
              DATASET_AVAILABLE_TEMPLATE_TYPE: null,
              DATASET_CONFIG: { SUPORT_IMG_PROJECTTYPE: [1, 2, 6, 13] },
              DATASET_DISABLED_EXPORT_DESTINATIONS: [],
              ANNO_BREADCRUMB_TITLE: "数据标注",
              INTERANNO_CONFIG: {
                SUPORT_BRANCH: ["vis"],
                SUPORT_MODES: ["study", "model"],
                NOTSUPORT_GUIDE: !0,
                NOTSUPORT_CREATE_TIPS: !0,
                SUPORT_EXPECTTIME: !1,
                SUPORT_CREATEINFO: ["createTime", "creatorName"],
              },
              MULAN_CONFIG: { SUPORT_TASK_PERMISSIONS: ["VIEW_ANNO"] },
              ETL_CONFIG: { IMAGE_SENIOR_ETL: !1 },
              BMLHEADER_NPM: !1,
            },
            codename: { imgcls: ["1-100"], objdct: ["2-200"] },
            whitelist: o,
            nobody: ["demo/verify"],
          };
        },
        97304: function (e) {
          e.exports = [
            "model/save",
            "model/list",
            "model/detail",
            "model/delete",
            "model/rename",
            "iteration/create",
            "iteration/list",
            "iteration/detail",
            "iteration/stop",
            "iteration/progress",
            "iteration/report",
            "demo/start",
            "demo/getStatus",
            "service/cloud/list",
            "service/cloud/apply",
            "service/cloud/active",
            "service/cloud/stop",
            "service/cloud/info",
            "iteration/datasetList",
            "iteration/chargeVmList",
            "iteration/bestThreshold",
            "common/customconfig",
            "common/userInfo",
            "dataset/*",
            "labelgroup/*",
            "entityRelation/*",
            "collect/*",
            "entity/*",
            "group/*",
            "interAnno/*",
            "textIntelAnno/*",
            "label/*",
            "dcl/*",
            "bml/*",
            "bos/auth",
          ];
        },
        6460: function (e) {
          const t = "";
          e.exports = {
            name: t,
            base: t,
            isPublic: !0,
            indexUri: "app/overview",
            defaultCodenamePath: "/:codename?",
            path: ["codename"],
            prefix: t,
            setting: { trainset: !0 },
            deploy: {
              public: !0,
              deployType: "all",
              deployTypeName: t,
              onlineSupport: !0,
            },
            models: {
              serviceDetail: { iterationId: !1, foot: !0 },
              continueTrain: !1,
            },
            train: {
              deployType: "all",
              deployTypeName: t,
              increaseAccuracy: !0,
              unbalance: !0,
              error: !0,
              requestAlgorithms: !1,
              computationalPerformance: !0,
              chooseModel: !0,
              trainWay: !0,
              extraTrainTypes: !0,
              derivable: !0,
              hasFree: !1,
              background: !0,
            },
            report: {
              optimization: !0,
              confusion: !0,
              noise: !0,
              badcaseEdit: !0,
              downloadImg: !0,
            },
            SP: t,
            codename: t,
            codenameDefault: {
              imgcls: ["1-100"],
              objdct: ["2-200", "2-201"],
              soundcls: ["3-300"],
              textcls: ["4-400", "4-406", "4-407"],
              textclsm: ["4-401"],
              videocls: ["5-500"],
              segment: ["6-600", "6-601"],
              textsim: ["7-700"],
              sentiment: ["9-900"],
              tee: ["10-1000"],
              tre: ["11-1100"],
              videotracking: ["12-1200"],
              textnlg: ["18-1800"],
              comment: ["19-1900"],
              ml: ["201-20100"],
              tsf: ["202-20200"],
              retail: ["1001-10010", "1002-10020"],
              imgtext: ["2001-20010"],
            },
            bie: {
              step: !0,
              pri: !0,
              availableAccelerations: !0,
              needExplanation: !0,
              sdkNotice: "public",
            },
            whitelist: t,
            nobody: t,
          };
        },
        65646: function (e, t, n) {
          const o = n(54736);
          e.exports = {
            name: "tutorial",
            isPublic: !1,
            branchs: {
              "@baidu/afe-app-annotate": "tutorial",
              "@baidu/afe-app-dataset": "master",
            },
            codename: { objdct: ["2-200", "2-201"] },
            train: {
              200: { cloud: { 1: ["precision", "performance"] }, market: !1 },
              sms: !1,
              validsetDataset: !1,
              evalsetDataset: !1,
              augmentation: !1,
            },
            deploy: { public: !0, edge: !1 },
            whitelist: o,
          };
        },
        54736: function (e) {
          e.exports = [
            "model/save",
            "model/list",
            "model/detail",
            "iteration/create",
            "iteration/list",
            "iteration/detail",
            "demo/getStatus",
            "service/cloud/info",
            "service/cloud/apply",
            "iteration/datasetList",
            "iteration/chargeVmList",
            "common/customconfig",
            "common/userInfo",
            "dataset/*",
            "h5Demo/detail",
            "collect/*",
            "entity/*",
            "group/*",
            "label/list",
          ];
        },
        57120: function (e) {
          e.exports = {
            name: "wenxin",
            isPublic: !0,
            indexUri: "",
            defaultCodenamePath: "/:codename?",
            path: ["codename"],
            prefix: "",
            deploy: {
              public: !0,
              deployType: "all",
              deployTypeName: "",
              onlineSupport: !0,
            },
            models: {
              serviceDetail: { iterationId: !1, foot: !0 },
              continueTrain: !1,
            },
            SP: { PLATFORM: "wx", PLATFORM_ENV: "" },
          };
        },
        95812: function (e, t, n) {
          "use strict";
          n.r(t),
            n.d(t, {
              get: function () {
                return o;
              },
            });
          const o = (e, t) => {
            const n = window.SP;
            return n[e] || t;
          };
        },
        23518: function (e, t, n) {
          "use strict";
          n.d(t, {
            BF: function () {
              return T;
            },
          });
          n(84259);
          var o = n(40336),
            i = (n(53014), n(46057), n(71437)),
            a = n(43031);
          const r = (0, i.YP)({ deployType: o.ServiceType.CLOUD }),
            s = r,
            l = (0, i.xD)(
              (0, i.M9)({ deployType: o.ServiceType.CLOUD }),
              (0, i.YP)({ applyStatus: o.APPLY_STATUS.REVIEWING }),
              (0, i.lp)(
                (0, i.xD)(
                  (0, i.M9)({ applyStatus: o.APPLY_STATUS.APPROVED }),
                  (0, i.M9)(
                    { serviceStatus: o.SERVICE_STATUS.DEPLOYING },
                    { serviceStatus: o.SERVICE_STATUS.NEW },
                    { serviceStatus: o.SERVICE_STATUS.ONLINE }
                  )
                )
              )
            ),
            c = (0, i.xD)(
              (0, i.M9)({ deployType: o.ServiceType.CLOUD }),
              (0, i.M9)({ trainStatus: o.TRAIN_STATUS.COMPLETED }),
              (0, i.M9)(
                { serviceStatus: o.SERVICE_STATUS.ONLINE },
                { serviceStatus: o.SERVICE_STATUS.EXPIRED }
              )
            ),
            u = (0, i.xD)(
              (0, i.M9)({ trainStatus: o.TRAIN_STATUS.COMPLETED, applied: !0 }),
              r
            ),
            d = () =>
              (0, i.cY)({
                report: (0, i.xD)(
                  (0, i.M9)({ trainStatus: o.TRAIN_STATUS.COMPLETED })
                ),
                verify: (0, i.xD)(
                  (0, i.or)(
                    (0, i.M9)({ deployType: o.ServiceType.CLOUD }),
                    (0, i.M9)({ type: a.ProjectType.VIDEO_TRACKING })
                  ),
                  (0, i.M9)({ trainStatus: o.TRAIN_STATUS.COMPLETED })
                ),
                train: (0, i.YP)({ trainStatus: o.TRAIN_STATUS.TRAINING }),
                stopTrain: (0, i.M9)({ trainStatus: o.TRAIN_STATUS.TRAINING }),
                serviceDetail: (0, i.or)(c, u),
                serviceRestore: (0, i.M9)({
                  serviceStatus: o.SERVICE_STATUS.STOPPED,
                }),
                serviceApply: (0, i.xD)(
                  (0, i.M9)({ trainStatus: o.TRAIN_STATUS.COMPLETED }),
                  (0, i.or)(s, l)
                ),
              });
          var p = ({
              trainStatus: e,
              serviceStatus: t,
              applyStatus: n,
              deployType: o,
              applied: i,
              type: a,
            }) =>
              d().exec({
                type: a,
                trainStatus: e,
                serviceStatus: t,
                applyStatus: n,
                deployType: o,
                applied: i,
              }),
            m = n(38301);
          const f = (e) => (
            "number" ===
              typeof (null === e || void 0 === e ? void 0 : e.version) &&
              (e.versionLiteral = `V${e.version}`),
            e
          );
          const T = (e, t) => {
            const n = null === t || void 0 === t ? void 0 : t.modelId,
              i = e.type,
              a = o.ServiceType.CLOUD === e.deployType,
              r = {
                applyStatus: a ? e.applyStatus : null,
                serviceStatus: a ? e.serviceStatus : null,
              };
            return (0, m.Z)({
              modelType: i,
              model: { id: n },
              ...f(e),
              ...r,
              sdkSupported: {
                [o.SYSTEMS.ANDROID.value]: !0,
                [o.SYSTEMS.IOS.value]: !0,
                [o.SYSTEMS.LINUX.value]: !0,
                [o.SYSTEMS.WINDOWS.value]: !0,
              },
              ability: p({ ...e, ...r }),
              trainStatus: e.hasOwnProperty("trainStatus")
                ? e.trainStatus
                : e.status,
              online: e.serviceStatus === o.SERVICE_STATUS.ONLINE.value,
            });
          };
        },
        98989: function (e, t, n) {
          "use strict";
          var o = n(30236),
            i = n.n(o),
            a = n(23518),
            r = n(40336);
          const s = (e, t) => (null == e || e) && t;
          t.Z = (e) => {
            const t = (e.iterations || []).map((t) =>
                (0, a.BF)({
                  ...t,
                  type: e.type,
                  model: { id: e.id, name: e.name },
                })
              ),
              n = t.length
                ? t.reduce((e, t) => i()(e, t.ability, s), {})
                : { train: !0, destroy: !0 },
              o = t.slice().sort((e, t) => (e.id > t.id ? -1 : 1))[0];
            return {
              ...e,
              iterations: t,
              latestIteration: o,
              ability: n,
              online: t.some(
                (e) => r.ServiceType.CLOUD === e.deployType && e.online
              ),
              modelType: e.type,
            };
          };
        },
        38301: function (e, t, n) {
          "use strict";
          var o = n(90805),
            i = n(46057);
          function a(e) {
            if (!e) return {};
            const {
                precisionRecalls: t,
                accuracy: n,
                f1Score: i,
                topkAcc: a,
                mAP: l,
                avgPrecision: c,
                mota: u,
                motp: d,
              } = e,
              { threshold: p, recall: m, precision: f } = t ? r(t) : e,
              T = [n, i, l, f, m].some((e) => null != e && e < 0.8);
            return {
              hasPoorPerformance: T,
              mota: s(u, o.aQ),
              motp: s(d, o.aQ),
              f1Score: s(i, (e) => e.toFixed(3)),
              avgPrecision: s(c, (e) => (0, o.aQ)(e)),
              precision: s(f, (e) => (0, o.aQ)(e)),
              accuracy: s(n, (e) => (0, o.aQ)(e)),
              topkAcc: s(a, (e) => (0, o.aQ)(e)),
              mAP: s(l, (e) => (0, o.aQ)(e)),
              threshold: s(p, (e) => e.toFixed(1)),
              recall: s(m, (e) => (0, o.aQ)(e)),
              r2Score: (0, o.W6)(e.r2Score),
              meanAbsoluteError: (0, o.W6)(e.meanAbsoluteError),
              meanSquaredError: (0, o.W6)(e.meanSquaredError),
            };
          }
          function r(e) {
            return (
              (e &&
                (0, i.UT)(e, (e) => {
                  const { precision: t, recall: n } = e;
                  return (0, i.t6)(t, n);
                })) ||
              {}
            );
          }
          function s(e, t) {
            return null == e ? null : t(e);
          }
          t.Z = (e) =>
            null !== e && void 0 !== e && e.metrics
              ? { ...e, metrics: a(e.metrics) }
              : e;
        },
        46057: function (e, t, n) {
          "use strict";
          n.d(t, {
            t6: function () {
              return s;
            },
            UT: function () {
              return r;
            },
            w6: function () {
              return l;
            },
          });
          var o = n(70794),
            i = n(6557),
            a = n.n(i);
          function r(e, t = a()) {
            let n = null,
              i = null;
            const r = "function" === typeof t ? t : (e) => e[t];
            return (
              e.forEach((e) => {
                const t = new o.O(r(e));
                if (null == i) return (i = t), void (n = e);
                -1 === i.comparedTo(t) && ((i = t), (n = e));
              }),
              n
            );
          }
          function s(e, t) {
            return t + e ? (2 * t * e) / (t + e) : 0;
          }
          function l(e) {
            return [...Array(e).keys()];
          }
        },
        18515: function (e) {
          e.exports = {
            imgCls: "图像分类",
            objDct: "物体检测",
            segment: "图像分割",
            textLabel: "文本分类-单标签",
            textLabels: "文本分类-多标签",
            textSimilar: "短文本相似度",
            textEmotion: "情感倾向分析",
            textErnie: "文本创作",
            textExtract: "文本实体抽取",
            relationTextExtract: "文本实体关系抽取",
            commentExtract: "评论观点抽取",
            audioDistinguish: "语音识别",
            audioClassification: "声音分类",
            videoClassification: "视频分类",
            targetTrack: "目标跟踪",
            StructureData: "表格数据预测",
            tsf: "时序预测",
            retail: "零售行业版",
            ocr: "OCR",
            vqa: "图文匹配",
            paddle: "飞桨EasyDL",
            vision: "图像",
            nlp: "文本",
            audio: "语音",
            video: "视频",
            structure: "结构化数据",
            industry: "行业版",
            modality: "跨模态",
            suffixWenxin: "文心大模型",
          };
        },
        65845: function (e) {
          e.exports = {
            colon: "：",
            "d-name.1": "数据集",
            "d-name.2": "数据集",
            "d-name.3": "数据集",
            "d-name.4": "数据集",
            "d-name.5": "数据集",
            "d-name.6": "数据集",
            "d-name.7": "数据集",
            "d-name.9": "数据集",
            "d-name.10": "数据集",
            "d-name.11": "数据集",
            "d-name.12": "数据集",
            "d-name.18": "数据集",
            "d-name.19": "数据集",
            "d-name.201": "数据集",
            "d-name.202": "数据集",
            "d-name.1001": "实景图集",
            "d-name.1002": "实景图集",
            "d-name.10001": "数据集",
            "model-type.1": "图像分类模型",
            "model-type.2": "物体检测模型",
            "model-type.3": "声音分类模型",
            "model-type.4": "文本分类模型",
            "model-type.5": "视频分类模型",
            "model-type.6": "图像分割模型",
            "model-type.7": "短文本相似度模型",
            "model-type.9": "情感倾向分析模型",
            "model-type.10": "文本实体抽取模型",
            "model-type.11": "文本实体关系抽取模型",
            "model-type.12": "目标跟踪模型",
            "model-type.18": "文本创作模型",
            "model-type.19": "评论观点抽取模型",
            "model-type.20": "文心千帆",
            "model-type.201": "表格数据预测模型",
            "model-type.202": "时序预测模型",
            "model-type.1001": "商品检测模型",
            "model-type.1002": "地堆检测模型",
            "model-type.2001": "图文匹配模型",
            "entity.1": "图片",
            "entity.2": "图片",
            "entity.3": "音频",
            "entity.4": "文本",
            "entity.5": "视频",
            "entity.6": "图片",
            "entity.7": "文本",
            "entity.9": "文本",
            "entity.10": "实体样本",
            "entity.11": "实体关系",
            "entity.12": "视频",
            "entity.18": "文本",
            "entity.19": "文本",
            "entity.201": "样本",
            "entity.202": "样本",
            "entity.1001": "图片",
            "entity.1002": "图片",
            "entity.2001": "图片",
            "label.1": "分类",
            "label.2": "标签",
            "label.3": "分类",
            "label.4": "分类",
            "label.5": "分类",
            "label.6": "标签",
            "label.7": "标签",
            "label.9": "分类",
            "label.10": "实体类别",
            "label.11": "实体关系",
            "label.12": "标签",
            "label.18": "生成",
            "label.19": "生成",
            "label.100": "分类",
            "label.200": "标签",
            "label.201": "预测",
            "label.202": "预测",
            "label.300": "分类",
            "label.400": "分类",
            "label.401": "标签",
            "label.406": "分类",
            "label.407": "分类",
            "label.500": "分类",
            "label.600": "标签",
            "label.601": "标签",
            "label.700": "分类",
            "label.900": "分类",
            "label.1000": "实体类别",
            "label.1001": "SKU",
            "label.1002": "SKU",
            "label.1100": "实体关系",
            "label.1200": "标签",
            "label.1800": "标签",
            "label.1900": "标注",
            "label.10010": "SKU",
            "label.10020": "SKU",
            "label.20010": "文本",
            "label.20100": "预测",
            "label.20200": "预测",
            "inte-type.EDGEBOARD": "EdgeBoard(FZ)",
            "inte-type.EB_VPU": "EdgeBoard(VMX)",
            "inte-type.JETSON": "Jetson(Nano/TX2/Xavier)",
            "no-data": "暂无可用数据",
            "pack-type.API": "私有API",
            "pack-type.SDK": "服务器端SDK",
            "plain-title": "EasyDL定制化模型 - 百度AI开放平台",
            "quantity.1": "张",
            "quantity.2": "张",
            "quantity.3": "个",
            "quantity.4": "个",
            "quantity.5": "个",
            "quantity.6": "张",
            "quantity.7": "个",
            "quantity.9": "个",
            "quantity.10": "个",
            "quantity.11": "个",
            "quantity.12": "个",
            "quantity.18": "个",
            "quantity.19": "个",
            "quantity.1001": "张",
            "quantity.1002": "张",
            "sku-cat.1": "饮品",
            "sku-cat.2": "药品",
            "sku-cat.3": "保健品",
            "sku-cat.4": "零食",
            "sku-cat.5": "香烟",
            "sku-cat.6": "调味品",
            "sku-cat.7": "日用品",
            "sku-cat.99": "其他",
            "sku-pkg.1": "瓶装",
            "sku-pkg.2": "罐装",
            "sku-pkg.3": "袋装",
            "sku-pkg.4": "盒装",
            "sku-pkg.5": "桶装",
            "sku-pkg.6": "箱装/塑包",
            "sku-pkg.99": "其他",
            "title.1": "EasyDL定制化图像分类 - 百度AI开放平台",
            "title.2": "EasyDL定制化物体检测 - 百度AI开放平台",
            "title.3": "EasyDL定制化声音分类 - 百度AI开放平台",
            "title.4": "EasyDL定制化文本分类 - 百度AI开放平台",
            "title.5": "EasyDL定制化视频分类 - 百度AI开放平台",
            "title.6": "EasyDL定制化图像分割 - 百度AI开放平台",
            "title.7": "EasyDL定制化短文本相似度 - 百度AI开放平台",
            "title.9": "EasyDL定制化情感倾向分析 - 百度AI开放平台",
            "title.10": "EasyDL定制化文本实体抽取 - 百度AI开放平台",
            "title.11": "EasyDL定制化文本实体关系抽取 - 百度AI开放平台",
            "title.12": "EasyDL定制化目标跟踪 - 百度AI开放平台",
            "title.18": "EasyDL定制化ERNIE知识大模型创作 - 百度AI开放平台",
            "title.19": "EasyDL定制化评论观点抽取 - 百度AI开放平台",
            "title.201": "EasyDL定制化表格数据预测模型 - 百度AI开放平台",
            "title.202": "EasyDL定制化时序预测模型 - 百度AI开放平台",
            "title.1001": "EasyDL零售版 - 百度AI开放平台",
            "title.1002": "EasyDL零售版 - 百度AI开放平台",
            "smart-asr-scene.CENTER": "呼叫中心",
            "smart-asr-scene.IDENTIFY": "短语音识别",
            "smart-asr-scene.CURRENT_IDENTIFY": "实时语音识别",
            qq: "679517246",
            "node-type.P4": "GPU P4",
            "node-type.P40": "GPU P40",
            "node-type.V100": "GPU V100",
            "discount-types.TRAIN": "模型训练",
            "discount-types.CALL": "公有云服务",
            "discount-types.SDK": "设备端SDK",
            "discount-types.PRIVATIZATION_SDK": "服务器SDK",
            "discount-types.PRIVATIZATION_API": "纯离线API",
            "discount-types.INTEGRATION": "专项硬件SDK",
            "discount-types.DURATION":
              "飞桨EasyDL年中特惠，离线服务授权最低7折！",
            "discount-types.QIANFANBOARD":
              "千帆大模型平台已正式面向企业和个人开放使用",
          };
        },
        90903: function (e) {
          e.exports = {
            H5展示模型名称不能为空: "H5展示模型名称不能为空",
            H5展示模型名称不能超过20个字符: "H5展示模型名称不能超过20个字符",
            H5微信分享文案不能为空: "H5微信分享文案不能为空",
            H5微信分享文案不能超过50个字符: "H5微信分享文案不能超过50个字符",
            H5模型不存在: "H5模型不存在",
            app已经解除授权: "app已经解除授权",
            "demo服务尚未启动完成，请稍候再试":
              "demo服务尚未启动完成，请稍候再试",
            "demo服务调用失败，请稍候再试": "demo服务调用失败，请稍候再试",
            上传图片列表为空: "上传图片列表为空",
            上传图片超限制: "上传图片超限制",
            上传的文件为空: "上传的文件为空",
            上传的文件过大: "上传的文件过大",
            不能进行demo验证: "不能进行demo验证",
            修改服务状态失败: "修改服务状态失败",
            停止训练失败: "停止训练失败",
            "停止训练失败，请稍后重试": "停止训练失败，请稍后重试",
            其他要求信息不能超过500个字符: "其他要求信息不能超过500个字符",
            分类不存在: "分类不存在",
            分类名称为空: "分类名称为空",
            "分类名称格式仅支持数字/字母/下划线":
              "分类名称格式仅支持数字/字母/下划线",
            分类名称过长: "分类名称过长",
            "分类名称重复，请更换名称": "分类名称重复，请更换名称",
            分类数量已经达到上限: "分类数量已经达到上限",
            创建分类失败: "创建分类失败",
            创建数据集失败: "创建数据集失败",
            "历史服务错误，请联系管理员": "历史服务错误，请联系管理员",
            参数操作系统错误: "参数操作系统错误",
            参数错误: "参数错误",
            名称已存在: "名称已存在",
            启动demo失败: "启动demo失败",
            启动训练失败: "启动训练失败",
            图片不存在: "图片不存在",
            图片删除失败: "图片删除失败",
            图片名称为空: "图片名称为空",
            图片重命名失败: "图片重命名失败",
            字段不能为空: "字段不能为空",
            字段格式不匹配: "字段格式不匹配",
            字段过长: "字段过长",
            "尚未发布，资源无法获取": "尚未发布，资源无法获取",
            开发者署名不能为空: "开发者署名不能为空",
            开发者署名不能超过20个字符: "开发者署名不能超过20个字符",
            所选数据集类型错误: "所选数据集类型错误",
            授权应用为空: "授权应用为空",
            描述信息不能为空: "描述信息不能为空",
            描述信息不能超过500个字符: "描述信息不能超过500个字符",
            数据标注格式错误: "数据标注格式错误",
            数据集不存在: "数据集不存在",
            数据集为空: "数据集为空",
            数据集分类删除失败: "数据集分类删除失败",
            数据集分类过少: "数据集分类过少",
            数据集删除失败: "数据集删除失败",
            数据集名称为空: "数据集名称为空",
            数据集名称格式非法: "数据集名称格式非法",
            数据集名称过长: "数据集名称过长",
            数据集异常: "数据集异常",
            数据集数量已经达到上限: "数据集数量已经达到上限",
            数据集重命名失败: "数据集重命名失败",
            文件类型错误: "文件类型错误",
            无效的编译: "无效的编译",
            服务信息不存在: "服务信息不存在",
            服务名称不能为空: "服务名称不能为空",
            服务名称不能超过20个字符: "服务名称不能超过20个字符",
            服务启动失败: "服务启动失败",
            服务器错误: "服务器错误",
            "服务未上线完成，不能配置授权信息":
              "服务未上线完成，不能配置授权信息",
            服务未注册: "服务未注册",
            服务状态错误: "服务状态错误",
            标签数量已经达到上限: "标签数量已经达到上限",
            模型不存在: "模型不存在",
            模型介绍不能为空: "模型介绍不能为空",
            模型介绍不能超过50个字符: "模型介绍不能超过50个字符",
            模型名称不能为空: "模型名称不能为空",
            模型名称不能超过20个字符: "模型名称不能超过20个字符",
            模型名称已存在: "模型名称已存在",
            模型应用类型参数错误: "模型应用类型参数错误",
            模型数量超限: "模型数量超限",
            模型类型错误: "模型类型错误",
            没有压缩包: "没有压缩包",
            注册api失败: "注册api失败",
            用户不存在: "用户不存在",
            申请服务失败: "申请服务失败",
            移动文件出现错误: "移动文件出现错误",
            类别重命名失败: "类别重命名失败",
            编译失败: "编译失败",
            编译触发失败: "编译触发失败",
            联系电话格式不合法: "联系电话格式不合法",
            自定义服务地址为空: "自定义服务地址为空",
            自定义服务地址已被占用: "自定义服务地址已被占用",
            自定义服务地址格式非法: "自定义服务地址格式非法",
            自定义服务地址被预留: "自定义服务地址被预留",
            自定义服务地址过长: "自定义服务地址过长",
            获取token失败: "获取token失败",
            获取分类信息失败: "获取分类信息失败",
            获取应用信息失败: "获取应用信息失败",
            获取数据集信息失败: "获取数据集信息失败",
            获取错误图片示例信息失败: "获取错误图片示例信息失败",
            "训练中，无法修改该数据集": "训练中，无法修改该数据集",
            训练中的模型不能超过1个: "训练中的模型不能超过1个",
            训练任务不存在: "训练任务不存在",
            训练任务不能停止: "训练任务不能停止",
            训练任务尚未完成: "训练任务尚未完成",
            训练任务异常: "训练任务异常",
            训练任务状态错误: "训练任务状态错误",
            "训练集群异常，您的训练已经提交，系统稍后会自动开始训练，请耐心等待":
              "训练集群异常，您的训练已经提交，系统稍后会自动开始训练，请耐心等待",
            该模型私有化部署已经申请: "该模型私有化部署已经申请",
            "该版本已上线，请勿重复申请": "该版本已上线，请勿重复申请",
            该状态的模型不能删除: "该状态的模型不能删除",
            该状态的模型不能申请部署: "该状态的模型不能申请部署",
            该状态的模型不能训练: "该状态的模型不能训练",
            "请求超时，请检查网络连接": "请求超时，请检查网络连接",
            请等待之前的demo启动操作完成: "请等待之前的demo启动操作完成",
            请等待之前的发布操作完成: "请等待之前的发布操作完成",
            请等待审核结果: "请等待审核结果",
            资源下载超限: "资源下载超限",
            部署中的模型不能超过5个: "部署中的模型不能超过5个",
            "非常抱歉，系统出现错误，请稍后重试":
              "非常抱歉，系统出现错误，请稍后重试",
            页面未找到: "页面未找到",
          };
        },
        71359: function (e) {
          e.exports = function (e) {
            (e.options.__i18n = e.options.__i18n || []),
              e.options.__i18n.push(
                '{"back":"返回","usercenter":"用户中心","logout":"退出","admin":"人员管理","organization":"组织","user":"用户","role":"角色"}'
              ),
              delete e.options._Ctor;
          };
        },
        40794: function (e) {
          e.exports = function (e) {
            (e.options.__i18n = e.options.__i18n || []),
              e.options.__i18n.push(
                '{"choose":"选择模型类型","onlineUse":"在线使用","localUse":"本地使用"}'
              ),
              delete e.options._Ctor;
          };
        },
        83584: function (e) {
          e.exports = function (e) {
            (e.options.__i18n = e.options.__i18n || []),
              e.options.__i18n.push("{}"),
              delete e.options._Ctor;
          };
        },
        93001: function (e) {
          e.exports = function (e) {
            (e.options.__i18n = e.options.__i18n || []),
              e.options.__i18n.push('{"unknown":"出错了"}'),
              delete e.options._Ctor;
          };
        },
        61828: function (e, t, n) {
          var o = {
            "./flags.ai.js": 90335,
            "./flags.cmg_1.0.js": 5643,
            "./flags.geely_1.0.js": 58500,
            "./flags.ningbo.js": 4329,
            "./flags.public.js": 47466,
            "./flags.tutorial.js": 13666,
          };
          function i(e) {
            var t = a(e);
            return n(t);
          }
          function a(e) {
            if (!n.o(o, e)) {
              var t = new Error("Cannot find module '" + e + "'");
              throw ((t.code = "MODULE_NOT_FOUND"), t);
            }
            return o[e];
          }
          (i.keys = function () {
            return Object.keys(o);
          }),
            (i.resolve = a),
            (e.exports = i),
            (i.id = 61828);
        },
        87326: function (e, t, n) {
          var o = {
            "./ai": 10940,
            "./ai.js": 10940,
            "./ai.translate": 22970,
            "./ai.translate.json": 22970,
            "./ai.whitelist": 18768,
            "./ai.whitelist.js": 18768,
            "./flags": 49713,
            "./flags/": 49713,
            "./flags/flags.ai": 90335,
            "./flags/flags.ai.js": 90335,
            "./flags/flags.cmg_1.0": 5643,
            "./flags/flags.cmg_1.0.js": 5643,
            "./flags/flags.geely_1.0": 58500,
            "./flags/flags.geely_1.0.js": 58500,
            "./flags/flags.ningbo": 4329,
            "./flags/flags.ningbo.js": 4329,
            "./flags/flags.public": 47466,
            "./flags/flags.public.js": 47466,
            "./flags/flags.tutorial": 13666,
            "./flags/flags.tutorial.js": 13666,
            "./flags/index": 49713,
            "./flags/index.js": 49713,
            "./flags/utils": 92726,
            "./flags/utils.js": 92726,
            "./mock": 65685,
            "./mock.json": 65685,
            "./ningbo": 65535,
            "./ningbo.js": 65535,
            "./ningbo.translate": 69650,
            "./ningbo.translate.json": 69650,
            "./ningbo.whitelist": 97304,
            "./ningbo.whitelist.js": 97304,
            "./public": 6460,
            "./public.js": 6460,
            "./tutorial": 65646,
            "./tutorial.js": 65646,
            "./tutorial.whitelist": 54736,
            "./tutorial.whitelist.js": 54736,
            "./wx": 57120,
            "./wx.js": 57120,
          };
          function i(e) {
            var t = a(e);
            return n(t);
          }
          function a(e) {
            if (!n.o(o, e)) {
              var t = new Error("Cannot find module '" + e + "'");
              throw ((t.code = "MODULE_NOT_FOUND"), t);
            }
            return o[e];
          }
          (i.keys = function () {
            return Object.keys(o);
          }),
            (i.resolve = a),
            (e.exports = i),
            (i.id = 87326);
        },
        2115: function (e, t, n) {
          var o = {
            "./adapt.vue": [55802, 802],
            "./default.vue": [48440, 84, 935],
            "./landing-like.vue": [56122, 122],
            "./nav-only.vue": [9208, 208],
            "./plain.vue": [83994, 994],
            "./sidebar-only.vue": [84606, 84, 224],
          };
          function i(e) {
            if (!n.o(o, e))
              return Promise.resolve().then(function () {
                var t = new Error("Cannot find module '" + e + "'");
                throw ((t.code = "MODULE_NOT_FOUND"), t);
              });
            var t = o[e],
              i = t[0];
            return Promise.all(t.slice(1).map(n.e)).then(function () {
              return n(i);
            });
          }
          (i.keys = function () {
            return Object.keys(o);
          }),
            (i.id = 2115),
            (e.exports = i);
        },
        46395: function (e, t, n) {
          "use strict";
          e.exports = n.p + "img/audio-classification.f2cbbac6.png";
        },
        47268: function (e, t, n) {
          "use strict";
          e.exports = n.p + "img/audio-distinguish.d383d8b8.png";
        },
        4063: function (e, t, n) {
          "use strict";
          e.exports = n.p + "img/comment-extract.3fc18fd9.svg";
        },
        82480: function (e, t, n) {
          "use strict";
          e.exports = n.p + "img/image-distribute.b1fb34b9.png";
        },
        84618: function (e, t, n) {
          "use strict";
          e.exports = n.p + "img/image-division.75a0fa5e.png";
        },
        5272: function (e, t, n) {
          "use strict";
          e.exports = n.p + "img/image-object.626c2664.png";
        },
        90031: function (e, t, n) {
          "use strict";
          e.exports = n.p + "img/ocr.8051a12b.svg";
        },
        44748: function (e, t, n) {
          "use strict";
          e.exports = n.p + "img/paddle.7c9d3b20.png";
        },
        88835: function (e, t, n) {
          "use strict";
          e.exports = n.p + "img/relation-text-extract.92f12a08.png";
        },
        50007: function (e, t, n) {
          "use strict";
          e.exports = n.p + "img/retail.4ca9ab22.png";
        },
        6098: function (e, t, n) {
          "use strict";
          e.exports = n.p + "img/structdata.6618406f.png";
        },
        1102: function (e, t, n) {
          "use strict";
          e.exports = n.p + "img/target-track.5d8d4628.svg";
        },
        36987: function (e, t, n) {
          "use strict";
          e.exports = n.p + "img/text-emotion.09dca0dd.png";
        },
        59819: function (e, t, n) {
          "use strict";
          e.exports = n.p + "img/text-ernie.1920ec43.png";
        },
        44716: function (e, t, n) {
          "use strict";
          e.exports = n.p + "img/text-extract.38dd8aa5.png";
        },
        41751: function (e, t, n) {
          "use strict";
          e.exports = n.p + "img/text-label.8159a6ba.png";
        },
        43687: function (e, t, n) {
          "use strict";
          e.exports = n.p + "img/text-labels.fd8f6529.png";
        },
        35574: function (e, t, n) {
          "use strict";
          e.exports = n.p + "img/text-similar.2a1c2a00.png";
        },
        17266: function (e, t, n) {
          "use strict";
          e.exports = n.p + "img/tsf.dbaa91d8.svg";
        },
        37302: function (e, t, n) {
          "use strict";
          e.exports = n.p + "img/video-classification.57ec60ac.png";
        },
        79021: function (e, t, n) {
          "use strict";
          e.exports = n.p + "img/vqa.6799510d.png";
        },
        98011: function (e, t, n) {
          "use strict";
          e.exports = n.p + "img/menu-hide.d9c8ceeb.svg";
        },
        70227: function (e, t, n) {
          "use strict";
          e.exports = n.p + "img/menu-open.722601dc.svg";
        },
        48672: function (t) {
          "use strict";
          t.exports = e;
        },
        23644: function (e) {
          "use strict";
          e.exports = t;
        },
        84259: function (e) {
          "use strict";
          e.exports = n;
        },
        32121: function (e) {
          "use strict";
          e.exports = o;
        },
        70433: function (e) {
          "use strict";
          e.exports = i;
        },
        13405: function (e) {
          "use strict";
          e.exports = a;
        },
        63792: function (e) {
          "use strict";
          e.exports = r;
        },
        82670: function (e) {
          "use strict";
          e.exports = s;
        },
        47253: function (e) {
          "use strict";
          e.exports = l;
        },
        70748: function (e) {
          "use strict";
          e.exports = c;
        },
        98557: function (e) {
          "use strict";
          e.exports = u;
        },
        38342: function (e) {
          "use strict";
          e.exports = d;
        },
        42480: function () {},
        22970: function (e) {
          "use strict";
          e.exports = JSON.parse(
            '{"src/components/FatalError/FatalError.vue":{"cn":{"contact":"很抱歉给您带来不便"}},"src/pages/_codename/overview.vue":{"cn":{"600":"实例分割模型可像素级地识别目标轮廓和名称。常见应用场景：卫星图像分析、医学图像分析"}},"src/locales/glossary.yml":{"cn":{"model-type.6":"实例分割模型","title.6":"EasyDL定制化实例分割 - 百度AI开放平台"}},"src/components/ModelCreateForm/ModelCreateForm.vue":{"cn":{"notice.covid19":"目前在实例分割模型已上线肺炎识别专用训练算法，可以在肺炎CT图片中识别肺部及病灶的区域位置，若为该场景建议使用图像分割模型进行训练。"}}}'
          );
        },
        65685: function (e) {
          "use strict";
          e.exports = [];
        },
        69650: function (e) {
          "use strict";
          e.exports = JSON.parse(
            '{"src/components/SidebarRoutes/definitions.t.yml":{"cn":{"dataset.title":"数据服务","deploy.publicApi":"在线API","dataset.annotate":"数据标注"}},"src/components/FatalError/FatalError.vue":{"cn":{"contact":"很抱歉给您带来不便"}}}'
          );
        },
      },
      m = {};
    function f(e) {
      var t = m[e];
      if (void 0 !== t) return t.exports;
      var n = (m[e] = { id: e, loaded: !1, exports: {} });
      return p[e].call(n.exports, n, n.exports, f), (n.loaded = !0), n.exports;
    }
    (f.m = p),
      (function () {
        var e = [];
        f.O = function (t, n, o, i) {
          if (!n) {
            var a = 1 / 0;
            for (c = 0; c < e.length; c++) {
              (n = e[c][0]), (o = e[c][1]), (i = e[c][2]);
              for (var r = !0, s = 0; s < n.length; s++)
                (!1 & i || a >= i) &&
                Object.keys(f.O).every(function (e) {
                  return f.O[e](n[s]);
                })
                  ? n.splice(s--, 1)
                  : ((r = !1), i < a && (a = i));
              if (r) {
                e.splice(c--, 1);
                var l = o();
                void 0 !== l && (t = l);
              }
            }
            return t;
          }
          i = i || 0;
          for (var c = e.length; c > 0 && e[c - 1][2] > i; c--) e[c] = e[c - 1];
          e[c] = [n, o, i];
        };
      })(),
      (function () {
        f.n = function (e) {
          var t =
            e && e.__esModule
              ? function () {
                  return e["default"];
                }
              : function () {
                  return e;
                };
          return f.d(t, { a: t }), t;
        };
      })(),
      (function () {
        var e,
          t = Object.getPrototypeOf
            ? function (e) {
                return Object.getPrototypeOf(e);
              }
            : function (e) {
                return e.__proto__;
              };
        f.t = function (n, o) {
          if ((1 & o && (n = this(n)), 8 & o)) return n;
          if ("object" === typeof n && n) {
            if (4 & o && n.__esModule) return n;
            if (16 & o && "function" === typeof n.then) return n;
          }
          var i = Object.create(null);
          f.r(i);
          var a = {};
          e = e || [null, t({}), t([]), t(t)];
          for (
            var r = 2 & o && n;
            "object" == typeof r && !~e.indexOf(r);
            r = t(r)
          )
            Object.getOwnPropertyNames(r).forEach(function (e) {
              a[e] = function () {
                return n[e];
              };
            });
          return (
            (a["default"] = function () {
              return n;
            }),
            f.d(i, a),
            i
          );
        };
      })(),
      (function () {
        f.d = function (e, t) {
          for (var n in t)
            f.o(t, n) &&
              !f.o(e, n) &&
              Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        };
      })(),
      (function () {
        (f.f = {}),
          (f.e = function (e) {
            return Promise.all(
              Object.keys(f.f).reduce(function (t, n) {
                return f.f[n](e, t), t;
              }, [])
            );
          });
      })(),
      (function () {
        f.u = function (e) {
          return (
            "js/" +
            ({
              5: "codename-sale-orders-id",
              24: "jumping",
              37: "codename-skus-index",
              38: "codename-directUsing",
              66: "codename-sale-orders-index",
              80: "codename-sale-index",
              165: "codename-skus-batchUpload",
              201: "codename-noexist",
              225: "codename-models-modelId-iterationId-service-retail",
              242: "codename-skus",
              291: "codename-index",
              292: "codename-sale-orders-id-index",
              322: "codename-skus-new",
              336: "codename-dclx",
              340: "overview",
              365: "jump-mc",
              371: "codename-datasets-public",
              446: "invitation",
              447: "codename-skus-train",
              475: "codename",
              489: "codename-nopermission",
              596: "codename-jumpTo",
              624: "study",
              636: "codename-skus-skuId-edit",
              652: "codename-services-index",
              663: "exchange",
              664: "codename-overview",
              691: "codename-sale-orders-id-deploy",
              798: "project-empty",
              826: "index",
              877: "codename-datasets",
              901: "coming",
            }[e] || e) +
            "." +
            {
              5: "e9ee784a",
              24: "62744b2e",
              37: "c2694610",
              38: "9ed042fa",
              66: "e9a2df71",
              80: "49ca6fb8",
              84: "517f8c73",
              122: "dfad5f75",
              165: "869c093b",
              201: "2ab149a0",
              208: "fc7c1858",
              224: "fe84c8ca",
              225: "72a102e7",
              242: "e4e1d89e",
              291: "01e4ca0a",
              292: "8c0e76db",
              322: "ff06e5c9",
              336: "580d780f",
              340: "05f55175",
              365: "f589538d",
              371: "93995eba",
              406: "7842cd0c",
              443: "4ef4fb93",
              444: "69f8b92d",
              446: "1444c071",
              447: "d277703b",
              475: "de5c05bc",
              489: "1a949e73",
              596: "682f0dac",
              624: "2f8cecfe",
              636: "8643e67d",
              652: "9d3a17bf",
              663: "8af5159a",
              664: "825897f5",
              691: "3a37fd1e",
              763: "d15f593c",
              798: "a62e25eb",
              802: "b856b90c",
              826: "2dfa1dfe",
              865: "b6d92784",
              877: "54b72de3",
              901: "e71ae1e1",
              935: "340e1803",
              963: "0c7d8973",
              994: "f76c22bb",
            }[e] +
            ".js"
          );
        };
      })(),
      (function () {
        f.miniCssF = function (e) {
          return (
            "css/" +
            ({
              24: "jumping",
              37: "codename-skus-index",
              66: "codename-sale-orders-index",
              80: "codename-sale-index",
              165: "codename-skus-batchUpload",
              225: "codename-models-modelId-iterationId-service-retail",
              292: "codename-sale-orders-id-index",
              322: "codename-skus-new",
              336: "codename-dclx",
              340: "overview",
              365: "jump-mc",
              371: "codename-datasets-public",
              446: "invitation",
              447: "codename-skus-train",
              489: "codename-nopermission",
              596: "codename-jumpTo",
              624: "study",
              636: "codename-skus-skuId-edit",
              652: "codename-services-index",
              663: "exchange",
              664: "codename-overview",
              691: "codename-sale-orders-id-deploy",
              798: "project-empty",
              901: "coming",
            }[e] || e) +
            "." +
            {
              24: "14682b60",
              37: "1c592498",
              66: "98fab646",
              80: "006bd648",
              122: "69fec7cb",
              165: "ad54ad79",
              208: "7a121389",
              224: "ae4453d0",
              225: "93c31daa",
              292: "51cfc3f8",
              322: "5ff3782d",
              336: "26067291",
              340: "ca665b59",
              365: "0593e12b",
              371: "6810b36c",
              406: "b835c58a",
              444: "23095e80",
              446: "b09989b1",
              447: "c6b60b5c",
              489: "5663e235",
              596: "8d5200c3",
              624: "b4c31dd6",
              636: "7bd04661",
              652: "b109648d",
              663: "6f1adf7f",
              664: "ce102db7",
              691: "b071027a",
              763: "9482ee72",
              798: "4a6b8031",
              802: "eb7456cf",
              901: "944918ca",
              935: "47fe5f96",
            }[e] +
            ".css"
          );
        };
      })(),
      (function () {
        f.g = (function () {
          if ("object" === typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")();
          } catch (e) {
            if ("object" === typeof window) return window;
          }
        })();
      })(),
      (function () {
        f.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        };
      })(),
      (function () {
        var e = {},
          t = "easydl-lite:";
        f.l = function (n, o, i, a) {
          if (e[n]) e[n].push(o);
          else {
            var r, s;
            if (void 0 !== i)
              for (
                var l = document.getElementsByTagName("script"), c = 0;
                c < l.length;
                c++
              ) {
                var u = l[c];
                if (
                  u.getAttribute("src") == n ||
                  u.getAttribute("data-webpack") == t + i
                ) {
                  r = u;
                  break;
                }
              }
            r ||
              ((s = !0),
              (r = document.createElement("script")),
              (r.charset = "utf-8"),
              (r.timeout = 120),
              f.nc && r.setAttribute("nonce", f.nc),
              r.setAttribute("data-webpack", t + i),
              (r.src = n)),
              (e[n] = [o]);
            var d = function (t, o) {
                (r.onerror = r.onload = null), clearTimeout(p);
                var i = e[n];
                if (
                  (delete e[n],
                  r.parentNode && r.parentNode.removeChild(r),
                  i &&
                    i.forEach(function (e) {
                      return e(o);
                    }),
                  t)
                )
                  return t(o);
              },
              p = setTimeout(
                d.bind(null, void 0, { type: "timeout", target: r }),
                12e4
              );
            (r.onerror = d.bind(null, r.onerror)),
              (r.onload = d.bind(null, r.onload)),
              s && document.head.appendChild(r);
          }
        };
      })(),
      (function () {
        f.r = function (e) {
          "undefined" !== typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        };
      })(),
      (function () {
        f.nmd = function (e) {
          return (e.paths = []), e.children || (e.children = []), e;
        };
      })(),
      (function () {
        f.p = "//aip-static.cdn.bcebos.com/afe/easydl-lite/latest/";
      })(),
      (function () {
        if ("undefined" !== typeof document) {
          var e = function (e, t, n, o, i) {
              var a = document.createElement("link");
              (a.rel = "stylesheet"), (a.type = "text/css");
              var r = function (n) {
                if (((a.onerror = a.onload = null), "load" === n.type)) o();
                else {
                  var r = n && ("load" === n.type ? "missing" : n.type),
                    s = (n && n.target && n.target.href) || t,
                    l = new Error(
                      "Loading CSS chunk " + e + " failed.\n(" + s + ")"
                    );
                  (l.code = "CSS_CHUNK_LOAD_FAILED"),
                    (l.type = r),
                    (l.request = s),
                    a.parentNode && a.parentNode.removeChild(a),
                    i(l);
                }
              };
              return (
                (a.onerror = a.onload = r),
                (a.href = t),
                n
                  ? n.parentNode.insertBefore(a, n.nextSibling)
                  : document.head.appendChild(a),
                a
              );
            },
            t = function (e, t) {
              for (
                var n = document.getElementsByTagName("link"), o = 0;
                o < n.length;
                o++
              ) {
                var i = n[o],
                  a = i.getAttribute("data-href") || i.getAttribute("href");
                if ("stylesheet" === i.rel && (a === e || a === t)) return i;
              }
              var r = document.getElementsByTagName("style");
              for (o = 0; o < r.length; o++) {
                (i = r[o]), (a = i.getAttribute("data-href"));
                if (a === e || a === t) return i;
              }
            },
            n = function (n) {
              return new Promise(function (o, i) {
                var a = f.miniCssF(n),
                  r = f.p + a;
                if (t(a, r)) return o();
                e(n, r, null, o, i);
              });
            },
            o = { 143: 0 };
          f.f.miniCss = function (e, t) {
            var i = {
              24: 1,
              37: 1,
              66: 1,
              80: 1,
              122: 1,
              165: 1,
              208: 1,
              224: 1,
              225: 1,
              292: 1,
              322: 1,
              336: 1,
              340: 1,
              365: 1,
              371: 1,
              406: 1,
              444: 1,
              446: 1,
              447: 1,
              489: 1,
              596: 1,
              624: 1,
              636: 1,
              652: 1,
              663: 1,
              664: 1,
              691: 1,
              763: 1,
              798: 1,
              802: 1,
              901: 1,
              935: 1,
            };
            o[e]
              ? t.push(o[e])
              : 0 !== o[e] &&
                i[e] &&
                t.push(
                  (o[e] = n(e).then(
                    function () {
                      o[e] = 0;
                    },
                    function (t) {
                      throw (delete o[e], t);
                    }
                  ))
                );
          };
        }
      })(),
      (function () {
        var e = { 143: 0 };
        (f.f.j = function (t, n) {
          var o = f.o(e, t) ? e[t] : void 0;
          if (0 !== o)
            if (o) n.push(o[2]);
            else {
              var i = new Promise(function (n, i) {
                o = e[t] = [n, i];
              });
              n.push((o[2] = i));
              var a = f.p + f.u(t),
                r = new Error(),
                s = function (n) {
                  if (
                    f.o(e, t) &&
                    ((o = e[t]), 0 !== o && (e[t] = void 0), o)
                  ) {
                    var i = n && ("load" === n.type ? "missing" : n.type),
                      a = n && n.target && n.target.src;
                    (r.message =
                      "Loading chunk " +
                      t +
                      " failed.\n(" +
                      i +
                      ": " +
                      a +
                      ")"),
                      (r.name = "ChunkLoadError"),
                      (r.type = i),
                      (r.request = a),
                      o[1](r);
                  }
                };
              f.l(a, s, "chunk-" + t, t);
            }
        }),
          (f.O.j = function (t) {
            return 0 === e[t];
          });
        var t = function (t, n) {
            var o,
              i,
              a = n[0],
              r = n[1],
              s = n[2],
              l = 0;
            if (
              a.some(function (t) {
                return 0 !== e[t];
              })
            ) {
              for (o in r) f.o(r, o) && (f.m[o] = r[o]);
              if (s) var c = s(f);
            }
            for (t && t(n); l < a.length; l++)
              (i = a[l]), f.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
            return f.O(c);
          },
          n = (self["webpackChunkeasydl_lite"] =
            self["webpackChunkeasydl_lite"] || []);
        n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
      })();
    var T = f.O(void 0, [998], function () {
      return f(27714);
    });
    return (T = f.O(T)), T;
  })();
});
//# sourceMappingURL=app.7400c2a4.js.map
