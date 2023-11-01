const NavBar = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="text-white font-bold text-xl">My App</div>
                    <ul className="space-x-4 flex">
                        <li>
                            <a href="/" className="text-white">Home</a>
                        </li>
                        <li>
                            <a href="/tasklists" className="text-white">Task Lists</a>
                        </li>
                        <li>
                            <a href="/task" className="text-white">Task</a>
                        </li>

                        <li>
                            <a href="/login" className="text-white">Login</a>
                        </li>
                        <li>
                            <a href="/register" className="text-white">Register</a>
                        </li>

                    </ul>
                    <div className="space-x-2 flex">
                        <input type="text" placeholder="Search here" className="input input-bordered input-neutral w-full max-w-xs" />
                        <button className="btn btn-neutral">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar