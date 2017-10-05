const sentence = ["The", "voyage", "of", "the", "best", "ship", "is", "a", "zigzag", "line", "of", "a", "hundred", "tacks.", "This", "is", "only", "microscopic", "criticism.", "See", "the", "line", "from", "a", "sufficient", "distance,", "and", "it", "straightens", "itself", "to", "the", "average", "tendency.", "Your", "genuine", "action", "will", "explain", "itself", "and", "will", "explain", "your", "other", "genuine", "actions", "Your", "conformity", "explains", "nothing"]
const eloquentSentence = ["Everybody", "wants", "to", "rule", "the", "world"]

const addExcitement = function (options) {
    let output = ""

    for (let index = 0; index < options.words.length; index++) {
        const ordinalPosition = index + 1
        const word = options.words[index]

        if (ordinalPosition % 3 === 0) {
            const delimitersToUser = ordinalPosition / 3
            output += word + options.delimiter.repeat(delimitersToUser)
        } else {
            output += word
        }
        output += " "
        console.log(output)
    }
}

addExcitement({ "words": sentence, "delimiter": ">" })
// addExcitement({ "words": eloquentSentence, "delimiter": "&" })
