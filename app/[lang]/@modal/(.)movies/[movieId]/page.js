import MovieDetails from "@/components/MovieDetails";
import { getMovies } from "@/app/[lang]/movies/movieData";
import Modal from "@/components/Modal";

const page = async ({ params: { movieId, lang } }) => {
    const movies = await getMovies("movies");
    const movie = movies.find((movie) => movie.id === parseInt(movieId));
    return (
        <main>
            <div className="container grid">
                <Modal>
                    <MovieDetails movie={movie} lang={lang} />
                </Modal>
            </div>
        </main>
    );
};

export default page;
