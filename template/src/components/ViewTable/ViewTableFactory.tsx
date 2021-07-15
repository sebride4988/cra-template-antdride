import { Table } from 'antd';
import { useTableProps } from './useTableProps';
import { ViewTableProps } from './types';
import viewTableConfig from './viewTableConfig';

export function ViewTableFactory<T extends Record<string, any>>(
  props: ViewTableProps<T> & { type: keyof typeof viewTableConfig }
) {
  const columns = viewTableConfig[props.type].useColumns();
  const onRow = viewTableConfig[props.type].useOnRow();
  const tableProps = useTableProps(props);
  return <Table columns={columns} onRow={onRow as any} {...tableProps} />;
}
