import * as React from "react"
import "./src/styles/main.css"
import "prism-themes/themes/prism-nord.css"
import Layout from "./src/components/Layout"

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
