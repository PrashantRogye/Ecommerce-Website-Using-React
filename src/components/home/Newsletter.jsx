import { useState } from "react";

import "./Newsletter.css";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email.trim()) {
            setMessage("Please enter your email address.");
            return;
        }

        setMessage("Thank you for subscribing!");
        setEmail("");
    };

    return (
        <section className="newsletter-section">

            <div className="container">

                <div className="newsletter-content">

                    <div>
                        <span className="section-eyebrow">
                            STAY IN THE LOOP
                        </span>

                        <h2>Get the Latest Updates</h2>

                        <p>
                            Subscribe to our newsletter for new arrivals,
                            exclusive offers and technology updates.
                        </p>
                    </div>

                    <div className="newsletter-form-wrapper">

                        <form
                            className="newsletter-form"
                            onSubmit={handleSubmit}
                        >

                            <input
                                type="email"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setMessage("");
                                }}
                                aria-label="Email address"
                                required
                            />

                            <button type="submit">
                                Subscribe
                            </button>

                        </form>

                        {message && (
                            <p className="newsletter-message" role="status">
                                {message}
                            </p>
                        )}

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Newsletter;