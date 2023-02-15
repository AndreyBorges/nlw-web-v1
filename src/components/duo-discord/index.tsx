import axios from 'axios'
import { FC, useContext, useEffect, useState } from 'react'
import { NLWContext } from '@/context'
import BackDrop from '../back-drop'
import { Close, Container } from './styles'
import { CheckCircle } from 'phosphor-react'

interface PlayerDiscord {
  discord: string
}

const DuoDiscord: FC = () => {
  const { playerId, closeDiscordModal } = useContext(NLWContext)
  const [playerDiscord, setPlayerDiscord] = useState<PlayerDiscord>()

  const handleClipboard = () => {}

  useEffect(() => {
    axios(`http://localhost:3333/ads/${playerId}/discord`).then(({ data }) =>
      setPlayerDiscord(data)
    )
  }, [])

  return (
    <>
      <BackDrop onClick={closeDiscordModal} />
      <Container key={playerId}>
        <Close onClick={closeDiscordModal} />
        <CheckCircle size={80} color='#34D399' />
        <strong>Let's play!</strong>
        <span>Agora é só começar a jogar!</span>
        <div>
          <span>Clique para copiar</span>
          {playerDiscord?.discord ? (
            <button>{playerDiscord?.discord}</button>
          ) : (
            <button>Usuario sem discord</button>
          )}
        </div>
      </Container>
    </>
  )
}

export default DuoDiscord
