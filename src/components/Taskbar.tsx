import Image from "next/image"


export default function Taskbar(){
    return(
        <div className="w-full select-none flex flex-row h-full bg-linear-to-t from-[#245edb] from-80% to-blue-300 border-t-[1.5px] border-white/40 shadow-[0_-2px_5px_rgba(0,0,0,0.3)] flex-1">
            <div className="bg-linear-to-t pl-4 cursor-pointer flex items-center  from-80% h-full from-green-600 to-green-300 flex-1 rounded-r-[20px] ">

                <Image 
                    src={"/winxp.ico"} 
                    alt={"windows icon"} 
                    width={35} 
                    height={35}
                    className="drop-shadow-xl mb-0.5 self-center"
                />
                <span className="ml-2 text-[34px] font-tahoma drop-shadow-[1px_1px_1px_rgba(0,0,0,0.7)]">Start</span>

            </div>
            <div className=" flex-7"></div>
        </div>
    )
}