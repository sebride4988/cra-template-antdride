import { useState } from 'react';
import { PATHNAME } from '../../../constants';
import { useFindAllPokemonQuery } from '../../../redux/services/pokemon';
import PokemonHelmet from './Helmet';
import { ViewTableFactory } from '../../../components/ViewTable/ViewTableFactory';

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
        detailPath={PATHNAME.pokemon.detail.path}
        detailParamKey="name"
      />
    </div>
  );
}

export default PokemonListPage;
