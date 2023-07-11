import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgFemale = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="-"
    height="-"
    fill="none"
    viewBox="0 0 16 27"
    {...props}>
    <G stroke="#1C1F1E" strokeWidth={2} clipPath="url(#female_svg__a)">
      <Path d="M11.291 4.218a3.224 3.224 0 0 1-3.22 3.218 3.224 3.224 0 0 1-3.22-3.218A3.224 3.224 0 0 1 8.071 1a3.224 3.224 0 0 1 3.22 3.218ZM12.288 14.824l2.686 10.248a.74.74 0 0 1-.128.646.71.71 0 0 1-.573.286H1.795a.71.71 0 0 1-.573-.286.74.74 0 0 1-.129-.646L3.78 14.824c.512-1.952 2.266-3.308 4.255-3.308 1.989 0 3.742 1.356 4.254 3.308Z" />
    </G>
    <Defs>
      <ClipPath id="female_svg__a">
        <Path fill="#fff" d="M0 0h16v27H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgFemale;
