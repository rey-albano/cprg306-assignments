
import Link from "next/link";
import ItemList from "./item-list";

export default function Week3(){
    return(
        <main>
            <Link href = "../">&lt;- Back to Main Page</Link>
            <h1 className="text-6xl text-blue-700 font-mono underline text-center">Shopping List</h1>
            <ItemList />
        </main>
    );
}