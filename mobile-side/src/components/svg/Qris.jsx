import * as React from "react"
import Svg, { Path } from "react-native-svg"
<<<<<<<< HEAD:mobile-side/src/components/svg/QrisText.jsx
const QrisText = (props) => (
========
const Qris = (props) => (
>>>>>>>> aura:mobile-side/src/components/svg/Qris.jsx
  <Svg
    width={52}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#F68310"
      d="M17.214 3.156h13.152v7.89H24.85l5.517 5.05H25.68l-5.41-5.05v5.05h-3.055V8.076h9.643v-1.92h-9.643V3.156ZM31.732 16.097h3.214V3.13h-3.214v12.967ZM5.991 12.967V3.156H3.473c-.455 0-.804.342-.804.762 0 2.316-.026 9.128-.026 11.39 0 .42.348.789.777.789h7.472v-3.13H5.991ZM12.553 19.332h3.295v-6.497h-3.295v6.497Z"
    />
    <Path
      fill="#F68310"
      d="M7.598 3.156v3.235h4.955v4.84h3.295V3.945c0-.42-.349-.763-.777-.789H7.599Z"
    />
    <Path
      fill="#F68310"
      d="M7.598 7.969v3.288H10.866V7.969H7.598Zm2.304 2.288H8.562V8.942h1.34v1.315ZM50.723 12.835v4.84c0 .42-.375.763-.803.763h-4.928v.789H50.75c.401 0 .749-.342.749-.763v-5.629h-.777ZM1.304 6.365v-4.84c0-.42.321-.736.75-.736h4.928c.027 0 .027-.027.027-.027V.026S7.009 0 6.982 0H1.304A.782.782 0 0 0 .5.789v5.576c0 .026.027.026.027.026h.75s.027 0 .027-.026Z"
    />
    <Path
      fill="#F68310"
      d="M49.33 6.365V3.156H36.34v8.049h8.652v1.604h-8.653v3.235H49.33V7.996H40.68V6.365h8.651Z"
    />
  </Svg>
)
<<<<<<<< HEAD:mobile-side/src/components/svg/QrisText.jsx
export default QrisText;
========
export default Qris;
>>>>>>>> aura:mobile-side/src/components/svg/Qris.jsx
