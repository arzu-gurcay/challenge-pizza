import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import { Switch,Route } from 'react-router-dom'
import Home from './components/Home'
import Pizza from "./components/Pizza"

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <Switch>
        <Route path="/"><Home /> </Route>
        <Route path="/pizza"> <Pizza /> </Route>
      </Switch>
    
  )
}

export default App
