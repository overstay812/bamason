import styles from './App.module.css'
import Header from './conponents/Header'
import Login from './conponents/login/Login'
function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Login/>
    </div>
  );
}

export default App;
