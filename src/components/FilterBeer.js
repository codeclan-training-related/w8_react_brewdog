import React, { useState } from 'react';

const FilterBeer = ({allBeers, handleInput, filteredBeers }) => {
  const [food, setFood] = useState('');

  const handleChange = (e) => {
    setFood(e.target.value);
  };

  const handleClick = () => {
    handleInput(food);
  };

  return (
    <>
      <label htmlFor="meal-input">By meal:</label>
      <input type="text" id="meal-input" placeholder="What are you having today?" onChange={handleChange} />
      <button onClick={handleClick}>Check</button>

      {filteredBeers.length > 0 && (
        <>
          <h2>Filtered Beers:</h2>
          <ul>
            {filteredBeers.map((beer) => (
              <li key={beer.id}>
                {beer.name}
                <button>More Info</button>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default FilterBeer;
