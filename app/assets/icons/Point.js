import * as React from 'react';
import Svg, { Rect } from 'react-native-svg';
const SvgPoint = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="-"
    height="-"
    fill="none"
    {...props}>
    <Rect
      width="100pt"
      height="100pt"
      fill="purple"
      fillOpacity={0.5}
      stroke="#00f"
      strokeOpacity={0.8}
    />
  </Svg>
);
export default SvgPoint;
