import styled from 'styled-components';
import { Color } from '../../utils/colors';

export const WrapperCard = styled.div`
  width: 500px;
  margin: 1rem;
  cursor: pointer;
  img {
    width: 100%;
    border-radius: 0.5rem;
  }
  color: ${Color.secondaryColor25};
  text-align: center;
  &:hover {
    p {
      transform: translateX(0px);
      opacity: 1;
    }
  }
`;

export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 18px;
    position: relative;
    color: ${Color.primaryColor};
  }
  p {
    font-size: 14px;
    font-weight: 200;
    position: relative;
    color: ${Color.white};
    transform: translateX(-80px);
    opacity: 0;
    transition: all 0.3s;
  }
`;
