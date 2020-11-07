import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
const Header = ({ isAuthorized }) => {
  return (
    <header className={styles.header}>
      <div className={styles.nawbar}>
        <Link to="/">Главная</Link>
        <Link to={isAuthorized ? "/books" : "/login"}>Список книг</Link>
      </div>
      <div className={styles.toolbar}>
        <Link to={isAuthorized ? "/profile" : "/login"}>Авторизация</Link>
        <Link to={isAuthorized ? "/profile" : "/login"}>Профиль</Link>
      </div>
    </header>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuthorized: state.profileReducer.isAuthorized,
  };
};
export default connect(mapStateToProps)(Header);
