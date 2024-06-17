import * as React from "react"
import { _get_colorscheme, Div } from "./Overrides"
import Nav from "./Nav"

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Div className={`bg-${_get_colorscheme()}-bg w-full h-full`}>
    <Div className="w-1/2 m-auto p-8 flex flex-col gap-8 h-full">
      <Nav />
      {children}
    </Div>
  </Div>
)

export default Layout
