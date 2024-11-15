// import { useState } from 'react'
import Layout from './Layout/Layout'
import Home from './Home.tsx';
import Starships from './Starships';
import { Routes, Route } from "react-router-dom";
import StarshipDetails from './Details/StarshipDetails.tsx';

function App() {

  return (
  <div className="">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='starships' element={<Starships />} />
        <Route path="starships/:name" element={<StarshipDetails />}/>
      </Route>
    </Routes>
  </div> 
  )
}

export default App;
