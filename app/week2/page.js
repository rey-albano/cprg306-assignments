import Link from "next/link";
import StudentInfo from "../StudentInfo";

export default function Week2(){
    return (
        <main>
            <h1>My Shopping List</h1>
            <StudentInfo />
            <br />
            <Link href = "../">&lt;- Back to Main Page</Link>
        </main>
    );
}