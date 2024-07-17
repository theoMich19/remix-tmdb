import { get } from "~/utils/http.server"

import { PersonCombinedCreditList, PersonImagesList, PersonPopularDetails, PersonPopularList } from "../types/person"


export const getPersonListPopular = async (): Promise<PersonPopularList> => {

    const res = await get('person/popular?language=fr')

    return await res.json()
}


export const getPersonDetails = async (personId: string): Promise<PersonPopularDetails> => {

    const res = await get('person/' + personId + '?language=fr')

    return await res.json()
}


export const getPersonDetailsImages = async (personId: string): Promise<PersonImagesList> => {

    const res = await get('person/' + personId + '/images')

    return await res.json()
}


export const getPersonCombinedCredits = async (personId: string): Promise<PersonCombinedCreditList> => {

    const res = await get('person/' + personId + '/combined_credits?language=fr')

    return await res.json()
} 