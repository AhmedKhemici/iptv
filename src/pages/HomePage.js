import BackGround from '../components/BackGround';
import Features from '../components/Features/Features';
import Advertise from '../components/Advertise';
import PriceTable from '../components/Pricing/PriceTable';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import FAQ from '../components/FAQ/FAQ';
import Communication from '../components/Communication';
import Legal from '../components/Legal';


const HomePage = () => {

    return (
      <>
        <BackGround />
        <Features />
        <Advertise reverse={false} />
        <Advertise reverse={true}/>
        <PriceTable />
        <HowItWorks />
        <FAQ />
        <Communication />
        <Legal />
      </>
    );
  }
  
  export default HomePage;