import React from "react";
import { Hero } from "../../components/Hero";
import { Categories } from "../../components/Categories";
import { FeaturedProducts } from "../../components/FeaturedProducts";
import { LatestProducts } from "../../components/LatestProducts";
import { ExclusiveOffer } from "../../components/ExclusiveOffer";
import { Testimonials } from "../../components/Testimonials";
import { Brands } from "../../components/Brands";
import "./homeScreen.css";

const RenderHomeScreen = () => {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <LatestProducts />
      <ExclusiveOffer />
      <Testimonials />
      <Brands />
    </>
  );
};

export default RenderHomeScreen;
