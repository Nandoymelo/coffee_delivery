import styled from 'styled-components'

export const CoffeCardContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme['gray-card']};
  border-radius: 6px 36px 6px 36px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0;
  text-align: center;
  width: 256px;
  height: 310px;
  img {
    margin-top: -1.25rem;
  }
`
export const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;

  span {
    background: ${(props) => props.theme['yellow-100']};
    color: ${(props) => props.theme['yellow-300']};
    font-size: 10px;
    padding: 0.25rem 0.5rem;
    font-weight: 700;
    border-radius: 999px;
    text-transform: uppercase;
  }
`
export const Name = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 20px;
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;

  color: ${(props) => props.theme['brown-subtitle']};

  margin-bottom: 0.5rem;
`
export const Description = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: ${(props) => props.theme['brown-label']};
  margin-bottom: 2rem;
`

export const Buy = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 3px;
  }
  p {
    line-height: 0.75rem;
  }
`
export const Price = styled.div`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
`
export const TextPrice = styled.div`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
`
export const AddCart = styled.div`
  width: 7.5rem;

  > button {
    width: 2.375rem;
    height: 2.375rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme['purple-300']};
    color: ${(props) => props.theme['gray-card']};
    border-radius: 6px;
    margin-left: 0.3rem;
    transition: 0.4s;

    &:hover {
      background: ${(props) => props.theme['purple-100']};
    }
  }
`
