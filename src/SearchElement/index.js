import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { pdfjs } from 'react-pdf';
import PdfComp from "./PdfComponent";
import ImageComp from "./ImageComponent";
import TextComp from "./TextComponent";


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

export default function SearchElement(props) {

    const { documentId } = useParams();
    const [data, setData] = useState(null);
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        try {
            const fetchDataById = async () => {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND}/search/getDocument/${documentId}`);
                setData(response.data)
                setLoading(false)
                console.log(data)
            }
            fetchDataById()
        } catch (err) {
            setError(true)
        }

    }, [])

    if (isLoading) return 'Loading..'

    if (isError) return 'Oops! Looks like an error occured, please try again later.'

    function renderSearchResultBasedOnType(res) {
        const element = res.data[0]._source;
        if (element.type == 'pdf') {
            return (
                <PdfComp element={element} />
            )
        }
        else if (element.type == 'image') {
            return (
                <ImageComp element={element} />
            )
        }
        else if (element.type == 'plain') {
            return (
                <TextComp element={element} />
            )
        }
    }

    return (
        <>
            {renderSearchResultBasedOnType(data)}
        </>
    )

}