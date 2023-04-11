import { MapPin, Timer } from 'phosphor-react'
import {
  AdressOrderSuccess,
  IconLocal,
  IconTimer,
  IntroTextContainer,
  LocalContainer,
  LocalText,
  OrderInfo,
  SubTextSucessOrder,
  TextSucessOrder,
} from './styles'

export function IntroOrder() {
  return (
    <IntroTextContainer>
      <div>
        <TextSucessOrder>Uhu! Pedido confirmado</TextSucessOrder>
        <SubTextSucessOrder>
          Agora é só aguardar que logo o café chegará até você
        </SubTextSucessOrder>
      </div>

      <OrderInfo>
        <LocalContainer>
          <IconLocal>
            <MapPin size={16} weight="fill" />
          </IconLocal>

          <AdressOrderSuccess>
            <LocalText>Entrega em Rua João Daniel Martinelli, 102</LocalText>
            <LocalText>Farrapos - Porto Alegre, RS</LocalText>
          </AdressOrderSuccess>
        </LocalContainer>
        <LocalContainer>
          <IconTimer>
            <Timer size={16} weight="fill" />
          </IconTimer>

          <AdressOrderSuccess>
            <LocalText>Previsão de entrega</LocalText>
            <p>20 min - 30 min</p>
          </AdressOrderSuccess>
        </LocalContainer>
      </OrderInfo>
    </IntroTextContainer>
  )
}
