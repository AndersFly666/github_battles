var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles/');
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var Link = require('react-router').Link;
var MainContainer = require('../components/MainContainer');
var Loading = require('../components/Loading');

function StartOver() {
  return (
    <MainContainer>
      <div className="col-sm-12" style={styles.space}>
        <Link to='/playerOne'>
          <button type='button' className="btn btn-lg btn-danger">Start over</button>
        </Link>
      </div>
    </MainContainer>
  )
}

function Results(props) {
  if (props.isLoading === true) {
    return (
      <Loading text="Wait for it" speed={200}/>
    )
  }

  if (props.scores[0] === props.scores[1]) {
    return (
      <MainContainer>
        <h1>It's a tie!</h1>
        <StartOver />
      </MainContainer>
    )
  }

  var winIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  var looseIndex = winIndex === 0 ? 1 : 0;
  return (
    <MainContainer>
      <h1>Results</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header='Winner'>
          <UserDetails score={props.scores[winIndex]} info={props.playerInfo[winIndex]}/>
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Looser'>
          <UserDetails score={props.scores[looseIndex]} info={props.playerInfo[looseIndex]}/>
        </UserDetailsWrapper>
      </div>
      <StartOver/>
    </MainContainer>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playerInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
};

module.exports = Results;