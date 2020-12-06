import React from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import LatestProducts from "../components/LatestProducts";
import ExclusiveOffer from "../components/ExclusiveOffer";

const HomeScreen = () => {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
          <LatestProducts />
          <ExclusiveOffer />
    </>
  );
};

export default HomeScreen;
