import * as React from "react"
import { _get_colorscheme, Div, H1, H2, Span } from "../components/Overrides"
import { graphql } from "gatsby"

const Index = props => {
  const posts: Array<any> = props.data.allMdx.nodes
  // TODO: Incorporate github data
  const projects = [
    {
      title: "oasis.sh",
      description: "a social media platform for developers",
    },
    {
      title: "last.fm tui",
      description: "last.fm terminal user interface written in rust",
    },
    {
      title: "NBSTEM",
      description: "school club presentations and learning material",
    },
    {
      title: "Snake Typer",
      description: "Windows XP+ compatible typing game intended to run on minimal resources"
    }
  ]
  return (
    <Div className="flex gap-8 h-full">
      <Div className="basis-1/2 lg:basis-1/3">
        <Div className="flex gap-2 flex-col items-center">
          <img
            src="https://avatars.githubusercontent.com/u/81787757?v=4"
            className="object-contain h-64 w-64 mb-2"
          />
          <span className="text-2xl font-semibold">saihnii4</span>
          <span>
            chembiophys enthusiast. part-time programmer, full-time debugger
          </span>
        </Div>
      </Div>
      <Div
        className={`basis-1/2 lg:basis-2/3 w-2/3 bg-${_get_colorscheme()}-fg p-4 h-auto flex flex-col`}
      >
        <Div className="basis-1/2 flex flex-col gap-2">
          <H2>projects</H2>
          <Div className="grid grid-cols-2 gap-2">
            {projects.map(project => (
              <Div>
                <Span className="font-semibold text-md overflow-hidden whitespace-nowrap text-ellipsis">
                  {project.title}
                </Span>
                <hr />
                <Span className="block font-light text-xs">
                  {project.description}
                </Span>
              </Div>
            ))}
          </Div>
        </Div>
        <Div className="basis-1/2 flex flex-col gap-2">
          <H2>posts</H2>
          <Div className="">
            {posts.map(post => (
              <>
                <Span className="font-semibold text-md overflow-hidden whitespace-nowrap text-ellipsis">
                  {post.frontmatter.title}
                </Span>
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
