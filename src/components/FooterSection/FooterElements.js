import styled from 'styled-components'

export const FooterContainer = styled.div`
  background: var(--dark-bg);
  width: 100%;
  height: 410px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    height: 240px; 
  }
`