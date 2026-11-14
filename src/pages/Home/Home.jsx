import HeroBanner from "../../components/home/HeroBanner";
import CategorySection from "../../components/home/CategorySection";
import ProductSection from "../../components/home/ProductSection";
import DealsSection from "../../components/home/DealsSection";
import BrandsSection from "../../components/home/BrandsSection";
import Newsletter from "../../components/home/Newsletter";

import products from "../../data/products";

import "./Home.css";

const Home = () => {

    const featuredProducts = products.filter(
        (product) => product.featured
    );

    const trendingProducts = products.filter(
        (product) => product.trending
    );

    const newArrivals = products.filter(
        (product) => product.newArrival
    );

    return (
        <div className="home-page">

            {/* Hero Banner */}
            <HeroBanner />

            {/* Categories */}
            <CategorySection />

            {/* Featured Products */}
            <ProductSection
                eyebrow="HANDPICKED FOR YOU"
                title="Featured Products"
                description="Discover our most popular electronics."
                products={featuredProducts}
            />

            {/* Promotional Deals */}
            <DealsSection />

            {/* Trending Products */}
            <ProductSection
                eyebrow="WHAT'S TRENDING"
                title="Trending Products"
                description="Explore the products everyone is talking about."
                products={trendingProducts}
            />

            {/* New Arrivals */}
            <ProductSection
                eyebrow="JUST ARRIVED"
                title="New Arrivals"
                description="Discover the latest additions to our collection."
                products={newArrivals}
            />

            {/* Popular Brands */}
            <BrandsSection />

            {/* Newsletter */}
            <Newsletter />

        </div>
    );
};

export default Home;