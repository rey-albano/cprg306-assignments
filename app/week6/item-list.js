
import { useState } from "react";
import Item from "./item";

export default function ItemList({items}) {


  const [sortBy, setSortBy] = useState("name");

  const itemsCopy = [...items];

  itemsCopy.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });
}

  const [sortBy, setSortBy] = useState("name");

  const [isGroupedByCategory, setIsGroupedByCategory] = useState(false);

  const handleSortByName = () => {
    setSortBy("name");
  };

  const handleSortByCategory = () => {
    setSortBy("category");
  };

  // Toggles the 'isGroupedByCategory' variable between 'true' and 'false'
  // Switches the grouping filter on or off
  const handleGroupByCategory = () => {
    setIsGroupedByCategory(!isGroupedByCategory);
  };

  const sortedItems = [...itemsData];
  sortedItems.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

return (
    <div>
      <h2>Select Sorting Filter</h2>
      <div>
        <button
          onClick={setSortBy}
          className={`hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ${sortBy === "name" ? 'bg-green-500' : 'bg-black'}`}
        >
          Sort by Name
        </button>
        <button
          onClick={setSortBy}
          className={`hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ${sortBy === "category" ? 'bg-green-500' : 'bg-black'}`}
        >
          Sort by Category
        </button>
        <br/>
        <br/>
        <h3>Toggle Group by Category Filter</h3>
        <button
          onClick={setSortBy}
          className={`hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ${isGroupedByCategory ? 'bg-green-500' : 'bg-black'}`}
        >
          {isGroupedByCategory ? 'Filter On' : 'Filter Off'}
        </button>
      </div>

      <ul>
        {isGroupedByCategory
          ? renderGroupedItems(sortedItems) //if 'true' (?) render grouped items. If 'false' (:) render non-grouped items
          : renderItems(sortedItems)} 
      </ul>
    </div>
);


function renderItems(items) {
  return items.map(item => (
    <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
  ));
}

function renderGroupedItems(items) {
  const groupedItems = items.reduce((acc, item) => {
    const category = item.category.toLowerCase();
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  const sortedCategories = Object.keys(groupedItems).sort();

  return sortedCategories.map(category => (
    <li key={category}>
      <h2 className="text-2xl font-semibold capitalize">{category}</h2>
      <ul>
        {groupedItems[category].map(item => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>
    </li>
  ));
}
