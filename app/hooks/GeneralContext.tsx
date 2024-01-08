'use client'

import React, { useState,  createContext, useContext, useEffect } from 'react';

interface GeneralContextType {
    auth: any;
    setAuth: (value: any) => void;
    selectedSubmenuItem: any;
    setSelectedSubmenuItem: (value: string) => void;

    submenuStates: any
    setSubmenuState: any

    openSubmenu: string | null;
    setOpenSubmenu: (value: string | null) => void;
}

export const GeneralContext = createContext<GeneralContextType | undefined>(undefined);

interface GeneralContextProviderProps {
    children: React.ReactNode;
}

export const GeneralContextProvider: React.FC<GeneralContextProviderProps> = ({ children }) => {
    const [auth, setAuth] = useState();
    const [selectedSubmenuItem, setSelectedSubmenuItem] = useState<string | null>(null);

    const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
    const [submenuStoredState, setSubmenuStoredState] = useState<any>()
    const [submenuStates, setSubmenuState] = useState<any>(() => {
        // Initialize with the stored state in local storage or an empty object
        let storedState
        // if (typeof window !== 'undefined'){
            storedState = localStorage.getItem('submenuStates');
        // }
        return storedState ? JSON.parse(storedState) : {};
    });


    useEffect(() => {
        // Save the state in local storage whenever it changes
        localStorage.setItem('submenuStates', JSON.stringify(submenuStates));
        localStorage.setItem('openSubmenu', openSubmenu || '');
    }, [submenuStates, openSubmenu]);
    // console.log("SELECTED ITEM:",selectedSubmenuItem)

    // useEffect(() => {
    //     setSubmenuStoredState()
    // }, [])
    

    useEffect(() => {
        // Retrieve userData from localStorage
        const userData = localStorage.getItem('userData');
    
        // If userData exists in localStorage, setAuth accordingly
        if (userData) {
            setAuth(JSON.parse(userData));
        }
    }, []); 

    return (
        <GeneralContext.Provider 
        value={{
            auth,
            setAuth,
            selectedSubmenuItem, setSelectedSubmenuItem,
            submenuStates, setSubmenuState,
            openSubmenu,
            setOpenSubmenu,
        }}>
        {children}
        </GeneralContext.Provider>
    );
    }

    export const useGeneralContext = (): GeneralContextType => {
    const context = useContext(GeneralContext);
    
    if (!context) {
        throw new Error('useGeneralContext must be used within a GeneralContextProvider');
    }
    
    return context;
};
