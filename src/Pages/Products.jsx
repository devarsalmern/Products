import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log("Fetched data:", response.data);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <h1>ProductPage</h1>
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              clickHandler={() => {
                navigate("/product-details/" + product.id);
              }}
            />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </>
  );
};

export default Products;
