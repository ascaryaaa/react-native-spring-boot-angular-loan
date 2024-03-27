import * as React from "react"
import Svg, { Path } from "react-native-svg"
import Svg, { Circle, Path } from "react-native-svg"
const QrisLogo = (props) => (
  <Svg
    width={70}
    height={70}
    fill="none"
    {...props}
  >
    <Circle
      cx={35}
      cy={35}
      r={33.5}
      fill="#F68310"
      stroke="#FCD9B5"
      strokeWidth={3}
    />
    <Path
      fill="#fff"
      d="M21 33h8c2.2 0 4-1.8 4-4v-8c0-2.2-1.8-4-4-4h-8c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4Zm0-12h8v8h-8v-8Zm0 32h8c2.2 0 4-1.8 4-4v-8c0-2.2-1.8-4-4-4h-8c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4Zm0-12h8v8h-8v-8Zm16-20v8c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4v-8c0-2.2-1.8-4-4-4h-8c-2.2 0-4 1.8-4 4Zm12 8h-8v-8h8v8Zm4 23v-2c0-.56-.44-1-1-1h-2c-.56 0-1 .44-1 1v2c0 .56.44 1 1 1h2c.56 0 1-.44 1-1ZM37 38v2c0 .56.44 1 1 1h2c.56 0 1-.44 1-1v-2c0-.56-.44-1-1-1h-2c-.56 0-1 .44-1 1Zm7 3h-2c-.56 0-1 .44-1 1v2c0 .56.44 1 1 1h2c.56 0 1-.44 1-1v-2c0-.56-.44-1-1-1Zm-7 5v2c0 .56.44 1 1 1h2c.56 0 1-.44 1-1v-2c0-.56-.44-1-1-1h-2c-.56 0-1 .44-1 1Zm5 7h2c.56 0 1-.44 1-1v-2c0-.56-.44-1-1-1h-2c-.56 0-1 .44-1 1v2c0 .56.44 1 1 1Zm4-4h2c.56 0 1-.44 1-1v-2c0-.56-.44-1-1-1h-2c-.56 0-1 .44-1 1v2c0 .56.44 1 1 1Zm2-12h-2c-.56 0-1 .44-1 1v2c0 .56.44 1 1 1h2c.56 0 1-.44 1-1v-2c0-.56-.44-1-1-1Zm2 8h2c.56 0 1-.44 1-1v-2c0-.56-.44-1-1-1h-2c-.56 0-1 .44-1 1v2c0 .56.44 1 1 1Z"
    />
  </Svg>
)
export default QrisLogo;