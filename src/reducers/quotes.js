export default (state = [], action) => {
  let foundQuote;
  let index;
  let newState = []
  switch(action.type){
    case 'ADD_QUOTE':
      return [...state, action.quote]
      
    case 'REMOVE_QUOTE':
      newState = [...state].filter(quote => quote.id !== action.quoteId)
      return newState

    case "DOWNVOTE_QUOTE":
      foundQuote = state.find(quote => quote.id === action.quoteId)
      if(foundQuote.votes > 0){
        index = state.indexOf(foundQuote)
        foundQuote.votes -= 1
        newState = [...state]
        newState[index] = foundQuote
        return newState
      }else{
        return state
      }

    case 'UPVOTE_QUOTE':
      foundQuote = state.find(quote => quote.id === action.quoteId)
      index = state.indexOf(foundQuote)
      foundQuote.votes += 1
      newState = [...state]
      newState[index] = foundQuote
      return newState

    default:
      return state;

  }
}
