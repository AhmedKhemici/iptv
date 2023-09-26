import Step from './Step';
import Container from '../UI/Container';
import classes from './HowItWorks.module.css'

const HowItWorks = () => {
  const steps = [
        {
          icon:'care',
          header:'Channels from 115 countries worldwide',
          content:`You can watch TV
          channels from around the world 
          (Netherlands / Belgium / Germany / UK 
          / Spain / Portugal / Poland / Italy 
          / Israel / Ex-Yu / Hindi / Arabic 
          / Turkey…)`
        },
        {
          icon:'wallet',
          header:'7 days money back guarantee',
          content:`Within 7 days of your purchase you 
          have the option to cancel our IPTV subscription 
          if you are not satisfied. Then you will receive 
          a full refund from us.`
        },
        {
          icon:'happy-face',
          header:'High Quality HD/FHD/4K/8K',
          content:`We offer all image qualities to view our 
          iptv service everywhere, regardless of your network 
          speed on: Mobile / TV / Android box / PC …
          `
        },
      ]

  return (
    <>
      <h1 className={classes.header}>How does it work?</h1>
      <hr/>
      <Container className={classes['how-it-works']}>
        {steps.map((step)=>{
          return <Step 
                    icon={step.icon} 
                    header={step.header} 
                    content={step.content} 
                  />
        })}
      </Container>   
    </>
  );
}
  
export default HowItWorks;