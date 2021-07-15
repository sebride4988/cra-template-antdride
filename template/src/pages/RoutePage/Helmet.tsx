import { Helmet } from 'react-helmet';

function RouteHelmet() {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>My react app</title>
      <link rel="canonical" href="http://localhost:3000" />
    </Helmet>
  );
}

export default RouteHelmet;
