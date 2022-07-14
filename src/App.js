import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Authentication from './Routes/Authentication/Authentication';
import CheckoutPage from './Routes/CheckoutPage/CheckoutPage';
import HomePage from './Routes/HomePage/HomePage';
import Navigation from './Routes/Navigation/Navigation';
import ShopPage from './Routes/ShopPage/ShopPage';
import { setCurrentUser } from './store/user/user.action';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from './utils/firebase/firebase.utils';

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }

      dispatch(setCurrentUser(user))
    });

    return unsubscribe;
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
