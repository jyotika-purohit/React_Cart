import React from 'react';

//we (class CartItem) will inherit from a class "Component" inside the "React" package

class CartItem extends React.Component {
    render () {
        return (
            <div id="cart-item-container">
                <div id="cart-item-img-container">
                    <img src="https://image.flaticon.com/icons/svg/819/819826.svg" ></img>
                </div>
                <div id="cart-item-description-container">
                    <div id="title">
                        <h3>Title</h3>
                    </div>
                    <div id="price">
                        <p>100</p>
                    </div>
                    <div id="qty">
                        <p>1</p>
                    </div>
                    <div id="item-qty-edit-buttons">
                        <img src="https://image.flaticon.com/icons/svg/864/864378.svg"></img>
                        <img src="https://image.flaticon.com/icons/svg/864/864373.svg"></img>
                        <img src="https://image.flaticon.com/icons/svg/1214/1214428.svg"></img>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

export default CartItem;