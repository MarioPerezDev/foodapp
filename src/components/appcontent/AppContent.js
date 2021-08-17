import React from 'react';
import './AppContent.css'
import Food from '../food/Food'
import Header from '../header/Header'

function AppContent(props) {
    return (
        <div className="content">
            <Header></Header>
            <Food meals={props.meals}></Food>
        </div>
    );
}

export default AppContent;