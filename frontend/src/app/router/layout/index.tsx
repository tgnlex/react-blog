import { Outlet } from "react-router";
import Header from "./header";
import Navbar from "./navbar";

function Layout() {
  return (
    <>
      <Header />
      <Navbar />
      <div id="outlet">
        <Outlet />
      </div>
    </>
  )
};

export default Layout;