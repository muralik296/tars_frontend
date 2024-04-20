import { useState } from 'react';
import axios from 'axios';
import { Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './search.module.css'


export default function Search() {

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        console.log(searchQuery, '= query');
        axios.post()
    };
    return (
        <div className={styles.center_page}>
            <h4>
                Welcome
                <p>
                    Enter a search query below
                </p>
            </h4>
            <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button variant="outline-primary" onClick={handleSearch}>
                    <FontAwesomeIcon icon={faSearch} />
                </Button>
            </Form>
            
        </div>
    );
}