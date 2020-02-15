// TODO: Create action creators as defined in tests
 export function addQuote(quoteInfo){
    return {
        type: 'ADD_QUOTE',
        quote: {...quoteInfo}
    }
}

 export function removeQuote(quoteId) {
    return {
        type: 'REMOVE_QUOTE',
        quoteId
    }
}

 export function upvoteQuote(quoteId){
    return {
        type: 'UPVOTE_QUOTE',
        quoteId
    }
}

 export function downvoteQuote(quoteId){
    //  console.log(quoteId)
    return {
        type: "DOWNVOTE_QUOTE",
        quoteId
    }
}


