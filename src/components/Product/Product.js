import styles from './Product.module.scss';
import { useState, useMemo } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import PropTypes from 'prop-types';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);

  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const newPrice = useMemo(() => {
    const found = props.sizes.find(element => element.name === currentSize);
    return props.basePrice + found.additionalPrice;
  }, [currentSize, props.basePrice, props.sizes]);

  return (
    <article className={styles.product}>

      <ProductImage title={props.title} name={props.name} currentColor={currentColor}/>

      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {newPrice}$</span>
        </header>

        <ProductForm 
        currentSize={currentSize} 
        currentColor={currentColor} 
        setCurrentColor={setCurrentColor} 
        setCurrentSize={setCurrentSize} 
        newPrice={newPrice} 
        title={props.title} 
        name={props.name} 
        sizes={props.sizes} 
        colors={props.colors}/>

      </div>
    </article>
  )
};

Product.propTypes= {
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default Product;