import { Link } from "react-router-dom";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.nawbar}>
        <Link to="/">Главная</Link>
        <Link to="/books">Книги</Link>
      </div>
      <div className={styles.toolbar}>
        <Link to="/login">Log in</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </header>
  );
};

export default Header;
