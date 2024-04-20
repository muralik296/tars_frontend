import { Button } from 'react-bootstrap';
import { InputGroup, FormControl } from 'react-bootstrap';
import { faPlus, faGlobe, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function UrlUploader(props) {

    const { handleUrlAdd, handleUrlChange, urlList, inputUrl, setUrlList } = props;

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
            <Button variant='secondary'>
                Submit
            </Button>
        </div>
    </div>)
}