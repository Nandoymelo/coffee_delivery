import { PagamentCardsInput } from './styles'
import { CreditCard, Money, Bank } from 'phosphor-react'

export function PagamentFormCard() {
  return (
    <PagamentCardsInput>
      <CreditCard size={22} />
      Cartão de crédito
    </PagamentCardsInput>
  )
}
