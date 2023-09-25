import classes from './BackGround.module.css'
import Container from './UI/Container';
import Button from './UI/Button';

const BackGround = () => {
  return (
      <>
        <div  className={classes['nav-bar']} />   
        <div className={classes.background}>
          <Container className={classes.element}>
            <span>Text</span>
            <Button>Test</Button>
          </Container> 
        </div>   
      </>

  );
}
  
export default BackGround;