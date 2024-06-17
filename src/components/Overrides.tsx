// TODO: use react context

import * as React from "react"

export const _get_colorscheme = () => {
  const stored = localStorage.getItem("colorscheme")
  if (stored === null) localStorage.setItem("colorscheme", "nord")
  return stored ?? "nord"
}

const _prepare_base_classes = () => {
  const colorscheme = _get_colorscheme()
  return `text-${colorscheme}`
}

export const Div: React.FC<
  React.PropsWithChildren & { className?: string }
> = ({ children, className }) => (
  <div className={`text-${_get_colorscheme()}-text ${className ?? ""}`}>
    {children}
  </div>
)

export const H1: React.FC<React.PropsWithChildren> = ({ children }) => (
  <h1
    className={`text-4xl font-bold text-${_get_colorscheme()}-text-header`}
  >
    {children}
  </h1>
)

export const H2: React.FC<React.PropsWithChildren> = ({ children }) => (
  <h2 className={`text-${_get_colorscheme()}-text-header`}>{children}</h2>
)
export const H3: React.FC<React.PropsWithChildren> = ({ children }) => (
  <h3 className={`text-${_get_colorscheme()}-text-header`}>{children}</h3>
)
export const H4: React.FC<React.PropsWithChildren> = ({ children }) => (
  <h4 className={`text-${_get_colorscheme()}-text-header`}>{children}</h4>
)
export const Span: React.FC<
  React.PropsWithChildren & { className?: string }
> = ({ children, className }) => (
  <span className={`text-${_get_colorscheme()}-text${" " + className ?? ""}`}>
    {children}
  </span>
)
