import {Action} from 'redux';

export interface AddGameRequestAction extends Action {
  type: '@@game/ADD_GAME_REQUEST'
}

export interface AddGameSuccessAction extends Action{
  type: '@@game/ADD_GAME_SUCCESS',
  payload: {
    id: number
  }
}

export interface AddGameFailureAction extends Action{
  type: '@@game/ADD_GAME_FAILURE',
  error: Error
}
export type GameActions = AddGameRequestAction | AddGameSuccessAction | AddGameFailureAction;