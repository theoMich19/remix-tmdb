import { Link } from "@remix-run/react"
import { useTypedLoaderData } from "remix-typedjson"

import { NavBar } from "~/components/common/navigation/navbar"
import TypeGenreItem from "~/components/common/type/type-genre/type-genre"
import MediaTypeItem from "~/components/common/type/type-media/type-media"
import { Image } from "~/components/common/ui/image"
import { loader } from "~/domains/media/controllers/person"
import { PersonCombinedCredit } from "~/domains/media/types/person"
import { getFormatDate } from "~/utils/date"

export { loader }

export default function MediaPersonDetails() {
  const { personDetails, personCombinedCredits, genreList } = useTypedLoaderData<typeof loader>()


  return (
    <main className="flex flex-col gap-4 w-full h-full  bg-black text-white overflow-scroll bg-galaxy bg-cover bg-center m-0">
      <NavBar />
      <section className="flex flex-col md:flex-row mx-auto w-full md:w-[80vw] md:mt-4">
        <Image
          src={`https://image.tmdb.org/t/p/original/${personDetails.profile_path}`}
          alt=""
          className="w-full md:w-96"
        />
        <div className="w-full mx-4 md:ml-8 space-y-4 bg-black bg-opacity-50 p-4 rounded-lg">
          <h1 className="text-4xl font-bold text-white">{personDetails.name}</h1>
          <div className="flex gap-4">
            {/* {personDetails..map(({ id, name }) => {
              return (
                <span key={id} className="bg-gray-800 rounded px-4 py-2 text-white hover:scale-110">
                  {name}
                </span>
              )
            })} */}
          </div>
          <div className="space-y-4 text-gray-300">
            <span>Né(e) le : {getFormatDate(personDetails.birthday)}</span>
            <p>{personDetails.biography}</p>
          </div>
        </div>
      </section>
      <section className="flex flex-wrap w-full md:max-w-[90vw] gap-2  mx-auto justify-center">
        {personCombinedCredits.cast.length > 0 ? personCombinedCredits.cast.map((item: PersonCombinedCredit) => {
          const routeUrl = item.media_type === "tv" ? "series" : item.media_type
          const name = item.title ? item.title : item.name
          return (
            <div
              key={item.id}
              className="md:basis-1/2 lg:basis-1/4 "
            >
              <div className=" bg-gradient-galaxy rounded p-4 h-full">
                <Link to={`/${routeUrl}/${item.id}`} className="flex flex-col relative items-center w-full h-full justify-end">
                  <MediaTypeItem className="flex items-center top-0 right-0 z-10" mediaType={item.media_type} />
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                    alt=""
                    className="max-w-96 max-h-64"
                  />
                  <div className="flex justify-between mt-4 w-full">
                    <span>{name}</span>
                  </div>
                  {
                    item?.genre_ids && item.genre_ids.length > 0
                      ? (
                        <div className="flex w-full gap-2 opacity-80 ">
                          <TypeGenreItem genreList={genreList} genreIds={item.genre_ids} mediaType={item.media_type} />
                        </div>
                      )
                      : null
                  }
                </Link>
              </div>
            </div>
          )
        }) : null}
      </section>
    </main>
  )
}
