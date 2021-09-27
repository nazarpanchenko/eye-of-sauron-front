import { Container, Row, Col } from 'react-bootstrap';
import { Globe } from 'react-feather';
import './style.scss';

const Header: React.FC = () => {
    return (
        <div className="app-header">
            <Container fluid>
                <Row>
                    <Col className="d-flex justify-content-between align-items-center">
                        <span>Eye of Sauron</span>
                        <Globe />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;
