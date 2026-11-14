import { Link } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa";

import categories from "../../data/categories";

import "./CategorySection.css";

const CategorySection = () => {
    return (
        <section className="category-section section">

            <div className="container">

                <div className="section-heading">

                    <div>
                        <span className="section-eyebrow">EXPLORE COLLECTIONS</span>
                        <h2>Shop by Categories</h2>
                        <p>Find the right technology for your lifestyle.</p>
                    </div>

                    <Link to="/categories" className="section-link">
                        View All <FaArrowRight />
                    </Link>

                </div>

                <div className="category-grid">

                    {categories.map((category) => (
                        <Link
                            to={`/products?category=${encodeURIComponent(category.name)}`}
                            className="category-card"
                            key={category.id}
                        >

                            <div className="category-image">
                                <img src={category.image} alt={category.name} loading="lazy" />
                            </div>

                            <div className="category-info">
                                <span>{category.icon}</span>

                                <div>
                                    <h3>{category.name}</h3>
                                    <p>{category.count}</p>
                                </div>

                                <FaArrowRight className="category-arrow" />
                            </div>

                        </Link>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default CategorySection;