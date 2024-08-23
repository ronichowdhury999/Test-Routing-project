import { Outlet } from "react-router-dom"
import Footer from "../Pages/Footer"
import Header from "../Pages/Header"

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className="bg-[#010313]">
        <div className="max-w-screen-xl mx-auto">
          <Outlet />
        </div>
      </div>
          <Footer />
    </div>

  )
}

export default MainLayout