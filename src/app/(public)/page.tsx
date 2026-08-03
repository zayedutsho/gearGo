import Categories from "@/components/features/categories/Categories";
import FeaturedGear from "@/components/features/featured-gear/FeaturedGear";
import Hero from "@/components/features/hero/Hero";
import HowItWorks from "@/components/features/howItWorks/HowItWorks";
import WhyUs from "@/components/features/why-us/WhyUs";
import Footer from "@/components/shared/footer/Footer";

export default function Page() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedGear />
      <HowItWorks />
      <WhyUs></WhyUs>
      <Footer></Footer>
    </>
  );
}
