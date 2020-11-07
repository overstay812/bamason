import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import styles from './App.module.css'
import Books from './conponents/books/Books';
import Header from './conponents/Header'
import Login from './conponents/login/Login'
import Main from './conponents/main/Main';
import Profile from './conponents/profile/Profile'
function App({ booksArray, isAuthorized }) {
  return (
    <div className={styles.container}>
      <Header />
      {/* <Route exact path="/" render={() => <Main />} /> */}
      <Route exact path="/" component={Main} />
      <Route path="/books" render={() => <Books booksArray={booksArray} />} />
      <Route path="/login" component={Login}>
        {isAuthorized ? <Redirect to="/profile" /> : <Login />}
      </Route>
      <Route path="/profile" component={Profile} />
    </div>
  );
}
const mapStateToProps = state => {
  return {
    booksArray: state.booksReducer.booksArray,
    isAuthorized: state.profileReducer.isAuthorized
  }
}
export default connect(mapStateToProps)(App)
