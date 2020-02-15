import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import callbacks from '../actions/quotes'

class Quotes extends Component {

  render() {
    // console.log(this.props)
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
              {this.props.quotes.map(quote => <QuoteCard quote = {quote} removeQuote={this.props.removeQuote} upvoteQuote = {this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote}/>)}
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

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
    return{
      removeQuote: (quoteId)=> dispatch(callbacks.removeQuote(quoteId)),
      upvoteQuote: (quoteId) => dispatch(callbacks.upvoteQuote(quoteId)),
      downvoteQuote: (quoteId) => dispatch(callbacks.downvoteQuote(quoteId))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
