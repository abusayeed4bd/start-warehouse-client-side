import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Item from "../Item/Item";
import Partners from "../Partners/Partners";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Item></Item>
      <Services></Services>
      <Partners></Partners>
    </div>
  );
};

export default Home;
