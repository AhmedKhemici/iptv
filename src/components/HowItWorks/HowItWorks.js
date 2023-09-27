import Step from './Step';
import classes from './HowItWorks.module.css'

const HowItWorks = () => {
  const steps = [
        {
          icon:'info-box-1',
          header:'1. Place your order',
          content:`Place your order by choosing your preferred 
          subscription period : 1, 3, 6 or 12 months.`
        },
        {
          icon:'info-box-2',
          header:'2. Get your account',
          content:`This process can take 15 to 30 minutes.Please 
          check your inbox and your spam folder.`
        },
        {
          icon:'info-box-3',
          header:'3. Enjoy your IPTV service!',
          content:`Enjoy all channels, films and series now!`
        },
      ]

  return (
    <>
      <h1 className={classes.header}>How does it work?</h1>
      <hr/>
      <div className={classes['how-it-works']}>
        {steps.map((step)=>{
          return <Step 
                    icon={step.icon} 
                    header={step.header} 
                    content={step.content} 
                  />
        })}
      </div>   
    </>
  );
}
  
export default HowItWorks;