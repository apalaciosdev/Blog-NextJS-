import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import NextLink from "next/link";
import { PostListItem } from '../components/PostListItem'



import { getAllFilesMetadata } from '../lib/mdx'

export default function Home({ posts }) {
  return (
    <div>

        <Head>
          <title>Blog</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>



      

        {posts.map((post) => (
          <NextLink href={`/${post.slug}`} key={post.slug}>
            <a>
              <PostListItem
                title={post.title}
                date={post.date}
                languaje={post.languaje}
              />
            </a>
          </NextLink>
        ))}

    </div>
  )
}

export async function getStaticProps(){
  const posts = await getAllFilesMetadata()
  console.log(posts)
  return{
    props: {posts}
  }
}
