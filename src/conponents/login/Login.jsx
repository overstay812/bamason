import {  useEffect, useState } from "react";
import { connect } from "react-redux";
import { getAuthenticationData } from "../../redux/profile/profileAction";
import styles from "./Login.module.css";
import { useHistory } from "react-router-dom";

const Login = ({ getAuthenticationData, isAuthorized }) => {
  const [nameValue, setNameValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")
  const [showToolTip, setShowTooltip] = useState(false)
  const history = useHistory()

// let redirect = () => history.push('/profile')

// useEffect(()=> redirect ,[isAuthorized])

  return (
    <div className={styles.login}>
      <span>Пожалуйста авторизуйтесь</span> 
      <div className={styles.container}>
        <form className={styles.form} onSubmit={event => event.preventDefault() }>
          <label htmlFor="name">Введите имя </label>
          <input
            type="text"
            id="name"
            value={nameValue}
            className={styles.name}
            onChange={(event) => setNameValue(event.target.value)}
          />
          <label htmlFor="password">Введите пароль </label>
          <input
            type="password"
            id="password"
            value={passwordValue}
            onChange={(event) => setPasswordValue(event.target.value)}
          />
          
          <button
            className={styles.button}
            onClick={() => {
              getAuthenticationData(nameValue, passwordValue); 
              isAuthorized? setShowTooltip(false) : setShowTooltip(true)
            }}
          >
            Войти
          </button>
        </form>
      </div>

      {showToolTip && <div className={styles.tooltip}> 
                         <span>Имя пользователя или пароль введены неверно</span>
                     </div>  }
      
       
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
