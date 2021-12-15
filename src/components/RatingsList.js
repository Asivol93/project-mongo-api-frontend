import React, { useState, useEffect } from 'react'
import { generatePath, useNavigate, useParams } from 'react-router-dom'
import {
  BookSection,
  TitleWrapper,
  BookTitleHeader,
  BackgroundImage1,
  BookInfo,
  BookCard,
  BookListWrapper,
  Button,
  Select,
} from './StyledComponents'

const Background = 'https://i.imgur.com/fUBGg4L.jpg'

export const RatingsList = () => {
  const { rating } = useParams
  const [ratingsList, setRatingsList] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchRatingsList()
  }, [rating])

  const fetchRatingsList = () => {
    fetch(`https://carling-bookdata-api.herokuapp.com/books/ratings/${rating}`)
      .then((res) => res.json())
      .then((data) => setRatingsList(data))
  }

  return (
    <>
      <BackgroundImage1 src={Background} alt='girl reading' />
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
          {ratingsList.map((book) => (
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
