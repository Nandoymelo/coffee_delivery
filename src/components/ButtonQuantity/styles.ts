import styled from 'styled-components'

export const QuantityInputContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;

  border-radius: 6px;
  padding: 0.5rem;

  background: ${(props) => props.theme['gray-button']};

  input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    background: ${(props) => props.theme['gray-button']};

    &:focus {
      outline: none;
    }
  }
`
export const IconWrapper = styled.button`
  display: flex;
  align-items: center;
  width: 0.875rem;
  height: 0.875rem;
  border: none;
  background: none;
  color: ${(props) => props.theme['purple-100']};
  transition: 0.4s;

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${(props) => props.theme['purple-300']};
  }
`
