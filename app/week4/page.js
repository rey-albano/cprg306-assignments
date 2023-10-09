import NewItem from "./new-item";
import Link from "next/link";
export default function Page() {
    return (
        <main>
            <Link href = "../">&lt;- Back to Main Page</Link>
            <NewItem />
        </main>
    );
}