import React, { Component } from 'react';

const Form = props => {
    return (
        <section>
            <form onSubmit={props.onSubmit}>
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

export default Form;
