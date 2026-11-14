import brands from "../../data/brands";

import "./BrandsSection.css";

const BrandsSection = () => {
  return (
    <section className="brands-section section">

      <div className="container">

        <div className="section-heading">
          <div>
            <span className="section-eyebrow">OUR PARTNERS</span>
            <h2>Shop Your Favourite Brands</h2>
            <p>Explore technology from leading global brands.</p>
          </div>
        </div>

        <div className="brands-grid">

          {brands.map((brand) => (
            <div className="brand-card" key={brand}>
              <span>{brand}</span>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default BrandsSection;