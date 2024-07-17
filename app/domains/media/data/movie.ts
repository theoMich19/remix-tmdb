import { get } from "~/utils/http.server"

import { MovieDetails, MovieImagesList, MoviePopularList, MovieRecommendationsList } from "../types/movie"

export const getMovieListPopular = async (): Promise<MoviePopularList> => {

    const res = await get('movie/popular?language=fr&page=1')

    return await res.json()
}

export const getMovieDetails = async (movieId: string): Promise<MovieDetails> => {

    const res = await get('movie/' + movieId + '?language=fr')

    return await res.json()
}

export const getMovieDetailsRecommendations = async (movieId: string): Promise<MovieRecommendationsList> => {

    const res = await get('movie/' + movieId + '/recommendations?language=fr&page=1')

    return await res.json()
}

export const getMovieDetailsImages = async (movieId: string): Promise<MovieImagesList> => {

    const res = await get('movie/' + movieId + '/images')

    return await res.json()
}
