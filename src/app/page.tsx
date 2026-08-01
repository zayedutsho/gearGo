import Categories from "@/components/features/categories/Categories";
import FeaturedGear from "@/components/features/featured-gear/FeaturedGear";
import Hero from "@/components/features/hero/Hero";

const page = () => {
  return (
    <>
      <Hero></Hero>
      <Categories></Categories>
      <FeaturedGear></FeaturedGear>
    </>
  );
};

export default page;
