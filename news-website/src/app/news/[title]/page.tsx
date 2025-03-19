"use client"

import Header from "@/app/components/Header"
import { ArticleDetailInterface } from "@/app/types/types"
import axios from "axios"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function ArticleDetails() {
    const params = useParams()
    const title = typeof params.title == "string" ? params.title : ""
    const [articleDetail, setArticleDetail] = useState<ArticleDetailInterface[]>([])
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

    const articleDetails = filteredArticles?.map(article => {
        return (
            <div className="flex flex-col justify-center items-center w-3/4 md:w-2/3 py-6"
                key={article.title}
            >
                {article.urlToImage && (
                    <img
                        src={article.urlToImage}
                        alt="News image"
                        className="mb-4 md:h-96 object-fit object-contain"
                    />
                )
                }
                {article.title && <h1 className="text-center text-lg">{article.title}</h1>}
                <br></br>
                {article.author && <h1>Author: {article.author}</h1>}
                <br></br>
                {article.description && <h2 className="">{article.description}</h2>}
                <br></br>
                {article.content && <p className="">{article.content}</p>}
                <br></br>
                {article.url && <h1 className="text-center">Source: <Link
                    href={article.url}
                    className="underline break-all"
                >
                    {article.url}</Link></h1>}

            </div>
        )
    })

    return (
        <div
            className="flex flex-col justify-center min-h-dvh"
        >
            <Header />
            <main className="flex-grow flex justify-center items-center">
                {articleDetails}
            </main>
        </div>
    )

}