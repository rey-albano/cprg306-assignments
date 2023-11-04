import React, { useState } from 'react';
import Item from './item';

const ItemList = ({ items, onItemSelect }) => { // Add the items prop
  // Initialize State Variable
  const [sortBy, setSortBy] = useState('name');

  // Create a copy of the items prop to work with
  const itemsCopy = [...items];

  // Sort the itemsCopy based on sortBy
  itemsCopy.sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  // Create Sort Buttons
  const isSortedByName = sortBy === 'name';
  const isSortedByCategory = sortBy === 'category';

  return (
    <div style={{ color: 'white' }}>
      <div>
        <button
          onClick={() => setSortBy('name')}
          className={`mr-2 ${isSortedByName ? 'bg-blue-500 text-white' : ''}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`mr-2 ${isSortedByCategory ? 'bg-blue-500 text-white' : ''}`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy('grouped')}
          className={`mr-2 ${sortBy === 'grouped' ? 'bg-blue-500 text-white' : ''}`}
        >
          Group by Category
        </button>
      </div>
      {sortBy === 'grouped' ? (
        <div>
          {Object.keys(
            itemsCopy.reduce((acc, item) => {
              if (!acc[item.category]) {
                acc[item.category] = [];
              }
              acc[item.category].push(item);
              return acc;
            }, {})
          )
            .sort(sortAlphabetically)
            .map((category) => (
              <div key={category}>
                <h2>{category}</h2>
                {itemsCopy
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <Item key={item.id} item={item} onSelect={onItemSelect} />
                  ))}
              </div>
            ))}
        </div>
      ) : (
        <div>
          {itemsCopy.map((item) => (
            <Item key={item.id} item={item} onSelect={onItemSelect} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemList;

function sortAlphabetically(a, b) {
  return a.localeCompare(b);
}