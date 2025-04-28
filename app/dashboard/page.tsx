
'use client'
import { useQuery } from '@tanstack/react-query'
import { fetchStats } from '@/app/lib/api'
import StatCard from '@/app/components/StatCard'
import Chart from '@/app/components/Chart'
import RecentActivityTable from "@/app/components/RecentActivityTable";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import ErrorAlert from "@/app/components/ErrorAlert";

export default function DashboardPage() {

    const {data: stats, isLoading, error} = useQuery({
        queryKey: ['stats'],
        queryFn: fetchStats
    })

    if (isLoading) return <LoadingSpinner />
    if (error) return <ErrorAlert message="Failed to load dashboard data" />
    if (!stats) return <ErrorAlert message="No data available" />


    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Dashboard Overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard
                    title="Total Users"
                    value={stats.totalUsers.toLocaleString()}
                    change="+12%"
                    isIncreasing={true}
                />
                <StatCard
                    title="Revenue"
                    value={`$${stats.revenue.toLocaleString()}`}
                    change="+8%"
                    isIncreasing={true}
                />
                <StatCard
                    title="Orders"
                    value={stats.orders.toLocaleString()}
                    change="-3%"
                    isIncreasing={false}
                />
                <StatCard
                    title="Conversion Rate"
                    value={`${stats.conversionRate}%`}
                    change="+0.8%"
                    isIncreasing={true}
                />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow p-4">
                    <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
                    <Chart data={stats.salesData} />
                </div>

                <div className="bg-white rounded-lg shadow p-4">
                    <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
                    <RecentActivityTable activities={stats.recentActivity} />
                </div>
            </div>
        </div>
    )
}