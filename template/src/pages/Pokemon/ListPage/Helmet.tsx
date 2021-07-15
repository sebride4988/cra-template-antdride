import { Helmet } from 'react-helmet';

function PokemonHelmet() {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>My react app - pokemon</title>
      <link rel="canonical" href="http://localhost:3000" />
    </Helmet>
  );
}

export default PokemonHelmet;
