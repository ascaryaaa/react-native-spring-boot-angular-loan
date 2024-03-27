import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const BniFleksiIcon = (props) => (
  <Svg width={39} height={40} fill="none" {...props}>
    <Rect width={39} height={39} y={0.678} fill="#fff" rx={6} />
    <Path
      fill="#1394AD"
      d="M28.563 14.514H24.71v-.453a5.212 5.212 0 0 0-10.422 0v.453h-3.851a.905.905 0 0 0-.907.906V30.6c0 .501.405.906.906.906h18.126a.905.905 0 0 0 .906-.906V15.42a.905.905 0 0 0-.907-.906Zm-12.235-.453a3.17 3.17 0 0 1 3.172-3.172 3.17 3.17 0 0 1 3.172 3.172v.453h-6.344v-.453ZM27.43 29.467H11.57V16.553h2.72v2.492c0 .125.101.227.226.227h1.586a.227.227 0 0 0 .226-.227v-2.492h6.344v2.492c0 .125.102.227.226.227h1.586a.227.227 0 0 0 .227-.227v-2.492h2.719v12.914Z"
    />
  </Svg>
);
export default BniFleksiIcon;
