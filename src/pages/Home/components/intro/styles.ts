import styled from 'styled-components'

export const HomerContainer = styled.div`
  width: 100%;
  height: 34rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const BodyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`

export const Title = styled.h1`
  margin-bottom: 1rem;

  h1 {
    font-weight: 800;
    font-size: 48px;
    line-height: 130%;
  }
`
export const SubTitle = styled.strong`
  strong {
    font-size: 20px;
  }
`

const BaseIcon = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 68%;
  color: ${(props) => props.theme['white-100']};
`
export const ItensContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 12px;
  margin-top: 4.125rem;

  p {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`

export const IconShopp = styled(BaseIcon)`
  background: ${(props) => props.theme['yellow-300']};
`
export const IconPackge = styled(BaseIcon)`
  background: ${(props) => props.theme['brown-text']};
`
export const IconTimer = styled(BaseIcon)`
  background: ${(props) => props.theme['yellow-100']};
`
export const IconCoffee = styled(BaseIcon)`
  background: ${(props) => props.theme['purple-100']};
`
