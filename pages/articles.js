import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { PostListItem } from '../components/PostListItem'



import { getAllFilesMetadata } from '../lib/mdx'
import { GlobalStyle } from '../styles/GlobalStyle';

export default function Articles({ posts }) {
  return (
    <div>

      
        <Head>
          <title>Blog</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

      

        {posts.map((post) => (
          <Link href={`/${post.slug}`} key={post.slug}>
            <a>
              <PostListItem
                title={post.title}
                date={post.date}
                languaje={post.languaje}
              />
            </a>
          </Link>
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
