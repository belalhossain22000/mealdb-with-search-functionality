import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Meal from './components/Meal/Meal';
import Header from './components/Header/Header';
// import { Button } from 'react-bootstrap';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
     <Meal></Meal>
    </div>
  )
}

export default App
