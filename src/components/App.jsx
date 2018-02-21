import React, { Component } from 'react';
import './App.css';
import Banner from './Banner.jsx';
import Form from './Form.jsx';
import Output from './Output.jsx';
import * as extract from '../helpers/extractors.js'

const $ = el => document.querySelector(el);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            data: {
                mentions: [],
                emoticons: [],
                links: []
            }
        }
    }

    _handleMessage(m) {
        const mentions = extract.mentions(m);
        const emoticons = extract.emoticons(m);
        const links = extract.links(m);

        this.setState(() => ({
            message: m,
            data: {
                mentions,
                emoticons,
                links
            }
        }));
    }

    onSubmit(e) {
        e.preventDefault();
        const message = $('textarea').value;
        $('textarea').value = "";
        this._handleMessage(message);
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
                        data={this.state.data}
                    />
                </main>
            </div>
        );
    }
}

export default App;
