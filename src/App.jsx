import { Route, Routes } from "react-router-dom";
import Products from "./Pages/Products";
import Navbar from "./components/Navbar";
import ProductDetails from "./Pages/ProductDetails";
import Error from "./Pages/Error";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/product-details/:productId?"
          element={<ProductDetails />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
