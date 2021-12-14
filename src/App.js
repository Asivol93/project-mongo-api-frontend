import React from 'react'
import { Routes, Route, generatePath, useNavigate } from 'react-router-dom'
import { StartPage } from 'components/StartPage'
import { BookList } from 'components/BookList'

export const App = () => {
  return (
    <Routes>
      <Route index path='/' element={<StartPage />} />
      <Route path='/books' element={<BookList />} />
    </Routes>
  )
}
