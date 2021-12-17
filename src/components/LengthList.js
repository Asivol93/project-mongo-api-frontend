import React, { useState, useEffect } from 'react'
import { generatePath, useNavigate, useParams } from 'react-router-dom'
import {
  BookSection,
  BookTitleHeader,
  BackgroundImage1,
  BookInfo,
  BookCard,
  BookListWrapper,
  Button,
  ListHeader,
} from './StyledComponents'

const Background = 'https://i.imgur.com/fUBGg4L.jpg'

export const LengthList = () => {
  const [lengthList, setLengthList] = useState([])
  const navigate = useNavigate()
  const URL_RATING = (length) =>
    `https://carling-bookdata-api.herokuapp.com/books/pages/${length}`
  const { length } = useParams()

  useEffect(() => {
    fetch(URL_RATING(length))
      .then((res) => res.json())
      .then((data) => setLengthList(data))
  }, [length])

  return (
    <>
      <BackgroundImage1 src={Background} alt='girl reading' />
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
          {lengthList.map((book) => (
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
