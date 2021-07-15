import { Helmet } from 'react-helmet';


function AboutHelmet() {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>My react app - about</title>
      <link rel="canonical" href="http://localhost:3000" />
    </Helmet>
  );
}

export default AboutHelmet;
