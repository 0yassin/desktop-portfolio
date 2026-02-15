'use client'

import { useOSStore } from "@/store/useOSStore"
import Image from "next/image"
import Shortcut from "./shortcut"

export default function Taskbar() {
    const { togglestart, openApps } = useOSStore()

    const playStartSound = () => {
        if (typeof window !== 'undefined') {
            const audio = new Audio("/menu_command.wav");
            audio.play().catch(() => {
            });
        }
    }

    return (
        <div className="absolute bottom-0 z-20 w-full select-none flex flex-row bg-linear-to-t from-[#245edb] from-80% to-blue-300 border-t-[1.5px] flex-1 gap-8">
            <div 
                onClick={(e) => {
                    playStartSound(); 
                    e.stopPropagation();
                    togglestart();
                }} 
                className="bg-linear-to-t pl-4 gap-4 cursor-pointer flex items-center min-w-fit w-fit pr-12 from-80% h-full from-green-600 to-green-300 rounded-r-[20px]"
            >
                <Image 
                    src={"/winxp.ico"} 
                    alt={"windows icon"} 
                    width={35} 
                    height={35}
                    className="drop-shadow-xl mb-0.5 self-center"
                />
                <span className="text-[34px] font-tahoma drop-shadow-[1px_1px_1px_rgba(0,0,0,0.7)]">
                    Start
                </span>
            </div>

            <div className="flex items-center content-center">
                {openApps.map((item, index) => (
                    <div 
                        key={index} 
                        className="cursor-pointer bg-linear-to-t from-[#245edb] from-80% border-[#1140a5] transition-colors border-b-2 to-blue-300 hover:from-[#1140a5] h-full aspect-[1.25] items-center justify-center flex"
                    > 
                        <Shortcut doubleclick={false} id={item} show_title={false} h={35} w={35} />
                    </div>
                ))}
            </div>
        </div>
    )
}