import styled from 'styled-components';
import { Color } from '../../utils/colors';

export const WrapperDetail = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background-color: ${Color.secondaryColor};
  color: ${Color.white};
  height: 100vh;
  h1 {
    color: ${Color.primaryColor};
  }
`;

export const NavDetail = styled.div`
  display: flex;
  justify-content: space-around;
  height: 80px;
  width: 100%;
  align-items: center;
  button {
    background: none;
    padding: 0.5rem;
    color: ${Color.white};
    border: 1px solid ${Color.primaryColor};
    border-radius: 0.5rem;
    cursor: pointer;
  }
`;

export const ControllCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
`;

export const WrapperCardDetail = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  img {
    border-radius: 1rem;
    width: 250px;
  }
  p {
    width: 250px;
    font-size: 14px;
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
