import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgCheck = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="-"
    height="-"
    fill="none"
    viewBox="0 0 26 26"
    {...props}>
    <Path
      stroke="#1C1F1E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m6.648 12.704 4.185 5.713L21.667 7.583"
    />
  </Svg>
);
export default SvgCheck;
