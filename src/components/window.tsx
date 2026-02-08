'use client';
import { useRef } from 'react';
import Draggable from 'react-draggable';
import { useOSStore, AppId } from '@/store/useOSStore';

interface WindowProps {
  id: AppId;
  title: string;
  children: React.ReactNode;
}

export default function Window({ id, title, children }: WindowProps) {
  const { closeApp, setActiveApp, activeApp } = useOSStore();
  const nodeRef = useRef(null);
  const isActive = activeApp === id;

  return (
    <Draggable 
      nodeRef={nodeRef} 
      handle=".window-header" 
      onStart={() => setActiveApp(id)}
    >
      <div 
        ref={nodeRef}
        onMouseDownCapture={() => setActiveApp(id)}
        className={`absolute w-80 bg-[#ece9d8] border-2 shadow-xl flex flex-col ${
          isActive ? 'z-50 border-[#0831d9]' : 'z-10 border-[#808080]'
        }`}
        style={{ minHeight: '100px' }}
      >
        <div 
          className={`window-header h-7 flex justify-between items-center p-1 cursor-default select-none ${
            isActive 
              ? 'bg-linear-to-r from-[#0058e6] to-[#0831d9]' 
              : 'bg-linear-to-r from-[#7a96df] to-[#6476c0]'
          }`}
        >
          <span className="text-white font-bold text-xs ml-1 truncate">
            {title}
          </span>
          <button 
            onMouseDown={(e) => e.stopPropagation()} 
            onClick={(e) => {
              e.stopPropagation();
              closeApp(id);
            }} 
            className="bg-[#e21010] border border-white px-2 h-5 text-white text-xs font-bold hover:brightness-110 active:shadow-inner"
          >
            X
          </button>
        </div>

        {/* Content Body */}
        <div 
          onMouseDown={() => setActiveApp(id)}
          className="flex-1 p-4 bg-white m-1 overflow-auto text-black min-h-32 "
        >
          {children}
        </div>
      </div>
    </Draggable>
  );
}