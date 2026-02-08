'use client'
import Test1 from "@/components/apps/test1";
import Test2 from "@/components/apps/test2";
import Window from "@/components/window";
import { AppId, useOSStore } from "@/store/useOSStore";
import Image from "next/image";
import Shortcut from "@/components/shortcut";

export default function Home() {

  const {launchApp, openApps} = useOSStore();

  const RenderWindowContent = (Id: AppId)=>{

    switch(Id){
      case 'test1':
        return <Test1/>
      case 'test2':
        return <Test2/>

    }

  }
  return (
      <main className="h-screen w-screen overflow-hidden flex-col flex " style={{
        backgroundImage: 'url("/bliss.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="flex-1 relative">
          {/* test shortcut */}
          <Shortcut id="test1" title="test shortcut"/>
          <Shortcut id="test2" title="hello"/>
          <Shortcut id="test3" title="yes"/>


          {openApps.map((id, index) => (
          <Window index={index} key={id} id={id} title={id.toUpperCase()}>
            {RenderWindowContent(id)}
          </Window>
        ))}

        </div>
      </main>
  );
}
