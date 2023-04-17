export type ImageProps = {
  id: number
  title: string
  url: string
}

export type ImagesProps = {
  images: ImageProps[]
}

export type HomeGetStaticProps = {
  props: ImagesProps
}

export type BlurImageProps = {
  image: ImageProps
}
