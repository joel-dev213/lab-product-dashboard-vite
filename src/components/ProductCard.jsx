import React from 'react';
import { Button, Chip, Typography } from '@mui/material';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove }) => {
  const cardClassName = [
    styles.productCard,
    product.inStock ? styles.inStock : `${styles.outOfStock} outOfStockClass`,
  ].join(' ');

  return (
    <div className={cardClassName}>
      {/* Fragment keeps these elements grouped without a wrapper node. */}
      <>
        <Typography variant="h6" component="h3">
          {product.name}
        </Typography>
        <Typography component="p" className={styles.price}>
          ${product.price}
        </Typography>
        <Chip
          label={product.inStock ? 'In Stock' : 'Out of Stock'}
          color={product.inStock ? 'success' : 'error'}
          size="small"
        />
      </>

      {onRemove && (
        <Button
          variant="outlined"
          color="error"
          size="small"
          onClick={() => onRemove(product.id)}
          sx={{ mt: 1, textTransform: 'none', borderRadius: 2 }}
        >
          Remove
        </Button>
      )}
    </div>
  );
};

export default ProductCard;
