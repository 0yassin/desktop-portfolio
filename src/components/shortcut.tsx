'use client'
import { AppId, useOSStore } from "@/store/useOSStore";
import Image from "next/image";

interface WindowProps {
  id: AppId;
  title: string;
  icon: string;
}


export default function Shortcut({id, title, icon}: WindowProps){
    const {launchApp} = useOSStore();

    return(

        <div onDoubleClick={()=>launchApp(id)}  className="w-14 items-center group h-14 text-center cursor-pointer ml-10 mt-10 mb-12 pointer-events-auto select-none">
        {/* icon */}
        <Image 
          src={icon} 
          alt={title} 
          width={60} 
          height={60}
          className="drop-shadow-md mb-0.5 self-center"
        />
        <span className="text-white text-[22px] text-center px-2 py-px drop-shadow-[1px_1px_1px_rgba(0,0,0,1)] group-hover:bg-[#0b61ff] group-hover:drop-shadow-none">
            {title}
        </span>
    </div>
    )
}