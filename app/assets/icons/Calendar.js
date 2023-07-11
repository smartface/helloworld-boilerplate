import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgCalendar = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="-"
    height="-"
    fill="none"
    viewBox="0 0 24 26"
    {...props}>
    <Path
      stroke="#1C1F1E"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.5 5.525h-15c-1.243 0-2.25 1.019-2.25 2.275v13.65c0 1.256 1.007 2.275 2.25 2.275h15c1.243 0 2.25-1.019 2.25-2.275V7.8c0-1.256-1.007-2.275-2.25-2.275Z"
    />
    <Path
      stroke="#1C1F1E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 2.6v2.925M18 2.6v2.925m3.75 6.002H2.25"
    />
  </Svg>
);
export default SvgCalendar;
