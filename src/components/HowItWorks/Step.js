import classes from './Step.module.css'

const Step = ( props) => {
  
  return (
    <div className={classes.step}>
        <img src={`${process.env.PUBLIC_URL}/img/${props.icon}.png`} alt="image"/>
        <h1>{props.header}</h1>
        <span>{props.content}</span>
    </div>
  );
  }
  
  export default Step;