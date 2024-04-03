import Image from "next/image";
const MovieDetails = ({ movie }) => {
    const {
        backdrop_path,
        poster_path,
        release_date,
        vote_average,
        vote_count,
        original_title,
        overview,
        popularity,
    } = movie;
    return (
        <section>
            <div>
                <Image
                    className="w-full object-cover max-h-[300px] lg:max-h-[500px]"
                    src={backdrop_path}
                    alt=""
                    width="1920"
                    height="1080"
                />
            </div>

            <div className="grid grid-cols-12 py-12 gap-8">
                <div className="col-span-2">
                    <Image src={poster_path} alt="" width="200" height="300" />
                </div>
                <div className="col-span-8">
                    <h2 className="font-bold text-slate-300 text-2xl">
                        {original_title}
                    </h2>
                    <p className="my-2 text-slate-400 italic">{overview}</p>
                    <ul className="text-slate-300 space-y-2 my-8">
                        <li>Release Date : {release_date}</li>
                        <li>Average Vote : {vote_average}</li>
                        <li>Vote Count : {vote_count}</li>
                        <li>Popularity : {popularity}</li>
                    </ul>
                </div>
                <div className="col-span-2 space-y-4">
                    <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
                        Stream In HD
                    </button>
                    <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
                        Download In HD
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MovieDetails;
