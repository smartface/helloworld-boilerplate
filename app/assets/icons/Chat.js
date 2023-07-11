import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgChat = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="-"
    height="-"
    fill="none"
    viewBox="0 0 30 30"
    {...props}>
    <Path
      fill="#1C1F1E"
      stroke="#1C1F1E"
      strokeWidth={0.2}
      d="M15 2.813A12.187 12.187 0 0 0 4.312 20.858l-.996 3.516a1.863 1.863 0 0 0 2.309 2.309l3.516-.997A12.187 12.187 0 1 0 15 2.813Zm0 22.5a10.359 10.359 0 0 1-5.262-1.442 1.019 1.019 0 0 0-.48-.129.972.972 0 0 0-.258.035l-3.89 1.114L6.222 21a.96.96 0 0 0-.094-.738 10.312 10.312 0 1 1 8.87 5.05ZM16.406 15a1.407 1.407 0 1 1-2.813 0 1.407 1.407 0 0 1 2.813 0Zm-5.625 0a1.407 1.407 0 1 1-2.813 0 1.407 1.407 0 0 1 2.813 0Zm11.25 0a1.407 1.407 0 1 1-2.813 0 1.407 1.407 0 0 1 2.813 0Z"
    />
  </Svg>
);
export default SvgChat;
