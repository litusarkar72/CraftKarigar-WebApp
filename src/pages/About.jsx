import "./About.css";

export default function About() {
  return (
    <section className="about-section container py-5">
      <div className="row align-items-center">

        {/* LEFT TEXT */}
        <div className="col-lg-6 about-text">
          <h2 className="about-title">ABOUT US</h2>
          <p className="about-para">
            At Briskode Perfumes, we craft fragrances that define your identity.
            Each perfume is designed with premium notes to elevate your style 
            and leave a lasting impression.
          </p>

          <a href="/shop" className="about-btn">Shop Now</a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="col-lg-6 text-center">
          <img 
            src="https://axeo-theme.myshopify.com/cdn/shop/files/About-4_1024x1024.jpg?v=1613796405"
            alt="perfume"
            className="about-img"
          />
        </div>

      </div>
    </section>
  );
}
