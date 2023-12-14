'use client'

import { LucideIcon, Calendar, Compass, List, BarChart, User2, ListChecks, File, FileBarChart, User2Icon, Home } from "lucide-react";
import SidebarItem from "./sidebar-item";
import { usePathname } from "next/navigation";

// Icons
import { LuBox } from "react-icons/lu";
import { LiaIdCard } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { BsBarChartLine } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";
import { GiMedicines } from "react-icons/gi";
import { IconType } from "react-icons";
import { LuBarChart3 } from "react-icons/lu";

// Submenu Icons
import { TfiBarChartAlt } from "react-icons/tfi";
import { BsFileText } from "react-icons/bs";
import { CiCircleList } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdAddCircleOutline } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { MdOutlinePeople } from "react-icons/md";

interface Route {
    icon: LucideIcon;
    label: string;
    href?: string;
    submenu?: { name: string; href: string, SubIcon?: IconType }[];
}

const superAdmin: Route[] = [
    {
        icon: Home,
        label: 'Dashboard',
        href: '/dashboard',
    },
    {
        icon: GiMedicines,
        label: 'Sales',
        // href: '/sales',
        submenu: [
            { name: 'POS', href: '/pos-system', SubIcon: IoSettingsOutline },
            { name: 'Sales Invoice', href: '/sales-invoice', SubIcon: TfiBarChartAlt },
        ]
    },
    {
        icon: LuBox,
        label: 'Drugs',
        // href: '/searchh',
        submenu: [
            { name: 'Drug List', href: '/scheduled', SubIcon: IoSettingsOutline },
            { name: 'Stock Out List', href: '/scheduled', SubIcon: TfiBarChartAlt },
            { name: 'Supplier List', href: '/scheduled', SubIcon: BsFileText },
            { name: 'Category List', href: '/scheduled', SubIcon: CiCircleList },
            { name: 'Order List', href: '/scheduled', SubIcon: CiCircleList },
            { name: 'Drug Expiry Info', href: '/scheduled', SubIcon: RiDeleteBinLine },
        ]
    },
    {
        icon: TbReportAnalytics,
        label: 'Reports',
        href: '/users'
    },
    {
        icon: LuBarChart3,
        label: 'Stock',
        href: '/users'
    },
    {
        icon: IoPeopleOutline,
        label: 'Customers',
        href: '/users'
    },
    {
        icon: IoPersonOutline,
        label: 'Manufacturer',
        href: '/users'
    },
    {
        icon: LiaIdCard,
        label: 'Employee',
        href: '/users',
        submenu: [
            { name: 'Add Employee Role', href: '/All', SubIcon: MdAddCircleOutline },
            { name: 'Add Employee', href: '/scheduled', SubIcon: IoMdPersonAdd },
            { name: 'Employee List', href: '/waiting', SubIcon: MdOutlinePeople },
        ]
    },
    {
        icon: IoSettingsOutline,
        label: 'Settings',
        href: '/users'
    }
]

const salesRoute: Route[] = [
    {
        icon: List,
        label: 'Courses',
        href: '/teacher/courses'
    },
    {
        icon: BarChart,
        label: 'Analytics',
        href: '/teacher/analytics'
    },
]



export const SidebarRoutes = () => {

    const determineUserRole = (): string => {
        const userRoles = ['Receptionist', 'Radiographer', 'Reporting Staff', 'Cashier'];
        
        return userRoles[0];
    };
    // const pathname = usePathname();
    const userRole = determineUserRole();

    let routes: Route[] = [];

    // Role-based routing logic
    switch (userRole) {
        case 'Receptionist':
        // case 'Radiographer':
        // case 'Reporting Staff':
        // case 'Cashier':
            routes = superAdmin;
            break;
        case 'Cashier':
            routes = salesRoute;
            break;
        // Add more cases for other roles if needed
        default:
            break;
    }

    return (
        <div className="flex flex-col w-full">
            {routes.map((route) => (
                <SidebarItem
                    key={route.href}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                    submenu={route.submenu}
                />
            ))}
        </div>
    )
}
