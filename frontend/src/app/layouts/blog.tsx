import Navbar from "./blog/Navbar"
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom"
import style from '@/style/modules/layout.module.css';
function BlogLayout() {
  return (
    <>      
    <h1 style={{margin: 0, marginBottom: 3}}>[ --- --- --- # --- --- --- <Link to={'/'}>@</Link> --- --- --- # --- --- --- ]</h1>

      <Navbar />      

      <div id="outlet" className={style.outlet}>
          <Outlet />   
      </div>
    </>
  )
}
export default BlogLayout;