webpackJsonp([11],{

/***/ 331:
/* no static exports found */
/* all exports used */
/*!********************************!*\
  !*** ./src/pages/TeamList.vue ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-loader/~/vue-style-loader!css-loader?sourceMap!../../~/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index?{"id":"data-v-666d2fbd","scoped":true,"hasInlineConfig":true}!../../~/_vux-loader@1.2.9@vux-loader/src/style-loader.js!../../~/_vue-loader@11.3.4@vue-loader/lib/selector?type=styles&index=0!./TeamList.vue */ 510)

var Component = __webpack_require__(/*! ../../~/_vue-loader@11.3.4@vue-loader/lib/component-normalizer */ 2)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../~/_vux-loader@1.2.9@vux-loader/src/script-loader.js!../../~/_vue-loader@11.3.4@vue-loader/lib/selector?type=script&index=0!./TeamList.vue */ 451),
  /* template */
  __webpack_require__(/*! !../../~/_vue-loader@11.3.4@vue-loader/lib/template-compiler/index?{"id":"data-v-666d2fbd"}!../../~/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!../../~/_vux-loader@1.2.9@vux-loader/src/template-loader.js!../../~/_vue-loader@11.3.4@vue-loader/lib/selector?type=template&index=0!./TeamList.vue */ 491),
  /* scopeId */
  "data-v-666d2fbd",
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\huanggz\\Desktop\\study\\NIM_Web_Demo_H5\\src\\pages\\TeamList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] TeamList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-666d2fbd", Component.options)
  } else {
    hotAPI.reload("data-v-666d2fbd", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 451:
/* no static exports found */
/* all exports used */
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./~/_babel-loader@6.4.1@babel-loader/lib!./~/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./~/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=script&index=0!./src/pages/TeamList.vue ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.teamType = _this.$route.params.teamType;
    });
  },
  data: function data() {
    return {
      teamType: 'normal' };
  },

  computed: {
    teamList: function teamList() {
      var _this2 = this;

      return this.$store.state.teamlist && this.$store.state.teamlist.filter(function (team) {
        return team.type === _this2.teamType && team.validToCurrentUser;
      });
    },
    pageTitle: function pageTitle() {
      return this.teamType === 'advanced' ? '高级群' : '讨论组';
    }
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 467:
/* no static exports found */
/* all exports used */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/_css-loader@0.27.3@css-loader?sourceMap!./~/_vue-loader@11.3.4@vue-loader/lib/style-compiler?{"id":"data-v-666d2fbd","scoped":true,"hasInlineConfig":true}!./~/_vux-loader@1.2.9@vux-loader/src/style-loader.js!./~/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./src/pages/TeamList.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/_css-loader@0.27.3@css-loader/lib/css-base.js */ 4)(true);
// imports


// module
exports.push([module.i, "\n.p-teamlist .m-list[data-v-666d2fbd] {\n    padding-top: 3.6rem;\n}\n.p-teamlist .empty-hint[data-v-666d2fbd]{\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 5rem;\n    margin: auto;\n    text-align: center;\n}\n", "", {"version":3,"sources":["C:/Users/huanggz/Desktop/study/NIM_Web_Demo_H5/src/pages/TeamList.vue"],"names":[],"mappings":";AA4CE;IACE,oBAAoB;CACrB;AACD;IACE,mBAAmB;IACnB,QAAQ;IACR,SAAS;IACT,UAAU;IACV,aAAa;IACb,mBAAmB;CACpB","file":"TeamList.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.p-teamlist {\n  .m-list {\n    padding-top: 3.6rem;\n  }\n  .empty-hint{\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 5rem;  \n    margin: auto;\n    text-align: center;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 491:
/* no static exports found */
/* all exports used */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/_vue-loader@11.3.4@vue-loader/lib/template-compiler?{"id":"data-v-666d2fbd"}!./~/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!./~/_vux-loader@1.2.9@vux-loader/src/template-loader.js!./~/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=template&index=0!./src/pages/TeamList.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-inherit m-article p-teamlist"
  }, [_c('x-header', {
    staticClass: "m-tab",
    attrs: {
      "left-options": {
        backText: ' '
      }
    }
  }, [_c('h1', {
    staticClass: "m-tab-top"
  }, [_vm._v(_vm._s(_vm.pageTitle))]), _vm._v(" "), _c('a', {
    attrs: {
      "slot": "left"
    },
    slot: "left"
  })]), _vm._v(" "), _c('div', {
    staticClass: "m-list"
  }, [_c('group', _vm._l((_vm.teamList), function(team) {
    return _c('cell', {
      key: team.teamId,
      attrs: {
        "title": team.name,
        "is-link": "",
        "link": ("/chat/team-" + (team.teamId))
      }
    }, [_c('span', {
      staticClass: "icon icon-team-advanced",
      attrs: {
        "slot": "icon"
      },
      slot: "icon"
    })])
  }), 1)], 1), _vm._v(" "), (!_vm.teamList || _vm.teamList.length < 1) ? _c('div', {
    staticClass: "empty-hint"
  }, [_vm._v("暂无内容")]) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-666d2fbd", module.exports)
  }
}

/***/ }),

/***/ 510:
/* no static exports found */
/* all exports used */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/_vue-style-loader@2.0.5@vue-style-loader!./~/_css-loader@0.27.3@css-loader?sourceMap!./~/_vue-loader@11.3.4@vue-loader/lib/style-compiler?{"id":"data-v-666d2fbd","scoped":true,"hasInlineConfig":true}!./~/_vux-loader@1.2.9@vux-loader/src/style-loader.js!./~/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./src/pages/TeamList.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../~/_css-loader@0.27.3@css-loader?sourceMap!../../~/_vue-loader@11.3.4@vue-loader/lib/style-compiler?{"id":"data-v-666d2fbd","scoped":true,"hasInlineConfig":true}!../../~/_vux-loader@1.2.9@vux-loader/src/style-loader.js!../../~/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./TeamList.vue */ 467);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../~/_vue-style-loader@2.0.5@vue-style-loader/lib/addStylesClient.js */ 5)("7f6769d7", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/_css-loader@0.27.3@css-loader/index.js?sourceMap!../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-666d2fbd\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/_vux-loader@1.2.9@vux-loader/src/style-loader.js!../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./TeamList.vue", function() {
     var newContent = require("!!../../node_modules/_css-loader@0.27.3@css-loader/index.js?sourceMap!../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-666d2fbd\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/_vux-loader@1.2.9@vux-loader/src/style-loader.js!../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./TeamList.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=11.js.map