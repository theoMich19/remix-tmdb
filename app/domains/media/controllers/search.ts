import { parseWithZod } from "@conform-to/zod"
import { i18n } from "@lingui/core"
import { ActionFunctionArgs } from "@remix-run/node"
import { typedjson } from "remix-typedjson"

import { schema } from "~/domains/auth/validations/search"

import { getGenreMovieList, getGenreSeriesList } from "../data/genre"
import { getSearchGlobal } from "../data/search"


export async function action({ request }: ActionFunctionArgs) {

  const formData = await request.clone().formData()
  const search = formData.get("search") as string

  const submission = parseWithZod(formData, { schema: schema(i18n) })

  if (submission.status !== "success") {
    return submission.reply()
  }

  const resultatSearchMulti = await getSearchGlobal(search);

  return typedjson(resultatSearchMulti)
}



export async function loader() {
  const genresMovies = await getGenreMovieList()
  const genresSeries = await getGenreSeriesList()
  const genreList = {
    genresMovies: genresMovies.genres,
    genresSeries: genresSeries.genres
  }
  return typedjson({ genreList })
}
