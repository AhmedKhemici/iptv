import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './Pricing.module.css';

const Pricing = () => {
    return (
      <Card className={classes.pricing}>
        <div className={classes.date}>

        </div>
        <div className={classes.price}>
            11 Eur
        </div>
        <div className={classes.options}>
          
        </div>
        <Button className={classes.Button}>CHOOSE PLAN</Button>
        <span>Support 24/7</span>
      </Card>   
    );
  }
  
  export default Pricing;