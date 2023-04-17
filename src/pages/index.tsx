import { BlurImage } from "@components/BlurImage"
import type { HomeGetStaticProps, ImageProps, ImagesProps } from "@types"
import { DefaultSeo } from "next-seo"
import Link from "next/link";

export async function getStaticProps(): Promise<HomeGetStaticProps> {

  const url = `https://jsonplaceholder.typicode.com/photos`;

  const res = await fetch(url);
  if (!res.ok) throw new Error('failed to fetch data')
  const data = await res.json();

  const limitData = data.slice(0, 30)

  return {
    props: {
      images: limitData as ImageProps[]
    }
  }
}

export default function Home(props: ImagesProps): JSX.Element {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "es_AR",
          url: "",
          site_name: "Challenge BLABS - Image Gallery",
          images: [
            {
              url: `https://desafio-blabs.vercel.app/og-image.png`,
              width: 1280,
              height: 800,
              alt: "Challenge BLABS - Image Gallery",
              type: "image/png"
            }
          ]
        }}
      />
      <h1 className="text-2xl md:text-3xl text-center pb-10 underline">Challenge BLABS - Galeria de imágenes</h1>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg-grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {props.images.map((image) => (
          <Link key={image.id} href={`/article/${image.id}/`} target="blank" className="group">
            <BlurImage image={image} />
          </Link>
        ))}
      </div>
    </div>
  )
}