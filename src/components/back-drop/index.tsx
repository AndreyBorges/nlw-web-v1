import React, { FC } from 'react'
import { Container } from './styles'

interface BackDropProps {
  onClick: () => void
}

const BackDrop: FC<BackDropProps> = ({onClick}) => {
  return <Container {...{ onClick }} />
}

export default BackDrop
