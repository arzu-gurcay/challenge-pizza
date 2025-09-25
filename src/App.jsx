import { useState } from 'react'
import './App.css'
import { Switch,Route } from 'react-router-dom'
import Home from './components/Home'
import Pizza from "./components/Pizza"
import Success from './components/Success'

function App() {
  const [orders,setOrders]=useState([]);

  const addOrder=(newOrder)=>{
    setOrders((prevOrders)=>[...prevOrders,newOrder]);
  }
  
return (
 
      <Switch>
        <Route exact path="/" > <Home /></Route> 
        <Route path="/pizza" > <Pizza addOrder={addOrder}/></Route> 
        <Route path="/success" > <Success order={orders[orders.length-1]}/></Route> 
      </Switch>
      
    
  )
}

export default App;
