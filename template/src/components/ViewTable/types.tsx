import { Dispatch, SetStateAction } from 'react';

export interface ViewTableProps<T extends Record<string, any>> {
  data?: {
    results: T[];
    count: number;
  };
  isFetching: boolean;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  size: number;
  setSize: Dispatch<SetStateAction<number>>;
}
