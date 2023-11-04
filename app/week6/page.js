"use client"


import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemData from "./items.json"
import React, {useState} from 'react';

export default function Week6(){

    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }

    return(
        <main>
            <Link href = "../">&lt;- Back to Main Page</Link>
            <h1 className="text-6xl text-green-700 font-mono underline text-center">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </main>
    );
}