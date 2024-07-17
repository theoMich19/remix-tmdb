export interface SearchResultMulti {
    page: string
    results: SearchResult[]
    total_pages: string
    total_results: string
}

export type SearchResult = SearchResultSeries & SearchResultMovies & SearchResultPerson;


export interface SearchResultSeries {
    "backdrop_path": string
    "id": number
    "name": string
    "original_name": string
    "overview": string
    "poster_path": string
    "media_type": string
    "adult": boolean
    "original_language": string
    "genre_ids": number[]
    "popularity": number
    "first_air_date": string
    "vote_average": number
    "vote_count": number
    "origin_country": string[]
}

export interface SearchResultMovies {
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
}

export interface SearchResultPerson {
    "id": number
    "name": string
    "original_name": string
    "media_type": string
    "adult": boolean
    "popularity": number
    "gender": number
    "known_for_department": string
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