import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'
import { Lista } from './styles'

import clinic_home from '../../assets/fullnessclinic.png'
import clinic_agenda from '../../assets/agenda.png'
import clinic_profissionais from '../../assets/profissionais.png'
import clinic_profissional from '../../assets/tela_profissional.png'
import bookwise_home from '../../assets/bookwise_home.png'
import bookwise_login from '../../assets/bookwise_login.png'
import bookwise_explorer from '../../assets/bookwise_explorer.png'
import bookwise_perfil from '../../assets/perfil_bookwise.png'
import efood_addfood from '../../assets/efood_addfood.png'
import efood_carrinho from '../../assets/efood_carrinho.png'
import efood_form from '../../assets/efood_form.png'
import efood_home from '../../assets/efood_home.png'
import coffeedelivery_coffees from '../../assets/coffeedelivery_coffees.png'
import coffeedelivery_confirmacao from '../../assets/coffeedelivery_confirmacao.png'
import coffeedelivery_form from '../../assets/coffeedelivery_form.png'
import coffeedelivery_home from '../../assets/coffeedelivery_home.png'
import igniteshop_carrinho from '../../assets/igniteshop_carrinho.png'
import igniteshop_confirmacao from '../../assets/igniteshop_confirmacao.png'
import igniteshop_home from '../../assets/igniteshop_home.png'
import igniteshop_pagamento from '../../assets/igniteshop_pagamento.png'
import explorerfood_pratos from '../../assets/explorerfood_pratos.png'
import explorerfood_pesquisa from '../../assets/explorerfood_pesquisa.png'
import explorerfood_pagamento from '../../assets/explorerfood_pagamento.png'
import explorerfood_status from '../../assets/explorerfood_status.png'

export type Projetos = {
  nome: string
  descrição: string
  tecnologias: string[]
  imagens: {
    link_imagem: string
    titulo_imagem: string
    descricao_imagem: string
  }[]
  link_deploy: string
  link_repositório: string
}

const projetos: Projetos[] = [
  {
    nome: 'Fulness Clinic',
    descrição:
      'Aplicativo completo de agendamento de consultas, onde profissionais podem criar horários em uma agenda e disponibilizar eles em seu perfil para os pacientes que podem agender uma consulta.',
    tecnologias: ['Javascript', 'ReactJs', 'NodeJs'],
    imagens: [
      {
        link_imagem: clinic_home,
        titulo_imagem: 'Página Home',
        descricao_imagem:
          'Página inicial do aplicativo onde o usuário pode ler detalhes sobre a clínica e pode navegar para a página onde mostra os profissionais do corpo clínico e para a página de login onde é possível logar como paciente ou como profissional'
      },
      {
        link_imagem: clinic_agenda,
        titulo_imagem: 'Página da agenda para criar horários',
        descricao_imagem:
          'Página na qual o profissional do corpo clínico pode criar os horários, excluir horários, confirmar que a consulta foi realizada, cancelar um horário que tem paciente agendado'
      },
      {
        link_imagem: clinic_profissionais,
        titulo_imagem: 'Página para pesquisar por profissionais',
        descricao_imagem:
          'Página na qual o paciente pode pesquisar por profissionais a partir do nome do profissional, sua profissão (ex. psicólogo, psiquiatra) ou sua especialidade (ex. dieta, ansiedade)'
      },
      {
        link_imagem: clinic_profissional,
        titulo_imagem: 'Página do profissional',
        descricao_imagem:
          'Página na qual o paciente pode agendar uma consulta, criar um depoimento acerca do atendimento do profissional e acompanhar o depoimento de outros pacientes'
      }
    ],
    link_deploy: 'https://fullnessclinic.netlify.app/',
    link_repositório:
      'https://github.com/mateusrc-dev/clinica_de_saude_frontend'
  },
  {
    nome: 'Bookwise',
    descrição:
      'Aplicativo que o usuário pode fazer autenticação social através do Google ou GitHub, criar avaliações dos seus livros favoritos e acompanhar a avaliação dos livros realizada por outros usuários.',
    tecnologias: ['Javascript', 'Typescript', 'ReactJs', 'NextJs'],
    imagens: [
      {
        link_imagem: bookwise_login,
        titulo_imagem: 'Página para realizar autenticação social',
        descricao_imagem:
          'Página na qual o usuário pode realizar autentização social através do Google ou Github'
      },
      {
        link_imagem: bookwise_home,
        titulo_imagem: 'Página Home',
        descricao_imagem:
          'Página inicial onde o usuário pode acompanhar as avaliações recentes de outros usuários, os livros mais populares e sua última leitura'
      },
      {
        link_imagem: bookwise_explorer,
        titulo_imagem: 'Página Explorer',
        descricao_imagem:
          'Página na qual o usuário pode explorar os livros e criar uma avaliação de algum livro'
      },
      {
        link_imagem: bookwise_perfil,
        titulo_imagem: 'Página de perfil do usuário',
        descricao_imagem:
          'Página na qual o usuário pode visualizar todas as suas avaliações e outros dados'
      }
    ],
    link_deploy: 'https://bookwise-livid.vercel.app/',
    link_repositório: 'https://github.com/mateusrc-dev/bookwise'
  },
  {
    nome: 'Efood',
    descrição:
      'Aplicativo que o usuário pode acessar um restaurante específico, visualizar uma listagem de pratos desse restaurante que podem ser adicionadas no carrinho e finalizar a compra ao preencher o formulário.',
    tecnologias: ['Javascript', 'TypeScript', 'ReactJs', 'Redux'],
    imagens: [
      {
        link_imagem: efood_home,
        titulo_imagem: 'Página Home',
        descricao_imagem:
          'Página inicial do aplicativo onde o usuário visualizar uma listagem de restaurantes e navegar para a página de detalhes de um restaurante específico'
      },
      {
        link_imagem: efood_addfood,
        titulo_imagem: 'Página de detalhes do restaurante',
        descricao_imagem:
          'Página na qual o usuário pode visualizar o cardápio do restaurante e adicionar pratos no carrinho'
      },
      {
        link_imagem: efood_carrinho,
        titulo_imagem: 'Página de detalhes do restaurante com carrinho aberto',
        descricao_imagem:
          'Página na qual o usuário pode visualizar o cardápio do restaurante, adicionar pratos no carrinho e abrir o carrinho ao lado da tela'
      },
      {
        link_imagem: efood_form,
        titulo_imagem:
          'Página de detalhes do restaurante com o formuário aberto',
        descricao_imagem:
          'Página na qual o usuário pode visualizar o cardápio do restaurante, adicionar pratos no carrinho, abrir o carrinho ao lado da tela e acessar o formulário (que possui validação nos campos) para finalizar o pedido'
      }
    ],
    link_deploy: 'https://efood-dun.vercel.app/',
    link_repositório: 'https://github.com/mateusrc-dev/Efood'
  },
  {
    nome: 'Coffe Delivery',
    descrição:
      'Aplicativo que o usuário pode adicionar a quantidade que desejar de café no carrinho, e pode preencher um formulário com seus dados para finalizar a compra, podendo escolher as opções de pagamento.',
    tecnologias: ['Javascript', 'Typescript', 'ReactJs', 'useContext'],
    imagens: [
      {
        link_imagem: coffeedelivery_home,
        titulo_imagem: 'Página Home',
        descricao_imagem:
          'Página inicial do aplicativo onde o usuário pode ver os diferentes tipos de cafés disponíveis e pode adicionar a quantidade que desejar de café no carrinho'
      },
      {
        link_imagem: coffeedelivery_coffees,
        titulo_imagem: 'Página Home',
        descricao_imagem:
          'Página inicial do aplicativo onde o usuário pode ver os diferentes tipos de cafés disponíveis e pode adicionar a quantidade que desejar de café no carrinho'
      },
      {
        link_imagem: coffeedelivery_form,
        titulo_imagem: 'Página do pedido',
        descricao_imagem:
          'Página do pedido onde o usuário pode manipular a quantidade de itens no carrinho, preencher o formulário para finalizar a compra e escolher entre as opções de pagamento disponíveis'
      },
      {
        link_imagem: coffeedelivery_confirmacao,
        titulo_imagem: 'Página de confirmação do pedido',
        descricao_imagem:
          'Página onde o usuário pode visualizar que o pedido foi realizado com sucesso e conferir os detalhes do seu pedido'
      }
    ],
    link_deploy: 'https://coffedelivery.netlify.app/',
    link_repositório: 'https://github.com/mateusrc-dev/coffe-delivery'
  },
  {
    nome: 'Ignite Shop',
    descrição:
      'Aplicativo no qual o usuário pode navegar pelo slider e adicionar as camisetas no carrinho, ao finalizar a compra o usuário é encaminhado para uma tela de checkout onde pode preencher os dados.',
    tecnologias: ['Javascript', 'Typescript', 'ReactJs', 'NextJs', 'Stripe'],
    imagens: [
      {
        link_imagem: igniteshop_home,
        titulo_imagem: 'Página Home',
        descricao_imagem:
          'Página inicial do aplicativo onde o usuário pode adicionar as camisetas de sua preferência no carrinho e navegar pelo slider das camisetas simplesmente clicando e arrastando para o lado ou clicando nas setas'
      },
      {
        link_imagem: igniteshop_carrinho,
        titulo_imagem: 'Página Home com o carrinho aberto',
        descricao_imagem:
          'Página inicial com o carrinho aberto onde o usuário pode visualizar as camisetas adicionadas e navegar para a tela de finalização do pedido'
      },
      {
        link_imagem: igniteshop_pagamento,
        titulo_imagem: 'Página de pagamento',
        descricao_imagem:
          'Página de pagamento integrada com o Stripe onde o usuário pode preencher os dados do cartão de crédito e finalizar o pedido'
      },
      {
        link_imagem: igniteshop_confirmacao,
        titulo_imagem: 'Página de confirmação do pedido',
        descricao_imagem:
          'Página de confirmação do pedido onde o usuário pode visualizar os detalhes do pedido'
      }
    ],
    link_deploy: 'https://ignite-shop.netlify.app/',
    link_repositório: 'https://github.com/mateusrc-dev/ignite-shop'
  },
  {
    nome: 'Explorer Food',
    descrição:
      'Aplicativo no qual o usuário pode criar sua conta, se autenticar, adicionar pratos no pedido, adicionar pratos nos favoritos, finalizar um pedido e acompanhar o status do pedido (pendente, a caminho, concluído).',
    tecnologias: ['Javascript', 'ReactJs', 'NodeJs'],
    imagens: [
      {
        link_imagem: explorerfood_pratos,
        titulo_imagem: 'Página Home',
        descricao_imagem:
          'Página inicial onde o usuário pode pesquisar pelos seus pratos favoritos e adiciona-los ao carrinho ou pode favoritar os pratos'
      },
      {
        link_imagem: explorerfood_pesquisa,
        titulo_imagem: 'Página Home',
        descricao_imagem:
          'Página inicial onde o usuário pode pesquisar pelos seus pratos favoritos e adiciona-los ao carrinho ou pode favoritar os pratos'
      }
    ],
    link_deploy: 'https://explorerfoodd.netlify.app/',
    link_repositório: 'https://github.com/mateusrc-dev/front_end_explorer_food'
  },
  {
    nome: 'Fulness Clinic',
    descrição:
      'Aplicativo completo de agendamento de consultas, onde profissionais podem criar horários em uma agenda e disponibilizar eles em seu perfil para os pacientes que podem agender uma consulta',
    tecnologias: ['Javascript', 'ReactJs', 'NodeJs'],
    imagens: [
      {
        link_imagem: clinic_home,
        titulo_imagem: 'Página Home',
        descricao_imagem:
          'Página inicial do aplicativo onde o usuário pode ler detalhes sobre a clínica e pode navegar para a página onde mostra os profissionais do corpo clínico e para a página de login onde é possível logar como paciente ou como profissional'
      },
      {
        link_imagem: clinic_agenda,
        titulo_imagem: 'Agenda para criar horários',
        descricao_imagem:
          'Página na qual o profissional do corpo clínico pode criar os horários, excluir horários, confirmar que a consulta foi realizada, cancelar um horário que tem paciente agendado'
      }
    ],
    link_deploy: 'https://fullnessclinic.netlify.app/',
    link_repositório:
      'https://github.com/mateusrc-dev/clinica_de_saude_frontend?tab=readme-ov-file'
  },
  {
    nome: 'Fulness Clinic',
    descrição:
      'Aplicativo completo de agendamento de consultas, onde profissionais podem criar horários em uma agenda e disponibilizar eles em seu perfil para os pacientes que podem agender uma consulta',
    tecnologias: ['Javascript', 'ReactJs', 'NodeJs'],
    imagens: [
      {
        link_imagem: clinic_home,
        titulo_imagem: 'Página Home',
        descricao_imagem:
          'Página inicial do aplicativo onde o usuário pode ler detalhes sobre a clínica e pode navegar para a página onde mostra os profissionais do corpo clínico e para a página de login onde é possível logar como paciente ou como profissional'
      },
      {
        link_imagem: clinic_agenda,
        titulo_imagem: 'Agenda para criar horários',
        descricao_imagem:
          'Página na qual o profissional do corpo clínico pode criar os horários, excluir horários, confirmar que a consulta foi realizada, cancelar um horário que tem paciente agendado'
      }
    ],
    link_deploy: 'https://fullnessclinic.netlify.app/',
    link_repositório:
      'https://github.com/mateusrc-dev/clinica_de_saude_frontend?tab=readme-ov-file'
  },
  {
    nome: 'Fulness Clinic',
    descrição:
      'Aplicativo completo de agendamento de consultas, onde profissionais podem criar horários em uma agenda e disponibilizar eles em seu perfil para os pacientes que podem agender uma consulta',
    tecnologias: ['Javascript', 'ReactJs', 'NodeJs'],
    imagens: [
      {
        link_imagem: clinic_home,
        titulo_imagem: 'Página Home',
        descricao_imagem:
          'Página inicial do aplicativo onde o usuário pode ler detalhes sobre a clínica e pode navegar para a página onde mostra os profissionais do corpo clínico e para a página de login onde é possível logar como paciente ou como profissional'
      },
      {
        link_imagem: clinic_agenda,
        titulo_imagem: 'Agenda para criar horários',
        descricao_imagem:
          'Página na qual o profissional do corpo clínico pode criar os horários, excluir horários, confirmar que a consulta foi realizada, cancelar um horário que tem paciente agendado'
      }
    ],
    link_deploy: 'https://fullnessclinic.netlify.app/',
    link_repositório:
      'https://github.com/mateusrc-dev/clinica_de_saude_frontend?tab=readme-ov-file'
  },
  {
    nome: 'Fulness Clinic',
    descrição:
      'Aplicativo completo de agendamento de consultas, onde profissionais podem criar horários em uma agenda e disponibilizar eles em seu perfil para os pacientes que podem agender uma consulta',
    tecnologias: ['Javascript', 'ReactJs', 'NodeJs'],
    imagens: [
      {
        link_imagem: clinic_home,
        titulo_imagem: 'Página Home',
        descricao_imagem:
          'Página inicial do aplicativo onde o usuário pode ler detalhes sobre a clínica e pode navegar para a página onde mostra os profissionais do corpo clínico e para a página de login onde é possível logar como paciente ou como profissional'
      },
      {
        link_imagem: clinic_agenda,
        titulo_imagem: 'Agenda para criar horários',
        descricao_imagem:
          'Página na qual o profissional do corpo clínico pode criar os horários, excluir horários, confirmar que a consulta foi realizada, cancelar um horário que tem paciente agendado'
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
      {projetos.map((item, index) => (
        <li key={index}>
          <Projeto
            descrição={item.descrição}
            imagens={item.imagens}
            link_deploy={item.link_deploy}
            link_repositório={item.link_repositório}
            nome={item.nome}
            tecnologias={item.tecnologias}
          />
        </li>
      ))}
    </Lista>
  </section>
)

export default Projetos
