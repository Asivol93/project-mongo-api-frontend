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
  ListHeader,
} from './StyledComponents'

const Background = 'https://i.imgur.com/fUBGg4L.jpg'

export const BookList = () => {
  const [bookList, setBookList] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchBookList()
    return () => {
      //This return statement unmounts the component from the DOM. Using a console.log to return something for it to work.
      console.log('Unmount component')
    }
  }, [])

  const fetchBookList = () => {
    fetch('https://carling-bookdata-api.herokuapp.com/books')
      .then((res) => res.json())
      .then((data) => setBookList(data))
  }

  return (
    <>
      <BackgroundImage1 src={Background} alt='purple' />
      <BookSection>
        <ListHeader>
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
        </ListHeader>
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
