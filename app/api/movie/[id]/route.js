import { deleteMovie, getMovieById, patchMovie } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const movieID = params?.id;
    const data = await getMovieById(parseInt(movieID));
    return NextResponse.json(data);
}

export async function PATCH(request, { params }) {
    const movieID = params?.id;
    const title = await request.json();
    const data = await patchMovie(parseInt(movieID), title.text);

    const response = !data?.message
        ? {
              message: `Successfully Updated title of movie with id: ${movieID} `,
              data: data,
          }
        : {
              message: data.message,
          };

    return NextResponse.json(response);
}

export async function DELETE(request, { params }) {
    const movieID = params?.id;
    const data = await deleteMovie(parseInt(movieID));

    const response = !data?.message
        ? {
              message: `Successfully deleted the movie with id: ${movieID} `,
              data: data,
          }
        : {
              message: data.message,
          };

    return NextResponse.json(response);
}
