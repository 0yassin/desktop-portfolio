'use client'

import { useOSStore } from "@/store/useOSStore"

export default function Startmenu(){
    const {startopen, closestart,launchApp} = useOSStore();

    if (!startopen) return null

    return(
        <div className="">
            <div className="fixed inset-0 z-998" onClick={closestart}/>
            <div className=" fixed z-10 bottom-11 left-0 w-64 h-64 bg-amber-600"></div>
        </div>
    )

}