import { IntroCheckout } from './components/introCheck'
import { SelectCoffes } from './components/selectCoffees'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <IntroCheckout />
      <SelectCoffes />
    </CheckoutContainer>
  )
}
