import * as React from "react"
import Svg, { Path } from "react-native-svg"
const BackNavbar = (props) => (
  <Svg
    width={20}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      fill="#9E9E9E"
      d="M13.85 2.58a1.042 1.042 0 0 0-1.475 0L5.45 9.505a.83.83 0 0 0 0 1.175l6.925 6.925a1.041 1.041 0 0 0 1.475 0 1.041 1.041 0 0 0 0-1.475l-6.033-6.042 6.041-6.041c.4-.4.4-1.067-.008-1.467Z"
    />
  </Svg>
)
export default BackNavbar;
