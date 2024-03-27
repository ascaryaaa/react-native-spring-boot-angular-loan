import * as React from "react";
import Svg, { Path } from "react-native-svg";
const MyCreditCard = (props) => (
  <Svg width={33} height={33} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M7.5 7.167A4.333 4.333 0 0 0 3.167 11.5v1.667h26.666V11.5A4.335 4.335 0 0 0 25.5 7.167h-18ZM3.167 21.5v-6.333h22a4.666 4.666 0 0 0-3.267 8h-.37a3.698 3.698 0 0 0-3.551 2.666H7.5A4.333 4.333 0 0 1 3.167 21.5ZM28.5 19.833a3.334 3.334 0 1 1-6.667 0 3.334 3.334 0 0 1 6.667 0ZM31.167 27c0 2.075-1.715 4.167-6 4.167-4.286 0-6-2.084-6-4.167v-.137A2.362 2.362 0 0 1 21.53 24.5h7.272a2.362 2.362 0 0 1 2.364 2.363V27Z"
    />
  </Svg>
);
export default MyCreditCard;
