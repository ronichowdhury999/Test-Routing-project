import { Outlet,useNavigation } from "react-router-dom"
import Footer from "../Pages/Footer"
import Header from "../Pages/Header"

const MainLayout = () => {
  const navigation = useNavigation()
  return (
    <div>
      <Header />
      <div className="bg-[#010313]">
        <div className="max-w-screen-xl mx-auto">
          {
            navigation.state === 'loading' ? <div className="flex justify-center items-center py-20"><span className="loading loading-spinner text-warning w-[50px]"></span></div>
            :
            <Outlet /> 

          }
        </div>
      </div>
          <Footer />
    </div>

  )
}

export default MainLayout