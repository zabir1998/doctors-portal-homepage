import React from 'react';
import BusinessInfo from '../BussinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <div class="header-container">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;