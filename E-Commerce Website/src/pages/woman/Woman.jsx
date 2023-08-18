import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/card/Card";
import CategoryCart from "../../components/categories/CategoryCart";
import FilterBox from "../../components/filter/FilterBox";
import OurBrands from "../../components/brands/OurBrands";
import ShopNow from "../../components/shopnow/ShopNow";
import IntroCard from "../../components/introcard/IntroCard";
import { motion, easeInOut } from "framer-motion";
import "./Woman.css";
import Loader from "../../components/loader/Loader";
import { filterAndSortProducts } from "../../utilities/Utility";

const category = [
  {
    id: 0,
    link_list: ["Shirts", "Sweeters", "Trousers", "Jackets", "Caps", "Socks"],
    image: "./assets/Images/girlFashion.jpg",
  },
  {
    id: 1,
    link_list: ["Shirts", "T shirts", "Trops", "Frocks", "Pents", "Shorts"],
    image: "./assets/Images/girlFashion-1.jpg",
  },
  {
    id: 2,
    link_list: ["Shirts", "Dresses", "Shimmer", "Tops", "Maxi", "Weddings"],
    image: "./assets/Images/girlFashion-2.jpg",
  },
  {
    id: 3,
    link_list: [
      "Crop Top",
      "Shirts",
      "Short",
      "Fish net socks",
      "Stockings",
      "Tie",
    ],
    image: "./assets/Images/girlFashion-3.jpg",
  },
];
const shopnow = [
  {
    id: 0,
    title: "ICONIC ICE",
    session: "Winter Collection",
    description: "upto 50% 0ff on entire stock",
    image_1: "./assets/Images/shop_3.jpg",
    image_2: "./assets/Images/shop_4.jpg",
  },
];
const womanBrand = [
  {
    id: 0,
    image: "./assets/Images/logo-3.jpg",
  },
  {
    id: 1,
    image: "./assets/Images/logo-4.jpg",
  },
];
const roueVariants = {
  initial: {
    y: "100vh",
  },
  visible: {
    y: "0vh",

    transition: {
      type: "spring",
      mass: 0.4,
      duration: 5,
      staggerChildren: 0.5,
      delayChildren: 0.3,
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const Woman = () => {
  const { data, loading, filterProduct } = useSelector(
    (state) => state.product
  );
  const filters = useSelector((state) => state.filter);
  const filteredAndSortedProducts = filterAndSortProducts(data, filters);
  const womanTreData = data.slice(0, 4);
  console.log(filterProduct);
  return (
    <motion.div
      variants={roueVariants}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <IntroCard title="WOMANS :" />
      <CategoryCart data={category} />

      <motion.div
        className="trending-product"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        <h2>Trending Product</h2>
        <div className="trending-product-body">
          {loading ? <Loader /> : <Card data={womanTreData} />}
        </div>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="allproducts-filter"
      >
        <div className="all-products">
          <h2>All Products</h2>
          <div className="allproducts-body">
            {loading ? <Loader /> : <Card data={filteredAndSortedProducts} />}
          </div>
        </div>
        <div className="filter-components">
          <FilterBox />
        </div>
      </motion.div>
      <OurBrands data={womanBrand} />
      <div className="woman-shop">
        <ShopNow data={shopnow} />
      </div>
    </motion.div>
  );
};

export default Woman;
