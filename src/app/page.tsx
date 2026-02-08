'use client'
import About from "@/components/apps/About";
import Projects from "@/components/apps/Projects";
import Links from "@/components/apps/Links";
import Window from "@/components/window";
import { AppId, useOSStore } from "@/store/useOSStore";
import Image from "next/image";
import Shortcut from "@/components/shortcut";
import Taskbar from "@/components/Taskbar";

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
          {/* test shortcuts */}
          <Shortcut id="About" title="About" icon="/computer.ico"/>
          <Shortcut id="Projects" title="Projects" icon="/folder-2.ico"/>
          <Shortcut id="Links" title="Links" icon="/planet.ico"/>


          {openApps.map((id, index) => (
          <Window index={index} key={id} id={id} title={id.toUpperCase()}>
            {RenderWindowContent(id)}
          </Window>
        ))}

        </div>
        <Taskbar/>
      </main>
  );
}
