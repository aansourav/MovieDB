import MovieDetails from "@/components/MovieDetails";
import { getMovies } from "../movieData";

const page = async ({ params: { movieId } }) => {
    const movies = await getMovies("movies");
    const movie = movies.find((movie) => movie.id === parseInt(movieId));
    return <MovieDetails movie={movie} />;
};

export default page;
