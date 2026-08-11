import HeroContent from "./HeroContent";
import HeroFeatures from "./HeroFeatures";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      {/* Layered motifs: soft brand mesh under topographic contour rings */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-brand-mesh"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-contour opacity-70"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 py-14 lg:px-10 lg:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <HeroContent />

          <HeroImage />
        </div>

        <div className="mt-16 lg:mt-24">
          <HeroFeatures />
        </div>
      </div>
    </section>
  );
}
