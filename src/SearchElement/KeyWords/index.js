

// Convert object to an array of [key, value] pairs
// let items = Object.entries(wordCounts);

// // Sort the array by value
// items.sort((a, b) => a[1] - b[1]);

// // Lowest 10 values
// const lowest10 = items.slice(0, 10);

// // Top 10 values (need to reverse since the sort was ascending)
// const top10 = items.slice(-10).reverse();

import { Badge } from "react-bootstrap";

// helper fn
function object_with_array_lengths(posting_list) {
    const object = {}
    for (const term in posting_list) {
        object[term] = (posting_list[term]).length
    }
    let items = Object.entries(object);
    items.sort((a, b) => a[1] - b[1]);
    return items
}

export default function KeyWords(props) {
    const { element } = props;
    const posting_list = element.posting_list

    const items = object_with_array_lengths(posting_list);
    const lowest_10 = items.slice(0, 10);
    const top_10 = items.slice(-10).reverse();
    return (
        <>
            <div>
                <h5>Most frequent keywords</h5>
                {
                    top_10.map(([keyword, count], index) => (
                        <Badge key={index} bg="primary" className="m-1" pill>
                            {keyword}
                        </Badge>
                    ))
                }
            </div>
            <div>
                <h5>Least frequent keywords</h5>

                {
                    lowest_10.map(([keyword, count], index) => (
                        <Badge key={index} bg="secondary" className="m-1" pill>
                            {keyword}
                        </Badge>
                    ))

                }
            </div>

        </>

    )

}