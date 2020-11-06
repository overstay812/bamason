import {  useState } from "react";
import { connect } from "react-redux";
import { getAuthenticationData } from "../../redux/profile/profileAction";
import styles from "./Login.module.css";
import { useHistory } from "react-router-dom";

const Login = ({ getAuthenticationData, isAuthorized }) => {
  const [nameValue, setNameValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")
  // const history = useHistory()
  

  return (
    <div className={styles.login}>
        {/* <span>Пожалуйста авторизуйтесь</span> */}
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
            className={styles.button}
            onClick={() => {
              getAuthenticationData(nameValue, passwordValue) 
            }}
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    isAuthorized : state.profileReducer.isAuthorized
  }
 }
const mapDispatchToProps = {
getAuthenticationData
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
