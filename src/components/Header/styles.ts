import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  background: ${(props) => props.theme['white-200']};
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const HeaderButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const BaseButtons = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 2.3rem;
  height: 2.3rem;
  border-radius: 6px;
  border: none;
  padding: 0 0.5rem;
  position: relative;
`
export const HeaderButton = styled(BaseButtons)`
  background: ${(props) => props.theme['purple-200']};
  color: ${(props) => props.theme['purple-300']};
  cursor: inherit;
`
export const ButtonCar = styled(BaseButtons)`
  transition: 0.4s;

  &:hover {
    background: ${(props) => props.theme['yellow-100']};
  }

  background: ${(props) => props.theme['yellow-200']};

  svg {
    color: ${(props) => props.theme['yellow-300']};
  }

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    color: ${(props) => props.theme['white-200']};

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;

    background: ${(props) => props.theme['yellow-300']};
  }
`
