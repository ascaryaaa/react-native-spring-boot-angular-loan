import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const bniPensiunIcon = (props) => (
  <Svg width={39} height={40} fill="none" {...props}>
    <Rect width={39} height={39} y={0.678} fill="#fff" rx={6} />
    <Path
      stroke="#1394AD"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m18.292 31.053-1.208-4.833-2.417-3.625v-7.25"
    />
    <Path
      stroke="#1394AD"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.042 22.595 9.834 18.97l4.833-3.625 3.625 2.416 3.625.605m-8.459 7.854-2.416 4.833m13.292 0v-10.27a1.812 1.812 0 0 1 3.625 0v.603m-14.5-10.875a1.208 1.208 0 1 0 2.416 0 1.208 1.208 0 0 0-2.416 0Z"
    />
  </Svg>
);
export default bniPensiunIcon;
