"use client"

import Header from "@/app/components/Header"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function ArticleDetails() {
    const { id } = useParams()

    return (
        <div
            className="flex flex-col justify-center min-h-dvh"
        >
            <Header />
            <main className="flex-grow flex justify-center items-center">
                <h1>Details here...</h1>

            </main>
        </div>
    )

}