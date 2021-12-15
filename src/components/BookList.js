import React, { useState, useEffect } from 'react'
import { generatePath, useNavigate } from 'react-router-dom'
import { BookCard, BookListWrapper, Button } from './StyledComponents'
import styled from 'styled-components'

const Background = 'https://i.imgur.com/fUBGg4L.jpg'

const BookSection = styled.section`
  width: 80%;
`
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 250px;
  align-items: center;
`
const BookTitleHeader = styled.div`
  background-color: #7153ff;
  width: 100%;
  height: 80px;
  border-radius: 15px 15px 0px 0px;
  text-align: center;
  h2 {
    font-size: 18px;
    padding: 0px 10px 0px 10px;
    color: #fff;
  }
`
const BookInfo = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;

  span {
    color: #7153ff;
    font-size: 24px;
    font-weight: 800;
  }
`

const BackgroundImage1 = styled.img`
  z-index: -1;
  position: fixed;
  opacity: 0.6;
  object-fit: cover;
  /* top: 20px; */
  /* left: 50px; */
  width: 100%;
  height: 100%;
  /* transform: rotate(-15deg); */
`
const BackgroundImage2 = styled.img`
  z-index: -1;
  position: fixed;
  opacity: 0.3;
  top: 20px;
  right: 50px;
  width: 40%;
  transform: rotate(15deg);
`

export const BookList = () => {
  const [bookList, setBookList] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchBookList()
  }, [])

  const fetchBookList = () => {
    fetch('https://carling-bookdata-api.herokuapp.com/books')
      .then((res) => res.json())
      .then((data) => setBookList(data))
  }

  return (
    <>
      <BackgroundImage1 src={Background} alt='girl reading' />
      <BookSection>
        <TitleWrapper>
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
          <h1>Book List</h1>
        </TitleWrapper>

        <BookListWrapper>
          {bookList.map((book) => (
            <BookCard key={book.id}>
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
