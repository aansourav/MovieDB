import MovieCard from "@/components/MovieCard";
import Sidebar from "@/components/Sidebar";
import { getMovies } from "./movies/movieData";

export default async function Home({ params: { lang } }) {
    const movies = await getMovies("movies");
    return (
        <main>
            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                <Sidebar lang={lang} />
                <div className="content">
                    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
                        {movies.map((movie) => {
                            return (
                                <MovieCard
                                    key={movie.id}
                                    movie={movie}
                                    lang={lang}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </main>
    );
}
