import { FC, useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { NLWContext } from '../../context'
import { GameBannerProps } from '../@interface'

const GameBanner: FC<GameBannerProps> = ({ addsCount, bannerUrl, title, id, className }) => {
  const { getGameIdFromHomeBanner } = useContext(NLWContext)
  
  return (
    <NavLink to='/duo' {...{ className }} onClick={() => getGameIdFromHomeBanner(id)}>
      <img src={bannerUrl} alt='' />
      <div className='w-full pt-16 pb-4 px-4 bg-game-card-gradient absolute bottom-0 left-0 right-0  '>
        <strong className='font-bold text-white block '>{title}</strong>
        <span className='text-zinc-300 text-sm block '>{addsCount} anúncio(s)</span>
      </div>
    </NavLink>
  )
}

export default GameBanner
