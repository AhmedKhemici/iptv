import classes from './Slider.module.css'

const Slider = () => {
  const image1 = `${process.env.PUBLIC_URL}/images/slider_1.jpg`
  return (
    <>
      <div className={classes.slider}>
        <img src={image1} alt='Slide'/>
      </div>   
    </>
  );
}
  
export default Slider;