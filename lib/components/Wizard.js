"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _history = require("history");
var _renderCallback = _interopRequireDefault(require("../utils/renderCallback"));
var _excluded = ["init"],
  _excluded2 = ["init"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Wizard = /*#__PURE__*/function (_Component) {
  _inherits(Wizard, _Component);
  var _super = _createSuper(Wizard);
  function Wizard() {
    var _this;
    _classCallCheck(this, Wizard);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "state", {
      step: {
        id: null
      },
      steps: []
    });
    _defineProperty(_assertThisInitialized(_this), "history", _this.props.history || (0, _history.createMemoryHistory)());
    _defineProperty(_assertThisInitialized(_this), "steps", []);
    _defineProperty(_assertThisInitialized(_this), "pathToStep", function (pathname) {
      var id = pathname.replace(_this.basename, '');
      var _this$state$steps$fil = _this.state.steps.filter(function (s) {
          return _this.props.exactMatch ? s.id === id : id.startsWith(s.id);
        }),
        _this$state$steps$fil2 = _slicedToArray(_this$state$steps$fil, 1),
        step = _this$state$steps$fil2[0];
      return step || _this.state.step;
    });
    _defineProperty(_assertThisInitialized(_this), "init", function (steps) {
      _this.setState({
        steps: steps
      }, function () {
        var step = _this.pathToStep(_this.history.location.pathname);
        if (step.id) {
          _this.setState({
            step: step
          });
        } else {
          _this.history.replace("".concat(_this.basename).concat(_this.ids[0]));
        }
      });
    });
    _defineProperty(_assertThisInitialized(_this), "set", function (step) {
      return _this.history.push("".concat(_this.basename).concat(step));
    });
    _defineProperty(_assertThisInitialized(_this), "push", function () {
      var step = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.nextStep;
      return _this.set(step);
    });
    _defineProperty(_assertThisInitialized(_this), "replace", function () {
      var step = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.nextStep;
      return _this.history.replace("".concat(_this.basename).concat(step));
    });
    _defineProperty(_assertThisInitialized(_this), "pushPrevious", function () {
      var step = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.previousStep;
      return _this.set(step);
    });
    _defineProperty(_assertThisInitialized(_this), "next", function () {
      if (_this.props.onNext) {
        _this.props.onNext(_this.getChildContext().wizard);
      } else {
        _this.push();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "previous", function () {
      _this.pushPrevious();
    });
    return _this;
  }
  _createClass(Wizard, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        wizard: _objectSpread({
          go: this.history.go,
          set: this.set,
          history: this.history,
          init: this.init,
          next: this.next,
          previous: this.previous,
          push: this.push,
          replace: this.replace
        }, this.state)
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      this.unlisten = this.history.listen(function (_ref) {
        var pathname = _ref.pathname;
        return _this2.setState({
          step: _this2.pathToStep(pathname)
        });
      });
      if (this.props.onNext) {
        var _this$getChildContext = this.getChildContext().wizard,
          init = _this$getChildContext.init,
          wizard = _objectWithoutProperties(_this$getChildContext, _excluded);
        this.props.onNext(wizard);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unlisten();
    }
  }, {
    key: "basename",
    get: function get() {
      return "".concat(this.props.basename, "/");
    }
  }, {
    key: "ids",
    get: function get() {
      return this.state.steps.map(function (s) {
        return s.id;
      });
    }
  }, {
    key: "nextStep",
    get: function get() {
      return this.ids[this.ids.indexOf(this.state.step.id) + 1];
    }
  }, {
    key: "previousStep",
    get: function get() {
      return this.ids[this.ids.indexOf(this.state.step.id) - 1];
    }
  }, {
    key: "render",
    value: function render() {
      var _this$getChildContext2 = this.getChildContext().wizard,
        init = _this$getChildContext2.init,
        wizard = _objectWithoutProperties(_this$getChildContext2, _excluded2);
      return (0, _renderCallback["default"])(this.props, wizard);
    }
  }]);
  return Wizard;
}(_react.Component);
Wizard.propTypes = {
  basename: _propTypes["default"].string,
  history: _propTypes["default"].shape({
    entries: _propTypes["default"].array,
    go: _propTypes["default"].func,
    goBack: _propTypes["default"].func,
    listen: _propTypes["default"].func,
    location: _propTypes["default"].object,
    push: _propTypes["default"].func,
    replace: _propTypes["default"].func
  }),
  onNext: _propTypes["default"].func,
  exactMatch: _propTypes["default"].bool
};
Wizard.defaultProps = {
  basename: '',
  history: null,
  onNext: null,
  render: null,
  exactMatch: true
};
Wizard.childContextTypes = {
  wizard: _propTypes["default"].object
};
var _default = Wizard;
exports["default"] = _default;