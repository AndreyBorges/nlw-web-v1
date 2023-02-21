import axios from 'axios'
import { FC, useContext, useEffect, useState } from 'react'
import { NLWContext } from '@/context'
import { BackToHome, Container, ContainerPlayers, ContentGame, ContentPlayers } from './styles'
import { LogoNlw } from '@/assets'
import { ArrowLeft, GameController } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { DuoDiscord } from '..'

export interface IDuoCard {
  hourEnd: string
  hourStart: string
  id: string
  name: string
  useVoiceChannel: boolean
  weekDays: string[]
  yearsPlaying: number
}

const DuoContent: FC = () => {
  const { gameId, game, getPlayerIdFromDiscord, modalDiscord, closeDiscordModal } =
    useContext(NLWContext)
  const [players, setPlayers] = useState<IDuoCard[]>()

  useEffect(() => {
    axios(`http://localhost:3333/games/${gameId}/ads`).then(({ data }) => setPlayers(data))
  }, [])

  return (
    <>
      <Container>
        <LogoNlw />
        <BackToHome>
          <NavLink to='/' onClick={closeDiscordModal}>
            <ArrowLeft size={32} color='white' />
          </NavLink>
        </BackToHome>
        <ContentGame>
          <img src={game?.bannerUrl} alt={game?.title} />
          <div>
            <strong>{game?.title}</strong>
            <span>Conecte-se e comece a jogar!</span>
          </div>
        </ContentGame>
        <ContainerPlayers>
          {players?.length === 0 ? (
            <strong>Nenhum duo encontrado!</strong>
          ) : (
            players?.map(player => (
              <ContentPlayers key={player.id}>
                <div>
                  <p>Nome</p>
                  <span>{player.name}</span>
                </div>

                <div>
                  <p>Tempo de jogo</p>
                  <span>{player.yearsPlaying} anos</span>
                </div>

                <div>
                  <p>Disponibilidade</p>
                  <span>{`${player.weekDays.length} dias \u2022 ${player.hourStart} - ${player.hourEnd}`}</span>
                </div>

                <div>
                  <p>Chamada de áudio?</p>
                  <span className={player.useVoiceChannel ? 'use-voice' : 'no-use-voice'}>
                    {player.useVoiceChannel ? 'Sim' : 'Não'}
                  </span>
                </div>

                <button onClick={() => getPlayerIdFromDiscord(player.id)}>
                  <GameController size={20} /> Conectar
                </button>
              </ContentPlayers>
            ))
          )}
        </ContainerPlayers>
      </Container>
      {modalDiscord && <DuoDiscord />}
    </>
  )
}

export default DuoContent
