import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote} from '../actions/quotes';


class Quotes extends Component {
  // handleDownVote=(e) => {
  //   // console.log(e)
  //   downvoteQuote(e)
  // }
  // handleRemove=(e) => {
  //   // console.log(e)
  //   removeQuote(e)
  // }
  // handleUpVote=(e) => {
  //   // console.log(e)
  //   upvoteQuote(e)

    
  // }

  render() {
    let arrayOfComponents;
    console.log(this.props.quotes)
    arrayOfComponents=this.props.quotes.map(quoteObj=> <QuoteCard key={quoteObj.id} quote={quoteObj} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote} removeQuote={removeQuote}/> )
  
      return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {arrayOfComponents}
              {/* {<QuoteCard handleRemove={this.handleRemove} handleUpVote={this.handleUpVote} handleDownVote={this.handleDownVote}/>} */}
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapDispatchToProps=(dispatch) => ({
//   removeQuote: (quote) => dispatch(removeQuote(quote)),
//   upvoteQuote: (quote) => dispatch(upvoteQuote(quote)), 
//   downvoteQuote: (quote) => dispatch(downvoteQuote(quote)),
  // return{
  //   removeQuote:(quote) => {
  //     dispatch(removeQuote(quote))
      
  //   },
  //   upvoteQuote:(quote) => {
  //     dispatch(upvoteQuote(quote))
      
  //   },
  //   downvoteQuote:(quote) => {
  //     dispatch(downvoteQuote(quote))
      
  //   }
  // }
  
// })

const mapStateToProps=(state) => {
  return{
    quotes: state.quotes  //quotes is a key
  }
}


//add arguments to connect as needed
export default connect(mapStateToProps,{ removeQuote, upvoteQuote, downvoteQuote})(Quotes);
