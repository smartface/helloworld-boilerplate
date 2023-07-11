import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgArrowdown2 = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="-"
    height="-"
    fill="none"
    viewBox="0 0 14 8"
    {...props}>
    <G clipPath="url(#arrowdown2_svg__a)">
      <Path
        stroke="#1C1F1E"
        strokeLinecap="round"
        strokeWidth={2}
        d="m1 2 6 5 6-5"
      />
    </G>
    <Defs>
      <ClipPath id="arrowdown2_svg__a">
        <Path fill="#fff" d="M0 0h14v8H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgArrowdown2;
