import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product-details/${product.id}`}>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>
          <strong>${product.price}</strong>
        </p>
      </Link>
    </div>
  );
};

export default ProductCard;
