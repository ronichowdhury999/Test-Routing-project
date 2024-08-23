import { Outlet } from "react-router-dom"
import Footer from "../Pages/Footer"
import Header from "../Pages/Header"

const MainLayout = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
        <Header/>
       <Outlet/>
       <Footer/>
    </div>

  )
}

export default MainLayout