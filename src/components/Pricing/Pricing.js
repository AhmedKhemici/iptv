import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './Pricing.module.css';

const Pricing = ( props) => {
  const icon = `${process.env.PUBLIC_URL}/icon/`
  return (
    <Card className={classes.pricing}>
      <div className={classes.date}>
        <div>{props.date}</div>
      </div>
      <div className={classes.price}>
        <div>€</div>
        {props.price}
        <div>99</div>
      </div>
      <div className={classes.options}>
        <div className={classes.option}><img src='' /><span>4k, FHD, HD & SD</span></div>
        <div className={classes.option}><img src='' /><span>+18.000 Channels</span></div>
        <div className={classes.option}><img src='' /><span>+54.000 VOD</span></div>
        <div className={classes.option}><img src='' /><span>Fast And Stable Servers</span></div>
        <div className={classes.option}><img src='' /><span>All Devices Supported</span></div>
        <div className={classes.option}><img src='' /><span>Fast Delivery</span></div>
        <div className={classes.option}><img src='' /><span>7 days money back guarantee</span></div>
      </div>
      <Button className={classes.Button}>CHOOSE PLAN</Button>
      <span>Support 24/7</span>
    </Card>   
  );
}
  
export default Pricing;