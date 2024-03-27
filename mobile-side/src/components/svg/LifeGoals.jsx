import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const LifeGoals = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={55}
    height={55}
    fill="none"
    {...props}
  >
    <Rect width={55} height={55} fill="#18C1CD" rx={24} />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M25.713 25.713a2.534 2.534 0 0 0-.746 1.787 2.533 2.533 0 0 0 2.533 2.533 2.534 2.534 0 0 0 1.787-.746"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M27.5 19.9a7.6 7.6 0 1 0 7.6 7.6"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M27.5 14.833A12.667 12.667 0 1 0 40.167 27.5M32.2 22.801l-3.433 3.432"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="m39.42 19.292-4.32.608.608-4.32a.253.253 0 0 0-.417-.215l-2.864 2.85a2.534 2.534 0 0 0-.684 2.293l.456 2.293 2.293.455a2.533 2.533 0 0 0 2.293-.684l2.848-2.863a.254.254 0 0 0-.216-.417"
    />
  </Svg>
)
export default LifeGoals
