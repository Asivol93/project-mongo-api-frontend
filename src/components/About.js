import React from 'react'
import { generatePath, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import {
  BookSection,
  BackgroundImage1,
  Button,
  ListHeader,
} from './StyledComponents'

const AboutTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  h1 {
    color: #fff;
    font-size: 60px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    margin: 0 0 10px 0;
  }
`
const AboutContainer = styled.section`
  background-color: rgba(255, 255, 255, 0.3);
  padding: 30px;
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 20px;

  p {
    margin: 5px;
  }
  h4 {
    margin: 3px;
  }

  h2,
  h3 {
    text-align: center;
    a {
      color: #fff;
    }
  }
`
const Footer = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  p {
    font-weight: 600;
  }
  span {
    font-size: 22px;

    font-family: 'Nothing You Could Do', cursive;
  }
`

const Background = 'https://i.imgur.com/fUBGg4L.jpg'

export const About = () => {
  const navigate = useNavigate()

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
        <AboutTitleWrapper>
          <h1>About</h1>
          <AboutContainer>
            <h2>
              Frontend built with React to display book data from an API. API
              built with MongoDB and deployed with Heroku.
            </h2>
            <h3>
              Following endpoints are available from the{' '}
              <a
                href='https://carling-bookdata-api.herokuapp.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                API:
              </a>
            </h3>
            <div>
              <h4>Path: /books</h4>
              <p>Shows all books available</p>
            </div>
            <div>
              <h4>Path: /books/:id</h4>
              <p>Shows you the book with matching id</p>
            </div>
            <div>
              <h4>Path: /books?= query param</h4>
              <p>
                Available query params are title and author built with regular
                expressions with methods as include and no case sensitivity
              </p>
              <p>Title: ?title=enter title </p>
              <p>Author: ?authors=enter author </p>
            </div>
            <div>
              <h4>
                Path: /books/pages/shortbooks or /mediumbooks or /longbooks
              </h4>
              <p>Shows you books matching a range of pages</p>
              <p>Short books: Less than 350 pages</p>
              <p>Medium books: Between 350 pages and 799 pages</p>
              <p>Long books: Greater and equal to 800 pages</p>
            </div>
            <div>
              <h4>
                Path: /books/ratings/lowrating or /mediumratung or /highrating
              </h4>
              <p>Shows you books matching an average rating score</p>
              <p>Low rating: average rating less than 2.5</p>
              <p>Medium rating: Average rating between 2.5 and 3.6</p>
              <p>High rating: Greater and equal to 3.7</p>
            </div>
          </AboutContainer>
          <Footer>
            <p>Designed and developed by</p>
            <span>Lovisa Carling</span>
          </Footer>
        </AboutTitleWrapper>
      </BookSection>
    </>
  )
}
