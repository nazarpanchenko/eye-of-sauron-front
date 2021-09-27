import { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from './routesList';
import { Loader } from '../components';

const Routes: React.FC = () => (
    <Suspense fallback={<Loader />}>
        <Switch>
            <Route exact path='/'>
                <Redirect to='/popular' /> 
            </Route>
            {routes.map(route =>
                <Route
                    key={route.path}
                    path={route.path}
                    component={route.component}
                />
            )}
        </Switch>
    </Suspense>
);

export default Routes;
