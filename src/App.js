import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import ProductList from './components/ProductList';

const initialProducts = [
  { id: 1, name: 'Laptop', price: 999, inStock: true },
  { id: 2, name: 'Phone', price: 699, inStock: false },
  { id: 3, name: 'Tablet', price: 499, inStock: true },
];

const App = () => {
  const [products, setProducts] = useState(initialProducts);

  const handleRemoveProduct = (productId) => {
    setProducts((currentProducts) =>
      currentProducts.filter((product) => product.id !== productId)
    );
  };

  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Product Dashboard
      </Typography>
      <ProductList products={products} onRemove={handleRemoveProduct} />
    </Container>
  );
};

export default App;
