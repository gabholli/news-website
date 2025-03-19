import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-dvh
    gap-y-4 text-center p-6">
      <h1 className="text-4xl">Welcome to Top Headlines</h1>
      <Link
        href="news"
        className="underline text-2xl"
      >
        To articles
      </Link>
    </div>
  )
}
