"use client"

import Header from "@/app/components/Header"
import axios from "axios"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function ArticleDetails() {
    const params = useParams()
    const title = typeof params.title == "string" ? params.title : ""
    const [articleDetail, setArticleDetail] = useState([])
    console.log("ID from useParams:", title);

    useEffect(() => {
        if (!title) return

        axios
            .get(`/api/newsAll?q=${title}`)
            .then((response) => {
                setArticleDetail(response.data.articles)
                console.log(response.data)
            })
            .catch((e) => {
                console.error(e)
            })
    }, [title])

    const filteredArticles = articleDetail?.filter((article: { title: string }) => (
        article.title.toLowerCase().includes(decodeURIComponent(title).toLowerCase())
    ))

    console.log(filteredArticles)

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