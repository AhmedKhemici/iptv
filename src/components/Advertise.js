import classes from './Advertise.module.css'

const Advertise = ( props) => {
  const tv = [
    "netflix",
    "cnbc",
    "fox",
    "prime",
    "hbo",
    "netflix",
    "cnbc",
    "fox",
    "prime",
    "hbo",
    "netflix",
    "cnbc",
    "fox",
    "prime",
    "hbo",
  ]
  const direction = [props.reverse === true ? classes.left : classes.right]
  return (
    <div className={classes.advertise}>
      <div className={direction}>
        {tv.map((t)=>{
          return (
            <div>
              <img src={`${process.env.PUBLIC_URL}/img/${t}.png`} alt=''/>
            </div>
          );
          })}
      </div>   
    </div>
  );
}

export default Advertise;