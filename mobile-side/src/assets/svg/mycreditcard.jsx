import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const MyCreditCard = (props) => (
  <Svg
    width={55}
    height={55}
    fill="none"
    {...props}
  >
    <Rect width={55} height={55} fill="#C56DF8" rx={25} />
    <Path
      fill="#fff"
      d="M18.5 18.167a4.333 4.333 0 0 0-4.333 4.333v1.667h26.666V22.5a4.333 4.333 0 0 0-4.333-4.333h-18ZM14.167 32.5v-6.333h22a4.667 4.667 0 0 0-3.267 8h-.37a3.698 3.698 0 0 0-3.551 2.666H18.5a4.334 4.334 0 0 1-4.333-4.333ZM39.5 30.833a3.333 3.333 0 1 1-6.666 0 3.333 3.333 0 0 1 6.666 0ZM42.167 38c0 2.075-1.715 4.167-6 4.167-4.286 0-6-2.084-6-4.167v-.137A2.362 2.362 0 0 1 32.53 35.5h7.272a2.362 2.362 0 0 1 2.364 2.363V38Z"
    />
  </Svg>
)
export default MyCreditCard;
