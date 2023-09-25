import classes from './PriceTable.module.css'
import Pricing from './Pricing';
import Container from '../UI/Container';

const PriceTable = () => {
  const PriceTable = [
    {


    },
    {

    },
    {

    }
  ];
  return (
    <>
      <h1 className={classes.header}>Choose your plan</h1>
      <Container className={classes['price-table']}>
        <Pricing />
        <Pricing />
        <Pricing />
      </Container>   
    </>
  );
}
  
  export default PriceTable;