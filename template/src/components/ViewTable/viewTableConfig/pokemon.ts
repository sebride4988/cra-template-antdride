import { useMemo } from 'react';
import { PATHNAME } from '../../../constants';
import { PokemonItem } from '../../../redux/services/types';
import { useGoDetail } from '../hooks/useGoDetail';
import { useAttachAttributesToOnRow } from '../hooks/useAttachAttributesToOnRow';

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
  useOnRow: () => {
    const goDetail = useGoDetail<PokemonItem>(
      PATHNAME.pokemon.detail.path,
      'name'
    );
    const onRow = useAttachAttributesToOnRow<PokemonItem>({
      onClick: goDetail,
    });
    return onRow;
  },
};
