import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { BotaoTema, Descricao, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = ({ trocaTema }: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Mateus Carvalho</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        github: mateusrc-dev
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor Web Fullstack
      </Descricao>
      <BotaoTema onClick={trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
