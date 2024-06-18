import * as React from "react"
import { _get_colorscheme, Div, H1 } from "../components/Overrides"

const Index = () => (
  <Div className="flex gap-8 h-full">
    <Div className="basis-1/2 lg:basis-1/3">TODO:</Div>
    <Div
      className={`basis-1/2 lg:basis-2/3 bg-${_get_colorscheme()}-fg p-4 h-auto flex flex-col`}
    >
      <Div className="basis-1/2">
        <H1>projects</H1>
      </Div>
      <Div className="basis-1/2">
        <H1>posts</H1>
      </Div>
    </Div>
  </Div>
)

export default Index
