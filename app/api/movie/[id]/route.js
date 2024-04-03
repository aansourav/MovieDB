import { deleteMovie, getMovieById, patchMovie } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET({ params }) {
    const movieID = params?.id;
    const data = await getMovieById(parseInt(movieID));
    return NextResponse.json(data);
}

export async function PATCH(request, { params }) {
    const movieID = params?.id;
    const title = await request.json()
    const data = patchMovie(parseInt(movieID), title.text);
    return NextResponse.json(data);
}

export async function DELETE({ params }) {
    const movieID = params?.id;
    const data = deleteMovie(parseInt(movieID));
    return NextResponse.json(data);
}