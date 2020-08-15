import React from 'react'

import { Route, Switch, BrowserRouter } from "react-router-dom"

import HomePage from "./HomePage"
import RegionsIndexPage from "./RegionsIndexPage"
import RegionShowContainer from "./RegionShowContainer"
import VineyardShowContainer from "./VineyardShowContainer"
import ReviewForm from "./ReviewForm"
import VarietalsIndexPage from "./VarietalsIndexPage"

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/regions" component={RegionsIndexPage} />
        <Route exact path="/varietals" component={VarietalsIndexPage} />
        <Route exact path="/regions/:id" component={RegionShowContainer} />
        <Route exact path="/vineyards/:id" component={VineyardShowContainer} />
        <Route exact path="/vineyards/:vineyard_id/reviews/new" component={ReviewForm} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
