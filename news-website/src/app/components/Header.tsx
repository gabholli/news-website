import Link from "next/link";

export default function Header() {

    return (
        <>
            <nav className="flex justify-center items-center h-16">
                <Link href="/news">
                    Back to articles list
                </Link>
            </nav>
            <hr></hr>
        </>
    )

}