import { useState } from "react";
import { connect } from "react-redux";
import { getAuthenticationData } from "../../redux/profile/profileAction";
import styles from "./Login.module.css";
const Login = ({ getAuthenticationData }) => {
  const [nameValue, setNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <form className={styles.form}>
          <label htmlFor="name">Введите имя </label>
          <input
            type="text"
            id="name"
            value={nameValue}
            className={styles.name}
            onChange={(event) => setNameValue(event.target.value)}
          />
          <label htmlFor="passowd">Введите пароль </label>
          <input
            type="text"
            id="passowd"
            value={passwordValue}
            onChange={(event) => setPasswordValue(event.target.value)}
          />
          <button
            type="button"
            className={styles.button}
            onClick={() => getAuthenticationData(nameValue, passwordValue)}
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
getAuthenticationData
};
export default connect(null, mapDispatchToProps)(Login);
