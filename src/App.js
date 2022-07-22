import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Authentication from './Routes/Authentication/Authentication';
import CheckoutPage from './Routes/CheckoutPage/CheckoutPage';
import HomePage from './Routes/HomePage/HomePage';
import Navigation from './Routes/Navigation/Navigation';
import ShopPage from './Routes/ShopPage/ShopPage';
import { checkUserSession } from './store/user/user.action';

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path='shop/*' element={<ShopPage />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<CheckoutPage />} />
      </Route>
    </Routes>
  );
};

export default App;
