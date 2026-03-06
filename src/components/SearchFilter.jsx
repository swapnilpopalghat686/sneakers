import { useState } from "react";

const SearchFilter = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSearch({
      keyword,
      category,
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search product..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">All</option>
        <option value="mobile">Mobile</option>
        <option value="shoes">Shoes</option>
      </select>

      <button type="submit">Search</button>
    </form>
  );
};

export default SearchFilter;