import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Test</h1>
      <Link
        href="news"
      >
        To articles
      </Link>
    </div>
  )
}
