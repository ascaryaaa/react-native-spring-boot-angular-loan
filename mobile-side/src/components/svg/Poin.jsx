import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"
<<<<<<<< HEAD:mobile-side/src/components/svg/PoinMBanking.jsx
const PoinMBanking = (props) => (
========
const Poin = (props) => (
>>>>>>>> aura:mobile-side/src/components/svg/Poin.jsx
  <Svg
    width={32}
    height={15}
    fill="none"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h32v15H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="matrix(.00744 0 0 .01587 -.002 0)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,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"
        id="b"
        width={135}
        height={63}
      />
    </Defs>
  </Svg>
)
<<<<<<<< HEAD:mobile-side/src/components/svg/PoinMBanking.jsx
export default PoinMBanking;
========
export default Poin;
>>>>>>>> aura:mobile-side/src/components/svg/Poin.jsx
