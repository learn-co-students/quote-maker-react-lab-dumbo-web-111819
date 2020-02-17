import React, { Component } from 'react';
import QuoteForm from './components/QuoteForm';
// import QuoteCard from './components/QuoteCard'
import Quotes from './containers/Quotes'

class App extends Component {
  
  render() {
    console.log(this.props)
    return (
      <div className="container-fluid">
        <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
          <h1>Quote Maker</h1>
        </div>
        <hr />
          <div>
            {/* {<h2> QUOTES</h2>} */}
            {<QuoteForm/>}
            {/* {<QuoteCard/>} */}
            {<Quotes/>}
        {/*
          TODO:

          Render QuoteForm and Quotes Components
         */}
          </div>
      </div>
    );
  }
}

export default App;
