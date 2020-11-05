import './App.css';
import { connect } from 'react-redux'
import { fetchGames } from './actions'
import { useEffect } from 'react';
import { StyledHeader, StyledList, StyledCard } from './styling'

function App(props) {
  useEffect(() => {
    props.fetchGames()
  }, [])
  return (
    <div className="App">
      <StyledHeader>
        <img src='https://images.nintendolife.com/c9e51688f744b/nintendo-logo.original.jpg' alt='Nintendo Logo' />
        <nav>
          <a href=''>News</a>
          <a href=''>Games</a>
          <a href=''>Hardware</a>
        </nav>
      </StyledHeader>
      {props.gameData.map(game => {
        return (
          <StyledList key={game.id}>
            <StyledCard>
              <h2>{game.name}</h2>
              <h4>{game.released_date}</h4>
              <p>{game.description}</p>
            </StyledCard>
          </StyledList>
        )
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    gameData: state.gameData
  }
}

export default connect(mapStateToProps, {fetchGames})(App);
