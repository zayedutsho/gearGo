import Categories from "@/components/features/categories/Categories";
import FeaturedGear from "@/components/features/featured-gear/FeaturedGear";
import Hero from "@/components/features/hero/Hero";
import HowItWorks from "@/components/features/howItWorks/HowItWorks";

const page = () => {
  return (
    <>
      <Hero></Hero>
      <Categories></Categories>
      <FeaturedGear></FeaturedGear>
      <HowItWorks></HowItWorks>
    </>
  );
};

export default page;
