import { get } from "~/utils/http.server"

import { PopularListSeries, SeriesDetails, SeriesImagesList, SeriesRecommendationsList } from "../types/series"

export const getSeriesListPopular = async (): Promise<PopularListSeries>=> {

    const res = await get('tv/popular?language=fr&page=1')

    return await res.json()
}



export const getSeriesDetails = async (seriesId: string): Promise<SeriesDetails> => {

    const res = await get('tv/' + seriesId + '?language=fr')

    return await res.json()
}

export const getSeriesDetailsRecommendations = async (seriesId: string): Promise<SeriesRecommendationsList> => {

    const res = await get('tv/' + seriesId + '/recommendations?language=fr&page=1')

    return await res.json()
}

export const getSeriesDetailsImages = async (seriesId: string): Promise<SeriesImagesList> => {

    const res = await get('tv/' + seriesId + '/images')

    return await res.json()
}
    