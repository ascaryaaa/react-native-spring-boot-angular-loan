import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const Pembelian = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={55}
    height={55}
    fill="none"
    {...props}
  >
    <Rect width={55} height={55} fill="#3267E3" rx={25} />
    <Path
      fill="#fff"
      d="M34.167 35.5a2.657 2.657 0 0 0-2.667 2.667 2.667 2.667 0 1 0 2.667-2.667ZM12.833 14.167v2.666H15.5l4.8 10.12-1.813 3.267c-.2.373-.32.813-.32 1.28a2.667 2.667 0 0 0 2.666 2.667h16V31.5h-15.44a.333.333 0 0 1-.333-.333c0-.067.013-.12.04-.16l1.2-2.174h9.933c1 0 1.88-.56 2.334-1.373l4.773-8.627c.093-.213.16-.44.16-.666a1.333 1.333 0 0 0-1.333-1.334h-19.72l-1.254-2.666m3.64 21.333a2.657 2.657 0 0 0-2.666 2.667 2.667 2.667 0 1 0 2.666-2.667Z"
    />
  </Svg>
)
export default Pembelian
