import { ShieldCheck, Star } from "lucide-react";
import Image from "next/image";

import Banner from "@/assets/banner1.png";

export default function HeroImage() {
  return (
    <div className="relative">
      {/* Offset outline adds depth without a second image */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-5 -right-5 hidden size-full rounded-[36px] border border-brand-ink/15 lg:block"
      />

      <div className="relative h-[420px] overflow-hidden rounded-[32px] shadow-2xl shadow-brand/25 ring-1 ring-black/5 lg:h-[600px]">
        <Image
          src={Banner}
          alt="Outdoor Adventure"
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-brand/50 via-brand/5 to-transparent" />
      </div>

      {/* Glass trust chip */}
      <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3.5 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-md">
        <ShieldCheck className="size-4" />
        Verified providers
      </div>

      {/* Floating rating card */}
      <div className="absolute bottom-6 right-6 hidden w-72 rounded-3xl border border-white/10 bg-brand/95 p-6 text-white shadow-2xl backdrop-blur-xl lg:block">
        <div className="space-y-3">
          <p className="text-sm font-medium text-brand-accent">
            Trusted by 10K+
          </p>

          <h3 className="text-xl font-bold tracking-tight">
            Adventure Seekers
          </h3>

          <div className="flex gap-0.5" aria-label="Rated 4.8 out of 5">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                aria-hidden
                className="size-4 fill-amber-400 text-amber-400"
              />
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-white/10 pt-3">
            <span className="text-lg font-semibold">4.8 / 5</span>

            <span className="text-sm text-white/60">2.4k reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
}
