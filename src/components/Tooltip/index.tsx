import { Container, TooltipContainer } from './styles'

type TooltipProps = {
  content: string
  children: React.ReactNode
  clickEvent?: () => void
} // vamos colocar as propriedades em AvatarImage de uma tag img - podemos fazer isso colocando a tipagem em props

const Tooltip = ({ children, content, clickEvent }: TooltipProps) => {
  return (
    <Container onClick={clickEvent}>
      {children}
      <TooltipContainer>
        <p>{content}</p>
      </TooltipContainer>
    </Container>
  )
}

export default Tooltip
