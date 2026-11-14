
import "./ProductToolbar.css";

const ProductToolbar = ({ count, sortBy, setSortBy }) => {
  return (
    <div className="product-toolbar">
      <p>
        Showing <strong>{count}</strong> products
      </p>

      <div className="sort-control">
        <label htmlFor="sort-products">Sort by:</label>
        <select
          id="sort-products"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Top Rated</option>
          <option value="newest">Newest First</option>
        </select>
      </div>
    </div>
  );
};

export default ProductToolbar;
