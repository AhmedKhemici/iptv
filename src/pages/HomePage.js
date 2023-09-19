import Slider from '../components/Slider/Slider';
import Publicity from '../components/Publicity/Publicity';
import Devices from '../components/Devices/Devices';
import Experience from '../components/Experience/Experience';
import PriceTable from '../components/PriceTable/PriceTable';
import AboutUs from '../components/AboutUs/AboutUs';
import Blog from '../components/Blog/Blog';
import Trail from '../components/Trail/Trail';
import SocialMedia from '../components/SocialMedia/SocialMedia';


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