import { FaFacebook,FaInstagram,FaShoppingBasket,FaUserCircle } from "react-icons/fa";

export const action = [ 
    { label: "Facebook", icon: <FaFacebook />, url: "https://www.facebook.com/events/1685384091942074", isExternal: true},
    { label: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/shelter_friend_ukraine/?hl=uk",isExternal: true },
    { label: "Shop", icon: <FaShoppingBasket />, url: "https://www.tasty.pet",isExternal: true},
    { label: "User", icon: <FaUserCircle />, url: '/user', isExternal: false },
  ];