import { Helmet } from 'react-helmet';


function Error404Helmet() {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>My react app - 404 error</title>
      <link rel="canonical" href="http://localhost:3000" />
    </Helmet>
  );
}

export default Error404Helmet;
