import "swiper/css"
// import type { MetaFunction } from "@remix-run/node"
import { Link } from "@remix-run/react"
import { useTypedLoaderData } from "remix-typedjson"

import { NavBar } from "~/components/common/navigation/navbar"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/common/ui/carousel"
import { Image } from "~/components/common/ui/image"
import { loader } from "~/domains/media/controllers/home"
import { MoviePopular } from "~/domains/media/types/movie"
import { PopularSeries } from "~/domains/media/types/series"

// export const meta: MetaFunction = () => [{ title: "TMTB MOVIE" }]

export { loader }

export default function Index() {
  const { resultatMovies, resultatSeries, resultatPerson } = useTypedLoaderData<typeof loader>()

  return (
    <main className="w-full h-full gap-8 sm:items-center sm:justify-center bg-black text-white overflow-scroll bg-galaxy bg-cover bg-center m-0 space-y-4">
      <NavBar />
      <section className="w-full space-y-4">
        <h2 className="bg-gradient-galaxy text-white font-bold py-2 px-4 rounded w-fit my-0  mx-auto md:ml-32">
          Film populaire
        </h2>
        <div className="w-full md:max-w-[90vw] mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {resultatMovies.results.map((item: MoviePopular) => {
                return (
                  <CarouselItem
                    key={item.id}
                    className="md:basis-1/2 lg:basis-1/5 lg:pl-8 hover:opacity-80 hover:scale-110 transition-all duration-300 ease-in-out"
                  >
                    <Link to={`movie/${item.id}`}>
                      <Image
                        src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                        alt=""
                        className=""
                      />
                    </Link>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
      <section className="w-full space-y-4">
        <h2 className="bg-gradient-galaxy text-white font-bold py-2 px-4 rounded w-fit my-0  mx-auto md:ml-32">
          Series populaire
        </h2>
        <div className="flex flex-row gap-4 w-full md:max-w-[90vw] mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {resultatSeries.results.map((item: PopularSeries) => {
                return (
                  <CarouselItem
                    key={item.id}
                    className="md:basis-1/2 lg:basis-1/5 lg:pl-8 hover:opacity-80 hover:scale-110 transition-all duration-300 ease-in-out"
                  >
                    <Link to={`series/${item.id}`}>
                      <Image
                        src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                        alt=""
                        className=""
                      />
                    </Link>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
      <section className="w-full space-y-4">
        <h2 className="bg-gradient-galaxy text-white font-bold py-2 px-4 rounded w-fit my-0  mx-auto md:ml-32">
          Personalité populaire
        </h2>
        <div className="flex flex-row gap-4 w-full md:max-w-[90vw] mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {resultatPerson.results.map((item) => {
                return (
                  <CarouselItem
                    key={item.id}
                    className="md:basis-1/2 lg:basis-1/5 lg:pl-8 hover:opacity-80 hover:scale-110 transition-all duration-300 ease-in-out"
                  >
                    <Link to={`person/${item.id}`} className="flex flex-col">
                      <Image
                        src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
                        alt=""
                        className=""
                      />
                      <span className="w-full text-center bg-black rounded-b-lg">{item.name}</span>
                    </Link>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    </main>
  )
}