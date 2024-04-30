import { useState } from 'react';
import { searchParams, useSearchParams } from 'react-router-dom';

import { Worker } from '@react-pdf-viewer/core';

// Import the main component
import { Viewer } from '@react-pdf-viewer/core';

// Search components
import { FlagKeyword, NextIcon, PreviousIcon, searchPlugin } from '@react-pdf-viewer/search';


// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

// default layout plugin
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// import { ScrollMode } from '@react-pdf-viewer/core';

// import { scrollModePlugin } from '@react-pdf-viewer/scroll-mode';

// import styles from './canvas.module.css'


export default function PdfComp(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');
    const list_of_search_words = query ? query.split(',') : null;
    // console.log(props);
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const searchPluginInstance = searchPlugin({
        keyword: list_of_search_words,
        onHighlightKeyword: (props) => {
            console.log(props.keyword)
            // if (props.keyword.source === 'machine') {
            props.highlightEle.style.outline = '2px dashed blue';
            props.highlightEle.style.backgroundColor = 'rgba(0, 0, 0, .1)';
            // } else {
            // props.highlightEle.style.outline = '2px dashed green';
            // props.highlightEle.style.backgroundColor = 'rgba(0, 0, 0, .1)';
            // }

        }
        // keyword: [{
        //     keyword: 'machine',
        //     wholeWords: true
        // }]
    });

    // scroll mode
    // const scrollModePluginInstance = scrollModePlugin();

    const { element } = props;
    console.log(element)
    const pdfUrl = `${process.env.REACT_APP_BACKEND}${element.file_loc}`
    console.log(pdfUrl)

    return (
        <div style={{ marginTop: '40px' }}>
            <h4>{element.file_name}</h4>
            <p>
                Created At: {new Date(element.created_at).toDateString()}
            </p>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <div style={{ height: '720px', marginBottom: '30px' }}>
                    <Viewer fileUrl={pdfUrl} plugins={[defaultLayoutPluginInstance, searchPluginInstance]} />
                </div>
            </Worker>
        </div>
    );
}