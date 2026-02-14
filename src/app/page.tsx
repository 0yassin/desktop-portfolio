'use client'
import About from "@/components/apps/About";
import Projects from "@/components/apps/Projects";
import Links from "@/components/apps/Links";
import Window from "@/components/window";
import { AppId, useOSStore } from "@/store/useOSStore";
import Image from "next/image";
import Shortcut from "@/components/shortcut";
import Taskbar from "@/components/Taskbar";
import Startmenu from "@/components/startmenu";
import menudata from "../../public/apps.json"
import Account from "@/components/apps/Account";
import BSOD from "@/components/Bsod";

export default function Home() {

  const {launchApp,isBsod, openApps, triggerBsod} = useOSStore();

  const RenderWindowContent = (Id: AppId)=>{

    

    switch(Id){
      case 'About':
        return <About/>
      case 'Projects':
        return <Projects/>
      case 'Links':
        return <Links/>
      case 'Account':
        return <Account/>

    }

  }
  return (
      <main className="h-screen select-none w-screen overflow-hidden flex-col flex font-tahoma " style={{
        backgroundImage: 'url("/bliss.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>


        {isBsod? (<BSOD/>) : (
            <>

          
          
          
          <div className="flex-11 relative">
          <div className="p-0 mx-8 max-h-screen gap-x-12 gap-y-8 -mt-8 pt-16 flex-col flex flex-wrap content-start">
                {Object.entries(menudata).map(([title, items]) => (
                  items.map((item) => (
                    <Shortcut 
                      key={item.ID} 
                      id={item.ID as AppId} 
                      title={title} 
                      />
                    ))
                ))}

                <div onDoubleClick={()=>triggerBsod()} className=" items-center content-center justify-center flex flex-col group text-center cursor-pointer pointer-events-auto select-none">
                        {/* icon */}
                    <Image 
                        src={'/dont.ico'} 
                        alt={'DONOTRUN'} 
                        width={60} 
                        height={60}
                        className="drop-shadow-md mb-0.5 self-center"
                    />

                        
                    <span className="text-white w-fit transition-all text-[22px] text-center leading-6 px-2  drop-shadow-[1px_1px_1px_rgba(0,0,0,1)] group-hover:bg-[#0b61ff] group-hover:drop-shadow-none">
                      DONOTRUN.exe
                    </span>                
                </div>
              </div>


          {openApps.map((id, index) => (
            <Window index={index} key={id} id={id} title={id.toUpperCase()}>
            {RenderWindowContent(id)}
          </Window>
        ))}

        </div>
        <Startmenu/>
        <Taskbar/>
      </>
      )
      }
      </main>
  );
}
