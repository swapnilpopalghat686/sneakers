import { useEffect, useState } from "react";
import API from "../services/api";
import ProductCard from "../components/ProductCard";
import SearchFilter from "../components/SearchFilter";

const Home = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await API.get("/products");
    setProducts(res.data.products);
  };

  const handleSearch = async (filters) => {
    const res = await API.get(
      `/products/search?keyword=${filters.keyword}&category=${filters.category}`
    );

    setProducts(res.data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>

      <SearchFilter onSearch={handleSearch} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;