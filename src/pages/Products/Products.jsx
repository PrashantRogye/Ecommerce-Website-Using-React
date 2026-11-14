
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import ProductFilters from "../../components/product/ProductFilters";
import ProductToolbar from "../../components/product/ProductToolbar";
import ProductGrid from "../../components/product/ProductGrid";

import products from "../../data/products";
import "./Products.css";

const Products = ({ searchMode = false }) => {
    const [searchParams] = useSearchParams();

    const query = searchParams.get("q") || "";
    const categoryFromUrl = searchParams.get("category") || "All";

    const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [maxPrice, setMaxPrice] = useState(150000);
    const [minRating, setMinRating] = useState(0);
    const [sortBy, setSortBy] = useState("featured");

    // Keep the category filter in sync with homepage category links.
    useEffect(() => {
        setSelectedCategory(categoryFromUrl);
    }, [categoryFromUrl]);

    const categories = useMemo(
        () => [...new Set(products.map((product) => product.category))],
        []
    );

    const brands = useMemo(
        () => [...new Set(products.map((product) => product.brand))],
        []
    );

    const filteredProducts = useMemo(() => {
        let result = [...products];

        // Search by product name, brand or category.
        if (query.trim()) {
            const searchText = query.toLowerCase();

            result = result.filter((product) =>
                `${product.name} ${product.brand} ${product.category}`
                    .toLowerCase()
                    .includes(searchText)
            );
        }

        if (selectedCategory !== "All") {
            result = result.filter(
                (product) => product.category === selectedCategory
            );
        }

        if (selectedBrands.length > 0) {
            result = result.filter((product) =>
                selectedBrands.includes(product.brand)
            );
        }

        result = result.filter(
            (product) =>
                product.price <= maxPrice && product.rating >= minRating
        );

        // Sorting.
        switch (sortBy) {
            case "price-low":
                result.sort((a, b) => a.price - b.price);
                break;

            case "price-high":
                result.sort((a, b) => b.price - a.price);
                break;

            case "rating":
                result.sort((a, b) => b.rating - a.rating);
                break;

            case "newest":
                result.sort((a, b) => b.id - a.id);
                break;

            default:
                result.sort((a, b) => Number(b.featured) - Number(a.featured));
        }

        return result;
    }, [
        query,
        selectedCategory,
        selectedBrands,
        maxPrice,
        minRating,
        sortBy,
    ]);

    const clearFilters = () => {
        setSelectedCategory("All");
        setSelectedBrands([]);
        setMaxPrice(150000);
        setMinRating(0);
        setSortBy("featured");
    };

    return (
        <main className="products-page container section">
            <div className="products-page-heading">
                <div>
                    <span className="products-eyebrow">
                        {searchMode ? "SEARCH RESULTS" : "EXPLORE OUR COLLECTION"}
                    </span>

                    <h1>
                        {searchMode ? `Results for "${query}"` : "All Products"}
                    </h1>

                    <p>
                        Discover quality electronics for your everyday needs.
                    </p>
                </div>
            </div>

            <div className="products-layout">
                <ProductFilters
                    categories={categories}
                    brands={brands}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    selectedBrands={selectedBrands}
                    setSelectedBrands={setSelectedBrands}
                    maxPrice={maxPrice}
                    setMaxPrice={setMaxPrice}
                    minRating={minRating}
                    setMinRating={setMinRating}
                    onClear={clearFilters}
                />

                <div className="products-content">
                    <ProductToolbar
                        count={filteredProducts.length}
                        sortBy={sortBy}
                        setSortBy={setSortBy}
                    />

                    <ProductGrid products={filteredProducts} />
                </div>
            </div>
        </main>
    );
};

export default Products;
