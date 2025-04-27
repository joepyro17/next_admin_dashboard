import Link from 'next/link'

export default function Sidebar() {
    return(
        <div>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link href="/">Dashboard</Link>
                        </li>
                        <li>
                            <Link href="/about">Users</Link>
                        </li>
                        <li>
                            <Link href="/about">Products</Link>
                        </li>
                        <li>
                            <Link href="/about">Setting</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}