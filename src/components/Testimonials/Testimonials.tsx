import { ReactSVG } from "react-svg";
import starIcon from "../../assets/icons/star.svg";
import { useTestimonialsStore } from "../../store/TestimonialStore";

export default function Testimonials() {
  const { testimonials } = useTestimonialsStore();

  return (
    <section className="mt-[11.3rem] mb-[20rem]">
      <h1 className="font-bold text-[3.2rem] w-[45.3rem]">
        What customers say about GREE<span>MIND?</span>
      </h1>
      <div className="flex gap-[4.8rem] overflow-scroll py-[5rem]">
        {testimonials.map((testimonial) => (
          <div className="bg-lightBlue rounded-[1.2rem] p-[4.8rem] min-w-[50rem]">
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
        ))}
      </div>
    </section>
  );
}
