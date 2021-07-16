import { Button, Result } from 'antd';
import { useCallback } from 'react';
import { useHistory } from 'react-router';

import { PATHNAME } from '../../../constants';

import Error404Helmet from './Error404Helmet';

interface Error404Props {}

type MergeProps = Error404Props;

function Error404(props: MergeProps) {
  const history = useHistory();
  const goRoute = useCallback(() => {
    history.push(PATHNAME.route.path);
  }, [history]);

  return (
    <>
      <Error404Helmet />
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={goRoute}>
            Back Home
          </Button>
        }
      />
    </>
  );
}

Error404.defaultProps = {};

export default Error404;
