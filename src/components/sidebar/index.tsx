import { Link, useHistory } from 'react-router-dom';
import { Star, Paperclip, BookOpen, Search } from 'react-feather';
import routes from '../../routes/routesList';
import './style.scss';

const Sidebar: React.FC = () => {
    const history = useHistory();

    const handleRouteSwitch = (route: string) => {
        history.push(route);
    };

    return (
        <div className="app-sidebar">
            <div className="app-sidebar__navigation">
                {routes.map((route) => (
                    <div
                        key={route.path}
                        className="app-sidebar__navigation_item"
                    >
                        <Link
                            to={route.path}
                            onClick={() => handleRouteSwitch(route.path)}
                        >
                            {route.name === 'Popular' ? <Star />
                                : route.name === 'Archives' ? <Paperclip />
                                : route.name === 'Logs' ? <BookOpen />
                                : route.name === 'Search' ? <Search />
                                : null
                            }
                            <span>{route.name}</span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
