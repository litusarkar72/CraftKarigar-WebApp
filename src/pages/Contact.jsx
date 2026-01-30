import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT IMAGE */}
          <div className="col-lg-6 mb-4 mb-lg-0 text-center">
            <img
              src="https://cdn.dotpe.in/longtail/item_category/9225089/6viLBZIJ.webp"
              alt="Perfume"
              className="img-fluid contact-img"
            />
          </div>

          {/* RIGHT FORM */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-4">Contact Us</h2>

            <div className="row">
              <div className="col-lg-8">

                <label>Full Name</label>
                <input type="text" className="form-control line-input" />

                <label className="mt-3">E-mail</label>
                <input type="email" className="form-control line-input" />

                <label className="mt-3">Message</label>
                <textarea className="form-control line-input" rows="3"></textarea>

                
              </div>

        
             
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
