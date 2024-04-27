import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { Button } from 'react-bootstrap';
import styles from './canvas.module.css'


export default function PdfComp(props) {
    console.log(props);
    const { element } = props;
    console.log(element)
    const pdfUrl = `${process.env.REACT_APP_BACKEND}${element.file_loc}`
    console.log(pdfUrl)

    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);
    const [renderNavButtons, setRenderNavButtons] = useState(false);

    const onSuccess = (sample) => {
        setPageNumber(1);
        setRenderNavButtons(true);
    }

    const changePage = (offset) => {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }
    const previousPage = () => { changePage(-1); }
    const nextPage = () => { changePage(+1); }
    return (
        <>
            <div>
                <Document
                    file={pdfUrl}
                    onLoadSuccess={({ numPages }) => {
                        setNumPages(numPages);
                        setRenderNavButtons(true);
                        onSuccess();
                    }}
                    hideNavbar={true}
                    scale={0.2}
                >
                    <Page
                        size="A4"
                        pageNumber={pageNumber}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        scale={1.5}
                    />
                </Document>
            </div>

            {renderNavButtons &&
                <div className="buttonc">
                    <Button
                        disabled={pageNumber <= 1}
                        onClick={previousPage}
                        variant='primary'
                    >
                        Previous Page
                    </Button>
                    {"  "}
                    <Button
                        disabled={pageNumber === numPages}
                        onClick={nextPage}
                        variant='primary'
                    >
                        Next Page
                    </Button>
                </div>}
        </>
    );
}