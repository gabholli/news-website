import axios from 'axios'

export async function GET() {
    try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us', {
            headers: {
                'x-api-key': process.env.SOME_KEY,
                "Cache-Control": "no-cache"
            },
        })

        return new Response(JSON.stringify(response.data), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
                "Pragma": "no-cache",
                "Expires": "0",
                "Surrogate-Control": "no-store"
            }

        })
    } catch (error) {
        console.error(error);
        return new Response('Failed to fetch articles', { status: 500 })
    }
}
a