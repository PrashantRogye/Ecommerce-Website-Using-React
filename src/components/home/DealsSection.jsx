import { Link } from "react-router-dom";

import { FaArrowRight, FaBolt } from "react-icons/fa";

import "./DealsSection.css";

const DealsSection = () => {
    return (
        <section className="deals-section">

            <div className="container">

                <div className="deals-banner">

                    <div className="deals-content">

                        <span className="deals-tag">
                            <FaBolt /> LIMITED TIME OFFER
                        </span>

                        <h2>
                            Upgrade Your Setup.
                            <br />
                            Save More.
                        </h2>

                        <p>
                            Discover exciting deals on selected electronics
                            and bring home your favourite technology.
                        </p>

                        <Link to="/products" className="deals-button">
                            Explore Deals <FaArrowRight />
                        </Link>

                    </div>

                    <div className="deals-image">
                        <img
                            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900"
                            alt="Premium wireless headphones"
                            loading="lazy"
                        />
                    </div>

                    <div className="deals-discount">
                        <span>UP TO</span>
                        <h3>40%</h3>
                        <span>OFF</span>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default DealsSection;