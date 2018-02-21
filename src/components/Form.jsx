import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <section>
                <form onSubmit={this.props.onSubmit}>
                    <textarea
                        autoFocus
                        placeholder="Message here..."
                    ></textarea>
                    <input type="submit" />
                </form>
            </section>
        );
    }
};

export default Form;
