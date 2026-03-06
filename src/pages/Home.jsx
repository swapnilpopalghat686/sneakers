import { useEffect, useState } from "react";
import API from "../services/api";
import ProductCard from "../components/ProductCard";
import SearchFilter from "../components/SearchFilter";
// import "./home.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await API.get("/products");
    setProducts(res.data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Sneakers Collection</h1>

      <SearchFilter />

      <div className="grid-container">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;