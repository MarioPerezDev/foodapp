import React from 'react';
import './AppContent.css'
import Food from '../food/Food'
import Header from '../header/Header'

function AppContent(props) {
    function addNewItemToCart(id){
        props.onAddItemToCart(id);
    }
    return (
        <div className="content">
            <Header></Header>
            <Food meals={props.meals}
            addNewItemToCart={addNewItemToCart}></Food>
        </div>
    );
}

export default AppContent;