import { create } from 'zustand'

interface useAddProductModalStoreProp {
    isOpen: boolean;
    onOpen: ()=>void;
    onClose: ()=> void;
}

const useAddProductModalStore = create<useAddProductModalStoreProp>((set) => ({
    isOpen: false,
    onOpen: () => set((state) => ({ isOpen: true })),
    onClose: () =>  set((state) => ({ isOpen: false })),
}))

export default useAddProductModalStore