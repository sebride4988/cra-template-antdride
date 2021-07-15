import { TableProps } from 'antd';

import { ViewTableProps } from './types';


export function useTableProps<T extends Record<string, any>>(
  props: ViewTableProps<T>
): Pick<
  TableProps<T>,
  'dataSource' | 'pagination' | 'onRow' | 'onChange' | 'loading'
> {
  return {
    dataSource: props.data?.results,
    pagination: {
      total: props.data?.count,
      current: props.page,
      pageSize: props.size,
      showSizeChanger: true,
    },
    onChange: (pagination) => {
      if (pagination.current) {
        props.setPage(pagination.current);
      }
      if (pagination.pageSize) {
        props.setSize(pagination.pageSize);
      }
    },
    loading: props.isFetching,
  };
}
