import React, { Component } from 'react';
import './App.css';
import Banner from './Banner.jsx';
import Form from './Form.jsx';
import Output from './Output.jsx';

const $ = el => document.querySelector(el);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mentions: [],
            emoticons: [],
            links: []
        }
    }


    onSubmit(e) {
        e.preventDefault();
        const message = $('textarea').value;
        $('textarea').value = "";
    }

    render() {
        return (
            <div>
                <Banner />
                <main>
                    <Form
                        onSubmit={e => this.onSubmit(e)}
                    />
                    <Output
                        data={this.state}
                    />
                </main>
            </div>
        );
    }
}

export default App;
