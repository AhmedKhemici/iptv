import BackGround from '../components/BackGround';
import Features from '../components/Features/Features';
import Advertise from '../components/Advertise';
import PriceTable from '../components/Pricing/PriceTable';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import Blog from '../components/Blog';
import Trail from '../components/Trail';
import SocialMedia from '../components/SocialMedia';


const HomePage = () => {

    return (
      <>
        <BackGround />
        <Features />
        <Advertise reverse={false} />
        <Advertise reverse={true}/>
        <PriceTable />
        <HowItWorks />
        <Blog />
        <Trail />
        <SocialMedia />
      </>
    );
  }
  
  export default HomePage;