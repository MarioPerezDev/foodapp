import React from 'react';
import './AppContent.css'
import Food from '../food/Food'

function AppContent() {
    return (
        <div className="app-content">
            <Header></Header>
            <Food></Food>
        </div>
    );
}

export default AppContent;