(self["webpackChunkeasydl_lite"] = self["webpackChunkeasydl_lite"] || []).push([
  [935],
  {
    80645: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return m;
        },
      });
      var i = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("span", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !1,
                expression: "false",
              },
            ],
          });
        },
        o = [],
        s = a(47253),
        c = a(63792),
        l = a(32121),
        n = (0, s.defineComponent)({
          setup() {
            const e = (0, l.useStore)(),
              { fail: t } = (0, c.useToast)();
            (0, s.watch)(
              () => e.state.error.msg,
              (a) => {
                a && (t(a), e.commit("error/clearMsg"));
              },
              { immediate: !0 }
            );
          },
        }),
        r = n,
        d = a(1001),
        u = (0, d.Z)(r, i, o, !1, null, null, null),
        m = u.exports;
    },
    48440: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return ct;
          },
        });
      var i = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "div",
            { staticClass: "default-layout override-ui override-bie" },
            [
              e.standalone ? a("Navbar") : e._e(),
              a("ErrorMsg"),
              a(
                "main",
                {
                  class: { viewport: !0, "full-screen": e.isFullScreen },
                  attrs: { role: "main" },
                },
                [
                  e.isFullScreen
                    ? e._e()
                    : a("AppSidebar", {
                        staticClass: "viewport_left",
                        attrs: {
                          headline: e.sidebarInfo.headline,
                          routes: e.sidebarInfo.routes,
                        },
                        on: { changeLink: e.changeLink },
                      }),
                  a("div", { attrs: { id: "s-toast-wrapper" } }),
                  a("div", { staticClass: "viewport_right" }, [
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: e.loading,
                            expression: "loading",
                          },
                        ],
                        staticClass: "global-loading",
                      },
                      [a("the-loading")],
                      1
                    ),
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !e.loading,
                            expression: "!loading",
                          },
                        ],
                        ref: "main",
                        staticClass: "app-workspace",
                      },
                      [
                        "custom" === e.layout
                          ? a("router-view")
                          : a(
                              "page",
                              [
                                "contentCustom" === e.layout
                                  ? a("router-view")
                                  : a(
                                      "div",
                                      { staticClass: "easydl-card" },
                                      [a("router-view")],
                                      1
                                    ),
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
              a("PortalSummary", { attrs: { "model-type": e.modelType.mt } }),
            ],
            1
          );
        },
        o = [],
        s = a(47253),
        c = a(32121),
        l = a(63792),
        n = a(76225),
        r = a(43031),
        d = a(53014),
        u = a(21274),
        m = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return e.firstUse
            ? i("the-modal", { ref: "modal" }, [
                i("div", { staticClass: "first-use-modal" }, [
                  i("h3", [e._v(e._s(e.$t("title")))]),
                  i("div", { staticClass: "first-use-guide" }, [
                    i("div", { staticClass: "guide-item" }, [
                      i("div", { staticClass: "guide-icon" }, [
                        i("img", { attrs: { src: a(94461) } }),
                      ]),
                      i("p", [e._v(e._s(e.$t("write-model-message")))]),
                    ]),
                    i("div", { staticClass: "guide-divider" }, [
                      i("div", { staticClass: "guide-divider-icon" }),
                    ]),
                    i("div", { staticClass: "guide-item" }, [
                      i("div", { staticClass: "guide-icon" }, [
                        i("img", { attrs: { src: a(56061) } }),
                      ]),
                      i("p", [e._v(e._s(e.$t("upload-dataset")))]),
                    ]),
                    i("div", { staticClass: "guide-divider" }, [
                      i("div", { staticClass: "guide-divider-icon" }),
                    ]),
                    i("div", { staticClass: "guide-item" }, [
                      i("div", { staticClass: "guide-icon" }, [
                        i("img", { attrs: { src: a(47761) } }),
                      ]),
                      i("p", [e._v(e._s(e.$t("check-model-effect")))]),
                    ]),
                    i("div", { staticClass: "guide-divider" }, [
                      i("div", { staticClass: "guide-divider-icon" }),
                    ]),
                    i("div", { staticClass: "guide-item" }, [
                      i("div", { staticClass: "guide-icon" }, [
                        i("img", { attrs: { src: a(65098) } }),
                      ]),
                      i("p", [
                        e._v(e._s(e.$t("apply-online"))),
                        i("span", [e._v(e._s(e.$t("need-operate")))]),
                      ]),
                    ]),
                  ]),
                  i(
                    "div",
                    { staticClass: "first-use-buttons" },
                    [
                      i("the-button", { on: { click: e.close } }, [
                        e._v(e._s(e.$t("know"))),
                      ]),
                    ],
                    1
                  ),
                ]),
              ])
            : e._e();
        },
        p = [],
        v = {
          computed: {
            firstUse() {
              return this.$store.state.user.firstUse;
            },
          },
          data() {
            return {};
          },
          methods: {
            close() {
              this.$refs.modal.close();
            },
          },
        },
        h = v,
        f = a(1001),
        _ = a(65657),
        b = a.n(_),
        g = b(),
        y = (0, f.Z)(h, m, p, !1, null, null, null);
      "function" === typeof g && g(y);
      var C = y.exports,
        T = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "the-modal",
            { ref: "modal", staticClass: "retail-welcome-modal" },
            [
              a("the-icon", {
                staticClass: "retail-welcome-modal_close",
                attrs: { name: "close" },
                on: { click: e.close },
              }),
              a("h4", { staticClass: "retail-welcome-modal_title" }, [
                e._v(e._s(e.$t("welcome-title"))),
              ]),
              a("div", { staticClass: "retail-welcome-modal_divider-ul" }, [
                a("div", {
                  staticClass: "retail-welcome-modal_divider-li",
                  staticStyle: { "margin-left": "184px" },
                }),
                a("div", {
                  staticClass: "retail-welcome-modal_divider-li",
                  staticStyle: { "margin-left": "44px" },
                }),
                a("div", {
                  staticClass: "retail-welcome-modal_divider-li",
                  staticStyle: { "margin-left": "44px" },
                }),
                a("div", {
                  staticClass: "retail-welcome-modal_divider-li",
                  staticStyle: { "margin-left": "44px" },
                }),
              ]),
              a("div", { staticClass: "retail-welcome-modal_ul" }, [
                a(
                  "div",
                  { staticClass: "retail-welcome-modal_li" },
                  [
                    a("the-icon", {
                      staticClass: "retail-welcome-modal_icon",
                      attrs: { name: "doc-add" },
                    }),
                    a("div", { staticClass: "retail-welcome-modal_num" }, [
                      e._v("1"),
                    ]),
                    a("div", { staticClass: "retail-welcome-modal_txt" }, [
                      e._v(e._s(e.$t("create"))),
                    ]),
                  ],
                  1
                ),
                a(
                  "div",
                  { staticClass: "retail-welcome-modal_li" },
                  [
                    a("the-icon", {
                      staticClass: "retail-welcome-modal_icon",
                      attrs: { name: "image" },
                    }),
                    a("div", { staticClass: "retail-welcome-modal_num" }, [
                      e._v("2"),
                    ]),
                    a("div", { staticClass: "retail-welcome-modal_txt" }, [
                      e._v(e._s(e.$t("upload"))),
                    ]),
                  ],
                  1
                ),
                a(
                  "div",
                  { staticClass: "retail-welcome-modal_li" },
                  [
                    a("the-icon", {
                      staticClass: "retail-welcome-modal_icon",
                      attrs: { name: "resize" },
                    }),
                    a("div", { staticClass: "retail-welcome-modal_num" }, [
                      e._v("3"),
                    ]),
                    a("div", { staticClass: "retail-welcome-modal_txt" }, [
                      e._v(e._s(e.$t("annotate"))),
                    ]),
                  ],
                  1
                ),
                a(
                  "div",
                  { staticClass: "retail-welcome-modal_li" },
                  [
                    a("the-icon", {
                      staticClass: "retail-welcome-modal_icon",
                      attrs: { name: "slice" },
                    }),
                    a("div", { staticClass: "retail-welcome-modal_num" }, [
                      e._v("4"),
                    ]),
                    a("div", { staticClass: "retail-welcome-modal_txt" }, [
                      e._v(e._s(e.$t("verify"))),
                    ]),
                  ],
                  1
                ),
                a(
                  "div",
                  { staticClass: "retail-welcome-modal_li" },
                  [
                    a("the-icon", {
                      staticClass: "retail-welcome-modal_icon",
                      attrs: { name: "paper-plane" },
                    }),
                    a(
                      "div",
                      { staticClass: "retail-welcome-modal_num" },
                      [a("the-icon", { attrs: { name: "check" } })],
                      1
                    ),
                    a("div", { staticClass: "retail-welcome-modal_txt" }, [
                      e._v(e._s(e.$t("service"))),
                    ]),
                  ],
                  1
                ),
              ]),
            ],
            1
          );
        },
        k = [],
        E = {
          methods: {
            close() {
              this.$refs.modal.close();
            },
          },
        },
        w = E,
        S = a(58315),
        j = a.n(S),
        D = j(),
        L = (0, f.Z)(w, T, k, !1, null, null, null);
      "function" === typeof D && D(L);
      var A = L.exports,
        P = a(86167),
        x = a(40336);
      const I = { [x.MODEL_TYPES.RETAIL]: A };
      var Y = {
          functional: !0,
          render(e, t) {
            const a = t.props.pt,
              i = I[a] || C;
            if (
              !(0, P.IH)("veteran") ||
              !(0, P.IH)(`veteran.${a}`) ||
              t.props.always
            )
              return e(i, t.data, t.children);
          },
        },
        $ = a(23644),
        q = a(59427),
        M = a.n(q);
      const O = (0, $.addLocalResource)(M());
      var R = a(36662);
      const N = () => {
          const e = (0, l.useModal)(R.Z);
          return [{ name: O("tutorial"), onClick: e }];
        },
        Z = {
          [r.ProjectType.IMG_CLS]:
            "http://hbnm3eqf9mju26279qj.exp.bcevod.com/mda-ja7famri4h6tau9a/mda-ja7famri4h6tau9a.mp4",
          [r.ProjectType.OBJ_DCT]:
            "http://hbnm3eqf9mju26279qj.exp.bcevod.com/mda-if5h5g5v28tf44us/mda-if5h5g5v28tf44us.mp4",
          [r.ProjectType.SOUND_CLS]:
            "http://hbnm3eqf9mju26279qj.exp.bcevod.com/mda-igjgeja0r8it9ekh/mda-igjgeja0r8it9ekh.mp4",
          [r.ProjectType.VIDEO_CLS]:
            "http://hbnm3eqf9mju26279qj.exp.bcevod.com/mda-jgew2kvy1avuerf4/mda-jgew2kvy1avuerf4.mp4",
          [r.ProjectType.VIDEO_TRACKING]:
            "http://hbnm3eqf9mju26279qj.exp.bcevod.com/mda-jgew2kvy1avuerf4/mda-jgew2kvy1avuerf4.mp4",
          [r.ProjectType.RETAIL]:
            "http://hbnm3eqf9mju26279qj.exp.bcevod.com/mda-jfgkw2rea7eqckai/mda-jfgkw2rea7eqckai.mp4",
          [r.ProjectType.RETAIL_DD]:
            "http://hbnm3eqf9mju26279qj.exp.bcevod.com/mda-jfgkw2rea7eqckai/mda-jfgkw2rea7eqckai.mp4",
        },
        B = (e) => {
          const t = Z[e];
          if (t) return { name: O("video"), href: t };
        },
        G = (e) => {
          if (
            [
              r.ProjectType.IMG_CLS,
              r.ProjectType.OBJ_DCT,
              r.ProjectType.SEGMENT,
            ].includes(e)
          )
            return N();
          const t = B(e);
          return t ? [t] : [];
        },
        X = "public",
        U =
          "http://ticket.bce.baidu.com/#/ticket/create~productId=171&questionId=369&channel=2",
        H = "/easydl/custom/",
        F =
          "tutorial" === X
            ? "https://ai.baidu.com/ai-doc/EASYDL/3k38n3ej4"
            : new Map([
                [
                  [u.hv.overview, u.hv["model-list"], u.hv["model-create"]],
                  "https://ai.baidu.com/ai-doc/EASYDL/4k38n2x50",
                ],
                [
                  [u.hv["model-train"]],
                  "https://ai.baidu.com/ai-doc/EASYDL/nk38n32wc",
                ],
                [
                  [u.hv["model-verify"]],
                  "https://ai.baidu.com/ai-doc/EASYDL/Jk38n3348",
                ],
                [
                  [u.hv["model-publish"]],
                  "https://ai.baidu.com/ai-doc/EASYDL/dk38n33k4",
                ],
                [
                  [u.hv["dataset-manage"], u.hv["dataset-create"]],
                  "https://ai.baidu.com/ai-doc/EASYDL/Wk38n32fc",
                ],
                [
                  [u.hv["dataset-label"]],
                  "https://ai.baidu.com/ai-doc/EasyData/ikipnckw0",
                ],
                [
                  [u.hv["dataset-annotate"]],
                  "https://ai.baidu.com/ai-doc/EASYDL/Mk38n31zl",
                ],
                [
                  [u.hv["dataset-interactiveAnno"]],
                  "https://ai.baidu.com/ai-doc/EASYDL/lk38n327g",
                ],
                [
                  [u.hv["dataset-dcl"]],
                  "https://ai.baidu.com/ai-doc/EasyData/Bk9ie4ht3",
                ],
                [
                  [u.hv["dataset-camera"]],
                  "https://ai.baidu.com/ai-doc/EasyData/2k9ie4i9e",
                ],
                [
                  [u.hv["deploy-public"]],
                  "https://ai.baidu.com/ai-doc/EASYDL/dk38n33k4",
                ],
                [
                  [u.hv["bie-offline"]],
                  "https://ai.baidu.com/ai-doc/EASYDL/dk38n33k4",
                ],
                [
                  [u.hv["batch-predict"]],
                  "https://ai.baidu.com/ai-doc/EASYDL/Wkx8lniu8",
                ],
                [
                  [
                    u.hv["bie-packages"],
                    u.hv["bie-devices"],
                    u.hv["bie-distribute"],
                  ],
                  "https://ai.baidu.com/ai-doc/EASYDL/dk38n33k4",
                ],
                [
                  [u.hv["bie-jsdk"]],
                  window.SP.JS_SDK_DOC[r.ProjectType.IMG_CLS],
                ],
                [[u.hv["data-augmentation"]], ""],
              ]),
        W = {
          [r.ProjectType.IMG_CLS]: {
            doc: new Map([
              [
                [u.hv.overview, u.hv["model-list"], u.hv["model-create"]],
                "https://ai.baidu.com/ai-doc/EASYDL/Yk38n2wpg",
              ],
              [
                [u.hv["model-train"]],
                "https://ai.baidu.com/ai-doc/EASYDL/5k38n30e8",
              ],
              [
                [u.hv["model-verify"]],
                "https://ai.baidu.com/ai-doc/EASYDL/Ak38n30uk",
              ],
              [
                [u.hv["model-publish"]],
                "https://ai.baidu.com/ai-doc/EASYDL/mk38n3061",
              ],
              [
                [u.hv["batch-predict"]],
                "https://ai.baidu.com/ai-doc/EASYDL/Wkx8lniu8",
              ],
              [
                [
                  u.hv["dataset-manage"],
                  u.hv["dataset-interactiveAnno"],
                  u.hv["dataset-create"],
                ],
                "https://ai.baidu.com/ai-doc/EASYDL/Fk38n31jg",
              ],
              [
                [u.hv["dataset-label"]],
                "https://ai.baidu.com/ai-doc/EasyData/ikipnckw0",
              ],
              [
                [u.hv["dataset-annotate"]],
                "https://ai.baidu.com/ai-doc/EASYDL/Wk38n312s",
              ],
              [
                [u.hv["dataset-dcl"]],
                "https://ai.baidu.com/ai-doc/EasyData/Bk9ie4ht3",
              ],
              [
                [u.hv["dataset-camera"]],
                "https://ai.baidu.com/ai-doc/EasyData/2k9ie4i9e",
              ],
              [
                [u.hv["deploy-public"]],
                "https://ai.baidu.com/ai-doc/EASYDL/mk38n3061",
              ],
              [
                [u.hv["bie-offline"]],
                "https://ai.baidu.com/ai-doc/EASYDL/mk38n3061",
              ],
              [
                [
                  u.hv["bie-packages"],
                  u.hv["bie-devices"],
                  u.hv["bie-distribute"],
                ],
                "https://ai.baidu.com/ai-doc/EASYDL/mk38n30611",
              ],
              [[u.hv["bie-jsdk"]], window.SP.JS_SDK_DOC[r.ProjectType.OBJ_DCT]],
            ]),
            faq: "https://ai.baidu.com/ai-doc/EASYDL/5k38n2whg",
          },
          [r.ProjectType.OBJ_DCT]: {
            doc: F,
            video:
              "http://hbnm3eqf9mju26279qj.exp.bcevod.com/mda-if5h5g5v28tf44us/mda-if5h5g5v28tf44us.mp4",
            faq: "https://ai.baidu.com/ai-doc/EASYDL/mk38n2xke",
          },
          [r.ProjectType.SOUND_CLS]: {
            doc: "https://ai.baidu.com/ai-doc/EASYDL/Hk38n2xsa",
            faq: "https://ai.baidu.com/docs#/EasyDL_SOUND_FAQ/top",
          },
          [r.ProjectType.TEXT_CLS]: {},
          [r.ProjectType.TEXT_ENTITY_EXTRACT]: {},
          [r.ProjectType.TEXT_RELATION_EXTRACT]: {},
          [r.ProjectType.TEXT_SIM]: {},
          [r.ProjectType.TEXT_SEQ]: {},
          [r.ProjectType.SENTIMENT]: {},
          [r.ProjectType.ML]: {},
          [r.ProjectType.OCR]: {},
          [r.ProjectType.TIME_SERIES_FORECAST]: {},
          [r.ProjectType.CUSTOM]: {},
          [r.ProjectType.TEXT_CUSTOM]: {},
          [r.ProjectType.SEGMENT]: {
            doc: new Map([
              [
                [
                  u.hv.overview,
                  u.hv["model-list"],
                  u.hv["model-create"],
                  u.hv["model-train"],
                  u.hv["model-verify"],
                  u.hv["model-publish"],
                  u.hv["dataset-manage"],
                  u.hv["dataset-interactiveAnno"],
                  u.hv["dataset-create"],
                  u.hv["dataset-label"],
                  u.hv["dataset-annotate"],
                  u.hv["dataset-dcl"],
                  u.hv["dataset-camera"],
                  u.hv["deploy-public"],
                  u.hv["bie-offline"],
                  u.hv["bie-packages"],
                  u.hv["bie-devices"],
                  u.hv["bie-distribute"],
                ],
                "https://ai.baidu.com/ai-doc/EASYDL/0k38n2y7s",
              ],
              [
                [u.hv["batch-predict"]],
                "https://ai.baidu.com/ai-doc/EASYDL/Wkx8lniu8",
              ],
            ]),
            faq: "https://ai.baidu.com/ai-doc/EASYDL/Ik38n2yfi",
          },
          [r.ProjectType.VIDEO_CLS]: {
            doc: "https://ai.baidu.com/ai-doc/EASYDL/Ok38n2zig",
            faq: "https://ai.baidu.com/ai-doc/EASYDL/Pk38n2zxt",
          },
          [r.ProjectType.VIDEO_TRACKING]: {
            doc: "https://ai.baidu.com/ai-doc/EASYDL/Okgar11vo",
            faq: "https://ai.baidu.com/ai-doc/EASYDL/Pk38n2zxt",
          },
          [r.ProjectType.RETAIL]: {
            doc: "https://ai.baidu.com/ai-doc/EASYDL/Gk38n3icn",
            faq: "https://ai.baidu.com/ai-doc/EASYDL/dk38n3gmm",
          },
          [r.ProjectType.RETAIL_DD]: {
            doc: "https://ai.baidu.com/ai-doc/EASYDL/Gk38n3icn",
            faq: "https://ai.baidu.com/ai-doc/EASYDL/dk38n3gmm",
          },
          [r.ProjectType.TEXT_QA]: void 0,
          [r.ProjectType.TEXT_NLG]: void 0,
          [r.ProjectType.TEXT_COMMENT]: void 0,
          [r.ProjectType.TEXT_SCORE]: void 0,
          [r.ProjectType.TEXT_SUMMARY]: void 0,
          [r.ProjectType.TEXT_COMPOSE]: void 0,
          [r.ProjectType.TEXT_RELEVANCE]: void 0,
        },
        z = {
          [r.ProjectType.RETAIL]: () => {
            const e = (0, l.useModal)(Y, {
              pt: r.ProjectType.RETAIL,
              always: !0,
            });
            return [{ name: O("guide"), onClick: e }];
          },
        },
        J = "public" === X ? [{ name: O("custom"), href: H }] : [],
        K = (0, s.ref)(),
        V = (e) => {
          K.value = e;
        },
        Q = (e) => {
          const { mt: t, firstTemplateType: a } = (0, c.useGlobalInfo)(e.value),
            i = (0, s.computed)(() => {
              const e = W[t];
              return e
                ? (0, n.RY)(["doc", "faq"], (t) => {
                    const a = e[t];
                    if (a && "string" !== typeof a) {
                      const e = [...a.entries()],
                        i = { name: O(t), href: e[0][1] };
                      if (!K.value) return i;
                      for (const [t, a] of e)
                        t.includes(K.value.key) && (i.href = a);
                      return i;
                    }
                    return a ? { name: O(t), href: a } : void 0;
                  })
                : [];
            }),
            o = G(t),
            l = z[t],
            r = l ? l() : [],
            u = (() =>
              (0, d.Z)("deploy", t, a) ? { name: O("ticket"), href: U } : [])();
          return (0, s.computed)(() =>
            i.value.concat(o).concat(r).concat(u).concat(J)
          );
        };
      var ee = a(80963),
        te = a(80645),
        ae = a(68607),
        ie = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "div",
            { staticClass: "portal-summary" },
            [a("GroupListTop", { attrs: { "model-type": e.modelType } })],
            1
          );
        },
        oe = [],
        se = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return e.visible
            ? a(
                "Portal",
                { attrs: { to: "group-list-top" } },
                [
                  a(
                    "the-alert",
                    { attrs: { type: "warn" } },
                    [
                      e._v(
                        " " +
                          e._s(
                            e.$t("easydata." + (e.isMl ? "ml" : "default"))
                          ) +
                          " "
                      ),
                      a(
                        "the-link",
                        {
                          attrs: {
                            href: e.$SP.get("EASYDATA_PORTAL"),
                            target: "_blank",
                          },
                        },
                        [e._v(" " + e._s(e.$t("go")) + " ")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              )
            : e._e();
        },
        ce = [],
        le = a(70433),
        ne = (0, s.defineComponent)({
          props: { modelType: { type: Number, required: !0 } },
          setup(e) {
            return {
              visible: le.env.isCloud && !le.env.isWX,
              isMl: [
                r.ProjectType.ML,
                r.ProjectType.TIME_SERIES_FORECAST,
              ].includes(+e.modelType),
            };
          },
        }),
        re = ne,
        de = a(8954),
        ue = a.n(de),
        me = ue(),
        pe = (0, f.Z)(re, se, ce, !1, null, "58954188", null);
      "function" === typeof me && me(pe);
      var ve = pe.exports,
        he = (0, s.defineComponent)({
          components: { GroupListTop: ve },
          props: { modelType: { type: Number, required: !0 } },
          setup() {},
        }),
        fe = he,
        _e = (0, f.Z)(fe, ie, oe, !1, null, "a8b57252", null),
        be = _e.exports,
        ge = a(84522),
        ye = a(41243);
      const Ce = () => {
        const e = (0, l.useModal)(Y),
          { mt: t } = (0, c.useGlobalInfo)();
        (0, s.onMounted)(() => {
          e({ pt: t });
        });
      };
      var Te = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "div",
            { staticClass: "easydl-page" },
            [
              e._t("full-controlled", function () {
                return [
                  e._t("header", function () {
                    return [a("page-default-header")];
                  }),
                  a(
                    "div",
                    { staticClass: "easydl-page-main-wrapper" },
                    [e._t("default")],
                    2
                  ),
                ];
              }),
            ],
            2
          );
        },
        ke = [],
        Ee = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("page-header", {
            attrs: {
              "on-click-back": e.fromBreadcrumb.backUrl
                ? e.onClickBack
                : void 0,
            },
            scopedSlots: e._u([
              {
                key: "title",
                fn: function () {
                  return [e._v(e._s(e.fromBreadcrumb.title))];
                },
                proxy: !0,
              },
            ]),
          });
        },
        we = [],
        Se = (a(57658), a(73025)),
        je = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("header", { staticClass: "easydl-page-header" }, [
            a("div", { staticClass: "easydl-page-header-main" }, [
              a(
                "div",
                { staticClass: "easydl-page-header-left" },
                [
                  e.onClickBack
                    ? a(
                        "div",
                        {
                          staticClass: "easydl-page-header-back",
                          on: { click: e.onClickBack },
                        },
                        [
                          a("plain-left", {
                            staticClass: "easydl-page-header-back-icon",
                          }),
                          e._v(" 返回 "),
                        ],
                        1
                      )
                    : e._e(),
                  a(
                    "div",
                    { staticClass: "easydl-page-header-title" },
                    [e._t("title")],
                    2
                  ),
                  e._t("header-left"),
                ],
                2
              ),
              a(
                "div",
                { staticClass: "easydl-page-header-right" },
                [
                  e._t("header-right", function () {
                    return [a("page-default-header-right")];
                  }),
                ],
                2
              ),
            ]),
          ]);
        },
        De = [],
        Le = a(8012),
        Ae = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "div",
            { staticClass: "easydl-layout-row" },
            [
              e.miniAppControl || e.isPrivatization
                ? e._e()
                : a(
                    "div",
                    { staticClass: "help-links" },
                    e._l(e.breadcrumbLinks, function (t) {
                      return a(
                        "eg-link",
                        {
                          key: t.name,
                          attrs: { href: t.href, target: "_blank" },
                          on: {
                            click: function () {
                              return e.clickHandle(t);
                            },
                          },
                        },
                        [e._v(" " + e._s(t.name) + " ")]
                      );
                    }),
                    1
                  ),
              a("portal-target", { attrs: { name: "top-right" } }),
            ],
            1
          );
        },
        Pe = [],
        xe = (0, s.defineComponent)({
          components: {},
          props: {},
          setup() {
            const { route: e } = (0, c.useRouter)(),
              t = (0, s.computed)(() => Se.vm.$route),
              a = Q(t),
              i = !1;
            return {
              breadcrumbLinks: a,
              isPrivatization: i,
              miniAppControl: (0, s.computed)(() =>
                "retail" === e.params.codename
                  ? ![
                      "/model/retail",
                      "/retail/skus/train",
                      "/validate/retail",
                      "/deploy/retail",
                    ].some((t) => e.path.startsWith(t))
                  : ["/annotate"].some((t) => e.path.startsWith(t))
              ),
              clickHandle: (e) => {
                var t;
                null === (t = e.onClick) || void 0 === t || t.call(e);
              },
            };
          },
        }),
        Ie = xe,
        Ye = (0, f.Z)(Ie, Ae, Pe, !1, null, "57f04e6a", null),
        $e = Ye.exports,
        qe = (0, s.defineComponent)({
          components: { PlainLeft: Le.Z, PageDefaultHeaderRight: $e },
          props: { onClickBack: { type: Function, required: !1 } },
          setup() {
            return {};
          },
        }),
        Me = qe,
        Oe = (0, f.Z)(Me, je, De, !1, null, null, null),
        Re = Oe.exports,
        Ne = (0, s.defineComponent)({
          components: { PageHeader: Re },
          props: {},
          setup() {
            const e = (0, s.computed)(() => {
                var e, t;
                const { list: a } = Se.vm;
                return {
                  title:
                    null === (e = a[a.length - 1]) || void 0 === e
                      ? void 0
                      : e.label,
                  backUrl:
                    null ===
                      (t = a
                        .slice(0, a.length - 1)
                        .reverse()
                        .find((e) => e.to)) || void 0 === t
                      ? void 0
                      : t.to,
                };
              }),
              { router: t, route: a } = (0, c.useRouter)(),
              i = () => {
                t.push(e.value.backUrl);
              };
            return (
              (0, s.watch)(
                () => a.name,
                (e) => {
                  e && (0, Se.a$)(e || "");
                },
                { immediate: !0 }
              ),
              { onClickBack: i, fromBreadcrumb: e }
            );
          },
        }),
        Ze = Ne,
        Be = a(76149),
        Ge = a.n(Be),
        Xe = Ge(),
        Ue = (0, f.Z)(Ze, Ee, we, !1, null, "e7ed3f84", null);
      "function" === typeof Xe && Xe(Ue);
      var He = Ue.exports,
        Fe = (0, s.defineComponent)({
          components: { PageDefaultHeader: He },
          props: {},
          setup() {
            return {};
          },
        }),
        We = Fe,
        ze = (0, f.Z)(We, Te, ke, !1, null, null, null),
        Je = ze.exports;
      const Ke = () => {
          const e = (0, c.useStore)();
          return {
            standalone: (0, s.computed)(() => !e.state.study.underStudyPlat),
            isFullScreen: (0, s.computed)(() => e.state.fullScreen),
            loading: (0, s.computed)(() => e.state.loading),
          };
        },
        Ve = (e, t) => {
          (0, s.watch)(e, (e, a) => {
            e !== a &&
              t.value &&
              e &&
              t.value.scrollTo &&
              "function" === typeof t.value.scrollTo &&
              t.value.scrollTo({ top: 0, behavior: "smooth" });
          });
        },
        Qe = (e, t) => {
          const a = (0, $.useT)(),
            { mt: i, firstTemplateType: o } = (0, c.useGlobalInfo)(t.value),
            l = (0, c.useStore)(),
            n = (0, ge.b)(t),
            r = (0, s.computed)(() => {
              const t = e(`model-type.${i}`);
              return {
                to: `/${i}/${o}/models`,
                name: a(`title.${i}|${t}`),
                icon: ee.XH[i],
              };
            }),
            { showing: d } = (0, ee.el)(l);
          return (0, s.computed)(() => ({
            routes: n.value,
            headline: r.value,
            sidebarShowing: d.value,
          }));
        };
      var et = (0, s.defineComponent)({
          components: {
            AppSidebar: ee.ZP,
            ErrorMsg: te.Z,
            Navbar: ae.Z,
            PortalSummary: be,
            Page: Je,
          },
          props: { layout: { type: String, required: !0 } },
          mixins: [ye.Z],
          setup() {
            var e;
            const t =
                null === (e = (0, s.getCurrentInstance)()) || void 0 === e
                  ? void 0
                  : e.proxy,
              a = (0, s.computed)(() => t.$route);
            Ce();
            const i = (0, s.computed)(() => a.value.name),
              o = (0, s.ref)();
            Ve(i, o);
            const l = Q(a),
              n = t.$g,
              r = (0, s.computed)(() => (0, c.useGlobalInfo)(a.value)),
              d = Qe(n, a.value);
            return {
              main: o,
              breadcrumbLinks: l,
              modelType: r,
              sidebarInfo: d,
              changeLink: V,
              ...Ke(),
            };
          },
        }),
        tt = et,
        at = a(2732),
        it = a.n(at),
        ot = it(),
        st = (0, f.Z)(tt, i, o, !1, null, null, null);
      "function" === typeof ot && ot(st);
      var ct = st.exports;
    },
    36662: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return m;
        },
      });
      var i = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "the-modal",
            { ref: "modal", staticClass: "tutorial-welcome" },
            [
              a("div", { staticClass: "tutorial-welcome_head" }, [
                e._v(e._s(e.topBaseInfo.baseTitle)),
              ]),
              a(
                "div",
                {
                  staticClass: "tutorial-welcome_close",
                  on: { click: e.close },
                },
                [a("the-icon", { attrs: { name: "times" } })],
                1
              ),
              a("div", { staticClass: "tutorial-welcome_content" }, [
                e._v(e._s(e.topBaseInfo.baseDesc)),
              ]),
              a("div", { staticClass: "tutorial-welcome_body" }, [
                a(
                  "div",
                  { staticClass: "tutorial-welcome_steps" },
                  e._l(e.tutorialList, function (t) {
                    return a(
                      "div",
                      { key: t.step, staticClass: "tutorial-welcome_card" },
                      [
                        a("img", {
                          staticClass: "tutorial-welcome_card_icon",
                          attrs: { src: t.img },
                        }),
                        a(
                          "div",
                          { staticClass: "tutorial-welcome_card_title" },
                          [
                            a(
                              "span",
                              {
                                staticClass: "tutorial-welcome_card_title-step",
                              },
                              [[e._v(" " + e._s(t.step) + " ")]],
                              2
                            ),
                            a(
                              "span",
                              {
                                staticClass: "tutorial-welcome_card_title-text",
                              },
                              [e._v(e._s(t.columnTitle))]
                            ),
                          ]
                        ),
                        a("div", {
                          staticClass: "tutorial-welcome_card_desc",
                          domProps: { innerHTML: t.desc },
                        }),
                      ]
                    );
                  }),
                  0
                ),
                a(
                  "div",
                  { staticClass: "tutorial-welcome_foot" },
                  [
                    a(
                      "eg-button",
                      {
                        attrs: { type: "primary" },
                        on: { click: e.goTutorial },
                      },
                      [e._v("开始学习")]
                    ),
                  ],
                  1
                ),
              ]),
            ]
          );
        },
        o = [],
        s = a(47253),
        c = a(63792);
      const l = [
        {
          step: 1,
          process: "第一步",
          baseTitle: "新手教程",
          baseDesc:
            "我们会以“物体检测模型”为例，带您快速体验AI模型开发的四个流程",
          columnTitle: "数据处理",
          desc: "提供闭环的数据管理功能<br>从数据上传、标注训练<br>到回流",
          img: a(41672),
          link: "model/objdct/models",
        },
        {
          step: 2,
          process: "第二步",
          baseTitle: "真棒！您已完成数据处理任务",
          baseDesc: "您将进入模型开发流程的第2步骤：模型训练",
          columnTitle: "模型训练",
          desc: "提供丰富的训练方式<br>零代码轻松获取高精度模型",
          img: a(18362),
          link: "dataset/objdct/list",
        },
        {
          step: 3,
          process: "第三步",
          baseTitle: "真棒！您已成功训练一个模型",
          baseDesc: "您将进入模型开发流程的第3步骤：模型校验",
          columnTitle: "模型校验",
          desc: "提供详细的模型评估报告<br>支持在线校验",
          img: a(22127),
          link: "model/objdct/models",
        },
        {
          step: 4,
          process: "第四步",
          baseTitle: "你已学会如何模型校验，就差最后一步啦！",
          baseDesc: "您将进入模型开发流程的第4步骤：模型部署",
          columnTitle: "模型部署",
          desc: "模型转换为适配业务场景<br>的多种部署方式",
          img: a(55457),
          link: "model/objdct/models",
        },
      ];
      var n = (0, s.defineComponent)({
          setup() {
            const e = (0, s.computed)(() => ({
                baseTitle: l[0].baseTitle,
                baseDesc: l[0].baseDesc,
              })),
              t = () => {
                location.href =
                  "https://ai.baidu.com/easydl/tutorial/model/objdct/models";
              };
            return {
              goTutorial: t,
              tutorialList: l,
              topBaseInfo: e,
              ...(0, c.useModalCloser)(),
            };
          },
        }),
        r = n,
        d = a(1001),
        u = (0, d.Z)(r, i, o, !1, null, "63d13228", null),
        m = u.exports;
    },
    86167: function (e, t, a) {
      "use strict";
      a.d(t, {
        IH: function () {
          return c;
        },
        sl: function () {
          return l;
        },
      });
      const i = (e) => `EASYDL_ONCE_${e}`,
        o = (e) => window.localStorage.setItem(i(e), 1),
        s = (e) => !!window.localStorage.getItem(i(e)),
        c = (e) => {
          const t = s(e);
          return t || o(e), t;
        };
      function l() {
        window.location.reload();
      }
    },
    59427: function (e) {
      e.exports = {
        doc: "操作文档",
        guide: "新手引导",
        faq: "常见问题",
        video: "教学视频",
        ticket: "提交工单",
        tutorial: "新手教程",
        custom: "专家定制",
        intro: "产品介绍",
        price: "产品定价",
        helpDoc: "帮助文档",
      };
    },
    76149: function (e) {
      e.exports = function (e) {
        (e.options.__i18n = e.options.__i18n || []),
          e.options.__i18n.push("{}"),
          delete e.options._Ctor;
      };
    },
    65657: function (e) {
      e.exports = function (e) {
        (e.options.__i18n = e.options.__i18n || []),
          e.options.__i18n.push(
            '{"apply-online":"申请模型上线","check-model-effect":"校验模型效果","know":"知道了","need-operate":"（需开发人员操作）","title":"仅需4步，创建您的个性化模型","upload-dataset":"上传数据集","write-model-message":"填写模型信息"}'
          ),
          delete e.options._Ctor;
      };
    },
    58315: function (e) {
      e.exports = function (e) {
        (e.options.__i18n = e.options.__i18n || []),
          e.options.__i18n.push(
            '{"annotate":"实景图上传/标注","create":"创建模型","service":"发布模型调用接口","upload":"创建SKU并上传图片","verify":"训练并校验模型","welcome-title":"欢迎使用EasyDL商品检测，仅需5步即可轻松创建模型"}'
          ),
          delete e.options._Ctor;
      };
    },
    8954: function (e) {
      e.exports = function (e) {
        (e.options.__i18n = e.options.__i18n || []),
          e.options.__i18n.push(
            '{"easydata":{"default":"EasyData智能数据服务平台已上线，使用EasyData可享受包括多人标注、数据清洗、数据采集等完整数据服务","ml":"EasyData智能数据服务平台已上线，支持图像、文本、语音、视频在内的多种数据格式的采集、标注、加工处理等完善数据服务"},"go":"立即前往"}'
          ),
          delete e.options._Ctor;
      };
    },
    2732: function (e) {
      e.exports = function (e) {
        (e.options.__i18n = e.options.__i18n || []),
          e.options.__i18n.push('{"title":{"1001":"EasyDL零售版"}}'),
          delete e.options._Ctor;
      };
    },
    94461: function (e, t, a) {
      "use strict";
      e.exports = a.p + "img/1.8acbe9df.png";
    },
    56061: function (e, t, a) {
      "use strict";
      e.exports = a.p + "img/2.3f7dce5a.png";
    },
    47761: function (e, t, a) {
      "use strict";
      e.exports = a.p + "img/3.4b778564.png";
    },
    65098: function (e, t, a) {
      "use strict";
      e.exports = a.p + "img/4.76c0dd53.png";
    },
    41672: function (e, t, a) {
      "use strict";
      e.exports = a.p + "img/first.0cda5cf2.png";
    },
    55457: function (e, t, a) {
      "use strict";
      e.exports = a.p + "img/fourth.46acacc9.png";
    },
    18362: function (e, t, a) {
      "use strict";
      e.exports = a.p + "img/second.545416f2.png";
    },
    22127: function (e, t, a) {
      "use strict";
      e.exports = a.p + "img/third.438931b9.png";
    },
  },
]);
//# sourceMappingURL=935.340e1803.js.map
