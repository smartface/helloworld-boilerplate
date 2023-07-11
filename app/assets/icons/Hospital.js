import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgHospital = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="-"
    height="-"
    fill="none"
    viewBox="0 0 26 26"
    {...props}>
    <G stroke="#1C1F1E" strokeWidth={1.8} clipPath="url(#hospital_svg__a)">
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M24.917 22.303v-8.797c0-.71-.147-1.41-.43-2.062a5.227 5.227 0 0 0-1.219-1.728l-8.444-7.914a2.667 2.667 0 0 0-1.823-.719c-.68 0-1.332.258-1.824.719L2.732 9.716a5.226 5.226 0 0 0-1.22 1.728 5.167 5.167 0 0 0-.429 2.062v8.797c0 .693.28 1.358.776 1.848.497.49 1.17.766 1.872.766h18.537c.703 0 1.376-.276 1.873-.766.497-.49.776-1.155.776-1.848Z"
      />
      <Path d="M9.071 17.945h1.151v1.15c0 .72.584 1.305 1.305 1.305h2.946c.72 0 1.305-.584 1.305-1.304v-1.151h1.15c.721 0 1.305-.585 1.305-1.305v-2.947c0-.72-.584-1.304-1.304-1.304h-1.151v-1.151c0-.72-.584-1.305-1.305-1.305h-2.946c-.72 0-1.305.584-1.305 1.305v1.15h-1.15c-.721 0-1.305.585-1.305 1.305v2.947c0 .72.584 1.305 1.304 1.305Z" />
    </G>
    <Defs>
      <ClipPath id="hospital_svg__a">
        <Path fill="#fff" d="M0 0h26v26H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgHospital;
