import React from 'react';
import Banner from '../Banner/Banner';
import Menu from '../Menu/Menu';

// header section contains banner and top menu bar
const Header = () => {
    return (
        <div>
            <Banner></Banner>
            <Menu></Menu>
        </div>
    );
};

export default Header;