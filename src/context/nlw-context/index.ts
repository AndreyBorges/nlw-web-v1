import { createContext } from 'react'
import { GameHomeProps } from '../../pages/@interface'

interface NlwContextProps {
  games: GameHomeProps[]
  game?: GameHomeProps
  gameId: string
  playerId: string
  modalDiscord: boolean
  closeDiscordModal: () => void
  getAllGamesFromAPI: (data: GameHomeProps[]) => void
  getPlayerIdFromDiscord: (data: string) => void
  getGameIdFromHomeBanner: (data: string) => void
}

const NLWContext = createContext({} as NlwContextProps)

export default NLWContext
