import { Outlet } from "react-router-dom";
import ContentArea from "./ContentArea";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

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
    </>
  );
}

export default AppLayout;
