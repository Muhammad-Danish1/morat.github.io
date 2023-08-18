import React from "react";
import "./Man.css";
import { useSelector } from "react-redux";
import Card from "../../components/card/Card";
import CategoryCart from "../../components/categories/CategoryCart";
import FilterBox from "../../components/filter/FilterBox";
import OurBrands from "../../components/brands/OurBrands";
import ShopNow from "../../components/shopnow/ShopNow";
import IntroCard from "../../components/introcard/IntroCard";
import Fashions from "../../components/fashions/Fashions";
import { motion } from "framer-motion";
import Loader from "../../components/loader/Loader";

const category = [
  {
    id: 0,
    link_list: ["Shirts", "Sweeters", "Trousers", "Jackets", "Caps", "Socks"],
    image: "./assets/Images/manFashion.jpg",
  },
  {
    id: 1,
    link_list: ["Shirts", "T shirts", "Trops", "Frocks", "Pents", "Shorts"],
    image: "./assets/Images/manFashion-1.jpg",
  },
  {
    id: 2,
    link_list: ["Shirts", "Dresses", "Shimmer", "Tops", "Maxi", "Weddings"],
    image: "./assets/Images/manFashion-2.jpg",
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
    image: "./assets/Images/manFashion-3.jpg",
  },
];
const shopnow = [
  {
    id: 0,
    title: "WHITE",
    session: "New Collection",
    description: "upto 50% 0ff on entire stock",
    image_1: "./assets/Images/shop_5.jpg",
    image_2: "./assets/Images/shop_6.jpg",
  },
];
const manBrand = [
  {
    id: 0,
    image: "./assets/Images/logo-1.jpg",
  },
  {
    id: 1,
    image: "./assets/Images/logo-2.jpg",
  },
];
const routeVariants = {
  initial: {
    y: "100vh",
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      mass: 0.4,
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
const Man = () => {
  const data = useSelector((state) => state.product.data);
  const loading = useSelector((state) => state.product.loading);
  // const manData = user.filter((user) => user.brand === "OPPO");
  const manData = data.slice(0, 6);
  const manTreData = data.slice(0, 4);
  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <IntroCard title="MANS :" />
      <CategoryCart data={category} />
      <motion.div
        className="trending-product"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        <motion.h2>Trending Product</motion.h2>
        <div className="trending-product-body">
          {loading ? <Loader /> : <Card data={manTreData} />}
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
            {loading ? <Loader /> : <Card data={manData} />}
          </div>
        </div>
        <div className="filter-components">
          <FilterBox />
        </div>
      </motion.div>
      <OurBrands data={manBrand} />
      <div className="man-shop">
        <ShopNow data={shopnow} />
      </div>

      {/* <Fashions /> */}
      {/*   <p className="woman_content">
              Morat offers a vast selection of women's clothing to shop. Each
              season, and a careful assortment of clothing no matter the season,
              trend-driven and classic pieces are always available .Morat is
              committed to helping shoppers be their most stylish selves
            </p>*/}
    </motion.div>
  );
};

export default Man;
