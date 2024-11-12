// import { useState } from 'react'
import Layout from './Layout/Layout'
import Home from './Home.tsx';
import Starships from './Starships';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
  <div className="">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='starships' element={<Starships />} />
      </Route>
    </Routes>
  </div> 
  )
}

export default App
