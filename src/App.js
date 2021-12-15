import React, { useState } from 'react'
import { Routes, Route, generatePath, useNavigate } from 'react-router-dom'
import { TitleWrapper, Button, Select } from 'components/StyledComponents'
import { StartPage } from 'components/StartPage'
import { BookList } from 'components/BookList'
import { RatingsList } from 'components/RatingsList'

export const App = () => {
  const navigate = useNavigate()

  return (
    <>
      <Routes>
        <Route index path='/' element={<StartPage />} />

        <Route path='/books' element={<BookList />} />
        <Route path={'/books/ratings/:lowrating'} element={<RatingsList />} />
        <Route
          path={'/books/ratings/:mediumrating'}
          element={<RatingsList />}
        />
        <Route path={'/books/ratings/:highrating'} element={<RatingsList />} />
      </Routes>
    </>
  )
}
