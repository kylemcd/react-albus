"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _renderCallback = _interopRequireDefault(require("../utils/renderCallback"));
var _excluded = ["init"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var createWizardComponent = function createWizardComponent(name) {
  var WizardComponent = function WizardComponent(props, _ref) {
    var _ref$wizard = _ref.wizard,
      init = _ref$wizard.init,
      wizard = _objectWithoutProperties(_ref$wizard, _excluded);
    return (0, _renderCallback["default"])(props, wizard);
  };
  WizardComponent.contextTypes = {
    wizard: _propTypes["default"].object
  };
  WizardComponent.displayName = name;
  return WizardComponent;
};
var _default = createWizardComponent;
exports["default"] = _default;