import React, { useState } from 'react';

import AwesomeRadio from "../AwesomeRadio"
import styles from "./upload.module.css";
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faFileLines, faFilePdf, faFileImage, faGlobe } from '@fortawesome/free-solid-svg-icons';
import UrlUploader from './UrlUploader';
import { v4 as uuidv4 } from 'uuid';

import { Spinner } from 'react-bootstrap';

import axios from 'axios';

export default function Upload() {

    const [isError, setError] = useState(false); // error state
    const [isLoading, setLoading] = useState(false); // loader

    // default option
    const [optionForUpload, setOptionForUpload] = useState('file')

    const [files, setFiles] = useState([]);

    const [urlList, setUrlList] = useState([]);
    const [inputUrl, setInputUrl] = useState('');

    function handleUrlChange(e) {
        console.log(e.target.value);
        setInputUrl(e.target.value);
    }

    function handleUrlAdd(e) {
        //TO DO: We need to check if valid url or not using validator

        setUrlList((prev) => [...prev, { urlId: uuidv4(), url: inputUrl }])
        setInputUrl('')
        console.log(urlList);
    }



    function handleFileUploadButton() {
        document.getElementById('fileInput').click();
    }

    function handleFileInput(event) {
        // handle only supported file types
        for (let file of event.target.files) {
            // console.log(file)
            const ext = file.type.split('/')[1];
            console.log(ext);
            if (!(['pdf', 'plain', 'png', 'jpeg', 'jpg'].includes(ext))) {
                return alert('Please upload files in the specified format')
            }
        }
        setFiles(event.target.files);
    }

    async function handleSubmission(event) {
        try {
            // set loading to true
            setLoading(prev => !prev)

            if (files.length == 0) {
                return alert('Please upload files to continue');
            }
            const payLoad = new FormData();
            console.log(payLoad, '= payload');
            for (let file of files) {
                console.log(file);
                payLoad.append('files', file)
            }
            console.log(payLoad, '=payload')
            const response = await axios.post(`${process.env.REACT_APP_BACKEND}/upload/`, payLoad, {
                'headers': {
                    "Content-Type": 'multipart/form-data'
                }
            });
            // set loading to false
            setLoading(prev => !prev)
            setFiles([])
        } catch (e) {
            console.log(e);
            setError(prev => !prev)
            setTimeout(() => {
                setError(prev => !prev);
            }, 2000);
        }


    }


    function renderFileUploadMethod() {
        return (
            <>
                <div style={{ marginBottom: '10px' }}>
                    <i>
                        Supported file types include: .pdf, .jpeg , .png , .txt , .jpg
                    </i>
                </div>
                <input id="fileInput" type='file' onChange={handleFileInput} multiple hidden />
                <div>
                    <Button variant="outline-dark" onClick={handleFileUploadButton} >
                        <FontAwesomeIcon icon={faUpload} />
                    </Button>
                </div>
                <div style={{ marginTop: '10px' }}>
                    <Button variant='secondary' onClick={handleSubmission}>
                        Submit
                    </Button>
                </div>
                <div>
                    {(files.length) > 0 ? renderIcons() : null}
                </div>

            </>)
    }


    function renderIcons() {
        return (
            <div key={1}>
                {
                    Array.from(files).map((file, index) => {
                        console.log(file);
                        const ext = file.type.split('/')[1];
                        if (ext == 'plain') {
                            return (<div key={index}>
                                <FontAwesomeIcon icon={faFileLines} />
                                {file.name}
                            </div>)
                        }
                        else if (ext == 'pdf') {
                            return (
                                <div>
                                    <FontAwesomeIcon icon={faFilePdf} />
                                    {file.name}
                                </div>
                            )
                        }
                        // if not a plain text file and not a pdf, it has to be an image
                        else {
                            return (
                                <div>
                                    <FontAwesomeIcon icon={faFileImage} />
                                    {file.name}
                                </div>
                            )
                        }
                    })
                }
            </div>
        )
    }

    const handleRadioChange = (event) => setOptionForUpload(event.target.value);

    if (isLoading) {
        return (<div className={styles.design_box}>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>)
    }

    return (
        <div className={styles.design_box}>
            <AwesomeRadio handleRadioChange={handleRadioChange} />
            {isError ? (<div style={{ color: 'red' }}>Oops. Looks like an error occcured please try again</div>) :
                (<div className={styles.add_padding}>
                    {optionForUpload == 'file' ? renderFileUploadMethod() : <UrlUploader handleUrlChange={handleUrlChange} handleUrlAdd={handleUrlAdd} urlList={urlList} inputUrl={inputUrl} setUrlList={setUrlList} />}
                </div>)}
        </div>
    )
}