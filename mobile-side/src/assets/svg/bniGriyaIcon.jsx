import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    width={39}
    height={40}
    fill="none"
    {...props}
  >
    <Rect width={39} height={39} y={0.678} fill="#fff" rx={6} />
    <Path
      fill="#1394AD"
      d="M28.11 28.705v-8.98h-6.797v8.98h6.796Zm-4.985-7.168h3.172v5.355h-3.172v-5.355Z"
    />
    <Path
      fill="#1394AD"
      d="M20.354 7.59a1.926 1.926 0 0 0-2.666.055L6.813 18.521v15.25h6.343V24.71h3.625v9.063h15.407V18.476L20.354 7.59Zm10.021 24.37H18.594v-9.063h-7.25v9.062H8.625V19.272L19.127 8.927v-.004l11.248 10.349v12.687Z"
    />
  </Svg>
)
export default SvgComponent
