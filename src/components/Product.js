//COMPONENTE HIJO
import React from 'react';

function Product({ product, onAddToCart }) {
  return (
    <li>
      {product.name} - ${product.price}
      <button onClick={() => onAddToCart(product)}>Agregar al carrito</button>
    </li>
  );
}

export default Product;
