import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #2a2634;
  gap: 0.5rem;
  z-index: 3;
  padding: 2rem 2.5rem;
  border-radius: 0.5rem;

  animation: slideUp 0.3s ease forwards;

  strong {
    font-size: 1.5rem;
    color: white;
  }

  > span {
    font-size: 0.875rem;
    color: #a1a1aa;
  }

  > div:last-child {
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    gap: 0.5rem;

    span {
      font-size: 0.875rem;
      color: #fff;
      font-weight: 600;
    }
    button {
      padding-block: 0.75rem;
      width: 100%;
      background: #18181b;
      border-radius: 0.5rem;
      color: #e4e4e7;
      :hover {
        background: #110f14;
      }
    }
  }

  @keyframes slideUp {
    from {
      top: 55%;
      opacity: 0;
    }
    to {
      top: 50%;
      opacity: 1;
    }
  }
`

export const Close = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  top: 0;
  border-radius: 0.5rem;
  cursor: pointer;

  ::after,
  ::before {
    position: absolute;
    content: '';
    width: 2px;
    height: 25px;
    background: #71717a;
  }

  ::after {
    transform: rotate(45deg);
  }
  ::before {
    transform: rotate(-45deg);
  }
`
