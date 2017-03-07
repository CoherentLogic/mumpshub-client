import React from "react";
import { Container, Header } from "semantic-ui-react";

export default class Home extends React.Component {

    constructor() {
        super();
    }

    render() {
        return(
            <div className='ui vertical masthead center aligned segment'>
                <div className='ui text container'>
                <Header as='h1'>
                    We are the bees knees
                </Header>
                </div>
                
            </div>
        );
    }
    
}