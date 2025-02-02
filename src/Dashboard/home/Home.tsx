import { NavLink } from "react-router-dom";
import home from "../../../public/assets/images/home.webp";
export default function Home() {
  return (
    <main className="bg-[#e9d8a6] h-screen">
      {/* Container content */}
      <div className="container mx-auto flex lg:justify-between justify-center items-center h-screen lg:flex-nowrap flex-wrap">
        <div className="lg:w-[45%] w-[90%] lg:text-start text-center">
          <h3 className="lg:text-6xl text-3xl font-medium mb-8">
            The most <br /> powerful note- <br /> taking tool
          </h3>
          <p style={{ lineHeight: "28px" }} className="font-medium mb-6">
            Evernote brings your notes, tasks, and schedule <br /> together to
            keep you focused and organized all day <br /> long.
          </p>
          <NavLink
            to={"/formNote"}
            className="lg:py-5 lg:px-16 py-2 px-8 rounded-md lg:font-medium font-normal text-[18px] text-white bg-[#533567] hover:bg-[#452a50] cursor-pointer"
          >
            Start writing
          </NavLink>
        </div>
        <div className="lg:w-[45%] w-[60%]">
          {/* Building image */}
          <img
            src={home}
            alt="home picture"
            className="w-full lg:h-[600px] h-[350px] rounded-3xl"
          />
        </div>
      </div>
    </main>
  );
}
