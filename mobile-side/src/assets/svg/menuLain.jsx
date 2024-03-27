import * as React from "react";
import Svg, { Path } from "react-native-svg";
const menuLain = (props) => (
  <Svg width={25} height={25} fill="none" {...props}>
    <Path
      fill="#F68310"
      d="M6.5 11a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm4.5 1.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
    />
  </Svg>
);
export default menuLain;
