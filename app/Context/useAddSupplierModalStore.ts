import { create } from 'zustand'

interface useAddSupplierModalStoreProp {
    isOpen: boolean;
    onOpen: ()=>void;
    onClose: ()=> void;
}

const useAddSupplierModalStore = create<useAddSupplierModalStoreProp>((set) => ({
    isOpen: false,
    onOpen: () => set((state) => ({ isOpen: true })),
    onClose: () =>  set((state) => ({ isOpen: false })),
}))

export default useAddSupplierModalStore