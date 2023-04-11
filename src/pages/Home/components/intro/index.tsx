import CoffeImagem from '../../../../assets/Imagem.svg'
import {
  BodyContainer,
  HomerContainer,
  IconCoffee,
  IconPackge,
  IconShopp,
  IconTimer,
  ItensContainer,
  SubTitle,
  Title,
} from './styles'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

export function Intro() {
  return (
    <HomerContainer>
      <BodyContainer>
        <div>
          <section>
            <Title>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            </Title>
            <SubTitle>
              <strong>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </strong>
            </SubTitle>
          </section>
          <ItensContainer>
            <p>
              <IconShopp>
                <ShoppingCart size={32} weight="fill" />
              </IconShopp>
              Compra simples e segura
            </p>
            <p>
              <IconPackge>
                <Package size={32} weight="fill" />
              </IconPackge>
              Embalagem mantém o café intacto
            </p>
            <p>
              <IconTimer>
                <Timer size={32} weight="fill" />
              </IconTimer>
              Entrega rápida e rastreada
            </p>
            <p>
              <IconCoffee>
                <Coffee size={32} weight="fill" />
              </IconCoffee>
              O café chega fresquinho até você
            </p>
          </ItensContainer>
        </div>

        <img src={CoffeImagem} alt="" />
      </BodyContainer>
    </HomerContainer>
  )
}
