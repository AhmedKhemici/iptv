import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
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
    "netflix",
    "cnbc"
  ];

  const tv2 = [
    "netflix",
    "netflix",
    "netflix",
  ];
  const [ TV, setTV] = useState(tv);
  const [ X, setX]= useState(0);
  useEffect(() => {
    // setInterval(() => {
    //     setX((x)=>{
    //       return x + props.reverse*-50;
    //     });
    //   }, 2000);
  }, []);

  useEffect(() =>{
    console.log(X);
    if(X === 100 || X === -100){
      setTV((old)=>{
        return old.concat(tv);
      });
    }
  },[X]);
  
  const direction = [props.reverse === 1 ? classes.left : classes.right];
  return (
    <div className={classes.advertise}>
      <motion.div 
        animate={{ x: X }}
        transition={{duration:1}}
        className={direction}>
          {TV.map((t)=>{
            return (
              <div>
                <img src={`${process.env.PUBLIC_URL}/img/${t}.png`} alt=''/>
              </div>
            );
            })}
      </motion.div>
    </div>
  );
}

export default Advertise;