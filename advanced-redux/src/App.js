import { ReactReduxContext, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { Provider } from 'react-redux/es';
import { store } from './store';

function App() {
  const showCart = useSelector(state => state.isShowing);

  return (
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
  );
}

export default App;
