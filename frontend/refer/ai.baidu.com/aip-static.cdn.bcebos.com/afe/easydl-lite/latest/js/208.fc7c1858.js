"use strict";
(self["webpackChunkeasydl_lite"] = self["webpackChunkeasydl_lite"] || []).push([
  [208],
  {
    80645: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return m;
        },
      });
      var n = function () {
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
        r = [],
        s = a(47253),
        u = a(63792),
        o = a(32121),
        i = (0, s.defineComponent)({
          setup() {
            const e = (0, o.useStore)(),
              { fail: t } = (0, u.useToast)();
            (0, s.watch)(
              () => e.state.error.msg,
              (a) => {
                a && (t(a), e.commit("error/clearMsg"));
              },
              { immediate: !0 }
            );
          },
        }),
        l = i,
        c = a(1001),
        v = (0, c.Z)(l, n, r, !1, null, null, null),
        m = v.exports;
    },
    68607: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return p;
        },
      });
      var n = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", { staticClass: "navbar", attrs: { id: "navbar" } });
        },
        r = [],
        s = a(47253),
        u = a(32121);
      const o = (e) =>
          System.import("@baidu/afe-navbar-easydl").then((t) => {
            if (!("mount" in t) || !t.mount) return;
            const a = document.querySelector(e);
            return t.mount(a);
          }),
        i = async (e, t) => {
          const a = await o(e);
          (t.setUserUI.value = a.setUser),
            (t.setOpList.value = a.setOperations);
        };
      var l = a(63792);
      const c = {
        name: "用户",
        avatar: "//himg.bdimg.com/sys/portraith/item/cf53273b.jpg",
      };
      var v = (0, s.defineComponent)({
          setup(e, t) {
            const a = (0, s.ref)(),
              n = (0, s.ref)(),
              r = (0, u.useStore)(),
              { router: o, route: v } = (0, u.useRouter)(),
              m = (0, l.useModal)(() =>
                System.import("@baidu/afe-app-model").then((e) => e.UserInfo)
              );
            return (
              (0, s.onMounted)(async () => {
                i("#navbar", {
                  setUserUI: a,
                  setOpList: n,
                  state: r.state,
                  router: o,
                  route: v,
                });
              }),
              (0, s.watchEffect)(() => {
                a.value &&
                  (a.value({
                    name: r.state.user.displayName || c.name,
                    avatar: r.state.user.avatar || c.avatar,
                  }),
                  n.value &&
                    n.value([
                      {
                        text: "个人信息",
                        onClick: () => {
                          m();
                        },
                      },
                    ]));
              }),
              {}
            );
          },
        }),
        m = v,
        f = a(1001),
        d = (0, f.Z)(m, n, r, !1, null, null, null),
        p = d.exports;
    },
    9208: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return m;
          },
        });
      var n = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "div",
            { staticClass: "nav-layout" },
            [
              a("navbar"),
              a("ErrorMsg"),
              a(
                "div",
                { staticClass: "nav-landing-main" },
                [a("router-view")],
                1
              ),
            ],
            1
          );
        },
        r = [],
        s = a(68607),
        u = a(41243),
        o = a(80645),
        i = {
          name: "nav-only",
          mixins: [u.Z],
          components: { Navbar: s.Z, ErrorMsg: o.Z },
        },
        l = i,
        c = a(1001),
        v = (0, c.Z)(l, n, r, !1, null, null, null),
        m = v.exports;
    },
    41243: function (e, t, a) {
      var n = a(32121);
      t.Z = {
        head() {
          const { mt: e } = (0, n.useGlobalInfo)(this.$route);
          return {
            title: e ? this.$g(`title.${e}`) : this.$g("plain-title"),
            bodyAttrs: { class: "cn" },
          };
        },
      };
    },
  },
]);
//# sourceMappingURL=208.fc7c1858.js.map
