import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Candidates from './components/characters/Candidates';




const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)




  useEffect(() =>{
    const fetchItems = async () => {
      let response = await fetch('./data.json')
      let data = await response.json() 
      console.log(data.members[0].name)
      setItems(data.members)
      setIsLoading(false)
    }

    fetchItems()
  }, [])

  return (
    
    <div className="container">
      <Header/>
      <Candidates isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
