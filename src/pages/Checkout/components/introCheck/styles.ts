import styled from 'styled-components'
import { SelectionBaseStyled } from '../../styles'

export const Checkoutcontext = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;
`
export const TitleForm = styled.div`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
  display: flex;
  align-items: center;
`

export const FormselectionContainer = styled(SelectionBaseStyled)`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  svg {
    color: ${(props) => props.theme['yellow-100']};
  }
`

export const SubTitleFrom = styled.div`
  display: flex;
  padding: 0px;
  gap: 8px;
`

export const AddressInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 2px;
`

export const Textaddress = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
`

export const TextInfor = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
`

export const InputsContext = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.5rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .road {
    grid-column: span 3;
  }
  .number {
    grid-column: span 1;
    max-width: 12.5rem;
  }
  .complement {
    grid-column: span 2;
  }
`

export const PagamentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
`
