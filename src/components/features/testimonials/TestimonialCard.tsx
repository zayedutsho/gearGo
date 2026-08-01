import { Star } from "lucide-react";
import Image from "next/image";

type Props = {
  testimonial: any;
};

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <div className="rounded-3xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-6 flex">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star
            key={index}
            className="h-5 w-5 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      <p className="mb-8 leading-8 text-muted-foreground">
        "{testimonial.review}"
      </p>

      <div className="flex items-center gap-4">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={56}
          height={56}
          className="rounded-full"
        />

        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>

          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
