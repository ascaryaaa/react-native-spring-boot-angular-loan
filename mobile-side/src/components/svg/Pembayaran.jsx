import * as React from "react"
<<<<<<< HEAD:mobile-side/src/components/svg/Pembayaran.jsx
import Svg, { Path } from "react-native-svg"
=======
import Svg, { Rect, Path } from "react-native-svg"
>>>>>>> aura:mobile-side/src/assets/svg/pembayaran.jsx
const Pembayaran = (props) => (
  <Svg
    width={55}
    height={55}
    fill="none"
    {...props}
  >
    <Rect width={55} height={55} fill="#7866FB" rx={25} />
    <Path
      fill="#fff"
      d="M28.833 30.167H23.5a1.334 1.334 0 0 0 0 2.666h5.333a1.334 1.334 0 0 0 0-2.666Zm5.334-13.334h-1.574a4 4 0 0 0-3.76-2.666h-2.666a4 4 0 0 0-3.76 2.666h-1.574a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h13.334a4 4 0 0 0 4-4v-16a4 4 0 0 0-4-4Zm-9.334 1.334a1.334 1.334 0 0 1 1.334-1.334h2.666a1.334 1.334 0 0 1 1.334 1.334V19.5h-5.334v-1.333ZM35.5 36.833a1.333 1.333 0 0 1-1.333 1.334H20.833a1.333 1.333 0 0 1-1.333-1.334v-16a1.333 1.333 0 0 1 1.333-1.333h1.334v1.333a1.333 1.333 0 0 0 1.333 1.334h8a1.334 1.334 0 0 0 1.333-1.334V19.5h1.334a1.333 1.333 0 0 1 1.333 1.333v16Zm-4-12h-8a1.334 1.334 0 0 0 0 2.667h8a1.333 1.333 0 1 0 0-2.667Z"
    />
  </Svg>
)
export default Pembayaran;
