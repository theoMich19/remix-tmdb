export interface MoviePopularList {
    page: number
    results: MoviePopular[]
    total_pages: number
    total_results: number
}

export interface MoviePopular {
    "adult": boolean,
    "backdrop_path": string
    "genre_ids": number[]
    "id": number,
    "original_language": string
    "original_title": string
    "overview": string
    "popularity": number
    "poster_path": string
    "release_date": string
    "title": string
    "video": boolean,
    "vote_average": number
    "vote_count": number
}

export interface MovieDetails {
    "adult": boolean,
    "backdrop_path": string,
    "belongs_to_collection": {
        "id": number,
        "name": string,
        "poster_path": string
        "backdrop_path": string
    },
    "budget": number,
    "genres": { "id": number, "name": string }[]
    "homepage": string
    "id": number,
    "imdb_id": string
    "origin_country": string[]
    "original_language": string
    "original_title": string
    "overview": string
    "popularity": number
    "poster_path": string
    "production_companies": { "id": number, "logo_path": string, "name": string, "origin_country": string }[]
    "production_countries": { "iso_3166_1": string, "name": string }[],
    "release_date": string
    "revenue": number
    "runtime": number
    "spoken_languages": { "english_name": string, "iso_639_1": string, "name": string }[]
    "status": string
    "tagline": string
    "title": string
    "video": boolean,
    "vote_average": number
    "vote_count": number
}


export interface MovieRecommendationsList {
    page: number
    results: MovieRecommendations[]
}

export interface MovieRecommendations {
    "backdrop_path": string
    "id": number,
    "original_title": string
    "overview": string
    "poster_path": string
    "media_type": string
    "adult": number,
    "title": string
    "original_language": string
    "genre_ids": number[]
    "popularity": number
    "release_date": string
    "video": boolean,
    "vote_average": number
    "vote_count": number
}


export interface MovieImagesList {
    id: number
    logos: MovieImageDetails[]
    posters: MovieImageDetails[]
    backdrops: MovieImageDetails[]
}

interface MovieImageDetails {
    "aspect_ratio": number
    "height": number
    "iso_639_1": string
    "file_path": string
    "vote_average": number
    "vote_count": number
    "width": number
}