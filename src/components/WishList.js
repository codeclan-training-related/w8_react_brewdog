import React from "react";
import ListItem from "./ListItem";

const WishList = ({ selectedBeers }) => {
  const items = selectedBeers.map((beer) => (
    <ListItem beer={beer} />
  ));

  return (
    <ul>
      {items}
    </ul>
  );
};

export default WishList;
