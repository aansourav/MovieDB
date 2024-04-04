import Image from "next/image";
import Link from "next/link";
const MovieCard = ({ movie }) => {
    const { id, title, poster_path, vote_average } = movie;
    return (
        <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
            <Link href={`/movies/${id}`}>
                <Image
                    className="w-full object-cover"
                    src={poster_path}
                    alt=""
                    width="300"
                    height="450"
                />
            </Link>
            <figcaption className="pt-4">
                <Link href={`/movies/${id}`}>
                    <h3 className="text-xl mb-1">{title}</h3>
                </Link>
                <p className="text-[#575A6E] text-sm mb-2">
                    Action/Adventure/Sci-fi
                </p>
                <div className="flex items-center space-x-1 mb-5">
                    {Array.from(
                        { length: Math.round(vote_average) },
                        (_, i) => (
                            <Image
                                key={i}
                                src="/assets/star.svg"
                                width="14"
                                height="14"
                                alt=""
                            />
                        )
                    )}
                </div>
                <Link
                    className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                    href={`/movies/${id}`}
                >
                    <Image
                        src="/assets/tag.svg"
                        alt=""
                        width="16"
                        height="16"
                    />
                    <span>Details</span>
                </Link>
            </figcaption>
        </figure>
    );
};

export default MovieCard;
