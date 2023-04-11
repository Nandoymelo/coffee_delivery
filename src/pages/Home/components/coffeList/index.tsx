import { coffees } from '../../../../data/coffees'
import { CoffeCard } from '../CoffeeCard'
import { CoffeContainer, CoffeeList, TitleList } from './styles'

export function CoffeList() {
  return (
    <CoffeContainer>
      <TitleList>Nosso Cafés</TitleList>
      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </CoffeContainer>
  )
}
