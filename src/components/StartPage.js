import React from 'react'
import styled from 'styled-components'
import { Button } from './StyledComponents'
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

const TitleWrapper = styled.div`
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
    font-size: 40px;
  }
  p {
    color: #fff;
    font-size: 20px;
    margin: 0;
  }
`

export const StartPage = () => {
  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <img src={Background} alt='purple background' />
      <TitleWrapper>
        <p>Welcome to</p>
        <h1>BookNet</h1>
        <div>
          <Button
            onClick={(event) =>
              navigate(
                generatePath('/books', {
                  book: event.target.value,
                })
              )
            }
          >
            Find books
          </Button>
          <Button>About</Button>
        </div>
      </TitleWrapper>
    </HeaderContainer>
  )
}
