import styled from 'styled-components'

export const Container = styled.section`
  animation: translateAnimationTop 0.5s ease;

  @keyframes translateAnimationTop {
    0% {
      opacity: 0;
      transform: translateY(-100px);
    }

    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`

export const GithubSecao = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;

  img {
    height: 157px;
    margin-right: 8px;

    @media (max-width: 768px) {
      height: auto;
      width: 100%;
    }
  }
`
