import "swiper/css"
import { FormProvider, getFormProps, getInputProps, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { i18n } from "@lingui/core";
import { Link, useNavigation, Form, useSearchParams } from "@remix-run/react"
import { FileQuestion } from "lucide-react";
import { useTypedActionData, useTypedLoaderData, } from "remix-typedjson"

import InputSearch from "~/components/common/form/input-search/input-search";
import { NavBar } from "~/components/common/navigation/navbar";
import TypeGenreItem from "~/components/common/type/type-genre/type-genre";
import MediaTypeItem from "~/components/common/type/type-media/type-media";
import { Button } from "~/components/common/ui/button";
import { Image } from "~/components/common/ui/image"
import { Skeleton } from "~/components/common/ui/skeleton"
import { schema } from "~/domains/auth/validations/search";
import { action, loader } from "~/domains/media/controllers/search"
import { SearchResult } from "~/domains/media/types/search";


export { action, loader }

export default function Index() {
    const { genreList } = useTypedLoaderData<typeof loader>()
    const resultatSearchMulti = useTypedActionData()
    const [searchParams] = useSearchParams()
    const [form, fields] = useForm({
        shouldValidate: "onSubmit",
        defaultValue: {
            search: "",
            redirectTo: searchParams.get("redirectTo") ?? undefined,
        },
        onValidate({ formData }) {
            return parseWithZod(formData, { schema: schema(i18n) })
        },
    })

    const navigation = useNavigation()

    const isSubmitting =
        navigation.state === "submitting" ||
        (navigation.state === "loading" && navigation.formMethod === "POST")


    return (
        <main className="w-full h-full gap-8 sm:items-center sm:justify-center bg-black text-white overflow-scroll bg-galaxy bg-cover bg-center m-0 space-y-4">
            <NavBar />
            <section className="w-full space-y-4">
                <Form method="post" {...getFormProps(form)} className="flex gap-4">
                    <FormProvider context={form.context}>
                        <input {...getInputProps(fields.redirectTo, { type: "hidden" })} />
                        <InputSearch name={fields.search.name} className="h-full w-fit bg-gradient-galaxy text-white font-bold py-2 px-2 rounded my-0  mx-auto md:ml-32 border border-purple-500 focus:border-purple-500  " />
                        <Button type="submit" className="h-full w-fit bg-gradient-galaxy text-white font-bold py-2 px-4 rounded my-0 mx-auto md:ml-0">Rechercher</Button>
                    </FormProvider>
                </Form>
                {isSubmitting && !resultatSearchMulti ? (
                    <Skeleton className="w-40 h-40" />
                ) : (
                    <div className="flex flex-wrap w-full md:max-w-[90vw] mx-auto">
                        {resultatSearchMulti && resultatSearchMulti.results.length > 0 ? (
                            <div className="flex flex-wrap justify-center gap-2">
                                {resultatSearchMulti.results.map((item: SearchResult) => {
                                    const image = item.profile_path ?? item.backdrop_path
                                    const name = item.name ?? item.title
                                    const routeUrl = item.media_type === "tv" ? "series" : item.media_type
                                    console.log(item, item.genre_ids)
                                    return (
                                        <div
                                            key={item.id}
                                            className="md:basis-1/2 lg:basis-1/3 "
                                        >
                                            <div className=" bg-gradient-galaxy rounded p-4 h-full">
                                                <Link to={`/${routeUrl}/${item.id}`} className="flex flex-col items-center w-full h-full justify-end relative">
                                                    {
                                                        image ? (
                                                            <Image
                                                                src={`https://image.tmdb.org/t/p/original/${image}`}
                                                                alt=""
                                                                className="max-w-96 max-h-64"
                                                            />
                                                        ) : (
                                                            <FileQuestion className="w-10 h-10 self-center max-w-96 max-h-64" />
                                                        )
                                                    }
                                                    <MediaTypeItem className="flex items-center top-0 right-0 z-10" mediaType={item.media_type} />
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
                                })}
                            </div>
                        ) : (
                            <div className="flex h-full w-full text-center">No results found</div>
                        )}
                    </div>
                )}
            </section >
        </main >
    )
}