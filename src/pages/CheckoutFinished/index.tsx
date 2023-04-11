import { IntroOrder } from './components/introOrder'
import { FinisheContainer } from './styles'
import SuccessImg from '../../assets/Illustration.svg'

export function CheckoutFinished() {
  return (
    <FinisheContainer>
      <IntroOrder />
      <img src={SuccessImg} alt="" />
    </FinisheContainer>
  )
}
