import React from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { Link } from 'react-router';

export default class Navigation extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeItem: null
        };
    }


    render() {

        const { activeItem } = this.state;

        return(
            <Menu>
                <Menu.Item
                    as={Link}
                    to="home"
                    name="home">
                    <img src="assets/MUMPSHub.png" />
                </Menu.Item>
                <Menu.Item 
                    as={Link}
                    to="signin"
                    name='logIn'>Log In or Register</Menu.Item>
                <Menu.Item position='right'>
                    <Input className='icon' icon='search' placeholder='Search packages...' />
                </Menu.Item>
            </Menu>                


        );
    }
}