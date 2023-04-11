import { UseCart } from '../../../../hooks/useCart'
import { CoffeCardCards } from '../CoffeeCardCards'
import { TitleForm } from '../introCheck/styles'
import { OrderCoffees, SelectCoffessContainer } from './styles'
import { TotalOrder } from './totalOrder'

export function SelectCoffes() {
  const { cartItems } = UseCart()
  return (
    <SelectCoffessContainer>
      <TitleForm>Cafés selecionados</TitleForm>

      <OrderCoffees>
        {cartItems.map((item) => (
          <CoffeCardCards key={item.id} coffee={item} />
        ))}

        <TotalOrder />
      </OrderCoffees>
    </SelectCoffessContainer>
  )
}
