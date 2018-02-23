import React, { Component } from 'react';

const Output = props => {
    const json = JSON.stringify(props.data, null, 2);
    return (
        <section>
            <pre>{json}</pre>
        </section>
    );
};

export default Output;
