import { useOSStore } from "@/store/useOSStore"
import osdata from "../../../public/osdata.json"
import Image from "next/image"
import { useState } from "react"

export default function Account(){
    const {set_pfp, currentpfp, set_username} = useOSStore()
    const [new_use, set_new_user] = useState('yassin')
    return(
        <div className="flex flex-col gap-4">
            <div>
                <h1 className="text-[28px] text-gray-900 text-nowrap">Change your username</h1>
                <div className="flex content-center items-center gap-2 h-fit">

                    <input type="text" value={new_use} onChange={(e)=> set_new_user(e.target.value)} className=" outline-0 border-2 border-gray-400 bg-gray-300 rounded-[5px] text-[22px] text-gray-900 px-2"></input>
                    <button 
                        onClick={()=>set_username(new_use)} 
                        className="
                            px-4 cursor-pointer bg-[#0b61ff] text-[23px] text-white rounded-[5px] h-full
                            border-t-white/50 border-l-white/50 border-b-gray-800 border-r-gray-800 border-2
                            active:border-b-white/50 active:border-r-white/50 active:border-t-gray-800 active:border-l-gray-800
                            active:pt-[2psx] active:pb-0
                        "
                    >
                        set username
                    </button>
                </div>
            </div>

            <div>
                <h1 className="text-[28px] text-gray-900 text-nowrap">Change profile picture</h1>
                <div className="flex flex-wrap gap-6 ">

                {osdata.pfp_list.map((pfp) => (
                    
                    <div 
                    key={pfp.path} 
                    className="group flex flex-col gap-3 items-center text-center cursor-default" 
                    onMouseDown={() => set_pfp(pfp.path)}
                    >
                    <Image 
                        src={pfp.path} 
                        alt={pfp.name} 
                        width={64} 
                        height={64} 
                        className={`${pfp.bg} border-3 rounded-[5px] ${pfp.path == currentpfp? 'border-[#0b61ff]' : "border-gray-600"}`}
                    />
                    
                    <h1 className={`
                            text-gray-800 
                            text-center 
                            w-fit 
                            px-1
                            text-[22px] 
                            leading-[0.8] 
                            transition-all
                            group-hover:bg-[#0b61ff] 
                            group-hover:text-white
                            ${pfp.path == currentpfp? "bg-[#0b61ff] text-white": ""}
                    `}>
                        {pfp.name}
                    </h1>
                    </div>
                ))}
                </div>           
            </div>

        </div>
    )
}