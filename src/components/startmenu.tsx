'use client'

import { AppId, useOSStore } from "@/store/useOSStore"
import Image from "next/image";
import Shortcut from "./shortcut";
import menudata from "../../public/apps.json"
import osdata from "../../public/osdata.json"


export default function Startmenu(){
    const {startopen, closestart,launchApp, currentpfp, username} = useOSStore();

    if (!startopen) return null

    return(
        <div className="">
            <div className="fixed inset-0 z-997" onClick={closestart}/>
            <div className=" fixed z-999 bottom-13 left-0 w-fit select-none">

                <div className=" pl-2 rounded-t-[5px] py-3 pr-12 bg-linear-to-t from-blue-500 from-30% to-80% to-[#245edb] w-full justify-start flex items-center gap-4">
                    <Image 
                        src={currentpfp}
                        alt="pfp" 
                        width={52} 
                        height={52}
                        className=" border-2 bg-whites border-gray-200 border-whites rounded-[5px] drop-shadow-md"
                    />
                    <span className="text-[26px] drop-shadow-[1px_1px_1px_rgba(0,0,0,1)]">{username}</span>
                </div>
                <div className="gap-4 flex  bg-white text-gray-900 border-r-6 border-blue-500">
                  <div className="flex-1 w-fit flex-col flex gap-2 mb-4  mr-12 ">
                        {Object.entries(menudata).map(([title, items]) => (
                        items.map((item) => (
                            <div key={item.ID} onMouseDown={()=>closestart()} className="group ml-4 mr-4 cursor-pointer mt-4 flex gap-4 items-center w-full">

                            <Shortcut 
                            doubleclick={false}
                            key={item.ID} 
                            id={item.ID as AppId} 
                            title={title} 
                            show_title={false}
                            h={80}
                            w={80}
                            />
                            <span onMouseDown={()=>launchApp(item.ID as AppId)} className="text-[22px] w-full group-hover:underline transition-all">
                                {item.ID}
                            </span>
                        </div>
                        ))
                        ))}
                    
                  </div>
                  <div className="flex-1  bg-blue "></div>
                </div>
                <div className="py-2 px-2 justify-end gap-8 flex bg-linear-to-b from-blue-500 to-[#245edb]">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image
                            src="/ST.ico"
                            height={32}
                            width={32}
                            alt="shutdwon"
                        
                        />
                        <span className="text-[24px]">Turn off computer</span>
                    </div>
                </div>
            </div>
        </div>
    )

}