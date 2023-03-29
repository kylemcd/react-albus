"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Step = void 0;
Object.defineProperty(exports, "Steps", {
  enumerable: true,
  get: function get() {
    return _Steps["default"];
  }
});
exports.WithWizard = void 0;
Object.defineProperty(exports, "Wizard", {
  enumerable: true,
  get: function get() {
    return _Wizard["default"];
  }
});
Object.defineProperty(exports, "withWizard", {
  enumerable: true,
  get: function get() {
    return _withWizard["default"];
  }
});
Object.defineProperty(exports, "wizardShape", {
  enumerable: true,
  get: function get() {
    return _wizardShape["default"];
  }
});
var _createWizardComponent = _interopRequireDefault(require("./components/createWizardComponent"));
var _Wizard = _interopRequireDefault(require("./components/Wizard"));
var _Steps = _interopRequireDefault(require("./components/Steps"));
var _withWizard = _interopRequireDefault(require("./withWizard"));
var _wizardShape = _interopRequireDefault(require("./wizardShape"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/*
 * Copyright (c) 2017 American Express Travel Related Services Company, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */

var Step = (0, _createWizardComponent["default"])('Step');
exports.Step = Step;
var WithWizard = (0, _createWizardComponent["default"])('WithWizard');
exports.WithWizard = WithWizard;