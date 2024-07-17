import { t, Trans } from "@lingui/macro"
import type { MetaFunction } from "@remix-run/node"

import SignInForm from "~/components/auth/sign-in/sign-in-form/sign-in-form"
import { NavBar } from "~/components/common/navigation/navbar"
import { action, loader } from "~/domains/auth/controllers/sign-in.server"

export const meta: MetaFunction<typeof loader> = ({ data }) => [
  { title: data?.title ?? t`Sign in` },
]

export { loader, action }

export default function SignInPage() {
  return (
    <main className="bg-galaxy bg-cover bg-center h-full w-full relative">
      <NavBar />
      <span className="z-10 absolute top-[50%] w-full bg-red-600 h-12  text-center content-center font-bold text-2xl">
        En construction
      </span>
      <div className="flex flex-col justify-center opacity-60">
        <div className="mx-auto w-full max-w-md py-4 px-8 rounded-xl border bg-card text-card-foreground shadow">
          <h1 className="w-full text-center text-2xl font-bold">
            <Trans>Sign in</Trans>
          </h1>
          <SignInForm />
        </div>
      </div>
    </main>
  )
}
