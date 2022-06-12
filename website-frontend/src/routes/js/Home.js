// import logo from './logo.jpg';
import '../css/Home.css';
// import Contact from '../components/Contact';
import CodingSvg from '../../components/images/home-prg.svg';
import HomeCarousel from '../../components/js/HomeCarousel';
import Contact from '../../components/js/Contact';

export default function homepage() {
  return (
    <>
    <div className='homepage'>
      <div className='homepage-content'>
        <h1>The Code Breakers Logo</h1>
        <img src={CodingSvg} alt="CodingSvg" className='homepage-svg' />
      </div>
      <HomeCarousel />
      <Contact />
    </div>
    </>
  );
}