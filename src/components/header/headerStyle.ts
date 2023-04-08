import styled from 'styled-components';
import { Color } from '../../utils/colors';

export const WrapperHeader = styled.div`
  background-color: ${Color.secondaryColor};
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: baseline;
  color: ${Color.primaryColor};
  p {
    color: ${Color.white};
  }
`;

export const NavHeader = styled.div`
  column-gap: 1rem;
  display: flex;
  input {
    background: none;
    border: 1px solid ${Color.secondaryColor25};
    padding: 0.5rem 1rem;
    border-radius: 1rem;
  }
  input:focus {
    outline: none;
    color: ${Color.white};
  }
  button {
    background-color: ${Color.primaryColor};
    color: ${Color.white};
    border: none;
    padding: 0.5rem;
    border-radius: 0.5rem;
    transition: all 0.3s;
    cursor: pointer;
  }
  button:hover {
    background-color: ${Color.primaryColor25};
  }
`;
