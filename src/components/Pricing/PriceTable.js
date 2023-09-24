import classes from './PriceTable.module.css'
import Pricing from './Pricing';
import Container from '../UI/Container';

const PriceTable = () => {
    return (
      <Container className={classes['price-table']}>
        <Pricing />
        <Pricing />
        <Pricing />
      </Container>   
    );
  }
  
  export default PriceTable;