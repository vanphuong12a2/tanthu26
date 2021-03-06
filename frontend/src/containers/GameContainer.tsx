import React from 'react';
import Game from '../components/GamePage/Game/Game';
import {connect} from 'react-redux';
import {ApplicationState} from '../store/ApplicationState';
import {loadGame} from '../store/game/gameActionCreator';
import {addPlayer, newPlayer, removePlayer} from '../store/player/playerActionCreator';
import PlayerData from '../models/PlayerData';

const mapStateToProps = (state: ApplicationState, ownProps: { gameId: string }) => ({
  gameId: ownProps.gameId,
  loading: state.game.loading,
  error: state.game.error,
  playing: state.game.playing,
  currentPlayer: state.player.currentPlayer,
  players: state.player.players,
  cards: state.card.cards,
});

const mapDispatchToProps = (dispatch: any) => ({
  loadGameFunction: (gameId: string) => dispatch(loadGame(gameId)),
  joinGameFunction: (gameId: string) => dispatch(newPlayer(gameId)),
  addPlayerFunction: (player: PlayerData) => dispatch(addPlayer(player)),
  removePlayerFunction: (player: PlayerData) => dispatch(removePlayer(player))
});


export default connect(mapStateToProps, mapDispatchToProps)(Game);
