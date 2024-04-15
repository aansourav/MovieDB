import MovieDetails from "@/components/MovieDetails";
import Sidebar from "@/components/Sidebar";
import { getMovies } from "../movieData";
import NotFound from "./not-found";

const page = async ({ params: { movieId, lang } }) => {
    const movies = await getMovies("movies");
    const movie = movies.find((movie) => movie.id == movieId);
    if (!movie) {
        return <NotFound movieId={movieId} />;
    }
    return (
        <main>
            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                <Sidebar lang={lang} />
                <MovieDetails movie={movie} lang={lang} />
            </div>
        </main>
    );
};

export default page;
