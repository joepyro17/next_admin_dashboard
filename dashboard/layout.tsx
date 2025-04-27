import Sidebar from '@/components/Sidebar'

export default function DashboardLayout({children}:{children:React.ReactNode}){
    return(
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 overflow-auto">
                <main className="p-4">{children}</main>
            </div>
        </div>
    )
}