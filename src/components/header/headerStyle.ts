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
`;
