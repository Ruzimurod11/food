import React from "react";
import "./ExploreMenu.scss";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
   return (
      <div className="explore-menu" id="explore-menu">
         <h2>Explore our menu</h2>
         <p className="explore-menu-text">
            Choose from a diverse menu featuring a delectable array of dishes
            crafted with the finest
         </p>
         <div className="explore-menu-list">
            {menu_list?.map((item, idx) => {
               return (
                  <div
                     onClick={() =>
                        setCategory((prev) =>
                           prev === item.menu_name ? "All" : item.menu_name
                        )
                     }
                     key={idx}
                     className="explore-menu-list-item">
                     <img
                        className={category === item.menu_name ? "active" : ""}
                        src={item.menu_image}
                        alt=""
                     />
                     <p> {item.menu_name} </p>
                  </div>
               );
            })}
         </div>
         <hr className="explore-menu-line" />
      </div>
   );
};

export default ExploreMenu;
