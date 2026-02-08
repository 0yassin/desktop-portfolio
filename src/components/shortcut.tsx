'use client'
import { AppId, useOSStore } from "@/store/useOSStore";

interface WindowProps {
  id: AppId;
  title: string;
}


export default function Shortcut({id, title}: WindowProps){
    const {launchApp} = useOSStore();

    return(

        <div onDoubleClick={()=>launchApp(id)}  className="w-14 h-14 text-center cursor-pointer mb-12 pointer-events-auto">
        {/* icon */}
        <div className=" w-full h-full bg-amber-700 rounded-full"></div>
        <span className="self-center mt-1">{title}</span>
    </div>
    )
}