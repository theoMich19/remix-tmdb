import { typedjson } from "remix-typedjson"

import { getMovieListPopular } from "../data/movie"
import { getPersonListPopular } from "../data/person"
import { getSeriesListPopular } from "../data/series"



export async function loader() {

    const resultatMovies = await getMovieListPopular()
    const resultatSeries = await getSeriesListPopular()
    const resultatPerson = await getPersonListPopular()

    return typedjson({ resultatMovies, resultatSeries, resultatPerson })
}
