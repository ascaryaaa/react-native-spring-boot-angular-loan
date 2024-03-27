import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const Profile = (props) => (
  <Svg
    width={61}
    height={61}
    fill="none"
    {...props}
  >
    <Circle cx={30.5} cy={30.5} r={30.5} fill="#4E5D60" />
    <Path
      stroke="#fff"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 39a6 6 0 0 1 6-6h12a6 6 0 0 1 6 6 3 3 0 0 1-3 3H21a3 3 0 0 1-3-3Z"
    />
    <Path
      stroke="#fff"
      strokeWidth={2}
      d="M30 27a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
    />
  </Svg>
)
export default Profile;
