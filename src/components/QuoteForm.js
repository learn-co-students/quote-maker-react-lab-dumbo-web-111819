import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import callbacks from '../actions/quotes';

class QuoteForm extends Component {

  state = {
    content: '',
    author: ''
  }

  handleOnChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleOnSubmit = e => {
    e.preventDefault()
    this.props.addQuote({
      ...this.state,
      id: uuid.v4(),
      votes: 0
  })
    this.setState({
      content: '',
      author: ''
    })
  }

  render() {
    console.log(this.props)
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit ={this.handleOnSubmit}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        name = 'content'
                        className="form-control"
                        value={this.state.content}
                        onChange = {this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        type="text"
                        name = 'author'
                        value={this.state.author}
                        onChange = {this.handleOnChange}
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

//add arguments to connect as needed

const mapDispatchToProps = dispatch => {
  return {
    addQuote: (quoteObj)=>dispatch(callbacks.addQuote(quoteObj))
  }
}
export default connect(null, mapDispatchToProps)(QuoteForm);
