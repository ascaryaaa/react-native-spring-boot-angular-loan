import * as React from "react"
import Svg, { Path } from "react-native-svg"
<<<<<<<< HEAD:mobile-side/src/components/svg/NotificationHome.jsx
const NotificationHome = (props) => (
========
const Notification = (props) => (
>>>>>>>> aura:mobile-side/src/components/svg/Notification.jsx
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#F68310"
      d="M12 22c-.55 0-1.02-.196-1.412-.587A1.93 1.93 0 0 1 10 20h4c0 .55-.196 1.021-.587 1.413A1.92 1.92 0 0 1 12 22Zm-8-3v-2h2v-7c0-1.383.417-2.612 1.25-3.687.833-1.075 1.917-1.779 3.25-2.113v-.7c0-.417.146-.77.438-1.062A1.451 1.451 0 0 1 12 2c.417 0 .771.146 1.063.438.292.292.438.646.437 1.062v.325a4.606 4.606 0 0 0-.5 2.3 12.7 12.7 0 0 0-.488-.088A3.177 3.177 0 0 0 12 6c-1.1 0-2.042.392-2.825 1.175C8.392 7.958 8 8.9 8 10v7h8v-6.425A5.027 5.027 0 0 0 18 11v6h2v2H4ZM18 9a2.893 2.893 0 0 1-2.125-.875A2.893 2.893 0 0 1 15 6c0-.833.292-1.542.875-2.125A2.893 2.893 0 0 1 18 3c.833 0 1.542.292 2.125.875S21 5.167 21 6s-.292 1.542-.875 2.125A2.893 2.893 0 0 1 18 9Z"
    />
  </Svg>
)
<<<<<<<< HEAD:mobile-side/src/components/svg/NotificationHome.jsx
export default NotificationHome;
========
export default Notification;
>>>>>>>> aura:mobile-side/src/components/svg/Notification.jsx
