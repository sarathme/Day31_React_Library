import NavBar from "./NavBar";
import SideBar from "./SideBar";

import ContentArea from "./ContentArea";
import AppLayout from "./AppLayout";

function App() {
  return (
    <div className="grid-container">
      <NavBar />
      <AppLayout>
        <SideBar />
        <ContentArea />
      </AppLayout>
    </div>
  );
}

export default App;
