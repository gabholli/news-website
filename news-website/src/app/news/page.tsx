"use client"

import axios from "axios"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import { NewsArticle } from "../types/types"

export default function Articles() {
    const [newsData, setNewsData] = useState<NewsArticle[]>([])

    useEffect(() => {
        axios
            .get("/api/newsAll")
            .then((response) => {
                console.log('Client received:', response.data);
                setNewsData(response.data.articles)
            })
            .catch((error) => {
                console.log("Error", error)
            })
            .finally(() => {
                console.log("finally")
            })
    }, [])

    console.log(newsData)

    const sortedArticles = newsData?.sort((a, b) => {
        return a.publishedAt.localeCompare(b.publishedAt)
    })

    const newsArticles = sortedArticles?.map(article => {
        return (
            <div key={article.title}>
                <h1>{article.title}</h1>
                <p>{article.source.name}</p>
            </div>
        )
    })

    return (
        <div>
            <main>
                <div className="flex flex-col gap-y-8 p-6">
                    <h1
                        className="text-center font-bold text-2xl"
                    >
                        News Articles(In Order of Publish Date):
                    </h1>
                    {newsArticles}
                </div>
            </main>
        </div>
    )
}
