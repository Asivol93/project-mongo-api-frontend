import React, { useState, useEffect } from 'react'
import { generatePath, useNavigate } from 'react-router-dom'
import {
  BookSection,
  BookTitleHeader,
  BookInfo,
  BookCard,
  BackgroundImage1,
  BookListWrapper,
  Button,
} from './StyledComponents'

const Background = 'https://i.imgur.com/fUBGg4L.jpg'

export const BookList = () => {
  const [bookList, setBookList] = useState([])
  const [ratingsInput, setRatingsInput] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    fetchBookList()
  })

  const fetchBookList = () => {
    fetch('https://carling-bookdata-api.herokuapp.com/books')
      .then((res) => res.json())
      .then((data) => setBookList(data))
  }

  // const onRatingsInputChange = (event) => {
  //   setRatingsInput(event.target.value)
  // }

  return (
    <>
      <BackgroundImage1 src={Background} alt='purple' />
      <BookSection>
        <Button
          onClick={(event) =>
            navigate(
              generatePath('/', {
                book: event.target.value,
              })
            )
          }
        >
          Go back
        </Button>
        <BookListWrapper>
          {bookList.map((book) => (
            <BookCard key={book._id}>
              <BookTitleHeader>
                <h2>{book.authors}</h2>
              </BookTitleHeader>
              <h3>{book.title}</h3>
              <BookInfo>
                <p>
                  pages <span>{book.num_pages}</span>
                </p>
                <p>
                  rating <span>{book.average_rating}</span>
                </p>
              </BookInfo>
            </BookCard>
          ))}
        </BookListWrapper>
      </BookSection>
    </>
  )
}
