//COMPONENTE PADRE
import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, name: 'Producto 1', price: 1000 },
        { id: 2, name: 'Producto 2', price: 2000 },
        { id: 3, name: 'Producto 3', price: 3000 },
        { id: 4, name: 'Producto 4', price: 4000 },
      ],
      cart: [],
    };
  }

  addToCart = (product) => {
    this.setState((prevState) => ({
      cart: [...prevState.cart, product],
    }));
  };

  render() {
    return (
      <div>
        <h2>Lista de Productos</h2>
        <ul>
          {this.state.products.map((product) => (
            <Product
              key={product.id}
              product={product}
              onAddToCart={this.addToCart}
            />
          ))}
        </ul>
        <h2>Carrito</h2>
        <ul>
          {this.state.cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductList;

