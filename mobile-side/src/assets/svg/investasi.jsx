import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg width={33} height={33} fill="none" {...props}>
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M5.119 5.119C3.167 7.073 3.167 10.215 3.167 16.5s0 9.428 1.952 11.38c1.954 1.953 5.096 1.953 11.381 1.953s9.428 0 11.38-1.953c1.953-1.95 1.953-5.095 1.953-11.38 0-6.285 0-9.428-1.953-11.381-1.95-1.952-5.095-1.952-11.38-1.952-6.285 0-9.428 0-11.381 1.952Zm13.714 8.714a1 1 0 0 0 1 1h.92l-2.684 2.684a.332.332 0 0 1-.472 0l-2.114-2.114a2.333 2.333 0 0 0-3.299 0L9.127 18.46a1.001 1.001 0 1 0 1.413 1.413l3.057-3.057a.335.335 0 0 1 .472 0l2.115 2.115a2.333 2.333 0 0 0 3.299 0l2.684-2.683v.919a1 1 0 0 0 2 0v-3.334a1 1 0 0 0-1-1h-3.334a1 1 0 0 0-1 1Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;