import styled from 'styled-components'

export const InputStylesContainer = styled.input`
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['gray-button']};
  background: ${(props) => props.theme['gray-input']};
  transition: 0.4s;

  &:focus {
    border-color: ${(props) => props.theme['yellow-300']};
  }

  color: ${(props) => props.theme['brown-text']};

  padding: 0.75rem;

  &::placeholder {
    color: ${(props) => props.theme['brown-label']};
  }
`
