import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgArrowRight = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 9 14"
    {...props}>
    <Path
      stroke="#1C1F1E"
      strokeLinecap="round"
      strokeWidth={2}
      d="m2 13 5-6-5-6"
    />
  </Svg>
);
export default SvgArrowRight;
