export interface PopularListSeries {
    page: number
    results: PopularSeries[]
    total_pages: number
    total_results: number
}

export interface PopularSeries {
    "adult": boolean,
    "backdrop_path": string
    "genre_ids": number[]
    "id": number,
    "origin_country": string[]
    "original_language": string
    "original_name": string
    "overview": string
    "popularity": number
    "poster_path": string
    "first_air_date": string
    "name": string
    "vote_average": number
    "vote_count": number
}



export interface SeriesDetails {
    "adult": boolean
    "backdrop_path": string
    "created_by": { "id": number, "credit_id": string, "name": string, "original_name": string, "gender": number, "profile_path": string, }[],
    "episode_run_time": number[]
    "first_air_date": string
    "genres": { "id": number, "name": string }[]
    "homepage": string
    "id": number
    "in_production": boolean,
    "languages": string[]
    "last_air_date": string,
    "last_episode_to_air": SeriesEpisode
    "name": string
    "next_episode_to_air": SeriesEpisode,
    "networks": { "id": number, "logo_path": string, "name": string, "origin_country": string }[]
    "number_of_episodes": number
    "number_of_seasons": number
    "origin_country": string[]
    "original_language": string,
    "original_name": string
    "overview": string
    "popularity": number
    "poster_path": string
    "production_companies": { "id": number, "logo_path": string, "name": string, "origin_country": string }[]
    "production_countries": { "iso_3166_1": string, "name": string }[],
    "seasons": { "air_date": string, "episode_count": number, "id": number, "name": string, "overview": string, "poster_path": unknown, "season_number": number, "vote_average": number, }[]
    "spoken_languages": { "english_name": string, "iso_639_1": string, "name": string }[]
    "status": string
    "tagline": string
    "type": string
    "vote_average": number
    "vote_count": number
}
interface SeriesEpisode {
    "id": number,
    "name": string,
    "overview": string,
    "vote_average": number,
    "vote_count": number,
    "air_date": string,
    "episode_number": number,
    "episode_type": string,
    "production_code": string,
    "runtime": null,
    "season_number": number,
    "show_id": number,
    "still_path": null
}

export interface SeriesRecommendationsList {
    page: number
    results: SeriesRecommendation[]
}

export interface SeriesRecommendation {
    "backdrop_path": string
    "id": number
    "name": string
    "original_name": string
    "overview": string
    "poster_path": string
    "media_type": string
    "adult": number,
    "original_language": string
    "genre_ids": number[]
    "popularity": number
    "first_air_date": string
    "vote_average": number
    "vote_count": number
    "origin_country": string[]
}

export interface SeriesImagesList {
    id: number
    logos: SeriesImageDetails[]
    posters: SeriesImageDetails[]
    backdrops: SeriesImageDetails[]
}

interface SeriesImageDetails {
    "aspect_ratio": number
    "height": number
    "iso_639_1": string
    "file_path": string
    "vote_average": number
    "vote_count": number
    "width": number
}