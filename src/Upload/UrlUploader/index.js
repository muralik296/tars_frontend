import { Button } from 'react-bootstrap';
import { InputGroup, FormControl } from 'react-bootstrap';
import { faPlus, faGlobe, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import { useState } from 'react';

export default function UrlUploader(props) {

    const { handleUrlAdd, handleUrlChange, urlList, inputUrl, setUrlList } = props;

    const [isLoading, setLoading] = useState(null);
    const [isError, setError] = useState(null);

    function removeUrlFromList(urlId) {
        console.log(urlId)
        const newUrlList = urlList.filter((element) => {
            if (element.urlId !== urlId) return element
        });
        console.log(newUrlList);
        setUrlList(newUrlList);
    }

    function renderUrls() {
        return urlList.map((element, index) => {
            const { url, urlId } = element;
            return (
                <div key={index}>
                    <FontAwesomeIcon icon={faGlobe} />
                    <a href={url} target="_blank">{url}</a>
                    <span onClick={() => removeUrlFromList(urlId)}>
                        <FontAwesomeIcon title='remove' icon={faXmark} style={{ color: 'red' }} />
                    </span>
                </div>
            )
        })
    }

    async function handleUrlSubmission() {
        try {
            setLoading(true)
            const response = await axios.post(`${process.env.REACT_APP_BACKEND}/upload/`, { 'urls': urlList }, {
                'headers': {
                    "Content-Type": 'application/json'
                }
            });
            setLoading(false)
            setUrlList([])
        } catch (err) {
            setError(true)
            console.log(err)
        }

    }
    if (isError){
        return 'An Error Occured try later'
    }
    if (isLoading) {
        return <Spinner />
    }
    return (<div>
        <InputGroup className="mb-3">
            <FormControl
                placeholder="Enter url..."
                onChange={handleUrlChange}
                value={inputUrl}
            />
            <Button variant="secondary" onClick={handleUrlAdd}>
                <FontAwesomeIcon icon={faPlus} />
            </Button>
        </InputGroup>
        <div>
            {urlList.length > 0 ? renderUrls() : null}
        </div>
        <div style={{ marginTop: '10px' }}>
            <Button variant='secondary' onClick={handleUrlSubmission}>
                Submit
            </Button>
        </div>
    </div>)
}