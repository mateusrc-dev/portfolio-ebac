import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { BotaoTema, Descricao, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Mateus Raimundo</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        mateusrc-dev
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor Fullstack JAVA
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
