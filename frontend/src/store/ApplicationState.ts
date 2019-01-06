import PlayerData from '../models/PlayerData';
import {CardsMap} from '../models/CardsMap';

export interface ApplicationState {
  card: CardState
  player: PlayerState
  game: GameState
}

export interface PlayerState {
  players: PlayerData[]
  newPlayer: {
    playerId?: string
    loading: boolean
    error?: Error
  }
}

export interface CardState {
  cards: CardsMap
}

export interface GameState {
  loading: boolean
  error?: Error
  newGame: {
    gameId?: string
    loading: boolean
    error?: Error
  }
}
