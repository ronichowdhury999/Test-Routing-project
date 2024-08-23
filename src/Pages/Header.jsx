import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header className="bg-gray-600 text-white sticky top-0 z-50">
            <nav className="p-4 h-20 flex items-center justify-between border-b-2 ">
                <h1 className="text-3xl font-serif font-bold">Roni</h1>
                <div className="flex gap-8 text-xl font-semibold">
                    <NavLink to={'/'} className={({isActive, isPending})=>isPending ? 'pending':isActive ? 'bg-gradient-to-l from-gray-300 from-10% via-sky-300 via-30% to-slate-400-400 to-90% rounded-lg py-1 px-4 duration-300' : ''}>Home</NavLink>

                    <NavLink to={'/products'}className={({isActive, isPending})=>isPending ? 'pending':isActive ? 'bg-gradient-to-l from-gray-300 from-10% via-sky-300 via-30% to-slate-400-400 to-90% rounded-lg py-1 px-4 duration-100' : ''}>Products
                    </NavLink>

                    <NavLink to={'/about'}className={({isActive, isPending})=>isPending ? 'pending':isActive ? 'bg-gradient-to-l from-gray-300 from-10% via-sky-300 via-30% to-slate-400-400 to-90% rounded-lg py-1 px-4 duration-200' : ''}>About</NavLink>

                    <NavLink to={'/deshboard'}className={({isActive, isPending})=>isPending ? 'pending':isActive ? 'bg-gradient-to-l from-gray-300 from-10% via-sky-300 via-30% to-slate-400-400 to-90% rounded-lg py-1 px-4 duration-300' : ''}>Deshboard</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header