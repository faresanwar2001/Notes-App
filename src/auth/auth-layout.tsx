import { Outlet } from "react-router-dom";
import main from "../../public/assets/images/main.jpg"
export default function AuthLayout(){

    return<>
    <div className="container flex lg:justify-between justify-center lg:flex-nowrap flex-wrap items-center mx-auto h-screen">
        <div className="lg:w-[40%] w-[70%]">
            <img src={main} alt="main picture auth"
            className="w-full lg:h-[500px] h-[300px]"
            />
        </div>

        <div className="lg:w-[55%] w-[100%]">
            <Outlet/>
        </div>
    </div>

    </>
}