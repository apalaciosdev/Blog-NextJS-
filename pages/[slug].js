import { getFileBySlug, getFiles } from '../lib/mdx'
import { MDXRemote } from 'next-mdx-remote' 
import MDXComponents from '../components/MDXComponents'
import { BodyDiv, GeneralDiv } from '../styles/Global'
import px2vw from "../utils/px2vw";

export default function Post({ source, frontmatter }) {
  return (
    <div className="body-gen">
      <GeneralDiv>
        <BodyDiv>
          <MDXRemote {...source} components={MDXComponents}/>

        </BodyDiv>
      </GeneralDiv>
      <style jsx global>{`
        .body-gen {
          display: flex;
          align-items: center;
          justify-content: center;
        }

      `}</style>
    </div>
      )

}

export async function getStaticProps({ params }){
  const { source, frontmatter } = await getFileBySlug(params.slug)

  return{
    props: {source, frontmatter}
  }
}



export async function getStaticPaths(){
  const posts = await getFiles()
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, "")
    }
  }))

  return{
    paths,
    fallback: false
  }
}