import classes from './Card.module.css'

const Card = ( props) => {
  const style = classes.Card + [!props.className?'':' '+props.className];
  return (
      <div className={style}>
        {props.children}
      </div>   
    );
  }
  
  export default Card;