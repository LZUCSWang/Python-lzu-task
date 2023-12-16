(self["webpackChunkeasydl_lite"] = self["webpackChunkeasydl_lite"] || []).push([
  [963],
  {
    73963: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  });
              }
            : function (e, t, n, r) {
                void 0 === r && (r = n), (e[r] = t[n]);
              }),
        i =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e["default"] = t;
              }),
        o =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                "default" !== n &&
                  Object.prototype.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return i(t, e), t;
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.install = void 0);
      const a = o(n(15810)),
        s = (e, t, n = {}) => {
          if ((n.dev, !t || !t.buildid || !t.token)) return;
          const r = {
              common: { buildid: t.buildid, token: t.token, ignoreUrls: [] },
              error: {
                collectWindowErrors: !0,
                collectUnhandledRejections: !0,
                collectResourceLoadErrors: !0,
              },
              perf: { sampleRate: 1, spa: !0, history: !0 },
            },
            i = a.init(Object.assign(r, n));
          e.config.errorHandler = function (e) {
            i.error.captureException(e);
          };
        };
      t.install = s;
    },
    13670: function () {},
    7348: function (e, n) {
      function r(e) {
        e = e || window;
        var t,
          n,
          r = e.document,
          i = function (t) {
            var n = !1;
            if (t.getBoundingClientRect) {
              var i = t.getBoundingClientRect();
              (n = {
                top: Math.max(i.top, 0),
                left: Math.max(i.left, 0),
                bottom: Math.min(
                  i.bottom,
                  e.innerHeight || r.documentElement.clientHeight
                ),
                right: Math.min(
                  i.right,
                  e.innerWidth || r.documentElement.clientWidth
                ),
              }),
                n.bottom <= n.top || n.right <= n.left
                  ? (n = !1)
                  : (n.area = (n.bottom - n.top) * (n.right - n.left));
            }
            return n;
          },
          o = function (e, t) {
            if (t) {
              var n = i(e);
              n && d.push({ url: t, area: n.area, rect: n });
            }
          },
          a = function () {
            for (
              var t = r.getElementsByTagName("*"),
                n = /url\(.*(http.*)\)/gi,
                a = 0;
              a < t.length;
              a++
            ) {
              var s = t[a],
                u = e.getComputedStyle(s);
              if (
                ("IMG" == s.tagName && o(s, s.currentSrc || s.src),
                u["background-image"])
              ) {
                n.lastIndex = 0;
                var c = n.exec(u["background-image"]);
                c && c.length > 1 && o(s, c[1].replace('"', ""));
              }
              if ("IFRAME" == s.tagName)
                try {
                  var l = i(s);
                  if (l) {
                    var f = RUMSpeedIndex(s.contentWindow);
                    f && d.push({ tm: f, area: l.area, rect: l });
                  }
                } catch (p) {}
            }
          },
          s = function () {
            for (
              var t = {}, n = e.performance.getEntriesByType("resource"), r = 0;
              r < n.length;
              r++
            )
              t[n[r].name] = n[r].responseEnd;
            for (var i = 0; i < d.length; i++)
              "tm" in d[i] ||
                (d[i].tm = void 0 !== t[d[i].url] ? t[d[i].url] : 0);
          },
          u = function () {
            try {
              for (
                var n = performance.getEntriesByType("paint"), i = 0;
                i < n.length;
                i++
              )
                if ("first-paint" == n[i]["name"]) {
                  (h = performance.getEntriesByType("navigation")[0].startTime),
                    (t = n[i].startTime - h);
                  break;
                }
            } catch (m) {}
            if (
              (void 0 === t &&
                "msFirstPaint" in e.performance.timing &&
                (t = e.performance.timing.msFirstPaint - h),
              void 0 === t && "chrome" in e && "loadTimes" in e.chrome)
            ) {
              var o = e.chrome.loadTimes();
              if ("firstPaintTime" in o && o.firstPaintTime > 0) {
                var a = o.startLoadTime;
                "requestTime" in o && (a = o.requestTime),
                  o.firstPaintTime >= a && (t = 1e3 * (o.firstPaintTime - a));
              }
            }
            if (void 0 === t || t < 0 || t > 12e4) {
              t = e.performance.timing.responseStart - h;
              var s = {},
                u = r.getElementsByTagName("head")[0].children;
              for (i = 0; i < u.length; i++) {
                var c = u[i];
                "SCRIPT" == c.tagName && c.src && !c.async && (s[c.src] = !0),
                  "LINK" == c.tagName &&
                    "stylesheet" == c.rel &&
                    c.href &&
                    (s[c.href] = !0);
              }
              for (
                var l = e.performance.getEntriesByType("resource"),
                  d = !1,
                  f = 0;
                f < l.length;
                f++
              )
                if (
                  d ||
                  !s[l[f].name] ||
                  ("script" != l[f].initiatorType &&
                    "link" != l[f].initiatorType)
                )
                  d = !0;
                else {
                  var p = l[f].responseEnd;
                  (void 0 === t || p > t) && (t = p);
                }
            }
            t = Math.max(t, 0);
          },
          c = function () {
            for (var n = { 0: 0 }, i = 0, o = 0; o < d.length; o++) {
              var a = t;
              "tm" in d[o] && d[o].tm > t && (a = d[o].tm),
                void 0 === n[a] && (n[a] = 0),
                (n[a] += d[o].area),
                (i += d[o].area);
            }
            var s =
              Math.max(r.documentElement.clientWidth, e.innerWidth || 0) *
              Math.max(r.documentElement.clientHeight, e.innerHeight || 0);
            if (
              (s > 0 &&
                ((s = Math.max(s - i, 0) * p),
                void 0 === n[t] && (n[t] = 0),
                (n[t] += s),
                (i += s)),
              i)
            ) {
              for (var u in n)
                n.hasOwnProperty(u) && f.push({ tm: u, area: n[u] });
              f.sort(function (e, t) {
                return e.tm - t.tm;
              });
              for (var c = 0, l = 0; l < f.length; l++)
                (c += f[l].area), (f[l].progress = c / i);
            }
          },
          l = function () {
            if (f.length) {
              n = 0;
              for (var e = 0, r = 0, i = 0; i < f.length; i++) {
                var o = f[i].tm - e;
                o > 0 && r < 1 && (n += (1 - r) * o),
                  (e = f[i].tm),
                  (r = f[i].progress);
              }
            } else n = t;
          },
          d = [],
          f = [],
          p = 0.1;
        try {
          var h = e.performance.timing.navigationStart;
          a(), s(), u(), c(), l();
        } catch (m) {}
        return n;
      }
      function i(e) {
        return "[object String]" === Object.prototype.toString.call(e);
      }
      function o(e) {
        return "function" === typeof e;
      }
      function a(e) {
        return "[object Number]" === Object.prototype.toString.call(e);
      }
      function s(e) {
        return "[object RegExp]" === Object.prototype.toString.call(e);
      }
      function u(e) {
        return "object" === typeof e && null !== e;
      }
      function c(e, t) {
        return (
          !!i(t) &&
          e.some(function (e) {
            if (!e) return !1;
            if (i(e)) return -1 !== t.indexOf(e);
            if (s(e))
              try {
                return e.test(t);
              } catch (n) {
                return console.error(e + "正则书写有误"), !1;
              }
            return console.error(e + "忽略匹配项类型应该是String、RegExp"), !1;
          })
        );
      }
      function l(e, t) {
        var n = e.lastClick,
          r = void 0 === n ? 0 : n,
          i = t.timing.requestStart;
        return !!(r && i - r < 50);
      }
      var d = new Date().getTime();
      function f(e) {
        var t = window["BOOMR"];
        if (window) {
          if (!e) {
            if (
              window.parent === window ||
              !document.getElementById("boomr-if-as")
            )
              return;
            if (window["BOOMR"] && t.boomerang_frame && t.window)
              try {
                t.boomerang_frame.document.domain !==
                  t.window.document.domain &&
                  (t.boomerang_frame.document.domain =
                    t.window.document.domain);
              } catch (n) {
                t.isCrossOriginError(n) ||
                  t.addError(n, "BOOMR_check_doc_domain.domainFix");
              }
            e = document.domain;
          }
          if (e && -1 !== e.indexOf(".") && window.parent) {
            try {
              return void window.parent.document;
            } catch (n) {
              try {
                document.domain = e;
              } catch (r) {
                return;
              }
            }
            try {
              return void window.parent.document;
            } catch (n) {
              e = e.replace(/^[\w\-]+\./, "");
            }
            f(e);
          }
        }
      }
      function p(e) {
        var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u = e;
        e.parent !== e &&
          document.getElementById("boomr-if-as") &&
          "script" ===
            document.getElementById("boomr-if-as").nodeName.toLowerCase() &&
          (e = e.parent),
          (r = e.document),
          e.BOOMR || (e.BOOMR = {});
        var l = e.BOOMR;
        if (l.version) return l;
        if (
          ((l.version = "1.3.10"),
          (l.window = e),
          (l.boomerang_frame = u),
          l.plugins || (l.plugins = {}),
          (function () {
            try {
              void 0 !== new e.CustomEvent("CustomEvent") &&
                (i = function (t, n) {
                  return new e.CustomEvent(t, n);
                });
            } catch (t) {}
            try {
              !i &&
                r.createEvent &&
                r.createEvent("CustomEvent") &&
                (i = function (e, t) {
                  var n = r.createEvent("CustomEvent");
                  return (
                    (t = t || { cancelable: !1, bubbles: !1 }),
                    n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
                    n
                  );
                });
            } catch (t) {}
            !i &&
              r.createEventObject &&
              (i = function (e, t) {
                var n = r.createEventObject();
                return (n.type = n.propertyName = e), (n.detail = t.detail), n;
              }),
              i || (i = function () {});
          })(),
          (o = function (e, t, n) {
            var o = i(e, { detail: t });
            function a() {
              try {
                r.dispatchEvent
                  ? r.dispatchEvent(o)
                  : r.fireEvent && r.fireEvent("onpropertychange", o);
              } catch (e) {}
            }
            o && (n ? l.setImmediate(a) : a());
          }),
          "undefined" !== typeof r.hidden
            ? ((a = "visibilityState"), (s = "visibilitychange"))
            : "undefined" !== typeof r.mozHidden
            ? ((a = "mozVisibilityState"), (s = "mozvisibilitychange"))
            : "undefined" !== typeof r.msHidden
            ? ((a = "msVisibilityState"), (s = "msvisibilitychange"))
            : "undefined" !== typeof r.webkitHidden &&
              ((a = "webkitVisibilityState"), (s = "webkitvisibilitychange")),
          (t = {
            beacon_url: "",
            beacon_url_force_https: !0,
            beacon_urls_allowed: [],
            beacon_type: "AUTO",
            beacon_auth_key: "Authorization",
            beacon_auth_token: void 0,
            beacon_with_credentials: !1,
            beacon_disable_sendbeacon: !1,
            site_domain: e.location.hostname
              .replace(/.*?([^.]+\.[^.]+)\.?$/, "$1")
              .toLowerCase(),
            user_ip: "",
            autorun: !0,
            hasSentPageLoadBeacon: !1,
            r: void 0,
            same_site_cookie: "Lax",
            secure_cookie: !1,
            forced_same_site_cookie_none: !1,
            events: {
              page_ready: [],
              page_unload: [],
              before_unload: [],
              dom_loaded: [],
              visibility_changed: [],
              prerender_to_visible: [],
              before_beacon: [],
              beacon: [],
              page_load_beacon: [],
              xhr_load: [],
              click: [],
              form_submit: [],
              config: [],
              xhr_init: [],
              spa_init: [],
              spa_navigation: [],
              spa_cancel: [],
              xhr_send: [],
              xhr_error: [],
              error: [],
              netinfo: [],
              rage_click: [],
              before_early_beacon: [],
            },
            public_events: {
              before_beacon: "onBeforeBoomerangBeacon",
              beacon: "onBoomerangBeacon",
              onboomerangloaded: "onBoomerangLoaded",
            },
            translate_events: {
              onbeacon: "beacon",
              onconfig: "config",
              onerror: "error",
              onxhrerror: "xhr_error",
            },
            unloadEventsCount: 0,
            unloadEventCalled: 0,
            listenerCallbacks: {},
            vars: {},
            singleBeaconVars: {},
            varPriority: { "-1": {}, 1: {} },
            errors: {},
            disabled_plugins: {},
            localStorageSupported: !1,
            LOCAL_STORAGE_PREFIX: "_boomr_",
            nativeOverwrites: [],
            xb_handler: function (n) {
              return function (r) {
                var i;
                r || (r = e.event),
                  r.target
                    ? (i = r.target)
                    : r.srcElement && (i = r.srcElement),
                  3 === i.nodeType && (i = i.parentNode),
                  (i &&
                    i.nodeName &&
                    "OBJECT" === i.nodeName.toUpperCase() &&
                    "application/x-shockwave-flash" === i.type) ||
                    t.fireEvent(n, i);
              };
            },
            clearEvents: function () {
              var e;
              for (e in this.events)
                this.events.hasOwnProperty(e) && (this.events[e] = []);
            },
            clearListeners: function () {
              var e;
              for (e in t.listenerCallbacks)
                if (t.listenerCallbacks.hasOwnProperty(e))
                  while (t.listenerCallbacks[e].length)
                    l.utils.removeListener(
                      t.listenerCallbacks[e][0].el,
                      e,
                      t.listenerCallbacks[e][0].fn
                    );
              t.listenerCallbacks = {};
            },
            fireEvent: function (e, t) {
              var n, r, i, a;
              if (
                ((e = e.toLowerCase()),
                this.translate_events[e] && (e = this.translate_events[e]),
                this.events.hasOwnProperty(e))
              ) {
                for (
                  this.public_events.hasOwnProperty(e) &&
                    o(this.public_events[e], t),
                    i = this.events[e],
                    "before_beacon" !== e &&
                      "beacon" !== e &&
                      l.real_sendBeacon(),
                    a = i.length,
                    n = 0;
                  n < a;
                  n++
                )
                  try {
                    (r = i[n]), r.fn.call(r.scope, t, r.cb_data);
                  } catch (s) {
                    l.addError(s, "fireEvent." + e + "<" + n + ">");
                  }
                for (n = 0; n < a; n++)
                  try {
                    i[n].once && (i.splice(n, 1), a--, n--);
                  } catch (s) {
                    l.addError(s, "fireEvent." + e + "<" + n + ">");
                  }
              }
            },
            spaNavigation: function () {
              t.onloadfired = !0;
            },
            beaconUrlAllowed: function (e) {
              if (!t.beacon_urls_allowed || 0 === t.beacon_urls_allowed.length)
                return !0;
              for (var n = 0; n < t.beacon_urls_allowed.length; n++) {
                var r = new RegExp(t.beacon_urls_allowed[n]);
                if (r.exec(e)) return !0;
              }
              return !1;
            },
            checkLocalStorageSupport: function () {
              var n = t.LOCAL_STORAGE_PREFIX + "clss";
              t.localStorageSupported = !1;
              try {
                if (!e.JSON || !e.localStorage) return;
                e.localStorage.setItem(n, n),
                  (t.localStorageSupported = e.localStorage.getItem(n) === n),
                  e.localStorage.removeItem(n);
              } catch (r) {
                t.localStorageSupported = !1;
              }
            },
            onFrameUnloaded: function () {
              var e, n;
              for (l.isUnloaded = !0, e = 0; e < t.nativeOverwrites.length; e++)
                (n = t.nativeOverwrites[e]), (n.obj[n.functionName] = n.origFn);
              t.nativeOverwrites = [];
            },
          }),
          (n = {
            t_start: d,
            t_end: void 0,
            url: "",
            config_url: null,
            loadedLate: !1,
            beaconsSent: 0,
            isUnloaded: !1,
            beaconInQueue: !1,
            cookies: {},
            testedCookies: !1,
            constants: {
              BEACON_TYPE_SPAS: ["spa", "spa_hard"],
              MAX_GET_LENGTH: 2e3,
            },
            session: {
              domain: t.site_domain,
              ID: void 0,
              start: void 0,
              length: 0,
              enabled: !0,
            },
            utils: {
              hasPostMessageSupport: function () {
                return !(
                  !e.postMessage ||
                  ("function" !== typeof e.postMessage &&
                    "object" !== typeof e.postMessage)
                );
              },
              objectToString: function (e, t, n) {
                var r,
                  i = [];
                if (!e || "object" !== typeof e) return e;
                if (
                  (void 0 === t && (t = "\n\t"),
                  n || (n = 0),
                  l.utils.isArray(e))
                ) {
                  for (r = 0; r < e.length; r++)
                    n > 0 && null !== e[r] && "object" === typeof e[r]
                      ? i.push(
                          this.objectToString(
                            e[r],
                            t + ("\n\t" === t ? "\t" : ""),
                            n - 1
                          )
                        )
                      : "&" === t
                      ? i.push(encodeURIComponent(e[r]))
                      : i.push(e[r]);
                  t = ",";
                } else
                  for (r in e)
                    Object.prototype.hasOwnProperty.call(e, r) &&
                      (n > 0 && null !== e[r] && "object" === typeof e[r]
                        ? i.push(
                            encodeURIComponent(r) +
                              "=" +
                              this.objectToString(
                                e[r],
                                t + ("\n\t" === t ? "\t" : ""),
                                n - 1
                              )
                          )
                        : "&" === t
                        ? i.push(
                            encodeURIComponent(r) +
                              "=" +
                              encodeURIComponent(e[r])
                          )
                        : i.push(r + "=" + e[r]));
                return i.join(t);
              },
              getCookie: function (e) {
                var t;
                return e
                  ? (l.utils.mark("get_cookie"),
                    "undefined" !== typeof l.cookies[e]
                      ? !1 === l.cookies[e]
                        ? void 0
                        : l.cookies[e]
                      : ((t = this.getRawCookie(e)),
                        "undefined" !== typeof t
                          ? ((l.cookies[e] = t), l.cookies[e])
                          : void (l.cookies[e] = !1)))
                  : null;
              },
              getRawCookie: function (e) {
                return e
                  ? ((e = " " + e + "="),
                    (n = " " + r.cookie + ";"),
                    (t = n.indexOf(e)) >= 0
                      ? ((t += e.length),
                        n
                          .substring(t, n.indexOf(";", t))
                          .replace(/^"/, "")
                          .replace(/"$/, ""))
                      : void 0)
                  : null;
                var t, n;
              },
              setCookie: function (e, n, i) {
                var o, a, s, u, c;
                if (!e || !l.session.domain || "undefined" === typeof n)
                  return l.addVar("nocookie", 1), !1;
                if (((o = this.objectToString(n, "&")), o === l.cookies[e]))
                  return !0;
                if (((a = e + '="' + o + '"'), a.length < 500)) {
                  (u = [a, "path=/", "domain=" + l.session.domain]),
                    "number" === typeof i &&
                      ((c = new Date()),
                      c.setTime(c.getTime() + 1e3 * i),
                      (c = c.toGMTString()),
                      u.push("expires=" + c));
                  var d = this.getSameSiteAttributeParts();
                  if (
                    ("https:" === location.protocol &&
                      !0 === t.secure_cookie &&
                      -1 === d.indexOf("Secure") &&
                      d.push("Secure"),
                    (u = u.concat(d)),
                    l.utils.mark("set_cookie_real"),
                    (r.cookie = u.join("; ")),
                    l.testedCookies)
                  )
                    return (
                      (l.cookies[e] =
                        "number" !== typeof i || i > 0 ? o : void 0),
                      !0
                    );
                  if (
                    ((l.cookies[e] = void 0),
                    (s = this.getCookie(e)),
                    o === s ||
                      ("undefined" === typeof s &&
                        "number" === typeof i &&
                        i <= 0))
                  )
                    return (
                      (l.cookies[e] = o),
                      (l.testedCookies = !0),
                      l.removeVar("nocookie"),
                      !0
                    );
                }
                return l.addVar("nocookie", 1), !1;
              },
              getSubCookies: function (e) {
                var t,
                  n,
                  r,
                  i,
                  o = !1,
                  a = {};
                if (!e) return null;
                if ("string" !== typeof e) return null;
                for (t = e.split("&"), n = 0, r = t.length; n < r; n++)
                  (i = t[n].split("=")),
                    i[0] &&
                      (i.push(""),
                      (a[decodeURIComponent(i[0])] = decodeURIComponent(i[1])),
                      (o = !0));
                return o ? a : null;
              },
              removeCookie: function (e) {
                return this.setCookie(e, {}, -86400);
              },
              getSameSiteAttributeParts: function () {
                var e = t.same_site_cookie.toUpperCase();
                return (
                  t.forced_same_site_cookie_none && (e = "NONE"),
                  "LAX" === e
                    ? ["SameSite=Lax"]
                    : "NONE" === e
                    ? "https:" === location.protocol &&
                      this.isCurrentUASameSiteNoneCompatible()
                      ? ["SameSite=None", "Secure"]
                      : []
                    : "STRICT" === e
                    ? ["SameSite=Strict"]
                    : ["SameSite=Lax"]
                );
              },
              getLocalStorage: function (n) {
                var r, i;
                if (!n || !t.localStorageSupported) return null;
                try {
                  if (
                    ((r = e.localStorage.getItem(t.LOCAL_STORAGE_PREFIX + n)),
                    null === r)
                  )
                    return;
                  i = e.JSON.parse(r);
                } catch (o) {
                  return null;
                }
                return i && "object" === typeof i.items
                  ? "number" === typeof i.expires && l.now() >= i.expires
                    ? void this.removeLocalStorage(n)
                    : i.items
                  : (this.removeLocalStorage(n), null);
              },
              setLocalStorage: function (n, r, i) {
                var o, a, s;
                if (!n || !t.localStorageSupported || "object" !== typeof r)
                  return !1;
                if (
                  ((o = { items: r }),
                  "number" === typeof i && (o.expires = l.now() + 1e3 * i),
                  (a = e.JSON.stringify(o)),
                  a.length < 5e4)
                )
                  try {
                    if (
                      (e.localStorage.setItem(t.LOCAL_STORAGE_PREFIX + n, a),
                      (s = e.localStorage.getItem(t.LOCAL_STORAGE_PREFIX + n)),
                      a === s)
                    )
                      return !0;
                  } catch (u) {}
                return !1;
              },
              removeLocalStorage: function (n) {
                if (!n || !t.localStorageSupported) return !1;
                try {
                  return (
                    e.localStorage.removeItem(t.LOCAL_STORAGE_PREFIX + n), !0
                  );
                } catch (r) {}
                return !1;
              },
              cleanupURL: function (e, n) {
                if (!e || l.utils.isArray(e)) return "";
                if (
                  (t.strip_query_string &&
                    (e = e.replace(/\?.*/, "?qs-redacted")),
                  "undefined" !== typeof n && e && e.length > n)
                ) {
                  var r = e.indexOf("?");
                  e =
                    -1 !== r && r < n
                      ? e.substr(0, r) + "?..."
                      : e.substr(0, n - 3) + "...";
                }
                return e;
              },
              hashQueryString: function (e, t) {
                return e
                  ? e.match
                    ? (e.match(/^\/\//) && (e = location.protocol + e),
                      e.match(/^(https?|file):/)
                        ? (t && (e = e.replace(/#.*/, "")),
                          e.replace(/\?([^#]*)/, function (e, t) {
                            return (
                              "?" + (t.length > 10 ? l.utils.hashString(t) : t)
                            );
                          }))
                        : (l.error("Passed in URL is invalid: " + e), ""))
                    : (l.addError(
                        "TypeError: Not a string",
                        "hashQueryString",
                        typeof e
                      ),
                      "")
                  : e;
              },
              pluginConfig: function (e, t, n, r) {
                var i,
                  o = 0;
                if (!t || !t[n]) return !1;
                for (i = 0; i < r.length; i++)
                  void 0 !== t[n][r[i]] && ((e[r[i]] = t[n][r[i]]), o++);
                return o > 0;
              },
              arrayFilter: function (e, t) {
                var n = [];
                if (
                  !(this.isArray(e) || (e && "number" === typeof e.length)) ||
                  "function" !== typeof t
                )
                  return n;
                if ("function" === typeof e.filter) n = e.filter(t);
                else {
                  var r,
                    i = -1,
                    o = e.length;
                  while (++i < o) (r = e[i]), t(r, i, e) && (n[n.length] = r);
                }
                return n;
              },
              arrayFind: function (e, t) {
                if (
                  (this.isArray(e) || (e && "number" === typeof e.length)) &&
                  "function" === typeof t
                ) {
                  if ("function" === typeof e.find) return e.find(t);
                  var n,
                    r = -1,
                    i = e.length;
                  while (++r < i) if (((n = e[r]), t(n, r, e))) return n;
                }
              },
              isMutationObserverSupported: function () {
                var t =
                  e &&
                  e.navigator &&
                  e.navigator.userAgent &&
                  e.navigator.userAgent.match(/Trident.*rv[ :]*11\./);
                return (
                  !t &&
                  e &&
                  e.MutationObserver &&
                  "function" === typeof e.MutationObserver
                );
              },
              addObserver: function (t, n, r, i, o, a) {
                var s,
                  u,
                  c = { observer: null, timer: null };
                if (!this.isMutationObserverSupported() || !i || !t)
                  return null;
                function l(e) {
                  var t = !1;
                  c.timer && (clearTimeout(c.timer), (c.timer = null)),
                    i && ((t = i.call(a, e, o)), t || (i = null)),
                    !t &&
                      c.observer &&
                      (c.observer.disconnect(), (c.observer = null)),
                    "number" === typeof t &&
                      t > 0 &&
                      (c.timer = setTimeout(l, t));
                }
                return (
                  (s = e.MutationObserver),
                  e.Zone &&
                    "function" === typeof e.Zone.__symbol__ &&
                    ((u = e.Zone.__symbol__("MutationObserver")),
                    u &&
                      "string" === typeof u &&
                      e.hasOwnProperty(u) &&
                      "function" === typeof e[u] &&
                      (s = e[u])),
                  (c.observer = new s(l)),
                  r && (c.timer = setTimeout(l, c["timeout"])),
                  c.observer.observe(t, n),
                  c
                );
              },
              addListener: function (e, n, r, i) {
                var o = !1;
                e.addEventListener
                  ? ("object" === typeof i
                      ? (o = i)
                      : "boolean" === typeof i &&
                        i &&
                        l.browser.supportsPassive() &&
                        (o = { capture: !1, passive: !0 }),
                    e.addEventListener(n, r, o))
                  : e.attachEvent && e.attachEvent("on" + n, r),
                  (t.listenerCallbacks[n] = t.listenerCallbacks[n] || []),
                  t.listenerCallbacks[n].push({ el: e, fn: r });
              },
              removeListener: function (e, n, r) {
                if (
                  (e.removeEventListener
                    ? e.removeEventListener(n, r, !1)
                    : e.detachEvent && e.detachEvent("on" + n, r),
                  t.listenerCallbacks.hasOwnProperty(n))
                )
                  for (var i = 0; i < t.listenerCallbacks[n].length; i++)
                    if (
                      r === t.listenerCallbacks[n][i].fn &&
                      e === t.listenerCallbacks[n][i].el
                    )
                      return void t.listenerCallbacks[n].splice(i, 1);
              },
              isArray: function (e) {
                return "[object Array]" === Object.prototype.toString.call(e);
              },
              inArray: function (e, t) {
                var n;
                if (
                  "undefined" === typeof e ||
                  "undefined" === typeof t ||
                  !t.length
                )
                  return !1;
                for (n = 0; n < t.length; n++) if (t[n] === e) return !0;
                return !1;
              },
              getQueryParamValue: function (e, t) {
                var n, r, i, o;
                if (!e) return null;
                for (
                  "string" === typeof t
                    ? ((n = l.window.document.createElement("a")), (n.href = t))
                    : (n =
                        "object" === typeof t && "string" === typeof t.search
                          ? t
                          : l.window.location),
                    r = n.search.slice(1).split(/&/),
                    i = 0;
                  i < r.length;
                  i++
                )
                  if (r[i] && ((o = r[i].split("=")), o.length && o[0] === e))
                    try {
                      return o.length > 1
                        ? decodeURIComponent(
                            o.splice(1).join("=").replace(/\+/g, " ")
                          )
                        : "";
                    } catch (a) {
                      if (
                        !a ||
                        "string" !== typeof a.name ||
                        -1 === a.name.indexOf("URIError")
                      )
                        throw a;
                    }
                return null;
              },
              generateUUID: function () {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                  /[xy]/g,
                  function (e) {
                    var t = (16 * Math.random()) | 0,
                      n = "x" === e ? t : (3 & t) | 8;
                    return n.toString(16);
                  }
                );
              },
              generateId: function (e) {
                return "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                  .substr(0, e || 40)
                  .replace(/x/g, function (e) {
                    e = (Math.random() || 0.01).toString(36);
                    return "0" === e ? "0" : e.substr(2, 1);
                  });
              },
              serializeForUrl: function (e) {
                return l.utils.Compression && l.utils.Compression.jsUrl
                  ? l.utils.Compression.jsUrl(e)
                  : window.JSON
                  ? JSON.stringify(e)
                  : "";
              },
              getMyURL: function () {
                var e,
                  t =
                    document.currentScript ||
                    document.getElementById("boomr-if-as") ||
                    document.getElementById("boomr-scr-as");
                if (t) return t["src"];
                var n,
                  r = document.getElementsByTagName("script");
                for (n = r.length; n--; )
                  if ("interactive" === r[n]["readyState"]) return r[n].src;
                try {
                  throw new Error();
                } catch (i) {
                  if (
                    "stack" in i &&
                    ((e = this.arrayFilter(i.stack.split(/\n/), function (e) {
                      return e.match(/https?:\/\//);
                    })),
                    e && e.length)
                  )
                    return e[0].replace(/.*(https?:\/\/.+?)(:\d+)+\D*$/m, "$1");
                }
                return "";
              },
              scroll: function () {
                var t = void 0 !== e.pageXOffset,
                  n = "CSS1Compat" === (e.document.compatMode || ""),
                  r = { x: 0, y: 0 };
                return (
                  t
                    ? "function" === typeof e.pageXOffset
                      ? ((r.x = e.pageXOffset()), (r.y = e.pageYOffset()))
                      : ((r.x = e.pageXOffset), (r.y = e.pageYOffset))
                    : n
                    ? ((r.x = e.document.documentElement.scrollLeft),
                      (r.y = e.document.documentElement.scrollTop))
                    : ((r.x = e.document.body.scrollLeft),
                      (r.y = e.document.body.scrollTop)),
                  "number" === typeof r["sx"] &&
                    (r["sx"] = Math.round(r["sx"])),
                  "number" === typeof r["sy"] &&
                    (r["sy"] = Math.round(r["sy"])),
                  r
                );
              },
              windowHeight: function () {
                return (
                  e.innerHeight ||
                  e.document.documentElement.clientHeight ||
                  e.document.body.clientHeight
                );
              },
              windowWidth: function () {
                return (
                  e.innerWidth ||
                  e.document.documentElement.clientWidth ||
                  e.document.body.clientWidth
                );
              },
              isNative: function (e) {
                return (
                  !!e &&
                  e.toString &&
                  !e.hasOwnProperty("toString") &&
                  /\[native code\]/.test(String(e))
                );
              },
              overwriteNative: function (e, n, r) {
                e &&
                  r &&
                  (l.boomerang_frame !== l.window &&
                    t.nativeOverwrites.push({
                      obj: e,
                      functionName: n,
                      origFn: e[n],
                    }),
                  (e[n] = r));
              },
              isInteger: function (e) {
                var t =
                  Number.isInteger ||
                  function (e) {
                    return (
                      "number" === typeof e &&
                      isFinite(e) &&
                      Math.floor(e) === e
                    );
                  };
                return t(e);
              },
              isObjectEmpty: function (e) {
                for (var t in e) if (e.hasOwnProperty(t)) return !1;
                return !0;
              },
              hashString: function (e) {
                e = encodeURIComponent(e);
                for (var t = 2166136261, n = 0; n < e.length; n++)
                  (t ^= e.charCodeAt(n)),
                    (t +=
                      (t << 1) + (t << 4) + (t << 7) + (t << 8) + (t << 24));
                var r = (t >>> 0).toString() + e.length;
                return parseInt(r).toString(36);
              },
              isCurrentUASameSiteNoneCompatible: function () {
                return (
                  !(
                    e &&
                    e.navigator &&
                    e.navigator.userAgent &&
                    "string" === typeof e.navigator.userAgent
                  ) || this.isUASameSiteNoneCompatible(e.navigator.userAgent)
                );
              },
              isUASameSiteNoneCompatible: function (e) {
                var t = e.match(/(UCBrowser)\/(\d+\.\d+)\.(\d+)/);
                if (t) {
                  var n = parseFloat(t[2]),
                    r = t[3];
                  return 12.13 === n ? !(r <= 2) : !(n < 12.13);
                }
                if (
                  ((t = e.match(/(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+)/)), t)
                ) {
                  var i = t[2];
                  return !(i >= 51 && i <= 66);
                }
                return (
                  (t = e.match(
                    /(Macintosh;.*Mac OS X 10_14[_\d]*.*) AppleWebKit\//
                  )),
                  t
                    ? ((t = e.match(/Version\/.* Safari\//)),
                      (!t || ((t = e.match(/Chrom(?:e|ium)/)), null !== t)) &&
                        ((t = e.match(
                          /^Mozilla\/\d+(?:\.\d+)* \(Macintosh;.*Mac OS X \d+(?:_\d+)*\) AppleWebKit\/\d+(?:\.\d+)* \(KHTML, like Gecko\)$/
                        )),
                        !t))
                    : ((t = e.match(/(iP.+; CPU .*OS 12(?:_\d+)*.*)/)), !t)
                );
              },
              forEach: function (e, t, n) {
                if (l.utils.isArray(e) && "function" === typeof t)
                  for (var r = e.length, i = 0; i < r; i++)
                    e.hasOwnProperty(i) && t.call(n, e[i], i, e);
              },
              mark: function (e) {
                var t = l.getPerformance();
                t &&
                  "function" === typeof t.mark &&
                  !l.window.BOOMR_no_mark &&
                  t.mark("boomr:" + e);
              },
              measure: function (e, t, n) {
                var r = l.getPerformance();
                r &&
                  "function" === typeof r.measure &&
                  !l.window.BOOMR_no_mark &&
                  r.measure(
                    "boomr:" + e,
                    t ? "boomr:" + t : void 0,
                    n ? "boomr:" + n : void 0
                  );
              },
            },
            browser: {
              results: {},
              supportsPassive: function () {
                if ("undefined" === typeof l.browser.results.supportsPassive) {
                  if (
                    ((l.browser.results.supportsPassive = !1),
                    !Object.defineProperty)
                  )
                    return !1;
                  try {
                    var e = Object.defineProperty({}, "passive", {
                      get: function () {
                        l.browser.results.supportsPassive = !0;
                      },
                    });
                    window.addEventListener("test", null, e);
                  } catch (t) {}
                }
                return l.browser.results.supportsPassive;
              },
            },
            init: function (n) {
              var i,
                o,
                a = [
                  "autorun",
                  "sampleRate",
                  "interactionSampleRate",
                  "normalizeUrl",
                  "initiatorTypes",
                  "ignoreXhrs",
                  "beacon_auth_key",
                  "beacon_auth_token",
                  "beacon_with_credentials",
                  "beacon_disable_sendbeacon",
                  "beacon_url",
                  "beacon_url_force_https",
                  "beacon_type",
                  "site_domain",
                  "strip_query_string",
                  "user_ip",
                  "sendWindow",
                ];
              if (
                (f(),
                n || (n = {}),
                void 0 !== n.log && (this.log = n.log),
                this.log || (this.log = function () {}),
                this.pageId || (this.pageId = l.utils.generateId(8)),
                n.primary && t.handlers_attached)
              )
                return this;
              for (o in ("undefined" !== typeof n.site_domain &&
                (/:/.test(n.site_domain) &&
                  (n.site_domain = e.location.hostname.toLowerCase()),
                (this.session.domain = n.site_domain)),
              l.session.enabled &&
                "undefined" === typeof l.session.ID &&
                (l.session.ID = l.utils.generateUUID()),
              "undefined" !== typeof n.autorun && (t.autorun = n.autorun),
              this.plugins))
                if (this.plugins.hasOwnProperty(o)) {
                  if (
                    n[o] &&
                    n[o].hasOwnProperty("enabled") &&
                    !1 === n[o].enabled
                  ) {
                    (t.disabled_plugins[o] = 1),
                      "function" === typeof this.plugins[o].disable &&
                        this.plugins[o].disable();
                    continue;
                  }
                  if (t.disabled_plugins[o]) {
                    if (
                      !n[o] ||
                      !n[o].hasOwnProperty("enabled") ||
                      !0 !== n[o].enabled
                    )
                      continue;
                    "function" === typeof this.plugins[o].enable &&
                      this.plugins[o].enable(),
                      delete t.disabled_plugins[o];
                  }
                  if ("function" === typeof this.plugins[o].init)
                    try {
                      this.plugins[o].init(n);
                    } catch (u) {
                      l.addError(u, o + ".init");
                    }
                }
              for (i = 0; i < a.length; i++)
                void 0 !== n[a[i]] && (t[a[i]] = n[a[i]]);
              return (
                ((!t.handlers_attached && !n.wait) ||
                  (t.handlers_attached && t.waiting_for_config)) &&
                  (t.onloadfired ||
                    (void 0 !== t.autorun && !1 === t.autorun) ||
                    (l.hasBrowserOnloadFired() && (l.loadedLate = !0),
                    l.attach_page_ready(l.page_ready_autorun)),
                  (t.waiting_for_config = !1)),
                t.handlers_attached ||
                  (n.wait && (t.waiting_for_config = !0),
                  l.attach_page_ready(function () {
                    l.t_onload || (l.t_onload = l.now());
                  }),
                  l.utils.addListener(e, "DOMContentLoaded", function () {
                    t.fireEvent("dom_loaded");
                  }),
                  l.fireEvent("config", n),
                  l.subscribe("config", function (e) {
                    e.beacon_url && (t.beacon_url = e.beacon_url);
                  }),
                  l.subscribe("spa_navigation", t.spaNavigation, null, t),
                  (function () {
                    var n, i;
                    for (
                      void 0 !== s &&
                        (l.utils.addListener(r, s, function () {
                          t.fireEvent("visibility_changed");
                        }),
                        (t.lastVisibilityState = l.visibilityState()),
                        l.subscribe("visibility_changed", function () {
                          var e = l.visibilityState();
                          (l.lastVisibilityEvent[e] = l.now()),
                            "prerender" === t.lastVisibilityState &&
                              "prerender" !== e &&
                              (l.addVar("vis.pre", "1"),
                              t.fireEvent("prerender_to_visible")),
                            (t.lastVisibilityState = e);
                        })),
                        l.utils.addListener(
                          r,
                          "mouseup",
                          t.xb_handler("click")
                        ),
                        n = r.getElementsByTagName("form"),
                        i = 0;
                      i < n.length;
                      i++
                    )
                      l.utils.addListener(
                        n[i],
                        "submit",
                        t.xb_handler("form_submit")
                      );
                    e.onpagehide ||
                      null === e.onpagehide ||
                      l.utils.addListener(e, "unload", function () {
                        l.window = e = null;
                      }),
                      l.boomerang_frame !== l.window &&
                        l.utils.addListener(
                          l.boomerang_frame,
                          "unload",
                          t.onFrameUnloaded
                        );
                  })(),
                  (t.handlers_attached = !0)),
                this
              );
            },
            attach_page_ready: function (t) {
              l.hasBrowserOnloadFired()
                ? this.setImmediate(t, null, null, l)
                : e.onpagehide || null === e.onpagehide
                ? l.utils.addListener(e, "pageshow", function () {
                    t();
                  })
                : l.utils.addListener(e, "load", function () {
                    t();
                  });
            },
            page_ready_autorun: function (e) {
              t.autorun && l.page_ready(e, !0);
            },
            page_ready: function (n, r) {
              var i;
              return (
                r || "number" !== typeof n || ((i = n), (n = null)),
                n || (n = e.event),
                n || (n = { name: "load" }),
                r
                  ? "number" === typeof e.BOOMR_page_ready &&
                    ((n.timing = n.timing || {}),
                    (n.timing.loadEventEnd = e.BOOMR_page_ready),
                    l.addVar("pr", 1, !0))
                  : ((n.timing = n.timing || {}),
                    i
                      ? (n.timing.loadEventEnd = i)
                      : "number" === typeof e.BOOMR_page_ready
                      ? (n.timing.loadEventEnd = e.BOOMR_page_ready)
                      : (n.timing.loadEventEnd = l.now()),
                    l.addVar("pr", 1, !0)),
                t.onloadfired ||
                  (t.fireEvent("page_ready", n), (t.onloadfired = !0)),
                this
              );
            },
            hasBrowserOnloadFired: function () {
              var t = l.getPerformance();
              return (
                (r.readyState && "complete" === r.readyState) ||
                (t && t.timing && t.timing.loadEventStart > 0) ||
                e.BOOMR_onload > 0
              );
            },
            onloadFired: function () {
              return t.onloadfired;
            },
            setImmediate: function (t, n, r, i) {
              var o, a;
              "undefined" !== typeof Error &&
                ((a = new Error()),
                (a = a.stack ? a.stack.replace(/^Error/, "Called") : void 0)),
                (o = function () {
                  t.call(i || null, n, r || {}, a), (o = null);
                }),
                e.requestIdleCallback
                  ? e.requestIdleCallback(o, { timeout: 1e3 })
                  : e.setImmediate
                  ? e.setImmediate(o)
                  : setTimeout(o, 10);
            },
            now: (function () {
              return (
                Date.now ||
                function () {
                  return new Date().getTime();
                }
              );
            })(),
            getPerformance: function () {
              try {
                if (l.window)
                  return "performance" in l.window && l.window.performance
                    ? l.window.performance
                    : l.window.msPerformance ||
                        l.window.webkitPerformance ||
                        l.window.mozPerformance;
              } catch (e) {}
            },
            forceSameSiteCookieNone: function () {
              t.forced_same_site_cookie_none = !0;
            },
            hrNow: function () {
              var e,
                t,
                n = l.getPerformance();
              return (
                n && n.now
                  ? (e = n.now())
                  : ((t =
                      (l.plugins.RT &&
                        l.plugins.RT.navigationStart &&
                        l.plugins.RT.navigationStart()) ||
                      l.t_lstart ||
                      l.t_start),
                    (e = l.now() - t)),
                e
              );
            },
            visibilityState:
              void 0 === a
                ? function () {
                    return "visible";
                  }
                : function () {
                    return r[a];
                  },
            lastVisibilityEvent: {},
            registerEvent: function (e) {
              return t.events.hasOwnProperty(e) || (t.events[e] = []), this;
            },
            disable: function () {
              t.clearEvents(), t.clearListeners();
            },
            fireEvent: function (e, n) {
              return t.fireEvent(e, n);
            },
            subscribe: function (n, r, i, o, a) {
              var s, u, c;
              for (
                n = n.toLowerCase(),
                  t.translate_events[n] && (n = t.translate_events[n]),
                  t.events.hasOwnProperty(n) || (t.events[n] = []),
                  c = t.events[n],
                  s = 0;
                s < c.length;
                s++
              )
                if (
                  ((u = c[s]),
                  u && u.fn === r && u.cb_data === i && u.scope === o)
                )
                  return this;
              if (
                (c.push({
                  fn: r,
                  cb_data: i || {},
                  scope: o || null,
                  once: a || !1,
                }),
                "page_ready" === n &&
                  t.onloadfired &&
                  t.autorun &&
                  this.setImmediate(r, null, i, o),
                "page_unload" === n || "before_unload" === n)
              ) {
                t.unloadEventsCount++;
                var d = this;
                (function () {
                  var a;
                  c.length;
                  (a = function (n) {
                    if (
                      (r && r.call(o, n || e.event, i),
                      ++t.unloadEventCalled === t.unloadEventsCount)
                    ) {
                      l.real_sendBeacon();
                      var a = d.plugins["Continuity"];
                      a &&
                        "function" === typeof a.checkIfSendAdditionalBeacon &&
                        a.checkIfSendAdditionalBeacon();
                    }
                  }),
                    "page_unload" === n &&
                      (e.onpagehide || null === e.onpagehide
                        ? l.utils.addListener(e, "pagehide", a)
                        : l.utils.addListener(e, "unload", a)),
                    l.utils.addListener(e, "beforeunload", a);
                })();
              }
              return this;
            },
            addError: function (e, n, r) {
              var i,
                o = l.plugins.Errors;
              l.error(
                "Boomerang caught error: " + e + ", src: " + n + ", extra: " + r
              ),
                o && o.is_supported()
                  ? "string" === typeof e
                    ? o.send(
                        { message: e, extra: r, functionName: n, noStack: !0 },
                        o.VIA_APP,
                        o.SOURCE_BOOMERANG
                      )
                    : ("string" === typeof n && (e.functionName = n),
                      "undefined" !== typeof r && (e.extra = r),
                      o.send(e, o.VIA_APP, o.SOURCE_BOOMERANG))
                  : ("string" !== typeof e &&
                      ((i = String(e)),
                      i.match(/^\[object/) &&
                        (i =
                          e.name +
                          ": " +
                          (e.description || e.message).replace(/\r\n$/, "")),
                      (e = i)),
                    void 0 !== n && (e = "[" + n + ":" + l.now() + "] " + e),
                    r && (e += ":: " + r),
                    t.errors[e] ? t.errors[e]++ : (t.errors[e] = 1));
            },
            isCrossOriginError: function (e) {
              return (
                "SecurityError" === e.name ||
                ("TypeError" === e.name && "Permission denied" === e.message) ||
                ("Error" === e.name &&
                  e.message &&
                  e.message.match(/^(Permission|Access is) denied/)) ||
                -2146828218 === e.number
              );
            },
            addVar: function (e, n, r) {
              if ("string" === typeof e)
                (t.vars[e] = n), r && (t.singleBeaconVars[e] = 1);
              else if ("object" === typeof e) {
                var i,
                  o = e;
                for (i in o)
                  o.hasOwnProperty(i) &&
                    ((t.vars[i] = o[i]), r && (t.singleBeaconVars[i] = 1));
              }
              return this;
            },
            appendVar: function (e, t) {
              var n = l.getVar(e) || "";
              return n && (n += ","), l.addVar(e, n + t), this;
            },
            removeVar: function (e) {
              var n, r;
              if (!arguments.length) return this;
              for (
                r =
                  1 === arguments.length && l.utils.isArray(e) ? e : arguments,
                  n = 0;
                n < r.length;
                n++
              )
                t.vars.hasOwnProperty(r[n]) && delete t.vars[r[n]];
              return this;
            },
            hasVar: function (e) {
              return t.vars.hasOwnProperty(e);
            },
            getVar: function (e) {
              return t.vars[e];
            },
            getPendingVar: function (e) {
              return t.ttinewBeaconPendingData
                ? t.ttinewBeaconPendingData[e]
                : t.vars[e];
            },
            hasPending: function () {
              return t.ttinewBeaconPending;
            },
            setVarPriority: function (e, n) {
              return (
                "number" !== typeof n ||
                  1 !== Math.abs(n) ||
                  (t.varPriority[n][e] = 1),
                this
              );
            },
            setReferrer: function (e) {
              t.r = e;
            },
            requestStart: function (e) {
              var t = l.now();
              return (
                l.plugins.RT.startTimer("xhr_" + e, t),
                {
                  loaded: function (n) {
                    l.responseEnd(e, t, n);
                  },
                }
              );
            },
            readyToSend: function () {
              var e;
              for (e in this.plugins)
                if (this.plugins.hasOwnProperty(e)) {
                  if (t.disabled_plugins[e]) continue;
                  if (
                    "function" === typeof this.plugins[e].readyToSend &&
                    !1 === this.plugins[e].readyToSend()
                  )
                    return !1;
                }
              return !0;
            },
            responseEnd: function (e, n, r, i) {
              if (
                ((n = "number" === typeof n ? n : l.now()),
                (i = "number" === typeof i ? i : l.now()),
                l.readyToSend())
              )
                if (
                  l.hasSentPageLoadBeacon() ||
                  l.utils.inArray(e.initiator, l.constants.BEACON_TYPE_SPAS)
                )
                  if (t.beaconInQueue)
                    l.subscribe(
                      "beacon",
                      function () {
                        l.responseEnd(e, n, r, i);
                      },
                      null,
                      l,
                      !0
                    );
                  else if (((t.beaconInQueue = !0), "object" === typeof e)) {
                    if (!e.url) return;
                    t.fireEvent("xhr_load", e);
                  } else
                    l.real_sendBeacon(),
                      l.addVar("xhr.pg", e),
                      l.plugins.RT.startTimer("xhr_" + e, n),
                      t.fireEvent("xhr_load", {
                        name: "xhr_" + e,
                        data: r,
                        timing: { loadEventEnd: i },
                      });
                else
                  l.subscribe(
                    "page_load_beacon",
                    function () {
                      l.responseEnd(e, n, r, i);
                    },
                    null,
                    l,
                    !0
                  );
              else
                setTimeout(function () {
                  l.responseEnd(e, n, r, i);
                }, 1e3);
            },
            uninstrumentXHR: function () {},
            instrumentXHR: function () {},
            uninstrumentFetch: function () {},
            instrumentFetch: function () {},
            sendBeacon: function (e) {
              return (
                e && (t.beacon_url_override = e),
                t.beaconQueued ||
                  ((t.beaconQueued = !0),
                  l.setImmediate(l.real_sendBeacon, null, null, l)),
                !0
              );
            },
            sendBeaconWhenReady: function (e, n, r) {
              if (t.beaconInQueue)
                l.subscribe(
                  "beacon",
                  function () {
                    l.sendBeaconWhenReady(e, n, r);
                  },
                  null,
                  l,
                  !0
                );
              else {
                for (var i in ((t.beaconInQueue = !0), e))
                  e.hasOwnProperty(i) && l.addVar(i, e[i], !0);
                "function" === typeof n &&
                  "undefined" !== typeof r &&
                  n.apply(r),
                  l.sendBeacon();
              }
            },
            real_sendBeacon: function () {
              var n,
                i = [],
                o = {};
              if (!t.beaconQueued && !t.ttinewBeaconPending) return !1;
              for (n in ((t.beaconQueued = !1), this.plugins))
                if (this.plugins.hasOwnProperty(n)) {
                  if (t.disabled_plugins[n]) continue;
                  if (!this.plugins[n].is_complete(t.vars))
                    return delete t.vars.early, !1;
                }
              if (
                !window ||
                !window["Image"] ||
                !window["navigator"] ||
                !l["window"]
              )
                return !1;
              var a = l.utils.inArray(
                  t.vars["http.initiator"],
                  l.constants.BEACON_TYPE_SPAS
                ),
                s = "undefined" === typeof t.vars["http.initiator"] || a;
              for (n in (t.vars.pgu ||
                (t.vars.pgu = a ? r.URL : r.URL.replace(/#.*/, "")),
              (t.vars.pgu = l.utils.cleanupURL(t.vars.pgu)),
              (t.vars.u && !a) || (t.vars.u = t.vars.pgu),
              t.vars.pgu === t.vars.u && delete t.vars.pgu,
              t.r ? (t.vars.r = l.utils.cleanupURL(t.r)) : delete t.vars.r,
              (t.vars.v = l.version),
              l.snippetVersion && (t.vars.sv = l.snippetVersion),
              (t.vars.sm = l.snippetMethod || "i"),
              l.session.enabled &&
                ((t.vars["rt.si"] =
                  l.session.ID +
                  "-" +
                  Math.round(l.session.start / 1e3).toString(36)),
                (t.vars["rt.ss"] = l.session.start),
                "undefined" === typeof t.vars.early
                  ? (t.vars["rt.sl"] =
                      l.session.length >= 1 ? l.session.length : 1)
                  : (t.vars["rt.sl"] = l.session.length)),
              l.visibilityState() &&
                ((t.vars["vis.st"] = l.visibilityState()),
                l.lastVisibilityEvent.visible &&
                  (t.vars["vis.lv"] = l.now() - l.lastVisibilityEvent.visible),
                l.lastVisibilityEvent.hidden &&
                  (t.vars["vis.lh"] = l.now() - l.lastVisibilityEvent.hidden)),
              (t.vars["ua.plt"] = navigator.platform),
              (t.vars["ua.vnd"] = navigator.vendor),
              this.pageId && (t.vars.pid = this.pageId),
              (t.vars.n = ++this.beaconsSent),
              e !== window && (t.vars["if"] = ""),
              t.errors))
                t.errors.hasOwnProperty(n) &&
                  i.push(
                    n + (t.errors[n] > 1 ? " (*" + t.errors[n] + ")" : "")
                  );
              if (
                (i.length > 0 && (t.vars.errors = i.join("\n")),
                (t.errors = {}),
                "function" === typeof t.normalizeUrl &&
                  t.vars["u"] &&
                  (t.vars["nmu"] = t.normalizeUrl(t.vars["u"])),
                t.vars["http.initiator"] &&
                  -1 === t.initiatorTypes.indexOf(t.vars["http.initiator"]))
              )
                return (t.beaconInQueue = !1), !1;
              if (
                "xhr" === t.vars["http.initiator"] &&
                t.vars["u"] &&
                c(t.ignoreXhrs, t.vars["u"])
              )
                return (t.beaconInQueue = !1), !1;
              for (n in (t.fireEvent("before_beacon", t.vars), t.vars))
                t.vars.hasOwnProperty(n) && (o[n] = t.vars[n]);
              if (
                (l.removeVar(["qt", "pgu"]),
                "undefined" === typeof t.vars.early)
              ) {
                for (var u in t.singleBeaconVars)
                  t.singleBeaconVars.hasOwnProperty(u) && l.removeVar(u);
                (t.singleBeaconVars = {}),
                  !t.hasSentPageLoadBeacon &&
                    s &&
                    ((t.hasSentPageLoadBeacon = !0),
                    l.setImmediate(function () {
                      t.fireEvent("page_load_beacon", o);
                    }));
              }
              if (l.session.rate_limited) return !1;
              if (
                ((t.beaconInQueue = !1),
                "interaction" === t.vars["http.initiator"])
              ) {
                if (
                  "number" === typeof t.interactionSampleRate &&
                  Math.random() > t.interactionSampleRate
                )
                  return !1;
              } else if (
                "number" === typeof t.sampleRate &&
                Math.random() > t.sampleRate
              )
                return !1;
              return (
                this.plugins["Continuity"].getTtiWaitForXHRDone() &&
                  "spa_hard" === o["http.initiator"] &&
                  !o["c.tti.new"] &&
                  ((t.ttinewBeaconPending = !0),
                  (t.ttinewBeaconPendingData = o)),
                l.sendBeaconData(o),
                !0
              );
            },
            sendAdditionalBeacon: function (e) {
              t.ttinewBeaconPendingData &&
                (l.sendBeaconData(Object.assign(t.ttinewBeaconPendingData, e)),
                (t.ttinewBeaconPendingData = void 0),
                (t.ttinewBeaconPending = !1));
            },
            sendBeaconData: function (n) {
              var r,
                i,
                o,
                a,
                s,
                u = [],
                c = [],
                d = !0;
              if (
                ((t.beacon_url = t.beacon_url_override || t.beacon_url),
                !t.beacon_url)
              )
                return !1;
              if (!t.beaconUrlAllowed(t.beacon_url)) return !1;
              if (l.utils.isObjectEmpty(n)) return !1;
              t.fireEvent("beacon", n),
                (u = this.getVarsOfPriority(n, -1)),
                (c = this.getVarsOfPriority(n, 1)),
                (r = u.concat(this.getVarsOfPriority(n, 0), c)),
                (i = r.join("&")),
                t.beacon_url_force_https &&
                  t.beacon_url.match(/^\/\//) &&
                  (t.beacon_url = "https:" + t.beacon_url),
                (o =
                  t.beacon_url +
                  (t.beacon_url.indexOf("?") > -1 ? "&" : "?") +
                  i),
                "GET" === t.beacon_type
                  ? ((d = !0),
                    o.length > l.constants.MAX_GET_LENGTH &&
                      (
                        (window.console && (console.warn || console.log)) ||
                        function () {}
                      )(
                        "Boomerang: Warning: Beacon may not be sent via GET due to payload size > 2000 bytes"
                      ))
                  : ("POST" === t.beacon_type ||
                      o.length > l.constants.MAX_GET_LENGTH) &&
                    (d = !1);
              var f = t.sendWindow;
              if (
                f &&
                f.navigator &&
                "function" === typeof f.navigator.sendBeacon &&
                l.utils.isNative(f.navigator.sendBeacon) &&
                "function" === typeof e.Blob &&
                "GET" !== t.beacon_type &&
                "undefined" === typeof t.beacon_auth_token &&
                !t.beacon_disable_sendbeacon
              ) {
                var p = new e.Blob([i + "&sb=1"], { type: "text/plain" });
                if (f.navigator.sendBeacon(t.beacon_url, p)) return !0;
              }
              if (
                (l.orig_XMLHttpRequest || (f && f.XMLHttpRequest) || (d = !0),
                d)
              ) {
                try {
                  a = new Image();
                } catch (h) {
                  return !1;
                }
                a.src = o;
              } else {
                s = new (f.XMLHttpRequest ||
                  l.window.orig_XMLHttpRequest ||
                  l.orig_XMLHttpRequest ||
                  l.window.XMLHttpRequest)();
                try {
                  this.sendXhrPostBeacon(s, i);
                } catch (h) {
                  (s = new l.boomerang_frame.XMLHttpRequest()),
                    this.sendXhrPostBeacon(s, i);
                }
              }
              return !0;
            },
            hasSentPageLoadBeacon: function () {
              return t.hasSentPageLoadBeacon;
            },
            sendXhrPostBeacon: function (e, n) {
              e.open("POST", t.beacon_url),
                e.setRequestHeader("Content-type", "text/plain"),
                "undefined" !== typeof t.beacon_auth_token &&
                  ("undefined" === typeof t.beacon_auth_key &&
                    (t.beacon_auth_key = "Authorization"),
                  e.setRequestHeader(t.beacon_auth_key, t.beacon_auth_token)),
                t.beacon_with_credentials && (e.withCredentials = !0),
                e.send(n);
            },
            getVarsOfPriority: function (e, n) {
              var r,
                i = [],
                o = 0 !== n ? t.varPriority[n] : e;
              for (r in o)
                o.hasOwnProperty(r) &&
                  e.hasOwnProperty(r) &&
                  (i.push(
                    this.getUriEncodedVar(
                      r,
                      "undefined" === typeof e[r] ? "" : e[r]
                    )
                  ),
                  0 !== n && delete e[r]);
              return i;
            },
            getUriEncodedVar: function (e, t) {
              (void 0 !== t && null !== t) || (t = ""),
                "object" === typeof t && (t = l.utils.serializeForUrl(t));
              var n = encodeURIComponent(e) + "=" + encodeURIComponent(t);
              return n;
            },
            getResourceTiming: function (e, t, n) {
              var r,
                i = l.getPerformance();
              try {
                if (i && "function" === typeof i.getEntriesByName) {
                  if (((r = i.getEntriesByName(e)), !r || !r.length)) return;
                  if (
                    "function" === typeof n &&
                    ((r = l.utils.arrayFilter(r, n)), !r || !r.length)
                  )
                    return;
                  return (
                    r.length > 1 && "function" === typeof t && r.sort(t),
                    r[r.length - 1]
                  );
                }
              } catch (o) {}
            },
            setBeaconUrlsAllowed: function (e) {
              t.beacon_urls_allowed = e;
            },
          }),
          l.url)
        ) {
          var p = l.window.document.createElement("a");
          (p.href = l.url), (n.url = p.href);
        } else n.url = n.utils.getMyURL();
        delete window["BOOMR_start"],
          "number" === typeof window["BOOMR_lstart"]
            ? ((n.t_lstart = window["BOOMR_lstart"]),
              delete window["BOOMR_lstart"])
            : "number" === typeof l.window.BOOMR_lstart &&
              (n.t_lstart = l.window.BOOMR_lstart),
          "number" === typeof l.window.BOOMR_onload &&
            (n.t_onload = l.window.BOOMR_onload),
          (function () {
            var e;
            "object" === typeof console && void 0 !== console.log
              ? (n.log = function (e, t, n) {})
              : (n.log = function () {}),
              (e = function (e) {
                return function (t, n) {
                  return this.log(t, e, "boomerang" + (n ? "." + n : "")), this;
                };
              }),
              (n.debug = e("debug")),
              (n.info = e("info")),
              (n.warn = e("warn")),
              (n.error = e("error")),
              (n.traceTime = function (e) {
                var t = e || l.now();
                return [
                  new Date(t).getHours(),
                  new Date(t).getMinutes(),
                  new Date(t).getSeconds(),
                  new Date(t).getMilliseconds(),
                ].join(":");
              }),
              (n.cleanupURL = function () {
                return (
                  "" +
                  location
                    .toString()
                    .replace(location.protocol + "//" + location.host, "")
                );
              }),
              (n.trace = function (e, t, n, r) {
                n =
                  "(" +
                  l.traceTime() +
                  ") {" +
                  l.cleanupURL() +
                  "} [" +
                  e +
                  "] <" +
                  t +
                  "> " +
                  n;
              }),
              (n.traceHighlight = function (e, t, n, r) {
                n =
                  "(" +
                  l.traceTime() +
                  ") {" +
                  l.cleanupURL() +
                  "} [" +
                  e +
                  "] <" +
                  t +
                  "> " +
                  n;
              }),
              (n.warn = function (e, t, n, r) {
                n =
                  "(" +
                  l.traceTime() +
                  ") {" +
                  l.cleanupURL() +
                  "} [" +
                  e +
                  "] <" +
                  t +
                  "> " +
                  n;
              });
          })();
        try {
          var h = n.getPerformance();
          h &&
            "function" === typeof h.now &&
            /\[native code\]/.test(String(h.now)) &&
            h.timing &&
            h.timing.navigationStart &&
            (n.now = function () {
              return Math.round(h.now() + h.timing.navigationStart);
            });
        } catch (m) {}
        return (
          t.checkLocalStorageSupport(),
          (function () {
            var e;
            for (e in n) n.hasOwnProperty(e) && (l[e] = n[e]);
            l.xhr_excludes || (l.xhr_excludes = {});
          })(),
          (function () {
            if (
              ((l.checkWindowOverrides = function (e) {
                if (!Object.getOwnPropertyNames) return [];
                var t,
                  n,
                  i = [];
                function o() {
                  var e = r.createElement("iframe");
                  (e.style.display = "none"),
                    (e.src = "javascript:false"),
                    r
                      .getElementsByTagName("script")[0]
                      .parentNode.appendChild(e),
                    (t = e.contentWindow),
                    (n = Object.getOwnPropertyNames(t));
                }
                function a(e) {
                  s(e) && i.push(e);
                }
                function s(t) {
                  var n = t.split("."),
                    r = e;
                  while (r && n.length)
                    try {
                      r = r[n.shift()];
                    } catch (i) {
                      return !1;
                    }
                  return "function" === typeof r && !u(r, t);
                }
                function u(e, t) {
                  return (
                    "console.assert" === t ||
                    "Function.prototype" === t ||
                    t.indexOf("onload") >= 0 ||
                    t.indexOf("onbeforeunload") >= 0 ||
                    t.indexOf("onerror") >= 0 ||
                    t.indexOf("onload") >= 0 ||
                    t.indexOf("NodeFilter") >= 0 ||
                    (e.toString &&
                      !e.hasOwnProperty("toString") &&
                      /\[native code\]/.test(String(e)))
                  );
                }
                o();
                for (var c = 0; c < n.length; c++) {
                  var l = n[c];
                  if (
                    "window" !== l &&
                    "self" !== l &&
                    "top" !== l &&
                    "parent" !== l &&
                    "frames" !== l &&
                    t[l] &&
                    ("object" === typeof t[l] || "function" === typeof t[l])
                  ) {
                    a(l);
                    var d = [];
                    try {
                      d = Object.getOwnPropertyNames(t[l]);
                    } catch (p) {}
                    for (var f = 0; f < d.length; f++) a([l, d[f]].join("."));
                    if (t[l].prototype) {
                      d = Object.getOwnPropertyNames(t[l].prototype);
                      for (f = 0; f < d.length; f++)
                        a([l, "prototype", d[f]].join("."));
                    }
                  }
                }
                return i;
              }),
              (l.checkDocumentOverrides = function (e) {
                return l.utils.arrayFilter(
                  ["readyState", "domain", "hidden", "URL", "cookie"],
                  function (t) {
                    return e.hasOwnProperty(t);
                  }
                );
              }),
              "true" === l.utils.getQueryParamValue("overridden") &&
                e &&
                e.Object &&
                Object.getOwnPropertyNames)
            ) {
              var t = []
                .concat(l.checkWindowOverrides(e))
                .concat(l.checkDocumentOverrides(r));
              t.length;
            }
          })(),
          o("onBoomerangLoaded", { BOOMR: l }, !0),
          l
        );
      }
      function h() {
        var e,
          t,
          n,
          r,
          i,
          o = [
            "uninitialized",
            "open",
            "responseStart",
            "domInteractive",
            "responseEnd",
          ],
          a = 1e3,
          s = 100,
          u = 50,
          d = 200,
          f = 1e3,
          p = 500,
          h = -1001,
          m = -999,
          g = -998,
          O = -997,
          v = ["xmlhttprequest", "script", "fetch"];
        function y(e) {
          if (!e) return null;
          e.href = e.href;
          var t = e.pathname;
          return "/" !== t.charAt(0) && (t = "/" + t), t;
        }
        function _(e) {
          var t;
          if (e.href) {
            if (e.href.match(/^(about:|javascript:|data:)/i)) return !0;
            if (
              "function" === typeof BOOMR.getBeaconURL &&
              BOOMR.getBeaconURL() &&
              ((t = e.href.indexOf(BOOMR.getBeaconURL())),
              0 === t || 5 === t || 6 === t)
            )
              return !0;
          }
          return (
            BOOMR.xhr_excludes.hasOwnProperty(e.href) ||
            BOOMR.xhr_excludes.hasOwnProperty(e.hostname) ||
            BOOMR.xhr_excludes.hasOwnProperty(y(e))
          );
        }
        function R() {
          (this.watch = 0),
            (this.timer = null),
            (this.timerEarlyBeacon = null),
            (this.pending_events = []),
            (this.lastSpaLocation = null);
        }
        function b() {
          BOOMR.subscribe("click", function () {
            if (!i.singlePageApp || i.spaStartFromClick) {
              var t = { timing: {}, initiator: "click" };
              BOOMR.orig_XMLHttpRequest &&
                BOOMR.orig_XMLHttpRequest !== e.XMLHttpRequest &&
                ((t.timing.requestStart = BOOMR.now()), n.addEvent(t));
            }
          });
        }
        function M(e, t) {
          var n, r;
          if (!t || !e) return !1;
          if ("boolean" === typeof t) return !0 === t;
          if ("function" === typeof t)
            try {
              return !0 === t(e);
            } catch (i) {
              return !1;
            }
          if (BOOMR.utils.isArray(t))
            for (n = 0; n < t.length; n++) {
              if (((r = t[n]), "string" === typeof r && r === e)) return !0;
              if (r instanceof RegExp && r.test(e)) return !0;
            }
          return !1;
        }
        function B() {
          i.monitorFetch &&
            "function" === typeof e.fetch &&
            "function" === typeof e.Request &&
            "function" === typeof e.Response &&
            "function" === typeof e.Promise &&
            "function" === typeof window.fetch &&
            !e.fetch.polyfill &&
            ((BOOMR.proxy_fetch && BOOMR.proxy_fetch === e.fetch) ||
              (BOOMR.proxy_fetch &&
              BOOMR.orig_fetch &&
              BOOMR.orig_fetch === e.fetch
                ? (e.fetch = BOOMR.proxy_fetch)
                : ((BOOMR.orig_fetch = e.orig_fetch || e.fetch),
                  (BOOMR.proxy_fetch = function (t, o) {
                    var a,
                      s,
                      u,
                      c = { timing: {}, initiator: "xhr" };
                    if (
                      ("object" === typeof t && t instanceof e.Request
                        ? ((a = t.url),
                          (s = (o && o.method) || t.method || "GET"),
                          i.captureXhrRequestResponse &&
                            (u = (o && o.body) || t.body || void 0))
                        : ((a = t),
                          (s = (o && o.method) || "GET"),
                          i.captureXhrRequestResponse &&
                            (u = (o && o.body) || void 0)),
                      (r.href = a),
                      i.xhrExcludeFilter(r))
                    )
                      return BOOMR.orig_fetch.apply(e, arguments);
                    BOOMR.fireEvent("xhr_init", "fetch"),
                      (c.url = r.href),
                      (c.method = s),
                      (c.type = "fetch"),
                      u && (c.requestPayload = u),
                      BOOMR.fireEvent("xhr_send", { resource: c }),
                      n.addEvent(c);
                    try {
                      c.timing.requestStart ||
                        (c.timing.requestStart = BOOMR.now());
                      var l = BOOMR.orig_fetch.apply(this, arguments);
                      function d(t, n, r) {
                        function o() {
                          var e;
                          r.fetchResponse &&
                          !r.fetchResponse.bodyUsed &&
                          i.fetchBodyUsedWait
                            ? ((e = BOOMR.now()),
                              (r.responseBodyNotUsed = !0),
                              setTimeout(function () {
                                i.loadFinished(r, e);
                              }, i.fetchBodyUsedWait))
                            : i.loadFinished(r);
                        }
                        return function () {
                          var i,
                            a = t._bmrNextP;
                          try {
                            i = n.apply(this === window ? e : this, arguments);
                            while (a && !a._bmrHasOnFulfilled) a = a._bmrNextP;
                            return (
                              a ||
                                (i instanceof e.Promise
                                  ? (i.then = f(i, i.then, r))
                                  : o()),
                              i
                            );
                          } catch (s) {
                            while (a && !a._bmrHasOnRejected) a = a._bmrNextP;
                            throw (a || o(), s);
                          }
                        };
                      }
                      function f(e, t, n) {
                        return e._bmrNextP
                          ? t
                          : function () {
                              var r = Array.prototype.slice.call(arguments);
                              r.length > 0 &&
                                ("function" === typeof r[0] &&
                                  ((r[0] = d(e, r[0], n)),
                                  (e._bmrHasOnFulfilled = !0)),
                                r.length > 1 &&
                                  "function" === typeof r[1] &&
                                  ((r[1] = d(e, r[1], n)),
                                  (e._bmrHasOnRejected = !0)));
                              var i = t.apply(e, r);
                              return (
                                (e._bmrNextP = i), (i.then = f(i, i.then, n)), i
                              );
                            };
                      }
                      return (
                        (l.then = f(l, l.then, c)),
                        l.then(
                          function (t) {
                            var r,
                              o,
                              a = !1,
                              s = !1;
                            if (
                              (t.redirected && (c.responseUrl = t.url),
                              (t.status < 200 || t.status >= 400) &&
                                (c.status = t.status),
                              (c.fetchResponse = t),
                              c.index >= 0 && n.monitorMO(c.index),
                              i.captureXhrRequestResponse &&
                                "function" === typeof t.clone)
                            ) {
                              (o = t.headers.get("content-type")),
                                o &&
                                  ((a = -1 !== o.indexOf("json")),
                                  (s = -1 !== o.indexOf("xml"))),
                                (c.response = {});
                              try {
                                (r = t.clone()),
                                  r
                                    .text()
                                    .then(function (t) {
                                      (c.response.text = t),
                                        (c.response.raw = t),
                                        s &&
                                          "function" === typeof e.DOMParser &&
                                          (c.response.xml =
                                            new e.DOMParser().parseFromString(
                                              t,
                                              "text/xml"
                                            ));
                                    })
                                    .then(null, function (e) {});
                              } catch (u) {}
                              if (a)
                                try {
                                  (r = t.clone()),
                                    r
                                      .json()
                                      .then(function (e) {
                                        c.response.json = e;
                                      })
                                      .then(null, function (e) {});
                                } catch (u) {}
                            }
                            return t;
                          },
                          function (e) {
                            throw (
                              (!e || ("AbortError" !== e.name && 20 !== e.code)
                                ? (c.status = g)
                                : (c.status = m),
                              e)
                            );
                          }
                        )
                      );
                    } catch (p) {
                      throw ((c.status = O), i.loadFinished(c), p);
                    }
                  }),
                  BOOMR.utils.overwriteNative(e, "fetch", BOOMR.proxy_fetch))));
        }
        function w() {
          "function" === typeof e.fetch &&
            BOOMR.orig_fetch &&
            BOOMR.orig_fetch !== e.fetch &&
            (e.fetch = BOOMR.orig_fetch);
        }
        function S() {
          if (
            !BOOMR.proxy_XMLHttpRequest ||
            BOOMR.proxy_XMLHttpRequest !== e.XMLHttpRequest
          ) {
            if (
              BOOMR.proxy_XMLHttpRequest &&
              BOOMR.orig_XMLHttpRequest &&
              BOOMR.orig_XMLHttpRequest === e.XMLHttpRequest
            )
              return (
                (e.XMLHttpRequest = BOOMR.proxy_XMLHttpRequest), void R.start()
              );
            (BOOMR.orig_XMLHttpRequest =
              e.orig_XMLHttpRequest || e.XMLHttpRequest),
              R.start(),
              b(),
              (BOOMR.proxy_XMLHttpRequest = function () {
                var t,
                  a,
                  s,
                  u = { timing: {}, initiator: "xhr" },
                  c = !1,
                  l = !1;
                return (
                  (t = new BOOMR.orig_XMLHttpRequest()),
                  (a = t.open),
                  (s = t.send),
                  (t.open = function (n, s, d) {
                    if (((r.href = s), i.xhrExcludeFilter(r)))
                      return (l = !0), a.apply(t, arguments);
                    function f(n, r) {
                      t.addEventListener(
                        n,
                        function () {
                          if ("readystatechange" === n)
                            if (
                              ((u.timing[o[t.readyState]] = BOOMR.now()),
                              4 === t.readyState && 0 !== t.status)
                            ) {
                              if (
                                (t.responseURL !== u.url &&
                                  (u.responseUrl = t.responseURL),
                                (t.status < 200 || t.status >= 400) &&
                                  (u.status = t.status),
                                i.captureXhrRequestResponse &&
                                  ((u.response = {
                                    text:
                                      "" === t.responseType ||
                                      "text" === t.responseType
                                        ? t.responseText
                                        : null,
                                    xml:
                                      "" === t.responseType ||
                                      "document" === t.responseType
                                        ? t.responseXML
                                        : null,
                                    raw: t.response,
                                    json: t.responseJSON,
                                  }),
                                  t.response &&
                                    t.response.constructor &&
                                    t.response.constructor ===
                                      BOOMR.boomerang_frame.Object &&
                                    BOOMR.boomerang_frame.Object !== e.Object))
                              )
                                try {
                                  t.response.constructor = e.Object;
                                } catch (a) {}
                              i.loadFinished(u);
                            } else
                              0 === t.readyState &&
                                "number" === typeof u.timing.open &&
                                (t.responseURL !== u.url &&
                                  (u.responseUrl = t.responseURL),
                                (u.status = m),
                                i.loadFinished(u));
                          else
                            t.responseURL !== u.url &&
                              (u.responseUrl = t.responseURL),
                              "load" === n
                                ? 0 !== t.status &&
                                  (t.status < 200 || t.status >= 400) &&
                                  (u.status = t.status)
                                : (u.status =
                                    "undefined" === typeof r ? t.status : r),
                              i.loadFinished(u);
                        },
                        !1
                      );
                    }
                    (l = !1),
                      "undefined" === typeof d && (d = !0),
                      BOOMR.fireEvent("xhr_init", "xhr"),
                      c ||
                        (d && f("readystatechange"),
                        f("load"),
                        f("timeout", h),
                        f("error", g),
                        f("abort", m)),
                      (u.url = r.href),
                      (u.method = n),
                      (u.type = "xhr"),
                      delete u.status,
                      d || (u.synchronous = !0),
                      (c = !0);
                    try {
                      return a.apply(t, arguments);
                    } catch (p) {
                      throw ((u.status = O), i.loadFinished(u), p);
                    }
                  }),
                  (t.send = function (e) {
                    return l
                      ? s.apply(t, arguments)
                      : (i.captureXhrRequestResponse &&
                          (t.resource.requestPayload = e),
                        BOOMR.fireEvent("xhr_send", t),
                        n.addEvent(u),
                        u.timing.requestStart ||
                          (u.timing.requestStart = BOOMR.now()),
                        "undefined" === typeof u.status || u.status !== O
                          ? s.apply(t, arguments)
                          : void 0);
                  }),
                  (t.resource = u),
                  t
                );
              }),
              (BOOMR.proxy_XMLHttpRequest.UNSENT = 0),
              (BOOMR.proxy_XMLHttpRequest.OPENED = 1),
              (BOOMR.proxy_XMLHttpRequest.HEADERS_RECEIVED = 2),
              (BOOMR.proxy_XMLHttpRequest.LOADING = 3),
              (BOOMR.proxy_XMLHttpRequest.DONE = 4),
              (BOOMR.proxy_XMLHttpRequest.prototype =
                BOOMR.orig_XMLHttpRequest.prototype),
              BOOMR.utils.overwriteNative(
                e,
                "XMLHttpRequest",
                BOOMR.proxy_XMLHttpRequest
              );
          }
        }
        function E() {
          BOOMR.orig_XMLHttpRequest &&
            BOOMR.orig_XMLHttpRequest !== e.XMLHttpRequest &&
            (e.XMLHttpRequest = BOOMR.orig_XMLHttpRequest);
        }
        function T(e) {
          (e.initiator = "xhr"), BOOMR.responseEnd(e);
        }
        BOOMR.plugins.AutoXHR ||
          ((e = BOOMR.window),
          e &&
            e.XMLHttpRequest &&
            new e.XMLHttpRequest().addEventListener &&
            ((R.stop = function () {
              R.pause(), (R.observer = null);
            }),
            (R.pause = function () {
              R.observer &&
                R.observer.observer &&
                !R.isPaused &&
                ((R.isPaused = !0), R.observer.observer.disconnect());
            }),
            (R.resume = function () {
              R.observer &&
                R.observer.observer &&
                R.isPaused &&
                ((R.isPaused = !1),
                R.observer.observer.observe(t, R.observer.config));
            }),
            (R.start = function () {
              if (!R.observer) {
                var e = {
                  childList: !0,
                  attributes: !0,
                  subtree: !0,
                  attributeFilter: ["src", "href"],
                };
                (R.observer = BOOMR.utils.addObserver(
                  t,
                  e,
                  null,
                  n.mutation_cb,
                  null,
                  n
                )),
                  R.observer &&
                    ((R.observer.config = e),
                    BOOMR.subscribe("page_unload", R.stop, null, R));
              }
            }),
            (R.prototype.addEvent = function (e) {
              var t,
                r,
                o,
                a = {
                  type: e.initiator,
                  resource: e,
                  nodes_to_wait: 0,
                  total_nodes: 0,
                  resources: [],
                  xhr_resources: [],
                  complete: !1,
                  aborted: !1,
                  firedEarlyBeacon: !1,
                },
                s = this.pending_events.length,
                u = this;
              for (t = s - 1; t >= 0; t--)
                if (
                  this.pending_events[t] &&
                  !this.pending_events[t].complete
                ) {
                  (r = this.pending_events[t]), (o = t);
                  break;
                }
              if (r)
                if (
                  "click" === r.type &&
                  i.singlePageApp &&
                  i.spaStartFromClick &&
                  "xhr" === a.type
                )
                  (a.resource.fromClick = !0),
                    (a.resource.timing.click = r.resource.timing.requestStart),
                    (a.resource.timing.requestStart =
                      r.resource.timing.requestStart),
                    (a.interesting = r.interesting || 0),
                    (a.total_nodes += r.total_nodes),
                    (a.resources = r.resources.concat(a.resources)),
                    (a.xhr_resources = r.xhr_resources.concat(a.xhr_resources)),
                    (this.pending_events[o] = void 0),
                    this.watch--;
                else if (
                  ("click" === r.type || r.resource.fromClick) &&
                  i.singlePageApp &&
                  i.spaStartFromClick &&
                  "spa" === a.type
                )
                  (a.resource.timing = r.resource.timing),
                    (a.interesting = r.interesting || 0),
                    (a.total_nodes += r.total_nodes),
                    (a.resources = r.resources.concat(a.resources)),
                    r.resource.url && a.xhr_resources.push(r.resource.url),
                    (a.xhr_resources = a.xhr_resources.concat(r.xhr_resources)),
                    (this.pending_events[o] = void 0),
                    this.watch--;
                else if ("click" === r.type)
                  (0 !== r.nodes_to_wait && r.resource.url) ||
                    ((this.pending_events[o] = void 0), this.watch--);
                else if ("xhr" === r.type) {
                  if ("click" === a.type) return null;
                  if ("xhr" === a.type) return n.add_event_resource(e), null;
                } else if (
                  BOOMR.utils.inArray(r.type, BOOMR.constants.BEACON_TYPE_SPAS)
                ) {
                  if ("xhr" === a.type) return n.add_event_resource(e), null;
                  if ("click" === a.type)
                    return (
                      (r.resource.lastClick = a.resource.timing.requestStart),
                      null
                    );
                  if (
                    BOOMR.utils.inArray(
                      a.type,
                      BOOMR.constants.BEACON_TYPE_SPAS
                    )
                  ) {
                    var c =
                        a.resource.timing.requestStart -
                        r.resource.timing.requestStart,
                      d = 500;
                    "spa_hard" !== r.type && l(r.resource, a.resource) && c < d
                      ? ((this.pending_events[o] = void 0), this.watch--)
                      : ((r.resource.timing.loadEventEnd = BOOMR.now()),
                        (r.aborted = !0),
                        this.sendEvent(o));
                  }
                }
              if ("click" === a.type) {
                if (!R.observer) return null;
                this.setTimeout(i.xhrIdleTimeout, s);
              } else
                "xhr" === a.type
                  ? (a.nodes_to_wait++, a.total_nodes++, (a.ignoreMO = !0))
                  : BOOMR.utils.inArray(
                      a.type,
                      BOOMR.constants.BEACON_TYPE_SPAS
                    ) &&
                    (R.start(),
                    e.wait
                      ? (a.nodes_to_wait++,
                        a.total_nodes++,
                        (e.waitComplete = function () {
                          u.load_finished(s), (e.waitComplete = void 0);
                        }))
                      : this.setTimeout(i.spaIdleTimeout, s));
              return (
                this.watch++, this.pending_events.push(a), (e.index = s), s
              );
            }),
            (R.prototype.sendEvent = function (e) {
              var n = this.pending_events[e],
                r = this;
              BOOMR.now();
              if (n && !n.complete)
                if ((this.clearTimeout(e), BOOMR.readyToSend())) {
                  if (
                    ((n.complete = !0),
                    (n.resource.complete = !0),
                    this.watch--,
                    BOOMR.utils.inArray(
                      n.type,
                      BOOMR.constants.BEACON_TYPE_SPAS
                    ) && (n.resource.url = t.URL),
                    "spa" === n.type &&
                      0 === n.total_nodes &&
                      n.resource.url === r.lastSpaLocation)
                  )
                    return (
                      BOOMR.fireEvent("spa_cancel"),
                      void (this.pending_events[e] = void 0)
                    );
                  if (
                    "click" === n.type &&
                    (0 === n.total_nodes || !n.resource.url)
                  )
                    return void (this.pending_events[e] = void 0);
                  if (
                    ("click" === n.type &&
                      i.singlePageApp &&
                      i.spaStartFromClick &&
                      (n.type = n.resource.initiator = "xhr"),
                    i.xhrRequireChanges &&
                      "xhr" === n.type &&
                      1 === n.total_nodes &&
                      ("undefined" === typeof n.interesting ||
                        0 === n.interesting) &&
                      !M(n.resource.url, i.alwaysSendXhr))
                  )
                    return void (this.pending_events[e] = void 0);
                  if (
                    BOOMR.utils.inArray(
                      n.type,
                      BOOMR.constants.BEACON_TYPE_SPAS
                    ) &&
                    ((r.lastSpaLocation = n.resource.url),
                    !n.forced &&
                      ("spa" === n.type &&
                        0 === n.total_nodes &&
                        (n.resource.timing.loadEventEnd =
                          n.resource.timing.requestStart + 1),
                      "spa_hard" === n.type))
                  ) {
                    var o = BOOMR.getPerformance();
                    o &&
                      o.timing &&
                      o.timing.loadEventEnd &&
                      n.resource.timing.loadEventEnd &&
                      n.resource.timing.loadEventEnd < o.timing.loadEventEnd &&
                      (n.resource.timing.loadEventEnd = o.timing.loadEventEnd);
                  }
                  this.sendResource(n.resource, e);
                } else
                  setTimeout(function () {
                    r.sendEvent(e);
                  }, p);
            }),
            (R.prototype.sendResource = function (n, r) {
              var i = this,
                o = i.pending_events[r],
                a = n.timing ? n.timing.requestStart : void 0,
                s = function (e, o) {
                  e && (n.timing.loadEventEnd = o || BOOMR.now()),
                    BOOMR.real_sendBeacon(),
                    n.onComplete && n.onComplete(n),
                    BOOMR.plugins.ResourceTiming &&
                      BOOMR.plugins.ResourceTiming.is_enabled() &&
                      n.timing &&
                      n.timing.requestStart &&
                      (n.restiming =
                        BOOMR.plugins.ResourceTiming.getCompressedResourceTiming(
                          n.timing.requestStart,
                          n.timing.loadEventEnd
                        )),
                    BOOMR.utils.inArray(
                      n.initiator,
                      BOOMR.constants.BEACON_TYPE_SPAS
                    ) &&
                      (i.calculateSpaTimings(n),
                      "number" === typeof r &&
                        i.pending_events[r].aborted &&
                        (BOOMR.addVar("pgu", t.URL, !0),
                        BOOMR.addVar("rt.quit", "", !0),
                        BOOMR.addVar("rt.abld", "", !0))),
                    BOOMR.responseEnd(n, a, n),
                    "number" === typeof r && (i.pending_events[r] = void 0);
                };
              "spa_hard" !== n.initiator ||
              (o && o.aborted) ||
              BOOMR.hasBrowserOnloadFired()
                ? s(!1)
                : BOOMR.utils.addListener(e, "load", function () {
                    var e = BOOMR.now();
                    BOOMR.setImmediate(function () {
                      s(!0, e);
                    });
                  });
            }),
            (R.prototype.calculateSpaTimings = function (e) {
              var t = BOOMR.getPerformance();
              if (t && t.timing) {
                if ("spa_hard" === e.initiator)
                  (e.timing.responseEnd = t.timing.responseStart),
                    (e.timing.fetchStart = t.timing.navigationStart);
                else {
                  if (
                    !BOOMR.plugins.ResourceTiming ||
                    !BOOMR.plugins.ResourceTiming.is_supported()
                  )
                    return;
                  var n =
                      BOOMR.plugins.ResourceTiming.getFilteredResourceTiming(
                        e.timing.requestStart,
                        e.timing.loadEventEnd,
                        i.spaBackEndResources
                      ).entries,
                    r = Math.round(
                      e.timing.loadEventEnd - e.timing.requestStart
                    );
                  if (!n || !n.length)
                    return void (e.timers = {
                      t_resp: 0,
                      t_page: r,
                      t_done: r,
                    });
                  for (
                    var o = e.timing.loadEventEnd - t.timing.navigationStart,
                      a = 0;
                    a < n.length;
                    a++
                  )
                    n[a].responseStart > o
                      ? ((n[a].responseStart = o), (n[a].responseEnd = o))
                      : n[a].responseEnd > o && (n[a].responseEnd = o);
                  var s = Math.round(
                      BOOMR.plugins.ResourceTiming.calculateResourceTimingUnion(
                        n
                      )
                    ),
                    u = r - s;
                  if (s < 0 || r < 0 || u < 0)
                    return void BOOMR.addError(
                      "Incorrect SPA time calculation"
                    );
                  e.timers = { t_resp: s, t_page: u, t_done: r };
                }
                var l = BOOMR.plugins.ResourceTiming.getFilteredResourceTiming(
                    e.timing.requestStart,
                    e.timing.loadEventEnd,
                    ["xmlhttprequest", "fetch"]
                  ).entries,
                  d = BOOMR.plugins.Continuity.getTTIWaitForXHRIngore();
                l = l.filter(function (e) {
                  return !c(d, e.name);
                });
                var f = e.timing.requestStart - t.timing.navigationStart;
                o = l.reduce(function (e, t) {
                  return t.responseEnd > e ? t.responseEnd : e;
                }, f);
                "spa" === e.initiator &&
                  (BOOMR.addVar("c.tti.xd.increasing", o), (o -= f)),
                  BOOMR.addVar("c.tti.xd", o);
              }
            }),
            (R.prototype.setTimeout = function (e, t) {
              var n = this;
              e &&
                (this.clearTimeout(t),
                (this.timer = setTimeout(function () {
                  n.timedout(t);
                }, e)));
            }),
            (R.prototype.timedout = function (e) {
              var t;
              if ((this.clearTimeout(e), (t = this.pending_events[e]), t)) {
                if (
                  BOOMR.utils.inArray(
                    t.type,
                    BOOMR.constants.BEACON_TYPE_SPAS
                  ) &&
                  !BOOMR.hasBrowserOnloadFired()
                )
                  return void this.setTimeout(i.spaIdleTimeout, e);
                0 === t.nodes_to_wait && this.sendEvent(e);
              }
            }),
            (R.prototype.clearTimeout = function (e) {
              this.timer &&
                e === this.pending_events.length - 1 &&
                (clearTimeout(this.timer), (this.timer = null));
            }),
            (R.prototype.load_cb = function (e, t) {
              var n,
                r,
                i = BOOMR.now();
              (n = e.target || e.srcElement),
                n &&
                  n._bmr &&
                  ((r = n._bmr.idx),
                  (t = "undefined" !== typeof t ? t : n._bmr.res || 0),
                  n._bmr.end[t] ||
                    ((n._bmr.end[t] = i), this.load_finished(r, i)));
            }),
            (R.prototype.monitorMO = function (e) {
              var t = this.pending_events[e];
              t && delete t.ignoreMO;
            }),
            (R.prototype.load_finished = function (e, t) {
              var r = this.pending_events[e];
              r &&
                (r.nodes_to_wait--,
                0 === r.nodes_to_wait &&
                  ((r.resource.timing.loadEventEnd = t || BOOMR.now()),
                  e === this.pending_events.length - 1
                    ? BOOMR.utils.inArray(
                        r.type,
                        BOOMR.constants.BEACON_TYPE_SPAS
                      )
                      ? (!r.firedEarlyBeacon &&
                          BOOMR.plugins.Early &&
                          BOOMR.plugins.Early.is_supported() &&
                          (this.timerEarlyBeacon &&
                            (clearTimeout(this.timerEarlyBeacon),
                            (this.timerEarlyBeacon = null)),
                          (this.timerEarlyBeacon = setTimeout(function () {
                            (n.timerEarlyBeacon = null),
                              r.firedEarlyBeacon ||
                                0 !== r.nodes_to_wait ||
                                ((r.firedEarlyBeacon = !0),
                                BOOMR.plugins.Early.sendEarlyBeacon(
                                  r.resource,
                                  r.type
                                ));
                          }, s))),
                        this.setTimeout(i.spaIdleTimeout, e))
                      : this.setTimeout(i.xhrIdleTimeout, e)
                    : this.sendEvent(e)));
            }),
            (R.prototype.wait_for_node = function (e, t) {
              var n,
                o,
                a,
                s,
                u,
                c,
                l,
                d,
                f,
                p = this,
                h = !1,
                m = !1;
              if (
                e &&
                e.nodeName &&
                (e.nodeName.toUpperCase().match(/^(IMG|IFRAME|IMAGE)$/) ||
                  ("LINK" === e.nodeName.toUpperCase() &&
                    e.rel &&
                    e.rel.match(/\bstylesheet\b/i)))
              ) {
                if (
                  (e._bmr &&
                    "number" === typeof e._bmr.res &&
                    e._bmr.end[e._bmr.res] &&
                    (m = !0),
                  (u =
                    e.src ||
                    ("function" === typeof e.getAttribute &&
                      e.getAttribute("xlink:href")) ||
                    e.href),
                  e._bmr && e._bmr.url !== u && (m = !0),
                  m &&
                    "function" === typeof e._bmr.listener &&
                    (p.load_cb({ target: e, type: "changed" }),
                    e.removeEventListener("load", e._bmr.listener),
                    e.removeEventListener("error", e._bmr.listener),
                    delete e._bmr.listener),
                  !u || u.match(/^(about:|javascript:|data:)/i))
                )
                  return !1;
                if ("IMG" === e.nodeName) {
                  if (e.naturalWidth && !m) return !1;
                  if (
                    "function" === typeof e.getAttribute &&
                    "" === e.getAttribute("src")
                  )
                    return !1;
                  if ("lazy" === e.loading) return !1;
                }
                if ("IFRAME" === e.nodeName && m) return !1;
                if (
                  ("function" === typeof e.getAttribute &&
                    ((l = parseInt(e.getAttribute("height"), 10)),
                    (d = parseInt(e.getAttribute("width"), 10))),
                  isNaN(l) &&
                    (l =
                      !e.style ||
                      ("0" !== e.style.height &&
                        "0px" !== e.style.height &&
                        "1px" !== e.style.height)
                        ? void 0
                        : 0),
                  isNaN(d) &&
                    (d =
                      !e.style ||
                      ("0" !== e.style.width &&
                        "0px" !== e.style.width &&
                        "1px" !== e.style.width)
                        ? void 0
                        : 0),
                  !isNaN(l) && l <= 1 && !isNaN(d) && d <= 1)
                )
                  return !1;
                if (0 === l || 0 === d) return !1;
                if (
                  e.style &&
                  ("none" === e.style.display ||
                    "hidden" === e.style.visibility ||
                    "0" === e.style.opacity)
                )
                  return !1;
                if (i.domExcludeFilter(e)) return !1;
                if (((n = this.pending_events[t]), !n)) return !1;
                if (
                  ((c = n.resources.length), n.urls || (n.urls = {}), n.urls[u])
                )
                  return !1;
                if (!n.resource.url) {
                  if (((r.href = u), i.xhrExcludeFilter(r))) return !1;
                  n.resource.url = r.href;
                }
                e._bmr || (e._bmr = { end: {} }),
                  (e._bmr.res = c),
                  (e._bmr.idx = t),
                  delete e._bmr.end[c],
                  (e._bmr.url = u),
                  (f = function (t) {
                    p.load_cb(t, c),
                      e.removeEventListener("load", f),
                      e.removeEventListener("error", f),
                      delete e._bmr.listener;
                  }),
                  (e._bmr.listener = f),
                  e.addEventListener("load", f),
                  e.addEventListener("error", f),
                  n.nodes_to_wait++,
                  this.clearTimeout(t),
                  n.total_nodes++,
                  n.resources.push(e),
                  (n.urls[u] = 1),
                  (h = !0);
              } else
                e.nodeType === Node.ELEMENT_NODE &&
                  ["IMAGE", "IMG"].forEach(function (n) {
                    if (((o = e.getElementsByTagName(n)), o && o.length))
                      for (a = 0, s = o.length; a < s; a++)
                        h |= this.wait_for_node(o[a], t);
                  }, this);
              return h;
            }),
            (R.prototype.add_event_resource = function (e) {
              var t,
                n = this.pending_events.length - 1;
              return n < 0
                ? -1
                : ((t = this.pending_events[n]),
                  t && e
                    ? (t.xhr_resources.push(e.url),
                      t.nodes_to_wait++,
                      t.total_nodes++,
                      (e.index = n),
                      (e.node = !0),
                      n)
                    : -1);
            }),
            (R.prototype.mutation_cb = function (e) {
              var t, n, r;
              return (
                !this.watch ||
                ((t = this),
                (n = this.pending_events.length - 1),
                n < 0 ||
                  !this.pending_events[n] ||
                  ((r = this.pending_events[n]),
                  r.ignoreMO ||
                    ("undefined" === typeof r.interesting &&
                      (r.interesting = !1),
                    e &&
                      e.length &&
                      ((r.resource.timing.domComplete = BOOMR.now()),
                      e.forEach(function (e) {
                        var i, o, a;
                        if ("attributes" === e.type)
                          r.interesting |= t.wait_for_node(e.target, n);
                        else if ("childList" === e.type) {
                          for (o = e.addedNodes.length, i = 0; i < o; i++)
                            r.interesting |= t.wait_for_node(
                              e.addedNodes[i],
                              n
                            );
                          for (o = e.removedNodes.length, i = 0; i < o; i++)
                            (a = e.removedNodes[i]),
                              "IFRAME" === a.nodeName &&
                                a._bmr &&
                                t.load_cb({ target: a, type: "removed" });
                        }
                      })),
                    r.interesting ||
                      r.timeoutExtended ||
                      (this.setTimeout(f, n), (r.timeoutExtended = !0))),
                  !0))
              );
            }),
            (R.prototype.queue_is_empty = function () {
              return 0 === this.nodesWaitingFor();
            }),
            (R.prototype.nodesWaitingFor = function (e) {
              var t;
              return 0 === this.pending_events.length
                ? 0
                : ("undefined" === typeof e &&
                    (e = this.pending_events.length - 1),
                  (t = this.pending_events[e]),
                  t ? t.nodes_to_wait : 0);
            }),
            (R.prototype.completeEvent = function (e) {
              var t,
                n = BOOMR.now();
              0 !== this.pending_events.length &&
                ("undefined" === typeof e &&
                  (e = this.pending_events.length - 1),
                (t = this.pending_events[e]),
                t &&
                  ((t.resource.timing.loadEventEnd = n),
                  (t.forced = !0),
                  this.sendEvent(e)));
            }),
            (n = new R()),
            (i = {
              spaBackEndResources: v,
              alwaysSendXhr: !1,
              xhrExcludeFilters: [],
              domExcludeFilters: [],
              initialized: !1,
              captureXhrRequestResponse: !1,
              singlePageApp: !1,
              spaStartFromClick: !1,
              autoXhrEnabled: !1,
              monitorFetch: !1,
              fetchBodyUsedWait: d,
              spaIdleTimeout: a,
              xhrIdleTimeout: u,
              xhrRequireChanges: !1,
              xhrExcludeFilter: function (e) {
                var t, n, r;
                if (!e || !e.href) return !1;
                for (t = 0; t < i.xhrExcludeFilters.length; t++)
                  if ("function" === typeof i.xhrExcludeFilters[t].cb) {
                    r = i.xhrExcludeFilters[t].ctx;
                    try {
                      if (((n = i.xhrExcludeFilters[t].cb.call(r, e)), n))
                        return !0;
                    } catch (o) {
                      BOOMR.addError(
                        o,
                        "BOOMR.plugins.AutoXHR.impl.xhrExcludeFilter()"
                      );
                    }
                  }
                return !1;
              },
              domExcludeFilter: function (e) {
                var t, n, r;
                for (t = 0; t < i.domExcludeFilters.length; t++)
                  if ("function" === typeof i.domExcludeFilters[t].cb) {
                    (r = i.domExcludeFilters[t].ctx),
                      i.domExcludeFilters[t].name;
                    try {
                      if (((n = i.domExcludeFilters[t].cb.call(r, e)), n))
                        return !0;
                    } catch (o) {
                      BOOMR.addError(
                        o,
                        "BOOMR.plugins.AutoXHR.impl.domExcludeFilter()"
                      );
                    }
                  }
                return !1;
              },
              loadFinished: function (e, t) {
                var r, o, a, s, u;
                (t = t || BOOMR.now()),
                  e.timing.loadEventEnd ||
                    (e.status && BOOMR.fireEvent("xhr_error", e),
                    (e.timing.loadEventEnd = t),
                    (u = BOOMR.getPerformance()),
                    u &&
                      u.timing &&
                      ((o = u.timing.navigationStart),
                      (r = BOOMR.getResourceTiming(
                        e.url,
                        function (e, t) {
                          return e.responseEnd - t.responseEnd;
                        },
                        function (t) {
                          return (
                            Math.ceil(o + t.startTime + 2) >=
                              e.timing.requestStart && 0 !== t.responseEnd
                          );
                        }
                      )),
                      r &&
                        ((a = Math.floor(o + r.startTime)),
                        (s = Math.floor(o + r.responseEnd)),
                        s <= BOOMR.now() &&
                          ((e.timing.responseEnd = s),
                          e.timing.loadEventEnd < s &&
                            (e.timing.loadEventEnd = s),
                          (e.fromClick && e.timing.requestStart) ||
                            (e.timing.requestStart = a),
                          (e.timing.fetchStart = a),
                          0 !== r.responseStart &&
                            (e.timing.responseStart = Math.floor(
                              o + r.responseStart
                            )),
                          (e.restiming = r)))),
                    e.node && M(e.url, i.alwaysSendXhr) && n.sendResource(e),
                    e.index >= 0 &&
                      (n.monitorMO(e.index),
                      n.load_finished(e.index, e.timing.responseEnd)));
              },
            }),
            (BOOMR.plugins.AutoXHR = {
              is_complete: function () {
                return !0;
              },
              init: function (n) {
                var o, a;
                if (((t = e.document), e && t)) {
                  if (
                    ((r = t.createElement("A")),
                    BOOMR.utils.pluginConfig(i, n, "AutoXHR", [
                      "spaBackEndResources",
                      "alwaysSendXhr",
                      "monitorFetch",
                      "fetchBodyUsedWait",
                      "spaIdleTimeout",
                      "xhrIdleTimeout",
                      "xhrRequireChanges",
                      "spaStartFromClick",
                    ]),
                    (BOOMR.instrumentXHR = S),
                    (BOOMR.uninstrumentXHR = E),
                    (BOOMR.instrumentFetch = B),
                    (BOOMR.uninstrumentFetch = w),
                    i.initialized ||
                      (this.addExcludeFilter(_, null, "shouldExcludeXhr"),
                      (i.initialized = !0)),
                    n &&
                      n.AutoXHR &&
                      n.AutoXHR.excludeFilters &&
                      n.AutoXHR.excludeFilters.length > 0)
                  )
                    for (a = 0; a < n.AutoXHR.excludeFilters.length; a++)
                      "function" === typeof n.AutoXHR.excludeFilters[a]
                        ? i.xhrExcludeFilters.push({
                            cb: n.AutoXHR.excludeFilters[a],
                            ctx: this,
                            name: "unknown XHR filter",
                          })
                        : i.xhrExcludeFilters.push(n.AutoXHR.excludeFilters[a]);
                  if (
                    n &&
                    n.AutoXHR &&
                    n.AutoXHR.domExcludeFilters &&
                    n.AutoXHR.domExcludeFilters.length > 0
                  )
                    for (a = 0; a < n.AutoXHR.domExcludeFilters.length; a++)
                      "function" === typeof n.AutoXHR.domExcludeFilters[a]
                        ? i.domExcludeFilters.push({
                            cb: n.AutoXHR.domExcludeFilters[a],
                            ctx: this,
                            name: "unknown DOM filter",
                          })
                        : i.domExcludeFilters.push(
                            n.AutoXHR.domExcludeFilters[a]
                          );
                  if (
                    ((i.autoXhrEnabled = n.instrument_xhr),
                    (i.monitorFetch = n.monitor_fetch),
                    (i.singlePageApp =
                      BOOMR.plugins.SPA &&
                      BOOMR.plugins.SPA.isSinglePageApp(n)),
                    i.alwaysSendXhr &&
                      i.autoXhrEnabled &&
                      BOOMR.xhr &&
                      "function" === typeof BOOMR.xhr.stop)
                  ) {
                    function s(e) {
                      if (e.length) for (o = 0; o < e.length; o++) T(e[o]);
                      else T(e);
                    }
                    var u = BOOMR.xhr.stop(s);
                    u && u.length && BOOMR.setImmediate(s, u);
                  }
                  i.singlePageApp
                    ? (i.alwaysSendXhr || (i.autoXhrEnabled = !1),
                      i.autoXhrEnabled &&
                        (BOOMR.instrumentXHR(), BOOMR.instrumentFetch()))
                    : i.autoXhrEnabled
                    ? (BOOMR.instrumentXHR(), BOOMR.instrumentFetch())
                    : !1 === i.autoXhrEnabled &&
                      (BOOMR.uninstrumentXHR(), BOOMR.uninstrumentFetch()),
                    BOOMR.registerEvent("xhr_error");
                }
              },
              getMutationHandler: function () {
                return n;
              },
              getPathname: y,
              enableAutoXhr: function () {
                i.autoXhrEnabled ||
                  (BOOMR.instrumentXHR(), BOOMR.instrumentFetch()),
                  (i.autoXhrEnabled = !0);
              },
              addExcludeFilter: function (e, t, n) {
                i.xhrExcludeFilters.push({ cb: e, ctx: t, name: n });
              },
              addDomExcludeFilter: function (e, t, n) {
                i.domExcludeFilters.push({ cb: e, ctx: t, name: n });
              },
              setXhrRequestResponseCapturing: function (e) {
                i.captureXhrRequestResponse = e;
              },
              matchesAlwaysSendXhr: M,
            })));
      }
      function m() {
        var e;
        if (!BOOMR.plugins.Continuity) {
          var t = 100,
            n = 6e4,
            r = 500,
            i = 0,
            a = 1,
            s = 2,
            u = 0,
            c = 1,
            l = 2,
            d = 3,
            f = 4,
            p = 5,
            h =
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_",
            m = ".",
            g = { passive: !0, capture: !0 },
            O = BOOMR.getPerformance(),
            v = 1,
            y = 2,
            _ = {},
            R =
              O && O.timing && O.timing.navigationStart
                ? O.timing.navigationStart
                : BOOMR.now(),
            b = function (n) {
              var r = 5,
                o = 20,
                a = o / (1e3 / t),
                s = 50,
                u = {},
                c = {},
                l = [],
                d = 0,
                f = 0,
                p = 0,
                h = !0;
              function m(e, t, n) {
                u[e] || (u[e] = []),
                  (c[e] = { compressMode: t || i, backfillLast: n });
              }
              function g() {
                return Math.floor((BOOMR.now() - n) / t);
              }
              function v(e, t, n) {
                "undefined" === typeof n && (n = g()), u[e] && (u[e][n] = t);
              }
              function y(e, t, n) {
                "undefined" === typeof n && (n = g()),
                  "undefined" === typeof t && (t = 1),
                  u[e] && (u[e][n] || (u[e][n] = 0), (u[e][n] += t));
              }
              function b(t, n, r) {
                "undefined" === typeof n && (n = g()),
                  l.push({ type: t, time: n, val: r }),
                  l.length > e.logMaxEntries &&
                    Array.prototype.splice.call(
                      l,
                      0,
                      l.length - e.logMaxEntries
                    );
              }
              function M(e, r) {
                var i,
                  o = 0,
                  a = 0,
                  s = 1 / 0,
                  c = 0,
                  l = Math.floor((r - n) / t);
                if (!u[e]) return 0;
                for (var d in u[e])
                  (d = parseInt(d, 10)),
                    d >= l &&
                      u[e].hasOwnProperty(d) &&
                      ((i = u[e][d]),
                      o++,
                      (a += i),
                      (s = Math.min(s, i)),
                      (c = Math.max(c, i)));
                return { total: a, count: o, min: s, max: c };
              }
              function B(e) {
                var t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s = 0;
                if (
                  !BOOMR.window ||
                  !BOOMR.window.document ||
                  "function" !== typeof BOOMR.window.document.querySelectorAll
                )
                  return 0;
                if (!O || "function" !== typeof O.getEntriesByType) return 0;
                if (
                  ((t = e + ", " + e + " * img, " + e + " * image"),
                  (n = BOOMR.window.document.querySelectorAll(t)),
                  n && n.length)
                )
                  for (r = 0; r < n.length; r++) {
                    if (
                      ((o =
                        n[r].currentSrc ||
                        n[r].src ||
                        ("function" === typeof n[r].getAttribute &&
                          n[r].getAttribute("xlink:href"))),
                      !o && "function" === typeof BOOMR.window.getComputedStyle)
                    ) {
                      var u =
                        BOOMR.window.getComputedStyle(n[r]) &&
                        BOOMR.window
                          .getComputedStyle(n[r])
                          .getPropertyValue("background");
                      if (u) {
                        var c = u.match(/url\(["']?([^"']*)["']?\)/);
                        c && c.length > 0 && (o = c[1]);
                      }
                    }
                    if (o && ((a = O.getEntriesByName(o)), a && a.length))
                      for (i = 0; i < a.length; i++)
                        s = Math.max(s, a[i].responseEnd);
                  }
                return s ? Math.floor(s + R) : 0;
              }
              function w() {
                var t = 0;
                if (e.ttiWaitForFrameworkReady) {
                  if (!e.frameworkReady) return;
                  t = e.frameworkReady;
                }
                if (
                  BOOMR.plugins.PaintTiming &&
                  BOOMR.plugins.PaintTiming.is_supported() &&
                  O &&
                  O.timeOrigin
                ) {
                  var n = BOOMR.plugins.PaintTiming.getTimingFor(
                    "largest-contentful-paint"
                  );
                  n ||
                    (n = BOOMR.plugins.PaintTiming.getTimingFor(
                      "first-contentful-paint"
                    )),
                    n ||
                      (n =
                        BOOMR.plugins.PaintTiming.getTimingFor("first-paint")),
                    n && (t = Math.max(t, Math.round(n + O.timeOrigin)));
                } else if (O && O.timing && O.timing.msFirstPaint)
                  t = Math.max(t, O.timing.msFirstPaint);
                else if (
                  BOOMR.window &&
                  BOOMR.window.chrome &&
                  "function" === typeof BOOMR.window.chrome.loadTimes
                ) {
                  var r = BOOMR.window.chrome.loadTimes();
                  r &&
                    r.firstPaintTime &&
                    (t = Math.max(t, 1e3 * r.firstPaintTime));
                }
                return (
                  O &&
                    O.timing &&
                    O.timing.domContentLoadedEventEnd &&
                    (t = Math.max(t, O.timing.domContentLoadedEventEnd)),
                  e.ttiWaitForHeroImages &&
                    ((p = B(e.ttiWaitForHeroImages)),
                    p && (t = Math.max(t, p))),
                  t
                );
              }
              function S() {
                for (var t = "", n = 0; n < l.length; n++) {
                  var r = l[n];
                  for (var i in (0 !== n && (t += "|"),
                  (t += r.type),
                  (t += Math.round(r.time - R).toString(36)),
                  r.val))
                    r.val.hasOwnProperty(i) &&
                      ((t += "," + i),
                      "number" === typeof r.val[i]
                        ? (t += r.val[i].toString(36))
                        : (t += r.val[i]));
                }
                "" !== t && e.addToBeacon("c.l", t);
              }
              function E(e, r) {
                return U(
                  c[e].compressMode,
                  c[e].backfillLast,
                  u[e],
                  0 !== r ? Math.floor((r - n) / t) : 0,
                  g()
                );
              }
              function T(t) {
                var n, r;
                for (n in u)
                  u.hasOwnProperty(n) &&
                    ((r = E(n, t)), "" !== r && e.addToBeacon("c.t." + n, r));
              }
              function x(i) {
                var o = g(),
                  c = 0,
                  l = 0;
                if (
                  (e.sendLog && "undefined" !== typeof i && S(),
                  e.sendTimeline && "undefined" !== typeof i)
                ) {
                  var p = i ? Math.max(i, BOOMR.now() - 12e4) : i;
                  T(p);
                }
                if (!d) {
                  if (!f && ((f = w()), !f)) return;
                  if (
                    (h &&
                      (e.addToBeacon("c.tti.vr", _.timeToVisuallyReady()),
                      e.addToBeacon("c.tti.fr", _.timeToFrameworkReady()),
                      e.addToBeacon("c.tti.hi", _.timeToHeroImagesReady()),
                      (h = !1)),
                    !u.longtask && !u.fps && !u.busy)
                  )
                    return;
                  var m = Math.floor((f - n) / t);
                  for (c = m; c <= o; c++)
                    if (u.longtask && u.longtask[c]) l = 0;
                    else if (u.fps && (!u.fps[c] || u.fps[c] < a)) l = 0;
                    else if (u.busy && u.busy[c] > s) l = 0;
                    else if (u.interdly && u.interdly[c]) l = 0;
                    else if ((l++, l >= r)) {
                      (d = n + (c - r) * t), (d = Math.max(d, f));
                      break;
                    }
                  d > 0 && e.addToBeacon("c.tti", _.timeToInteractive());
                }
                k();
              }
              function k(i) {
                function o(e) {
                  return i ? BOOMR.getPendingVar(e) : BOOMR.getVar(e);
                }
                if (
                  e.ttiWaitForXHRDone &&
                  BOOMR.utils.inArray(
                    o("http.initiator"),
                    BOOMR.constants.BEACON_TYPE_SPAS
                  )
                ) {
                  var c = o("c.tti.xd"),
                    l = 0,
                    d = "spa" === o("http.initiator");
                  d &&
                    ((l = o("rt.tstart") - R), (c = o("c.tti.xd.increasing")));
                  var f = c ? c - (n - R) : d ? l : n - R,
                    p = g(),
                    h = 0,
                    m = 0,
                    O = 0,
                    v = Math.floor(f / t);
                  for (h = v; h <= p; h++) {
                    if (!i) {
                      if (u.longtask && u.longtask[h]) {
                        m = 0;
                        continue;
                      }
                      if (u.fps && (!u.fps[h] || u.fps[h] < a)) {
                        m = 0;
                        continue;
                      }
                      if (u.busy && u.busy[h] > s) {
                        m = 0;
                        continue;
                      }
                      if (u.interdly && u.interdly[h]) {
                        m = 0;
                        continue;
                      }
                    }
                    if ((m++, m >= r)) {
                      (O = n + (h - r) * t - l),
                        (O = Math.max(O - R, o("c.tti.xd")));
                      break;
                    }
                  }
                  return O > 0
                    ? (!i && e.addToBeacon("c.tti.new", O),
                      (e.hasAddedTtinewToBeacon = !0),
                      O)
                    : ((e.hasAddedTtinewToBeacon = !1), 0);
                }
              }
              function P() {
                (u = {}), (l = []);
              }
              function A() {
                for (var e in u) u.hasOwnProperty(e) && (u[e] = []);
                (l = []), (h = !1);
              }
              return (
                BOOMR.fpsLog &&
                  BOOMR.fpsLog.length &&
                  (n = BOOMR.fpsLog[0] + R),
                (_.timeToInteractive = function () {
                  if (d) return d - R;
                }),
                (_.timeToVisuallyReady = function () {
                  if (f) return f - R;
                }),
                (_.timeToHeroImagesReady = function () {
                  if (e.ttiWaitForHeroImages && p) return p - R;
                }),
                (_.timeToFrameworkReady = function () {
                  if (e.ttiWaitForFrameworkReady && e.frameworkReady)
                    return e.frameworkReady - R;
                }),
                (_.log = function () {
                  return l;
                }),
                {
                  register: m,
                  set: v,
                  log: b,
                  increment: y,
                  getTimeBucket: g,
                  getStats: M,
                  analyze: x,
                  analyzeXHRDone: k,
                  stop: P,
                  onBeacon: A,
                }
              );
            },
            M = function (t) {
              if (t.PerformanceObserver && t.LayoutShift) {
                var n = !0,
                  r = 0,
                  i = 0,
                  o = [],
                  a = new t.PerformanceObserver(s);
                try {
                  a.observe({ type: "layout-shift", buffered: !0 });
                } catch (f) {
                  return;
                }
                return (
                  (_.clsScore = function () {
                    return r;
                  }),
                  { clearClsScore: c, analyze: u, stop: l, onBeacon: d }
                );
              }
              function s(e) {
                var t;
                n &&
                  ((t = e.getEntries()),
                  t.map(function (e) {
                    if (!e.hadRecentInput) {
                      var t = o[0],
                        n = o[o.length - 1];
                      i &&
                      e.startTime - n.startTime < 1e3 &&
                      e.startTime - t.startTime < 5e3
                        ? ((i += e.value), o.push(e))
                        : ((i = e.value), (o = [e])),
                        i > r && (r = i);
                    }
                  }));
              }
              function u(t) {
                e.addToBeacon("c.cls", _.clsScore());
              }
              function c() {
                r = 0;
              }
              function l() {
                (n = !1), a.disconnect(), c();
              }
              function d() {
                c();
              }
            },
            B = function (n, r) {
              if (n.PerformanceObserver && n.PerformanceLongTaskTiming) {
                var o = {
                    unknown: 0,
                    self: 1,
                    "same-origin-ancestor": 2,
                    "same-origin-descendant": 3,
                    "same-origin": 4,
                    "cross-origin-ancestor": 5,
                    "cross-origin-descendant": 6,
                    "cross-origin-unreachable": 7,
                    "multiple-contexts": 8,
                  },
                  a = { unknown: 0, script: 1, layout: 2 },
                  s = { unknown: 0, iframe: 1, embed: 2, object: 3 },
                  u = new n.PerformanceObserver(f);
                try {
                  u.observe({ entryTypes: ["longtask"] });
                } catch (v) {
                  return;
                }
                r.register("longtask", i);
                var c = [],
                  l = !0,
                  d = 0;
                return (
                  (_.longTasksTime = function () {
                    return d;
                  }),
                  (_.longTasksCount = function () {
                    return c.length;
                  }),
                  {
                    getTasks: p,
                    clearTasks: h,
                    analyze: m,
                    stop: g,
                    onBeacon: O,
                  }
                );
              }
              function f(e) {
                var n,
                  i,
                  o = {};
                if (l) {
                  (n = e.getEntries()), Array.prototype.push.apply(c, n);
                  var a = r.getTimeBucket();
                  for (i = 0; i < n.length; i++) {
                    var s = n[i].duration;
                    d += s;
                    var u = a;
                    s -= t;
                    while (s > 0 && u >= 0)
                      u--, o[u] ? o[u]++ : (o[u] = 1), (s -= t);
                  }
                  for (var f in o)
                    o.hasOwnProperty(f) && r.increment("longtask", o[f], f);
                  r.increment("longtask", n.length);
                }
              }
              function p() {
                return c;
              }
              function h() {
                (c = []), (d = 0);
              }
              function m(t) {
                var n,
                  r,
                  i,
                  u,
                  l,
                  d = [],
                  f = [];
                if (0 !== c.length) {
                  for (n = 0; n < c.length; n++) {
                    for (
                      i = c[n],
                        u = {
                          s: Math.round(i.startTime).toString(36),
                          d: Math.ceil(i.duration).toString(36),
                          n: o[i.name] ? o[i.name] : 0,
                        },
                        f = [],
                        r = 0;
                      r < i.attribution.length;
                      r++
                    )
                      if (
                        ((l = i.attribution[r]),
                        "script" !== l.name ||
                          "iframe" !== l.containerType ||
                          l.containerName ||
                          l.containerId ||
                          l.containerSrc)
                      ) {
                        var p = l.containerName ? l.containerName : void 0,
                          h = l.containerId ? l.containerId : void 0;
                        p === h && (p = void 0);
                        var m = void 0 === h ? l.containerSrc : void 0;
                        f.push({
                          a: a[l.name] ? a[l.name] : 0,
                          t: s[l.containerType] ? s[l.containerType] : 0,
                          n: p,
                          i: h,
                          s: m,
                        });
                      }
                    f.length > 0 && (u.a = f), d.push(u);
                  }
                  e.addToBeacon("c.lt.n", _.longTasksCount(), !0),
                    e.addToBeacon("c.lt.tt", _.longTasksTime()),
                    e.addToBeacon("c.lt", N(d));
                }
              }
              function g() {
                (l = !1), u.disconnect(), h();
              }
              function O() {
                h();
              }
            },
            w = function (t, n) {
              n.register("busy", s);
              var r = 32,
                i = 4,
                o = 100,
                a = Math.floor(o / r),
                u = 100,
                c = BOOMR.now(),
                l = 0,
                d = 0,
                f = 0,
                p = 0,
                h = !1,
                m = !1;
              function g() {
                var e = BOOMR.now(),
                  t = e - c;
                if (((c = e), t > 2 * r + i)) {
                  var n = Math.floor((t - r) / r);
                  (l += n), (d += n), (t -= n * r);
                }
                l++, t > r + i && d++;
              }
              function O() {
                var e = n.getTimeBucket(),
                  t = e,
                  r = 0;
                if (0 !== l) {
                  while (l > a + 1 && r <= u)
                    n.set("busy", 100, --t),
                      (l -= a),
                      (d = Math.max(d - a, 0)),
                      (f += a),
                      (p += a),
                      r++;
                  (f += l),
                    (p += d),
                    n.set("busy", Math.ceil((d / l) * 100), e),
                    (l = 0),
                    (d = 0);
                }
              }
              function v(t) {
                e.addToBeacon("c.b", _.pageBusy());
              }
              function y() {
                h && (clearInterval(h), (h = !1)),
                  m && (clearInterval(m), (m = !1));
              }
              function R() {
                (f = 0), (p = 0);
              }
              return (
                (_.pageBusy = function () {
                  return 0 === f ? 0 : Math.ceil((p / f) * 100);
                }),
                (h = setInterval(g, r)),
                (m = setInterval(O, o)),
                { analyze: v, stop: y, onBeacon: R }
              );
            },
            S = function (n, r) {
              r.register("fps", i);
              var o,
                a,
                s = 50,
                u = 0,
                c = 0,
                l = !0;
              if (BOOMR.fpsLog && BOOMR.fpsLog.length) {
                a = o = BOOMR.fpsLog[0] + R;
                for (var d = 0; d < BOOMR.fpsLog.length; d++) {
                  var f = R + BOOMR.fpsLog[d];
                  r.increment("fps", 1, Math.floor((f - o) / t)),
                    f - a >= s && c++,
                    (a = f);
                }
                (u = BOOMR.fpsLog.length), delete BOOMR.fpsLog;
              } else o = BOOMR.now();
              function p(e) {
                l &&
                  (e - a >= s && c++,
                  (a = e),
                  u++,
                  r.increment("fps"),
                  n.requestAnimationFrame(p));
              }
              function h(t) {
                e.addToBeacon("c.f", _.fps()),
                  e.addToBeacon("c.f.d", _.fpsDuration()),
                  e.addToBeacon("c.f.m", _.fpsMinimum()),
                  e.addToBeacon("c.f.l", _.fpsLongFrames()),
                  e.addToBeacon("c.f.s", _.fpsStart());
              }
              function m() {
                (l = !1), (o = 0);
              }
              function g() {
                l && (o = BOOMR.now()), (u = 0), (c = 0);
              }
              return (
                n.requestAnimationFrame(p),
                (_.fps = function () {
                  var e = _.fpsDuration();
                  if (e) return Math.floor(u / (e / 1e3));
                }),
                (_.fpsDuration = function () {
                  if (o) return BOOMR.now() - o;
                }),
                (_.fpsMinimum = function () {
                  var e = _.fpsDuration();
                  if (e) {
                    var t = r.getStats("fps", o).min;
                    return t !== 1 / 0 ? t : void 0;
                  }
                }),
                (_.fpsLongFrames = function () {
                  return c;
                }),
                (_.fpsStart = function () {
                  return o ? o.toString(36) : 0;
                }),
                { analyze: h, stop: m, onBeacon: g }
              );
            },
            E = function (n, r, o) {
              if (
                n &&
                n.document &&
                n.document.body &&
                n.document.documentElement
              ) {
                var a = 2e3,
                  c = 20,
                  l = 0,
                  d = 0,
                  f = 0,
                  p = 0,
                  h = 0,
                  m = 0,
                  O = 0,
                  v = 0,
                  y = !1,
                  R = n.document.body,
                  b = n.document.documentElement;
                r.register("scroll", i), r.register("scrollpct", s);
                var M =
                  Math.max(
                    R.scrollHeight,
                    R.offsetHeight,
                    b.clientHeight,
                    b.scrollHeight,
                    b.offsetHeight
                  ) - BOOMR.utils.windowHeight();
                return (
                  (_.scrollPct = function () {
                    return p;
                  }),
                  (_.scrollCount = function () {
                    return h;
                  }),
                  (_.scrollDistinct = function () {
                    return O;
                  }),
                  (_.scrollPixels = function () {
                    return m;
                  }),
                  BOOMR.utils.addListener(n, "scroll", B, g),
                  (y = setInterval(w, t)),
                  { analyze: S, stop: E, onBeacon: T }
                );
              }
              function B(e) {
                var t = BOOMR.now();
                h++, t - v > a && O++, (v = t);
                var n = Math.ceil(BOOMR.utils.scroll().y),
                  i = Math.abs(l - n);
                (m += i),
                  r.increment("scroll", i),
                  (0 === d || Math.abs(d - n) > c) &&
                    (r.log(u, t, { y: n }), (d = n)),
                  (f += Math.round((i / M) * 100)),
                  (p += Math.round((i / M) * 100)),
                  (l = n);
              }
              function w() {
                var e = Math.min(f, 100);
                0 !== e && r.set("scrollpct", e), (f = 0);
              }
              function S(t) {
                e.addToBeacon("c.s", _.scrollCount()),
                  e.addToBeacon("c.s.p", _.scrollPct()),
                  e.addToBeacon("c.s.y", _.scrollPixels()),
                  e.addToBeacon("c.s.d", _.scrollDistinct());
              }
              function E() {
                y && (clearInterval(y), (y = !1)),
                  BOOMR.utils.removeListener(n, "scroll", B);
              }
              function T() {
                (p = 0), (h = 0), (m = 0), (O = 0);
              }
            },
            T = function (t, n, r) {
              n.register("click", i);
              var o = 10,
                a = 3,
                s = 0,
                u = 0,
                l = 0,
                d = 0,
                f = 0,
                p = null;
              function h(e) {
                var t = BOOMR.now(),
                  i = e.clientX,
                  h = e.clientY;
                s++;
                var m = Math.round(
                  Math.sqrt(Math.pow(f - h, 2) + Math.pow(d - i, 2))
                );
                p === e.target || m <= o
                  ? (u++, u + 1 >= a && (l++, BOOMR.fireEvent("rage_click", e)))
                  : (u = 0),
                  (d = i),
                  (f = h),
                  (p = e.target),
                  n.increment("click"),
                  n.log(c, t, { x: i, y: h }),
                  e.cancelable && r.interact("click", t, e);
              }
              function m(t) {
                e.addToBeacon("c.c", _.clicksCount()),
                  e.addToBeacon("c.c.r", _.clicksRage());
              }
              function O() {
                BOOMR.utils.removeListener(t.document, "click", h);
              }
              function v() {
                (s = 0), (u = 0), (l = 0);
              }
              return (
                (_.clicksCount = function () {
                  return s;
                }),
                (_.clicksRage = function () {
                  return l;
                }),
                BOOMR.utils.addListener(t.document, "click", h, g),
                { analyze: m, stop: O, onBeacon: v }
              );
            },
            x = function (t, n, r) {
              n.register("key", i);
              var o = 0,
                a = 0;
              function s(e) {
                var t = BOOMR.now();
                o++,
                  27 === e.keyCode && a++,
                  n.increment("key"),
                  n.log(d, t),
                  e.cancelable && r.interact("key", t, e);
              }
              function u(t) {
                e.addToBeacon("c.k", _.keyCount()),
                  e.addToBeacon("c.k.e", _.keyEscapes());
              }
              function c() {
                BOOMR.utils.removeListener(t.document, "keydown", s);
              }
              function l() {
                (o = 0), (a = 0);
              }
              return (
                (_.keyCount = function () {
                  return o;
                }),
                (_.keyEscapes = function () {
                  return a;
                }),
                BOOMR.utils.addListener(t.document, "keydown", s, g),
                { analyze: u, stop: c, onBeacon: l }
              );
            },
            k = function (n, r, o) {
              r.register("mouse", i), r.register("mousepct", s);
              var a = 10,
                u = 250,
                c = 0,
                d = 0,
                f = 0,
                p = 0,
                h = 0,
                m = 0,
                O = 0,
                v = !1,
                y = !1,
                R = Math.round(
                  Math.sqrt(
                    Math.pow(BOOMR.utils.windowHeight(), 2) +
                      Math.pow(BOOMR.utils.windowWidth(), 2)
                  )
                );
              function b(e) {
                var t = e.clientX,
                  n = e.clientY,
                  i = Math.round(
                    Math.sqrt(Math.pow(d - n, 2) + Math.pow(c - t, 2))
                  ),
                  o = Math.round((i / R) * 100);
                (h += o),
                  (m += o),
                  (O += i),
                  (c = t),
                  (d = n),
                  r.increment("mouse", i);
              }
              function M() {
                var e = Math.min(h, 100);
                0 !== e && r.set("mousepct", e), (h = 0);
              }
              function B() {
                if (f !== c || p !== d) {
                  var e = Math.round(
                    Math.sqrt(Math.pow(p - d, 2) + Math.pow(f - c, 2))
                  );
                  e >= a &&
                    (r.log(l, BOOMR.now(), { x: c, y: d }), (f = c), (p = d));
                }
              }
              function w(t) {
                e.addToBeacon("c.m.p", _.mousePct()),
                  e.addToBeacon("c.m.n", _.mousePixels());
              }
              function S() {
                v && (clearInterval(v), (v = !1)),
                  y && (clearInterval(y), (y = !1)),
                  BOOMR.utils.removeListener(n.document, "mousemove", b);
              }
              function E() {
                (m = 0), (O = 0);
              }
              return (
                (_.mousePct = function () {
                  return m;
                }),
                (_.mousePixels = function () {
                  return O;
                }),
                (v = setInterval(M, t)),
                (y = setInterval(B, u)),
                BOOMR.utils.addListener(n.document, "mousemove", b, g),
                { analyze: w, stop: S, onBeacon: E }
              );
            },
            P = function (t, n, r) {
              n.register("inter", i), n.register("interdly", i);
              var o = 50,
                a = r,
                s = 3e4,
                u = 0,
                c = null,
                l = 0,
                d = 0,
                f = 0,
                p = 0,
                h = !0,
                m = 0,
                g = 0,
                O = !1,
                v = !1,
                y = !1,
                b = !1;
              function M(r, i, _) {
                var b = 0;
                (i = i || BOOMR.now()),
                  h &&
                    (l++,
                    u || (u = _ && _.timeStamp ? _.timeStamp + R : i),
                    !_ ||
                      !_.timeStamp ||
                      (e.isSafari && t !== window) ||
                      ((b =
                        _.timeStamp > 14e11
                          ? i - _.timeStamp
                          : BOOMR.hrNow() - _.timeStamp),
                      (d += b),
                      null === c && (c = Math.ceil(b)),
                      b > o && (n.increment("interdly"), f++, (p += b))),
                    n.increment("inter"),
                    !y &&
                      e.afterOnloadMonitoring &&
                      ((g = BOOMR.now()),
                      m || ((m = g), (v = setTimeout(S, s))),
                      O && (clearTimeout(O), (O = !1)),
                      (O = setTimeout(S, a))));
              }
              function B() {
                (y = !0), w();
              }
              function w() {
                O && (clearTimeout(O), (O = !1)),
                  v && (clearTimeout(v), (v = !1));
              }
              function S() {
                BOOMR.sendBeaconWhenReady(
                  {
                    "rt.start": "manual",
                    "http.initiator": "interaction",
                    "rt.tstart": m,
                    "rt.end": g,
                  },
                  function () {
                    w(), BOOMR.fireEvent("interaction");
                  },
                  e
                );
              }
              function E(t) {
                var n;
                e.addToBeacon("c.i.dc", _.interactionDelayed()),
                  e.addToBeacon("c.i.dt", _.interactionDelayedTime()),
                  e.addToBeacon("c.i.a", _.interactionAvgDelay()),
                  b ||
                    (BOOMR.plugins.EventTiming &&
                      BOOMR.plugins.EventTiming.is_enabled() &&
                      (n = BOOMR.plugins.EventTiming.metrics.firstInputDelay()),
                    n || null === c || (n = _.firstInputDelay()),
                    n &&
                      (e.addToBeacon("c.fid", Math.ceil(n), !0),
                      e.addToBeacon(
                        "c.ttfi",
                        BOOMR.plugins.EventTiming.metrics.timeToFirstInteraction() ||
                          _.timeToFirstInteraction()
                      ),
                      (b = !0)));
              }
              function T() {
                h = !1;
              }
              function x() {
                (p = 0),
                  (f = 0),
                  (l = 0),
                  (d = 0),
                  (m = 0),
                  (g = 0),
                  (y = !1),
                  w();
              }
              return (
                (_.interactionDelayed = function () {
                  return f;
                }),
                (_.interactionDelayedTime = function () {
                  return Math.ceil(p);
                }),
                (_.interactionAvgDelay = function () {
                  if (l > 0) return Math.ceil(d / l);
                }),
                (_.timeToFirstInteraction = function () {
                  if (u) return u - R;
                }),
                (_.firstInputDelay = function () {
                  if (null !== c) return c;
                }),
                BOOMR.subscribe("spa_init", B, null, e),
                { interact: M, analyze: E, stop: T, onBeacon: x }
              );
            },
            A = function (e, t, n) {
              var r,
                i,
                o = !0;
              function a() {
                o &&
                  (n.interact("pd", r, i),
                  (r = null),
                  (i = null),
                  BOOMR.utils.removeListener(window, "pointerup", a));
              }
              function s(e) {
                o &&
                  e.cancelable &&
                  ((r = BOOMR.now()),
                  (i = e),
                  BOOMR.utils.addListener(window, "pointerup", a, g));
              }
              function u() {
                (o = !1),
                  BOOMR.utils.removeListener(window, "pointerdown", s),
                  BOOMR.utils.removeListener(window, "pointerup", a),
                  BOOMR.utils.removeListener(window, "pointercancel", u);
              }
              return (
                BOOMR.utils.addListener(window, "pointerdown", s, g),
                BOOMR.utils.addListener(window, "pointercancel", u, g),
                { stop: u }
              );
            },
            C = function (e, t, n) {
              var r = !0;
              function i(e) {
                if (r && e.cancelable) {
                  var t = BOOMR.now();
                  n.interact("md", t, e);
                }
              }
              function o() {
                (r = !1), BOOMR.utils.removeListener(window, "mousedown", i);
              }
              return (
                BOOMR.utils.addListener(window, "mousedown", i, g), { stop: o }
              );
            },
            L = function (e, t, n) {
              var r = !0;
              function i(e) {
                if (r && e.cancelable) {
                  var t = BOOMR.now();
                  n.interact("ts", t, e);
                }
              }
              function o() {
                (r = !1), BOOMR.utils.removeListener(window, "touchstart", i);
              }
              return (
                BOOMR.utils.addListener(window, "touchstart", i, g), { stop: o }
              );
            },
            I = function (e, t, n) {
              t.register("vis", i);
              var r = { visible: 0, hidden: 1, prerender: 2, unloaded: 3 },
                o = !0;
              function a() {
                o = !1;
              }
              return (
                BOOMR.subscribe("visibility_changed", function (e) {
                  var n = BOOMR.now();
                  o &&
                    (t.increment("vis"),
                    t.log(f, n, { s: r[BOOMR.visibilityState()] }));
                }),
                { stop: a }
              );
            },
            F = function (e, t, n) {
              t.register("orn", i);
              var r = !0;
              function o(e) {
                var n = BOOMR.now(),
                  i = window.orientation;
                if (r) {
                  t.increment("orn");
                  var o =
                    window.screen &&
                    (screen.orientation ||
                      screen.msOrientation ||
                      screen.mozOrientation ||
                      {});
                  o &&
                    "number" === typeof o.angle &&
                    (i = screen.orientation.angle),
                    "number" === typeof i && t.log(p, n, { a: i });
                }
              }
              function a() {
                (r = !1), BOOMR.utils.removeListener(e, "orientationchange", o);
              }
              return (
                BOOMR.utils.addListener(e, "orientationchange", o, g),
                { stop: a }
              );
            },
            H = function (e, t) {
              t.register("mem", a, !0),
                t.register("bat", s, !0),
                t.register("domsz", a, !0),
                t.register("domln", a, !0),
                t.register("mut", i);
              var n,
                r = 1e3,
                o = e.document,
                u = !0,
                c = !1,
                l = null,
                d = 0,
                f = 0,
                p = o.getElementsByTagName("*");
              function h() {
                var e = O && O.memory && O.memory.usedJSHeapSize;
                if (
                  (e && t.set("mem", e),
                  (f = p.length),
                  t.set("domsz", o.documentElement.innerHTML.length),
                  t.set("domln", f),
                  d > 0)
                ) {
                  var n = Math.min(Math.round((d / f) * 100), 100);
                  t.set("mut", n), (d = 0);
                }
              }
              function m() {
                u && l && t.set("bat", l.level);
              }
              function g(e) {
                return (
                  e.forEach(function (e) {
                    if ("childList" !== e.type) return !0;
                    for (var t = 0; t < e.addedNodes.length; t++) {
                      var n = e.addedNodes[t];
                      d++,
                        (d += n.getElementsByTagName
                          ? n.getElementsByTagName("*").length
                          : 0);
                    }
                  }),
                  !0
                );
              }
              function v() {
                (u = !1),
                  c && (clearInterval(c), (c = !1)),
                  n && n.observer && (n.observer.disconnect(), (n = null)),
                  l && l.onlevelchange && (l.onlevelchange = null),
                  (p = null);
              }
              return (
                (c = setInterval(h, r)),
                e.navigator &&
                  "function" === typeof e.navigator.getBattery &&
                  e.navigator.getBattery().then(function (e) {
                    (l = e), l.onlevelchange && (l.onlevelchange = m);
                  }),
                BOOMR.utils.isMutationObserverSupported() &&
                  (n = BOOMR.utils.addObserver(
                    o,
                    { childList: !0, subtree: !0 },
                    null,
                    g,
                    null,
                    this
                  )),
                { stop: v }
              );
            };
          (e = {
            monitorLongTasks: !0,
            monitorPageBusy: !0,
            monitorFrameRate: !0,
            monitorInteractions: !0,
            monitorStats: !1,
            monitorLayoutShifts: !0,
            afterOnload: !1,
            afterOnloadMaxLength: n,
            afterOnloadMinWait: 5e3,
            waitAfterOnload: !1,
            ttiWaitForFrameworkReady: !1,
            ttiWaitForHeroImages: !1,
            ttiWaitForXHRDone: !1,
            ttiWaitForXHRIgnore: [],
            sendLog: !0,
            sendTimeline: !0,
            logMaxEntries: 100,
            initialized: !1,
            complete: !1,
            isSpa: !1,
            firedPageReady: !1,
            afterOnloadMonitoring: !1,
            frameworkReady: null,
            timeline: null,
            ttiMethod: null,
            longTaskMonitor: null,
            pageBusyMonitor: null,
            frameRateMonitor: null,
            interactionMonitor: null,
            scrollMonitor: null,
            clickMonitor: null,
            keyMonitor: null,
            mouseMonitor: null,
            visibilityMonitor: null,
            orientationMonitor: null,
            touchStartMonitor: null,
            mouseDownMonitor: null,
            pointerDownMonitor: null,
            statsMonitor: null,
            layoutShiftMonitor: null,
            monitors: [
              "timeline",
              "longTaskMonitor",
              "pageBusyMonitor",
              "frameRateMonitor",
              "scrollMonitor",
              "keyMonitor",
              "clickMonitor",
              "mouseMonitor",
              "interactionMonitor",
              "visibilityMonitor",
              "orientationMonitor",
              "statsMonitor",
              "layoutShiftMonitor",
              "touchStartMonitor",
              "mouseDownMonitor",
              "pointerDownMonitor",
            ],
            timeOfLastBeacon: 0,
            hasAddedDataToBeacon: !1,
            hasAddedTtinewToBeacon: void 0,
            isSafari:
              window &&
              window.navigator &&
              window.navigator.vendor &&
              -1 !== window.navigator.vendor.indexOf("Apple"),
            onBeforeBeacon: function () {
              e.runAllAnalyzers();
            },
            checkIfSendAdditionalBeacon: function () {
              if (!1 === e.hasAddedTtinewToBeacon && BOOMR.hasPending()) {
                var t = e.timeline.analyzeXHRDone(!0),
                  n =
                    t > 0
                      ? { "c.tti.new": t, add: v }
                      : { "c.tti.new": void 0, add: y };
                BOOMR.sendAdditionalBeacon(n);
              }
            },
            runAllAnalyzers: function () {
              var t, n;
              if (!e.hasAddedDataToBeacon) {
                for (t = 0; t < e.monitors.length; t++)
                  (n = e[e.monitors[t]]),
                    n &&
                      "function" === typeof n.analyze &&
                      n.analyze(e.timeOfLastBeacon);
                e.addToBeacon(
                  "c.lb",
                  e.timeOfLastBeacon ? e.timeOfLastBeacon.toString(36) : 0
                ),
                  (e.timeOfLastBeacon = BOOMR.now()),
                  (e.hasAddedDataToBeacon = !0);
              }
            },
            onBeacon: function (t) {
              var n;
              if (
                !t ||
                !(
                  "undefined" !== typeof t.early ||
                  (t["http.initiator"] &&
                    0 === t["http.initiator"].indexOf("api_custom_"))
                )
              ) {
                for (n = 0; n < e.monitors.length; n++) {
                  var r = e[e.monitors[n]];
                  r &&
                    (e.afterOnload ||
                      ("function" === typeof r.stop && r.stop()),
                    "function" === typeof r.onBeacon && r.onBeacon());
                }
                (e.hasAddedDataToBeacon = !1),
                  t && t.add && (e.hasAddedTtinewToBeacon = void 0);
              }
            },
            onXhrLoad: function (t) {
              t &&
                BOOMR.utils.inArray(
                  t.initiator,
                  BOOMR.constants.BEACON_TYPE_SPAS
                ) &&
                (e.isSpa = !0),
                t && "spa_hard" === t.initiator && e.onPageReady();
            },
            onPageReady: function () {
              if (
                ((e.firedPageReady = !0),
                e.afterOnload &&
                  e.monitorInteractions &&
                  ((e.afterOnloadMonitoring = !0),
                  e.isSpa ||
                    "number" !== typeof e.afterOnloadMaxLength ||
                    setTimeout(function () {
                      e.afterOnloadMonitoring = !1;
                    }, e.afterOnloadMaxLength)),
                e.waitAfterOnload)
              ) {
                var t = BOOMR.now();
                setTimeout(function n() {
                  if (BOOMR.now() - t > e.waitAfterOnload)
                    (e.complete = !0), BOOMR.sendBeacon();
                  else {
                    e.timeline.analyze();
                    var i = e.ttiWaitForXHRDone
                      ? BOOMR.getVar("c.tti.new")
                      : _.timeToInteractive();
                    i
                      ? ((e.complete = !0), BOOMR.sendBeacon())
                      : setTimeout(n, r);
                  }
                }, r);
              } else e.complete = !0;
            },
            addToBeacon: function (e, t, n) {
              (0 !== t && "undefined" !== typeof t) || n
                ? BOOMR.addVar(e, t, !0)
                : BOOMR.removeVar(e);
            },
          }),
            (BOOMR.plugins.Continuity = {
              init: function (t) {
                if (
                  (BOOMR.utils.pluginConfig(e, t, "Continuity", [
                    "monitorLongTasks",
                    "monitorPageBusy",
                    "monitorFrameRate",
                    "monitorInteractions",
                    "monitorStats",
                    "afterOnload",
                    "afterOnloadMaxLength",
                    "afterOnloadMinWait",
                    "waitAfterOnload",
                    "ttiWaitForFrameworkReady",
                    "ttiWaitForHeroImages",
                    "ttiWaitForXHRDone",
                    "ttiWaitForXHRIgnore",
                    "sendLog",
                    "logMaxEntries",
                    "sendTimeline",
                  ]),
                  e.initialized)
                )
                  return this;
                if (
                  ((e.initialized = !0),
                  (e.timeline = new b(BOOMR.now())),
                  BOOMR.window)
                ) {
                  if (
                    (e.monitorLongTasks &&
                      BOOMR.window.PerformanceObserver &&
                      BOOMR.window.PerformanceLongTaskTiming &&
                      ((e.longTaskMonitor = new B(BOOMR.window, e.timeline)),
                      (e.ttiMethod = "lt")),
                    e.monitorFrameRate &&
                      "function" ===
                        typeof BOOMR.window.requestAnimationFrame &&
                      ((e.frameRateMonitor = new S(BOOMR.window, e.timeline)),
                      e.ttiMethod || (e.ttiMethod = "raf")),
                    !e.monitorPageBusy ||
                      (BOOMR.window.PerformanceObserver &&
                        BOOMR.window.PerformanceLongTaskTiming &&
                        e.monitorLongTasks) ||
                      ((e.pageBusyMonitor = new w(BOOMR.window, e.timeline)),
                      e.ttiMethod || (e.ttiMethod = "b")),
                    e.monitorInteractions)
                  ) {
                    var n = BOOMR.window;
                    (e.interactionMonitor = new P(
                      n,
                      e.timeline,
                      e.afterOnloadMinWait
                    )),
                      (e.scrollMonitor = new E(
                        n,
                        e.timeline,
                        e.interactionMonitor
                      )),
                      (e.keyMonitor = new x(
                        n,
                        e.timeline,
                        e.interactionMonitor
                      )),
                      (e.clickMonitor = new T(
                        n,
                        e.timeline,
                        e.interactionMonitor
                      )),
                      (e.mouseMonitor = new k(
                        n,
                        e.timeline,
                        e.interactionMonitor
                      )),
                      (e.visibilityMonitor = new I(
                        n,
                        e.timeline,
                        e.interactionMonitor
                      )),
                      (e.orientationMonitor = new F(
                        n,
                        e.timeline,
                        e.interactionMonitor
                      )),
                      (e.touchStartMonitor = new L(
                        n,
                        e.timeline,
                        e.interactionMonitor
                      )),
                      (e.mouseDownMonitor = new C(
                        n,
                        e.timeline,
                        e.interactionMonitor
                      )),
                      (e.pointerDownMonitor = new A(
                        n,
                        e.timeline,
                        e.interactionMonitor
                      ));
                  }
                  e.monitorStats &&
                    (e.statsMonitor = new H(
                      BOOMR.window,
                      e.timeline,
                      e.interactionMonitor
                    )),
                    e.monitorLayoutShifts &&
                      BOOMR.window.PerformanceObserver &&
                      (e.layoutShiftMonitor = new M(BOOMR.window));
                }
                return (
                  BOOMR.addVar("c.e", R.toString(36)),
                  BOOMR.addVar("c.tti.m", e.ttiMethod),
                  BOOMR.subscribe("before_beacon", e.onBeforeBeacon, null, e),
                  BOOMR.subscribe("beacon", e.onBeacon, null, e),
                  BOOMR.subscribe("page_ready", e.onPageReady, null, e),
                  BOOMR.subscribe("xhr_load", e.onXhrLoad, null, e),
                  BOOMR.subscribe(
                    "route_change",
                    e.checkIfSendAdditionalBeacon,
                    null,
                    e
                  ),
                  this
                );
              },
              is_complete: function (t) {
                return (
                  e.complete ||
                  (t &&
                    ("error" === t["http.initiator"] ||
                      "undefined" !== typeof t.early))
                );
              },
              frameworkReady: function () {
                e.frameworkReady = BOOMR.now();
              },
              getTtiWaitForXHRDone: function () {
                return e.ttiWaitForXHRDone;
              },
              getTTIWaitForXHRIngore: function () {
                return o(e.ttiWaitForXHRIgnore)
                  ? e.ttiWaitForXHRIgnore()
                  : e.ttiWaitForXHRIgnore;
              },
              checkIfSendAdditionalBeacon: e.checkIfSendAdditionalBeacon,
              metrics: _,
              compressBucketLog: U,
              decompressBucketLog: X,
              decompressBucketLogNumber: q,
              decompressLog: j,
            });
        }
        function N(e) {
          var t =
            (BOOMR.utils.Compression && BOOMR.utils.Compression.jsUrl) ||
            (window.UserTimingCompression &&
              window.UserTimingCompression.jsUrl) ||
            (BOOMR.window.UserTimingCompression &&
              BOOMR.window.UserTimingCompression.jsUrl);
          return t ? t(e) : window.JSON ? JSON.stringify(e) : "";
        }
        function U(e, t, n, r, o) {
          var u,
            c,
            l,
            d,
            f,
            p = "",
            g = 0;
          if (!n) return "";
          if (0 === n.length) return "";
          if (t)
            for (
              "undefined" === typeof n[r] && (n[r] = 0), u = r + 1;
              u <= o;
              u++
            )
              "undefined" === typeof n[u] && (n[u] = n[u - 1]);
          for (u = r; u <= o; u++) {
            if (
              ((g = "number" !== typeof n[u] || isNaN(n[u]) ? 0 : n[u]),
              e === i
                ? (l = g <= 63 ? h.charAt(g) : m + g.toString(36) + m)
                : e === a
                ? (l = g.toString(36))
                : e === s &&
                  (l = g < 99 ? (g <= 9 ? "0" + Math.max(g, 0) : g) : "__"),
              u + 3 <= o &&
                (n[u + 1] === g || (0 === g && void 0 === n[u + 1])) &&
                (n[u + 2] === g || (0 === g && void 0 === n[u + 2])) &&
                (n[u + 3] === g || (0 === g && void 0 === n[u + 3])))
            ) {
              c = 1;
              while (u < o) {
                if (n[u + 1] !== g && (0 !== g || void 0 !== n[u + 1])) break;
                c++, u++;
              }
              d = "*" + c.toString(36) + "*" + l;
            } else d = l;
            (0 === g && u === o) ||
              (e === a && f && (p += ","), (f = !0), (p += d));
          }
          return f ? e.toString() + p : "";
        }
        function X(e, t) {
          var n,
            r,
            o,
            u,
            c,
            l,
            d = [],
            f = t || 0;
          if (!e || 0 === e.length) return [];
          for (
            l = parseInt(e.charAt(0), 10), e = e.substring(1), u = 1, n = 0;
            n < e.length;
            n++
          )
            if ("*" !== e.charAt(n)) {
              for (
                e.charAt(n) === m
                  ? (n++,
                    (o = e.indexOf(m, n)),
                    (c = parseInt(e.substring(n, o), 36)),
                    (n = o))
                  : l === i
                  ? (c = q(e.charAt(n)))
                  : l === a
                  ? ((o = e.indexOf(",", n)),
                    -1 !== o
                      ? ((c = parseInt(e.substring(n, o), 36)), (n = o))
                      : ((c = parseInt(e.substring(n), 36)), (n = e.length)))
                  : l === s &&
                    ((c =
                      "__" === e.substr(n, 2)
                        ? 100
                        : parseInt(e.substr(n, 2), 10)),
                    n++),
                  d[f] = c,
                  r = 1;
                r < u;
                r++
              )
                f++, (d[f] = c);
              f++, (u = 1);
            } else
              n++,
                (o = e.indexOf("*", n)),
                (u = parseInt(e.substring(n, o), 36)),
                (n = o);
          return d;
        }
        function q(e) {
          if (!e || !e.charCodeAt) return 0;
          var t = e.charCodeAt(0);
          return t >= 48 && t <= 57
            ? t - 48
            : t >= 97 && t <= 122
            ? t - 97 + 10
            : t >= 65 && t <= 90
            ? t - 65 + 36
            : 95 === t
            ? 62
            : 45 === t
            ? 63
            : 0;
        }
        function j(e) {
          var t,
            n,
            r,
            i,
            o,
            a = [];
          for (i = e.split("|"), t = 0; t < i.length; t++) {
            for (
              r = i[t].split(","),
                o = {
                  type: parseInt(r[0].charAt(0), 10),
                  time: parseInt(r[0].substring(1), 36),
                },
                n = 1;
              n < r.length;
              n++
            )
              o[r[n].charAt(0)] = r[n].substring(1);
            a.push(o);
          }
          return a;
        }
      }
      function g() {
        var e = {
          auto: !1,
          enabled: !0,
          hooked: !1,
          routeHooked: !1,
          hadMissedRouteChange: !1,
          routeChangeInProgress: !1,
          disableHardNav: !1,
          routeFilter: void 0,
          routeChangeWaitFilter: void 0,
          monitorReplaceState: !0,
          a: void 0,
          originHistoryPushState: null,
          originHistoryReplaceState: null,
          originHistoryGo: null,
          originHistoryBack: null,
          originHistoryForward: null,
          resetRouteChangeInProgress: function () {
            e.routeChangeInProgress && clearTimeout(e.routeChangeInProgress),
              (e.routeChangeInProgress = !1);
          },
          setRouteChangeInProgress: function () {
            e.routeChangeInProgress && clearTimeout(e.routeChangeInProgress),
              (e.routeChangeInProgress = setTimeout(
                e.resetRouteChangeInProgress,
                50
              ));
          },
          spaInit: function (e, t) {
            t
              ? BOOMR.fireEvent("spa_init", [
                  BOOMR.plugins.SPA.current_spa_nav(),
                  t,
                ])
              : e
              ? BOOMR.fireEvent("spa_init", [
                  BOOMR.plugins.SPA.current_spa_nav(),
                  e,
                ])
              : BOOMR.fireEvent("spa_init", [
                  BOOMR.plugins.SPA.current_spa_nav(),
                  BOOMR.window.document.URL,
                ]);
          },
          routeChange: function (t, n) {
            if (e.enabled) {
              if (e.disableHardNav && !BOOMR.onloadFired()) return;
              e.routeChangeInProgress ||
                (e.spaInit(t, n), BOOMR.plugins.SPA.route_change());
            } else
              (e.hadMissedRouteChange = !0), e.resetRouteChangeInProgress();
          },
        };
        function t() {
          var t = BOOMR.window.history;
          function n() {
            BOOMR.window.addEventListener("popstate", function (t) {
              e.routeChange();
            });
          }
          return (
            "function" === typeof t.pushState &&
              ((e.originHistoryPushState = t.pushState),
              (t.pushState = (function (t) {
                return function (n, r, i) {
                  return e.routeChange(r, i), t.apply(this, arguments);
                };
              })(t.pushState))),
            e.monitorReplaceState &&
              "function" === typeof t.replaceState &&
              ((e.originHistoryReplaceState = t.pushState),
              (t.replaceState = (function (t) {
                return function (n, r, i) {
                  if ("undefined" !== typeof BOOMR) {
                    var o = BOOMR.window.document.URL,
                      a = o;
                    return (
                      arguments.length >= 3 &&
                        "undefined" !== typeof i &&
                        null !== i &&
                        ((e.a.href = i), (a = e.a.href)),
                      (BOOMR.plugins.SPA.isSpaNavInProgress() && a === o) ||
                        e.routeChange(r, i),
                      t.apply(this, arguments)
                    );
                  }
                };
              })(t.replaceState))),
            "function" === typeof t.go &&
              ((e.originHistoryGo = t.go),
              (t.go = (function (t) {
                return function (n) {
                  return e.routeChange(), t.apply(this, arguments);
                };
              })(t.go))),
            "function" === typeof t.back &&
              ((e.originHistoryBack = t.back),
              (t.back = (function (t) {
                return function () {
                  return e.routeChange(), t.apply(this, arguments);
                };
              })(t.back))),
            "function" === typeof t.forward &&
              ((e.originHistoryForward = t.forward),
              (t.forward = (function (t) {
                return function () {
                  return e.routeChange(), t.apply(this, arguments);
                };
              })(t.forward))),
            BOOMR.window.addEventListener("hashchange", function (t) {
              var n = (t || {}).newURL;
              e.routeChange(null, n);
            }),
            BOOMR.hasBrowserOnloadFired()
              ? n()
              : BOOMR.window.addEventListener("load", function () {
                  setTimeout(n, 0);
                }),
            BOOMR.subscribe("beacon", e.resetRouteChangeInProgress),
            BOOMR.subscribe("spa_cancel", e.resetRouteChangeInProgress),
            BOOMR.subscribe("spa_init", e.setRouteChangeInProgress),
            !0
          );
        }
        BOOMR.plugins.History ||
          "undefined" === typeof BOOMR.plugins.SPA ||
          "undefined" === typeof BOOMR.plugins.AutoXHR ||
          (BOOMR.window &&
            BOOMR.window.history &&
            (BOOMR.plugins.SPA.register("History"),
            (e.a = BOOMR.window.document.createElement("A")),
            (BOOMR.plugins.History = {
              is_complete: function () {
                return !0;
              },
              hook: function (n, r, i) {
                return (
                  (i = i || {}),
                  (i.disableHardNav = e.disableHardNav),
                  e.hooked ||
                    (e.routeFilter && (i.routeFilter = e.routeFilter),
                    e.routeChangeWaitFilter &&
                      (i.routeChangeWaitFilter = e.routeChangeWaitFilter),
                    t() && (BOOMR.plugins.SPA.hook(r, i), (e.hooked = !0))),
                  this
                );
              },
              init: function (t) {
                return (
                  BOOMR.utils.pluginConfig(e, t, "History", [
                    "auto",
                    "enabled",
                    "disableHardNav",
                    "routeFilter",
                    "routeChangeWaitFilter",
                    "monitorReplaceState",
                  ]),
                  e.auto && e.enabled && this.hook(void 0, !0, {}),
                  this
                );
              },
              disable: function () {
                return (
                  (history.pushState = e.originHistoryPushState),
                  (history.replaceState = e.originHistoryReplaceState),
                  (history.go = e.originHistoryGo),
                  (history.back = e.originHistoryBack),
                  (history.forward = e.originHistoryForward),
                  (e.enabled = !1),
                  this
                );
              },
              enable: function () {
                return (
                  (e.enabled = !0),
                  e.hooked &&
                    e.hadMissedRouteChange &&
                    ((e.hadMissedRouteChange = !1),
                    BOOMR.plugins.SPA.route_change(),
                    e.setRouteChangeInProgress()),
                  this
                );
              },
            })));
      }
      function O() {
        if (!BOOMR.plugins.NavigationTiming) {
          var e = {
            complete: !1,
            fullySent: !1,
            sendBeacon: function () {
              (this.complete = !0), BOOMR.sendBeacon();
            },
            xhr_done: function (t) {
              var n;
              if (t && "spa_hard" === t.initiator) e.done(t);
              else if (t && "spa" === t.initiator) e.sendBeacon();
              else {
                BOOMR.window;
                var r,
                  i,
                  o = {};
                if (t) {
                  if (
                    (t.data && (t = t.data),
                    (n = BOOMR.getPerformance()),
                    n && t.restiming)
                  )
                    for (i in ((o = {
                      nt_red_st: t.restiming.redirectStart,
                      nt_red_end: t.restiming.redirectEnd,
                      nt_fet_st: t.restiming.fetchStart,
                      nt_dns_st: t.restiming.domainLookupStart,
                      nt_dns_end: t.restiming.domainLookupEnd,
                      nt_con_st: t.restiming.connectStart,
                      nt_con_end: t.restiming.connectEnd,
                      nt_req_st: t.restiming.requestStart,
                      nt_res_st: t.restiming.responseStart,
                      nt_res_end: t.restiming.responseEnd,
                    }),
                    t.restiming.secureConnectionStart &&
                      (o.nt_ssl_st = t.restiming.secureConnectionStart),
                    o))
                      o.hasOwnProperty(i) &&
                        o[i] &&
                        ((o[i] += n.timing.navigationStart),
                        (o[i] = Math.floor(o[i])));
                  for (i in (t.timing &&
                    ((r = t.timing),
                    o.nt_req_st || (o.nt_req_st = r.requestStart),
                    o.nt_res_st || (o.nt_res_st = r.responseStart),
                    o.nt_res_end || (o.nt_res_end = r.responseEnd),
                    (o.nt_domint = r.domInteractive),
                    (o.nt_domcomp = r.domComplete),
                    (o.nt_load_st = r.loadEventEnd),
                    (o.nt_load_end = r.loadEventEnd)),
                  o))
                    o.hasOwnProperty(i) && !o[i] && delete o[i];
                  BOOMR.addVar(o, void 0, !0), e.sendBeacon();
                }
              }
            },
            done: function () {
              var n,
                r,
                i,
                o,
                a,
                s,
                u = BOOMR.window,
                c = {},
                l = 0,
                d = !1;
              if (this.complete) return this;
              if (((n = BOOMR.getPerformance()), n)) {
                for (s in ("function" === typeof n.getEntriesByType &&
                  ((o = n.getEntriesByType("navigation")),
                  o && o.length
                    ? (BOOMR.info(
                        "This user agent supports NavigationTiming2",
                        "nt"
                      ),
                      (o = o[0]),
                      (l = n.timing ? n.timing.navigationStart : 0))
                    : (o = void 0)),
                !o &&
                  n.timing &&
                  (BOOMR.info(
                    "This user agent supports NavigationTiming",
                    "nt"
                  ),
                  (o = n.timing)),
                o &&
                  ((c = {
                    nt_nav_st: n.timing ? n.timing.navigationStart : 0,
                    nt_red_st: t(l, o.redirectStart),
                    nt_red_end: t(l, o.redirectEnd),
                    nt_fet_st: t(l, o.fetchStart),
                    nt_dns_st: t(l, o.domainLookupStart),
                    nt_dns_end: t(l, o.domainLookupEnd),
                    nt_con_st: t(l, o.connectStart),
                    nt_con_end: t(l, o.connectEnd),
                    nt_req_st: t(l, o.requestStart),
                    nt_res_st: t(l, o.responseStart),
                    nt_res_end: t(l, o.responseEnd),
                    nt_domloading: t(l, o.domLoading),
                    nt_domint: t(l, o.domInteractive),
                    nt_domcontloaded_st: t(l, o.domContentLoadedEventStart),
                    nt_domcontloaded_end: t(l, o.domContentLoadedEventEnd),
                    nt_domcomp: t(l, o.domComplete),
                    nt_load_st: t(l, o.loadEventStart),
                    nt_load_end: t(l, o.loadEventEnd),
                    nt_unload_st: t(l, o.unloadEventStart),
                    nt_unload_end: t(l, o.unloadEventEnd),
                  }),
                  !c.nt_domloading &&
                    n &&
                    n.timing &&
                    n.timing.domLoading &&
                    (c.nt_domloading = n.timing.domLoading),
                  o.secureConnectionStart &&
                    (c.nt_ssl_st = t(l, o.secureConnectionStart)),
                  n.timing &&
                    n.timing.msFirstPaint &&
                    (c.nt_first_paint = n.timing.msFirstPaint),
                  o.workerStart && (c.nt_worker_start = t(l, o.workerStart)),
                  (o.decodedBodySize || o.transferSize) &&
                    ((c.nt_enc_size = o.encodedBodySize),
                    (c.nt_dec_size = o.decodedBodySize),
                    (c.nt_trn_size = o.transferSize)),
                  o.nextHopProtocol && (c.nt_protocol = o.nextHopProtocol)),
                !c.nt_first_paint &&
                  BOOMR.plugins.PaintTiming &&
                  ((d = BOOMR.plugins.PaintTiming.is_supported()),
                  (a = BOOMR.plugins.PaintTiming.getTimingFor("first-paint")),
                  a && (c.nt_first_paint = t(l, a))),
                (c.nt_protocol && c.nt_first_paint) ||
                  (o && "" === o.nextHopProtocol) ||
                  d ||
                  !u.chrome ||
                  "function" !== typeof u.chrome.loadTimes ||
                  ((i = u.chrome.loadTimes()),
                  i &&
                    ((c.nt_spdy = i.wasFetchedViaSpdy ? 1 : 0),
                    (c.nt_cinf = i.connectionInfo),
                    "number" === typeof i.firstPaintTime &&
                      0 !== i.firstPaintTime &&
                      (c.nt_first_paint = Math.round(1e3 * i.firstPaintTime)))),
                n.navigation &&
                  ((r = n.navigation),
                  (c.nt_red_cnt = r.redirectCount),
                  (c.nt_nav_type = r.type)),
                c))
                  c.hasOwnProperty(s) && void 0 === c[s] && delete c[s];
                BOOMR.addVar(c, void 0, !0),
                  o &&
                    ((o.requestStart &&
                      o.navigationStart &&
                      o.requestStart < o.navigationStart) ||
                      (o.responseStart &&
                        o.navigationStart &&
                        o.responseStart < o.navigationStart) ||
                      (o.responseStart &&
                        o.fetchStart &&
                        o.responseStart < o.fetchStart) ||
                      (o.navigationStart && o.fetchStart < o.navigationStart) ||
                      (o.responseEnd && o.responseEnd > BOOMR.now() + 864e5)) &&
                    BOOMR.addVar("nt_bad", 1, !0),
                  c.nt_load_end > 0 && (this.fullySent = !0);
              }
              e.sendBeacon();
            },
            clear: function (e) {
              this.complete = !(e && e.early) && this.fullySent;
            },
            prerenderToVisible: function () {
              (this.complete = !1), this.done();
            },
            onBeforeEarlyBeacon: function (e) {
              (e &&
                "undefined" !== typeof e.initiator &&
                "spa_hard" !== e.initiator) ||
                this.done();
            },
          };
          BOOMR.plugins.NavigationTiming = {
            init: function () {
              return (
                e.initialized ||
                  (BOOMR.subscribe("page_ready", e.done, null, e),
                  BOOMR.subscribe(
                    "prerender_to_visible",
                    e.prerenderToVisible,
                    null,
                    e
                  ),
                  BOOMR.subscribe(
                    "before_early_beacon",
                    e.onBeforeEarlyBeacon,
                    null,
                    e
                  ),
                  BOOMR.subscribe("xhr_load", e.xhr_done, null, e),
                  BOOMR.subscribe("before_unload", e.done, null, e),
                  BOOMR.subscribe("beacon", e.clear, null, e),
                  (e.initialized = !0)),
                this
              );
            },
            is_complete: function () {
              return !0;
            },
          };
        }
        function t(e, t) {
          if ("number" === typeof t && 0 !== t) return Math.floor((e || 0) + t);
        }
      }
      function v() {
        if (!BOOMR.plugins.PaintTiming) {
          var e = {
              "first-paint": "fp",
              "first-contentful-paint": "fcp",
              "largest-contentful-paint": "lcp",
            },
            t = {
              initialized: !1,
              complete: !1,
              supported: null,
              timingCache: {},
              timingHistory: {},
              observer: null,
              externalMetrics: {},
              done: function (n, r) {
                var i, o, a;
                if (this.complete) return this;
                if ("load" !== r && (!n || "spa_hard" !== n.initiator))
                  return (this.complete = !0), this;
                if (
                  ((i = BOOMR.getPerformance()),
                  i && "function" === typeof i.getEntriesByType)
                ) {
                  if (((o = i.getEntriesByType("paint")), o && o.length)) {
                    for (
                      BOOMR.info("This user agent supports PaintTiming", "pt"),
                        a = 0;
                      a < o.length;
                      a++
                    )
                      (t.timingCache[o[a].name] = o[a].startTime),
                        e[o[a].name] &&
                          BOOMR.addVar(
                            "pt." + e[o[a].name],
                            Math.floor(o[a].startTime),
                            !0
                          );
                    (this.complete = !0), BOOMR.sendBeacon();
                  }
                } else this.complete = !0;
              },
              onObserver: function (e) {
                var n = e.getEntries();
                if (0 !== n.length) {
                  var r = n[n.length - 1],
                    i = r.renderTime || r.loadTime;
                  (t.timingCache[r.entryType] = i),
                    (t.timingHistory[r.entryType] =
                      t.timingHistory[r.entryType] || []),
                    t.timingHistory[r.entryType].push(i),
                    BOOMR.addVar("pt.lcp", Math.floor(i), !0),
                    (t.externalMetrics.lcp = function () {
                      return Math.floor(i);
                    });
                }
              },
            };
          BOOMR.plugins.PaintTiming = {
            init: function () {
              return (
                this.is_supported() ||
                  ((t.complete = !0), (t.initialized = !0)),
                t.complete ||
                  "hidden" !== BOOMR.visibilityState() ||
                  (BOOMR.addVar("pt.hid", 1, !0), (t.complete = !0)),
                t.initialized ||
                  (BOOMR.subscribe("page_ready", t.done, "load", t),
                  BOOMR.subscribe("xhr_load", t.done, "xhr", t),
                  BOOMR.subscribe("before_unload", t.done, null, t),
                  "function" === typeof BOOMR.window.PerformanceObserver &&
                    "function" === typeof window.LargestContentfulPaint &&
                    ((t.observer = new BOOMR.window.PerformanceObserver(
                      t.onObserver
                    )),
                    t.observer.observe({
                      type: "largest-contentful-paint",
                      buffered: !0,
                    })),
                  (t.initialized = !0)),
                this
              );
            },
            is_complete: function () {
              return !0;
            },
            is_enabled: function () {
              return t.initialized && this.is_supported();
            },
            is_supported: function () {
              if (null !== t.supported) return t.supported;
              var e = BOOMR.getPerformance();
              return (
                (t.supported =
                  e &&
                  "undefined" !== typeof window.PerformancePaintTiming &&
                  "function" === typeof e.getEntriesByType),
                t.supported
              );
            },
            getTimingFor: function (e) {
              var n, r;
              if (t.timingCache[e]) return t.timingCache[e];
              if (this.is_supported()) {
                var i = BOOMR.getPerformance();
                if (
                  i &&
                  "function" === typeof i.getEntriesByType &&
                  ((n = i.getEntriesByType("paint")), n && n.length)
                )
                  for (r = 0; r < n.length; r++)
                    if (n[r].name === e)
                      return (
                        (t.timingCache[e] = n[r].startTime), t.timingCache[e]
                      );
              }
            },
            getHistoryFor: function (e) {
              return t.timingHistory[e] || [];
            },
            metrics: t.externalMetrics,
          };
        }
      }
      function y() {
        var e;
        if (!BOOMR.plugins.ResourceTiming) {
          var n = {
              other: 0,
              img: 1,
              link: 2,
              script: 3,
              css: 4,
              xmlhttprequest: 5,
              html: 6,
              image: 7,
              beacon: 8,
              fetch: 9,
              iframe: "a",
              subdocument: "a",
              body: "b",
              input: "c",
              frame: "a",
              object: "d",
              video: "e",
              audio: "f",
              source: "g",
              track: "h",
              embed: "i",
              eventsource: "j",
              navigation: 6,
            },
            r = { prefetch: 1, preload: 2, prerender: 3, stylesheet: 4 },
            i = [
              "startTime",
              "redirectStart",
              "redirectEnd",
              "fetchStart",
              "domainLookupStart",
              "domainLookupEnd",
              "connectStart",
              "secureConnectionStart",
              "connectEnd",
              "requestStart",
              "responseStart",
              "responseEnd",
              "workerStart",
            ],
            o = [/(h)(ref)/gi, /(s)(rc)/gi, /(a)(ction)/gi],
            a = "\n",
            s = 500,
            u = "*",
            c = "0",
            l = "1",
            d = "2",
            f = 1,
            p = 2,
            h = 4,
            m = "3",
            g = "4",
            O = "5",
            v = "6";
          (e = {
            complete: !1,
            sentNavBeacon: !1,
            initialized: !1,
            supported: null,
            xhr_load: function (e) {
              e && e.restiming && $(e.restiming),
                this.complete || ((this.complete = !0), BOOMR.sendBeacon());
            },
            xssBreakWords: o,
            urlLimit: s,
            clearOnBeacon: !1,
            trimUrls: [],
            serverTiming: !0,
            monitorClearResourceTimings: !1,
            splitAtPath: !1,
            getSrcsetDimensions: !1,
            trackedResourceTypes: "*",
            done: function () {
              this.sentNavBeacon ||
                (D(),
                (this.complete = !0),
                (this.sentNavBeacon = !0),
                BOOMR.sendBeacon());
            },
            onBeacon: function (t) {
              var n = BOOMR.getPerformance();
              if (e.clearOnBeacon && n) {
                var r = n.clearResourceTimings || n.webkitClearResourceTimings;
                r && "function" === typeof r && r.call(n);
              }
            },
            prerenderToVisible: function () {
              (this.sentNavBeacon = !1), this.done();
            },
          }),
            (BOOMR.plugins.ResourceTiming = {
              init: function (t) {
                if (
                  (BOOMR.utils.pluginConfig(e, t, "ResourceTiming", [
                    "xssBreakWords",
                    "clearOnBeacon",
                    "urlLimit",
                    "trimUrls",
                    "trackedResourceTypes",
                    "serverTiming",
                    "monitorClearResourceTimings",
                    "splitAtPath",
                    "getSrcsetDimensions",
                  ]),
                  e.initialized)
                )
                  return this;
                if (this.is_supported()) {
                  if (
                    (BOOMR.subscribe("page_ready", e.done, null, e),
                    BOOMR.subscribe(
                      "prerender_to_visible",
                      e.prerenderToVisible,
                      null,
                      e
                    ),
                    BOOMR.subscribe("xhr_load", e.xhr_load, null, e),
                    BOOMR.subscribe("beacon", e.onBeacon, null, e),
                    BOOMR.subscribe("before_unload", e.done, null, e),
                    e.monitorClearResourceTimings)
                  ) {
                    var n = this;
                    BOOMR.window.performance.clearResourceTimings = (function (
                      e
                    ) {
                      return function () {
                        n.addResources(
                          BOOMR.window.performance.getEntriesByType("resource")
                        ),
                          e.apply(BOOMR.window.performance, arguments);
                      };
                    })(BOOMR.window.performance.clearResourceTimings);
                  }
                } else e.complete = !0;
                return (e.initialized = !0), this;
              },
              is_complete: function () {
                return !0;
              },
              is_enabled: function () {
                return e.initialized && this.is_supported();
              },
              is_supported: function () {
                if (null !== e.supported) return e.supported;
                var t = BOOMR.getPerformance();
                return (
                  (e.supported =
                    t &&
                    "function" === typeof t.getEntriesByType &&
                    "undefined" !== typeof window.PerformanceResourceTiming),
                  e.supported
                );
              },
              addResources: function (t, n) {
                if (this.is_supported() && BOOMR.utils.isArray(t)) {
                  if (
                    ((e.collectedEntries = e.collectedEntries || []),
                    "number" === typeof n)
                  ) {
                    var r =
                        BOOMR.window.performance.timeOrigin ||
                        BOOMR.window.performance.timing.navigationStart,
                      o = n - r;
                    t = BOOMR.utils.arrayFilter(t, function (e) {
                      for (var t = 0; t < i.length; t++) {
                        var n = i[t];
                        e.hasOwnProperty(n) && (e[n] += o);
                      }
                      return !0;
                    });
                  }
                  Array.prototype.push.apply(e.collectedEntries, t);
                }
              },
              getCompressedResourceTiming: X,
              getFilteredResourceTiming: P,
              calculateResourceTimingUnion: j,
              addResourceTimingToBeacon: D,
              addToBeacon: $,
              trimTiming: b,
              convertToTrie: y,
              optimizeTrie: _,
              findPerformanceEntriesForFrame: w,
              toBase36: x,
              getVisibleEntries: k,
              reduceFetchStarts: q,
              compressSize: A,
              decompressSize: C,
              trimUrl: I,
              getResourceLatestTime: F,
              mergePixels: H,
              countPixels: N,
              getOptimizedTimepoints: U,
              decompressTimePoints: L,
              accumulateServerTimingEntries: V,
              compressServerTiming: W,
              indexServerTiming: z,
              identifyServerTimingEntry: G,
              decompressServerTiming: Y,
              SPECIAL_DATA_PREFIX: u,
              SPECIAL_DATA_DIMENSION_TYPE: c,
              SPECIAL_DATA_SIZE_TYPE: l,
              SPECIAL_DATA_SCRIPT_ATTR_TYPE: d,
              SPECIAL_DATA_LINK_ATTR_TYPE: g,
              SPECIAL_DATA_SERVICE_WORKER_TYPE: v,
              ASYNC_ATTR: f,
              DEFER_ATTR: p,
              LOCAT_ATTR: h,
              INITIATOR_TYPES: n,
              REL_TYPES: r,
            });
        }
        function y(t, n) {
          var r,
            i,
            o,
            s,
            u,
            c,
            l,
            d,
            f = {};
          function p(e) {
            return function (t, n, r) {
              var i, o;
              if (-1 !== n.indexOf(a)) {
                for (i = n.split(a), o = 0; o < i.length - 1; o++)
                  t.push(i[o]), t.push(a);
                n = i.slice(-1);
              }
              return "number" === typeof e && r < e && (n += "/"), t.concat(n);
            };
          }
          for (r in t) {
            for (i = r, o = 0; o < e.xssBreakWords.length; o++)
              i = i.replace(e.xssBreakWords[o], "$1" + a + "$2");
            if (t.hasOwnProperty(r))
              for (
                s = t[r],
                  n
                    ? ((u = i.split("/")),
                      (u = [
                        u[0] + "//",
                        u[2] + (u.length > 3 ? "/" : ""),
                      ].concat(u.slice(3).reduce(p(u.length - 4), []))))
                    : (u = i.split("")),
                  l = f,
                  o = 0;
                o < u.length;
                o++
              )
                (c = u[o]),
                  (d = l[c]),
                  "undefined" === typeof d
                    ? (l = l[c] = o === u.length - 1 ? s : {})
                    : "string" === typeof d
                    ? (l = l[c] = { "|": d })
                    : o === u.length - 1
                    ? (l[c]["|"] = s)
                    : (l = l[c]);
          }
          return f;
        }
        function _(e, t) {
          var n,
            r,
            i,
            o = 0,
            s = [];
          for (n in e) e.hasOwnProperty(n) && s.push(n);
          for (var u = 0; u < s.length; u++)
            (n = s[u]),
              "object" === typeof e[n] &&
                ((r = _(e[n], !1)),
                r &&
                  (delete e[n],
                  n === a ? ((n = r.name), o++) : (n += r.name),
                  (e[n] = r.value))),
              o++;
          return 1 === o
            ? t
              ? ((i = {}), (i[n] = e[n]), i)
              : { name: n, value: e[n] }
            : !!t && e;
        }
        function R(e) {
          return "number" !== typeof e && (e = 0), Math.ceil(e || 0);
        }
        function b(e, t) {
          "number" !== typeof e && (e = 0), "number" !== typeof t && (t = 0);
          var n = Math.round(e || 0),
            r = Math.round(t || 0);
          return 0 === n ? 0 : n - r;
        }
        function M(e) {
          try {
            if (
              (e.location && e.location.href,
              e.document,
              "performance" in e && e.performance)
            )
              return !0;
          } catch (t) {}
          return !1;
        }
        function B(e) {
          var t = 0;
          return (
            M(e) &&
              e.performance.timing &&
              e.performance.timing.navigationStart &&
              (t = e.performance.timing.navigationStart),
            t
          );
        }
        function w(t, n, r, i, o) {
          var a,
            s,
            u,
            c,
            l,
            d,
            f,
            p,
            h,
            m = [],
            g = {},
            O = {};
          if (
            ("undefined" === typeof n && (n = !0),
            "undefined" === typeof r && (r = 0),
            "undefined" === typeof i && (i = 0),
            i > 10)
          )
            return m;
          try {
            if (!M(t)) return m;
            if (
              ((u = B(t)),
              (p = k(t, o)),
              (h = t.document.createElement("a")),
              T(h, g, "script"),
              T(h, O, "link"),
              (d = t.document.getElementsByTagName("iframe")),
              d && d.length)
            )
              for (a = 0; a < d.length; a++)
                (c = B(d[a].contentWindow)),
                  (l = 0),
                  c > u && (l = r + (c - u)),
                  (h.href = d[a].src),
                  (m = m.concat(
                    w(d[a].contentWindow, !1, l, i + 1, p[h.href])
                  ));
            if ("function" !== typeof t.performance.getEntriesByType) return m;
            function v(t) {
              return (e.serverTiming && t.serverTiming) || [];
            }
            n && S(t, m, s, f, v);
            var y = t.performance.getEntriesByType("resource");
            t === BOOMR.window &&
              e.collectedEntries &&
              (Array.prototype.push.apply(y, e.collectedEntries),
              (e.collectedEntries = [])),
              (m = m.concat(E(y, v, p, r, g, O)));
          } catch (_) {
            return m;
          }
          return m;
        }
        function S(e, n, r, i, o) {
          (r = e.performance.getEntriesByType("navigation")),
            r && 1 === r.length
              ? ((i = r[0]),
                n.push({
                  name: e.location.href,
                  startTime: 0,
                  initiatorType: "html",
                  redirectStart: i.redirectStart,
                  redirectEnd: i.redirectEnd,
                  fetchStart: i.fetchStart,
                  domainLookupStart: i.domainLookupStart,
                  domainLookupEnd: i.domainLookupEnd,
                  connectStart: i.connectStart,
                  secureConnectionStart: i.secureConnectionStart,
                  connectEnd: i.connectEnd,
                  requestStart: i.requestStart,
                  responseStart: i.responseStart,
                  responseEnd: i.responseEnd,
                  workerStart: i.workerStart,
                  encodedBodySize: i.encodedBodySize,
                  decodedBodySize: i.decodedBodySize,
                  transferSize: i.transferSize,
                  serverTiming: o(i),
                }))
              : e.performance.timing &&
                ((t = e.performance.timing),
                0 !== t.navigationStart &&
                  t.responseEnd <= t.navigationStart + 36e5 &&
                  n.push({
                    name: e.location.href,
                    startTime: 0,
                    initiatorType: "html",
                    redirectStart: t.redirectStart
                      ? t.redirectStart - t.navigationStart
                      : 0,
                    redirectEnd: t.redirectEnd
                      ? t.redirectEnd - t.navigationStart
                      : 0,
                    fetchStart: t.fetchStart
                      ? t.fetchStart - t.navigationStart
                      : 0,
                    domainLookupStart: t.domainLookupStart
                      ? t.domainLookupStart - t.navigationStart
                      : 0,
                    domainLookupEnd: t.domainLookupEnd
                      ? t.domainLookupEnd - t.navigationStart
                      : 0,
                    connectStart: t.connectStart
                      ? t.connectStart - t.navigationStart
                      : 0,
                    secureConnectionStart: t.secureConnectionStart
                      ? t.secureConnectionStart - t.navigationStart
                      : 0,
                    connectEnd: t.connectEnd
                      ? t.connectEnd - t.navigationStart
                      : 0,
                    requestStart: t.requestStart
                      ? t.requestStart - t.navigationStart
                      : 0,
                    responseStart: t.responseStart
                      ? t.responseStart - t.navigationStart
                      : 0,
                    responseEnd: t.responseEnd
                      ? t.responseEnd - t.navigationStart
                      : 0,
                  }));
        }
        function E(e, t, n, o, a, s) {
          for (var u, c, l = [], d = 0; e && d < e.length; d++) {
            (c = e[d]),
              (u = {
                name: c.name,
                initiatorType: c.initiatorType,
                encodedBodySize: c.encodedBodySize,
                decodedBodySize: c.decodedBodySize,
                transferSize: c.transferSize,
                serverTiming: t(c),
                visibleDimensions: n[c.name],
                latestTime: F(c),
              });
            for (var m = 0; m < i.length; m++) {
              var g = i[m];
              u[g] = "startTime" === g || c[g] ? c[g] + o : 0;
            }
            if (
              (c.hasOwnProperty("_data") && (u._data = c._data),
              ("script" === c.initiatorType || "link" === c.initiatorType) &&
                a[c.name])
            ) {
              var O = a[c.name];
              u.scriptAttrs = (O.async ? f : 0) | (O.defer ? p : 0);
              while (1 === O.nodeType && "BODY" !== O.nodeName)
                O = O.parentNode;
              u.scriptAttrs |= "BODY" === O.nodeName ? h : 0;
            }
            "link" === c.initiatorType &&
              s[c.name] &&
              BOOMR.utils.arrayFind(
                s[c.name].rel.split(/[\u0009\u000A\u000C\u000D\u0020]+/),
                function (e) {
                  if (((e = e.toLowerCase()), r[e]))
                    return (u.linkAttrs = r[e]), !0;
                }
              ),
              l.push(u);
          }
          return l;
        }
        function T(e, t, n) {
          Array.prototype.forEach.call(
            e.ownerDocument.getElementsByTagName(n),
            function (n) {
              (e.href =
                n.currentSrc ||
                n.src ||
                ("function" === typeof n.getAttribute &&
                  n.getAttribute("xlink:href")) ||
                n.href),
                e.href.match(/^https?:\/\//) && (t[e.href] = n);
            }
          );
        }
        function x(e) {
          return "number" === typeof e && 0 !== e
            ? e.toString(36)
            : "string" === typeof e
            ? e
            : "";
        }
        function k(t, n) {
          var r,
            i,
            o = ["img", "iframe", "image"],
            a = {},
            s = t.document,
            u = s.createElement("A");
          return (
            (n = n || [0, 0, 0, 0]),
            (r =
              n[3] + (void 0 !== t.pageXOffset)
                ? t.pageXOffset
                : (s.documentElement || s.body.parentNode || s.body)
                    .scrollLeft),
            (i =
              n[2] + (void 0 !== t.pageYOffset)
                ? t.pageYOffset
                : (s.documentElement || s.body.parentNode || s.body).scrollTop),
            o.forEach(function (t) {
              var n,
                o,
                c,
                l,
                d = s.getElementsByTagName(t);
              for (o = 0; o < d.length; o++)
                if (
                  ((n = d[o]),
                  n &&
                    ((l =
                      n.currentSrc ||
                      n.src ||
                      ("function" === typeof n.getAttribute &&
                        n.getAttribute("src")) ||
                      n.getAttribute("xlink:href")),
                    (u.href = l),
                    (l = u.href),
                    l &&
                      !a[l] &&
                      ((c = n.getBoundingClientRect()),
                      (c.height || n.offsetHeight) &&
                        (c.width || n.offsetWidth))))
                ) {
                  if (
                    ((a[l] = [
                      c.height || n.offsetHeight,
                      c.width || n.offsetWidth,
                      Math.round(c.top + i),
                      Math.round(c.left + r),
                    ]),
                    !n.naturalHeight && !n.naturalWidth)
                  )
                    continue;
                  var f, p, h;
                  e.getSrcsetDimensions &&
                  n.currentSrc &&
                  (n.srcset ||
                    (n.parentNode &&
                      n.parentNode.nodeName &&
                      "PICTURE" === n.parentNode.nodeName.toUpperCase()))
                    ? ((f = n.isConnected
                        ? n.ownerDocument.createElement("IMG")
                        : new BOOMR.window.Image()),
                      (f.src = l))
                    : (f = n),
                    (p = f.naturalHeight || n.naturalHeight),
                    (h = f.naturalWidth || n.naturalWidth),
                    (!p && !h) ||
                      (a[l][0] === p && a[l][1] === h) ||
                      a[l].push(p, h);
                }
            }),
            a
          );
        }
        function P(e, t, n) {
          var r,
            i,
            o = w(BOOMR.window, !0, 0, 0),
            a = B(BOOMR.window),
            s = {};
          if (!o || !o.length) return { entries: [] };
          o.sort(function (e, t) {
            return e.startTime - t.startTime;
          });
          var u = [];
          for (r = 0; r < o.length; r++)
            if (
              ((i = o[r]),
              "string" === typeof i.name &&
                (0 === i.name.indexOf("http:") ||
                  0 === i.name.indexOf("https:")) &&
                !(
                  "function" === typeof BOOMR.getBeaconURL &&
                  BOOMR.getBeaconURL() &&
                  i.name.indexOf(BOOMR.getBeaconURL()) > -1
                ) &&
                !(e && a + i.startTime < e))
            ) {
              if (t && a + i.startTime > t) break;
              ("undefined" === typeof n ||
                "*" === n ||
                !n.length ||
                (i.initiatorType && BOOMR.utils.inArray(i.initiatorType, n))) &&
                (V(s, i.serverTiming), u.push(i));
            }
          var c = W(s);
          return { entries: u, serverTiming: { lookup: c, indexed: z(c) } };
        }
        function A(e) {
          var t, n, r, i;
          return e.encodedBodySize || e.decodedBodySize || e.transferSize
            ? ((t = e.transferSize),
              (n = e.encodedBodySize),
              (r = e.decodedBodySize),
              (i = [n, t ? t - n : "_", r ? r - n : 0]),
              i.map(x).join(",").replace(/,+$/, ""))
            : "";
        }
        function C(e, t) {
          var n, r;
          for (
            "undefined" === typeof t && (t = {}), n = e.split(","), r = 0;
            r < n.length;
            r++
          )
            "_" === n[r]
              ? (n[r] = 0)
              : ("" === n[r] && (n[r] = 0),
                (n[r] = parseInt(n[r], 36)),
                r > 0 && (n[r] += n[0]));
          return (
            1 === n.length && n.push(n[0]),
            2 === n.length && n.push(n[0]),
            (t.encodedBodySize = n[0]),
            (t.transferSize = n[1]),
            (t.decodedBodySize = n[2]),
            t
          );
        }
        function L(e) {
          var t,
            n,
            r,
            i = {},
            o = [0, 0, 0];
          for (t = e.split("!"), n = 0; n < t.length; n++)
            (r = t[n]
              .replace(/^~/, "Infinity~")
              .replace("-", "~0~")
              .split("~")
              .map(function (e, t) {
                return (
                  (e = "Infinity" === e ? 1 / 0 : parseInt(e, 36)),
                  2 === t ? (e = o[1] - e) : (e += o[t]),
                  (o[t] = e),
                  e
                );
              })),
              (i[r[0]] = [r[1], r[2] || r[1]]);
          return i;
        }
        function I(t, n) {
          var r, i, o;
          if (t && n)
            for (r = 0; r < n.length; r++)
              if (((o = n[r]), "string" === typeof o)) {
                if (((i = t.indexOf(o)), -1 !== i)) {
                  t = t.substr(0, i + o.length) + "...";
                  break;
                }
              } else
                o instanceof RegExp &&
                  o.test(t) &&
                  (t = t.replace(o, "$1") + "...");
          return BOOMR.utils.cleanupURL(t, e.urlLimit);
        }
        function F(e) {
          return e.responseEnd
            ? e.responseEnd
            : e.responseStart && e.startTime
            ? e.responseStart + 0.2 * (e.responseStart - e.startTime)
            : 1 / 0;
        }
        function H(e, t, n) {
          var r = BOOMR.window.screen,
            i = r.height,
            o = r.width;
          return t.reduce(function (e, t) {
            var r, a, s, u, c, l;
            if (
              ((r = Math.max(0, t[3])),
              (s = Math.max(0, t[2])),
              (a = Math.min(t[3] + t[1], o)),
              (u = Math.min(t[2] + t[0], i)),
              r >= a || s >= u)
            )
              return e;
            for (l = s; l < u; l++)
              for (e[l] || (e[l] = []), c = r; c < a; c++) e[l][c] = n;
            return e;
          }, e || []);
        }
        function N(e, t, n) {
          return (
            (t = t || 0),
            (n = n || 1 / 0),
            e.reduce(function (e, r) {
              return (
                e +
                r.filter(function (e) {
                  return t <= e && e <= n;
                }).length
              );
            }, 0)
          );
        }
        function U(e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            s,
            u,
            c,
            l,
            d = {},
            f = [];
          for (n = Object.keys(e), t = 0; t < n.length; t++)
            (o = Math.round(Number(n[t]))),
              "undefined" === typeof d[o] && (d[o] = []),
              Array.prototype.push.apply(d[o], e[n[t]]);
          if (
            ((n = Object.keys(d)
              .map(Number)
              .sort(function (e, t) {
                return e - t;
              })),
            0 === n.length)
          )
            return {};
          for (t = 0; t < n.length; t++)
            (o = n[t]), (r = H(r, d[o], o)), (s = N(r)), (n[t] = [o, s]);
          for (i = 0, a = 0, u = 0, t = 0; t < n.length; t++)
            (o = n[t][0]),
              (s = n[t][1]),
              (c = N(r, 0, o)),
              (s > a || c > u) &&
                ((l =
                  (o === 1 / 0 ? "" : x(Math.round(o - i))) +
                  "~" +
                  x(s - a) +
                  "~" +
                  x(s - c)),
                (l = l.replace(/~~/, "-").replace(/~$/, "")),
                f.push(l),
                (i = o),
                (a = s),
                (u = c));
          return f.join("!").replace(/!+$/, "");
        }
        function X(t, r) {
          var i,
            o,
            a,
            s,
            f,
            p = {},
            h = {},
            M = P(t, r, e.trackedResourceTypes),
            B = M.entries,
            w = M.serverTiming;
          if (!B || !B.length) return { restiming: {}, servertiming: [] };
          for (i = 0; i < B.length; i++) {
            (o = B[i]),
              (a = n[o.initiatorType]),
              "undefined" === typeof a && (a = 0),
              (f =
                a +
                [
                  b(o.startTime, 0),
                  b(o.responseEnd, o.startTime),
                  b(o.responseStart, o.startTime),
                  b(o.requestStart, o.startTime),
                  b(o.connectEnd, o.startTime),
                  b(o.secureConnectionStart, o.startTime),
                  b(o.connectStart, o.startTime),
                  b(o.domainLookupEnd, o.startTime),
                  b(o.domainLookupStart, o.startTime),
                  b(o.redirectEnd, o.startTime),
                  b(o.redirectStart, o.startTime),
                ]
                  .map(x)
                  .join(",")
                  .replace(/,+$/, ""));
            var S = A(o);
            if (
              ("" !== S && (f += u + l + S),
              o.hasOwnProperty("scriptAttrs") && (f += u + d + o.scriptAttrs),
              o.serverTiming &&
                o.serverTiming.length &&
                (f +=
                  u +
                  m +
                  o.serverTiming.reduce(function (e, t, n) {
                    var r = String(
                      "undefined" !== typeof t.duration ? t.duration : t.value
                    );
                    "0." === r.substring(0, 2) && (r = r.substring(1));
                    var i = t.name || t.metric,
                      o = G(
                        w.indexed[i].index,
                        w.indexed[i].descriptions[t.description]
                      );
                    return (e += (n > 0 ? "," : "") + r + o), e;
                  }, "")),
              o.hasOwnProperty("linkAttrs") && (f += u + g + o.linkAttrs),
              o.workerStart &&
                "number" === typeof o.workerStart &&
                0 !== o.workerStart)
            ) {
              var E = R(o.workerStart),
                T = b(E, o.startTime);
              f += u + v + x(T);
            }
            if (((s = I(o.name, e.trimUrls)), o.hasOwnProperty("_data"))) {
              var k = "";
              for (var C in o._data)
                o._data.hasOwnProperty(C) &&
                  (k += u + O + C + ":" + o._data[C]);
              "undefined" === typeof p[s] ? (p[s] = f + k) : (p[s] += k);
            } else
              void 0 !== p[s]
                ? (p[s] += "|" + f)
                : o.visibleDimensions
                ? (p[s] =
                    u +
                    c +
                    o.visibleDimensions
                      .map(Math.round)
                      .map(x)
                      .join(",")
                      .replace(/,+$/, "") +
                    "|" +
                    f)
                : (p[s] = f);
            o.visibleDimensions &&
              (h[o.latestTime] || (h[o.latestTime] = []),
              h[o.latestTime].push(o.visibleDimensions));
          }
          return {
            restiming: _(y(p, e.splitAtPath), !0),
            servertiming: w.lookup,
          };
        }
        function q(e) {
          var t = [];
          if (!e || !e.length) return t;
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (n !== e.length - 1 && r.fetchStart === e[n + 1].fetchStart) ||
              t.push({
                fetchStart: r.fetchStart,
                responseEnd: r.responseStart || r.responseEnd,
              });
          }
          return t;
        }
        function j(e) {
          var t;
          if (!e || !e.length) return 0;
          e.sort(function (e, t) {
            if (e.fetchStart !== t.fetchStart)
              return e.fetchStart - t.fetchStart;
            var n = e.responseStart || e.responseEnd,
              r = t.responseStart || t.responseEnd;
            return n - r;
          });
          var n = q(e),
            r = [],
            i = 0;
          for (t = 0; t < n.length; t++) {
            var o = n[t];
            o.fetchStart < i && (o.fetchStart = i),
              o.fetchStart < o.responseEnd && (r.push(o), (i = o.responseEnd));
          }
          var a = q(r),
            s = 0;
          for (t = 0; t < a.length; t++)
            s += a[t].responseEnd - a[t].fetchStart;
          return s;
        }
        function D(e, t) {
          var n;
          "undefined" !== typeof JSON &&
            ((n = X(e, t)),
            n &&
              (BOOMR.info("Client supports Resource Timing API", "restiming"),
              $(n)));
        }
        function V(e, t) {
          (t || []).forEach(function (t) {
            var n = t.name || t.metric;
            "undefined" === typeof e[n] && (e[n] = { count: 0, counts: {} });
            var r = e[n];
            (r.counts[t.description] = r.counts[t.description] || 0),
              r.counts[t.description]++,
              r.count++;
          });
        }
        function W(e) {
          return Object.keys(e)
            .sort(function (t, n) {
              return e[n].count - e[t].count;
            })
            .reduce(function (t, n) {
              var r = Object.keys(e[n].counts).sort(function (t, r) {
                return e[n].counts[r] - e[n].counts[t];
              });
              return (
                t.push(1 === r.length && "" === r[0] ? n : [n].concat(r)), t
              );
            }, []);
        }
        function z(e) {
          return e.reduce(function (e, t, n) {
            var r, i;
            return (
              Array.isArray(t)
                ? ((r = t[0]),
                  (i = t.slice(1).reduce(function (e, t, n) {
                    return (e[t] = n), e;
                  }, {})))
                : ((r = t), (i = { "": 0 })),
              (e[r] = { index: n, descriptions: i }),
              e
            );
          }, {});
        }
        function G(e, t) {
          var n = "";
          return (
            e && (n += e), t && (n += "." + t), n.length && (n = ":" + n), n
          );
        }
        function $(e) {
          BOOMR.addVar("restiming", JSON.stringify(e.restiming), !0),
            e.servertiming.length &&
              BOOMR.addVar(
                "servertiming",
                BOOMR.utils.serializeForUrl(e.servertiming),
                !0
              );
        }
        function Y(e, t) {
          var n = t.split(":"),
            r = Number(n[0]),
            i = 0,
            o = 0;
          if (n.length > 1) {
            var a = n[1].split(".");
            "" !== a[0] && (i = Number(a[0])),
              a.length > 1 && (o = Number(a[1]));
          }
          var s,
            u = "";
          return (
            Array.isArray(e[i])
              ? ((s = e[i][0]), (u = e[i][1 + o] || ""))
              : (s = e[i]),
            { name: s, duration: r, description: u }
          );
        }
      }
      function _() {
        if (!BOOMR.plugins.EventTiming) {
          var e = {
              click: 0,
              dblclick: 1,
              mousedown: 2,
              mouseup: 3,
              mousemove: 4,
              touchstart: 5,
              touchend: 6,
              touchmove: 7,
              keydown: 8,
              keyup: 9,
              keypress: 10,
              wheel: 11,
              pointerdown: 12,
              pointerup: 13,
              pointermove: 14,
              compositionstart: 17,
              compositionupdate: 18,
              compositionend: 19,
              contextmenu: 20,
            },
            t = {
              initialized: !1,
              supported: null,
              observerEvent: null,
              observerFirstInput: null,
              entries: [],
              firstInputDelay: null,
              timeToFirstInteraction: null,
              onBeforeBeacon: function () {
                var n;
                if (t.entries && t.entries.length) {
                  var r = [];
                  for (n = 0; n < t.entries.length; n++)
                    r.push({
                      n: e[t.entries[n].name]
                        ? e[t.entries[n].name]
                        : t.entries[n].name,
                      s: Math.round(t.entries[n].startTime).toString(36),
                      d: Math.round(t.entries[n].duration).toString(36),
                      p: Math.round(
                        t.entries[n].processingEnd -
                          t.entries[n].processingStart
                      ).toString(36),
                      c: t.entries[n].cancelable ? 1 : 0,
                      fi: "first-input" === t.entries[n].entryType ? 1 : void 0,
                    });
                  BOOMR.addVar("et.e", BOOMR.utils.serializeForUrl(r), !0);
                }
                (t.entries = []),
                  null !== t.firstInputDelay &&
                    (BOOMR.addVar("et.fid", Math.ceil(t.firstInputDelay), !0),
                    (t.firstInputDelay = null));
              },
              onEventTiming: function (e) {
                t.entries = t.entries.concat(e.getEntries());
              },
              onFirstInput: function (e) {
                var n = e.getEntries();
                (t.entries = t.entries.concat(n)),
                  (t.firstInputDelay = n[0].processingStart - n[0].startTime),
                  (t.timeToFirstInteraction = n[0].startTime);
              },
            };
          BOOMR.plugins.EventTiming = {
            init: function () {
              if (
                (this.is_supported() || (t.initialized = !0), !t.initialized)
              ) {
                BOOMR.subscribe("before_beacon", t.onBeforeBeacon, null, t);
                try {
                  var e = BOOMR.window;
                  (t.observerEvent = new e.PerformanceObserver(
                    t.onEventTiming
                  )),
                    t.observerEvent.observe({ type: ["event"], buffered: !0 }),
                    (t.observerFirstInput = new e.PerformanceObserver(
                      t.onFirstInput
                    )),
                    t.observerFirstInput.observe({
                      type: ["first-input"],
                      buffered: !0,
                    });
                } catch (n) {
                  t.supported = !1;
                }
                t.initialized = !0;
              }
              return this;
            },
            is_complete: function () {
              return !0;
            },
            is_enabled: function () {
              return t.initialized && this.is_supported();
            },
            is_supported: function () {
              if (null !== t.supported) return t.supported;
              var e = BOOMR.window,
                n = BOOMR.getPerformance();
              return (
                (t.supported =
                  n &&
                  "undefined" !== typeof e.PerformanceEventTiming &&
                  "function" === typeof e.PerformanceObserver),
                t.supported &&
                  BOOMR.info("This user agent supports EventTiming", "et"),
                t.supported
              );
            },
            stop: function () {
              t.observerEvent &&
                (t.observerEvent.disconnect(), (t.observerEvent = null)),
                t.observerFirstInput &&
                  (t.observerFirstInput.disconnect(),
                  (t.observerFirstInput = null));
            },
            metrics: {
              count: function () {
                return t.entries.length;
              },
              averageDuration: function () {
                if (0 === t.entries.length) return 0;
                for (var e = 0, n = 0; n < t.entries.length; n++)
                  e += t.entries[n].duration;
                return e / t.entries.length;
              },
              firstInputDelay: function () {
                return t.firstInputDelay;
              },
              timeToFirstInteraction: function () {
                return t.timeToFirstInteraction;
              },
            },
          };
        }
      }
      function R() {
        if (!BOOMR.plugins.UserTiming) {
          var e = {
            complete: !1,
            initialized: !1,
            supported: !1,
            options: { from: 0, window: BOOMR.window },
            getUserTiming: function () {
              var t = this.findUserTimingForFrame(e.options.window);
              e.options.from &&
                (t = t.filter(function (t) {
                  return t.startTime + t.duration >= e.options.from;
                }));
              var n,
                r =
                  window.UserTimingCompression ||
                  BOOMR.window.UserTimingCompression;
              if ("undefined" === typeof r) {
                if (0 === t.length) return null;
                for (
                  var i = this.getUserTimingMap(), o = 0, a = t.length;
                  o < a;
                  o++
                ) {
                  var s = t[o];
                  "measure" === s.entryType &&
                    0 === s.name.indexOf("x_") &&
                    (i[s.name]
                      ? i[s.name].push(s.duration)
                      : (i[s.name] = [s.duration]));
                }
                return JSON.stringify(i);
              }
              return (n = r.compressUserTiming(t)), r.compressForUri(n);
            },
            addEntriesToBeacon: function (e) {
              var t,
                n = BOOMR.hrNow();
              this.complete ||
                (e && "undefined" !== typeof e.early) ||
                ((t = this.getUserTiming()),
                t && BOOMR.addVar("usertiming", t, !0),
                (this.options.from = n),
                (this.complete = !0));
            },
            getUserTimingMap: function () {
              var e,
                t = BOOMR.getVar("usertiming");
              if (!t) return {};
              try {
                if (((e = JSON.parse(t)), u(e))) return e;
              } catch (n) {}
              return {};
            },
            findUserTimingForFrame: function (e) {
              var t;
              if (!e) return [];
              try {
                e.location && e.location.href;
                if (
                  !("performance" in e) ||
                  !e.performance ||
                  !e.performance.getEntriesByType
                )
                  return t;
                (t = e.performance.getEntriesByType("mark")),
                  (t = t.concat(e.performance.getEntriesByType("measure")));
              } catch (n) {
                return t;
              }
              return t;
            },
            clearMetrics: function (e) {
              this.complete = !1;
            },
            subscribe: function () {
              BOOMR.subscribe(
                "before_beacon",
                this.addEntriesToBeacon,
                null,
                this
              ),
                BOOMR.subscribe("beacon", this.clearMetrics, null, this);
            },
            pageReady: function () {
              this.checkSupport() && this.subscribe();
            },
            checkSupport: function () {
              if (this.supported) return !0;
              var e = BOOMR.getPerformance();
              if (e && "function" === typeof e.getEntriesByType) {
                var t = e.getEntriesByType("mark"),
                  n = e.getEntriesByType("measure");
                if (BOOMR.utils.isArray(t) && BOOMR.utils.isArray(n))
                  return (
                    BOOMR.info("Client supports UserTiming API", "usertiming"),
                    (this.supported = !0),
                    !0
                  );
              }
              return !1;
            },
          };
          BOOMR.plugins.UserTiming = {
            init: function (t) {
              return (
                e.initialized ||
                  (e.checkSupport()
                    ? e.subscribe()
                    : BOOMR.subscribe("page_ready", e.pageReady, null, e),
                  (e.initialized = !0)),
                this
              );
            },
            is_complete: function () {
              return !0;
            },
            is_supported: function () {
              return e.initialized && e.supported;
            },
            addUserTiming: function (t) {
              var n = e.getUserTimingMap();
              u(t) &&
                (Object.keys(t).forEach(function (e) {
                  var r = t[e];
                  a(r) && (r = [r]), n[e] ? n[e].concat(r) : (n[e] = r);
                }),
                n && BOOMR.addVar("usertiming", JSON.stringify(n), !0));
            },
          };
        }
      }
      function b(e) {
        var t,
          n,
          r = 604800,
          i = 1800,
          o = 1;
        BOOMR.plugins.RT ||
          ((n = {
            onloadfired: !1,
            unloadfired: !1,
            visiblefired: !1,
            initialized: !1,
            complete: !1,
            autorun: !0,
            timers: {},
            cookie: "RT",
            cookie_exp: r,
            session_exp: i,
            strict_referrer: !0,
            navigationType: 0,
            navigationStart: void 0,
            responseStart: void 0,
            loadTime: 0,
            oboError: 0,
            t_start: void 0,
            cached_t_start: void 0,
            cached_xhr_start: void 0,
            t_fb_approx: void 0,
            r: void 0,
            beacon_url: void 0,
            next_beacon_url: void 0,
            basic_timers: { t_done: 1, t_resp: 1, t_page: 1 },
            crossdomain_sending: !1,
            navigationStartSource: "",
            updateCookie: function (e, t) {
              var r, a, s, u;
              if (!this.cookie) return !1;
              for (u in ((s =
                BOOMR.utils.getSubCookies(BOOMR.utils.getCookie(this.cookie)) ||
                {}),
              s))
                s.hasOwnProperty(u) && (isNaN(parseInt(u, 10)) || delete s[u]);
              if ("object" === typeof e)
                for (u in e)
                  e.hasOwnProperty(u) &&
                    (void 0 === e[u]
                      ? s.hasOwnProperty(u) && delete s[u]
                      : (s[u] = e[u]));
              return (
                (s.z = o),
                (s.dm = BOOMR.session.domain),
                (s.si = BOOMR.session.ID),
                (s.ss = BOOMR.session.start.toString(36)),
                (s.sl = BOOMR.session.length.toString(36)),
                n.session_exp !== i && (s.se = n.session_exp.toString(36)),
                BOOMR.session.rate_limited && (s.rl = 1),
                (s.tt = this.loadTime.toString(36)),
                this.oboError > 0
                  ? (s.obo = this.oboError.toString(36))
                  : delete s.obo,
                (a = BOOMR.now()),
                t &&
                  ((s[t] = (a - BOOMR.session.start).toString(36)),
                  (n.lastActionTime = a)),
                this.beacon_url && (s.bcn = this.beacon_url),
                BOOMR.utils.setCookie(this.cookie, s, this.cookie_exp)
                  ? ((r = BOOMR.now()),
                    r - a > 50 &&
                      (BOOMR.utils.removeCookie(this.cookie),
                      BOOMR.error(
                        "took more than 50ms to set cookie... aborting: " +
                          a +
                          " -> " +
                          r,
                        "rt"
                      )),
                    !0)
                  : (BOOMR.error("cannot set start cookie", "rt"), !1)
              );
            },
            refreshSession: function (e) {
              e || (e = BOOMR.plugins.RT.getCookie()),
                e &&
                  (e.ss
                    ? (BOOMR.session.start = e.ss)
                    : (BOOMR.session.start =
                        BOOMR.plugins.RT.navigationStart() ||
                        BOOMR.t_lstart ||
                        BOOMR.t_start),
                  e.si && e.si.match(/-/) && (BOOMR.session.ID = e.si),
                  e.sl && (BOOMR.session.length = e.sl),
                  e.tt && (this.loadTime = e.tt),
                  e.obo && (this.oboError = e.obo),
                  e.dm &&
                    !BOOMR.session.domain &&
                    (BOOMR.session.domain = e.dm),
                  e.se && (n.session_exp = e.se),
                  e.bcn && (this.beacon_url = e.bcn),
                  e.rl && "1" === e.rl && (BOOMR.session.rate_limited = !0));
            },
            maybeResetSession: function (e, t) {
              var r = 0;
              BOOMR.session.start &&
                BOOMR.session.length &&
                (r =
                  (BOOMR.now() - BOOMR.session.start) / BOOMR.session.length);
              var i = 1e3 * n.session_exp;
              (!BOOMR.session.start ||
                (t && BOOMR.session.start > t) ||
                e - (n.lastActionTime || BOOMR.t_start) > i ||
                r > i) &&
                ((BOOMR.session.start =
                  t ||
                  BOOMR.plugins.RT.navigationStart() ||
                  BOOMR.t_lstart ||
                  BOOMR.t_start),
                (BOOMR.session.length = 0),
                (BOOMR.session.rate_limited = !1),
                (n.loadTime = 0),
                (n.oboError = 0),
                (n.beacon_url = n.next_beacon_url),
                (n.lastActionTime = e),
                n.updateCookie({
                  rl: void 0,
                  sl: BOOMR.session.length,
                  ss: BOOMR.session.start,
                  tt: n.loadTime,
                  obo: void 0,
                  bcn: n.beacon_url,
                }));
            },
            initFromCookie: function () {
              var e, n, r;
              (r = BOOMR.plugins.RT.getCookie()),
                this.cookie || (BOOMR.session.enabled = !1),
                r &&
                  ((r.s = Math.max(
                    +r.ld || 0,
                    Math.max(+r.ul || 0, +r.cl || 0)
                  )),
                  r.s &&
                    (r.r || r.nu) &&
                    ((this.r = r.r),
                    (e = BOOMR.utils.hashString(t.URL)),
                    (n = BOOMR.utils.hashString((t && t.referrer) || "")),
                    r.cl,
                    r.nu,
                    !this.strict_referrer ||
                    (r.cl && r.nu && r.nu === e && r.s < +r.cl + 15) ||
                    (r.s === +r.ul && this.r === n)
                      ? ((this.t_start = r.s),
                        +r.hd > r.s && (this.t_fb_approx = r.hd))
                      : (this.t_start = this.t_fb_approx = void 0)),
                  r.s && (this.lastActionTime = r.s),
                  this.refreshSession(r),
                  this.updateCookie({
                    s: void 0,
                    ul: void 0,
                    cl: void 0,
                    hd: void 0,
                    ld: void 0,
                    rl: void 0,
                    r: void 0,
                    nu: void 0,
                    sh: void 0,
                  }),
                  this.maybeResetSession(BOOMR.now()));
            },
            incrementSessionDetails: function () {
              BOOMR.session.length++,
                !n.timers.t_done || isNaN(n.timers.t_done.delta)
                  ? n.oboError++
                  : (n.loadTime += n.timers.t_done.delta);
            },
            getBoomerangTimings: function () {
              var e, t, n, r, i;
              function o(e, t) {
                var n = Math.round(e || 0),
                  r = Math.round(t || 0);
                return (n = 0 === n ? 0 : n - r), n || "";
              }
              BOOMR.t_start &&
                (BOOMR.plugins.RT.startTimer("boomerang", BOOMR.t_start),
                BOOMR.plugins.RT.endTimer("boomerang", BOOMR.t_end),
                BOOMR.plugins.RT.endTimer("boomr_fb", BOOMR.t_start),
                BOOMR.t_lstart &&
                  (BOOMR.plugins.RT.endTimer("boomr_ld", BOOMR.t_lstart),
                  BOOMR.plugins.RT.setTimer(
                    "boomr_lat",
                    BOOMR.t_start - BOOMR.t_lstart
                  )));
              try {
                if (
                  window &&
                  "performance" in window &&
                  window.performance &&
                  "function" === typeof window.performance.getEntriesByName
                )
                  for (n in ((t = { "rt.bmr": BOOMR.url }),
                  BOOMR.config_url && (t["rt.cnf"] = BOOMR.config_url),
                  t))
                    if (t.hasOwnProperty(n) && t[n]) {
                      if (
                        ((e = window.performance.getEntriesByName(t[n])),
                        !e || 0 === e.length || !e[0])
                      )
                        continue;
                      (e = e[0]),
                        (r = o(e.startTime, 0)),
                        (i = [
                          r,
                          o(e.responseEnd, r),
                          o(e.responseStart, r),
                          o(e.requestStart, r),
                          o(e.connectEnd, r),
                          o(e.secureConnectionStart, r),
                          o(e.connectStart, r),
                          o(e.domainLookupEnd, r),
                          o(e.domainLookupStart, r),
                          o(e.redirectEnd, r),
                          o(e.redirectStart, r),
                        ]
                          .join(",")
                          .replace(/,+$/, "")),
                        BOOMR.addVar(n, i, !0);
                    }
              } catch (a) {
                a &&
                  a.name &&
                  a.name.hasOwnProperty("length") &&
                  -1 === a.name.indexOf("NS_ERROR_FAILURE") &&
                  BOOMR.addError(a, "rt.getBoomerangTimings");
              }
            },
            checkPreRender: function () {
              return (
                "prerender" === BOOMR.visibilityState() &&
                (BOOMR.plugins.RT.startTimer("t_load", this.navigationStart),
                BOOMR.plugins.RT.endTimer("t_load"),
                BOOMR.plugins.RT.startTimer(
                  "t_prerender",
                  this.navigationStart
                ),
                BOOMR.plugins.RT.startTimer("t_postrender"),
                !0)
              );
            },
            initFromNavTiming: function () {
              var t, n;
              this.navigationStart ||
                ((n = BOOMR.getPerformance()),
                n && n.navigation && (this.navigationType = n.navigation.type),
                n && n.timing
                  ? ((t = n.timing),
                    (this.navigationStartSource = "navigation"))
                  : e.chrome && e.chrome.csi && e.chrome.csi().startE
                  ? ((t = { navigationStart: e.chrome.csi().startE }),
                    (this.navigationStartSource = "csi"))
                  : e.gtbExternal &&
                    e.gtbExternal.startE() &&
                    ((t = { navigationStart: e.gtbExternal.startE() }),
                    (this.navigationStartSource = "gtb")),
                t &&
                  ((this.navigationStart =
                    t.navigationStart || t.fetchStart || void 0),
                  (this.fetchStart = t.fetchStart || void 0),
                  (this.responseStart = t.responseStart || void 0),
                  navigator.userAgent.match(/Firefox\/[78]\./) &&
                    (this.navigationStart =
                      t.unloadEventStart || t.fetchStart || void 0)));
            },
            validateLoadTimestamp: function (e, t, n) {
              var r;
              return t && t.timing && t.timing.loadEventEnd
                ? t.timing.loadEventEnd
                : "xhr" !== n ||
                  (t &&
                    BOOMR.utils.inArray(
                      t.initiator,
                      BOOMR.constants.BEACON_TYPE_SPAS
                    ))
                ? ((r = BOOMR.getPerformance()),
                  r && r.timing
                    ? r.timing.loadEventEnd
                      ? r.timing.loadEventEnd
                      : e
                    : BOOMR.t_onload || BOOMR.t_lstart || BOOMR.t_start || e)
                : e;
            },
            setPageLoadTimers: function (e, t, r) {
              var i, o;
              if (
                "xhr" !== e &&
                ("early" !== e ||
                  !r ||
                  !BOOMR.utils.inArray(
                    r.initiator,
                    BOOMR.constants.BEACON_TYPE_SPAS
                  )) &&
                (n.initFromCookie(),
                n.initFromNavTiming(),
                BOOMR.addVar("rt.start", this.navigationStartSource),
                n.checkPreRender())
              )
                return !1;
              if ("xhr" === e)
                if (r.timers)
                  for (var a in r.timers)
                    r.timers.hasOwnProperty(a) &&
                      BOOMR.plugins.RT.setTimer(a, r.timers[a]);
                else
                  r &&
                    r.timing &&
                    ((o = r.timing.fetchStart),
                    ("undefined" === typeof o || r.timing.responseEnd >= o) &&
                      (i = r.timing.responseEnd));
              else
                n.responseStart
                  ? n.responseStart >= n.navigationStart &&
                    n.responseStart >= n.fetchStart &&
                    (i = n.responseStart)
                  : n.timers.hasOwnProperty("t_page")
                  ? BOOMR.plugins.RT.endTimer("t_page")
                  : n.t_fb_approx && (i = n.t_fb_approx);
              return (
                i &&
                  "early" !== e &&
                  (o
                    ? BOOMR.plugins.RT.setTimer("t_resp", o, i)
                    : BOOMR.plugins.RT.endTimer("t_resp", i),
                  "load" === e && n.timers.t_load
                    ? BOOMR.plugins.RT.setTimer(
                        "t_page",
                        n.timers.t_load.end - i
                      )
                    : t < i
                    ? BOOMR.addVar("t_page.inv", 1, !0)
                    : t - i === 0 &&
                      r &&
                      r.timing &&
                      r.timing.requestStart &&
                      n.timers.t_resp &&
                      n.timers.t_resp.delta
                    ? BOOMR.plugins.RT.setTimer(
                        "t_page",
                        t - r.timing.requestStart - n.timers.t_resp.delta
                      )
                    : BOOMR.plugins.RT.setTimer("t_page", t - i)),
                "load" === e &&
                  n.timers.hasOwnProperty("t_postrender") &&
                  (BOOMR.plugins.RT.endTimer("t_postrender"),
                  BOOMR.plugins.RT.endTimer("t_prerender")),
                !0
              );
            },
            setSupportingTimestamps: function (e, t) {
              e && BOOMR.addVar("rt.tstart", e, !0),
                "number" === typeof n.navigationStart &&
                  n.navigationStart !== e &&
                  BOOMR.addVar("rt.nstart", n.navigationStart, !0),
                "number" === typeof n.t_start &&
                  n.t_start !== e &&
                  BOOMR.addVar("rt.cstart", n.t_start, !0),
                BOOMR.addVar("rt.bstart", BOOMR.t_start, !0),
                BOOMR.t_lstart &&
                  BOOMR.addVar("rt.blstart", BOOMR.t_lstart, !0),
                "early" === t
                  ? BOOMR.addVar("rt.end", e || BOOMR.now(), !0)
                  : n.timers.t_done &&
                    BOOMR.addVar("rt.end", n.timers.t_done.end, !0);
            },
            determineTStart: function (e, t) {
              var r;
              return (
                "xhr" === e || ("early" === e && t && "spa" === t.initiator)
                  ? (t && t.name && n.timers[t.name]
                      ? (r = n.timers[t.name].start)
                      : t &&
                        t.timing &&
                        t.timing.requestStart &&
                        (r = t.timing.requestStart),
                    "undefined" === typeof r &&
                    t &&
                    BOOMR.utils.inArray(
                      t.initiator,
                      BOOMR.constants.BEACON_TYPE_SPAS
                    )
                      ? BOOMR.addVar("rt.start", "none")
                      : BOOMR.addVar("rt.start", "manual"),
                    (n.cached_xhr_start = r))
                  : (n.navigationStart
                      ? (r = n.navigationStart)
                      : n.t_start && 2 !== n.navigationType
                      ? ((r = n.t_start), BOOMR.addVar("rt.start", "cookie"))
                      : n.cached_t_start
                      ? (r = n.cached_t_start)
                      : (BOOMR.addVar("rt.start", "none"), (r = void 0)),
                    (n.cached_t_start = r)),
                r
              );
            },
            page_ready: function () {
              this.onloadfired = !0;
            },
            check_visibility: function () {
              "visible" === BOOMR.visibilityState() && (n.visiblefired = !0);
            },
            prerenderToVisible: function () {
              n.onloadfired &&
                n.autorun &&
                (BOOMR.addVar("vis.pre", "1", !0),
                BOOMR.plugins.RT.done(null, "visible"));
            },
            page_unload: function (e) {
              this.unloadfired || BOOMR.plugins.RT.done(e, "unload"),
                this.updateCookie(
                  !n.navigationStart && n.strict_referrer
                    ? { r: BOOMR.utils.hashString(t.URL) }
                    : null,
                  "beforeunload" === e.type ? "ul" : "hd"
                ),
                (this.unloadfired = !0);
            },
            _iterable_click: function (e, t, n, r) {
              var i;
              if (n) {
                while (n && n.nodeName && n.nodeName.toUpperCase() !== t)
                  n = n.parentNode;
                n &&
                  n.nodeName &&
                  n.nodeName.toUpperCase() === t &&
                  (this.refreshSession(),
                  this.maybeResetSession(BOOMR.now()),
                  (i = r(n)),
                  this.updateCookie({ nu: BOOMR.utils.hashString(i) }, "cl"),
                  BOOMR.addVar("nu", BOOMR.utils.cleanupURL(i), !0));
              }
            },
            onclick: function (e) {
              n._iterable_click("Click", "A", e, function (e) {
                return e.href;
              });
            },
            markComplete: function () {
              this.onloadfired && (n.complete = !0);
            },
            onsubmit: function (e) {
              n._iterable_click("Submit", "FORM", e, function (e) {
                var n =
                  ("function" === typeof e.getAttribute &&
                    e.getAttribute("action")) ||
                  t.URL ||
                  "";
                return n.match(/\?/) ? n : n + "?";
              });
            },
            onconfig: function (e) {
              e.beacon_url && (n.beacon_url = e.beacon_url),
                e.RT &&
                  (e.RT.oboError &&
                    !isNaN(e.RT.oboError) &&
                    e.RT.oboError > n.oboError &&
                    (n.oboError = e.RT.oboError),
                  e.RT.loadTime &&
                    !isNaN(e.RT.loadTime) &&
                    e.RT.loadTime > n.loadTime &&
                    ((n.loadTime = e.RT.loadTime),
                    n.timers.t_done &&
                      !isNaN(n.timers.t_done.delta) &&
                      (n.loadTime += n.timers.t_done.delta)));
            },
            domloaded: function () {
              BOOMR.plugins.RT && BOOMR.plugins.RT.endTimer("t_domloaded");
            },
            clear: function (e) {
              (e && "undefined" !== typeof e.early) ||
                BOOMR.removeVar("rt.start");
            },
            spaNavigation: function () {
              n.onloadfired = !0;
            },
          }),
          (BOOMR.plugins.RT = {
            init: function (r) {
              if (
                (e !== BOOMR.window && (e = BOOMR.window),
                r &&
                  r.CrossDomain &&
                  r.CrossDomain.sending &&
                  (n.crossdomain_sending = !0),
                e && e.document)
              )
                return (
                  (t = e.document),
                  BOOMR.utils.pluginConfig(n, r, "RT", [
                    "cookie",
                    "cookie_exp",
                    "session_exp",
                    "strict_referrer",
                  ]),
                  r &&
                    "undefined" !== typeof r.autorun &&
                    (n.autorun = r.autorun),
                  r &&
                    r.beacon_url &&
                    ((n.beacon_url && !r.force_beacon_url) ||
                      (n.beacon_url = r.beacon_url),
                    (n.next_beacon_url = r.beacon_url)),
                  "undefined" !== typeof t &&
                    (n.r = BOOMR.utils.hashQueryString(t.referrer, !0)),
                  n.initFromCookie(),
                  n.initialized ||
                    ((n.complete = !1),
                    (n.timers = {}),
                    n.check_visibility(),
                    BOOMR.subscribe("page_ready", n.page_ready, null, n),
                    BOOMR.subscribe(
                      "visibility_changed",
                      n.check_visibility,
                      null,
                      n
                    ),
                    BOOMR.subscribe(
                      "prerender_to_visible",
                      n.prerenderToVisible,
                      null,
                      n
                    ),
                    BOOMR.subscribe("page_ready", this.done, "load", this),
                    BOOMR.subscribe("xhr_load", this.done, "xhr", this),
                    BOOMR.subscribe(
                      "before_early_beacon",
                      this.done,
                      "early",
                      this
                    ),
                    BOOMR.subscribe("dom_loaded", n.domloaded, null, n),
                    BOOMR.subscribe("page_unload", n.page_unload, null, n),
                    BOOMR.subscribe("click", n.onclick, null, n),
                    BOOMR.subscribe("form_submit", n.onsubmit, null, n),
                    BOOMR.subscribe(
                      "before_beacon",
                      this.addTimersToBeacon,
                      "beacon",
                      this
                    ),
                    BOOMR.subscribe("beacon", n.clear, null, n),
                    BOOMR.subscribe("error", n.markComplete, null, n),
                    BOOMR.subscribe("config", n.onconfig, null, n),
                    BOOMR.subscribe("spa_navigation", n.spaNavigation, null, n),
                    BOOMR.subscribe("interaction", n.markComplete, null, n),
                    (BOOMR.getBeaconURL = function () {
                      return n.beacon_url;
                    }),
                    (n.initialized = !0)),
                  this
                );
            },
            startTimer: function (e, t) {
              return (
                e &&
                  ("t_page" === e && this.endTimer("t_resp", t),
                  (n.timers[e] = {
                    start: "number" === typeof t ? t : BOOMR.now(),
                  })),
                this
              );
            },
            endTimer: function (e, t) {
              return (
                e &&
                  ((n.timers[e] = n.timers[e] || {}),
                  void 0 === n.timers[e].end &&
                    (n.timers[e].end =
                      "number" === typeof t ? t : BOOMR.now())),
                this
              );
            },
            clearTimer: function (e) {
              return e && delete n.timers[e], this;
            },
            setTimer: function (e, t, r) {
              return (
                e &&
                  (n.timers[e] =
                    "undefined" !== typeof r
                      ? { start: t, end: r, delta: r - t }
                      : { delta: t }),
                this
              );
            },
            addTimersToBeacon: function (e, t) {
              var r,
                i,
                o = [];
              for (r in n.timers)
                if (n.timers.hasOwnProperty(r)) {
                  if (
                    ((i = n.timers[r]),
                    "number" !== typeof i.delta &&
                      ("number" !== typeof i.start &&
                        (i.start =
                          "xhr" === t ? n.cached_xhr_start : n.cached_t_start),
                      (i.delta = i.end - i.start)),
                    isNaN(i.delta))
                  )
                    continue;
                  n.basic_timers.hasOwnProperty(r)
                    ? BOOMR.addVar(r, i.delta, !0)
                    : o.push(r + "|" + i.delta);
                }
              o.length && BOOMR.addVar("t_other", o.join(","), !0),
                "beacon" !== t ||
                  (e && "undefined" !== typeof e.early) ||
                  ((n.timers = {}), (n.complete = !1));
            },
            done: function (e, t) {
              if (BOOMR.plugins.RT) {
                var r,
                  i,
                  o = BOOMR.now(),
                  a = !1;
                return (
                  (n.complete = !1),
                  (i = n.validateLoadTimestamp(o, e, t)),
                  ("load" !== t &&
                    "visible" !== t &&
                    "xhr" !== t &&
                    "early" !== t) ||
                  n.setPageLoadTimers(t, i, e)
                    ? (("load" === t ||
                        "visible" === t ||
                        ("early" === t &&
                          (!e ||
                            "undefined" === typeof e.initiator ||
                            "spa_hard" === e.initiator)) ||
                        ("xhr" === t && e && "spa_hard" === e.initiator)) &&
                        n.getBoomerangTimings(),
                      (r = n.determineTStart(t, e)),
                      n.refreshSession(),
                      n.maybeResetSession(i, r),
                      "early" !== t && this.endTimer("t_done", i),
                      e &&
                        "xhr" === e.initiator &&
                        this.setTimer(
                          "t_done",
                          e.timing.requestStart,
                          e.timing.loadEventEnd
                        ),
                      n.setSupportingTimestamps(r, t),
                      this.addTimersToBeacon(null, t),
                      BOOMR.setReferrer(n.r),
                      "xhr" === t && e && e && e.data && (e = e.data),
                      "xhr" === t &&
                        e &&
                        ((a = e.subresource),
                        e.url &&
                          BOOMR.addVar(
                            "u",
                            BOOMR.utils.cleanupURL(e.url.replace(/#.*/, ""))
                          ),
                        e.status &&
                          (e.status < -1 || e.status >= 400) &&
                          BOOMR.addVar("http.errno", e.status, !0),
                        e.method &&
                          "GET" !== e.method &&
                          BOOMR.addVar("http.method", e.method, !0),
                        e.type &&
                          "xhr" !== e.type &&
                          BOOMR.addVar("http.type", e.type[0], !0),
                        e.headers && BOOMR.addVar("http.hdr", e.headers, !0),
                        e.synchronous && BOOMR.addVar("xhr.sync", 1, !0),
                        e.initiator &&
                          BOOMR.addVar("http.initiator", e.initiator, !0),
                        e.responseBodyNotUsed &&
                          BOOMR.addVar("fetch.bnu", 1, !0),
                        e.responseUrl &&
                          BOOMR.addVar(
                            "xhr.ru",
                            BOOMR.utils.cleanupURL(e.responseUrl),
                            !0
                          )),
                      a && "passive" !== a && BOOMR.addVar("rt.subres", 1, !0),
                      ("load" === t ||
                        "visible" === t ||
                        ("xhr" === t && !a) ||
                        ("unload" === t &&
                          !n.onloadfired &&
                          n.autorun &&
                          !n.crossdomain_sending)) &&
                        (n.incrementSessionDetails(),
                        n.updateCookie(null, "ld")),
                      BOOMR.addVar(
                        { "rt.tt": n.loadTime, "rt.obo": n.oboError },
                        void 0,
                        !0
                      ),
                      n.updateCookie(),
                      "unload" === t &&
                        (BOOMR.addVar("rt.quit", "", !0),
                        n.onloadfired || BOOMR.addVar("rt.abld", "", !0),
                        n.visiblefired || BOOMR.addVar("rt.ntvu", "", !0)),
                      "early" !== t && (n.complete = !0),
                      BOOMR.sendBeacon(n.beacon_url),
                      this)
                    : this
                );
              }
            },
            is_complete: function (e) {
              return (
                n.complete ||
                (e && "error" === e["http.initiator"]) ||
                (e && "undefined" !== typeof e.early)
              );
            },
            updateCookie: function () {
              n.updateCookie();
            },
            getCookie: function () {
              var e, t, r;
              return (
                !!n.cookie &&
                ((e =
                  BOOMR.utils.getSubCookies(BOOMR.utils.getCookie(n.cookie)) ||
                  {}),
                e &&
                  (e.z & o
                    ? ((t = 36), (r = parseInt(e.ss || 0, 36)))
                    : ((t = 10), (r = 0)),
                  (e.ss = parseInt(e.ss || 0, t)),
                  (e.tt = parseInt(e.tt || 0, t)),
                  (e.obo = parseInt(e.obo || 0, t)),
                  (e.sl = parseInt(e.sl || 0, t)),
                  e.se && (e.se = parseInt(e.se, t) || i),
                  e.ld && (e.ld = r + parseInt(e.ld, t)),
                  e.ul && (e.ul = r + parseInt(e.ul, t)),
                  e.cl && (e.cl = r + parseInt(e.cl, t)),
                  e.hd && (e.hd = r + parseInt(e.hd, t))),
                e)
              );
            },
            incrementSessionDetails: function () {
              n.incrementSessionDetails();
            },
            navigationStart: function () {
              return (
                n.navigationStart || n.initFromNavTiming(), n.navigationStart
              );
            },
            resetTimings: function () {
              (n.navigationStart = void 0),
                (n.responseStart = void 0),
                (n.loadTime = 0),
                (n.cached_t_start = void 0);
            },
          }));
      }
      function M() {
        var e,
          t = !1,
          n = !1,
          r = !1,
          i = !1,
          o = !1,
          a = !0,
          s = !1,
          u = !1,
          c = [],
          d = !1;
        if (!BOOMR.plugins.SPA && BOOMR.plugins.AutoXHR) {
          var f = {
            spaHardMissedOnComplete: function (e) {
              var t,
                n,
                r = BOOMR.plugins.RT && BOOMR.plugins.RT.navigationStart(),
                i = BOOMR.plugins.AutoXHR.getMutationHandler();
              (d = !1),
                BOOMR.addVar("spa.missed", "1", !0),
                BOOMR.plugins.RT && BOOMR.plugins.RT.clearTimer("t_done"),
                (e.timing.requestStart = r),
                (n = i.pending_events[e.index]),
                (n && 0 !== n.total_nodes) ||
                  ((t = BOOMR.getPerformance()),
                  t &&
                    t.timing &&
                    t.timing.navigationStart &&
                    t.timing.loadEventEnd &&
                    "undefined" === typeof e.timing.loadEventEnd &&
                    (e.timing.loadEventEnd = t.timing.loadEventEnd));
            },
            pageReady: function () {
              i = !0;
            },
          };
          (BOOMR.plugins.SPA = {
            is_complete: function (e) {
              return (
                !d ||
                (e &&
                  ("error" === e["http.initiator"] ||
                    "undefined" !== typeof e.early))
              );
            },
            init: function (e) {
              e &&
                e.instrument_xhr &&
                ((o = e.instrument_xhr),
                r && o && BOOMR.plugins.AutoXHR.enableAutoXhr()),
                n ||
                  ((n = !0),
                  BOOMR.subscribe("page_ready", f.pageReady, null, f));
            },
            register: function (e) {
              c.push(e);
            },
            supported_frameworks: function () {
              return c;
            },
            onLoadSpaHardMissed: function () {
              r ||
                ((i = !0),
                o && BOOMR.plugins.AutoXHR.enableAutoXhr(),
                (d = !0),
                u
                  ? (d = !1)
                  : BOOMR.plugins.SPA.route_change(f.spaHardMissedOnComplete));
            },
            hook: function (e, n) {
              return (
                (n = n || {}),
                "function" === typeof n.routeFilter && (s = n.routeFilter),
                "function" === typeof n.routeChangeWaitFilter &&
                  n.routeChangeWaitFilter,
                "boolean" === typeof n.routeChangeWaitFilterHardNavs &&
                  n.routeChangeWaitFilterHardNavs,
                n.disableHardNav && (u = n.disableHardNav),
                t ||
                  (e && BOOMR.attach_page_ready(this.onLoadSpaHardMissed),
                  (t = !0)),
                this
              );
            },
            route_change: function (t, n) {
              BOOMR.fireEvent("route_change");
              var c = !1,
                d = a && !u ? "spa_hard" : "spa",
                f = BOOMR.plugins.RT && BOOMR.plugins.RT.navigationStart(),
                p = i ? BOOMR.now() : f,
                h = BOOMR.window.document.URL,
                m = { timing: { requestStart: p }, initiator: d, url: h };
              if ("spa" === d && e && !e.complete)
                try {
                  if (!l(e, m)) return;
                } catch (g) {
                  BOOMR.addError(g, "SPA.route_change.routeChangeWaitFilter");
                }
              if ("spa" === d && s)
                try {
                  if (!s.apply(null, n)) return;
                } catch (g) {
                  BOOMR.addError(g, "SPA.route_change.routeFilter");
                }
              (r = !0),
                BOOMR.fireEvent("spa_init", [
                  BOOMR.plugins.SPA.current_spa_nav(),
                  h,
                ]),
                (a = !1),
                (i && "function" !== typeof t) ||
                  ((i = !0),
                  (m.onComplete = function (e) {
                    c || ((c = !0), BOOMR.fireEvent("spa_navigation")),
                      "function" === typeof t && t(e);
                  })),
                (e = m),
                (m.index =
                  BOOMR.plugins.AutoXHR.getMutationHandler().addEvent(m)),
                o && BOOMR.plugins.AutoXHR.enableAutoXhr();
            },
            last_location: function (e) {
              lastLocationChange = e;
            },
            current_spa_nav: function () {
              return i ? "spa" : "spa_hard";
            },
            wait_complete: function () {
              e &&
                ((e.wait = !1), e.waitComplete && e.waitComplete(), (e = null));
            },
            markNavigationComplete: function () {
              var t,
                n,
                r = BOOMR.plugins.AutoXHR.getMutationHandler();
              if (
                (e && e.wait && BOOMR.plugins.SPA.wait_complete(),
                r && r.pending_events.length > 0)
              )
                for (t = r.pending_events.length - 1; t >= 0; t--)
                  if (
                    ((n = r.pending_events[t]),
                    n &&
                      BOOMR.utils.inArray(
                        n.type,
                        BOOMR.constants.BEACON_TYPE_SPAS
                      ))
                  ) {
                    if (n.complete) break;
                    return (
                      r.nodesWaitingFor(t),
                      BOOMR.addVar("spa.forced", "1", !0),
                      BOOMR.addVar("spa.waiting", r.nodesWaitingFor(), !0),
                      void r.completeEvent(t)
                    );
                  }
            },
            isSpaNavInProgress: function () {
              var e,
                t,
                n = BOOMR.plugins.AutoXHR.getMutationHandler();
              if (n && n.pending_events.length > 0)
                for (e = n.pending_events.length - 1; e >= 0; e--)
                  if (
                    ((t = n.pending_events[e]),
                    t &&
                      BOOMR.utils.inArray(
                        t.type,
                        BOOMR.constants.BEACON_TYPE_SPAS
                      ))
                  )
                    return !t.complete;
              return !1;
            },
            isSinglePageApp: function (e) {
              for (
                var t = !1, n = this.supported_frameworks(), r = 0;
                r < n.length;
                r++
              ) {
                var i = n[r];
                if (e[i] && e[i].enabled) {
                  t = !0;
                  break;
                }
              }
              return t;
            },
          }),
            (BOOMR.plugins.SPA.waitComplete = BOOMR.plugins.SPA.wait_complete);
        }
      }
      f();
      var B = (function () {
        function e(e) {
          (e &&
            e.ignoreUrls &&
            e.ignoreUrls.length &&
            this.shouldIgnoreUrls(e.ignoreUrls)) ||
            ((this.BOOMR = p(window)),
            this.BOOMR.addVar("token", e.token),
            e && this.initOptions(e));
        }
        return (
          (e.prototype.shouldIgnoreUrls = function (e) {
            return c(e, location.href);
          }),
          (e.prototype.initOptions = function (e) {
            this.installPlugins();
            var t = e.sampleRate || 1,
              n = e.interactionSampleRate || 0.1;
            for (var r in (this.BOOMR.init({
              beacon_url: "https://fclog.baidu.com/log/weirwood?type=perf",
              autorun: !1,
              History: { auto: !0 },
              instrument_xhr: !0,
              monitor_fetch: !0,
              ResourceTiming: {
                clearOnBeacon: !0,
                monitorClearResourceTimings: !0,
              },
              Continuity: {
                monitorLongTasks: !0,
                monitorPageBusy: !0,
                monitorFrameRate: !0,
                monitorInteractions: !0,
                monitorStats: !1,
                ttiWaitForXHRDone: e.ttiWaitForXHRDone || !0,
                ttiWaitForXHRIgnore: e.ttiWaitForXHRIgnore || [],
                waitAfterOnload: e.waitAfterOnload || !1,
                afterOnload: e.afterOnload || !1,
              },
              sampleRate: t,
              interactionSampleRate: t * n,
              normalizeUrl: e.normalizeUrl,
              initiatorTypes: e.initiatorTypes || ["spa_hard", "spa", "xhr"],
              ignoreXhrs: e.ignoreXhrs || [],
              sendWindow: e.sendWindow || window,
            }),
            this.BOOMR))
              this.BOOMR.hasOwnProperty(r) && (this[r] = this.BOOMR[r]);
          }),
          (e.prototype.installPlugins = function () {
            var e = r(window);
            this.BOOMR.addVar("speedIndex", e, !0),
              m(),
              h(),
              M(),
              g(),
              b(window),
              v(),
              O(),
              y(),
              R(),
              _();
          }),
          (e.prototype.uninstall = function () {
            var e = this.BOOMR,
              t = e.plugins;
            e.disable(),
              Object.keys(t).forEach(function (e) {
                t[e].disable && t[e].disable();
              }),
              e.orig_XMLHttpRequest &&
                e.orig_XMLHttpRequest !== window.XMLHttpRequest &&
                (window.XMLHttpRequest = e.orig_XMLHttpRequest);
          }),
          (e.prototype.addUserTiming = function (e) {
            var t = this.BOOMR;
            t.plugins.UserTiming &&
              t.plugins.UserTiming.addUserTiming &&
              t.plugins.UserTiming.addUserTiming(e);
          }),
          e
        );
      })();
      n.A = B;
    },
    15810: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Client: function () {
            return Rt;
          },
          init: function () {
            return bt;
          },
        });
      var r = function () {
        return (
          (r =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in ((t = arguments[n]), t))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          r.apply(this, arguments)
        );
      };
      function i(e) {
        var t = "function" === typeof Symbol && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && "number" === typeof e.length)
          return {
            next: function () {
              return (
                e && r >= e.length && (e = void 0),
                { value: e && e[r++], done: !e }
              );
            },
          };
        throw new TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function o(e, t) {
        var n = "function" === typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          i,
          o = n.call(e),
          a = [];
        try {
          while ((void 0 === t || t-- > 0) && !(r = o.next()).done)
            a.push(r.value);
        } catch (s) {
          i = { error: s };
        } finally {
          try {
            r && !r.done && (n = o["return"]) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return a;
      }
      function a() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(o(arguments[t]));
        return e;
      }
      var s = n(7348);
      function u(e) {
        switch (Object.prototype.toString.call(e)) {
          case "[object Error]":
            return !0;
          case "[object Exception]":
            return !0;
          case "[object DOMException]":
            return !0;
          default:
            return e instanceof Error;
        }
      }
      function c(e) {
        return "[object ErrorEvent]" === Object.prototype.toString.call(e);
      }
      function l(e) {
        return "[object DOMException]" === Object.prototype.toString.call(e);
      }
      function d(e) {
        return void 0 === e;
      }
      function f(e) {
        return "function" === typeof e;
      }
      function p(e) {
        return "[object String]" === Object.prototype.toString.call(e);
      }
      function h(e) {
        return "[object Number]" === Object.prototype.toString.call(e);
      }
      function m(e) {
        return "[object Boolean]" === Object.prototype.toString.call(e);
      }
      function g(e) {
        return "[object Array]" === Object.prototype.toString.call(e);
      }
      function O(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function v(e) {
        return "[object RegExp]" === Object.prototype.toString.call(e);
      }
      function y(e) {
        if (!O(e)) return !1;
        for (var t in e) if (e.hasOwnProperty(t)) return !1;
        return !0;
      }
      function _(e) {
        return "object" === typeof e && null !== e;
      }
      var R = {};
      function b() {
        return "undefined" !== typeof globalThis
          ? globalThis
          : "undefined" !== typeof window
          ? window
          : "undefined" !== typeof n.g
          ? n.g
          : "undefined" !== typeof self
          ? self
          : R;
      }
      /**
       * TraceKit - Cross brower stack traces
       *
       * This was originally forked from github.com/occ/TraceKit, but has since been
       * largely modified and is now maintained as part of Sentry JS SDK.
       *
       * NOTE: Last merge with upstream repository
       * Jul 11,2018 - #f03357c
       *
       * https://github.com/csnover/TraceKit
       * @license MIT
       * @namespace TraceKit
       */
      var M = b(),
        B = {
          wrap: function () {
            return function () {};
          },
          report: !1,
          collectWindowErrors: !1,
          computeStackTrace: !1,
          remoteFetching: !1,
          linesOfContext: !1,
          extendToAsynchronousCallbacks: !1,
        },
        w = [].slice,
        S = "?",
        E =
          /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;
      function T(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      function x() {
        return "undefined" === typeof document || null == document.location
          ? ""
          : document.location.href;
      }
      function k() {
        return "undefined" === typeof document || null == document.location
          ? ""
          : document.location.origin
          ? document.location.origin
          : document.location.protocol +
            "//" +
            document.location.hostname +
            (document.location.port ? ":" + document.location.port : "");
      }
      (B.wrap = function (e) {
        function t() {
          try {
            return e.apply(this, arguments);
          } catch (t) {
            throw (B.report(t), t);
          }
        }
        return t;
      }),
        (B.report = (function () {
          var e,
            t,
            n,
            i,
            o = [],
            a = null,
            s = null;
          function l(e) {
            o.push(e);
          }
          function d(e) {
            for (var t = o.length - 1; t >= 0; --t)
              o[t] === e && o.splice(t, 1);
            0 === o.length && (g(), v());
          }
          function f(e, t, n, r, i, a) {
            var s = null;
            if (!t || B.collectWindowErrors) {
              for (var u in o)
                if (T(o, u))
                  try {
                    o[u](e, t, n, r, i, a);
                  } catch (c) {
                    s = c;
                  }
              if (s) throw s;
            }
          }
          function p(t, n, i, o, a) {
            var l = null;
            if (((a = c(a) ? a.error : a), (t = c(t) ? t.message : t), s))
              B.computeStackTrace.augmentStackTraceWithInitialElement(
                s,
                n,
                i,
                t
              ),
                y();
            else if (a && u(a))
              (l = B.computeStackTrace(a)),
                (l.mechanism = "onerror"),
                f(l, !0, a, n, i, o);
            else {
              var d,
                p = { url: n, line: i, column: o },
                h = t;
              if ("[object String]" === {}.toString.call(t)) {
                var m = t.match(E);
                m && ((d = m[1]), (h = m[2]));
              }
              (p.func = B.computeStackTrace.guessFunctionName(p.url, p.line)),
                (p.context = B.computeStackTrace.gatherContext(p.url, p.line)),
                (l = {
                  name: d,
                  message: h,
                  mode: "onerror",
                  mechanism: "onerror",
                  stack: [r(r({}, p), { url: p.url || x() })],
                }),
                f(l, !0, null, n, i, o);
            }
            return !!e && e.apply(this, arguments);
          }
          function h(e) {
            var t = (e && (e.detail ? e.detail.reason : e.reason)) || e,
              n = B.computeStackTrace(t);
            (n.mechanism = "onunhandledrejection"), f(n, !0, t);
          }
          function m() {
            !0 !== t && ((e = M.onerror), (M.onerror = p), (t = !0));
          }
          function g() {
            t && ((M.onerror = e), (t = !1));
          }
          function O() {
            !0 !== i &&
              ((n = M.onunhandledrejection),
              (M.onunhandledrejection = h),
              (i = !0));
          }
          function v() {
            i && ((M.onunhandledrejection = n), (i = !1));
          }
          function y() {
            var e = s,
              t = a;
            (s = null), (a = null), f(e, !1, t);
          }
          function _(e) {
            if (s) {
              if (a === e) return;
              y();
            }
            var t = B.computeStackTrace(e);
            throw (
              ((s = t),
              (a = e),
              setTimeout(
                function () {
                  a === e && y();
                },
                t.incomplete ? 2e3 : 0
              ),
              e)
            );
          }
          return (
            (_.subscribe = l),
            (_.unsubscribe = d),
            (_.installGlobalHandler = m),
            (_.installGlobalUnhandledRejectionHandler = O),
            _
          );
        })()),
        (B.computeStackTrace = (function () {
          var e = !1,
            t = {};
          function n(e) {
            if (!B.remoteFetching) return "";
            try {
              var t = function () {
                  try {
                    return new M.XMLHttpRequest();
                  } catch (e) {
                    return new M.ActiveXObject("Microsoft.XMLHTTP");
                  }
                },
                n = t();
              return n.open("GET", e, !1), n.send(""), n.responseText;
            } catch (r) {
              return "";
            }
          }
          function r(e) {
            if ("string" !== typeof e) return [];
            if (!T(t, e)) {
              var r = "",
                i = "";
              try {
                i = M.document.domain;
              } catch (a) {}
              var o = /(.*)\:\/\/([^:\/]+)([:\d]*)\/{0,1}([\s\S]*)/.exec(e);
              o && o[2] === i && (r = n(e)), (t[e] = r ? r.split("\n") : []);
            }
            return t[e];
          }
          function i(e, t) {
            var n,
              i = /function ([^(]*)\(([^)]*)\)/,
              o =
                /['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/,
              a = "",
              s = 10,
              u = r(e);
            if (!u.length) return S;
            for (var c = 0; c < s; ++c)
              if (((a = u[t - c] + a), !d(a))) {
                if ((n = o.exec(a))) return n[1];
                if ((n = i.exec(a))) return n[1];
              }
            return S;
          }
          function o(e, t) {
            var n = r(e);
            if (!n.length) return null;
            var i = [],
              o = Math.floor(B.linesOfContext / 2),
              a = o + (B.linesOfContext % 2),
              s = Math.max(0, t - o - 1),
              u = Math.min(n.length, t + a - 1);
            t -= 1;
            for (var c = s; c < u; ++c) d(n[c]) || i.push(n[c]);
            return i.length > 0 ? i : null;
          }
          function a(e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g, "\\$&");
          }
          function s(e) {
            return a(e)
              .replace("<", "(?:<|&lt;)")
              .replace(">", "(?:>|&gt;)")
              .replace("&", "(?:&|&amp;)")
              .replace('"', '(?:"|&quot;)')
              .replace(/\s+/g, "\\s+");
          }
          function u(e, t) {
            for (var n, i, o = 0, a = t.length; o < a; ++o)
              if ((n = r(t[o])).length && ((n = n.join("\n")), (i = e.exec(n))))
                return {
                  url: t[o],
                  line: n.substring(0, i.index).split("\n").length,
                  column: i.index - n.lastIndexOf("\n", i.index) - 1,
                };
            return null;
          }
          function c(e, t, n) {
            var i,
              o = r(t),
              s = new RegExp("\\b" + a(e) + "\\b");
            return (
              (n -= 1), o && o.length > n && (i = s.exec(o[n])) ? i.index : null
            );
          }
          function l(e) {
            if (!d(M && M.document)) {
              for (
                var t,
                  n,
                  r,
                  i,
                  o = [x()],
                  c = M.document.getElementsByTagName("script"),
                  l = "" + e,
                  f =
                    /^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/,
                  p =
                    /^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/,
                  h = 0;
                h < c.length;
                ++h
              ) {
                var m = c[h];
                m.src && o.push(m.src);
              }
              if ((r = f.exec(l))) {
                var g = r[1] ? "\\s+" + r[1] : "",
                  O = r[2].split(",").join("\\s*,\\s*");
                (t = a(r[3]).replace(/;$/, ";?")),
                  (n = new RegExp(
                    "function" +
                      g +
                      "\\s*\\(\\s*" +
                      O +
                      "\\s*\\)\\s*{\\s*" +
                      t +
                      "\\s*}"
                  ));
              } else n = new RegExp(a(l).replace(/\s+/g, "\\s+"));
              if ((i = u(n, o))) return i;
              if ((r = p.exec(l))) {
                var v = r[1];
                if (
                  ((t = s(r[2])),
                  (n = new RegExp(
                    "on" + v + "=[\\'\"]\\s*" + t + "\\s*[\\'\"]",
                    "i"
                  )),
                  (i = u(n, o[0])))
                )
                  return i;
                if (((n = new RegExp(t)), (i = u(n, o)))) return i;
              }
              return null;
            }
          }
          function f(e) {
            if (!e.stack) return null;
            for (
              var t,
                n,
                r,
                a,
                s =
                  /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
                u =
                  /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
                l =
                  /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
                f = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
                p = /\((\S*)(?::(\d+))(?::(\d+))\)/,
                h = e.stack.split("\n"),
                m = [],
                g = /^(.*) is undefined$/.exec(e.message),
                O = 0,
                v = h.length;
              O < v;
              ++O
            ) {
              if ((r = s.exec(h[O]))) {
                var y = r[2] && 0 === r[2].indexOf("native");
                (t = r[2] && 0 === r[2].indexOf("eval")),
                  t && (n = p.exec(r[2])) && (r[2] = n[1]),
                  (a = {
                    url: y ? null : r[2],
                    func: r[1] || S,
                    args: y ? [r[2]] : [],
                    line: r[3] ? +r[3] : null,
                    column: r[4] ? +r[4] : null,
                  });
              } else if ((r = l.exec(h[O])))
                a = {
                  url: r[2],
                  func: r[1] || S,
                  args: [],
                  line: +r[3],
                  column: r[4] ? +r[4] : null,
                };
              else {
                if (!(r = u.exec(h[O]))) continue;
                (t = r[3] && r[3].indexOf(" > eval") > -1),
                  t && (n = f.exec(r[3]))
                    ? (r[3] = n[1])
                    : 0 !== O ||
                      r[5] ||
                      d(e.columnNumber) ||
                      (m[0].column = e.columnNumber + 1),
                  (a = {
                    url: r[3],
                    func: r[1] || S,
                    args: r[2] ? r[2].split(",") : [],
                    line: r[4] ? +r[4] : null,
                    column: r[5] ? +r[5] : null,
                  });
              }
              if (
                (!a.func && a.line && (a.func = i(a.url, a.line)),
                B.remoteFetching && a.url && "blob:" === a.url.substr(0, 5))
              ) {
                var _ = new XMLHttpRequest();
                if ((_.open("GET", a.url, !1), _.send(""), 200 === _.status)) {
                  var R = _.responseText || "";
                  R = R.slice(-300);
                  var b = R.match(/\/\/# sourceMappingURL=(.*)$/);
                  if (b) {
                    var M = b[1];
                    "~" === M.charAt(0) && (M = k() + M.slice(1)),
                      (a.url = M.slice(0, -4));
                  }
                }
              }
              (a.context = a.line ? o(a.url, a.line) : null), m.push(a);
            }
            return m.length
              ? (m[0] &&
                  m[0].line &&
                  !m[0].column &&
                  g &&
                  (m[0].column = c(g[1], m[0].url, m[0].line)),
                { mode: "stack", name: e.name, message: e.message, stack: m })
              : null;
          }
          function p(e) {
            var t = e.stacktrace;
            if (t) {
              for (
                var n,
                  r =
                    / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
                  a =
                    / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i,
                  s = t.split("\n"),
                  u = [],
                  c = 0;
                c < s.length;
                c += 2
              ) {
                var l = null;
                if (
                  ((n = r.exec(s[c]))
                    ? (l = {
                        url: n[2],
                        line: +n[1],
                        column: null,
                        func: n[3],
                        args: [],
                      })
                    : (n = a.exec(s[c])) &&
                      (l = {
                        url: n[6],
                        line: +n[1],
                        column: +n[2],
                        func: n[3] || n[4],
                        args: n[5] ? n[5].split(",") : [],
                      }),
                  l)
                ) {
                  if (
                    (!l.func && l.line && (l.func = i(l.url, l.line)), l.line)
                  )
                    try {
                      l.context = o(l.url, l.line);
                    } catch (d) {}
                  l.context || (l.context = [s[c + 1]]), u.push(l);
                }
              }
              return u.length
                ? {
                    mode: "stacktrace",
                    name: e.name,
                    message: e.message,
                    stack: u,
                  }
                : null;
            }
          }
          function h(e) {
            var t = e.message.split("\n");
            if (t.length < 4) return null;
            var n,
              a =
                /^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
              c =
                /^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
              l = /^\s*Line (\d+) of function script\s*$/i,
              d = [],
              f = M && M.document && M.document.getElementsByTagName("script"),
              p = [];
            for (var h in f) T(f, h) && !f[h].src && p.push(f[h]);
            for (var m = 2; m < t.length; m += 2) {
              var g = null;
              if ((n = a.exec(t[m])))
                g = {
                  url: n[2],
                  func: n[3],
                  args: [],
                  line: +n[1],
                  column: null,
                };
              else if ((n = c.exec(t[m]))) {
                g = {
                  url: n[3],
                  func: n[4],
                  args: [],
                  line: +n[1],
                  column: null,
                };
                var O = +n[1],
                  v = p[n[2] - 1];
                if (v) {
                  var y = r(g.url);
                  if (y) {
                    y = y.join("\n");
                    var _ = y.indexOf(v.innerText);
                    _ >= 0 &&
                      (g.line = O + y.substring(0, _).split("\n").length);
                  }
                }
              } else if ((n = l.exec(t[m]))) {
                var R = x().replace(/#.*$/, ""),
                  b = new RegExp(s(t[m + 1])),
                  B = u(b, [R]);
                g = {
                  url: R,
                  func: "",
                  args: [],
                  line: B ? B.line : n[1],
                  column: null,
                };
              }
              if (g) {
                g.func || (g.func = i(g.url, g.line));
                var w = o(g.url, g.line),
                  S = w ? w[Math.floor(w.length / 2)] : null;
                w && S.replace(/^\s*/, "") === t[m + 1].replace(/^\s*/, "")
                  ? (g.context = w)
                  : (g.context = [t[m + 1]]),
                  d.push(g);
              }
            }
            return d.length
              ? { mode: "multiline", name: e.name, message: t[0], stack: d }
              : null;
          }
          function m(e, t, n, r) {
            var a = { url: t, line: n };
            if (a.url && a.line) {
              (e.incomplete = !1),
                a.func || (a.func = i(a.url, a.line)),
                a.context || (a.context = o(a.url, a.line));
              var s = / '([^']+)' /.exec(r);
              if (
                (s && (a.column = c(s[1], a.url, a.line)),
                e.stack.length > 0 && e.stack[0].url === a.url)
              ) {
                if (e.stack[0].line === a.line) return !1;
                if (!e.stack[0].line && e.stack[0].func === a.func)
                  return (
                    (e.stack[0].line = a.line),
                    (e.stack[0].context = a.context),
                    !1
                  );
              }
              return e.stack.unshift(a), (e.partial = !0), !0;
            }
            return (e.incomplete = !0), !1;
          }
          function g(e, t) {
            for (
              var n,
                r,
                o,
                a =
                  /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,
                s = [],
                u = {},
                d = !1,
                f = g.caller;
              f && !d;
              f = f.caller
            )
              if (f !== O && f !== B.report) {
                if (
                  ((r = {
                    url: null,
                    func: S,
                    args: [],
                    line: null,
                    column: null,
                  }),
                  f.name
                    ? (r.func = f.name)
                    : (n = a.exec(f.toString())) && (r.func = n[1]),
                  "undefined" === typeof r.func)
                )
                  try {
                    r.func = n.input.substring(0, n.input.indexOf("{"));
                  } catch (v) {}
                if ((o = l(f))) {
                  (r.url = o.url),
                    (r.line = o.line),
                    r.func === S && (r.func = i(r.url, r.line));
                  var p = / '([^']+)' /.exec(e.message || e.description);
                  p && (r.column = c(p[1], o.url, o.line));
                }
                u["" + f] ? (d = !0) : (u["" + f] = !0), s.push(r);
              }
            t && s.splice(0, t);
            var h = {
              mode: "callers",
              name: e.name,
              message: e.message,
              stack: s,
            };
            return (
              m(
                h,
                e.sourceURL || e.fileName,
                e.line || e.lineNumber,
                e.message || e.description
              ),
              h
            );
          }
          function O(t, n) {
            var r = null;
            n = null == n ? 0 : +n;
            try {
              if (((r = p(t)), r)) return r;
            } catch (i) {
              if (e) throw i;
            }
            try {
              if (((r = f(t)), r)) return r;
            } catch (i) {
              if (e) throw i;
            }
            try {
              if (((r = h(t)), r)) return r;
            } catch (i) {
              if (e) throw i;
            }
            try {
              if (((r = g(t, n + 1)), r)) return r;
            } catch (i) {
              if (e) throw i;
            }
            return {
              original: t,
              name: t.name,
              message: t.message,
              mode: "failed",
            };
          }
          function v(e) {
            e = 1 + (null == e ? 0 : +e);
            try {
              throw new Error();
            } catch (t) {
              return O(t, e + 1);
            }
          }
          return (
            (O.augmentStackTraceWithInitialElement = m),
            (O.computeStackTraceFromStackProp = f),
            (O.guessFunctionName = i),
            (O.gatherContext = o),
            (O.ofCaller = v),
            (O.getSource = r),
            O
          );
        })()),
        (B.extendToAsynchronousCallbacks = function () {
          var e = function (e) {
            var t = M[e];
            M[e] = function () {
              var e = w.call(arguments),
                n = e[0];
              return (
                "function" === typeof n && (e[0] = B.wrap(n)),
                t.apply ? t.apply(this, e) : t(e[0], e[1])
              );
            };
          };
          e("setTimeout"), e("setInterval");
        }),
        (B.remoteFetching = !1),
        (B.collectWindowErrors = !0),
        (B.linesOfContext = 11);
      B.report;
      var P = B.report.subscribe,
        A = B.report.unsubscribe,
        C = B.report.installGlobalHandler,
        L = B.report.installGlobalUnhandledRejectionHandler,
        I = B.computeStackTrace;
      function F(e, t) {
        var n = (65535 & e) + (65535 & t),
          r = (e >> 16) + (t >> 16) + (n >> 16);
        return (r << 16) | (65535 & n);
      }
      function H(e, t) {
        return (e << t) | (e >>> (32 - t));
      }
      function N(e, t, n, r, i, o) {
        return F(H(F(F(t, e), F(r, o)), i), n);
      }
      function U(e, t, n, r, i, o, a) {
        return N((t & n) | (~t & r), e, t, i, o, a);
      }
      function X(e, t, n, r, i, o, a) {
        return N((t & r) | (n & ~r), e, t, i, o, a);
      }
      function q(e, t, n, r, i, o, a) {
        return N(t ^ n ^ r, e, t, i, o, a);
      }
      function j(e, t, n, r, i, o, a) {
        return N(n ^ (t | ~r), e, t, i, o, a);
      }
      function D(e, t) {
        var n, r, i, o, a;
        (e[t >> 5] |= 128 << t % 32), (e[14 + (((t + 64) >>> 9) << 4)] = t);
        var s = 1732584193,
          u = -271733879,
          c = -1732584194,
          l = 271733878;
        for (n = 0; n < e.length; n += 16)
          (r = s),
            (i = u),
            (o = c),
            (a = l),
            (s = U(s, u, c, l, e[n], 7, -680876936)),
            (l = U(l, s, u, c, e[n + 1], 12, -389564586)),
            (c = U(c, l, s, u, e[n + 2], 17, 606105819)),
            (u = U(u, c, l, s, e[n + 3], 22, -1044525330)),
            (s = U(s, u, c, l, e[n + 4], 7, -176418897)),
            (l = U(l, s, u, c, e[n + 5], 12, 1200080426)),
            (c = U(c, l, s, u, e[n + 6], 17, -1473231341)),
            (u = U(u, c, l, s, e[n + 7], 22, -45705983)),
            (s = U(s, u, c, l, e[n + 8], 7, 1770035416)),
            (l = U(l, s, u, c, e[n + 9], 12, -1958414417)),
            (c = U(c, l, s, u, e[n + 10], 17, -42063)),
            (u = U(u, c, l, s, e[n + 11], 22, -1990404162)),
            (s = U(s, u, c, l, e[n + 12], 7, 1804603682)),
            (l = U(l, s, u, c, e[n + 13], 12, -40341101)),
            (c = U(c, l, s, u, e[n + 14], 17, -1502002290)),
            (u = U(u, c, l, s, e[n + 15], 22, 1236535329)),
            (s = X(s, u, c, l, e[n + 1], 5, -165796510)),
            (l = X(l, s, u, c, e[n + 6], 9, -1069501632)),
            (c = X(c, l, s, u, e[n + 11], 14, 643717713)),
            (u = X(u, c, l, s, e[n], 20, -373897302)),
            (s = X(s, u, c, l, e[n + 5], 5, -701558691)),
            (l = X(l, s, u, c, e[n + 10], 9, 38016083)),
            (c = X(c, l, s, u, e[n + 15], 14, -660478335)),
            (u = X(u, c, l, s, e[n + 4], 20, -405537848)),
            (s = X(s, u, c, l, e[n + 9], 5, 568446438)),
            (l = X(l, s, u, c, e[n + 14], 9, -1019803690)),
            (c = X(c, l, s, u, e[n + 3], 14, -187363961)),
            (u = X(u, c, l, s, e[n + 8], 20, 1163531501)),
            (s = X(s, u, c, l, e[n + 13], 5, -1444681467)),
            (l = X(l, s, u, c, e[n + 2], 9, -51403784)),
            (c = X(c, l, s, u, e[n + 7], 14, 1735328473)),
            (u = X(u, c, l, s, e[n + 12], 20, -1926607734)),
            (s = q(s, u, c, l, e[n + 5], 4, -378558)),
            (l = q(l, s, u, c, e[n + 8], 11, -2022574463)),
            (c = q(c, l, s, u, e[n + 11], 16, 1839030562)),
            (u = q(u, c, l, s, e[n + 14], 23, -35309556)),
            (s = q(s, u, c, l, e[n + 1], 4, -1530992060)),
            (l = q(l, s, u, c, e[n + 4], 11, 1272893353)),
            (c = q(c, l, s, u, e[n + 7], 16, -155497632)),
            (u = q(u, c, l, s, e[n + 10], 23, -1094730640)),
            (s = q(s, u, c, l, e[n + 13], 4, 681279174)),
            (l = q(l, s, u, c, e[n], 11, -358537222)),
            (c = q(c, l, s, u, e[n + 3], 16, -722521979)),
            (u = q(u, c, l, s, e[n + 6], 23, 76029189)),
            (s = q(s, u, c, l, e[n + 9], 4, -640364487)),
            (l = q(l, s, u, c, e[n + 12], 11, -421815835)),
            (c = q(c, l, s, u, e[n + 15], 16, 530742520)),
            (u = q(u, c, l, s, e[n + 2], 23, -995338651)),
            (s = j(s, u, c, l, e[n], 6, -198630844)),
            (l = j(l, s, u, c, e[n + 7], 10, 1126891415)),
            (c = j(c, l, s, u, e[n + 14], 15, -1416354905)),
            (u = j(u, c, l, s, e[n + 5], 21, -57434055)),
            (s = j(s, u, c, l, e[n + 12], 6, 1700485571)),
            (l = j(l, s, u, c, e[n + 3], 10, -1894986606)),
            (c = j(c, l, s, u, e[n + 10], 15, -1051523)),
            (u = j(u, c, l, s, e[n + 1], 21, -2054922799)),
            (s = j(s, u, c, l, e[n + 8], 6, 1873313359)),
            (l = j(l, s, u, c, e[n + 15], 10, -30611744)),
            (c = j(c, l, s, u, e[n + 6], 15, -1560198380)),
            (u = j(u, c, l, s, e[n + 13], 21, 1309151649)),
            (s = j(s, u, c, l, e[n + 4], 6, -145523070)),
            (l = j(l, s, u, c, e[n + 11], 10, -1120210379)),
            (c = j(c, l, s, u, e[n + 2], 15, 718787259)),
            (u = j(u, c, l, s, e[n + 9], 21, -343485551)),
            (s = F(s, r)),
            (u = F(u, i)),
            (c = F(c, o)),
            (l = F(l, a));
        return [s, u, c, l];
      }
      function V(e) {
        var t,
          n = "",
          r = 32 * e.length;
        for (t = 0; t < r; t += 8)
          n += String.fromCharCode((e[t >> 5] >>> t % 32) & 255);
        return n;
      }
      function W(e) {
        var t,
          n = [];
        for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1)
          n[t] = 0;
        var r = 8 * e.length;
        for (t = 0; t < r; t += 8)
          n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
        return n;
      }
      function z(e) {
        return V(D(W(e), 8 * e.length));
      }
      function G(e, t) {
        var n,
          r,
          i = W(e),
          o = [],
          a = [];
        for (
          o[15] = a[15] = void 0,
            i.length > 16 && (i = D(i, 8 * e.length)),
            n = 0;
          n < 16;
          n += 1
        )
          (o[n] = 909522486 ^ i[n]), (a[n] = 1549556828 ^ i[n]);
        return (
          (r = D(o.concat(W(t)), 512 + 8 * t.length)), V(D(a.concat(r), 640))
        );
      }
      function $(e) {
        var t,
          n,
          r = "0123456789abcdef",
          i = "";
        for (n = 0; n < e.length; n += 1)
          (t = e.charCodeAt(n)),
            (i += r.charAt((t >>> 4) & 15) + r.charAt(15 & t));
        return i;
      }
      function Y(e) {
        return unescape(encodeURIComponent(e));
      }
      function J(e) {
        return z(Y(e));
      }
      function K(e) {
        return $(J(e));
      }
      function Q(e, t) {
        return G(Y(e), Y(t));
      }
      function Z(e, t) {
        return $(Q(e, t));
      }
      function ee(e, t, n) {
        return t ? (n ? Q(t, e) : Z(t, e)) : n ? J(e) : K(e);
      }
      var te = 255;
      function ne(e) {
        for (var t = e.path || [], n = "", r = 0; r < t.length; r++) {
          var i = t[r];
          i !== window
            ? ((n += i.nodeName),
              (n += i.id ? "#" + i.id : ""),
              (n += i.className ? "." + i.className.split(" ").join(".") : ""),
              r < t.length && (n += " > "))
            : (n += "Window");
        }
        return n;
      }
      function re(e) {
        return (e || "").replace(/#.*$/, "").replace(/\?.*$/, "");
      }
      function ie(e) {
        window.addEventListener(
          "error",
          function (t) {
            var n;
            if (t && t.target && t.target !== window) {
              var r = t.target,
                i =
                  null !==
                    (n = null === r || void 0 === r ? void 0 : r.tagName) &&
                  void 0 !== n
                    ? n
                    : "unknown tagname";
              if (-1 !== ["SCRIPT", "LINK", "IMG"].indexOf(i)) {
                var o = r.src || r.href,
                  a = window.location.href,
                  s = ne(t),
                  u = {
                    type: i,
                    asset: re(o) === re(a) ? "空资源" : o,
                    integrity: r.integrity,
                    element: r && r.outerHTML && r.outerHTML.replace(/"/g, ""),
                    path: s.replace(/"/g, ""),
                    page: window.location.href.slice(0, te),
                  };
                e && e(u);
              }
            }
          },
          !0
        );
      }
      function oe() {
        if (!("fetch" in b())) return !1;
        try {
          return new Headers(), new Request(""), new Response(), !0;
        } catch (e) {
          return !1;
        }
      }
      function ae() {
        if (!oe()) return !1;
        try {
          return new Request("pickleRick", { referrerPolicy: "origin" }), !0;
        } catch (e) {
          return !1;
        }
      }
      function se() {
        var e = b(),
          t = e.chrome,
          n = t && t.app && t.app.runtime,
          r =
            "history" in e && !!e.history.pushState && !!e.history.replaceState;
        return !n && r;
      }
      function ue() {
        var e = b();
        return "document" in e;
      }
      function ce(e, t) {
        for (var n = 0; n < e.length; ++n) if (e[n] === t) return n;
        return -1;
      }
      function le(e, t, n, r) {
        return JSON.stringify(e, fe(t, r), n);
      }
      function de(e) {
        var t = { stack: e.stack, message: e.message, name: e.name };
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t;
      }
      function fe(e, t) {
        var n = [],
          r = [];
        return (
          null == t &&
            (t = function (e, t) {
              return n[0] === t
                ? "[Circular ~]"
                : "[Circular ~." + r.slice(0, ce(n, t)).join(".") + "]";
            }),
          function (i, o) {
            if (n.length > 0) {
              var a = ce(n, this);
              ~a ? n.splice(a + 1) : n.push(this),
                ~a ? r.splice(a, 1 / 0, i) : r.push(i),
                ~ce(n, o) && (o = t.call(this, i, o));
            } else n.push(o);
            return null == e
              ? o instanceof Error
                ? de(o)
                : o
              : e.call(this, i, o);
          }
        );
      }
      var pe = 40,
        he = 3,
        me = 51200;
      function ge(e, t) {
        return Reflect.has(e, t);
      }
      function Oe(e, t) {
        if (Array.isArray(e))
          for (var n = e.length, r = 0; r < n; r++) t.call(null, r, e[r]);
        else for (var i in e) ge(e, i) && t.call(null, i, e[i]);
      }
      function ve(e) {
        var t = {};
        for (var n in e)
          if (e.hasOwnProperty(n)) {
            var r = e[n];
            t[n] = f(r) ? r() : r;
          }
        return t;
      }
      function ye(e, t) {
        if ((void 0 === t && (t = pe), h(e) || p(e))) return e.toString();
        if (!g(e)) return "";
        if (
          ((e = e.filter(function (e) {
            return p(e);
          })),
          0 === e.length)
        )
          return "[object has no keys]";
        if (((t = h(t) ? t : pe), e[0].length >= t)) return e[0];
        for (var n = e.length; n > 0; n--) {
          var r = e.slice(0, n).join(", ");
          if (!(r.length > t)) return n === e.length ? r : r + "…";
        }
        return "";
      }
      function _e(e, t) {
        return 0 === t
          ? be(e)
          : O(e)
          ? Object.keys(e).reduce(function (n, r) {
              return (n[r] = _e(e[r], t - 1)), n;
            }, {})
          : Array.isArray(e)
          ? e.map(function (e) {
              return _e(e, t - 1);
            })
          : be(e);
      }
      function Re(e, t, n) {
        if ((void 0 === t && (t = he), void 0 === n && (n = me), !O(e)))
          return e + "";
        var r = _e(e, t);
        return Me(le(r)) > n ? Re(e, t - 1) : r;
      }
      function be(e) {
        if (p(e)) {
          var t = 40;
          return we(e, t);
        }
        return h(e) || m(e) || d(e)
          ? e + ""
          : O(e)
          ? "[Object]"
          : g(e)
          ? "[Array]"
          : f(e)
          ? e.name
            ? "[Function: " + e.name + "]"
            : "[Function]"
          : e;
      }
      function Me(e) {
        return Be(JSON.stringify(e));
      }
      function Be(e) {
        return ~-encodeURI(e).split(/%..|./).length;
      }
      function we(e, t) {
        return 0 === t || e.length <= t ? e : e.substr(0, t) + "…";
      }
      function Se(e) {
        var t = { protocol: "", host: "", path: "", relative: "" };
        if ("string" !== typeof e) return t;
        var n = e.match(
          /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/
        );
        if (n && n.length) {
          var r = n[6] || "",
            i = n[8] || "";
          return {
            protocol: n[2] || "",
            host: n[4] || "",
            path: n[5] || "",
            relative: (n[5] || "") + r + i,
          };
        }
        return t;
      }
      function Ee(e) {
        var t,
          n = 5,
          r = 80,
          i = [],
          o = " > ",
          a = o.length,
          s = 0,
          u = 0;
        while (e && s++ < n) {
          t = Te(e);
          var c = "html" === t,
            l = s > 1 && u + i.length * a + t.length >= r;
          if (c || l) break;
          i.push(t), (u += t.length), (e = e.parentNode);
        }
        return i.reverse().join(o);
      }
      function Te(e) {
        var t, n, r, o;
        if (!e || !e.tagName) return "";
        var a = [e.tagName.toLowerCase()];
        e.id && a.push("#" + e.id);
        var s = e.className ? e.className.split(/\s+/) : [];
        try {
          for (var u = i(s), c = u.next(); !c.done; c = u.next()) {
            var l = c.value;
            a.push("." + l);
          }
        } catch (g) {
          t = { error: g };
        } finally {
          try {
            c && !c.done && (n = u.return) && n.call(u);
          } finally {
            if (t) throw t.error;
          }
        }
        var d = ["type", "name", "title", "alt"];
        try {
          for (var f = i(d), p = f.next(); !p.done; p = f.next()) {
            var h = p.value,
              m = e.getAttribute(h);
            m && a.push("[" + h + "=" + m + "]");
          }
        } catch (O) {
          r = { error: O };
        } finally {
          try {
            p && !p.done && (o = f.return) && o.call(f);
          } finally {
            if (r) throw r.error;
          }
        }
        return a.join("");
      }
      function xe(e, t) {
        if (Ce(e) && Ce(t)) {
          var n = e.length,
            r = t.length;
          if (n !== r) return !1;
          for (var i = 0; i < n; i++) {
            var o = e[i],
              a = t[i];
            if (!Le(o, a)) return !1;
          }
          return !0;
        }
        return !1;
      }
      function ke(e, t) {
        if (
          e.mechanism !== t.mechanism ||
          e.type !== t.type ||
          e.value !== t.value ||
          e.url !== t.url
        )
          return !1;
        var n = 0 === e.stacktrace.length && 0 === t.stacktrace.length;
        return !!n || xe(e.stacktrace, t.stacktrace);
      }
      function Pe(e) {
        var t = e.exception,
          n = [];
        return (
          n.push("token=" + t.token),
          n.push("type=" + t.type),
          n.push("mechanism=" + t.mechanism),
          n.push("value=" + t.value),
          n.push("url=" + t.url),
          t.stacktrace &&
            t.stacktrace.forEach(function (e) {
              n.push("filename=" + e.filename || 0),
                n.push("lineno=" + e.lineno || 0),
                n.push("colno=" + e.colno || 0);
            }),
          n.join("***")
        );
      }
      function Ae(e) {
        var t = Pe(e),
          n = [],
          r = e.request,
          i = e.env,
          o = e.behaviors;
        if (!r) return JSON.stringify(e);
        var a = r.headers,
          s = r.url;
        n.push("Referrer=" + a.Referrer),
          n.push("ua=" + a["User-Agent"]),
          n.push("url=" + s),
          Oe(i, function (e, t) {
            "session:duration" !== e && n.push(e + "=" + t);
          }),
          Oe(o, function (e) {
            n.push("behavior.category=" + e.category),
              n.push("behavior.name=" + e.name),
              n.push("behavior.message=" + e.message);
          });
        var u = n.join("***");
        return t + u;
      }
      function Ce(e) {
        return e && Array.isArray(e) && e.length > 0;
      }
      function Le(e, t) {
        return (
          e.filename === t.filename &&
          e.lineno === t.lineno &&
          e.colno === t.colno &&
          e["function"] === t["function"]
        );
      }
      function Ie(e) {
        for (var t = [], n = e.length, r = 0; r < n; r++) {
          var i = e[r];
          p(i)
            ? t.push(i.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"))
            : i && i.source && t.push(i.source);
        }
        return new RegExp(t.join("|"), "i");
      }
      function Fe(e, t) {
        if (!Array.isArray(t) || (Array.isArray(t) && 0 === t.length)) return e;
        var n,
          r = Ie(t),
          i = "********";
        try {
          n = JSON.parse(le(e));
        } catch (a) {
          return e;
        }
        function o(e) {
          return Array.isArray(e)
            ? e.map(function (e) {
                return o(e);
              })
            : O(e)
            ? Object.keys(e).reduce(function (t, n) {
                return r.test(n) ? (t[n] = i) : (t[n] = o(e[n])), t;
              }, {})
            : e;
        }
        return o(n);
      }
      function He(e, t) {
        return (
          !!p(t) &&
          e.some(function (e) {
            if (!e) return !1;
            if (p(e)) return -1 !== t.indexOf(e);
            if (v(e))
              try {
                return e.test(t);
              } catch (n) {
                return console.error(e + "正则书写有误"), !1;
              }
            return console.error(e + "忽略匹配项类型应该是String、RegExp"), !1;
          })
        );
      }
      function Ne(e) {
        return ee(e.method + "***" + qe(e.url));
      }
      function Ue(e) {
        return ee(le(e));
      }
      function Xe(e, t) {
        void 0 === e && (e = ""), void 0 === t && (t = "");
        var n = "" === e || "text" === e;
        if (n && p(t) && t.length)
          try {
            return JSON.parse(t);
          } catch (r) {
            return t;
          }
        return "json" === e ? JSON.parse(JSON.stringify(t)) : "";
      }
      function qe(e) {
        if (!p(e)) return "";
        var t = e.split("?");
        return t[1]
          ? ((t[1] = t[1]
              .replace(/\d+/g, "*")
              .replace(/[\u4e00-\u9fa5]+/gi, "*")),
            t.join("?"))
          : e;
      }
      function je(e) {
        var t = 256,
          n = p(e) ? e : JSON.stringify(e);
        return n.slice(0, t);
      }
      function De(e) {
        var t = e.filename || "",
          n = -1 !== t.indexOf("weirwood-sdk"),
          r = /captureException$/.test(t);
        return n || r;
      }
      function Ve(e, t, n) {
        var r,
          o,
          a = [];
        if (e.stack && e.stack.length) {
          try {
            for (var s = i(e.stack), u = s.next(); !u.done; u = s.next()) {
              var c = u.value,
                l = We(c, e.url || "", t.includePaths);
              a.push(l);
            }
          } catch (f) {
            r = { error: f };
          } finally {
            try {
              u && !u.done && (o = s.return) && o.call(s);
            } finally {
              if (r) throw r.error;
            }
          }
          if (t && t.trimHeadFrames)
            for (var d = 0; d < t.trimHeadFrames && d < a.length; d++)
              a[d].in_app = !1;
        }
        return (
          (a = a.filter(function (e) {
            return !De(e);
          })),
          (a = a.slice(0, n)),
          a
        );
      }
      function We(e, t, n) {
        var r = {
          filename: e.url || t,
          lineno: e.line,
          colno: e.column,
          function: e.func || "?",
        };
        if (n && n.length > 0) {
          var i = Ie(n),
            o = i.test(r.filename),
            a = /(Weirwood|Tracekit)/.test(r["function"]),
            s = /weirwood\-sdk/.test(r.filename);
          (r.in_app = o), (a || s) && (r.in_app = !1);
        } else r.in_app = !1;
        return r;
      }
      function ze(e, t, n) {
        var r = e && e.length;
        return r
          ? e.reverse()
          : t
          ? [{ filename: t, lineno: n || 0, in_app: !0 }]
          : [];
      }
      function Ge(e, t) {
        var n = e && e.length;
        return (n && e[0].filename) || t;
      }
      n(13670);
      function $e(e, t, n, r) {
        if (null != e) {
          var i = e[t];
          return (
            (e[t] = n(i)),
            (e[t].__raven__ = !0),
            (e[t].__orig__ = i),
            (i.__raven_wrapper__ = e[t]),
            r && r.push([e, t, i]),
            e[t]
          );
        }
      }
      function Ye(e, t, n) {
        if ((void 0 === e && (e = {}), d(t) && !f(e))) return e;
        if ((f(e) && ((t = e), (e = void 0)), !f(t))) return t;
        try {
          if (t.__raven__) return t;
          if (t.__raven_wrapper__) return t.__raven_wrapper__;
        } catch (o) {
          return t;
        }
        function r() {
          for (var r = [], i = 0; i < arguments.length; i++)
            r[i] = arguments[i];
          var a = [],
            s = r.length,
            u = !e || (e && !1 !== e.deep);
          n && f(n) && n.apply(this, r);
          while (s--) a[s] = u ? Ye(e, r[s]) : r[s];
          try {
            return t.apply(this, a);
          } catch (o) {
            throw o;
          }
        }
        for (var i in t) t.hasOwnProperty(i) && (r[i] = t[i]);
        return (
          (r.prototype = t.prototype),
          (t.__raven_wrapper__ = r),
          (r.__raven__ = !0),
          (r.__orig__ = t),
          r
        );
      }
      function Je(e) {
        return function () {
          for (var t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
          var r = t[0];
          return (
            f(r) &&
              (t[0] = Ye(
                {
                  mechanism: {
                    type: "instrument",
                    data: {
                      function:
                        (null === e || void 0 === e ? void 0 : e.name) ||
                        "<anonymous>",
                    },
                  },
                },
                r
              )),
            e.apply ? e.apply(this, t) : e(t[0], t[1])
          );
        };
      }
      var Ke,
        Qe,
        Ze = 1e3;
      function et(e, t) {
        return function (n) {
          if (((Ke = void 0), Qe !== n)) {
            var r;
            Qe = n;
            try {
              r = Ee(n.target);
            } catch (o) {
              r = "<unknown>";
            }
            if (r) {
              var i = { category: "ui." + t, message: r, name: t };
              "input" === t &&
                "password" !== r.type &&
                (i.data = n.target.value || ""),
                e.captureBehavior(i);
            }
          }
        };
      }
      function tt(e) {
        return function (t) {
          var n;
          try {
            n = t.target;
          } catch (i) {
            return;
          }
          var r = n && n.tagName;
          r &&
            ("INPUT" === r || "TEXTAREA" === r || n.isContentEditable) &&
            (Ke || et(e, "input")(t),
            clearTimeout(Ke),
            (Ke = setTimeout(function () {
              Ke = void 0;
            }, Ze)));
        };
      }
      var nt,
        rt = b(),
        it = 8192,
        ot = [301, 302, 304],
        at = (function () {
          function e(t) {
            (this.name = e.id),
              (this.options = r(
                {
                  beacon: !0,
                  console: !0,
                  dom: !0,
                  fetch: !0,
                  history: !0,
                  weirwood: !0,
                  xhr: !0,
                },
                t
              ));
          }
          return (
            (e.prototype.setupOnce = function (e) {
              var t, n;
              this.client = e;
              var r = Object.keys(this.options);
              try {
                for (var o = i(r), a = o.next(); !a.done; a = o.next()) {
                  var s = a.value,
                    u = "instrument" + s[0].toUpperCase() + s.slice(1);
                  this.options[s] &&
                    this[u] &&
                    "function" === typeof this[u] &&
                    this[u].call(this);
                }
              } catch (c) {
                t = { error: c };
              } finally {
                try {
                  a && !a.done && (n = o.return) && n.call(o);
                } finally {
                  if (t) throw t.error;
                }
              }
            }),
            (e.prototype.instrumentDom = function () {
              if (ue()) {
                var e = rt.document;
                e.addEventListener(
                  "click",
                  et.call(this, this.client, "click"),
                  !1
                ),
                  e.addEventListener(
                    "keypress",
                    tt.call(this, this.client),
                    !1
                  );
              }
            }),
            (e.prototype.instrumentXhr = function () {
              var e = this.client,
                t = e.options,
                n = t.collectAutoAPIException,
                i = t.isApiException;
              if ("XMLHttpRequest" in rt) {
                var o = XMLHttpRequest.prototype,
                  a = e._globalKey || "";
                $e(
                  o,
                  "open",
                  function (e) {
                    return function (t, n) {
                      return (
                        p(n) &&
                          -1 === n.indexOf(a) &&
                          (this.__raven_xhr = {
                            method: t,
                            url: n,
                            status_code: null,
                          }),
                        e.apply(this, arguments)
                      );
                    };
                  },
                  e._wrappedBuiltIns
                ),
                  $e(
                    o,
                    "abort",
                    function (e) {
                      return function () {
                        var t = this;
                        return (
                          t.__raven_xhr && (t.__raven_xhr.abortedFlag = !0),
                          e.apply(this, arguments)
                        );
                      };
                    },
                    e._wrappedBuiltIns
                  ),
                  $e(
                    o,
                    "send",
                    function (t) {
                      return function () {
                        var o = this,
                          a = arguments;
                        function u() {
                          if (o.__raven_xhr && 4 === o.readyState) {
                            try {
                              o.__raven_xhr.status_code = o.status;
                            } catch (h) {}
                            var t = Xe(o.responseType, o.response);
                            if (
                              (e.captureBehavior({
                                type: "http",
                                category: "xhr",
                                data: r(r({}, o.__raven_xhr), {
                                  response: je(t),
                                  params: je(a && a[0] ? a[0] : ""),
                                }),
                              }),
                              n &&
                                (!o.__raven_xhr || !o.__raven_xhr.abortedFlag))
                            ) {
                              var s = !1,
                                u = o.status >= 200 && o.status <= 299,
                                c = -1 !== ot.indexOf(o.status);
                              if ((u || c || (s = !0), u && i && f(i))) {
                                var l = {
                                  method: o.__raven_xhr.method,
                                  url: o.responseURL,
                                  status: o.status,
                                  responseType: o.responseType,
                                  response: t,
                                };
                                s = !!i(l);
                              }
                              if (s) {
                                var d = "";
                                f(o.getAllResponseHeaders) &&
                                  (d = o
                                    .getAllResponseHeaders()
                                    .trim()
                                    .replace(/[\r\n]+/g, "***")),
                                  e.captureAPIException({
                                    url: o.responseURL || o.__raven_xhr.url,
                                    method: o.__raven_xhr.method,
                                    params: a && a[0] ? a[0] : "",
                                    status: o.status,
                                    response: (p(t)
                                      ? t
                                      : JSON.stringify(t)
                                    ).slice(0, it),
                                    responseHeaders: d,
                                    user: "",
                                    extra: "AUTO_XHR",
                                  });
                              }
                            }
                          }
                        }
                        for (
                          var c = ["onload", "onerror", "onprogress"], l = 0;
                          l < c.length;
                          l++
                        )
                          s(c[l], o);
                        return (
                          "onreadystatechange" in o && f(o.onreadystatechange)
                            ? $e(o, "onreadystatechange", function (e) {
                                return Ye(
                                  {
                                    mechanism: {
                                      type: "instrument",
                                      data: {
                                        function: "onreadystatechange",
                                        handler: (e && e.name) || "<anonymous>",
                                      },
                                    },
                                  },
                                  e,
                                  u
                                );
                              })
                            : (o.onreadystatechange = u),
                          t.apply(this, arguments)
                        );
                      };
                    },
                    e._wrappedBuiltIns
                  );
              }
              function s(e, t) {
                e in t &&
                  f(t[e]) &&
                  $e(t, e, function (t) {
                    return Ye(
                      {
                        mechanism: {
                          data: {
                            function: e,
                            handler: (t && t.name) || "<anonymous>",
                          },
                          handled: !0,
                          type: "instrument",
                        },
                      },
                      t
                    );
                  });
              }
            }),
            (e.prototype.instrumentFetch = function () {
              if (oe()) {
                var e = b(),
                  t = this.client,
                  n = t.options,
                  o = n.collectAutoAPIException,
                  a = n.isApiException,
                  s = t._globalKey;
                $e(
                  rt,
                  "fetch",
                  function (n) {
                    return function () {
                      for (
                        var u = new Array(arguments.length), c = 0;
                        c < u.length;
                        ++c
                      )
                        u[c] = arguments[c];
                      var l,
                        d = u[0],
                        p = "GET";
                      if (
                        ("string" === typeof d
                          ? (l = d)
                          : "Request" in e && d instanceof e.Request
                          ? ((l = d.url),
                            (null === d || void 0 === d ? void 0 : d.method) &&
                              (p = d.method))
                          : (l = "" + d),
                        -1 !== l.indexOf(s))
                      )
                        return n.apply(this, u);
                      u[1] && u[1].method && (p = u[1].method);
                      var h = { method: p, url: l, status_code: null };
                      return n
                        .apply(this, u)
                        .then(function (e) {
                          var n, s;
                          h.status_code = e.status;
                          var c = "";
                          u[1] && u[1].body && (c = u[1].body);
                          var l = f(e.clone) ? e.clone() : null,
                            d = {
                              type: "http",
                              category: "fetch",
                              data: r(r({}, h), {
                                params: je(c),
                                response: "",
                              }),
                            };
                          if (
                            (l
                              ? l.text().then(function (e) {
                                  var n;
                                  try {
                                    n = JSON.parse(e);
                                  } catch (r) {
                                    n = e;
                                  }
                                  (d.data.response = je(n)),
                                    t.captureBehavior(d);
                                })
                              : t.captureBehavior(d),
                            !o)
                          )
                            return e;
                          var p = !1,
                            m = f(e.clone) ? e.clone() : null,
                            g = ot.includes(e.status);
                          e.ok || g || (p = !0);
                          var O = {
                              method: h.method,
                              url: h.url,
                              status: e.status,
                              response: "",
                            },
                            v = [];
                          try {
                            for (
                              var y = i(e.headers.entries()), _ = y.next();
                              !_.done;
                              _ = y.next()
                            ) {
                              var R = _.value;
                              v.push(R[0] + ": " + R[1]);
                            }
                          } catch (M) {
                            n = { error: M };
                          } finally {
                            try {
                              _ && !_.done && (s = y.return) && s.call(y);
                            } finally {
                              if (n) throw n.error;
                            }
                          }
                          var b = r(r({}, O), {
                            params: c,
                            responseHeaders: v.join("***"),
                            user: "",
                            extra: "AUTO_FETCH",
                          });
                          return (
                            m
                              ? m
                                  .text()
                                  .then(function (n) {
                                    var i;
                                    try {
                                      i = JSON.parse(n);
                                    } catch (o) {
                                      i = n;
                                    }
                                    e.ok &&
                                      f(a) &&
                                      (p = !!a(r(r({}, O), { response: i }))),
                                      p &&
                                        t.captureAPIException(
                                          r(r({}, b), {
                                            response: n.slice(0, it),
                                          })
                                        );
                                  })
                                  .catch(function (e) {
                                    console.error(e);
                                  })
                              : (e.ok && f(a) && (p = !!a(O)),
                                p && t.captureAPIException(b)),
                            e
                          );
                        })
                        ["catch"](function (e) {
                          throw (
                            (t.captureBehavior({
                              type: "http",
                              category: "fetch",
                              data: h,
                              level: "error",
                            }),
                            e)
                          );
                        });
                    };
                  },
                  t._wrappedBuiltIns
                );
              }
            }),
            (e.prototype.instrumentHistory = function () {
              var e = this.client;
              if (se()) {
                var t = function (t, n) {
                    var r = Se(rt.location.href),
                      i = Se(n),
                      o = Se(t);
                    o.path || (o = r),
                      (nt = n),
                      r.protocol === i.protocol &&
                        r.host === i.host &&
                        (n = i.relative),
                      r.protocol === o.protocol &&
                        r.host === o.host &&
                        (t = o.relative),
                      e.captureBehavior({
                        category: "navigation",
                        data: { from: t, to: n },
                      });
                  },
                  n = rt.onpopstate;
                (rt.onpopstate = function (e) {
                  var r = rt.location.href;
                  if ((t(nt, r), n)) return n.apply(rt, e);
                }),
                  $e(rt.history, "pushState", r),
                  $e(rt.history, "replaceState", r);
              }
              function r(e) {
                return function () {
                  for (var n = [], r = 0; r < arguments.length; r++)
                    n[r] = arguments[r];
                  var i = n.length > 2 ? n[2] : void 0;
                  return i && t(nt, String(i)), e.apply(this, n);
                };
              }
            }),
            (e.prototype.instrumentConsole = function () {}),
            (e.prototype.instrumentBeacon = function () {}),
            (e.id = "behaviors"),
            e
          );
        })(),
        st = b(),
        ut = (function () {
          function e(t) {
            (this.name = e.id), (this.options = r({ active: !0 }, t));
          }
          return (
            (e.prototype.setupOnce = function (e) {
              (this.client = e),
                this.options.active &&
                  $e(st, "setTimeout", Je, this.client._wrappedBuiltIns);
            }),
            (e.id = "trycatch"),
            e
          );
        })(),
        ct = b(),
        lt = (function () {
          function e() {
            this.name = e.id;
          }
          return (
            (e.prototype.setupOnce = function (e) {
              (this.client = e),
                this.client.captureUserAgent(this.getUserAgent());
            }),
            (e.prototype.getUserAgent = function () {
              return "navigator" in ct && "document" in ct
                ? {
                    url: ct.location.href,
                    headers: {
                      "User-Agent": ct.navigator.userAgent,
                      Referrer: ct.document.referrer,
                    },
                  }
                : {};
            }),
            (e.id = "UserAgent"),
            e
          );
        })(),
        dt = {
          collectWindowErrors: !0,
          collectUnhandledRejections: !0,
          collectResourceLoadErrors: !1,
          collectAutoAPIException: !0,
          sampleRate: 1,
          maxUrlLength: 250,
          maxMessageLength: 0,
          allowDuplicates: !1,
          stackTraceLimit: 50,
          behaviorLimit: 10,
          plugins: [],
          ignoreErrors: [],
          ignoreKeys: [],
          whitelistUrls: [],
          apiWhitelistUrls: [],
          resourceWhitelistUrls: [],
          ignoreUrls: [],
          ignoreJsUrls: [],
          ignoreApiUrls: [],
          ignoreResourceUrls: [],
          maxMessagePerMinute: 10,
          endpoint: "https://fclog.baidu.com/log/weirwood?type=error",
        },
        ft = "https://dmpstatic.cdn.bcebos.com/weirwood",
        pt = (function () {
          function e(e) {
            (this.options = dt),
              (this._globalContext = { env: {}, user: {}, session_id: "" }),
              (this._globalKey = "fclog.baidu.com/log"),
              (this._currentExceptionContext = {}),
              (this._currentExceptionStartTime = Date.now()),
              (this._behaviors = []),
              (this._lastData = null),
              (this._lastAPIData = null),
              (this._messagesSendLastMinute = 0),
              (this._messagesSendEmptyStartTime = Date.now()),
              (this._installed = !1),
              (this._globalErrorHandler = null),
              (this._fetchDefaults = {
                method: "POST",
                credentials: "include",
                referrerPolicy: ae() ? "origin" : "",
              }),
              (this._wrappedBuiltIns = []),
              (this._requestInfo = null),
              e && this.config(e);
          }
          return (
            (e.prototype.init = function (e) {
              return this.config(e);
            }),
            (e.prototype.config = function (e) {
              (this.options = r(r({}, this.options), e)),
                (this.options.sendWindow = this.options.sendWindow || b()),
                (this._globalContext.session_id = this.options.uuid4());
              var t = this.options,
                n = t.token,
                i = t.buildid;
              if (!n || !i)
                throw new Error("error: token and buildid must be provided");
              return this.setFilters(), this.install(), this;
            }),
            (e.prototype.install = function () {
              var e = this;
              return this._installed
                ? (console.error(
                    "error: Weirwood Error SDK has been installed and configured"
                  ),
                  !1)
                : (this.options.collectWindowErrors && C(),
                  this.options.maxMessagePerMinute >= 60 &&
                    (this.options.maxMessagePerMinute = 60),
                  this.options.collectUnhandledRejections && L(),
                  (this._globalErrorHandler =
                    this._getErrorHandler().bind(this)),
                  P(this._globalErrorHandler),
                  this.options.collectResourceLoadErrors &&
                    ie(function (t) {
                      var n;
                      if (
                        window.performance &&
                        window.performance.getEntriesByName
                      ) {
                        var r = window.performance.getEntriesByName(t.asset);
                        r.length > 0 &&
                          ((n = r[0]),
                          ["name", "serverTiming"].forEach(function (e) {
                            delete n[e];
                          }));
                      }
                      var i = {
                        mechanism: t.type,
                        name: "ResourceError",
                        message: t.asset,
                        stack: [],
                        mode: "onerror",
                        timing: n,
                        page: t.page,
                        element: t.element,
                        elementPath: t.path.slice(0, 255),
                      };
                      e._handleStackInfo(i, {
                        trimHeadFrames: 0,
                        mechanism: i.mechanism || "generic",
                        includePaths: e.options.includePaths,
                      });
                    }),
                  (this._installed = !0),
                  this.installPlugins(),
                  this);
            }),
            (e.prototype.installPlugins = function () {
              var e, t;
              this.options.plugins = a(
                [
                  new at(this.options.behaviorOptions),
                  new ut(this.options.tryCatchOptions),
                  new lt(),
                ],
                this.options.plugins || []
              );
              try {
                for (
                  var n = i(this.options.plugins), r = n.next();
                  !r.done;
                  r = n.next()
                ) {
                  var o = r.value;
                  o.setupOnce(this);
                }
              } catch (s) {
                e = { error: s };
              } finally {
                try {
                  r && !r.done && (t = n.return) && t.call(n);
                } finally {
                  if (e) throw e.error;
                }
              }
            }),
            (e.prototype.setFilters = function () {
              var e = this.options;
              e.ignoreErrors &&
                (e.ignoreErrors = a(
                  [
                    /^Script error\.?$/,
                    /^Javascript error: Script error\.? on line 0$/,
                  ],
                  e.ignoreErrors || []
                )),
                (e.ignoreJsUrls = a([ft], e.ignoreJsUrls || []));
            }),
            (e.prototype._getErrorHandler = function () {
              var e = this;
              return function (t, n, r, i, o, a) {
                if (
                  (r &&
                    (r.stack || r.stacktrace) &&
                    (t.originalStack = ((r.stack || r.stacktrace) + "").slice(
                      0,
                      1e4
                    )),
                  t.stack &&
                    !t.stack.length &&
                    i &&
                    (t.stack[0] = { url: i, line: o, column: a }),
                  !t.name &&
                    !t.message &&
                    "onunhandledrejection" === t.mechanism)
                ) {
                  var s = b();
                  (t.name = "unhandledrejection"),
                    (t.url = t.url || s.location.href),
                    (t.message = r);
                }
                e._handleStackInfo(t, {
                  trimHeadFrames: 0,
                  mechanism: t.mechanism || "generic",
                  includePaths: e.options.includePaths,
                });
              };
            }),
            (e.prototype._handleStackInfo = function (e, t) {
              var n = Ve(e, t, this.options.stackTraceLimit);
              this._processException(e, n, t);
            }),
            (e.prototype._processException = function (e, t, n) {
              var i = this.options,
                o = i.ignoreErrors,
                a = void 0 === o ? [] : o,
                s = i.ignoreKeys,
                u = void 0 === s ? [] : s,
                c = i.whitelistUrls,
                l = void 0 === c ? [] : c,
                d = i.resourceWhitelistUrls,
                f = void 0 === d ? [] : d,
                p = i.ignoreUrls,
                h = void 0 === p ? [] : p,
                m = i.ignoreJsUrls,
                g = void 0 === m ? [] : m,
                O = i.ignoreResourceUrls,
                v = void 0 === O ? [] : O,
                y = e.name,
                _ = e.message,
                R = e.url,
                b = void 0 === R ? "" : R,
                M = e.page,
                B = void 0 === M ? window.location.href : M,
                w = e.lineno,
                S = void 0 === w ? 0 : w,
                E = e.originalStack,
                T = void 0 === E ? "" : E;
              if ((!a.length || !He(a, _)) && (!h.length || !He(h, B))) {
                var x = Ge(t, b);
                if ("ResourceError" === y) {
                  if (v.length && He(v, _)) return;
                  if (f.length && !He(f, _)) return;
                } else {
                  if (u.length && He(u, y)) return;
                  if (g.length && He(g, x)) return;
                  if (l.length && !He(l, x)) return;
                }
                if (t && t.length > 0) {
                  var k = t[0].filename || "",
                    P = -1 !== k.indexOf("@baidu/weirwood-error"),
                    A = -1 !== k.indexOf(ft);
                  if (P || A) return;
                }
                if (-1 === x.indexOf(ft)) {
                  var C = ze(t, b, S),
                    L = r(r({}, n), {
                      exception: {
                        type: y,
                        value: _,
                        originalStack: T,
                        stacktrace: C,
                        url: "ResourceError" === y ? _ : x,
                        page: e.page,
                        element: e.element,
                        timing: e.timing,
                        elementPath: e.elementPath,
                      },
                    }),
                    I = L.exception;
                  null == I.type &&
                    "" === I.value &&
                    (I.value = "Unrecoverable error caught"),
                    !L.exception.mechanism &&
                      L.mechanism &&
                      ((L.exception.mechanism = L.mechanism),
                      delete L.mechanism),
                    this._send(L);
                }
              }
            }),
            (e.prototype.mergeGlobalContext = function (e) {
              var t,
                n,
                o,
                a = b();
              e.env = r(r(r({}, this._globalContext.env), e.env), {
                network:
                  null === (o = a.navigator.connection) || void 0 === o
                    ? void 0
                    : o.effectiveType,
                windowHeight: (a.document.documentElement || a.document.body)
                  .clientHeight,
                windowWidth: (a.document.documentElement || a.document.body)
                  .clientWidth,
                documentTitle: a.document.title,
              });
              try {
                for (
                  var s = i(Object.keys(this._currentExceptionContext)),
                    u = s.next();
                  !u.done;
                  u = s.next()
                ) {
                  var c = u.value;
                  e.env[c] = this._currentExceptionContext[c];
                }
              } catch (l) {
                t = { error: l };
              } finally {
                try {
                  u && !u.done && (n = s.return) && n.call(s);
                } finally {
                  if (t) throw t.error;
                }
              }
              (e.env["session:duration"] =
                Date.now() - this._currentExceptionStartTime),
                this._globalContext.user && (e.user = this._globalContext.user),
                this._globalContext.session_id &&
                  (e.session_id = this._globalContext.session_id);
            }),
            (e.prototype._send = function (e) {
              var t = { request: this._requestInfo };
              if (
                (d(e.trimHeadFrames) || delete e.trimHeadFrames,
                (e = r(r({}, t), e)),
                this.mergeGlobalContext(e),
                this._behaviors && this._behaviors.length > 0)
              ) {
                var n = [].slice.call(this._behaviors, 0);
                this.options.behaviorDataCallback &&
                  (n = this.options.behaviorDataCallback(n)),
                  (e.behaviors = n);
              }
              var i = this.options;
              if (
                (i.token && (e.token = i.token),
                i.buildid && (e.buildid = i.buildid),
                (e = this._sanitizeData(e)),
                Object.keys(e).forEach(function (t) {
                  (null == e[t] || "" === e[t] || y(e[t])) && delete e[t];
                }),
                f(i.dataCallback) && (e = i.dataCallback(e)),
                e && !y(e))
              ) {
                var o = Date.now() - this._messagesSendEmptyStartTime,
                  a = o < 6e4,
                  s =
                    this._messagesSendLastMinute >
                    this.options.maxMessagePerMinute;
                if (a) {
                  if (s) return;
                } else
                  (this._messagesSendEmptyStartTime = Date.now()),
                    (this._messagesSendLastMinute = 1);
                "number" === typeof i.sampleRate
                  ? Math.random() < i.sampleRate &&
                    (this._sendProcessedPayload(e),
                    (this._messagesSendLastMinute += 1))
                  : (this._sendProcessedPayload(e),
                    (this._messagesSendLastMinute += 1));
              }
            }),
            (e.prototype.isSetup = function () {
              return this._installed;
            }),
            (e.prototype._trimPacket = function (e) {
              var t,
                n,
                r = this.options.maxUrlLength || 0,
                o = this.options.maxMessageLength || 0;
              if (
                (e.exception && (e.exception.value = we(e.exception.value, o)),
                e.request)
              ) {
                var a = b();
                e.request.url = we(a.location.href, r);
                var s = e.request.headers.Referrer;
                e.request.headers.Referrer = we(s, r);
              }
              if (e.behaviors && e.behaviors.length) {
                var u = ["url", "to", "from"],
                  c = function (e) {
                    var t = e.data || {},
                      n = function (e) {
                        t.hasOwnProperty(e) &&
                          u.forEach(function (n) {
                            e === n && (t[e] = we(t[e], r));
                          });
                      };
                    for (var i in t) n(i);
                  };
                try {
                  for (
                    var l = i(e.behaviors), d = l.next();
                    !d.done;
                    d = l.next()
                  ) {
                    var f = d.value;
                    c(f);
                  }
                } catch (p) {
                  t = { error: p };
                } finally {
                  try {
                    d && !d.done && (n = l.return) && n.call(l);
                  } finally {
                    if (t) throw t.error;
                  }
                }
              }
              return e;
            }),
            (e.prototype._sendProcessedPayload = function (e, t) {
              var n = this,
                r = this.options;
              if (
                ((e = this._trimPacket(e)),
                this.options.allowDuplicates || !this._isRepeatData(e))
              ) {
                var i,
                  o = r.issueGroupby;
                o && f(o) && (i = o(e.exception)),
                  i && p(i)
                    ? ((e.fingerprint = i.substr(0, 255)),
                      (e.event_id = ee(e.fingerprint)))
                    : (e.event_id = ee(Pe(e))),
                  (e.data_id = ee(Ae(e))),
                  (e.version = this.options.version || ""),
                  (e.sdkTimestamp = Date.now()),
                  (this._lastData = e);
                var a = { weirwood_version: this.options.version || "" };
                (r.transport || this._makeRequest).call(this, {
                  url: this.options.endpoint,
                  auth: a,
                  data: e,
                  options: r,
                  onSuccess: function () {
                    n._resetBackoff(), t && t();
                  },
                  onError: function (e) {
                    e.request && n._setBackoffState(e.request),
                      (e =
                        e ||
                        new Error(
                          "Raven send failed (no additional details provided)"
                        )),
                      t && t(e);
                  },
                });
              } else
                console.warn("Weirwood error SDK dropped repeat event:", e);
            }),
            (e.prototype._makeRequest = function (e) {
              var t,
                n,
                o = this,
                a = e.url,
                s = null,
                u = {};
              e.options.headers && (s = ve(e.options.headers)),
                e.options.fetchParameters &&
                  (u = ve(e.options.fetchParameters));
              var c = this.options.sendWindow;
              if (oe()) {
                u.body = le(e.data);
                var l = r(r({}, this._fetchDefaults), u);
                if (s) {
                  var d = new Headers();
                  try {
                    for (
                      var f = i(Object.keys(s)), p = f.next();
                      !p.done;
                      p = f.next()
                    ) {
                      var h = p.value;
                      d.append(h, s[h]);
                    }
                  } catch (O) {
                    t = { error: O };
                  } finally {
                    try {
                      p && !p.done && (n = f.return) && n.call(f);
                    } finally {
                      if (t) throw t.error;
                    }
                  }
                  d.append("Content-Type", "text/plain"), (l.headers = d);
                }
                return c
                  .fetch(a, l)
                  .then(function (t) {
                    if (t.ok) e.onSuccess && e.onSuccess(), o._resetBackoff();
                    else {
                      var n = new Error(
                        "Weirwood error SDK error code: " + t.status
                      );
                      (n.request = t), e.onError && e.onError(n);
                    }
                  })
                  ["catch"](function () {
                    e.onError &&
                      e.onError(
                        new Error(
                          "Weirwood error SDK error code: network unavailable"
                        )
                      ),
                      o._resetBackoff();
                  });
              }
              var m = c.XMLHttpRequest && new c.XMLHttpRequest();
              if (m) {
                var g =
                  "withCredentials" in m ||
                  "undefined" !== typeof XDomainRequest;
                g &&
                  ("withCredentials" in m
                    ? (m.onreadystatechange = function () {
                        if (4 === m.readyState) {
                          if (200 === m.status) e.onSuccess && e.onSuccess();
                          else if (e.onError) {
                            o._resetBackoff();
                            var t = new Error(
                              "Weirwood error SDK error code: " + m.status
                            );
                            (t.request = m), e.onError(t);
                          }
                        } else o._resetBackoff();
                      })
                    : ((m = new XDomainRequest()),
                      (a = a.replace(/^https?:/, "")),
                      e.onSuccess && (m.onload = e.onSuccess),
                      e.onError &&
                        (m.onerror = function () {
                          var t = new Error(
                            "Weirwood error SDK error code: XDomainRequest"
                          );
                          (t.request = m), e.onError(t);
                        })),
                  m.open("POST", a),
                  s &&
                    Oe(s, function (e, t) {
                      m.setRequestHeader(e, t);
                    }),
                  m.send(le(e.data)));
              }
            }),
            (e.prototype._sanitizeData = function (e) {
              var t = this.options.sanitizeKeys || [];
              return t.length ? Fe(e, t) : e;
            }),
            (e.prototype.captureUserAgent = function (e) {
              this._requestInfo = e;
            }),
            (e.prototype.captureException = function (e, t) {
              if (
                (t ||
                  (t = {
                    trimHeadFrames: 0,
                    includePaths: [],
                    mechanism: "generic",
                    message: "",
                  }),
                u(e))
              );
              else if (c(e)) e = e.error;
              else {
                if (!O(e)) {
                  if (l(e)) {
                    var n = e.name || "DOMException",
                      i = e.message ? n + ": " + e.message : n;
                    return this.captureMessage(i, t);
                  }
                  return this.captureMessage(
                    e,
                    r(r({}, t), {
                      stacktrace: !0,
                      trimHeadFrames: t.trimHeadFrames + 1,
                    })
                  );
                }
                (t = this._getCaptureExceptionOptionsFromPlainObject(t, e)),
                  (e = new Error(t.message));
              }
              try {
                t = r(
                  {
                    trimHeadFrames: 0,
                    mechanism: "generic",
                    includePaths: this.options.includePaths || [],
                  },
                  t
                );
                var o = I(e);
                this._handleStackInfo(o, t);
              } catch (a) {
                if (e !== a) throw a;
              }
              return this;
            }),
            (e.prototype._isRepeatData = function (e) {
              var t = this._lastData,
                n = e.exception,
                r = t ? t.exception : {};
              return ke(n, r);
            }),
            (e.prototype._resetBackoff = function () {
              (this._currentExceptionStartTime = Date.now()),
                (this._currentExceptionContext = {});
            }),
            (e.prototype._setBackoffState = function (e) {
              console.log(e);
            }),
            (e.prototype.captureMessage = function (e, t) {
              var n;
              void 0 === t && (t = {});
              var i = this.options,
                o = i.ignoreErrors || [],
                a = i.ignoreKeys || [],
                s = i.whitelistUrls || [],
                u = i.ignoreUrls || [],
                c = i.ignoreJsUrls || [];
              if (!o.length || !He(o, e)) {
                var l;
                try {
                  throw new Error(e);
                } catch (g) {
                  l = g;
                }
                var d = I(l),
                  f = Array.isArray(d.stack) && d.stack[1];
                -1 !==
                  (null ===
                    (n = null === f || void 0 === f ? void 0 : f.func) ||
                  void 0 === n
                    ? void 0
                    : n.indexOf("captureException")) && (f = d.stack[2]);
                var p = (f && f.url) || "";
                if (
                  (!u.length || !He(u, window.location.href)) &&
                  (!a.length || !He(a, l.name)) &&
                  (!c.length || !He(c, p)) &&
                  (!s.length || He(s, p))
                ) {
                  (t = r(r({}, t), {
                    trimHeadFrames: 0,
                    includePaths: i.includePaths,
                  })),
                    (t.trimHeadFrames += 1);
                  var h = Ve(d, t),
                    m = {
                      exception: {
                        mechanism: "manual",
                        type: l.name,
                        value: l.message,
                        stacktrace: h.slice(1).reverse(),
                        url: p,
                      },
                    };
                  return this._send(m), this;
                }
              }
            }),
            (e.prototype.captureAPIException = function (e) {
              var t = this,
                n = b(),
                i = this.options,
                o = i.ignoreUrls,
                a = void 0 === o ? [] : o,
                s = i.ignoreApiUrls,
                u = void 0 === s ? [] : s,
                c = i.buildid,
                l = i.token,
                h = i.version,
                m = i.apiWhitelistUrls;
              if (e.url && e.method && !d(e.status)) {
                if (
                  (!a.length || !He(a, n.location.href)) &&
                  (!u.length || !He(u, e.url)) &&
                  (!m.length || He(m, e.url))
                ) {
                  var g = r(r({}, e), { type: "APIError" }),
                    O = {
                      request: {
                        headers: { "User-Agent": n.navigator.userAgent },
                        url: n.location.href,
                      },
                      exception: g,
                      buildid: c,
                      token: l,
                      version: h || "",
                    },
                    v = this.options;
                  if (
                    (f(v.dataCallback) && (O = v.dataCallback(O)), O && !y(O))
                  ) {
                    var _;
                    this.mergeGlobalContext(O);
                    var R = this.options.issueGroupby;
                    if (
                      (R && f(R) && (_ = R(O.exception)),
                      _ && p(_)
                        ? ((O["fingerprint"] = _.substr(0, 255)),
                          (O["event_id"] = ee(O["fingerprint"])))
                        : (O["event_id"] = Ne(e)),
                      (O["data_id"] = Ue(O)),
                      this._lastAPIData !== O["data_id"])
                    ) {
                      this._lastAPIData = O["data_id"];
                      var M = function () {
                        var e;
                        (
                          (null === (e = t.options.globalOptions) ||
                          void 0 === e
                            ? void 0
                            : e.transport) || t._makeRequest
                        ).call(t, {
                          url: t.options.endpoint,
                          data: O,
                          options: {},
                          onSuccess: function () {},
                          onError: function () {},
                        });
                      };
                      "number" === typeof v.sampleRate
                        ? Math.random() < v.sampleRate && M()
                        : M();
                    }
                  }
                }
              } else
                console.error(
                  "API异常参数至少需要包含 method、url、status 参数。"
                );
            }),
            (e.prototype.captureEvent = function () {}),
            (e.prototype.afterLoad = function () {
              var e = b(),
                t = e["RavenConfig"];
              t && this.init(t);
            }),
            (e.prototype._getCaptureExceptionOptionsFromPlainObject = function (
              e,
              t
            ) {
              var n = Object.keys(t).sort(),
                i = r(r({}, e), {
                  message: "Non-Error exception captured with keys: " + ye(n),
                  fingerprint: [ee(n.join(""))],
                  env: (e && e.env) || {},
                });
              return (i.env.__serialized__ = Re(t)), i;
            }),
            (e.prototype.captureBehavior = function (e) {
              var t = r(r({}, e), { timestamp: Date.now() / 1e3 });
              if (f(this.options.breadcrumbCallback)) {
                var n = this.options.breadcrumbCallback(t);
                if (_(n) && !y(n)) t = n;
                else if (!1 === n) return this;
              }
              return (
                this._behaviors.push(t),
                this._behaviors.length > (this.options.behaviorLimit || 10) &&
                  this._behaviors.shift(),
                this
              );
            }),
            (e.prototype.setContext = function (e, t) {
              for (var n in (void 0 === t && (t = { persist: !0 }), e))
                Reflect.has(e, n) &&
                  (t.persist
                    ? (this._globalContext.env[n] = e[n])
                    : (this._currentExceptionContext[n] = e[n]));
            }),
            (e.prototype.clearContext = function () {
              (this._globalContext.env = {}),
                (this._currentExceptionContext = {});
            }),
            (e.prototype._restoreBuiltIns = function () {
              var e;
              while (this._wrappedBuiltIns.length) {
                e = this._wrappedBuiltIns.shift();
                var t = e[0],
                  n = e[1],
                  r = e[2];
                t[n] = r;
              }
            }),
            (e.prototype.noConflict = function () {}),
            (e.prototype.uninstall = function () {
              this.dispose();
            }),
            (e.prototype.dispose = function () {
              A(this._globalErrorHandler),
                this._restoreBuiltIns(),
                (this._globalErrorHandler = null),
                (this._installed = !1);
            }),
            e
          );
        })(),
        ht = {};
      function mt() {
        return "undefined" !== typeof window
          ? window
          : "undefined" !== typeof n.g
          ? n.g
          : "undefined" !== typeof self
          ? self
          : ht;
      }
      function gt() {
        return new Date().getTime();
      }
      function Ot(e) {
        return (
          !!e &&
          e.toString &&
          !e.hasOwnProperty("toString") &&
          /\[native code\]/.test(String(e))
        );
      }
      function vt(e) {
        var t = window.history;
        "function" === typeof t.pushState &&
          (t.pushState = (function (t) {
            return function (n, r, i) {
              return e(i), t.apply(this, arguments);
            };
          })(t.pushState)),
          "function" === typeof t.replaceState &&
            (t.replaceState = (function (t) {
              return function (n, r, i) {
                var o = window.document.URL;
                return i !== o && e(i), t.apply(this, arguments);
              };
            })(t.replaceState)),
          window.addEventListener("hashchange", function (t) {
            var n = (t || {}).newURL;
            e(n);
          }),
          window.addEventListener("popstate", function (t) {
            var n = window.document.URL;
            e(n);
          });
      }
      function yt(e) {
        return void 0 === e;
      }
      function _t() {
        var e = window.crypto || window["msCrypto"];
        if (!yt(e) && e.getRandomValues) {
          var t = new Uint16Array(8);
          e.getRandomValues(t),
            (t[3] = (4095 & t[3]) | 16384),
            (t[4] = (16383 & t[4]) | 32768);
          var n = function (e) {
            var t = e.toString(16);
            while (t.length < 4) t = "0" + t;
            return t;
          };
          return (
            n(t[0]) +
            n(t[1]) +
            n(t[2]) +
            n(t[3]) +
            n(t[4]) +
            n(t[5]) +
            n(t[6]) +
            n(t[7])
          );
        }
        return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(
          /[xy]/g,
          function (e) {
            var t = (16 * Math.random()) | 0,
              n = "x" === e ? t : (3 & t) | 8;
            return n.toString(16);
          }
        );
      }
      var Rt = (function () {
        function e(e) {
          (this.version = "1.3.10"),
            (this.lastRouteTime = 0),
            e && this.init(e);
        }
        return (
          (e.prototype.init = function (e) {
            var t = this.getSendWindow();
            if (!e.perf || (e.perf && !e.perf.disable)) {
              var n = r(r(r({}, e.perf), e.common), {
                version: this.version,
                sendWindow: t,
              });
              this.perf = new s.A(n);
            }
            if (!e.error || (e.error && !e.error.disable)) {
              var i = r(r(r({}, e.error), e.common), {
                version: this.version,
                sendWindow: t,
                uuid4: _t,
              });
              this.error = new pt(i);
            }
            this.routeChange(window.document.URL),
              vt(this.routeChange.bind(this));
          }),
          (e.prototype.routeChange = function (e) {
            var t = gt();
            if (t - this.lastRouteTime > 100) {
              this.lastRouteTime = t;
              var n = _t() + "-" + t;
              this.error && this.error.setContext({ pageId: n });
            }
          }),
          (e.prototype.getSendWindow = function () {
            var e = mt(),
              t = ["fetch", "ajax", "sendBeacon"],
              n = t.some(function (e) {
                return !Ot(window[e]);
              });
            if (n) {
              var r = document.createElement("iframe");
              r.style.setProperty("display", "none", "important"),
                document.body.appendChild(r),
                (e = r ? r.contentWindow : e);
            }
            return e;
          }),
          (e.prototype.afterLoad = function () {}),
          e
        );
      })();
      function bt(e) {
        var t = mt();
        if (t["__Weirwood"]) return t["__Weirwood"];
        var n = new Rt(e);
        return n.afterLoad(), (t["__Weirwood"] = n), n;
      }
    },
  },
]);
//# sourceMappingURL=963.0c7d8973.js.map
