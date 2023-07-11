import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgHome = props => (
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
      d="M22.75 20.583V13.29a4.334 4.334 0 0 0-1.349-3.141l-6.908-6.562a2.166 2.166 0 0 0-2.985 0l-6.91 6.562a4.333 4.333 0 0 0-1.348 3.141v7.294a2.167 2.167 0 0 0 2.167 2.167h15.166a2.167 2.167 0 0 0 2.167-2.167Z"
    />
    <Path
      stroke="#1C1F1E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.75 16.25a2.167 2.167 0 0 1 2.167-2.167h2.166a2.167 2.167 0 0 1 2.167 2.167v6.5h-6.5v-6.5Z"
    />
  </Svg>
);
export default SvgHome;
