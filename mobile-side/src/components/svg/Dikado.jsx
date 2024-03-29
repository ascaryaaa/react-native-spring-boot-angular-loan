import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const Dikado = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={55}
    height={55}
    fill="none"
    {...props}
  >
    <Rect width={55} height={55} fill="#CB3FAE" rx={25} />
    <Path
      fill="#fff"
      d="M31.507 14.17a5.335 5.335 0 0 1 4.618 8h6.048v2.667h-2.666v13.334a1.333 1.333 0 0 1-1.334 1.333H16.84a1.333 1.333 0 0 1-1.333-1.333V24.837H12.84v-2.666h6.047a5.334 5.334 0 0 1 8.62-6.195 5.311 5.311 0 0 1 3.998-1.805M28.84 24.837h-2.667v13.334h2.667V24.837Zm-5.334-8a2.667 2.667 0 0 0-.2 5.326l.2.008h2.667v-2.667a2.667 2.667 0 0 0-2.263-2.636l-.205-.024-.199-.007Zm8 0a2.667 2.667 0 0 0-2.66 2.467l-.006.2v2.667h2.666a2.667 2.667 0 0 0 2.659-2.467l.008-.2a2.667 2.667 0 0 0-2.667-2.667Z"
    />
  </Svg>
)
export default Dikado
