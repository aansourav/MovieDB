import MovieDetails from "@/components/MovieDetails";
import { getMovies } from "../movieData";
import Sidebar from "@/components/Sidebar";

const page = async ({ params: { movieId } }) => {
    const movies = await getMovies("movies");
    const movie = movies.find((movie) => movie.id === parseInt(movieId));
    return (
        <main>
            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                <Sidebar />
                <MovieDetails movie={movie} />
            </div>
        </main>
    );
};

export default page;
