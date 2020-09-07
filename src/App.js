import React from 'react';
import Cart from './Cart'; 
import Navbar from './Navbar';

 class App extends React.Component {

    handleIncreaseQty = (product) => {
      const {products} = this.state;
      const index = products.indexOf(product);
      products[index].qty+=1;
      
      this.setState({
          products:products
          //key value variable name is same so we can also do it like -- 
          //products
      });
  }

    handleDecreaseQty = (product) => {
        const {products} = this.state;

        if(product.qty==1){
            this.handleDeleteProduct(product.id);
            return;
        }

        if(product.qty<=0){
            return;
        }
        const index = products.indexOf(product);
        products[index].qty-=1;
        
        this.setState({
            products:products
        });
    }

    handleDeleteProduct = (id) => {
        const {products} =this.state;
        
        const items =products.filter((item) => 
            item.id !== id
        );

        this.setState({
            products:items
        });
    }

    getCartCount = () => {
        const {products} = this.state;
        let count=0;
       
        products.forEach(product => {
          count+=product.qty;
        });
        
        return count;
    }

    

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

  render(){
    const {products} = this.state;

    return (
      <div className="App">
        <Navbar cartCount={this.getCartCount()} />
        <Cart
          products={products}
          OnIncreaseQty={this.handleIncreaseQty}
          OnDecreaseQty={this.handleDecreaseQty} 
          OnDelete={this.handleDeleteProduct}
        />

      </div>
    );
  }
  
}

export default App;
