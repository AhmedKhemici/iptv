import classes from './Button.module.css'

const Button = ( props) => {
    const style = classes.button +" "+ props.className 
    return (
      <div className={style}>
        {props.children}
      </div>   
    );
  }
  
  export default Button;