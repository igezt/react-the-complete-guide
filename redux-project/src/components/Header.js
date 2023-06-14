import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { authActions } from '../store';

const Header = () => {


  const isLoggedIn = useSelector(state => state.auth.loggedIn);
  const dispatch = useDispatch();
  const logoutHandler = (e) => {
    e.preventDefault();

    dispatch(authActions.logout());
  }
  console.log(isLoggedIn);

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isLoggedIn &&
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
      }
    </header>
  );
};

export default Header;
