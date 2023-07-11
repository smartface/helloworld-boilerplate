import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgPixel = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="-"
    height="-"
    fill="none"
    {...props}>
    <Path
      fill="purple"
      fillOpacity={0.5}
      stroke="#00f"
      strokeOpacity={0.8}
      d="M0 0h100v100H0z"
    />
  </Svg>
);
export default SvgPixel;
