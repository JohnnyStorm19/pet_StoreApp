import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"

const Layout = () => {
  return (
    <div>
        <header>
            <Navbar />
        </header>
        <main className="w-full">
          <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout
