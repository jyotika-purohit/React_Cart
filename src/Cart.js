import React from 'react';
import Cart_item from './Cart_item';

const Cart = (props) => {
        const  {products} = props;

        // const arr = [1,2,3,4,5];
        return (
            <div className="Cart">
                <ul className="Cart-Item-List">
                    
                    {/* {arr.map((item) => {
                        return item+5;
                    })} */}

                    {products.map((product) => {
                        return (
                            <li className="Cart-Item" key={product.id}  >
                                    <Cart_item product={product} 
                                    key={product.id}
                                    OnIncreaseQty={props.OnIncreaseQty}
                                    OnDecreaseQty={props.OnDecreaseQty} 
                                    OnDelete={props.OnDelete}/>
                            </li>
                        )
                    })}

                    {/* <li className="Cart-Item" >
                        <Cart_item/>
                    </li>

                    <li  className="Cart-Item">
                        <Cart_item/>
                    </li> */}

                </ul>

            </div>
        )
    
}

export default Cart;