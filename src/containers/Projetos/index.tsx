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
import interestelarmovie_1 from '../../assets/interestelarmovie_1.png'
import interestelarmovie_2 from '../../assets/interestelarmovie_2.png'
import interestelarmovie_3 from '../../assets/interestelarmovie_3.png'
import interestelarmovie_4 from '../../assets/interestelarmovie_4.png'
import todovue_1 from '../../assets/todovue_1.png'
import todovue_2 from '../../assets/todovue_2.png'
import todovue_3 from '../../assets/todovue_3.png'
import todovue_4 from '../../assets/todovue_4.png'
import healthytasks_login from '../../assets/healthytasks_login.png'
import healthytasks_perfil from '../../assets/healthytasks_perfil.png'
import healthytasks_atividades from '../../assets/healthytasks_atividades.png'
import healthytasks_criar from '../../assets/healthytasks_criar.png'
import githubblog_home from '../../assets/githubblog_home.png'
import githubblog_home2 from '../../assets/githubblog_home2.png'
import githubblog_problema from '../../assets/githubblog_problema.png'
import githubblog_problema2 from '../../assets/githubblog_problema2.png'
import todotypescript_atividadesconcluidas from '../../assets/todotypescript_atividadesconcluidas.png'
import todotypescript_atividadescriadas from '../../assets/todotypescript_atividadescriadas.png'
import todotypescript_criando from '../../assets/todotypescript_criando.png'
import todotypescript_sematividade from '../../assets/todotypescript_sematividade.png'
import mkssistemas_carrinho from '../../assets/mkssistemas_carrinho.png'
import mkssistemas_confirmacao from '../../assets/mkssistemas_confirmacao.png'
import mkssistemas_home from '../../assets/mkssistemas_home.png'
import mkssistemas_itemsnocarrinho from '../../assets/mkssistemas_itemsnocarrinho.png'
import meutime_escolherligas from '../../assets/meutime_escolherligas.png'
import meutime_escolherpais from '../../assets/meutime_escolherpais.png'
import meutime_escolhertime from '../../assets/meutime_escolhertime.png'
import meutime_estatistica from '../../assets/meutime_estatistica.png'
import sitepessoal1 from '../../assets/sitepessoal1.png'
import sitepessoal2 from '../../assets/sitepessoal2.png'
import sitepessoal3 from '../../assets/sitepessoal3.png'
import sitepessoal4 from '../../assets/sitepessoal4.png'

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
    nome: 'Healthy Tasks',
    descrição:
      'Aplicativo no qual usuário pode acessar suas atividades, fazer o ckeck das atividades, acompanhar atividades públicas de outros usuários e o profissional pode criar atividades para seus pacientes.',
    tecnologias: ['Javascript', 'Typescript', 'ReactJs', 'NextJs'],
    imagens: [
      {
        link_imagem: healthytasks_login,
        titulo_imagem: 'Página de autenticação',
        descricao_imagem:
          'Página na qual o usuário pode realizar autenticação na aplicação como paciente ou como profissional'
      },
      {
        link_imagem: healthytasks_perfil,
        titulo_imagem: 'Página de perfil',
        descricao_imagem:
          'Página na qual o usuário pode preencher as informações do seu perfil, informar sua queixa, informar os profissionais pelos quais é acompanhado, escolher sua atividade favorita, escolher se o perfil vai ser público ou privado, acompanhar a estatística das suas atividades'
      },
      {
        link_imagem: healthytasks_atividades,
        titulo_imagem: 'Página de atividades',
        descricao_imagem:
          'Página na qual o usuário pode acompanhar as atividades pendentes, as atividades realizadas, e as atividades que não foram realizadas e acabou o prazo para realiza-las'
      },
      {
        link_imagem: healthytasks_criar,
        titulo_imagem: 'Página para criar uma nova atividade',
        descricao_imagem:
          'Página na qual o profissional pode criar uma atividade para um paciente inserindo o email dele, pode colocar título, descrição e o prazo para a atividade ser realizada'
      }
    ],
    link_deploy: 'https://healthy-tasks.vercel.app/',
    link_repositório: 'https://github.com/mateusrc-dev/healthy-tasks'
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
    tecnologias: ['Javascript', 'Typescript', 'ReactJs', 'Redux'],
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
    nome: 'Explorer Food',
    descrição:
      'Aplicativo no qual o usuário pode criar sua conta, se autenticar, adicionar pratos no pedido, adicionar pratos nos favoritos, finalizar um pedido e acompanhar o status do pedido (pendente, a caminho, entregue).',
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
      },
      {
        link_imagem: explorerfood_pagamento,
        titulo_imagem: 'Página de pagamento',
        descricao_imagem:
          'Página na qual o usuário pode visualizar os detalhes do pedido, finalizar a compra e escolher o modo de pagamento'
      },
      {
        link_imagem: explorerfood_status,
        titulo_imagem: 'Página de status dos pedidos',
        descricao_imagem:
          'Página na qual o usuário pode acompanhar o status dos pedidos (pendente, a caminho, entregue)'
      }
    ],
    link_deploy: 'https://explorerfoodd.netlify.app/',
    link_repositório: 'https://github.com/mateusrc-dev/front_end_explorer_food'
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
    nome: 'Mks Sistemas',
    descrição:
      'Projeto criado em NextJs e ReactJs onde o usuário pode adicionar produtos no carrinho, manipular a quantidade de produtos, e finalizar a compra. Foi utilizado hooks do React como useContext e useState.',
    tecnologias: ['Typescript', 'ReactJs', 'NextJs', 'useContext'],
    imagens: [
      {
        link_imagem: mkssistemas_home,
        titulo_imagem: 'Página Home',
        descricao_imagem:
          'Página Home onde o usuário pode adicionar produtos no carrinho'
      },
      {
        link_imagem: mkssistemas_itemsnocarrinho,
        titulo_imagem: 'Página Home',
        descricao_imagem:
          'Página Home com produtos adicionados no carrinho (observar a contagem de itens adicionados no botão do canto superior direito)'
      },
      {
        link_imagem: mkssistemas_carrinho,
        titulo_imagem: 'Página Home com carrinho aberto',
        descricao_imagem:
          'Página Home com carrinho aberto, usuário pode escolher a quantidade de itens e visualizar o preço final'
      },
      {
        link_imagem: mkssistemas_confirmacao,
        titulo_imagem: 'Página de confirmação do pedido',
        descricao_imagem:
          'Página de confirmação do pedido onde o usuário pode visualizar detalhes do pedido como a quantidade de cada item comprado'
      }
    ],
    link_deploy: 'https://mks-sistemass.netlify.app/',
    link_repositório: 'https://github.com/mateusrc-dev/mks-sistemas'
  },
  {
    nome: 'Meu Time',
    descrição:
      'Aplicativo no qual o usuário pode visualizar informações do seu time de acordo com o país, liga, campeonato selecionados. Essa aplicação consome dados da Api Football.',
    tecnologias: ['Typescript', 'NextJs', 'ReactJs', 'Axios'],
    imagens: [
      {
        link_imagem: meutime_escolherpais,
        titulo_imagem: 'Página para escolher um país',
        descricao_imagem:
          'Página para escolher um país que o usuário deseja para acompanhar mais informações sobre os times desse país'
      },
      {
        link_imagem: meutime_escolherligas,
        titulo_imagem: 'Página de ligas',
        descricao_imagem:
          'Página onde o usuário pode escolher qual liga quer acompanhar'
      },
      {
        link_imagem: meutime_escolhertime,
        titulo_imagem: 'Página para selecionar um time',
        descricao_imagem:
          'Página onde o usuário pode selecionar um time para ver os detalhes do time no campeonado'
      },
      {
        link_imagem: meutime_estatistica,
        titulo_imagem: 'Página de detalhes do time',
        descricao_imagem:
          'Página de detalhes do time selecionado onde o usuário pode visualizar quais os jogadores fazem parte do time, quantidade de partidas jogadas no campeonato, quantidade de derrotas, vitórias, quantidades de gols, formação do time, etc.'
      }
    ],
    link_deploy: 'https://meu-timee.netlify.app/',
    link_repositório: 'https://github.com/mateusrc-dev/meu-time'
  },
  {
    nome: 'Github Blog',
    descrição:
      'Aplicativo é um blog onde o usuário pode pesquisar por problemas de um repositório e acompanhar discussões de um repositório. Nesse aplicativo é consumido uma API do Github.',
    tecnologias: ['Typescript', 'Axios', 'ReactHookForm', 'ReactMarkdown'],
    imagens: [
      {
        link_imagem: githubblog_home,
        titulo_imagem: 'Página Home',
        descricao_imagem:
          'Página Home onde o usuário pode visualizar os detalhes do perfil do github e as discussões criados no repositório'
      },
      {
        link_imagem: githubblog_home2,
        titulo_imagem: 'Página Home',
        descricao_imagem:
          'Página Home onde o usuário pode visualizar os detalhes do perfil do github e as discussões criados no repositório'
      },
      {
        link_imagem: githubblog_problema,
        titulo_imagem: 'Página de detalhes da discussão',
        descricao_imagem:
          'Página de detalhes da discussão onde foi usado o react-mark-down para que a linguagem de marcação tenha efeito no texto que foi buscado da API do github'
      },
      {
        link_imagem: githubblog_problema2,
        titulo_imagem: 'Página de detalhes da discussão no Github',
        descricao_imagem:
          'Página de detalhes da discussão no Github para o usuário visualizar a fonte original das informações'
      }
    ],
    link_deploy: 'https://charming-alfajores-ab49c5.netlify.app/',
    link_repositório: 'https://github.com/mateusrc-dev/github-blog'
  },
  {
    nome: 'Interestelar Movie',
    descrição:
      'Site onde o usuário pode visualizar informações sobre o filme Interestelar, foi utilizado o Bootstrap para criar os elementos da interface, como Navs, Containers, Buttons, Grid.',
    tecnologias: ['Javascript', 'Bootstrap', 'SASS', 'GULP'],
    imagens: [
      {
        link_imagem: interestelarmovie_1,
        titulo_imagem: 'Página Home',
        descricao_imagem:
          'Página inicial do aplicativo onde o usuário pode visualizar um banner do filme interestelar e o cabeçalho do site que some suavemente quando o scroll da página é baixado'
      },
      {
        link_imagem: interestelarmovie_2,
        titulo_imagem: 'Página Home',
        descricao_imagem:
          'Nessa parte da página é exibido uma nav criado com o bootstrap onde o usuário pode navegar e ver informações sobre o filme'
      },
      {
        link_imagem: interestelarmovie_3,
        titulo_imagem: 'Página Home',
        descricao_imagem:
          'Nessa parte da página é exibido mais detalhes sobre o filme através do texto ao lado da imagem que foram arranjados utilizando o grid do bootstrap'
      },
      {
        link_imagem: interestelarmovie_4,
        titulo_imagem: 'Página Home',
        descricao_imagem:
          'Nessa parte da página é exibido mais detalhes sobre o filme onde foi utilizado o grid do bootstrap para criar duas colunas'
      }
    ],
    link_deploy: 'https://interestelar-movie-ebac.vercel.app/',
    link_repositório: 'https://github.com/mateusrc-dev/interestelar-movie-ebac'
  },
  {
    nome: 'Site Profissional',
    descrição:
      'Site com informações sobre o profissional, foi utilizado o Bootstrap para criar os elementos da interface, como Carousel, Accordion, Navs, Containers, Buttons, Forms, Grid.',
    tecnologias: ['Javascript', 'Bootstrap'],
    imagens: [
      {
        link_imagem: sitepessoal1,
        titulo_imagem: 'Página Home',
        descricao_imagem:
          'Carousel criado com Bootstrap mostrando mais informações sobre o espaço de atendimento para o usuário'
      },
      {
        link_imagem: sitepessoal2,
        titulo_imagem: 'Página Home',
        descricao_imagem:
          'Foi utilizado o Grid do Bootstrap para criar as colunas, o Accordion e o Carousel também foi criado com o Bootstrap para exibir informações do profissional de forma mais confortável'
      },
      {
        link_imagem: sitepessoal3,
        titulo_imagem: 'Página Home',
        descricao_imagem:
          'Nessa parte da página é exibido uma Nav criado com Bootstrap com reflexões acerca do trabalho do profissional'
      },
      {
        link_imagem: sitepessoal4,
        titulo_imagem: 'Página Home',
        descricao_imagem:
          'Nessa parte da página é exibido um formulário criado com o Bootstrap'
      }
    ],
    link_deploy: 'https://site-pessoal-bootstrap.vercel.app/',
    link_repositório: 'https://github.com/mateusrc-dev/site-pessoal-bootstrap'
  },
  {
    nome: 'Todo Vue',
    descrição:
      'Aplicativo onde o usuário pode adicionar atividades, visualizar quantas atividades estão pendentes, e também o usuário tem as opções de filtrar as atividades (todas tarefas, pendentes, finalizadas).',
    tecnologias: ['Javascript', 'Vue', 'HTML'],
    imagens: [
      {
        link_imagem: todovue_1,
        titulo_imagem: 'TodoVue',
        descricao_imagem: 'Exibindo todas as atividades'
      },
      {
        link_imagem: todovue_2,
        titulo_imagem: 'TodoVue',
        descricao_imagem: 'Criando uma nova atividade'
      },
      {
        link_imagem: todovue_3,
        titulo_imagem: 'TodoVue',
        descricao_imagem: 'Exibindo apenas as atividades pendentes'
      },
      {
        link_imagem: todovue_4,
        titulo_imagem: 'TodoVue',
        descricao_imagem: 'Exibindo apenas as atividades finalizadas'
      }
    ],
    link_deploy: 'https://todo-vue-black-two.vercel.app/',
    link_repositório: 'https://github.com/mateusrc-dev/todo-vue'
  },
  {
    nome: 'ToDoList TypeScript',
    descrição:
      'Aplicativo é um blog onde o usuário pode pesquisar por problemas de um repositório e acompanhar discussões de um repositório. Nesse aplicativo é consumido uma API do Github.',
    tecnologias: ['Typescript', 'Javascript', 'useState'],
    imagens: [
      {
        link_imagem: todotypescript_sematividade,
        titulo_imagem: 'Página Home',
        descricao_imagem: 'Página Home com nenhuma atividade criada'
      },
      {
        link_imagem: todotypescript_criando,
        titulo_imagem: 'Página Home',
        descricao_imagem: 'Página Home com o usuário criando uma nova atividade'
      },
      {
        link_imagem: todotypescript_atividadescriadas,
        titulo_imagem: 'Página Home',
        descricao_imagem: 'Página Home algumas atividades criadas'
      },
      {
        link_imagem: todotypescript_atividadesconcluidas,
        titulo_imagem: 'Página Home',
        descricao_imagem: 'Página Home com todas as atividades concluídas'
      }
    ],
    link_deploy: 'https://todo-list-typescriptt.netlify.app/',
    link_repositório: 'https://github.com/mateusrc-dev/ToDo-list-TypeScript'
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
