import { NavLink, useNavigate } from "react-router-dom"

export default function Navbar(){
    // Navigate
    const navigate = useNavigate()

    //Token
    const token = localStorage.getItem("userToken")

    // Function
    const logout = () =>{
        localStorage.removeItem("userToken")
        navigate("/login")
    }

    return <main className="border-b border-black">

        <nav className="bg-[#e9d8a6] border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center justify-center">
                    <div>
                        <i className="fa-solid fa-note-sticky text-2xl text-[#264653] mr-1.5"></i>
                    </div>
                    <div>
                    <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white" 
                    style={{letterSpacing:"3px"}}>
                    NOTES</span>
                    </div>
                </div>
         
            <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
            </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
            <ul className="flex gap-6">
                {token ? 
                <>
                {/* Log out */}
                <li>
                <NavLink to="#" onClick={()=>logout()} className="font-semibold text-gray text-[18px]">Log out</NavLink>
                </li>
                </>:
                <>
                {/* Login */}
                <li>
                <NavLink to="/login" className="font-semibold text-gray text-[18px]">Login</NavLink>
                </li>
            
                {/* Register */}
                <li>
                <NavLink to="/register" className="font-semibold text-gray text-[18px]">Register</NavLink>
                </li>
                </>
                }
    

            
            </ul>
            </div>
        </div>
        </nav>


    </main>
}