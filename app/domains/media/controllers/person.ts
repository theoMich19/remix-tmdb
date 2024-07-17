import { LoaderFunctionArgs } from "@remix-run/node"
import { redirect, typedjson } from "remix-typedjson"

import { getGenreMovieList, getGenreSeriesList } from "../data/genre"
import { getPersonDetails, getPersonCombinedCredits } from "../data/person"


export async function loader({ params }: LoaderFunctionArgs) {
    if (params.personId === undefined) {
        throw redirect("/")
    }

    const personDetails = await getPersonDetails(params.personId)
    const personCombinedCredits = await getPersonCombinedCredits(params.personId)
    const genresMovies = await getGenreMovieList()
    const genresSeries = await getGenreSeriesList()
    const genreList = {
        genresMovies: genresMovies.genres,
        genresSeries: genresSeries.genres
    }
    return typedjson({ personDetails, personCombinedCredits, genreList })
}
