import { LoaderFunctionArgs } from "@remix-run/node"
import { redirect, typedjson } from "remix-typedjson"

import { getSeriesDetails, getSeriesDetailsImages, getSeriesDetailsRecommendations } from "../data/series"


export async function loader({ params }: LoaderFunctionArgs) {
    if (params.seriesId === undefined) {
        throw redirect("/")
    }

    const seriesDetails = await getSeriesDetails(params.seriesId)
    const seriesRecommendations = await getSeriesDetailsRecommendations(params.seriesId)
    const seriessImagesList = await getSeriesDetailsImages(params.seriesId)

    return typedjson({ seriesDetails, seriesRecommendations, seriessImagesList })
}