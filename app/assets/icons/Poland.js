import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgPoland = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="-"
    height="-"
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <G clipPath="url(#poland_svg__a)">
      <Path
        fill="#F9F9F9"
        d="M12 .75C18.225.75 23.25 5.775 23.25 12H.75C.75 5.775 5.775.75 12 .75Z"
      />
      <Path
        fill="#ED4C5C"
        d="M12 23.25A11.235 11.235 0 0 1 .75 12h22.5c0 6.225-5.025 11.25-11.25 11.25Z"
      />
    </G>
    <Defs>
      <ClipPath id="poland_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgPoland;
