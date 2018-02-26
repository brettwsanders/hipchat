import React, { Component } from 'react';
import './App.css';
import Banner from './Banner.jsx';
import Form from './Form.jsx';
import Output from './Output.jsx';
import * as extract from '../helpers/extractors.js'

const $ = selector => document.querySelector(selector);

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
        this._addLinkToState = this._addLinkToState.bind(this);
    }

    _addLinkToState(linkObject) {
        this.setState({
            data: {
                ...this.state.data,
                links: [
                    ...this.state.data.links,
                    linkObject
                ]
            }
        })
    }

    _handleMessage(m) {
        const mentions = extract.mentions(m);
        const emoticons = extract.emoticons(m);

        this.setState({
            message: m,
            data: {
                mentions,
                emoticons,
                links: []
            }
        });

        extract.links(m, this._addLinkToState);
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
