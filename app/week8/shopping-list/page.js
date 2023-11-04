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

  const {user, githubSignIn, firebaseSignOut} = useUserAuth();

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
      <header>
          <h1>Secured Page</h1>
      </header>
      <section>
        {user ? (
          <p>Welcome, {user.displayName}. You are signed in!</p>
        ) : (
          <p>You are not signed in. Sign in to view this page.</p>
        )}
      </section>

  </main>
);
}

export default Page;