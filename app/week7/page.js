"use client";
import React, { useState } from 'react'; 
import ItemList from './item-list'; 
import NewItem from './new-item';
import itemsData from './items.json';

function Page() {
  
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(' ');

  const handleItemSelect = (selectedItems) => {
    const cleanedName = selectedItem.name
        .split('🍗')[0]
        .trim();
    setSelectedItemName(cleanedName);
  };

  const handleAddItem = (newItem) => {
    
    setItems([...items, newItem]);
  };

  return (
    <main className="p-4 flex">
    <Link href = "../">&lt;- Back to Main Page</Link>
    <div style={{ flex: 1 }}>
      <h1 className="text-4xl font-bold text-center">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} onItemSelect={handleItemSelect} />
    </div>
    <div style={{ flex: 1 }}>
      <MealIdeas ingredient={selectedItemName} />
    </div>
  </main>
);
}

export default Page;