import classes from './Slider.module.css'
import Container from './UI/Container';
import Button from './UI/Button';

const Slider = () => {
  return (
      <div className={classes.slider}>
        <Container className={classes.element}>
          <span>Text</span>
          <Button>Test</Button>
        </Container>
      </div>   
  );
}
  
export default Slider;