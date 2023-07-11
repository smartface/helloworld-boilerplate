import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgPlus = props => (
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
      d="M13 4.245v17.51M21.755 13H4.245h17.51Z"
    />
  </Svg>
);
export default SvgPlus;
