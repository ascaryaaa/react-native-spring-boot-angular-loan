import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Logout = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}
  >
    <Path
      fill="#F68310"
      d="M5.833 24.5c-.641 0-1.19-.228-1.647-.685a2.251 2.251 0 0 1-.686-1.648V5.833c0-.641.229-1.19.686-1.647A2.252 2.252 0 0 1 5.833 3.5H14v2.333H5.833v16.334H14V24.5H5.833Zm12.834-4.667-1.605-1.691 2.976-2.975H10.5v-2.334h9.538l-2.976-2.975 1.605-1.691L24.5 14l-5.833 5.833Z"
    />
  </Svg>
)
export default Logout
