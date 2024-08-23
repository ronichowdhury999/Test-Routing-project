import { NavLink, Outlet, } from "react-router-dom"


const DeshboardLayout = () => {
  return (
    <div className="flex gap-2 h-screen">
      <div className="lg:w-[20%] w-[30%] bg-[#12091e] p-2 shadow-lg ">
        <ul className="space-y-4 text-xs tracking-wide font-serif font-semibold text-white">
          <li>
            <NavLink to={'/deshboard'}
            className={({isActive,isPending})=>isPending ? 'pending' :isActive ? 'border-b-4 border-white hover:text-purple-700':''}
            > <button>Deshboard</button></NavLink>
          </li>
          <li className="hover:text-purple-700">
            <NavLink className={({isActive,isPending})=> isPending ? 'pending':isActive ? 'border-b-2 border-blue-600 text-blue-600': ''} to={'/Deshboard/profile'}><button>Profile</button></NavLink>
          </li>
          <li className="hover:text-purple-700"> <NavLink className={({isActive,isPending})=>isPending ? 'pending':isActive ? 'border-b-2 border-b-blue-600 text-blue-600': ''} to={'/Deshboard/profileEdit'}><button>ProfileEdit</button></NavLink></li>
        </ul>
      </div>
      <div className="lg:w-[80%] w-[70%] bg-[#180325] px-2 text-white">
        <Outlet />
      </div>

    </div>
  )
}

export default DeshboardLayout