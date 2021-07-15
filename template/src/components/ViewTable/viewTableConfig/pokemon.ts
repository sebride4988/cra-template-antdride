import { useMemo } from 'react';

export const pokemon = {
  useColumns: () => {
    const columns = useMemo(() => {
      return [
        { dataIndex: 'name', title: '이름' },
        { dataIndex: 'url', title: '링크' },
      ];
    }, []);
    return columns;
  },
};
