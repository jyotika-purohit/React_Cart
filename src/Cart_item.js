import React from 'react';

//we (class CartItem) will inherit from a class "Component" inside the "React" package

class CartItem extends React.Component {

    increaseQuantity = () => {   //arrow func binds the val of this with the instance of this class
        
        //way 1  -- shallow merging -- used in cases in case like title
        // this.setState({
        //     qty:this.state.qty+1
        // });

        //way 2 -- shallow merging --- use this when prev state is req and is to be changed
        this.setState((prevState) => {
            return {
                qty:prevState.qty+1
            }
        });
    }

    constructor(){
        super(); //calls constructor of parent class ie;"Component" in react
        this.state = {
            title:'Phone',
            price:999,
            qty:1,
            img_url:"https://image.flaticon.com/icons/svg/819/819826.svg"
        }

        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }

    render () {
        const { price,qty,img_url,title } = this.state;
        return (
            <div id="cart-item-container">
                <div id="cart-item-img-container">
                    <img src={img_url} ></img>
                </div>
                <div id="cart-item-description-container">
                    <div id="title">
                        <h3 style={{color:'orangered'}} >{title}</h3>
                    </div>
                    <div id="price">
                        <p>{price}</p>
                    </div>
                    <div id="qty">
                        <p>{qty}</p>
                    </div>
                    <div id="item-qty-edit-buttons">
                        
                        <img alt="increase-btn" className="qty-increase" 
                        onClick={this.increaseQuantity.bind(this) } 
                        src="https://image.flaticon.com/icons/svg/864/864378.svg" style={styles.button_image} ></img>
                        
                        <img src="https://image.flaticon.com/icons/svg/864/864373.svg" style={styles.button_image}></img>
                        <img src="https://image.flaticon.com/icons/svg/1214/1214428.svg" style={styles.button_image}></img>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}


const styles = {
    button_image:{
        heigth:30,
        width:30,
        margin:5
    }
}

export default CartItem;