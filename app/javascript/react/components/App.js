import React from 'react'

import { Route, Switch, BrowserRouter } from "react-router-dom"

import RegionsIndexPage from "./RegionsIndexPage"
import RegionShowContainer from "./RegionShowContainer"
import VineyardShowPage from "./VineyardShowPage"
import ReviewForm from "./ReviewForm"
// import VarietalShowPage from "./VarietalShowPage"

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={RegionsIndexPage} />
        <Route exact path="/regions/:id" component={RegionShowContainer} />
        <Route exact path="/vineyards/:id" component={VineyardShowPage} />
        <Route exact path="/vineyards/:vineyard_id/reviews/new" component={ReviewForm} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
