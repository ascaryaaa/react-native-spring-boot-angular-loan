import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fill="#F9A653"
      d="m11.717 7.517.766.766-7.55 7.55h-.766v-.766l7.55-7.55Zm3-5.017a.834.834 0 0 0-.584.242l-1.525 1.525 3.125 3.125 1.525-1.525a.83.83 0 0 0 0-1.175l-1.95-1.95a.818.818 0 0 0-.591-.242Zm-3 2.658L2.5 14.375V17.5h3.125l9.217-9.217-3.125-3.125Z"
    />
  </Svg>
);
export default SvgComponent;
