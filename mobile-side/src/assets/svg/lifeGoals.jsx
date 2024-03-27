import * as React from "react";
import Svg, { Path } from "react-native-svg";
const lifeGoals = (props) => (
  <Svg width={33} height={33} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M14.713 14.713a2.533 2.533 0 0 0-.746 1.787 2.534 2.534 0 0 0 2.533 2.533 2.533 2.533 0 0 0 1.787-.746"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M16.5 8.9a7.6 7.6 0 1 0 7.6 7.6"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M16.5 3.833A12.667 12.667 0 1 0 29.167 16.5M21.2 11.801l-3.433 3.432"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M28.42 8.292 24.1 8.9l.608-4.32a.253.253 0 0 0-.417-.215l-2.864 2.85a2.533 2.533 0 0 0-.684 2.293l.456 2.293 2.293.455a2.534 2.534 0 0 0 2.293-.684l2.848-2.863a.252.252 0 0 0-.07-.387.253.253 0 0 0-.146-.03"
    />
  </Svg>
);
export default lifeGoals;
