import * as React from "react"
import { _get_colorscheme, Div, H1, H2, Span } from "../components/Overrides"
import { graphql } from "gatsby"

const Index = props => {
  const posts: Array<any> = props.data.allMdx.nodes
  return (
    <Div className="flex gap-8 h-full">
      <Div className="basis-1/2 lg:basis-1/3">
        <img
          src="https://avatars.githubusercontent.com/u/81787757?v=4"
          className="object-contain h-128 w-128"
        />
        <span>saihnii4</span>
      </Div>
      <Div
        className={`basis-1/2 lg:basis-2/3 w-2/3 bg-${_get_colorscheme()}-fg p-4 h-auto flex flex-col`}
      >
        <Div className="basis-1/2 flex flex-col gap-2">
          <H2>projects</H2>
        </Div>
        <Div className="basis-1/2 flex flex-col gap-2">
          <H2>posts</H2>
          <Div className="">
            {posts.map(post => (
              <>
                <Span className="font-semibold text-md overflow-hidden whitespace-nowrap text-ellipsis">{post.frontmatter.title}</Span>
                <hr />
                <Span className="block font-light text-xs">{post.excerpt}</Span>
              </>
            ))}
          </Div>
        </Div>
      </Div>
    </Div>
  )
}

export default Index

export const query = graphql`
  {
    allMdx {
      nodes {
        id
        frontmatter {
          slug
          title
          date
        }
        excerpt
        fields {
          timeToRead {
            minutes
            words
          }
        }
      }
    }
  }
`
