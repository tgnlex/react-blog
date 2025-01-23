import { Outlet } from "react-router";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
function Layout() {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />    
    </>
  )
};

export default Layout;