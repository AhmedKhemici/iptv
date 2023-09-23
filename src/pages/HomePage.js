import Slider from '../components/Slider';
import Publicity from '../components/Ad';
import Devices from '../components/Devices';
import Experience from '../components/Experience';
import PriceTable from '../components/Pricing/PriceTable';
import AboutUs from '../components/AboutUs';
import Blog from '../components/Blog';
import Trail from '../components/Trail';
import SocialMedia from '../components/SocialMedia';
import Container from '../components/UI/Container';


const HomePage = () => {

    return (
      <Container>
        <Slider />
        <Publicity />
        <Devices />
        <Experience />
        <PriceTable />
        <AboutUs />
        <Blog />
        <Trail />
        <SocialMedia />
      </Container>
    );
  }
  
  export default HomePage;