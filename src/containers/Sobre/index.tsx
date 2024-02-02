import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi veniam
      ut tempora nam hic aut alias earum repellendus voluptate optio ipsum
      tempore, expedita, esse dolorem incidunt! Sunt aperiam nisi quidem? Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. Placeat aliquid sequi
      cumque cum neque aspernatur blanditiis, quasi veritatis, consectetur
      corporis beatae sapiente dolor similique totam labore explicabo quaerat
      nostrum dolores?
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=mateusrc-dev&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=mateusrc-dev&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
