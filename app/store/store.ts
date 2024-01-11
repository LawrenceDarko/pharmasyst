// store.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set) => ({
      isSubmenuOpen: false,
      toggleSubmenu: () => set((state: any) => ({ isSubmenuOpen: !state.isSubmenuOpen })),
    }),
    {
      name: 'app-state', // key for localStorage
    }
  )
);

export default useStore;
