"use client"

import axios from "axios"
import React, { useEffect, useState } from "react"
import { NewsArticle } from "../types/types"
import Link from "next/link"

export default function Articles() {
    const [newsData, setNewsData] = useState<NewsArticle[]>([])
    const [newsSource, setNewsSource] = useState("")
    const [search, setSearch] = useState("")

    useEffect(() => {
        axios
            .get(`/api/newsAll?q=${search}`)
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
    }, [search])

    function handleSourceChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setNewsSource(e.target.value)
    }

    function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value)
    }

    const uniqueSources = Array.from(
        new Set(newsData.map((article) => article.source.name))
    ).sort((a, b) => a.localeCompare(b))

    const groupedSources: { [key: string]: string[] } = {}
    uniqueSources.forEach(source => {
        const firstLetter = source.charAt(0).toUpperCase()
        if (!groupedSources[firstLetter]) {
            groupedSources[firstLetter] = []
        }
        groupedSources[firstLetter].push(source)
    })

    const sortedArticles = newsData?.sort((a, b) => {
        return a.publishedAt.localeCompare(b.publishedAt)
    })

    const filteredArticles = sortedArticles?.filter(article => (
        (newsSource ? article.source.name === newsSource : true) &&
        (search ? article.title.toLowerCase().includes(search.toLowerCase()) : true)
    ))

    const newsArticles = filteredArticles?.map(article => {
        return (
            <div key={article.title}>
                <Link href={`/news/${encodeURIComponent(article.title)}`}>
                    <h1>{article.title}</h1>
                    <p>{article.source.name}</p>
                </Link>
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
                        Top Headlines(In Order of Publish Date):
                    </h1>
                    <div className="flex flex-col justify-center items-center md:flex-row gap-4">
                        <select className="bg-black text-white border-1 h-12 indent-2 w-60"
                            onChange={handleSourceChange} value={newsSource}>
                            <option value="">Sort by source</option>
                            {Object.keys(groupedSources).map((letter) => (
                                <optgroup key={letter} label={letter}>
                                    {groupedSources[letter].map((source) => (
                                        <option key={source} value={source}>
                                            {source}
                                        </option>
                                    ))}
                                </optgroup>
                            ))}
                        </select>
                        <input
                            className="bg-black text-white border-1 h-12 indent-2 w-60"
                            onChange={handleSearchChange}
                            value={search}
                            type="text"
                            placeholder="Search for an article..."
                        >
                        </input>
                    </div>
                    <hr></hr>
                    {newsArticles}
                </div >
            </main >
        </div >
    )
}
