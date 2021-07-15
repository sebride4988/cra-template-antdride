import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { PATHNAME } from './constants';
import AboutPage from './pages/AboutPage';
import PokemonDetailPage from './pages/Pokemon/DetailPage';
import PokemonListPage from './pages/Pokemon/ListPage';
import RoutePage from './pages/RoutePage';
import WildcardPage from './pages/WildcardPage';


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
          <AboutPage />
        </Route>
        <Route exact path={PATHNAME.pokemon.path}>
          <PokemonListPage />
        </Route>
        <Route exact path={PATHNAME.pokemon.detail.path}>
          <PokemonDetailPage />
        </Route>
        <Route path="*">
          <WildcardPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

AppRouter.defaultProps = {};

export default AppRouter;
