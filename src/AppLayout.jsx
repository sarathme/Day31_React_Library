import { Outlet } from "react-router-dom";

import NavBar from "./NavBar";
import SideBar from "./SideBar";
import ContentArea from "./ContentArea";

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
      <footer className="footer bg-accent full-width">dd</footer>
    </>
  );
}

export default AppLayout;
