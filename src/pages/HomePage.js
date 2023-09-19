import Slider from '../components/Slider';
import Publicity from '../components/Ad';
import Devices from '../components/Devices';
import Experience from '../components/Experience';
import PriceTable from '../components/PriceTable';
import AboutUs from '../components/AboutUs';
import Blog from '../components/Blog';
import Trail from '../components/Trail';
import SocialMedia from '../components/SocialMedia';


const HomePage = () => {

    return (
      <div>
        <Slider />
        <Publicity />
        <Devices />
        <Experience />
        <PriceTable />
        <AboutUs />
        <Blog />
        <Trail />
        <SocialMedia />
      </div>   
    );
  }
  
  export default HomePage;