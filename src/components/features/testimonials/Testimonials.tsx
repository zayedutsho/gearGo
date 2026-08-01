// src/components/features/testimonials/Testimonials.tsx

import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testimonials";

const Testimonials = () => {
  return (
    <section className="bg-[#F8FAF8] py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.25em] text-[#123524]">
            Testimonials
          </p>

          <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
            Loved by outdoor adventurers
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Thousands of explorers trust GearUp for reliable rental equipment
            every season.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
