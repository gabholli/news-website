import Link from "next/link";

export default function Header() {

    return (
        <>
            <nav className="flex justify-center items-center h-16 gap-x-8">
                <Link href="/news">
                    Back to articles list
                </Link>
                <Link href="/about">
                    About
                </Link>
            </nav>
            <hr className="border-white w-full"></hr>
        </>
    )

}