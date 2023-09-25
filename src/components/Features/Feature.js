import classes from './Feature.module.css'

const Feature = ( props) => {
  return (
    <div className={classes.feature}>
      <img src={`${process.env.PUBLIC_URL}/img/${props.icon}.png`} alt="image"/>
      <h1>{props.header}</h1>
      <span>{props.content}</span>
    </div>   
  );
}
  
export default Feature;