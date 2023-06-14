import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './store';
import UserProfile from './components/UserProfile';

function App() {

  const isLoggedIn = useSelector(state => state.auth.loggedIn);
  
  return (
    <Fragment>
      <Header />
      {!isLoggedIn ? (
        <Auth/>
      ) : (
        <UserProfile/>
      )}
      <Counter />
    </Fragment>
  );
}

export default App;
