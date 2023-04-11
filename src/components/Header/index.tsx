import { NavLink } from 'react-router-dom'
import logoCoffe from '../../assets/Logo.svg'
import {
  ButtonCar,
  HeaderButton,
  HeaderButtonContainer,
  HeaderContainer,
} from './styles'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { UseCart } from '../../hooks/useCart'

export function Header() {
  const { cartquantity } = UseCart()
  return (
    <HeaderContainer>
      <div>
        <NavLink to="/">
          <img src={logoCoffe} alt="" />
        </NavLink>

        <HeaderButtonContainer>
          <HeaderButton>
            <MapPin size={22} weight="fill" />
            Manaus, AM
          </HeaderButton>
          <NavLink to="/Checkout" title="Pagamento">
            <ButtonCar>
              {cartquantity >= 1 && <span>{cartquantity}</span>}

              <ShoppingCart size={22} weight="fill" />
            </ButtonCar>
          </NavLink>
        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  )
}
