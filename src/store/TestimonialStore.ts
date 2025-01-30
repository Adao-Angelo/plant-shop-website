interface Testimonial {
  name: string;
  profession: string;
  rating: number;
  image: string;
  description: string;
}
import { create } from "zustand";

type TestimonialsStore = {
  testimonials: Testimonial[];
  addTestimonial: (testimonial: Testimonial) => void;
};

export const useTestimonialsStore = create<TestimonialsStore>((set) => ({
  testimonials: [
    {
      name: "Alex Daniel",
      profession: "Photographer",
      rating: 4.5,
      image: "/testimonials/alex-unsplash.jpg",
      description:
        "Amazing work! Alex captured the essence of our event perfectly.",
    },
    {
      name: "Charles",
      profession: "Graphic Designer",
      rating: 5,
      image: "/testimonials/charles-unsplash.jpg",
      description:
        "Charles is a true professional. He brought our vision to life with his designs.",
    },
    {
      name: "Christian Panda",
      profession: "Programmer",
      rating: 4.5,
      image: "/testimonials/christian-unsplash.jpg",
      description:
        "Reliable and efficient. Christian delivered our project on time and within budget.",
    },
    {
      name: "Michael Dam",
      profession: "Engineer",
      rating: 3.5,
      image: "/testimonials/michael-dam-unsplash.jpg",
      description:
        "Michael is a skilled engineer. He helped us solve a complex technical issue.",
    },
  ],
  addTestimonial: (testimonial: Testimonial) =>
    set((state) => ({
      testimonials: [...state.testimonials, testimonial],
    })),
}));
