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
import KeyWords from '../KeyWords';

// import { ScrollMode } from '@react-pdf-viewer/core';

// import { scrollModePlugin } from '@react-pdf-viewer/scroll-mode';

// import styles from './canvas.module.css'


export default function PdfComp(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');
    const list_of_search_words = query ? query.split(',') : null;
    const colors = ['red', 'green', 'blue', 'yellow'];

    function highlightKeywords(props) {
        console.log(props.keyword.source)
        for (let i = 0; i < list_of_search_words.length; i++){
            if (props.keyword.source == list_of_search_words[i]){
                props.highlightEle.style.outline = `2px dashed ${colors[i]}`;
                props.highlightEle.style.backgroundColor = 'rgba(0, 0, 0, .1)';
            }
        }
    }

    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const searchPluginInstance = searchPlugin({
        keyword: list_of_search_words,
        onHighlightKeyword: (props) => highlightKeywords(props),
        keyword: list_of_search_words.map((word)=>{
            return {
                keyword: word,
                wholeWords: false,
                matchCase: false
            }
        })
        // keyword: [{
        //     keyword: 'machine',
        //     wholeWords: true
        // }]
    });

    const { element } = props;
    console.log(element)
    const pdfUrl = `${process.env.REACT_APP_BACKEND}${element.file_loc}`
    console.log(pdfUrl)

    return (
        <div style={{ marginTop: '40px' }}>
            <h4>{element.file_name}</h4>
            <KeyWords element={element} />
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