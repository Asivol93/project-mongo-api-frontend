import React, { useState, useEffect } from 'react'
import { BookCard, BookListWrapper } from './StyledComponents'
import styled from 'styled-components'

const BookSection = styled.section`
  width: 80%;
`

export const BookList = () => {
  const [bookList, setBookList] = useState([])

  useEffect(() => {
    fetchBookList()
  }, [])

  const fetchBookList = () => {
    fetch('https://carling-bookdata-api.herokuapp.com/books')
      .then((res) => res.json())
      .then((data) => setBookList(data))
  }

  return (
    <BookSection>
      <h1>Book List</h1>
      <BookListWrapper>
        {bookList.map((book) => (
          <BookCard key={book.id}>
            <h2>{book.title}</h2>
            <h3>{book.authors}</h3>
            <p>
              score <span>{book.average_rating}</span>
            </p>
          </BookCard>
        ))}
      </BookListWrapper>
    </BookSection>
  )
}
