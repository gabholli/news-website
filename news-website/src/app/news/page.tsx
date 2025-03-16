"use client"

import axios from "axios"
import React, { useEffect, useState } from "react"
import Link from "next/link"

export default function BreedList() {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {

        // Fetch from local API route (not external API)
        axios
            .get("/api/newsAll")
            .then((response) => {
                console.log('Client received:', response.data);
                setNewsData(response.data)
            })
            .catch((error) => {
                console.log("Error", error)
            })
            .finally(() => {
                console.log("finally")
            })
    }, [])

    return (
        <div>
            News Here...
        </div>
    )
}
