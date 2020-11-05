import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'


// Global Styling 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #fff;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.4rem;
    height: 100vh;
    max-width: 100%;
  }
`

export default GlobalStyle

// Other Styling
export const StyledHeader = styled.header`
background: #E00101;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
height: 15vh;
  img {
    height: 15vh;
  }
  nav {
    width: 27%;
    margin: 2rem;
    display: flex;
    justify-content: space-between;
  }
  nav a {
    text-decoration: none;
    color: #fff;
    font-weight: 900;
  }
`

export const StyledList = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const StyledCard = styled.div`
  width: 70%;
  margin-top: 3%;
  padding: 40px;
  margin-bottom: 0;
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  color: #fff;
  text-align: center;
  background: #E00101;
`