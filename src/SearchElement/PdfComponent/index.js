import { useState } from 'react';
import { Worker } from '@react-pdf-viewer/core';

// Import the main component
import { Viewer } from '@react-pdf-viewer/core';

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
    // console.log(props);
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
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
                <div style={{height: '720px',marginBottom: '30px'}}>
                    <Viewer fileUrl={pdfUrl} plugins={[defaultLayoutPluginInstance]} />
                </div>
            </Worker>
        </div>
    );
}