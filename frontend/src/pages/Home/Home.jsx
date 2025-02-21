import React from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";

const Home = () => {
   const [category, setCategory] = React.useState("All");
   return (
      <>
         <Header />
         <ExploreMenu category={category} setCategory={setCategory} />
         <FoodDisplay category={category} />
         <AppDownload />
      </>
   );
};

// 38:53

export default Home;
