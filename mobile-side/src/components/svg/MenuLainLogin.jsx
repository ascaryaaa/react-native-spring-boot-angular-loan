import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const MenuLainLogin = (props) => (
  <Svg
    width={55}
    height={56}
    fill="none"
    {...props}
  >
    <Rect width={55} height={55} y={0.5} fill="#18C1CD" rx={24} />
    <Path
      fill="#fff"
      d="M17 25.5a1 1 0 0 1-1-1v-7.998a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1V24.5a1 1 0 0 1-1 1h-8Zm14 0a1 1 0 0 1-1-1v-7.998a1 1 0 0 1 1-1h7.998a1 1 0 0 1 1 1V24.5a1 1 0 0 1-1 1H31Zm-14 14a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-8Zm14 0a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h7.998a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H31Z"
    />
  </Svg>
)
export default MenuLainLogin;
