import { get } from "~/utils/http.server"

import { GenreList } from "../types/genre"

export const getGenreMovieList = async (): Promise<GenreList> => {

    const res = await get('genre/movie/list?language=fr')

    return await res.json()
}
export const getGenreSeriesList = async (): Promise<GenreList> => {

    const res = await get('genre/tv/list?language=fr')

    return await res.json()
}