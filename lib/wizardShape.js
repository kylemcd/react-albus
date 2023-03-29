"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
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
var _default = _propTypes["default"].shape({
  go: _propTypes["default"].func.isRequired,
  set: _propTypes["default"].func.isRequired,
  history: _propTypes["default"].object.isRequired,
  next: _propTypes["default"].func.isRequired,
  previous: _propTypes["default"].func.isRequired,
  push: _propTypes["default"].func.isRequired,
  replace: _propTypes["default"].func.isRequired,
  step: _propTypes["default"].shape({
    id: _propTypes["default"].string.isRequired
  }).isRequired,
  steps: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].string.isRequired
  }).isRequired).isRequired
});
exports["default"] = _default;