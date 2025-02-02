import { SubmitHandler, useForm } from "react-hook-form"
import axios from "axios"
import note from "../../../public/assets/images/note.png"
import  toast  from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

// Type
type Inputs= {
    title: string
    content: string
}

export default function FormNote() {
        // Navigate
        const navigate = useNavigate()

        // Token
        const token = localStorage.getItem("userToken")
    
        // Form
        const {register, handleSubmit} = useForm<Inputs>({})
    
        // Functions
        const onSubmit: SubmitHandler<Inputs> = async (value) => {
            const options = {
                url:"https://note-sigma-black.vercel.app/api/v1/notes",
                method: 'POST',
                data :value,
                headers: {
                    token:`3b8ny__${token}`
                },
            }
            const response = await axios.request(options)
            if(response.data.msg === "done"){
                toast.success("Note added successfully!")
                navigate("/addNote")
            }
            
        }
  return (
    <main className="bg-[#e9d8a6] h-screen">
    <div className="container mx-auto flex lg:justify-between justify-center items-center h-screen">
            <div className="lg:w-[45%] w-[90%]">
                {/* Building image */}
                <img src={note} alt="notes picture"  className="w-full h-[600px]"/>
            </div> 
            <div className="lg:w-[60%] w-[90%]">
                      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white p-7 rounded-md shadow-md">
          {/* Title */}
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            {...register("title")}
            className="w-full h-[40px] border border-gray-400 rounded-md mb-3 mt-1"
          />
          {/* Description */}
          <label htmlFor="content">Description</label>
          <textarea
            id="content"
            {...register("content")}
            rows={3}
            cols={3}
            className="w-full border border-gray-400 rounded-md my-2"
          />
          <button
            type="submit"
            className="lg:py-5 lg:px-16 py-2 px-8 w-full rounded-md lg:font-medium font-normal text-[18px] text-white bg-[#533567] hover:bg-[#452a50] cursor-pointer"
          >
            <i className="fa-solid fa-plus"></i> Add notes
          </button>
        </div>
      </form>
            </div> 

        </div>

    </main>
  );
}
