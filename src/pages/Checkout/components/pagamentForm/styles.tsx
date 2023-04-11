import styled from 'styled-components'

export const PagamentCardsInput = styled.div`
  width: 178.67px;
  height: 51px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 0 0.8rem;
  background: ${(props) => props.theme['gray-button']};
  color: ${(props) => props.theme['brown-text']};
  gap: 0.75rem;
  border: 1px solid ${(props) => props.theme['gray-button']};
  border-radius: 6px;
  transition: 0.4s;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;

  text-transform: uppercase;

  &:hover {
    background: ${(props) => props.theme['gray-hover']};
  }

  svg {
    color: ${(props) => props.theme['purple-100']};
  }
`
