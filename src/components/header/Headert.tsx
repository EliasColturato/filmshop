import { WrapperHeader, Logo, NavHeader } from './headerStyle';

export default function Header() {
  return (
    <WrapperHeader>
      <Logo>
        <h1>Film</h1>
        <p>Shop</p>
      </Logo>
      <NavHeader>
        <input type="text" placeholder="Qual fime quer assistir hoje?" />
      </NavHeader>
    </WrapperHeader>
  );
}
