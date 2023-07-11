import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgArrowLeft = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="-"
    height="-"
    fill="none"
    viewBox="0 0 7 12"
    {...props}>
    <Path
      stroke="#1C1F1E"
      strokeLinecap="round"
      strokeWidth={2}
      d="M5.6 10 2 5.8l3.6-4.2"
    />
  </Svg>
);
export default SvgArrowLeft;
