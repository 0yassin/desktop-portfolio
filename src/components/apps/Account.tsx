import { useOSStore } from "@/store/useOSStore"
import osdata from "../../../public/osdata.json"
import Image from "next/image"

export default function Account(){
    const {set_pfp, currentpfp} = useOSStore()
    return(
        <div className="flex flex-col gap-4">
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
            ))

            }
            
        </div>
    </div>
    )
}