import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <section>
                <form onSubmit={this.props.onSubmit}>
                    <textarea
                        autoFocus
                        placeholder="Message here..."
                        defaultValue="@sup (nm) ok nice (yupppp) @lol http://google.com reddit.com"
                    ></textarea>
                    <input type="submit" />
                </form>
            </section>
        );
    }
};

export default Form;
