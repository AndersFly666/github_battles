var React = require('react');
var Link = require('react-router').Link;
var PropTypes = React.PropTypes;
var styles = require('../styles/');
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var MainContainer = require('../components/MainContainer');
var Loading = require('../components/Loading');

function ConfirmBattle(props) {
  return props.isLoading === true
  ? <Loading/>
  : <MainContainer>
    <h1>Confirm Players</h1>
    <div className="col-sm-8 col-sm-offset-2">
      <UserDetailsWrapper header="Player 1">
        <UserDetails info={props.playersInfo[0]}/>
      </UserDetailsWrapper>
      <UserDetailsWrapper header="Player 2">
        <UserDetails info={props.playersInfo[1]}/>
      </UserDetailsWrapper>
    </div>
    <div className="col-sm-8 col-sm-offset-2">
      <div className="col-sm-12" style={styles.space}>
        <button type='button' className="btn btn-success" onClick={props.onInitiateBattle}>
          Initiate battle</button>
      </div>
      <div className="col-sm-12" style={styles.space}>
        <Link to="/playerOne">
          <button type='button' className="btn btn-lg btn-danger">Reselect Players</button>
        </Link>
      </div>
    </div>
  </MainContainer>
}

ConfirmBattle.PropTypes = {
  isLoading : PropTypes.bool.isReaquired,
  onInitiateBattle :PropTypes.func.isReaquired,
  playersInfo: PropTypes.array.isReaquired,
},

module.exports = ConfirmBattle;