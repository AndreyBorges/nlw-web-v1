import { FC, useContext, useEffect } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { LogoNlw } from '@/assets'
import { CreateAdBanner, CreateAdModal, GameBanner } from '@/components'
import axios from 'axios'
import { NLWContext } from '../../context'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

const Home: FC = () => {
  const { games, getAllGamesFromAPI } = useContext(NLWContext)

  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 6,
      spacing: 10
    }
  })

  useEffect(() => {
    axios('http://localhost:3333/games').then(({ data }) => {
      getAllGamesFromAPI(data)
    })
  }, [])

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20 '>
      <LogoNlw />
      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='bg-nlw-gradient text-transparent bg-clip-text'>duo</span> está aqui.
      </h1>

      <div {...{ ref }} className='keen-slider grid grid-cols-6 mt-16'>
        {games &&
          games.map(game => {
            return (
              <div key={game.id} className='h-[282px] w-[250px] keen-slider__slide'>
                <GameBanner
                  className='relative overflow-hidden cursor-pointer'
                  addsCount={game._count.ads}
                  bannerUrl={game.bannerUrl}
                  title={game.title}
                  id={game.id}
                />
              </div>
            )
          })}
      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}

export default Home
