import Bottombar from "@/components/shared/BottomBar"
import LeftSidebar from "@/components/shared/LeftSidebar"
import Topbar from "@/components/shared/Topbar"
import { Outlet } from "react-router-dom"

function RootLayout() {
  return (
    <div className="grid w-full desktop:grid-cols-grid-mobile-feed grid-cols-grid-feed">
      <Topbar />
      <LeftSidebar />
      
      <section className="flex flex-1 h-full">
        <Outlet />
      </section>

      <Bottombar />
    </div>
  )
}

export default RootLayout