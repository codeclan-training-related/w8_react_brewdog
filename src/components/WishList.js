import React from "react";
// import './WishList.css';


const WishList = ({ selectedBeers, removeBeer }) => {
  const items = selectedBeers.map((beer) => {return (
    <ul key={beer.id}>
      <li className='listItem' value={beer.id}>
        <p>Name: {beer.name}</p>
        <img src={beer.image_url} alt={beer.name}  style={{ width: '100px', height: '200px' }} />
        <button  onClick={() => removeBeer(beer.id)}>Remove</button>
      </li>
    </ul>
  )})

  return (
    <div>
      {items}
    </div>
  );
  
};

export default WishList;

//todo: add css on it
// ul {
//   display: flex;
//   justify-content: space-around;
// }

// li {
//   list-style: none;
//   text-align: center;
// }

// .listItem {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   height: 200px;
// }

// .listItem img {
//   width: 100px;
//   height: 150px;
// }

// .listItem button {
//   margin-top: 10px;
// }
