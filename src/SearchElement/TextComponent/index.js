import { Card } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import styles from './styles.module.css'

export default function TextComp(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');
    const list_of_search_words = query ? query.split(',') : null;
    console.log(list_of_search_words, '= list of search words')
    const { element } = props;


    function renderAndHighlightWords(text) {
        console.log(list_of_search_words)
        if (!list_of_search_words || list_of_search_words.length === 0) {
            return <p>{text}</p>;
        } else {
            const regexPattern = list_of_search_words
                .filter(term => term)
                .map(term => term.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'))
                .join('|');

            const regex = new RegExp(`(${regexPattern})`, 'gi');
            const parts = text.split(regex);

            return (
                <p>
                    {parts.map((part, index) =>
                        regex.test(part) ?
                            <span key={index} className={styles.highlight_word}>{part}</span> :
                            part
                    )}
                </p>
            )
        }
    }

    return (
        <Card style={{ marginTop: '45px' }}>
            <Card.Header>{element.file_name}</Card.Header>
            <Card.Body>
                <hr />
                {renderAndHighlightWords(element.content)}
            </Card.Body>
        </Card>
    )
}