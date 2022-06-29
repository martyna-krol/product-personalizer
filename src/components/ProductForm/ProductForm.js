import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';

const ProductForm = props => {




  const handleSubmit = e => {
    e.preventDefault();
    console.log('Summary')
    console.log('==============')
    console.log('Name: ' + props.title)
    console.log('Price: ' + props.getPrice())
    console.log('Size: ' + props.currentSize)
    console.log('Color: ' + props.currentColor)
  }

  return (
      <div>
        <form onSubmit={handleSubmit}>
        <OptionSize sizes={props.sizes} setCurrentSize={props.setCurrentSize} currentSize={props.currentSize}/>
        <OptionColor currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} colors={props.colors}/>

          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    )
}

ProductForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  sizes: PropTypes.array.isRequired,
  currentSize: PropTypes.object.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  colors: PropTypes.array.isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
}; 

export default ProductForm;