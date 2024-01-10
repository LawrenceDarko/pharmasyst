import { create } from 'zustand'

interface useAddEmployeeModalStoreProp {
    isOpen: boolean;
    onOpen: ()=>void;
    onClose: ()=> void;
}

const useAddEmployeeModalStore = create<useAddEmployeeModalStoreProp>((set) => ({
    isOpen: false,
    onOpen: () => set((state) => ({ isOpen: true })),
    onClose: () =>  set((state) => ({ isOpen: false })),
}))

export default useAddEmployeeModalStore