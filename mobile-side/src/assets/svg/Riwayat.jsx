import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Riwayat = (props) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Path
      stroke="#F9A653"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.688 21.413a11.898 11.898 0 0 0 5.22 5.304 11.608 11.608 0 0 0 7.295 1.11 11.727 11.727 0 0 0 6.516-3.52 12.09 12.09 0 0 0 3.184-6.772 12.18 12.18 0 0 0-1.392-7.374 11.871 11.871 0 0 0-5.426-5.086 11.6 11.6 0 0 0-7.333-.811c-2.467.535-4.488 1.75-6.16 3.673-.201.214-.98 1.075-1.627 2.375m4.035.355-4.812.96L4 6.667M16 12v5.333L20 20"
    />
  </Svg>
)
export default Riwayat;
