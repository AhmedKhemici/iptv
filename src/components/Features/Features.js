import Feature from './Feature';
import classes from './Features.module.css';

const Features = () => {
  const features = [
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
    <div className={classes.features}>
      {features.map((feature)=>{
        return <Feature 
                  icon={feature.icon} 
                  header={feature.header} 
                  content={feature.content} 
                />
      })}
    </div>   
  );
}
  
export default Features;