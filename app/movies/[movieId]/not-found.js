"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NotFound = ({ movieId }) => {
    const router = useRouter();
    return (
        <div className="relative">
            <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-10">
                <div className="absolute inset-0 overflow-hidden">
                    <Image
                        src="/assets/notfound.png"
                        alt="Not Found"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>

            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center">
                {movieId && (
                    <p className="text-black text-[40px] font-extrabold mb-4">
                        This movie with ID {movieId} was not found!
                    </p>
                )}

                <button
                    onClick={() => router.back()}
                    className="px-4 py-2 border border-[#171923] bg-white text-lg text-gray-800 font-bold rounded shadow-xl hover:bg-[#00D991]"
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default NotFound;
