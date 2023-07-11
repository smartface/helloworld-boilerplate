import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgVoice = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="-"
    height="-"
    fill="none"
    viewBox="0 0 26 26"
    {...props}>
    <Path
      stroke="#1C1F1E"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M16.25 5.818c0-2.017-1.455-3.651-3.25-3.651S9.75 3.8 9.75 5.817V12.6c0 2.016 1.455 3.651 3.25 3.651s3.25-1.635 3.25-3.651V5.818Z"
    />
    <Path
      stroke="#1C1F1E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M5.417 11.917c0 4.7 3.395 8.512 7.583 8.512 4.188 0 7.583-3.811 7.583-8.512M13 20.429v3.404"
    />
  </Svg>
);
export default SvgVoice;
