import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg width={22} height={22} fill="none" {...props}>
    <Path
      fill="#1394AD"
      d="M17.114 2.763h-1.957v-.656a.658.658 0 0 0-.652-.656.65.65 0 0 0-.653.656v.656H7.328v-.656a.658.658 0 0 0-.653-.656.65.65 0 0 0-.652.656v.656H4.066c-.346 0-.678.138-.923.385-.245.246-.382.58-.382.928V17.2c0 .348.137.682.382.928s.577.384.923.384h13.048c.346 0 .678-.138.923-.384s.382-.58.382-.928V4.076c0-.348-.137-.682-.382-.928a1.301 1.301 0 0 0-.923-.385ZM6.023 4.076v.656a.658.658 0 0 0 .652.656.65.65 0 0 0 .653-.656v-.656h6.524v.656a.658.658 0 0 0 .653.656.65.65 0 0 0 .652-.656v-.656h1.957V6.7H4.066V4.076h1.957ZM17.114 17.2H4.066V8.013h13.048v9.188ZM9.285 9.98v5.25a.658.658 0 0 1-.652.657.65.65 0 0 1-.653-.656v-4.189l-.36.183a.65.65 0 0 1-.876-.294.66.66 0 0 1 .292-.881l1.305-.656a.65.65 0 0 1 .862.267.66.66 0 0 1 .082.32Zm4.825 2.499-1.563 2.096h1.305a.65.65 0 0 1 .653.656.659.659 0 0 1-.653.656h-2.61a.65.65 0 0 1-.583-.363.66.66 0 0 1 .061-.687l2.348-3.147a.656.656 0 0 0-.161-.941.648.648 0 0 0-.925.216.657.657 0 0 1-.654.338.65.65 0 0 1-.552-.49.66.66 0 0 1 .077-.504 1.947 1.947 0 0 1 3.247-.214 1.977 1.977 0 0 1 .01 2.384Z"
    />
  </Svg>
);
export default SvgComponent;