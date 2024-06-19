// TODO: use react context

import * as React from "react"
import { Highlight, themes } from "prism-react-renderer"
import { ThemeContext } from "../context/theme"

export const _get_colorscheme = () => {
  return React.useContext(ThemeContext)
}

export const Div: React.FC<
  React.PropsWithChildren & { className?: string }
> = ({ children, className }) => (
  <div className={`text-${_get_colorscheme()}-text ${className ?? ""}`}>
    {children}
  </div>
)

export const H1: React.FC<React.PropsWithChildren> = ({ children }) => (
  <h1 className={`text-4xl font-bold text-${_get_colorscheme()}-text-header`}>
    {children}
  </h1>
)

export const H2: React.FC<React.PropsWithChildren> = ({ children }) => (
  <h2
    className={`text-${_get_colorscheme()}-text-header text-3xl font-bold`}
  >
    {children}
  </h2>
)
export const H3: React.FC<React.PropsWithChildren> = ({ children }) => (
  <h3 className={`text-${_get_colorscheme()}-text-header text-2xl font-medium`}>
    {children}
  </h3>
)
export const H4: React.FC<React.PropsWithChildren> = ({ children }) => (
  <h4 className={`text-${_get_colorscheme()}-text-header text-xl font-medium`}>
    {children}
  </h4>
)
export const Span: React.FC<
  React.PropsWithChildren & { className?: string }
> = ({ children, className }) => (
  <span className={`text-${_get_colorscheme()}-text${" " + className ?? ""}`}>
    {children}
  </span>
)

const SyntaxHighlighter: React.FC<any> = ({ children }) => {
  const code = children.props?.children
  const language = children.props?.className?.replace("language-", "").trim()

  return (
    <Highlight code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style }}>
          {tokens.slice(0, -1).map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default SyntaxHighlighter
