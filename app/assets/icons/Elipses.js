import * as React from 'react';
import Svg, { G, Circle, Defs, ClipPath, Path } from 'react-native-svg';
const SvgElipses = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="-"
    height="-"
    fill="none"
    viewBox="0 0 26 6"
    {...props}>
    <G fill="#1C1F1E" clipPath="url(#elipses_svg__a)">
      <Circle cx={3} cy={3} r={3} transform="rotate(-90 3 3)" />
      <Circle cx={13} cy={3} r={3} transform="rotate(-90 13 3)" />
      <Circle cx={23} cy={3} r={3} transform="rotate(-90 23 3)" />
    </G>
    <Defs>
      <ClipPath id="elipses_svg__a">
        <Path fill="#fff" d="M0 0h26v6H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgElipses;
