import { Link, Outlet, } from "react-router-dom"


const DeshboardLayout = () => {
  return (
    <div className="mt-8 flex">
      <div className="w-[20%] bg-red-400">
        <ul>
          <li><Link to={'/deshboard'}>Deshboard</Link></li>
          <li>
            <Link to={'/Deshboard/profile'}><button>Profile</button></Link>
          </li>
          <li> <Link to={'/Deshboard/profileEdit'}><button>ProfileEdit</button></Link></li>
        </ul>
      </div>
      <div className="w-[80%] bg-slate-300">
        <Outlet />
      </div>

    </div>
  )
}

export default DeshboardLayout