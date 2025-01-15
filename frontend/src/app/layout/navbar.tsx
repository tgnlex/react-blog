import {List} from "../components/styled/lists"
import styles from "./css/navbar.module.css";
import routes from "../../library/routes";
import Link from "../components/link";
function Navbar() {
  return (
    <nav className={styles.navbar}>
      <List pad={5} inline>
        {routes.map((route) => (
          <Link href={route.href} text={route.text} />
        ))} 
      </List>
    </nav>
  )
};

export default Navbar;