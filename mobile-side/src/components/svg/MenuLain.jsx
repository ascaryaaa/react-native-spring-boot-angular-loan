import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const MenuLain = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={55}
    height={55}
    fill="none"
    {...props}
  >
    <Rect width={53} height={53} x={1} y={1} fill="#fff" rx={24} />
    <Rect
      width={53}
      height={53}
      x={1}
      y={1}
      stroke="#E6E6E6"
      strokeWidth={2}
      rx={24}
    />
    <Path
      fill="#F68310"
      d="M21.5 26a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm4.5 1.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
    />
  </Svg>
)
export default MenuLain
