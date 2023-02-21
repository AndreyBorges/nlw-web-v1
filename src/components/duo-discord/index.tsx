import axios from 'axios'
import { FC, useContext, useEffect, useState } from 'react'
import { NLWContext } from '@/context'
import { BackDrop } from '..'
import { Close, Container } from './styles'
import { CheckCircle } from 'phosphor-react'
import { toast, ToastContainer } from 'react-toastify'

interface PlayerDiscord {
  discord: string
}

const DuoDiscord: FC = () => {
  const { playerId, closeDiscordModal } = useContext(NLWContext)
  const [playerDiscord, setPlayerDiscord] = useState<PlayerDiscord>()

  const handleClipboard = () => {
    navigator.clipboard.writeText(playerDiscord!.discord)
    toast.success('ID copiado com sucesso!', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark'
    })
  }

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
            <button onClick={handleClipboard}>{playerDiscord?.discord}</button>
          ) : (
            <button>Usuario sem discord</button>
          )}
        </div>
      </Container>
      <ToastContainer />
    </>
  )
}

export default DuoDiscord
