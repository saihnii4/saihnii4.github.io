import * as React from "react"
import SyntaxHighlighter, {
  _get_colorscheme,
  Div,
  H1,
  H2,
  H3,
  H4,
  Span,
} from "./Overrides"
import Nav from "./Nav"
import { MDXProvider } from "@mdx-js/react"
import { ThemeContext } from "../context/theme"
import { graphql, useStaticQuery } from "gatsby"
import TeX from "@matejmazur/react-katex"
import "katex/dist/katex.css";

const componentList = {
  h1: H1,
  div: props => {
    if (props.className.includes("math-display")) {
      import("katex/dist/katex.css")
      return <TeX block math={props.children} />
    }
    return <Div {...props} />
  },
  h2: H2,
  h3: H3,
  h3: H4,
  span: props => Span,
  pre: SyntaxHighlighter,
}

const Layout: React.FC<React.PropsWithChildren | any> = ({
  children,
  pageContext,
  post,
}) => {
  const [theme, setTheme] = React.useState("nord")

  React.useEffect(() => {
    const colorscheme = window.localStorage.getItem("colorscheme")
    if (!colorscheme) window.localStorage.setItem("colorscheme", "nord")
    setTheme(colorscheme ?? "nord")
  }, [])

  return (
    <ThemeContext.Provider value={theme}>
      <Div className={`bg-${theme}-bg w-full ${post ? "h-auto" : "h-full"}`}>
        <Div className="w-1/2 m-auto p-8 flex flex-col gap-8 h-full">
          <Nav />
          <MDXProvider components={componentList}>{children}</MDXProvider>
        </Div>
      </Div>
    </ThemeContext.Provider>
  )
}

export default Layout
