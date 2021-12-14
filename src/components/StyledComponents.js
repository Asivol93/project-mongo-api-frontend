import styled from 'styled-components'

export const Button = styled.button`
  padding: 10px;
  width: 110px;
  color: #7153ff;
  margin: 0px 10px 0px 10px;
  border: solid 3px #7153ff;
  border-radius: 20px;
  background-color: #7153ff;
  color: #fff;
  &:hover {
    background-color: #fff;
    color: #7153ff;
  }
`
export const BookListWrapper = styled.div`
  /* width: 80%; */
  /* display: grid;
  grid-gap: 20px 0px;
  grid-template-columns: auto; */
  padding: 5px;
  display: inline-flex;
  /* flex-direction: row; */
  flex-wrap: wrap;
  /* gap: 10px; */
  @media (max-width: 700px) {
    /* grid-template-columns: 50% 50%;
    grid-gap: 20px 20px; */
    flex-direction: column;
  }
`

export const BookCard = styled.div`
  background-color: #7153ff;
  /* padding: 40px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 50%;
  /* margin: 5px; */
`
