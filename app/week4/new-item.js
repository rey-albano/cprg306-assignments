

"use client";

import { useState } from "react";

export default function NewItem () {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");
    const [itemCreated, setItemCreated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const newItem = {
            name,
            quantity,
            category,
        };
        console.log(newItem);

        alert(`Item Added!\nItem Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

        setItemCreated(true);

        setName("");
        setQuantity(1);
        setCategory("produce");

        setItemCreated(false);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <main>
            <div className="min-h-screen bg-blue-gray-100 flex items-center justify-center">
                {itemCreated && (
                    <div className="absolute top-0 mt-8 text-2xl text-yellow-400">
                        Item Created
                    </div>
                )}
                <div className="w-full max-w-md bg-gray-900 p-8 rounded-lg shadow-md">
                    <h1 className="text-2xl text-blue-800 font-bold mb-8">
                        Create New Item
                    </h1>
                    <form onSubmit={handleSubmit}>

                        <label className="block mb-4">
                        <span className="text-blue-700">Item Name</span>
                        <input
                            type="text"
                            id="name"
                            className="form-input mt-2 p-2 block w-full rounded-md text-black bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            placeholder="Enter name"
                            value={name}
                            onChange={handleNameChange}
                            required // Add the required attributes
                        />
                        </label>

                        <label>
                        <span className="text-blue-700">Quantity</span>
                        <input
                            type="number"
                            id="quantity"
                            className="form-input mt-2 p-2 block w-full rounded-md text-black bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            placeholder="Enter quantity"
                            min="1"
                            max="99"
                            value={quantity}
                            onChange={handleQuantityChange}
                            required // Add the required attributes  
                        />
                        </label>
        
                        <label>
                        <span className="text-blue-700">Category</span>
                        <select
                            id="category"
                            name="category"
                            className="form-input mt-2 p-2 block w-full rounded-md text-black bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            value={category}
                            onChange={handleCategoryChange}
                            required // Add the required attributes
                        >
                            <option value="Produce">Produce</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Bakery">Bakery</option>
                            <option value="Meat">Meat</option>
                            <option value="Frozen Foods">Frozen Foods</option>
                            <option value="Canned Goods">Canned Goods</option>
                            <option value="Dry Goods">Dry Goods</option>
                            <option value="Beverages">Beverages</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Household">Household</option>
                            <option value="Other">Other</option>
                        </select>
                        </label>

                        <button 
                            type="submit"
                            className="mt-4 p-4 w-full py-2 px-4 bg-gray-900 hover:bg-blue-900 rounded-md text-white"
                            >
                            Submit Item
                        </button>

                    </form>
                </div>
            </div>
        </main>
    );
}