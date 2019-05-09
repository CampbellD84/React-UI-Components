import React from 'react';
import CardBanner from './CardBanner';
import './Card.css';

const CardContent = () => {
    return (
        <div>
            <a href="https://reactjs.org" target="_blank">
            <CardBanner />
            <div className="content">
            <h4>Get Started with React</h4>
            <p>React makes it painless to create interactive UIs.
                Design simple views for each state in your application.
                <p>reactjs.org</p>
            </p>
            </div>
            </a>
        </div>
    );
}

export default CardContent;