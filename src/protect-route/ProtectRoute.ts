import { ReactNode } from "react";

interface ProtectRouteProps {
    children: ReactNode;
  }

export default function ProtectRoute(props: ProtectRouteProps){     
    // If no token, redirect to login
    if(localStorage.getItem("userToken") !== null){
        // If token exists, render the children component
        return props.children
    }else {
        // Redirect to login page
        window.location.href = "/login"
    }

}