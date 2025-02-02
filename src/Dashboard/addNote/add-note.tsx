import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function AddNote(){
    // State
    const [notes, setNotes] = useState<Notes>([])
    // Token
    const token = localStorage.getItem("userToken")

    // Functions
    const onSubmit = async () => {
         await axios.get("https://note-sigma-black.vercel.app/api/v1/notes",{
            headers:{
                token:`3b8ny__${token}`,
            }
        }).then((response) => {
            if(response.data.msg === "done"){
                setNotes(response.data.notes)
            }
        }).catch((error) => {
            console.log(error);
        })
    }
    useEffect(()=>{
        onSubmit()
    },[])


    return<main className="bg-[#e9d8a6] h-screen ">
        {/* Back for adding new notes */}
        <div className="container mx-auto py-4">
        <NavLink to={"/formNote"} className="text-[#533567] cursor-pointer text-[18px] font-medium underline">Back</NavLink>
        </div>
            <div className="grid grid-cols-3 bg-white rounded-md w-full gap-4 p-8 text-center container mx-auto">
                    {notes?.map((note)=> <div className="p-7 shadow-md rounded-md gap-5 ">
                        <h2 className="font-semibold text-[18px]">{note.title}</h2>
                        <p className="mt-1 font-medium text-[17px]">{note.content}</p>
                        <button className="w-full rounded-md bg-[#533567] text-[#ffffff] py-2 font-semibold hover:bg-[#452a50] mb-2">Edit</button>
                        <button className="w-full rounded-md bg-[#675c35] text-[#ffffff] py-2  font-semibold hover:bg-[#452a50]">Delete</button>

                    </div>)}
                </div>
        
       
    </main>
}