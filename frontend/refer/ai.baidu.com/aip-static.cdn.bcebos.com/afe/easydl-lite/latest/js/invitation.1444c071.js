(self["webpackChunkeasydl_lite"] = self["webpackChunkeasydl_lite"] || []).push([
  [446],
  {
    48756: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return y;
          },
        });
      var a = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return e.shareDetail
            ? a(
                "div",
                {
                  directives: [
                    {
                      name: "loading",
                      rawName: "v-loading",
                      value: !e.shareDetail,
                      expression: "!shareDetail",
                    },
                  ],
                  staticClass: "datasets-share",
                },
                [
                  a("div", { staticClass: "datasets-share__content" }, [
                    a("div", { staticClass: "datasets-share__content-left" }, [
                      a("img", { attrs: { src: s(41489) } }),
                    ]),
                    a(
                      "div",
                      { staticClass: "datasets-share__content-right" },
                      [
                        a("p", { staticClass: "title" }, [
                          e._v(e._s(e.$t("share"))),
                        ]),
                        a("p", [
                          e._v(
                            e._s(
                              e.$t("shareText", {
                                username: e.shareDetail.ownerUserName,
                                datasetName: e.shareDetail.datasetName,
                              })
                            )
                          ),
                        ]),
                        a(
                          "the-field",
                          { attrs: { label: e.$t("shareRange") } },
                          [
                            a("dataset-share-checkbox", {
                              attrs: { isDisabled: "" },
                              model: {
                                value: e.shareDetail.permissions,
                                callback: function (t) {
                                  e.$set(e.shareDetail, "permissions", t);
                                },
                                expression: "shareDetail.permissions",
                              },
                            }),
                          ],
                          1
                        ),
                        a("the-button", { on: { click: e.confirm } }, [
                          e._v(e._s(e.$t("accept"))),
                        ]),
                      ],
                      1
                    ),
                  ]),
                ]
              )
            : e._e();
        },
        i = [],
        r = (s(57658), s(19660)),
        n = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s(
            "the-checkbox-group",
            {
              model: {
                value: e.range,
                callback: function (t) {
                  e.range = t;
                },
                expression: "range",
              },
            },
            [
              s(
                "the-checkbox",
                { key: "read", attrs: { value: "read", disabled: "" } },
                [e._v(e._s(e.$t("read")))]
              ),
              e._l(e.permissions, function (t) {
                return s(
                  "the-checkbox",
                  { key: t, attrs: { value: t, disabled: e.isDisabled } },
                  [e._v(e._s(e.$t(t)))]
                );
              }),
            ],
            2
          );
        },
        l = [],
        o = {
          data() {
            return { permissions: ["modify", "train"] };
          },
          model: { prop: "value", event: "change" },
          props: { isDisabled: Boolean, value: String },
          watch: {
            value(e) {
              e || this.isDisabled || this.$emit("change", "read");
            },
          },
          computed: {
            range: {
              set(e) {
                this.$emit("change", e.join(","));
              },
              get() {
                return (this.value && this.value.split(",")) || ["read"];
              },
            },
          },
        },
        h = o,
        u = s(1001),
        c = s(13420),
        d = s.n(c),
        p = d(),
        m = (0, u.Z)(h, n, l, !1, null, null, null);
      "function" === typeof p && p(m);
      var v = m.exports,
        _ = s(40336),
        f = s(84259),
        $ = {
          components: { DatasetShareCheckbox: v },
          layout: "nav-only",
          data() {
            return { shareDetail: null };
          },
          computed: {
            mt() {
              return this.shareDetail
                ? this.shareDetail.datasetType
                : _.MODEL_TYPES.OBJ_DCT;
            },
            tt() {
              return this.shareDetail
                ? this.shareDetail.templateType
                : r.Z.get(this.mt)[0];
            },
            illegal() {
              var e;
              return (
                (null === (e = this.user) || void 0 === e
                  ? void 0
                  : e.userId) === this.shareDetail.ownerUserId
              );
            },
            user() {
              return this.$store.state.user;
            },
          },
          methods: {
            async confirm() {
              var e;
              if (this.illegal)
                return void this.$toast.warn(this.$t("illegal"));
              const t = await f.caller.send("dataset/acceptShare", {
                  token: this.$route.query.token,
                }).result,
                { result: s, success: a, errors: i } = t || {};
              s && a
                ? this.$router.push({
                    path: `/dataset/${this.mt}/${this.tt}/${this.shareDetail.datasetId}/entities`,
                  })
                : this.abNormal(
                    null === i ||
                      void 0 === i ||
                      null === (e = i.name) ||
                      void 0 === e
                      ? void 0
                      : e[0]
                  );
            },
            abNormal(e) {
              e && this.$toast.fail(e),
                this.$router.push({
                  path: `/dataset/${this.mt}/${this.tt}/list`,
                });
            },
          },
          async created() {
            const e =
              this.$route.query.token &&
              decodeURIComponent(this.$route.query.token);
            if (!e) return void this.abNormal();
            const {
              result: t,
              errors: s,
              success: a,
            } = await f.caller.send("dataset/shareInfo", {
              token: e,
              [_.NO_REDIRECT]: !0,
            }).result;
            var i;
            (a && t) ||
              this.abNormal(
                (null === s ||
                void 0 === s ||
                null === (i = s.name) ||
                void 0 === i
                  ? void 0
                  : i[0]) || this.$t("expires")
              );
            this.shareDetail = t;
          },
        },
        D = $,
        b = s(17146),
        g = s.n(b),
        k = g(),
        x = (0, u.Z)(D, a, i, !1, null, null, null);
      "function" === typeof k && k(x);
      var y = x.exports;
    },
    13420: function (e) {
      e.exports = function (e) {
        (e.options.__i18n = e.options.__i18n || []),
          e.options.__i18n.push(
            '{"modify":"修改","read":"查看","train":"使用"}'
          ),
          delete e.options._Ctor;
      };
    },
    17146: function (e) {
      e.exports = function (e) {
        (e.options.__i18n = e.options.__i18n || []),
          e.options.__i18n.push(
            '{"accept":"接受并查看","expires":"邀请链接失效","illegal":"同一账号无需共享数据集，请将数据集共享链接分享给其他人","share":"数据集共享","shareText":"用户{{username}}想与您共享{{datasetName}}数据集，共享后您将拥有如下权限："}'
          ),
          delete e.options._Ctor;
      };
    },
    41489: function (e, t, s) {
      "use strict";
      e.exports = s.p + "img/invitation.ead31b4c.png";
    },
  },
]);
//# sourceMappingURL=invitation.1444c071.js.map
