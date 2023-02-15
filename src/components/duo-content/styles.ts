import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1344px;
  margin: 5rem auto 0;
`

export const ContentGame = styled.div`
  display: flex;
  gap: 3rem;
  height: 260px;
  margin-block: 5rem 2rem;
  animation: showDown .5s ease forwards;

  strong {
    font-size: 3rem;
    display: block;
    color: white;
  }

  span {
    font-size: 1.5rem;
    color: #a1a1aa;
  }

  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
    object-position: top;
  }

  @keyframes showDown {
    from {
      transform: translateY(-40px);
      opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`

export const ContainerPlayers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  animation: showUp 0.5s ease forwards;

  > strong {
    font-size: 2rem;
    color: white;
    margin-top: 5rem;
  }

  @keyframes showUp {
    from {
      transform: translateY(40px);
      opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`

export const ContentPlayers = styled.div`
  padding: 1.25rem;
  background: #2a2634;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  

  span,
  button {
    color: white;
    font-size: 0.875rem;
  }

  div p {
    color: #c4c4c6;
    font-size: 0.875rem;
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
    width: 100%;
    background: #8b5cf6;
    padding: 0.5rem 1.625rem;
    border-radius: 0.5rem;
  }

  span {
    font-weight: bold;
  }

  .use-voice {
    color: #34d399;
  }
  .no-use-voice {
    color: #f87171;
  }

  
`

export const BackToHome = styled.div`
  a {
    padding: 12px;
    box-shadow: 0 0 0 3px white;
    border-radius: 50%;
    position: fixed;
    top: 25px;
    left: 25px;
    cursor: pointer;
    opacity: 0;
    animation: showLeft 0.3s ease forwards 0.5s;
    :hover {
      box-shadow: 0 0 0 3px #8b5cf6;
      svg {
        line,
        polyline {
          stroke: #8b5cf6;
        }
      }
    }
  }

  @keyframes showLeft {
    from {
      transform: translateX(-40px);
    }
    to {
      transform: translateX(0px);
      opacity: 1;
    }
  }
`
