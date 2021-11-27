import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


import { getAllFilesMetadata } from '../lib/mdx'

export default function Home({ posts }) {
  return (
    <div>

        <Head>
          <title>Blog</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <di>

            {posts.map(post => (
              <Link key={post.slug} href={`/${post.slug}`}>
                <a>
                  <h2>{post.title} &rarr;</h2>
                  <p>{post.date}</p>
                </a>
              </Link> 
            ))}
            
          </di>
        </main>

        <footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
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
