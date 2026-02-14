import { create } from 'zustand'

export type AppId = 'About' | 'Projects' | 'Links' | 'Account';

interface OSState {
    currentpfp: string;
    set_pfp: (path: string) => void;
    username: string;
    set_username: (newusername : string) => void;
    startopen: boolean;
    openApps: AppId[];       
    activeApp: AppId | null; 
    launchApp: (id: AppId) => void;
    closeApp: (id: AppId) => void;
    setActiveApp: (id: AppId) => void;
    togglestart: () => void;
    closestart: () => void;
}

export const useOSStore = create<OSState>((set) => ({
    openApps: [],
    activeApp: null,
    startopen: false,
    currentpfp: "/chess.jpg",
    username: "Yassin",
    

    togglestart: () => set((state) => ({startopen: !state.startopen})),

    closestart: () => set((state) => ({startopen: false})),

    launchApp: (id) => set((state) => {
        if (state.openApps.includes(id)) return { activeApp: id };
        const offset = state.openApps.length * 20;
        return{

            openApps: state.openApps.includes(id) ? state.openApps : [...state.openApps, id],
            activeApp: id
        }
        
        
    }),

    closeApp: (id) => set((state) => ({
        openApps: state.openApps.filter((app) => app !== id),
        activeApp: state.activeApp === id ? null : state.activeApp
    })),

    setActiveApp: (id) => set({ activeApp: id }),
    set_pfp: (path) => set({currentpfp: path}),
    set_username: (new_username) => set({username: new_username})
}))