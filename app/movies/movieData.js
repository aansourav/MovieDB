import "server-only";

const movieData = {
    movies: () =>
        import("../../lib/data.json").then((module) => module.default),
};

export const getMovies = async (movies) => movieData[movies]();
