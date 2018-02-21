import React, { Component } from 'react';

class Output extends Component {
    render() {
        const json = JSON.stringify(this.props.data, null, 2);
        return (
            <section>
                <pre>{json}</pre>
            </section>
        );
    }
};

export default Output;
