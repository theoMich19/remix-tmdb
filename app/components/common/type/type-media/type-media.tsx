import { cn } from "~/utils/cn";

export default function MediaTypeItem({ className, mediaType }: { className: string, mediaType: string }) {

    const mediaTypeClass = (mediaType: string) => {
        switch (mediaType) {
            case "tv":
                return "blue";
            case "movie":
                return "green";
            case "person":
                return "purple";
            default:
                return "yellow";
        }
    };

    return (
        <div className={cn("absolute", className)}>
            <div className="relative flex items-center justify-center w-10 h-10">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={cn("", mediaTypeClass(mediaType))}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={cn(
                        "absolute inset-0 w-full h-full text-yellow-500", mediaTypeClass(mediaType)
                    )}
                >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span className="relative z-10 text-xs font-bold text-white uppercase">
                    {mediaType === "tv" ? "series" : mediaType}
                </span>
            </div>
        </div>
    )
}