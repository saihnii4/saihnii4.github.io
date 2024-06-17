import * as React from "react"
import { _get_colorscheme } from "./Overrides"

const Nav = () => (
  <nav className={`bg-${_get_colorscheme()}-fg-nav text-xl font-semibold p-4`}>
    unga bunga
  </nav>
)

export default Nav
