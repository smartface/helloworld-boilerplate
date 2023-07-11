import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgReceipt = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="-"
    height="-"
    fill="none"
    viewBox="0 0 26 24"
    {...props}>
    <G stroke="#1C1F1E" strokeWidth={2} clipPath="url(#receipt_svg__a)">
      <Path d="M1 5a4 4 0 0 1 4-4h10.308a4 4 0 0 1 4 4v18H5a4 4 0 0 1-4-4V5Z" />
      <Path d="M19.385 11.077h4.538a1 1 0 0 1 1 1v8a3 3 0 0 1-3 3h-6.23" />
      <Path
        strokeLinecap="round"
        d="M5.615 5.462h8.154M5.615 10.077h8.154M5.615 14.692h4.462"
      />
    </G>
    <Defs>
      <ClipPath id="receipt_svg__a">
        <Path fill="#fff" d="M0 0h26v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgReceipt;
