import { Link } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa";

import "./HeroBanner.css";

const HeroBanner = () => {
    return (
        <section className="hero-section">

            <div className="container">

                <div className="hero-banner">

                    <div className="hero-content">

                        <span className="hero-tag">
                            THE FUTURE OF TECHNOLOGY
                        </span>

                        <h1>
                            Upgrade Your
                            <br />
                            <span>Everyday Life.</span>
                        </h1>

                        <p>
                            Discover premium electronics, innovative gadgets
                            and technology designed to make life better.
                        </p>

                        <div className="hero-actions">

                            <Link to="/products" className="hero-primary-btn">
                                Explore Products <FaArrowRight />
                            </Link>

                            <Link to="/categories" className="hero-secondary-btn">
                                Browse Categories
                            </Link>

                        </div>

                        <div className="hero-stats">

                            <div>
                                <h3>500+</h3>
                                <span>Products</span>
                            </div>

                            <div>
                                <h3>50+</h3>
                                <span>Top Brands</span>
                            </div>

                            <div>
                                <h3>10K+</h3>
                                <span>Customers</span>
                            </div>

                        </div>

                    </div>

                    <div className="hero-image">

                        <img
                            src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1000"
                            alt="Premium electronics collection"
                        />

                        <div className="hero-floating-card">
                            <span>Special Collection</span>
                            <h3>Technology Meets Style</h3>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default HeroBanner;