import Header from "../components/Header";

export default function AboutPage() {
    return (
        <div
            className="flex flex-col justify-center items-center min-h-dvh text-center gap-y-4"
        >
            <div className="w-full">
                <Header />
            </div>
            <main className="flex-grow flex flex-col justify-center items-center">
                <h1 className="text-2xl">About this site:</h1>
                <p className="w-96 text-xl">
                    This site shows news stories built using the NewsAPI.
                    The stories come from different sources and publications,
                    and are shown in order of release.
                </p>
            </main>
        </div>
    )
}