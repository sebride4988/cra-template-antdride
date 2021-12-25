import { useState } from 'react';

import { ViewTableFactory } from 'components/ViewTable/ViewTableFactory';
import { useFindAllPokemonQuery } from 'redux/services/pokemon';

import PokemonHelmet from './Helmet';

function PokemonListPage() {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const { data, isFetching } = useFindAllPokemonQuery({ page, size });
  return (
    <div className="App">
      <PokemonHelmet />
      <div>pokemon 페이지입니다</div>
      <ViewTableFactory
        type="pokemon"
        page={page}
        setPage={setPage}
        size={size}
        setSize={setSize}
        data={data}
        isFetching={isFetching}
      />
    </div>
  );
}

export default PokemonListPage;
