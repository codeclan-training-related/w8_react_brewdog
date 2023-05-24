import React from "react";
import ListItem from "./ListItem";

const WishList = ({ selectedBeers, removeBeer }) => {
  const items = selectedBeers.map((beer) => (
    <ListItem beer={beer} removeBeer={removeBeer} />
  ));

  return (
    <ul>
      {items}
    </ul>
  );
};

export default WishList;
