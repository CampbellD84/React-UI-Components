import React from 'react';
import HeaderContainer from '../HeaderComponents/HeaderContainer';
// import CardBanner from './CardBanner';
import CardContent from './CardContent';
// import FooterContainer from '../FooterComponents/Footer';

import './Card.css';


const CardContainer = () => {
    return (
        <div>
            <HeaderContainer />
            <CardContent />
        </div>
    );
}

export default CardContainer;