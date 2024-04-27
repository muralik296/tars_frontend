import { useState,useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './search.module.css'
import SearchResults from './SearchResults';
import Title from './Title';


export default function Search() {

    const [searchParams, setSearchParams] = useSearchParams();

    const [searchQuery, setSearchQuery] = useState(searchParams.get('query'));

    const [inputSearch, setInputSearch] = useState(searchParams.get('query'))

    const handleSearch = () => {
        // on clicking button
        setSearchQuery(inputSearch)
        setSearchParams({ 'query': inputSearch })
    };

    useEffect(() => {
        const query = searchParams.get('query');
        setInputSearch(query || '');
        setSearchQuery(query || '');
        setInputSearch(query || '');
    }, [searchParams]);

    return (
        <>
            {searchQuery ? null : <Title />}
            <div className={styles.center_page}>
                <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
                    <FormControl
                        type="search"
                        placeholder="Ask TARS anything..."
                        className="me-2"
                        value={inputSearch}
                        onChange={(e) => setInputSearch(e.target.value)}
                    />
                    <Button variant="outline-secondary" onClick={handleSearch}>
                        <FontAwesomeIcon icon={faSearch} />
                    </Button>
                </Form>
                {searchQuery ? <SearchResults query={searchQuery} /> : null}
            </div>
        </>
    );
}