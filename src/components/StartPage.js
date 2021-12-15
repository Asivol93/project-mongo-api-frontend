import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, TitleWrapper, Select } from './StyledComponents'
import { generatePath, useNavigate } from 'react-router-dom'

const Background = 'https://i.imgur.com/fUBGg4L.jpg'

const HeaderContainer = styled.header`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    z-index: -1;
    height: 100%;
    width: 100%;
    position: absolute;
    object-fit: cover;
  }
`

const TitleContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  width: 60%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  h1 {
    color: #fff;
    font-size: 60px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    margin: 0 0 10px 0;
  }
  p {
    color: #fff;
    font-size: 20px;
    margin: 0;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
  }
`

export const StartPage = () => {
  const [ratings, setRatings] = useState()
  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <img src={Background} alt='purple background' />
      <TitleContainer>
        <p>Welcome to</p>
        <h1>BookNet</h1>
        <TitleWrapper>
          <Button
            onClick={(event) =>
              navigate(
                generatePath('/books', {
                  books: event.target.value,
                })
              )
            }
          >
            All books
          </Button>
          <Select
            onChange={(event) =>
              navigate(
                generatePath('/books/ratings/:rating', {
                  rating: event.target.value,
                })
              )
            }
          >
            <option value=''>Select rating</option>
            <option value='lowrating'>Low rating</option>
            <option value='mediumrating'>Medium rating</option>
            <option value='highrating'>High rating</option>
          </Select>
          <Select>
            <option value=''>Select length</option>
            <option value='short books'>Short books</option>
            <option value='medium books'>Medium books</option>
            <option value='long books'>Long books</option>
          </Select>
        </TitleWrapper>
      </TitleContainer>
    </HeaderContainer>
  )
}
