import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>

      <p className="price">₹{product.price}</p>

      <p>Category: {product.category}</p>

      <Link to={`/product/${product._id}`}>
        <button className="view-btn">View Details</button>
      </Link>
    </div>
  );
};

export default ProductCard;