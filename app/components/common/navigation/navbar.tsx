import "swiper/css"
import { Link } from "@remix-run/react"
import { Search } from "lucide-react"

import { Image } from "~/components/common/ui/image"

import logo from "../../../assets/logo.webp"

export function NavBar() {

    return (
        <nav className="flex justify-end w-full gap-4">
            <Link to={'/'} className="w-16">
                <Image
                    src={logo}
                    alt=""
                    className="rounded-full"
                />
            </Link>
            <div className="flex justify-end w-full gap-4 m-4">
                <Link to={'/search'} className="group bg-purple-500 rounded-xl p-2 hover:scale-110 hover:bg-white transition-all ease-in-out duration-500">
                    <Search className="text-white group-hover:text-purple-500" />
                </Link>
                <Link to={'/sign-in'} className="group bg-purple-500 rounded-xl px-6 py-2 hover:scale-110 hover:bg-white hover:text-purple-500 transition-all ease-in-out duration-500">
                    Sign-in
                </Link>
                <Link to={'/sign-up'} className="group bg-purple-500 rounded-xl px-6 py-2 hover:scale-110 hover:bg-white hover:text-purple-500 transition-all ease-in-out duration-500">
                    Sign-up
                </Link>
            </div>
        </nav>
    )
}