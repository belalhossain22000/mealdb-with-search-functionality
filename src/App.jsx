import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Meal from './components/Meal/Meal';
import Header from './components/Header/Header';



function App() {
  // search btn implimentation
  const [searchTerm, setSearchTerm] = useState("");
  const [search,setSearch]=useState("");

  const handleSearFeald = () => {
    setSearch(searchTerm);
    console.log(searchTerm)
  }

  function handleInputChange(event) {
    setSearchTerm(event.target.value);
  }

  

  return (
    <div className="App">
      <Header 
        searchTerm={searchTerm}
        handleSearFeald={handleSearFeald}
        handleInputChange={handleInputChange}
      ></Header>
     <Meal searchTerm={search}></Meal>
    </div>
  )
}

export default App
