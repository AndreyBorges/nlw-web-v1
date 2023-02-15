import styled from 'styled-components'

export const Container = styled.div`
  background-image: linear-gradient(
    90deg,
    rgba(0, 0, 255, 0.5),
    rgba(248, 5, 167, 1),
    yellow,
    rgb(40, 255, 208)
  );
  

  background-size: 150%;

  animation: background 4s  infinite;
  
  @keyframes background {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 80% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`
