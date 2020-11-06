import styles from "./Login.module.css";
const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <form className={styles.form}>
          <label htmlFor="name">Введите имя </label>
          <input type="text" id="name" className={styles.name} />
          <label htmlFor="passowd">Введите пароль </label>
          <input type="text" id="passowd" />
          <button type="button" className={styles.button}>
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
