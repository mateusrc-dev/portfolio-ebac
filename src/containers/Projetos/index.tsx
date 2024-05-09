import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'
import { Lista } from './styles'

import image from '../../assets/fullnessclinic.png'

type Projetos = {
  nome: string
  descrição: string
  tecnologias: string[]
  imagens: {
    link_imagem: string
    descricao_imagem: string
  }[]
  link_deploy: string
  link_repositório: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const projetos: Projetos[] = [
  {
    nome: 'Nome do projeto',
    descrição:
      'Aplicativo completo de agendamento de consultas, onde profissionais podem criar horários em uma agenda e disponibilizar eles em seu perfil para os pacientes que podem agender uma consulta',
    tecnologias: ['Javascript', 'ReactJs', 'NodeJs'],
    imagens: [
      {
        link_imagem: image,
        descricao_imagem: 'descrever o que a imagem exibe'
      },
      {
        link_imagem: image,
        descricao_imagem: 'descrever o que a imagem exibe'
      }
    ],
    link_deploy: 'https://fullnessclinic.netlify.app/',
    link_repositório:
      'https://github.com/mateusrc-dev/clinica_de_saude_frontend?tab=readme-ov-file'
  }
]

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projetos</Titulo>
    <Lista>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
    </Lista>
  </section>
)

export default Projetos
