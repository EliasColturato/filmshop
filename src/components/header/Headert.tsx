import { useState } from 'react';

import { WrapperHeader, Logo, NavHeader } from './headerStyle';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!search) return;

    navigate(`/search?q=${search}`);
  };
  return (
    <WrapperHeader>
      <Logo>
        <h1>Film</h1>
        <p>Shop</p>
      </Logo>
      <NavHeader>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Qual fime quer assistir hoje?"
            onChange={e => setSearch(e.target.value)}
          />
          <button type="submit">Procurar</button>
        </form>
      </NavHeader>
    </WrapperHeader>
  );
}
