import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Content from './Content'
import MyWatchList from './MyWatchList'

export default function Routtes() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path='/'>
            <Route index element={<Content/>}/>
            <Route path='mywatchlist' element={<MyWatchList/>}/>
        </Route>
       </Routes>
      </BrowserRouter>
    </div>
  )
}
