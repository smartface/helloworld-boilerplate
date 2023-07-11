import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgVideo = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="-"
    height="-"
    fill="none"
    viewBox="0 0 34 34"
    {...props}>
    <Path
      stroke="#1C1F1E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m21.25 14.167 6.45-3.225a1.417 1.417 0 0 1 2.05 1.267v9.582a1.416 1.416 0 0 1-2.05 1.267l-6.45-3.225v-5.666ZM18.417 8.5H7.083a2.833 2.833 0 0 0-2.833 2.833v11.334A2.833 2.833 0 0 0 7.083 25.5h11.334a2.833 2.833 0 0 0 2.833-2.833V11.333A2.833 2.833 0 0 0 18.417 8.5Z"
    />
  </Svg>
);
export default SvgVideo;
