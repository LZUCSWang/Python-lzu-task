(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? factory(exports, require("@vue/composition-api"))
    : typeof define === "function" && define.amd
    ? define(["exports", "@vue/composition-api"], factory)
    : ((global =
        typeof globalThis !== "undefined" ? globalThis : global || self),
      factory((global["@baidu/afe-utils"] = {}), global.compositionApi));
})(this, function (exports, compositionApi) {
  "use strict";

  /*! *****************************************************************************
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
  /* global Reflect, Promise */

  var extendStatics = function (d, b) {
    extendStatics =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (d, b) {
          d.__proto__ = b;
        }) ||
      function (d, b) {
        for (var p in b)
          if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      };
    return extendStatics(d, b);
  };

  function __extends(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype =
      b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
  }

  var __assign = function () {
    __assign =
      Object.assign ||
      function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };

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

  function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  }

  var notifyRootApp = function (key, payload) {
    var event = new CustomEvent("afe:notifyRootApp", {
      detail: {
        key: key,
        payload: payload,
      },
    });
    window.dispatchEvent(event);
  };
  var getInstance = function () {
    var vm = compositionApi.getCurrentInstance();
    if (!vm) {
      return vm;
    }
    return vm.proxy || vm;
  };

  var TemplateType;
  (function (TemplateType) {
    TemplateType[(TemplateType["IMG_CLS"] = 100)] = "IMG_CLS";
    TemplateType[(TemplateType["IMG_CLS_MULTI"] = 101)] = "IMG_CLS_MULTI";
    TemplateType[(TemplateType["OBJ_DCT_RECT"] = 200)] = "OBJ_DCT_RECT";
    TemplateType[(TemplateType["OBJ_DCT"] = 200)] = "OBJ_DCT";
    TemplateType[(TemplateType["OBJ_QUAD"] = 201)] = "OBJ_QUAD";
    TemplateType[(TemplateType["OBJ_DCT_QUAD"] = 201)] = "OBJ_DCT_QUAD";
    TemplateType[(TemplateType["SOUND_CLS"] = 300)] = "SOUND_CLS";
    TemplateType[(TemplateType["TEXT_CLS"] = 400)] = "TEXT_CLS";
    TemplateType[(TemplateType["TEXT_CLS_MULTI"] = 401)] = "TEXT_CLS_MULTI";
    TemplateType[(TemplateType["TEXT_CLS_ERNIE_DOC"] = 406)] =
      "TEXT_CLS_ERNIE_DOC";
    TemplateType[(TemplateType["TEXT_CLS_ERNIE_M"] = 407)] = "TEXT_CLS_ERNIE_M";
    TemplateType[(TemplateType["VIDEO_CLS"] = 500)] = "VIDEO_CLS";
    TemplateType[(TemplateType["SEGMENT"] = 600)] = "SEGMENT";
    TemplateType[(TemplateType["INSTANCE_SEGMENT"] = 600)] = "INSTANCE_SEGMENT";
    TemplateType[(TemplateType["SEMANTIC_SEGMENT"] = 601)] = "SEMANTIC_SEGMENT";
    TemplateType[(TemplateType["TEXT_SIM"] = 700)] = "TEXT_SIM";
    TemplateType[(TemplateType["TEXT_SEQ_IOB"] = 800)] = "TEXT_SEQ_IOB";
    TemplateType[(TemplateType["TEXT_SEQ_IO"] = 801)] = "TEXT_SEQ_IO";
    TemplateType[(TemplateType["TEXT_SEQ_IOE"] = 802)] = "TEXT_SEQ_IOE";
    TemplateType[(TemplateType["TEXT_SEQ_IOBES"] = 803)] = "TEXT_SEQ_IOBES";
    TemplateType[(TemplateType["SENTIMENT"] = 900)] = "SENTIMENT";
    TemplateType[(TemplateType["ENTITY_SENTIMENT"] = 901)] = "ENTITY_SENTIMENT";
    TemplateType[(TemplateType["TEXT_ENTITY_EXTRACT"] = 1000)] =
      "TEXT_ENTITY_EXTRACT";
    TemplateType[(TemplateType["TEXT_RELATION_EXTRACT"] = 1100)] =
      "TEXT_RELATION_EXTRACT";
    TemplateType[(TemplateType["VIDEO_TRACKING"] = 1200)] = "VIDEO_TRACKING";
    TemplateType[(TemplateType["TEXT_ERNIE_BOT"] = 2000)] = "TEXT_ERNIE_BOT";
    TemplateType[(TemplateType["VIDEO_OBJ_DCT"] = 50200)] = "VIDEO_OBJ_DCT";
    TemplateType[(TemplateType["OCR"] = 1300)] = "OCR";
    TemplateType[(TemplateType["UNSTRUCTURED_OCR"] = 1301)] =
      "UNSTRUCTURED_OCR";
    TemplateType[(TemplateType["IMG_POINT"] = 1500)] = "IMG_POINT";
    TemplateType[(TemplateType["IMG_POLYLINE"] = 1600)] = "IMG_POLYLINE";
    TemplateType[(TemplateType["IMG_CUBOID"] = 1700)] = "IMG_CUBOID";
    TemplateType[(TemplateType["TEXT_NLG"] = 1800)] = "TEXT_NLG";
    TemplateType[(TemplateType["TEXT_COMMENT"] = 1900)] = "TEXT_COMMENT";
    TemplateType[(TemplateType["ML"] = 20100)] = "ML";
    TemplateType[(TemplateType["TIME_SERIES_FORECAST"] = 20200)] =
      "TIME_SERIES_FORECAST";
    TemplateType[(TemplateType["TIME_SERIES"] = 20400)] = "TIME_SERIES";
    TemplateType[(TemplateType["RETAIL"] = 10010)] = "RETAIL";
    TemplateType[(TemplateType["RETAIL_DD"] = 10020)] = "RETAIL_DD";
    TemplateType[(TemplateType["CUSTOM"] = 9990)] = "CUSTOM";
    TemplateType[(TemplateType["TEXT_CUSTOM"] = 9980)] = "TEXT_CUSTOM";
    TemplateType[(TemplateType["TEXT_ERINE3"] = 9970)] = "TEXT_ERINE3";
    TemplateType[(TemplateType["PADDLE_COMPONENT"] = 9910)] =
      "PADDLE_COMPONENT";
    TemplateType[(TemplateType["TEXT_QA"] = 30200)] = "TEXT_QA";
    TemplateType[(TemplateType["TEXT_SCORE"] = 30300)] = "TEXT_SCORE";
    TemplateType[(TemplateType["TEXT_RELEVANCE"] = 30400)] = "TEXT_RELEVANCE";
    TemplateType[(TemplateType["TEXT_SUMMARY"] = 30500)] = "TEXT_SUMMARY";
    TemplateType[(TemplateType["TEXT_COMPOSE"] = 30600)] = "TEXT_COMPOSE";
    TemplateType[(TemplateType["TEXT_POS_LABELING"] = 30700)] =
      "TEXT_POS_LABELING";
    TemplateType[(TemplateType["IMG_COMPOSE"] = 80000)] = "IMG_COMPOSE";
    TemplateType[(TemplateType["IMG_MIXED"] = 80100)] = "IMG_MIXED";
    TemplateType[(TemplateType["ELC_FORECAST"] = 100010)] = "ELC_FORECAST";
    TemplateType[(TemplateType["CAR_DETECTION"] = 7000)] = "CAR_DETECTION";
    TemplateType[(TemplateType["TRUCK_CLASSIFICATION"] = 7010)] =
      "TRUCK_CLASSIFICATION";
    TemplateType[(TemplateType["IMG_TEXT"] = 20010)] = "IMG_TEXT"; // 图文匹配
  })(TemplateType || (TemplateType = {}));
  var ProjectType;
  (function (ProjectType) {
    ProjectType[(ProjectType["IMG_CLS"] = 1)] = "IMG_CLS";
    ProjectType[(ProjectType["OBJ_DCT"] = 2)] = "OBJ_DCT";
    ProjectType[(ProjectType["SOUND_CLS"] = 3)] = "SOUND_CLS";
    ProjectType[(ProjectType["TEXT_CLS"] = 4)] = "TEXT_CLS";
    ProjectType[(ProjectType["VIDEO_CLS"] = 5)] = "VIDEO_CLS";
    ProjectType[(ProjectType["SEGMENT"] = 6)] = "SEGMENT";
    ProjectType[(ProjectType["TEXT_SIM"] = 7)] = "TEXT_SIM";
    ProjectType[(ProjectType["TEXT_SEQ"] = 8)] = "TEXT_SEQ";
    ProjectType[(ProjectType["SENTIMENT"] = 9)] = "SENTIMENT";
    ProjectType[(ProjectType["TEXT_ENTITY_EXTRACT"] = 10)] =
      "TEXT_ENTITY_EXTRACT";
    ProjectType[(ProjectType["TEXT_RELATION_EXTRACT"] = 11)] =
      "TEXT_RELATION_EXTRACT";
    ProjectType[(ProjectType["VIDEO_TRACKING"] = 12)] = "VIDEO_TRACKING";
    ProjectType[(ProjectType["VIDEO_OBJ_DCT"] = 502)] = "VIDEO_OBJ_DCT";
    ProjectType[(ProjectType["OCR"] = 13)] = "OCR";
    // 14 不要用 Edge使用了14作为语义分割的类型 EasyDL s 6-601
    ProjectType[(ProjectType["IMG_POINT"] = 15)] = "IMG_POINT";
    ProjectType[(ProjectType["IMG_POLYLINE"] = 16)] = "IMG_POLYLINE";
    ProjectType[(ProjectType["IMG_CUBOID"] = 17)] = "IMG_CUBOID";
    ProjectType[(ProjectType["TEXT_NLG"] = 18)] = "TEXT_NLG";
    ProjectType[(ProjectType["TEXT_COMMENT"] = 19)] = "TEXT_COMMENT";
    ProjectType[(ProjectType["TEXT_ERNIE_BOT"] = 20)] = "TEXT_ERNIE_BOT";
    ProjectType[(ProjectType["IMG_COMPOSE"] = 800)] = "IMG_COMPOSE";
    ProjectType[(ProjectType["IMG_MIXED"] = 801)] = "IMG_MIXED";
    ProjectType[(ProjectType["CUSTOM"] = 999)] = "CUSTOM";
    ProjectType[(ProjectType["TEXT_CUSTOM"] = 998)] = "TEXT_CUSTOM";
    ProjectType[(ProjectType["TEXT_ERINE3"] = 997)] = "TEXT_ERINE3";
    ProjectType[(ProjectType["PADDLE_COMPONENT"] = 991)] = "PADDLE_COMPONENT";
    ProjectType[(ProjectType["ML"] = 201)] = "ML";
    ProjectType[(ProjectType["TIME_SERIES_FORECAST"] = 202)] =
      "TIME_SERIES_FORECAST";
    ProjectType[(ProjectType["TIME_SERIES"] = 204)] = "TIME_SERIES";
    ProjectType[(ProjectType["RETAIL"] = 1001)] = "RETAIL";
    ProjectType[(ProjectType["TEXT_QA"] = 302)] = "TEXT_QA";
    // TEXT_NLG = 302, // DATA私有化自然语言生成
    ProjectType[(ProjectType["TEXT_SCORE"] = 303)] = "TEXT_SCORE";
    ProjectType[(ProjectType["TEXT_RELEVANCE"] = 304)] = "TEXT_RELEVANCE";
    ProjectType[(ProjectType["TEXT_SUMMARY"] = 305)] = "TEXT_SUMMARY";
    ProjectType[(ProjectType["TEXT_COMPOSE"] = 306)] = "TEXT_COMPOSE";
    ProjectType[(ProjectType["TEXT_POS_LABELING"] = 307)] = "TEXT_POS_LABELING";
    ProjectType[(ProjectType["RETAIL_DD"] = 1002)] = "RETAIL_DD";
    ProjectType[(ProjectType["ELC_FORECAST"] = 10001)] = "ELC_FORECAST";
    ProjectType[(ProjectType["CAR_DETECTION"] = 700)] = "CAR_DETECTION";
    ProjectType[(ProjectType["TRUCK_CLASSIFICATION"] = 701)] =
      "TRUCK_CLASSIFICATION";
    ProjectType[(ProjectType["IMG_TEXT"] = 2001)] = "IMG_TEXT"; // 图文匹配
  })(ProjectType || (ProjectType = {}));

  var DataService;
  (function (DataService) {
    DataService[(DataService["COLLECT"] = 1)] = "COLLECT";
    DataService[(DataService["ANNOTATE"] = 2)] = "ANNOTATE";
    DataService[(DataService["CLEAN"] = 3)] = "CLEAN";
  })(DataService || (DataService = {}));
  var DataType;
  (function (DataType) {
    DataType[(DataType["IMG"] = 1)] = "IMG";
    DataType[(DataType["AUDIO"] = 3)] = "AUDIO";
    DataType[(DataType["TEXT"] = 4)] = "TEXT";
    DataType[(DataType["VIDEO"] = 5)] = "VIDEO";
    DataType[(DataType["IMG_TEXT"] = 7)] = "IMG_TEXT"; // 图文匹配
  })(DataType || (DataType = {}));
  var ImportStatus;
  (function (ImportStatus) {
    ImportStatus[(ImportStatus["DONE"] = 0)] = "DONE";
    ImportStatus[(ImportStatus["NONE"] = 1)] = "NONE";
    ImportStatus[(ImportStatus["DOING"] = 2)] = "DOING";
    ImportStatus[(ImportStatus["FAILED"] = 3)] = "FAILED";
    ImportStatus[(ImportStatus["STOPPED"] = 4)] = "STOPPED";
    ImportStatus[(ImportStatus["CONFIRMED"] = 5)] = "CONFIRMED";
    ImportStatus[(ImportStatus["CANCELLED"] = 6)] = "CANCELLED";
  })(ImportStatus || (ImportStatus = {}));
  var ExportStatus;
  (function (ExportStatus) {
    ExportStatus[(ExportStatus["PREPARING"] = -1)] = "PREPARING";
    ExportStatus[(ExportStatus["DONE"] = 0)] = "DONE";
    ExportStatus[(ExportStatus["TODO"] = 1)] = "TODO";
    ExportStatus[(ExportStatus["DOING"] = 2)] = "DOING";
    ExportStatus[(ExportStatus["FAILED"] = 3)] = "FAILED";
    ExportStatus[(ExportStatus["STOPPED"] = 4)] = "STOPPED";
  })(ExportStatus || (ExportStatus = {}));
  var EtlStatus;
  (function (EtlStatus) {
    EtlStatus[(EtlStatus["NONE"] = 0)] = "NONE";
    EtlStatus[(EtlStatus["DOING"] = 1)] = "DOING";
    EtlStatus[(EtlStatus["DONE"] = 2)] = "DONE";
    EtlStatus[(EtlStatus["STOPPED"] = 3)] = "STOPPED";
    EtlStatus[(EtlStatus["FAILED"] = 4)] = "FAILED";
    EtlStatus[(EtlStatus["PAUSED"] = 5)] = "PAUSED";
  })(EtlStatus || (EtlStatus = {}));
  var PublishStatus;
  (function (PublishStatus) {
    PublishStatus[(PublishStatus["NONE"] = 0)] = "NONE";
    PublishStatus[(PublishStatus["DONE"] = 1)] = "DONE";
    PublishStatus[(PublishStatus["FAILED"] = 2)] = "FAILED";
  })(PublishStatus || (PublishStatus = {}));
  var TeamAnnoStatus;
  (function (TeamAnnoStatus) {
    TeamAnnoStatus[(TeamAnnoStatus["CREATE"] = 0)] = "CREATE";
    TeamAnnoStatus[(TeamAnnoStatus["WAIT_ANNO"] = 1)] = "WAIT_ANNO";
    TeamAnnoStatus[(TeamAnnoStatus["ANNOTATE_ING"] = 2)] = "ANNOTATE_ING";
    TeamAnnoStatus[(TeamAnnoStatus["ANNO_SUBMIT"] = 3)] = "ANNO_SUBMIT";
    TeamAnnoStatus[(TeamAnnoStatus["TERMINATE_WITHANNO"] = 4)] =
      "TERMINATE_WITHANNO";
    TeamAnnoStatus[(TeamAnnoStatus["TERMINATE_NOTANNO"] = 5)] =
      "TERMINATE_NOTANNO";
    TeamAnnoStatus[(TeamAnnoStatus["CHECK_COMPLATE"] = 6)] = "CHECK_COMPLATE"; // 验收完成
  })(TeamAnnoStatus || (TeamAnnoStatus = {}));

  var ErrorCode;
  (function (ErrorCode) {
    ErrorCode[(ErrorCode["LABEL_INVALID_NAME"] = 6001)] = "LABEL_INVALID_NAME";
  })(ErrorCode || (ErrorCode = {}));

  var ProjectCategory;
  (function (ProjectCategory) {
    ProjectCategory[(ProjectCategory["ALL"] = 0)] = "ALL";
    ProjectCategory[(ProjectCategory["VIS"] = 1)] = "VIS";
    ProjectCategory[(ProjectCategory["NLP"] = 2)] = "NLP";
    ProjectCategory[(ProjectCategory["ML"] = 3)] = "ML";
    ProjectCategory[(ProjectCategory["SOUND"] = 4)] = "SOUND";
    ProjectCategory[(ProjectCategory["VIDEO"] = 5)] = "VIDEO";
    ProjectCategory[(ProjectCategory["NOTEBOOK"] = 6)] = "NOTEBOOK";
    ProjectCategory[(ProjectCategory["VQA"] = 7)] = "VQA";
    ProjectCategory[(ProjectCategory["TEXT_CUSTOM"] = 98)] = "TEXT_CUSTOM";
    ProjectCategory[(ProjectCategory["CUSTOM"] = 99)] = "CUSTOM";
    ProjectCategory[(ProjectCategory["RETAIL"] = 100)] = "RETAIL";
  })(ProjectCategory || (ProjectCategory = {}));
  // 穷举保证编译安全
  const PT_TO_PC_MAPPING = {
    [ProjectType.IMG_CLS]: ProjectCategory.VIS,
    [ProjectType.OBJ_DCT]: ProjectCategory.VIS,
    [ProjectType.OCR]: ProjectCategory.VIS,
    [ProjectType.CAR_DETECTION]: ProjectCategory.VIS,
    [ProjectType.TRUCK_CLASSIFICATION]: ProjectCategory.VIS,
    [ProjectType.IMG_POINT]: ProjectCategory.VIS,
    [ProjectType.IMG_POLYLINE]: ProjectCategory.VIS,
    [ProjectType.IMG_CUBOID]: ProjectCategory.VIS,
    [ProjectType.IMG_COMPOSE]: ProjectCategory.VIS,
    [ProjectType.IMG_MIXED]: ProjectCategory.VIS,
    [ProjectType.SOUND_CLS]: ProjectCategory.SOUND,
    [ProjectType.TEXT_CLS]: ProjectCategory.NLP,
    [ProjectType.VIDEO_CLS]: ProjectCategory.VIDEO,
    [ProjectType.SEGMENT]: ProjectCategory.VIS,
    [ProjectType.TEXT_SIM]: ProjectCategory.NLP,
    [ProjectType.TEXT_SEQ]: ProjectCategory.NLP,
    [ProjectType.TEXT_POS_LABELING]: ProjectCategory.NLP,
    [ProjectType.SENTIMENT]: ProjectCategory.NLP,
    [ProjectType.TEXT_ENTITY_EXTRACT]: ProjectCategory.NLP,
    [ProjectType.TEXT_RELATION_EXTRACT]: ProjectCategory.NLP,
    [ProjectType.TEXT_COMMENT]: ProjectCategory.NLP,
    [ProjectType.TEXT_ERNIE_BOT]: ProjectCategory.NLP,
    [ProjectType.VIDEO_TRACKING]: ProjectCategory.VIDEO,
    [ProjectType.VIDEO_OBJ_DCT]: ProjectCategory.VIDEO,
    [ProjectType.CUSTOM]: ProjectCategory.NOTEBOOK,
    [ProjectType.TEXT_CUSTOM]: ProjectCategory.NOTEBOOK,
    [ProjectType.TEXT_ERINE3]: ProjectCategory.NOTEBOOK,
    [ProjectType.PADDLE_COMPONENT]: ProjectCategory.NOTEBOOK,
    [ProjectType.ML]: ProjectCategory.ML,
    [ProjectType.TIME_SERIES_FORECAST]: ProjectCategory.ML,
    [ProjectType.TIME_SERIES]: ProjectCategory.ML,
    [ProjectType.RETAIL]: ProjectCategory.RETAIL,
    [ProjectType.TEXT_QA]: ProjectCategory.NLP,
    [ProjectType.TEXT_SCORE]: ProjectCategory.NLP,
    [ProjectType.TEXT_NLG]: ProjectCategory.NLP,
    [ProjectType.TEXT_COMMENT]: ProjectCategory.NLP,
    [ProjectType.TEXT_SUMMARY]: ProjectCategory.NLP,
    [ProjectType.TEXT_COMPOSE]: ProjectCategory.NLP,
    [ProjectType.TEXT_RELEVANCE]: ProjectCategory.NLP,
    [ProjectType.RETAIL_DD]: ProjectCategory.RETAIL,
    [ProjectType.ELC_FORECAST]: ProjectCategory.ML,
    [ProjectType.IMG_TEXT]: ProjectCategory.VQA,
  };

  var DataService$1;
  (function (DataService) {
    DataService[(DataService["COLLECT"] = 1)] = "COLLECT";
    DataService[(DataService["ANNOTATE"] = 2)] = "ANNOTATE";
    DataService[(DataService["CLEAN"] = 3)] = "CLEAN";
  })(DataService$1 || (DataService$1 = {}));

  function cloneDeep(sender) {
    return JSON.parse(JSON.stringify(sender));
  }
  var ServiceBase = /** @class */ (function () {
    function ServiceBase() {
      this.state = {};
    }
    /**
     * 重置/初始化 当前 service
     *
     * @returns
     * @memberof ServiceBase
     */
    ServiceBase.prototype.reset = function () {
      Object.assign(this.state, cloneDeep(this.defaultState));
      return this;
    };
    return ServiceBase;
  })();
  function ServiceDecorator(constructor) {
    return /** @class */ (function (_super) {
      __extends(class_1, _super);
      function class_1() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        _this.defaultState = cloneDeep(_this["state"]);
        _this["state"] = compositionApi.reactive(_this["state"]);
        return _this;
      }
      return class_1;
    })(constructor);
  }
  var singletonMap = new Map();
  /**
   * 获取唯一单例
   *
   * @export
   * @template T
   * @param {T} constructor
   * @returns
   */
  function singleton(constructor) {
    if (!singletonMap.has(constructor)) {
      singletonMap.set(constructor, new constructor());
    }
    return singletonMap.get(constructor);
  }

  var PermissionService = /** @class */ (function (_super) {
    __extends(PermissionService, _super);
    function PermissionService() {
      var _this = (_super !== null && _super.apply(this, arguments)) || this;
      _this.state = {
        isOwner: false,
        permission: {},
      };
      /**
       * 设置模块权限
       *
       * @param {TModulePermisson} permission
       */
      _this.usePermissions = function (permission) {
        _this.state.permission = permission;
        _this.state.isOwner = false;
        _this.defaultState = {
          permission: permission,
          isOwner: false,
        };
      };
      /**
       *  获取对应权限
       *
       * @param {String} [permission]
       * @returns
       */
      _this.getModulePermission = function (permission) {
        if (_this.state.isOwner) {
          return true;
        }
        var ps = permission.split(".");
        var temp = _this.state.permission;
        for (var i = 0; i < ps.length; i++) {
          if (temp.hasOwnProperty(ps[i])) {
            temp = temp[ps[i]];
            continue;
          }
          if (temp === true || temp === false || typeof temp === "string") {
            return temp;
          }
          return false;
        }
        return temp;
      };
      /**
       * 获取权限
       *
       * @returns
       */
      _this.getAllPermission = function () {
        return _this.state.permission;
      };
      /**
       * 是否拥有模块某权限
       *
       * @param {TPermissions} permission
       * @param {typeof EModuleNames.idsEnum} [moduleName]
       * @returns
       */
      _this.haveSomePermission = function (permission) {
        var p = _this.getModulePermission(permission);
        // 有对应权限
        return !!p;
      };
      return _this;
    }
    return PermissionService;
  })(ServiceBase);
  var usePMService = function () {
    return singleton(PermissionService);
  };

  // 设置权限
  var setPermission = function (el, permission) {
    var pmService = usePMService();
    // 拥有权限不处理
    if (pmService.haveSomePermission(permission.key)) {
      return;
    }
    // 无权限
    el.style.display = "none";
    // 增加一个classname 业务如果需要特殊处理样式
    el.classList.add("no-permission");
    if (permission.remove) {
      el.setAttribute("remove", "true");
    } else {
      el.setAttribute("remove", "false");
    }
  };
  // 处理权限
  var handlePermission = function (el, binding) {
    var permission = binding.value;
    // 单一权限
    if (typeof permission === "string") {
      setPermission(el, { key: permission, remove: true });
      return;
    }
    if (Array.isArray(permission)) {
      // 多权限或者是非当前权限
      for (
        var _i = 0, permission_1 = permission;
        _i < permission_1.length;
        _i++
      ) {
        var value = permission_1[_i];
        if (typeof value === "string") {
          setPermission(el, { key: value, remove: true });
        } else {
          setPermission(el, value);
        }
      }
      return;
    }
    setPermission(el, permission);
  };
  var vPermission = {
    bind: handlePermission,
    componentUpdated: handlePermission,
  };

  (function (EModuleNames) {
    EModuleNames["name"] = "name";
    EModuleNames["base"] = "base";
    EModuleNames["codename"] = "codename";
  })(exports.EModuleNames || (exports.EModuleNames = {}));

  var isObject = function (obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
  };
  var mergeConfigs = function (companyDefault, privatization, result) {
    if (result === void 0) {
      result = {};
    }
    Object.keys(companyDefault).forEach(function (key) {
      if (key in privatization) {
        if (isObject(companyDefault[key]) && isObject(privatization[key])) {
          result[key] = mergeConfigs(
            companyDefault[key],
            privatization[key],
            result[key]
          );
        } else {
          result[key] = privatization[key];
        }
      } else {
        result[key] = companyDefault[key];
      }
    });
    return result;
  };

  var useStore = function () {
    var vm = getInstance();
    if (!vm) {
      return;
    }
    return vm.$store;
  };
  var useRouter = function () {
    var vm = getInstance();
    if (!vm || !vm.$route || !vm.$router) {
      throw new Error("no vm || route || router");
    }
    var route = compositionApi.shallowReactive(__assign({}, vm.$route));
    compositionApi.watch(
      function () {
        return vm.$route;
      },
      function (nextRoute) {
        Object.assign(route, nextRoute);
      },
      { flush: "sync" }
    );
    return {
      route: route,
      router: vm.$router,
    };
  };
  var useLazyValue = function (defaultValue) {
    var internal = compositionApi.ref(defaultValue);
    return {
      value: compositionApi.computed(function () {
        return compositionApi.isRef(internal.value)
          ? internal.value.value
          : internal.value;
      }),
      setValue: function (v) {
        internal.value = v;
      },
    };
  };
  var useLoading = function (rawProcess) {
    var loading = compositionApi.ref(false);
    var process = function () {
      var forwards = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        forwards[_i] = arguments[_i];
      }
      return __awaiter(void 0, void 0, void 0, function () {
        var response, isAsyncJob, promise;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              loading.value = true;
              response = rawProcess.apply(void 0, forwards);
              if (response == null || typeof response !== "object") {
                loading.value = false;
                return [2 /*return*/, response];
              }
              isAsyncJob = "cancel" in response && "result" in response;
              promise = isAsyncJob ? response.result : response;
              return [4 /*yield*/, promise];
            case 1:
              _a.sent();
              loading.value = false;
              return [2 /*return*/, response];
          }
        });
      });
    };
    return {
      process: process,
      loading: loading,
    };
  };
  var blockUntil = function (predict, process) {
    var resolve = compositionApi.reactive({
      fired: false,
      value: undefined,
    });
    compositionApi.watch(predict, function (nextValue) {
      if (!nextValue) {
        return;
      }
      if (resolve.value != null) {
        return;
      }
      resolve.fired = true;
      resolve.value = process();
    });
    return resolve;
  };
  var useFlag = function () {
    var vm = getInstance();
    return vm && vm.$hasFlag
      ? vm.$hasFlag
      : function () {
          return false;
        };
  };
  /* DEPRECATED */
  var useStoreBreadcrumb = function (getter) {
    var breadcrumb = compositionApi.computed(getter);
    var store = useStore();
    compositionApi.watch(breadcrumb, function (nextValue) {
      store && store.commit("setBreadcrumb", nextValue);
    });
    compositionApi.onBeforeMount(function () {
      breadcrumb.value.length &&
        store &&
        store.commit("setBreadcrumb", breadcrumb.value);
    });
  };
  function useBreadcrumb(a, b) {
    var category = b == null ? "" : a;
    var getValue = b || a;
    var links = compositionApi.computed(getValue);
    useStoreBreadcrumb(getValue); // DEPRECATED
    compositionApi.watch(
      links,
      function (nextValue) {
        notifyRootApp("breadcrumb", {
          category: category,
          items: nextValue,
        });
      },
      { immediate: true }
    );
  }
  var useHelpLinks = function (getValue) {
    var links = compositionApi.computed(getValue);
    compositionApi.watch(
      links,
      function (nextValue) {
        notifyRootApp("setHelpLinks", nextValue);
      },
      { immediate: true }
    );
  };
  var getMatch = function (cn) {
    var codename = usePMService().getModulePermission("codename");
    if (codename) {
      return codename[cn];
    }
    return undefined;
  };
  var isWX = function () {
    return window.location.pathname.includes("/wenxinworkshop/");
  };
  var useProjectType = function (route) {
    var _a;
    if (isWX()) {
      return ProjectType.TEXT_ERNIE_BOT;
    }
    var $route =
      route !== null && route !== void 0 ? route : getInstance().$route;
    var match = getMatch(
      (_a = $route.params) === null || _a === void 0 ? void 0 : _a.codename
    );
    if (match) {
      return +match.map(function (v) {
        return v.split("-")[0];
      })[0];
    }
    return $route.params ? +$route.params.mt : 1;
  };
  var useProjectTypes = function (route) {
    var _a;
    if (isWX()) {
      return "" + ProjectType.TEXT_ERNIE_BOT;
    }
    var $route =
      route !== null && route !== void 0 ? route : getInstance().$route;
    var match = getMatch(
      (_a = $route.params) === null || _a === void 0 ? void 0 : _a.codename
    );
    if (match) {
      var mts_1 = [];
      match
        .map(function (v) {
          return v.split("-")[0];
        })
        .reduce(function (acc, cur) {
          if (!acc[cur]) {
            mts_1.push(cur);
            acc[cur] = true;
          }
          return acc;
        }, {});
      return mts_1.join(",");
    }
    if (!$route.params) {
      return "1";
    }
    var mt = $route.params.mt;
    if (mt === "1001" || mt === "1002") {
      return "1001,1002";
    }
    return mt;
  };
  var useTemplateType = function (route) {
    var _a;
    if (isWX()) {
      return "" + TemplateType.TEXT_ERNIE_BOT;
    }
    var $route =
      route !== null && route !== void 0 ? route : getInstance().$route;
    var match = getMatch(
      (_a = $route.params) === null || _a === void 0 ? void 0 : _a.codename
    );
    if (match) {
      return match
        .map(function (v) {
          return v.split("-")[1];
        })
        .join(",");
    }
    if (!$route.params) {
      return "100";
    }
    var tt = $route.params.tt;
    if (tt === "10010" || tt === "10020") {
      return "10010,10020";
    }
    if (tt === "400" || tt === "407") {
      return "400,407";
    }
    return tt;
  };
  /**
   * firstTemplateType: 100
   * tt: '100,200' 该页面支持的所有 templateType
   * mt: '1'
   * mts: '1,2'
   */
  var useGlobalInfo = function (route) {
    var mt = useProjectType(route);
    var tt = useTemplateType(route);
    return {
      tt: tt,
      mt: mt,
      mts: useProjectTypes(route),
      firstTemplateType: +(tt ? tt.split(",")[0] : "100"),
    };
  };

  /**
   * 平台
   *
   * @export
   * @enum {number}
   */
  (function (EPlatform) {
    EPlatform["DATA"] = "easydata";
    EPlatform["PRO"] = "easydl-pro";
    EPlatform["LITE"] = "easydl-lite";
    EPlatform["WX"] = "wx";
  })(exports.EPlatform || (exports.EPlatform = {}));
  (function (EPlatformEnv) {
    EPlatformEnv["NONE"] = "NONE";
    EPlatformEnv["DATA_BML"] = "DATA_BML";
  })(exports.EPlatformEnv || (exports.EPlatformEnv = {}));
  /**
   * 获取当前平台类型
   *
   * @export
   * @returns {EPlatform}
   */
  function usePlatform() {
    return window["SP"].PLATFORM || exports.EPlatform.DATA;
  }
  /**
   * 平台二级环境
   *
   * @export
   * @returns {EPlatformEnv}
   */
  function usePlatformEnv() {
    return window["SP"].PLATFORM_ENV || exports.EPlatformEnv.NONE;
  }

  /**
   * 这个文件用于兼容各平台的 prefix
   * @file path.ts
   * @author xieshuang
   */
  /**
   * 声明 path 时，做一层兼容平台处理
   *
   * @export
   * @param {string} path 需要用绝对路径，比如： /dataset/list
   * @returns
   * @example
   * ---
   * 输入：
   * path:      `/dataset/list`
   *
   * 输出：
   * pro|data:  `/dataset/list`
   * lite:      `/dataset/:pt/:tt/list`
   * data-bml:  `/:orgId/:projectId/dataset/list`
   * ---
   */
  function useDefinePath(path) {
    var platform = usePlatform();
    // 环境类型
    var platformEnv = usePlatformEnv();
    switch (platform) {
      // 经典版需要加个前缀
      case exports.EPlatform.WX:
      case exports.EPlatform.LITE:
        path = path.replace(/^(\/[^/#?]+)/, "$1/:pt/:tt");
        break;
      // easydata
      case exports.EPlatform.DATA:
        (function () {
          switch (platformEnv) {
            // data + bml 私有化
            case exports.EPlatformEnv.DATA_BML:
              path = "/:orgId/:projectId" + path;
              break;
          }
        })();
        break;
    }
    return path;
  }
  /**
   * 获取兼容平台的跳转地址
   *
   * @export
   * @param {string} path 要跳转的路径，需要用绝对路径，比如： /dataset/list
   * @param {ReturnType<typeof getInstance>} vm vue 实例，如果在 setup 中异步用需要传入
   * @returns
   * @example
   * ---
   * 输入：
   * path:      `/dataset/list`
   *
   * 输出：
   * lite:      `/dataset/22/33/list`
   * pro|data:  `/dataset/list`
   * data-bml:  `/22/33/dataset/list`
   */
  function useGetPath(path, vm) {
    if (!vm) {
      vm = getInstance();
    }
    // 平台类型
    var platform = usePlatform();
    // 环境类型
    var platformEnv = usePlatformEnv();
    switch (platform) {
      // easydl 经典版 文心工厂
      case exports.EPlatform.LITE:
      case exports.EPlatform.WX:
        {
          var codename =
            vm === null || vm === void 0 ? void 0 : vm.$route.params.codename;
          var _a = useGlobalInfo(
              vm === null || vm === void 0 ? void 0 : vm.$route
            ),
            pt = _a.mt,
            tt = _a.firstTemplateType;
          if (codename) {
            path = path.replace(/^(\/[^/#?]+)/, "$1/" + codename);
          }
          // 理论上来说一定存在
          else if (pt && tt) {
            path = path.replace(/^(\/[^/#?]+)/, "$1/" + pt + "/" + tt);
          }
        }
        break;
      // easydata
      case exports.EPlatform.DATA: {
        (function () {
          // data 在 bml 环境中，需要特殊处理下
          switch (platformEnv) {
            case exports.EPlatformEnv.DATA_BML:
              path =
                "/" +
                vm.$route.params.orgId +
                "/" +
                vm.$route.params.projectId +
                path;
              break;
          }
        })();
        break;
      }
      // easydl 专业版
      case exports.EPlatform.PRO:
        break;
    }
    return path;
  }
  function useConvertPath() {
    var preTransformNode = function (AST) {
      var node;
      var attrsList = AST.attrsList;
      if (AST.tag === "nuxt-link") {
        node = attrsList.find(function (item) {
          return item.name === ":to";
        });
      }
      if (AST.tag === "a") {
        node = attrsList.find(function (item) {
          return item.name === ":href";
        });
      }
      if (AST.tag === "the-link") {
        node = attrsList.find(function (item) {
          return [":href", ":to"].includes(item.name);
        });
      }
      node &&
        (node.value = "$convertPath(" + node.value + ", '" + AST.tag + "')");
      return AST;
    };
    return { preTransformNode: preTransformNode };
  }
  function getConvertPath(state, paths) {
    return function (path, _) {
      if (!path || !state) {
        return path;
      }
      if (!paths) {
        paths = [];
      }
      var from = state[paths[0]];
      var to = paths
        .map(function (key) {
          return state[key];
        })
        .join("/");
      if (typeof path === "string") {
        return path.replace(from, to);
      }
      if (
        Object.prototype.toString.call(path) === "[Object Object]" &&
        "path" in path &&
        typeof path.path === "string"
      ) {
        path.path = path.path.replace(from, to);
      }
      return path;
    };
  }

  var TypeMap = new Map([
    [ProjectType.IMG_CLS, [TemplateType.IMG_CLS, TemplateType.IMG_CLS_MULTI]],
    [ProjectType.OBJ_DCT, [TemplateType.OBJ_DCT]],
    [ProjectType.SOUND_CLS, [TemplateType.SOUND_CLS]],
    [
      ProjectType.TEXT_CLS,
      [
        TemplateType.TEXT_CLS,
        TemplateType.TEXT_CLS_MULTI,
        TemplateType.TEXT_CLS_ERNIE_DOC,
        TemplateType.TEXT_CLS_ERNIE_M,
      ],
    ],
    [ProjectType.VIDEO_CLS, [TemplateType.VIDEO_CLS]],
    [ProjectType.SEGMENT, [TemplateType.INSTANCE_SEGMENT]],
    [ProjectType.TEXT_SIM, [TemplateType.TEXT_SIM]],
    [
      ProjectType.TEXT_SEQ,
      [
        TemplateType.TEXT_SEQ_IO,
        TemplateType.TEXT_SEQ_IOB,
        TemplateType.TEXT_SEQ_IOBES,
        TemplateType.TEXT_SEQ_IOE,
      ],
    ],
    [ProjectType.SENTIMENT, [TemplateType.SENTIMENT]],
    [ProjectType.TEXT_ENTITY_EXTRACT, [TemplateType.TEXT_ENTITY_EXTRACT]],
    [ProjectType.TEXT_RELATION_EXTRACT, [TemplateType.TEXT_RELATION_EXTRACT]],
    [ProjectType.VIDEO_TRACKING, [TemplateType.VIDEO_TRACKING]],
    [ProjectType.ML, [TemplateType.ML]],
    [ProjectType.TIME_SERIES_FORECAST, [TemplateType.TIME_SERIES_FORECAST]],
    [ProjectType.RETAIL, [TemplateType.RETAIL]],
    [ProjectType.RETAIL_DD, [TemplateType.RETAIL_DD]],
    [ProjectType.TEXT_ERNIE_BOT, [TemplateType.TEXT_ERNIE_BOT]],
  ]);

  exports.PermissionService = PermissionService;
  exports.ServiceBase = ServiceBase;
  exports.ServiceDecorator = ServiceDecorator;
  exports.TypeMap = TypeMap;
  exports.blockUntil = blockUntil;
  exports.getConvertPath = getConvertPath;
  exports.getInstance = getInstance;
  exports.getMatch = getMatch;
  exports.mergeConfigs = mergeConfigs;
  exports.notifyRootApp = notifyRootApp;
  exports.singleton = singleton;
  exports.useBreadcrumb = useBreadcrumb;
  exports.useConvertPath = useConvertPath;
  exports.useDefinePath = useDefinePath;
  exports.useFlag = useFlag;
  exports.useGetPath = useGetPath;
  exports.useGlobalInfo = useGlobalInfo;
  exports.useHelpLinks = useHelpLinks;
  exports.useLazyValue = useLazyValue;
  exports.useLoading = useLoading;
  exports.usePMService = usePMService;
  exports.usePlatform = usePlatform;
  exports.usePlatformEnv = usePlatformEnv;
  exports.useProjectType = useProjectType;
  exports.useProjectTypes = useProjectTypes;
  exports.useRouter = useRouter;
  exports.useStore = useStore;
  exports.useStoreBreadcrumb = useStoreBreadcrumb;
  exports.useTemplateType = useTemplateType;
  exports.vPermission = vPermission;

  Object.defineProperty(exports, "__esModule", { value: true });
});
