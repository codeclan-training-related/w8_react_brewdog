import React from "react";
import ListItem from "./ListItem";
import './WishList.css';


const WishList = ({ selectedBeers, removeBeer }) => {
  const items = selectedBeers.map((beer) => (
    <ListItem beer={beer} removeBeer={removeBeer} />
  ));

  return (
    <div>
    <ul >
      {items}
    </ul>
    </div>
  );
};

export default WishList;
