import Sidebar from '@/app/components/Sidebar'
import Header from '@/app/components/Header'

export default function DashboardLayout({children}:{children:React.ReactNode}){
    return(
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 overflow-auto">
                <Header />
                <main className="p-4">{children}</main>
            </div>
        </div>
    )
}