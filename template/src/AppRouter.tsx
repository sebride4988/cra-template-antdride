import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PATHNAME } from './constants';
import RoutePage from './pages/RoutePage';
import WildCard from './pages/Wildcard';

interface AppRouterProps {}

type MergeProps = AppRouterProps;

function AppRouter(props: MergeProps) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={PATHNAME.route.path}>
          <RoutePage />
        </Route>
        <Route exact path={PATHNAME.about.path}>
          <RoutePage />
        </Route>
        <Route path="*">
          <WildCard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

AppRouter.defaultProps = {};

export default AppRouter;
