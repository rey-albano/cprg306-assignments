import StudentInfo from "./StudentInfo";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <br/>
      <h2>Web Development Assignment Directory</h2>
      <br/>
      <Link href = "week2">Week 2 Assignment</Link>
      <br/>
      <Link href = "week3">Week 3 Assignment</Link>
      <br/>
      <Link href = "week4">Week 4 Assignment</Link>
      <br/>
      <Link href = "week5">Week 5 Assignment</Link>
      <br/>
      <Link href = "week6">Week 6 Assignment</Link>
      <br/>
      <Link href = "week7">Week 7 Assignment</Link>
      <br/>
      <Link href = "week8">Week 8 Assignment</Link>
    </main>
  )
}
