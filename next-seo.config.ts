import { DefaultSeoProps } from 'next-seo';

export const SEO: DefaultSeoProps = {
  title: "Challenge BLABS - Image Gallery",
  description: "Image Gallery desc",
  canonical: `${process.env.NEXT_PUBLIC_DOMAIN}`,
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: `${process.env.NEXT_PUBLIC_DOMAIN}`,
    site_name: "Image Gallery",
    title: "Image Gallery",
    description: "Image Gallery desc",
    images: [
      {
        url:`${process.env.NEXT_PUBLIC_DOMAIN}/og-image.png`,
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
      href: `${process.env.NEXT_PUBLIC_DOMAIN}/favicon.ico`
    }
  ]
};
