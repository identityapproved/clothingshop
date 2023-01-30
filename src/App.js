import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Routes/Navigation/Navigation";
import { checkUserSession } from "./store/user/user.action";

const HomePage = lazy(() => import("./Routes/HomePage/HomePage"));
const Authentication = lazy(() =>
  import("./Routes/Authentication/Authentication")
);
const CheckoutPage = lazy(() => import("./Routes/CheckoutPage/CheckoutPage"));
const ShopPage = lazy(() => import("./Routes/ShopPage/ShopPage"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Suspense fallback="<Spinner/>">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="shop/*" element={<ShopPage />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<CheckoutPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
