import { TableProps } from 'antd';
import { useCallback } from 'react';
import { fp } from '../../../utils/fp';

export function useAttachAttributesToOnRow<T extends Record<string, any>>(
  kv: Partial<
    Record<
      keyof React.HTMLAttributes<HTMLElement>,
      (record: T, index?: number, event?: any) => void
    >
  >
) {
  const onRow: TableProps<T>['onRow'] = useCallback(
    (record: T, index?: number) => {
      const keys = Object.keys(
        kv
      ) as (keyof React.HTMLAttributes<HTMLElement>)[];
      const htmlAttributes: React.HTMLAttributes<HTMLElement> = keys.reduce(
        (acc, key) => {
          const fn = kv[key];
          return {
            ...acc,
            [key]: fn ? fp.partial(fn, [record, index]) : undefined,
          };
        },
        {}
      );
      return htmlAttributes;
    },
    [kv]
  );
  return onRow;
}
