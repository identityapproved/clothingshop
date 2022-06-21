import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/Routes/HomePage/HomePage';
import Navigation from './Components/Routes/Navigation/Navigation';
import ShopPage from './Components/Routes/ShopPage/ShopPage';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path='shop' element={<ShopPage />} />
      </Route>
    </Routes>
  );
};

export default App;
