require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(9);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_730c53a1_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(13);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(10)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-730c53a1"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_730c53a1_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-730c53a1", Component.options)
  } else {
    hotAPI.reload("data-v-730c53a1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mqtt_dist_mqtt_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mqtt_dist_mqtt_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mqtt_dist_mqtt_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var mqttUrl = "wxs://zgmzgm.top:8084/mqtt";

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      client: {},
      Door: false
    };
  },


  components: {},

  methods: {
    onDoorChange: function onDoorChange(event) {
      var that = this;
      console.log(event.mp.detail);
      var sw = event.mp.detail.value;
      that.Door = sw;
      if (sw) {
        that.client.publish('/wangqiu/sub', '{"door":2}', function (err) {
          if (!err) {
            console.log("成功下发命令将开关打开");
          }
        });
      }
    }
  },

  onShow: function onShow() {
    var that = this;
    that.client = Object(__WEBPACK_IMPORTED_MODULE_0_mqtt_dist_mqtt_js__["connect"])(mqttUrl);
    that.client.on('connect', function () {
      console.log('成功连接mqtt服务器');
      that.client.subscribe("/wangqiu/pub", function (err) {
        if (!err) {
          console.log('成功订阅设备上行数据Topic');
        }
      });
    });
    that.client.on('message', function (topic, message) {
      console.log(topic);
      var dataFromDev = {};
      dataFromDev = JSON.parse(message), console.log(dataFromDev);
      that.Door = dataFromDev.Door;
    });
  }
});

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrapper"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "body-wrapper"
  }, [_c('div', {
    staticClass: "body"
  }, [_c('div', {
    staticClass: "data-wrapper"
  }, [_c('div', {
    staticClass: "data"
  }, [_c('img', {
    staticClass: "data-logo",
    attrs: {
      "src": "/static/images/door.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "data-text"
  }, [_c('div', {
    staticClass: "data-title"
  }, [_vm._v("开关")]), _vm._v(" "), _c('div', {
    staticClass: "data-value"
  }, [_c('switch', {
    attrs: {
      "checked": _vm.Door,
      "color": "#3d7ef6",
      "eventid": '0'
    },
    on: {
      "change": _vm.onDoorChange
    }
  })])])])])])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "header-wrapper"
  }, [_c('div', {
    staticClass: "header-title"
  }, [_c('span', [_vm._v("空气质量-良好")]), _vm._v(" "), _c('span', [_vm._v("广州市")])]), _vm._v(" "), _c('div', {
    staticClass: "header-text"
  }, [_c('span', [_vm._v("55")]), _vm._v(" "), _c('span', [_vm._v("阴")])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-730c53a1", esExports)
  }
}

/***/ })
],[8]);