'use client'
import { useOSStore } from "@/store/useOSStore"
import { useEffect } from "react"

export default function BSOD(){
    const {reboot} = useOSStore();
    
    useEffect(()=>{
        const handleKeyDown = () => reboot();
        window.addEventListener('keypress', handleKeyDown);
        return () => window.removeEventListener('keypress', handleKeyDown);
    }, [reboot])

    return(
        <div onClick={reboot} className="fixed inset-0 z-9999 bg-[#0000aa] text-2xl tracking-wider text-[#ffffff] font-monoa p-10 cursor-none select-none">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white text-[#0000aa] inline-block px-2 mb-6 font-bold">Windows</div>
                <p className="mb-6">
                    A problem has been detected and windows has ben shut down to preent damage to your computer
                </p>
                <p className="mb-6">
                    If this is the firsst time you've seen this screen restart your computer. if this screen appears again, follow these steps:
                </p>
                <p className="mb-6">
                    Make sure any new hardware or software is properly installed. IF this is a new installation ask your manufacturer for any new windows updates.
                </p>
                <p className="mb-6">
                    Technical information: 
                    <br />
                    *** STOP: 0x0000000D (0x0000000 0x000000 0x000000 0x000000)
                </p>
                <p className="animate-pulse">
                    Press any key to restart
                </p>
            </div>
        </div>
    )

}