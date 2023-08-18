import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgXmark = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    className="xmark_svg__w-6 xmark_svg__h-6"
    viewBox="0 0 24 24"
    width="-"
    height="-"
    {...props}>
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </Svg>
);
export default SvgXmark;
