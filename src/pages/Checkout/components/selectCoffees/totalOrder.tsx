import { NavLink } from 'react-router-dom'
import { ConfirmedButton, OrderTotalContainer, TextOrder } from './styles'

export function TotalOrder() {
  return (
    <OrderTotalContainer>
      <div>
        <TextOrder>Total de itens</TextOrder>
        <TextOrder>R$ 29,75</TextOrder>
      </div>

      <div>
        <TextOrder>Entrega</TextOrder>
        <TextOrder>R$ 3,50</TextOrder>
      </div>

      <div>
        <TextOrder className="Total">Total</TextOrder>
        <TextOrder>R$ 33,20</TextOrder>
      </div>
      <NavLink to="/CheckoutFinished">
        <ConfirmedButton>Confirmar pedido</ConfirmedButton>
      </NavLink>
    </OrderTotalContainer>
  )
}
