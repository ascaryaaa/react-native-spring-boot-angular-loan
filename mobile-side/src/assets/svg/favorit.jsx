import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Favorit = (props) => (
  <Svg
    width={33}
    height={32}
    fill="none"
    {...props}
  >
    <Path
      stroke="#F9A653"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m16.5 23.667-8.23 4.326 1.573-9.164-6.667-6.489 9.2-1.333 4.115-8.338 4.114 8.338 9.2 1.333-6.666 6.49 1.572 9.163-8.211-4.326Z"
    />
  </Svg>
)
export default Favorit;
