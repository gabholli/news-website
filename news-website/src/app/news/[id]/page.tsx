"use client"

import { useParams } from "next/navigation"

export default function ArticleDetails() {
    const { id } = useParams()

    return (
        <div>
            <h1>Details here...</h1>
        </div>
    )

}