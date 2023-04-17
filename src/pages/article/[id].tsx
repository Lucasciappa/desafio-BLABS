import React from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ImageProps } from '@types';
import { BlurImage } from '@components/BlurImage';
import Link from 'next/link';

interface Props {
    article: ImageProps;
}

const ArticlePage: NextPage<Props> = ({ article }) => {

    return (
        <div className="mx-auto max-w-4xl py-6">
            <Link href='/' className='text-base text-gray-600 underline hover:text-blue-400 m-4'>
                Volver al inicio
            </Link>
            <h2 className='text-center text-2xl pt-10 underline'>Artículo número {article.id}</h2>
            <article className='mx-auto mt-6 p-4 md:h-96 md:w-96'>
                <BlurImage key={article.id} image={article} />
            </article>
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {

    const url = `${process.env.API_URL}/photos`;
    const res = await fetch(url);
    const data: ImageProps[] = await res.json();
    const paths = data?.map(article => {
        return {
            params: { id: article?.id.toString() }
        };
    });
    return {
        paths,
        fallback: false
    }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { id } = params as { id: string };

    const url = `${process.env.API_URL}/photos`;
    const res = await fetch(`${url}/${id}/`);

    const data = await res.json();

    return {
        props: {
            article: data
        }
    }
}

export default ArticlePage;