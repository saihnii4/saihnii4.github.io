import * as React from "react"
import "./src/styles/main.css"
import "prism-themes/themes/prism-nord.css"
import Layout from "./src/components/Layout"

export const wrapPageElement = ({ element, props }) => {
  console.log(props);
  return <Layout {...props}>{element}</Layout>
}

export const createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("Error loading MDX result", result.errors)
  }

  const posts = result.data.allMdx.nodes

  posts.forEach(node => {
    console.error(node.internal.contentFilePath);
    createPage({
      path: node.frontmatter.slug,
      component: node.internal.contentFilePath,
      context: { id: node.id, testing: "haij" },
    })
  })
}
