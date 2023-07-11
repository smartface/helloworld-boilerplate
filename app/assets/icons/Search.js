import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgSearch = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="-"
    height="-"
    fill="none"
    viewBox="0 0 14 14"
    {...props}>
    <Path
      fill="#A7A6A5"
      fillRule="evenodd"
      d="M6 .333a5.667 5.667 0 1 0 3.508 10.118l2.435 2.434a.667.667 0 0 0 .942-.942l-2.434-2.435A5.666 5.666 0 0 0 6 .333ZM1.667 6a4.333 4.333 0 1 1 8.666 0 4.333 4.333 0 0 1-8.666 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSearch;
