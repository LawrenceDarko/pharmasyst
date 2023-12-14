// import NavbarRoutes from "@/components/navbar-routes"
import { Search, UserCircle } from "lucide-react"
import { MobileSidebar } from "./mobile-sidebar"

// import MobileSidebar from "./mobile-sidebar"

export const Navbar = () => {
    return (
        <div className="flex items-center h-full p-3 bg-white border-b shadow-sm">
            <MobileSidebar />
            <div className="relative items-center justify-center hidden w-full md:flex">
                <div className="w-[358px] px-2 items-center justify-between flex border-gray-300 border rounded-md overflow-hidden">
                    <input type="text" className="p-1 text-gray-300 w-[350px] outline-none" placeholder="Search by patient name"/>
                    <Search size='20px' className="text-gray-400"/>
                </div>
                <div className="absolute right-3">
                    <UserCircle />
                </div>
            </div>
        </div>
    )
}