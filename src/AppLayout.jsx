import { Outlet } from "react-router-dom";

import NavBar from "./NavBar";
import SideBar from "./SideBar";
import ContentArea from "./ContentArea";
import Footer from "./ui/Footer";

function AppLayout() {
  return (
    <>
      <NavBar />
      <main className="sidebar-layout">
        <SideBar />
        <ContentArea>
          <Outlet />
        </ContentArea>
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
