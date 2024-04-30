import { Card } from 'react-bootstrap';

export default function UrlComp(props) {
    const { element } = props;
    console.log(element.file_name)
    return (
        <Card style={{ marginTop: '45px' }}>
            <Card.Header>{element.file_name}</Card.Header>
            <Card.Body>
                <hr />
                <iframe src={`${element.file_name}`} style={{ width: '100%', height: '400px' }}>
                    </iframe>
            </Card.Body>
        </Card>
    )
}