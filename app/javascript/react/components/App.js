import React from 'react'

import { Route, Switch, BrowserRouter } from "react-router-dom"

import RegionsIndexPage from "./RegionsIndexPage"

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={RegionsIndexPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
