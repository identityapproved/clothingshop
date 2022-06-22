import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/Routes/HomePage/HomePage';
import Navigation from './Components/Routes/Navigation/Navigation';
import ShopPage from './Components/Routes/ShopPage/ShopPage';
import SignInPage from './Components/Routes/SignInPage/SignInPage';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path='shop' element={<ShopPage />} />
        <Route path='sign-in' element={<SignInPage />} />
      </Route>
    </Routes>
  );
};

export default App;
