import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  state = {
    content:'',
    author:'',
    // votes:0
    //set up a controlled form with internal state
  }

  handleOnChange = event => {
    // console.log(event.target.value)
    // console.log(event.target.name)
    this.setState({
      [event.target.name]:event.target.value
    })
    // Handle Updating Component State
  }

  handleOnSubmit = event => {
    event.preventDefault();// Handle Form Submit event default
    const quote={...this.state,id:uuid()}     // Create quote object from state
    // console.log(quote)
    this.props.addQuote(quote)   // Pass quote object to action creator
    this.setState({
      author:'',
      content:''
    })  // Update component state to return to default state
    
    
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form onSubmit={this.handleOnSubmit} className="form-horizontal">
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        className="form-control"
                        name="content"
                        value={this.state.content}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        type="text"
                        name="author"
                        value={this.state.author}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


// const mapStateToProps = state => {
//   debugger
//   return {
//     author: state.author,
//     content: state.content
//   }
// }
//add arguments to connect as needed
// const mapDispatchToProps=(dispatch) => {
//   return{
//     addQuote: (quote) => {
//       dispatch(addQuote(quote))
//     }
//   }
// }
export default connect(null,{addQuote})(QuoteForm);
