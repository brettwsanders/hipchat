import React, { Component } from 'react';
import './App.css';
import Banner from './Banner.jsx';
import Form from './Form.jsx';
import Output from './Output.jsx';

class App extends Component {
  render() {
    return (
        <div>
        <Banner />
            <main className="App">
                <Form />
                <Output />
            </main>
        </div>
    );
  }
}

export default App;
