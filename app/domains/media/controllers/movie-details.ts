import { LoaderFunctionArgs } from "@remix-run/node"
import { redirect, typedjson } from "remix-typedjson"

import { getMovieDetails, getMovieDetailsImages, getMovieDetailsRecommendations } from "../data/movie"


export async function loader({ params }: LoaderFunctionArgs) {
    if (params.movieId === undefined) {
        throw redirect("/")
    }

    const movieDetails = await getMovieDetails(params.movieId)
    const movieRecommendations = await getMovieDetailsRecommendations(params.movieId)
    const moviesImagesList = await getMovieDetailsImages(params.movieId)

    return typedjson({ movieDetails, movieRecommendations, moviesImagesList })
}
