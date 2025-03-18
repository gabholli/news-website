export interface NewsSource {
    name: string
}

export interface NewsArticle {
    title: string
    source: NewsSource
    publishedAt: string
}

export interface Article {
    title: string
}

export interface ArticleDetailInterface {
    title: string
    description: string
    url: string
    urlToImage: string
    content: string
}