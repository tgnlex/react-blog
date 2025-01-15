import styles from "./css/header.module.css";


const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>React Blog</h1>
    </header>   
  )
};

export default Header;