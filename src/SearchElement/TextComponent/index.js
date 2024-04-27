import { Card } from 'react-bootstrap';

export default function TextComp(props) {
    const { element } = props;
    return (
        <Card style={{ marginTop: '45px' }}>
            <Card.Header>{element.file_name}</Card.Header>
            <Card.Body>
                <hr />
                <object data={`${process.env.REACT_APP_BACKEND}${element.file_loc}`} style={{ width: '100%', height: '400px' }} />
            </Card.Body>
        </Card>
    )
}