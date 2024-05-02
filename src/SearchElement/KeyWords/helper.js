export default function countPhraseOccurrences(postingList, phrase) {
    const words = phrase.split(' ');

    if (words.length === 1) {
        return postingList[words[0]] ? postingList[words[0]].length : 0;
    }

    let wordPositions = words.map(word => postingList[word] || []);

    let matches = 0;  

    for (let i = 0; i < wordPositions[0].length; i++) {
        let firstWordPosition = wordPositions[0][i];

        // Check for each word in the phrase
        for (let j = 1; j < words.length; j++) {

            // The expected position for the next word in the phrase
            let expectedPosition = firstWordPosition + j;

            // Check if the next word's positions include this expected position
            if (!wordPositions[j].includes(expectedPosition)) {
                // not found
                break;
            }
            
            // handling the last word if its matching
            if (j === words.length - 1) {
                matches++;
            }
        }
    }

    return matches;
}
