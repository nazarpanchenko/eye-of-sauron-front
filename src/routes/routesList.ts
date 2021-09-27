import { lazy } from 'react';

const Popular = lazy(() => import('../modules/popular'));
const Logs = lazy(() => import('../modules/logs'));
const Archives = lazy(() => import('../modules/archives'));
const Search = lazy(() => import('../modules/search'));

const routes = [
    {
        component: Popular,
        path: '/popular',
        name: 'Popular'
    },
    {
        component: Logs,
        path: '/logs',
        name: 'Logs',
        icon: 'Paperclip'
    },
    {
        component: Archives,
        path: '/archives',
        name: 'Archives'
    },
    {
        component: Search,
        path: '/search',
        name: 'Search'
    }
];

export default routes;
