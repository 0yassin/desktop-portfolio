'use client'
import { AppId, useOSStore } from "@/store/useOSStore";
import Image from "next/image";
import menudata from "../../public/apps.json"

interface WindowProps {
  id: AppId;
  title?: string;
  show_title?: boolean;
  w?: number;
  h?:number;
  doubleclick?:boolean;
}




export default function Shortcut({id, title, show_title=true, w=60, h=60, doubleclick=true}: WindowProps){
    const {launchApp} = useOSStore();    
    const getIconById = (id: string) => {
      const allItems = Object.values(menudata).flat();
      const foundItem = allItems.find(item => item.ID === id);
      return foundItem ? foundItem.Icon : '/default.ico';
  };

    return(

        <div onMouseDown={doubleclick?  ()=>null: ()=>launchApp(id)}  onDoubleClick={doubleclick? ()=>launchApp(id) : ()=>null}  className="items-center group text-center cursor-pointer pointer-events-auto select-none">
        {/* icon */}
        <Image 
          src={getIconById(id)} 
          alt={id} 
          width={w} 
          height={h}
          className="drop-shadow-md mb-0.5 self-center"
        />
        {show_title?
        
          <span className="text-white transition-all text-[22px] text-center px-2 py-px drop-shadow-[1px_1px_1px_rgba(0,0,0,1)] group-hover:bg-[#0b61ff] group-hover:drop-shadow-none">
            {title}
          </span> : null }

    </div>
    )
}