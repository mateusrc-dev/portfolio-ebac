import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import {
  Card,
  ComponentImg,
  ComponentTag,
  Container,
  ContainerImages,
  ContainerTags,
  LinkBotao,
  Modal,
  ModalContent
} from './styles'

import closeIcon from '../../assets/close.png'
import image from '../../assets/fullnessclinic.png'

import { ReactNode, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

type ModalState = {
  visibility: boolean
  description_image: string
  url: string
}

const ComponenteScrollReveal = ({ children }: { children: ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Dispara a animação apenas uma vez
    threshold: 0.6 // Dispara a animação quando 50% do elemento estiver visível
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

const Projeto = () => {
  const [modal, setModal] = useState<ModalState>({
    visibility: false,
    description_image: '',
    url: ''
  })

  const closeModal = () => {
    setModal({
      visibility: false,
      description_image: '',
      url: ''
    })
  }

  return (
    <Container>
      <ComponenteScrollReveal>
        <Card>
          <Titulo>Projeto Lista de Tarefas</Titulo>
          <ContainerImages>
            <ComponentImg
              onClick={() => {
                setModal({
                  visibility: true,
                  description_image: 'descrição bacana 1',
                  url: image
                })
              }}
            >
              <img src={image} alt="Imagem do aplicativo" />
              <div className="overlay"></div>
              <span>Clique para ver detalhes</span>
            </ComponentImg>
            <ComponentImg
              onClick={() => {
                setModal({
                  visibility: true,
                  description_image: 'descrição bacana 2',
                  url: image
                })
              }}
            >
              <img src={image} alt="Imagem do aplicativo" />
              <div className="overlay"></div>
              <span>Clique para ver detalhes</span>
            </ComponentImg>
            <ComponentImg
              onClick={() => {
                setModal({
                  visibility: true,
                  description_image: 'descrição bacana 3',
                  url: image
                })
              }}
            >
              <img src={image} alt="Imagem do aplicativo" />
              <div className="overlay"></div>
              <span>Clique para ver detalhes</span>
            </ComponentImg>
          </ContainerImages>
          <ContainerTags>
            <ComponentTag>NodeJs</ComponentTag>
            <ComponentTag>ReactJs</ComponentTag>
          </ContainerTags>
          <Paragrafo tipo="secundario">
            Lista de tarefas feita com VUE-JS
          </Paragrafo>
          <LinkBotao>Ver repositório no GitHub</LinkBotao>
          <LinkBotao>Ver Deploy</LinkBotao>
        </Card>
      </ComponenteScrollReveal>
      <Modal className={modal.visibility ? 'is-visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>Nome do projeto</h4>
            <img src={closeIcon} alt="Ícone de fechar" onClick={closeModal} />
          </header>
          <div className="image_container">
            <img src={modal.url} alt="Imagem do jogo" />
            <span>
              detalhes de imagem.......... Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Expedita sunt cupiditate eaque, et
              suscipit ratione repellat quae incidunt soluta dolorem voluptatum
              perspiciatis iste saepe rerum, numquam nam molestiae. Labore, at.
            </span>
          </div>
        </ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </Modal>
    </Container>
  )
}

export default Projeto
