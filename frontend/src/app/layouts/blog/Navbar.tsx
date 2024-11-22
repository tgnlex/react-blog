import NavLink from "./NavLink"
import style from '@/style/modules/layout.module.css';
import { InlineList } from "@/app/styled";
function Navbar() {
  return (
    <nav className={style.navbar}>
      <InlineList className={style.navlist}>
         <NavLink href={'/blog'}>Home</NavLink>
         <NavLink href={'/blog/articles'}>Articles</NavLink>
         <NavLink href={'/blog/info'}>Info</NavLink>
         <NavLink href={'/blog/about'}>About</NavLink>
         <NavLink href={'/blog/charity'}>Charities</NavLink>
      </InlineList>
    </nav>
  )
}

export default Navbar;