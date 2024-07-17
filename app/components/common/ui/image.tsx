import { useState } from "react"

import { cn } from "~/utils/cn"

import { Skeleton } from "./skeleton"

export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>

export const Image = ({alt, className, ...props}: ImageProps) => {
    const [loaded, setLoaded] = useState(false)
    return (
        <div className={cn(className, "relative pointer-events-none")}>
            {!loaded ? (
                <Skeleton className="absolute inset-0"/>
            ): null}
            <img alt={alt} className="object-cover h-full pointer-events-none"  onLoad={() => setLoaded(true)} {...props} />
        </div>
    )
}