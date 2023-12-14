'use client'

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ListItem, Text } from "@tremor/react";
import { ChevronDown, Dot, LucideIcon } from "lucide-react";
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react'; // Import useState
import { IconType } from "react-icons";

interface SidebarItemProps {
    icon: LucideIcon;
    label: string;
    href?: string | any;
    submenu?: { name: string; href: string, SubIcon?: IconType; }[];
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, href, submenu }) => {
    const [isSubmenuOpen, setSubmenuOpen] = useState(false); // State for submenu

    const pathname = usePathname();
    const router = useRouter();

    const isActive = (pathname === '/' && href === '/') || pathname === href || pathname?.startsWith(`${href}/`);

    const onClick = () => {
        if (href) {
            router?.push(href);
        }
    };

    const toggleSubmenu = () => {
        setSubmenuOpen(!isSubmenuOpen);
    };

    return (
        <>
            <div
                onClick={toggleSubmenu}
                className={cn(
                    'flex items-center cursor-pointer mx-0 gap-x-2 text-white text-sm font-[500] pl-6 transition-all hover:text-white hover:bg-slate-300/20',
                    isActive && "text-black bg-white hover:bg-sky-200/20 hover:text-white"
                )}
            >
                <div className="relative flex items-center w-full py-4 gap-x-2">
                    <Icon
                        size={22}
                        // className={cn('text-white', isActive && 'text-black')}
                    />
                    <p onClick={onClick}>{label}</p>
                    {submenu && (
                        <div className={`absolute right-4 transition-all ${isSubmenuOpen ? 'rotate-180' : ''}`} onClick={toggleSubmenu}>
                            <ChevronDown size={20} />
                        </div>
                    )}
                </div>
                {/* <div
                    className={cn('ml-auto opacity-0 border-2 border-[#0256D5] h-full transition-all', isActive && 'opacity-100')}
                /> */}
            </div>
            {submenu && (
                <div className={`transition-all bg-blue-500 ease-in-out duration-1000 ${isSubmenuOpen ? 'max-h-full overflow-hidden' : 'max-h-0 overflow-hidden'}`}> {/* Adjust the padding as needed */}
                    {submenu.map(({href, name, SubIcon}) => (
                        <ListItem 
                            key={href} 
                            className={cn(
                                'flex py-4 w-full items-center cursor-pointer text-gray-300 text-sm font-[500] transition-all hover:text-white hover:bg-slate-300/20',
                                // isActive && "text-white bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
                            )}
                        >
                            <div className="flex items-center w-full pl-9">
                                {SubIcon && <SubIcon className="mr-1" size={20}/>}
                                <a href={href} className="text-sm ">{name}</a>
                            </div>
                        </ListItem>
                    ))}
                </div>
            )}
        </>
    );
};

export default SidebarItem;
