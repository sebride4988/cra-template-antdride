import { PATHNAME } from '@antdride/constants';
import { useFindOnePokemonByNameQuery } from '@antdride/redux/services/pokemon';
import { Typography } from 'antd';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import PokemonHelmet from './Helmet';

function PokemonDetailPage() {
  const { name } = useParams<{ name: string }>();
  const { data } = useFindOnePokemonByNameQuery(name);
  return (
    <div className="App">
      <PokemonHelmet name={name} />
      <div>pokemon 페이지입니다</div>
      <Typography.Title>{data?.name}</Typography.Title>
      <Typography.Title>
        {data?.types.map((type) => type.type.name).join(', ')}
      </Typography.Title>
      <Link to={PATHNAME.pokemon.path}>go list</Link>
    </div>
  );
}

export default PokemonDetailPage;
