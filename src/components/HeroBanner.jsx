import "./HeroBanner.css";

export default function HeroCarousel() {
  return (
    <section className="hero-carousel">

      <div id="heroSlider" className="carousel slide" data-bs-ride="carousel">

        <div className="carousel-indicators">
          <button type="button" data-bs-target="#heroSlider" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#heroSlider" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#heroSlider" data-bs-slide-to="2"></button>
        </div>

        <div className="carousel-inner">

          {/* Slide 1 */}
          <div className="carousel-item active">
            <img
              src="https://thekalakart.in/cdn/shop/files/The_Dhokra_Craft_FDSF.jpg?v=1711696925&width=2000"
              className="d-block w-100 hero-img"
              alt="Perfume"
            />
            <div className="carousel-caption fade-slide">
              <h1>Unleash Your Signature Aroma</h1>
              <p>Luxury perfumes crafted to define your presence.</p>
              <button className="hero-btn">Shop Now</button>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <img
              src="https://thekalakart.in/cdn/shop/files/Kalakart_website_Desktop_Banner_new.jpg?v=1717065520&width=2000"
              className="d-block w-100 hero-img"
              alt="Perfume 2"
            />
            <div className="carousel-caption fade-slide">
              <h1>Elegance in Every Drop</h1>
              <p>Experience the art of fragrance like never before.</p>
              <button className="hero-btn">Shop Now</button>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <img
              src="https://thekalakart.in/cdn/shop/files/The_Dhokra_Craft_GRF.jpg?v=1711697664&width=2000"
              className="d-block w-100 hero-img"
              alt="Perfume 3"
            />
            <div className="carousel-caption fade-slide">
              <h1>Luxury • Class • Identity</h1>
              <p>Find the scent that speaks your story.</p>
              <button className="hero-btn">Shop Now</button>
            </div>
          </div>

        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#heroSlider" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#heroSlider" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>

      </div>

    </section>
  );
}
