import classes from './BackGround.module.css'
import Button from './UI/Button';

const BackGround = () => {
  return (
      <>
        <div  className={classes['nav-bar']} />   
        <div className={classes.background}>
          <div className={classes.element}>
            <span>Text</span>
            <Button>Test</Button>
          </div> 
        </div>   
      </>

  );
}
  
export default BackGround;