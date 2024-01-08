import Sidebar from '../Components/Navigations/sidebar'
import { Navbar } from '../Components/Navigations/navbar'
import SalesInvoiceModal from '../Components/Modal/SalesInvoiceModal'
// import AllModals from '../Components/Modal/AllModals'



export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div lang="en">
        <SalesInvoiceModal />
        <div className="h-full">
            <div className="h-[65px] md:pl-56 fixed inset-y-0 w-full z-20">
                <Navbar />
            </div>
            <div className="fixed inset-y-0 z-20 flex-col hidden w-56 h-full md:flex">
                <Sidebar />
            </div>
            <main className="h-full pt-[65px] md:pl-56">
                {children}
            </main>
        </div>
        </div>
    )
}
