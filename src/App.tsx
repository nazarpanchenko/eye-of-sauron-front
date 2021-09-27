import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Routes from './routes';
import './index.scss';

const App: React.FC = () => (
    <div className='app-wrapper'>
        <Header />
        <Router>
            <Sidebar />
            <div className="app-content">
                <Routes />
            </div>
        </Router>
    </div>
);

export default App;
