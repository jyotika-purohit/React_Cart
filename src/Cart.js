import React from 'react';
import Cart_item from './Cart_item';

class Cart extends React.Component{

    constructor(){
        super();
        this.state = {
            products : [
                {
                    id:1,
                    price:999,
                    title:"Watch",
                    qty:1,
                    img_url:"https://image.flaticon.com/icons/svg/819/819826.svg"
                },
                {
                    id:2,
                    price:100,
                    title:"Shoes",
                    qty:40,
                    img_url:"https://image.flaticon.com/icons/svg/819/819826.svg"
                },
                {
                    id:3,
                    price:9000,
                    title:"Laptop",
                    qty:22,
                    img_url:"https://image.flaticon.com/icons/svg/819/819826.svg"
                },
                {
                    id:4,
                    price:1000,
                    title:"Bag",
                    qty:1,
                    img_url:"https://image.flaticon.com/icons/svg/819/819826.svg"
                }
            ]
        }
    }

    render () {

        const  {products} = this.state;
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
                                    <Cart_item product={product} />
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
}

export default Cart;