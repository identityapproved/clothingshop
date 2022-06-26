import { Route, Routes } from 'react-router-dom';
import Authentication from './Routes/Authentication/Authentication';
import HomePage from './Routes/HomePage/HomePage';
import Navigation from './Routes/Navigation/Navigation';
import ShopPage from './Routes/ShopPage/ShopPage';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path='shop' element={<ShopPage />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
