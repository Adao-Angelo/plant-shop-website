import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { useState } from "react";
import Slider from "react-slick";
import { ReactSVG } from "react-svg";
import starIcon from "../../assets/icons/star.svg";
import { useTestimonialsStore } from "../../store/TestimonialStore";

export default function Testimonials() {
  const [display] = useState(true);
  const [width] = useState(100);

  const { testimonials } = useTestimonialsStore();

  const settings = {
    dots: true,
    infinite: testimonials.length > 3,
    speed: 500,
    slidesToShow: Math.min(2, testimonials.length),
    slidesToScroll: 1,
  };

  return (
    <section className="mt-[11.3rem] mb-[20rem]">
      <h1 className="font-bold text-[3.2rem] w-[45.3rem]">
        What customers say about GREE<span>MIND?</span>
      </h1>
      <div className="slider-container">
        <div
          style={{
            width: `${width}%`,
            display: display ? "block" : "none",
          }}
        >
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="px-4">
                <div className="bg-lightBlue rounded-[1.2rem] p-[4.8rem] min-w-[40rem]">
                  <p>{testimonial.description}</p>
                  <div className="flex justify-between mt-[4.5rem] items-start">
                    <div className="flex items-center gap-[1rem]">
                      <img
                        className="w-[5rem] h-[5rem] object-cover rounded-full"
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                      <div>
                        <h1 className="font-bold">{testimonial.name}</h1>
                        <p className="text-lightGray text-[1.2rem] font-medium">
                          {testimonial.profession}
                        </p>
                      </div>
                    </div>
                    <div className="font-bold flex gap-[0.5rem] items-center">
                      <ReactSVG src={starIcon}></ReactSVG>
                      <p>{testimonial.rating}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
