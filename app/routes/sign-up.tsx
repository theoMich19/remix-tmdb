import { t, Trans } from "@lingui/macro"
import type { MetaFunction } from "@remix-run/node"

import SignUpForm from "~/components/auth/sign-up/sign-up-form/sign-up-form"
import { NavBar } from "~/components/common/navigation/navbar"
import { action, loader } from "~/domains/auth/controllers/sign-up.server"

export const meta: MetaFunction<typeof loader> = ({ data }) => [
  { title: data?.title ?? t`Sign up` },
]

export { loader, action }

export default function SignUpPage() {
  return (
    <main className="bg-galaxy bg-cover bg-center h-full w-full relative">
      <NavBar />
      <span className="z-10 absolute top-[50%] w-full bg-red-600 h-12  text-center content-center font-bold text-2xl">
        En construction
      </span>
      <div className="flex flex-col justify-center opacity-60">
        <div className="mx-auto w-full max-w-md  py-4 px-8 rounded-xl border bg-card text-card-foreground shadow">
          <h1 className="w-full text-center text-2xl font-bold">
            <Trans>Sign up</Trans>
          </h1>
          <SignUpForm />
        </div>
      </div>
    </main>
  )
}
