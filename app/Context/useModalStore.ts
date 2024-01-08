import { create } from 'zustand'

interface useModalStoreProp {
    isOpen: boolean;
    onOpen: ()=>void;
    onClose: ()=> void;
}

const useModalStore = create<useModalStoreProp>((set) => ({
    isOpen: false,
    onOpen: () => set((state) => ({ isOpen: true })),
    onClose: () =>  set((state) => ({ isOpen: false })),
}))

export default useModalStore