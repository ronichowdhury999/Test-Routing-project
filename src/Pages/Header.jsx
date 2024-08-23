import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header className="bg-[#010313] sticky top-0 z-50">
            <div className="mx-8 text-white shadow-lg ">
                <nav className="lg:p-4 lg:space-x-0 space-x-10 h-20 flex items-center justify-between">
                    <div>
                        <h1 className="lg:text-3xl text-xl font-serif font-bold">Roni</h1>
                    </div>
                    <div className="hidden lg:flex md:flex lg:gap-10 md:gap-8 gap-4 lg:text-xl text-xs font-serif tracking-wide font-semibold ">
                        <div className="hover:text-blue-800">
                            <NavLink to={'/'} className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'border-b-2  border-blue-600' : ''}>Home</NavLink>
                        </div>

                        <div className="hover:text-blue-800">
                            <NavLink to={'/products'} className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'border-b-2 border-blue-600' : ''}>Products
                            </NavLink>
                        </div>

                        <div className="hover:text-blue-800">
                            <NavLink to={'/about'} className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'border-b-2 border-blue-600' : ''}>About</NavLink>
                        </div>

                        <div className="hover:text-blue-800">
                            <NavLink to={'/deshboard'} className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'border-b-2 border-blue-600' : ''}>Deshboard</NavLink>
                        </div>
                        <div className="hover:text-blue-800">
                            <NavLink to={'https://github.com/ronichowdhury999/'} target={'blank'} className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'border-b-2 border-blue-600' : ''}>GitHub</NavLink>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header