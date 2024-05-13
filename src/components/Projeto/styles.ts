import { IoStar } from 'react-icons/io5'
import styled from 'styled-components'

export const Container = styled.div`
  .hidden {
    opacity: 0;
  }

  .visible {
    opacity: 1;
    animation: translateAnimation 0.5s ease;
  }

  @keyframes translateAnimation {
    0% {
      opacity: 0;
      transform: translateY(100px);
    }

    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`

export const Card = styled.div`
  position: relative;
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;
  border-radius: 8px;

  .hidden {
    visibility: hidden;
  }

  .visible {
    visibility: visible;
  }
`

export const ComponentImg = styled.div`
  position: relative;
  transition: all 0.5s ease;

  img {
    width: 100%;
    height: 100px;
    object-fit: cover;
    border: 1px solid ${(props) => props.theme.corDaBorda};
    border-radius: 8px;
  }

  .overlay {
    border: 1px solid transparent;
    opacity: 0;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100px;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.5s ease;
    border-radius: 8px;
    cursor: zoom-in;
  }

  span {
    opacity: 0;
    position: absolute;
    bottom: 8px;
    left: 4px;
    transition: all 0.5s ease;
    font-style: italic;
    font-weight: bold;
    font-size: 14px;
    color: #fff;
    cursor: zoom-in;
  }

  &:hover {
    transform: scale(1.1);
    z-index: 1;
    span,
    .overlay {
      opacity: 1;
    }
  }
`

export const IconComponent = styled(IoStar)`
  width: 22px;
  height: 22px;
  color: #f8c586;
  transition: all 0.5s ease;
`

export const ContainerImages = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 16px;
  row-gap: 16px;
  margin-bottom: 16px;
`

export const ComponentTag = styled.span`
  background-color: ${(props) => props.theme.corDeFundoBotao};
  color: ${(props) => props.theme.corDeFundo};
  padding: 8px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 8px;

  @media (max-width: 990px) {
    padding: 2px;
    font-size: 7px;
    border-radius: 4px;
  }
`

export const ContainerTags = styled.span`
  position: absolute;
  top: 4px;
  right: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
`

export const LinkBotao = styled.a`
  color: ${(props) => props.theme.corDeFundo};
  font-size: 14px;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
  margin-right: 8px;
  border-radius: 8px;
  font-style: italic;
  cursor: pointer;

  &:hover {
    filter: brightness(0.7);
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;

  &.is-visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  position: relative; // for z-index have effect is need put this property
  z-index: 1;

  display: flex;
  flex-direction: column;
  min-width: 1000px;
  margin: auto;

  @media (max-width: 1000px) {
    min-width: 700px;
  }

  @media (max-width: 768px) {
    min-width: 500px;
  }

  @media (max-width: 505px) {
    min-width: 300px;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;

    h4 {
      font-size: 16px;
      font-weight: bold;
      color: #fff;
    }

    img {
      cursor: pointer;
      height: 12px;
      width: 12px;

      &:hover {
        filter: brightness(0.6);
      }
    }
  }

  .image_container {
    min-width: 100%;
    min-height: 500px;
    position: relative;
    border: 1px solid ${(props) => props.theme.corDaBorda};
    overflow: hidden;
    cursor: pointer;

    @media (max-width: 1000px) {
      min-height: 350px;
    }

    @media (max-width: 768px) {
      min-height: 250px;
    }

    @media (max-width: 505px) {
      min-height: 150px;
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      object-fit: cover;
    }

    span {
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.5);
      color: #fff;
      font-style: italic;
      text-align: center;
      padding: 16px;
      margin: 16px;
      opacity: 0;
      transition: all 0.5s ease;
    }

    &:hover {
      span {
        opacity: 1;
      }
    }
  }
`
