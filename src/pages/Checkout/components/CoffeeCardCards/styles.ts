import styled from 'styled-components'

export const CoffeesCardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${(props) => props.theme['gray-button']};

  padding: 1.5rem;
  margin-bottom: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
    }
  }

  p {
    align-self: flex-start;
    font-weight: 700;
  }
`
export const RegularText = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
`
export const ActionContainer = styled.div`
  margin-top: 0.5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
export const RevomeCard = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme['gray-button']};
  border: 1px solid ${(props) => props.theme['gray-button']};
  color: ${(props) => props.theme['brown-text']};

  transition: 0.4s;

  svg {
    color: ${(props) => props.theme['purple-100']};
  }
  &:hover {
    background: ${(props) => props.theme['gray-hover']};
  }
`
