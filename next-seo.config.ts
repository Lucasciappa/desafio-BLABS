import { DefaultSeoProps } from 'next-seo';

export const SEO: DefaultSeoProps = {
  title: "Challenge BLABS - Image Gallery",
  description: "Image Gallery desc",
  canonical: `https://desafio-blabs.vercel.app`,
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: `https://desafio-blabs.vercel.app`,
    site_name: "Image Gallery",
    title: "Image Gallery",
    description: "Image Gallery desc",
    images: [
      {
        url:`https://desafio-blabs.vercel.app/og-image.png`,
        width: 1280,
        height: 800,
        alt: "BLABS Challenge - Image Gallery",
        type: "image/png"
      }
    ]
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: `https://desafio-blabs.vercel.app/favicon.ico`
    }
  ]
};
