import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const rekeningku = (props) => (
  <Svg width={33} height={33} fill="none" {...props}>
    <Rect width={32} height={32} x={0.5} y={0.5} fill="#fff" rx={3} />
    <Path
      fill="#F68310"
      fillRule="evenodd"
      d="M11.833 10.667a4.667 4.667 0 1 1 9.334 0 4.667 4.667 0 0 1-9.334 0Zm0 7A5.833 5.833 0 0 0 6 23.5 3.5 3.5 0 0 0 9.5 27h14a3.5 3.5 0 0 0 3.5-3.5 5.834 5.834 0 0 0-5.833-5.833h-9.334Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default rekeningku;
