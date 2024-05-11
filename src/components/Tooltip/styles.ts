import styled from 'styled-components'

export const Container = styled.button`
  position: relative;
  cursor: pointer;
  background: transparent;
  border: none;
  transition: all 0.5s ease;

  &:hover {
    filter: brightness(1.2);
    span {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`

export const TooltipContainer = styled.span`
  position: absolute;
  top: -64px;
  left: -84px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  padding: 20px;
  color: ${(props) => props.theme.corDeFundo};
  background: ${(props) => props.theme.corDeFundoBotao};
  font-weight: bold;
  border-radius: 10px;
  opacity: 0;
  transform: translateY(25px);
  transition: all 0.5s ease;

  &:after {
    content: '';
    position: absolute;
    top: 100%;
    border-width: 5px;
    border-style: solid;
    border-color: ${(props) => props.theme.corDeFundoBotao} transparent
      transparent transparent;
  }
`
