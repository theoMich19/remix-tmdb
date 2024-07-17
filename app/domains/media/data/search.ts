import { get } from "~/utils/http.server"

import { SearchResultMulti } from "../types/search"


export const getSearchGlobal = async (keyWords: string, page = 1): Promise<SearchResultMulti> => {

    const res = await get(`search/multi?query=${keyWords}&include_adult=true&language=fr&page=${page}`)

    return await res.json()
}