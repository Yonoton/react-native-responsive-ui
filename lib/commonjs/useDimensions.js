"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _reactNative = require("react-native");

const useDimensions = () => {
  const [dimensions, setDimensions] = (0, _react.useState)(_reactNative.Dimensions.get("window"));

  const onChange = ({
    window: {
      width,
      height,
      scale,
      fontScale
    }
  }) => setDimensions({
    width,
    height,
    scale,
    fontScale
  });

  (0, _react.useEffect)(() => {
    const eventSubscription = _reactNative.Dimensions.addEventListener("change", onChange);

    return () => eventSubscription.remove();
  }, []);
  return dimensions;
};

var _default = useDimensions;
exports.default = _default;
//# sourceMappingURL=useDimensions.js.map