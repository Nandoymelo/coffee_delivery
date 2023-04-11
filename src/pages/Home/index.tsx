import { CoffeList } from './components/coffeList'
import { Intro } from './components/intro'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <CoffeList />
    </HomeContainer>
  )
}
