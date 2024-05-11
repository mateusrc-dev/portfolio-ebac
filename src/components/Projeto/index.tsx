import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import {
  Card,
  ComponentImg,
  ComponentTag,
  Container,
  ContainerImages,
  ContainerTags,
  IconComponent,
  LinkBotao,
  Modal,
  ModalContent
} from './styles'

import closeIcon from '../../assets/close.png'

import { ReactNode, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Projetos } from '../../containers/Projetos'
import Tooltip from '../Tooltip'

type ModalState = {
  visibility: boolean
  description_image: string
  titulo_imagem: string
  url: string
}

const ComponenteScrollReveal = ({ children }: { children: ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Dispara a animação apenas uma vez
    threshold: 0.5 // Dispara a animação quando 50% do elemento estiver visível
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])

  return (
    <div ref={ref} className={isVisible ? 'visible' : 'hidden'}>
      {children}
    </div>
  )
}

const Projeto = ({
  descrição,
  imagens,
  link_deploy,
  link_repositório,
  nome,
  tecnologias
}: Projetos) => {
  const [modal, setModal] = useState<ModalState>({
    visibility: false,
    titulo_imagem: '',
    description_image: '',
    url: ''
  })

  const closeModal = () => {
    setModal({
      visibility: false,
      titulo_imagem: '',
      description_image: '',
      url: ''
    })
  }

  return (
    <Container>
      <ComponenteScrollReveal>
        <Card>
          <Titulo>
            {nome}{' '}
            {nome === 'Fulness Clinic' || nome === 'Healthy Tasks' ? (
              <Tooltip content="Projeto Pessoal">
                <IconComponent />
              </Tooltip>
            ) : null}
          </Titulo>
          <ContainerImages>
            {imagens.map((item, index) => (
              <ComponentImg
                key={index}
                onClick={() => {
                  setModal({
                    visibility: true,
                    titulo_imagem: item.titulo_imagem,
                    description_image: item.descricao_imagem,
                    url: item.link_imagem
                  })
                }}
              >
                <img src={item.link_imagem} alt="Imagem do aplicativo" />
                <div className="overlay"></div>
                <span>Clique para ver detalhes</span>
              </ComponentImg>
            ))}
          </ContainerImages>
          <ContainerTags>
            {tecnologias.map((item) => (
              <ComponentTag key={item}>{item}</ComponentTag>
            ))}
          </ContainerTags>
          <Paragrafo tipo="secundario">{descrição}</Paragrafo>
          <LinkBotao href={link_repositório} target="_blank">
            Ver repositório no GitHub
          </LinkBotao>
          <LinkBotao href={link_deploy} target="_blank">
            Ver Deploy
          </LinkBotao>
        </Card>
      </ComponenteScrollReveal>
      <Modal className={modal.visibility ? 'is-visible' : ''}>
        <ModalContent>
          <header>
            <h4>{modal.titulo_imagem}</h4>
            <img src={closeIcon} alt="Ícone de fechar" onClick={closeModal} />
          </header>
          <div className="image_container">
            <img src={modal.url} alt="Imagem do jogo" />
            <span>{modal.description_image}</span>
          </div>
        </ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </Modal>
    </Container>
  )
}

export default Projeto
