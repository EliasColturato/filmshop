import styled from 'styled-components';
import { Color } from '../../utils/colors';

export const WrapperHome = styled.div`
  background-color: ${Color.secondaryColor};
`;

export const NavHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: ${Color.white};
  div {
    width: 200px;
    justify-content: space-between;
    display: flex;
    align-items: center;
  }
  button {
    background: none;
    color: ${Color.white};
    border: 1px solid ${Color.primaryColor};
    padding: 0.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
  }
`;

export const ShelfFilms = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 1rem;
  column-gap: 1rem;
  a {
    text-decoration: none;
  }
`;
