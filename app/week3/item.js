

export default function Item ({name, quantity, category}) {
    return (
        <div className="border border-black bg-red-800 rounded-full w-full max-w-xs m-4 p-2 shadow-lg shadow-red-600 grid justify-items-center">
            <h3 className="text-xl font-bold">{name}</h3>
            <p>Quantity: {quantity} </p>
            <p>Section: {category}</p>
        </div>
    )
}