
import ProductCard from "./ProductCard";
import "./ProductGrid.css";

const ProductGrid = ({ products }) => {
    if (products.length === 0) {
        return (
            <div className="empty-products">
                <h3>No products found</h3>
                <p>Try changing your filters or search keywords.</p>
            </div>
        );
    }

    return (
        <div className="product-grid">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductGrid;
