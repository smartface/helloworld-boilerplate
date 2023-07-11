import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgMale = props => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="-"
        height="-"
        viewBox="0 0 16 28"
        {...props}

        fill="none">
        <G stroke={props.stroke} strokeWidth={2} clipPath="url(#male_svg__a)">
            <Path d="M11.223 4.22a3.225 3.225 0 0 1-3.22 3.22 3.225 3.225 0 0 1-3.22-3.22A3.225 3.225 0 0 1 8.003 1a3.225 3.225 0 0 1 3.22 3.22ZM1.165 12.202a.858.858 0 0 0-.137.725l2.686 10.627c.52 2.059 2.289 3.45 4.252 3.45 1.963 0 3.732-1.391 4.252-3.45l2.686-10.626a.86.86 0 0 0-.136-.726H1.165Zm0 0a.69.69 0 0 1 .562-.297h12.478m-13.04.297 13.04-.297m0 0a.69.69 0 0 1 .563.297l-.563-.297Z" />
        </G>
        <Defs>
            <ClipPath id="male_svg__a">
                <Path fill="#fff" d="M0 0h16v28H0z" />
            </ClipPath>
        </Defs>
    </Svg>
);
export default SvgMale;
