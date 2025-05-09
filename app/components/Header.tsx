export default function Header() {
    return (
        <header className="bg-white shadow p-4 flex justify-between items-center">
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <div className="flex items-center space-x-4">
                <button className="p-2 rounded-full bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
                </button>
                <div className="flex items-center">
                    <img
                        src="https://via.placeholder.com/40"
                        alt="User"
                        className="h-8 w-8 rounded-full"
                    />
                    <span className="ml-2">Admin User</span>
                </div>
            </div>
        </header>
    )
}