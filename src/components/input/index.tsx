import { FC } from 'react'
import { InputProps } from '../@interface'
import { InputComponent } from './styles'

const Input: FC<InputProps> = props => {
  return (
    <InputComponent
      {...props}
    />
  )
}

export default Input
