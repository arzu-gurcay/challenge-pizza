import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import { Switch,Route } from 'react-router-dom'
import Home from './components/Home'
import Pizza from "./components/Pizza"
import Success from './components/Success'

function App() {
  
return (
    
      <Switch>
        <Route exact path="/"><Home /> </Route>
        <Route path="/pizza"> <Pizza /> </Route>
        <Route path="/success"> <Success /> </Route>
      </Switch>
    
  )
}

export default App
