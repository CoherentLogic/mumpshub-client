import React from 'react';
import { Jumbotron } from 'react-bootstrap';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Jumbotron>
                <img src="assets/MUMPSHub.png" alt="MUMPSHub Logo"  />
            </Jumbotron>
        );
    }
}