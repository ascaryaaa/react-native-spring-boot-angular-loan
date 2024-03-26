import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const transfer = (props) => (
  <Svg width={33} height={33} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="M11.913 16.367a2 2 0 0 1 0 2.826l-1.298 1.302h11.218a2 2 0 0 1 0 4H10.615l1.3 1.298a2 2 0 0 1-2.83 2.83l-4.713-4.715a2 2 0 0 1 0-2.828l4.713-4.715a2 2 0 0 1 2.83 0l-.002.002Zm9.174-12a2 2 0 0 1 2.676-.139l.152.137 4.713 4.715a2 2 0 0 1 .137 2.676l-.137.152-4.713 4.715a2 2 0 0 1-2.967-2.678l.137-.152 1.3-1.298H11.167a2 2 0 0 1-.192-3.992l.192-.008h11.218l-1.3-1.3a2 2 0 0 1 0-2.83l.002.002Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.5.5h32v32H.5z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default transfer;
