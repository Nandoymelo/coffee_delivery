import { IconWrapper, QuantityInputContainer } from './styles'
import { Minus, Plus } from 'phosphor-react'

interface QuantityProps {
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
}

export function ButtonQuantity({
  onDecrease,
  onIncrease,
  quantity,
}: QuantityProps) {
  return (
    <QuantityInputContainer>
      <IconWrapper onClick={onDecrease} disabled={quantity <= 1}>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="button" readOnly value={quantity} />
      <IconWrapper onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </QuantityInputContainer>
  )
}
