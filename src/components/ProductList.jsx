import React from 'react';
import { Alert, Box, Stack, Typography } from '@mui/material';
import ProductCard from './ProductCard';

const ProductList = ({ products, onRemove }) => {
  if (products.length === 0) {
    return (
      <Typography align="center" color="text.secondary">
        No products available.
      </Typography>
    );
  }

  const hasProductsInStock = products.some((product) => product.inStock);

  return (
    <Box>
      {/* Group the message and the list without adding an extra DOM node. */}
      <>
        {!hasProductsInStock && (
          <Alert severity="warning" sx={{ mb: 2 }}>
            No products are currently in stock.
          </Alert>
        )}

        <Stack spacing={2}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onRemove={onRemove}
            />
          ))}
        </Stack>
      </>
    </Box>
  );
};

export default ProductList;
