import React from 'react';

const  Navbar = (props) => {

// since navbar has no state, we can make it a function
        return(
            <div className="Navbar"  >
                <div className="Cart-image-container">
                    <div>
                        <img src="https://image.flaticon.com/icons/svg/1170/1170678.svg" alt="cart-icon" >
                        </img>
                        <span>10</span>
                    </div>
                    
                </div>
            </div>
        )
    

}



export default Navbar;
