"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Cadre = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border: 1px solid #DD22CC;\n  border-radius: 4px;\n  padding: 30px;\n  background-color: #EE00CC;\n  box-shadow: 0 30px 30px 10px rgba(0, 0, 0, 40%);\n  position: relative;\n"])));

const TableauImage = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background-image: url('./img/sinapses1.jpg');\n  background-size: cover;\n  box-shadow: inset 0 0 20px rgba(0, 0, 0, 70%);\n  border: 1px solid #CC00CC;\n  width: 600px;\n  height: 450px;\n  position: relative;\n"])));

const TableauShadow = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 600px;\n  height: 450px;\n  position: absolute;\n  top: 30px;\n  left: 30px;\n  box-shadow: 0 0 25px 2px rgba(0, 0, 0, 10%);\n"])));

const Acrylique = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 99.6%;\n  height: 99.5%;\n  top: 0;\n  left: 0;\n"])));

const Tableau = props => {
  return /*#__PURE__*/_react.default.createElement(Cadre, null, /*#__PURE__*/_react.default.createElement(TableauImage, null, /*#__PURE__*/_react.default.createElement(Acrylique, null)), /*#__PURE__*/_react.default.createElement(TableauShadow, null));
};

var _default = Tableau;
exports.default = _default;