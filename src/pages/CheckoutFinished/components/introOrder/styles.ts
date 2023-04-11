import styled from 'styled-components'

export const IntroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const TextSucessOrder = styled.div`
  display: flex;
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 2rem;

  color: ${(props) => props.theme['yellow-300']};
`
export const SubTextSucessOrder = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;

  color: ${(props) => props.theme['brown-text']};
`
export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;
  border-radius: 6px 36px 6px 36px;
  border: 1px solid #dbac2c;
  border-right-color: #8047f8;
  border-bottom-color: #8047f8;
`

const BaseIconSuccess = styled.div`
  color: ${(props) => props.theme['white-100']};
  display: flex;
  align-items: center;
  padding: 8px;
  width: 2rem;
  height: 2rem;
  border-radius: 68%;
  border: 1px solid;
`

export const IconLocal = styled(BaseIconSuccess)`
  background: ${(props) => props.theme['purple-100']};
`

export const IconTimer = styled(BaseIconSuccess)`
  background: ${(props) => props.theme['yellow-100']};
`

export const LocalContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
  gap: 8px;
`
export const AdressOrderSuccess = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 2px;
  p {
    font-weight: 700;
  }
`
export const LocalText = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: ${(props) => props.theme['brown-text']};
`
