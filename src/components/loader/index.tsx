import { Spinner } from 'react-bootstrap';
import './style.scss';

const Loader: React.FC = () => (
    <div className="spinner">
        <Spinner animation="border" />
    </div>
);

export default Loader;
