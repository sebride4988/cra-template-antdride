import Error404 from '../../components/Error/404';


interface WildcardPageProps {}

type MergeProps = WildcardPageProps;

function WildcardPage(props: MergeProps) {
  return <Error404 />;
}

WildcardPage.defaultProps = {};

export default WildcardPage;
