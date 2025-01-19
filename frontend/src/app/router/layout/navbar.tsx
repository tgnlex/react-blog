import type { Route } from "@/library/types.tsx";
import {List} from "@/app/ui/lists"
import routes from "@/library/routes";
import Link from "@@/components/atoms/items/link";
import styles from "./css/navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <List pad={5} className={styles.list} inline>
        {routes.map((route: Route) => (
          <Link href={route.href} class={styles.link} text={route.text} />
        ))} 
      </List>
    </nav>
  )
};

export default Navbar;
