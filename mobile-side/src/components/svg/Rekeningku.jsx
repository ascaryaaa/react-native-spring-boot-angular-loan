<<<<<<< HEAD:mobile-side/src/components/svg/Rekeningku.jsx
import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const Rekeningku = (props) => (
  <Svg width={33} height={33} fill="none" {...props}>
    <Rect width={32} height={32} x={0.5} y={0.5} fill="#fff" rx={3} />
=======
import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const Rekeningku = (props) => (
  <Svg
    width={55}
    height={55}
    fill="none"
    {...props}
  >
    <Rect width={55} height={55} fill="#F68310" rx={25} />
    <Rect width={32} height={32} x={11.5} y={11.5} fill="#fff" rx={3} />
>>>>>>> aura:mobile-side/src/assets/svg/rekeningku.jsx
    <Path
      fill="#F68310"
      fillRule="evenodd"
      d="M22.833 21.667a4.667 4.667 0 1 1 9.334 0 4.667 4.667 0 0 1-9.334 0Zm0 7A5.833 5.833 0 0 0 17 34.5a3.5 3.5 0 0 0 3.5 3.5h14a3.5 3.5 0 0 0 3.5-3.5 5.834 5.834 0 0 0-5.833-5.833h-9.334Z"
      clipRule="evenodd"
    />
  </Svg>
<<<<<<< HEAD:mobile-side/src/components/svg/Rekeningku.jsx
);
=======
)
>>>>>>> aura:mobile-side/src/assets/svg/rekeningku.jsx
export default Rekeningku;
