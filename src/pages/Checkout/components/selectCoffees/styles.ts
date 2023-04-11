import styled from 'styled-components'
import { SelectionBaseStyled } from '../../styles'

export const SelectCoffessContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;
`
export const OrderCoffees = styled(SelectionBaseStyled)`
  display: flex;
  flex-direction: column;
  border-radius: 6px 44px 6px 44px;
`

export const OrderTotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .Total {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
  }
`
export const TextOrder = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
`

export const ConfirmedButton = styled.button`
  padding: 0.75rem 2.8rem;
  background: ${(props) => props.theme['yellow-100']};
  color: ${(props) => props.theme['white-200']};
  font-weight: 700;
  font-size: 14px;
  border-radius: 6px;
  border: none;
  text-transform: uppercase;
  line-height: 1.3rem;

  &:disabled {
    opacity: 0.7s;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme['yellow-300']};
  }
`
