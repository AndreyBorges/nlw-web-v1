import { FC, useContext } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { LogoNlw } from '@/assets'
import { CreateAdBanner, CreateAdModal, GameBanner } from '@/components'
import { NLWContext } from '@/context'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const Home: FC = () => {
  const { games } = useContext(NLWContext)

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20 '>
      <LogoNlw />
      <h1 className='text-6xl text-white font-black pb-20 mt-10'>
        Seu <span className='bg-nlw-gradient text-transparent bg-clip-text'>duo</span> está aqui.
      </h1>

      <Swiper className='mySwiper max-w-[1344px] z-[1]' spaceBetween={10} slidesPerView={6}>
        {games &&
          games.map(game => {
            return (
              <SwiperSlide key={game.id}>
                <GameBanner
                  className='relative overflow-hidden cursor-pointer w-[250] '
                  addsCount={game._count.ads}
                  bannerUrl={game.bannerUrl}
                  title={game.title}
                  id={game.id}
                />
              </SwiperSlide>
            )
          })}
      </Swiper>

      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}

export default Home
