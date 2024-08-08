"use client"

import Link from "next/link";

const menuItems = [
    {title: "Spaces", path: "/spaces"},
    {title: "Quizzes", path: "/quizzes"},
    {title: "Logout", path: "/logout"}
]

export default function Navbar() {
    return (
        <nav className="bg-white w-full border-b md:border-0">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <Link href="/">
                        <h1 className="text-3xl font-bold text-orange-600">AcuVault</h1>
                    </Link>
                    <div className="md:hidden">
                        {/* add menu icon here */}
                    </div>
                    <div
                        className="flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0"
                    >
                        <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            {menuItems.map((item, idx) => (
                                <li key={idx} className="text-gray-600 hover:text-orange-600">
                                    <Link href={item.path}>{item.title}</Link>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </div>

        </nav>
    )
}
