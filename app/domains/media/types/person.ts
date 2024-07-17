export interface PersonPopularList {
    page: number
    results: PersonPopular[]
    total_pages: number
    total_results: number
}

export interface PersonPopular {
    "adult": boolean,
    "gender": number
    "id": number
    "known_for_department": string
    "name": string
    "original_name": string
    "popularity": number
    "profile_path": string
    "known_for":
    {
        "backdrop_path": string
        "id": number
        "title": string
        "original_title": string
        "overview": string
        "poster_path": string
        "media_type": string
        "adult": boolean
        "original_language": string
        "genre_ids": number[]
        "popularity": number
        "release_date": string
        "video": boolean
        "vote_average": number
        "vote_count": number
    }[]
}

export interface PersonPopularDetails {
    "adult": boolean
    "also_known_as": string[]
    "biography": string
    "birthday": string
    "deathday": string
    "gender": number
    "homepage": null
    "id": number
    "imdb_id": string
    "known_for_department": string
    "name": string
    "place_of_birth": string
    "popularity": number
    "profile_path": string
}

export interface PersonImagesList {
    "id": number
    "profiles":
    {
        "aspect_ratio": number
        "height": number
        "iso_639_1": null,
        "file_path": string
        "vote_average": number
        "vote_count": number
        "width": number
    }[]
}


export interface PersonCombinedCreditList {
    cast: PersonCombinedCredit[]
    crew: null
    id: number
}
export interface PersonCombinedCredit {
    "adult": boolean
    "backdrop_path": string
    "genre_ids": number[]
    "id": number
    "original_language": string
    "original_title": string
    "overview": string
    "popularity": number
    "poster_path": string
    "release_date": string
    "title": string
    "name": string
    "video": boolean
    "vote_average": number
    "vote_count": number
    "character": string,
    "credit_id": string
    "order": number
    "media_type": string
}