import React from 'react';
import Error404 from '../../components/Error/404';

interface WildCardProps {}

type MergeProps = WildCardProps;

function WildCard(props: MergeProps) {
  return <Error404 />;
}

WildCard.defaultProps = {};

export default WildCard;
