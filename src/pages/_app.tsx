import { DefaultSeo } from 'next-seo';
import { SEO } from "next-seo.config";
import type { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
