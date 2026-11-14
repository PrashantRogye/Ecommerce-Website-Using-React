import { Link } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa";

import ProductCard from "../product/ProductCard";

import "./ProductSection.css";

const ProductSection = ({
    eyebrow,
    title,
    description,
    products,
    link = "/products",
}) => {
    return (
        <section className="product-section section">

            <div className="container">

                <div className="section-heading">

                    <div>
                        <span className="section-eyebrow">{eyebrow}</span>

                        <h2>{title}</h2>

                        <p>{description}</p>
                    </div>

                    <Link to={link} className="section-link">
                        View All <FaArrowRight />
                    </Link>

                </div>

                <div className="product-grid">

                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
};

export default ProductSection;