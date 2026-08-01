import Image from "next/image";

import Banner from "@/assets/banner1.png";

export default function HeroImage() {
  return (
    <div className="relative">
      <div className="relative h-[420px] overflow-hidden rounded-[32px] lg:h-[600px]">
        <Image
          src={Banner}
          alt="Outdoor Adventure"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Floating Card */}

      <div className="absolute bottom-6 right-6 hidden w-72 rounded-3xl bg-[#123524] p-6 text-white shadow-2xl lg:block">
        <div className="space-y-3">
          <p className="font-semibold">Trusted by 10K+</p>

          <h3 className="text-xl font-bold">Adventure Seekers</h3>

          <div className="text-yellow-400">★★★★★</div>

          <div className="flex items-center justify-between">
            <span className="font-semibold">4.8 / 5</span>

            <span className="text-sm text-white/70">Reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
}
