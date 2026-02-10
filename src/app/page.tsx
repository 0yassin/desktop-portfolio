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

export default function Home() {

  const {launchApp, openApps} = useOSStore();

  const RenderWindowContent = (Id: AppId)=>{

    

    switch(Id){
      case 'About':
        return <About/>
      case 'Projects':
        return <Projects/>
      case 'Links':
        return <Links/>

    }

  }
  return (
      <main className="h-screen w-screen overflow-hidden flex-col flex font-tahoma " style={{
        backgroundImage: 'url("/bliss.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
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
              </div>


          {openApps.map((id, index) => (
          <Window index={index} key={id} id={id} title={id.toUpperCase()}>
            {RenderWindowContent(id)}
          </Window>
        ))}

        </div>
        <Startmenu/>
        <Taskbar/>
      </main>
  );
}
