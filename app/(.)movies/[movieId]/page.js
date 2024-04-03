import { getMovies } from "@/app/movies/movieData";
import Modal from "@/components/Modal";
import MovieDetails from "@/components/MovieDetails";

const page = async ({ params: { movieId } }) => {
    const movies = await getMovies("movies");
    const movie = movies.find((movie) => movie.id === parseInt(movieId));
    return (
        <main>
            <div className="container grid">
                <Modal>
                    <MovieDetails movie={movie} />
                </Modal>
            </div>
        </main>
    );
};

export default page;
