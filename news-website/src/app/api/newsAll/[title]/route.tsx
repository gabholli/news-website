import axios from 'axios'
import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
    const parts = req.nextUrl.pathname.split('/')
    const title = parts.pop()  // This will be a string or undefined.

    if (!title) {
        return new Response('Breed ID is missing from the URL', { status: 400 })
    }
    try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${encodeURIComponent(title)}`, {
            headers: {
                'x-api-key': process.env.VITE_SOME_KEY,
            },
        });

        return new Response(JSON.stringify(response.data), { status: 200 })
    } catch (error) {
        console.error(error)
        return new Response('Failed to fetch breed details', { status: 500 })
    }
}
