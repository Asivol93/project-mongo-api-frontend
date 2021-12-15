import styled from 'styled-components'

export const Button = styled.button`
  padding: 10px;
  width: 110px;
  height: 40px;
  color: #7153ff;
  margin: 0px 10px 0px 10px;
  border: solid 3px #7153ff;
  border-radius: 20px;
  background-color: #7153ff;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  &:hover {
    background-color: #fff;
    color: #7153ff;
  }
`

export const Select = styled.select`
  /* padding: 10px; */
  height: 40px;
  color: #7153ff;
  margin: 0px 10px 0px 10px;
  border: solid 3px #7153ff;
  border-radius: 20px;
  background-color: #7153ff;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  &:hover {
    background-color: #fff;
    color: #7153ff;
  }
`
export const BookSection = styled.section`
  width: 80%;
`
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
`
export const BookTitleHeader = styled.div`
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
export const BookInfo = styled.div`
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
export const BackgroundImage1 = styled.img`
  z-index: -1;
  position: fixed;
  opacity: 0.6;
  object-fit: cover;
  width: 100%;
  height: 100%;
`

export const BookListWrapper = styled.div`
  padding: 5px;
  grid-gap: 20px;
  display: grid;
  grid-template-columns: auto auto;

  @media (max-width: 700px) {
    grid-template-columns: auto;
  }
`

export const BookCard = styled.div`
  /* padding: 20px 40px 0px 40px; */
  height: 300px;
  word-break: break-all;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 50%;
  border-radius: 15px;
  h3 {
    font-size: 16px;
    margin: 0;
  }
  span {
    color: #7153ff;
    font-size: 24px;
    font-weight: 800;
  }
`
