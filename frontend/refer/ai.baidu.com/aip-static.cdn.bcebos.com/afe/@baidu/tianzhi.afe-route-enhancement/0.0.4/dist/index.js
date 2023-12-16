(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? factory(exports, require("@vue/composition-api"))
    : typeof define === "function" && define.amd
    ? define(["exports", "@vue/composition-api"], factory)
    : ((global =
        typeof globalThis !== "undefined" ? globalThis : global || self),
      factory((global.RouteEnhancement = {}), global.compositionApi));
})(this, function (exports, compositionApi) {
  "use strict";

  const routeContextKey = Symbol();
  const provideRouteContext = (guardFactory = (guard) => guard) => {
    const inst = compositionApi.getCurrentInstance();
    if (!inst) {
      throw "";
    }
    const { options } = inst.proxy.constructor;
    const hooks = options.beforeRouteLeave || [];
    options.beforeRouteLeave = hooks;
    const attachLeaveHook = (leaveGuard) => {
      const realLeaveGuard = guardFactory(leaveGuard);
      hooks.push(realLeaveGuard);
      return () => {
        hooks.includes(realLeaveGuard)
          ? hooks.splice(hooks.indexOf(realLeaveGuard), 1)
          : null;
      };
    };
    compositionApi.provide(routeContextKey, {
      attachLeaveHook,
    });
    return {
      attachLeaveHook,
    };
  };

  const onBeforeRouteLeave = (leaveGuard) => {
    const currentRouteView = compositionApi.inject(routeContextKey);
    const cleanUp =
      currentRouteView === null || currentRouteView === void 0
        ? void 0
        : currentRouteView.attachLeaveHook(leaveGuard);
    compositionApi.onBeforeUnmount(() =>
      cleanUp === null || cleanUp === void 0 ? void 0 : cleanUp()
    );
  };

  var beforeRouteLeave = compositionApi.defineComponent({
    props: {
      hook: {
        type: Function,
        required: true,
      },
    },
    setup(props) {
      onBeforeRouteLeave((to, from, next) => {
        const { hook } = props;
        if (!hook) {
          next();
          return;
        }
        hook(to, from, next);
        return;
      });
      return {};
    },
    render() {
      return null;
    },
  });

  /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }

  const defaultBeforeEachRouteLeave = (hook) => (to, from, next) => {
    if (!hook) {
      next();
      return;
    }
    hook(to, from, next);
    return;
  };
  const enhanceRouteComponent = (comp, options) => {
    const { beforeEachRouteLeave = defaultBeforeEachRouteLeave } =
      options !== null && options !== void 0 ? options : {};
    return compositionApi.defineComponent({
      layout: comp.layout,
      setup() {
        const { attachLeaveHook } = provideRouteContext(beforeEachRouteLeave);
        const root = compositionApi.ref();
        if ("beforeRouteLeave" in comp) {
          const guards = comp.beforeRouteLeave;
          attachLeaveHook((to, from, next) =>
            root.value ? guards.call(root.value, to, from, next) : next()
          );
        }
        return {
          root,
        };
      },
      render(h) {
        return h(comp, {
          ref: "root",
          scopedSlots: this.$scopedSlots,
          attrs: this.$attrs,
          props: this.$props,
        });
      },
    });
  };
  const enhanceRoutes = (routes, options) => {
    return routes.map((route) =>
      route.children
        ? Object.assign(Object.assign({}, route), {
            children: enhanceRoutes(route.children, options),
          })
        : "component" in route
        ? Object.assign(Object.assign({}, route), {
            component:
              route.component instanceof Function
                ? () =>
                    __awaiter(void 0, void 0, void 0, function* () {
                      var _a;
                      const comp = yield route.component();
                      return enhanceRouteComponent(
                        (_a = comp.default) !== null && _a !== void 0
                          ? _a
                          : comp,
                        options
                      );
                    })
                : enhanceRouteComponent(route.component, options),
          })
        : route
    );
  };

  exports.BeforeRouteLeave = beforeRouteLeave;
  exports.enhanceRouteComponent = enhanceRouteComponent;
  exports.enhanceRoutes = enhanceRoutes;
  exports.onBeforeRouteLeave = onBeforeRouteLeave;

  Object.defineProperty(exports, "__esModule", { value: true });
});
//# sourceMappingURL=index.js.map
