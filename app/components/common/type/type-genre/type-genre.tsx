import { Genre } from "~/domains/media/types/genre";

export default function TypeGenreItem(
    {
        genreList,
        genreIds,
        mediaType
    }: {
        genreList: {
            genresMovies: Genre[];
            genresSeries: Genre[];
        },
        genreIds: number[],
        mediaType: string
    }) {

    const getGenreNameById = (mediaType: string, id: number) => {
        switch (mediaType) {
            case "tv":
                return genreList.genresSeries.find((g) => g.id === id)?.name;
            case "movie":
                return genreList.genresMovies.find((g) => g.id === id)?.name;
            default:
                return "";
        }
    }

    return (
        <>
            {genreIds.map((id: number) => {
                const genrename = getGenreNameById(mediaType, id)
                return (
                    <span key={id} className="bg-gray-500 rounded px-4 py-2 text-white hover:scale-110 text-sm ">
                        {genrename}
                    </span>
                )
            })}
        </>
    )
}