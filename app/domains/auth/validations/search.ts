import { I18n } from "@lingui/core"
import { z } from "zod"

export const schema = (i18n: I18n) => {
    return z.object({
        search: z
            .string({ required_error: i18n._(`Required`) })
            .min(1),
        redirectTo: z.string().optional(),
    })
}

const Request: z.ZodType<Request> = z.any()

export const envSchema = z.object({
    request: Request,
})
