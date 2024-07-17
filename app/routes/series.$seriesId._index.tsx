import { Link } from "@remix-run/react"
import { motion, useScroll, useTransform } from "framer-motion";
import { useTypedLoaderData } from "remix-typedjson"

import { NavBar } from "~/components/common/navigation/navbar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/common/ui/carousel"
import { Image } from "~/components/common/ui/image"
import { loader } from "~/domains/media/controllers/series-details"
import { SeriesRecommendation } from "~/domains/media/types/series"
import { getFormatDate } from "~/utils/date"


export { loader }

export default function MediaSeriesDetails() {
  const { seriesDetails, seriesRecommendations, seriessImagesList } =
    useTypedLoaderData<typeof loader>()

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <main className="w-full h-full gap-8 sm:items-center sm:justify-center bg-black text-white overflow-scroll  bg-galaxy bg-cover bg-center m-0">
      <NavBar />
      <section className="flex flex-col md:flex-row mx-auto w-full md:w-[80vw]  md:mt-4">
        <Image
          src={`https://image.tmdb.org/t/p/original/${seriesDetails.poster_path}`}
          alt=""
          className="w-full md:w-96"
        />
        <div className="w-full mx-4 md:ml-8 space-y-4 bg-black bg-opacity-50 p-4 rounded-lg">
          <h1 className="text-4xl font-bold text-white">{seriesDetails.name}</h1>
          <div className="flex gap-4">
            {seriesDetails.genres.map(({ id, name }) => {
              return (
                <span key={id} className="bg-gray-800 rounded px-4 py-2 text-white hover:scale-110">
                  {name}
                </span>
              )
            })}
          </div>
          <div className="space-y-4 text-gray-300">
            <span>Diffuser depuis le : {getFormatDate(seriesDetails.first_air_date)}</span>
            <p>{seriesDetails.overview}</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col mx-auto w-full md:w-[80vw]  md:mt-4">
        <h4>Nos Recommendations</h4>
        <Carousel className="w-full md:w-[90vw] mx-auto mt-8">
          <CarouselContent>
            {seriesRecommendations.results.map((item: SeriesRecommendation) => {
              return (
                <CarouselItem
                  key={item.id}
                  className="basis-1/3 lg:basis-1/5 lg:pl-8 hover:opacity-80 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  <motion.div style={{ opacity }}>
                    <Link to={`/movie/${item.id}`}>
                      <Image
                        src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                        alt=""
                        className="w-44"
                      />
                    </Link>
                  </motion.div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
        </Carousel>
      </section>
      <section className="flex flex-col mx-auto w-full md:mt-4 gap-1 overflow-hidden">
        <h4>Gallerie photos</h4>
        <div className="flex flex-wrap">
          {seriessImagesList.backdrops.map((item) => {
            return (
              <div
                key={item.file_path}
                className="hover:scale-110 hover:z-40 transition-all duration-200 ease-in-out w-full md:w-[20vw]"
              >
                <Image
                  src={`https://image.tmdb.org/t/p/original/${item.file_path}`}
                  alt=""
                  className=""
                />
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}
