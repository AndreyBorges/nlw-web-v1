import { useKeenSlider } from 'keen-slider/react'
import { FC, ReactNode, useEffect, useState } from 'react'
import { NLWContext } from '../'
import { GameHomeProps } from '../../pages/@interface'

interface NLWContextProviderProps {
  children: ReactNode
}

const NLWContextProvider: FC<NLWContextProviderProps> = ({ children }) => {
  const [games, setGames] = useState<GameHomeProps[]>([])
  const [game, setGame] = useState<GameHomeProps>()
  const [gameId, setGameId] = useState('')
  const [playerId, setPlayerId] = useState('')
  const [modalDiscord, setModalDiscord] = useState(false)

  const getAllGamesFromAPI = (data: GameHomeProps[]) => {
    setGames(data)
  }

  const getGameIdFromHomeBanner = (data: string) => {
    setGameId(data)
  }

  const findGameFromDuoPage = () => {
    const gameFound = games.find(item => {
      return item.id === gameId
    })

    setGame(gameFound)
  }

  const getPlayerIdFromDiscord = (data: string) => {
    setModalDiscord(true)
    setPlayerId(data)
  }

  const closeDiscordModal = () => {
    setModalDiscord(false)
    setPlayerId('')
  }

  useEffect(() => {
    findGameFromDuoPage()
    setPlayerId('')
  }, [gameId])

  return (
    <NLWContext.Provider
      value={{
        game,
        games,
        gameId,
        playerId,
        modalDiscord,
        closeDiscordModal,
        getAllGamesFromAPI,
        getPlayerIdFromDiscord,
        getGameIdFromHomeBanner
      }}
    >
      {children}
    </NLWContext.Provider>
  )
}

export default NLWContextProvider
