import { Trash } from 'phosphor-react'
import { ButtonQuantity } from '../../../../components/ButtonQuantity'
import {
  ActionContainer,
  CoffeesCardContainer,
  RegularText,
  RevomeCard,
} from './styles'
import { CartItem } from '../../../../context/contextCart'
import { formartMoney } from '../../../../utils/formartMoney'
import { UseCart } from '../../../../hooks/useCart'

interface CoffeeCardCardsProps {
  coffee: CartItem
}

export function CoffeCardCards({ coffee }: CoffeeCardCardsProps) {
  const { changeCartItemQuantity } = UseCart()

  const coffeeTotal = coffee.price * coffee.quantity

  const formattedPrice = formartMoney(coffeeTotal)

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase')
  }
  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease')
  }

  return (
    <CoffeesCardContainer>
      <div>
        <img src={`/coffees/${coffee.photo}`} alt="" />
        <div>
          <RegularText>{coffee.name}</RegularText>
          <ActionContainer>
            <ButtonQuantity
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={coffee.quantity}
            />
            <RevomeCard>
              <Trash size={16} />
              REMOVER
            </RevomeCard>
          </ActionContainer>
        </div>
      </div>

      <p>R$ {formattedPrice}</p>
    </CoffeesCardContainer>
  )
}
