import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { StartPage } from 'components/StartPage'
import { BookList } from 'components/BookList'
import { RatingsList } from 'components/RatingsList'
import { LengthList } from 'components/LengthList'
import { About } from 'components/About'

export const App = () => {
  return (
    <>
      <Routes>
        <Route index path='/' element={<StartPage />} />
        <Route path='/books' element={<BookList />} />
        <Route path='/books/ratings/:rating' element={<RatingsList />} />
        <Route path='/books/pages/:length' element={<LengthList />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}
