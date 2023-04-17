import * as React from "react"
import type { BlurImageProps } from "@types"
import Image from "next/image"

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export function BlurImage(props: BlurImageProps): JSX.Element {
  const [isLoading, setLoading] = React.useState<boolean>(true)

  return (
    <>
      <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
        <Image
          src={props.image.url}
          alt={`photo by ${props.image.title}`}
          aria-label={`photo by ${props.image.title}`}
          fill
          priority
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={cn("duration-700 ease-in-out group-hover:opacity-75", isLoading ? "scale-110 blur-2xl grayscale" : "scale-110 blur-0 grayscale-0")}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <p className="mt-4 text-lg font-medium text-gray-900 font-code capitalize truncate">{props.image.title}</p>
    </>
  )
}
