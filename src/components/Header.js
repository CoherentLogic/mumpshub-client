import React from 'react';
import Navigation from './Navigation';


export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Navigation />            
            </div>
        );
    }
}