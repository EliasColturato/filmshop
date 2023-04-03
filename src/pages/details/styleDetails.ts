import styled from 'styled-components';
import { Color } from '../../utils/colors';

export const WrapperDetail = styled.div`
  background-color: ${Color.secondaryColor};
  height: 100vh;
  color: ${Color.white};
  h1 {
    color: ${Color.primaryColor};
  }
`;

export const NavDetail = styled.div`
  display: flex;
  justify-content: space-around;
  height: 80px;
  align-items: center;
`;

export const WrapperCardDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;
  img {
    border-radius: 1rem;
    width: 300px;
  }
  p {
    width: 300px;
  }
  button {
    background-color: ${Color.primaryColor};
    color: ${Color.white};
    border: none;
    padding: 0.5rem;
    border-radius: 0.2rem;
    margin: 1rem 1rem 0 0;
    cursor: pointer;
    transition: all 0.3s;
  }
  button:hover {
    background-color: ${Color.primaryColor25};
  }
`;
