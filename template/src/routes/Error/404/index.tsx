import React, { useCallback } from 'react';
import { Result, Button } from 'antd';
import { useHistory } from 'react-router';
import { PATHNAME } from '../../../constants';

interface Error404Props {}

type MergeProps = Error404Props;

function Error404(props: MergeProps) {
  const history = useHistory();
  const goHome = useCallback(() => {
    history.push(PATHNAME.home.path);
  }, [history]);

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={goHome}>
          Back Home
        </Button>
      }
    ></Result>
  );
}

Error404.defaultProps = {};

export default Error404;
