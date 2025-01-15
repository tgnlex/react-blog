import styles from "./layout.module.css";
interface LayoutProps {
  children?: any;
}

function Layout(props: LayoutProps) {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.heading}>React Blog</h1>
      </header>
      {props.children}
    </>
  )
};

export default Layout;