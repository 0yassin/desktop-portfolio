'use client';
import { useRef, useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import { useOSStore, AppId } from '@/store/useOSStore';

interface WindowProps {
  id: AppId;
  title: string;
  children: React.ReactNode;
  index: number;
}

export default function Window({ id, title, children, index }: WindowProps) {
  const { closeApp, setActiveApp, activeApp } = useOSStore();
  const nodeRef = useRef(null);
  const isActive = activeApp === id;
  const isAccount = id === 'Account' as AppId;

  const [initialPos, setInitialPos] = useState({ x: 100 + (index * 25), y: 100 + (index * 25) });

  useEffect(() => {
    setInitialPos({
      x: 100 + (index * 25),
      y: (window.innerHeight / 4) + (index * 25) 
    });
  }, [index]);

  const playCloseSound = () => {
    if (typeof window !== 'undefined') {
      const audio = new Audio("/ding.wav");
      audio.play().catch(() => {});
    }
  };

  const [size, setSize] = useState({ 
    width: isAccount ? 450 : 320, 
    height: isAccount ? 350 : 240 
  });

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".window-header"
      bounds="parent"
      defaultPosition={initialPos}
      onStart={() => setActiveApp(id)}
    >
      <div
        ref={nodeRef}
        onMouseDownCapture={() => setActiveApp(id)}
        className={`absolute overflow-hidden select-none bg-[#ece9d8] border-2 shadow-xl flex flex-col ${
          isActive ? 'z-50 border-[#0831d9]' : 'z-10 border-[#666464]'
        }`}
      >
        <ResizableBox
          width={size.width}
          height={size.height}
          minConstraints={[200, 150]}
          onResize={(e, data) => {
            setSize({ width: data.size.width, height: data.size.height });
          }}
          handle={
            <div className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize z-50">
               <svg width="12" height="12" viewBox="0 0 12 12" className="absolute bottom-0 right-0">
                <path d="M10 0V10H0" stroke="#808080" fill="none" />
                <path d="M12 2V12H2" stroke="#808080" fill="none" />
              </svg>
            </div>
          }
        >
          <div className="flex flex-col h-full w-full">
            <div
              className={`window-header h-7 flex justify-between items-center p-1 cursor-default select-none overflow-hidden shrink-0 ${
                isActive
                  ? 'bg-linear-to-r from-[#0058e6] to-[#0831d9]'
                  : 'bg-linear-to-r from-[#7a96df] to-[#6476c0]'
              }`}
            >
              <span className="text-white font-bold text-xs ml-1 truncate">
                {title}
              </span>
              <button
                onMouseDown={(e) => {
                  e.stopPropagation();
                  playCloseSound();
                  closeApp(id);
                }}
                className="bg-[#e21010] border border-white px-2 h-5 text-white text-xs font-bold hover:brightness-110 active:shadow-inner"
              >
                X
              </button>
            </div>

            <div
              onMouseDown={() => setActiveApp(id)}
              className="flex-1 p-4 bg-white m-1 overflow-auto text-black"
            >
              {children}
            </div>
          </div>
        </ResizableBox>
      </div>
    </Draggable>
  );
}