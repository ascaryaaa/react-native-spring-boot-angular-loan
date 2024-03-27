import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const MobileTunai = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={55}
    height={55}
    fill="none"
    {...props}
  >
    <Rect width={55} height={55} fill="#F68310" rx={24} />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M13.167 20.86c0-3.48 2.738-6.36 6.185-6.36h16.295c3.446 0 6.185 2.88 6.185 6.36 0 2.704-1.648 5.04-4 5.953v6.09c0 .413 0 .804-.004 1.17a1 1 0 0 1-.004.218c-.003.535-.035 1.07-.099 1.601-.112.837-.36 1.593-.968 2.2-.606.608-1.362.856-2.2.968-.792.107-1.792.107-2.989.107h-8.137c-1.198 0-2.198 0-2.99-.107-.837-.112-1.593-.36-2.2-.968-.608-.607-.856-1.363-.968-2.2a14.236 14.236 0 0 1-.098-1.601 1.013 1.013 0 0 1-.004-.218c-.004-.366-.004-.757-.004-1.17v-6.09c-2.352-.913-4-3.249-4-5.953Zm4 3.72c0-1.117.005-2.053.106-2.805.112-.838.36-1.594.967-2.2.608-.608 1.364-.856 2.2-.968.793-.107 1.793-.107 2.99-.107h8.14c1.198 0 2.197 0 2.989.107.837.112 1.593.36 2.2.966.608.608.856 1.364.968 2.2.101.752.106 1.69.106 2.807 1.192-.763 2-2.133 2-3.72 0-2.44-1.905-4.36-4.185-4.36H19.353c-2.28 0-4.185 1.92-4.185 4.36 0 1.587.807 2.957 1.999 3.72ZM26.5 20.5H23.5c-1.285 0-2.15.003-2.793.09-.615.082-.879.225-1.052.4-.174.173-.316.435-.4 1.05-.086.644-.088 1.508-.088 2.793v8.334h16.666v-8.334c0-1.285-.002-2.149-.089-2.793-.083-.615-.225-.879-.4-1.052-.173-.173-.436-.316-1.05-.4-.645-.085-1.509-.088-2.794-.088h-3v5.63l.907-1.058a1 1 0 0 1 1.52 1.301l-2.667 3.111a1 1 0 0 1-1.52 0l-2.667-3.11a1 1 0 1 1 1.52-1.302l.907 1.059.001-5.631Zm9.291 14.667H19.209c.012.165.027.317.047.46.083.614.225.878.4 1.052.173.173.436.316 1.05.4.645.085 1.509.088 2.794.088h8c1.285 0 2.15-.003 2.793-.09.615-.082.879-.225 1.052-.4.174-.173.316-.436.4-1.05.019-.143.035-.295.047-.46Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default MobileTunai
