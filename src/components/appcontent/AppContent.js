import React from 'react';
import './AppContent.css'
import Food from '../food/Food'
import Header from '../header/Header'

function AppContent() {
    return (
        <React.Fragment>
            <Header></Header>
            <Food></Food>
        </React.Fragment>
    );
}

export default AppContent;