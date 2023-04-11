import { ButtonQuantity } from '../../../../components/ButtonQuantity'
import {
  AddCart,
  Buy,
  CoffeCardContainer,
  Description,
  Name,
  Price,
  Tags,
  TextPrice,
} from './styles'

import { ShoppingCart } from 'phosphor-react'
import { formartMoney } from '../../../../utils/formartMoney'
import { useState } from 'react'
import { UseCart } from '../../../../hooks/useCart'

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeProps {
  coffee: Coffee
}

export function CoffeCard({ coffee }: CoffeProps) {
  const { addCoffeeToCart } = UseCart()

  const [quantity, setQuantity] = useState(1)

  function handleQuantityMore() {
    setQuantity((state) => state + 1)
  }
  function handleQuantityLow() {
    setQuantity((state) => state - 1)
  }

  function handleAddCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }
    addCoffeeToCart(coffeeToAdd)
  }

  const formarttedPrice = formartMoney(coffee.price)
  return (
    <CoffeCardContainer>
      <img src={`/coffees/${coffee.photo}`} alt="" />
      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>
      <Buy>
        <div>
          <Price>R$</Price>
          <TextPrice>{formarttedPrice}</TextPrice>
        </div>

        <AddCart>
          <ButtonQuantity
            onIncrease={handleQuantityMore}
            onDecrease={handleQuantityLow}
            quantity={quantity}
          />
          <button onClick={handleAddCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCart>
      </Buy>
    </CoffeCardContainer>
  )
}
