import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15} // 10 * 1.5 = 15
    height={15} // 10 * 1.5 = 15
    fill="none"
    {...props}
  >
    <Path
      stroke="#9E9E9E"
      strokeWidth={2} // increased stroke width to make it bolder
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m1.25 .755 12.5 12.5m-12.5 0L13.75 .755" // Adjusted the coordinates accordingly
    />
  </Svg>
)
export default SvgComponent
