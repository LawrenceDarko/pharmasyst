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
import { RiDeleteBinFill, RiDeleteBinLine, RiFileList2Fill, RiMedicineBottleFill } from "react-icons/ri";
import { MdAddCircleOutline } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { MdOutlinePeople } from "react-icons/md";
import { TbRulerMeasure } from "react-icons/tb";
import { FaCashRegister } from "react-icons/fa6";
import React from "react";

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
        submenu: [
            { name: 'POS', href: '/pos-system', SubIcon: FaCashRegister },
            { name: 'Sales Invoice', href: '/sales-invoice', SubIcon: RiFileList2Fill },
        ],
    },
    {
        icon: LuBox,
        label: 'Medicine',
        submenu: [
            { name: 'Medicine List', href: '/medicine-list', SubIcon: RiMedicineBottleFill },
            { name: 'Stock Out List', href: '/stock-out-list', SubIcon: RiFileList2Fill },
            { name: 'Supplier List', href: '/supplier-list', SubIcon: LiaIdCard },
            { name: 'Category List', href: '/category-list', SubIcon: RiDeleteBinFill },
            { name: 'Order List', href: '/order-list', SubIcon: IoMdPersonAdd },
            { name: 'Unit of Measurement', href: '/unit-of-measurement', SubIcon: MdOutlinePeople },
            { name: 'Medicine Expiry Info', href: '/expiry-info', SubIcon: IoSettingsOutline },
        ],
    },
    {
        icon: TbReportAnalytics,
        label: 'Reports',
        href: '/reports',
    },
    {
        icon: LuBarChart3,
        label: 'Stock',
        href: '/stock',
    },
    {
        icon: IoPeopleOutline,
        label: 'Customers',
        submenu: [
            { name: 'Customer List', href: '/customer-list', SubIcon: MdAddCircleOutline },
            { name: 'Customer Payments', href: '/customer-payments', SubIcon: IoMdPersonAdd },
        ],
    },
    {
        icon: IoPersonOutline,
        label: 'Purchase',
        // href: '/purchase',
        submenu: [
            { name: 'Purchase Bills', href: '/purchase-bills', SubIcon: RiDeleteBinFill },
            { name: 'Expenses', href: '/expenses', SubIcon: IoSettingsOutline },
            { name: 'Supplier Payment', href: '/supplier-payment', SubIcon: MdOutlinePeople },
        ],
    },
    {
        icon: LiaIdCard,
        label: 'Human Resource',
        submenu: [
            { name: 'Add Employee Role', href: '/add-employee-role', SubIcon: MdOutlinePeople },
            // { name: 'Add Employee', href: '/add-employee', SubIcon: IoMdPersonAdd },
            { name: 'Employee List', href: '/employee-list', SubIcon: LiaIdCard },
            { name: 'Attendance', href: '/attendance', SubIcon: MdOutlinePeople },
            { name: 'Monthly Salary', href: '/monthly-salary', SubIcon: IoSettingsOutline },
        ],
    },
    {
        icon: IoSettingsOutline,
        label: 'Settings',
        href: '/settings',
    },
];

const salesRoute: Route[] = [
    {
        icon: Home,
        label: 'Courses',
        href: '/teacher/courses',
    },
    {
        icon: TbReportAnalytics,
        label: 'Analytics',
        href: '/teacher/analytics',
    },
];



const SidebarRoutes = () => {

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
            {routes.map((route, index) => (
                <SidebarItem
                    key={route.label}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                    submenu={route.submenu}
                />
            ))}
        </div>
    )
}

// export default React.memo(SidebarRoutes)
export default SidebarRoutes
