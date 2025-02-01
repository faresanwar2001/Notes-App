import axios from "axios"
import { SubmitHandler, useForm } from "react-hook-form"
import { loginSchema, LoginSchema } from "../../lib/schemas/login-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom"
import  toast  from 'react-hot-toast';
import { useState } from "react"


export default function Login(){
    // Navigation
    const navigate = useNavigate()

    // Loading
    const [isLoading, setLoading] = useState<boolean>(false)

    // Error
    const [error, setError] = useState<string | null>()

    // Form && validation
    const {register, handleSubmit, formState:{errors}} = useForm<LoginSchema>({
        resolver:zodResolver(loginSchema)
    })

    // Functions
    const onSubmit: SubmitHandler<LoginSchema> = async (value) =>{
        setLoading(false)
        await axios.post("https://note-sigma-black.vercel.app/api/v1/users/signIn",value)
        .then((response)=>{           
            // Check if response is done navigate to dashboard
            if(response?.data?.msg === "done"){
                setLoading(true)
                toast.success('Login In Successfully!');
                // Store token in local storage
                localStorage.setItem("userToken",response?.data?.token)
                navigate('/')
            }  
        })
        .catch((error)=>{
            setError(error?.response?.data?.msg);
            toast.error("Login Failed!");
        })
    }
    
    return<>
        <div className="shadow-md p-20 rounded-md w-full">
            {/* Heading */}
            <h1 className="text-3xl font-semibold text-center mb-10">Login Now</h1>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} >
                {/* Email */}
                <input type="email" placeholder="Enter your Email"
                 className="w-full h-[50px] p-3 border border-gray-300 rounded-[3px]"
                 {...register("email")}/>
                 {/* Error */}
                 <p className="font-normal text-red-500 mb-5 mt-1">{errors.email?.message}</p>
                
                {/* Password */}
                <input type="password" placeholder="Enter your Password" 
                className="w-full h-[50px] p-3 border border-gray-300 rounded-[3px]"
                {...register("password")}/>
                 {/* Error */}
                <p className="font-normal text-red-500 mb-5 mt-1">{errors.email?.message}</p>

                {/* Submit Button */}
                <button type="submit" className="w-full py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600">
                {isLoading ? "Loading..." : "Login"}
                </button>

                {/* Error from API */}
                {error ? <p className="text-red-500 text-start mt-2">{error}</p> : null}

                {/* Don't have an account */}
                <div className="mt-5">
                    <p className="text-center">Don't have an account? <span className="font-semibold text-blue-500 underline" onClick={()=>navigate('/register')}>Register Now</span></p>
                </div>
            </form>

        </div>
    </>
}