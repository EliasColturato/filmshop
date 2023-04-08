import styled from 'styled-components';
import { Color } from '../../utils/colors';

export const WrapperSearch = styled.div`
  background-color: ${Color.secondaryColor};
`;

export const NavSearch = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${Color.white};
  height: 80px;
  button {
    padding: 0.5rem;
    border: 1px solid ${Color.primaryColor};
    background: none;
    color: ${Color.white};
    border-radius: 0.5rem;
    cursor: pointer;
  }
`;

export const ContentSearch = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  h1 {
    color: ${Color.primaryColor};
  }
`;
