import { Card } from 'react-bootstrap';

export default function UrlComp(props) {
    const { element } = props;
    return (
        <Card style={{ marginTop: '45px' }}>
            <Card.Header>{element.file_name}</Card.Header>
            <Card.Body>
                <hr />
                <a href={`${element.file_name}`} target='_blank' style={{ width: '100%', height: '400px' }}>
                    {element.file_name}
                    </a>
            </Card.Body>
        </Card>
    )
}