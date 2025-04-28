// components/RecentActivityTable.tsx
export default function RecentActivityTable() {
    // Sample data - in a real app, this would come from an API
    const activities = [
        { id: 1, user: 'John Doe', action: 'Created a new post', time: '2 hours ago' },
        { id: 2, user: 'Jane Smith', action: 'Updated profile', time: '3 hours ago' },
        { id: 3, user: 'Bob Johnson', action: 'Deleted a comment', time: '5 hours ago' },
        { id: 4, user: 'Alice Williams', action: 'Purchased Premium Plan', time: '1 day ago' },
    ]

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        User
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Action
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Time
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {activities.map((activity) => (
                    <tr key={activity.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                            {activity.user}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            {activity.action}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                            {activity.time}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}