import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgLogo = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="-"
    height="-"
    fill="none"
    viewBox="0 0 33 32"
    {...props}>
    <G fillRule="evenodd" clipPath="url(#Logo_svg__a)" clipRule="evenodd">
      <Path
        fill="#66CA98"
        d="M18.012 7.722V2.759c-.335-3.792-5.892-3.636-5.996.175 0 1.335-.038 4.307-.043 5.623a3.253 3.253 0 0 1-3.269 3.25c-.24 0-5.237.037-5.623 0a2.963 2.963 0 0 0-.076 5.924h4.873c6.218 0 10.12-2.198 10.12-7.51l.014-2.5Z"
      />
      <Path
        fill="#F4A3EC"
        d="M14.983 24.274v4.962c.335 3.773 5.883 3.627 6.006-.175 0-1.335.038-4.306.042-5.618a3.256 3.256 0 0 1 3.27-3.254c.24 0 5.236-.038 5.623 0a2.964 2.964 0 0 0 3.112-2.921 2.962 2.962 0 0 0-3.036-3h-4.883c-6.218-.004-10.12 2.194-10.12 7.496l-.014 2.51Z"
      />
    </G>
    <Defs>
      <ClipPath id="Logo_svg__a">
        <Path fill="#fff" d="M0 0h33v32H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgLogo;
