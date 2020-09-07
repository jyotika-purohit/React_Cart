import React from 'react';

//we (class CartItem) will inherit from a class "Component" inside the "React" package

class CartItem extends React.Component {

    // increaseQuantity = () => {   //arrow func binds the val of this with the instance of this class
        
        // setstate is async in nature and so we don't know when will it get executed.
        // so whenever we want to use setstate only when it's updated so we use : callback w it

        //way 1  -- shallow merging -- used in cases in case like title
        //in this way batching is done and last setState in case of multiple will be executed! also comp will be rendered just once and batching will be done 
        // this.setState({
        //     qty:this.state.qty+1
        // } , () => {} );  /////// Callback

        //way 2 -- shallow merging --- use this when prev state is req and is to be changed
        // here, the setstae function is called one after the other and the prevstate is kept upto date & in this state also batching will be done and comp will be rendered just once
    //     this.setState((prevState) => {
    //         return {
    //             qty:prevState.qty+1
    //         }
    //     });
    // }

    // decreaseQuantity = () => {   //arrow func binds the val of this with the instance of this class
        
        //way 1  -- shallow merging -- used in cases in case like title
        // this.setState({
        //     qty:this.state.qty-1
        // });

        //way 2 -- shallow merging --- use this when prev state is req and is to be changed
    //     this.setState((prevState) => {

    //         if(prevState.qty == 0){
    //             return {
    //                 qty:prevState.qty
    //             };
    //         }

    //         return {
    //             qty:prevState.qty-1
    //         }
    //     });
    // }

    

    // constructor(){
        
    //     super(); //calls constructor of parent class ie;"Component" in react
        // this.state = {
        //     title:'Phone',
        //     price:999,
        //     qty:1,
        //     img_url:"https://image.flaticon.com/icons/svg/819/819826.svg"
        // }

        // this.increaseQuantity = this.increaseQuantity.bind(this);
    // }

    render () {
        // const { price,qty,img_url,title } = this.state;
        const { price,qty,img_url,title} = this.props.product;

        const {OnIncreaseQty,OnDecreaseQty,OnDelete,product} = this.props;

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
                        // onClick={this.increaseQuantity.bind(this) } 
                        onClick={
                            () => OnIncreaseQty(product)
                        }
                        src="https://image.flaticon.com/icons/svg/864/864378.svg" style={styles.button_image} ></img>
                        
                        <img alt="decrease-btn" className="qty-decrease" 
                        onClick={
                            () => OnDecreaseQty(product)
                        } 
                        src="https://image.flaticon.com/icons/svg/864/864373.svg" style={styles.button_image}></img>
                        
                        <img alt="delete-btn" className="delete-product"
                        onClick = {
                            () =>OnDelete(product.id)
                        }
                        src="https://image.flaticon.com/icons/svg/1214/1214428.svg" style={styles.button_image}></img>
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
