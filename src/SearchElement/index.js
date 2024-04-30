import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import PdfComp from "./PdfComponent";
import ImageComp from "./ImageComponent";
import TextComp from "./TextComponent";
import HtmlComp from "./HtmlComponent";
import WordComp from "./WordComponent";
import UrlComp from "./UrlComponent";

export default function SearchElement(props) {

    const { documentId } = useParams();
    const [data, setData] = useState(null);
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        try {
            const fetchDataById = async () => {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND}/search/getDocument/${documentId}`);
                console.log(response)
                setData(response?.data?.data)
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
        const element = data
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
        else if (element.type == 'html') {
            return (
                <HtmlComp element={element} />
            )
        }
        else if (element.type.includes('wordprocessingml')) {
            return (
                <WordComp element={element} />
            )
        }
        else if (element.type.includes('url')) {
            return (
                <UrlComp element={element} />
            )
        }
    }

    return (
        <>
            <a href={`${process.env.REACT_APP_BACKEND}${data.file_loc}`} target="_blank">File Link</a>

            {renderSearchResultBasedOnType(data)}
        </>
    )

}