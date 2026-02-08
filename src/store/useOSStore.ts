import { create } from 'zustand'

export type AppId = 'test1' | 'test2' | 'test3';

interface OSState {
    openApps: AppId[];       
    activeApp: AppId | null; 
    launchApp: (id: AppId) => void;
    closeApp: (id: AppId) => void;
    setActiveApp: (id: AppId) => void;
}

export const useOSStore = create<OSState>((set) => ({
    openApps: [],
    activeApp: null,

    launchApp: (id) => set((state) => ({
        openApps: state.openApps.includes(id) ? state.openApps : [...state.openApps, id],
        activeApp: id
    })),

    closeApp: (id) => set((state) => ({
        openApps: state.openApps.filter((app) => app !== id),
        activeApp: state.activeApp === id ? null : state.activeApp
    })),

    setActiveApp: (id) => set({ activeApp: id }),
}))