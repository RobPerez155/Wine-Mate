import React from 'react'

import { Route, Switch, BrowserRouter } from "react-router-dom"

import RegionsIndexPage from "./RegionsIndexPage"
import RegionShowContainer from "./RegionShowContainer"
import VineyardShowPage from "./VineyardShowPage"

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={RegionsIndexPage} />
        <Route exact path="/regions/:id" component={RegionShowContainer} />
        <Route exact path="/vineyards/:id" component={VineyardShowPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
