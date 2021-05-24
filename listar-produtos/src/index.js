import React from 'react';
import ReactDOM from 'react-dom';
import FilterableProductTable from './components/filterableProductTable';
import './index.css';

const PRODUCTS = [
  { category: 'Artigos esportivos', price: '$49.99', stocked: true, name: 'Futebol' },
  { category: 'Artigos esportivos', price: '$9.99', stocked: true, name: 'Beisebol' },
  { category: 'Artigos esportivos', price: '$29.99', stocked: false, name: 'Basquete' },
  { category: 'Eletrônicos', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Eletrônicos', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Eletrônicos', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

ReactDOM.render(
  <React.StrictMode>
    <FilterableProductTable products={PRODUCTS} />
  </React.StrictMode>,
  document.getElementById('root')
);
