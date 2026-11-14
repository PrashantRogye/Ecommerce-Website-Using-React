import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./SearchBar.css";

const SearchBar = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();

        const query = search.trim();

        if (!query) return;

        navigate(`/search?q=${encodeURIComponent(query)}`);
        setSearch("");
    };

    return (
        <form className="search-bar" onSubmit={handleSearch}>
            <input
                type="search"
                placeholder="Search for products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search products"
            />

            <button type="submit" aria-label="Submit search">
                <FaSearch />
            </button>
        </form>
    );
};

export default SearchBar;