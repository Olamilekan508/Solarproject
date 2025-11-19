import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import { testimonial } from "../../data"; // Ensure this exports an array
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";

const Testimonial = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section id="testimonial">
      <div className="container">
        <h1 className="title">
          Clients <span className="g-text">Testimonies</span>
        </h1>

        {testimonial && testimonial.length > 0 ? (
          <Slider {...settings} className="client_container">
            {testimonial.map((item, index) => (
              <div key={item.id || index} className="testimonial_item">
                <div className="stars_container">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <p className="text_muted content">"{item.review}"</p>

                <div className="user_row">
                  <div className="profile">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      onError={(e) => (e.target.style.display = "none")}
                    />
                  </div>

                  <div className="details">
                    <h3 className="name">{item.name}</h3>
                    <small>{item.position || "CEO of Benvix"}</small>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <p className="no-testimonial">No testimonials available.</p>
        )}
      </div>
    </section>
  );
};

export default Testimonial;
