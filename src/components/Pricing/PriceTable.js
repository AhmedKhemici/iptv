import classes from './PriceTable.module.css'
import Pricing from './Pricing';

const PriceTable = () => {
    return (
      <div className={classes['price-table']}>
        <Pricing />
        <Pricing />
        <Pricing />
      </div>   
    );
  }
  
  export default PriceTable;