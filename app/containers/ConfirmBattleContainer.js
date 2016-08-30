var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubhelpers');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      isLoading: true,
      playersInfo: []
    }
  },
  componentDidMount: function() {
    var query = this.props.location.query;
    var that = this;
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function(players) {
        console.log(players);
        that.setState({
          isLoading: false,
          playersInfo: players
        });
      });
  },
  handleInitiateBattle: function() {
    this.context.router.push({
      pathname: 'results',
      state: {
        playerInfo: this.state.playersInfo
      }
    })
  },
  render: function() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        onInitiateBattle={this.handleInitiateBattle}
        playersInfo={this.state.playersInfo}/>
    )
  }
});

module.exports = ConfirmBattleContainer;