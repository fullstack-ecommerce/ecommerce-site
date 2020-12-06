import React from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import LatestProducts from "../components/LatestProducts";
import ExclusiveOffer from "../components/ExclusiveOffer";
import Testimonials from "../components/Testimonials";

const HomeScreen = () => {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <LatestProducts />
      <ExclusiveOffer />
      <Testimonials />
    </>
  );
};

export default HomeScreen;
