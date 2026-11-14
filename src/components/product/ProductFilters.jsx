
import "./ProductFilters.css";

const ProductFilters = ({
    categories,
    brands,
    selectedCategory,
    setSelectedCategory,
    selectedBrands,
    setSelectedBrands,
    maxPrice,
    setMaxPrice,
    minRating,
    setMinRating,
    onClear,
}) => {
    const handleBrandChange = (brand) => {
        setSelectedBrands((previous) =>
            previous.includes(brand)
                ? previous.filter((item) => item !== brand)
                : [...previous, brand]
        );
    };

    return (
        <aside className="product-filters">
            <div className="filter-heading">
                <h3>Filters</h3>
                <button type="button" onClick={onClear}>Clear All</button>
            </div>

            <div className="filter-group">
                <h4>Category</h4>
                <label>
                    <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === "All"}
                        onChange={() => setSelectedCategory("All")}
                    />
                    All Products
                </label>

                {categories.map((category) => (
                    <label key={category}>
                        <input
                            type="radio"
                            name="category"
                            checked={selectedCategory === category}
                            onChange={() => setSelectedCategory(category)}
                        />
                        {category}
                    </label>
                ))}
            </div>

            <div className="filter-group">
                <h4>Brand</h4>
                {brands.map((brand) => (
                    <label key={brand}>
                        <input
                            type="checkbox"
                            checked={selectedBrands.includes(brand)}
                            onChange={() => handleBrandChange(brand)}
                        />
                        {brand}
                    </label>
                ))}
            </div>

            <div className="filter-group">
                <h4>Maximum Price</h4>
                <input
                    className="price-slider"
                    type="range"
                    min="0"
                    max="150000"
                    step="1000"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
                <div className="price-range">
                    <span>₹0</span>
                    <strong>₹{maxPrice.toLocaleString("en-IN")}</strong>
                </div>
            </div>

            <div className="filter-group">
                <h4>Minimum Rating</h4>
                <select
                    value={minRating}
                    onChange={(e) => setMinRating(Number(e.target.value))}
                >
                    <option value="0">All Ratings</option>
                    <option value="3">3★ & above</option>
                    <option value="4">4★ & above</option>
                    <option value="4.5">4.5★ & above</option>
                </select>
            </div>
        </aside>
    );
};

export default ProductFilters;
