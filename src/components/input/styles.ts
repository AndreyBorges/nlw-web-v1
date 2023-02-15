import styled from 'styled-components'

export const InputComponent = styled.input`
  background: rgb(24 24 27);
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;

  ::placeholder {
    color: rgb(113 113 122);
  }

  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`
