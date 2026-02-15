import { create } from 'zustand'

export type AppId = 'About' | 'Projects' | 'Links' | 'Account';

const playSound = (path: string) => {
    if (typeof window !== 'undefined') {
        const audio = new Audio(path);
        audio.play().catch(() => {
            console.warn("Audio playback blocked: Wait for user interaction.");
        });
    }
};

interface OSState {
    currentpfp: string;
    set_pfp: (path: string) => void;
    username: string;
    set_username: (newusername: string) => void;
    startopen: boolean;
    openApps: AppId[];
    activeApp: AppId | null;
    launchApp: (id: AppId) => void;
    closeApp: (id: AppId) => void;
    setActiveApp: (id: AppId) => void;
    togglestart: () => void;
    closestart: () => void;
    isBsod: boolean;
    triggerBsod: () => void;
    reboot: () => void;
    current_wallpaper: string;
    set_current_wallpaper: (new_wallpaper: string) => void;
}

export const useOSStore = create<OSState>((set) => ({
    // Initial State
    openApps: [],
    activeApp: null,
    startopen: false,
    currentpfp: "/chess.jpg",
    username: "Yassin",
    isBsod: false,
    current_wallpaper: "/bliss.jpg",

    togglestart: () => set((state) => ({ startopen: !state.startopen })),

    closestart: () => set({ startopen: false }),

    launchApp: (id) => set((state) => {
        playSound("/menu_command.wav");

        if (state.openApps.includes(id)) {
            return { activeApp: id, startopen: false };
        }

        return {
            openApps: [...state.openApps, id],
            activeApp: id,
            startopen: false 
        };
    }),

    closeApp: (id) => set((state) => ({
        openApps: state.openApps.filter((app) => app !== id),
        activeApp: state.activeApp === id ? null : state.activeApp
    })),

    setActiveApp: (id) => set({ activeApp: id }),

    set_pfp: (path) => set({ currentpfp: path }),

    set_username: (new_username) => set({ username: new_username }),

    triggerBsod: () => {
        playSound("/error.mp3");
        set({ isBsod: true });
    },

    reboot: () => {
        if (typeof window !== 'undefined') {
            window.location.reload();
        }
    },

    set_current_wallpaper: (new_wallpaper) => set({ current_wallpaper: new_wallpaper }),
}));