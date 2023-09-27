import classes from './PriceTable.module.css'
import Pricing from './Pricing';

const PriceTable = () => {
  const PriceTable = [
    {
      date: "1 Month",
      price: "11",
    },
    {
      date: "3 Month",
      price: "21",
    },
    {
      date: "6 Month",
      price: "34",
    },
    {
      date: "12 Month",
      price: "49",
    }
  ];
  return (
    <>
      <h1 className={classes.header}>Choose your plan</h1>
      <hr/>
      <div className={classes['price-table']}>
        {PriceTable.map((pricing)=>{
          return  <Pricing
                    date={pricing.date}
                    price={pricing.price}
                  />
        })}
      </div>   
    </>
  );
}
  
  export default PriceTable;