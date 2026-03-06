import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    const res = await API.get(`/products/${id}`);
    setProduct(res.data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>{product.name}</h1>

      <p>Price: ₹{product.price}</p>

      <p>Category: {product.category}</p>

      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;