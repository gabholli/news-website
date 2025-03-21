import Header from "../components/Header";

export default function AboutPage() {
    return (
        <div
            className="flex flex-col justify-center items-center min-h-dvh text-center"
        >
            <div className="w-full">
                <Header />
            </div>
            <main className="flex-grow flex flex-col justify-center items-center px-4 gap-y-4">
                <h1 className="text-2xl">About this site:</h1>
                <p className="md:w-96 text-xl">
                    This site shows news stories built using the NewsAPI.
                    The stories come from different sources and publications,
                    and are shown in order of release.
                </p>
            </main>
        </div>
    )
}