import {Action} from 'redux';
import PlayerData from '../../models/PlayerData';

export interface SetPlayersAction extends Action {
  type: '@@player/SET_PLAYERS',
  players: PlayerData[]
}

export interface AddPlayerRequestAction extends Action {
  type: '@@player/ADD_PLAYER_REQUEST'
}

export interface AddPlayerSuccessAction extends Action {
  type: '@@player/ADD_PLAYER_SUCCESS',
  playerId: string
}

export interface AddPlayerFailureAction extends Action {
  type: '@@player/ADD_PLAYER_FAILURE',
  error: Error
}

export type PlayerAction = SetPlayersAction | AddPlayerRequestAction | AddPlayerSuccessAction | AddPlayerFailureAction;
