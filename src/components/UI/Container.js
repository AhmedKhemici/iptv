import classes from './Container.module.css'

const Container = ( props) => {
  const style = classes.container + [!props.className?'':' '+props.className];
    return (
      <div className={style}>
        {props.children}
      </div>   
    );
  }
  
  export default Container;