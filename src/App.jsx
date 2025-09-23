import { useState } from 'react'
import './App.css'
import { Switch,Route } from 'react-router-dom'
import Home from './components/Home'
import Pizza from "./components/Pizza"
import Success from './components/Success'

function App() {
  
return (
    
      <Switch>
        <Route exact path="/" component={Home}/> 
        <Route path="/pizza" component={Pizza}/>
        <Route path="/success" component={Success} />
      </Switch>
    
  )
}

export default App
