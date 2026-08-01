import HeroContent from "./HeroContent";
import HeroFeatures from "./HeroFeatures";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-[#F8FAF8]">
      <div className="mx-auto max-w-[1440px] px-6 py-12 lg:px-10 lg:py-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <HeroContent />

          <HeroImage />
        </div>

        <div className="mt-16">
          <HeroFeatures />
        </div>
      </div>
    </section>
  );
}
