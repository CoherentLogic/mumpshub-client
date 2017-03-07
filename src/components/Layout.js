import React from 'react';
import Header from './Header';
import '../app.css';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false
        };
    }

    render() {
        return(
            <div>
                <Header />
                {this.props.children}
            </div>
        );
    }
}