import { Route } from 'react-router-dom';
import styles from './App.module.css'
import Header from './conponents/Header'
import Login from './conponents/login/Login'
import Main from './conponents/main/Main';
import Profile from './conponents/profile/Profile'
function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Route path="/login" render={() => <Login />} />
      <Route path="/profile" render={() => <Profile />} />
      <Route exact path="/" render={() => <Main />} />
    </div>
  );
}

export default App;
