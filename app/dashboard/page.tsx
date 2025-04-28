import StatCard from '@/app/components/StatCard'
import Chart from '@/app/components/Chart'
import RecentActivityTable from "@/app/components/RecentActivityTable";

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Dashboard Overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard title="Total Users" value="1,234" change="+12%" isIncreasing={true}/>
                <StatCard
                    title="Revenue"
                    value="$12,345"
                    change="+8%"
                    isIncreasing={true}
                />
                <StatCard
                    title="Orders"
                    value="567"
                    change="-3%"
                    isIncreasing={false}
                />
                <StatCard
                    title="Conversion Rate"
                    value="3.2%"
                    change="+0.8%"
                    isIncreasing={true}
                />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow p-4">
                    <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
                    <Chart/>
                </div>

                <div className="bg-white rounded-lg shadow p-4">
                    <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
                    <RecentActivityTable/>
                </div>
            </div>
        </div>
    )
}