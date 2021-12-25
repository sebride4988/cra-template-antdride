import { useCallback } from 'react';

import { useHistory } from 'react-router';

export function useGoDetail<T extends Record<string, any>>(
  detailPath: string,
  detailParamKey: keyof T,
) {
  const history = useHistory();
  const goDetail = useCallback(
    (record: T) => {
      history.push(
        detailPath.replace(':' + detailParamKey, record[detailParamKey]),
      );
    },
    [history, detailPath, detailParamKey],
  );

  return goDetail;
}
