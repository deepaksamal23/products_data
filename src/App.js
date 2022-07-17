// import React  from 'react'
import './App.css';
import React, { useEffect,useState } from 'react'
import axios from 'axios'
import Products from './components/Products';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import CardDetails from './components/CardDetails';

function App() {
  const [item, setItem] = useState([])
  const  ProductData=()=>{
        axios.get('https://fakestoreapi.com/products').then((resp)=>{
              // console.log(resp.data);
              setItem(resp.data)
        })
  }
  useEffect(()=>{
    // ProductData();    
  },[])
  return (
    <div className="App">
   
   <Router>
      <Routes>
      <Route  path="/" element={<Products  item={item}/>}  />
      <Route path="/products/:productId" element={<CardDetails item={item} />} />
      </Routes>
      </Router>
   
        </div>
  );
}

export default App;
