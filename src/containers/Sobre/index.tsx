import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { Container, GithubSecao } from './styles'

const Sobre = () => (
  <Container>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Sou graduando em Ciência da Computação pela Estácio Teresina-PI e
      especialista em desenvolvimento web fullstack. Sou uma pessoa que gosta de
      aprender coisas novas, estou sempre em busca de novos conhecimentos, no
      momento estou fazendo o curso da EBAC de desenvolvedor fullstack JAVA.
      Desenvolvo aplicações em ReactJs, Nodejs, Typescript, NextJs, já criei
      aplicações restful em ReactJs e Nodejs, entre outras tecnologias.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=mateusrc-dev&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=mateusrc-dev&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </Container>
)

export default Sobre
