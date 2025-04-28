import Link from 'next/link'

export default function Sidebar() {
    return(
        <div className="w-64 bg-gray-800 text-white p-4">
            <div className="text-2xl font-bold mb-8">Admin Panel</div>
                <nav>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/dashboard" className="block p-2 hover:bg-gray-700 rounded">Dashboard</Link>
                        </li>
                        <li>
                            <Link href="/users" className="block p-2 hover:bg-gray-700 rounded">Users</Link>
                        </li>
                        <li>
                            <Link href="/products" className="block p-2 hover:bg-gray-700 rounded">Products</Link>
                        </li>
                        <li>
                            <Link href="/settings" className="block p-2 hover:bg-gray-700 rounded">Settings</Link>
                        </li>
                    </ul>
                </nav>
        </div>
    )
}