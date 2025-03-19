import Link from "next/link";

export default function Header() {

    return (
        <>
            <nav className="flex justify-center items-center h-16 gap-x-8">
                <Link
                    className="text-xl"
                    href="/news">
                    Back to articles list
                </Link>
                <Link
                    className="text-xl"
                    href="/about">
                    About
                </Link>
            </nav>
            <hr className="border-white w-full"></hr>
        </>
    )

}