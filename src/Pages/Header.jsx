import { useRef, useState } from "react"
import { MdOutlineClose } from "react-icons/md";
import { NavLink } from "react-router-dom"

const Header = () => {
    const [show, setShow] = useState(false);
    const ref =useRef()
    const hendelClick =(e)=>{
      if(e.target.contains(ref.current)){
        setShow(false)
      }
    }
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
                    <div onClick={() => setShow(true)} className="md:hidden w-8 h-8 space-y-2 flex flex-col justify-center items-center cursor-pointer group overflow-hidden">
                        <span className="w-full h-[2px] bg-white inline-flex transform translate-x-3 group-hover:translate-x-2 transition-all duration-300"></span>
                        <span className="w-full h-[2px] bg-white  inline-flex transform translate-x-4 group-hover:translate-x-0 transition-all duration-300"></span>
                        <span className="w-full h-[2px] bg-white inline-flex transform translate-x-3 group-hover:translate-x-2 transition-all duration-300"></span>

                    </div>
                    {show && (
                        <div ref={(node)=> (ref.current = node) } onClick={hendelClick}
                            className="absolute md:hidden top-0 right-0 w-full h-screen bg-black/50 flex flex-col items-end">
                            <div className="w-[80%] h-full overflow-y-scroll bg-[#010313] flex flex-col items-center py-10 relative">

                            </div>
                            <MdOutlineClose onClick={() => setShow(false)} className="text-3xl hover:text-red-600 text-green-400 absolute top-4 right-4" />
                            <div className="absolute top-20 right-40 space-y-6">
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
                        </div>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Header