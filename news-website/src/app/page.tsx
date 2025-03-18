import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-dvh
    gap-y-4">
      <h1 className="text-2xl">Welcome to Top Headlines</h1>
      <p className="text-xl">We show the top headlines every day</p>
      <Link
        href="news"
        className="underline text-lg"
      >
        To articles
      </Link>
    </div>
  )
}
