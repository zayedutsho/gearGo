import { ArrowRight, BadgeCheck, ShieldCheck, Tent, Trees } from "lucide-react";

export default function AuthContent() {
  return (
    <div className="flex h-full w-full flex-col justify-between p-16 text-white">
      {/* Top section */}
      <div>
        {/* Logo */}
        <div className="mb-16 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
            <Tent className="h-6 w-6" />
          </div>
          <span className="text-3xl font-bold">GearUp</span>
        </div>

        {/* Headline */}
        <h1 className="max-w-lg text-6xl font-black leading-none">
          Gear Up.
          <br />
          Adventure Out.
        </h1>

        {/* Subtext */}
        <p className="mt-8 max-w-lg text-lg leading-8 text-white/75">
          Rent premium outdoor equipment for camping, trekking, hiking and every
          adventure in between.
        </p>
      </div>

      {/* Features */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <ShieldCheck className="text-emerald-300" />
          <span>Verified Equipment</span>
        </div>

        <div className="flex items-center gap-3">
          <Trees className="text-emerald-300" />
          <span>Flexible Rental Plans</span>
        </div>

        <div className="flex items-center gap-3">
          <BadgeCheck className="text-emerald-300" />
          <span>Trusted by Outdoor Enthusiasts</span>
        </div>

        <div className="flex items-center gap-3">
          <ArrowRight className="text-emerald-300" />
          <span>Book in Minutes</span>
        </div>
      </div>
    </div>
  );
}
